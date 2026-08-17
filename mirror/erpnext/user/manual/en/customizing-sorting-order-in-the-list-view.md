---
title: "Sorting Order in List View"
source_url: https://docs.frappe.io/erpnext/user/manual/en/customizing-sorting-order-in-the-list-view
upstream_updated: "04-03-2026 17:58:07"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Sorting Order in List View

**Question:** I want records in my Item List sorted based on Descending Order of Item Code.

**Answers:** Following are the steps to customize Sort Order for the Item master. These steps will be applicable for customizing Sort Order for the other documents as well.

#### Step 1: Go to Customize Form

> Home > Customization > Form Customization > Customize Form

#### Step 2: Select DocType

Select document type for which Sort Order is to be customized.

![Sort Order field](https://docs.frappe.io/files/customize-sorting-order-2.png)

#### Step 3: Update Sort Details

In the Customize Form, you will find these fields.

![Sort Order Field](https://docs.frappe.io/files/customize-sort-field.png)  
![Sort Order field](https://docs.frappe.io/files/customize-sorting-order-1.png)

1.  Sort Field: Select the Field based on which sorting will be done. It will be "Item\_Code" field in the scenario.
2.  Sort Order: Sort Order will be two possible options, **Asc** for ascending, and **Desc** for descending.
