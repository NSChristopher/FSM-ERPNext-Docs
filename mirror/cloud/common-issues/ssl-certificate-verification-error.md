---
title: "SSL Certificate Verification Error"
source_url: https://docs.frappe.io/cloud/common-issues/ssl-certificate-verification-error
upstream_updated: "11-03-2026 17:03:25"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# SSL Certificate Verification Error

You may run into SSL: CERTIFICATE\_VERIFY\_FAILED in your custom app when attempting to connect to an endpoint outside of Frappe Cloud. This tends to happen due to 2 reasons mainly:

1.  **SSL is not configured correctly on the server you are trying to connect to.**  
    It may be not serving the full chain of certificates and hence python's SSL module [cannot validate](https://github.com/python/cpython/issues/62817) the TLS connection. Browsers can however connect to such servers as they implement [AIA](http://www.pkiglobe.org/auth_info_access.html). You can verify this by using online tools like [https://www.ssllabs.com/](https://www.ssllabs.com/). In this case, the server should be correctly configured to serve the full chain of certificates.
2.  **Python can't use OS certificate store.**  
    To resolve this, you can [install](https://frappecloud.com/docs/faq/custom_apps#how-to-add-python-dependencies-to-my-custom-app-eg-pandas) [pip-system-certs](https://pypi.org/project/pip-system-certs/) package in your custom app as suggested in this stackoverflow [thread](https://stackoverflow.com/questions/77442172/ssl-certificate-verify-failed-certificate-verify-failed-unable-to-get-local-is).
