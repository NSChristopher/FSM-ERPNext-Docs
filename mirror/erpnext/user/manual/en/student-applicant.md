---
title: "Student Applicant"
source_url: https://docs.frappe.io/erpnext/user/manual/en/student-applicant
upstream_updated: "09-02-2026 18:02:46"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Student Applicant

**A Student Applicant record gets created when a student applies to your institute for admission.**

You can Approve or Reject a student applicant. By accepting a student applicant you can add them to the student master.

To access student Applicant, go to:

> Home > Education > Admission > Student Applicant

## 1\. Prerequisites

Before creating a Student Applicant, it is advisable to first create the following:

1.  [Academic Term](https://docs.frappe.io/education/academic-term)
2.  [Academic Year](https://docs.frappe.io/education/academic-year)
3.  [Program](https://docs.frappe.io/education/program)

## 2\. How to create a Student Applicant

1.  Go to the student Applicant and click on New.
2.  Enter the **First Name** of the student Applicant.
3.  Enter the **Program** for which the student has applied.
4.  Enter the **Student Email Address**.
5.  Save.

![Student Applicant](https://docs.frappe.io/files/education-student-applcant-1.gif)

## 3\. Features

### 3.1 Online Application via a Web Form

A Student Applicant gets automatically created when a student applies online. This can be made possible through the Student Applicant Web Form which is created by default in the system. Search for "[Web Form List](https://docs.frappe.io/website/web-form)" in the awesome bar to access the list of all the web forms in the system.

Once the student applies, the status of the application by default is "Applied". You can either "Approve" or "Reject" the form.

![Student Applicant](https://docs.frappe.io/files/education-student-applicant-5.png)

Once the application is approved, you can "Enroll" the student to a program. When you click the **Enroll** button, the system shall create a student against that applicant and redirect you to the [Program Enrollment form](https://docs.frappe.io/education/program-enrollment).

![Student Applicant](https://docs.frappe.io/files/education-student-applcant-6.gif)

> Note: Once a student is created against the student applicant, the system will set the application status to 'Admitted' and will not allow you to change the application status unless the student record is deleted.

## 4\. Video Tutorial for Student Application
