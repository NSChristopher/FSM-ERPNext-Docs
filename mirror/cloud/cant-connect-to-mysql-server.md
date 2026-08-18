---
title: "Can't connect to MySQL server"
source_url: https://docs.frappe.io/cloud/cant-connect-to-mysql-server
upstream_updated: "16-02-2026 17:05:19"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Can't connect to MySQL server

```
ERROR 2002 (HY000): Can't connect to MySQL server on '10.1.1.1' (115)
```

You may see this error when **restoring** a site or during an **update site migrate** job. This likely happened as the mysql server restarted as it didn't have sufficient memory for the operation. Changing the **database server** plan for more memory should fix this. To change plan of your dedicated database server, refer [this guide](https://frappecloud.com/docs/servers/plan)
