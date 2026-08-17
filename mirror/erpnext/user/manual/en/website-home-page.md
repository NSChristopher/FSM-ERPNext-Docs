---
title: "Website Home Page"
source_url: https://docs.frappe.io/erpnext/user/manual/en/website-home-page
upstream_updated: "04-03-2026 17:40:30"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Website Home Page

It is very much possible in ERPNext to setup certain standard page as default website Home Page. Following are steps to setup default website home page.

#### **Step 1: Create a Web Page**

To create a web page go to: `Website > Web Site > Web Page` and then click on the `New` button in the upper right.

-   Fill in the page title
-   Give the page a route (keep it lower case)
-   Add content to the `Main Content` section. If you want, you can use markdown to create a more complex page.
-   Tick (Check) the `Published` check box
-   Click the `Save` button.

#### **Step 2: Open Website Settings Page**

To Open website settings page go to: `Website > Setup > Website Settings`

#### **Step 3: Set Home page**

Enter the same value you entered for the `route` field in the previous section to the `Home Page` field. ERPNext will set this route to be the same as /index for your page.

![Website Setting Home](https://docs.frappe.io/files/Selection_021.png)

#### **Step 4: Save Website Settings Form.**

After setting up Home Page Press `Save` button from website settings page and refresh the system from Help menu. Like this you can set any standard page as your default website home page. When some one visited to your website, he/she will see home page as default landing page on your website.
