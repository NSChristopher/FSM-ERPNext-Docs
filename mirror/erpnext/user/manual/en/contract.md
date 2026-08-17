---
title: "Contract | ERPNext Documentation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/contract
upstream_updated: "23-07-2026 22:47:53"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Contract | ERPNext Documentation

**A contract is a legally binding agreement between a Supplier and a Customer over the sale or products or services.**

A contract is legally enforceable because it meets the requirements and approval of the law. An agreement typically involves the exchange of goods, services, money, or promises of any of those.

To access the Contract list, go to:

> Home > Sales Pipeline > Contract

## How to Create a Contract

-   Go to the Contract list and select New.
-   Choose the Customer.
-   Enter the Contract Terms. A template can also be created for easily fetching the terms.
-   Save.[Contract](https://docs.frappe.io/files/contract.png)

**Party User**: The employee from your Company who is in contact with the Customer.

### Statuses

-   **Unsigned**: The Contract has not yet been signed by the Customer.
-   **Active**: The Contract has been signed and is active under the Contract Period.
-   **Inactive**: The Contract is out of the Contract Period and not valid anymore.

## Features

### Contract Period

The Start and End date within which the Contract is valid.

### Signee Details

This section will appear when the 'Signed' checkbox is ticked to indicate that the Customer has signed and accepted the Contract.

![Contract Signee](https://docs.frappe.io/files/contract-signee.png)

-   **Signee**: Enter the name of the person that has signed the Contract.
-   **Signed On**: The date on which the Contract was signed.

### Contract Details

Enter the terms of the Contract in the Contract Terms field. You can create a Contract Template and the template can be selected to fetch the Contract Terms.

### Fulfilment Details

If the Contract requires some fulfilment from the Supplier's (your) end, their details can be recorded in the Fulfilment Terms table.

![Contract Fulfilment](https://docs.frappe.io/files/contract-fulfilment.png)

-   **Requirement**: Enter a requirement that needs to be fulfiled. For example, 'installation'.
-   **Notes**: Any notes about the requirement can be entered here.

### Contract Template

A contract template is a standardized outline of a contract without the specifics involved. You can create a new template by going to:

> Home > CRM > Contract Template

You can create templates by using Jinja. Eg:

The parties enter into this contract on {{ start\_date }}.When you create a new contract using this template, the {{ start\_date }} is replaced by the date entered into the field of the same name.

![Contract Template](https://docs.frappe.io/files/contract-template-jinja.gif)

### References

If the Contract can be linked to a transaction in ERPNext. Select the transaction type and the specific transaction. The documents that can be linked are:

-   Quotation
-   Project
-   Sales Order
-   Purchase Order
-   Sales Invoice
-   Purchase Invoice

![Contract References](https://docs.frappe.io/files/contract-reference.png)

### Related Topics

-   [Quotation](https://docs.frappe.io/erpnext/quotation)
-   [Purchase Order](https://docs.frappe.io/erpnext/purchase-order)
-   [Sales Order](https://docs.frappe.io/erpnext/sales-order)
-   [Purchase Receipt](https://docs.frappe.io/erpnext/purchase-receipt)
-   [Delivery Note](https://docs.frappe.io/erpnext/delivery-note)
-   [Sales Invoice](https://docs.frappe.io/erpnext/sales-invoice)
-   [Purchase Invoice](https://docs.frappe.io/erpnext/purchase-invoice)
