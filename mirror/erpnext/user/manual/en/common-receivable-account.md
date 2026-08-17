---
title: "Common Receivable Account | ERPNext Documentation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/common-receivable-account
upstream_updated: "31-07-2026 18:22:09"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Common Receivable Account | ERPNext Documentation

ERPNext normally posts each Customer to the Company's default Receivable account while preserving the Customer as the party. A **Common Receivable Account** lets several customers share one receivable ledger account without losing customer-level outstanding balances.

## Configure the account

1.  Open the Company or Accounts Settings and confirm the default Receivable account.
2.  Ensure the account is a non-group Asset account with **Account Type** set to Receivable.
3.  In the Customer's accounting details, add a Company-specific receivable account only when that Customer must override the default.
4.  Create a test Sales Invoice and confirm its **Debit To** account.

The **Debit To** field on a Sales Invoice shows the receivable control account used for that customer transaction.

  

![Sales Invoice accounting details showing the shared Debit To receivable account](https://novacompanies.m.frappe.cloud/files/sales-receivables-common-receivable-account-sales-invoice-debit-to.png)

## How customer balances remain separate

The General Ledger entry contains both the receivable account and the Customer party. Reports such as Accounts Receivable use the party and voucher references to separate balances, even when all customers post to the same ledger account.

| Level | Purpose |
| --- | --- |
| Receivable account | Total control balance in the Chart of Accounts |
| Customer party | Balance for one customer |
| Voucher reference | Outstanding amount for one invoice or credit |

## Common problems

**The Customer posts to the wrong receivable account**

Check the Customer's Company-specific account first, then the Company's default Receivable account.

**Accounts Receivable does not match the control account**

Compare the same Company, date, currency, and receivable account. Look for Journal Entries without a Party or voucher reference.

**A receivable account cannot be selected**

Confirm it is a non-group account, belongs to the same Company, and has the correct account type.

## Related topics

-   [Chart of Accounts](https://docs.frappe.io/erpnext/chart-of-accounts)
-   [Company accounting defaults](https://docs.frappe.io/erpnext/company-accounting-defaults)
-   [Customer](https://docs.frappe.io/erpnext/customer)
-   [Sales Invoice](https://docs.frappe.io/erpnext/sales-invoice)
-   [Accounts Receivables](https://docs.frappe.io/erpnext/accounts-receivables)
-   [General Ledger](https://docs.frappe.io/erpnext/general-ledger)
