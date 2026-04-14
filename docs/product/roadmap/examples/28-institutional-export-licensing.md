# Institutional Export and Licensing Workbooks

**Purpose:** Define the roadmap bet for upgrading client-side exports to support B2B and institutional licensing.
**Audience:** Product strategy, engineering, and business development stakeholders.
**Status:** draft
**Source of truth:** yes
**Related docs:** [README.md](../README.md), [vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

Independent tutors and institutional test prep programs desire high-quality, printable materials to use in physical classrooms or one-on-one sessions. Our current platform is heavily skewed towards individual, digital-first learning. The existing client-side PDF export (using `jspdf`) is functional but lacks the polish, layout controls, and specialized outputs (like separate answer keys) required for professional distribution.

## Proposed Direction

Overhaul the PDF export workflow located in `utils/export.ts`. We will leverage the existing `jspdf` and `jspdf-autotable` implementation to create customizable, multi-part document generations. This includes:
1. High-fidelity layouts mirroring professional workbooks.
2. The ability to generate matched "Student Version" (questions only) and "Instructor Version" (questions + answer keys + rationale).
3. Watermarking or licensing stamps directly embedded in the generated PDFs.

## Why Now

The existing question bank and curriculum are robust enough to stand alone as physical resources. Tapping into the institutional and tutor markets represents a significant, net-new revenue stream that requires no new underlying curriculum content—only better packaging of what already exists.

## Likely Upside

- **New Revenue Channels:** Unlocks bulk licensing and B2B sales.
- **Brand Reach:** Physical materials put the LSAT Mastery Course brand in classrooms and tutoring centers.
- **Offline Accessibility:** Provides a high-quality offline study option for users who prefer print over digital screens.

## Dependencies and Risks

- **Dependencies:** Relies heavily on the continued stability of `jspdf` and precise management of client-side memory during large document generation.
- **Risks:** Complexities in rendering specialized formatting (e.g., italics, bolding via `**`) accurately in the PDF output. Maintaining visual consistency across different browsers' PDF generation engines.

## First Practical Milestone

Create a prototype "Tutor Export" function within a single lesson view. This will generate a two-part PDF: a cleanly formatted list of the lesson's practice questions, followed by a separate page containing the correct answers and the associated rationales.