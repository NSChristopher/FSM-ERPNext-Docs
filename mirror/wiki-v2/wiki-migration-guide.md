---
title: "Wiki Migration Guide"
source_url: https://docs.frappe.io/wiki-v2/wiki-migration-guide
upstream_updated: "13-01-2026 11:36:00"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Wiki Migration Guide

## Sidebar Migration

Wiki v2 uses a simpler sidebar structure with a parent (Wiki Group) and child (Wiki Page) structure, unlike the earlier version which allows unlimited nesting. Every Wiki Group (nested or not) will be un-nested after migration. Due to the changes in the data structure we need to ensure some things for smooth migration.

1.  Make sure there are no Wiki Sidebars with duplicate names (or every item will be under those Wiki Groups will be grouped under a single Wiki Group)
2.  Make sure that title fields of `Wiki Sidebar` are not empty
