---
title: "Setting Limits for your Site"
source_url: https://docs.frappe.io/framework/v15/user/en/bench/guides/settings-limits
upstream_updated: "17-02-2026 10:41:22"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Setting Limits for your Site

> Note: This feature has been deprecated since Version 12

Frappe v7 has added support for setting limits and restrictions for your site.  
These restrictions are set in the `site_config.json` file inside the site's folder.

{  
"db\_name": "xxxxxxxxxx",  
"db\_password": "xxxxxxxxxxxx",  
"limits": {  
"emails": 1500,  
"space": 0.157,  
"expiry": "2016-07-25",  
"users": 1  
}  
}

You can set a limit by running:

bench --site \[sitename\] set-limit \[limit\] \[value\]

You can set multiple limits at the same time, by running

bench --site \[sitename\] set-limits --limit \[limit\] \[value\] --limit \[limit-2\] \[value-2\]

The valid limits you can set are:

-   **users** - Limit on the number of maximum users for a site
-   **emails** - Limit on the number of emails sent per month from the site
-   **space** - Limit on the maximum space the site can use (GB)
-   **email\_group** - Limit on the maximum number of members allowed in an Email Group
-   **expiry** - Expiry date for the site (YYYY-MM-DD within quotes)

Example:

bench --site site1.local set-limit users 5

You can check your usage by opening the "Usage Info" page from the toolbar / AwesomeBar. A limit will only show up on the page if it has been set.

![Doctype Saved](https://docs.frappe.io/files/usage_info.png)
