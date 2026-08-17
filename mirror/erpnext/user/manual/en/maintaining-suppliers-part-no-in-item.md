---
title: "Maintaining Supplier's Item Code In the Item master"
source_url: https://docs.frappe.io/erpnext/user/manual/en/maintaining-suppliers-part-no-in-item
upstream_updated: "02-03-2026 18:28:24"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Maintaining Supplier's Item Code In the Item master

For each item, code assigned might differ from the code your supplier has given to that same item. ERPNext allows you to track Supplier's Item Code in the item master. Also you can fetch Supplier's Item Code in your purchase transactions, so that they can easily recognize item referring to their Item Code.

#### 1\. Updating Supplier Item Code In Item

In the Item master, under Supplier Details section, enter Item Code as given by the Supplier to this item.

![Supplier Item Code](https://docs.frappe.io/files/supplier-item-code.png)

#### 2\. Supplier's Item Code In Transactions

Each purchase transaction has field in the Item table where Supplier's Item Code is fetched. This field is hidden in form as well as in the Standard print format. You can make it visible by changing property for this field from [Customize Form.](https://docs.frappe.io/erpnext/customize-form.html)

Go to print view, click on Menu > customize, enter a new print format name, look for the Items table, click on the **Select columns** button in it. You'll see the following screen. Now select the "Supplier Part Number" checkbox.

![Supplier item part print format](https://docs.frappe.io/files/supplier-item-code-print-format.png)

Supplier Item Code will only be fetched in the purchase transaction, if both Supplier and Item Code selected in purchase transaction is mapped with value mentioned in the Item master.

![Supplier Item Code in transaction](https://docs.frappe.io/files/supplier-item-code-in-purchase-order.png)
