---
title: "Letter Head"
source_url: https://docs.frappe.io/erpnext/user/manual/en/letter-head
upstream_updated: "02-03-2026 23:35:29"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Letter Head

**A Letter Head contains your organization's name, logo, address, etc which appears at the top portion in documents.**

Every company has a default Letter Head. These Letter Head values are generally set as Header and Footer in the documents. In ERPNext, you can capture these details in the Letter Head master.

These details will appear in the Print Format of transactions like Sales Order, Sales Invoice, Salary Slip, Purchase Order, etc. In ERPNext, the Letter Head is only for setting up the top part of the document, other content is pre-formatted and can be configured via [Print Format](https://docs.frappe.io/erpnext/print-format) and [Print Headings](https://docs.frappe.io/erpnext/print-headings).

To access Letter Head, go to:

> Home > Settings > Letter Head

## 1\. How to create a Letter Head

1.  Go to the Letter Head list, click on New.
2.  Enter a name for the Letter Head. You can create a separate Letter Head for different office locations.
3.  Choose whether based on image or HTML.
4.  You can enter details in a Letter Head by using:

-   Logo Image: Click on the Attach button to attach an image. Once the image is inserted, HTML for it will be generated automatically.
-   Other information (like Address, tax ID, etc.) that you want to put on your Letter Head.

![Print Heading](https://docs.frappe.io/files/letter-head.png)

> If you want to make this the default Letter Head, click on "Default Letter Head".

1.  After entering values in the Header and Footer section, save the Letter Head.

You can set the Letter Head based on HTML to make changes to it:

![Letter Head based on](https://docs.frappe.io/files/letter-head-based-on.gif)

This is how the Letter Head looks in a document's print.

![Print Heading](https://docs.frappe.io/files/letter-head-1.png)

> Note that Footer will be visible only when the document's print is seen in the PDF. Footer will not be visible in the HTML based print preview.

## 2\. Video

  

### 3\. Related Topics

1.  [Address Template](https://docs.frappe.io/erpnext/address-template)
2.  [Terms and Conditions](https://docs.frappe.io/erpnext/terms-and-conditions)
3.  [Cheque Print Template](https://docs.frappe.io/erpnext/cheque-print-template)
4.  [Print Headings](https://docs.frappe.io/erpnext/print-headings)
