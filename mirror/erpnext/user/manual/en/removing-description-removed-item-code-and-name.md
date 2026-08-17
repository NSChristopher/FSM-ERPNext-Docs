---
title: "Remove Description in Print Format"
source_url: https://docs.frappe.io/erpnext/user/manual/en/removing-description-removed-item-code-and-name
upstream_updated: "02-03-2026 23:35:30"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Remove Description in Print Format

**Question:**

I want to remove the description from the from my print format since it takes up too much space:

![](https://docs.frappe.io/files/cDYxb5o.png)

  

But when I do so using the [print format builder](https://docs.frappe.io/erpnext/print-format-builder), I end up losing my Item Code and Name as well. How to fix this?

![](https://docs.frappe.io/files/Fredaow.png)

  

  

**Answer:**

This is because you have **Compact Item Print** option enabled in the Print Settings.

![](https://docs.frappe.io/files/lCGM2tO.png)

  

You can disable this option and then uncheck the Description in the print format builder. This should solve the issue for you.

![](https://docs.frappe.io/files/6MI1aNw.png)
