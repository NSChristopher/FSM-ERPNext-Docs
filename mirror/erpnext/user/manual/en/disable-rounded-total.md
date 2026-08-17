---
title: "Disable Rounded Total"
source_url: https://docs.frappe.io/erpnext/user/manual/en/disable-rounded-total
upstream_updated: "04-03-2026 17:58:07"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Disable Rounded Total

All the sales transactions like Sales Order, Sales Invoice have Rounded Total in it. It is calculated based on the value of Grand Total. Moreover, Rounded Total is also visible in the Standard Print Formats.

> Note: The Rounded Total is a feature present in **Sales** transactions.

![Print Preview](https://docs.frappe.io/files/customize-disable-rounded-total-2.png)

However, if you wish to disable the same, you may follow the steps given below to hide the rounded total from Standard Print Formats, for all the sales transactions.

#### Step 1: Go to Global Defaults

From the Awesome Bar search for Global Defaults

#### Step 2: Disable Rounded Total

Check Disable Rounded Total, and click on save.

![Print Preview](https://docs.frappe.io/files/customize-disable-rounded-total.png)

To verify the changes, you should clear the cache and/or refresh your ERPNext account. Then your print formats shall not render value for the Rounded Total.

> Note: This setting will only affect Standard print formats.
