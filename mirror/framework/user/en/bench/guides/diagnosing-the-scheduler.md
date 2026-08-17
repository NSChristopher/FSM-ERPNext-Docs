---
title: "Diagnosing The Scheduler"
source_url: https://docs.frappe.io/framework/user/en/bench/guides/diagnosing-the-scheduler
upstream_updated: "17-02-2026 10:41:22"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Diagnosing The Scheduler

If you're experiencing delays in scheduled jobs or they don't seem to run, you can run the several commands to diagnose the issue.

### bench doctor

This will output the following in order:

-   Scheduler Status per site
-   Number of Workers
-   Pending Tasks

Desirable output:

Workers online: 0  
\-----None Jobs-----

### bench --site \[site-name\] show-pending-jobs

This will output the following in order:

-   Queue
-   Tasks within Queue

Desirable output:

\-----Pending Jobs-----

### bench purge-jobs

This will remove all pending jobs from all queues
