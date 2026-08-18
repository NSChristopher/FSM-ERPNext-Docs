---
title: "Access Request"
source_url: https://docs.frappe.io/cloud/guides/access-request
upstream_updated: "16-02-2026 17:05:36"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Access Request

Access to Frappe Cloud resources are granted upon permission and on a time bound manner. This document explain how to manage this from both customer and agent perspectives.

> Implementation of access controls is not complete. There maybe hiccups here and there.

### Why is this needed?

Customer data security is of extreme importance to us. We want to treat that data with utmost respect and care. Hence, we deny access by default to everyone including Frappe employees. When in need of help and support, agents can ask for explicit permission for a limited time period. Customer can then accept or reject the request depending on the context. This ensures optimum conditions for data security and customer satisfaction.

### What should I as a customer do?

You can manage incoming access requests from Frappe Cloud dashboard itself. You can go to this dedicated page from the sidebar. It will look like this.

![image6357ec](https://docs.frappe.io/files/image6357ec.png)

This list should tell you about the target resource or resources, reason for the request, time for expiry and when was it requested. The list is sorted by last updated. So most relevant requests will be kept on top.

Clicking any row will open a dialog with more details. It can show a list of resources and any additional permissions if requested.

![image17afbf](https://docs.frappe.io/files/image17afbf.png)

Pending requests can be accepted or rejected. Once accepted, access will be granted for a limited amount of time. This includes any additional permissions mentioned in the request.

Already accepted requests can be revoked. This will instantly remove the agent’s access to mentioned resource. Please note that when there are multiple accepted requests against a common resource, all of them will have to be revoked for complete denial of access.

You will get a email and in-app notification when an agent requests access for one of your resources. You will also be notified when there are any updates on said request.

That’s it! There is nothing else you have to do. Your data will remain secure and untouched by anyone other than you!

### What should I as an agent do?

You are on the other side of this see-saw. Your role as an agent is to request access to a particular resource. There is no special page to do this. Instead, you can go a resource’s page and click on Request Access button. This will open a dialog asking for necessary information.

![image4c3a4a](https://docs.frappe.io/files/image4c3a4a.png)

Ideally, you should ask for minimum required permissions depending on the need. More permissions can be asked later.

You will get email and in-app notifications whenever there is an update on the request. If the customer accepted your request, you can access the resource. All requests sent from your team can be tracked anytime in Access Requests page. This is the same page as customer, except you can see outgoing requests as well.

Clicking any of the rows will open up a dialog with it’s details. Like customer’s ability to revoke an accepted request, you can forfeit an accepted request. This will ensure you don’t keep access to a certain resource even after the issue is solved. Customer will get a notification regarding the same.

In addition to Access Requests page, you can see individual resource statuses in their own page. If you have access via request for a resource, a button with unlock icon will be shown on the top bar. This button opens a dialog with relevant permissions and dates. There is also an additional button to re-request access with or without permissions.

![image277c18](https://docs.frappe.io/files/image277c18.png)

That is all for an agent’s part. You can be headache free when it comes to consent, access and timelines. All of them are handled here!
