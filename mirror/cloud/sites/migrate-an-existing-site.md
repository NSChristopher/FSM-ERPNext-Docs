---
title: "Restore & Migrate Site"
source_url: https://docs.frappe.io/cloud/sites/migrate-an-existing-site
upstream_updated: "17-07-2026 11:02:36"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Restore & Migrate Site

Restore an existing site by uploading backup files or by using a bench from your local setup or from your cloud provider.

> While migrating existing sites using the Frappe Cloud dashboard, some users miss the step to restore the site config details. If you're using the bench command, you won't have to worry about this.

## Restore from Backup Files

The easiest way to migrate an existing site on Frappe Cloud is to restore it from backup files.

1.  Backup your site using the [bench backup](https://frappeframework.com/docs/user/en/bench/reference/backup) command.
2.  You must have 4 files that should be named like the following:
3.  `20210817_125915-sitename-database.sql.gz`
4.  `20210817_125915-sitename-files.tar` (Public Files)
5.  `20210817_125915-sitename-private-files.tar` (Private Files)
6.  `20210817_125915-sitename-site_config_backup.json` (Site Config)
7.  Create a **New Site** from the Sites tab in the Frappe Cloud Dashboard.
8.  Fill out the subdomain and select the version.
9.  Once the site is created and active, go to the Actions tab.
10.  Click on the **Restore with files** option in the Dangerous Actions group.
11.  Now, upload each file you got in Step 2 in their corresponding upload boxes.
12.  Click on **Restore**.
13.  When the site reaches Active state, you should be able to access the restored site.

> This method is ideal if your backup file's size is less 200MB. If you have larger backup files, you should use the `bench` command to migrate your site.

### Encryption Key

This key is used to encrypt passwords. This key is created automatically on a fresh site. Upon restoring a site from backup, this key will have to be copied into the site config as well to be able to use existing passwords.

In cases where you have lost your previous encryption key, and system has already generated a new key for you (you can verify this in your Frappe Cloud dashboard), you may stumble upon an "Encryption Key error". This is because certain password fields were encrypted using the old key. Now when then system tries to use those passwords, it fails as it tries to decrypt those passwords with the new key. In such cases, re-entering the value in those password fields will fix the problem (same password as before is fine). This works as re-entering the password will again encrypt the password using the new key.

> TLDR; Re-enter all password fields to encrypt them with new encryption key.

Eg: **Email Account** is a common doctype who's document has a password field. You will want to re-enter the annotated password field if you face errors while sending email.

![](https://docs.frappe.io/files/email-account-password163dd0.png)

  

### Restoring an encrypted backup

If you are experiencing this error while restoring your existing backup to Frappe Cloud.

```
Encrypted backup file detected. Decrypting using site config. Decryption failed. Please provide a valid key and try again.
```

To fix this `backup_encryption_key` should be added in [site config](https://frappecloud.com/docs/sites/site-config) before restoring.

## Migrate using FC Restore CLI

### Setup FC Restore CLI

**Setup on Windows**

1.  Open a powershell window.
2.  Run this command to download the CLI

```
 Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
 Invoke-WebRequest -Uri "https://raw.githubusercontent.com/frappe/fc-scripts/refs/heads/develop/fcrestore/cli.ps1" -OutFile cli.ps1
  .\cli.ps1
```

> In some cases, Windows Defender can flag the CLI with `trojan:Win32/Sabsik.FL.A!ml` virus. It's a false positive. You can safely whitelist the binary or disable windows defender tmeporarily.

**Setup on Linux / MacOS**

1.  Open a new terminal
2.  Run this command to setup the CLI

```
  curl -fsSL https://raw.githubusercontent.com/frappe/fc-scripts/refs/heads/develop/fcrestore/cli.sh | bash -
```

### User Guide

#### Login to CLI

You need to login to CLI using your Frappe Cloud account.

![](https://docs.frappe.io/files/user-auth.gif)

#### Restore Site

The CLI will guide you through the restoration process. You’ll need to choose what you want to restore — database, public files, or private files and upload the corresponding files.

Watch the video below for a step-by-step overview:

![](https://docs.frappe.io/files/restore.gif)

> If you have restored the database, please make sure to collect the encryption key from backup's site\_config.json and set it on the new site. Please check above for the guide,

#### Cleanup

1.  If you want to logout, you can just open up the CLI and it will ask you whether you want to logout. You can use that option.
2.  Also there will be a `sessio.json` file in the same folder. You can just remove it for cleanup.

## Migrate using Bench

If you are running Frappe sites, most likely you have `bench` installed. You can run the following command to restore a site from your bench to Frappe Cloud.

```
bench migrate-to
```

You can run this command even from your local setup. If your site is hosted on a cloud provider like Digital Ocean or Amazon AWS, you must SSH into your server, and run this command.

The bench command provides a form similar to the dashboard UI. It's probably the easiest way to migrate your site to Frappe Cloud.

  

It is prompt-based and even allows you to pass external backup files, this way there is no need to restore a site from backup, just to migrate it again somewhere else.

![Screenshot 2024-07-29 at 2.19.03 PM](https://docs.frappe.io/files/Screenshot%202024-07-29%20at%202.19.03%E2%80%AFPM.png "Screenshot 2024-07-29 at 2.19.03 PM.png")

  

  

> If you are migrating a site from external backup files, pass the absolute path to said files.

> This method will work only if your sites are on Version **[v14.78.2](https://github.com/frappe/frappe/releases/tag/v14.78.2)** (for v14) or **[v15.36.1](https://github.com/frappe/frappe/releases/tag/v15.36.1)** (for v15) or [greater](https://github.com/frappe/frappe/pull/27115). If you are on an older version or this command didn't work for you, you can try the Python Script method explained later.

## Migrate using Python Script

If you are on an older version of Frappe (older than version 11) or the Bench command didn't work for you, you can try this method.

Make sure you have `wget` installed. Run the following commands from your bench directory:

```
wget https://frappecloud.com/assets/press/migrate
chmod +x migrate
./migrate
```

## Restore Backup on another site

You can restore backup on another site by following the given steps:-

  

1.  Click on the Backups tab from your site dashboard on which you have the offsite backup stored.

![](https://docs.frappe.io/files/Screenshot%202025-08-20%20at%204.48.45%E2%80%AFPM.png)

  

2.  Click on the three dots of the offsite backup you wish to restore it on another site.

![](https://docs.frappe.io/files/Screenshot%202025-08-20%20at%204.49.47%E2%80%AFPM.png)

3.  Once you click on the option you will be asked to select the site you want to restore it on, you can click the site and click on restore to continue.

![](https://docs.frappe.io/files/Screenshot%202025-08-20%20at%204.50.32%E2%80%AFPM.png)

![](https://docs.frappe.io/files/Screenshot%202025-08-20%20at%204.52.18%E2%80%AFPM.png)

4.  Once done, it will automatically redirect to the restore job that will trigger.

## Migrate using site URL

While creating a new site using the new site creation wizard, you can go the **Migrate from Site URL** tab while in the **Restore from Existing Site** step and follow the given steps:

![Migrate from Site URL](https://frappecloud.com/files/migrate_from_site_url.png)

  

-   Enter your existing site URL
-   Enter your old site user credentials
-   Click on Get Backups

Get Backups will fetch backup files from your old site to restore on Frappe Cloud.

## FAQ

### tar/gzip command fails with unexpected EOF

This is a common error faced by many users. We believe this happens due to a corrupt file in the tarball. If this happens to you during site restore, please try again with a fresh backup of the site.

> If you continue to face the error with fresh backup. Try taking a backup **after** putting your site on maintenance mode.

  

  

### Uploading a files backup that's too large

> **Try the [FC Restore CLI](https://3fa1496a-d896-450b-98e8-d2029aa5499e.frame.claudeusercontent.com/_f/1784265986-d887/#migrate-using-fc-restore-cli) first.** It's the supported way to restore backups larger than the 5 GiB upload limit, and it handles the database and files together. Only use the steps below if the CLI tool also fails for you, and you're on a [private bench group](https://docs.frappe.io/cloud/benches/create-new).

If your files are too large to upload from the UI, the site is no longer hosted anywhere (so **Migrate using site URL** and **Migrate using Bench** are out), and the FC Restore CLI hasn't worked either, you can restore the database from the UI and upload the files separately over SSH.

1.  Restore the database first. In the restore dialog, upload only the database backup and leave the public and private files empty. The database is small enough to go through the UI, and restoring it creates the site so there's somewhere for the files to land.
2.  Upload the files backup to Google Drive, then **Copy link** and set access to "Anyone with the link".  
    ![](https://docs.frappe.io/files/image1879e9.webp)  
    ![](https://docs.frappe.io/files/image4dfaf1.webp)
3.  [Set up SSH access](https://docs.frappe.io/cloud/benches/ssh) to your bench group and generate an SSH certificate. Connect using the command shown in the SSH Access dialog — it's specific to your bench group and region:

```
# Example only — replace with the command from your SSH Access dialog
ssh [email protected] -p 2222
```

4.  Go to your site's directory and download the files backup:

```
cd sites/<your-site>

# Replace this link with your link
LINK='https://drive.google.com/file/d/1A2b3C4d5E6f7G8h9I0jK1L2m3N4o5P6q/view?usp=sharing'

wget --no-check-certificate -O files.tar \
  "https://drive.usercontent.google.com/download?id=$(echo "$LINK" | grep -oE '[-_A-Za-z0-9]{25,}')&export=download&confirm=t"
```

5.  Look inside the archive before extracting. The paths tell you how many leading directories to strip:

```
tar -tf files.tar | head
```

A files backup is laid out with the site name above `public/files`, so you'll see something like:

```
./your-site.frappe.cloud/public/files/
./your-site.frappe.cloud/public/files/some-image.png
```

Everything before `public` gets stripped — here that's `./` and the site name, so two components.  
6\. Extract the files into place:

```
tar -xvf files.tar --strip-components=2
```

For a `.tar.gz` backup, use `tar -xzvf` instead. Repeat steps 4 to 6 for the private files backup.  
7\. Check it landed, then clean up:

```
ls public/files private/files
rm files.tar
```

You should see your files directly under `public/files`. If you see your site name nested in there instead, the strip count was off by one — delete the stray directory and re-extract with a different `--strip-components` value.
