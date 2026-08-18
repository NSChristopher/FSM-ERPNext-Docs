// End-to-end check of the built artefacts, driving the MCP server over real stdio.
//
// The assertions are deliberately not synthetic: each one restates a platform fact that
// FSM-App/docs/reference/erpnext/v16-verified.md already asserts, and that was learned the
// expensive way. If this passes, the server answers those questions without anyone having to
// read source — which is the whole point of the repo.

import { spawn } from "node:child_process";
import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const results = [];
const check = (name, ok, detail = "") => {
  results.push({ name, ok, detail });
  console.log(`  ${ok ? "PASS" : "FAIL"}  ${name}${detail && !ok ? ` — ${detail}` : ""}`);
};

// ---------------------------------------------------------------- artefacts

const idxPath = (f) => path.join(ROOT, "index", f);
for (const f of ["doctypes.frappe.json", "doctypes.erpnext.json", "whitelist.json", "hooks.json", "controller-events.json"]) {
  check(`index/${f} exists`, existsSync(idxPath(f)));
}

const dtF = JSON.parse(readFileSync(idxPath("doctypes.frappe.json"), "utf8"));
const dtE = JSON.parse(readFileSync(idxPath("doctypes.erpnext.json"), "utf8"));
const wl = JSON.parse(readFileSync(idxPath("whitelist.json"), "utf8"));
const pins = JSON.parse(readFileSync(path.join(ROOT, "pins.json"), "utf8"));

check("doctype count is plausible (>700)", dtF.count + dtE.count > 700, `got ${dtF.count + dtE.count}`);
check("whitelist count is plausible (>1000)", wl.count > 1000, `got ${wl.count}`);
check("indexes built at the production pin", dtF.ref === pins.source.frappe.tag, `${dtF.ref} vs ${pins.source.frappe.tag}`);

const manifestPath = path.join(ROOT, "mirror", "_manifest.json");
if (existsSync(manifestPath)) {
  const man = JSON.parse(readFileSync(manifestPath, "utf8"));
  check("mirror has >1000 pages", man.page_count > 1000, `got ${man.page_count}`);
  check("no mirrored page is suspiciously thin", man.pages.every((p) => p.bytes >= 200));
  // Six wiki pages inline screenshots as base64 data URIs, 7.9 MB between them. Stripping
  // them is in crawl-docs.mjs; this is the guard that keeps them out if that regresses,
  // because the cost lands in git history permanently and is not recoverable by a re-crawl.
  const bloated = man.pages.filter((p) => p.bytes > 200_000);
  check("no page carries inlined binary", bloated.length === 0,
    bloated.length ? `${bloated.length} pages >200KB, largest ${bloated[0]?.path}` : "");
  // Flakiness on our side shrinks the mirror silently and must fail. Pages that are broken
  // upstream (404, or a route that 301s to itself forever) are recorded, not treated as ours.
  const ours = man.skipped.filter((s) => /fetch failed/.test(s.reason));
  check("no fetch failures of our own in the mirror", ours.length === 0, `${ours.length} pages lost to network errors`);
  const upstream = man.skipped.filter((s) => /^upstream/.test(s.reason));
  console.log(`        (${man.skipped.length} pages skipped: ${upstream.length} broken upstream, ${man.skipped.length - upstream.length - ours.length} gone/thin)`);
} else {
  check("mirror/_manifest.json exists", false, "run `npm run crawl`");
}

// mcp/dist is committed so the tools exist in a fresh checkout (see .gitignore). That only
// helps if it is current, and a stale dist fails silently — the server starts and answers
// with old behaviour. Compare mtimes so the drift is caught here instead of in a review run.
const newest = (dir) =>
  existsSync(dir)
    ? Math.max(...readdirSync(dir, { recursive: true })
        .map((f) => path.join(dir, String(f)))
        .filter((f) => statSync(f).isFile())
        .map((f) => statSync(f).mtimeMs))
    : 0;
