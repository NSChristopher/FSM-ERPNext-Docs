---
title: "Document Queue"
source_url: https://docs.frappe.io/framework/document-queue
upstream_updated: "02-07-2026 07:32:12"
mirrored_from: docs.frappe.io (Frappe Wiki - not git-backed)
---

# Document Queue

Document Queue is a framework-level document intake workflow for files that need to be reviewed before creating a Frappe document. It stores one uploaded source file, extracts text from it, and lets the user open a target DocType with the source preview beside the native form.

Document Queue is generic. It does not map fields by itself and does not contain ERPNext-specific logic. Apps such as ERPNext can build document-specific mapping, validation, or automation on top of completed Document Queue records.

## When To Use It

Use Document Queue when users receive documents first and decide or create the target record afterwards.

Examples:

-   Uploading a vendor invoice PDF before creating a Purchase Invoice in another app.
-   Uploading an expense receipt before creating an Expense Claim.
-   Uploading a signed form, identity document, or application PDF before creating a custom DocType record.
-   Collecting files from an email inbox or bulk upload flow for later review.

Document Queue is useful when the framework should handle file intake, extraction, and review, while the app or user decides what the extracted content means.

## How It Works

A Document Queue record represents one source file. The record stores extraction status, extracted text, raw extraction output, error details, and the target document created during review.

The usual flow is:

1.  A user uploads a PDF or image into Document Queue.
2.  The user clicks **Extract**, or the file is extracted as part of an upload-first flow.
3.  Frappe extracts readable text and stores it on the queue record.
4.  The record becomes **Ready for Review**.
5.  The user clicks **Start Review** and chooses a target DocType if one is not already set.
6.  Frappe opens a new target document with a left-side review panel.
7.  The user manually enters values into the native form using the preview and extracted text.
8.  When the target document is saved, Frappe links the queue record to that document, marks the queue record **Completed**, and moves the source attachment to the target document.

## Statuses

Document Queue records use these statuses:

| Status | Meaning |
| --- | --- |
| Draft | The record exists but extraction has not started. |
| Queued | Extraction has been queued as a background task. |
| Processing | Extraction is currently running. |
| Ready for Review | Extraction completed and the record can be reviewed into a target document. |
| Completed | A target document was saved and linked to the queue record. |
| Failed | Extraction failed or the file type is unsupported. Error details are stored on the record. |

Completed records cannot be started for review again. This keeps one Document Queue record tied to one completed target document.

## Extraction

Document Queue supports PDF and image extraction.

For PDFs, Frappe uses `pdfplumber` as the primary extractor. The extracted text is stored in **Extracted Text** and the detailed extraction result is stored in **Raw Extraction JSON**.

For each PDF page, the raw JSON can include:

-   page number
-   page width and height
-   plain text
-   layout text
-   words with coordinates
-   tables detected by `pdfplumber`

If the embedded PDF text is not useful, Frappe attempts OCR fallback with Tesseract, when the required system tools are available.

For images, Frappe uses Tesseract OCR when available. OCR words and coordinates are stored in the raw JSON.

Unsupported files are marked **Failed** and the error is stored in **Error Message**. Debug details, such as skipped OCR because `tesseract` is not available, are stored in **Debug Output**.

  

## Manual Document Queue Flow

To create a queue record manually:

1.  Open **Document Queue**.
2.  Create a new record.
3.  Attach a PDF or image in **Source File**.
4.  Save the record.
5.  Click **Extract**.

If extraction succeeds, the record moves to **Ready for Review**.

To create a target document from the queue:

1.  Open a **Ready for Review** Document Queue record.
2.  Click **Start Review**.
3.  If **Document Type** is not set, choose a target DocType.
4.  Frappe opens a new target document.
5.  Use the left review panel while filling the native form on the right.
6.  Save the target document.

After save, the Document Queue record is marked **Completed**, linked to the target document, and the source file is attached to the target document.

  

## Review Panel

The review panel appears on the left side of the target document form.

It has two tabs:

-   **Preview**: Shows the uploaded PDF or image.
-   **Extraction**: Shows the extracted text.

The right side remains the native Frappe form. Users enter data manually, using the preview and extracted text as reference.

The preview pane can be resized. Frappe remembers the preferred width in the browser.

