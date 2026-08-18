---
title: "Setting up S3"
source_url: https://docs.frappe.io/drive/s3-integration
upstream_updated: "13-01-2026 15:35:33"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Setting up S3

### Connecting

1.  Open Settings, and go to Storage
2.  Change the "Backend Type" to S3
3.  Add your S3 authentication details

-   API Key and Secret
-   The bucket name to use for Drive's files in home folders (and for teams by default)
-   Endpoint URL, if you're using a custom one
-   Signature version - defaults to `s3v4`, but some providers only support `s3`.

### Syncing existing files

If you already have files in your bucket, you can create a new team and sync the folders from that bucket. Here is a demo:
