---
title: "Delivery from Sales Invoice"
source_url: https://docs.frappe.io/erpnext/user/manual/en/update-stock-option-in-sales-invoice
upstream_updated: "02-03-2026 17:21:13"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Delivery from Sales Invoice

If you have items delivery and invoicing happening at the same time, you can create delivery from with Sales Invoice itself. Sales Invoice has field called **Update Stock**, just before Item table. If this field is checked, on submission of Sales Invoice, stock of Item will be deducted from selected Warehouse.

![Update Stock via Sales Invoice](https://docs.frappe.io/files/update-stock-via-sales-invoice.png)

On checking Update Stock, Sales Invoice Item will show relevant fields like Warehouse, Serial No., Batch No., Item valuation etc.

On submission of Sales Invoice, with general ledger posting, stock ledger posting will happen as well.
