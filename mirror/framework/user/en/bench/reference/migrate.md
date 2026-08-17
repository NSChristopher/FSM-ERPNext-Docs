---
title: "bench migrate"
source_url: https://docs.frappe.io/framework/user/en/bench/reference/migrate
upstream_updated: "17-02-2026 10:41:21"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# bench migrate

## Usage

```
bench migrate [OPTIONS]
```

## Description

The migrate command updates the site's state to the current available apps. It  
performs a range of tasks, in order:

-   Run `before_migrate` Hooks
-   Run Application Patches
-   Synchronize Database Schema and Background Jobs
-   Synchronize Fixtures
-   Synchronize Dashboards, Desktop Icons and Web Pages
-   Updates Translations
-   Rebuild Search Index for all routes
-   Run `after_migrate` Hooks

This operation also updates the `touched_tables.json` file for the respective  
file and updates the App Versions in the "Installed Applications" DocType.

## Flags

-   `--skip-failing` Skip patches that fail to run
-   `--skip-search-index` Skip search indexing for web documents

## Examples

1.  Run migrations on an existing site.

```
bench --site {site} migrate
```

1.  Run migrations skipping rebuilding search index for web documents

```
bench --site {site} migrate --skip-search-index
```

2.  Run migrations skipping any failing patches.

```
bench --site {site} migrate --skip-failing
```

> Note: Skipping failing patches is not recommended for production use
