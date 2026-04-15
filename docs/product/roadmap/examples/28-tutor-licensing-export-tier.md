# Tutor Licensing and B2B Export Tier

**Purpose:** Define the roadmap bet for creating specialized export workflows for independent tutors and institutional partners.
**Audience:** Product contributors, maintainers, and content editors deciding what to build next.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-15
**Related docs:** [README.md](./README.md), [../vision-and-decision-filter.md](../vision-and-decision-filter.md), [../15-export-workflow-trust.md](../15-export-workflow-trust.md)

## User Problem

Independent LSAT tutors and small test-prep organizations love our content and methodology, but they cannot easily use the client-only SPA to assign specific, customized subsets of questions or track their students' offline progress in a unified way. The current export formats are geared towards internal platform migrations or generic student offline use, lacking professional branding and assignment-focused structures.

## Proposed Bet

Build a "Tutor/B2B Export Tier" that allows licensed educators to generate branded, customized PDF packets and specialized interchange JSON files. This tier will include features like "Tutor Notes" fields, customizable question subset selection, and assignment tracking mechanisms built directly into the exported assets.

## Why Now

The application already has robust, client-side export capabilities (`canonical-course`, `pdf`, `csv`) implemented in `utils/export.ts` using `jspdf`. Extending this infrastructure opens a clear, new monetization and distribution channel without requiring a heavy backend SaaS pivot.

## Dependencies

- **Export Infrastructure:** Enhancements to `utils/export.ts` to support variable layouts and conditional rendering (e.g., hiding answer keys).
- **UI Expansion:** A new "Tutor Mode" UI toggle or dedicated dashboard view to manage custom packet assembly and branding inputs.

## Risks

- **Content Leakage/Piracy:** High-quality, branded PDFs are easily shared; tutors might redistribute exported materials beyond their licensed student base.
- **Scope Creep:** Building too many custom branding options could bloat the client-side export logic and detract from the core student experience.

## First Practical Milestone

Add a "Tutor Packet" option to the existing PDF export dialog. This initial version will allow the user to select a specific lesson or question set, generate a PDF with added blank space for student workspace/notes, include placeholder fields for tutor annotations, and explicitly move all correct answer keys and explanations to the very end of the document.
