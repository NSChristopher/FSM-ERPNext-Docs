---
title: "Creating new server"
source_url: https://docs.frappe.io/cloud/servers/new
upstream_updated: "22-05-2026 19:18:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Creating new server

From the [Servers](https://frappecloud.com/dashboard/servers) tab on the dashboard, click on **New** **Server.**

![](https://docs.frappe.io/files/Screenshot%202026-02-24%20at%2018.03.40.png)

  

  

Enter the **Server Name.**

![](https://docs.frappe.io/files/Screenshot%202026-02-24%20at%2018.06.16.png)

  

  

Select the **Cloud Provider**. (Note - [Click here](https://docs.frappe.io/cloud/servers/provider-comparision) to know how providers differ from each other)

![](https://docs.frappe.io/files/Screenshot%202026-02-24%20at%2018.08.31.png)

  

Select the **Region**.

![](https://docs.frappe.io/files/image74ae1d.png)

  

Select the **Deployment Mode**.

-   Unified Server - Appropriate for most small and medium business workloads.
-   Separate Server - Recommended for enterprise workloads that may need separate scaling for Application and Database in future.

![](https://docs.frappe.io/files/imagea0326d.png)

  

Select the **Service Type**.

-   Standard - Regular SLA
-   Premium - Priority SLA and Performance Consulting (Recommended for Large Enterprises)

![](https://docs.frappe.io/files/Screenshot%202026-02-24%20at%2018.16.10.png)

  

Select the desired **Application Server configuration**.

![](https://docs.frappe.io/files/Screenshot%202026-02-24%20at%2018.19.17.png)

  

Select the desired **Database Server configuration**. (Note - This step is applicable only if you have chosen "Separate Server" as the Deployment Mode).

![](https://docs.frappe.io/files/image4ddab5.png)

  

Click the checkbox to **Enable Auto Add-on Storage** if you wish to allow automatic scaling of Application and Database Servers based on usage. (Note - This option is available only on select cloud providers.)

![](https://docs.frappe.io/files/Screenshot%202026-02-24%20at%2018.22.38.png)

Review the Server Configuration and click the checkbox to provide **Consent for Local Compliances** and click on **Create Server**.

![](https://docs.frappe.io/files/Screenshot%202026-02-24%20at%2018.26.58.png)

  

A new server will be created based on the selected configuration. It takes 5-10 mins to complete the creation.

  

You can check the **Plays** tab to track the progress. (Note - Notice the "Installing" status on the top bar.)

![](https://docs.frappe.io/files/Screenshot%202026-02-24%20at%2018.29.27.png)

  

Once the server is created, the status will turn to "Active". You can start working with the server now.

![](https://docs.frappe.io/files/image4ea013.png)
