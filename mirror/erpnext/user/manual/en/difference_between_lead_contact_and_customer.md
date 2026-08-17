---
title: "Difference between Lead, Contact, and Customer | ERPNext Documentation"
source_url: https://docs.frappe.io/erpnext/user/manual/en/difference_between_lead_contact_and_customer
upstream_updated: "23-07-2026 22:17:18"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Difference between Lead, Contact, and Customer | ERPNext Documentation

A Lead, Contact, and Customer represent different parts of a relationship in ERPNext. Use the record that matches the party's current role instead of treating the three DocTypes as interchangeable.

## Lead

A [Lead](https://docs.frappe.io/erpnext/lead) is an unqualified person or organization that may become a customer. Use a Lead while your sales team is still confirming the requirement, interest, timing, or fit.

A Lead can be converted into an Opportunity and, when appropriate, a Customer.

## Contact

A [Contact](https://docs.frappe.io/erpnext/contact) is a person with communication details such as email addresses and phone numbers. A Contact can be linked to a Customer, Supplier, Lead, or another party.

Creating a Contact does not create a customer account or accounting relationship. Use Contacts to store the people your team communicates with at an organization.

## Customer

A [Customer](https://docs.frappe.io/erpnext/customer) is the commercial party used in selling and accounting transactions. Quotations, Sales Orders, Delivery Notes, Sales Invoices, pricing, credit controls, Addresses, and Contacts can be linked to the Customer.

Create a Customer when the party is sufficiently qualified and your process needs a reusable customer account.

## Comparison

| Record | Represents | Use it when |
| --- | --- | --- |
| Lead | An unqualified prospect | Interest has been captured but the party still needs qualification |
| Contact | A person and their communication details | You need to record the individual you communicate with |
| Customer | The party you sell to | You need sales transactions, pricing, delivery, billing, or accounting history |

## Common workflow

1.  Capture an enquiry as a Lead.
2.  Qualify the requirement and create an [Opportunity](https://docs.frappe.io/erpnext/opportunity).
3.  Create or select the Customer when a customer account is required.
4.  Link the relevant Contacts and [Addresses](https://docs.frappe.io/erpnext/address) to the Customer.
5.  Continue with a [Quotation](https://docs.frappe.io/erpnext/quotation) or [Sales Order](https://docs.frappe.io/erpnext/sales-order).

You can also create an Opportunity directly for an existing Customer. A Contact may be linked to multiple organizations when the same person legitimately represents more than one party.

## Related topics

-   [Automate Lead Creation](https://docs.frappe.io/erpnext/automate_lead_capturing)
-   [Customer Group](https://docs.frappe.io/erpnext/customer-group)
-   [CRM Settings](https://docs.frappe.io/erpnext/crm-settings)
