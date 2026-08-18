---
title: "Two-factor authentication (2FA)"
source_url: https://docs.frappe.io/cloud/two-factor-authentication-2fa
upstream_updated: "16-02-2026 17:05:32"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Two-factor authentication (2FA)

Two-Factor Authentication (2FA) is a security measure that requires two different methods of verification to access an account.

> At the moment you can only use an authenticator app to enable 2FA

## Authenticator App

We use [TOTP](https://en.wikipedia.org/wiki/Time-based_One-Time_Password) method, that generates a unique password that is valid for a limited time, for 2FA.

### Enable 2FA

1.  Go to Settings and click on enable beside the enable 2FA option.
2.  Download an authenticator app on your phone, such as [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) or [Aegis](https://github.com/beemdevelopment/Aegis) or use a browser extension like [1Password](https://support.1password.com/one-time-passwords/).
3.  Scan the QR code using the app or extension.
4.  Enter the code that's generated in the app to enable 2FA for your Frappe Cloud account.

> Make sure to backup your vault/keys through the app as losing it means you could potentially get locked out of your Frappe Cloud account

### Disable 2FA

1.  Go to Settings and click on disable beside the disable 2FA option.
2.  Open your authenticator app.
3.  Enter the code that's generated in the app to disable 2FA for your Frappe Cloud account.

> Disabling 2FA makes your account less secure

### Enforce 2FA for the whole team

1.  Go to Settings and navigate to team tab.
2.  Click on Settings button.
3.  Switch Enforce 2FA button to enable it. Users will now be asked to enable 2FA when they visit the dashboard.
