---
title: "Import Error due to Workflow"
source_url: https://docs.frappe.io/erpnext/user/manual/en/importing-historical-data-in-a-doctype-with-workflow
upstream_updated: "26-02-2026 21:23:21"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Import Error due to Workflow

When you import a document of a DocType which has a workflow, you shouldn't be able to set the workflow\_state to a state except the first.  
For example, your Workflow has 4 states: **Draft**, **Sent for Approval**, **Approved**, **Rejected**.  
You prepare records to import using Data Import Tool, and you set the workflow\_state of each record to **Approved**. The system will not allow this, because you are transitioning from the state **Draft** to **Approved** which is not a valid transition according to your workflow.  
The solution is to disable the workflow, import your data and then enable the workflow again.
