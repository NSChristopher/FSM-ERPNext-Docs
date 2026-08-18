// MCP server over the pinned Frappe/ERPNext platform surface.
// (The shebang is added by esbuild's banner at build time - see package.json.)
//
// The tools are ordered by the question they answer, and the ordering is deliberate:
// "does the platform already ship this?" comes before "what do the docs say?", because the
// docs stop at v15 while we run v16 — and because the mistakes this repo exists to prevent
// were all cases of building something the platform already had.

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import {
  APPS, AVAILABLE_APPS, availableAppNote, type App, type AnyApp, type DocType,
  doctypes, whitelist, hooks, controllerEvents,
  grepSource, readSourceFile, readPage, pinNote, tagOf, refLabel,
} from "./data.js";
import { searchDocs } from "./search.js";

const APP_ENUM = { type: "string", enum: [...APPS], description: "Restrict to one installed app." };
const ANY_APP_ENUM = {
  type: "string",
  enum: [...APPS, ...AVAILABLE_APPS],
  description: `Installed: ${APPS.join(", ")}. Available but NOT installed: ${AVAILABLE_APPS.join(", ")}.`,
};

const TOOLS = [
  {
    name: "find_doctype",
    description:
      "Search ~1,430 DocTypes across the Frappe ecosystem: the ~810 that frappe + erpnext ship in production (what our tenants actually run), plus ~620 from four apps we do NOT install (hrms, crm, helpdesk, press). Use BEFORE designing a new DocType. Results are split into two clearly separated sections so an available-but-not-installed match is never mistaken for something usable today — that distinction is the point of the second tier.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: { type: "string", description: "Case-insensitive substring or regex matched against the DocType name (e.g. 'webhook', 'serial', '^Sales')." },
        app: ANY_APP_ENUM,
        module: { type: "string", description: "Restrict to a module, e.g. 'Stock', 'Accounts', 'Integrations'." },
        installed_only: { type: "boolean", description: "Only DocTypes on our benches (frappe + erpnext). Use when the question is strictly 'can our code use this today'." },
        limit: { type: "number", description: "Max results (default 25)." },
      },
      required: ["pattern"],
    },
  },
  {
    name: "describe_doctype",
    description:
      "Full schema for one DocType: every field with its type and reqd/unique flags, permissions, links, child tables, autoname. Use this to answer 'does this actually fit our shape?' — a required field you cannot satisfy is the usual reason a close-sounding DocType is wrong. DocTypes from non-installed apps are returned with a prominent NOT INSTALLED banner.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Exact DocType name, e.g. 'Web Form'." },
        fields: { type: "string", enum: ["all", "required", "summary"], description: "How much field detail to return (default 'all')." },
      },
      required: ["name"],
    },
  },
  {
    name: "find_method",
    description:
      "Search the whitelisted (RPC-callable) method surface in production. Use before writing a new @frappe.whitelist endpoint, and to check whether an operation is already reachable from the client.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: { type: "string", description: "Substring or regex matched against the method name and dotted path." },
        app: APP_ENUM,
        allow_guest: { type: "boolean", description: "Only methods callable without authentication." },
        limit: { type: "number", description: "Max results (default 30)." },
      },
      required: ["pattern"],
    },
  },
  {
    name: "find_hook",
    description:
      "Look up hooks.py keys the framework actually reads in production, and the document lifecycle event order (before_validate → validate → before_save → on_update → on_change, and the submit/cancel/delete/rename variants). If a hook key is absent here, nothing consumes it.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: { type: "string", description: "Substring matched against hook names. Omit to list all." },
        lifecycle: { type: "boolean", description: "Return the controller/doc_events lifecycle ordering instead of hooks.py keys." },
      },
    },
  },
  {
    name: "grep_source",
    description:
      "Regex search platform source at the pinned refs. This is the citation machine: use it to PROVE a claim before acting on it. Absence in our own repo is never evidence about the platform — this is. Defaults to the installed apps (frappe + erpnext); pass `app` to read how a non-installed app such as hrms or press implements something.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: { type: "string", description: "POSIX extended regex (git grep -E)." },
        app: ANY_APP_ENUM,
        glob: { type: "string", description: "Limit to matching paths, e.g. '*.py', 'frappe/model/*'." },
        ignore_case: { type: "boolean" },
        limit: { type: "number", description: "Max matches (default 60)." },
      },
      required: ["pattern"],
    },
  },
  {
    name: "read_source",
    description:
      "Read a line range from a file in the production source tree. Use after grep_source to read the surrounding implementation before concluding what it does.",
    inputSchema: {
      type: "object",
      properties: {
        app: { ...ANY_APP_ENUM, description: "Which app's checkout to read from." },
        path: { type: "string", description: "Path relative to the app checkout, e.g. 'frappe/model/document.py'." },
        start: { type: "number", description: "First line (1-indexed)." },
        end: { type: "number", description: "Last line. Defaults to start+200." },
      },
      required: ["app", "path"],
    },
  },
  {
    name: "search_docs",
    description:
      "Full-text search the mirrored docs.frappe.io prose plus the vendored frappe_docker and bench docs. Good for concepts and how-to. NOTE: upstream framework docs stop at v15 and ERPNext's are undated — for anything version-sensitive, confirm with grep_source at the pin rather than trusting the prose.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Natural-language or keyword query." },
        scope: {
          type: "string",
          enum: ["all", "framework", "erpnext", "hr", "cloud", "crm", "helpdesk", "insights", "drive", "builder", "wiki", "frappe_docker", "bench"],
          description: "Restrict to one corpus (default 'all'). 'hr', 'crm', 'helpdesk' etc. are docs for apps we do not install.",
        },
        limit: { type: "number", description: "Max results (default 10)." },
      },
      required: ["query"],
    },
  },
  {
    name: "read_doc",
    description: "Read a mirrored or vendored documentation page in full, by the path search_docs returned.",
    inputSchema: {
      type: "object",
      properties: {
        path: { type: "string", description: "Path from a search_docs result, e.g. 'mirror/framework/user/en/python-api/hooks.md'." },
      },
      required: ["path"],
    },
  },
] as const;

