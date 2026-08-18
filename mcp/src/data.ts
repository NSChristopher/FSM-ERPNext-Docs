// Lazy accessors over the generated index/ files and the pinned source trees.
//
// Everything is loaded on first use and cached for the process lifetime: the indexes are a
// few MB and the server is long-lived, so paying once beats re-reading per call.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

// The repo root is resolved from this file's location (mcp/dist/data.js -> ../..), and can be
// overridden so the server works from a checkout anywhere on disk.
export const ROOT = process.env.FSM_DOCS_ROOT
  ? path.resolve(process.env.FSM_DOCS_ROOT)
  : path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "..");

/** Apps a tenant site actually runs. "The platform has this" means these. */
export const APPS = ["frappe", "erpnext"] as const;
/**
 * Apps we do NOT install, indexed so a miss can distinguish "nothing in the Frappe ecosystem
 * does this" from "not on your bench, but hrms ships it". Conflating those two is the failure
 * this repo exists to prevent, so `installed` is carried on every record and never dropped.
 */
export const AVAILABLE_APPS = ["hrms", "crm", "helpdesk", "press"] as const;
export type App = (typeof APPS)[number];
export type AnyApp = App | (typeof AVAILABLE_APPS)[number];

export const isInstalled = (app: string): app is App => (APPS as readonly string[]).includes(app);

export interface DocField {
  fieldname: string;
  fieldtype: string;
  label: string | null;
  reqd?: 1;
  unique?: 1;
  options?: string;
  read_only?: 1;
  hidden?: 1;
  default?: unknown;
  set_only_once?: 1;
}

export interface DocType {
  name: string;
  app: AnyApp;
  /** 1 = shipped by an app the tenant runs. 0 = exists upstream but is not on the bench. */
  installed: number;
  module: string | null;
  istable: number;
  issingle: number;
  is_submittable: number;
  is_tree: number;
  is_virtual: number;
  autoname: string | null;
  naming_rule: string | null;
  title_field: string | null;
  track_changes: number;
  track_seen: number;
  reqd_fields: string[];
  link_fields: { fieldname: string; to: string | null }[];
  child_tables: { fieldname: string; doctype: string | null }[];
  field_count: number;
  layout_field_count: number;
  fields: DocField[];
  permissions: Record<string, unknown>[];
  links: { link_doctype: string; link_fieldname: string; group: string | null }[];
  json_path: string;
  controller_path: string | null;
}

export interface WhitelistMethod {
  name: string;
  app: App;
  dotted_path: string | null;
  kind: "module_function" | "document_method";
  allow_guest: number;
  methods: string[];
  params: string[];
  file: string;
  line: number;
}

export interface HookKey {
  hook: string;
  consumed_by: { app: App; file: string; line: number }[];
}

function readJson<T>(rel: string): T {
  const full = path.join(ROOT, rel);
  if (!existsSync(full)) {
    throw new Error(
      `missing ${rel}. Run \`npm run sync && npm run build:index\` in ${ROOT} to generate it.`,
    );
  }
  return JSON.parse(readFileSync(full, "utf8")) as T;
}

let _doctypes: DocType[] | null = null;
/** Every indexed DocType, installed and available alike. Filter on `.installed`. */
export function doctypes(): DocType[] {
  if (!_doctypes) {
    _doctypes = [...APPS, ...AVAILABLE_APPS].flatMap(
      (app) => readJson<{ doctypes: DocType[] }>(`index/doctypes.${app}.json`).doctypes,
    );
  }
  return _doctypes;
}

/** Why a non-installed app is indexed at all, for explaining an "available" hit. */
export function availableAppNote(app: string): string {
  const p = pins() as unknown as { available?: Record<string, { ref: string; why: string }> };
  return p.available?.[app]?.why ?? "";
}

let _whitelist: WhitelistMethod[] | null = null;
export function whitelist(): WhitelistMethod[] {
  if (!_whitelist) _whitelist = readJson<{ methods: WhitelistMethod[] }>("index/whitelist.json").methods;
  return _whitelist;
}

let _hooks: HookKey[] | null = null;
export function hooks(): HookKey[] {
  if (!_hooks) _hooks = readJson<{ hooks: HookKey[] }>("index/hooks.json").hooks;
  return _hooks;
}

let _events: Record<string, unknown> | null = null;
export function controllerEvents(): Record<string, unknown> {
  if (!_events) _events = readJson<Record<string, unknown>>("index/controller-events.json");
  return _events;
}

// `source` is the production/CI pin; `devcontainer` is what local dev runs, deliberately behind.
let _pins: { source: Record<App, { tag: string }>; devcontainer: Record<App, { tag: string }> } | null = null;
export function pins() {
  if (!_pins) _pins = readJson("pins.json");
  return _pins!;
}

export const tagOf = (app: App) => pins().source[app].tag;
export const devTagOf = (app: App) => pins().devcontainer[app].tag;

/**
 * How to name an app's pinned ref in output. Installed apps carry a release tag; available
 * ones track a branch, so their label says so rather than implying a version we do not have.
 */
export function refLabel(app: AnyApp): string {
  if (isInstalled(app)) return `${app}@${tagOf(app)}`;
  const p = pins() as unknown as { available?: Record<string, { ref: string }> };
  return `${app}@${p.available?.[app]?.ref ?? "?"} (NOT installed)`;
}

/**
 * Provenance footer for anything read out of pinned source.
 *
 * Names production explicitly. FSM-App carries three different Frappe/ERPNext pins, and the
 * devcontainer is deliberately behind — so "the pinned version" is ambiguous in a way that
 * matters, and an answer that does not say which one is the failure this repo exists to stop.
 */
