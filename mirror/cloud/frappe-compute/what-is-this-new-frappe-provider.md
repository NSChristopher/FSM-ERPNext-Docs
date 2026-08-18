---
title: "What is this new 'Frappe' provider?"
source_url: https://docs.frappe.io/cloud/frappe-compute/what-is-this-new-frappe-provider
upstream_updated: "07-05-2026 14:46:16"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# What is this new 'Frappe' provider?

## About

The new Frappe provider is our attempt at decentralisation and ownership over our own infra. Instead of using compute from public cloud companies like AWS, Oracle and Hetzner, we are using our own infrastructure.

## What do you mean by compute?

Frappe Cloud uses virtual machines to create server. A 'server' on Frappe Cloud is anologous with a virtual machine.

## How are you doing this?

We are building our own cloud infrastructure stack in Frappe that runs on rented hardware.

## Can I host my production sites on this?

Not a good idea. While we are in the process of building features like data replication and backups, we do not give any guarantees with respect to uptime and data safety.
