---
title: "Managing your Marketplace App"
source_url: https://docs.frappe.io/cloud/marketplace/manage-marketplace-app
upstream_updated: "13-01-2026 15:35:34"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Managing your Marketplace App

## Releases

Once you have successfully added your app to the marketplace, you will be able to manage releases for your app from the **Releases** tab in your app page.

You will see a list of your app releases (created each time you push new code to GitHub) on this page.

An app release can be in one of the 4 states:

1.  **Draft**: This release has not been published yet and can be published.
    
2.  **Awaiting Approval**: You have requested to published this release, but it has not been approved from our side yet.
    
3.  **Approved**: You have requested to published this release and it has been approved from our side. Once approved, the release will be deployed to marketplace within a week.
    
4.  **Rejected**: You requested to publish the release, but due to some issues, the release was rejected by our review team.
    

You can click on the **Publish** button next to the release to submit it for publishing to the marketplace post approval from our review team:

![Publish a release](https://docs.frappe.io/files/publish_release.gif)

You can also cancel a publish request, upon cancellation the app release will go back to the **Draft** state:

![Cancel a release](https://docs.frappe.io/files/cancel_release.gif)

> Before submitting a release for publication to marketplace, make sure you have tested it properly and it does not introduce any major bugs to your app.
