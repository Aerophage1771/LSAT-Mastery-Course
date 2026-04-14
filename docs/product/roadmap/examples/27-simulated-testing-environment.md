# Simulated Full-Length Testing Environment

**Purpose:** Define the roadmap bet for introducing full-length simulated practice exams.
**Audience:** Maintainers, curriculum designers, and future agents planning product expansions.
**Status:** draft
**Source of truth:** yes
**Related docs:** [README.md](../README.md), [vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

Students currently interact with the question bank in bite-sized study modes or via discrete modules. While excellent for targeted learning, this fails to replicate the endurance, timing constraints, and psychological pressure of the actual LSAT. Without a built-in simulation environment, users must patch together disparate resources or leave our platform entirely to gauge their true readiness.

## Proposed Direction

Introduce a "Simulated Testing Mode" as a new, standalone learning surface. This mode will assemble questions from the existing question bank into a strictly timed, full-length exam structure (four 35-minute sections). The interface should mimic the official test environment, enforcing strict progression, no immediate feedback, and restricted pausing unless specific accommodations are enabled.

## Why Now

The course content is maturing, and users are demanding ways to test their holistic knowledge. A simulated testing environment leverages the existing, validated question repository but drastically increases the perceived value of the product by serving as a comprehensive benchmark tool.

## Likely Upside

- **Higher Retention:** Keeps students within the LSAT Mastery Course ecosystem for both learning and assessment.
- **Enhanced Product Value:** Bridges the gap between a "study guide" and a "complete prep solution."
- **Data Gathering:** Lays the foundation for predicting actual exam scores based on platform performance.

## Dependencies and Risks

- **Dependencies:** Requires robust session-state management (building upon `localStorage`) to handle potential disconnections over a ~2.5 hour continuous block.
- **Risks:** Creating a disjointed UI that diverges from the official test format. High memory/performance requirements on the client-side SPA if loading massive question datasets simultaneously.

## First Practical Milestone

Implement a "Single Section Simulation" MVP. This involves creating a new route (`/assessment/simulation`), loading a static 35-minute section from existing Logical Reasoning content, and implementing a strict countdown timer with an end-of-section submission screen without immediate answer checking.