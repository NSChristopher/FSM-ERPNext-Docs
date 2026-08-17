---
title: "Maintenance Visit"
source_url: https://docs.frappe.io/erpnext/user/manual/en/maintenance-visit
upstream_updated: "02-03-2026 16:09:09"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Maintenance Visit

**A Maintenance Visit is a visit made by an engineer to a Customer’s premise for maintenance work of an Item.**

To access the Maintenance Visit list, go to:

> Home > Support > Maintenance > Maintenance Visit

A Maintenance Visit is usually created from a Sales Order of type 'Maintenance'. ![SO Maintenance Visit](https://docs.frappe.io/files/so-maintenance-visit.png)

1.  Prerequisites

* * *

-   [Customer](https://docs.frappe.io/erpnext/customer)
-   [Item](https://docs.frappe.io/erpnext/item)

2.  How to create a Maintenance Visit

* * *

1.  Go to the Maintenance Visit list, click on New.
2.  The current date and time will be recorded, this can be edited.
3.  Select the Customer.
4.  Select the Maintenance Type whether Scheduled, Unscheduled, or Breakdown.
5.  Set the completion status whether 'Partially Completed' or 'Fully Completed'.
6.  Select the Item Code and Serial Number.
7.  Enter a Description of the maintenance, select the Sales Person performing the maintenance, and enter the work done.
8.  Save.

![Maintenance Visit](https://docs.frappe.io/files/maintenance-visit.png)

### 2.1 Additional Options when Creating Maintenance Visit

-   **Customer Feedback**: You can record any feedback given by the Customer regarding this Maintenance Visit.
    
-   The following fields will be fetched from the [Customer](https://docs.frappe.io/erpnext/customer) form:
    
    -   Customer Address
    -   Contact Person
    -   Territory
    -   Customer Group

3.  Related Topics

* * *

1.  [Warranty Claim](https://docs.frappe.io/erpnext/warranty-claim)
2.  [Maintenance Schedule](https://docs.frappe.io/erpnext/maintenance-schedule)
3.  [Sales Order](https://docs.frappe.io/erpnext/sales-order)
