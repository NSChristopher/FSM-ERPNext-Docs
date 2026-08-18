---
title: "FAQ - Billing"
source_url: https://docs.frappe.io/cloud/faq/billing
upstream_updated: "16-02-2026 17:05:32"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# FAQ - Billing

### How is site usage calculated and charged?

Let's say you create a site with the $25/month plan. For every day your site is active, we will charge $25 / 30 = $0.83 per day. That means if you use a site for only 20 days, we will charge only for 20 days.

### Is there a User limit?

Sites created with any of the plans do not have any user limit. However, these sites are limited by CPU hours per day. This means if there are a lot of users using the site, the site may slow down if the CPU usage limit is reached. For a detailed explanation read this [blog post on Pricing](https://frappecloud.com/blog/frappe-cloud/frappe-cloud-pricing).

### How is CPU usage calculated and throttled?

We log every request that you make to your site. For e.g, if you open the General Ledger Report in your site and it takes 2 seconds for the report to generate, we log that time. This is the CPU usage time. This time will add up as you use your site.

Now, based on the plan you chose, we will check if the total CPU usage time is used up, if it is we will drop the request and all the subsequent requests. If this is happening frequently to your site, it is an indication that you should switch to a higher plan.

### How do I stop billing in my account?

You are charged based on the number of sites you have created. If you delete all your sites, you won't be billed anything.

### Is there downtime involved in changing plan?

Changing plan of your **site** is instantaneous without any downtime involved. On the other hand, when you change plan of your **dedicated server**, regardless of upgrade or downgrade, there will be downtime. This is because changing plan means replacing the virtual machine running your sites.
