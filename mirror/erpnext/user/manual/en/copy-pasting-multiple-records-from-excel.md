---
title: "Copy Pasting Multiple Records From Excel"
source_url: https://docs.frappe.io/erpnext/user/manual/en/copy-pasting-multiple-records-from-excel
upstream_updated: "04-03-2026 17:58:06"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Copy Pasting Multiple Records From Excel

**If you have a sequence of records saved in an excel sheet, that need to be mapped into a Child Table in ERPNext, the same can be done using this feature.**

Let's say, you have a list of items saved in an Excel sheet, and you need to copy the same to the 'Items' Child Table in the Sales Order.

**Steps to Copy Paste records from excel**

-   Prepare the source data in Excel or text editor with each column separated by a tab.

![Copy Pasting](https://docs.frappe.io/files/using-copy-paste-1.png)

-   Drag to select the records, and click the copy menu button or by Ctrl + C (Cmd + C) for

Case 1. The first column of the excel sheet should be the Column header and the contents therein.

Case 2. When there is no defined column header, the data will be mapped to the visible columns.

![Copy Pasting](https://docs.frappe.io/files/using-copy-paste-4.png)

-   Place the cursor to the target input field of the child table, and paste it. Unlike the import via upload file feature, this copy & paste feature will trigger field change events automatically.

![Copy Pasting](https://docs.frappe.io/files/using-copy-paste-3.gif)

For performance consideration, you should only paste less than or equal to 100 records at a time.
