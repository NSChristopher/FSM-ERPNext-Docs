---
title: "Dialogs Types"
source_url: https://docs.frappe.io/framework/v15/user/en/guides/app-development/dialogs-types
upstream_updated: "17-02-2026 10:41:16"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Dialogs Types

Frappe provides a group of standard dialogs that are very useful while coding.

## Alert Dialog

![](https://docs.frappe.io/files/show-alert.png)

Alert Dialog is used for showing non-obstructive messages.

It has 2 parameters:

-   **txt:** The message to be shown in the `Alert Dialog`
-   **seconds:** The duration that the message will be displayed. The default is `3 seconds`.

### Example

show\_alert('Hi, do you have a new message', 5);

* * *

## Prompt Dialog

![](https://docs.frappe.io/files/prompt.png)

Prompt Dialog is used for collecting data from users.

It has 4 parameters:

-   **fields:** a list with the fields objects
-   **callback:** a function to process the data in the dialog
-   **title:** the title of the dialog
-   **primary\_label:** the label of the primary button

### Example

frappe.prompt(\[  
{'fieldname': 'birth', 'fieldtype': 'Date', 'label': 'Birth Date', 'reqd': 1}  
\],  
function(values){  
show\_alert(values, 5);  
},  
'Age verification',  
'Subscribe me'  
)

* * *

## Confirm Dialog

![](https://docs.frappe.io/files/confirm-dialog.png)

Confirm Dialog is used to get a confirmation from the user before executing an action.

It has 3 arguments:

-   **mesage:** The message to display in the dialog
-   **onyes:** The callback on positive confirmation
-   **oncancel:** The callback on negative confirmation

### Example

frappe.confirm(  
'Are you sure to leave this page?',  
function(){  
window.close();  
},  
function(){  
show\_alert('Thanks for continue here!')  
}  
)

* * *

## Message Print

![](https://docs.frappe.io/files/msgprint.png)

Message Print is used for showing information to users.

It has 2 arguments:

-   **message:** The message to display. It can be a HTML string
-   **title:** The title of the dialog

### Example

msgprint("**Server Status**"

-   "

* * *

"

-   ""
-   "\* **28%** Memory  
    "
-   "\* **12%** Processor  
    "
-   "\* **0.3%** Disk  
    "
-   "  
    ", 'Server Info')

* * *

### Custom Dialog

![](https://docs.frappe.io/files/dialog.png)

You can extend and build your own custom dialogs using `frappe.ui.Dialog`

### Example

var d = new frappe.ui.Dialog({  
'fields': \[  
{'fieldname': 'ht', 'fieldtype': 'HTML'},  
{'fieldname': 'today', 'fieldtype': 'Date', 'default': frappe.datetime.nowdate()}  
\],  
primary\_action: function(){  
d.hide();  
show\_alert(d.get\_values());  
}  
});  
d.fields\_dict.ht.$wrapper.html('Hello World');  
d.show();
