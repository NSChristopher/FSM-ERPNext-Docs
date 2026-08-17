---
title: "Email Domain"
source_url: https://docs.frappe.io/erpnext/user/manual/en/email-domain
upstream_updated: "02-03-2026 23:35:30"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Email Domain

**The `Email Domain` is the display name of an email network/service account you're setting up for your email services in ERPNex and other Frappe apps.**

You can skip to [Email Account](https://docs.frappe.io/erpnext/email-account) creation if you are using one of the services listed [here](https://docs.frappe.io/erpnext/email-inbox#2-create-an-email-domain).

You can configure Email Domains in ERPNext for easy setup of all Email Accounts. To find Email Domain settings go to:

> Home > Settings > Email Domain

**What is my Email Domain?:** You might have purchased an Email service from your internet service provider or your IT services provider. For example, if you access your business mailbox with URL like http://mail.yourcompany.com, then yourcompany.com is expected to be used as your email domain. ERPnext tries to guess the `Email Domain` from your initially entered example `Email Address` if you started from there.

If you want to send and receive emails on your ERPNext account, you need to correctly setup an `Email Domain`. You may be using free mail services like GMail or Yahoo. In this case, you don't need to create a domain, instead select a service provider from the list. However, you might have to allow access to ERPNext for your GMail account.

ERPNext creates a template `Email Domain` using example.com for your reference. You should add your new domain if you want to use it in your ERPNext account.

> **IMPORTANT:** If your actual mail account id differs from the work email address you use in the `Email Account`setup later, you need to use the option `Use different Email ID` when creating the different work mail accounts to communicate with your service and use the related password!

![Email Domain](https://docs.frappe.io/files/email-domain.png)

## 1\. How to create an Email Domain

1.  Go to the Email Domain list, click on New.
    
2.  Enter the Example Email Address. This is where you enter your business email address. For example, if your email ID is [\[email protected\]](https://docs.frappe.io/cdn-cgi/l/email-protection) you should enter this.
    
3.  Email Server. This is the URL of your mail server or the email service that you have purchased. For example, it may be mail.yourcompany.com or imap.yourcompany.com.
    
4.  Use IMAP. IMAP and POP are two services used by most mail servers for incoming emails. If your Email server allows IMAP service for the incoming emails keep this checked. Otherwise, leave this unchecked.
    
5.  Use SSL. If your mail server uses SSL (Secure Socket Layer) communication keep this checked.
    

**Do I have SSL?:** You may have purchased SSL certificate from your IT service provider for SSL and they may have set up SSL for your mail server. If you're using 'https' while accessing mail server over browser then you might have SSL setup.

1.  Use SSL for Outgoing. If your mailserver uses SSL for outgoing, enable this to explicitly use SSL for outgoing emails. Defaults to port 465.
    
2.  Append Outgoing Email to Sent Folder. If you are not using standard mailservers provided by GMail and similar services, you might need to enable this option to append all outgoing emails to the email account's inbox. (Recommended for email servers like Zimbra and CPanel).
    
3.  Attachment Limit (MB). You can limit the size of file attachments in emails sent from ERPNext.
    
4.  SMTP Server is the outgoing email service address of your email server.
    
5.  Tick Use TLS if your SMTP service supports TLS for security.
    
6.  Default port. SMTP service is usually set on port 25. If your email server is set up on a separate port number you can set that up here.
    

### 1.1 After saving the domain

Once you click on save, these settings are validated by ERPNext and the Email Domain gets saved. Sometimes this could take a few seconds and you might have to wait. This email domain is then available in a dropdown called Domain in the Email Accounts screen.

![Email domain in email account](https://docs.frappe.io/files/email-domain1.png)

#### Entered everything but still unable to setup Email Domain?

If you've entered and verified the above settings and are still unable to setup Email Domain, you can contact ERPNext support within your account for help.

### 2\. Related Topics

1.  [Email Account](https://docs.frappe.io/erpnext/email-account)
2.  [Email Inbox](https://docs.frappe.io/erpnext/email-inbox)
