---
title: "Create Your First Dashboard"
source_url: https://docs.frappe.io/insights/creating-your-first-dashboard
upstream_updated: "06-01-2026 17:21:16"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Create Your First Dashboard

In this guide, we'll create a comprehensive sales performance dashboard using the Demo Data that comes with Frappe Insights. We'll walk through creating a query, building multiple charts, and combining them into an interactive dashboard.

## 1\. Create a Workbook

1.  On the Workbook list page, click **\+ New Workbook**
2.  Name it "Sales Performance"
3.  Click on "Query Builder"

![New Workbook](https://docs.frappe.io/files/new-workbook.png)

## 2\. Create the Base Query

Let's create a query that combines data from multiple tables. When the query builder opens, select `orders` as your source table. Add the following operations in sequence:

### Join Tables

1.  Click **Add Operation** → **Join Table**
    
    -   Select `orderitems`
    -   Join Type: Left Join
    -   Join On: order\_id = order\_id
    -   Select columns: price, freight\_value, product\_id
2.  Click **Add Operation** → **Join Table**
    
    -   Select `products`
    -   Join Type: Left Join
    -   Join On: product\_id = product\_id
    -   Select columns: product\_category\_name
3.  Click **Add Operation** → **Join Table**
    
    -   Select `customers`
    -   Join Type: Left Join
    -   Join On: customer\_id = customer\_id
    -   Select columns: customer\_state

### Filter and Select

4.  Click **Add Operation** → **Filter Rows**
    
    -   Column: order\_status
    -   Condition: Equals
    -   Value: "delivered"
5.  Click **Add Operation** → **Choose Columns**
    
    -   order\_id
    -   order\_item\_id
    -   order\_status
    -   order\_purchase\_timestamp
    -   price
    -   freight\_value
    -   product\_category\_name
    -   customer\_state
6.  Name your query "Sales Data"
    

![Sales Data Query](https://docs.frappe.io/files/sales-data-query.png)

## 3\. Create Charts

Now let's create various charts to visualize our sales data:

### Sales Overview

-   Click **\+ New Chart**
-   Chart Type: Number
-   Title: "Sales Overview"
-   In the Columns section:

1.  Click **\+ Add Column**
    -   Function: Count Distinct
    -   Column: order\_id
    -   Click the gear icon to set label as "Total Orders"
2.  Click **\+ Add Column**
    -   Function: Sum
    -   Column: price
    -   Click the gear icon to set label as "Total Revenue"
3.  Click **\+ Add Column**
    -   Function: Average
    -   Column: price
    -   Click the gear icon to set label as "Average Order Value"

-   Select "order\_purchase\_timestamp" as the Date Column
-   Sort: order\_purchase\_timestamp (Ascending)
-   Enable "Show Comparison"
-   Enable "Show Sparkline"

![Sales Overview](https://docs.frappe.io/files/sales-overview-number-chart.png)

### Revenue by Month

-   Click **\+ New Chart**
-   Chart Type: Line
-   Title: "Monthly Revenue"
-   X-axis: `order_purchase_timestamp`
-   Y-axis:
-   Function: Sum of
-   Column: price
-   Click the gear icon to set label as "Revenue"

![Monthly Revenue](https://docs.frappe.io/files/monthly-revenue-line-chart.png)

### Revenue by Product Category

-   Click **\+ New Chart**
-   Chart Type: Row
-   Title: "Revenue by Category"
-   X-axis: product\_category\_name
-   Y-axis:
-   Function: Sum of
-   Column: price
-   Click the gear icon to set label as "Revenue"
-   Sort: Revenue (Descending)

![Revenue by Category](https://docs.frappe.io/files/top-categories-row-chart.png)

### Quaterly Revenue by State

-   Click **\+ New Chart**
-   Chart Type: Table
-   Title: "Quarterly Revenue by State"
-   Rows:
-   Column: order\_purchase\_timestamp
-   Click the gear icon to set label as "Quarter" & granularity as "Quarter"
-   Columns:
-   Column: customer\_state
-   Click the gear icon to set label as "State"
-   Values:
-   Function: Sum of
-   Column: price
-   Click the gear icon to set label as "Revenue"
-   Sort: Quarter (Ascending)
-   Enable "Show Color Scale"

![Quaterly Revenue by State](https://docs.frappe.io/files/quarterly-state-performance-table-chart.png)

## 4\. Build the Dashboard

Let's combine all charts into an interactive dashboard:

1.  Click **\+ New Dashboard**
    
2.  Set title to "Sales Performance Dashboard"
    
3.  Drag and drop the charts from the left panel to the dashboard:
    
    -   First row: Add "Sales Overview" chart
    -   Second row: Add "Monthly Revenue" & "Revenue by Category" charts
    -   Third row: Add "Quarterly Revenue by State" chart
4.  Apply dashboard filters:
    
    -   Click on the **Filter** button on the top right
    -   Click on **Add Filter** in the filter dialog
    -   Select `product_category_name` as the filter column
    -   Select `health_beauty` as the filter value
    -   Click **Apply Filter**

![Sales Dashboard](https://docs.frappe.io/files/sales-performance-dashboard.png)

This sample dashboard gives a complete view of the sales performance, from high-level metrics to detailed breakdowns by category and location. The filters allow you to drill down into specific segments and analyze the data further.
