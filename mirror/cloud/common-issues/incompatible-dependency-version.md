---
title: "Incompatible dependency version"
source_url: https://docs.frappe.io/cloud/common-issues/incompatible-dependency-version
upstream_updated: "16-02-2026 17:05:23"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Incompatible dependency version

If your Frappe Cloud build is failing with an "Incompatible `dependency` version" message, it means that one of your `bench` dependencies is incompatible one or more of the apps you want to add to your `bench`.

### **How to fix?**

> The example below shows you how to correct Node's version.
> 
> You can use the same steps to correct the version of **any dependency**.

To fix this issue:

-   Navigate to the **Dependencies** tab on your **Bench Group**
-   Locate the **Node Version** entry. Or the entry to which ever dependency you need to correct.
-   Click on **Edit** under the `···` menu button:

![](https://docs.frappe.io/files/xuXDeMs.png)

  

> ℹ️ **Tip**
> 
> To set a custom dependency version view [this documentation page](https://frappecloud.com/docs/benches/editing-bench-dependency-version#setting-a-custom-version).

You should see an **Edit Dependency** dialog pop up:

![](https://docs.frappe.io/files/Uma6lVx.png)

Select the correct **Node Version,** click on **Edit** to save the setting. Then try updating your Bench Group.

> If your build still does not succeed, raise a support ticket and we'll help you out.
