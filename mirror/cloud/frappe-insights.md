---
title: "Frappe Insights"
source_url: https://docs.frappe.io/cloud/frappe-insights
upstream_updated: "29-04-2026 15:20:01"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Frappe Insights

\> [Frappe Insights](https://frappe.io/insights) is an easy-to-use, open-source business intelligence tool designed to help businesses make the most of their data.  
\>  
\>

\> For simplicity, we have used **test.com** as the site name in the documentation. Please replace it with your actual site name.  
\>  
\>

## First Scenario

Insights is installed in same site and you haven't configured anything.

1.  Go to insights setup page > <https://test.com/insights/setup>

![Screenshot 2025-01-31 at 1.08.30 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%201.08.30%20PM.png "Screenshot 2025-01-31 at 1.08.30 PM.png")  
2\. Click on the first option **Connect to your ERPNext Site**.  
3\. Choose a title for your data source. It can be anything you prefer, then continue.

![Screenshot 2025-01-31 at 12.55.02 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%2012.55.02%20PM.png "Screenshot 2025-01-31 at 12.55.02 PM.png")  
4\. This may take a few minutes. Once it's complete, you will be redirected to insight's dashboard.  
5\. Open Data Sources and you will be able to see you database's tables.

![Screenshot 2025-01-31 at 12.57.00 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%2012.57.00%20PM.png "Screenshot 2025-01-31 at 12.57.00 PM.png")  
6\. Now you can write query, reports. For more details, check the documentation <https://docs.frappe.io/insights/introduction> .

## Second Scenario

Insights is installed in different site and you need to connect with that.

1.  You need to first generate a database user for your site. Follow this [documentation](https://frappecloud.com/docs/database-users-and-permission-manager) to create a read-only user.

  

Typically, it takes a few seconds to configure the database user. Once it's complete, click on **View Credential**

![Screenshot 2025-01-31 at 1.15.44 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%201.15.44%20PM.png "Screenshot 2025-01-31 at 1.15.44 PM.png")  
2\. Go to insights setup page > <https://test.com/insights/setup>

![Screenshot 2025-01-31 at 1.08.45 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%201.08.45%20PM.png "Screenshot 2025-01-31 at 1.08.45 PM.png")

**Note :** If you have already completed setup and this page is not appearing to you, go to <https://test.com/insights> and click on **Connect Data Source**.  
3\. Click on **MariaDB** and continue.  
4\. Fill in the required information and make sure to check the **Use SSL** checkbox.

![Screenshot 2025-01-31 at 1.26.50 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%201.26.50%20PM.png "Screenshot 2025-01-31 at 1.26.50 PM.png")  
5\. Click on **Connect**  
6\. Once connection verified, click on **Continue** button.  
7\. This may take a few minutes. Once it's complete, you will be redirected to insights dashboard.  
8\. Open Data Sources and you will be able to see you database's tables.

![Screenshot 2025-01-31 at 12.57.00 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%2012.57.00%20PM.png "Screenshot 2025-01-31 at 12.57.00 PM.png")  
9\. Now you can write query, reports. For more details, check the documentation <https://docs.frappe.io/insights/introduction> .
