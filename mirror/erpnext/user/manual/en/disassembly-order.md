---
title: "Disassembly Order"
source_url: https://docs.frappe.io/erpnext/user/manual/en/disassembly-order
upstream_updated: "26-02-2026 21:23:23"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Disassembly Order

The 'Disassembly Order' in ERPNext is used to dismantle finished goods and return the components that are in good condition back to the store. The system allows users to change the valuation rate of the components when adding them back to the store.

To create the "Disassembly Order", open the work order which are in **Completed** state or **Closed** state. Click on create button and after that "Disassembly Order"

![work-order-disassembly-order](https://docs.frappe.io/files/work-order-disassembly-orderfe73b5.png)

Once user clicked on the "Disassembly Order" button, the system will open the stock entry with type as "Disassemble"

  

![stock-entry-disassembly-order](https://docs.frappe.io/files/stock-entry-disassembly-order.png)

-   Users can manually removed items which are not in a good condition
-   The system, by default, fetches the basic rate based on past transactions. If users want, they can edit the basic rate for the raw materials.
