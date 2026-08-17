---
title: "Quality Procedure"
source_url: https://docs.frappe.io/erpnext/user/manual/en/quality_procedure
upstream_updated: "26-02-2026 21:23:22"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Quality Procedure

**A Quality Procedure is a Standard Operating Procedure (SOP) used as a reference to carry out routine actions**

A standard operating procedure (SOP) is a set of step-by-step instructions compiled by an organization to help the employees execute routine operations. SOPs aim to achieve efficiency, quality output and uniformity of performance while reducing miscommunication and failure to comply with industry regulations.

A Quality Procedure can be of two types:

1.  A Procedure consisting of simple steps that you must follow to achieve a [Quality Goal](https://docs.frappe.io/erpnext/user/manual/en/quality_goal)
2.  A procedure having sub-Procedures which may also have its own steps

To access the Quality Procedure list, go to:

> Home > Quality > Goal and Procedure > Quality Procedure

## How to create a Quality Procedure

1.  Go to the Quality Procedure list, click on New.
2.  Enter a name for the Quality Procedure.
3.  In the Processes table, enter Process Descriptions.
4.  **Child Procedure**: If the Quality Procedure being created a is a parent procedure that contains sub-procedures, link the sub-procedure here. On doing this, the current procedure becomes a parent and the 'Is Group' checkbox is enabled.
5.  Save.  
    Quality Procedure can also be saved without entering the Process descriptions if the title is self explanatory.

![](https://docs.frappe.io/files/Screenshot%202026-01-22%20at%2011.12.11%E2%80%AFPM.png)

The 'Parent Procedure' is linked to the child procedure. For example 'Issue Classification' needs to be done before a resolution and hence 'Issue Resolution' is the parent here:

![](https://docs.frappe.io/files/Screenshot%202026-01-22%20at%2011.16.49%E2%80%AFPM.png)

## Features

#### 1\. Using Quality Procedure in Quality Goal

Once a Quality Procedure is created, it can be used in a [Quality Goal](https://docs.frappe.io/erpnext/user/manual/en/quality_goal):

![](https://docs.frappe.io/files/Area3ae47b.gif)

#### 2\. Sub Procedures

Process can either be just a instruction or a different Quality Procedure. You can link a Quality Procedure as a sub-procedure to another one:

![](https://docs.frappe.io/files/Screenshot%202026-01-22%20at%2011.24.39%E2%80%AFPM.png)
