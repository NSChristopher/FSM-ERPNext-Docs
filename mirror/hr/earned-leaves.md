---
title: "Earned Leaves"
source_url: https://docs.frappe.io/hr/earned-leaves
upstream_updated: "26-02-2026 22:14:04"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Earned Leaves

Earned leaves are special type of leaves that are credited or earned regularly after certain intervals. You can configure earned leaves from leave type. Once the leave type is configured as earned leave, you'll need to create the following.

-   Leave Period

![](https://frappehr.com/files/MI9ZPNM.png)

-   Leave Policy

![](https://frappehr.com/files/CX0uqps.png)

-   Leave Policy Assignment

![](https://frappehr.com/files/ZxOw5L4.png)

## **2\. Earned Leave Schedule**

1.  Creating a Leave Policy Assignment will result in the creation of associated Leave Allocations. The allocation for earned leave will display the schedule upfront for the days the leaves will be credited.
2.  Successfully credited leaves will be indicated in green.  
    ![](https://docs.frappe.io/files/Screenshot%202026-01-08%20at%2012.06.41.png)
3.  If for any reason the background job fails to credit the leaves, an email will be sent to the HR managers with a list of allocations that failed. The HR managers will see an option to retry failed allocations right from the leave allocation.

![](https://docs.frappe.io/files/Arc%202025-06-01%2021:43:37%20-%20Frame%20215.png)
