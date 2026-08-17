---
title: "Dynamic Pages"
source_url: https://docs.frappe.io/framework/user/en/guides/portal-development/context
upstream_updated: "17-02-2026 10:41:18"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Dynamic Pages

You can render pages dynamically using Jinja templating language. To query data, you can update that `context` object that you pass to the template.

This can be done by adding a `.py` file with the same filename (e.g. `index.py` for `index.md`) with a `get_context` method.

### Example

If you want to show a page to see users, make a `users.html` and `users.py` file in the `www/` folder.

In `users.py`:

```
import frappe
def get_context(context):
 context.users = frappe.get_list("User", fields=["first_name", "last_name"])
```

In `users.html`:

```
### List of Users



{% for user in users %}
 2. {{ user.first_name }} {{ user.get("last_name", "") }}

{% endfor %}
```
