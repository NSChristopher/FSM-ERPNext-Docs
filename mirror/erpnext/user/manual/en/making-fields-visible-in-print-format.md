---
title: "Customizing Field Visibility in Print Format"
source_url: https://docs.frappe.io/erpnext/user/manual/en/making-fields-visible-in-print-format
upstream_updated: "02-03-2026 23:35:30"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Customizing Field Visibility in Print Format

Each transaction has a Standard Print Format. In the Standard format, only certain fields are displayed by default. If a user wants to display a particular field in the Standard format, it can be customized by using Customize Form tool.

Let's assume in the Sales order, we need to make Shipping Address field visible in the standard print format.

#### Step 1: Go to Customize Form

> Home > Customization > Form Customization > Customize Form

#### Step 2: Document Type

As per our scenario, Sales Order will be selected as Document Type.

![Document Type](https://docs.frappe.io/files/customize-make-fields-visible.png)

#### Step 3: Disable Print Hide

Click to open field to be made visible in the Standard Print Format. Disable **Print Hide** field.

![Uncheck Print Hide ](https://docs.frappe.io/files/customize-visible%20in%20print.gif)

#### Step 4: Update

Update Customize Form to save changed. Reload your ERPNext account, and then check Print Format for confirmation.
