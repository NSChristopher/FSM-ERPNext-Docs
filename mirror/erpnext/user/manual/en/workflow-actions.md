---
title: "Workflow Actions"
source_url: https://docs.frappe.io/erpnext/user/manual/en/workflow-actions
upstream_updated: "02-03-2026 23:35:37"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Workflow Actions

> Introduced in Version 11

**'Workflow Actions' is a single place where you can track and manage all pending actions you have to take on Workflows.**

Workflow Actions will send email notifications only if the 'Send Email Alert' checkbox is ticked in the Workflow that you've created.

To access Workflow Actions, go to:

> Home > Settings > Workflow Actions

If a User is eligible to take action on some workflows, emails will be sent to the user with the relevant document as attachment. From there the user can `Approve` or `Reject` the Workflow.

![Workflow Action Email](https://docs.frappe.io/files/workflow-actions-email.png)

Also the users will see entries in their Workflow Action list:

![Screenshot 2024-06-03 at 10.47.43 AM](https://docs.frappe.io/files/Screenshot%202024-06-03%20at%2010.47.43%20AM.png)

**Note:**

-   You can set email template for Workflow Actions on each state. The template might consist of a message for users to proceed with the next Workflow Actions.
-   Workflow Actions will not be created for a transition to optional states.

### Related Topics

1.  [Workflows](https://docs.frappe.io/erpnext/workflows)
2.  [Assignment Rule](https://docs.frappe.io/erpnext/assignment-rule)
