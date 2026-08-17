---
title: "Linking stock warehouse and accounts"
source_url: https://docs.frappe.io/erpnext/user/manual/en/warehouse-ledger-link
upstream_updated: "02-03-2026 17:57:55"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Linking stock warehouse and accounts

The value of stock stored in the warehouses needs to be tracked.

Each warehouse is linked to a ledger in chart of accounts through the 'Account' field in the warehouse.

![Stock Asset Ledger in Warehouse](https://docs.frappe.io/files/stock-asset-ledger-in-warehouse.png)

If the Account field is empty in a warehouse, then the Account mentioned in the parent of that warehouse is considered. If an Account could not be determined by tracing the hierarchy, then the Default Inventory Account mentioned in the Company record is considered.

![Default Inventory Account in Company](https://docs.frappe.io/files/default-inventory-account-in-company.png)

When a company is created, a ledger named 'Stock In Hand' is created by default in Chart of Accounts.

**Chart of Accounts > Assets > Current Assets > Stock Assets > Stock In Hand.**

If required, you can create additional ledgers under 'Stock Assets' group.

![Stock Asset Ledger in Chart of Accounts](https://docs.frappe.io/files/stock-asset-ledger-in-coa.png)
