---
title: "Using Html Templates In Javascript"
source_url: https://docs.frappe.io/framework/v15/user/en/guides/app-development/using-html-templates-in-javascript
upstream_updated: "10-05-2026 23:58:45"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Using Html Templates In Javascript

Often while building javascript interfaces, there is a need to render DOM as an HTML template. Frappe Framework uses John Resig's Microtemplate script to render HTML templates in the Desk application.

\> Note 1: In Frappe we use the Jinja-like `{% raw %}{%{% endraw %}` tags to embed code rather than the standard `&lt;%`

\> Note 2: Never use single quotes `'` inside the HTML template.

To render a template,

1.  Create a template `html` file in your app. e.g. `address_list.html`
2.  Add it to `build.json` for your app (you can include it in `frappe.min.js` or your own javascript file).
3.  To render it in your app, use `frappe.render(frappe.templates.address_list, {[context]})`

#### Example Template:

From `erpnext/public/js/templates/address_list.js`

```
<p>
    <button class="btn btn-sm btn-default btn-address">New Address</button>
</p>

{% for(var i=0, l=addrlist.length; i&lt;l; i++) { %}
    &lt;hr&gt;
    {%= _("Edit") %}
    {%= addr_list[i].address_type %}

    {% if(addr_list[i].is_primary_address) { %}
        {%= __("Primary") %}
    {% } %}

    {% if(addr_list[i].is_shipping_address) { %}
        {%= __("Shipping") %}
    {% } %}

    {%= addr_list[i].display %}
{% } %}

{% if(!addrlist.length) { %}
    {%= _("No address added yet.") %}
{% } %}
```
