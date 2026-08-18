---
title: "Bench Analytics"
source_url: https://docs.frappe.io/cloud/bench-analytics
upstream_updated: "16-02-2026 17:05:27"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Bench Analytics

We have now added a feature to expose bench level metrics.

Available under the `Bench Analytics` tab on the server page  
![](https://docs.frappe.io/files/Screenshot%202025-09-04%20at%205.42.51%E2%80%AFPM.png)

Smiliar to how users are exposed to site level analytics, it is now possible to see how benches in a selected release group are performing and early detect problems  
using this as well.

We currently expose the following metrics

1.  **Memory** - Shows how much RAM is a bench in a release group eating up over a period of time ![](https://docs.frappe.io/files/Screenshot%202025-09-04%20at%205.45.32%E2%80%AFPM.png)
2.  **CPU Time** - Shows the amount of time your CPU is working on a process. ![](https://docs.frappe.io/files/Screenshot%202025-09-04%20at%205.46.37%E2%80%AFPM.png)
3.  **Network I/O** - Inbound and outbound network traffic from your bench. ![](https://docs.frappe.io/files/Screenshot%202025-09-04%20at%205.48.30%E2%80%AFPM.png)
4.  **Disk I/O** - Disk level read and write operations performed by your bench. ![](https://docs.frappe.io/files/Screenshot%202025-09-04%20at%205.50.06%E2%80%AFPM.png)

These metrics above should ideally help in early identifying problems and also providing deeper analysis of problems
