---
title: "Subscription Settings | ERPNext Documentation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/subscription-settings
upstream_updated: "31-07-2026 16:26:17"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Subscription Settings | ERPNext Documentation

**Subscription Settings** controls how ERPNext handles unpaid subscription invoices across the site. Configure it before relying on automatic recurring billing.

## Configure unpaid-invoice handling

Search for **Subscription Settings** and review:

| Setting | What it controls |
| --- | --- |
| Grace Period | Time allowed after an invoice becomes overdue before the subscription is treated as unpaid |
| Cancel Subscription After Grace Period | Automatically cancels a subscription when the unpaid condition continues beyond the grace period |

![Subscription Settings with grace-period, cancellation, and prorating controls](https://novacompanies.m.frappe.cloud/files/sales-receivables-subscription-settings-subscription-settings.png)

Use a grace period that matches your collection process. A short period stops service quickly but may cancel customers after a temporary payment delay. A longer period is more forgiving but allows unpaid exposure to grow.

## Recommended rollout

1.  Create a test Subscription with a short billing period.
2.  Generate an invoice and confirm its due date.
3.  Test both paid and unpaid outcomes.
4.  Confirm the Subscription moves through the expected Active, Grace Period, Unpaid, and Cancelled states.
5.  Only then enable automatic cancellation for production subscriptions.

These settings affect future subscription processing. They do not cancel or reverse Sales Invoices that have already been generated.

## Related topics

-   [Subscription](https://docs.frappe.io/erpnext/subscription)
-   [Sales Invoice](https://docs.frappe.io/erpnext/sales-invoice)
-   [Payment Entry](https://docs.frappe.io/erpnext/payment-entry)
-   [Accounts Receivables](https://docs.frappe.io/erpnext/accounts-receivables)
