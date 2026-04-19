# RC Core Lesson Parity and Methodological Depth

**Purpose:** Define the roadmap bet for expanding Reading Comprehension core skill modules to match Logical Reasoning's structural depth and explicit step-by-step methodology.
**Audience:** Maintainers, content editors, and product contributors prioritizing curriculum investments.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-05-15
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md), [../course-content-map.md](../course-content-map.md)

## User Problem

Students transitioning from the Logical Reasoning (LR) track to the Reading Comprehension (RC) track encounter a noticeable drop in instructional depth. While LR modules (e.g., `Argument Part`, `Necessary Assumption`) offer robust, repeatable step-by-step methods and deep conceptual breakdowns, the RC core skill modules (route ids 24-35) remain structurally thin. This discrepancy forces students to rely heavily on intuition rather than a systematic, repeatable process, increasing cognitive load and decreasing confidence.

## Proposed Direction (The Bet)

We propose an aggressive expansion of the RC core skill modules (24-35) to achieve structural and methodological parity with LR. This means moving beyond generic framing and implementing concrete, repeatable "Step-by-Step" lessons for every RC skill category (e.g., `Step-by-Step: Main Idea`, `Step-by-Step: Application`). Each module will be built out to follow the canonical spine: Introduction, Step-by-Step method, Drill, Advanced practice, and a Reference Guide.

## Why Now

The recent audit (`course-content-map.md`) explicitly flags RC core modules 24-35 as "still thin," noting that even one missing topic is a meaningful gap. Furthermore, we have successfully standardized the RC reading-method vocabulary and passage-style overlays (debate, single-position, etc.). We now have the foundational framework required to anchor a deeper, more systematic instructional spine for RC without introducing contradictory methodologies. Addressing this now creates a stronger, more coherent offer before we build further practice or assessment features on top of a weak foundation.

## Dependencies

- Completion of the canonical naming enforcement bet to ensure all new lessons slot cleanly into the expected architecture.
- Alignment on the specific, repeatable steps for each RC question category.
- Availability of vetted, repository-backed questions from Module 49 (RC Question Bank) to populate the new Drill and Advanced lessons without inventing interactive cards.

## Risks

- **Methodological Drift:** The expanded steps might become too complex or prescriptive, slowing students down rather than providing leverage.
- **Content Exhaustion:** Sourcing enough high-quality, distinct questions from the existing repository to fill out the new Drill and Advanced sections for every core module might strain the available unassigned inventory.

## Likely Upside

- **Operator Leverage:** A standardized, deep RC spine makes it significantly easier to diagnose student errors, assemble targeted practice sets, and write consistent explanations.
- **Stronger Offer:** A curriculum that demonstrably provides the same level of rigorous, systematic instruction for RC as it does for LR is a significant differentiator and addresses a common pain point.
- **Reusable System:** The step-by-step framework established here will serve as a template for evaluating and integrating the Advanced RC track later.

## First Practical Milestone

Draft and integrate the complete lesson spine (Intro, Step-by-Step, Drill, Advanced, Ref) for the highest-leverage RC core module (e.g., Module 24: Main Idea) using strictly repository-backed questions, proving the template before rolling it out to modules 25-35.
