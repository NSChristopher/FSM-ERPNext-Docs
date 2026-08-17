---
title: "Add a Custom Button"
source_url: https://docs.frappe.io/erpnext/user/manual/en/custom-button
upstream_updated: "26-02-2026 21:23:21"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Add a Custom Button

frappe.ui.form.on("Event", "refresh", function(frm) {  
frm.add\_custom\_button(\_\_("Do Something"), function() {  
// When this button is clicked, do this

var subject = frm.doc.subject;  
var event\_type = frm.doc.event\_type;

// do something with these values, like an ajax request  
// or call a server side frappe function using frappe.call  
$.ajax({  
url: "http://example.com/just-do-it",  
data: {  
"subject": subject,  
"event\_type": event\_type  
}

// read more about $.ajax syntax at http://api.jquery.com/jquery.ajax/

});  
});  
});
