---
title: "Architecture"
source_url: https://docs.frappe.io/cloud/faq/architecture
upstream_updated: "07-05-2026 13:16:10"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Architecture

## What's under the hood?

1.  **Frappe Framework**: A full-stack web application framework written in Python and Javascript. The framework provides a robust foundation for building web applications, including a database abstraction layer, user authentication, and a REST API.
2.  **Frappe UI**: A Vue-based UI library to provide a modern user interface. The Frappe UI library provides a variety of components that can be used to build single-page applications on top of the Frappe Framework.
3.  **Agent**: A flask app designed to work along with Press. It provides a CLI interface for Press to communicate with the sites and benches.
4.  **Docker**: An open-source platform that enables developers to build, package, and deploy applications in lightweight, portable containers.
5.  **Ansible**: An open-source IT automation tool that simplifies the management, configuration, and deployment of systems and applications.

* * *

## Architecture Diagram

Typical Frappe Cloud (FC) cluster has a similar architecture:

![FC Cluster](https://docs.frappe.io/files/fc-cluster.png)

A more complex architecture would explain the redundancy for each server along with the network cluster.

* * *

  

Watch this video to know more.

  

* * *
