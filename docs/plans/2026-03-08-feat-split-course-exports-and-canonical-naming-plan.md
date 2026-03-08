---
title: feat: Split course exports and canonical naming
type: feat
status: active
date: 2026-03-08
brainstorm: docs/brainstorms/2026-03-08-full-course-export-brainstorm.md
---

# feat: Split course exports and canonical naming

## Overview

Split the current export experience into two distinct actions:

- `Export Curriculum Outline`
- `Export Full Course`

Both actions should default to the entire course, support optional filtering, and preserve the current format matrix: TXT, RTF, JSON, CSV, and PDF.

At the same time, adopt the user-provided module and lesson naming map as the canonical source of truth across the entire product. That naming must replace legacy and auto-generated titles everywhere that users see course structure, including dashboard cards, sidebar navigation, lesson headers, search results, question-bank drill references, and exports.

## Problem Statement

The current product mixes multiple naming sources and multiple export jobs into one generic flow:

- module titles come from both `modules/registry.ts` metadata and loaded `ModuleData` files
- lesson titles are mutated by `normalizeLessonsWithLinkage()` for intros, step-by-step lessons, PT suffixes, and QA warnings
- the current `Full Course Export` modal is really a lesson-selection export, not a distinct product concept
- text and RTF serializers flatten or omit rich lesson content, especially nested accordions and some structured blocks

This creates user-facing inconsistency and makes it hard to ship a trustworthy curriculum outline or a reliable full-course dump. The naming rollout and export redesign need to be planned together because they touch the same data flow.

## Proposed Solution

Adopt the brainstorm’s selected approach: a **Split Export Center** with two top-level export actions and a canonical naming layer.

### Product shape

- Add a dedicated `Export Curriculum Outline` action for hierarchy-only exports.
- Add a dedicated `Export Full Course` action for lesson-content exports.
- Both actions open with the whole 56-module curriculum selected by default.
- Both actions support optional filtering rather than selection-first behavior.
- Keep the Question Bank outside the definition of “entire course” for this feature.

### Canonical naming strategy

- Introduce a dedicated canonical naming source for modules `1-56` and their lessons.
- Treat those names as the only user-facing course titles.
- Stop using title mutation as the primary place to surface QA warnings.
- Keep audit status and linkage warnings as metadata or badges, not appended title text.

### Export strategy

- `Export Curriculum Outline` should export course structure only: sections, units, modules, lesson order, and canonical names.
- `Export Full Course` should export lesson-bearing content with canonical names and format-specific fidelity rules.
- Preserve existing export formats, but define separate outline and full-course export data shapes rather than reusing one generic “course export” model for both.

## Technical Approach

### Architecture decisions

#### 1. Canonical IDs

- Use **public route module IDs (`1-56`)** as the primary module keys.
- Use **existing lesson IDs** as lesson keys, while documenting alias-module handling for route modules `21` and `22`, which currently load from content modules `55` and `59`.
- Avoid deriving canonical names from lesson order or module file names alone.

#### 2. Canonical naming source

Create one dedicated course-catalog source that can drive:

- dashboard module labels
- sidebar module labels
- lesson display titles
- search labels
- question-bank drill cross-reference labels
- export labels and filenames

This source should be the only place that knows the user-provided naming map.

#### 3. Separate display titles from audit state

`lesson.title` is currently overloaded for:

- display copy
- export labels
- search indexing
- PT-ID augmentation
- QA warning surfacing

The new plan should separate:

- **canonical display title**
- **audit status / warning metadata**
- **question-linkage metadata**

This reduces the risk that legacy warnings leak into canonical names or exported artifacts.

#### 4. Two export DTOs

Define separate export data contracts:

- **Outline export DTO**: hierarchy only
- **Full course export DTO**: hierarchy plus lesson content

JSON exports should represent those DTOs explicitly rather than being treated as an unversioned dump of whatever internal object is currently in memory.

#### 5. Filter state model

Track export scope independently from export format.

The plan should support:

- default full-course selection
- track/module/lesson filtering
- switching formats without losing selection
- switching between outline and full-course actions without ambiguous state bleed

Recommended product behavior: filter state persists while the page is loaded, instead of resetting every time the export UI closes.

### Implementation phases

#### Phase 1: Canonical naming foundation

Goals:

- establish the canonical naming source
- define how alias modules are keyed
- stop relying on legacy title mutation for primary product copy

Tasks:

