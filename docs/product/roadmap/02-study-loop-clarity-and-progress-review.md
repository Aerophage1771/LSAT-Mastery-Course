# Study-Loop Clarity and Progress Review

**Purpose:** Define the roadmap bet for making the day-to-day study flow clearer without adding nonexistent backend systems.  
**Audience:** Product contributors and engineers planning dashboard, navigation, or progress-workflow changes.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md), [../course-experience.md](../course-experience.md)

## Brief Problem Statement

- The app already supports module navigation, lesson progression, and local progress tracking, but the study loop can still feel fragmented.
- Students should be able to resume, review, and interpret their progress without guesswork.

## Why This Matters Now

- Workflow clarity improves the usefulness of the existing curriculum without requiring new content sources.
- Better progress review supports both student confidence and maintainable product behavior.

## Strategic Fit

- Primary category: study outcome improver
- Secondary category: maintainer simplifier
- Repo fit: strong, because the current dashboard, lesson navigation, and local progress flow already exist

## Preflight Questions

- Where does the current resume or progress flow create confusion?
- Is the problem about navigation, progress visibility, or lesson-state meaning?
- Can the improvement stay client-side and local-only?
- Which route or component changes are required to keep deep links stable?

## Go / No-Go Gate

### Go when

- the change clearly improves resume flow, review clarity, or progress interpretation
- it preserves current route ids and local progress assumptions
- the behavior can be validated through route and UI checks

### Defer when

- the idea needs broader naming cleanup or content normalization first
- the proposal is attractive but vague about the actual user confusion it removes

### Not now when

- the proposal implies synced accounts, remote persistence, or instructor tooling
- the benefit is mostly visual refresh rather than workflow clarity

## Current State In The Repo / Product

- The dashboard at `/` is the main study entrypoint.
- Lesson routes support direct deep links and adjacent navigation.
- Progress is local-only and tied to stable lesson ids.

## Target Outcome

- Students can see where they are, what is complete, and what to do next with less friction.
- Resume paths and review cues feel consistent across the dashboard and lesson flow.

## Recommended Implementation Mode

- Incremental UI passes with route-safe behavior
- Manual UX review in the browser after each meaningful change
- No schema or persistence expansion unless it is strictly local and backwards-compatible

## Likely Affected Surfaces

- Dashboard
- Lesson navigation and lesson viewer framing
- Progress context and progress hooks
- Search or quick-jump flows if they support study resumption

## Likely Affected APIs / Data Touchpoints

- `localStorage` progress keys
- module and lesson route params
- route-aware navigation state

## Dependencies

- Stable lesson ids and route ids
- Accurate course catalog naming
- Clear distinction between live progress data and derived display state

## Phased Implementation Path

1. Identify the highest-friction resume and review moments.
2. Improve progress visibility and next-step clarity on current surfaces.
3. Tighten cross-surface consistency between dashboard, lessons, and search.

## Success Metrics

- Fewer ambiguous progress states in the UI
- Easier manual resume flow from `/` back into the right lesson
- Reduced need for workaround copy explaining navigation or completion

## Non-Goals / Not In V1

- Accounts, sync, or multi-device progress
- Instructor dashboards or cohort review surfaces
- Replacing the current route model

## Open Implementation Risks

- Progress improvements can accidentally change saved-state meaning if ids shift
- More UI state can make the shell harder to reason about if not tied to existing route truth
- Review features can sprawl if they are not scoped to current client-only constraints
