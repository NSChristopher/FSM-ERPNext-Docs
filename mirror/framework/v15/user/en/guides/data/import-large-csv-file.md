---
title: "Bulk Data Import Guide"
source_url: https://docs.frappe.io/framework/v15/user/en/guides/data/import-large-csv-file
upstream_updated: "17-02-2026 10:41:18"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Bulk Data Import Guide

When importing very large datasets (e.g., more than 5,000 documents), it's recommended to use the command-line utility `bench data-import` instead of the web interface. This approach avoids web request timeouts and ensures a more reliable import process.

## Example Command:

> `bench --site test.erpnext.com data-import ~/Downloads/Activity_Type.csv`

## Command Help

> `bench data-import --help`

### Command Usage:

> `bench data-import [OPTIONS]`

This command allows bulk import of documents into your site from CSV or XLSX files.

### Options:

| Option | Description |
| --- | --- |
| `--file FILE` | Path to import file (.csv, .xlsx).Consider that relative paths will resolve from 'sites' directory _\[required\]_ |
| `--doctype TEXT` | DocType target to import _\[required\]_ |
| `--type [Insert\|Update]` | Insert New Records or Update Existing Records |
| `--submit-after-import` | Submit document after importing it |
| `--mute-emails` | Mute emails during import |
| `--help` | Show this message and exit. |

### Note:

-   The `--file` option can be omitted if the file path is provided as a positional argument.
