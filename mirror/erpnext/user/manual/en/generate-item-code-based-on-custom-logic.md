---
title: "Generate Item Code Based On Custom Logic"
source_url: https://docs.frappe.io/erpnext/user/manual/en/generate-item-code-based-on-custom-logic
upstream_updated: "02-03-2026 19:06:28"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Generate Item Code Based On Custom Logic

Add this Custom Script in the script of **Item**, so that the new Item Code is  
generated just before the Item gets saved.

  

```
 cur_frm.cscript.customvalidate = function (doc) {
  // clear itemcode (name is from itemcode)
  doc.itemcode = "";

  // first 2 characters based on itemgroup
  switch (doc.itemgroup) {
    case "Test A":
      doc.itemcode = "TA";
      break;
    case "Test B":
      doc.itemcode = "TB";
      break;
    default:
      doc.itemcode = "XX";
  }

  // add next 2 characters based on brand
  switch (doc.brand) {
    case "Brand A":
      doc.itemcode += "BA";
      break;
    case "Brand B":
      doc.itemcode += "BB";
      break;
    default:
      doc.itemcode += "BX";
  }
};
```
