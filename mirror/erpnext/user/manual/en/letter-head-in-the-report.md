---
title: "Letter Head in the Report"
source_url: https://docs.frappe.io/erpnext/user/manual/en/letter-head-in-the-report
upstream_updated: "04-03-2026 16:41:01"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Letter Head in the Report

In the reports, Letter Head is fetched from the Company master.

To have the company's Letter Head fetched correctly in the report, please ensure that you have updated the default Letter Head in the Company master.

> Explore > Accounting > Company

![Letter Head](https://docs.frappe.io/files/using-print-format.png)

In a Company master, if no Letter Head is set as default, then in the reports, Letter Head having Default field checked will be fetched.

![Letter Head](https://docs.frappe.io/files/using-print-format-1.png)

If you are managing multiple companies in a single ERPNext account, then ensure that for each Company, default Letter Head is set in the Company master.

After updating Letter Head in the Company master, refresh your ERPNext account, and then check the print format of a report.
