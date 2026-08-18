---
title: "Attention required in Custom Apps"
source_url: https://docs.frappe.io/cloud/faq/custom_apps
upstream_updated: "18-06-2026 13:09:22"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Attention required in Custom Apps

![Attention Required badge](https://docs.frappe.io/files/Screenshot%202022-08-16%20at%2012.36.46%20PM.png)

This means that we are **not able to fetch the latest updates from the associated GitHub repository** for the app. This happens most probably because the Frappe Cloud GitHub app does not have the permission to access the repository.

Please make sure Frappe Cloud app has proper permissions from GitHub settings:

![](https://docs.frappe.io/files/EDYZBF1.png)

![](https://docs.frappe.io/files/sSXn2kA.png)

You can then retry fetching the latest update:

![Fetch Latest Updates in dropdown](https://docs.frappe.io/files/fetch_updates.png)

### Workaround: Attention required even after trying the above

If you're getting the error even after adding and removing the app on Frappe Cloud, please visit <[https://github.com/settings/installations/](https://github.com/settings/installations/)\> and then click the configure button next to the **Frappe Cloud** Github App.

![Configure Frappe Cloud Github](https://docs.frappe.io/files/Screenshot%202023-04-04%20at%2023-03-52%20Build%20software%20better%20together.png)

It should take you to another page with a URL like `https://github.com/settings/installations/<unique_number>`. Copy this number (or the URL as a whole).

Now, you can raise a support ticket stating the problem (or linking this doc page) with the number you copied so that we can quickly resolve the issue from our end.

### How to add python dependencies to my custom app? Eg: pandas

If you require to install pandas or any other python package for that matter, you need to add them in your dependency file rather than doing `pip install pandas`.

You can add python dependencies to your app by adding the name of the same in [pyproject.toml](https://pip.pypa.io/en/stable/reference/build-system/pyproject-toml/)  
file under `dependencies` or [requirements.txt](https://pip.pypa.io/en/stable/reference/requirements-file-format/) file (only one of the files should be present) present in the root folder of your custom app.

```
[project]
name = "insights"
authors = [
    { name = "Powerful Reporting Tool for Frappe Apps", email = "[email protected]"}
]
description = "Open Source Business Intelligence Tool"
requires-python = ">=3.10"
readme = "README.md"
dynamic = ["version"]
dependencies = [
    "pandas~=2.3.3",
    "SQLAlchemy==2.0.41",
    "python-telegram-bot==21.4",
    "duckdb~=1.4.3",
    "sqlglot<28.0.0"
]
```

You can check ERPNext's [pyproject.toml](https://github.com/frappe/erpnext/blob/develop/pyproject.toml) for reference.
