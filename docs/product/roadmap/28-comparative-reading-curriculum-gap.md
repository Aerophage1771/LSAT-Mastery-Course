# Comparative Reading Curriculum Gap

**Purpose:** Define the roadmap bet for introducing Comparative Reading into the curriculum.
**Audience:** Maintainers, content editors, and future agents planning course improvements.
**Status:** active
**Source of truth:** yes
**Last reviewed:** 2026-04-17
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../product/course-content-map.md](../../product/course-content-map.md)

## User Problem

The current curriculum completely lacks a dedicated module or lesson sequence for "Comparative Reading" (Passage A vs. Passage B). Comparative Reading is a mandatory and significant portion of the modern LSAT Reading Comprehension section. By not visibly addressing it, the course leaves a major structural hole, forcing students to figure out the unique strategies for these dual passages on their own.

## Proposed Direction

Create a net-new module dedicated explicitly to Comparative Reading methodology. This module should cover the unique approach to reading dual passages (e.g., reading Passage A, answering A-only questions, then reading Passage B), identifying points of agreement and disagreement, and tackling the specific question types that only appear in Comparative Reading sets.

## Why Now

This is a critical omission in the course's coverage of the modern LSAT. As the course matures from a foundational tool to a comprehensive mastery course, glaring omissions like Comparative Reading become unacceptable and undermine the product's credibility.

## Dependencies

- Requires identifying and integrating Comparative Reading sets from the existing question banks.
- Will require adding a new module definition to `data/courseCatalog.json` and `data/websiteLessonCatalog.ts`.
- Needs new routing logic or mapping if the module ID disrupts the existing LR/RC split sequence.

## Risks

- Requires careful integration into the existing RC sequence to ensure it flows logically after foundational RC skills are established.
- May require updates to the `QuestionPassageCard` component to properly render dual passages side-by-side or sequentially if not already supported.

## Likely Upside

- Closes the largest visible gap in the Reading Comprehension curriculum.
- Increases the perceived completeness and value of the LSAT Mastery Course.
- Directly addresses a known pain point for students facing the modern LSAT format.

## First Practical Milestone

Audit the existing RC question banks (`module49`, `module53`) to identify all available Comparative Reading passage sets and outline a 5-lesson module structure based on these available resources.
