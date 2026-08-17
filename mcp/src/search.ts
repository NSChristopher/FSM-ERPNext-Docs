// BM25 full-text search over the mirrored + vendored markdown.
//
// Pure JS on purpose: the corpus is ~1,300 small files, so indexing at first query costs
// well under a second and there is no build artifact that can go stale against the mirror.

import { pages, type DocPage } from "./data.js";

const STOP = new Set([
  "the", "a", "an", "and", "or", "of", "to", "in", "is", "it", "for", "on", "as", "at",
  "by", "be", "this", "that", "with", "you", "your", "we", "are", "if", "can", "will", "from",
]);

const tokenize = (s: string): string[] =>
  s.toLowerCase().match(/[a-z0-9_]{2,}/g)?.filter((t) => !STOP.has(t)) ?? [];

interface Doc {
  page: DocPage;
  len: number;
  tf: Map<string, number>;
  titleTokens: Set<string>;
}

let index: { docs: Doc[]; df: Map<string, number>; avgLen: number } | null = null;

function build() {
  const docs: Doc[] = [];
  const df = new Map<string, number>();
  for (const page of pages()) {
    const tokens = tokenize(page.body);
    const tf = new Map<string, number>();
    for (const t of tokens) tf.set(t, (tf.get(t) ?? 0) + 1);
    for (const t of tf.keys()) df.set(t, (df.get(t) ?? 0) + 1);
    docs.push({ page, len: tokens.length, tf, titleTokens: new Set(tokenize(page.title)) });
  }
  const avgLen = docs.reduce((a, d) => a + d.len, 0) / Math.max(1, docs.length);
  index = { docs, df, avgLen };
  return index;
}

export interface Hit {
  path: string;
  title: string;
  url: string | null;
  upstream_updated: string | null;
  corpus: "mirror" | "vendor";
  score: number;
  snippet: string;
}

/** A window of body text around the best-matching term, for judging relevance without opening the page. */
function snippet(body: string, terms: string[]): string {
  const hay = body.toLowerCase();
  let at = -1;
  for (const t of terms) {
    const i = hay.indexOf(t);
    if (i !== -1 && (at === -1 || i < at)) at = i;
  }
  if (at === -1) at = 0;
  const start = Math.max(0, at - 120);
  return (start > 0 ? "…" : "") + body.slice(start, start + 320).replace(/\s+/g, " ").trim() + "…";
}

export function searchDocs(
  query: string,
  opts: { pathPrefix?: string; limit?: number } = {},
): Hit[] {
  const idx = index ?? build();
  const terms = [...new Set(tokenize(query))];
  if (terms.length === 0) return [];

  const k1 = 1.5;
  const b = 0.75;
  const N = idx.docs.length;
  const scored: Hit[] = [];

  for (const doc of idx.docs) {
    if (opts.pathPrefix && !doc.page.path.startsWith(opts.pathPrefix)) continue;
    let score = 0;
    let matched = 0;
    for (const t of terms) {
      const f = doc.tf.get(t) ?? 0;
      if (f === 0) continue;
      matched++;
      const n = idx.df.get(t) ?? 0;
      const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
      score += idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * doc.len) / idx.avgLen)));
      // A term in the title is a much stronger signal than the same term in prose.
      if (doc.titleTokens.has(t)) score += idf * 1.6;
    }
    if (matched === 0) continue;
    // Reward pages matching more of the query, so a page hitting every term outranks one
    // that merely repeats a single common term.
    score *= matched / terms.length;
    scored.push({
      path: doc.page.path,
      title: doc.page.title,
      url: doc.page.url,
      upstream_updated: doc.page.upstream_updated,
      corpus: doc.page.corpus,
      score: Number(score.toFixed(3)),
      snippet: snippet(doc.page.body, terms),
    });
  }

  return scored.sort((a, b2) => b2.score - a.score).slice(0, opts.limit ?? 10);
}
