---
title: "Workflow State"
source_url: https://docs.frappe.io/erpnext/user/manual/en/workflow-state
upstream_updated: "02-03-2026 23:35:37"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Workflow State

**A 'Workflow State' is a specific status that a document (such as a sales order, purchase order, or leave application) can be in during its lifecycle.**

Workflow states are crucial for managing multi stage approval processes, ensuring proper checks and balances, and maintaining the flow of operations.

Different Workflow States may be achieved before or after applying different Workflow Actions on them. If you want to create a Workflow where there are multiple approvals from manager, senior manager, general manager, etc, you can set the states for it from Workflow States.

![Screenshot 2024-05-27 at 10.12.28 AM](https://docs.frappe.io/files/Screenshot%202024-05-27%20at%2010.12.28%20AM.png)

The system represents different states in different colours based on the Style tagged to each stage.

-   Success - Green
-   Danger - Red
-   Inverse - Black
-   Primary - Dark Blue
-   Info - Light Blue
-   Warning - Orange

### Related Topics

1.  [Workflows](https://docs.frappe.io/erpnext/workflows)
2.  [Workflow Actions](https://docs.frappe.io/erpnext/workflow-actions)
3.  [Assignment Rule](https://docs.frappe.io/erpnext/assignment-rule)
