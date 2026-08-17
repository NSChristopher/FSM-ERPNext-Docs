---
title: "Retaining Sample Stock"
source_url: https://docs.frappe.io/erpnext/user/manual/en/retain-sample-stock
upstream_updated: "27-02-2026 17:50:30"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Retaining Sample Stock

**Sample stock is a batch of any Items stored for analyzing should the need arise later.**

The Item for which sample stock is stored can be raw material, packaging material, or finished product.

## 1\. Prerequisites

Before using sample retention, it is advised that you create the following first:

-   [Item](https://docs.frappe.io/erpnext/item)
-   [Batch](https://docs.frappe.io/erpnext/batch)
-   [Warehouse](https://docs.frappe.io/erpnext/warehouse)

## 1\. How to Set Sample Retention Warehouse in Stock Settings

It is advised to create a new Warehouse separately for retaining samples and not use it in production.

![Sample Retention Warehouse](https://docs.frappe.io/files/sample-warehouse.png)

### 1.2 Enable Retain Sample in Item master

Retain Sample is based on Batch hence Has Batch No should be enabled first. Check Retain Sample and set the Maximum allowed samples for a batch.

![Retain Sample](https://docs.frappe.io/files/retain-sample.png)

### 1.3 Make Stock Entry

-   Whenever a [Stock Entry](https://docs.frappe.io/erpnext/stock-entry) is created with the purpose as Material Receipt, for items which have Retain Sample enabled, the Sample Quantity can be set during that Stock Entry. You need to select the Batch Number for the Item/Items. Sample quantity cannot be more than the Maximum sample quantity set in Item Master.

![Retain Sample](https://docs.frappe.io/files/material-receipt-sample.png)

-   On submission of this Stock Entry, button 'Make Retention Stock Entry' will be available to make another Stock Entry for the transfer of sample items from the mentioned batch to the retention warehouse set in Stock Settings.

![Sample Retention Button](https://docs.frappe.io/files/sample-retention-button.png)

-   Clicking this button will direct you to new Stock Entry of type 'Material Transfer'. This entry is transfering your sample retention from your Target Warehouse (Stores) to the Sample Retention Warehouse. It will contain all the information, verify and click Submit.

![Retain Sample](https://docs.frappe.io/files/material-transfer-sample.png)

### 2\. Related Topics

1.  [Warehouse](https://docs.frappe.io/erpnext/warehouse)
