---
title: "Move site across server"
source_url: https://docs.frappe.io/cloud/sites/move-site-across-server
upstream_updated: "09-03-2026 11:21:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Move site across server

> **Note:** This option is now part of the **Site Migration** feature.
> 
> For instructions on moving a site to a different server / bench, see the documentation : [https://docs.frappe.io/cloud/site/site-migrations/move-site-to-different-server-or-bench](https://docs.frappe.io/cloud/site/site-migrations/move-site-to-different-server-or-bench)

* * *

You can directly schedule Site Migration across server from a site's dashboard.

> For moving your site to a dedicated server from a public bench group
> 
> 1.  Use [Change Bench Group](https://frappecloud.com/docs/sites/move-site-to-private-bench) option to move the site to a private bench group
> 2.  Follow the below steps to move the site to your dedicated server

1.  To change the server for the site go to your site Dashboard>Actions>Change Server.

![](https://docs.frappe.io/files/2ZNP8AO.png)

2.  Select the server you want to move to (Your team should own the server).

![image](https://user-images.githubusercontent.com/63963181/285370002-4558082a-6271-4271-a6a7-c0bd10dcea7e.png)

3.  If the selected server isn't added to the bench group add it by clicking on Add Server to Bench Group.

![image](https://user-images.githubusercontent.com/63963181/285370190-e81da89e-a8dd-4226-9d1d-e0eb0188f87d.png)

4.  Click Migrate Site to Server if the target server is added to the bench group and the Site Migration will be done in the scheduled time (or leave it untouched if you want it to start immediately).

![image](https://user-images.githubusercontent.com/63963181/285369952-7d262852-3340-41e4-95fc-b7a3a695aced.png)

  

  

### Why is so much additional storage required when moving site to dedicated server?

The reason for storage that is much larger than backup size is because during site/backup restore, the backup files are uncompressed, due to which the disk storage spikes much higher than your database size. To avoid any failure during the restore, it is recommended you have enough storage on the server.

  

In such cases, you can [add the required add-on storage](https://docs.frappe.io/cloud/storage-addons) on the server to continue with restoration.
