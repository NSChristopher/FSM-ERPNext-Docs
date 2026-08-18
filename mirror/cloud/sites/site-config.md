---
title: "Site Config"
source_url: https://docs.frappe.io/cloud/sites/site-config
upstream_updated: "19-02-2026 12:59:07"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Site Config

[Site Config](https://frappeframework.com/docs/v13/user/en/basics/sites#site-config) is the Frappe Framework way of specifying environment variables.

Site Config let's you configure options that is specific to a single site.

For e.g.

-   Configure an Email account to send emails from.
-   Disable Website Cache
-   Disable [Global Search](https://docs.erpnext.com/docs/user/manual/en/using-erpnext/Global-search)
-   Enable [Server Scripts](https://docs.erpnext.com/docs/user/manual/en/customize-erpnext/server-script)

## Update Site Config

1.  Go to the **Site Config** tab.
2.  Enter values in the corresponding input field.
3.  Click on **Update Configuration**.

![](https://docs.frappe.io/files/w9v6T9E.png)

# FAQ

## Why can't I enable developer mode?

Developer Mode lets you create standard documents like DocType, Page, Report, Workspace, etc. These are standard as they are persisted on disk as JSON files. These must be part of an app. You cannot add these files to the standard Frappe and ERPNext apps. Therefore, you will need to [create your own app](https://frappecloud.com/docs/benches/custom-app).

  

Furthermore, apps on Frappe Cloud are ephemeral. We pull a fresh copy from Github every time a new bench is deployed.Therefore, even if you do manage to enable developer mode, your changes shall not persist.

That is why you cannot enable developer mode on Frappe Cloud. You must create those features as a part of a custom app and then upload it on Frappe Cloud to use it.
