---
title: "Customizing DocTypes"
source_url: https://docs.frappe.io/framework/v15/user/en/basics/doctypes/customize
upstream_updated: "17-02-2026 10:41:14"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Customizing DocTypes

If you are using the same application for multiple site (tenants), each site may want specific customization on top of the DocType. For example if you have a "Customer" DocType each user may want addition Custom Fields or naming or other configuration that would be specific to them.

To allow for site-specific customization, Frappe Framework has multiple approaches

1.  Custom Field: A DocType that keeps track of site-specific fields.
2.  Property Setter: This keeps track of specific properties that are overridden in DocType and its children.
3.  Customize Form: A view that helps you easily customize DocTypes
4.  [Client Script](https://docs.frappe.io/framework/v14/user/en/desk/scripting/client-script): Additional client-side event handlers.
5.  [Server Script](https://docs.frappe.io/framework/v14/user/en/desk/scripting/server-script): Additional server-side business logic.
6.  Custom DocPerm: Additional Permission (handled via Role Permission Manager)

## Customize Form

Customize Form is a view that helps you override properties of a DocType and add Custom Fields via a single view.

![Customize Form](https://docs.frappe.io/files/customize-form.png)

When you change any properties of the DocType via Customize Form, it will not change the underlying DocType but add new custom objects to override those properties. This is done in a seamless manner.

#### Adding Custom Links and Actions

> Added in Version 13

You can also add / edit Links and Actions via Customize Form. These changes are saved in the same DocTypes (`DocType Link` and `DocType Action`) but with a `custom` property checked.

These addtional (custom) configurations are automatically applied when metadata is fetched via `frappe.get_meta`.
