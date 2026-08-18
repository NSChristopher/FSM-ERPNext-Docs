---
title: "Server Instance Types"
source_url: https://docs.frappe.io/cloud/servers/instance-types
upstream_updated: "16-02-2026 17:05:25"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Server Instance Types

## Dedicated Instance

With **dedicated instances**, the underlying virtual machine provider allocates a fixed set of resources exclusively for your workload. These resources are reserved for you alone, and even if your server is not fully utilizing them, they remain available at all times.

Because of this, dedicated instances are well suited for workloads that require consistently high CPU and memory usage or need to handle sudden traffic spikes. The guaranteed resources ensure stable and predictable performance without interference from other tenants.

## Shared Instance

With **shared instances**, the virtual machine runs on infrastructure where resources are shared among multiple tenants. For example, your instance may be allocated 2 vCPUs, but if other virtual machines on the same physical host require more resources, your instance’s performance may be affected.

Shared instances typically support **CPU bursting**, which allows you to fully utilize the allocated vCPUs for short periods of time. However, sustained high usage (e.g., running at full CPU 24/7) is not guaranteed. Once usage exceeds a certain threshold, the cloud provider may throttle CPU performance.

#### Provider-Specific Details :

For a deeper understanding, refer to the official documentation from cloud providers:

-   Hetzner : [https://docs.hetzner.com/cloud/servers/faq/](https://docs.hetzner.com/cloud/servers/faq/)
-   Amazon : [https://www.amazonaws.cn/en/ec2/spot-instances/faqs/](https://www.amazonaws.cn/en/ec2/spot-instances/faqs/)

#### **Limited Support:**

Shared instances can have variable performance. If your server hits certain thresholds, the machine may throttle, and there is no reliable way to determine whether site slowness is due to an application-level issue or a server-level issue.

Therefore, if your site on a shared instance faces performance issues, we will not be able to provide support for those cases.

We recommend using **Shared Instances** for **development** and **UAT** environments. For **production workloads**, it is strongly advised to use **Dedicated Instances** to ensure consistent performance and reliable support.

## Unified Server

Previously, Frappe Cloud dedicated setups required **two separate servers**:

-   One server for the application (benches)
-   One server for the database

You can now choose a **Unified Server** setup, where both the application (benches) and the database run on the **same server**.

This simplifies the architecture and enables you to run a dedicated setup at a **lower cost**.

![](https://docs.frappe.io/files/image0d442a.png)  
_Architecture for Unified Server_

Unified servers are now available for all cloud providers on Frappe Cloud.
