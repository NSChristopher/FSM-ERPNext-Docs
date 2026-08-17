---
title: "Portal Roles"
source_url: https://docs.frappe.io/framework/v15/user/en/guides/portal-development/portal-roles
upstream_updated: "17-02-2026 10:41:18"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Portal Roles

Version: 7.1+

Roles can be assigned to Website Users and they will see menu based on their role

1.  A default role can be set in **Portal Settings**
2.  Each Portal Menu Item can have a role associated with it. If that role is set, then only those users having that role can see that menu item
3.  Rules can be set for default roles that will be set on default users on hooks

![Portal Settings](https://docs.frappe.io/files/portal-settings.png)

#### Rules for Default Role

For example if the Email Address matches with a contact id, then set role Customer or Supplier:

default\_roles = \[  
{'role': 'Customer', 'doctype':'Contact', 'email\_field': 'email\_id',  
'filters': {'ifnull(customer, "")': ('!=', '')}},  
{'role': 'Supplier', 'doctype':'Contact', 'email\_field': 'email\_id',  
'filters': {'ifnull(supplier, "")': ('!=', '')}},  
{'role': 'Student', 'doctype':'Student', 'email\_field': 'student\_email\_id'}  
\]
