---
title: "Fees"
source_url: https://docs.frappe.io/erpnext/user/manual/en/fees
upstream_updated: "09-02-2026 18:02:47"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Fees

**In this document we can maintain the Fee Records of the students.**

At the time of submission of Fees by each student, a new Fees Record will be created wherein all the details of the student, Program they are enrolled in, Accounting information, etc. would be maintained.

To access Fees, go to:

> Home > Education > Fees > Fees

1.  Prerequisites

* * *

Before you create Fees record, it is advisable that you create the following first:

1.  [Student](https://docs.frappe.io/education/student)
    
2.  [Fee Category](https://docs.frappe.io/education/fee-category)
    
3.  [Fee Structure](https://docs.frappe.io/education/fee-structure)
    
4.  How to Create Fees
    

* * *

1.  Go to the Fees list and click on New.
2.  The **Institution** will be selected by default, which is editable, if required.
3.  Select and add the **Student** for whom the Fees record is being made. The name of the student will be fetched simultaneously.
4.  Add the **Due Date** of the payment of the Fees.
5.  Save.

![Fees](https://docs.frappe.io/files/education-fee-1.gif)

### 2.1. Additional Options while Creating Fees

-   The **Date** and **Posting Time** will be added by default as per the time and date on which the record is being made. However, if required, the same can be manually entered by checking the box **Edit Posting Date and Time**.
-   The Student can be notified of their Fee Payment Due Date by checking on the box **Send Payment Request**.

3.  Features

* * *

### 3.1. Student Details

Add all the relevant details of the student which includes **Program Enrollment**, **Program**, **Academic Term** and **Academic Year.** The **Student Email ID** gets fetched from the Student details given earlier.

![Fees](https://docs.frappe.io/files/education-fees-2.png)

### 3.2. Fee Structure

You can select a **Fee Structure** for the given Fees Record. The moment you do so, all the **Fee Components** will be auto-populated from the Fee Structure.

![Fees](https://docs.frappe.io/files/education-fee-4.gif)

### 3.3. Fee Components

You can also add the **Fee Components** by selecting and adding the **Fee Category**, **Description** and **Fee Amount**.

![Fees](https://docs.frappe.io/files/education-fees-5.png)

### 3.4. Printing Settings

-   Select and add the **Letter Head** to be used for printing the Fee Receipt.
-   Select and add the **Print Heading** for the Fee Receipt.

### 3.5. Accounts

Working with ERPNext allows you to update your account entries with extreme ease. Whenever a student submits their fees and it gets recorded in the system, your Accounts will get updated simultaneously.

To facilitate that smoothly, you can add your Accounts details in the fee structure.

-   **Receivable Account**: Enter the name of the Receivable Account for your Institution.
-   **Income Account**: Select and add the Income Account for your Institution.
-   **Company**: Select and add the Company under which all the payments are made. If there are multiple institutions in your ERPNext account, or if the Accounts are handled by a Sister Company.

### 3.6. Accounting Dimensions

-   **Cost Center**: Select and add the name of the Cost Center of your Institute for Accounting Dimensions.

![Fees](https://docs.frappe.io/files/education-fees-3.png)

### Payment

Directly make a payment from fee, select Mode of Payment in payment entry and submit the payment.

![Fee Payment](%7B%7Bdocs_base_url%7D%7D/v13/assets/img/education/fees/fee-payment.png)

### v15.1.0

Version 15.1.0 onwards, Sales Invoice will be created against a student and a Fee Schedule.

All the Fee Categories will be shown in the "Sales Invoice Item" Table.

P.S: When a new Fee Category is created, an Item is also created against it.

### v15.3.0

User will have an option to create Sales Order instead of Sales Invoice.

To enable Sales Order functionality.

Open Education Settings > Create Sales Order instead of Sales Invoice.

![Screenshot 2024-04-01 at 12.39.28 PM](https://docs.frappe.io/files/Screenshot%202024-04-01%20at%2012.39.28%20PM.png)
