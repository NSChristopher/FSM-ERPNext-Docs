---
title: "Custom Action in Link Field"
source_url: https://docs.frappe.io/framework/user/en/guides/app-development/custom_action_link_field
upstream_updated: "17-02-2026 10:41:16"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Custom Action in Link Field

You can add a new custom link option to the standard link field by defining the function in the namespace `frappe.ui.form.ControlLink.link_options`.

In the `frappe.ui.form.ControlLink.link_options`, you have access to the link field object.

### 1\. Adding Custom Option

```
frappe.ui.form.ControlLink.link_options = function(link) {
 return [
 {
 html: ""
 + " "
 + __("Custom Link Option")
 + "",
 label: __("Custom Link Option"),
 value: "custom__link_option",
 action: () => {}
 }
 ];
}
```

Once a function is assigned to `frappe.ui.form.ControlLink.link_options`, the link field will have a new link option:

![182354398 c1fc9f55 4464 4683 bb74 982ec2546f71](https://user-images.githubusercontent.com/7310479/182354398-c1fc9f55-4464-4683-bb74-982ec2546f71.png)
