---
title: "Introduction"
source_url: https://docs.frappe.io/cloud/servers/servers-introduction
upstream_updated: "16-02-2026 17:05:24"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Introduction

Unlike with Public or Private benches, with Servers on Frappe Cloud you now get dedicated compute resources for your sites. Even on private benches, your bench is still on a shared server consuming shared resources along with other benches. This is not the case here.

Servers on Frappe Cloud come in pairs (Application + Database), both the servers can have different plan/size, however both are created within the same region.

Since you're paying for the servers, sites on these servers don't cost you anything extra. That means you can run as many sites and bench groups as you want on these servers.

All other features like [Private Bench Groups](https://frappecloud.com/docs/benches), [SSH Access](https://frappecloud.com/docs/ssh), Database Access work as is with servers. All Frappe Cloud servers are powered by AWS (Amazon Web Services) EC2 instances.
