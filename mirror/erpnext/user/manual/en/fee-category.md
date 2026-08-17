---
title: "Fee Category"
source_url: https://docs.frappe.io/erpnext/user/manual/en/fee-category
upstream_updated: "09-02-2026 18:02:47"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Fee Category

**Fee Category would form all the components for calculation of Fees or creation of Fee Structure.**

For example, Tuition Fees and Hostel fees would make the different categories of fees.

![Fee Category](https://docs.frappe.io/files/education-fee-category-1%20(1).png)

To access Fee Category, go to:

> Home > Education > Fees > Fee Category

To create a new Fee Category, go to the Fee Category list, and click on new. Add the **Name** and **Description** of the Fee Category.

![Fee Category](https://docs.frappe.io/files/education-fee-category-2.gif)

For example, Tuition Fees and Hostel fees would make the different categories of fees.

![Fee Category](https://docs.frappe.io/files/education-fee-category-1%20(1).png)

To access Fee Category, go to:

> Home > Education > Fees > Fee Category

To create a new Fee Category, go to the Fee Category list, and click on new. Add the **Name** and **Description** of the Fee Category.

![Fee Category](https://docs.frappe.io/files/education-fee-category-2.gif)

## Version 15.1

  

From Version 15.1.0 onwards, when a Fee Category is created an Item Master for the same Fee Category and is linked to the Fee Category.

  

![Screenshot 2024-02-23 at 8.18.15 PM](https://docs.frappe.io/files/Screenshot%202024-02-23%20at%208.18.15%20PM.png)

## Version 15.4

From 15.4.0 onwards, a child table named "Accounting Defaults" will be present inside the Fee Category DocType.

![Screenshot 2024-06-30 at 2.32.20 AM](https://docs.frappe.io/files/Screenshot%202024-06-30%20at%202.32.20%20AM.png)

  

  

**Usecase:**

1.  If the user wants to book income in different accounts within the same company. Basically allows user to book different fee category in different income accounts.
2.  If Institutes wants to take fees of class 1-4 in company X, and 4-8 in company Y and rest in company Z.
3.  If institutes wants to segregate the incomes and ledgers booked based on a particular branch of the institute.

**Company:** In which company the user wants accounting ledgers to be shown.

**Default Income Account:** In the company set above, in which account the user would want to book the income against for that particular Fee Category.

  

**Default Cost Center:** In the company set above, in which cost center you want the ledgers to be shown. This helps the use case where an educational institute has various branches and wants to segregate the incomes booked based on branch.

  

**Default Income Account & Cost center Scenarios are as follows:**

1.  If no defaults are set for the Fee Component. Then the default income account and the default cost center will be taken from the defaults set in the Company mentioned in the [Fee Structure](https://docs.frappe.io/education/fee-structure).
2.  If the defaults are set in the Item Group called "Fee Component", then the defaults will be used from the Item Group, for the Company selected in the Fee Structure.
3.  If the defaults are set in the Fee Category, then those defaults will be used against the Company selected in the Fee Structure.

  

**What happens behind the scenes?**

When a Fee Category is created, an Item is created in the Item DocType.  
When the user set the defaults in the Fee Category DocType, those defaults are also set in the Item which is created against the Fee Category. And when the Sales Invoice is created, those defaults are used and the ledger entries are created.
