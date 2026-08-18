---
title: "Installing App APT Dependencies"
source_url: https://docs.frappe.io/cloud/faq/installing-app-apt-dependencies
upstream_updated: "27-02-2026 15:53:30"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Installing App APT Dependencies

While developing your app, you may use certain python dependencies; which you would add to your `requirements.txt` or `pyproject.toml` file. Some of these may require you to additionally install certain system level packages with some command, like:

```
sudo apt install ffmpeg
```

To do the same for Frappe Cloud, i.e, if your app has dependencies installable using Ubuntu's [APT](https://ubuntu.com/server/docs/package-management) package manager, you can list them in your custom app's `pyproject.toml` file like this:

```
[deploy.dependencies.apt]
packages = [
    "ffmpeg",
]
```

Frappe Cloud will check if it is present and install it if it is.

Here is an example from Frappe Drive: [github.com/frappe/drive](https://github.com/frappe/drive/blob/d5a0d33813885e59e49643c4c4b73f0af9f432a4/pyproject.toml#L33C1-L36C2)
