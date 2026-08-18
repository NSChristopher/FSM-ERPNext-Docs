---
title: "App Installation Issue"
source_url: https://docs.frappe.io/cloud/faq/app-installation-issue
upstream_updated: "16-02-2026 17:05:31"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# App Installation Issue

If you have been seeing the _Attention Required_ status badge next to your apps:

![](https://docs.frappe.io/files/j6PGkOJ.png)

It means that Frappe Cloud could not fetch the source code of your application.

This can be because of multiple reasons, here are two:

1.  The **App Installation ID** of your app is missing or is invalid.
2.  An **invalid URL** is being used to fetch your app.

Please see the specific sections to find out and fix the cause.

## Invalid URL

To figure out if your app has an invalid URL, navigate to **Apps** under your Bench Group's page and ensure that the _repository path_ of your app is correct:

![](https://docs.frappe.io/files/bw19HP3.png)

The _repository path_ could have changed due to a repository rename or other reasons.

If the _repository path_ is invalid, you can first remove the App by clicking on the three-dots menu button and selecting **Remove App**:

![](https://docs.frappe.io/files/bzqZifI.png)

Then re-add it back in by clicking on **Add App** and then **Add from GitHub**:

![](https://docs.frappe.io/files/CuJcgo1.png)

If your App has been re-added in correctly you should not see the _Attention Required_ status badge anymore.

## App Installation ID issue

If the _repository path_ is valid, you might be seeing the _Attention Required_ badge because of a missing or invalid **App Installation ID**.

This could be due to one of these reasons:

1.  The repository visibility has been changed.
2.  Repository access has not been granted to Frappe Cloud.
3.  Frappe Cloud has not been added as an app.

  

To help us fix this issue you will have to re-install Frappe Cloud as a GitHub app. To do so, follow these steps:

1.  Visit the Installed GitHub Apps page ([link](https://github.com/settings/installations)), and click on configure next to Frappe Cloud:![](https://docs.frappe.io/files/cckfzkr.png)
2.  Ensure that your app is present in the list below if you have not checked **All repositories,** if your app is present then move onto step 3.![](https://docs.frappe.io/files/BJgiZQm.png)
3.  Uninstall Frappe Cloud:![](https://docs.frappe.io/files/C2DqXWK.png)
4.  Reinstall it by clicking on **Connect To GitHub** from the apps page on Frappe Cloud:![](https://docs.frappe.io/files/N7PHguf.png)
5.  Complete the authorization flow:![](https://docs.frappe.io/files/TotaLcx.png)
6.  Return to the Installed GitHub Apps page ([link](https://github.com/settings/installations)), and click on configure next to Frappe Cloud as shown in step 1. You will find that your address in your browser will be of the form: `https://github.com/settings/installations/INSTALLATION_ID` keep a note of this `INSTALLATION_ID` (this is the **App Installation ID**)

If you have re-installed the App correctly, **your App Installation ID should be reset on Frappe Cloud within 30** **minutes** of having completed the steps above, and you should not be seeing the _Attention Required_ badge anymore.

If you are still seeing the Attention Required badge then p**lease raise a support ticket with us with the following information**:

-   **Bench Group name** where the app cannot be installed
-   **Repository URL** of the app
-   `INSTALLATION_ID` from the URL mentioned above

If you have followed through with the above steps, we'll take care of the rest.