const SCOPE_PREFIX: Record<string, string> = {
  framework: "mirror/framework/",
  erpnext: "mirror/erpnext/",
  hr: "mirror/hr/",
  cloud: "mirror/cloud/",
  crm: "mirror/crm/",
  helpdesk: "mirror/helpdesk/",
  insights: "mirror/insights/",
  drive: "mirror/drive/",
  builder: "mirror/builder/",
  wiki: "mirror/wiki",
  frappe_docker: "vendor/frappe_docker/",
  bench: "vendor/bench/",
};

const text = (s: string) => ({ content: [{ type: "text" as const, text: s }] });

function safeRegex(pattern: string, flags: string): RegExp {
  try {
    return new RegExp(pattern, flags);
  } catch {
    // Fall back to a literal match so an unescaped '(' or '[' degrades instead of erroring.
    return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), flags);
  }
}

function doctypeLine(d: DocType): string {
  const flags = [
    d.istable && "child-table",
    d.issingle && "single",
    d.is_submittable && "submittable",
    d.is_tree && "tree",
    d.is_virtual && "virtual",
  ].filter(Boolean).join(", ");
  const reqd = d.reqd_fields.length ? d.reqd_fields.join(", ") : "(none)";
  return [
    `${d.name}  [${d.app}/${d.module ?? "?"}${flags ? ` · ${flags}` : ""}]`,
    `    required: ${reqd}`,
    `    ${d.field_count} fields · ${d.json_path}`,
  ].join("\n");
}

/**
 * Renders installed and available hits as two separate sections.
 *
 * Never merge them into one ranked list. An available DocType is not on the bench, and a
 * reader who skims a mixed list will act as though it is — which is a worse failure than the
 * bare "not found" this tier was added to replace.
 */
