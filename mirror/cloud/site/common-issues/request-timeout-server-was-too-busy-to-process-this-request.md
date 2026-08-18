---
title: "Request Timeout: Server was too busy to process this request"
source_url: https://docs.frappe.io/cloud/site/common-issues/request-timeout-server-was-too-busy-to-process-this-request
upstream_updated: "24-04-2026 12:55:11"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Request Timeout: Server was too busy to process this request

This happens when a SQL query times out due to not getting a lock. This indicates a bug in the application. Some other job may also be acquiring a lock on a related table, causing the issue. Any recent [controller hook](https://docs.frappe.io/framework/user/en/basics/doctypes/controllers#controller-hooks) or [scheduled job](https://docs.frappe.io/framework/user/en/api/background_jobs) added should be reviewed.

One easy way to debug this is to perform the action that triggers it and while it is happening, check the [processlist](https://frappecloud.com/docs/site-process-list) of your site to see which queries are running.

Checking [slow queries](https://frappecloud.com/docs/faq/mariadb-slow-queries-in-your-site) is also a good idea.
