# RC Skill Depth and Drills

**Purpose:** Define the roadmap bet for adding intermediate skill drills to Reading Comprehension modules.
**Audience:** Maintainers, content editors, and future agents planning course improvements.
**Status:** active
**Source of truth:** yes
**Last reviewed:** 2026-03-29
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../../technical/content-and-validation.md](../../technical/content-and-validation.md)

## User Problem

- While Logical Reasoning modules average 10+ lessons with dedicated "Drill" and "Traits of High Difficulty" steps, RC core skill modules average just 2-4 lessons.
- The transition from a short "Step-by-Step Approach" to full passages is too abrupt for many users, leaving a structural hole in intermediate skill acquisition.
- Users struggle to isolate specific RC skills (like identifying author attitude or tracking structural pivots) because practice happens almost exclusively at the full-passage level.

## Proposed Direction (The Bet)

- Expand RC core skill modules to mirror the pedagogical depth of LR modules.
- Introduce paragraph-level and single-sentence intermediate drills before full-passage application.
- Standardize RC skill module structures to include: `Introduction`, `Step-by-Step: [Type]`, `Drill: Paragraph Analysis`, `Traits of High-Difficulty: [Type]`, and `Reference Guide`.

## Why Now

- The core RC taxonomy and basic module structure are already established and validated in `courseCatalog.json`.
- Filling these gaps directly aligns with the roadmap vision filter item: "Improve study-loop clarity without inventing missing backend systems."
- It strengthens the course map by addressing visibly imbalanced lesson coverage between the LR and RC disciplines.

## Likely Upside

- Creates a stronger, more comprehensive RC offer that builds user confidence progressively.
- Provides discrete, reusable drill content that could later be integrated into study modes or daily practice queues.
- Standardizes lesson distribution, making the curriculum easier to navigate and set expectations for.

## First Practical Milestone

- Add intermediate "Drill" lessons using short, real LSAT paragraph excerpts to three high-value RC skill modules: `Main Idea`, `Inference`, and `Structure`.
