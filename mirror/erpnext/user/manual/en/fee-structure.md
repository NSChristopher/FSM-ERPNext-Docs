---
title: "Fee Structure"
source_url: https://docs.frappe.io/erpnext/user/manual/en/fee-structure
upstream_updated: "09-02-2026 18:02:47"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Fee Structure

**A Fee Structure is a template that can be used while making Fees records or generating them via the Fee Schedule.**

The Fee structure can be fetched while creating the [Fees](https://docs.frappe.io/education/fees) for each student.

![Fee Structure](https://docs.frappe.io/files/education-fee-structure-2.png)

To access fee Structure, go to:

> Home > Education > Fees > Fee Structure

1.  Prerequisites

* * *

Before creating a Fee Structure, it is advisable to create the following first:

1.  [Academic Term](https://docs.frappe.io/education/academic-term)
    
2.  [Academic Year](https://docs.frappe.io/education/academic-year)
    
3.  [Program](https://docs.frappe.io/education/program)
    
4.  [Student Category](https://docs.frappe.io/education/student-category)
    
5.  How to create a Fee Structure
    

* * *

1.  Go to the fee structure list and click on New.
2.  Select and add the **Program** and other details for the fee structure.
3.  In the Components Table, enter the **Fees Category** and **Amount**.
4.  Save and Submit.

![Fee Structure](https://docs.frappe.io/files/education-fee-structure-1.gif)

### 2.1. Additional Options while creating a Fee Structure.

-   Enter the basic details like **Student Category**, **Academic Term** and **Academic Year**.
-   In the components table, add the **Description** for the Fees Category.

2.  Features

* * *

### 2.1. Accounts

Working with ERPNext allows you to update your account entries with extreme ease. Whenever a student submits their fees and it gets recorded in the system, your Accounts will get updated simultaneously.

To facilitate that smoothly, you can add your Accounts details in the fee structure.

-   **Receivable Account**: Enter the name of the Receivable Account for your Institution.
-   **Income Account**: Select and add the Income Account for your Institution.
-   **Company**: Select and add the Company under which all the payments are made. If there are multiple institutions in your ERPNext account, or if the Accounts are handled by a Sister Company. Sales Invoice will be created against the company added in Fee Structure.

### 2.2. Accounting Dimensions

-   **Cost Center**: Select and add the name of the Cost Center of your Institute for Accounting Dimensions.

![Fee Structure](https://docs.frappe.io/files/education-fee-structure-3.png)

3.  After submitting the Fee Structure

* * *

Once you have submitted the Fee Structure, you will be able to create the [Fee Schedule](https://docs.frappe.io/education/fee-schedule) from within Fee Structure.

![Fee Structure](https://docs.frappe.io/files/education-fee-structure-4.png)

##### **Old flow**

![fee_sch_old](https://docs.frappe.io/files/fee_sch_old.gif)

4.  Version 15.1.0

* * *

From Version 15.1.0 onwards user can create multiple Fee Schedules from Fee Structure DocType by clicking on "Create Fee Schedule".

The Fee Component table now has the discount option, which can be used by various Institutes to give discount to a particular Student Category.

The total amount which the user will put shall be the amount for the total year, and if the user wants they can be further bifurcated using the "Create Fee Schedule". After clicking on the button a modal will be opened, user will be prompted to select a fee plan, adjust the fees and select student group.

While creating the Fee structure, Company can be set, against which all the ledger entries will be created.

If you want to create a fee schedule just for a particular Academic Term, then you may fill the Academic Term Field.

Here is the demo:

![fee_sch_demo_new](https://docs.frappe.io/files/fee_sch_demo_new.gif)
