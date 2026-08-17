---
title: "Setting Up"
source_url: https://docs.frappe.io/erpnext/user/manual/en/setting-up
upstream_updated: "14-08-2026 17:09:37"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Setting Up

Setting up ERPNext means turning the way your business already works into reliable masters, defaults, permissions, and opening balances. A good setup begins with the decisions that affect every transaction, then moves into the individual modules your team will use.

  

For Nova Industries, an electronics manufacturer and distributor, this starts with the legal company, fiscal year, chart of accounts, warehouses, items, customers, suppliers, users, and opening balances. Configure these foundations before importing day-to-day transactions.

![ERPNext Desk showing the installed applications available after sign-in](https://novacompanies.m.frappe.cloud/files/setup-20260814-setting-up-desk.png)

  

## Plan the setup

| Decision | Why it matters | Start here |
| --- | --- | --- |
| Legal entities | Separates books, tax registrations, currencies, and statutory reporting. | [Company](https://docs.frappe.io/erpnext/company-setup) |
| Accounting period | Controls transaction dates and financial reporting. | [Fiscal Year](https://docs.frappe.io/erpnext/fiscal-year) |
| Accounts | Determines where every financial transaction is posted. | [Chart of Accounts](https://docs.frappe.io/erpnext/chart-of-accounts) |
| Stock locations | Defines where inventory is stored and valued. | [Warehouse](https://docs.frappe.io/erpnext/warehouse) |
| Access | Limits what each user can view and change. | [Users and Permissions](https://docs.frappe.io/erpnext/adding-users) |

## Recommended setup order

1.  Create or review the [Company](https://docs.frappe.io/erpnext/company-setup), Country, currency, time zone, language, and fiscal year.
2.  Review [System Settings](https://docs.frappe.io/erpnext/system-settings), [Global Defaults](https://docs.frappe.io/erpnext/global-defaults), and Domain Settings.
3.  Configure the [Chart of Accounts](https://docs.frappe.io/erpnext/chart-of-accounts), cost centers, taxes, bank accounts, warehouses, and naming rules.
4.  Create essential masters such as [Items](https://docs.frappe.io/erpnext/item), [Customers](https://docs.frappe.io/erpnext/customer), and [Suppliers](https://docs.frappe.io/erpnext/supplier).
5.  Add users, roles, and user permissions. Test the setup with the same access your team will use.
6.  Prepare clean legacy data and use the [Data Import](https://docs.frappe.io/erpnext/data-import) tools for required masters and opening balances.
7.  Run a complete sales, purchase, stock, and accounting cycle before going live.

## Do not import everything

Move only the data needed to operate and report from the cutover date. Keep the old system available for historical reporting instead of importing years of low-value transactions. This reduces reconciliation effort and makes problems easier to find.

## Validate before go-live

Confirm opening receivables, payables, bank balances, stock quantities, stock values, fixed assets, taxes, and the trial balance. Ask real users to complete their most common tasks. Correct the setup before the first live transaction, because changing currencies, account structures, or stock rules later can be disruptive.

## Troubleshooting

### A module is missing

Review Domain Settings and Show or Hide Modules. Also confirm that the user has the roles required to access the workspace.

### Defaults are not appearing

Check Company defaults, Global Defaults, user defaults, and the relevant module settings. Reload the session after changing system-wide defaults.

## Frequently asked questions

### Should I set up every module before going live?

Configure the modules needed for the first operational scope, test them thoroughly, and introduce additional modules in controlled phases.

### Can I change the setup later?

Many defaults can be changed, but decisions such as company currency, account structure, stock accounting, and opening balances require careful planning after transactions exist.

## Related topics

-   [Company](https://docs.frappe.io/erpnext/company-setup)
-   [System Settings](https://docs.frappe.io/erpnext/system-settings)
-   [Data Import](https://docs.frappe.io/erpnext/data-import)
-   [Adding Users](https://docs.frappe.io/erpnext/adding-users)
-   [Opening Balances](https://docs.frappe.io/erpnext/opening-balance)
