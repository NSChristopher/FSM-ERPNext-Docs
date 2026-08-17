---
title: "Permission Error Problems"
source_url: https://docs.frappe.io/erpnext/user/manual/en/report-permission-error
upstream_updated: "04-03-2026 18:10:08"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Permission Error Problems

**Question:** User has roles like Account User and Account Manager assigned. Still, when accessing  Account Receivable report, User is getting an error message of no permission the territory master.

![Screenshot 2024-06-21 at 2.31.40 PM](https://docs.frappe.io/files/Screenshot%202024-06-21%20at%202.31.40%20PM.png)

**Answer:**

As per the permission system in ERPNext, for the User to be able to access a form or a report, s(he) should have at-least read permission on all the link field in that form/report. Since Territory is a link field in Account Receivable report, please add a permission rule to let Account User/Manager have at-least Read permission on the Territory master. Please follow below-given steps to resolve this issue.

1.  Roles assigned to User are Account User and Account Manager.
2.  As indicates in the Error message, the user didn't have permission on the territory master. As per the default permission, none of the above role assigned to that User has any permission on the Territory master.
3.  To resolve this issue, I have assigned Account User permission to Read Territory master.

![Screenshot 2024-06-21 at 2.26.27 PM](https://docs.frappe.io/files/Screenshot%202024-06-21%20at%202.26.27%20PM.png)

As per this permission update, User should be able to access Account Receivable report fine.
