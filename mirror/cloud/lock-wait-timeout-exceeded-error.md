---
title: "Lock wait timeout exceeded error"
source_url: https://docs.frappe.io/cloud/lock-wait-timeout-exceeded-error
upstream_updated: "10-06-2026 16:19:42"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Lock wait timeout exceeded error

Sometimes you may run into this particular error

`frappe.exceptions.QueryTimeoutError: (1205, 'Lock wait timeout exceeded; try restarting transaction')`

This usually indicates a bug in your application. In such cases, you should review your application for locks it holds.  
To understand locks, you should also understand [Frappe's transaction model](https://docs.frappe.io/framework/user/en/api/database#database-transaction-model) first.  
Any writes or read with for\_update performed locks the document. If job is running and other transaction (web or background job) tries to access the same doc, it will get a timeout unless the current job updating the rows commits or rolls back the transactions

You should review the process list while the error happens to see what the running queries are [https://docs.frappe.io/cloud/site-process-list](https://docs.frappe.io/cloud/site-process-list)
