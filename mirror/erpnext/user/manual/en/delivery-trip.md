---
title: "Delivery Trip"
source_url: https://docs.frappe.io/erpnext/user/manual/en/delivery-trip
upstream_updated: "27-02-2026 17:50:38"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Delivery Trip

**A Delivery Trip records Customer Deliveries in one vehicle.**

Multiple stops can also be added and Submitted Delivery Note can be tagged per Customer.

## 1\. How to create a Delivery Trip

A Delivery Trip can be created from a [Delivery Note](https://docs.frappe.io/erpnext/delivery-note) by clicking on 'Create > Delivery Trip'.

1.  Go to: **Stock > Stock Transactions > Delivery Trip > New**
2.  Select the Driver and Vehicle, create both if not present.
3.  Set the date, departure date and time.
4.  Add customers for delivery stops, the address will be fetched if already set. Customers can also be fetched by clicking on 'Get customers from > Delivery Note'. Additional Delivery Stops can be added by clicking on the Add Row button before submitting:

![Delivery](https://docs.frappe.io/files/delivery_stops.png)

1.  Save and submit.

![Delivery](https://docs.frappe.io/files/delivery_trip.png)

## 2\. Features

### 2.1 Calculate Estimated Arrival Times

If the Customer address and the Driver address are set, you can calculate the estimated arrival time for the deliveries. This data is fetched from Google Maps.

### 2.2 Optimize Route

Using Google Maps, the best route for the deliveries will be calculated.

### Related Topics

1.  [Packing Slip](https://docs.frappe.io/erpnext/packing-slip)
2.  [Shipping Rule](https://docs.frappe.io/erpnext/shipping-rule)
