---
title: "Outside Working Hours Banner"
source_url: https://docs.frappe.io/helpdesk/helpdesk/customization/outside-working-hours-banner
upstream_updated: "08-05-2026 01:20:27"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Outside Working Hours Banner

When users raise a ticket outside regular working hours, they may be confused about delayed responses. The Outside Working Hours Banner addresses this by notifying users of potential delays and setting clear expectations about response times.

To display the after-hours banner in the customer view, navigate to the **General** tab in the Settings view and enable the "**Outside working hours notice"** toggle, as shown below.

![](https://docs.frappe.io/files/Adobe%20Express%20-%20Screen%20Recording%202026-01-21%20at%2012.39.30%E2%80%AFPM77d642.gif)

When you enable the toggle, a text input appears, allowing you to customize the banner message. Your customized message takes effect once you save the settings.

![](https://docs.frappe.io/files/Untitled%20design6ed650.gif)

Currently, you can use the following variables to personalize your banner message.

**Available variables:**

-   `{{ ticket.name}}` — Ticket reference and other fields of the ticket can also be used. _e.g: #TKT-00123_
-   `{{ next_working_day }}` — Full date with day name. _e.g: Monday, 23 Jan_
-   `{{ next_working_date }}` — Short date format. _e.g: 23 Jan_
-   `{{ expected_response }}` — Expected response time. _e.g: 09:00, Monday, 23 Jan_

**How does it work?**

Suppose your business working hours are set from 9 am to 6 pm on a working day. Now, a customer raises a ticket after 6 pm, say at 9 pm, outside of working hours, then what will happen?

Voila! A notice banner is now displayed for the ticket. Why? because according to the configured SLA for the ticket, the time 9pm is _outside working hours._

![](https://docs.frappe.io/files/highlighted-banner.png)

Now, in the same scenario, let's say a day has passed, and now it's 12 pm on a working day according to your SLA.

![](https://docs.frappe.io/files/image313c83.png)

As you can see, the banner is no longer there. Why? because the ticket is now being viewed inside working hours. Seems confusing, but it's really simple.

`Inside Working Hours = No Banner`

`Outside Working Hours = Show Banner`

Additionally, if an agent replies to a ticket raised outside working hours, the banner will not be displayed again for that ticket.

> Note: The logic for the banner to be displayed solely depends on the SLA's configured for the tickets, also including the holiday list of that particular SLA, to read more about how SLA's work, click [here](https://docs.frappe.io/helpdesk/service-level-agreement)
