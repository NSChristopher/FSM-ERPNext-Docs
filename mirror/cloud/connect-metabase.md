---
title: "Metabase"
source_url: https://docs.frappe.io/cloud/connect-metabase
upstream_updated: "16-02-2026 17:05:33"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Metabase

> [Metabase](https://www.metabase.com/) is an open-source business intelligence (BI) tool that allows users to explore data, create dashboards, and visualize data

1.  You need to first generate a database user for your site. Follow this [documentation](https://frappecloud.com/docs/database-users-and-permission-manager) to create a read-only user.

  

Typically, it takes a few seconds to configure the database user. Once it's complete, click on **View Credential**

  

![Screenshot 2025-01-31 at 1.15.44 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%201.15.44%20PM.png "Screenshot 2025-01-31 at 1.15.44 PM.png")  
2\. Open your Metabase dashboard and click on **Add database**.  
3\. Choose **MySQL** as Database Type and fill all the database user related information.

  

**Note :** Ensure that `Use a secure Connection (SSL)` is checked.

  

For **Server SSL certificate Chain**, check the **Step 1** and download the certificate first. Next, open your operating system's default text editor and copy- paste to metabase.

![Screenshot 2025-01-31 at 2.14.10 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%202.14.10%20PM.png "Screenshot 2025-01-31 at 2.14.10 PM.png")  
4\. Once all the details filled, click on **Save**.  
5\. If everything works fine, you will see your database in the list.

![Screenshot 2025-01-31 at 2.19.23 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%202.19.23%20PM.png "Screenshot 2025-01-31 at 2.19.23 PM.png")  
6\. Wait a few minutes for the table schema to sync, then you can view the metadata.

![Screenshot 2025-01-31 at 2.26.22 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%202.26.22%20PM.png "Screenshot 2025-01-31 at 2.26.22 PM.png")  
7\. Once this step is complete, you can follow the [official documentation](https://www.metabase.com/docs/latest/) to create the dashboard and reports.
