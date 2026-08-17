---
title: "Stock Ledger Report"
source_url: https://docs.frappe.io/erpnext/user/manual/en/stock-ledger
upstream_updated: "26-02-2026 21:23:22"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Stock Ledger Report

**A Stock Ledger Report is a detailed record that keeps track of stock movements for a company.**

Inward or outward transactions related to Manufacturing, Purchasing, Selling, and Stock Transfers are recorded in the Stock Ledger which then is reflected in the Stock Ledger Report.

It reflects the quantity and value of stock **issued, received, or transferred** along with the stock item and its warehouse details.

It can be referred when the **Perpetual Inventory** system is enabled, as this report reflects the history of all your stock transactions. It presents a more granular view of the stock transactions.

## Stock Ledger Report Attributes

-   **Incoming Rate**: It reflects the actual value of the stock at which it was brought under your inventory.  
    It reflects the same value as entered in the _Rate_ field of the document.
    
-   **Balance Value**: It represents the total value of the remainder stock in the inventory. It is the product of Valuation Rate and Balance Quantity of a stock item.
    
-   **Valuation Rate**: It is calculated based upon the valuation method selected.
    

Here is how Stock Ledger Report represents a **Stock Entry** of type _Material Receipt_.

![Stock Ledger Report](https://docs.frappe.io/files/stock-ledger.png)

It reflects an item **Chair** of quantity _1000 units_ with Incoming Rate (Basic Rate) as _Rs.3000_ received in warehouse _Stores - L_ along with calculating Valuation Rate and Balance Value.

You can click on **Voucher #** to open the document this transaction was created from.

Stock Ledger entries are generated from the following transactions:

-   Sales Invoice, Purchase Invoice (with _Update Stock_ checked)
-   Delivery Note
-   Purchase Receipt
-   Stock Entry
-   Stock Reconciliation

You can add fields from the previously mentioned Document Types by clicking on Menu > Add Column.
