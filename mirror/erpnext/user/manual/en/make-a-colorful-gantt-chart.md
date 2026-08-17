---
title: "Make A Colorful Gantt Chart"
source_url: https://docs.frappe.io/erpnext/user/manual/en/make-a-colorful-gantt-chart
upstream_updated: "02-03-2026 12:43:57"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Make A Colorful Gantt Chart

ERPNext allows users to add colours to certain documents for better visual cues and representation. A good example of this would be the [Event Calendar](https://docs.frappe.io/erpnext/how-to-sync-doc-types-with-calendar), where, for each event you can add a colour.

We will be doing so by customizing [Tasks](https://docs.frappe.io/erpnext/tasks) under Projects module.

## Steps To Add Colours To The Gantt Chart

1.  Go to [Customize Form](https://docs.frappe.io/erpnext/customize-form) in the system and select _Task_ in _Enter Form Type_ option. Alternatively, you can reach this screen by going to **Menu > Customize** from the Task list or form.

![customize-form](https://docs.frappe.io/files/project-gantt-customize-form-1.gif)

1.  Add a new field in the doctype of fieldtype color.
2.  Check _In List View_ option.

![customize-form](https://docs.frappe.io/files/project-gantt-in-list.png)

1.  Save the form, go back to the Task list, and reload.
2.  When opening an existing or new Task, you should see a color field. Pick a color for the Task.

![customize-form](https://docs.frappe.io/files/project-gantt-pick-color.png)

1.  Go back to the Task list and switch to Gantt view.

![customize-form](https://docs.frappe.io/files/project-gantt-colors.png)
