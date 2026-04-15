# RC Concept Module Depth

**Purpose:** Define the roadmap bet for increasing the depth of Reading Comprehension concept modules.
**Audience:** Maintainers, content editors, and future agents planning course improvements.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-03
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../product/course-content-map.md](../../product/course-content-map.md)

## Brief Problem Statement

- The current RC Concept Modules (Modules 25-40) are very thin compared to Logical Reasoning modules, often only containing an "Introduction" and a "Step-by-Step Approach."
- This lack of depth leaves a gap in pattern recognition, trap answer identification, and specific strategy drills for RC question types.

## Proposed Direction

- Flesh out RC concept modules to match the depth of LR modules.
- Add lessons for "Pattern Recognition", "Trap Answer Types", and common structural templates for each question type.
- This creates a more comprehensive and balanced curriculum across both major LSAT sections.

## Why Now

- The core RC question types are already mapped out structurally (Modules 25-40), making it easy to identify where the gaps are.
- As the platform matures, the discrepancy in depth between LR and RC becomes a more noticeable quality gap for students.

## Likely Upside

- Better student comprehension of RC question types before they tackle full practice passages.
- A more symmetrical and logically coherent course catalog.
- Higher value perception of the RC section of the course.

## First Practical Milestone

- Audit the existing RC Concept Modules (25-40) and draft a detailed lesson outline for at least two high-impact question types (e.g., Main Idea, Inference) that includes Pattern Recognition and Trap Answer lessons.

## Likely Affected Surfaces

- `data/courseCatalog.json`
- `modules/module25.tsx` through `modules/module40.tsx`
- `docs/product/course-content-map.md`

## Dependencies

- Content authoring time to write the new lessons.
- Validation scripts must be updated to account for new lesson links if practice questions are embedded.

## Open Implementation Risks

- Adding too much theoretical content without enough immediate practice might overwhelm students.
