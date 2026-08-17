---
title: "Page API"
source_url: https://docs.frappe.io/framework/user/en/api/page
upstream_updated: "17-02-2026 10:41:15"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Page API

Every screen inside the Desk is rendered inside a `frappe.ui.Page` object.

## frappe.ui.make\_app\_page

Creates a new Page and attaches it to parent.

```
let page = frappe.ui.make_app_page({
    title: 'My Page',
    parent: wrapper // HTML DOM Element or jQuery object
    single_column: true // create a page without sidebar
})
```

![New Page](https://docs.frappe.io/files/new-page.png) _New Page_

## Page methods

This section lists out the common methods available on the page instance object.

## page.set\_title

Set the page title along with the document title. The document title is shown in browser tab.

```
page.set_title('My Page')
```

![Page Title](https://docs.frappe.io/files/page-set-title.png) _Page Title_

## page.set\_title\_sub

Set the secondary title of the page. It is shown on the right side of the page header.

```
page.set_title_sub('Subtitle')
```

![Page Subtitle](https://docs.frappe.io/files/page-set-title-sub.png) _Page Subtitle_

## page.set\_indicator

Set the indicator label and color.

```
page.set_indicator('Pending', 'orange')
```

![Page Indicator](https://docs.frappe.io/files/page-set-indicator.png) _Page Indicator_

## page.clear\_indicator

Clear the indicator label and color.

```
page.clear_indicator()
```

## page.set\_primary\_action

Set the primary action button label and handler. The third argument is the icon class which will be shown in mobile view.

```
let $btn = page.set_primary_action('New', () => create_new(), 'octicon octicon-plus')
```

![Page Primary Action](https://docs.frappe.io/files/page-primary-action.png) _Page Primary Action_

## page.clear\_primary\_action

Clear primary action button and handler.

```
page.clear_primary_action()
```

## page.set\_secondary\_action

Set the secondary action button label and handler. The third argument is the icon class which will be shown in mobile view.

```
let $btn = page.set_secondary_action('Refresh', () => refresh(), 'octicon octicon-sync')
```

![Page Secondary Action](https://docs.frappe.io/files/page-secondary-action.png) _Page Secondary Action_

## page.clear\_secondary\_action

Clear secondary action button and handler.

```
page.clear_secondary_action()
```

## page.add\_menu\_item

Add menu items in the Menu dropdown.

```
// add a normal menu item
page.add_menu_item('Send Email', () => open_email_dialog())

// add a standard menu item
page.add_menu_item('Send Email', () => open_email_dialog(), true)
```

![Page Menu Dropdown](https://docs.frappe.io/files/page-menu-dropdown.png) _Page Menu Dropdown_

## page.clear\_menu

Remove Menu dropdown with items.

```
page.clear_menu()
```

## page.add\_action\_item

Add menu items in the Actions dropdown.

```
// add a normal menu item
page.add_action_item('Delete', () => delete_items())
```

![Page Actions Dropdown](https://docs.frappe.io/files/page-actions-dropdown.png) _Page Actions Dropdown_

## page.clear\_actions\_menu

Remove Actions dropdown with items.

```
page.clear_actions_menu()
```

## page.add\_inner\_button

Add buttons in the inner toolbar.

```
// add a normal inner button
page.add_inner_button('Update Posts', () => update_posts())
```

![Page Inner Button](https://docs.frappe.io/files/page-inner-button.png) _Page Inner Button_

```
// add a dropdown button in a group
page.add_inner_button('New Post', () => new_post(), 'Make')
```

![Page Inner Button Group](https://docs.frappe.io/files/page-inner-button-group.png) _Page Inner Button Group_

### page.change\_custom_button_type

Change a specific custom button type by label (and group).

```
// change type of ungrouped button
page.change_inner_button_type('Update Posts', null, 'primary');

// change type of a button in a group
page.change_inner_button_type('Delete Posts', 'Actions', 'danger');
```

## page.remove\_inner\_button

Remove buttons in the inner toolbar.

```
// remove inner button
page.remove_inner_button('Update Posts')

// remove dropdown button in a group
page.remove_inner_button('New Posts', 'Make')
```

## page.clear\_inner\_toolbar

Remove the inner toolbar.

```
page.clear_inner_toolbar()
```

## page.add\_field

Add a form control in the page form toolbar.

```
let field = page.add_field({
    label: 'Status',
    fieldtype: 'Select',
    fieldname: 'status',
    options: [
        'Open',
        'Closed',
        'Cancelled'
    ],
    change() {
        console.log(field.get_value());
    }
});
```

![Page Form Toolbar](https://docs.frappe.io/files/page-add-field.png) _Page Form Toolbar_

## page.get\_form\_values

Get all form values from the page form toolbar in an object.

```
let values = page.get_form_values()
// { status: 'Open', priority: 'Low' }
```

## page.clear\_fields

Clear all fields from the page form toolbar.

```
page.clear_fields()
```
