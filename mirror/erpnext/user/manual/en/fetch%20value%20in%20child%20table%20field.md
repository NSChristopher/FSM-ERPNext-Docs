---
title: "Fetch value in a child table field from Master"
source_url: https://docs.frappe.io/erpnext/user/manual/en/fetch%20value%20in%20child%20table%20field
upstream_updated: "02-03-2026 19:06:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Fetch value in a child table field from Master

### Sample Script to fetch expirydate field from Batch doctype to Sales Invoice Item table

Step 1: Create Custom Script for **Sales Invoice** (parent) doctype

Step 2: Script as below & Save

```
frappe.ui.form.on("Sales Invoice Item", "batch_no", function(frm, cdt, cdn) {
 var d = locals[cdt][cdn];
 frappe.db.get_value("Batch", {"name": d.batch_no}, "expiry_date", function(value) {
 d.expiry_date = value.expiry_date;
 });
});
```
