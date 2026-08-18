---
title: "Database Access"
source_url: https://docs.frappe.io/cloud/sites/database-access
upstream_updated: "13-01-2026 15:35:34"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Database Access

> Database Access is available for sites on USD 50 and above plans

You will now have complete access to your site's database.

### Enable Database Access

Go to Site Dashboard >Actions>Access site Database

![](https://docs.frappe.io/files/FlXES5L.png)

If you haven't previously used this feature click on Enable Access after selecting the type of access you need. Now you'll see credentials to connect your database.

![Database Access Credentials](https://frappecloud.com/files/database-access-credentials.png)

### Connect to the Database

#### Analytics or Business Intelligence tool

Copy the credentials shown to your analytics tool.

We only allow TLS connections. If you're having issues while connecting then please ensure that the analytics tool is using SSL/TLS and our certificate [chain.pem](https://frappecloud.com/files/chain.pem) for `*.frappe.cloud` (Signed by [Let's Encrypt](https://letsencrypt.org/)).

#### MariaDB command line client

![Database Access CLI](https://frappecloud.com/files/database-access-cli.png)

Copy the command to your console and paste the password when prompted.

You will need to install [mariadb-client or mysql-client](https://mariadb.com/docs/server/connect/clients/mariadb-client/) on your machine.

> If you have **read-write** access to your database, any changes made to your database will be permanent.

## FAQ

### Cannot connect to database from PowerBI

If connecting with PowerBI doesn't work, you might be using MySQL Connector. We use MariaDB for our databases. Please use Mariadb connector with PowerBI for the same. You can find docs for the same [here](https://mariadb.com/resources/blog/getting-started-with-the-mariadb-direct-query-adapter-for-microsoft-power-bi/).

### Error when running query

Sometimes you may get errors such as

```
lost connection to server during query
```

In such cases, the application with which you're connecting to the database may not be showing the exact error mysql server is throwing. If you run into any errors when running queries, it's best to try the same query over [mysql client](https://frappecloud.com/docs/sites/database-access#mariadb-mysql-command-line-client) in the command line.

With the error thrown there, you'll be able to tell what exactly went wrong, and if anything is needed from our end, you can take a screenshot of the same and raise support ticket with it.
