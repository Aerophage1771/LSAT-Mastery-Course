# Curriculum Unit Phases

**Purpose:** Define the roadmap bet for introducing macro-level organization (Units or Phases) to the curriculum.
**Audience:** Maintainers, content editors, and future agents planning course improvements.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-03
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../product/course-content-map.md](../../product/course-content-map.md)

## Brief Problem Statement

- The current curriculum structure is a flat list of 57 modules.
- This flat structure is difficult for students to navigate and for operators to assemble into coherent study plans. It lacks a macro-narrative or clear progression phases.

## Proposed Direction

- Group the 57 modules into macro-level "Units" or "Phases" (e.g., "Phase 1: LR Foundations", "Phase 2: Advanced LR", "Phase 3: RC Core Skills", "Phase 4: Full Passage Strategy").
- Reflect these groupings in the UI navigation, `courseCatalog.json`, and operator documentation.
- Provide a conceptual "bridge" or summary at the start/end of each Phase.

## Why Now

- The course has grown to a substantial size (57 modules). A flat list is becoming unwieldy.
- This structural change requires relatively little new content but provides a massive UX and pedagogical upgrade.
- It aligns well with the existing `pathway-map.md` philosophy, but applies it to the student curriculum rather than just engineering roadmaps.

## Likely Upside

- Drastically improved student navigation and sense of progress.
- Easier marketing and syllabus communication (selling "Phases" instead of a list of 57 items).
- Better operator leverage for creating modular study plans.

## First Practical Milestone

- Define the Unit/Phase schema in `data/courseCatalog.json` (e.g., adding a `unit` or `phase` property to module entries or wrapping them in unit objects) while maintaining backward compatibility for existing route rendering.

## Likely Affected Surfaces

- `data/courseCatalog.json`
- `utils/courseCatalog.ts`
- UI components related to course navigation (e.g., sidebar, dashboard).
- Export scripts (`utils/export.ts`) to ensure they handle or ignore the new grouping level correctly.

## Dependencies

- Requires agreement on the pedagogical grouping of the existing 57 modules.

## Open Implementation Risks

- Changing the JSON schema might break downstream consumers if not handled carefully with backward-compatible parsing in `utils/courseCatalog.ts`.
