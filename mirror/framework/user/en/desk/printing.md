---
title: "Printing"
source_url: https://docs.frappe.io/framework/user/en/desk/printing
upstream_updated: "17-02-2026 10:41:15"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Printing

Frappe framework has first class support for generating print formats for documents and also convert them into PDF. Frappe uses [Jinja](http://jinja.pocoo.org/docs/2.10/) as the templating language for print formats.

## Print View

The Print View can be accessed from the form view of any document. A Standard print format is generated for all DocTypes based on the form layout and mandatory fields in it. ![Print View](https://docs.frappe.io/files/print-view.png) _Print View_

## Print Format Builder

To Customize a print format you need to create a copy of the Standard Print format and customize it using the Print Format Builder. These print formats are user editable and are not bundled with the app as files.

![Print Format Builder](https://docs.frappe.io/files/print-format-custom.gif) _Print Format Builder_

#### Custom HTML

You can also add Custom HTML to your Print Format. Just drag and drop the Custom HTML button in left sidebar into your Print Format Editor.

In the Custom HTML field you can use any valid HTML with [Bootstrap 3 classes](https://getbootstrap.com/docs/3.3/css/) for styling. You can also use [Jinja Templating](http://jinja.pocoo.org/docs/2.10/) to add dynamic content to your HTML. See [list of methods](https://docs.frappe.io/framework/v14/user/en/api/jinja) available to use in Jinja templates.

![Custom HTML](https://docs.frappe.io/files/print-format-custom-html.png) _Custom HTML_

#### Custom CSS

To change styling in your Print Format you can also add custom CSS.

> Click on Customize > Edit Properties to add Custom CSS

![Custom CSS](https://docs.frappe.io/files/print-format-custom-css.png) _Custom CSS_

![Custom CSS Preview](https://docs.frappe.io/files/print-format-custom-css-preview.png) _Custom CSS Preview_

## Advanced Print Formats

Print Format Builder is limited if you want to completely change the layout of the Print Format. You can also write your own HTML from scratch and build the print layout you want.

To create a new Print Format, type "new print format" in awesomebar and hit enter.

1.  Select a unique name for your format.
2.  Set "Standard" as "No".
3.  Check "Custom Format".
4.  Select Print Format Type as "Jinja"
5.  Write your custom HTML

> If you set Standard as "Yes" and Developer Mode is enabled, then a JSON file > will be generated for your Print Format and you will have to check it in to > your version control with your app.

![Custom HTML in Print Format](https://docs.frappe.io/files/advanced-print-format.png) _Custom HTML in Print Format_

## Print Formats for Reports

Frappe allows you to create custom Print Formats for your Query and Script Reports. These print formats cannot be created using the UI.

To create a Print Format for reports, create a HTML file named `{report-name}.html` in the Report folder.

For example, check [General Ledger](https://github.com/frappe/erpnext/tree/develop/erpnext/accounts/report/general_ledger)

#### JS Templating

These print formats are generated on the client side, so we can't use Jinja. We use an adapted version of [John Resig's Templating](https://johnresig.com/blog/javascript-micro-templating/). It looks similar to Jinja so you don't need to learn anything new.

Here's a snippet of JS Template.

```
{% for(var i=0, l=data.length; i<l; i++) { %}
    <tr>
    {% if(data[i].posting_date) { %}
        {%= frappe.datetime.str_to_user(data[i].posting_date) %}
        
            {% if(!(filters.party || filters.account)) { %}
                {%= data[i].party || data[i].account %}
                <br>
            {% } %}

            {{ __("Against") }}: {%= data[i].against %}
            <br>{%= __("Remarks") %}: {%= data[i].remarks %}
            
    {% } else { %}
        <b>{%= frappe.format(data[i].account, {fieldtype: "Link"}) || "&nbsp;" %}</b>
        
 {%= data[i].account &amp;&amp; format_currency(data[i].debit, filters.presentation_currency) %}
 
 {% } %}
 
{% } %}
```
