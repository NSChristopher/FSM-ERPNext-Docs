---
title: "Loyalty points redemption in POS"
source_url: https://docs.frappe.io/erpnext/user/manual/en/loyalty-points-redemption-in-pos
upstream_updated: "02-03-2026 18:36:51"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Loyalty points redemption in POS

In ERPNext POS module, the invoices are auto generated. You can set your complete POS system right with the following configuration steps:

-   Create a Loyalty program in the doctype: You can set Single Tier or a Multiple Tier Program based on the slabs existing in the amount of Purchase that is done in ERPNext.

![](https://docs.frappe.io/files/GPSIGPX.png)\* Once the loyalty program is set, you can create a Customer and link the Loyalty program to it.

![](https://docs.frappe.io/files/9Wphzgr.png)Once this Customer is linked to the Loyalty program, you can now setup your POS profile if it is not set yet:  
![](https://docs.frappe.io/files/Lw5UhFp.png)  
Now, you can go to POS transaction:\* Select Customer

-   Add items
-   Pay
-   Check the field --> **Redeem Loyalty Points**

![](https://docs.frappe.io/files/s2Jps8N.png)
