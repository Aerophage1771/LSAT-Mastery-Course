# Institutional LMS Licensing Export

**Purpose:** Define the roadmap bet for Institutional LMS Licensing Export.
**Audience:** Maintainers, product contributors, and future agents planning course improvements.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-16
**Related docs:** [README.md](../README.md), [vision-and-decision-filter.md](../vision-and-decision-filter.md), [../../../technical/architecture.md](../../../technical/architecture.md)

## User Problem

Pre-law advisors and institutional partners (e.g., universities, test-prep companies) want to license our curriculum but cannot adopt a standalone client-side SPA. They need to import the course directly into their existing Learning Management Systems (LMS) like Canvas or Blackboard to track student progress natively.

## Proposed Bet

Extend the `utils/export.ts` capabilities to support an IMS Common Cartridge or SCORM-compliant package export. This will allow the entire course (lessons, question blocks, and metadata) to be seamlessly packaged into a zip file that institutional partners can natively import into Canvas, Blackboard, or Moodle.

## Why Now

We already have a structured JSON curriculum export (`canonical-course` and `interchange-course`) that cleanly separates content from the presentation layer. Transforming this JSON into standard LMS XML manifests is a high-leverage move to open a B2B revenue channel without changing the core client-side architecture of our app.

## Dependencies

- Existing curriculum structure stability.
- Client-side zip generation capability (e.g., utilizing `jszip`).
- Validated mapping between our `ModuleData`/`LessonData` schema and the target LMS schema (like IMS Common Cartridge).

## Risks

- Generating valid LMS XML manifests client-side might introduce performance or memory issues for large courses.
- Different LMS platforms have subtle variations in how they interpret Common Cartridge or SCORM, requiring extensive testing.
- The interactive nature of our `QuestionPassageCard` components might degrade if the target LMS does not support rich interactive imports.

## First Practical Milestone

Implement a proof-of-concept export function in `utils/export.ts` that generates a basic IMS Common Cartridge (`imsmanifest.xml`) containing just the module list and lesson titles. Validate that this minimal package can be successfully imported into a free Canvas sandbox instance.