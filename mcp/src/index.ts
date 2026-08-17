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
  APPS, type App, type DocType,
  doctypes, whitelist, hooks, controllerEvents,
  grepSource, readSourceFile, readPage, pinNote, tagOf,
} from "./data.js";
import { searchDocs } from "./search.js";

const APP_ENUM = { type: "string", enum: [...APPS], description: "Restrict to one app." };

const TOOLS = [
  {
    name: "find_doctype",
    description:
      "Search the ~810 DocTypes Frappe and ERPNext ship in production (frappe v16.31.0 / erpnext v16.32.1). Use this BEFORE designing a new DocType — the answer is often that the platform already has one. Returns each match with its module, required fields and flags, which is usually enough to tell whether it actually fits.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: { type: "string", description: "Case-insensitive substring or regex matched against the DocType name (e.g. 'webhook', 'serial', '^Sales')." },
        app: APP_ENUM,
        module: { type: "string", description: "Restrict to a module, e.g. 'Stock', 'Accounts', 'Integrations'." },
        limit: { type: "number", description: "Max results (default 25)." },
      },
      required: ["pattern"],
    },
  },
  {
    name: "describe_doctype",
    description:
      "Full schema for one DocType as it exists in production: every field with its type and reqd/unique flags, permissions, links, child tables, autoname. Use this to answer 'does this actually fit our shape?' — a required field you cannot satisfy is the usual reason a close-sounding DocType is wrong.",
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
      "Regex search the Frappe and ERPNext source at the production tag. This is the citation machine: use it to PROVE a platform claim before acting on it. Absence of something in our own repo is never evidence about the platform — this is.",
    inputSchema: {
      type: "object",
      properties: {
        pattern: { type: "string", description: "POSIX extended regex (git grep -E)." },
        app: APP_ENUM,
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
        app: { ...APP_ENUM, description: "Which app's checkout to read from." },
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
          enum: ["all", "framework", "erpnext", "frappe_docker", "bench"],
          description: "Restrict to one corpus (default 'all').",
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

async function handle(name: string, a: Record<string, any>) {
  switch (name) {
    case "find_doctype": {
      const re = safeRegex(a.pattern, "i");
      let hits = doctypes().filter((d) => re.test(d.name));
      if (a.app) hits = hits.filter((d) => d.app === a.app);
      if (a.module) hits = hits.filter((d) => (d.module ?? "").toLowerCase() === String(a.module).toLowerCase());
      if (hits.length === 0) {
        return text(
          `No DocType matching /${a.pattern}/i at ${pinNote()}\n\n` +
            `That is real evidence of absence — this index covers every DocType both apps ship. ` +
            `Consider grep_source for a non-DocType mechanism before building one.`,
        );
      }
      const limit = a.limit ?? 25;
      const shown = hits.slice(0, limit);
      return text(
        `${hits.length} DocType(s) matching /${a.pattern}/i · ${pinNote()}\n\n` +
          shown.map(doctypeLine).join("\n\n") +
          (hits.length > limit ? `\n\n…${hits.length - limit} more; narrow the pattern or raise limit.` : "") +
          `\n\nUse describe_doctype for the full field list before concluding one fits.`,
      );
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
      ];
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
        app: a.app as App | undefined,
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
        `${a.app}@${tagOf(a.app as App)} · ${a.path}\n\n` +
          readSourceFile(a.app as App, a.path, a.start, a.end),
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
