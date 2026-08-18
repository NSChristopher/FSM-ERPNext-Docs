---
title: "Introduction to Site Migration"
source_url: https://docs.frappe.io/cloud/site/site-migrations/introduction-to-site-migration
upstream_updated: "06-03-2026 01:18:23"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Introduction to Site Migration

The **Site Migration** feature allows you to seamlessly move your site across benches and servers with minimal effort.

![](https://docs.frappe.io/files/image2a0150.png)

This supports the following migration types :

1.  **In-Place Migration** : Run `bench migrate` on your site. _This operation does not take a backup, so use with caution._
2.  **Move Site from Shared to Private Bench** : Transfer your site from a shared bench to a shared / dedicated private bench.
3.  **Move Site to Different Server / Bench** : Relocate your site to another server (both shared and dedicated) on an existing or new bench.
4.  **Move Site to Different Region** : Migrate your site to a server located in a different geographic region.

#### Bench Selection During Migration :

For most migration types, you can choose one of the following options :

1.  **Select an Existing Bench** : Move your site to an already available bench.
2.  **Clone and Create a New Bench Automatically** : Automatically creates a new bench with the same configuration and apps as the current one.

In the next pages, we will cover the details of each migration type.
