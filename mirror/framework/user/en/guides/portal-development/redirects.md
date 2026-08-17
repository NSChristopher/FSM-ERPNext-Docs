---
title: "Redirects"
source_url: https://docs.frappe.io/framework/user/en/guides/portal-development/redirects
upstream_updated: "17-02-2026 10:41:18"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Redirects

You can add redirects by adding the `website_redirects` hook.

The optional field `redirect_http_status` will allow you to specify a custom HTTP status code to use for the redirect - if not specified, the fallback is 301

### Examples

```
website_redirects = [
    # absolute location
    {"source": "/from", "target": "https://mysite/from"},

    # relative location
    {"source": "/from", "target": "/main", "redirect_http_status": 307},

    # use regex
    {"source": "/from/(.*)", "target": "/main/\1"}
]
```
