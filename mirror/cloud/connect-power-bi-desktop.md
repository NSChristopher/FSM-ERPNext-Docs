---
title: "Power BI Desktop"
source_url: https://docs.frappe.io/cloud/connect-power-bi-desktop
upstream_updated: "16-02-2026 17:05:33"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Power BI Desktop

> [Microsoft Power BI](https://www.microsoft.com/en-us/power-platform/products/power-bi) is an interactive data visualization software product developed by Microsoft with a primary focus on business intelligence (BI).

## Step 1: Create Site Database User

1.  You need to first generate a database user for your site. Follow this [documentation](https://frappecloud.com/docs/database-users-and-permission-manager) to create a read-only user.
2.  Typically, it takes a few seconds to configure the database user. Once it's complete, click on **View Credential**.

![Screenshot 2025-01-31 at 1.15.44 PM](https://docs.frappe.io/files/Screenshot%202025-01-31%20at%201.15.44%20PM.png "Screenshot 2025-01-31 at 1.15.44 PM.png")

## Step 2: Install MariaDB ODBC connector

1.  Download MariaDB ODBC Connector v3.1.x ([Download link](https://mariadb.com/downloads/connectors/connectors-data-access/odbc-connector)).

> **Note**: Please avoid installing v3.2.x as it has a [bug](https://community.fabric.microsoft.com/t5/Power-Query/Excel-Power-Query-issue-with-MariaDB-ODBC-driver/m-p/4320893) that causes it to not work with Power BI.

![256](https://docs.frappe.io/files/256.png "256.png")  
2\. Install ODBC Connector.

![ss2 1](https://docs.frappe.io/files/ss2%201.png "ss2 1.png")

![ss3](https://docs.frappe.io/files/ss3.png "ss3.png")

![ss5](https://docs.frappe.io/files/ss5.png "ss5.png")

## Step 3: Setup Credentials in ODBC

1.  Open **ODBC Data Sources** with **Run as administrator.**

> **Note :** If you have installed ODBC connector of x64 version, then you should open `ODBC Data Sources (64-bit)` and if you have downloaded and installed x32 version, then open `ODBC Data Sources (32-bit)`

![ss12](https://docs.frappe.io/files/ss12.png "ss12.png")  
2\. Click on **Add** button in **User DSN** tab.

![ss19](https://docs.frappe.io/files/ss19.png "ss19.png")  
3\. Choose **MariaDB ODBC 3.1 Driver**.

![27](https://docs.frappe.io/files/27.png "27.png")  
4\. Put the **Server Name** , **Port**, **Use Name** , **Password**, **Database** in the required fields and go to next page.

> **Note:** Currently If you try to click on **Test DSN**, it will fail. We need to do few more configurations to make it working.

![ss14](https://docs.frappe.io/files/ss14.png "ss14.png")  
5\. No information is needed on the current page. Proceed to the next page.

![17](https://docs.frappe.io/files/17.png "17.png")  
6\. No information is needed on the current page. Proceed to the next page.

![18](https://docs.frappe.io/files/18.png "18.png")  
7\. In current page, make sure to check **Verify Certificate** & **Force TLS Use** checkbox.

![ss17](https://docs.frappe.io/files/ss17.png "ss17.png")  
8\. No information is needed on the current page. Click on **Finish** to save it.

![ss18](https://docs.frappe.io/files/ss18.png "ss18.png")

## Step 4: Configure MariaDB ODBC In Power BI Desktop

1.  Open Power BI and click on **Get Data From Other Sources**.

![ss6](https://docs.frappe.io/files/ss6.png "ss6.png")  
2\. Search for **ODBC** and click on **Connect**.

![ss20](https://docs.frappe.io/files/ss20.png "ss20.png")  
3\. Choose the ODBC connection from the list. It should be the same you have created in **ODBC Data Sources Administrator** in **Step 3**.

![21](https://docs.frappe.io/files/21.png "21.png")  
4\. Now, it might ask you for username and password. Choose **Windows** from the sidebar and click on **Connect**.

![25](https://docs.frappe.io/files/25.png "25.png")  
5\. Once connected, you will be able to view all the tables and their previews.

![257](https://docs.frappe.io/files/257.png "257.png")  
6\. Now, follow the [official documentation](https://learn.microsoft.com/en-us/power-bi/) to create dashboards and reports in Power BI.
