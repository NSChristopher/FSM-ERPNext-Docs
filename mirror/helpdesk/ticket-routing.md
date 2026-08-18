---
title: "Ticket Routing"
source_url: https://docs.frappe.io/helpdesk/ticket-routing
upstream_updated: "02-03-2026 11:44:32"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Ticket Routing

In Frappe Helpdesk, you can automate ticket routing using the Server Script feature. The `Server Script` DocType allows you to write server-side Python code without creating a custom app or deploying anything. Read more about server scripts from [here](https://docs.frappe.io/framework/user/en/desk/scripting/server-script).

## 1.Route tickets based on the type of ticket

![](https://docs.frappe.io/files/Screenshot%202025-08-19%20at%2011.16.11%E2%80%AFPM.png)

`agent_group` is the name of the field that translates to "Team".

```
if (doc.ticket_type == "Bug"):
    doc.agent_group = "Frappe Cloud"
    
elif (doc.ticket_type == "Customization"):
    doc.agent_group = "Billing"

else:
    doc.agent_group = "Product Experts"
```

## 2.Route tickets based on the type of email\_account

![](https://docs.frappe.io/files/Screenshot%202025-08-19%20at%2011.18.41%E2%80%AFPM.png)

```
if (doc.email_account == "Accounting"):
    doc.agent_group = "L1 Accounting"
    
elif (doc.email_account == "Warehouse"):
    doc.agent_group = "L2 Warehouse"

else:
    doc.agent_group = "L1"
```

  

## 3.Route tickets based on custom fields

To add custom fields follow [this](https://docs.frappe.io/helpdesk/field-dependency#-adding-a-custom-field).  
After adding custom fields you can write your script like this to route the tickets based on custom fields

![](https://docs.frappe.io/files/Screenshot%202025-08-19%20at%2011.20.27%E2%80%AFPM.png)

```
if (doc.custom_category == "Frappe Cloud"):
    doc.agent_group = "Frappe Cloud"
    
elif (doc.custom_category == "Accounting"):
    doc.agent_group = "Billing"

else:
    doc.agent_group = "Product Experts"
```