export const pinNote = () =>
  `production/CI: frappe ${tagOf("frappe")} · erpnext ${tagOf("erpnext")} ` +
  `(devcontainer runs ${devTagOf("frappe")} — see index/drift.md)`;

// ---------------------------------------------------------------- source access

export function sourceDir(app: AnyApp): string {
  // Installed apps sit at source/<app>; available ones under source/available/<app>.
  const rel = isInstalled(app) ? ["source", app] : ["source", "available", app];
  const dir = path.join(ROOT, ...rel);
  if (!existsSync(dir)) {
    throw new Error(
      `${rel.join("/")} is not present. Run \`./scripts/sync-source.sh\` in ${ROOT} (~30s, it is gitignored on purpose).`,
    );
  }
  return dir;
}

/**
 * `git grep` inside the pinned checkout. Using git rather than a shell pipeline keeps the
 * pattern an argument rather than shell text, and confines results to tracked files.
 */
export async function grepSource(
  pattern: string,
  opts: { app?: AnyApp; glob?: string; limit?: number; ignoreCase?: boolean } = {},
): Promise<{ app: AnyApp; file: string; line: number; text: string }[]> {
  // Default to installed apps only. An unqualified grep is asking about our platform;
  // opting into hrms/press is a deliberate 'how does that app do it' question.
  const apps: AnyApp[] = opts.app ? [opts.app] : [...APPS];
  const limit = opts.limit ?? 60;
  const out: { app: AnyApp; file: string; line: number; text: string }[] = [];

  for (const app of apps) {
    const args = ["grep", "--no-color", "-n", "-I", "-E"];
    if (opts.ignoreCase) args.push("-i");
    args.push("-e", pattern);
    if (opts.glob) args.push("--", opts.glob);

    let stdout = "";
    try {
      ({ stdout } = await execFileAsync("git", args, {
        cwd: sourceDir(app),
        maxBuffer: 32 * 1024 * 1024,
      }));
    } catch (err) {
      // git grep exits 1 on "no matches", which is an answer, not a failure.
      const e = err as { code?: number; stdout?: string };
      if (e.code === 1) continue;
      throw err;
    }

    for (const raw of stdout.split("\n")) {
      if (!raw) continue;
      const m = /^([^:]+):(\d+):(.*)$/.exec(raw);
      if (!m) continue;
      out.push({ app, file: m[1], line: Number(m[2]), text: m[3].trim().slice(0, 300) });
      if (out.length >= limit) return out;
    }
  }
  return out;
}

export function readSourceFile(app: AnyApp, rel: string, start?: number, end?: number): string {
  const base = sourceDir(app);
  const full = path.resolve(base, rel);
  // Confine reads to the checkout: a '../' in rel must not escape into the host filesystem.
  if (!full.startsWith(base + path.sep)) throw new Error(`path escapes source/${app}: ${rel}`);
  if (!existsSync(full) || !statSync(full).isFile()) throw new Error(`no such file in ${refLabel(app)}: ${rel}`);

  const lines = readFileSync(full, "utf8").split("\n");
  const from = Math.max(1, start ?? 1);
  const to = Math.min(lines.length, end ?? Math.min(lines.length, from + 200));
  return lines
    .slice(from - 1, to)
    .map((l, i) => `${String(from + i).padStart(5)}  ${l}`)
    .join("\n");
}

// ---------------------------------------------------------------- docs corpus

export interface DocPage {
  /** Path relative to the repo root, e.g. mirror/framework/user/en/python-api/hooks.md */
  path: string;
  title: string;
  url: string | null;
  upstream_updated: string | null;
  corpus: "mirror" | "vendor";
  body: string;
}

let _pages: DocPage[] | null = null;

function walkMd(dir: string, out: string[] = []): string[] {
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walkMd(full, out);
    else if (e.name.endsWith(".md")) out.push(full);
  }
  return out;
}

function parseFrontMatter(text: string): { meta: Record<string, string>; body: string } {
  if (!text.startsWith("---\n")) return { meta: {}, body: text };
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) return { meta: {}, body: text };
  const meta: Record<string, string> = {};
  for (const line of text.slice(4, end).split("\n")) {
    const m = /^([a-z_]+):\s*(.*)$/.exec(line);
    if (!m) continue;
    let v = m[2].trim();
    if (v.startsWith('"') && v.endsWith('"')) {
      try { v = JSON.parse(v) as string; } catch { /* leave raw */ }
    }
    meta[m[1]] = v;
  }
  return { meta, body: text.slice(end + 5) };
}

export function pages(): DocPage[] {
  if (_pages) return _pages;
  const found: DocPage[] = [];
  for (const corpus of ["mirror", "vendor"] as const) {
    for (const full of walkMd(path.join(ROOT, corpus))) {
      const rel = path.relative(ROOT, full);
      const { meta, body } = parseFrontMatter(readFileSync(full, "utf8"));
      found.push({
        path: rel,
        title: meta.title || path.basename(rel, ".md").replace(/[-_]/g, " "),
        url: meta.source_url ?? null,
        upstream_updated: meta.upstream_updated ?? null,
        corpus,
        body,
      });
    }
  }
  _pages = found;
  return _pages;
}

export function readPage(rel: string): DocPage {
  const norm = rel.replace(/^\.?\//, "");
  const hit = pages().find((p) => p.path === norm || p.path === `mirror/${norm}` || p.path === `vendor/${norm}`);
  if (hit) return hit;
  throw new Error(`no mirrored page at "${rel}". Use search_docs to find the right path.`);
}
