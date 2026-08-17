// Derive the searchable platform surface from the pinned source trees into index/.
//
// This is the layer that matters most. Frappe's prose docs stop at v15 and its in-repo
// changelog stops at v13, so for the v16 we actually run there is no document to consult -
// only source. FSM-App/docs/reference/erpnext/v16-verified.md exists because inferring
// "the platform lacks X" from X's absence in our own repo has been wrong repeatedly
// (Webhook, PDF backend, email transport). These indexes make the correct check cheap.
//
// Everything here is derived, never hand-written, and every record carries the file it came
// from so a claim can be followed straight back to source at the pinned tag.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { readdirSync, statSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = path.join(ROOT, "source");
const INDEX = path.join(ROOT, "index");
const APPS = ["frappe", "erpnext"];

const pins = JSON.parse(await readFile(path.join(ROOT, "pins.json"), "utf8"));
const tagOf = (app) => pins.source[app].tag;

// Layout-only fieldtypes carry no schema meaning and are ~25% of all rows. Dropping them
// keeps "what fields does this actually have" readable; the count is kept for fidelity.
const LAYOUT_FIELDTYPES = new Set([
  "Section Break", "Column Break", "Tab Break", "HTML", "Heading", "Fold",
]);

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    if (e.name === ".git" || e.name === "node_modules" || e.name === "__pycache__") continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const filesByApp = Object.fromEntries(APPS.map((a) => [a, walk(path.join(SOURCE, a))]));
const relTo = (app, full) => path.relative(path.join(SOURCE, app), full);

// ---------------------------------------------------------------- doctypes

function buildDoctypes(app) {
  const out = [];
  for (const full of filesByApp[app]) {
    if (!full.endsWith(".json")) continue;
    if (!full.includes(`${path.sep}doctype${path.sep}`)) continue;
    if (path.basename(full).startsWith("test_")) continue;

    let def;
    try {
      def = JSON.parse(readFileSync(full, "utf8"));
    } catch {
      continue;
    }
    if (def?.doctype !== "DocType" || !def.name) continue;

    const allFields = Array.isArray(def.fields) ? def.fields : [];
    const fields = allFields
      .filter((f) => f?.fieldname && !LAYOUT_FIELDTYPES.has(f.fieldtype))
      .map((f) => {
        const rec = { fieldname: f.fieldname, fieldtype: f.fieldtype, label: f.label ?? null };
        if (f.reqd) rec.reqd = 1;
        if (f.unique) rec.unique = 1;
        if (f.options) rec.options = f.options;
        if (f.read_only) rec.read_only = 1;
        if (f.hidden) rec.hidden = 1;
        if (f.default !== undefined && f.default !== "") rec.default = f.default;
        if (f.set_only_once) rec.set_only_once = 1;
        return rec;
      });

    const dir = path.dirname(full);
    const slug = path.basename(dir);
    const controller = path.join(dir, `${slug}.py`);
    let hasController = false;
    try { hasController = statSync(controller).isFile(); } catch { /* none */ }

    out.push({
      name: def.name,
      app,
      module: def.module ?? null,
      // The three flags that most often decide "can we actually use this".
      istable: def.istable ? 1 : 0,
      issingle: def.issingle ? 1 : 0,
      is_submittable: def.is_submittable ? 1 : 0,
      is_tree: def.is_tree ? 1 : 0,
      is_virtual: def.is_virtual ? 1 : 0,
      autoname: def.autoname ?? null,
      naming_rule: def.naming_rule ?? null,
      title_field: def.title_field ?? null,
      track_changes: def.track_changes ? 1 : 0,
      track_seen: def.track_seen ? 1 : 0,
      // Precomputed because these answer the two traps v16-verified.md names by name:
      // a DocType with a reqd field you cannot satisfy does not fit, however close the name.
      reqd_fields: fields.filter((f) => f.reqd).map((f) => f.fieldname),
      link_fields: fields.filter((f) => f.fieldtype === "Link").map((f) => ({ fieldname: f.fieldname, to: f.options ?? null })),
      child_tables: fields.filter((f) => f.fieldtype === "Table" || f.fieldtype === "Table MultiSelect").map((f) => ({ fieldname: f.fieldname, doctype: f.options ?? null })),
      field_count: fields.length,
      layout_field_count: allFields.length - fields.length,
      fields,
      permissions: (def.permissions ?? []).map((p) => ({
        role: p.role,
        ...Object.fromEntries(
          ["read", "write", "create", "delete", "submit", "cancel", "amend", "report", "export", "share", "print", "email", "if_owner"]
            .filter((k) => p[k]).map((k) => [k, 1]),
        ),
      })),
      links: (def.links ?? []).map((l) => ({ link_doctype: l.link_doctype, link_fieldname: l.link_fieldname, group: l.group ?? null })),
      json_path: relTo(app, full),
      controller_path: hasController ? relTo(app, controller) : null,
    });
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}

// ---------------------------------------------------------------- whitelisted methods

// A whitelisted function at column 0 is callable as a dotted path; one indented inside a
// class is a document method reached through run_doc_method instead. The distinction changes
// how you call it, so it is recorded rather than flattened away.
const WHITELIST_RE = /^(\s*)@frappe\.whitelist\(([^)]*)\)/;
const DEF_RE = /^\s*def\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(([^)]*)/;

