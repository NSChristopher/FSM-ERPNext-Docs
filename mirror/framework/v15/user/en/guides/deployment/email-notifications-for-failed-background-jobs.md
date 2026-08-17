---
title: "Email Notifications For Failed Background Jobs"
source_url: https://docs.frappe.io/framework/v15/user/en/guides/deployment/email-notifications-for-failed-background-jobs
upstream_updated: "17-02-2026 10:41:17"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Email Notifications For Failed Background Jobs

Frappe handles failure of jobs in the following way,

1.  If a job fails, (raises exception), it's logged in Scheduler Log and  `logs/worker.error.log`.
2.  Keeps a lock file and would not run anymore if lock file is there.
3.  Raises LockTimeoutError in case the lock file is more than 10 minutes old.

You can configure email notification for scheduler errors. By writing a file, `sites/common_site_config.json` with content

  

```
{
  "celery_error_emails": {
 "ADMINS": [
 [
 "Person 1",
 "[email protected]"
 ],
 [
 "Person2 ",
 "[email protected]"
 ]
 ],
 "SERVER_EMAIL": "[email protected]"
 }
}
```

One limitation is that it'll use local mailserver on port 25 to send the emails.
