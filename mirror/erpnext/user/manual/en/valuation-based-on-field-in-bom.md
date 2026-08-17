---
title: "Raw material valuation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/valuation-based-on-field-in-bom
upstream_updated: "02-03-2026 18:34:50"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Raw material valuation

**Question:** What are for various options in `Valuation Based On` in the Bill Of Materials (BOM)?

**Answer:** There are 3 available options in the _Valuation Based On_ field:

![Nested BOM](https://docs.frappe.io/files/valuation-based-on-1.png)

**Valuation Rate:** Item valuation rate is defined based on it's purchase or manufacture value.

For Purchase Item, it is defined based on charges entered in the Purchase Receipt. If you don't have any Purchase Receipt made for an item or a Stock Reconciliation, then there won't be any Valuation Rate for that item.

**Price List Rate:** This option allows to pull item rates from [Price List.](https://docs.frappe.io/erpnext/item-price)

**Last Purchase Rate:** It will be the last Purchase (Order) Rate of an item.
