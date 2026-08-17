---
title: "Tax Exemption 80G Certificate"
source_url: https://docs.frappe.io/erpnext/user/manual/en/tax_exemption_80g_certificate
upstream_updated: "26-02-2026 21:23:21"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Tax Exemption 80G Certificate

> Introduced in version 13

An 80G certification is the one that is granted to certain **Indian** not-for-profit organizations by the Income Tax Department, granting their donors and members the ability to avail of a tax deduction on donations or memberships, respectively.

## 1\. Prerequisites

Before creating a Tax Exemption 80G Certificate, you need to create a [Donation](https://docs.frappe.io/docs/v13/user/manual/en/non_profit/donation) or a [Membership](https://docs.frappe.io/docs/v13/user/manual/en/non_profit/membership) first.

Also, for generating the 80G Certificates, you will need to set up some details in the Company master under the "Non-Profit Settings" section.

-   **80G Number**: The 80G Number granted to your NGO by the Income Tax Department.
-   **80G With Effect From**: The Date from which your NGO is 80G certified.
-   **PAN Number**: Company/NGO's PAN Number.

## 2.1 Tax Exemption 80G Certificate for Member

Member Certificates are generated at the end of the Financial Year with all the Memberships the Member subscribed to throughout the year. To create a new certificate for a Member, go to:

> Non Profit > Tax Exemption 80G Certificate > New

![Member 80G Certificate](https://docs.frappe.io/files/member-80g-certificate.png)

1.  Set the Naming Series and the Certificate Recipient as Member.
2.  Select the Member. The Member Name, Email, and PAN Number will be fetched automatically.
3.  Select the Date and the Fiscal Year.
4.  Select the Company. The 80G Number, PAN, and other details will be fetched automatically.
5.  Select the Company Address you want to print on the certificate. If not set, the default company address will be set on Save.
6.  Click on **Get Memberships** button. This will fetch all the Memberships for the selected Member in the specified Fiscal Year and set the total amount. It will fetch the Date, Amount, Invoice ID, Membership, and RazorPay Payment ID (if set) for each entry. Save.  
    ![Member Payments](https://docs.frappe.io/files/member-payments.png)

A Print Format **80G Certificate for Membership** is available:

![Member Certificate](https://docs.frappe.io/files/member-certificate.png)

## 2.2 Tax Exemption 80G Certificate for Donor

The Donor Certificate is generated for each Donation. To create a new certificate for a Donor, go to:

> Non Profit > Tax Exemption 80G Certificate > New

![Donor 80G Certificate](https://docs.frappe.io/files/donor-80g-certificate.png)

1.  Set the Naming Series and the Certificate Recipient as Donor.
2.  Select the Donor. The Donor Name, Email, and PAN Number will be fetched automatically.
3.  Select the Date.
4.  Select the Company. The 80G Number, PAN, and other details will be fetched automatically.
5.  Select the Company Address you want to print on the certificate. If not set, the default company address will be set on Save.
6.  Select the Donation for which you want to generate the certificate. The donation details like the Date, Amount, and RazorPay Payment ID (if set), Mode of Payment will be fetched for the selected donation. Save.  
    ![Donation Details](https://docs.frappe.io/files/donation-details.png)

A Print Format **80G Certificate for Donations** is available:

![Donor Certificate](https://docs.frappe.io/files/donor-certificate.png)
