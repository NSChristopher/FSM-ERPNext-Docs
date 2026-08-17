---
title: "LinkedIn Settings | ERPNext Documentation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/linkedin-settings
upstream_updated: "23-07-2026 22:47:53"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# LinkedIn Settings | ERPNext Documentation

> Note: This integration is deprecated and will be removed in v15.

LinkedIn related settings like OAuth can be configured here. ERPNext needs access to the API through which the post is shared and achieved using OAuth 2.0 Authentication Protocol.

1.  How to set up LinkedIn Developer App

* * *

You must have LinkedIn Developer App for your company. ERPNext interacts with this App for sharing the post.

### Create LinkedIn Developer App

Create App by link `https://www.linkedin.com/developers` fill all the details and verify it. And that App has the following products.

1.  Share on LinkedIn
2.  Sign In with LinkedIn
3.  Marketing Developer Platform ![LinkedIn Developer App Product](https://docs.frappe.io/files/linkedin-dev-products.png)

### Configure Redirect URLs:

1.  Goto your LinkedIn Developers App then **Auth** tab.
2.  In **OAuth 2.0 settings** section add **Redirect URLs**: `https://{yoursite}/api/method/erpnext.crm.doctype.linkedin_settings.linkedin_settings.callback`
3.  Click **Update** to make changes. ![LinkedIn Redirect URL](https://docs.frappe.io/files/linkedin-redirect-urls.png)
4.  How to set up LinkedIn Settings

* * *

To access LinkedIn Settings, go to:

> Home > CRM > Settings > LinkedIn Settings

Current availability

This integration is deprecated. Confirm support in your ERPNext version and the current LinkedIn API requirements before configuring new credentials.

  

### Company ID

You get the Company ID from your LinkedIn Company URL.

![LinkedIn Company ID](https://docs.frappe.io/files/linkedin-company-id.png)

  

### Consumer Key and Consumer Secret

You get **Consumer Key** and **Consumer Secret** from your LinkedIn Developer account go to:

> `https://www.linkedin.com/developers/` > My Apps > `{Your App}` > Auth

![LinkedIn Client](https://docs.frappe.io/files/linkedin-client.png)

  

Once you save the doc by filling **Company ID**, **Consumer Key**, and **Consumer Secret** it will redirect to LinkedIn's sign-in page by providing valid LinkedIn credentials and clicking Allow, the member approves your application's request to access their member data and interact with LinkedIn on their behalf.

![Authorize LinkedIn](https://docs.frappe.io/files/authorize-linkedin.jpg)
