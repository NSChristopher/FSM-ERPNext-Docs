---
title: "Student Leave Application"
source_url: https://docs.frappe.io/erpnext/user/manual/en/student-leave-application
upstream_updated: "20-03-2026 18:07:34"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Student Leave Application

**Student Leave Application is a formal document to keep a track of leaves for a student.**

To access Student Leave Application list, go to:

> Home > Education > Attendance > Student Leave Application

## 1 How to create a Student Leave Application

1.  Go to the Student Leave Application list, and click on New.
2.  Select the Student.
3.  Set the 'From Date' and 'To Date' fields for specifying the period.
4.  Marking Attendance for the Leave Application is governed by the 'Attendance Based On' field. In ERPNext, Student Attendance can be marked in two ways:  
    **Course Schedule**: If attendance is taken for every lecture (in colleges/universities), then the leave application can be created for that particular course schedule slot.  
    **Student Group**: If attendance is taken for the entire day then student group (class/division) is used to mark attendance so that leave is calculated for the entire day
5.  Based on the Attendance field, select the Student Group or Course Schedule. Optionally enter the reason.
6.  In case the student is not attending the institute to participate or represent the institute in any event, he/she can be marked as "Present" from the Leave Application itself by checking _Mark as Present_.
7.  Save. The 'Total Leave Days' will be calculated and set in the document after excluding the holidays which are part of your default [Holiday List](https://docs.frappe.io/human-resources/holiday-list).

![Screenshot 2024-05-23 at 6.23.14 PM](https://docs.frappe.io/files/Screenshot%202024-05-23%20at%206.23.14%20PM.png)

### 1.2 On Submission of Student Leave Application

Once the Student Leave Application is submitted, a Student Attendance record is automatically created with status as 'Leave'. If _Mark as Present_ is checked, then the status of the Attendance Record is set as 'Present'. The Leave Application is linked to this Student Attendance document for reference.

![Screenshot 2024-05-23 at 6.23.27 PM](https://docs.frappe.io/files/Screenshot%202024-05-23%20at%206.23.27%20PM.png)

  

If any of the dates within the leave period is a holiday, then, Student Attendance record creation is skipped for that date.

### 1.3 On Cancellation of Student Leave Application

On cancellation of the Student Leave Application, the linked Student Attendance record is also cancelled automatically.

2.  Tutorial Video for Student Leave Application

* * *

  

  

3.  Related Topics
    
4.  [Student Attendance](https://docs.frappe.io/education/student-attendance).
