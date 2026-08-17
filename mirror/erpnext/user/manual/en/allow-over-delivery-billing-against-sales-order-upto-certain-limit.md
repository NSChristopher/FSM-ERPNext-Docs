---
title: "Allow Over Delivery/Billing"
source_url: https://docs.frappe.io/erpnext/user/manual/en/allow-over-delivery-billing-against-sales-order-upto-certain-limit
upstream_updated: "02-03-2026 18:34:03"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Allow Over Delivery/Billing

When creating a Delivery Note, system validates if item's qty is same as in the Sales Order. If item's qty has been increased, you will get the validation message of over-delivery or receipt.

Considering the case fo sales, if you want to be able to deliver more items than mentioned in the Sales Order, you should update "Allow over delivery or receipt upto this percent" in the Item master.

![Itemised Limit Percentage](https://docs.frappe.io/files/limit-1.png)

When creating an invoice, item's rate is also validated based on the preceding transaction like Sales Order. This also applies when creating Purchase Receipt or Purchaes Invoice from Purchase Order. Updating "Allow over delivery or receipt upto this percent" will be affective in all sales and purchase transactions.

For example, if you have ordered 100 units of an item, and if item's over receipt percent is 50, then you are allowed to make Purchase Receipt for upto 150 units.

Update global value for "Allow over delivery or receipt upto this percent" from Stock Settings. Value updated here will be applicable for all the items.

1.  Go to `Stock > Setup > Stock Settings`
2.  Set `Limit Percentage`.
3.  Save Stock Settings.

![](https://docs.frappe.io/files/TGPrUJY.png)
