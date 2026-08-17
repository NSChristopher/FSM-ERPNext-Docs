---
title: "bench uninstall-app"
source_url: https://docs.frappe.io/framework/v15/user/en/bench/reference/uninstall-app
upstream_updated: "17-02-2026 10:41:21"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# bench uninstall-app

## Usage

```
bench uninstall-app [OPTIONS] APP
```

## Description

Remove Application and linked doctypes, modules from the site. Executing the  
vanilla command will check if the app exists on site before attempting to delete  
its modules and doctypes. The application may not be necessarily installed on  
the bench to run the `uninstall-app` command.

## Flags

-   `-y`, `--yes` To bypass confirmation prompt for uninstalling the app
-   `--dry-run` List all doctypes that will be deleted
-   `--no-backup` Do not backup the site
-   `--force` Force remove the app from site

## Examples

1.  Perform a dry run to see what would happen on running it on a particular  
    site.

```
bench --site {site} uninstall-app {app} --dry-run
```

1.  Don't take a backup before the application uninstall operation.

```
bench --site {site} uninstall-app {app} --no-backup
```

1.  Use force to uninstall application from site.

```
bench --site {site} uninstall-app {app} --force
```

2.  Skip the interactive prompt for confirmation of uninstall.

```
bench --site {site} uninstall-app {app} --yes
```
