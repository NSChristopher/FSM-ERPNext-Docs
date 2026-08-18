---
title: "Host Locally"
source_url: https://docs.frappe.io/drive/quick-start
upstream_updated: "06-01-2026 17:21:16"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Host Locally

### Docker (_recommended_)

This is the quickest way to set up Frappe Drive and take it for a test _drive_.

The Frappe Framework is multi-tenant and supports multiple apps by default. This `docker compose` is just a standalone version with Frappe Drive pre-installed. Just put it behind your desired reverse-proxy if needed, and you're good to go.

If you wish to use multiple Frappe apps or need multi-tenancy. I suggest moving over to our production ready self-hosted workflow, or join us on Frappe Cloud to get first party support and hassle-free hosting.

1.  Setup folder:

```
mkdir frappe-drive && cd frappe-drive
```

2.  Download the required files (Docker Compose file and Frappe Bench setup script):

```
wget -O docker-compose.yml https://raw.githubusercontent.com/frappe/drive/main/docker/docker-compose.yml
wget -O init.sh https://raw.githubusercontent.com/frappe/drive/main/docker/init.sh
```

3.  Run the container!

```
docker compose up -d
```

### Using Bench

This is the bare metal way to setup Drive.

1.  [Install Bench.](https://frappeframework.com/docs/user/en/installation)
2.  Install Frappe Drive using `bench get-app drive`.
3.  Create your site - `bench new-site site.name`...
4.  ... and install the app: `bench install-app drive`.
5.  Install some Drive specific system packages:

_Ubuntu/Debian (apt based distros)_:

```
sudo apt install ffmpeg libmagic
```

_macOS_:

```
brew install libmagic ffmpeg
```

6.  Start up the bench if you haven't already - `bench start`.
7.  Drive is now accessible at `localhost:8000` or `sitename:8000`.
