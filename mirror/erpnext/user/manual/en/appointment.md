---
title: "Appointment | ERPNext Documentation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/appointment
upstream_updated: "23-07-2026 22:47:53"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Appointment | ERPNext Documentation

**An appointment is a prearranged meeting between a Lead and an Employee of your Company.**

Appointment document type can be used to schedule and manage interaction with a [Lead](https://docs.frappe.io/erpnext/lead) or an [Opportunity](https://docs.frappe.io/erpnext/opportunity).

To access Appointment list, go to:

> Home > CRM > Sales Pipeline > Appointment

## Prerequisites

-   [Appointment Booking Settings](https://docs.frappe.io/erpnext/appointment-booking-settings)
-   [Holiday List](https://docs.frappe.io/hr/holiday-list)
-   [Employee](https://docs.frappe.io/hr/employee)
-   [Lead](https://docs.frappe.io/erpnext/lead)
-   [Email](https://docs.frappe.io/erpnext/email-account)

## How to create an Appointment

-   Go to Appointment list, select New
-   Select scheduled time of the appointment
-   Enter customer details
-   In linked documents, if you have already created a Lead for the Customer you can set it here. Otherwise the system will automatically create a new lead with the customer details from previous step.
-   Save.[New Appointment](https://docs.frappe.io/files/new-appointment.png)

### Creating appointments via website

Your Customers/Leads can create appointment using the webpage yoursitename.com/book\_appointment.

First they need to set a date, time.

![Appointment Webform](https://docs.frappe.io/files/appointment-webform.png)

Then, add more details:

![Appointment Details](https://docs.frappe.io/files/appointment-details.png)

It'll match the customer email with leads in the system and if one is found, it is linked with the document.  
If no lead is found, the appointment is marked as "Unverified" and an email is sent to the customer to confirm their email

## Features

### Autoassign

Appointments are automatically assigned to employees as per the Agents list in [Appointment Booking Settings](https://docs.frappe.io/erpnext/appointment-booking-settings). The agent with the least number of assignments for the day of the appointment and who is free in the scheduled time is assigned to the appointment.

### Email confirmation

If there is no matching lead in your system, an email will be sent to the email address in the appointment to confirm if the email address is valid. Upon confirmation, a new Lead will also be created in the system along with the Appointment.
