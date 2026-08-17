// Mirror the docs.frappe.io subtrees named in pins.json as markdown.
//
// Why crawl at all: docs.frappe.io is a Frappe Wiki site, so page content lives in that
// site's database. frappe/frappe_docs (the old markdown repo) was archived in Dec 2021 and
// the Wiki Page REST endpoint is permission-gated. sitemap.xml is the only complete index,
// and every page carries the body in #wiki-content plus an edit date in #wiki-last-updated.
//
// Re-runs are diffable: a page whose content hash is unchanged is rewritten byte-identically,
// so `git status` after a sync shows exactly which upstream pages actually moved.

import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MIRROR = path.join(ROOT, "mirror");
const CONCURRENCY = 4;
// A wiki 404 renders a small Frappe Builder page rather than returning a 404 status, so a
// suspiciously short body is the only reliable detector. Real pages start around 1 KB.
const MIN_CONTENT_BYTES = 200;

const pins = JSON.parse(await readFile(path.join(ROOT, "pins.json"), "utf8"));
const ORIGIN = pins.mirror.origin;
const SUBTREES = pins.mirror.subtrees;

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});
turndown.use(gfm);
// The wiki emits <pre> without a language class, so a fence is all we can honestly produce.
// Keep the content verbatim rather than guessing a language and mislabelling shell as python.
turndown.addRule("bareFence", {
  filter: (node) => node.nodeName === "PRE",
  replacement: (_content, node) => `\n\n\`\`\`\n${node.textContent.replace(/\n+$/, "")}\n\`\`\`\n\n`,
});

async function fetchSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function selectUrls(all) {
  const seen = new Set();
  const out = [];
  for (const url of all) {
    if (!url.startsWith(ORIGIN + "/")) continue;
    const route = url.slice(ORIGIN.length + 1);
    if (!SUBTREES.some((s) => route.startsWith(s))) continue;
    if (seen.has(route)) continue;
    seen.add(route);
    out.push({ url, route });
  }
  return out.sort((a, b) => a.route.localeCompare(b.route));
}

// Links and images in wiki content are site-relative. Rewriting them to absolute URLs keeps
// a mirrored page useful when read in isolation, which is how the MCP server serves it.
function absolutise($, node) {
  for (const el of node.find("a[href]").toArray()) {
    const href = $(el).attr("href");
    if (href?.startsWith("/")) $(el).attr("href", ORIGIN + href);
  }
  for (const el of node.find("img[src]").toArray()) {
    const src = $(el).attr("src");
    if (src?.startsWith("/")) $(el).attr("src", ORIGIN + src);
  }
}

// A transient fetch failure would otherwise be indistinguishable from a page that no longer
// exists, quietly shrinking the mirror on a flaky run. Retry the recoverable classes; a 404
// is upstream's answer and is recorded as-is.
//
// Some sitemap entries are broken upstream in ways no retry fixes — notably a handful that
// 301 to themselves forever (e.g. erpnext/user/manual/en/bank-reconciliation →
// /erpnext/bank-reconciliation → itself). Those are labelled as upstream defects rather than
// network errors, so `npm run verify` can still fail loudly on flakiness that IS ours.
class UpstreamDefect extends Error {}

async function fetchWithRetry(url, attempts = 3) {
  let last;
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { headers: { "user-agent": "fsm-erpnext-docs-mirror" } });
      if (res.ok || res.status === 404) return res;
      // 5xx on a wiki route that never renders is upstream's problem, not a flaky hop.
      if (res.status >= 500 && i === attempts - 1) throw new UpstreamDefect(`upstream http ${res.status}`);
      last = new Error(`http ${res.status}`);
    } catch (err) {
      if (err instanceof UpstreamDefect) throw err;
      const cause = err?.cause?.message ?? "";
      if (/redirect count exceeded/i.test(cause)) {
        throw new UpstreamDefect("upstream redirect loop");
      }
      // Some routes redirect to a protocol-relative `//erpnext/...`, which resolves per spec
      // to the host `erpnext` and fails DNS. Upstream meant `/erpnext/...`. The intent is
      // guessable, but a knowledge base that exists to stop confident-but-wrong answers is
      // the wrong place to rewrite someone else's redirect - so record it and move on.
      if (/ENOTFOUND/i.test(cause)) {
        throw new UpstreamDefect(`upstream bad redirect target (${cause.replace(/^getaddrinfo\s*/, "")})`);
      }
      last = err;
    }
    await new Promise((r) => setTimeout(r, 500 * 2 ** i));
  }
  throw last;
}

