---
title: "Project Costing"
source_url: https://docs.frappe.io/erpnext/user/manual/en/project-costing
upstream_updated: "26-02-2026 21:23:23"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Project Costing

Each project has multiple tasks associated with it. To track the actual cost of a Project, primarily in terms of services, a User has to create a Timesheet based on the time spent on a Task within a Project. You can track the service cost against a Project in the following ways.

## Activity Type

Activity Type is a master of services offered by your personnel. You can add a new Activity type from:

> Home > Projects > Activity Type > New

![Screenshot 2024-06-21 at 3.13.26 PM](https://docs.frappe.io/files/Screenshot%202024-06-21%20at%203.13.26%20PM.png)

## Activity Cost

Activity Cost is a master where you can track billing and costing rate for each Employee, for each Activity Type.

![](https://docs.frappe.io/files/Screenshot%202026-01-09%20at%2011.59.23%E2%80%AFAM.png)

## Timesheet

Based on the time spent on the Project-Task, an Employee will create a Timesheet.

![](https://docs.frappe.io/files/Screenshot%202026-01-09%20at%2012.04.13%E2%80%AFPM.png)

On selection of the Activity Type in the Time Log, Billing and Costing Rate will be fetched for that Employee from the respective Activity Cost.

Multiplying these rates with total no. of hours in the Time Log gives Costing Amount and Billing Amount for the specific Time Log.

## Costing in Project and Task

Based on all the Timesheets created for specific Tasks, its costing will be updated in the respective Task.

![](https://docs.frappe.io/files/Screenshot%202026-01-09%20at%2012.12.15%E2%80%AFPM.png)

Same way, the Project cost will be updated based on Timesheets created against each of its associated tasks and the cost of the Project gets updated simultaneously.

![](https://docs.frappe.io/files/Screenshot%202026-01-09%20at%2012.49.27%E2%80%AFPM.png)
