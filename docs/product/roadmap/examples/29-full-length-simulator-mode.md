# 29. Full-Length Simulator Mode

**Purpose:** Define an assessment systems bet to introduce a strictly-timed, multi-section testing environment mimicking the official digital LSAT.
**Audience:** Product managers, testing system engineers, and UI designers.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-18
**Related docs:** [README.md](../README.md), [vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

Students use the LSAT Mastery Course for deep learning, drills, and untimed practice. However, when it comes time to take a full-length, timed practice test to assess their true readiness, they have to leave our platform and use a third-party tool or the official LawHub interface. This breaks the learning loop, making it difficult to pull their practice test mistakes back into our Review Queue and Mistake Journal seamlessly.

## Proposed Bet

Build a "Full-Length Simulator Mode" that accurately replicates the strict conditions of the digital LSAT.
- Assemble full PrepTests (PTs) using our existing question bank repositories.
- Implement strict section timing (35 minutes per section), a 10-minute intermission, and a UI that mimics the official testing environment (flagging, collapsing answer choices, specific text highlighting).
- Auto-score the exam and instantly route missed questions to the student's existing Mistake Journal for integrated review.

## Why Now?

We have already completed the massive effort of encoding real LSAT material into our question bank repositories (module48, module49, module53). The underlying data structure exists. By building the assessment UI on top of this data, we close the loop on the student journey, allowing them to learn, drill, and test entirely within our ecosystem. This significantly increases the perceived value of the product as an all-in-one solution.

## Dependencies

- **Question Bank Completeness:** Requires entire, intact PTs to be fully encoded in the question banks without missing questions.
- **Scoring Scales:** Need a mechanism to map raw scores to the 120-180 scaled score for each specific PT, requiring a new data table for score conversions.

## Risks

- **UI Fidelity:** If the simulator does not feel exactly like the real digital LSAT, students will not trust the score and will revert to LawHub.
- **State Management:** A full 2.5-hour test requires extremely robust state management to ensure progress is not lost if the browser crashes or the user accidentally refreshes, relying heavily on rock-solid `localStorage` integration.

## First Practical Milestone

Build an "Endurance Section" mode that allows a user to take a single, strictly-timed 35-minute Logical Reasoning section drawn from a single PT, implementing the official-style UI and saving the results to the Mistake Journal, proving the UI and state management before scaling to multi-section tests.