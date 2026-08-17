---
title: "Stock Reservation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/stock-reservation
upstream_updated: "02-03-2026 16:27:34"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Stock Reservation

> Introduced in Version 15

Stock reservation, also known as inventory reservation, refers to the practice of setting aside a specific quantity of stock or inventory for a particular purpose or customer.

### 1\. Prerequisites

-   Enable Stock Reservation in Stock Settings. ![stock-settings](https://docs.frappe.io/files/stock-settings.png)

### 2\. Stock Reservation against Sales Order

-   Create a Sales Order. ![sales-order](https://docs.frappe.io/files/sales-order.png)
-   Check the reserve stock for items you want to reserve. ![sales-order-item](https://docs.frappe.io/files/sales-order-item.png)
-   Click on **Stock Reservation**, then select **Reserve**. Choose the warehouse and quantity, then click on the **Reserve Stock** button. ![sales-order-reserve](https://docs.frappe.io/files/sales-order-reserve.gif)
-   Stock reservation entries are created against the sales order items. ![stock-reservation-entries](https://docs.frappe.io/files/stock-reservation-entries.gif)

### 3\. Stock Reservation from Pick List

-   Create a Sales Order.
-   Create a Pick List for the Sales Order.
-   In Pick List click on **Stock Reservation**, then select **Reserve**, the Stock Reservation Entries will be created against the Pick List. ![sales-order-pick-list-reserve](https://docs.frappe.io/files/sales-order-pick-list-reserve.gif)

### 4\. Auto Reserve Stock on Purchase

-   Navigate to Stock Settings and enable **Auto Reserve Stock for Sales Order on Purchase**.
-   Create a Sales Order.
-   Create a Material Request from the Sales Order.
-   Create Purchase Order from Material Request.
-   Complete the process by creating a Purchase Receipt for the Purchase Order. The stock will be automatically reserved upon submission of the Purchase Receipt.

### 5\. Stock Unreservation

There are two ways to unreserve the stock.

1.  Stock Unreservation from Sales Order or Pick List:
    
    -   Open a document and click on **Stock Reservation > Unreserve** button, the listed Stock Reservation Entries get cancelled. ![sales-order-unreserve](https://docs.frappe.io/files/sales-order-unreserve.gif)
2.  Unreserve the stock from the Stock Reservation Entry DocType:
    
    -   2.1 Open a Stock Reservation Entry and cancel it by clicking the **Cancel** button. ![stock-reservation-entry-cancel](https://docs.frappe.io/files/stock-reservation-entry-cancel.gif)
    -   2.2 Go to the Stock Reservation Entry List, select the entries you wish to cancel, and then click on **Actions > Cancel**. ![stock-reservation-entries-cancel](https://docs.frappe.io/files/stock-reservation-entries-cancel.gif)

### 6\. Related Topics

1.  [Sales Order](https://docs.frappe.io/erpnext/sales-order)
2.  [Pick List](https://docs.frappe.io/erpnext/pick-list)
