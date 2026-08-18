---
title: "DB Performance Tuning"
source_url: https://docs.frappe.io/cloud/performance-tuning
upstream_updated: "29-04-2026 15:20:01"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# DB Performance Tuning

This page consists of all the performance tuning options available to your site.

For more context refer:  
<https://frappecloud.com/docs/faq/mariadb-slow-queries-in-your-site>  
<https://mariadb.com/kb/en/compound-composite-indexes/>

  

### Add Database Index

1.  Click on the row containing the query you would like to analyze and the Normalized Slow Query dialog should open.![Screenshot 2024-07-31 at 2.27.35 PM](https://docs.frappe.io/files/Screenshot%202024-07-31%20at%202.27.35%E2%80%AFPM.png "Screenshot 2024-07-31 at 2.27.35 PM.png")
2.  Click on the Analyze Query button and a toast should appear stating that the Analyze query has started in the background.![](https://docs.frappe.io/files/9NWWN9T.png)
3.  The above process might take time, anywhere between (10s to 5m) depending on how big the query is and how big the actual tables in the database are.

\> You wont be able to analyze multiple queries at once, because this process is rather CPU intensive.  
\> If you do so, you will be presented with the below warning.  
\>  
\> ![](https://docs.frappe.io/files/QoNsjSd.png)  
\>  
\>  
\>  
4\. Once the analyze query operation is completed, you will be able to see the suggested index.  
![](https://docs.frappe.io/files/jZ2WOcl.png)

  

\> If there is no suggested index, you will be shown the below message. There is nothing much you can do at this point apart from adding database indexes manually.![](https://docs.frappe.io/files/GyVpG9L.png)  
\>  
\>  
\>  
5\. Click on Apply Suggestion to add the suggested index. This will create an "Add Database Index" job, whose status you can track from the jobs tab.  
![](https://docs.frappe.io/files/6QNYkJy.png)

  

\> Note : You will be able to add only one index at a time for any given site.  
\>  
\>
