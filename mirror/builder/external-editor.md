---
title: "External Editor"
source_url: https://docs.frappe.io/builder/external-editor
upstream_updated: "13-05-2026 15:14:45"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# External Editor

You can edit builder scripts in VS Code or in any of its forks. This guide will help you configure and help resolve common issues that you might face with external editor integration.

## Setup

1.  Install VS Code extension from the marketplace by searching for "Frappe Script Editor" in VS Code or your preferred fork
2.  Complete extension setup, here is the [guide](https://github.com/frappe/frappe-script-editor#setup)
3.  Open builder settings > Developer Settings

![](https://docs.frappe.io/files/image181b34.png)

4.  Click on **Request Access** button and click **Allow** in the popup

![](https://docs.frappe.io/files/image6b2da2.png)

5.  Open scripts in an external editor by right-clicking the block and selecting "Open Client Script in Windsurf", the editor's name will change in the option based on which one you are using.

![](https://docs.frappe.io/files/image77878f.png)

## Common issues

### Request access button not visible

1.  Click on settings icon next to site url in the address bar
2.  Enable **Apps on device** option, doing this will grant builder permission to open external editor directly, no need to click **Request access** button again
3.  Click on **Reset Permission** button, reload the site and then the button will be visible

![](https://docs.frappe.io/files/imageda94f8.png)
