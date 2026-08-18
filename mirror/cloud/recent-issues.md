---
title: "Recent Issues"
source_url: https://docs.frappe.io/cloud/recent-issues
upstream_updated: "27-07-2026 15:17:09"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Recent Issues

## India Compliance API / E-invoicing failures (2026-07-26)

One 2026-07-26 we had updated our servers in Hetzner (Falkenstein and Nuremberg) as a part of scheduled maintenance. As a side effect of the same MTU on the network had reduced. This led to outbound requests from benches on the servers failing -- notably, requests to India Compliance API.

Our engineers fixed investigated and identified the issue on **2026-07-27** and fixed the issue by **2:35 PM IST** on all affected servers.

## Deploy failures across multiple regions (2026-07-20)

On 2026-07-20, 14:00 IST we noticed, docker pushes failing for our global docker registry which directly or indirectly caters to all our regions.

After investigation we noticed the issue was with DigitalOcean our upstream storage provider for our Docker registry.

  

DigitalOcean object storage enforces a silent cap on the allowed bucket size — which is not documented anywhere.

  

We performed the following actions for restoring normalcy

1.  Immediately paused all deploys to ensure that no more failed deploys go through.
2.  Raised a formal complaint with the upstream provider.
3.  Started manual garbage collection to freaup space if possible

While the GC failed due to the volume of data and synchronous nature of docker registry's garbage collection, we managed to get the upstream providers to increase our storage quota.

  

Normalcy was restored on 2026-07-21 02:30 IST.

  

## TLS incident across multiple regions (2026-07-13)

There was a TLS issue affecting multiple proxies from **11:56 AM IST** to **1:43 PM IST**

The issue had transpired due to an update that went to our older proxies. These proxies were still in use for certain regions including Singapore, Frankfurt, Virginia, Jakarta, London and Johannesburg. Custom domains pointing to older proxies' IP were also affected.

Additionally, TLS certificates for some subdomains (l.frappe.cloud, z.frappe.cloud, v.frappe.cloud, s.frappe.cloud) were not renewed. This was happening due to another bug.

New TLS certificates were obtained for the affected domains and the faulty update was rolled back on all proxies to resolve the issue. All wildcard domains have also been pointed to the newer proxies so that such incident may not recur.  
We are taking measures to

-   Prevent updates on older proxies
-   Ensure TLS renewal success for all wildcard domains
-   Ensure new proxy IP used everywhere

## Downtime in Nuremberg (2026-06-05)

Recently our proxy in the Nuremberg faced a networking drop, due to an upstream issue therefore, some sites might have been down intermittently

## Downtime in Virginia (2026-06-05)

Our proxy in Virginia lost communication with our central monitoring system, which might have caused intermittent false incidents on some of the Virginia servers however, systems are stable now.

## Downtime in Mumbai (2026-05-21)

One of our servers in the Mumbai region went down completely on 2025-05-21 from 01:02 PM IST to 02:58 PM IST . The issue was with respect to nginx unable to server any requests completely as all requests to the server would get stuck at nginx without any logging. After investigation from our engineers the culprit was observed to be an nginx plugin we use to tracking metrics of nginx. After disabling the same, we were able to restart the server and bring it back up.

## Downtime on f1-falkenstein2 (2026-05-15)

On 15 May 2026, services on `f1-falkenstein2` went down because the server disk became full. This caused Redis and Docker services to stop working properly. The main reason was unused Docker images taking up too much space over time.

To fix the issue, we attached extra storage and moved bench data to it. We also removed unused Docker images and restarted the services. Sites started coming back online gradually after recovery.

All the sites on the server has faced around ~2hr of downtime.

