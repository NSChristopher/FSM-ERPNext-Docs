---
title: "Fetch the entire address text on a custom field"
source_url: https://docs.frappe.io/erpnext/user/manual/en/fetch-the-entire-address-text-on-a-custom-field
upstream_updated: "02-03-2026 19:06:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Fetch the entire address text on a custom field

This article will help you to add a custom field for fetching full addresses on any DocType, using a 3 step approach.

  

  

**Step 1. Cosmetic customisations on the required DocType**

  

  

We would first need to add two new fields on the DocType for fetching addresses:-

  

  

a) A field of type 'Link' which points to our Address master

b) A field of type 'Read Only' which would display the full address

  

  

Take note of the variable names of the new fields you create. This information will be required later in the process.

  

  

![](https://docs.frappe.io/files/q90efZM.png)

  

  

For information on creating custom fields on a DocType you can refer to the following link - [Custom Fields in ERPNext](https://docs.erpnext.com/docs/v13/user/manual/en/customize-erpnext/custom-field)

  

  

Once this step is done you should have two new fields on the selected DocType, as illustrated below:-

  

  

![](https://docs.frappe.io/files/SabQi7A.png)

  

  

  

  

  

**Step 2. Adding a Client Script for fetching the full address from our Address master**

  

  

Search for 'Client Script' on the search bar, and create a new Client Script. Select the required DocType on which we need to fetch the address on.

  

  

In the section for the script paste the following Client Script:-

  

  

  

```
frappe.ui.form.on("DocType Name", "address_link_field", function(frm, cdt, cdn) {    if(frm.doc.address_link_field){     return frm.call({      method: "frappe.contacts.doctype.address.address.get_address_display",      args: {       "address_dict": frm.doc.address_link_field      },      callback: function(r) {       if(r.message)           frm.set_value("full_address_field", r.message);              }     });    }    else{        frm.set_value("full_address_field", "");    }});
```

  

  

Here we will need to replace the the following changes based on your use case:-

a) Replace 'DocType Name' with the Name of the DocType we need to fetch the address on. Eg. Sales Invoice, Purchase Order etc.

b) Replace 'addresslinkfield' with the variable name of the custom link field we created in Step 1

c) Replace 'fulladdressfield' with the variable name of the custom read only field we created in Step 1

  

  

Once this is done, you would have a Client Script which looks as below:-

  

  

![](https://docs.frappe.io/files/VukPzs4.png)

  

  

**Step 3. Save, enable and test the Client Script**

  

  

Once the Client Script is amended as per your use case, we can Save it and enable it by clicking the 'Enabled' checkbox.

Go to the required DocType and refresh the page for the changes to take effect.

  

  

Now when an address is selected on our custom link field, the entire address will be fetched on our custom read only field, as illustrated below:-

  

  

![](https://docs.frappe.io/files/W3kxhT2.gif)
