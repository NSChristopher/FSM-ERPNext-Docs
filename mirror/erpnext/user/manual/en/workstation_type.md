---
title: "Workstation Type"
source_url: https://docs.frappe.io/erpnext/user/manual/en/workstation_type
upstream_updated: "26-02-2026 21:23:23"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Workstation Type

If users have the same types of multiple Workstations (Machines) and users want to auto-assign jobs to the available workstation based on workstation type then this feature is the good option for them. A Workstation Type document will allow you to set the same operating cost to multiple operations by just setting the Workstation Type in the Operations table in [BOM](https://docs.frappe.io/erpnext/user/manual/en/bill-of-materials) or [Routing](https://docs.frappe.io/erpnext/user/manual/en/routing).

![](https://docs.frappe.io/files/CleanShot%202026-02-19%20at%2012.10.36@2x.png)

After adding Workstation Type, users has to assign the Workstation Type to the respective Workstation and set the Workstation Type to the respective Operation in the BOM.

![](https://docs.frappe.io/files/CleanShot%202026-02-19%20at%2012.11.38@2x.png)

After setting up Workstation Type when user make the Work Order with Operations system will create Job Cards against the Operation and set the available Workstation based on the Workstation Type set in the BOM.

![](https://docs.frappe.io/files/CleanShot%202026-02-19%20at%2012.13.04@2x.png)
