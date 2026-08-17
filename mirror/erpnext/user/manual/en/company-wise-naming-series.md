---
title: "Company-wise Naming Series"
source_url: https://docs.frappe.io/erpnext/user/manual/en/company-wise-naming-series
upstream_updated: "04-03-2026 18:03:47"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Company-wise Naming Series

Suppose you have a multi-company setup, and you need to create different naming series for documents belonging to different companies. For example, you have three companies:

-   Company A
-   Company B
-   Company C

The need is to create naming series which is company-specific for documents such as Sales Invoice, Purchase Order, etc. For example, in case of Sales Invoice, for Company A, the naming series will be SINV-A-0001 and for Company B, the naming series will be SINV-B-0001. This can be easily achieved via customisation by following the steps given below:

1.  First, go to the DocType for which you want different series based on company and open its Customize Form. In this case, we will Select From Type as Sales Invoice.
    
2.  Next, below the field of Company, add another field and name it 'Abbr'. Add `company.abbr` in its Fetch From input.
    

![](https://docs.frappe.io/files/3mLkrQs.png)

Also, keep this field hidden (if needed).

![](https://docs.frappe.io/files/w6DS7FY.png)

3.  Now, in the Customize Form itself, go to the Naming Series row and expand it. In the Options box, add another entry in new line (taking Sales Invoice as example) `SINV-.abbr.-.####` and set this as default.

![](https://docs.frappe.io/files/WAE0FQA.png)

![](https://docs.frappe.io/files/2GJ5YLM.png)

Once this is done, click on Update.

Now, go to Sales Invoice and create one. Select the Company and the Naming Series will be updated automatically based on the company's abbreviation.

![](https://docs.frappe.io/files/PrEgDa7.png)

  

  

**Comments**
