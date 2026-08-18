---
title: "Storage"
source_url: https://docs.frappe.io/drive/storage-quota
upstream_updated: "06-01-2026 17:21:16"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Storage

A team has a specific total storage limit, and a per-user limit. This can be configured in Desk (in the `Drive Team` DocType).

## Storage settings

Frappe Drive offers a comprehensive breakdown of your storage. You can see both the team's and your personal files'. We also highlight the files contributing most to your storage, if you wanted to cut down on your cloud storage.

![](https://docs.frappe.io/files/Storage.png)

## Adding Storage

### Frappe Cloud

On Frappe Cloud your storage limit is automatically handled by the plan you select and the corresponding disk space that plan has. Additionally, you can also use a disk storage add-on to increase your disk size.

## Self-hosted

You can set your storage limit inside your `Drive Team` DocType. Under the hood it's simply updating the `site_config`.
