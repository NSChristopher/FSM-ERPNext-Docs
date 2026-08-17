---
title: "GST for multiple branches"
source_url: https://docs.frappe.io/erpnext/user/manual/en/gst-for-multiple-branches
upstream_updated: "31-07-2026 10:52:25"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# GST for multiple branches

This will help you automate GST calculation if your company has different branches with separate GSTIN.

  

This is an extension to the blog: [5 Steps to automate Indian GST in ERPNext](https://erpnext.com/blog/erpnext-features/5-steps-to-automate-indian-gst-in-erpnext)

  

1.  **Update your Company’s branch-wise addresses**
2.  **Configure State-wise GST Accounts** _**(Optional)**_
3.  **Item-wise GST setup**
4.  **Classification of Inter-State and Intra-State Taxes**
5.  **Configuring Invoice Templates**

  

### Step 1- Update your Company’s branch-wise billing addresses

  

The very first step is to update your company’s branch wise Address with appropriate GSTIN as it will differ _(if in different states)_ frombranch to branch.

  

![](https://erpnext.com/files/RU29P7U.png)

Now, make sure that your Customer's and Supplier's addresses have _GST State_ and _Party GSTIN_ configured properly.

  

﻿![](https://erpnext.com/files/LdjEDNd.png)

### ﻿Step 2 - Configure State-wise GST Accounts _**(Optional)**_

  

To configure, go to Chart of Accounts, create a state-wise set of GST accounts _(CGST, SGST & IGST)_ as seen in the screenshot below.

﻿![](https://erpnext.com/files/BVg9U1f.png)

  

  

  

Add these newly created accounts in _GST Accounts_ table from **GST Settings**, to include this in all GST Reports.

  

![](https://erpnext.com/files/JBtVopQ.png)

  

### Step 3 - Item-wise GST setup

  

a. Create **Item Tax Template** for different rates and add all the _GST Accounts_ we have created in previous step.

b. Define the rates.

This helps system know which GST Accounts and Tax Rates to apply in the Invoices.

  

Your Item Tax Template should look like this:

![](https://erpnext.com/files/MuMGvEa.png)

  

**The same way you can create different Item Tax Templates for different GST Rates.**

  

After the creation of Item Tax Templates, you can start with assigning these templates to their respective Items from the Item Master.

  

![](https://erpnext.com/files/qhXeg1d.png)

  

### Step 4 - Classification of Inter-State and Intra-State Taxes

  

We are nearly there.

Create two **Tax Categories**, for each of our branches in different State. The **Source State** on each _Tax Category_ will correspond to each of our company’s branches.

Each state will have two Tax Categories, one for Inter State and other for Out State transactions.

  

**For ‘Out State’ Tax Categories, mark ‘Is Inter State’ checkbox as enabled.**

  

_IN State Tax Category for Delhi:_

![](https://erpnext.com/files/qJiylOa.png)

  

﻿_OUT State Tax Category for Delhi:_

![](https://erpnext.com/files/vL7KwMs.png)

  

**Create for other States the same way as shown above.**

  

### Step 5 - Configuring our Invoice Templates

  

Finally, configure a set of two **Sales Taxes and Charges Templates**, and two **Purchase Taxes and Charges Templates, for each Tax Categories created.**

Go to Sales Taxes and Charges Template, and define a set of two templates for each state (as seen in the screenshot below for Maharashtra)

  

_For IN State template, choose the IN State Tax Category and appropriate CGST & SGST account in_ _**Account Head.**_

  

![](https://erpnext.com/files/Jv8R3fX.png)

  

_For OUT State template, choose the OUT State Tax Category and appropriate IGST account in_ _**Account Head.**_

![](https://erpnext.com/files/lwQVAOr.png)

  

**Note: Enter our _Tax Accounts_ in _Account Heads_ and leave _rest as '0'_ - since the tax rates will be fetched from the Item Master.**

  

Repeat the same process to configure **Purchase Taxes and Charges Template** and for other **States** as well.

  

### We enjoy the fruits of our labour:

  

Refresh your account now as we have completed the setup now.

  

To verify if everything works as expected, create an Invoice or an Order:

1.  Select a Customer/Supplier.
2.  Check Company's Address and reselect it to whichever Branch you want to create the Invoice/Order from.
3.  Selecting Customer/Supplier will fetch the right template, check if the Taxes and Charges are fetched properly.

  

### Example 1:

Here I have selected a **Customer from Maharashtra and Company's Address as Maharashtra** too, it should fetch the IN State template we created above.

  

![](https://erpnext.com/files/KOv2bSi.png)

  

It auto-fetched the following Taxes and Charges Template:

![](https://erpnext.com/files/Kz3m5ux.png)

  

### Example 2:

Here I have selected a **Customer from Maharashtra and Company's Address as Delhi**, it should fetch the OUT State template we created above.

  

![](https://erpnext.com/files/edIsIvn.png)

  

It auto-fetched the following Taxes and Charges Template:

![](https://erpnext.com/files/0DvILkB.png)
