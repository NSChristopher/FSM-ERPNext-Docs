---
title: "Lost connection to mysql server"
source_url: https://docs.frappe.io/cloud/site/common-issues/lost-connection-to-mysql-server
upstream_updated: "16-02-2026 17:05:19"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Lost connection to mysql server

```
MySQLdb.OperationalError: (2013, 'Lost connection to server during query')
```

You may see this error when **restoring** a site or during an **update site migrate** job. This likely happened as the mysql server restarted as it didn't have sufficient memory for the operation. Changing the **database server** plan for more memory should fix this. To change plan of your dedicated database server, refer [this guide](https://frappecloud.com/docs/servers/plan)
