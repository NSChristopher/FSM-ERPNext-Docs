---
title: "Webhook Events"
source_url: https://docs.frappe.io/cloud/webhook-events
upstream_updated: "16-02-2026 17:05:34"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Webhook Events

## Site Status Update

This event is triggered whenever the status of a site changes.

Sample Payload -

```
{
   "doctype":"Site",
   "name":"ytest.tanmoy.fc.frappe.dev",
   "owner":"Administrator",
   "creation":"2024-09-13 10:04:41.244578",
   "modified":"2024-09-26 10:49:34.381793",
   "modified_by":"Administrator",
   "docstatus":0,
   "idx":7,
   "ip":"None",
   "status":"Active",
   "group":"bench-0008",
   "notify_email":"[email protected]",
   "team":"dnjt4bkes2",
   "plan":"ERPNext Trial",
   "setup_wizard_complete":0,
   "archive_failed":0,
   "cluster":"Default",
   "bench":"bench-0008-000005-f1",
   "is_database_access_enabled":0,
   "trial_end_date":"2024-09-27",
   "tags":[
      
   ],
   "server":"f1.tanmoy.fc.frappe.dev",
   "host_name":"ytest.tanmoy.fc.frappe.dev",
   "skip_auto_updates":0,
   "additional_system_user_created":1
}
```

## Site Plan Change

This event is triggered whenever a site is upgraded or downgraded to a different site plan.

Sample Payload -

```
{
   "event":"Site Plan Change",
   "data":{
      "doctype":"Site Plan Change",
      "name":"368704046d",
      "owner":"[email protected]",
      "creation":"2024-09-24 11:29:41.596739",
      "modified":"2024-09-24 11:29:41.596739",
      "modified_by":"[email protected]",
      "docstatus":0,
      "idx":0,
      "from_plan":"USD 10",
      "to_plan":"USD 25",
      "type":"Upgrade",
      "site":"test465.frappe.cloud",
      "timestamp":"2024-09-24 11:29:41.596639"
   }
}
```

## Bench Deploy Status Update

The event is trigerred whenever a new bench created under a Bench Group. It will notify your backend about all the status update for a new Bench.

Draft -> Scheduled -> Pending -> Preparing -> Running -> Success -> Failure

Sample Payload -

```
{
    "event": "Bench Deploy Status Update",
    "data": {
        "doctype": "Deploy Candidate",
        "name": "deploy-0019-000059",
        "owner": "Administrator",
        "creation": "2025-04-09 13:24:33.597587",
        "modified": "2025-04-09 13:25:16.659627",
        "modified_by": "Administrator",
        "docstatus": 0,
        "idx": 0,
        "status": "Success",
        "deployed": "None",
        "build_start": "2025-04-09 13:24:34.864515",
        "build_end": "2025-04-09 13:25:16.659052",
        "build_duration": "0:00:41.794537",
        "build_error": "None",
        "group": "bench-0019",
        "retry_count": 0
    }
}
```

## Bench Status Update

This event is trigerred whenever some actions are got performed on the bench and status got updated.

Pending -> Installing -> Updating -> Active -> Broken -> Archived

Sample Payload -

```
{
    "event": "Bench Status Update",
    "data": {
        "doctype": "Bench",
        "name": "bench-0019-000059-f2-london",
        "owner": "Administrator",
        "creation": "2025-04-09 13:25:16.930474",
        "modified": "2025-04-09 13:27:21.992663",
        "modified_by": "Administrator",
        "docstatus": 0,
        "idx": 0,
        "group": "bench-0019",
        "status": "Pending",
        "cluster": "London",
        "is_ssh_proxy_setup": 1,
        "inplace_update_docker_image": "None"
    }
}
```

If you have a requirement for other events, please [raise a feature request on github](https://github.com/frappe/press/issues/new).
