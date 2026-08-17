---
title: "Opening Stock"
source_url: https://docs.frappe.io/erpnext/user/manual/en/opening-stock
upstream_updated: "06-03-2026 17:07:01"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Opening Stock

**Opening Stock is the amount and value of materials that a company has available for sale or use at the beginning of an accounting period.**

The closing Stock of the previous accounting period becomes the opening Stock of the current accounting period.

## 1\. Prerequisites

-   Create [Warehouses](https://docs.frappe.io/erpnext/warehouse).
-   Link Warehouse to the appropriate accounting ledgers.

## 2\. Opening Stock for Non-serialised Items

To post opening stock, visit the [Stock Reconciliation](https://docs.frappe.io/erpnext/stock-reconciliation) page.

## 3\. Opening Stock for Serialised and Batched Items

Create the [Batch](https://docs.frappe.io/erpnext/batch) and [Serial No](https://docs.frappe.io/erpnext/serial-no) records beforehand. To post opening stock for serialised and batched items:

1.  Go to **Stock > Stock Transactions > Stock Entry > New**.
2.  Select 'Material Receipt' in 'Stock Entry Type'.
3.  Set `Is Opening`as `Yes`.
4.  Select the Warehouse in 'Default Target Warehouse'.
5.  In the Items table, select Item Code, Qty and Basic rate.
6.  For batched items, select Batch No.
7.  For serialised items, select Serial No.
8.  Save and Submit.

  

### 5\. Related Topics

1.  [Accounting Of Inventory Stock](https://docs.frappe.io/erpnext/accounting-of-inventory-stock)
2.  [Stock Entry](https://docs.frappe.io/erpnext/stock-entry)
3.  [Stock Reconciliation](https://docs.frappe.io/erpnext/stock-reconciliation)
