---
title: "What are Benches?"
source_url: https://docs.frappe.io/cloud/what-are-benches-and-bench-groups
upstream_updated: "27-02-2026 15:53:30"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# What are Benches?

A **Bench** is a collection of apps and sites. All sites on a **Bench** share the same configuration, such as the version of apps, or version of dependencies.

Frappe Cloud creates the benches from templates which can be viewed under the **Benches** menu.

![](https://docs.frappe.io/files/Screenshot%202026-02-27%20at%203.20.37%E2%80%AFPM.png)

> For a more technical explanation of what a **Bench** is, see the [Bench confusion](#bench-confusion) section.

The template holds information such as:

-   Which apps to install.![](https://docs.frappe.io/files/WtN8r0p.png)
-   What common site config flags to be set for benches deployed from the current template.
-   The version of dependencies to be used for the benches.

> **Private Bench"**
> 
> If you are using a [private bench](https://frappecloud.com/docs/benches) then all of the above information can be set and updated by you.

### **When is a Bench created?**

A bench template by itself does not run your site. For this you have to _deploy_ that template. This takes place when you click on _Deploy_ or _Update Available_ on your **Bench** page.

1.  When you do this, a _Deploy_ job (visible in the **Deploys** tab) is created. This job builds a [Docker image](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image) from the template and uploads it to the Frappe Cloud [Docker registry](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry).  
    ![](https://docs.frappe.io/files/Screenshot%202026-02-27%20at%202.44.37%E2%80%AFPM.png)
2.  After the Deploy job succeeds, a _New Bench_ job (visible in the **Jobs** tab) is created. This job downloads the template’s image and runs it on the server.  
    ![](https://docs.frappe.io/files/Screenshot%202026-02-27%20at%202.52.20%E2%80%AFPM.png)

Once the **Bench** is up and running, a new site can be created on it, or an existing site can be moved to it from another **Bench**.

## **Bench confusion**

If you are familiar with [Frappe Framework](https://frappe.io/framework) development then term "bench" may not be a new one and might cause some confusion. This is a perfectly sane response to our shortcomings when it comes to naming things. To help clear this, I'll try and differentiate between the different benches:

  

| **Term** | **Context** | **Description** |
| --- | --- | --- |
| _Frappe Bench_ | Frappe Framework | Directory that holds a collection of Frappe Framework apps and sites on which they may be installed. |
| `frappe/bench` | Frappe Framework | [CLI tool](https://github.com/frappe/bench) used to manage a _Frappe Bench_. |
| **Bench** | Frappe Cloud | _Frappe Bench_ running inside a container from which your site is served. |

In the context of Frappe, all benches are conceptually linked (unless you are talking about a [regular bench](https://en.wikipedia.org/wiki/Bench_\(furniture\))).
