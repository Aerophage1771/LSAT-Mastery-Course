---
title: LR Section 3 — Common Strategies / Field Guides Content Update
type: feat
status: active
date: 2026-02-20
---

# LR Section 3 — Common Strategies / Field Guides Content Update

## Enhancement Summary

**Deepened on:** 2026-02-20  
**Sections enhanced:** Overview, Proposed Solution, Technical Considerations, Implementation Phases, Dependencies & Risks  
**Research agents used:** pattern-recognition-specialist, code-simplicity-reviewer, kieran-typescript-reviewer  

### Key improvements

1. **Naming and order:** All new Lesson 3 files (M6–20) use `Lesson3_FieldGuide.tsx` only. Renumbering order is explicit: create new file → rename from highest index down and update `id` in each file → then update `ModuleN.tsx`.
2. **Type safety:** Type every lesson as `Lesson`; avoid `as ContentBlock[]` so the compiler enforces block shape. Update `id` in every renamed file to `"N-" + (new 1-based position)`.
3. **Anti-patterns:** Do not renumber low-to-high (causes overwrites). Do not update `ModuleN.tsx` before renaming files. When renumbering, only touch files that are in the module’s `lessons` array; leave orphan files untouched.
4. **Verification:** Add explicit check that `lesson[i].id === \`${module.id}-${i + 1}\`` for each module; optional validation script for id/order after each batch.

### New considerations

- Optional shared block helpers (e.g. `utils/lessonBlocks.ts`) for callout/breakdown/table to keep optional fields and enums consistent when hand-converting from markdown.
- Optional `scripts/validate-lesson-ids.mjs` to verify no duplicate ids and correct N-position after renumbering.

---

## Overview

Add or replace **Section 3** content (Common Strategies, Common Patterns, or Field Guide) across LR modules 1–20 using the exact copy from the user-provided content. For modules 1–5, update the existing Lesson 3 file. For modules 6–20, add a new Lesson 3 (Field Guide) at position 3 and renumber existing Lesson 3 and later lessons. Convert all content to `ContentBlock[]`. **Reference Guides are not changed** (no condensed Section 3 updates).

**Source:** [docs/brainstorms/2026-02-20-lr-common-strategies-field-guides-brainstorm.md](../brainstorms/2026-02-20-lr-common-strategies-field-guides-brainstorm.md)

**Scope:** LR modules 1–20 only. No changes to Lesson 1, Lesson 2 (Step-by-Step), or drill content except renumbering and `id` updates where a new lesson is inserted.

---

## Problem Statement / Motivation

Section 3 (Common Strategies / Field Guide) content was provided as markdown for all 20 LR topics. Some modules (1–5) already have a dedicated Lesson 3 for this; others (6–20) use Lesson 3 for drills. To give every LR module a consistent "pattern/strategy overview" at position 3, we need to (1) update or add the Section 3 lesson content and (2) insert the new lesson at position 3 for M6–M20 and renumber. Reference Guides are left unchanged.

---

## Proposed Solution

1. **Content conversion:** Convert the provided markdown for each topic into `ContentBlock[]` (paragraph, h2, h3, h4, list, callout, hr, breakdown, table). Preserve markdown-style emphasis (**bold**, *italic*) inside `text` strings where the renderer supports it.
2. **M1–M5:** Replace the content in the existing Lesson 3 file with the new Section 3 content. For M1, switch Lesson 3 to the shared `LessonViewer` (remove custom route and component) so one source of truth.
3. **M6–M20:** Create a new lesson file `Lesson3_FieldGuide.tsx` only (no alternate names) with `id: "N-3"` and the Section 3 content. Rename existing lesson files from Lesson K to Lesson K+1 for K = 3 up to the last lesson (renumber from high index down to avoid collisions). In each renamed file set `id` to `"N-" + (new 1-based position)`. Only rename files that are in the module’s `lessons` array; leave orphan files untouched. Update `ModuleN.tsx`: add import for the new Lesson 3, update imports for renamed files, and rebuild `lessons` array with the new lesson at index 2.
4. **Reference Guide:** Do **not** change any Reference Guide content.
5. **Verification:** Ensure every LR module 1–20 has exactly one lesson at position 3 that is the Section 3 lesson, and no two lessons in a module share the same `id`.

---

## Technical Considerations

- **Lesson ID convention:** `id` is `"moduleId-position"` (1-based). After renumbering, every lesson’s `id` must match its 1-based index in `lessons`.
- **Block types:** Use `types.ts` ContentBlock types only. Prefer `table` for spotter tables (headers + rows) and `breakdown` for sub-type lists (title + text). Use `callout` (e.g. variant `summary`) for "Key Takeaway" blocks.
- **M1 Lesson 3:** App currently routes `1-3` to `Module1Lesson3CommonRolesAndPatterns`. Plan: update `modules/module1/Lesson3_CommonRolesAndPatterns.tsx` with the new content, remove the `1-3` branch from `App.tsx`, remove the import of `Module1Lesson3CommonRolesAndPatterns`, and delete `components/customLessons/Module1Lesson3CommonRolesAndPatterns.tsx` so M1 Lesson 3 uses `LessonViewer` like other lessons.
- **Pre-existing duplicate ids:** Some module folders (e.g. module5) contain multiple files with the same `id`; only the lesson imported in `ModuleN.tsx` is live. Do not introduce new duplicate ids when renumbering; update only the lesson files that are actually in the module’s `lessons` array.

