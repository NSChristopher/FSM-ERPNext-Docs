---
title: "Custom Domains"
source_url: https://docs.frappe.io/cloud/sites/custom-domains
upstream_updated: "14-08-2026 12:21:38"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Custom Domains

## Adding a custom domain

Frappe Cloud allows you to map custom domains that you own in a few simple steps.

1.  Create DNS records from the dashboard of your domain provider. Follow **one** of the steps below:  
    **Subdomain**: To point a subdomain to your site, add a **CNAME record** pointing your subdomain to your site. For example, if you want to use `www.example.com` for your site `example.frappe.cloud` then add CNAME record for `www.example.com` pointing to `example.frappe.cloud`. For the instructions to add such a record, please contact your domain provider.  
    **Naked domain**: To point a naked domain like `example.com` to your site, simply add an **A** **record** pointing to the IP address of your site. You can get this IP from **Inbound IP** of your dashboard  
    ![](https://docs.frappe.io/files/3MWe7ri.png)  
    One caveat to adding naked domains is that you will have to update the DNS record if the IP of your site changes.

> **NOTE:** Only add 1 record. If you're adding multple **A** records for the same domain, you're doing it wrong.  
> There are some DNS providers such as Cloudflare that allow adding CNAME records for naked domains. If so, you won't need an A record. Simply follow the same steps as in the Subdomain section above, replacing `www.example.com` with `example.com`.

2.  After adding the DNS record, open your site dashboard.
3.  From the site overview page, go to **Domains** card.
4.  Click on Add Domain.
5.  Enter the custom domain.
6.  Click on Verify DNS.
7.  If the verification succeeds, you have correctly added the CNAME record, and you will see Add Domain button. Click on Add Domain.  
    ![Custom Domains](https://cloud.frappe.io/assets/press/images/docs/site-domain.png)

> Note: We obtain an SSL certificate for the custom domain. So you will be able to use HTTPS with your domain.

> You are able to add both naked and subdomains to your site

![](https://docs.frappe.io/files/image43789c.png)

## Redirecting domains

In some cases, you may not want the user to see certain domains that direct you to your site. You may even want to hide your fancy **.frappe.cloud** domain that we provide. This is also possible.

1.  You need to set one domain as primary domain. This is the domain where the "redirected domains" will redirect to

![Set Primary Image](https://docs.frappe.io/files/domain-redirect.png)

1.  Next, you need to enable redirection for domains that you wish to hide

![Enable Redirect Image](https://docs.frappe.io/files/domain-redirect-2.png)

That's it. Your users will be able to access your site from the redirected domains, but they will be redirected to the **primary domain** which will show up in their address bar

> This redirection will also prevent the redirected domains from appearing in search engine results. Eg: Google Search

## Search Engine Optimization (SEO)

### Prevent my site from showing up in search engine/google search results

Please follow the steps in [this documentation](https://developers.google.com/search/docs/crawling-indexing/block-indexing) and update your **Website Settings** accordingly\*\*.\*\*

### Site Name/Title in search result shows as "Frappe Cloud"

This seems to happen when google crawls your site when it was deactivated/suspended. You can [ask google to recrawl your site](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) in such cases. If you continue to face issues, you may try the instructions [here](https://developers.google.com/search/docs/appearance/site-names#how-to-add-structured-data)

## FAQ

#### DNS verification failed even after adding DNS record on Cloudflare

Currently, the custom domains you add on FC don't work when Cloudflare proxy is enabled. Please use the **DNS only** option for your DNS record.

![Cloudflare DNS only](https://docs.frappe.io/files/dns_only.png)

Note that proxying can be re-enabled once the domain is successfully added in Frappe Cloud. However, there is an existing issue with websocket communication due to which real-time updates may not happen in site correctly.

Note that if you have multiple A records and one of them is **proxied** [all records will be proxied](https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/#dns-only-records).

### Add custom https certificate / CSR File Request

We don’t support adding arbitrary SSL certificates. You may add a custom domain, and we can generate a 4096-bit certificate for the same if that is the requirement. We’ve done so similarly for other customers.

### I want to whitelist my site's IP on a 3rd party service

You can use the **outbound IP t**o whitelist on any 3rd party services.

![](https://docs.frappe.io/files/mVhiq4U.png)

### Certificate information for Bank Integration

We cannot provide this for [Frappe.Cloud](http://Frappe.Cloud) or [ERPNext.com](http://ERPNext.com) domains due to security concerns. You will need to add a custom domain for the same. After adding custom domain, you may request for private key of the certificate over our [support portal](https://support.frappe.io)

### I want to change url or name displayed in outgoing emails and pdfs

Only the **primary** domain is sent within outgoing emails and PDFs. In order to change this to your custom domain, you can set the domain as **primary**

![Set Primary Image](https://frappecloud.com/files/domain-redirect.png)

### Can I move a domain that I use elsewhere to Frappe Cloud?

Yes, if you have bought the domain from a domain provider (E.g: Namecheap) , you can use it on Frappe Cloud by updating the DNS record as shown at the top of this documentation

### How to get full chain of SSL certificate?

Some browsers (eg: Firefox) allow you to download full chain of certificates easily. Otherwise, you may use this site to download the same easily: [https://whatsmychaincert.com](https://whatsmychaincert.com)

![](https://docs.frappe.io/files/0W9iQ07.png)

* * *

Frappe Cloud allows you to map custom domains that you own in a few simple steps.

1.  Create DNS records from the dashboard of your domain provider. Follow one of the steps below:

**Subdomain**: To point a subdomain to your site, add a **CNAME record** pointing your subdomain to your site. For example, if you want to use `www.example.com` for your site `example.frappe.cloud` then add CNAME record for `www.example.com` pointing to `example.frappe.cloud`. For the instructions to add such a record, please contact your domain provider.

**Naked domain**: To point a naked domain like `example.com` to your site, simply add an **A** **record** pointing to the IP address of your site. You can get this IP from **Inbound IP** of your dashboard

![](https://docs.frappe.io/files/3MWe7ri.png)

One caveat to adding naked domains is that you will have to update the DNS record if the IP of your site changes.

> **NOTE:** Only add 1 record. If you're adding multple **A** records for the same domain, you're doing it wrong.

There are some DNS providers such as Cloudflare that allow adding CNAME records for naked domains. If so, you won't need an A record. Simply follow the same steps as in the Subdomain section above, replacing `www.example.com` with `example.com`.  
2\. After adding the DNS record, open your site dashboard.  
3\. From the site overview page, go to **Domains** card.  
4\. Click on Add Domain.  
5\. Enter the custom domain.  
6\. Click on Verify DNS.  
7\. If the verification succeeds, you have correctly added the CNAME record, and you will see Add Domain button. Click on Add Domain.

![](https://docs.frappe.io/files/image124f0c.png)

  

> Note: We obtain an SSL certificate for the custom domain. So you will be able to use HTTPS with your domain.

You are able to add both naked and subdomains to your site

![](https://docs.frappe.io/files/image853893.png)

  

  

## Redirecting domains

In some cases, you may not want the user to see certain domains that direct you to your site. You may even want to hide your fancy **.frappe.cloud** domain that we provide. This is also possible.

1.  You need to set one domain as primary domain. This is the domain where the "redirected domains" will redirect to

![Set Primary Image](https://docs.frappe.io/files/domain-redirect.png)

1.  Next, you need to enable redirection for domains that you wish to hide

![Enable Redirect Image](https://docs.frappe.io/files/domain-redirect-2.png)

That's it. Your users will be able to access your site from the redirected domains, but they will be redirected to the **primary domain** which will show up in their address bar

> This redirection will also prevent the redirected domains from appearing in search engine results. Eg: Google Search

## Web Application Firewall (WAF) Eg: Cloudflare

You may add WAF such as Cloudflare for your custom domain for the features they provide such as IP whitelist/blacklist, spam filter, etc. You can ensure that all request to your site receive the same by enabling redirects to the domain that you've added on WAF.

> Please note that there is a known issue where websockets fail to work with cloudflare. We don't have a solution for this as of now. So real-time updates will fail as of now

## Search Engine Optimization (SEO)

### Prevent my site from showing up in search engine/google search results

Please follow the steps in [this documentation](https://developers.google.com/search/docs/crawling-indexing/block-indexing) and update your **Website Settings** accordingly\*\*.\*\*

### Site Name/Title in search result shows as "Frappe Cloud"

This seems to happen when google crawls your site when it was deactivated/suspended. You can [ask google to recrawl your site](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) in such cases. If you continue to face issues, you may try the instructions [here](https://developers.google.com/search/docs/appearance/site-names#how-to-add-structured-data)

## FAQ

#### DNS verification failed even after adding DNS record on Cloudflare

Currently, the custom domains you add on FC don't work when Cloudflare proxy is enabled. Please use the **DNS only** option for your DNS record.

![Cloudflare DNS only](https://docs.frappe.io/files/dns_only.png)

Note that if you have multiple A records and one of them is **proxied** [all records will be proxied](https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/#dns-only-records).

### Add custom https certificate / CSR File Request

We don’t support adding arbitrary SSL certificates. You may add a custom domain, and we can generate a 4096-bit certificate for the same if that is the requirement. We’ve done so similarly for other customers.

### I want to whitelist my site's IP on a 3rd party service

You can use the **outbound IP t**o whitelist on any 3rd party services.

![](https://docs.frappe.io/files/mVhiq4U.png)

### Certificate information for ICICI Bank Integration

We cannot provide this for [Frappe.Cloud](http://Frappe.Cloud) or [ERPNext.com](http://ERPNext.com) domains due to security concerns. You will need to add a custom domain for the same

### I want to change url or name displayed in outgoing emails and pdfs

Only the **primary** domain is sent within outgoing emails and PDFs. In order to change this to your custom domain, you can set the domain as **primary**

![Set Primary Image](https://frappecloud.com/files/domain-redirect.png)

### Can I move a domain that I use elsewhere to Frappe Cloud?

Yes, if you have bought the domain from a domain provider (E.g: Namecheap) , you can use it on Frappe Cloud by updating the DNS record as shown at the top of this documentation

### How to get full chain of SSL certificate?

Some browsers (eg: Firefox) allow you to download full chain of certificates easily. Otherwise, you may use this site to download the same easily: <[https://whatsmychaincert.com](https://whatsmychaincert.com)\>

![](https://docs.frappe.io/files/0W9iQ07.png)

### How to to verify DNS changes

You can use [this site](https://toolbox.googleapps.com/apps/dig/) to check if the DNS change you made have reflected on the internet.
