---
title: "Daily Usage limit reached"
source_url: https://docs.frappe.io/cloud/daily-usage-limit-reached
upstream_updated: "25-05-2026 10:38:59"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Daily Usage limit reached

![](https://docs.frappe.io/files/image1ab73f.png)

This happens when you exceed CPU hours allotted for your site. If you're confused as to how you reached your CPU hours limit, you can check the **Insights** tab of your site.

![](https://docs.frappe.io/files/image59cb58.png)

Here, you can scroll down to **Advanced analytics** to see:the **Slowest Requests** and **Slowest Background Jobs** graphs. This will give you an idea of which endpoints in your site take most time/requests. We can take a look at the following graphs as an example

![](https://docs.frappe.io/files/hyEEfqL.png)

Here, the red bars are seem to take relatively long and should be looked into.

![](https://docs.frappe.io/files/uhKZI97.png)

It is sorted in descending order, so the first endpoints in the list are usually slowest.
