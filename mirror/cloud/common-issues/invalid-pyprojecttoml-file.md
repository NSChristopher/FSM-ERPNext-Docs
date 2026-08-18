---
title: "Invalid pyproject.toml file"
source_url: https://docs.frappe.io/cloud/common-issues/invalid-pyprojecttoml-file
upstream_updated: "16-02-2026 17:05:23"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Invalid pyproject.toml file

If your build has failed due to this error then it means that the TOML syntax in your `pyproject.toml` file ([example](https://github.com/frappe/frappe/blob/0a814073043619e4621296b5fa6cf6a7c6406498/pyproject.toml)) is invalid.

For instance, you may have mentioned your the dependencies in the app's `pyproject.toml` like so:

```
dependencies = [
    Babel
    Click
    filelock
]
```

but the actual format is this:

```
dependencies = [
    "Babel~=2.13.1",
    "Click~=8.1.7",
    "filelock~=3.13.1",
]
```

To fix this issue:

1.  If the repository is not yours, contact the developer and ask them to fix the file.
2.  If the repository is yours, fix the file and push the changes to the repository.

Once the format has been fixed, you can retry the deploy.