function buildWhitelist(app) {
  const out = [];
  for (const full of filesByApp[app]) {
    if (!full.endsWith(".py")) continue;
    const rel = relTo(app, full);
    if (rel.includes("/tests/") || path.basename(rel).startsWith("test_")) continue;

    const lines = readFileSync(full, "utf8").split("\n");
    for (let i = 0; i < lines.length; i++) {
      const m = WHITELIST_RE.exec(lines[i]);
      if (!m) continue;
      const [, indent, args] = m;

      // Skip past any stacked decorators to the def itself.
      let j = i + 1;
      while (j < lines.length && !DEF_RE.test(lines[j]) && j - i < 12) j++;
      const d = j < lines.length ? DEF_RE.exec(lines[j]) : null;
      if (!d) continue;

      const params = d[2].split(",").map((s) => s.trim()).filter((s) => s && s !== "self" && s !== "cls");
      const moduleDots = rel.replace(/\.py$/, "").split("/").join(".");
      const isMethod = indent.length > 0;

      out.push({
        name: d[1],
        app,
        // Module-level functions are the RPC surface reachable by dotted path.
        dotted_path: isMethod ? null : `${moduleDots}.${d[1]}`,
        kind: isMethod ? "document_method" : "module_function",
        allow_guest: /allow_guest\s*=\s*True/.test(args) ? 1 : 0,
        methods: (args.match(/methods\s*=\s*\[([^\]]*)\]/)?.[1] ?? "")
          .split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean),
        params,
        file: rel,
        line: j + 1,
      });
    }
  }
  return out.sort((a, b) => (a.dotted_path ?? a.name).localeCompare(b.dotted_path ?? b.name));
}

// ---------------------------------------------------------------- hooks

