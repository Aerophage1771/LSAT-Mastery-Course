# Educator Licensing Portal and Curriculum Export

**Purpose:** Introduce a B2B product tier allowing tutors and institutions to license and remix the LSAT Mastery Course content.
**Audience:** Maintainers, product managers, and partnership teams.
**Status:** proposed
**Source of truth:** yes
**Related docs:** [../README.md](../README.md), [../vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

Independent LSAT tutors and small test-prep organizations spend hundreds of hours creating their own curriculum or relying on generic, low-quality materials. They need a high-quality, structured curriculum they can use with their students, but they also want the ability to customize lesson sequences, extract specific question sets, and brand the materials. Currently, the course is locked as a monolithic B2C consumer application.

## Proposed Bet

Create an "Educator Toolkit" tier that packages the course as a licensable product. This includes:
- A new interactive export builder that allows educators to select specific modules, lessons, and question banks to generate custom PDF or interactive HTML course packets.
- Enhanced metadata and tagging on all content to support advanced filtering (e.g., "Find all Strengthen questions with causal reasoning").
- A simplified, white-label version of the course UI designed for classroom projection or screensharing.

## Why Now

The underlying export infrastructure (`utils/export.ts` using `jspdf`) already exists and proves the feasibility of robust client-side generation. The core curriculum is complete enough to be valuable as a standalone asset. Unlocking a B2B revenue stream or broader distribution network is a high-leverage move that requires relatively few net-new content additions, relying instead on better packaging of what we already have.

## Dependencies

- Expanding the current export utilities to support partial/custom selection rather than full-course dumps.
- Establishing clear licensing terms and watermarking/attribution logic in the exported assets to protect IP.

## Risks

- **Cannibalization:** Tutors using the materials might reduce direct B2C signups.
- **Maintenance Burden:** Supporting multiple custom export formats (PDF, HTML, potentially LMS-compatible formats like SCORM) increases the surface area for visual bugs.
- **Data Leakage:** Bypassing the XOR obfuscation used in `localStorage` by providing raw exports requires careful management to ensure only authorized users access the raw content.

## First Practical Milestone

Ship an "Educator Export Mode" in the UI that allows a user to select an arbitrary list of lessons and generate a single, nicely formatted, unbranded PDF syllabus and question packet.