If the user leaves the new target document without saving, no target document is linked and the Document Queue record remains resumable.

  

## Upload Document Flow For Target DocTypes

Administrators can enable an upload-first workflow for any non-child DocType.

When enabled, new records for that DocType show an **Upload Document** banner. Users can upload a PDF or image before filling the form. Frappe creates a Document Queue record, extracts the file, and opens the same review experience for the new target document.

To enable it:

1.  Open the DocType record.
2.  Enable **Upload First Workflow**.
3.  Save the DocType.

Only DocTypes with **Upload First Workflow** enabled are shown in the Document Queue target DocType selector.

  

## Ready For Review Banner

When a DocType has **Upload First Workflow** enabled, its list view can show a thin banner such as:

> 3 Documents ready for review

The banner includes a **View** action that opens Document Queue filtered to records for that target DocType in **Ready for Review** status.

  

## Permissions

By default:

-   **System Manager** can create, read, write, delete, export, print, email, report, and share Document Queue records.
-   **Desk User** can create records and can read, export, print, email, report, and share records they own.

Users also need permission to create and save the target DocType used during review.

## Developer API

### Queue Extraction

Use `enqueue_document_extraction` to run extraction as a background task.

```
from frappe.core.doctype.document_queue.document_queue import enqueue_document_extraction

task = enqueue_document_extraction(document_queue_name)
```

This marks the record **Queued** and creates a Background Task that extracts that one Document Queue record.

### Extract Immediately

Use `extract_document_queue_record` when extraction should run immediately in the current request or test.

```
from frappe.core.doctype.document_queue.document_queue import extract_document_queue_record

result = extract_document_queue_record(document_queue_name)
```

The result includes:

```
{
    "extraction_method": "pdfplumber",
    "extracted_text": "...",
    "raw_extraction_json": {
        "file": "invoice.pdf",
        "extraction_method": "pdfplumber",
        "pages": [],
    },
    "debug_output": [],
}
```

### Get Review Context

Use `get_document_review_context` to fetch the data needed by a review UI.

```
from frappe.core.doctype.document_queue.document_queue import get_document_review_context

context = get_document_review_context(document_queue_name)
```

Example response:

```
{
    "queue_name": "abc123",
    "status": "Ready for Review",
    "document_type": "Address",
    "created_document": None,
    "source_file": "/private/files/source.pdf",
    "source_file_url": "/private/files/source.pdf?fid=...",
    "extracted_text": "Extracted text...",
    "raw_extraction_json": {},
    "debug_output": "",
}
```

### Link A Queue Record To A Target Document

Use `link_to_document` after the target document is saved.

```
from frappe.core.doctype.document_queue.document_queue import link_to_document

link_to_document(
    document_queue=document_queue_name,
    document_type="Address",
    document_name=address_name,
)
```

This marks the Document Queue record **Completed**, stores the target document link, and attaches the source file to the target document.

### Count Records Ready For Review

Use `get_ready_for_review_count` to show a badge or banner for enabled target DocTypes.

```
from frappe.core.doctype.document_queue.document_queue import get_ready_for_review_count

count = get_ready_for_review_count("Address")
```

The count is returned only for DocTypes that have **Upload First Workflow** enabled.

## Building On Document Queue

Document Queue intentionally stops at extraction and review. It does not infer field mappings or create accounting, buying, selling, HR, or domain-specific documents by itself.

Downstream apps can build on top of it by:

-   consuming **Completed** Document Queue records
-   reading `extracted_text` for simple search or manual copy flows
-   reading `raw_extraction_json` for word coordinates, page data, and tables
-   adding app-specific field suggestions
-   adding app-specific validation before or after the target document is saved
-   adding email or bulk-upload intake that creates queue records

For example, an ERP app can filter completed queue records where `document_type` is `Purchase Invoice`, read the raw extraction JSON, and apply invoice-specific mapping in that app. The mapping logic stays outside Frappe Framework.

## Limitations

-   Document Queue does not perform AI or LLM-based field extraction.
-   Document Queue does not map extracted text into target DocType fields.
-   CSV and spreadsheet extraction are not supported by the built-in extractor.
-   OCR requires system tools such as `tesseract`; PDF OCR fallback also requires `pdftoppm`.
-   Extraction quality depends on the source document. Digital PDFs usually extract better than scanned or low-resolution images.