function renderDoctypeHits(hits: DocType[], limit: number, header: string): string {
  const live = hits.filter((d) => d.installed);
  const avail = hits.filter((d) => !d.installed);
  const parts = [`${header} · ${pinNote()}`, ""];

  if (live.length) {
    parts.push(`## On your bench (${live.length}) — frappe + erpnext`, "");
    parts.push(live.slice(0, limit).map(doctypeLine).join("\n\n"));
    if (live.length > limit) parts.push(`\n…${live.length - limit} more.`);
    parts.push("");
  }

  if (avail.length) {
    const byApp = [...new Set(avail.map((d) => d.app))];
    parts.push(
      `## NOT installed (${avail.length}) — ships with ${byApp.join(", ")}`,
      "",
      "These are **not available to our code**. Adopting one means installing that app on every",
      "tenant — a real decision with migration and upgrade cost, not a free win.",
      "",
    );
    // Capped tighter than the installed section on purpose. `press` alone ships 383 DocTypes,
    // so a generic pattern like /team/ returns 4 usable hits and 15 unusable ones — the
    // second tier must inform, never crowd out the answer to the question actually asked.
    const availLimit = Math.min(limit, 10);
    parts.push(avail.slice(0, availLimit).map(doctypeLine).join("\n\n"));
    if (avail.length > availLimit) parts.push(`\n…${avail.length - availLimit} more (pass app: to narrow).`);
    parts.push("");
    for (const app of byApp) {
      const note = availableAppNote(app);
      if (note) parts.push(`_${app}: ${note}_`);
    }
    parts.push("");
  }

  parts.push("Use describe_doctype for the full field list before concluding one fits.");
  return parts.join("\n");
}

