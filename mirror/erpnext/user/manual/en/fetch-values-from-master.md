---
title: "Fetching Values From Master"
source_url: https://docs.frappe.io/erpnext/user/manual/en/fetch-values-from-master
upstream_updated: "02-03-2026 19:06:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Fetching Values From Master

To pull a value of a link on selection, use the `add_fetch` method.

  

add\_fetch(link\_fieldname, source\_fieldname, target\_fieldname)

### Example

Let' say you have created a Custom Field **VAT ID** (`vat_id`) in **Customer** and **Sales Invoice** and want to make sure that this value gets updated every time you select a Customer in a Sales Invoice.

To configure this, in the Sales Invoice Custom Script, you can add this line:

  

cur\_frm.add\_fetch('customer','vat\_id','vat\_id')
