---
title: "FAQ - Security"
source_url: https://docs.frappe.io/cloud/faq/architecture-and-security
upstream_updated: "27-07-2026 11:27:42"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# FAQ - Security

## Network Security & Access Control

### How is network security implemented?

We use a combination of security groups and firewalls to secure networks. VPCs isolate resources and restrict access. Only necessary ports are open to the public internet; all other ports are blocked by default.

### How do you manage server access?

We use SSH with certificates and/or public keys for server access. Passwords are not used. Users can only access benches with SSH certificates.

### Is there a WAF protecting applications?

No, but a server level firewall is available.

### Is there any firewall imposed for outgoing connections?

As of now, we do not have any restrictions for outgoing requests.

### Is there an IPS/IDS solution in place?

No, there is no Intrusion Prevention/Detection System currently implemented.

### What DDoS mitigation measures are in place?

We do not have specific DDoS mitigation measures in place currently.

### Port 3306 is open. Why?

We use [ProxySQL](https://proxysql.com/) for our [database users feature](https://docs.frappe.io/cloud/database-users-and-permission-manager). This requires the port to be open.

## Data Protection & Encryption

### What database is used? (RDS, Aurora, etc.)

We use MariaDB as the database for Frappe Cloud instances. We manage the database directly on the server on an AWS EC2 instance, not using services like RDS or Aurora.

### Is there High Availability for databases?

There is no High Availability setup for databases by default. We allow [dedicated server](https://docs.frappe.io/cloud/servers/servers-introduction) users to set up their own replication on request basis. You can raise a ticket for the same on our [support portal](https://support.frappe.io).

### Is there automated failover for databases?

No, there is no automated failover for databases on Frappe Cloud.

### What is the RPO and RTO for databases?

The RPO (Recovery Point Objective) for databases is up to 24 hours, as backups are taken daily. The RTO (Recovery Time Objective) can vary based on the size of the database and the time taken to restore from backups, typically ranging from a few hours to several hours. It is noted to be under 15 mintues as per our drills.

### Is point-in-time recovery available?

No, point-in-time recovery is not available for databases on Frappe Cloud.

### What encryption is used for communication?

We use HTTPS for all internet communication. SSH connections are also encrypted.

### Are databases encrypted at rest?

No, MariaDB databases are not encrypted at rest.

### Are backups encrypted?

Backups are unencrypted by default. Users can enable encryption by following our [backup encryption documentation](https://docs.frappe.io/framework/user/en/guides/basics/how-to-enable-backup-encryption). This uses fernet encryption (AES + HMAC).

### Is EBS volume/storage encrypted?

No, EBS volumes/storage attached to Frappe Cloud instances are not encrypted.

## Security Monitoring & Management

### What antimalware software is used?

We use ClamAV for antimalware protection on all servers. Virus definitions are updated manually as needed. Regular scans are not implemented to maintain performance.

### Is there an EDR solution monitoring servers?

No, there is no Endpoint Detection and Response solution currently implemented.

### Are containers scanned for vulnerabilities?

No, containers are not scanned for malware or vulnerabilities.

### Do you use multi-factor authentication?

Yes, we have 2FA enabled for all logins to third-party services.

## Patch Management & Updates

### How are OS security patches managed?

We use unattended upgrades to deploy patches automatically on a daily basis across all servers.

### How are Frappe Framework updates handled?

On shared benches, Frappe Framework updates are managed by the Frappe Cloud team, typically occurring weekly or with major updates. Private bench users can manage updates themselves. See [bench documentation](https://docs.frappe.io/cloud/benches) for details.

### How are MariaDB updates managed?

MariaDB security updates are handled via Ubuntu's unattended-upgrades system.

### How are Python and dependency updates managed?

Python and other dependencies are managed via benches. Users can manage them through `Bench` > `Dependencies`.

### Do you have a formal patch management policy?

Yes, we have a comprehensive patch management process that covers implementation and tracking of ongoing patch compliance for all systems within our IT scope.

**Process Triggers:**

-   Ongoing patch updating process
-   Vulnerability assessment results
-   Vulnerability alerts from vendors/OEM/security forums

**Server Patch Deployment Process:**

-   Critical security patches applied automatically via Ubuntu's unattended upgrades
-   Previous backups or application utilities used for system rollback when needed

### Where can I check for recent security patches?

You can check security advisories on relevant GitHub repositories:

-   Frappe Framework: [Security Board](https://github.com/frappe/frappe/security/advisories)
-   Frappe Cloud: [Security Board](https://github.com/frappe/press/security/advisories)

## Version Information

### How can I check current Frappe version?

You can check the current Frappe version by going to `Bench` > `Apps`.

### How can I check current MariaDB version?

You can check the current MariaDB version by going to `Server` > `Actions` > `View Database Configuration`.

### How can I check current Python version?

You can check the current Python version by going to `Bench` > `Dependencies`.

## Backup & Disaster Recovery

### What backup policy do you follow?

We take logical site backups as per our [backup policy](https://frappecloud.com/docs/sites/backups). Server-wide snapshots (including data volume) are taken daily, and are retained for 2 days.

### What disaster recovery measures are in place?

We maintain server-wide multi-AZ snapshots taken daily. In case of disaster, we plan to restore from these snapshots.

## Compliance & Certifications

### What certifications do you have?

Yes, we are certified under ISO 9001:2015, ISO 27001:2022, and SOC-2 Type-2 standards. Check [our compliance page](https://frappe.io/quality-and-information-security) for more information.

### Do you conduct penetration testing?

Yes, the Frappe Cloud platform undergone formal third-party penetration testing within the last 12-18 months.

### Do you conduct vulnerability scans?

Yes, we conduct regular internal and external vulnerability scans on our cloud infrastructure as part of our ongoing vulnerability management program.
