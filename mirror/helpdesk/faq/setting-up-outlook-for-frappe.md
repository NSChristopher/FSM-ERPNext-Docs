---
title: "Setting up Outlook for Frappe Helpdesk"
source_url: https://docs.frappe.io/helpdesk/faq/setting-up-outlook-for-frappe
upstream_updated: "16-06-2026 16:24:34"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Setting up Outlook for Frappe Helpdesk

You can connect a Microsoft 365 / Outlook mailbox to Frappe using OAuth instead of a password. OAuth is the recommended method because Microsoft is retiring basic (password) authentication for Exchange Online, and it lets Frappe send and receive mail without ever storing your mailbox password. Setup happens in two places: you register an app in **Microsoft Entra ID** (Azure), then point a **Connected App** and **Email Account** in Frappe at it.

## Before you begin

-   Your Frappe site must be served over **HTTPS** (a local `localhost` dev site is fine).
-   You need a Microsoft 365 account with **admin access to Azure / Microsoft Entra ID**.
-   You need administrator access to your Frappe site to create a Connected App.

## Part 1: Register an app in Microsoft Entra ID

### Step 1: Create the app registration

1.  Sign in to the [Azure Portal](https://portal.azure.com) and open **Microsoft Entra ID → App registrations**.  
    ![](https://docs.frappe.io/files/imageff427d.png)
2.  Click **New registration**.  
    ![](https://docs.frappe.io/files/image56b32e.png)  
    _New app registration button_
3.  Give it a name (for example, `Frappe Email App`), leave the supported account type as default, and click **Register**. You will add the redirect URI later, once Frappe generates it.  
    ![](https://docs.frappe.io/files/imagefd693d.png)
4.  Once done successfully click on the register button below the form.

### Step 2: Add API permissions

1.  Open your new app and go to **API permissions → Add a permission**  
    ![](https://docs.frappe.io/files/imagea4cec0.png)  
    _Guide to API Permissions_  
    ![](https://docs.frappe.io/files/imaged7d057.png)  
    _Add Permission_
2.  Add the following Permissions under select Microsoft Graph option and inside go to **Microsoft Graph → Delegated permissions**.  
    ![](https://docs.frappe.io/files/image476ca7.png)
3.  Click **Grant admin consent for** and confirm. Each permission should show a green check under **Status**.  
    ![](https://docs.frappe.io/files/image3483b7.png)  
    _Click Grant admin consent_  
    ![](https://docs.frappe.io/files/image6f40bf.png)  
    _Updated status message_

### Step 3: Create a client secret

1.  Go to **Certificates & secrets → New client secret** or in **Overview** click **Add a secret**.  
    ![](https://docs.frappe.io/files/image3454e8.png)  
    ![](https://docs.frappe.io/files/imagee26167.png)
2.  Add a description, choose an expiry, and click **Add**.  
    ![](https://docs.frappe.io/files/image7b6a71.png)
3.  Copy the secret **Value** immediately and store it safely.  
    ![](https://docs.frappe.io/files/image0ec9c5.png)

> **Note:** Copy the **Value**, not the **Secret ID**. The value is shown only once and cannot be retrieved again after you leave the page.

### Step 4: Collect your IDs and endpoint

From the app's **Overview** page, copy:

-   **Application (client) ID**
-   **Directory (tenant) ID**
-   **OpenID Connect Metatdata Document ID** (Under endpoints)

![](https://docs.frappe.io/files/acb494e027c6e635843dee5bd28bff95f89eb228.png)

Your OpenID configuration URL follows this format — keep it for the next part:

```
https://login.microsoftonline.com/your_tenant_id/v2.0/.well-known/openid-configuration
```

## Part 2: Create a Connected App in Frappe

1.  In Frappe, go to **Connected App** and click **New** (`/app/connected-app/new`).  
    ![](https://docs.frappe.io/files/image150cfa.png)
2.  Paste your OpenID configuration URL into the **OpenID Configuration** field, then click **Get OpenID Configuration**. Frappe auto-fills the authorization, token, and revocation endpoints.  
    ![](https://docs.frappe.io/files/imagee2cc0c.png)  
    On clicking **Get OpenID Configuration**, the field values will be filled automatically. Add the Provider name as Outlook.  
    ![](https://docs.frappe.io/files/imagecde89d.png)
3.  Enter the **Client ID** and the **client secret Value** from Part 1 which you have stored from the overview section.  
    ![](https://docs.frappe.io/files/imagef6c1d2.png)
4.  Add the required **Scopes**:  
    ![](https://docs.frappe.io/files/image227dc0.png)

```
https://outlook.office365.com/.default
```

```
offline_access
```

5.  **Save** the Connected App.

> **Note:** The `.default` scope tells Microsoft to grant every permission you consented to in Step 2, so you don't have to list each one again here.

After saving, Frappe generates a **Redirect URI** on the Connected App. It looks like this:

![](https://docs.frappe.io/files/image0d15cf.png)

```
https://your_site.com/api/method/frappe.integrations.doctype.connected_app.connected_app.callback
```

Copy that value, go back to your Azure app, open **Authentication → Add a platform → Web**, paste it as a redirect URI, and **Save**.

  

![](https://docs.frappe.io/files/imageee4504.png)

![](https://docs.frappe.io/files/image08eb8c.png)  
_add your redirect URI and then configure_

Lastly click on the Connect to Provider button to grant permissions for frappe to access resources from your outlook based on the scope defined.

![](https://docs.frappe.io/files/image418979.png)

  

## Part 3: Connect your Email Account

Log in to Frappe as the **actual mailbox user** (not Administrator) before authorizing — the connection is granted for whoever is signed in.

1.  Go to **Email Account** and create a new one (or open an existing account).
2.  Enter the **Email Address** for the mailbox.
3.  Set the incoming and outgoing servers:

```
  Incoming (IMAP):  outlook.office365.com   port 993, SSL
  Outgoing (SMTP):  smtp.office365.com      port 587, TLS
```

4.  Enable **Use OAuth**, then link the **Connected App** you created in Part 2.
5.  **Save**, then click **Authorize API Access**. Microsoft will ask you to sign in and approve the request. Once approved, you're returned to Frappe and the account is connected.
6.  Mark the account as **Default Incoming** and/or **Default Outgoing** as needed, Use OAuth option for authentication and then click **Authorize API Access**.

![](https://docs.frappe.io/files/image988c3d.png)

If everything is correctly done you will be taken to the outlook page where you select the account you want to gain access to. On approval you have then successfully connected your email account to Frappe.

## Troubleshooting

-   **Outgoing mail fails:** Even with OAuth, **SMTP AUTH must be enabled** for the mailbox in the Exchange admin center. Check it at [aka.ms/smtp\_auth\_disabled](https://aka.ms/smtp_auth_disabled).
-   **Authorization is blocked:** If your organization uses Microsoft **Security Defaults** (which block legacy auth), confirm SMTP AUTH is enabled for the specific account.
-   **"Admin consent required" error:** Return to **API permissions** in Azure and make sure **Grant admin consent** was clicked for every permission.
-   **Wrong account connected:** Re-authorize while logged in to Frappe as the intended final user, not Administrator.

**Sources:**

-   [Tutorial: Connecting Frappe/ERPNext to Microsoft 365 Mail Services (OAuth)](https://discuss.frappe.io/t/tutorial-connecting-frappe-erpnext-to-microsoft-365-mail-services-oauth/106003)
-   [Frappe Helpdesk — Installation](https://docs.frappe.io/helpdesk/installation)
-   [Frappe Helpdesk — Email Communication](https://docs.frappe.io/helpdesk/email-communication)

* * *
