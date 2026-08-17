---
title: "Getting Information From Another Document In Print Format"
source_url: https://docs.frappe.io/framework/user/en/guides/reports-and-printing/getting-information-from-another-document-in-print-format
upstream_updated: "17-02-2026 10:41:17"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Getting Information From Another Document In Print Format

In a print format, you can get data from another document. For example, if you have a field called `sales_order` in Sales Invoice, then you can get the sales order details using `frappe.get_doc`:

```
{% set sales_order_doc = frappe.get_doc("Sales Order", sales_order) %}

{{ sales_order_doc.customer }}
```
