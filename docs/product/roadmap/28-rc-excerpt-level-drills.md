# RC Excerpt-Level Drills

**Purpose:** Define the roadmap bet for introducing intermediate, excerpt-level practice in Reading Comprehension.
**Audience:** Maintainers, content editors, and future agents planning course improvements.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-03
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../product/course-content-map.md](../../product/course-content-map.md)

## Brief Problem Statement

- There is currently a steep jump between learning an RC concept (Modules 25-40) and tackling full, 4-paragraph practice passages (Modules 41-48, 50-57).
- Students lack the opportunity to practice identifying structures or question types in isolation before dealing with the cognitive load of a complete passage.

## Proposed Direction

- Introduce excerpt-level (paragraph-level) drills between the concept modules and the full practice passages.
- These drills would present a single paragraph or a pair of sentences and ask targeted questions about structure, main point, or author attitude.
- This serves as a "bridge" learning phase, similar to how LR questions act as short, self-contained exercises.

## Why Now

- The course already has a solid foundation of concept definitions and full practice passages. Bridging the gap is the logical next step for improving the pedagogical flow.
- We have the necessary technical infrastructure to present partial text and isolated questions.

## Likely Upside

- Lower cognitive load for initial practice, leading to better student confidence and skill acquisition.
- More granular data on where students are struggling (e.g., struggling with paragraph comprehension vs. whole-passage synthesis).
- Creates reusable, atomic content blocks that can be mixed into review queues.

## First Practical Milestone

- Create a prototype module that uses paragraph-length excerpts to teach and drill the "Author Attitude" and "Paragraph Function" concepts, pulling from existing full passages.

## Likely Affected Surfaces

- `data/courseCatalog.json`
- New module definitions (e.g., intermediate practice modules).
- The `QuestionPassageCard` component might need adjustments to handle shorter, standalone excerpts elegantly.

## Dependencies

- Requires slicing existing passages into meaningful excerpts and writing/adapting questions that can be answered solely from the excerpt.

## Open Implementation Risks

- Sourcing or adapting questions that don't rely on the context of the full passage can be tricky and requires careful editorial review.
