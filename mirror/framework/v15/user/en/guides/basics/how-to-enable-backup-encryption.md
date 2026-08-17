---
title: "How to Enable Backup Encryption"
source_url: https://docs.frappe.io/framework/v15/user/en/guides/basics/how-to-enable-backup-encryption
upstream_updated: "19-06-2026 15:14:36"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# How to Enable Backup Encryption

Files created during the backup process can be encrypted using an auto-generated key.

## System Requirements

For MacOS, ensure that [gnupg](https://formulae.brew.sh/formula/gnupg) is installed in the system. Use the following command to install gnupg:

```
brew install gnupg
```

Most Linux distributions already have GnuPG installed, and the current version will likely use GnuPG 2.0 by default.

## Encrypt Backup option

1.  Open the **System Settings** form.
2.  Inside the _Backups_ section check the _Encrypt Backup_ checkbox.

![Encrypt Backup option(Enabled)](https://docs.frappe.io/files/encrypt-backup.png)

The system uses an auto-generated key supplied by the **Site config**. If no such key is found, **a new key is generated**. Any System Manager can later look it from the **Download Backups** page.

It encrypts the public and private files as well as the partial backup files.

## Backup Encryption Status

1.  Encrypted backups are stored at the same location as the general backups: `YOUR_BENCH/sites/{site}/private/backups`.
2.  Encrypted backups can be downloaded from the **Download Backups** page.
3.  Encrypted backups are differentiated using the `key icon`.

![Encrypt Backup option(Enabled)](https://docs.frappe.io/files/backup-page.png)

## Backup Encryption Key

1.  To get the backup encryption key go to the **Download Backups** page.
2.  Click on the "Get Encryption Key" button and verify your password.

![Encrypt Backup option(Enabled)](https://docs.frappe.io/files/backup-encryption-key.png)

Copy the key to restore the encrypted backup files.

## Restoring the Encrypted backup files

1.  The `bench restore SQL_FILE_PATH` can be used to restore the files without `--backup-encryption-key` as it is automatically picked from the Site Config.
2.  In case of an unsuccessful restoration due to a wrong key `--backup-encryption-key` can be used to provide the key to restore the files.
3.  Usage:  
    For full backup files  
    `bench --site {site} restore --backup-encryption-key {key} [OPTIONS]`  
    For partial backup files  
    `bench --site {site} partial-restore --backup-encryption-key {key} [OPTIONS]`

## Manually decrypt encrypted backup files

```
gpg --yes --passphrase $BACKUP_ENCRYPTION_KEY --pinentry-mode loopback -o $OUTPUT_FILE -d $INPUT_FILE
```
