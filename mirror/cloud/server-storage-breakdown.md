---
title: "Server Storage Breakdown"
source_url: https://docs.frappe.io/cloud/server-storage-breakdown
upstream_updated: "02-03-2026 14:31:59"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Server Storage Breakdown

# Database Server

If you want to know, what is consuming storage on your dedicated database server, you can use this option.

1.  Click on the `pie` icon in your server overview page.

![](https://docs.frappe.io/files/Screenshot%202026-03-02%20at%2014.30.58.png)

2.  You will get storage breakdown in this way.

![](https://docs.frappe.io/files/Screenshot%20from%202025-05-28%2018-56-28.png)

3.  You can click on the `Site Name` to view tablewise usage in the database.

  

#### Some Terminology -

-   **Operating System :** On each dedicated database server, we have Ubuntu operating system installed. The operating system, it's generated logs and installed software take some amount of storage.
-   **Binary Log :** Binlogs are important part of database. It helps in database replication. But if you are not using binary log, this can help in point in time recovery and disaster recovery.
-   **MariaDB Core :** It includes various kind of files that database required for it's internal operation like ibdata1, ibtmp1, aria\_log etc.
-   **MariaDB Slow Log :** This log holds slow query of your servers. Frappe Cloud periodically send slow logs to centralized elasticsearch server and purge the file.
-   **MariaDB Slow Log :** Holds errors and deadlock of database. Like as slow log, this is also synced to elasticsearch and purged from server daily.
-   **MariaDB Owned System Files :** Except this, MariaDB generate some other files as per requirement of operation (like ddl\_recover\_log, coredump etc.)

# Application Server

Similar to the database server, if you want to know, what is consuming storage on your dedicated application server, you can use this option.

The way to display the storage breakdown is same as for the database server

1.  Click on the `pie` icon on your application server's storage section
2.  You will get the storage breakdown as such  
    ![](https://docs.frappe.io/files/Screenshot%202025-08-01%20at%2012.08.10%E2%80%AFPM.png)
3.  This can be further expanded to represent the storage of each bench in a hierarchical tree structure.  
    ![](https://docs.frappe.io/files/Screenshot%202025-08-01%20at%2012.10.14%E2%80%AFPM.png)

#### Additional Usage disclaimer -

As detailed in the Storage Breakdown dialog, the storage calculation is split into two parts:

**Bench Size :** This includes core files and folders necessary for your application including logs, private and public files etc.

**Additional Disk Usage :** This includes disk space consumed by directories that are excluded from the main bench size calculation, such as:

-   env – Python virtual environment files
-   node\_modules – Node.js dependencies
-   assets – Static files such as images, stylesheets, or compiled assets

These directories are excluded from the main calculation primarily for performance reasons. Folders like `node_modules` and `assets` can contain tens of thousands of files, and scanning them in real-time significantly slows down storage analysis.

Additionally, for Docker, only active containers and images are considered in the storage breakdown. Docker metadata and unused layers are ignored to focus on what's actively used.