- audit current module-title consumers in `modules/registry.ts`, `App.tsx`, `Layout.tsx`, `Dashboard.tsx`, and `SearchDialog.tsx`
- define the canonical naming structure for modules and lessons
- update title resolution so registry-backed and loaded-module views use the same names
- decide how question-linkage warnings are rendered once they no longer live inside title strings
- ensure modules `21` and `22` resolve correctly despite `Module55` / `Module59` aliasing

Success criteria:

- one documented naming source
- no mixed legacy/canonical titles across navigation and search
- alias modules behave consistently

#### Phase 2: Canonical naming rollout across surfaces

Goals:

- apply canonical names everywhere in the product

Tasks:

- update dashboard card titles
- update sidebar module and lesson labels
- update lesson-page titles and breadcrumbs
- update search result labels
- update question-bank drill cross-reference labels
- review any generated inventory surfaces that still embed stale `moduleName` / `lessonTitle` strings

Success criteria:

- every user-facing course label comes from the canonical naming source
- question-bank drill references show the same lesson names users see elsewhere

#### Phase 3: Split export center

Goals:

- replace the single generic full-course export concept with two clear product actions

Tasks:

- redesign the export entry point in `components/Layout.tsx`
- add `Export Curriculum Outline`
- add `Export Full Course`
- preserve optional filtering for both
- keep entire-course export as the default state
- define whether outline and full-course actions share or isolate filter state
- update export labels, summaries, and filenames to reflect the selected export type

Success criteria:

- users can immediately tell which export action gives them a curriculum map and which gives them lesson content
- exporting the whole course requires no filter interaction

#### Phase 4: Export data contracts and serializer fidelity

Goals:

- formalize the two export shapes
- eliminate silent content loss for scoped rich content

Tasks:

- define outline serialization rules for TXT, RTF, JSON, CSV, and PDF
- define full-course serialization rules for TXT, RTF, JSON, CSV, and PDF
- audit `utils/export.ts` for nested accordions, tables, breakdowns, markdown stripping, and card blocks
- decide whether serializer logic should be consolidated around a common block-walking layer
- define filename rules for both export actions across formats

Success criteria:

- outline export does not accidentally include lesson body text unless intended
- full-course export does not silently omit in-scope rich lesson content
- JSON outputs are explicit, stable, and action-specific

#### Phase 5: Validation, regression coverage, and docs

Goals:

- prevent naming drift and export regressions

Tasks:

- expand test coverage for naming parity across dashboard, sidebar, lesson headers, search, and question-bank drill links
- add export tests for representative lessons containing nested accordions, tables, breakdowns, markdown, and question/passage cards
- add alias-module tests for route modules `21` and `22`
- validate default full-course selection and filter persistence behavior
- update internal documentation that describes export behavior and title rules

Success criteria:

- the feature is covered by focused UI and serializer tests
- existing validation scripts remain usable as regression guards

## Alternative Approaches Considered

### 1. One unified export flow with mode switch

Rejected because it weakens the distinction between two different user jobs and preserves the main current UX ambiguity.

### 2. Fully separate screens or workflows

Rejected for now because it adds more product surface area than necessary. The user explicitly preferred two separate actions, not a heavyweight split into different pages.

### 3. Export-only naming rewrite

Rejected because the user chose “everywhere,” and the current title inconsistencies already span navigation, search, and exports.

## Acceptance Criteria

### Functional requirements

- [ ] The app exposes two separate export actions: `Export Curriculum Outline` and `Export Full Course`.
- [ ] Both export actions default to the full 56-module curriculum.
- [ ] Both export actions support optional filtering.
- [ ] The Question Bank is not included in “entire course” scope for this feature unless separately selected by a future feature.
- [ ] Dashboard cards, sidebar navigation, lesson headers, search results, question-bank drill links, and export outputs all use the canonical naming map.
- [ ] Legacy naming mutations and QA suffixes are not shown as canonical lesson titles in user-facing product copy.
- [ ] `Export Curriculum Outline` exports structure-only content using canonical names.
- [ ] `Export Full Course` exports lesson-bearing content using canonical names.
- [ ] TXT, RTF, JSON, CSV, and PDF remain available for both export actions.
- [ ] Export filenames reflect the action type and canonical naming.

### Non-functional requirements

- [ ] The redesign remains fully client-side and does not require a backend export service.
- [ ] Export filtering state does not reset unexpectedly during normal in-session use.
- [ ] Alias-module handling for route modules `21` and `22` is explicitly supported.
- [ ] JSON exports have action-specific, documented shapes rather than raw accidental dumps.
- [ ] Full-course export does not silently drop scoped rich content such as nested accordions or tables.

### Quality gates

