---
title: "Custom Actions"
source_url: https://docs.frappe.io/helpdesk/custom-actions
upstream_updated: "02-03-2026 11:44:32"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Custom Actions

Custom actions allow you to perform specific tasks directly from the Ticket page. These actions can be anything from integrating with external apps to updating ticket data or creating related documents...

## Creating Custom Actions

Custom actions are implemented using Form Scripts in Desk:

1.  **Navigate to Desk:** Switch to Desk and navigate to HD Form Script.
2.  **Select Doctype:** Choose the Doctype (e.g., HD Ticket) where you want to add the custom action. You'll be presented with a boilerplate code.
3.  **Apply To:** Choose "Form".
4.  **Define Your Action:** Here's how to define different types of actions:  
    **Single Button:** This code creates a single button labelled "Open in Desk" that opens the current Ticket in a new browser tab.

![](https://docs.frappe.io/files/Normal%20Button%20Script.png)

```
	```
	const actions = [{
	    "label": "Open in Desk",
	    "onClick": () => {
	        let URL = `https://frappehelpdesk.frappe.cloud/app/hd-ticket/${doc.name}`
	        window.open(URL, '_blank')
	    },
	    "variant": 'solid' | 'subtle' | 'outline' | 'ghost',
	    "theme" : 'gray' | 'blue' | 'green' | 'red'
	}]
	```
	You can add variant and theme to your buttons.
	Default variant is "solid".
	Default color is "gray".
	Both of these properties are optional.
	You can also add your own tailwind classes here using the "class" key
	`e.g: class: 'rounded-lg bg-surface-pink-1' `
```

![](https://docs.frappe.io/files/Normal%20Button.png)  
**Grouped Actions:** This code creates a group of buttons hidden under a three-dot menu labelled "Add." Clicking on either "Open Weekly Analysis or "Open Article Analysis" will trigger their respective onClick functions (defined elsewhere).

![](https://docs.frappe.io/files/Three%20dots%20script.png)

```
	```
    const actions = [
      {
        group: 'Reports',
        hideLabel: true,
        items: [
          {
            label: 'Open Weekly Analysis',
            onClick: () => {},
          },
          {
            label: 'Open Articles Analytics',
            onClick: () => {},
          },
        ],
      },
      {
        group: 'Ticket',
        items: [
          {
            label: 'Create a new ticket',
            onClick: () => {},
          },
          // suggest some action other than open in fc
          {
            label: 'Open Customer Details',
            onClick: () => {},
          },
        ],
      },
    ]
	```
```

![](https://docs.frappe.io/files/Drop%20down%20three%20dots.png)  
**Grouped Actions with label:** This code creates a group of buttons hidden under a dropdown button labelled "Reports". Clicking on either "Open Weekly Analysis or "Open Article Analysis" will trigger their respective onClick functions (defined elsewhere)

![](https://docs.frappe.io/files/Button%20Dropdown%20script.png)

```
	```
    const actions = [{
          "buttonLabel": "Reports",
          "group": "Add",
          "hideLabel": true,
          "items": [
              {
                label: 'Open Weekly Analysis',
                onClick: () => {},
              },
              {
                label: 'Open Articles Analytics',
                onClick: () => {},
              },
          ]
      }]
	```
```

![](https://docs.frappe.io/files/Dropdown%20button.png)  
**Combined Actions:** You can combine both single buttons and group actions into a single list and pass them as the "actions" property.

![](https://docs.frappe.io/files/Combined%20Script.png)

![](https://docs.frappe.io/files/Combined%20Script%20UI.png)

## Using Context and Actions

The `doc` parameter provides context about the current Ticket page. You can utilize this context along with various functionalities to create your custom actions:

-   `doc`: Access Ticket field values (e.g., `doc.raised_by`, `doc.customer`).
-   `$dialog`: Opens a confirmation dialog with actions. (you can pass title,message,html & actions as key while creating dialog)
-   `updateField`: Updates a specific field value (e.g., `updateField('status', 'closed', callback)`).
-   `router`: Navigate to a different page using Vue Router.
-   `call`: Calls an API from the client side. You can add the server side end point in server script.
-   `createToast`: Displays success or error messages.

Field Values in HD Form script doct

-   `Enabled`: Enable script, if no other options are ticket, the script will be applied to the Agent's Ticket View
-   `Apply to customer portal`: Script will be applied to Ticket View of Customer
-   `Apply on new page`: Script will be applied on creation of New Ticket  
    ![](https://docs.frappe.io/files/Screenshot%202025-03-29%20at%209.02.54%20PM.png)

Function Support on various pages:

| Functions | Ticket Agent | Ticket Customer | New Ticket |
| --- | --- | --- | --- |
| call | ✓ | ✓ | ✓ |
| updateField | ✓ | ✓ | ✗ |
| router | ✓ | ✓ | ✓ |
| $dialog | ✓ | ✓ | ✓ |
| createToast | ✓ | ✓ | ✓ |
| applyFilters | ✗ | ✗ | ✓ |

## Example: Custom Actions for Ticket Management

Here's an example showcasing various custom actions you can create to manage Deals:

![](https://docs.frappe.io/files/Dialogs.gif)

  

```
function setupForm({
  doc,
  updateField,
  call,
  router,
  $dialog,
  createToast,
}) {
  const actions = [
    {
      group: "Actions",
      hideLabel: true,
      items: [
        {
          label: "Open FC Info",
          onClick: () => {
            // Call API to get custom information
            call("show_custom_info", {
              ticket: doc.name,
              // Include relevant fields for fetching data
            }).then((data) => {
              if (data.name) {
                $dialog({
                  title: data?.title,
                  message: data?.message,
                  html: data?.html, // this field can be in HTML format
                  actions: [
                    {
                      label: "Open in FC",
                      variant: "solid",
                      onClick(close) {
                        let URL = `http://helpdesk:8010/app/hd-ticket/${doc?.name}`;
                        window.open(URL, "_blank");
                      },
                    },
                    //   add more actions
                  ],
                });
              }
            });
          },
        },
        {
          label: "Close this ticket",
          onClick: () => {
            $dialog({
              title: "Close this ticket?",
              message: "Are you sure you want to mark this close this ticket?",
              actions: [
                {
                  label: "Close",
                  theme: "red",
                  variant: "solid",
                  onClick(close) {
                    updateField("status", "Closed", () => {
                      createToast({
                        title: "Ticket has been closed",
                        icon: "alert-circle",
                      });
                      close();
                    });
                  },
                },
                {
                  label: "Cancel",
                  variant: "outline",
                  onClick(close) {
                    close();
                  },
                },
              ],
            });
          },
        },
      ],
    },
  ];
  if (doc.status !== "Closed") {
    actions.push({
      label: "Close the ticket",
      onClick: () => {
        $dialog({
          title: `Close ticket: ${doc.name}`,
          message: "Are you sure you want to close this ticket?",
          actions: [
            {
              label: "Close",
              theme: "red",
              variant: "solid",
              onClick(close) {
                updateField("status", "Closed", () => {});
                close();
              },
            },
            {
              label: "Cancel",
              variant: "outline",
              onClick(close) {
                close();
              },
            },
          ],
        });
      },
    });
  }

  return {
    actions,
  };
}
```
