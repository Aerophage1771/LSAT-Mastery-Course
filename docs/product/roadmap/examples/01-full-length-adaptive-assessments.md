# Full-Length Adaptive Assessments

**Purpose:** Define a net-new product bet to introduce adaptive practice exams to the LSAT Mastery Course.
**Audience:** Maintainers, curriculum designers, and future agents planning product expansions.
**Status:** proposed
**Source of truth:** yes
**Related docs:** [../README.md](../README.md), [../vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

Students preparing for the LSAT need realistic, full-length exam simulations to build stamina and assess their readiness. The current question bank allows for isolated practice but lacks a unified, adaptive assessment experience that mimics the modern digital LSAT. Students must leave the product to take full exams elsewhere, breaking the continuous learning loop and fracturing their performance data.

## Proposed Bet

Build a "Full-Length Adaptive Assessment" engine that compiles questions from the existing question bank into complete, timed exams. This system will feature:
- A new dedicated assessment interface simulating the real digital testing environment.
- Adaptive logic that adjusts the difficulty of subsequent sections based on performance in earlier sections, matching the new exam format.
- Comprehensive post-exam analytics that tie mistakes back directly to specific curriculum modules and lessons.

## Why Now

The course content is stable, and the question bank validation scripts ensure high structural integrity. As students progress deeper into the curriculum, the lack of full-length exams becomes the primary reason for churn or reliance on third-party tools. Adding this capability significantly increases the standalone value of the product and closes the loop between learning and assessment.

## Dependencies

- Requires an expanded subset of untouched PTs in the question bank reserved exclusively for full-length exams to ensure validity.
- The UI must be updated to support timed, full-section interfaces without access to immediate "check answer" feedback until completion.

## Risks

- **Content Exhaustion:** Reserving questions for full exams reduces the pool available for targeted module drills.
- **Complexity:** Building an accurate adaptive algorithm requires careful calibration of question difficulty metrics, which may currently be subjective or incomplete.
- **State Management:** Preserving a resilient session state over a 2+ hour exam using only `localStorage` is risky and could result in lost progress if the browser crashes or clears data.

## First Practical Milestone

Implement a non-adaptive, timed "Diagnostic Exam" using a fixed set of questions, accompanied by a basic post-exam scoring summary that links to relevant curriculum lessons.