async function crawlOne({ url, route }) {
  const res = await fetchWithRetry(url);
  if (!res.ok) return { route, url, skipped: `http ${res.status}` };
  const $ = cheerio.load(await res.text());

  const content = $("#wiki-content");
  if (content.length === 0) return { route, url, skipped: "no #wiki-content" };
  absolutise($, content);

  const html = content.html() ?? "";
  const body = turndown.turndown(html).trim();
  if (body.length < MIN_CONTENT_BYTES) return { route, url, skipped: `thin (${body.length}b)` };

  const title = ($("title").text() || route.split("/").pop()).trim();
  const updated = $("#wiki-last-updated").attr("data-timestamp") ?? null;
  const sha256 = createHash("sha256").update(body).digest("hex");

  // Front matter carries provenance so a reader can always tell how stale a claim is, and
  // that this is mirrored prose rather than something read out of source.
  const md = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `source_url: ${url}`,
    updated ? `upstream_updated: ${JSON.stringify(updated)}` : null,
    `mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)`,
    "---",
    "",
    `# ${title}`,
    "",
    body,
    "",
  ].filter((l) => l !== null).join("\n");

  const rel = `${route.replace(/\/$/, "")}.md`;
  const dest = path.join(MIRROR, rel);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, md, "utf8");
  return { route, url, path: rel, title, upstream_updated: updated, bytes: body.length, sha256 };
}

async function pool(items, worker, size) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (true) {
        const i = next++;
        if (i >= items.length) return;
        try {
          results[i] = await worker(items[i]);
        } catch (err) {
          results[i] = { ...items[i], skipped: String(err?.message ?? err) };
        }
        const done = results.filter(Boolean).length;
        if (done % 50 === 0) process.stderr.write(`  ${done}/${items.length}\n`);
      }
    }),
  );
  return results;
}

console.error("fetching sitemap...");
const urls = selectUrls(await fetchSitemap());
console.error(`selected ${urls.length} pages across ${SUBTREES.length} subtrees`);

// Rebuild from scratch so pages deleted upstream disappear here instead of lingering as
// stale answers the MCP server would happily serve.
if (existsSync(MIRROR)) await rm(MIRROR, { recursive: true });
await mkdir(MIRROR, { recursive: true });

const results = await pool(urls, crawlOne, CONCURRENCY);
const pages = results.filter((r) => r && !r.skipped);
const skipped = results.filter((r) => r?.skipped);

const manifest = {
  origin: ORIGIN,
  subtrees: SUBTREES,
  crawled_at: new Date().toISOString().slice(0, 10),
  note: "docs.frappe.io is a Frappe Wiki site; content is not git-backed. Framework docs stop at v15 - there is no v16 tree upstream. For v16 behaviour, prefer index/ and grep_source over anything here.",
  page_count: pages.length,
  skipped_count: skipped.length,
  pages: pages
    .map(({ path: p, url, title, upstream_updated, bytes, sha256 }) => ({
      path: p, url, title, upstream_updated, bytes, sha256,
    }))
    .sort((a, b) => a.path.localeCompare(b.path)),
  skipped: skipped.map(({ route, skipped: why }) => ({ route, reason: why })),
};
await writeFile(path.join(MIRROR, "_manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");

console.error(`\nmirrored ${pages.length} pages, skipped ${skipped.length}`);
for (const s of skipped.slice(0, 15)) console.error(`  skip ${s.route} - ${s.skipped}`);
if (pages.length === 0) {
  console.error("ERROR: mirrored nothing - the page markup probably changed.");
  process.exit(1);
}
