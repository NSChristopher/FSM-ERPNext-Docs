---
title: "Depreciation | ERPNext Documentation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/creating-depreciation-for-item
upstream_updated: "15-08-2026 16:55:59"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Depreciation | ERPNext Documentation

Imagine you are an accountant at Nova Industries and your team buys laptops for $60,000. Would you show the full $60,000 as an expense in the first year even though the laptops are expected to be used for five years? That would make the first year's expense look unusually high and the next four years look too low.

  

Depreciation spreads the cost across the periods in which the assets are used. ERPNext creates a schedule and posts part of the cost at each interval, so the accounts show a more realistic expense and the remaining value of the laptops.

## Depreciation methods in brief

The method decides how quickly the asset's cost becomes an expense. Assume an asset costs $50,000, should be worth $5,000 at the end of five years, and therefore has a depreciable value of $45,000.

| Method | How the expense is spread | When it is useful |
| --- | --- | --- |
| **Straight Line** | Spreads $45,000 evenly, or $9,000 per year for five years. | The asset provides a similar benefit each year, such as office furniture. |
| **Double Declining Balance** | Records a larger expense in the early years and a smaller expense later. | The asset loses value or productivity quickly when new, such as some machinery or technology equipment. |
| **Written Down Value** | Applies a fixed percentage to the asset's opening book value each year. | The accounting or tax policy specifies depreciation as a percentage of carrying value. |
| **Manual** | Uses the dates and amounts entered by the accountant. | A contract, valuation, or special policy requires a custom schedule. |

See [Depreciation Methods](https://docs.frappe.io/erpnext/asset-depreciation-methods) for worked calculations and year-by-year comparisons.

## Calculation inputs

| Field | What it means |
| --- | --- |
| **Net Purchase Amount** | Starting capitalized value. |
| **Expected Value After Useful Life** | Residual amount not depreciated. |
| **Depreciable Value** | Net purchase amount less expected residual value. |
| **Method** | Pattern used to allocate depreciation. |
| **Frequency** | Months between entries. |
| **Number of Depreciations** | Number of scheduled postings. |
| **Available for Use Date** | Operational start date that controls schedule timing. |

## Ledger impact

A submitted depreciation entry debits Depreciation Expense and credits Accumulated Depreciation. The original fixed-asset cost remains visible while accumulated depreciation grows.

  

The submitted schedule below belongs to Nova Industries' $48,000 NovaPack labeler. Each $760 monthly row has produced a linked depreciation Journal Entry, while future rows remain unposted.

![Submitted Asset Depreciation Schedule with posted Journal Entries](https://novacompanies.m.frappe.cloud/files/26-asset-depreciation-schedule-v2.png)

The Asset Depreciation Ledger then shows how the monthly expense increases accumulated depreciation and reduces the asset's carrying value.

![Asset Depreciation Ledger with seven posted entries](https://novacompanies.m.frappe.cloud/files/22-asset-depreciation-ledger-v2.png)

## Troubleshooting

### No depreciation schedule was created

Confirm Calculate Depreciation is enabled and at least one complete Finance Book row exists.

### A scheduled entry did not post

Check Accounts Settings, open periods, account defaults, posting permissions, and the schedule's posting status.

## Frequently asked questions

### Does depreciation start on the purchase date?

Not necessarily. It normally follows the Available for Use Date and schedule configuration.

### Can I post depreciation manually?

Use the Manual method or manage entries deliberately when automatic schedules do not match the policy.

### Does depreciation change inventory value?

Fixed-asset depreciation affects fixed-asset accounting, not stock valuation.

## Related topics

-   [Asset Category](https://docs.frappe.io/erpnext/asset-category)
-   [Asset Location](https://docs.frappe.io/erpnext/asset-location)
-   [Asset](https://docs.frappe.io/erpnext/asset)
-   [Purchasing an Asset](https://docs.frappe.io/erpnext/purchasing-an-asset)
-   [Depreciation](https://docs.frappe.io/erpnext/asset-depreciation)
-   [Asset Movement](https://docs.frappe.io/erpnext/asset-movement)
-   [Asset Repair](https://docs.frappe.io/erpnext/asset-repair)
-   [Asset Reports](https://docs.frappe.io/erpnext/asset-reports)
