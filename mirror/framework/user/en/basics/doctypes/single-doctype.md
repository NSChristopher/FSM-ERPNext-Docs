---
title: "Single DocType"
source_url: https://docs.frappe.io/framework/user/en/basics/doctypes/single-doctype
upstream_updated: "17-02-2026 10:41:14"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Single DocType

A Single DocType is a DocType that has only one instance in the database. It is useful  
for persisting things like _System Settings_, which don't make sense to have multiple  
records.

![Single DocType](https://docs.frappe.io/files/single-doctype.png)

```
>>> settings = frappe.get_doc('System Settings')
>>> settings.notification_frequency
'Daily'
```

### Schema

Single DocTypes are stored in the `tabSingles` table in the database, with each property having its own record.

Columns:

-   `doctype`
-   `field`
-   `value`
