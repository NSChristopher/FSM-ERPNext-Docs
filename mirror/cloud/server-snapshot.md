---
title: "Server Snapshot"
source_url: https://docs.frappe.io/cloud/server-snapshot
upstream_updated: "25-02-2026 12:19:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Server Snapshot

A **Server Snapshot** is a time-based copy of server's disks. It can be used to create a new server or recover your data in the future.

Snapshots are useful for **disaster recovery** and can be kept for as long as you want, even after the server is archived.

### Charges

Snapshots are charged at **6.5 INR / GB / Month** or **0.08 USD / GB / Month**.

### FC Server Snapshot Policy

Frappe Cloud automatically takes snapshots of all servers every **24 hours** and **48 hours**. These automated snapshots are free of cost and are automatically deleted after **48 hours**.

### View Snapshots

You can go to the **Server Overview** page and open the **Snapshots** tab.  
Here you can view all your snapshots along with their details (for AWS servers).

![](https://docs.frappe.io/files/view-snapshots.png)

### Create Snapshot

You can create a snapshot with just one click. There are two types of snapshots

-   **Consistent Snapshot**: In this mode, Docker and MariaDB on the server are stopped, and the disk is flushed before taking the snapshot. This ensures reliable data recovery but causes **2–5 minutes of downtime** for your deployed sites.
-   **Inconsistent Snapshot**: In this mode, the snapshot is taken without stopping services. This avoids downtime, but in rare cases, recovery may be more complex and require manual help.

  

To create a snapshot, click on the **New Snapshot** icon, choose the snapshot type, and submit.

![](https://docs.frappe.io/files/create-snapshot.png)

### View Snapshot Details

Each snapshot shows important information such as the size, exact timestamp, status, and the list of sites that can be recovered from it.

![](https://docs.frappe.io/files/view-snapshot-details-in-list.png)

![](https://docs.frappe.io/files/view-snapshot-details.png)

### Recover Sites

You can recover sites by clicking on the **Recover Sites** button and selecting the sites you want. This process does not directly restore data to your deployed site. Instead, you will receive database and file backups.

![](https://docs.frappe.io/files/recover-site-0.png)

![](https://docs.frappe.io/files/recover-site-1.png)

![](https://docs.frappe.io/files/recover-site-2.png)

![](https://docs.frappe.io/files/recover-site-3.png)

Once the recovery is completed, you will get an email notification, and the backups will be available to download for **24 hours**.

![](https://docs.frappe.io/files/recover-site-4.png)

You can visit the snapshot list and open the `Recover Sites` tab. You will be able to view the status and options to download the backups and view the encryption keys (in case that's available).

![](https://docs.frappe.io/files/recover-site-5.png)

![](https://docs.frappe.io/files/recover-site-6.png)

### Lock / Unlock Snapshot

To avoid accidental deletion, you can lock snapshots. Once locked, they cannot be deleted unless unlocked first.

However, only snapshots created manually by you can be locked. Automated 24h/48h snapshots from Frappe Cloud cannot be locked.

##### Steps For Locking Snapshot

![](https://docs.frappe.io/files/lock-snapshot-0.png)

![](https://docs.frappe.io/files/lock-snapshot-1.png)

##### Steps For Unlocking Snapshot

![](https://docs.frappe.io/files/unlock-snapshot-0.png)

![](https://docs.frappe.io/files/unlock-snapshot-1.png)

### Delete Snapshot

If you no longer need a snapshot, you can delete it. Any charges linked to the snapshot will stop once it is deleted.

![](https://docs.frappe.io/files/delete-snapshot-0.png)

![](https://docs.frappe.io/files/delete-snapshot-1.png)

### Accessing Snapshots of Archived Servers

Even if a server is archived, you can still access its snapshots from the **sidebar**, where all server snapshots are listed, including those from archived servers.

![](https://docs.frappe.io/private/files/snapshot-list.png)

### Supported Cloud Providers

Currently, Frappe Cloud supports snapshots on **AWS**, **OCI** and **Hetzner**, but this feature is available only for **AWS-hosted servers**.

For **OCI-hosted servers**, disk snapshots are also created every **24/48 hours**, but they are **not visible in the dashboard** at the moment.
