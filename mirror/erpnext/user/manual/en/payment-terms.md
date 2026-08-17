---
title: "Payment Terms | ERPNext Documentation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/payment-terms
upstream_updated: "14-08-2026 12:07:06"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Payment Terms | ERPNext Documentation

A sale or purchase does not always become due in one amount on one date. Payment Terms let ERPNext express the commercial promise clearly, including deposits, instalments, credit periods, and milestone-based payments.

  

Nova Industries might collect 30% when a bulk laptop order is confirmed and the remaining 70% within 30 days of delivery. Recording that schedule on the transaction gives both teams the same due dates and lets receivables and payables reports show what is actually overdue.

  

This page explains individual Payment Terms, reusable templates, due-date calculation, allocation percentages, and how the schedule flows into invoices and payment follow-up.

## Create a Payment Term

Go to **Home > Accounting > Accounting Masters > Payment Term**.

1.  Enter a clear name.
2.  Choose how the due date is calculated.
3.  Enter the credit days or due date basis.
4.  Enter an invoice-portion percentage if this term represents one instalment.
5.  Optionally configure an early-payment discount.
6.  Save.

![Payment Term for a deposit](https://docs.frappe.io/files/payment-term-deposit.webp)

## Create a Payment Terms Template

1.  Open **Payment Terms Template**.
2.  Add terms in the required order.
3.  Enter the invoice portion for each row.
4.  Confirm that the total allocation is 100%.
5.  Mark it as default only if it should apply broadly.
6.  Save.

![Payment Terms Template](https://docs.frappe.io/files/payment-terms-template79c8e2.webp)

A template can represent Net 30, a deposit plus balance, milestones, or staged payments.

## Apply payment terms

Select the template on a Quotation, Sales Order, Purchase Order, Sales Invoice, or Purchase Invoice. ERPNext creates the payment schedule from the transaction date and the configured rules.

Check the schedule before submitting. The invoice schedule drives due dates, overdue calculations, payment allocation, and receivable or payable reporting.

## Early-payment discounts

A Payment Term can define a discount percentage or amount and a validity period. The customer or supplier must pay within that period for the discount to apply. Test the accounting result before making this part of a production collection process.

## Troubleshooting

**The due date is unexpected**

Check the posting date, due-date basis, credit days, and whether the term uses a day of the month.

**The template cannot be saved**

Verify that invoice portions total 100% and that every row has a Payment Term.

**The schedule was not copied**

Check whether the transaction or party has another template and whether the schedule was edited manually.

## Related topics

-   [Sales Invoice](https://docs.frappe.io/erpnext/sales-invoice)
-   [Purchase Invoice](https://docs.frappe.io/erpnext/purchase-invoice)
-   [Payment Entry](https://docs.frappe.io/erpnext/payment-entry)
-   [Accounts Receivable](https://docs.frappe.io/erpnext/accounts-receivable)