const srcAt = newest(path.join(ROOT, "mcp", "src"));
const distAt = newest(path.join(ROOT, "mcp", "dist"));
check("mcp/dist is built", distAt > 0, "run `npm run build:mcp`");
check("mcp/dist is not stale against src", distAt >= srcAt, "src changed since the last build — run `npm run build:mcp`");

// ---------------------------------------------------------------- MCP server

const server = spawn("node", [path.join(ROOT, "mcp", "dist", "index.mjs")], {
  stdio: ["pipe", "pipe", "inherit"],
  env: { ...process.env, FSM_DOCS_ROOT: ROOT },
});

let buf = "";
const pending = new Map();
server.stdout.on("data", (chunk) => {
  buf += chunk.toString();
  let nl;
  while ((nl = buf.indexOf("\n")) !== -1) {
    const line = buf.slice(0, nl).trim();
    buf = buf.slice(nl + 1);
    if (!line) continue;
    try {
      const msg = JSON.parse(line);
      const resolve = pending.get(msg.id);
      if (resolve) { pending.delete(msg.id); resolve(msg); }
    } catch { /* not a JSON-RPC line */ }
  }
});

let nextId = 1;
function rpc(method, params) {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    pending.set(id, resolve);
    server.stdin.write(JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n");
    setTimeout(() => { if (pending.delete(id)) reject(new Error(`timeout: ${method}`)); }, 30_000);
  });
}

const callText = async (name, args) => {
  const res = await rpc("tools/call", { name, arguments: args });
  if (res.error) throw new Error(res.error.message);
  return res.result.content.map((c) => c.text).join("\n");
};

