---
title: "Architecture"
source_url: https://docs.frappe.io/framework/user/en/basics/architecture
upstream_updated: "17-02-2026 10:41:13"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Architecture

Frappe Framework is a full-stack web based framework and it includes all the  
tools needed to deploy a site into production. Database, caching, background  
jobs, realtime notifications, etc are all configured when you set up a Frappe  
site.

Frappe framework is based on Python, so it uses the `virtualenv` to setup  
isolated environments for multiple Python versions. You can also use it to  
deploy sites with different Frappe versions.

The following diagram closely resembles the `frappe-bench` directory structure  
and its interface with different parts of the stack.

![Architecture](https://docs.frappe.io/files/architecture.png)  
_Architecture_

To setup a Frappe based site, you need to first install Bench. If you haven't  
installed it already, check out the [Installation](https://docs.frappe.io/framework/v14/user/en/installation)  
page.

You can create a new `frappe-bench` setup by running the following command:

```
bench init frappe-bench
```

This command will do the following:

1.  Create a directory called `frappe-bench` and `frappe-bench/sites`, `frappe-bench/apps` within it.
2.  Setup a python virtual environment under `frappe-bench/env`.
3.  Create a `frappe-bench/config` folder to store redis configuration files.
4.  Download `frappe` app and `pip install` it.
5.  Install node packages.
6.  Build JS/CSS assets.

Each `frappe-bench` setup spawns it owns web, redis and node processes.
