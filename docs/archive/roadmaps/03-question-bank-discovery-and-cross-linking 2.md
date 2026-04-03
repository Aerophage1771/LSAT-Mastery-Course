# Question-Bank Discovery and Cross-Linking

**Purpose:** Define the roadmap bet for making the standalone question bank easier to navigate and better connected to the curriculum.  
**Audience:** Product contributors and engineers planning practice workflows, search, or curriculum cross-links.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md), [../../technical/architecture.md](../../technical/architecture.md)

## Brief Problem Statement

- The question bank already exists as a powerful separate study surface, but discovery can still feel detached from lesson study.
- Cross-links should help students move between curriculum and practice without muddying source-of-truth ownership.

## Why This Matters Now

- Better discovery increases the value of the real-question repository that already ships with the app.
- Cross-linking is more useful after authenticity and naming rules are clear.

## Strategic Fit

- Primary category: study outcome improver
- Secondary category: packaging enabler
- Repo fit: strong, because the route, filter, and export surfaces already exist

## Preflight Questions

- What specific practice-discovery task is currently hard?
- Is the missing link from lesson to question bank, question bank to lesson, or within the question bank itself?
- Does the improvement preserve the question bank as a standalone route?
- Which filters or labels depend on canonical naming or audit data staying clean?

## Go / No-Go Gate

### Go when

- the change clearly improves findability of real questions or lesson-to-practice movement
- it uses existing repository-backed question data and route structure
- it can be tested without inventing new content sources

### Defer when

- the improvement depends on unresolved naming or lesson-linkage work
- the use case is real but the right surface is still unclear

### Not now when

- the proposal mostly changes visual styling without improving discovery
- the idea turns the question bank into a different product surface with new ownership rules

## Current State In The Repo / Product

- `/question-bank` supports filtering, search, expansion, answer feedback, and exports.
- Question repositories live under `modules/module48`, `modules/module49`, and `modules/module53`.
- Lesson drill references and PT-linking support already exist, but the overall discovery flow can still be tighter.

## Target Outcome

- Students can find the right practice faster.
- Lesson-to-bank and bank-to-lesson connections are clearer where authentic source data supports them.
- Cross-links remain faithful to canonical naming and question provenance.

## Recommended Implementation Mode

- Small interaction and labeling improvements grounded in existing data
- Manual browser review for filter, expansion, and deep-link behavior
- Shared naming helpers instead of one-off label logic

## Likely Affected Surfaces

- Question bank
- Search
- Lesson drill references
- Dashboard or module surfaces that point into practice

## Likely Affected APIs / Data Touchpoints

- question repository metadata
- drill cross-reference data
- course catalog titles
- question-bank filter and export state

## Dependencies

- Clean question ids and lesson-linkage expectations
- Canonical naming that does not append audit noise into display labels
- Stable question-bank route behavior

## Phased Implementation Path

1. Tighten labeling and current cross-link accuracy.
2. Improve question-bank discovery flows and filter clarity.
3. Add stronger curriculum-to-practice pathways only where real data supports them.

## Success Metrics

- Faster manual navigation from a lesson concept to relevant question-bank content
- Fewer ambiguous or stale lesson references in the question bank
- Improved usefulness of existing search and filter controls

## Non-Goals / Not In V1

- New question sourcing systems
- Server-backed recommendation engines
- Turning the question bank into a replacement for the lesson sequence

## Open Implementation Risks

- Cross-link improvements can expose stale lesson naming or repository metadata
- Discovery features can become noisy if they over-index on weak associations
- Export and search logic may need parallel updates if question labels become richer
