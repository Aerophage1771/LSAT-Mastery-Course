# Foundations Unit Reorganization

**Purpose:** Define the roadmap bet for moving fundamental skills earlier in the course sequence.
**Audience:** Maintainers, content editors, and future agents planning course improvements.
**Status:** active
**Source of truth:** yes
**Last reviewed:** 2026-04-17
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../product/course-content-map.md](../../product/course-content-map.md)

## User Problem

Cross-cutting, foundational skills such as "LSAT Math" (Module 22) and "Conditional Reasoning" (Module 21) are currently tacked onto the very end of the Logical Reasoning sequence. These concepts are often implicitly required to successfully navigate earlier question types like Sufficient Assumption, Necessary Assumption, and Flaw. Students are encountering questions requiring these skills before they have been formally taught them, causing unnecessary friction and confusion.

## Proposed Direction

Reorganize the Logical Reasoning curriculum map to create an explicit "Foundations" unit early in the course (e.g., between Unit 1: Identification and Unit 3: Flaws). Move the "Conditional Reasoning" and "LSAT Math" modules into this early unit so that these critical concepts act as prerequisites for the more complex argument analysis modules that follow.

## Why Now

The current sequencing creates a pedagogical anti-pattern where prerequisites are taught after the material that depends on them. Fixing this sequencing improves internal coherence and significantly smooths the learning curve for students, making the existing content much more effective without requiring massive new content creation.

## Dependencies

- Requires significant updates to `data/courseCatalog.json` and `data/websiteLessonCatalog.ts` to reflect the new sequence.
- May require updating the legacy remap table in `utils/courseCatalog.ts` if route IDs change.
- `docs/product/course-content-map.md` must be thoroughly updated to reflect the new canonical source shape.

## Risks

- Re-sequencing modules breaks existing route URLs and student progress tracking if not handled with care or backward-compatible redirects.
- Some early examples in current modules might need minor adjustments if they relied on the fact that students *hadn't* learned conditional logic yet (though this is unlikely to be a major issue).
- High risk of regression in routing or validation scripts if the catalog mappings are not perfectly synchronized.

## Likely Upside

- Drastically improves the logical flow and pedagogical soundness of the LR curriculum.
- Reduces student frustration by ensuring they have the necessary tools before facing complex question types.
- Provides a cleaner structural foundation for future advanced content additions.

## First Practical Milestone

Draft a complete, proposed re-mapping of `courseCatalog.json` showing the exact new positions and numbering for the relocated modules, and document the specific routing/progress migration strategy required to implement it safely.
