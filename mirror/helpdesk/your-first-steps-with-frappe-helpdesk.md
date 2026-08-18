---
title: "Your First Steps with Frappe Helpdesk"
source_url: https://docs.frappe.io/helpdesk/your-first-steps-with-frappe-helpdesk
upstream_updated: "27-05-2026 21:39:01"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Your First Steps with Frappe Helpdesk

Welcome to Frappe Helpdesk! We’re so glad you’re here.

We built Frappe Helpdesk because we were tired of tools that were too complicated or too expensive.

This one's different—simple, open-source, and easy for both agents and customers.

In this guide, we’ll help you set up your inbox, invite your team, manage tickets, track SLAs, and chat internally. Just the basics to get you going.

Before you begin, it helps to know how Helpdesk is structured.

### The frontend

The frontend of Helpdesk has two portals:

1.  **Agent portal:** This is the first screen you will see. If not accessible, type add **/helpdesk** in the URL. This is where your team manages tickets and replies to customers.

![](https://docs.frappe.io/files/image%20(14).png)

2.  **Customer portal:** Where customers can raise tickets and track updates. To access this, go to **Settings → Customer Portal.**  
    ![](https://docs.frappe.io/files/image%20(15).png)

### The backend (Desk)

This view only the Admins (System Managers) can access to:

-   Set up SLA policies and assignment rules
-   Customize ticket forms and workflows
-   Manage teams, roles, and permissions

This gives you full control over how your support team operates.

Now that you’ve understood the basic structure of Frappe Helpdesk, let’s dive in and start the setup!

* * *

### 1\. Basic Setup

All your basic setup can be done through the **Settings** in the Agent view.

![](https://docs.frappe.io/files/image%20(16).png)

#### a. Upload your logo

To make the support portal your own. Go to Settings → Branding, and update the logo and favicon. This will show up both in your Agent and Customer portal.

![](https://docs.frappe.io/files/image%20(17).png)

#### b. Connect your support email account

To set up your email account to send/receive suppot tickets via emails, go to **Settings → Email Accounts**.

Select the email service provider, and for the rest, follow the steps as mentioned [here](https://docs.frappe.io/helpdesk/email-communication#2-how-to-create-an-email-account).

![](https://docs.frappe.io/files/image%20(18).png)

#### c. Invite agents

Now that you have your email account set up, add your team so they can start replying to tickets. Go to Settings → Agents → Add Agent. An invitation email will be sent to them. You can then set the their role as Agent or Manager (full access).

![](https://docs.frappe.io/files/image%20(19).png)

#### d. Add agents to teams

Create teams from the **Settings → Teams** section in the Agent portal.

Tickets can be assigned directly to agents or routed to a team, where Helpdesk will auto-assign them to a member.

![](https://docs.frappe.io/files/image%20(20).png)

Once this is done, you’re ready to define how tickets get handled.

* * *

### 2\. Set SLA

Before tickets start coming in, we need to define how the SLA should be handled. To configure SLAs, switch to the backend (Desk view):

1.  Go to **Apps → Desk**

![](https://docs.frappe.io/files/image%20(21).png)

1.  Search for **“HD Service Level Agreement”** in the search bar. You’ll see the Default SLA already created
2.  You can define multiple SLAs for different scenarios — for example, separate rules for Enterprise customers or Indian customers. If no match is found, the **Default SLA** will be applied to all tickets.

![](https://docs.frappe.io/files/image%20(22).png)

Here’s what you can configure:

-   Set **First Response** and **Resolution** times by priority (High, Medium, Low)
-   Choose which statuses pause or complete the SLA
-   Define **working hours** so timers only count during business time
-   Link a **holiday list** to exclude public holidays from SLA calculations
-   Add **conditions** to apply SLAs based on ticket fields (like priority or region)

To see detailed steps and examples, [read the full SLA documentation](https://docs.frappe.io/helpdesk/service-level-agreement).

* * *

### 3\. Set Assignment Rule

Once your SLA is set, you can use **Assignment Rules** to automatically route tickets to the right agents based on conditions.

1.  Switch to the **Desk view** (Go to **Apps → Desk**).
2.  Search for **HD Assignment Rule** and click **New**.
3.  Define a assign, unassign and close condition (e.g., `doc.priority == "High"`) to trigger the rule.
4.  Select the Assignment Days on which you want the Assignment Rule to be active
5.  Choose how to assign — Round Robin, Load Balancing, or Based on Field.
6.  Add users or teams to whom tickets should be assigned.

For examples and advanced conditions using Python expressions, read the full [Assignment Rule documentation](https://docs.frappe.io/helpdesk/assignment-rule).

* * *

### 4\. Creating Tickets

Now that you have everything configured, let's start creating tickets! There are three main ways tickets can be created:

#### a. Customer Portal

Share your Customer Portal URL with your customers so they can directly log in, raise new tickets, and track updates.

If you have [help articles created](https://docs.frappe.io/helpdesk/lesson-4-knowledge-base), your customer should be able to see recommended articles based on subject they’ve typed. Once they’ve created the ticket, agents should be able to see the ticket in the Agent view as well where they work on resolving it. Customers can track SLA and see replies inside the ticket (as and when the Agent responds).

![](https://docs.frappe.io/files/image%20(23).png)

#### b. Email

If you want your customers to raise tickets via email (e.g., [\[email protected\]](https://docs.frappe.io/cdn-cgi/l/email-protection#7f0c0a0f0f100d0b3f1c10120f1e1106511c1012)), set one of your email accounts as "Incoming" or "Default Incoming." All emails sent to this address will automatically become tickets every 10 minutes.

#### c. Agent Portal

If your agent receives a customer query through a call or chat, they can manually create tickets in the agent portal. After submitting, you'll immediately see the new ticket.

In the ticket view, you can see ticket details, SLA timers, customer replies, agent assignments, priority settings, team changes, internal comments, and tagging—all in one place.

![](https://docs.frappe.io/files/image%20(24).png)

* * *

### 5\. What Next?

Now that you have everything set up, you're good to go. But if you're curious, there's more!

-   [Customize ticket forms and add custom fields](https://docs.frappe.io/helpdesk/field-dependency) to suit your team's workflow.
-   Save time with [canned responses](https://docs.frappe.io/helpdesk/canned-response).
-   Set up a [knowledge base](https://docs.frappe.io/helpdesk/knowledge-base) for self-serve support.
-   Configure [notifications](https://docs.frappe.io/erpnext/user/manual/en/notifications) to stay informed.

* * *

### Need help along the way?

Here are a few links you might find useful:

-   📖 [Documentation](https://docs.frappe.io/helpdesk/introduction?utm_source=setup_guide) – Learn how everything works
-   🌐 [Website](https://frappe.io/helpdesk?utm_source=setup_guide) – Explore features, pricing, and more
-   💬 [Support](https://support.frappe.io/) – Reach out if you get stuck
-   🧩 [Discover other Frappe products](https://frappe.io/products?utm_source=setup_guide) – Check out our open-source tools to make your business more efficient
