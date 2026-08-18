---
title: "GitHub IP Allow List"
source_url: https://docs.frappe.io/cloud/custom-apps/common-issues/github-ip-allow-list
upstream_updated: "05-06-2026 11:41:55"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# GitHub IP Allow List

If your GitHub organisation has the **IP Allow List** feature enabled, Frappe Cloud's servers may be blocked from making authenticated API calls and cloning repositories during deployments, even when valid credentials are provided.

When Frappe Cloud attempts to list repositories accessible to the connected GitHub user, the following error is returned:

```
{
  "message": "Although you appear to have the correct authorization credentials, the organisation has an IP allow list enabled, and your IP address is not permitted to access this resource.",
  "documentation_url": "https://docs.github.com/rest/apps/installations#list-repositories-accessible-to-the-user-access-token",
  "status": "403"
}
```

  

This affects:

  

-   The **repository dropdown** in the Frappe Cloud dashboard (shows "No results found")
-   **Deployments**: build servers cannot clone private repositories
-   Any **background jobs** that pull releases from GitHub

## What Is GitHub's IP Allow List?

GitHub's IP Allow List is a security feature that restricts access to organisation resources (repositories, API, etc.) to only a defined set of trusted IP addresses.

  

### Availability

  

| Plan | IP Allow List Available |
| --- | --- |
| GitHub Free (personal) | ❌ No |
| GitHub Team | ❌ No |
| **GitHub Enterprise Cloud** | ✅ Yes |
| **GitHub Enterprise Server** | ✅ Yes |
| GitHub Advanced Security (standalone) | ❌ No |

> This is a **GitHub Enterprise Cloud / Enterprise Server exclusive feature**.
> 
> Source: [GitHub Docs — Managing allowed IP addresses for your organisation](https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)

  

### Where Is It Configured?

```
https://github.com/organizations/{your-org}/settings/security
```

  

Under: **Organisation Settings → Security → IP allow list**

  

* * *

  

## Root Cause

Frappe Cloud's production and build servers operate from fixed public IPs. If these IPs are not on the organisation's IP allow list, all GitHub API requests and git clone operations originating from Frappe Cloud will be rejected with a `403`.

  

* * *

  

## IPs to Whitelist

The following Frappe Cloud IPs must be added to the GitHub organisation's IP allow list:

  

### Frappe Cloud Production Server

_(Handles GitHub API calls — repo listing, branch fetching, webhook processing)_

  

  

| IP Address | Purpose |
| --- | --- |
| `139.59.79.221` | Frappe Cloud prod server |

### Build Servers

_(Clone repositories during app deployments)_

  

  

| IP Address | Purpose |
| --- | --- |
| `13.205.88.211` | Build server |
| `43.205.115.209` | Build server |
| `13.127.110.154` | Build server |
| `64.227.148.209` | Build server |
| `139.59.9.202` | Build server |
| `64.227.183.30` | Build server |

  

## Steps to Whitelist

1.  Go to `https://github.com/organizations/{your-org}/settings/security`
2.  Scroll to **IP allow list**
3.  Click **Add**
4.  Enter each IP above with a descriptive label
5.  Save
6.  Repeat for all 7 IPs

Once all IPs are added, return to the Frappe Cloud dashboard and retry adding the GitHub app. The repository dropdown should now populate correctly. If this still doesn't work, please reach out to Frappe Cloud support.

  

## Notes

-   These IPs are Frappe Cloud's **shared infrastructure IPs** and are the same for all customers on the platform
-   If your site is on a **dedicated/private Frappe Cloud cluster**, the IPs may differ — contact [Frappe Cloud support](https://frappecloud.com/support) to confirm the correct egress IPs.
