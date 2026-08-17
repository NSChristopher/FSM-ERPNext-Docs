---
title: "Calculating Freight in taxes in ERPNext"
source_url: https://docs.frappe.io/erpnext/user/manual/en/calculatin-freight-in-taxes-in-erpnext
upstream_updated: "02-03-2026 18:29:22"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Calculating Freight in taxes in ERPNext

## **Use case: To calculate freight forwarding charges with tax rate**

When freight is supposed to be calculated in forwarding charges as a tax rate, we can follow the steps as below:

-   You can create a ledger in the taxes account specifically in Chart of Accounts, else you can consider GST tax account in the taxations for calculation of the Freight charges.

![](https://docs.frappe.io/files/4GSyff2.png)

-   Now create an Item with the name : **Freight and Forwarding**

![](https://docs.frappe.io/files/xOovUcM.png)

-   You can now create Purchase Invoice for the Supplier and add this item to calculate the Taxes related to the freight. You can set the freight tax based on the Net total or Item Quantity as per the company policy.

![](https://docs.frappe.io/files/2Nh2r9p.png)
