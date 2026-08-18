---
title: "Bench Config"
source_url: https://docs.frappe.io/cloud/benches/bench-config
upstream_updated: "27-02-2026 15:53:30"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Bench Config

You may set site config variables on a bench so that it [applies for all the sites](https://frappeframework.com/docs/user/en/basics/sites#common-site-config-json) deployed under it.

![](https://docs.frappe.io/files/DGXrOWZ.png)

  

### Special case: http timeout

You may also set **httptimeout** in seconds (default: 120) as a special case to specify time gunicorn workers wait for request to process before throwing 504 request error. This will affect the custom api endpoints you define.

![](https://docs.frappe.io/files/nAlWmZH.png)
