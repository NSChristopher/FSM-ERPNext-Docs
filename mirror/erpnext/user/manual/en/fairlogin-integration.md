---
title: "Setting up fairlogin"
source_url: https://docs.frappe.io/erpnext/user/manual/en/fairlogin-integration
upstream_updated: "26-02-2026 21:23:22"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Setting up fairlogin

fairlogin is an GDPR aware oAuth provider by fairkom.eu.

To setup fairlogin as an oAuth provider, go to:

> Home > Integrations > Social Login Key

## Setup keycloak

fairlogin is based on keycloak, so the parameters may be similar for any custom oAuth setting facilitating keycloak.

There you add a new client, select open-id as client protocol and enter the address of your ERPnext instance as the Root, Redirect and Base URL.

Adding your ERNext service as a client is being [offered as a service by fairkom](https://erp.fairkom.net/cloud/fairlogin-client).

![ERPnext keycloak Settings](https://docs.frappe.io/files/fairloginKeycloakERPnext.png)

## Setup fairlogin

To enable fairlogin as an ERPNext login option, you need to configure the following parameters:

-   Base URL https://id.fairkom.net/auth/realms/fairlogin/
-   Authorize URL https://id.fairkom.net/auth/realms/fairlogin/protocol/openid-connect/auth
-   Redirect URL /api/method/frappe.integrations.oauth2\_logins.login\_via\_fairlogin
-   Access Token URL https://id.fairkom.net/auth/realms/fairlogin/protocol/openid-connect/token
-   API Endpoint https://id.fairkom.net/auth/realms/fairlogin/protocol/openid-connect/userinfo

![ERPnext fairlogin Settings](https://docs.frappe.io/files/fairloginERPnextSettings.png)

On enabling service, the system will allow to login with any fairlogin account.

The default role of a new user is Blogger (currently hardcoded).
