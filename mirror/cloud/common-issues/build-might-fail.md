---
title: "Build might fail"
source_url: https://docs.frappe.io/cloud/common-issues/build-might-fail
upstream_updated: "16-02-2026 17:05:23"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Build might fail

If you have come across a similar Dialog such as the one below while updating your bench group, it means that the underlying reason for why your previous build failed has not been addressed.

![](https://docs.frappe.io/files/mohwHpR.png)

## How to fix this?

1.  First navigate to the Deploys under the current Bench Group:

![](https://docs.frappe.io/files/JOmCeK8.png)  
2\. Then click on the last Deploy (which should have the status _Failure_ with a "!" next to it):![](https://docs.frappe.io/files/6ly6YW3.png)  
3\. Under the Deploy, notice the red banner and click on the View button:![](https://docs.frappe.io/files/qH07S6Z.png)  
4\. On clicking View, you will see a dialog with details about the failure and how to fix it.![](https://docs.frappe.io/files/lLBqzfJ.png)  
5\. Follow the steps in the dialog, or under the linked _Help_ article and then retry the update.
