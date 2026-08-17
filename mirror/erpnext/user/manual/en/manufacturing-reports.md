---
title: "Manufacturing Reports"
source_url: https://docs.frappe.io/erpnext/user/manual/en/manufacturing-reports
upstream_updated: "26-02-2026 21:23:23"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Manufacturing Reports

There are various reports in the Manufacturing module that help you track Work Order progress, production analytics, BOM reports, etc.

In all of these reports, you can set a chart to show a visual representation. To do this, click on the Set Chart button.

These reports can be accessed from:

> Home > Manufacturing > Reports

## Open Work Orders

Shows the open Work Orders which have not started production yet.

![Open Work Orders](https://docs.frappe.io/files/open-wo.png)

## Work in Progress Report

This report shows any work orders that have started and are in progress. The status of these Work Orders is 'In Process'.

![WIP report](https://docs.frappe.io/files/wip-report.png)

## Issued Items Against Work Order

Items that are issued to a Work Order and are transferred to the Work in Progress Warehouse are shown here.  
![Items Against WO](https://docs.frappe.io/files/items-against-wo.png)

## Completed Work Orders

Work Orders which are completed with all the quantities in it manufactured are shown in this report.

![Completed Work Orders](https://docs.frappe.io/files/completed-wo.png)

## Production Analytics

This report shows the overall analytics of all Work Orders.

![Production Analytics](https://docs.frappe.io/files/production-analytics.png)

## BOM Search

In this report, you can search for specific BOMs based on the raw materials items used in them, then open it. Useful if you have a lot of BOMs.  
![BOM search](https://docs.frappe.io/files/bom-search.png)

## BOM Stock Report

On selecting a BOM in this report, the raw material quantity in Warehouses will be shown. As you can see, the items which have insufficient quantity are shown in red and ones with enough quantity to manufacture the BOM Item are shown in green.

![BOM Stock Report](https://docs.frappe.io/files/bom-stock-report.png)
