# In-Browser Content Diagnostics Route

**Purpose:** Define the roadmap bet for creating a client-side route to visually audit question-bank integrity and answer-key drift.
**Audience:** Maintainers, content editors, and future agents planning course improvements.
**Status:** draft
**Source of truth:** yes
**Last reviewed:** 2026-03-29
**Related docs:** [README.md](./README.md), [vision-and-decision-filter.md](./vision-and-decision-filter.md)

## User Problem
Currently, auditing explanation coverage, identifying missing questions, and detecting answer-key drift relies heavily on reading terminal outputs from Node scripts (`validate-questions.mjs`, `validate-lesson-question-linkage.mjs`) or parsing raw markdown reports. This creates a high barrier for non-technical editors and makes it difficult to visually spot contextual errors or formatting issues in the rendered output.

## Proposed Direction (Bet)
Build a dedicated, hidden SPA route (e.g., `/admin/diagnostics` or `/internal/content-audit`) powered entirely by the existing client-side repository data. This dashboard will parse the local module files and render visual indicators for missing questions, explanation length anomalies, and answer-key discrepancies, reusing the same client-side logic that powers the live course.

## Why Now
As the content repository grows, terminal scripts are becoming less effective at conveying the *quality* of content, even if they perfectly enforce structural integrity. Providing a visual interface empowers editors to rapidly review explanation clarity and formatting parity without requiring backend systems or complex local development environments.

## Likely Upside
This approach offers massive operator leverage by providing immediate, visual feedback on content quality and integrity directly within the app's native rendering environment. It strengthens the "client-only" architecture by proving that complex admin and audit tools can be built without a backend, creating a reusable template for future internal tooling.

## First Practical Milestone
Create a new hidden React route (`/internal/audit/questions`) that imports the registered `module48` files, renders a list of all PT IDs, and visually flags any ID that is missing an explanation or has a suspiciously short explanation string.
