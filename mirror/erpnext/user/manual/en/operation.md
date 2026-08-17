---
title: "Manufacturing Operation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/operation
upstream_updated: "05-07-2026 10:57:00"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Manufacturing Operation

**An Operation refers to any manufacturing operation performed on the raw materials to process it further in the manufacturing path.**

The Operation master stores a single manufacturing operation, its description and the Default Workstation for the Operation.

![](https://docs.frappe.io/files/CleanShot%202026-02-19%20at%2012.45.22@2x.png)

* * *

## Prerequisites

Before creating and using an Operation, it is advised that you create a [Workstation](https://docs.frappe.io/erpnext/user/manual/en/workstation) first.

* * *

## How to create an Operation

1.  Go to the Operation list, click on New.
2.  Enter a name for the Operation, for example, cutting.
3.  Select the Default Workstation where the Operation will be performed. This will be fetched in BOMs and Work Orders.
4.  Select a Quality Inspection Template for the operation in the Job Card section. It will be fetched on the Job Card for that particular operation when Work Order is created. When a new Quality Inspection is created from the Job card, then the same Quality Inspection Template is set for the Quality Inspection.
5.  Optionally, add a description to describe what the Operation involves.
6.  Save.

* * *

Once saved, the following can be created against an Operation:

![](https://docs.frappe.io/files/CleanShot%202026-02-19%20at%2012.17.04@2x.png)
