---
title: "Looker Studio"
source_url: https://docs.frappe.io/cloud/connect-looker-studio
upstream_updated: "16-02-2026 17:05:34"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Looker Studio

> [Looker Studio](https://lookerstudio.google.com/navigation/reporting) is a free, online tool that helps users create and share interactive dashboards and reports from data. It was formerly known as Google Data Studio.

1.  You need to first generate a database user for your site. Follow this [documentation](https://frappecloud.com/docs/database-users-and-permission-manager) to create a read-only user.

  

Typically, it takes a few seconds to configure the database user. Once it's complete, click on **View Credential**.

![Screenshot 2025-01-31 at 1.15.44 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%201.15.44%20PM.png "Screenshot 2025-01-31 at 1.15.44 PM.png")  
2\. Go to Looker Studio and click on **Create New Data Source** !

![Screenshot 2025-01-31 at 1.39.14 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%201.39.14%20PM.png "Screenshot 2025-01-31 at 1.39.14 PM.png")  
3\. Search for **mysql** in connector list and choose the connector from Google.

![Screenshot 2025-01-31 at 1.40.34 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%201.40.34%20PM.png "Screenshot 2025-01-31 at 1.40.34 PM.png")  
4\. Fill up the database user's info and click on **Authenticate**.

  

**Note :** You need to check **Enable SSL** and must provide the SSL certificate. Check the representation image of **Step 1** of this documentation to get the idea from where to download the certificate.

  

![Screenshot 2025-01-31 at 1.45.07 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%201.45.07%20PM.png "Screenshot 2025-01-31 at 1.45.07 PM.png")  
5\. Choose the required table and click on **Connect**.  
6\. After that, you can see the details of the table and create required reports.

![Screenshot 2025-01-31 at 1.59.10 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%201.59.10%20PM.png "Screenshot 2025-01-31 at 1.59.10 PM.png")  
7\. Check Looker Studio [office documentation](https://cloud.google.com/looker/docs/intro) to get guidance on creating dashboards and reports.
