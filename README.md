# FSM — Frappe/ERPNext knowledge base

The platform knowledge for [FSM-App](https://github.com/NSChristopher/FSM-App), and an MCP
server that makes it answerable in one call.

It exists to answer one question cheaply: **does Frappe/ERPNext already do this, at the
version production actually runs?**

> **Which version.** FSM-App carries *three* Frappe/ERPNext pins (see its `CLAUDE.md`
> § Version pins). This repo indexes the **production + CI** pin — frappe `v16.31.0` /
> erpnext `v16.32.1` — because that is what shipped code runs against. The devcontainer's
> `v16.20.0` is deliberately behind; `index/drift.md` reports what differs, so a
> "works on my machine" gap is visible rather than surprising.

## Why this repo exists

`FSM-App/docs/reference/erpnext/v16-verified.md` is the most-cited document in that repo, and
nearly every entry records the same mistake: *we assumed the platform lacked X; it ships X.*
Two custom DocTypes were specced and struck after someone found Frappe ships `Webhook`
field-for-field. A deploy change was scoped for a PDF backend the base image already installs.

The reason it kept happening is structural. There is no v16 documentation anywhere:

- **`docs.frappe.io` is a Frappe Wiki site** — the content lives in that site's database, not
  a git repo. `frappe/frappe_docs` was **archived in December 2021**.
- **Framework docs stop at v15.** ERPNext's manual is unversioned. Production runs **v16.31.0 / v16.32.1**.
- **`frappe/frappe`'s in-repo changelog stops at v13**, and it ships no prose docs at all.

So for anything version-specific there is no document to find — only source. This repo makes
reading source the cheap path instead of the expensive one.

## Layers

| Layer | What it is | Trust |
| --- | --- | --- |
| `index/` | ~810 DocTypes, ~1,320 whitelisted methods, every hook key — **derived from source at the production tags**, committed | **Authoritative.** Generated, never hand-written |
| `source/` | Shallow checkouts of `frappe` + `erpnext` at the production pins — gitignored, ~10s to materialise | **Authoritative.** The thing itself |
| `vendor/` | `frappe_docker` and `bench` docs — the two upstream doc sets that really are in git | Upstream prose, pinned by SHA |
| `mirror/` | ~1,280 pages of `docs.frappe.io` converted to markdown, with provenance front matter | **Prose, stops at v15.** Corroborate anything version-sensitive |
| `index/drift.md` | Production vs devcontainer: what local dev cannot exercise, and what exists locally but **not** in production | Advisory — describes the *dev* box, not production |

The curated, FSM-specific distillation stays in `FSM-App/docs/reference/erpnext/`. This repo
holds the corpus; that folder holds the judgement.

## Use it

The `fsm-docs` MCP server is registered in `FSM-App/.mcp.json` and expects this repo as a
sibling checkout (or set `FSM_DOCS_ROOT` to an absolute path).

| Question | Tool |
| --- | --- |
| Does the platform already have this? | `find_doctype`, `find_method`, `find_hook` |
| Does its shape actually fit ours? | `describe_doctype` — read the `reqd` fields first |
| Prove it | `grep_source`, then `read_source` |
| What is the concept? | `search_docs`, `read_doc` |

`find_hook` with `lifecycle: true` returns the document event ordering
(`before_validate → validate → before_save → on_update → on_change`, and the
submit/cancel/delete/rename variants), each cited to the file that dispatches it.

A miss is meaningful here in a way a `grep` of FSM-App never is: the index covers everything
both apps ship, so "not found" is evidence about the platform, not about us.

## Build it

```bash
npm install
npm run sync          # source/ at the pins + vendor/ doc sets   (~15s)
npm run build:index   # index/ from source                       (~10s)
npm run crawl         # mirror/ from docs.frappe.io              (~8 min)
npm run build:mcp     # compile the MCP server
npm run verify        # end-to-end checks, incl. the MCP over stdio
```

`npm run rebuild` runs all of it. `npm run build:drift` regenerates `index/drift.md`.

`npm run verify` is not a synthetic test suite: each assertion restates a platform fact that
`v16-verified.md` records having been learned the expensive way — `Webhook`'s field set,
`Web Form.doc_type` being `reqd`, `Serial No.item_code` being `reqd`, the HMAC header's
location in source. If it passes, the server answers those without anyone reading source.

## Pins

`pins.json` is the single source of truth. Its `source` tags **must** stay in step with the
**production + CI** pin, which lives in two places and nowhere else:

- `FSM-App/infrastructure/production/Dockerfile` — `ARG FRAPPE_VERSION`
- `FSM-App/.github/workflows/ci.yml` — `FRAPPE_BRANCH` / `ERPNEXT_BRANCH`

**Do not point it at `scripts/devcontainer-init.sh`.** That is the devcontainer pin, which
FSM-App's `CLAUDE.md` calls out as behind the other two — a known divergence, not a target.
Indexing it would make this repo answer confidently about a platform production is not on,
which is exactly the failure it exists to prevent.

Note `frappe/erpnext:vX.Y.Z` is tagged with the **ERPNext** version, so the Frappe version
inside the production image differs from the image tag by design. `pins.json` states both
explicitly so nothing has to be inferred from the tag.

Currently: production **frappe v16.31.0 / erpnext v16.32.1**, devcontainer **v16.20.0**.

## Maintaining

- **`index/`, `mirror/`, `vendor/` are generated.** Never hand-edit them — the scripts
  overwrite. Fix the generator instead.
- Re-runs are diffable: an unchanged upstream page is rewritten byte-identically, so
  `git status` after a sync shows exactly what upstream actually moved.
- When the bench upgrades, bump `pins.json`, re-run `npm run rebuild`, and read the diff of
  `index/` — it *is* the upgrade's impact on the surface we build against.
