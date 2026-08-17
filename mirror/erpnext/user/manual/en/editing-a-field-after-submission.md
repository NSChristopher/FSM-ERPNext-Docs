---
title: "Edit a Field after Submission"
source_url: https://docs.frappe.io/erpnext/user/manual/en/editing-a-field-after-submission
upstream_updated: "04-03-2026 17:58:07"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Edit a Field after Submission

In ERPNext, once a document is submitted, you can only edit it through Cancel > Amend. However, you can still make certain fields (custom fields) editable after submission using the **Allow on Submit** feature. For example, we have created a custom field called "Supplier ID" in Supplier Quotation. To allow editing of this field after submission, follow the following steps:

1.  Go to Settings > Customize Form and select the Form Type (Supplier Quotation in this case).
    
2.  Expand the field row and check the "Allow on Submit" checkbox.  
    ![](https://docs.frappe.io/files/hyYfSoc.png)  
    ![](https://docs.frappe.io/files/dp37Dab.png)
    
3.  Click on Update.  
    This setting will allow you to edit this field even after submitting the document without amending it.  
    **Note:** The Allow on Submit feature works only for non-standard fields (custom fields).
