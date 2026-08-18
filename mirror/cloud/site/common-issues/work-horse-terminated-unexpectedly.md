---
title: "Work-horse terminated unexpectedly; Waitpid returned 9/15 (signal 9/15)"
source_url: https://docs.frappe.io/cloud/site/common-issues/work-horse-terminated-unexpectedly
upstream_updated: "16-02-2026 17:05:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Work-horse terminated unexpectedly; Waitpid returned 9/15 (signal 9/15)

You may see this as the output of **RQ Job** . This happens when a background worker gets killed. Usually by the [OOM Killer](https://linux-mm.org/OOM_Killer) as the result of consuming too much memory. In such cases, you may consider optimizing your code to use less memory. If that is not possible, you'll have to upgrade your **application** server for more memory.
