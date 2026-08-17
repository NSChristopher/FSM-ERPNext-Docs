---
title: "bench generate-pot-file"
source_url: https://docs.frappe.io/framework/user/en/bench-generate-pot-file
upstream_updated: "17-02-2026 10:41:21"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# bench generate-pot-file

### Usage

```
bench generate-pot-file [OPTIONS]
```

### Description

This generates a template file for translations, holding all translatable strings of an app (but no translations). The template file will be written to the file `[app_module]/locale/main.pot`.

For many of our apps, this command is run automatically on a regular basis via _GitHub Actions_.

### Options

-   `--app` This parameter let's you specify an app, if you want to generate the POT file for one app only. Default: all apps.

### Examples

Re-generate the POT file for ERPNext:

```
bench generate-pot-file --app erpnext
```

This will extract all translatable strings from `apps/erpnext` and write them to `apps/erpnext/erpnext/locale/main.pot`
