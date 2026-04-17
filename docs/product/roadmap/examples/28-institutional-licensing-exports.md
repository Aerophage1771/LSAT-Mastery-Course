# Institutional Licensing Exports

**Purpose:** Develop white-labeled, curriculum-aligned export bundles to support B2B sales and institutional licensing (Product Packaging & Exportable Assets).
**Audience:** Product strategy, technical writers, and business development.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-28
**Related docs:** [../README.md](../README.md), [../15-export-workflow-trust.md](../15-export-workflow-trust.md)

## User Problem
Tutors, prep centers, and university pre-law programs want to use our structured curriculum and question bank, but they need to integrate it into their own Learning Management Systems (LMS) or print it for offline classroom use. The current web-only SPA model forces them to use our platform directly, missing a massive opportunity for institutional bulk licensing.

## Proposed Bet
Build a dedicated "Export for Institutions" pipeline that generates heavily customized, white-labeled curriculum assets. This includes generating high-fidelity, print-ready PDF workbooks using `jspdf` and structured JSON/CSV dumps of the question bank formatted specifically for LMS ingestion (e.g., Canvas or Blackboard standard formats). This packaging turns the static codebase into a modular, B2B licensing asset.

## Why Now?
Our current export capabilities (`utils/export.ts`) already support basic client-side PDF generation. Extending this to support cover pages, custom branding inputs, and bulk JSON packaging leverages existing technical foundations to open up an entirely new revenue and distribution channel without needing a persistent backend.

## Dependencies
- Robust metadata tagging on all questions to ensure exports can be categorized by difficulty, topic, and source PT.
- Enhancements to the existing `jspdf-autotable` implementation to support advanced formatting, pagination, and dynamic headers/footers for print quality.
- Clear legal and content policy guidelines regarding the export of real LSAT material vs. invented examples.

## Risks
- **Content Security:** Exporting raw JSON of the entire question bank makes it highly vulnerable to piracy or unauthorized redistribution.
- **Client-Side Memory Limits:** Generating a PDF workbook of 500+ questions entirely in the browser may cause out-of-memory crashes on lower-end devices.
- **Formatting Fragility:** Ensuring complex logical reasoning stimuli and RC passages render perfectly in PDF format across various screen sizes and fonts is notoriously difficult.

## First Practical Milestone
Create a "Chapter Export" feature that allows an administrative user to download a single lesson (Concept + Drill questions) as a cleanly formatted, branded PDF directly from the browser. This validates the advanced PDF layout logic before attempting full-course book generation.
