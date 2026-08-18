---
title: "502 Bad Gateway"
source_url: https://docs.frappe.io/cloud/site/common-issues/502-bad-gateway
upstream_updated: "12-08-2026 12:44:31"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# 502 Bad Gateway

A 502 error means that the [web workers](https://docs.frappe.io/cloud/servers/guidelines-for-choosing-a-server-plan#gunicorn-workers) of your site are dead, or the app server is dead. The proxy in front of your site got no connection.

**Note:** A slow site gives a 504 error, not a 502. See [Site Slow: 504 Gateway timeout](https://docs.frappe.io/cloud/site/common-issues/site-slow-504-gateway-timeout).

## Step 1: Wait one minute and reload the page

A deploy or a bench restart gives a short 502. If the site opens again, no other action is necessary.

## Step 2: Restart the bench

1.  Open your [bench group](https://docs.frappe.io/cloud/benches) dashboard.
2.  Go to the **Sites** tab.
3.  Click the **⋯** menu of the bench that hosts your site.
4.  Click **Restart Bench**.

\[inline image omitted from mirror\]

If your site is on a shared server, you have no bench group dashboard. Then open a ticket at [support.frappe.io](https://support.frappe.io).

You can also restart the bench over [SSH](https://docs.frappe.io/cloud/benches/ssh):

```
bench restart
```

## Step 3: Read the logs

If the 502 continues after a restart, read the logs of the bench.

1.  Go to the **Sites** tab of your bench group.
2.  Click the **⋯** menu of the bench.
3.  Click **View Logs**.
4.  Open `web.error.log`.

\[inline image omitted from mirror\]

5.  Go to the bottom of the file. The last lines show why the workers stopped.

\[inline image omitted from mirror\]

_In this example, Gunicorn stopped a worker with a_ `WORKER TIMEOUT` _error. Then it started a new worker._

The steps are the same as for a [500 Internal Server Error](https://docs.frappe.io/cloud/site/common-issues/500-internal-server-error). You can also read the logs over SSH. See [Debugging](https://docs.frappe.io/cloud/benches/debugging).

## Step 4: Examine the memory of the server

If the log shows no error, the system stopped the workers before they wrote one. This usually means that the server had no free memory.

1.  Open your server dashboard.
2.  Go to the **Analytics** tab.
3.  Examine the memory graph at the time of the error.

\[inline image omitted from mirror\]

4.  If the memory was full, [change the server plan](https://docs.frappe.io/cloud/servers/plan), or decrease the load on the server.

**Note:** You cannot change the number of workers from the dashboard. The server plan gives the number of workers. If you think that your bench needs more workers, open a ticket at [support.frappe.io](https://support.frappe.io). More workers also need more memory.