**Research insights:** Type every lesson as `Lesson` and avoid `as ContentBlock[]`. Keep a single ordered list in each `ModuleN.tsx` for imports and `lessons`. When renumbering, only touch files in the module’s `lessons` array; leave orphan files untouched. Optional: validation script for id/order after each batch.

---

## Acceptance Criteria

- [ ] **M1–M5:** Lesson 3 content is replaced with the provided Section 3 copy, converted to ContentBlock[]; titles and structure match the brainstorm (e.g. h2, intro paragraph, h3/h4 sections, tables/breakdowns, Key Takeaway where provided).
- [ ] **M1 Lesson 3:** M1 Lesson 3 is rendered via shared `LessonViewer` (no custom component); `App.tsx` has no `1-3` branch; `Module1Lesson3CommonRolesAndPatterns.tsx` is removed.
- [ ] **M6–M20:** Each module has a new Lesson 3 (Field Guide/Common Strategies) at position 3 with the provided Section 3 content as ContentBlock[]; existing Lesson 3 and later lessons are renumbered (file renames and `id` updates); `ModuleN.tsx` imports and `lessons` array reflect the new order.
- [ ] **Ids:** Every lesson in modules 1–20 has a unique `id` of the form `"N-position"` with position equal to 1-based index in `module.lessons`.
- [ ] **Reference Guide:** No changes to any Reference Guide files.
- [ ] **Content:** Markdown emphasis in the provided copy is preserved in block `text` where applicable. Tables use `table` or `breakdown` per existing patterns.
- [ ] **Verification:** For each LR module 1–20, the lesson at position 3 is the Section 3 lesson; sidebar and next/previous work correctly; no duplicate lesson ids.

---

## Implementation Phases

### Phase 1: Content conversion and M1–M5 updates

- [ ] **1.1** For each module N = 1 to 5: convert the provided Section 3 copy into ContentBlock[] and update the existing Lesson 3 file. File names: M1 `Lesson3_CommonRolesAndPatterns.tsx`, M2 `Lesson3_CommonPatternsAndTypes.tsx`, M3/M5 `Lesson3_FieldGuide.tsx`, M4 `Lesson3_CommonArgumentStructures.tsx`. Structure (tables, Key Takeaway, etc.) per brainstorm.
- [ ] **1.2** M1 Lesson 3 only: Remove `1-3` custom route and `Module1Lesson3CommonRolesAndPatterns` import from `App.tsx`; delete `components/customLessons/Module1Lesson3CommonRolesAndPatterns.tsx`. Confirm M1 Lesson 3 renders via LessonViewer.

### Phase 2: New Lesson 3 and renumbering (M6–M20)

For each module N = 6 to 20:

- [ ] **2.N.1** Create `modules/moduleN/Lesson3_FieldGuide.tsx` with `id: "N-3"`, `title` and `content` from the provided Section 3 copy, converted to ContentBlock[]. Type export as `Lesson`; do not use `as ContentBlock[]`.
- [ ] **2.N.2** Rename existing lesson files from highest index down: e.g. Lesson9_* → Lesson10_*, Lesson8_* → Lesson9_*, …, Lesson3_* → Lesson4_*. In each renamed file set `id` to `"N-" + (new 1-based position)`. Only rename files that are in the module’s `lessons` array; leave orphan files untouched.
- [ ] **2.N.3** Update `modules/ModuleN.tsx` only after renames and id updates: add import for the new Lesson 3; update imports for renamed files; set `lessons` array in that exact order (single source of truth).

**Content:** For each N 6–20 create `Lesson3_FieldGuide.tsx`; topic and copy per brainstorm doc.

### Phase 3: Verification

- [ ] **3.1** For each module 1–20: lesson at index 2 (position 3) is the Section 3 lesson with expected title; no duplicate `id`; each `id` is `"N-position"` (1-based).
- [ ] **3.2** Run build (`npm run build`); open a few modules (e.g. 1, 6, 12) and confirm Lesson 3 loads and next/previous navigation works.

---

## Dependencies & Risks

- **Content volume:** 20 modules (full lesson each) is a large content pass. Phase 2 can be done in batches (e.g. 5 modules at a time) with verification between batches if desired.
- **Renumbering order:** Rename files from **highest** lesson index down to 3 to avoid overwriting (e.g. Lesson9 → Lesson10, then Lesson8 → Lesson9, …, then Lesson3 → Lesson4).
- **Reference Guides:** Explicitly out of scope; no edits to any Reference Guide files.

**Anti-patterns to avoid:** Do not renumber low-to-high (overwrites files). Do not update `ModuleN.tsx` before renaming files. Do not remove M1 custom component before updating Lesson 3 content (1.1 then 1.2). Do not change any Reference Guide.

---

## References & Research

- **Brainstorm:** [docs/brainstorms/2026-02-20-lr-common-strategies-field-guides-brainstorm.md](../brainstorms/2026-02-20-lr-common-strategies-field-guides-brainstorm.md) — target files, block format, insert-at-3.
- **Types:** `types.ts` — `Lesson`, `ContentBlock` (paragraph, h2–h4, list, callout, hr, breakdown, table).
- **Existing Section 3 examples:** `modules/module1/Lesson3_CommonRolesAndPatterns.tsx`, `modules/module5/Lesson3_FieldGuide.tsx`, `modules/module4/Lesson3_CommonArgumentStructures.tsx`.
- **Module registration:** `modules/Module6.tsx` (example of 9 lessons, Lesson 3 = drill); renumbering pattern from repo research.
- **SpecFlow analysis:** Section 3 discovery, id/renumbering, M1 custom component, verification criteria.
