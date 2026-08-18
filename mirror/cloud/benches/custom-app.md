---
title: "How to install a custom app"
source_url: https://docs.frappe.io/cloud/benches/custom-app
upstream_updated: "24-07-2026 14:21:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# How to install a custom app

You can use your custom version/fork of the vanilla Frappe Framework.

Caution

We do not provide support for modified versions of the framework.

  

You can do so by simply following the add app flow inside your Bench.

![Screenshot 2024-11-20 112324](https://docs.frappe.io/files/Screenshot%202024-11-20%20112324.png "Screenshot 2024-11-20 112324.png")

This will replace the Vanilla Frappe Framework with your custom fork / version.

## Note

Please ensure, that the app being added, has a valid `pyproject.toml` file along with a key advertising the frappe version, like such:

  

`[tool.bench.frappe-dependencies]`  
`frappe = ">=16.0.0-dev,<17.0.0"`
