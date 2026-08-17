---
title: "How To Create Custom Fields During App Installation"
source_url: https://docs.frappe.io/framework/v15/user/en/guides/app-development/how-to-create-custom-fields-during-app-installation
upstream_updated: "17-02-2026 10:41:16"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# How To Create Custom Fields During App Installation

Your custom app can automatically add **Custom Fields** to DocTypes outside of your app when it is installed to a new site.

To do this, add the new custom fields that your app requires, using the Frappe web application.

In your `hooks.py` file, add `"Custom Fields"`

fixtures = \["Custom Field"\]

Export fixtures before you commit your app with:

$ bench --site mysite export-fixtures

This will create a new folder called `fixtures` in your app folder and a `.csv` or `.json` file will be created with the definition of the custom fields you added.

This file will be automatically imported when the app is installed in a new site or updated via `bench update`.

Note: You can also add single DocTypes like "Website Settings" as fixtures