// The honest list of hook keys is the set frappe actually reads, not the set some doc page
// lists. Collect the literal first argument of every get_hooks() call in the framework.
function buildHooks() {
  const consumers = new Map();
  const re = /get_hooks\(\s*(?:hook\s*=\s*)?["']([a-zA-Z_][a-zA-Z0-9_]*)["']/g;
  for (const app of APPS) {
    for (const full of filesByApp[app]) {
      if (!full.endsWith(".py")) continue;
      const rel = relTo(app, full);
      const text = readFileSync(full, "utf8");
      const lines = text.split("\n");
      for (let i = 0; i < lines.length; i++) {
        for (const m of lines[i].matchAll(re)) {
          const key = m[1];
          if (!consumers.has(key)) consumers.set(key, { hook: key, consumed_by: [] });
          const rec = consumers.get(key);
          if (rec.consumed_by.length < 6) rec.consumed_by.push({ app, file: rel, line: i + 1 });
        }
      }
    }
  }
  return [...consumers.values()].sort((a, b) => a.hook.localeCompare(b.hook));
}

// ---------------------------------------------------------------- controller events

// Small, fixed, and load-bearing: the exact order a controller's methods fire in. Encoded
// with citations rather than regexed, then asserted against source so it cannot silently rot.
// Save/submit/cancel dispatch from document.py, but delete and rename dispatch from
// delete_doc.py and rename_doc.py - so each action names the file that actually runs it.
//
// The ORDER is editorial (read out of the dispatch functions) but the LINE NUMBERS are not:
// they are located in source at build time. Hardcoding them was a real bug here - the
// citations silently pointed at the wrong lines the moment the pinned tag moved, which is
// precisely the confident-but-wrong answer this repo exists to prevent.
const CONTROLLER_EVENTS = {
  note: "Order as dispatched by run_method(). doc_events hooks in hooks.py fire through the same path, so a handler sees this same ordering.",
  actions: {
    insert: {
      before: ["before_insert", "before_validate", "validate", "before_save"],
      after: ["after_insert", "on_update", "on_change"],
      source: "frappe/model/document.py",
    },
    save: {
      before: ["before_validate", "validate", "before_save"],
      after: ["on_update", "on_change"],
      source: "frappe/model/document.py",
    },
    submit: {
      before: ["before_validate", "validate", "before_submit"],
      after: ["on_update", "on_submit", "on_change"],
      source: "frappe/model/document.py",
    },
    cancel: {
      before: ["before_cancel"],
      after: ["on_cancel", "on_change"],
      source: "frappe/model/document.py",
    },
    update_after_submit: {
      before: ["before_update_after_submit"],
      after: ["on_update_after_submit", "on_change"],
      source: "frappe/model/document.py",
    },
    delete: {
      before: ["on_trash"],
      after: ["after_delete"],
      source: "frappe/model/delete_doc.py",
    },
    rename: {
      before: ["before_rename"],
      after: ["after_rename"],
      source: "frappe/model/rename_doc.py",
    },
  },
};

/**
 * Locate each event's `run_method("<name>")` call in the file that dispatches it, and stamp
 * the resolved `file:line` onto the action. Throws if an event is not dispatched where we
 * claim - so an upstream refactor fails the build instead of producing a stale citation.
 */
function resolveControllerEvents() {
  const cache = new Map();
  const lines = (rel) => {
    if (!cache.has(rel)) cache.set(rel, readFileSync(path.join(SOURCE, "frappe", rel), "utf8").split("\n"));
    return cache.get(rel);
  };

  const missing = [];
  const names = new Set();
  for (const [action, spec] of Object.entries(CONTROLLER_EVENTS.actions)) {
    const src = lines(spec.source);
    const at = {};
    for (const n of [...spec.before, ...spec.after]) {
      names.add(n);
      const i = src.findIndex((l) => l.includes(`run_method("${n}"`) || l.includes(`run_method('${n}'`));
      if (i === -1) missing.push(`${action}:${n} (${spec.source})`);
      else at[n] = `${spec.source}:${i + 1}`;
    }
    spec.dispatched_at = at;
  }

  // Headline citation = the event that distinguishes this action from the others. `save` and
  // `submit` share before_validate/validate, so citing the first event would point both at the
  // same line and tell the reader nothing about which branch actually ran.
  const shared = new Map();
  for (const spec of Object.values(CONTROLLER_EVENTS.actions)) {
    for (const n of [...spec.before, ...spec.after]) shared.set(n, (shared.get(n) ?? 0) + 1);
  }
  for (const spec of Object.values(CONTROLLER_EVENTS.actions)) {
    const distinguishing = [...spec.before, ...spec.after]
      .sort((a, b) => (shared.get(a) ?? 0) - (shared.get(b) ?? 0))[0];
    spec.cite = spec.dispatched_at[distinguishing]
      ? `${distinguishing} @ ${spec.dispatched_at[distinguishing]}`
      : spec.source;
  }
  if (missing.length) {
    throw new Error(`controller events not dispatched via run_method at ${tagOf("frappe")}: ${missing.join(", ")}`);
  }
  return names.size;
}

// ---------------------------------------------------------------- emit

await mkdir(INDEX, { recursive: true });
const meta = { built_at: new Date().toISOString().slice(0, 10), pins: Object.fromEntries(APPS.map((a) => [a, tagOf(a)])) };
const summary = {};

for (const app of APPS) {
  const doctypes = buildDoctypes(app);
  await writeFile(
    path.join(INDEX, `doctypes.${app}.json`),
    JSON.stringify({ ...meta, app, tag: tagOf(app), count: doctypes.length, doctypes }, null, 1) + "\n",
  );
  summary[`doctypes.${app}`] = doctypes.length;
}

const whitelist = APPS.flatMap(buildWhitelist);
await writeFile(
  path.join(INDEX, "whitelist.json"),
  JSON.stringify({ ...meta, count: whitelist.length, methods: whitelist }, null, 1) + "\n",
);
summary.whitelist = whitelist.length;

const hooks = buildHooks();
await writeFile(
  path.join(INDEX, "hooks.json"),
  JSON.stringify({ ...meta, note: "Hook keys frappe/erpnext actually read via get_hooks(). If a key is not here, nothing consumes it.", count: hooks.length, hooks }, null, 1) + "\n",
);
summary.hooks = hooks.length;

const eventCount = resolveControllerEvents();
await writeFile(
  path.join(INDEX, "controller-events.json"),
  JSON.stringify({ ...meta, ...CONTROLLER_EVENTS }, null, 1) + "\n",
);
summary.controller_events = eventCount;

// A zero count means an extractor silently stopped matching - fail rather than commit an
// empty index that would answer "the platform does not have that" for everything.
const zero = Object.entries(summary).filter(([, v]) => !v);
for (const [k, v] of Object.entries(summary)) console.error(`  ${String(v).padStart(5)}  ${k}`);
if (zero.length) {
  console.error(`\nERROR: empty index for ${zero.map(([k]) => k).join(", ")}`);
  process.exit(1);
}
console.error(`\nindexed frappe/erpnext @ ${tagOf("frappe")} / ${tagOf("erpnext")}`);
