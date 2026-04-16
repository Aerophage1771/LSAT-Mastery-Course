# Client-Side Predictive Weakness Engine

**Purpose:** Define the roadmap bet for a Client-Side Predictive Weakness Engine.
**Audience:** Maintainers, product contributors, and future agents planning course improvements.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-04-16
**Related docs:** [README.md](../README.md), [vision-and-decision-filter.md](../vision-and-decision-filter.md)

## User Problem

Students currently navigate the course in a linear fashion, regardless of their individual proficiency. Without a backend to analyze their performance, they struggle to identify which specific logical concepts (e.g., Sufficient Assumption vs. Flaw) are holding back their score. They want the course to automatically recommend review lessons based on their practice mistakes.

## Proposed Bet

Build a lightweight, localized analytics engine using `localStorage` (via our existing obfuscation utilities) to track question bank interactions and map missed questions to specific module concepts. When a student consistently misses questions tagged with a certain module ID, the course dashboard will dynamically generate a "Recommended Review" list pointing to those foundational lessons.

## Why Now

The application is already a zero-backend SPA that manages progress via `localStorage`. The course catalog already structurally maps question types to specific learning modules. We have all the necessary client-side data to provide a personalized, adaptive learning loop without needing a complex database infrastructure.

## Dependencies

- Implementation of the Question Bank study modes to ensure rich interaction data is captured.
- Refinement of the lesson-to-question linkage metadata to ensure every practice question maps reliably back to a core concept lesson.
- Storage utility updates to handle aggregating question performance data efficiently without blowing up `localStorage` quotas.

## Risks

- Over-engineering the client-side data model could lead to performance degradation or complex `localStorage` migration headaches.
- If the tagging or linkage between questions and lessons is inaccurate, the recommendations will frustrate users rather than help them.
- Relying strictly on client storage means recommendations cannot currently follow a user across devices.

## First Practical Milestone

Add a hook to the `QuestionPassageCard` component that logs incorrect answers (and their associated tags/IDs) to `localStorage`. Display a simple "Recent Mistakes" list on the home dashboard that links to the missed questions, setting the foundation for the full predictive recommendation engine.