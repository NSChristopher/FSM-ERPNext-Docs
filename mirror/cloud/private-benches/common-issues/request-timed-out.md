---
title: "Request Timed Out"
source_url: https://docs.frappe.io/cloud/private-benches/common-issues/request-timed-out
upstream_updated: "24-04-2026 11:26:55"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Request Timed Out

If a particular action in your site (not all), say submission of a document takes too long and eventually ends with a **Request Timed Out** popup, it's an application issue assuming normal functioning of the server. In most cases we can't do much other than try [increasing the default http timeout](https://frappecloud.com/docs/benches/bench-config) of 2 minutes of web requests.

Here, the slowness could be in your python application or be due to [slow queries](https://frappecloud.com/docs/faq/mariadb-slow-queries-in-your-site).

If the action you're performing is part of your custom app, we'd suggest you look into try and optimizing the code so that it finishes faster. If you're pressed for time, you may also run the particular action from `bench console` after [ssh](https://frappecloud.com/docs/benches/ssh) as a workaround.

If the action is guaranteed to take long, consider converting the same to a [background job](https://frappeframework.com/docs/v14/user/en/guides/app-development/running-background-jobs).

On the off chance that the app is not part of custom app and all other activities in the site are going smoothly, please reach out to [ERPNext Support](https://erpnext.com/pricing) for help.
