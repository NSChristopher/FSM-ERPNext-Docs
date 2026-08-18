---
title: "Custom time for pulling emails"
source_url: https://docs.frappe.io/helpdesk/faq
upstream_updated: "06-01-2026 17:21:18"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Custom time for pulling emails

By default Helpdesk pulls Emails every 10 minutes, if you want to configure that, you can do so by writing a small server script.

Go to desk => Server Script => Add Server Script

Use this configuration

![imageb182fe](https://docs.frappe.io/files/imageb182fe.png)

In the script paste this code:  
`frappe.call("frappe.email.doctype.email_account.email_account.pull_emails",email_account="Sales")`  
Replace "Sales" with the name of your email account.

Time configuration:

`All`: Pulls emails every 4 minutes  
`Every n minute`: \*/n \* \* \* \*  
example for pulling emails every 2 minutes `*/2 * * * *`

# Change Helpdesk Email Pull Frequency

By default, Helpdesk pulls emails every **10 minutes**.  
To change this:

### 1\. Create a Server Script

**Desk → Server Script → New**

### 2\. Add Script

```
frappe.call(
    "frappe.email.doctype.email_account.email_account.pull_emails",
    email_account="Sales"
)
> Replace "Sales" with your Email Account name.
```

### 3\. Config

-   Script Type: Scheduler Event
-   Event frequency
-   All: Pulls every 4 minutes
-   CRON: \*/n \* \* \* \* -> To pull emails every n minutes  
    examples:

| Desired Frequency | CRON Expression |
| --- | --- |
| Every **2 minutes** | `*/2 * * * *` |
| Every **5 minutes** | `*/5 * * * *` |
| Every **15 minutes** | `*/15 * * * *` |
