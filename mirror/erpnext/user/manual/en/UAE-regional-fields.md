---
title: "UAE Regional Fields"
source_url: https://docs.frappe.io/erpnext/user/manual/en/UAE-regional-fields
upstream_updated: "26-02-2026 21:23:22"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# UAE Regional Fields

**Fields added to the Standard DocTypes to help regional compliances.**

## 1\. Item Master

1.  **Is Zero Rated**: Tick this checkbox for items that are Zero Rated.
2.  **Is Exempt**: Tick this checkbox for items that are tax exempted.

## 2\. Sales Invoice

1.  **VAT Emirate**: Select the Emirate of Place of Supply.
2.  **Refund Provided to Tourists**: Enter the Tax Amount that was refunded to tourists.

## 3\. Purchase Invoice

1.  **Recoverable Standard Rated Expense**: Enter the Tax Amount that can be recovered.
2.  **Reverse Charge Applicable**: Choose 'Y' if Reverse Charge is applicable. Taxes would be made zero and a reverse GL Entry will be created.
3.  **Recoverable Reverse Charge (Percentage)**: Enter the percentage for which the Tax Paid under Reverse Charge is recoverable.
