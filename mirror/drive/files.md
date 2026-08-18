---
title: "Files"
source_url: https://docs.frappe.io/drive/files
upstream_updated: "06-01-2026 17:21:16"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Files

The only way to currently add files to Frappe Drive is through the client. Either by dragging the files/folder onto it or by selecting the file upload option.

> Frappe Drive saves file paths in the database, so its imperative that you do not modify contents of `/private/files/$user_hash_folder` or the `file_path` in the database. This can lead to lost files and corrupted data

### Special files

**Links**: these are not files at all! They are actually links to some external website. This feature is useful in cases of having a Google Sheeets, for example, or a file hosted on some other cloud solution.

That said, they are treated like files in every way - you can control access, favourite, or do anything you like.

You can add links using the dialog - or just copy a link and Drive will detect it for you.

**Documents**: this is a beta product - Frappe Writer. It is a Google Docs equivalent.
