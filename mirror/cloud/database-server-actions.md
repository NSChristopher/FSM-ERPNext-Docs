---
title: "Database Server Actions"
source_url: https://docs.frappe.io/cloud/database-server-actions
upstream_updated: "13-08-2026 10:28:49"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Database Server Actions

On **Server Actions** page, you will find several options for database configuration.

![image9765dc](https://docs.frappe.io/files/image9765dc.png)

## What is Binlog & Why It's required ?

The **Binary Log (Binlog)** in MariaDB is a crucial logging mechanism that records all changes to the database - such as SQL statements that modify data (INSERT, UPDATE, DELETE). It does **not** log SELECT queries.

Binlogs are primarily used for:

-   **Replication**: Keeping replicas in sync with the primary database.
-   **Point-in-time recovery**: Restoring a database to a specific moment in time.

For example, if a site is accidentally deleted or broken due to a faulty SQL query, in that case binlogs combined with the last available backup—allow you to **roll back to a specific time** and recover your data.

## View & Purge Binlogs

You can view binary log file sizes by date. If you're running low on storage, it's possible to **purge old binlogs** that are no longer needed.

![](https://docs.frappe.io/files/482719248-8eb4ca2d-b434-42c8-bf76-0e672384f3e5.png)

![](https://docs.frappe.io/files/img2.png)

![](https://docs.frappe.io/files/img3.png)

## Manage Binlog Retention

By default, when Frappe Cloud provisions a server, MariaDB has a **binlog retention period of 14 days**.

If your site handles a large volume of transactions and binlogs are filling up your storage quickly, you may choose to **reduce the retention period**.

Alternatively, for compliance or auditing purposes, you can **increase binlog retention** as needed.

You can manage these settings directly from the interface:

![](https://docs.frappe.io/files/482719805-9d2688b7-0a96-458e-aba1-186e417a56a9.png)

## Binlog Auto-Purging Based on Size Limit

Binlog files can occasionally grow rapidly, consuming a significant portion of your disk space. If Auto Add-on Storage is not enabled, this may lead to storage exhaustion and potential downtime for your server or application.

The Binlog Auto-Purging feature helps prevent such issues by allowing you to define a size limit for binlogs. When the total binlog size exceeds this limit, the system automatically purges older binlogs to bring usage back within the specified threshold.

![image3b13b3](https://docs.frappe.io/files/image3b13b3.png)

## Enable / Disable Binlog Indexer

The **Binlog Indexer** converts binary logs into a readable, searchable format, allowing end-users to explore and query binlogs using the **Binlog Browser**.

To **enable** the binlog indexer and browser, click on `Enable Binlog Indexer` under `Database Server Actions`, then confirm the action.

![image16cc0f](https://docs.frappe.io/files/image16cc0f.png)

To **disable** the binlog indexer and browser, click on `Disable Binlog Indexer` under `Database Server Actions`, then confirm the action.

![image7a1581](https://docs.frappe.io/files/image7a1581.png)

## **Default Configuration for Database Servers:**

-   When a server is created with Auto Add-on Storage enabled, binlogs can use up to 75% of the total disk capacity.
-   When a server is created with Auto Add-on Storage disabled, binlogs can use up to 20% of the total disk capacity.

These are the default limits, but you can adjust them based on your requirements.

**Note :** This feature is not available for database servers configured with replicas.

## Performance Schema

If you own some dedicated server, you can enable/disable the performance schema as per requirement.

![](https://docs.frappe.io/files/Screenshot%20from%202025-04-09%2023-05-01.png)

## Manage InnoDB Buffer Pool Size

If you want to change innodb buffer pool size, you can now do that from Frappe Cloud dashboard.

![](https://docs.frappe.io/files/Screenshot%20from%202025-04-09%2023-06-19.png)

## Manage Max Database Connections

When you create a database server, Frappe Cloud set a default max connections based on the total memory on the server. In case if you need more database connection, you can increase that from dashboard.

![](https://docs.frappe.io/files/Screenshot%20from%202025-04-09%2023-11-58.png)

## View Database Configurations

If you want to check all the configuration of your dedicated database server, you can use the `View Database Configuration` option.

![](https://docs.frappe.io/files/Screenshot%20from%202025-04-09%2023-13-16.png)

Currently, it's not allowed to change in variable. If you need some special configuration, please reach out to support.frappe.io

## Database Audit Trail

For compliance purposes, if you need a database audit trail, you can enable it from **Server Actions** in the Frappe Cloud dashboard.

  

Database audit trail has two capture modes:

1.  **Only write queries :** Captures queries that modify the database, such as changes to databases, tables, or rows. Read queries are not logged.
2.  **Read and write queries :** Captures all queries running on the database, including `SELECT` queries. Since read queries are also logged, the log size can be **at least 3X larger**.

![](https://docs.frappe.io/files/image701fa8.webp)

The cost is **2 INR per GB per month**, based on your log's storage usage. All audit logs are uploaded to S3, so they won't use additional disk space on the server.

  

We recommend keeping **at least 20 GB of free disk space** for audit logging. Audit logs are rotated and uploaded every **2 hours**, so you should have enough free space to store up to 2 hours of logs locally on the server.

### Accessing Database Audit Logs

From the server actions, you can view all the stored audit logs.

![](https://docs.frappe.io/files/imagea17bff.webp)

You can download the required ones from dashboard itself.

**Sample audit log format -**

```
20260812 06:31:18,ip-10-3-4-101,_99d3ba2c63387bd7,ip-10-3-3-101.eu-west-2.compute.internal,54,0,CONNECT,_99d3ba2c63387bd7,,0
20260812 06:31:18,ip-10-3-4-101,_99d3ba2c63387bd7,ip-10-3-3-101.eu-west-2.compute.internal,54,0,DISCONNECT,_99d3ba2c63387bd7,,0
20260812 06:32:01,ip-10-3-4-101,_99d3ba2c63387bd7,ip-10-3-3-101.eu-west-2.compute.internal,55,0,CONNECT,_99d3ba2c63387bd7,,0
20260812 06:32:01,ip-10-3-4-101,_99d3ba2c63387bd7,ip-10-3-3-101.eu-west-2.compute.internal,55,621,QUERY,_99d3ba2c63387bd7,'SELECT module,custom,is_tree FROM tabDocType WHERE name='Scheduled Job Type' ORDER BY creation DESC LIMIT 1',0
20260812 06:32:01,ip-10-3-4-101,_99d3ba2c63387bd7,ip-10-3-3-101.eu-west-2.compute.internal,55,622,QUERY,_99d3ba2c63387bd7,'SELECT * FROM tabScheduled Job Type WHERE stopped=0 ORDER BY creation ASC LIMIT 1000',0
20260812 06:32:01,ip-10-3-4-101,_99d3ba2c63387bd7,ip-10-3-3-101.eu-west-2.compute.internal,55,623,QUERY,_99d3ba2c63387bd7,'SELECT * FROM tabScheduled Job Type WHERE stopped=0 ORDER BY creation ASC LIMIT 1000 OFFSET 1000',0
```

Check the official MariaDB documentation to know more about audit log structure :

[https://mariadb.com/docs/server/reference/plugins/mariadb-audit-plugin/mariadb-audit-plugin-log-format#audit-log-format-with-syslog](https://mariadb.com/docs/server/reference/plugins/mariadb-audit-plugin/mariadb-audit-plugin-log-format#audit-log-format-with-syslog)
