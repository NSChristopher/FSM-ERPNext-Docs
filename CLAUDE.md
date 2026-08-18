# FSM-ERPNext-Docs — working guide

Platform knowledge for FSM-App. Read `README.md` first for what each layer is and how much to
trust it. This file is what to type, and what not to.

## The one rule

**Generated content is generated.** `index/`, `mirror/` and `vendor/` are written by
`scripts/`. Hand-editing them produces a fact that survives until the next sync and then
vanishes — the worst possible failure for a reference. If something is wrong, fix the
generator and re-run.

Durable, hand-written judgement belongs in `FSM-App/docs/reference/erpnext/` — above all
`v16-verified.md`, whose rule applies verbatim here: **if you did not read the source, it does
not go in.**

## Trust order

When two layers disagree, the earlier wins:

1. `source/` at the production tag — the thing itself
2. `index/` — derived from that source, never hand-written
3. `vendor/` — upstream prose that lives in git, pinned by SHA
4. `mirror/` — `docs.frappe.io` prose, **stops at v15 while we run v16**
5. Recall — not a source. The whole repo exists because recall about v16 is unreliable

`index/drift.md` sits outside this order: it describes the **devcontainer**, which is behind
production on purpose. Useful for "why does this behave differently on my machine", never for
"how does this behave" — that question is always about production.

## Installed vs available — never blur these

`index/` holds two tiers. `frappe` and `erpnext` are **installed**: what a tenant runs, and
what "the platform has this" means. `hrms`, `press`, `crm` and `helpdesk` are **available but
not installed** — indexed only so a miss can say *"not on your bench, but hrms ships it"*
instead of a bare "not found" that reads as "the platform cannot do this".

Every record carries `installed: 0|1`. When you add output that shows DocTypes:

- **Render the tiers separately.** Never one merged, ranked list — a reader who skims a mixed
  list will plan against something that does not exist on the bench.
- **Say NOT INSTALLED before the schema, not after.** Detail first, caveat later, gets skimmed.
- **Keep whitelisted methods installed-only.** A callable path from an app we do not run is
  not callable, and listing it beside real endpoints invites exactly the wrong call.

Adding an app to the available tier is a `pins.json` edit — it needs a `why`, which the server
prints when it returns a hit from that app.

## Layout

```
pins.json      every upstream ref, in one place. `source` must match FSM-App's
               PRODUCTION pin (production/Dockerfile + ci.yml), never the
               devcontainer script — see README § Pins
index/         generated from source, committed. The primary layer
mirror/        generated from docs.frappe.io, committed, with provenance front matter
vendor/        frappe_docker + bench docs, synced verbatim
source/        gitignored; `./scripts/sync-source.sh` materialises it in ~10s
mcp/           the MCP server (TypeScript, stdio) — src/{index,data,search}.ts
scripts/       sync-source.sh · sync-vendor.sh · build-index.mjs · crawl-docs.mjs
               build-drift.mjs · verify.mjs
```

## Commands

```bash
npm run rebuild       # sync + index + crawl + build, the whole pipeline
npm run build:index   # after a pins.json bump  (~10s)
npm run crawl         # re-mirror docs.frappe.io (~8 min)
npm run build:drift   # refresh index/drift.md (production vs devcontainer)
npm run verify        # end-to-end, drives the MCP server over real stdio
```

Run `npm run verify` before committing anything that touches `scripts/` or `mcp/`.

## Changing the extractors

`build-index.mjs` fails loudly on an empty index, and asserts the document lifecycle event
names still appear in the source that dispatches them. **Keep both guards.** A silently empty
index is the worst outcome this repo can produce: it would answer "the platform does not have
that" for every query, which is precisely the wrong answer, delivered confidently.

If an extractor stops matching after an upstream bump, that failure is the signal — fix the
pattern, do not relax the guard.

## Adding a tool to the MCP server

Tools are declared in `mcp/src/index.ts` (`TOOLS`) and dispatched in `handle()`. Two
conventions that are load-bearing:

- **Every response carries provenance.** Source-derived answers cite app + tag + `file:line`;
  mirrored prose carries its URL, its upstream edit date, and the caveat that it stops at v15.
  A reader must never have to guess whether an answer came from v16 source or v14 prose.
- **A miss explains itself.** "No DocType matching X" says *why* that is evidence of absence —
  the index covers everything both apps ship. This is the distinction the project has
  repeatedly got wrong in the other direction.

After editing, `npm run build:mcp && npm run verify`.