async function handle(name: string, a: Record<string, any>) {
  switch (name) {
    case "find_doctype": {
      const re = safeRegex(a.pattern, "i");
      let hits = doctypes().filter((d) => re.test(d.name));
      if (a.app) hits = hits.filter((d) => d.app === a.app);
      if (a.module) hits = hits.filter((d) => (d.module ?? "").toLowerCase() === String(a.module).toLowerCase());
      if (a.installed_only) hits = hits.filter((d) => d.installed);
      if (hits.length === 0) {
        return text(
          `No DocType matching /${a.pattern}/i · ${pinNote()}\n\n` +
            `That is real evidence of absence. This index covers every DocType shipped by the ` +
            `apps we install (frappe, erpnext) **and** by four we do not (${AVAILABLE_APPS.join(", ")}), ` +
            `so a miss here is not merely "we haven't used it".\n\n` +
            `Search by what the thing does rather than what we named it before concluding. ` +
            `Then try grep_source for a non-DocType mechanism.`,
        );
      }
      return text(renderDoctypeHits(hits, a.limit ?? 25, `${hits.length} DocType(s) matching /${a.pattern}/i`));
    }

    case "describe_doctype": {
      const d = doctypes().find((x) => x.name.toLowerCase() === String(a.name).toLowerCase());
      if (!d) {
        const near = doctypes().filter((x) => x.name.toLowerCase().includes(String(a.name).toLowerCase().slice(0, 6)));
        return text(
          `No DocType named "${a.name}" at ${pinNote()}` +
            (near.length ? `\n\nDid you mean: ${near.slice(0, 8).map((n) => n.name).join(", ")}` : ""),
        );
      }
      const mode = a.fields ?? "all";
      const lines = [
        `# ${d.name}`,
        `${d.app}/${d.module ?? "?"} · ${pinNote()}`,
        "",
      ];
      // Lead with this, before any field detail. A reader who skims the schema and misses the
      // tier will plan against a DocType that does not exist on the bench.
      if (!d.installed) {
        lines.push(
          `> ⚠️ **NOT INSTALLED.** \`${d.app}\` is not on our benches — this DocType does not exist`,
          `> on a tenant site today. Using it means installing \`${d.app}\` everywhere, with the`,
          `> migration and upgrade cost that carries.`,
          availableAppNote(d.app) ? `> Indexed because: ${availableAppNote(d.app)}` : "",
          "",
        );
      }
      lines.push(
        `- autoname: ${d.autoname ?? "(none)"}${d.naming_rule ? ` · naming_rule: ${d.naming_rule}` : ""}`,
        `- flags: submittable=${d.is_submittable} child_table=${d.istable} single=${d.issingle} tree=${d.is_tree} virtual=${d.is_virtual}`,
        `- track_changes=${d.track_changes} track_seen=${d.track_seen}${d.title_field ? ` · title_field=${d.title_field}` : ""}`,
        `- source: ${d.json_path}${d.controller_path ? ` · controller: ${d.controller_path}` : " · no controller"}`,
        "",
        `## Required fields (${d.reqd_fields.length})`,
        d.reqd_fields.length
          ? d.reqd_fields.map((f) => {
              const fld = d.fields.find((x) => x.fieldname === f)!;
              return `- ${f} (${fld.fieldtype}${fld.options ? ` → ${fld.options}` : ""})`;
            }).join("\n")
          : "- (none)",
        "",
      );
      if (mode !== "required") {
        if (d.link_fields.length) {
          lines.push(`## Links out (${d.link_fields.length})`, d.link_fields.map((l) => `- ${l.fieldname} → ${l.to}`).join("\n"), "");
        }
        if (d.child_tables.length) {
          lines.push(`## Child tables (${d.child_tables.length})`, d.child_tables.map((c) => `- ${c.fieldname} → ${c.doctype}`).join("\n"), "");
        }
      }
      if (mode === "all") {
        lines.push(
          `## All fields (${d.field_count}, plus ${d.layout_field_count} layout-only)`,
          d.fields.map((f) => {
            const marks = [f.reqd && "reqd", f.unique && "unique", f.read_only && "read_only", f.hidden && "hidden", f.set_only_once && "set_only_once"].filter(Boolean).join(",");
            return `- ${f.fieldname}: ${f.fieldtype}${f.options ? ` → ${f.options}` : ""}${marks ? ` [${marks}]` : ""}`;
          }).join("\n"),
          "",
          `## Permissions`,
          d.permissions.length
            ? d.permissions.map((p) => `- ${p.role}: ${Object.keys(p).filter((k) => k !== "role").join(" ")}`).join("\n")
            : "- (none declared)",
        );
      }
      return text(lines.join("\n"));
    }

    case "find_method": {
      const re = safeRegex(a.pattern, "i");
      let hits = whitelist().filter((m) => re.test(m.name) || re.test(m.dotted_path ?? ""));
      if (a.app) hits = hits.filter((m) => m.app === a.app);
      if (a.allow_guest) hits = hits.filter((m) => m.allow_guest === 1);
      if (hits.length === 0) return text(`No whitelisted method matching /${a.pattern}/i · ${pinNote()}`);
      const limit = a.limit ?? 30;
      return text(
        `${hits.length} whitelisted method(s) · ${pinNote()}\n\n` +
          hits.slice(0, limit).map((m) => {
            const call = m.dotted_path ?? `${m.name} (document method — call via run_doc_method)`;
            const tags = [m.allow_guest && "allow_guest", ...m.methods].filter(Boolean).join(",");
            return `${call}\n    (${m.params.join(", ")})${tags ? ` [${tags}]` : ""}\n    ${m.app}/${m.file}:${m.line}`;
          }).join("\n\n") +
          (hits.length > limit ? `\n\n…${hits.length - limit} more.` : ""),
      );
    }

    case "find_hook": {
      if (a.lifecycle) {
        const ev = controllerEvents() as any;
        const at = (spec: any, n: string) => (spec.dispatched_at?.[n] ? `${n} (${spec.dispatched_at[n]})` : n);
        const rows = Object.entries(ev.actions).map(([action, spec]: [string, any]) =>
          `## ${action}\n` +
          `  before: ${spec.before.map((n: string) => at(spec, n)).join(" → ")}\n` +
          `  after:  ${spec.after.map((n: string) => at(spec, n)).join(" → ")}\n` +
          `  distinguished by ${spec.cite}`,
        );
        return text(`# Document lifecycle · ${pinNote()}\n\n${ev.note}\n\n${rows.join("\n\n")}`);
      }
      const all = hooks();
      const hits = a.pattern ? all.filter((h) => h.hook.toLowerCase().includes(String(a.pattern).toLowerCase())) : all;
      if (hits.length === 0) {
        return text(
          `No hook key matching "${a.pattern}" · ${pinNote()}\n\n` +
            `This index is the set of keys the framework actually passes to get_hooks(), so an absence here means nothing would consume that hook.`,
        );
      }
      return text(
        `${hits.length} hook key(s) · ${pinNote()}\n\n` +
          hits.map((h) => `${h.hook}\n    consumed at ${h.consumed_by.slice(0, 3).map((c) => `${c.app}/${c.file}:${c.line}`).join(", ")}`).join("\n\n"),
      );
    }

    case "grep_source": {
      const hits = await grepSource(a.pattern, {
        app: a.app as AnyApp | undefined,
        glob: a.glob,
        limit: a.limit ?? 60,
        ignoreCase: a.ignore_case,
      });
      if (hits.length === 0) {
        return text(
          `No match for /${a.pattern}/ in ${a.app ?? "frappe + erpnext"} · ${pinNote()}\n\n` +
            `This searched the whole pinned tree, so it is evidence of absence in the platform — ` +
            `unlike a grep of our own repo, which only proves we have not used it.`,
        );
      }
      return text(
        `${hits.length} match(es) · ${pinNote()}\n\n` +
          hits.map((h) => `${h.app}/${h.file}:${h.line}\n    ${h.text}`).join("\n"),
      );
    }

    case "read_source":
      return text(
        `${refLabel(a.app as AnyApp)} · ${a.path}\n\n` +
          readSourceFile(a.app as AnyApp, a.path, a.start, a.end),
      );

    case "search_docs": {
      const prefix = a.scope && a.scope !== "all" ? SCOPE_PREFIX[a.scope] : undefined;
      const hits = searchDocs(a.query, { pathPrefix: prefix, limit: a.limit ?? 10 });
      if (hits.length === 0) return text(`No documentation match for "${a.query}".`);
      return text(
        `${hits.length} result(s) for "${a.query}"\n` +
          `Prose only — upstream framework docs stop at v15 while we run ${tagOf("frappe")}. Confirm version-sensitive claims with grep_source.\n\n` +
          hits.map((h) =>
            `${h.title}  [${h.corpus}]${h.upstream_updated ? ` · upstream updated ${h.upstream_updated}` : ""}\n` +
            `    ${h.path}\n` +
            (h.url ? `    ${h.url}\n` : "") +
            `    ${h.snippet}`,
          ).join("\n\n"),
      );
    }

    case "read_doc": {
      const p = readPage(a.path);
      return text(
        `# ${p.title}\n` +
          (p.url ? `source: ${p.url}\n` : "") +
          (p.upstream_updated ? `upstream updated: ${p.upstream_updated}\n` : "") +
          `corpus: ${p.corpus}\n\n---\n\n${p.body}`,
      );
    }

    default:
      throw new Error(`unknown tool: ${name}`);
  }
}

const server = new Server(
  { name: "fsm-erpnext-docs", version: "0.1.0" },
  { capabilities: { tools: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS as unknown as any[] }));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  try {
    return await handle(req.params.name, (req.params.arguments ?? {}) as Record<string, any>);
  } catch (err) {
    // Surface the message as tool content rather than a protocol error: the common failures
    // here are "run sync-source.sh first", which the caller can act on.
    return { ...text(`Error: ${(err as Error).message}`), isError: true };
  }
});

await server.connect(new StdioServerTransport());
