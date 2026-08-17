---
title: "Workflow Transition Tasks"
source_url: https://docs.frappe.io/erpnext/user/manual/en/workflow-transition-tasks
upstream_updated: "02-03-2026 23:35:38"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Workflow Transition Tasks

> Note: To be added in version 16

## Introduction

Workflow Transition Tasks are actions that can be run during state transitions in workflows. Each Workflow Transition can link to a set of transition tasks.  
![Link to Workflow Transition Tasks](https://docs.frappe.io/files/Screenshot%202025-07-20%20at%202.06.27%E2%80%AFPM.png)

![A Typical set of transition tasks](https://docs.frappe.io/files/Screenshot%202025-07-20%20at%202.08.23%E2%80%AFPM.png)

Each Workflow Transition Task can have tasks of the following types:

1.  App-Defined Actions (specified by each Frappe app through hooks.py)
2.  [Server Scripts](https://docs.frappe.io/framework/user/en/desk/scripting/server-script)
3.  [Webhooks](https://docs.frappe.io/framework/user/en/guides/integration/webhooks)

![A server script transition task](https://docs.frappe.io/files/Screenshot%202025-07-20%20at%202.38.43%E2%80%AFPM.png)

On top of this, each transition task can be either:

1.  **Synchronous**: This is the default mode of transition tasks. All of the transition tasks run one-by-one when the state transition is initiated. Even if one of them fails, the transition is reversed.
2.  **Asynchronous**: This mode can be enabled using the 'Asynchronous' checkbox. Each asynchronous transition task runs after the state transition is completed, meaning it has zero influence over state completion, and is run in a separate background job of its own.

### App-Defined Actions

Each Frappe app defines them using the 'workflow\_methods' [hook](https://docs.frappe.io/framework/user/en/python-api/hooks).

Any dotted path method defined through the workflow\_methods hook has to accept `doc: Document` as the parameter, which is the document on which the transition is being applied.

An example of an app-defined task is:

```
# hooks.py
workflow_methods = [{"name": "Create a customer", "method":
					 "myapp.shop.doctype.kirana.create_customer"}]

# myapp/shop/doctype/kirana.py
def create_customer(doc):
    customer = frappe.new_doc("Customer")
    customer.customer_name = "Customer " + doc.name
    customer.customer_type = "Individual"

    customer.save()
```

These will be available in the 'Tasks' drop-down if any of the apps has provided them.  
![app-defined tasks](https://docs.frappe.io/files/Screenshot%202025-07-20%20at%202.56.05%E2%80%AFPM.png)

If you are an end user, you can not create app-defined actions on your own and will have to use server scripts as mentioned below.

  

### Server Scripts

These also take the `doc: Document` parameter and can be set using the 'Workflow Task' Script Type.  
![server script tasks](https://docs.frappe.io/files/Screenshot%202025-07-20%20at%203.00.48%E2%80%AFPM.png)

And then these have to be linked to in the transition task:  
![A server script transition task](https://docs.frappe.io/files/Screenshot%202025-07-20%20at%202.38.43%E2%80%AFPM.png)

### Webhooks

These can be created by setting the 'Doc Event' field of the webhook to 'workflow\_transition':  
![workflow_transition webhook](https://docs.frappe.io/files/Screenshot%202025-07-20%20at%203.03.12%E2%80%AFPM.png)

And then these have to be linked to in the transition task:  
![link to webhook](https://docs.frappe.io/files/Screenshot%202025-07-20%20at%203.13.25%E2%80%AFPM.png)

### Related Topics

-   [Workflow State](https://docs.frappe.io/erpnext/user/manual/en/workflow-state)
-   [Workflow Actions](https://docs.frappe.io/erpnext/user/manual/en/workflow-actions)
-   [Workflows](https://docs.frappe.io/erpnext/user/manual/en/workflows)
