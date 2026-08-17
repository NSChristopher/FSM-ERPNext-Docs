---
title: "Generate GSTR-1 JSON File"
source_url: https://docs.frappe.io/erpnext/user/manual/en/update-gstr-1-data-in-gst-offline-tool
upstream_updated: "31-07-2026 10:52:25"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Generate GSTR-1 JSON File

Follow below steps to generate JSON file using ERPNext.  
\*\*Setup GST Parameters:\*\*Go to Accounts > Goods and Services Tax (GST India) > GST Settings and update GST parameters.![](https://docs.frappe.io/files/l1CthRB.png)  
\*\*Report GSTR-1:\*\*Go to Accounts > Goods and Services Tax (GST India) > GSTR-1. Also, you can search in awesome bar.![](https://docs.frappe.io/files/Screen%20Shot%202018-07-22%20at%2012.10.10%20PM.png)  
\*\*Select Return period and Type of Business:\*\*Update filters as per return period and type of Business ( invoice Type) to get the required data.![](https://docs.frappe.io/files/Screen%20Shot%202018-07-22%20at%2012.31.17%20PM.png)  
\*\*Download GSTR-1 Data:\*\*Go to Menu and export and download GSTR-1 Data.  
\*\*GST Return Offline Tool:\*\*Open GST Offline Tool. (Download Offline Tool from [GST Portal](https://www.gst.gov.in/download/returns))![](https://docs.frappe.io/files/1c3pG37.png)﻿Press **New** button and update GST return type, GSTIN Fiscal Year and Tax Period in Offline Tool .![](https://docs.frappe.io/files/SwIbsdI.png)  
**Select Section and Import GSTR-1 CSV in Offline Tool.**![](https://docs.frappe.io/files/M2G3Scu.png)  
**Generate and Download JSON file.**![](https://docs.frappe.io/files/rzGSbRJ.png)  
**Upload JSON file on GST Portal.**![](https://docs.frappe.io/files/BkOkjRq.png)
