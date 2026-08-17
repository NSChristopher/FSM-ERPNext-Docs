---
title: "Track Items Using Barcode"
source_url: https://docs.frappe.io/erpnext/user/manual/en/track-items-using-barcode
upstream_updated: "02-03-2026 17:59:29"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Track Items Using Barcode

A barcode is a value decoded into vertical spaced lines. Barcode scanners are the input medium, like Keyboard. When it scans a barcode, the data appears in the computer screens at the point of a cursor.

## Item Master

To set the barcode of a particular item, you will have to open the Item record. You can also enter barcode while creating a new item.

![Material Transfer](https://docs.frappe.io/files/barcode-item-master.png)

Once barcode field is updated in item master, items can be fetched using barcode. This feature will be available in Delivery Note, Sales Invoice, Purchase Receipt, and Stock Reconciliation transactions only.

![Material Transfer](https://docs.frappe.io/files/barcode-item-selection.gif)

### UOM specific barcode

You can also specify different barcode for different type of packaging of same item like unit and box. Select the UOM in Item Barcode table to get it auto selected when scanning items.

![uom specific barcode](https://docs.frappe.io/files/uom-specific-barcode.png)

## Using mobile phone / smartphone to scan and add items

  

Log in to your ERPNext account, go to the Item master and you'll be able to scan barcodes and add Items right from your smartphone!

![Item Barcode using Smartphone](https://docs.frappe.io/files/item-barcode-phone.gif)
