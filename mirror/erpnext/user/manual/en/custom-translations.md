---
title: "Custom Translations in Print Formats"
source_url: https://docs.frappe.io/erpnext/user/manual/en/custom-translations
upstream_updated: "02-03-2026 23:35:29"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Custom Translations in Print Formats

**With Custom Translations, user can print the customer's and supplier's document in their local language.**

For example, if you have customers from Germany and France who want quotations in German and French, it's possible using Custom Translations.

## 1\. Set the Language

In the Customer master, select the default Language. Say, the default language for the Customer is **Spanish**.

![Set Customer Language](https://docs.frappe.io/files/set-customer-language.png)

Same way, you can also set default language in the Supplier master.

### 1.1 Print Preview in the Party's Language

In the Print Preview of a transaction, values will be translated into the party's language.

Customer Quotation print preview in customer's default language.

![Invoice in Customer Language](https://docs.frappe.io/files/invoice-in-customer-language.png)

Supplier Quotation print preview in supplier's default language.

### 1.2 Changing the print language in the preview

User has the option to select an alternate language on print view.

![Select Language in Invoice](https://docs.frappe.io/files/select-language-in-invoice.png)

## 2\. Custom Translation

Users can set their custom translations using Custom Translations form. For example, if a user wants to set a description of a product in the customer's language (Spanish). For that, create a new translation with language as Spanish, enter source data and translated information.

> Home > Customization > Other > Custom Translations > New

![Translation](https://docs.frappe.io/files/translation.png)

The translation is applied when the user selects the language as Spanish on supplier Quotation's print preview. Note that no translation is applied for the second item's description since it wasn't created in the Translation list.

![Translation in Transaction](https://docs.frappe.io/files/translation-in-transaction.png)

### 3\. Related Topics

1.  [Address Template](https://docs.frappe.io/erpnext/address-template)
2.  [Quotation](https://docs.frappe.io/erpnext/quotation)
3.  [Sales Order](https://docs.frappe.io/erpnext/sales-order)
