---
title: "RazorPay Integration"
source_url: https://docs.frappe.io/erpnext/user/manual/en/razorpay-integration
upstream_updated: "26-02-2026 21:23:22"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# RazorPay Integration

A payment gateway is an e-commerce application service provider service that authorises credit card payments for e-businesses, online retailers, bricks and clicks, or traditional brick and mortar.

A payment gateway facilitates the transfer of information between a payment portal (such as a website, mobile phone or interactive voice response service) and the Front End Processor or acquiring bank.

To setup RazorPay,

`Explore > Integrations > RazorPay Settings`

![Razorpay Settings](https://docs.frappe.io/files/razorpay-api.gif)

#### Setup RazorPay

To enable RazorPay payment service, you need to configure parameters like API Key, API Secret

![Razorpay Settings](https://docs.frappe.io/files/razorpay_settings.png)

On enabling service, the system will create Payment Gateway record and Account head in the Chart of Account with account type as Bank.

![Razorpay COA](https://docs.frappe.io/files/razorpay_coa.png)

Also, it will create Payment Gateway Account entry. Payment Gateway Account is configuration hub from this you can set account head from existing COA, default Payment Request email body template.

![Payment Gateway Account](https://docs.frappe.io/files/payment_gateway_account_razorpay.png)

After enabling service and configuring Payment Gateway Account your system is able to accept online payments.

####Supporting transaction currencies

RazorPay will only work for the company having `INR (Indian Rupee)` as a Currency.
