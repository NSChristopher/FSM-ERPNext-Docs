---
title: "Multi-level BOM Creator"
source_url: https://docs.frappe.io/erpnext/user/manual/en/bom-creator
upstream_updated: "26-02-2026 21:23:23"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Multi-level BOM Creator

The BOM Creator enables users to create multi-level BOMs using a single screen.

![bom_creator_tree](https://docs.frappe.io/files/bom_creator_tree.png "bom_creator_tree.png")

### Why use the BOM Creator?

Users often question why a separate BOM Creator is needed to create BOMs. The answer lies in eliminating the need for unnecessary back and forth. With the standard BOM screen, users are required to create all sub-assembly BOMs first and then create the BOM for the final product. This process often involves a lot of back and forth. Additionally, sometimes it's challenging to visualize the complete hierarchy using the standard BOM.

To address all of these problems, we have introduced the BOM Creator. Within the BOM Creator, users can construct a multi-level BOM using the tree component.

Here's how it works:

-   The user selects the Final Product and saves the record.

![bom-creator](https://docs.frappe.io/files/bom-creator.png "bom-creator.png")

-   In the form, users will find an option to add Raw Materials and Sub-assembly items related to the Final Product.

![toolbar_bom_creator](https://docs.frappe.io/files/toolbar_bom_creator.png "toolbar_bom_creator.png")

-   If a user wants to convert Raw Materials into Sub-assembly items, they need to click on the item first and then click the "Convert to Sub-Assembly" button.

![convert_to_sub_assembly](https://docs.frappe.io/files/convert_to_sub_assembly.gif "convert_to_sub_assembly.gif")

-   Users can edit the Quantity as needed.

### Final Step

One the BOM structure has made using the tree component, user has to submit the BOM Creator. On Submission of the BOM Creator, system will generate the BOMs using the background job.

  

![submit-bom](https://docs.frappe.io/files/submit-bom.gif "submit-bom.gif")
