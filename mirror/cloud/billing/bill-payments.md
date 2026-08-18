---
title: "Bill Payments"
source_url: https://docs.frappe.io/cloud/billing/bill-payments
upstream_updated: "29-04-2026 15:35:30"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Bill Payments

Your account balance accrues over the course of the calendar month based on  
usage of your sites. We apply GST taxes to Indian customers.

We automatically invoice and charge your account's default payment method on the  
last day of every month for the month's usage.

## Current Month's Usage

You can check your running usage amount in the Dashboard.

Go to Billing in the left pane. Here you will see the usage amount to date. This  
amount is updated every day based on the number of Active sites you have.

  

![](https://docs.frappe.io/files/Screenshot%202026-04-29%20at%201.40.41%E2%80%AFPM.png)

## Managing Cards

You can add cards from the Payment Methods section in the Billing Tab.

Click on **Add Card** and enter your billing address and card details.  
It will automatically become the default payment method.

  

![](https://docs.frappe.io/files/Screenshot%202026-04-28%20at%2011.27.19%E2%80%AFAM.png)  
_Payment Methods tab in Billing showing card details_

  

## UPI Autopay (_Supported only for Indian customers_)

UPI Autopay lets you set up a one-time mandate with your **UPI ID**. Your monthly Frappe Cloud subscription is then automatically debited — no manual payment, no missed invoices, no service interruptions.

### How to set it up?

1.  Go to Billing → Mode of payment and select **UPI Autopay**.
2.  You will be redirected to the mandate setup page. Click **"Setup Autopay"** and complete the authorization via your UPI app.
3.  A one-time ₹1 authorization charge is made to confirm mandate creation.
4.  Once authorized, your UPI account will be auto-debited every month end.

![](https://docs.frappe.io/files/Screenshot%202026-04-28%20at%207.10.41%E2%80%AFPM.png)  
_Setup mandate pop up form for UPI Autopay_

### How auto-debit works?

At the end of each billing cycle, you will receive an SMS notification about the upcoming debit. The actual debit happens 25 hours after the notification is sent.

### Things to know

-   UPI Autopay mandates have a maximum limit of **₹1,00,000**. This mode of payment is recommended only if your monthly invoice is below this limit.
-   If your invoice amount exceeds your mandate limit, the auto-debit will not be attempted. You will receive an email notification asking you to either set up a new mandate with a higher limit or pay manually.
-   You can cancel your mandate anytime from the Billing → UPI Autopay tab and switch to a different payment mode.