- [ ] Add or update tests for naming parity across all named user-facing surfaces.
- [ ] Add serializer regression tests for representative mixed-content lessons.
- [ ] Add alias-module coverage for the `21/55` and `22/59` mapping paths.
- [ ] Run focused test suites for export UI and serializer behavior.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.
- [ ] Run `npm run validate:questions` or an equivalent no-regression validation path if the team decides the audit baseline is not yet clean enough for strict zero-error gating.

## Success Metrics

- Users can export an outline or the full course without needing to interpret a generic export modal.
- A reviewer can compare dashboard, sidebar, lesson page, search, question-bank references, and export output and find no mixed legacy/canonical titles.
- Outline export is readable as a curriculum map rather than a lesson-content dump.
- Full-course export is materially more faithful than the current generic text/RTF serializers for representative rich lessons.

## Dependencies & Prerequisites

- The user-provided naming map must be captured as a canonical internal artifact.
- Planning must resolve whether generated inventory files are regenerated or translated at runtime.
- Planning must decide whether audit warnings remain visible as badges, metadata, or debug-only UI.
- Planning must define the authoritative source for question-linkage and naming parity checks when audits disagree.

## Risk Analysis & Mitigation

### Risk: title source fragmentation

Current title data comes from registry metadata, loaded module files, linkage normalization, and generated inventory docs.

Mitigation:

- establish a single canonical naming source early
- route all user-facing title consumers through it

### Risk: alias-module mismatch

Route modules `21` and `22` do not map one-to-one to content module IDs.

Mitigation:

- define public module ID as the canonical key space
- add explicit tests for alias modules

### Risk: serializer fidelity gaps

Current TXT/RTF exports flatten or omit some structured content.

Mitigation:

- define fidelity expectations per export action and per format
- add regression fixtures for rich lesson content

### Risk: QA status leaking into titles

Current logic appends PT IDs and warning suffixes into display titles.

Mitigation:

- separate canonical naming from linkage metadata
- render warnings outside the canonical title string

### Risk: stale generated metadata

Illustrative question inventory and audit outputs may continue to show old titles.

Mitigation:

- include generated artifacts in rollout scope
- document whether they are regenerated or mapped at runtime

## Resource Requirements

- Product/design review for export action labeling and default behavior
- Frontend implementation work across shared layout, navigation, export UI, search, and question bank
- Serializer/test work for export fidelity
- Data cleanup coordination where canonical naming intersects with generated inventories or audit outputs

## Future Considerations

- Add user-saved export presets after the split export center is stable.
- Consider downloadable manifest metadata for external integrations once outline and full-course JSON contracts are established.
- If large PDF export becomes slow, revisit background generation or chunked generation later. This is not required for the current plan.

## Documentation Plan

- Update README sections that describe export behavior and architecture.
- Update any internal docs that describe title normalization or course naming.
- Document the canonical naming source and the meaning of “entire course.”
- Document action-specific export JSON shapes if JSON remains part of the user-facing format matrix.

## References & Research

### Brainstorm input

- `docs/brainstorms/2026-03-08-full-course-export-brainstorm.md`

### Internal references

- `modules/registry.ts` — module metadata, public IDs, dynamic imports
- `App.tsx` — loaded-module hydration, lesson normalization, search/question-bank data flow
- `utils/lessonQuestionLinkage.ts` — current display-title mutation and drill cross-reference generation
- `components/Layout.tsx` — current full-course export modal and sidebar labels
- `components/Dashboard.tsx` — dashboard card titles plus section/unit/module export entry points
- `components/SearchDialog.tsx` — search indexing over loaded module and lesson titles
- `components/QuestionBank.tsx` — drill cross-reference labels and separate question-bank export system
- `components/ExportControls.tsx` — reusable five-format export menu
- `utils/export.ts` — lesson/module/unit/section/course serializers
- `docs/question-linkage-audit.md` — known naming and PT-ID inconsistencies
- `docs/question-usage-audit.md` — known repository/data mismatches
- `docs/invented-questions-inventory.md` — illustrative content inventory
- `docs/plans/2026-02-26-content-updates-gameplan.md` — adjacent content/linkage workflow assumptions
- `README.md` and `AGENTS.md` — architecture, content model, and export-related context

### Related work

- `78adebe` — add export selection UI and lesson linkage exemptions
- `7c9a430` — deterministic lesson-question linkage and UI warnings
- `b326fe0` — question bank exports for full data and IDs
- `0e2f84f` — export module data fix

### External research

- None. Local repo patterns and the brainstorm provided sufficient context for planning.
