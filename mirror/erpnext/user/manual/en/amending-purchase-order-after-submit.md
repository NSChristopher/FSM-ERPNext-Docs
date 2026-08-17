---
title: "Amending Purchase Order after Submit"
source_url: https://docs.frappe.io/erpnext/user/manual/en/amending-purchase-order-after-submit
upstream_updated: "02-03-2026 18:28:57"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Amending Purchase Order after Submit

Rate and Qty in Purchase Order can now be amended after Submit using the `Update Items` button.

![Update Items](https://docs.frappe.io/files/po-update-items.png)

To Update Rate and Qty in a Submitted Purchase Order, click on the `Update Items` button. A dialog will pop up to let you make the change.

![Update Items](https://docs.frappe.io/files/po-update-items-rate-and-qty.gif)

Please Note the following validations and usecases:

-   Update Features checks if Purchase Order has Purchase Receipt and Purchase Invoice.
-   Qty can be updated for un-received and for partially-received Purchase Order. For Purchase Order with completed Purchase Receipt, it cannot be updated.
-   Rate can be updated for un-invoiced and partially-invoiced Purchase Order. For Purchase Order with submitted Purchase Invoice, it cannot be updated.
