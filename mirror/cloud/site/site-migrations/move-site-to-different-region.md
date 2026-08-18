---
title: "Move Site To Different Region"
source_url: https://docs.frappe.io/cloud/site/site-migrations/move-site-to-different-region
upstream_updated: "06-03-2026 01:18:24"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Move Site To Different Region

To move your site to a **different region**, follow the steps below.

> If your site is currently running on a **Shared Bench**, you can skip the region setup steps described below.

### 1\. Add the Target Region

Go to your **Private Bench** and open the **Regions** tab.

Click **Add Region** and select the region where you want to deploy your site.

![](https://docs.frappe.io/files/image41a717.png)

### 2\. Wait for Bench Provisioning

After adding the region, return to the **Sites** tab.

A **new bench** will appear with the status **Installing**. Wait until the bench becomes **Active** before proceeding.

![](https://docs.frappe.io/files/image485bb7.png)

### 3\. Trigger the Migration

Once the bench becomes active, open your **Site** and go to the **Migrations** tab.

Click **Trigger Migration**. From the migration type options, select **Move Site to Different Region**, then choose the **target region** where you want the site to be moved.

![](https://docs.frappe.io/files/image939156.png)

### 4\. Migration Completion

Once the migration process completes, your site will be **successfully moved to the selected region**.
