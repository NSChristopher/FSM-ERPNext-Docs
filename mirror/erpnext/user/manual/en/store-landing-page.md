---
title: "Store Landing Page"
source_url: https://docs.frappe.io/erpnext/user/manual/en/store-landing-page
upstream_updated: "02-03-2026 13:56:26"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Store Landing Page

After enabling Shopping Cart for your app you can create a custom landing page for your  
store using the [Web Page Builder](https://docs.frappe.io/erpnext/web-page-builder).

![Store Landing Page](https://docs.frappe.io/files/store-landing-page.png)  
_Custom Store Landing Page_

## 1\. How to create a Custom Store Landing Page

1.  Follow the steps mentioned here to [create a Web Page](https://docs.frappe.io/erpnext/web-page).
2.  Set a Route for your page (eg. _/store_).
3.  Select Content Type as **Page Builder**.
4.  Click on Add Row in the Page Building Blocks Table.
5.  Select a Web Template.

ERPNext comes with a great set of standard web templates that can be used to create your Web Page.

The configuration for the page in the screenshot above looks like this:

![Store Web Templates](https://docs.frappe.io/files/store-web-templates.png)  
_Store Page Building Blocks_

1.  Add Values.

Click on the Edit Values button on the right of each block, and enter the values in the dialog to  
set the content for each section.

The Web Templates that will be useful for building your store landing page are:

-   **Hero Slider:**  
    Up to 5 slides can be created. The image, title, primary action, alignment, theme for each slide  
    is configurable.  
    ![Store Hero Slider](https://docs.frappe.io/files/store-hero-slider.png)  
    _Hero Slider Configuration_
    
-   **Product Category Cards:**  
    Up to 8 product category cards can be configured. Each product categories will link to an  
    [Item Group](https://docs.frappe.io/erpnext/item-group).  
    Ensure that the **Show in Website** option is ticked in the Item Group form so that the  
    route for the product category is generated.
    

![Store Product Category Cards](https://docs.frappe.io/files/store-product-category.png)  
_Product Categories Configuration_

-   **Item Card Group:**  
    This section can be used to showcase your featured items. Up to 12 cards can be configured.  
    Each card will link to an [Item](https://docs.frappe.io/erpnext/item). If **featured** is checked,  
    the item will take up 2 columns of space.

![Store Item Card Group](https://docs.frappe.io/files/store-item-card-group.png)  
_Item Cards Configuration_

1.  Publish your Web Page.

The web page will be published only when the Published option is checked.  
Once the page is published, click on **See on Website** on the sidebar or visit the configured route  
and check out the page!

![Store Page Published](https://docs.frappe.io/files/store-page-published.png)  
_Publish your Web Page_

1.  Set as your Home Page.

Follow the steps [here](https://docs.frappe.io/erpnext/website-home-page) to set  
this page as your Website home page.
