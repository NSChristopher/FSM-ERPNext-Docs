---
title: "Frappe listed as a Python dependency"
source_url: https://docs.frappe.io/cloud/private-benches/common-issues/frappe-listed-as-a-python-dependency
upstream_updated: "03-08-2026 12:56:17"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Frappe listed as a Python dependency

Your deploy was blocked with an error like this:

> ERPNext lists `frappe` under `[project]` `dependencies` in its pyproject.toml.  
> Remove `frappe` from `dependencies` and deploy again.

This means one of the apps in your bench group declares `frappe` as a Python package dependency in its `pyproject.toml`.

## Why this breaks the build

Bench installs Frappe and every Frappe app from their **git repositories**, not from PyPI. When an app lists `frappe` under `[project] dependencies`, pip goes looking for a package called `frappe` on PyPI instead. The only thing published there is an empty `0.0.1` placeholder, so the install either fails to resolve a version or replaces the real Frappe with a stub.

The same applies to any other Frappe app — `erpnext`, `hrms`, `payments` and so on. None of them are Python packages on PyPI.

## How to fix it

Remove `frappe` from the `dependencies` list in the app's `pyproject.toml`. Only third-party Python packages your app imports belong in that list.

```
[project]
name = "your_app"
dependencies = [
    "frappe>=15.0.0",   # remove this line
    "requests",
]
```

If you listed it to declare which Frappe versions your app supports, use the bench section instead — Frappe Cloud reads it when resolving app compatibility.

```
[tool.bench.frappe-dependencies]
frappe = ">=15.0.0,<17.0.0"
```

Commit the change, push it, then deploy again.

## If the app is not yours

Contact the app's developer and ask them to remove `frappe` from their `[project] dependencies`. Until they do, that app cannot be deployed.
