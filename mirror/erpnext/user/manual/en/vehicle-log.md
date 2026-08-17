---
title: "Vehicle Log"
source_url: https://docs.frappe.io/erpnext/user/manual/en/vehicle-log
upstream_updated: "29-05-2026 10:36:25"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Vehicle Log

**Vehicle Log is used to enter Odometer readings, Fuel Expenses and Service Expense details.**

To access Vehicle Log, go to:

> Human Resources > Fleet Management > Vehicle Log

## **1\. Prerequisites**

Before creating a Vehicle Log, it is necessary that you create the following documents:

-   [Vehicle](https://docs.frappe.io/hr/vehicle)

## **2\. How to create a Vehicle Log**

1.  Go to Vehicle Log list, click on New.
2.  Select License Plate and Employee.
3.  Enter Odometer Reading information such as Date and Odometer (reading).
4.  Enter Refueling Details \[optional\] such as Fuel Qty, Fuel Price, Supplier and Invoice Ref.

![](https://docs.frappe.io/files/vehicle-log1ddd1a8.png)

5.  Additionally, Vehicle Service Details can also be added as shown (optional).

![](https://docs.frappe.io/files/image18b180.png)

6.  Save. Once the information is saved, the Model and Make values will be automatically fetched.

## **3\. Features**

Fleet Management in Frappe HR allows you to automatically create an [Expense Claim](https://docs.frappe.io/hr/expense-claim) against your Vehicle Expenses.

### **3.1 Make Expense Claim against Vehicle Expenses**

Click on Create Expense Claim button. This button appears only in case of Submitted Vehicle Logs.

![](https://docs.frappe.io/files/vehicle-log-expense-claim-buttonca7bfe.png)

  

When you click on 'Make Expense Claim',

1.  The Date, Employee, Expense total are fetched over to the created Expense Claim.
2.  The sum of Fuel Expenses and Service Expenses is calculated and fetched over to Expense Claim Amount.
3.  Employee can submit the Expense Claim for further processing.

![](https://docs.frappe.io/files/vehicle-log-expense-claim47633b.png)

## **4\. Related Topics**

1.  [Expense Claim](https://docs.frappe.io/hr/expense-claim)
