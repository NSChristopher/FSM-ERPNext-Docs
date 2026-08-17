---
title: "Routing"
source_url: https://docs.frappe.io/erpnext/user/manual/en/routing
upstream_updated: "27-02-2026 17:53:11"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Routing

**Routing is a template of BOM Operations.**

A Routing stores all Operations along with the description, hourly rate, operation time, batch size, etc. Creating a Routing for your BOM Operations is useful when similar Operations are used for manufacturing different items.

* * *

### Prerequisites

-   [Operation](https://docs.frappe.io/erpnext/operation)
-   [Workstation](https://docs.frappe.io/erpnext/workstation)

* * *

## How to Create a Routing

1.  Go to the Routing list, click on New.
2.  Enter a name for the Routing.
3.  Enter the Operations in the BOM Operation table:
4.  Select the Operation.
5.  The default Workstation will be fetched.
6.  Enter the Hourly Rate for running this Operation.
7.  Enter the Operation Time in minutes.
8.  Enter the Batch Size, i.e. the number of units processed in this Operation.
9.  The Operating Cost will be calculated based on the Hourly Rate and the Operation Time.
10.  Save.

Once created, a Routing can be selected in a BOM to fetch the Operations stored in the Routing.

![](https://docs.frappe.io/files/CleanShot%202026-02-19%20at%2012.31.10@2x.png)

* * *

## Sequence ID in Routing

![](https://docs.frappe.io/files/image2679eb.png)

Sequence ID enforces the users to complete the operations sequentially via Job Card. In case a user tries to complete an operation before completing any of its precedent operations as per the Sequence ID, the system throws a validation error.

* * *

### Related Topics

1.  [Work Order](https://docs.frappe.io/erpnext/work-order)
2.  [Bill Of Materials](https://docs.frappe.io/erpnext/bill-of-materials)
