---
title: "Web Page"
source_url: https://docs.frappe.io/erpnext/user/manual/en/web-page
upstream_updated: "28-02-2026 15:39:18"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Web Page

**Static Content like your Home Page, About Us, Contact Us, Terms pages can be created using the Web Page.**

To access Web Page go to:

> Home > Website > Web Site > Web Page

1.  How to create a Web Page

* * *

1.  Go to the Web Page list and click on New.
2.  Enter a Title and add content in Main Section. The route will auto generated but you can change it.
3.  Click on Save.
4.  The web page will be published only when **Published** is ticked.

![New Web Page](https://docs.frappe.io/files/new-web-page.png) _New Web Page_

View your Web Page by clicking on **See on Website** in the side bar.

![Web Page](https://docs.frappe.io/files/web-page.png) _Web Page_

### 1.1 Tips on making a good Web Page

#### Title

The first thing to set is the title of your page. The title has the maximum weight for search engines so choose a title that reflects the keywords that you are targeting for your audience. The route (URL) will be auto-generated from the title but you can change it.

#### Content

You can write your content in Rich Text, Markdown or HTML. If you want to make simple content pages, Rich Text and Markdown are great options.

> Learn markdown in a few minutes at [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

#### Images

For Rich Text Content, you can directly embed images using the editor. For Markdown and HTML, you must attach the images to the document first. Now get the URL of your image by right-clicking on your attachment and copying the address.

![Image Link](https://docs.frappe.io/files/get-image-link.png)

Now, add them to your Markdown or HTML using the appropriate syntax.

```
<!-- markdown -->
![Alt Text](/path/to/image-url.png)

<!-- html -->
<img alt="Alt Text" src="/path/to/image-url.png">
```

2.  Features

* * *

### 2.1 Slideshow

You can also add a Slideshow to your Web Page. Refer how to create a Slideshow at [Homepage Slideshow](https://docs.frappe.io/erpnext/homepage#22-homepage-slideshow)

### 2.2 Scheduled Publishing

You can schedule your Web Pages for publishing if you set Start Date and End Date for your Web Page. They will be set as published within the date ranges and will be unpublished outside the range automatically.

Unpublished pages will throw an `Error 404` when they are visited.

### 2.3 Javascript and CSS

You can add a JS script to your Web Page in the **Script** section. Make sure to write your script inside the `frappe.ready` callback.

```
frappe.ready(() => {
    // your script here
});
```

You can add CSS styling to your Web Page in the **Style** section. Inspect the elements to see what classes are available for styling. If you are using HTML Content, you can use your own classes and style them here.

### 2.4 Sidebar

You can add a Website Sidebar with custom links on your Web Page. In the **Sidebar and Comments** section enable **Show Sidebar**. Select an existing Website Sidebar or create a new one.

![Web Page Sidebar](https://docs.frappe.io/files/web-page-sidebar.png) _Web Page Sidebar_

Add links and their route in the Sidebar Items table. ![Website Sidebar](https://docs.frappe.io/files/new-website-sidebar.png) _Website Sidebar_

![Web Page with Sidebar](https://docs.frappe.io/files/web-page-with-sidebar.png) _Web Page with Sidebar_

### 2.5 Comments

You can enable comments on your Web Page where people can leave a comment with their Name and Email. Enable comments from the **Sidebar and Comments** section.

![Web Page Comments](https://docs.frappe.io/files/web-page-comments.gif) _Web Page Comments_

### 2.6 Header

You can add a custom HTML for the header section of the page. This will override the title of the Web Page.

![Web Page Header](https://docs.frappe.io/files/web-page-header.png) _Web Page Header_

![Web Page with Custom Header](https://docs.frappe.io/files/web-page-with-custom-header.png) _Web Page with Custom Header_

### 2.7 Breadcrumbs

You can add a list of breadcrumbs on your Web Page. These will be shown on top before the header.

![Web Page Breadcrumbs](https://docs.frappe.io/files/web-page-breadcrumbs.png) _Web Page Breadcrumbs_

![Web Page with Breadcrumbs](https://docs.frappe.io/files/web-page-with-breadcrumbs.png) _Web Page with Breadcrumbs_

### 2.8 Meta Tags

You can also add Meta Tags to your Web Page. You must add the property key and its value in the Meta Tag Table and it will auto-generate HTML `meta` tags on your Web Page.

![Web Page Meta Tags](https://docs.frappe.io/files/web-page-meta-tags.gif) _Web Page Meta Tags_
