---
title: "Audit Trail"
source_url: https://docs.frappe.io/framework/user/en/audit-trail
upstream_updated: "17-02-2026 10:41:13"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Audit Trail

#### **Description**

A tool for viewing the changes made to a submittable doctype across multiple amended versions. In a case where a submittable document is cancelled and amended, tracking changes made to the document becomes difficult using the Version doctype since the name of the document changes. Audit Trail can be used to view **atmost 5 previously amended versions** of a submittable doctype.

#### **Steps**

1.  Select the type of the document in the **Doctype** field.
2.  Select the name of the document in the **Document** field.
3.  Optionally, select the start and end dates in order to show the amended documents within the specified date range.
4.  Click on the Compare button to view the Audit Trail for the selected document.

  

* * *

**Fields Changed**

Values for the fields changed across the different versions.

![Screenshot 2023-12-03 at 5.32.42 PM](https://docs.frappe.io/files/Screenshot%202023-12-03%20at%205.32.42%E2%80%AFPM.png "Screenshot 2023-12-03 at 5.32.42 PM.png")

**Rows Updated**

Values for the child table fields changed across the different versions.

![Screenshot 2023-12-03 at 5.32.57 PM](https://docs.frappe.io/files/Screenshot%202023-12-03%20at%205.32.57%E2%80%AFPM.png "Screenshot 2023-12-03 at 5.32.57 PM.png")

**Rows Added / Rows Removed**

Rows added or removed for every child table across the different versions.

![Screenshot 2023-12-03 at 5.33.08 PM](https://docs.frappe.io/files/Screenshot%202023-12-03%20at%205.33.08%E2%80%AFPM.png "Screenshot 2023-12-03 at 5.33.08 PM.png")
