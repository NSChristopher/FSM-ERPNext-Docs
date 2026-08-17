---
title: "Form Scripts"
source_url: https://docs.frappe.io/framework/user/en/tutorial/form-scripts
upstream_updated: "17-02-2026 10:41:12"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Form Scripts

Form Scripts are client-side javascript code that enhances the UX of your Forms.

Let's say you want to create a membership for a member. To do this, you have to  
go to the Library Membership list, create a new form, select the member and  
other fields and then save.

Similarly, when you want to create a transaction against a member, you have to  
make a new Library Transaction form.

We can make this process easier. Write the following code in **library\_member.js**

```
frappe.ui.form.on('Library Member', {
 refresh: function(frm) {
 frm.add_custom_button('Create Membership', () => {
 frappe.new_doc('Library Membership', {
 library_member: frm.doc.name
 })
 })
 frm.add_custom_button('Create Transaction', () => {
 frappe.new_doc('Library Transaction', {
 library_member: frm.doc.name
 })
 })
 }
});
```

Now, refresh your page and go to the Library Member form. You should see two buttons  
on the top right. Click on them to try them out. They will automatically set the  
Library Member in each of those documents making the process easier.

![Library Member Form Actions](https://docs.frappe.io/files/library-member-form-actions.png)

We have only scratched the surface here. You can do a lot more with Form  
Scripts. Learn more about the API at [Form Scripts  
API](https://docs.frappe.io/framework/v14/user/en/api/form).

Next: [Portal Pages](https://docs.frappe.io/framework/v14/user/en/tutorial/portal-pages)
