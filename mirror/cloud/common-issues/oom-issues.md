---
title: "Out-of-Memory Issues"
source_url: https://docs.frappe.io/cloud/common-issues/oom-issues
upstream_updated: "16-02-2026 17:05:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Out-of-Memory Issues

If an agent job fails due to the error

```
Traceback (most recent call last):
  File "/home/frappe/agent/repo/agent/base.py", line 50, in execute
    output, returncode = self.run_subprocess(
  File "/home/frappe/agent/repo/agent/base.py", line 103, in run_subprocess
    raise subprocess.CalledProcessError(
subprocess.CalledProcessError: Command 'docker exec -w /home/frappe/frappe-bench bench-xxxxx-000xxxx-fxx-reg bench --site site.frappe.cloud migrate --skip-search-index --skip-failing' returned non-zero exit status 137.
```

it means that your server ran out of memory and should ideally be upgraded to ease the load on the server. To upgrade your dedicated server refer [this guide](https://frappecloud.com/docs/servers/plan)
