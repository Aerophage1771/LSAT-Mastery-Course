# Architecture

**Purpose:** Describe the live runtime architecture, route model, and system boundaries of the app.  
**Audience:** Engineers and agents changing routing, data flow, or module loading behavior.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-27  
**Related docs:** [../README.md](../README.md), [content-and-validation.md](./content-and-validation.md), [../product/course-experience.md](../product/course-experience.md)

## Overview

- Single-page React app rendered entirely on the client
- No server-rendered routes
- No backend persistence
- No database or auth layer in repo

## Current Architecture

- Frontend:
  - React 19
  - React Router 7
  - Tailwind CSS 4
- Runtime data:
  - statically bundled lesson content under `modules/`
  - canonical naming in `data/courseCatalog.json`
  - generated audit data under `docs/operations/audits/`
- Export contracts:
  - `canonical-course` is the lossless JSON serialization boundary for course content and the active import contract consumed by DataToolkit Course Studio
  - `interchange-course` remains a derived, simplified compatibility export surface; it is no longer the primary course-platform handoff
  - `full-course` remains available as a legacy-compatible export surface
- Local persistence:
  - lesson progress in `localStorage`

## Key Components

- `App.tsx`
  - route definitions
  - lazy module loading
  - audit inventory consumption for illustrative-content badges
- `components/Layout.tsx`
  - shell navigation
  - export modal
  - style guide modal
  - roadmap modal
- `components/LessonViewer.tsx`
  - renders structured lesson blocks
- `components/QuestionBank.tsx`
  - standalone practice surface
  - reads the invented-card inventory for audit/export context
- `utils/courseCatalog.ts`
  - route/content module remapping
  - canonical lesson and module titles

## Route And Module Mapping

- Canonical route modules now use the live `1-57` sequence, with `Module 10` reserved for the standalone `Causal Reasoning` framework module.
- Content modules are not identical to route modules in every case.
- Current legacy mappings:
  - route `10` uses content module `60`
  - route `11` through `21` use content modules `10` through `20`
  - route `22` uses content module `55`
  - route `23` uses content module `59`
  - route `24` through `50` use content modules `21` through `47`
  - route `51` through `57` continue the advanced-source remap through content modules `50`, `51`, `52`, `54`, `56`, `57`, and `58`
- Do not change route ids casually. They affect deep links, progress keys, canonical naming, and audit outputs.

## Data Flow

- Lesson route selected
- `App.tsx` loads module metadata from `modules/registry.ts`
- `loadModule()` imports the relevant module bundle
- `applyCanonicalNamesToModule()` overlays route-facing names from `courseCatalog.json`
- `LessonViewer` renders the active lesson's `ContentBlock[]`
- Export flows serialize selected `ModuleData` into outline, full-course, canonical-course, or interchange-course artifacts without changing the runtime loader
- Downstream course-platform work now treats this repo as the feeder/reference source: DataToolkit imports `canonical-course`, versions edited lessons, and publishes website-ready release artifacts from there

## Known Risks / Gotchas

- `docs/operations/audits/invented-questions-inventory.json` is runtime-consumed, not just human-readable output.
- Content files are quote-sensitive and frequently break TypeScript with bad escaping.
- Validation scripts and runtime imports must stay aligned if audit file paths change.
- The question bank repositories and lesson drill usage are related but not interchangeable.

## Change Notes

- Changes to route mapping require review of `App.tsx`, `utils/courseCatalog.ts`, generated audit docs, and any route-based exports.
- Changes to generated audit paths require updates in scripts plus runtime imports.
- Roadmap docs may propose architecture-adjacent work, but this file should only describe what exists today.
