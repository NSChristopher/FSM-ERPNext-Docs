---
title: "Using Vue in a Desk Page"
source_url: https://docs.frappe.io/framework/using-vue-inside-a-desk-page
upstream_updated: "10-05-2026 23:58:45"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Using Vue in a Desk Page

Using Vue to add pages to your Desk based app gives you a best-of-both-worlds type of convenience:

1.  You get to use Vue with its reactivity and composability
2.  You get to use [Frappe JS APIs](https://docs.frappe.io/framework/user/en/api/server-calls)

This is possible without having to manually configure a Vue app. You can follow  
the steps below to set it up.

### Create a Page

Navigate to the Page DocType (at `/app/page`) and create a new Page entry.  
New files will be created for your page in the module you select.

![Page DocType!](https://docs.frappe.io/files/page.png)

### Check created files

Under the module folder in your app's directory, you'll find a new folder with three  
files in it:

```
└── app
    └── app
        └── module
            └── page
                └── test_vue
                    ├── __init__.py
                    ├── test_vue.json
                    └── test_vue.js
```

Among these, in the newly created JavaScript file you'll see `make_app_page` being called:

```
frappe.pages['test-vue'].on_page_load = function (wrapper) {
  var page = frappe.ui.make_app_page({
    parent: wrapper,
    title: 'None',
    single_column: true,
  });
};
```

This is used to create a new page. See the [Page API](https://docs.frappe.io/framework/user/en/api/page) for more info.

This file will be loaded when you visit to `/app/test-vue`, you can visit the  
path and an empty page with the title "None" will be shown.

### Creating Vue files

To use Vue, your `.vue` source files need to be transpiled and bundled. Frappe  
Framework does this out of the box.

We'll now create two files, a `.vue` file, and a `.js` file that loads your Vue  
code. You can add these files under your app's `public/js` folder:

```
└── app
    └── app
        └── public
            └── test_vue
                ├── TestVue.vue
                └── test_vue.bundle.js
```

First, we'll create the `.vue` file `TestVue.vue`. Some simple Vue code to test the setup:

```
&lt;script setup&gt;
import { ref } from 'vue';

const message = ref('Hello, World');
&lt;/script&gt;
&lt;template&gt;
  <h1>{{ message }}</h1>
&lt;/template&gt;
```

Second, the `.js` file that loads the Vue code:

```
import { createApp } from 'vue';
import TestVue from './TestVue.vue';

// A simple function to mount your Vue app
function setup_vue(wrapper) {
  const app = createApp(TestVue);
  app.mount(wrapper.get(0));
  return app;
}

// We'll call this function from the generated test_vue.js file
frappe.ui.setup_vue = setup_vue;
export default setup_vue;
```

### Require the bundle

In the generated `test_vue.js` file, add the following code to load the Vue app:

```
frappe.pages['test-vue'].on_page_load = function (wrapper) {
  const page = frappe.ui.make_app_page({
    parent: wrapper,
    title: 'Test Vue',
    single_column: true,
  });

  // hot reload when in developer mode
  if (frappe.boot.developer_mode) {
    frappe.hot_update ??= frappe.hot_update;
    frappe.hot_update.push(() =&gt; load_vue(wrapper));
  }
};
frappe.pages['test-vue'].on_page_show = (wrapper) =&gt; load_vue(wrapper);

// Simple callback function to load Vue in the page
async function load_vue(wrapper) {
  const $parent = $(wrapper).find('.layout-main-section');
  $parent.empty();

  // Require the bundle and mount the Vue app
  await frappe.require('test_vue.bundle.js');
  frappe.test_vue_app = frappe.ui.setup_vue($parent);
}
```

This will call the `load_vue` function that `requires` the bundle and mounts the  
Vue app when the page is loaded or shown.

### Build or run the dev server

To build your code you can call:

```
bench build
```

Note: this will build the frontend code for all the apps on your bench.

To run the dev server you can navigate the frappe app's (i.e `bench/apps/frappe`) folder and run:

```
npm run build -- --apps app --watch
```

This will watch for any changes in your app and rebuild the code, which should  
trigger a hot reload in your browser.

If you've done everything right you should see your page show the Vue app's message:

![Vue Works](https://docs.frappe.io/files/It-works.png)
