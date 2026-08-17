---
title: "Shopping Cart"
source_url: https://docs.frappe.io/erpnext/user/manual/en/shopping-cart
upstream_updated: "02-03-2026 12:17:51"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Shopping Cart

In addition to listing products, ERPNext also allows selling them via the Shopping Cart.

To enable Shopping Cart, go to:

> E Commerce Settings > [Shopping Cart](https://docs.frappe.io/erpnext/e_commerce_settings#shopping-cart)

You can even build a **landing page** for your store at a custom route (eg. /_store_).  
[Learn More](https://docs.frappe.io/erpnext/store-landing-page).

## 1\. Item Types

Shopping Cart works differently for Items with and without variants.

### 1.1 Items without variants

Items without variants have their dedicated product page and an **Add to Cart** button.

![Item without Variants](https://docs.frappe.io/files/web-item-striked-price.png)  
_Item without Variants_

### 1.2 Items with variants

Since Item Templates can't be bought directly, there is a Configure button to  
choose the specific variant and add it to cart.

![Item with Variants](https://docs.frappe.io/files/variant-selection.gif)  
_Item with Variants_

## 2\. Cart Quotation

If checkout is disabled, when your customers add an item to cart, they can click  
on the **Request for Quotation** button to get a quote for it. A [Quotation](https://docs.frappe.io/erpnext/quotation)  
is generated in the system.

## 3\. Cart Checkout

You can enable checkout from the [Checkout Settings](https://docs.frappe.io/erpnext/e_commerce_settings#checkout-settings) section in **E Commerce Settings**.

![Cart Checkout](https://docs.frappe.io/files/cart-with-checkout.png)  
_Cart Checkout_
