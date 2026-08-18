---
title: "App authoring guidelines"
source_url: https://docs.frappe.io/cloud/marketplace/app-authoring-guidelines
upstream_updated: "16-02-2026 17:05:30"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# App authoring guidelines

This page contains guidelines for publishers who are writing Frappe apps to publish on the Frappe Cloud Marketplace

If you are new to Frappe apps, learn more about it on [frappeframework.com](https://frappeframework.com). You can also get started by following the [Tutorial](https://frappeframework.com/docs/user/en/tutorial).

1.  We recommend having a settings doctype in your app to configure global behaviour of your app's functionality.
2.  Make sure your app supports the current stable version of Frappe and ERPNext (if applicable).  
    You can also write version specific code by checking the version of these apps in your python code:

```
from frappe import __version__ as frappe_version
from semantic_version import Version

if Version(frappe_version).major >= 13:
    # version 13 or above
    pass
else:
    # version 12 or below
    pass
```

1.  Don't override base functionalities provided by Frappe. For e.g., Frappe ships with authentication pages like /login for Login & Sign Up, /update for resetting passwords. If you override these, you will have to implement their functionality again.
2.  Extend base functionalities by using [hooks](https://frappeframework.com/docs/v13/user/en/python-api/hooks) provided by the framework.

### Linters and Server Tests CI

For approval, it is mandatory to have a passing GitHub Actions (or similar) CI in your app's GitHub repository. Usually, new apps have the boilerplate, but you can use [this two workflows](https://github.com/Arus-Info/ERPNext-Australian-Localisation/tree/d178b87331381c8bb43322067e713deb04e8165e/.github/workflows) as reference (`ci.yml` and `linters.yml`) and make necessary changes based on your apps's requirements.

## Run Semgrep Locally

We suggest you to run Semgrep locally in your app. To do that follow these steps:

```
$ pip install semgrep
$ git clone --depth 1 https://github.com/frappe/semgrep-rules.git frappe-semgrep-rules
$ semgrep --config ./frappe-semgrep-rules/rules --config r/python.lang.correctness .
```
