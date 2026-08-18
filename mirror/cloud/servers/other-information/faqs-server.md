---
title: "FAQs - Server"
source_url: https://docs.frappe.io/cloud/servers/other-information/faqs-server
upstream_updated: "16-02-2026 17:05:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# FAQs - Server

### How many servers do I buy? Do I need to buy 2?

Yes, you always need to buy pair of servers:

-   Application: This is where your code and your "site" directory will sit. All your attachments (photos, videos) will go here unless configured otherwise. Eg: [s3-attachements](https://github.com/shridarpatil/Frappe-attachments-s3)
-   Database: This is where your database (MariaDB) and all "doctype" data will sit.

### How many bench groups can I create? Can I create testing and production bench group on same server?

You can create as many bench groups as you want on your server. Though the performance will get affected as you create many. [Here](https://frappecloud.com/docs/servers/guidelines-for-choosing-a-server-plan) is a guide for the same
