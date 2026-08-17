---
title: "bench reinstall"
source_url: https://docs.frappe.io/framework/user/en/bench/reference/reinstall
upstream_updated: "17-02-2026 10:41:21"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# bench reinstall

## Usage

```
bench reinstall [OPTIONS]
```

## Description

Reinstall a site with the current apps. This will wipe all site data and start  
afresh. This is considered a destructive operation, hence, contains an  
interactive confirmation prompt by default.

> Note: This feature only exists for **MariaDB** sites currently. In the future,  
> they may be extended for **PostgreSQL** support as well.

## Options

-   `--admin-password` Administrator Password for reinstalled site
-   `--mariadb-root-username` Root username for MariaDB
-   `--mariadb-root-password` Root password for MariaDB

## Flags

-   `--yes` Skip confirmation for reinstall

## Examples

1.  Reinstall a site skipping the prompts for:

-   Confirmation for operation
-   MariaDB Root Password
-   Administrator Password

```
bench reinstall --site {site} --yes
--mariadb-root-password {db-pass}
--admin-password {admin-pass}
```

1.  Reinstall a site using an alternative user with _DBMS SUPER_ privileges.

```
bench reinstall
--mariadb-root-username {db-user}
--mariadb-root-password {db-pass}
```
