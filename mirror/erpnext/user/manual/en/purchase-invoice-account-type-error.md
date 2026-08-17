---
title: "Purchase Invoice - Account Type Error"
source_url: https://docs.frappe.io/erpnext/user/manual/en/purchase-invoice-account-type-error
upstream_updated: "14-08-2026 16:23:35"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Purchase Invoice - Account Type Error

Nova Industries receives a supplier bill from Apex Components, its regular parts supplier. ERPNext blocks the Purchase Invoice with the message that **Credit To must be a Balance Sheet account**. The message is protecting the payable: the supplier amount must sit in a liability account until Nova pays it.

## Fix the error

1.  Open the Purchase Invoice and check **Credit To**.
2.  Select the supplier payable account for the company, commonly Creditors or Accounts Payable.
3.  Open that account in the Chart of Accounts and confirm it is under Liabilities and has Account Type **Payable**.
4.  Set the correct default payable account on the Supplier or Company if the wrong account keeps returning.
5.  Save and submit the invoice again.

![Purchase Invoice with the complete Credit To field highlighted](https://novacompanies.m.frappe.cloud/files/purchase-invoice-credit-to-v2.png)

  

## Why the account must be a liability

| Entry | Debit | Credit |
| --- | --- | --- |
| Supplier invoice | Expense, stock, asset, or service account | Supplier payable |
| Supplier payment | Supplier payable | Bank or cash |

## Troubleshooting

### The correct account does not appear

Confirm that the account belongs to the invoice company, is not a group, is enabled, and has Account Type Payable. Also check the Supplier’s company-specific default account.

## Frequently asked questions

### Can I credit an expense account instead?

Use an expense or stock account on the debit side for what was purchased. The unpaid supplier balance belongs in a payable liability account.

## Related topics

-   [Accounting overview](https://docs.frappe.io/erpnext/accounting/introduction)
-   [Chart of Accounts](https://docs.frappe.io/erpnext/chart-of-accounts)
-   [General Ledger](https://docs.frappe.io/erpnext/general-ledger)
-   [Fiscal Year](https://docs.frappe.io/erpnext/fiscal-year)
