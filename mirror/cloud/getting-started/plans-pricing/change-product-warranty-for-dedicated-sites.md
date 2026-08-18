---
title: "Change product warranty for dedicated sites"
source_url: https://docs.frappe.io/cloud/getting-started/plans-pricing/change-product-warranty-for-dedicated-sites
upstream_updated: "15-06-2026 17:17:41"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Change product warranty for dedicated sites

## Overview

Product warranty determines whether your site on a dedicated server is covered by Frappe Cloud's support SLA. You can manage this setting directly from your site's actions panel.

  

**Note:** We do not provide product warranty for sites on <$100 Hetzner app server plans.

  

## Managing Warranty on Your Site

1.  Navigate to your site's detail page
2.  Go to **Site Actions**
3.  Click **Manage Product Warranty**
4.  Toggle the warranty setting and save

### Cooldown Period

To prevent frequent changes, each dedicated server has a **warranty cooldown period**. You can only change a site's warranty status once per cooldown window.

  

-   If the cooldown hasn't elapsed, the action will show you when the next change is available
-   The warranty setting applied when you first create a site doesn't count toward the cooldown — only subsequent changes do
-   You are free to disable product warranty on one site and enable it for others. However, only a fixed number of sites can have product warranty enabled at the same time.

  

* * *

  

## When You Create a New Site

When creating a site on a dedicated server, Frappe Cloud automatically picks the best plan based on your server's warranty configuration:

  

-   If your server's plan qualifies for product support, the site is created with both **Product Warranty** and **High Performance** enabled
-   If it doesn't qualify, the site is created with **High Performance** enabled but **Product Warranty** disabled

  

* * *

  

## Default Configuration

Warranty settings (cooldown period and quota) are configured at the server level. The platform-wide defaults are:

  

-   **Warranty cooldown:** 30 days
-   **Site warranty quota:** 5

  

These defaults apply to new dedicated servers. Settings on existing servers are not affected when defaults change.

  

If you'd like your cooldown period or warranty quota adjusted, please [contact support](https://frappecloud.com/support).

  

* * *

  

## Notes

The **Manage Product Warranty** action may not be visible for servers where product support is not applicable

  

* * *

  

_For implementation details, see [PR #6166](https://github.com/frappe/press/pull/6166)._