To avoid this in the future, we are improving [Docker image cleanup](https://github.com/frappe/agent/pull/508), and will move storage to Hetzner Volumes for easier maintenance

## Downtime in Nuremberg and Ashburn (2026-05-13)

The sites are back up and running.

RCA - Proxies going down  
(All timings are in IST)

  

2:25am - A new root subdomain \*.nvi.frappe.cloud is created by an engineer.  
2:25am - A race condition sends empty TLS certificates to all proxies.  
6:00am - A Setup TLS certificate job triggers the restart of nginx `systemctl restart nginx` in a few proxy servers.  
6:00am - The regions of Ashburn, Nuremberg and Navi Mumbai start going down as Nginx fails to start due to missing certificates for the root subdomain.  
9:38am - The root cause is identified.  
11:41am - A [code fix](https://github.com/frappe/press/pull/6420) is merged which ensures the old configuration keeps running if the new Nginx configuration is invalid.  
11:43am - The TLS certificates are propagated to the servers.  
12:14pm - TLS setup is triggered on all proxy servers and they are operational.

  

## Deploys Affected in KSA and Europe (2026-05-12)

On May 12th, we experienced a network disruption affecting incoming international traffic from Europe and the KSA region to our Bangalore server, which **hosts** our central Docker registry. This issue was caused by upstream providers experiencing extreme packet loss at the international-to-domestic handoff.

Once detected, we raised support tickets with **our** upstream providers and **provisioned** HTTP proxies to relay the traffic. This proxy setup allowed us to resume deployments with minimal further disruption.

## Data Rollback Temporary Issue On m4-virginia (2026-04-21)

At 10:17 AM IST, the m4-virginia server experienced high resource usage, which triggered an automated recovery process and caused the server to reboot.

During the reboot, a leftover backup disk (intended for restoration purposes) was mistakenly mounted with higher priority than the live disk. As a result, the system temporarily started serving outdated data.

At 12:13 PM IST, our engineers identified and resolved the issue. Since then, the system has been serving the correct and up-to-date data.

If you are still experiencing any issues or have concerns, please reach out to support at support.frappe.io.

## Downtime in Frankfurt (2026-04-20)

###### One of our Frankfurt servers had unexpected downtime due to a network issue. We are investigating the same. We shall keep you posted once fixed.

**Edit**:- The issue has been fixed, will share the RCA soon, and we will continue to investigate the source of the issue.

## Outbound IP Change for AWS regions (2026-04-01)

We are in the process of updating the outbound IP addresses for most of our AWS-hosted servers.

**Regions affected:**

-   Singapore
-   Frankfurt
-   Cape Town
-   Virginia
-   London
-   Mumbai
-   Sydney
-   Zurich
-   Jakarta

**Status & Timeline:**

-   Zurich, Jakarta, and Sydney: **Completed**
-   All remaining regions (except Mumbai): ~Scheduled for completion by 2026-04-01, 11:59 PM IST~ **Completed**
-   Mumbai: ~**Will begin on 2026-04-02, 10:00 AM IST** and may take **1–2 days** to fully complete~ **Completed**

**Unaffected Servers:**

-   Self-hosted servers
-   Servers with static IP addresses

If you have any IP-based allowlists or firewall rules, please ensure they are updated accordingly.

Example: IF you have whitelisted your server's IP on a bank portal such as ICICI bank, you will have to reach out to the same to get this new IP added to the whitelist

The new outbound IP (post updation) can be checked in the Site Overview page. Please Refer: [https://docs.frappe.io/cloud/faq/site#inbound-and-outbound-ips](https://docs.frappe.io/cloud/faq/site#inbound-and-outbound-ips)

## Disruptions in AWS Bahrain (2026-03-24)

Multiple servers in Bahrain region (me-south-1a) are down due to an issue in AWS datacenter.

You can track the health status here : [https://health.aws.amazon.com/health/status](https://health.aws.amazon.com/health/status)

For existing customers on Bahrain region, as per recent [advisory from AWS](https://health.aws.amazon.com/health/status) , if you have not already moved your site, we suggest you to move your sites to other regions on Frappe Cloud (Eg: **Mumbai, Frankfurt, Virginia**) to continue services without disruption. Since the servers are already down, [direct site migration](https://docs.frappe.io/cloud/site/site-migrations/move-site-to-different-region) will not work. You will have to move using your **last backup available**. This implies some data loss.

### Steps to move

1.  [Create a new site](https://docs.frappe.io/cloud/sites/creating-a-new-site) in one of the regions that are active
2.  Go to backups dashboard of your existing site in Bahrain region and follow [these instructions](https://docs.frappe.io/cloud/sites/migrate-an-existing-site#restore-backup-on-another-site) to restore backup onto the newly created site.
3.  Following these steps will create a copy of your site using your last backup.
4.  If you have [custom domains](https://frappecloud.com/docs/sites/custom-domains), you can now point the same to the new site you created.

Please reach out to us at [support.frappe.io/helpdesk](https://cloud.frappe.io/support.frappe.io/helpdesk) if you have any questions or concerns regarding the same.

## Disruptions in AWS Middle East (2026-03-04)

Our UAE and Bahrain region is backed by AWS, and as per recent [advisory from AWS](https://health.aws.amazon.com/health/status) , we **strongly** suggest you to move your sites to other regions on Frappe Cloud (Eg: **Mumbai, Frankfurt, Virginia**) to continue services without disruption.

You can check [this doc](https://docs.frappe.io/cloud/sites/move-site-across-region) on how you can move your site to other regions at the click of a button.

NOTE: There will be DOWNTIME when moving your site across region, but a planned downtime is much better than unplanned downtime and data loss.

Please reach out to us at [support.frappe.io/helpdesk](https://cloud.frappe.io/support.frappe.io/helpdesk) if you have any questions or concerns regarding the same.

## Downtime in Mumbai region (2026-02-09)

There was a downtime from **12:14 PM IST** to **12:22 PM IST** in the Mumbai region. This had happened due to a DoS attack on the same. We have identified the source and blocked their IP.

  

The attack vector was through one of our old used Github pages that we used for serving documentation. It seems an attacker abused a type of vulnerability here to DoS our proxy server. We have dropped these unused domains to prevent this from happening again.

## Downtime in Singapore region (2026-02-09)

We recently faced another downtime in Singapore region as nginx was consuming too much memory on the proxy server. We will be upgrading this server soon to prevent this from happening again. For the time being, we have applied some limits for the process so itself doesn't halt the server.

## Delay in agent jobs and site updates (2026-02-03 - 2026-02-04)

Users may have observed agent jobs remaining in pending state, or site update not happening after new bench is deployed (after bench update). We have found the source of the issue to be a memory contention on our app server. We have found one of the possible sources of the problem and disabled the same. We continue to investigate further sources and solutions of the issue.

## MariaDB down on few database servers (2026-02-02)

There was a recent outage affecting multiple database servers. This happened due to a change meant for all database servers, but failed for some of them.

The change was intended to use the data volume present in the servers for [tmpdir](https://mariadb.com/docs/server/server-management/variables-and-modes/server-system-variables#tmpdir) . This is required as some database servers don't have enough memory and need to use the disk for storing temporary tables during large query computations.

The failure happened as the [tmp](https://mariadb.com/docs/server/server-management/variables-and-modes/server-system-variables#tmpdir) directory itself for MariaDB was not present in some servers. This seems to have happened as a side effect of a previous change.

We have reverted the change on affected servers to resolve the issue. We will be rolling out a fix to make the change persist on the affected servers.

## Downtime in Singapore region (2026-02-02)

There was a 15-minute downtime affecting all sites in Singapore region. This had happened due to a memory outage in the reverse proxy server of the same region. We have narrowed the source of the issue down to an auxiliary service on the server. We've memory limited the same to resolve the issue for future.

## India Compliance App `branch:version` Mismatch (2025-12-05)

We have had a recent issue on Frappe Cloud Marketplace with India Compliance Apps version and branch mismatch. If you triggered a Migrate / Site Update, your site must've been broken due to this issue.

Please fetch the latest branch of India Compliance (for version 15 of the app) on your bench and [update your site](https://docs.frappe.io/cloud/sites/how-to-update-an-app-site-on-a-private-bench).

## Deploys slow/not happening due to Digital Ocean (2025-10-30)

There appears to be some packet loss between servers from other regions and DigitalOceans servers where our Docker Registry resides. Due to this, builds have started to fail at the last step. We are checking with the provider for an RCA and resolution

## KSA region inaccessible from other regions (2025-10-30)

It seems OCI has faced an incident around **1:02 PM IST** and as a result the servers in the region are inaccessible. For more information regarding the OCI incident you can refer [here](https://ocistatus.oraclecloud.com/#/incidents/ocid1.oraclecloudincident.oc1.phx.amaaaaaanfxwrmaa2pox7nkmzwxleeibdwzsw2u2cj33qajyiap44re4jf6q).

#### Update (October 30, 2025) - 1:55 PM IST

All the sites down on Frappe Cloud under KSA Regions are back up and functional. The down time happened due to Oracle Cloud Infrastructure's KSA Region being down for 35-40 Minutes.

[Incident acknowledgement report](https://ocistatus.oraclecloud.com/#/incidents/ocid1.oraclecloudincident.oc1.phx.amaaaaaanfxwrmaa2pox7nkmzwxleeibdwzsw2u2cj33qajyiap44re4jf6q) from OCI.

## Sites down with redis Auth error (2025-10-29)

Due to a recent change on Frappe Cloud, few benches (89) got affected with a faulty redis config. We have pushed a fix for the same and it should take effect in a few minutes.

Recurrence: The issue reoccured an hour later due to a worker which didn't receive the fix and affected approximately 30 more benches. We have retroactively fixed those as well. We are working on taking better measures for such deployments.

## Bench deploy failures on custom apps (2025-10-28)

If you have imported frappe or other apps within `__init__.py` , deploys will have started to fail with message 'No module named frappe' since 25th October due to recent [pip update](https://pip.pypa.io/en/stable/news/#deprecations-and-removals). Please update your bench to use older version of pip (25.2) to resolve the issue.

## New Bench Failures (2025-10-20)

There was an incident on Frappe Cloud due to which all New Bench jobs started to fail from **2:00 PM IST** to **3:00PM IST**. The incident seemingly resolved itself afterwards. We have taken some measures to prevent the possible cause of the same. We continue to monitor for further occurence.  
Affected users can redeploy the bench to resolve the issue.

> edit: This seems to have been a [side-effect](https://status.digitalocean.com/incidents/sxlrj088l11b) of aforementioned AWS incident also

## AWS N.Virginia Incident (2025-10-20)

There appears to be an [incident](https://health.aws.amazon.com/health/status) started **Oct 20 12:11 AM PDT** in the Virginia region. This will affect:

-   Site updates that use physical backups, which are mostly large sites.
-   Server actions such as Reboot, Creation of server, Drop server, Snapshots, etc.

> edit: Physical backups have been disabled everywhere on Frappe Cloud for the time being so updates for already deployed benches can proceed

Please refrain from performing these operations till the issue is resolved at AWS side.

## Frankfurt sites down issue (2025-07-22)

Sites were reported being down and agent jobs failing on the sites with a 404 error.  
The issue had happened due to an nginx config limit being reached. We've updated the same on all proxies to prevent same issues going forward.

## .frappe.cloud redirect issue (2025-07-15)

Around midnight 2025-07-15 IST time, frappe.cloud sites started to not resolve correctly and redirect to the Frappe Cloud dashboard instead. We identified the source as a bug in a DNS cleanup job.

Only **x.frappe.cloud** sites that are not in Mumbai region were affected. **erpnext.com** and **frappe.cloud** subdomain sites (**abc.m.frappe.cloud**, **abc.k.frappe.cloud**,etc.) were unaffected. Sites with custom domains that had A records were also unaffected.

The same has been resolved as of 1:34 am IST time. Missing DNS records were re-added for the sites affected to resolve the issue.

* * *

# New deployment issue in KSA region (2025-04-30)

KSA region has some issues with the networking in orcale cloud and impacting new deployments. [Refernece](https://ocistatus.oraclecloud.com/#/incidents/ocid1.oraclecloudincident.oc1.phx.amaaaaaavwew44aag4f4xhfscggbw74x3sff6jadk73e2rwjbpwykpyipa)

Our technical team is actively investigating the same and will keep you posted once fixed.

* * *

# Frappe Cloud dashboard slow (2025-03-12)

We have noticed Frappe Cloud dashboard being slow due to some resource constraints from our end. We're performing an upgrade of the same. The analytics page may not load for some time

## Slow deploys (2025-03-10)

There is an i/o block on our build server causing the deploys slow/stuck, our technical team is investigating this further, The ongoing deploys will take some time to complete. Once the load get reduced on the build server, it will be completed automatically.

## Builds with Marley (healthcare) app broken (2025-02-19)

Due to new release of [flit](https://flit.pypa.io/en/stable/history.html#version-3-11), deploys of benches with Marley app is now broken. Please wait until Marley team fixes the issue.  
Edit:- The issue has been [resolved](https://github.com/earthians/marley/commit/924d48185a216ba559b96d10e199c1bb0621414c) by the Marley team, redeploying the update on your bench group should work.

## Issue with pending jobs on 1 server in Mumbai region (2025-10-02)

A server had an incident where all jobs were stuck. This had gone on for 4 days until it came to our attention on 2025-10-02. We're unsure of the cause of this. We have fixed it and jobs have continued for time being. Further investigation is pending.

## Issue with pending jobs on some servers (2024-12-15)

A few of our shared servers are having issues processing Jobs. If you're affected, you'll see the jobs going to **Pending**.

This is because of some traffic restrictions imposed by our cloud provider due to an abuse report. We're working with them to resolve this as soon as possible.

Edit: Due to the lack of response from the provider. We fixed the issue ourselves by performing an emergency replacement of the virtual machines. This caused **downtime** between 10:00 AM GMT to 10:41 AM GMT across the 5 servers that were affected.

## Downtime in Frankfurt region (2024-12-09)

There was an issue affecting one of our proxy servers, in the Frankfurt region due to which sites in the region were affected from 16:20 GMT to 16:44 GMT during which we resolved the same. We are taking preventive measures.

## Sites unreachable in KSA region (2024-11-24)

Between 10:48 GMT and 11:08 GMT. One of our proxy servers in the KSA region was down which resulted in downtime for all the sites in the region. We suspect the cause to be a memory spike of an internal service and applied controls to mitigate the same. We continue to monitor the server

## Sites down with internal server error (2024-10-29)

Between Tue, 29 Oct 2024 10:29:06 GMT and Tue, 29 Oct 2024 10:58:00 GMT, a subset of EC2 instances were unavailable in the **Mumbai** Region. The issue has been resolved by AWS and the service is operating normally.

## Reduced uptime for sites hosted in Virginia Region (2024-10-18)

We've observed a network connectivity issue due to which uptime monitoring of sites in the Virginia region is affected and may show as **red** in the dashboard even when the site is still up. We expect the network providers to fix this soon.  
edit: The issue has been resolved
