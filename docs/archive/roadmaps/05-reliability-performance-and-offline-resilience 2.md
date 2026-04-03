# Reliability, Performance, and Offline Resilience

**Purpose:** Define the roadmap bet for keeping the client-only app dependable as content and features grow.  
**Audience:** Engineers and maintainers planning runtime stability, performance, or offline-behavior work.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-11  
**Related docs:** [README.md](./README.md), [pathway-map.md](./pathway-map.md), [../../technical/architecture.md](../../technical/architecture.md)

## Brief Problem Statement

- The app depends on client-side routing, lazy-loaded modules, local progress, and a large app shell.
- Reliability and performance work is cross-cutting because failures here can undermine every other roadmap bet.

## Why This Matters Now

- As content and exports evolve, route stability and runtime resilience matter more, not less.
- Reliability issues can erase the value of accurate content or clearer workflows if the app feels brittle.

## Strategic Fit

- Primary category: trust protector
- Secondary category: maintainer simplifier
- Repo fit: strong, because performance and offline behavior are already part of the current architecture

## Preflight Questions

- Is the problem about bundle weight, route stability, loading behavior, or offline handling?
- Does the issue threaten trust, completion, or data safety?
- Can the fix stay client-only and work with existing PWA constraints?
- Which current checks prove the change did not break navigation or progress?

## Go / No-Go Gate

### Go when

- the change clearly improves route stability, loading behavior, offline safety, or client performance
- it can be validated through build, route, or browser checks
- it does not invent missing infrastructure

### Defer when

- the problem is real but better solved after naming or content-trust cleanup first
- the performance complaint is anecdotal and not yet tied to a concrete route or surface

### Not now when

- the proposal assumes SSR, backend caching, or server-managed sync
- the change is mostly aesthetic optimization without visible reliability benefit

## Current State In The Repo / Product

- The app shell is intentionally large enough to trigger Vite chunk-size warnings.
- Module content is code-split and lazily loaded.
- Service worker generation happens during build, not normal dev mode.
- Progress is local-only.

## Target Outcome

- Route and loading behavior feel stable even as content grows.
- Offline and PWA behavior are explicit and dependable within current constraints.
- Performance work reduces trust-damaging friction rather than chasing benchmarks for their own sake.

## Recommended Implementation Mode

- Targeted runtime fixes tied to concrete routes or loading paths
- Build, browser, and offline checks for each meaningful change
- Preference for smaller structural improvements over speculative rewrites

## Likely Affected Surfaces

- App shell and route loading
- Lesson viewer entry flow
- Dashboard
- PWA and offline assets
- Export and question-bank surfaces when they stress the client runtime

## Likely Affected APIs / Data Touchpoints

- route loaders and module imports
- local progress storage
- service worker generation and offline assets
- bundle outputs and build warnings

## Dependencies

- Accurate current architecture docs
- Stable route ids and module mapping
- Clear understanding of which reliability issue is actually user-visible

## Phased Implementation Path

1. Fix the most trust-damaging reliability issues first.
2. Improve loading and route resilience on the most used surfaces.
3. Refine offline behavior and performance debt where it supports the earlier work.

## Success Metrics

- Fewer route or loading failures during manual testing
- Clearer offline behavior within current PWA limits
- Reduced reliability regressions after content or export changes

## Non-Goals / Not In V1

- Server rendering
- Cloud sync or remote persistence
- Full platform re-architecture

## Open Implementation Risks

- Some performance work can be noisy but low-impact if not tied to real routes
- PWA behavior can be misunderstood if docs imply live offline guarantees that are not actually present
- Reliability improvements can still break deep links or progress if route assumptions change
