---
title: "Item Valuation Setup and Transactions"
source_url: https://docs.frappe.io/erpnext/user/manual/en/item-valuation-transactions
upstream_updated: "02-03-2026 17:59:59"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Item Valuation Setup and Transactions

In ERPNext, Item's stock valuation is updated on the creation of one of the following transaction.

1.  Purchase Receipt
2.  Stock Entry of type Material Receipt
3.  Stock Reconciliation made for updating stock opening balance

You can select valuation method based on which item's value will be calculated. Valuation Method can be set globally for all the items from the Stock Settings.

![Download Backup](https://docs.frappe.io/files/item-valuation-1.png)

You can also set Valuation Method in the item master, especially when a valuation method for an item is different from the default Method as seen in the following screenshot.

![Download Backup](https://docs.frappe.io/files/item-valuation-2.png)

Note that once ledger entries are made for an item, this option will no longer be visible in the Item form.

[Click here to learn about the valuation methods available in the ERPNext, and how it works.](https://frappe.io/blog/erpnext-features/inventory-valuation-method-fifo-vs-moving-average)

### New in v16

In ERPNext v16, users can now select Valuation Method per company basis and a new field in the `Company` DocType has been added for the same. The old field in `Stock Settings` single DocType still remains and will only be used in certain cases where the reference document does not have a reference to any company (such as `Batch`). The valuation method will be fetched in the following order:

1.  `Item` level
2.  `Company` level
3.  `Manufacturing Settings` (global) level

Please set the valuation method in all the above levels accordingly to prevent incorrect stock valuations.
