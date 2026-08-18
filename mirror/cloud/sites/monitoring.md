---
title: "Monitoring"
source_url: https://docs.frappe.io/cloud/sites/monitoring
upstream_updated: "19-03-2026 10:04:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Monitoring

Frappe Cloud logs a lot of data while your site is running like Request Logs, Site Logs, CPU Time, etc.

## Site Analytics

The **Analytics** tabs shows a lot of charts:

1.  **Requests** - Number of Requests (per minute)
2.  **CPU Usage** - CPU Usage of Requests
3.  **Background Jobs** - Number of Background Jobs
4.  **Background Jobs CPU Usage** - CPU Usage of Background Jobs
5.  **Usage Counter** - Cumulative CPU Usage of Requests. You can also see the Daily CPU Time Limit line, you can monitor this chart to know when you need to upgrade your Plan.
6.  **Uptime** - Uptime of the web worker and scheduler. Collected every 3 minutes.

![](https://docs.frappe.io/files/image3c0c87.png)

Analytics are only available after Setup Wizard is completed. Uptime status is collected every minute.

## Investigating high usage

Primarily for investigating high usage, you should look at the **Requests Duration By Path** and **Background Job Duration By Path** graphs. This will give you an idea of which endpoints in your site take most time/requests.

![](https://frappecloud.com/files/gszsZA1.png)

Here, the red bars are seem to take relatively long and should be looked into.

![](https://frappecloud.com/files/xKtypi1.png)

It is sorted in descending order, so the first endpoints in the list are usually slowest.

## Database Storage Usage

### How often is database usage synced ?

Database usage is synced from your site to the Frappe Cloud dashboard in **every 6 hrs**.

### How to refresh database usage on demand ?

If you’ve made changes or want to view the most up-to-date database usage, you can manually trigger a usage refresh.

You can do this from the **Site Overview page** or the **DB Analyzer.**

> **Note:** This action also purges the Information Schema cache. After refreshing, the usage reported by Frappe Cloud and the DB Storage Report (Framework) / DB Analyzer will be consistent.
> 
> **Limit:** This action can be performed once every 15 minutes.

![](https://docs.frappe.io/files/imagecdfe78.png)

![](https://docs.frappe.io/files/image4e6986.png)

### **Discrepancy Between FC DB Usage and Storage Reports**

You may sometimes notice a difference between the database usage reported by Frappe Cloud and the figures shown in the DB Storage Report (Framework) or the Frappe Cloud DB Analyzer.

#### **Reason :**

Frappe Cloud calculates database usage using a custom table parser designed to avoid performance impact on the database. This approach allows it to provide more accurate information, as it does not rely on cached data.

In contrast, the DB Storage Report in the Framework and the DB Analyzer on Frappe Cloud depend on MariaDB’s Information Schema tables. That data is typically cached and only refreshed under specific conditions. As a result, they may contain stale data, which can lead to discrepancies in reported usage.

#### Solution :

To view the most up-to-date database usage, you need to refresh the Information Schema cache.

You can do this by triggering a database usage refresh from either from the Site Overview page, or the DB Analyzer.

For more details, please refer to the [relevant documentation](https://docs.frappe.io/cloud/sites/monitoring#how-to-refresh-database-usage-on-demand).

## Monitoring Disabled

Frappe Cloud uses a monitoring server to check if your site is online and healthy.

For example, if your site domain is `example.com`, our monitoring server will send a request to:

```
https://example.com/api/method/ping
```

Your site should reply with:

```
{"message": "pong"}
```

and return an **HTTP 200** status code.

### Why Monitoring May Be Disabled

Monitoring can be turned off automatically if your site can’t be reached. Common reasons include:

-   The primary domain has expired
-   DNS records are incorrect
-   The domain is behind Cloudflare or another CDN that blocks the ping request
-   Custom app changes cause the ping endpoint to fail

If our system detects that your site is active but can’t verify uptime through your domain, monitoring will be disabled and you’ll get an mail for the same.

### How to Re-Enable Monitoring

1.  Go to your **Frappe Cloud Dashboard** and open your **Site Overview** page.
2.  At the top, you’ll see an option to **Enable Monitoring**.  
    ![shapes at 25 10 08 15.06.33](https://docs.frappe.io/files/shapes%20at%2025-10-08%2015.06.33.png)
3.  Click the button — you’ll see the reason why monitoring was disabled.  
    ![Screenshot 2025 10 08 at 15 07 33 Frappe Cloud](https://docs.frappe.io/files/Screenshot%202025-10-08%20at%2015-07-33%20Frappe%20Cloud.png)
4.  Click **Check & Enable Monitoring** to verify your setup and turn monitoring back on.  
    ![Screenshot 2025 10 08 at 15 12 42 Frappe Cloud](https://docs.frappe.io/files/Screenshot%202025-10-08%20at%2015-12-42%20Frappe%20Cloud.png)  
    If the check fails, you’ll see details about what went wrong and how to fix it.
