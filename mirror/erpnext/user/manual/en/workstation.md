---
title: "Workstation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/workstation
upstream_updated: "28-02-2026 14:09:50"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Workstation

**A Workstation stores information regarding the place where the workstation operations are carried out.**

Data regarding the operation cost, rent, electricity can be stored here.

An Operation takes place at a Workstation. The Operation is the work performed and the Workstation is the place/machine where it is performed. For example, melting is an Operation that can be done at 10 different Workstations.

Note

An Operation can take place at multiple Workstations.

  

  

  

  

  

  

  

  

  

  

  

## How to create a Workstation

1.  Go to the Workstation list, click on New.
2.  Enter a name for the Workstation.
3.  Under Operating Costs, enter operating component with the cost:
4.  Electricity
5.  Rent
6.  Consumables
7.  Wages
8.  Save.

Optionally, you can enter a description for the Workstation.

* * *

### Operating Components

Using this table you can divide the different cost components and set it to the Operation.

![](https://docs.frappe.io/files/Screenshot%202025-08-19%20at%2012.57.24%20PM.png)

### Workstation Operating Component

User can also define the expense account per component company wise in the Workstation Operating Component.

![](https://docs.frappe.io/files/CleanShot%202026-02-19%20at%2012.20.21@2x.png)

* * *

A [Holiday List](https://docs.frappe.io/hr/holiday-list) can be added to exclude counting these days for the Workstation.

  

  

  

  

  

  

  

The hours when the Workstation will be Operational can be added. On adding a Holiday list, the days listed as holidays won't be counted as working for the Workstation.

Under Working Hours table, you can add start and end times for a Workstation. For example, a Workstation may be active from 9 am to 1 pm, then 2 pm to 5 pm. You can also specify the working hours based on shifts. While scheduling a [Work Order](https://docs.frappe.io/erpnext/work-order), the system will check for the availability of the Workstation based on the working hours specified.

Note

You can enable overtime for a Workstation in Manufacturing Settings.

  

  

  

  

![](https://docs.frappe.io/files/CleanShot%202026-02-19%20at%2012.22.41@2x.png)

After saving the Workstation, the following actions can be performed against it:

![](https://docs.frappe.io/files/CleanShot%202026-02-19%20at%2012.23.30@2x.png)

* * *

## Features

### Production Capacity

Production Capacity is the total number of jobs can be executed at the same time in the respective workstation.

![](https://docs.frappe.io/files/CleanShot%202026-02-19%20at%2012.24.54@2x.png)

* * *

  

* * *

## Related Topics

1.  [Bill Of Materials](https://docs.frappe.io/erpnext/bill-of-materials)
2.  [Operation](https://docs.frappe.io/erpnext/operation)
3.  [Routing](https://docs.frappe.io/erpnext/routing)
4.  [Work Order](https://docs.frappe.io/erpnext/work-order)
5.  [Job Card](https://docs.frappe.io/erpnext/job-card)
