---
title: "Twitter Settings | ERPNext Documentation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/twitter-settings
upstream_updated: "23-07-2026 22:47:53"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Twitter Settings | ERPNext Documentation

> Note: This integration doesn't work anymore due to Twitter's API changes. This has been removed from ERPNext starting from v15.

Twitter related settings like OAuth can be configured here. ERPNext needs access to the API through which the post is shared and achieved using OAuth 2.0 Authentication Protocol.

-   How to set up Twitter App

You must have Twitter App for your company. ERPNext interacts with this App for sharing Tweet.

### Create Twitter Developer App

Create App by link [https://developer.twitter.com/](https://developer.twitter.com/) and check that the App has **Read and write** Access permission.

![Twitter App Permission](https://docs.frappe.io/files/twitter-app-permission.png)

### Configure Callback URL

-   Select your App and go to **App Details**.
-   Then go to **Edit** and click **Edit Details**.
-   Add your website URL in **Callback URLs** like: https://{yoursite}/api/method/erpnext.crm.doctype.twitter\_settings.twitter\_settings.callback
-   Click **Save** to make changes.

![Twitter App Callback URL](https://docs.frappe.io/files/twitter-callback-url.png)

-   How to set up Twitter Settings

To access Twitter Settings, go to:

> Home > CRM > Settings > Twitter Settings

![Twitter Settings](https://docs.frappe.io/files/twitter-settings.png)

### API Key and API Key Secret

You get **API Key** and **API Key Secret** from your Twitter Developer account go to:

> [https://developer.twitter.com/](https://developer.twitter.com/) > My Apps > {Your App} > Keys and tokens

![Twitter Keys Tokens](https://docs.frappe.io/files/twitter-key-token.png)

Once you save the doc by filling **API Key** and **API Key Secret** it will redirect to Twitter's sign-in page by providing valid Twitter credentials and clicking **Authorize app**, the member approves your application's request to access their member data and interact with Twitter.

![Twitter Authorize App](https://docs.frappe.io/files/twitter-authorize-app.png)
