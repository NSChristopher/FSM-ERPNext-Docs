---
title: "Setting up Sendgrid SMTP Email in ERPNext"
source_url: https://docs.frappe.io/erpnext/user/manual/en/setting-up-sendgrid-smtp-email-in-erpnext
upstream_updated: "06-03-2026 16:25:09"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Setting up Sendgrid SMTP Email in ERPNext

SMTP, or simple mail transfer protocol, is a quick and easy way to send email from one server to another. SendGrid provides an SMTP service that allows you to deliver your email via our server instead of your client or server. ERPNext comes built-in with a configured email client so that you can send and receive emails in ERPNext and append them to documents if required.

**Integrating SendGrid's Web API**

SendGrid’s SMTP API allows developers to specify custom handling instructions for e-mail using an X-SMTPAPI header inserted into the message.

**Step 1:** You need to create an API key to authenticate your application. In this case, _ERPNext_. Learn more about integrating SendGrid with SMTP [here](https://sendgrid.com/docs/API_Reference/SMTP_API/integrating_with_the_smtp_api.html)

Click on SMTP Relay![Screenshot 2024-06-01 at 12.44.17 PM](https://docs.frappe.io/files/Screenshot%202024-06-01%20at%2012.44.17%20PM.png)

Generate an API Key![Screenshot 2024-06-01 at 12.44.33 PM](https://docs.frappe.io/files/Screenshot%202024-06-01%20at%2012.44.33%20PM.png)

**Step 2:** Once your _API key_ has been created, you need to configure it in your ERPNext account > Create a **New** **Email Account.**

  

**Email Address:** _Your Email Address_

**Service:** Select "_SendGrid_"

Check "Use Different Email ID"

**Alternative email ID:** apikey

**Password:** _<API Key Generated in step 1>_

Outgoing server: <server name generated in step 1>

Port: <port number generated above>

![Screenshot 2024-06-01 at 12.44.45 PM](https://docs.frappe.io/files/Screenshot%202024-06-01%20at%2012.44.45%20PM.png)

For SSL connections, uncheck the "use TLS" option![Screenshot 2024-06-01 at 12.45.14 PM](https://docs.frappe.io/files/Screenshot%202024-06-01%20at%2012.45.14%20PM.png)

Now **save** this information and you have successfully configured the SendGrid SMTP Email in ERPNext.

  

  

Power to you!

  

  

  

  

* * *
