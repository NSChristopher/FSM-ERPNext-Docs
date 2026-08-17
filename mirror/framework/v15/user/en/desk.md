---
title: "Desk"
source_url: https://docs.frappe.io/framework/v15/user/en/desk
upstream_updated: "17-02-2026 10:41:15"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Desk

Frappe Framework comes with a rich admin interface called the Desk. It reads meta-data  
from DocTypes and automatically builds list views, form views, report views, etc  
for your DocTypes. Desk is to be used by users of the type "System User".

In this section we will discuss what views are provided by Desk and how to configure them.

-   [Workspace](#workspace)
-   [Awesomebar](#awesomebar)
-   [List View](#list-view)
-   [Form View](#form-view)
-   [Grid View](#grid-view)
-   [Report Builder](#report-builder)
-   [Tree View](#tree-view)
-   [Calendar View](#calendar-view)
-   [Gantt View](#gantt-view)
-   [Kanban View](#kanban-view)
-   [Desk Theme](#dark-theme)

## Workspace

When you login, you're presented with the Desk, it features a persistent sidebar with some standard items based on app modules.  
Each sidebar item links to a page called Workspace.

[About Workspace →](https://docs.frappe.io/framework/v14/user/en/desk/workspace)

![Desktop](https://docs.frappe.io/files/v14-workspace.png)

## Awesomebar

Awesomebar helps you to navigate anywhere in the system, create new records, search in documents  
and even perform math operations.

![Awesomebar](https://docs.frappe.io/files/awesomebar.png)  
_Navigating ToDo using Awesomebar_

## List View

List View is generated for all DocTypes except which are Child Tables and Singles.

The List view is packed with features. Some of them are:

1.  Filters
2.  Sorting
3.  Paging
4.  Filter by tags
5.  Switch view to Report, Calendar, Gantt, Kanban, etc.

> Learn more about the [List API](https://docs.frappe.io/framework/v14/user/en/api/list).

## Form View

Form view is used to view the records in a Form Layout. This view has a lot of  
things going on. But the primary purpose of it is to view and edit records.  
A document can be assigned to or shared with other users and it can have arbitrary  
attachments and tags, all of which can be seen in the form sidebar.

![Form View](https://docs.frappe.io/files/form-view.png)  
_Form View_

When you scroll down to the bottom of the form, you will see the form timeline.  
The form timeline shows emails, comments, edits and other events in a reverse  
chronological order.

![Form View](https://docs.frappe.io/files/form-timeline.png)  
_Form Timeline_

> Learn more about the [Form API](https://docs.frappe.io/framework/v14/user/en/api/form).

## Grid View

Grid view is used as a table in the form view to insert multiple records.  
User can configure the columns of the grid view from the form.

![Grid View](https://docs.frappe.io/files/configure_grid_columns.gif)

## Report Builder

Report Builder is a generic tool to customize and build tabular data from a DocType.  
You can select columns to show, filters to apply, sort order and save this configuration  
by giving your report a name. You can also show Child Table data and also filter  
documents by their child records. You can also apply _Group By_ on a column with  
aggregation methods like Count, Sum and Average.

![Report Builder](https://docs.frappe.io/files/report-builder.gif)  
_Report Builder Features_

## Tree View

Frappe also supports tree structured records using the [Nested set model](https://en.wikipedia.org/wiki/Nested_set_model).  
If a doctype is configured to be a tree structure, it can be viewed in the Tree view.

![Tree View](https://docs.frappe.io/files/tree-view.png)  
_Tree View_

## Calendar View

Calendar view can be configured for DocTypes with a start date and end date.

![Calendar View](https://docs.frappe.io/files/calendar-view.png)  
_Calendar View_

The configuration file should be named `{doctype}_calendar.js` and should exist in the  
doctype directory.

Here is an example configuration file for calendar view for Event doctype, which must be set in the `event_calendar.js` file.

```
frappe.views.calendar['Event'] = {
 field_map: {
 start: 'starts_on',
 end: 'ends_on',
 id: 'name',
 allDay: 'all_day',
 title: 'subject',
 status: 'event_type',
 color: 'color'
 },
 style_map: {
 Public: 'success',
 Private: 'info'
 },
 order_by: 'ends_on',
 get_events_method: 'frappe.desk.doctype.event.event.get_events'
}
```

## Gantt View

Gantt view uses the same configuration file as calendar, so every DocType that has a Calendar view has a Gantt view too.

In case certain settings need to be overridden for the Event DocType's Gantt view (for example the `order_by` field) the configuration can be set in the `event_calendar.js` file with the following content.

```
frappe.views.calendar['Event'] = {
 field_map: {
 start: 'starts_on',
 end: 'ends_on',
 id: 'name',
 allDay: 'all_day',
 title: 'subject',
 status: 'event_type',
 color: 'color'
 },
 gantt: { // The values set here will override the values set in the object just for Gantt View
 order_by: 'starts_on',
 }
 style_map: {
 Public: 'success',
 Private: 'info'
 },
 order_by: 'starts_on',
 get_events_method: 'frappe.desk.doctype.event.event.get_events'
}
```

![Gantt View](https://docs.frappe.io/files/gantt-view.png)  
_Gantt View_

## Kanban View

Kanban view can be created for any DocType that has a Select field with options.  
These options become the column names for the Kanban Board.

![Kanban View](https://docs.frappe.io/files/kanban-view.png)

## Dark Theme

![Dark Theme](https://docs.frappe.io/files/Screenshot%202022-01-18%20at%203.35.44%20PM.png)

Frappe Framework has a first class support of dark theme. To switch the theme, click on your avatar on top right of the screen and click on "Toggle Theme". Once you click "Toggle Theme", you'll see following modal from which you can easily switch between available themes. To switch to dark theme select "Timeless Night".

![Desk Theme Modal](https://docs.frappe.io/files/Screenshot%202022-01-18%20at%203.47.33%20PM.png)

**Note:** You can also press CTRL + SHIFT + G to open this modal.
