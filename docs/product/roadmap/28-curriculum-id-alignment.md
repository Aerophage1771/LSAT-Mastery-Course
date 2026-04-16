# Curriculum ID Alignment

**Purpose:** Address the structural hole and maintenance burden caused by the divergence between route module IDs and content module IDs.
**Audience:** Product contributors deciding what is worth planning next.
**Status:** proposed
**Source of truth:** yes
**Last reviewed:** 2026-03-28

## User Problem
The divergence between route IDs (what the user sees, e.g., Route 22) and content module IDs (where the data lives, e.g., Module 59) creates a significant cognitive overhead for maintainers and content editors. This legacy remap table (`ROUTE_TO_CONTENT_MODULE_ID`) is a frequent source of bugs, makes writing validation scripts harder, and complicates the mental model required to contribute to the course. While users don't see this directly, it slows down feature development and content updates, ultimately impacting the speed at which we can improve the course.

## Proposed Direction
Undertake a one-time, comprehensive migration to align route module IDs directly with their content module IDs. This will involve renaming directories in `modules/`, updating `Module[Number].tsx` files, rewriting the remap table, and ensuring all hardcoded references in tests and scripts are updated. The goal is a 1:1 mapping where Route X always uses Content Module X.

## Why Now
The longer we wait, the more content and code will be built on top of this misaligned structure. It is a foundational technical debt item that makes every subsequent content-related bet harder to execute. Fixing it now creates leverage for all future curriculum and catalog work.

## Dependencies
- Thorough understanding of the current `ROUTE_TO_CONTENT_MODULE_ID` mapping in `utils/courseCatalog.ts`.
- Updates to `scripts/lib/registeredLessons.mjs` and related validation tools.
- Careful coordination to ensure live routes (`/module/:moduleId`) either maintain their current URLs or are properly redirected if the ID changes (though ideally, the underlying content ID changes to match the existing route ID to avoid breaking bookmarks).

## Risks
- High risk of breaking existing links or user progress if the migration is not perfect, as `localStorage` data might be tied to specific IDs.
- Widespread file changes could cause merge conflicts with other active bets.

## Likely Upside
- Massive reduction in cognitive load for operators and engineers.
- Simpler validation scripts and reduced bug surface area.
- Faster execution on future content expansion tasks.

## First Practical Milestone
Create a detailed migration plan document mapping out exactly which files need to change and how to handle backward compatibility for user progress in `localStorage`. Then, execute a dry-run migration on a small subset of non-critical modules (e.g., Modules 50+) to test the process.
