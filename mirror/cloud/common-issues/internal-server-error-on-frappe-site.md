---
title: "Internal Server Error On Frappe Site"
source_url: https://docs.frappe.io/cloud/common-issues/internal-server-error-on-frappe-site
upstream_updated: "16-02-2026 17:05:19"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Internal Server Error On Frappe Site

More often than not, this error represents some application related issue. If your site is on custom bench group, then you can investigate the same with [logs](https://frappecloud.com/docs/logs) or [ssh access](https://frappecloud.com/docs/benches/ssh). It is a possibility that your custom app is throwing an error. You can view the same in **web.error.log**. Refer our [docs](https://frappecloud.com/docs/benches/debugging) for the same.

If you occassionally get a pop-up with the same message, it is likely that a background job is failing. In such cases, checking your **Scheduled Job Log, Error Log** and **worker.err.log** file should help.