console.log("\nMCP server:");
await rpc("initialize", {
  protocolVersion: "2024-11-05",
  capabilities: {},
  clientInfo: { name: "verify", version: "0" },
});
server.stdin.write(JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized" }) + "\n");

const tools = await rpc("tools/list", {});
check("server lists 8 tools", tools.result.tools.length === 8, `got ${tools.result.tools.length}`);

// Every assertion below mirrors a fact recorded in v16-verified.md.

// The near-miss: two custom DocTypes were specced before someone found Frappe ships Webhook.
const webhook = await callText("describe_doctype", { name: "Webhook" });
for (const f of ["webhook_doctype", "webhook_docevent", "condition", "request_url", "webhook_data", "timeout"]) {
  check(`Webhook exposes ${f}`, webhook.includes(f));
}

// The two "similar name, different shape" traps: a reqd field neither of our models can fill.
const webForm = await callText("describe_doctype", { name: "Web Form" });
check("Web Form shows doc_type as required", /## Required fields[\s\S]*?- doc_type/.test(webForm));

const serialNo = await callText("describe_doctype", { name: "Serial No" });
check("Serial No shows item_code as required", /## Required fields[\s\S]*?- item_code/.test(serialNo));

// The citation machine: HMAC signing exists, and grep proves where.
const hmac = await callText("grep_source", { pattern: "X-Frappe-Webhook-Signature" });
check("grep_source cites webhook.py for the HMAC header", hmac.includes("integrations/doctype/webhook/webhook.py"));

// Absence must read as absence, with the reason it is trustworthy.
const absent = await callText("find_doctype", { pattern: "ThisDoesNotExistAnywhere" });
check("a genuine miss explains why absence is evidence", absent.includes("evidence of absence"));

// Lifecycle ordering, the thing most often guessed at.
const life = await callText("find_hook", { lifecycle: true });
check("lifecycle shows validate before on_update", life.indexOf("before_validate") < life.indexOf("on_update"));
check("lifecycle cites its dispatch site", life.includes("document.py:"));

// Search over mirrored prose, with the staleness caveat attached.
const search = await callText("search_docs", { query: "permission_query_conditions", limit: 5 });
// Assert on the result header rather than the query term: the no-results message echoes the
// query back, so a term match alone would pass against an empty corpus.
check("search_docs returns hits", /^\d+ result\(s\)/.test(search), search.slice(0, 80));
check("search_docs surfaces a mirrored page path", /mirror\/\S+\.md/.test(search));
check("search_docs warns that prose stops at v15", search.includes("stop at v15"));

// The available-but-not-installed tier. These assertions encode the miss that created it:
// a mileage question was answered from recall about hrms, because hrms was not indexed.
const vehicles = await callText("find_doctype", { pattern: "vehicle|mileage" });
check("find_doctype separates installed from not-installed", /## On your bench/.test(vehicles) && /## NOT installed/.test(vehicles));
check("Vehicle Log is found, in hrms", /Vehicle Log\s+\[hrms/.test(vehicles));
check("Vehicle Log appears under NOT installed", vehicles.indexOf("## NOT installed") < vehicles.indexOf("Vehicle Log"));
check("erpnext Vehicle stays on the bench side", vehicles.indexOf("## On your bench") < vehicles.indexOf("Vehicle  [erpnext"));

const vlog = await callText("describe_doctype", { name: "Vehicle Log" });
check("describe_doctype banners NOT INSTALLED first", vlog.indexOf("NOT INSTALLED") < vlog.indexOf("## Required fields"));
// The shape check that matters: Vehicle Log keys on an hrms Employee, so it cannot hold a
// per-user daily rollup even if hrms were installed. That is the finding, not the name match.
check("Vehicle Log shows employee as required", /## Required fields[\s\S]*?- employee/.test(vlog));

const installedOnly = await callText("find_doctype", { pattern: "vehicle|mileage", installed_only: true });
check("installed_only suppresses the not-installed tier", !installedOnly.includes("## NOT installed"));

// Reading source by citation. The line comes from the index rather than a literal, because a
// hardcoded line number silently pointed at the wrong code the moment the pinned tag moved.
const ev = JSON.parse(readFileSync(idxPath("controller-events.json"), "utf8"));
const saveLine = Number(ev.actions.save.dispatched_at.before_save.split(":")[1]);
check("controller events carry resolved line numbers", Number.isInteger(saveLine) && saveLine > 0, String(saveLine));
const src = await callText("read_source", {
  app: "frappe", path: "frappe/model/document.py", start: saveLine, end: saveLine,
});
check("read_source lands on the before_save dispatch", /run_method\(["']before_save["']\)/.test(src), src.slice(-90));

// The pin must be production, not the devcontainer's older tag — the distinction this repo
// got wrong once and must not get wrong silently again.
// Assert positively against production, not merely "not the devcontainer" — an undefined
// field satisfies a not-equals and passes vacuously, which it did until this was caught.
check("index ref is production and differs from the devcontainer",
  dtF.ref === pins.source.frappe.tag && pins.source.frappe.tag !== pins.devcontainer.frappe.tag,
  `frappe index at ${dtF.ref}, production ${pins.source.frappe.tag}, devcontainer ${pins.devcontainer.frappe.tag}`);

// The available tier must be present and correctly flagged at the file level, not just in
// rendered output — a index built without it would degrade silently back to bare misses.
for (const app of ["hrms", "crm", "helpdesk", "press"]) {
  const f = path.join(ROOT, "index", `doctypes.${app}.json`);
  if (!existsSync(f)) { check(`index/doctypes.${app}.json exists`, false, "run `npm run build:index`"); continue; }
  const j = JSON.parse(readFileSync(f, "utf8"));
  check(`${app} indexed and flagged not-installed`,
    j.installed === 0 && j.count > 0 && j.doctypes.every((d) => d.installed === 0),
    `installed=${j.installed} count=${j.count}`);
}

server.kill();

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
if (failed.length) {
  console.log("failed:");
  for (const f of failed) console.log(`  - ${f.name}${f.detail ? ` (${f.detail})` : ""}`);
  process.exit(1);
}
