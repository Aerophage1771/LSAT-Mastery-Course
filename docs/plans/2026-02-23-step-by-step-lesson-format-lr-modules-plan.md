---
title: Apply Module 1 & 2 Step-by-Step Lesson Format (Content + Visual)
type: feat
status: completed
date: 2026-02-23
---

# Apply Module 1 & 2 Step-by-Step Lesson Format to Other Lessons

## Enhancement Summary

**Deepened on:** 2026-02-23  
**Sections enhanced:** Overview, Phase 1, Phase 2 (Detection, Data, UI, checklist), Acceptance criteria  
**Research agents used:** kieran-typescript-reviewer, pattern-recognition-specialist, architecture-strategist, code-simplicity-reviewer  

### Key improvements

1. **Detection robustness:** Explicit `isStepByStepLesson(lesson)` with safe checks: only when `content` is a non-empty array; never when `content` is string; use `content[0]?.type`, `typeof content[0].text === 'string'`, and `.startsWith('Step-by-Step Guide:')`. Fallback to normal `renderBlocks` when step-by-step is detected but content has no h3s.
2. **Data flow:** App passes optional `subtitle` and `modulePill` (or `moduleId` + `moduleTitle`) into LessonViewer; LessonViewer forwards to LessonShell only when step-by-step. Single source of truth: `Lesson.subtitle`; module pill from App (activeModule), not from LessonViewer.
3. **Splitting and keys:** Split by h3; intro = blocks before first h3 (first two blocks = h2 + paragraph); each step = h3 + blocks until next h3; include heading in step’s blocks; use stable keys (e.g. `step-${index}`) not just `block.text`. Immutable slice; no mutation.
4. **Backward compatibility:** LessonShell gets optional `subtitle?: string` and `modulePill?: string`; existing call sites unchanged. Exports (text/RTF/PDF) include subtitle when present.
5. **Accessibility:** Use semantic `<ol>` for step list when order matters; prefer native list over ARIA list role.

### New considerations

- Do not reuse or overload `formatId` for step-by-step; detection is layout, formatId remains theme-only. Step-by-step branch still passes theme into block renderer.
- Optional validator `scripts/validate-lesson2-step-by-step.mjs` (block 1 = h2, block 2 = paragraph; LR M1–20 only): YAGNI for first pass; add later if drift occurs.
- Optional: support "Step-by-Step Approach" title / first-block h3 for future RC alignment; plan scope stays LR "Step-by-Step Guide" only.

---

## Overview

**Both** content structure and visual parity: (1) standardize every LR Step-by-Step Lesson 2 to the same content pattern (h2 guide title, intro paragraph, h3 steps); (2) add a step-by-step layout in the viewer (subtitle, single card, section dividers, consistent icons) so all modules—including M1 and M2—can use the same rendering path.

**Source:** [docs/brainstorms/2026-02-23-step-by-step-lesson-format-lr-modules-brainstorm.md](../brainstorms/2026-02-23-step-by-step-lesson-format-lr-modules-brainstorm.md)

**Scope:** LR modules 1–20, Lesson 2 only (Step-by-Step Guide). RC / “Step-by-Step Approach” lessons (M21+) are out of scope for this plan.

**Constraint: No text edits.** Only formatting (block types, order, heading levels, lesson title) and adding the `subtitle` field and values; no changes to body copy.

---

## Phase 1: Content structure standardization

### Canonical structure

Every Step-by-Step Lesson 2 **content** array must follow:

| Order | Block type | Notes |
|-------|------------|--------|
| 1 | `h2` | `"Step-by-Step Guide: [Topic]"` (topic = module focus, e.g. "Argument Part", "Main Conclusion", "Method of Reasoning") |
| 2 | `paragraph` | Intro: one short paragraph stating the purpose of the guide |
| 3+ | `h3` | `"Step 1: [Title]"`, then paragraph(s), list(s), optional callout |
| — | (repeat) | `h3` "Step 2: …", … "Step N: …" with content |
| — | (optional) | `callout` (e.g. "Key Insight", "Note") anywhere after intro |

- **Lesson title:** `"Step-by-Step Guide"` (not "Step-by-Step Guide: [Topic]" in the `title` field; topic stays in first h2 only).
- **No** opening block that is only a paragraph without the h2 (e.g. M6 currently starts with a paragraph).

### Files to change (Phase 1)

| Module | File | Current issue | Change |
|--------|------|----------------|--------|
| 5 | `Lesson2_StepByStepGuide.tsx` | h3 guide title, h4 for steps | Insert h2 "Step-by-Step Guide: Flaw", intro paragraph; change step headings to h3 |
| 6 | `Lesson2_StepByStepGuide.tsx` | title "Step-by-Step Guide: Parallel Flaw"; starts with paragraph; steps are h3 but has h4 sub-steps | Set title to "Step-by-Step Guide"; insert h2 "Step-by-Step Guide: Parallel Flaw" then keep or shorten first paragraph as intro; keep h3 steps; leave h4 as sub-steps under steps |
| 7 | `Lesson2_StepByStepGuide.tsx` | title "Step-by-Step Guide: Evaluate the Argument"; no h2 + intro | Set title to "Step-by-Step Guide"; insert h2 "Step-by-Step Guide: Evaluate the Argument" + intro paragraph before first h3 |
| 16 | `Lesson2_StepByStepGuide.tsx` | h4 for steps | Change step headings from h4 to h3 (Step 1… Step 2… etc.) |
| 3, 4, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20 | `Lesson2_StepByStepGuide.tsx` | Already h2 + paragraph + h3 steps; some may have title with topic | Ensure title is exactly "Step-by-Step Guide"; ensure first block is h2 "Step-by-Step Guide: [Topic]" and second is intro paragraph; no other structural change |
| 1, 2 | `Lesson2_StepByStepGuide.tsx` | Already match structure | No content change required for structure; optional: add `subtitle` in Phase 2 |

### Implementation checklist (Phase 1)

- [x] M5: Add h2 + intro paragraph; convert h4 step headings to h3.
- [x] M6: Set `title: "Step-by-Step Guide"`; add h2 "Step-by-Step Guide: Parallel Flaw" as first block; keep or adapt first paragraph as second block.
- [x] M7: Set `title: "Step-by-Step Guide"`; add h2 "Step-by-Step Guide: Evaluate the Argument" + intro paragraph before first h3.
- [x] M16: Change all step headings from h4 to h3.
- [x] M3, M4, M8, M9, M10, M11, M12, M13, M14, M15, M17, M18, M19, M20: Audit first two blocks (h2 then paragraph) and title; fix if needed.
- [ ] (Optional) Add a small validation script or doc that checks first two blocks for Step-by-Step Lesson 2 files.

### Research insights (Phase 1)

- **Naming:** Keep "intro format" for Lesson 1 and "step-by-step" for Lesson 2; use "Step-by-Step Guide" (hyphenated) everywhere. No overlap with formatId or Lesson 1 validator.
- **formatId:** Do not add a formatId for step-by-step. Layout is determined by detection (title or first block); formatId stays theme-only. Step-by-step branch still passes theme into block renderer for styling inside the card.
- **Validator:** Optional `scripts/validate-lesson2-step-by-step.mjs` (block 1 = h2 "Step-by-Step Guide: …", block 2 = paragraph; scope LR M1–20 `Lesson2_StepByStepGuide.tsx`) follows Lesson 1 pattern. YAGNI for first pass; add later if drift occurs.

---

## Phase 2: Step-by-step layout in viewer

### Goals

- Step-by-step lessons render with: **page title** "Step-by-Step Guide", **subtitle** (one line), **module pill** (e.g. "Module 2 · Main Conclusion") always, and a **single white card** containing:
  - Intro section: icon (Target) + first h2 + first paragraph.
  - **Dividers** between sections (after intro, and between each step).
  - Each step: icon (ListChecks) + h3 "Step N: …" + following content until next h3 or end.
  - Callouts (Key Insight, Note) rendered with existing callout styling inside the card.
- **Single code path:** M1 and M2 Step-by-Step lessons eventually use the same viewer path (no custom `Module1Lesson2StepByStepGuide` / `Module2Lesson2StepByStepGuide`). Custom components can be removed after layout is in place.

### Detection

- Treat a lesson as **step-by-step** when **either**:
  - `lesson.title === "Step-by-Step Guide"`, or
  - First content block is `type: 'h2'` and `block.text` starts with `"Step-by-Step Guide:"`.
- When detected, render with the step-by-step layout instead of the default LessonViewer flow.

**Robustness (research insights):**

- Implement a single helper, e.g. `isStepByStepLesson(lesson): boolean`. Return true **only when**:
  - `Array.isArray(lesson.content) && lesson.content.length > 0` (content must be non-empty array).
  - **And** (`lesson.title === "Step-by-Step Guide"` **or** (`content[0].type === 'h2'` and `typeof content[0].text === 'string'` and `content[0].text.startsWith('Step-by-Step Guide:')`)).
- **Do not** treat string content as step-by-step (no blocks to split); keep using `renderMarkdown(content)` for string. Optional chaining: `content[0]?.type`, `content[0]?.text`.
- **Fallback:** When step-by-step is detected but content has no h3s (or doesn’t match canonical intro shape), fall back to normal `renderBlocks(content)` so no lesson renders an empty or broken step layout.

### Data: subtitle and module pill

- Add optional **`subtitle?: string`** to `Lesson` in [types.ts](../../types.ts). Single source of truth; no `any`; existing lessons can leave it unset.
- For M1 Lesson 2 and M2 Lesson 2, set `subtitle` in the lesson object (e.g. M2: "A practical process for identifying the main conclusion with speed and accuracy."). For M3–20, add one-line `subtitle` where a natural tagline exists; otherwise leave unset. Defer "derive from first sentence" to a later iteration.
- **Module pill:** Data comes from **App**, not LessonViewer. App has `activeModule` (id, title). Pass optional `modulePill?: string` (e.g. `Module ${activeModule.id} · ${activeModule.title}`) or `moduleId` + `moduleTitle` into LessonViewer when rendering the default lesson path; LessonViewer forwards to LessonShell only when step-by-step is detected. LessonShell renders pill only when provided; no coupling to route or global state.
- **Exports:** In `utils/export.ts` (e.g. `generateLessonText`, RTF/PDF header), include `subtitle` when present so exports stay in sync with the UI.

### UI component approach

- **Option A (recommended):** Extend **LessonViewer** (and **LessonShell** if used for the outer layout) so that when the lesson is step-by-step:
  - LessonShell receives `subtitle={lesson.subtitle}` and shows it under the title; show **module pill** (e.g. "Module N · [Module title]") always for step-by-step lessons.
  - Content is wrapped in one card (e.g. `rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm`).
  - Intro = first h2 + first paragraph; render with Target icon.
  - Split remaining blocks by h3: each "step" = one h3 + all following blocks until the next h3 (or end). Render each step with ListChecks icon and a divider above it (except before Step 1).
  - Lists, callouts, paragraphs inside a step render as today (existing block rendering).
- **Option B:** Add a separate **StepByStepGuideShell** component that takes `title`, `subtitle`, `moduleBadge?`, and `content`; parses content into intro + steps; renders the card and sections. LessonViewer delegates to this when step-by-step is detected.

Recommendation: **Option A** to avoid duplicating block-rendering logic (lists, callouts, etc.) and keep one viewer code path.

**Implementation details (research insights):**

- **LessonShell props:** Add optional `subtitle?: string` and `modulePill?: string`. Both optional; existing call sites unchanged. Render subtitle only when `subtitle != null && subtitle !== ''`; render pill when `modulePill` is provided.
- **Splitting by h3:** Intro = blocks from index 0 up to (but not including) first h3 index. Each step = one h3 plus all following blocks until the next h3 (or end). Include the h3 in the step’s block slice so it is not dropped. Use immutable `slice`; do not mutate `content`. If there are no h3s, treat entire content as intro or fall back to normal `renderBlocks`.
- **Keys:** Use stable keys for step sections, e.g. `key={\`step-${index}\`}` or `step-${index}-${slugify(stepTitle)}`; avoid using only `block.text` (duplicate step titles would produce duplicate keys).
- **Reuse:** Step-by-step path calls the same `renderBlocks(stepBlocks)` for intro (first two blocks) and for each step; no second block-rendering implementation.
- **Accessibility:** For the step list, use semantic `<ol>` when order matters (numbered steps); prefer native list over ARIA `role="list"` per first rule of ARIA.

### Implementation checklist (Phase 2)

- [x] **Types:** Add `subtitle?: string` to `Lesson` in `types.ts`.
- [x] **M1 & M2 lesson files:** Add `subtitle` to `Lesson2_StepByStepGuide` (e.g. M2: "A practical process for identifying the main conclusion with speed and accuracy."). M1 subtitle TBD from existing copy or new line.
- [x] **App.tsx:** Pass optional `subtitle={activeLesson.subtitle}` and `modulePill={isStepByStep ? \`Module ${activeModule?.id} · ${activeModule?.title}\` : undefined}` (or equivalent) into LessonViewer when rendering the default lesson path so LessonShell can show them for step-by-step lessons.
- [ ] **LessonViewer / LessonShell:**
  - [x] Add `isStepByStepLesson(lesson)` helper with safe checks (content is non-empty array; title or first-block h2); fallback to normal render when no h3s.
  - [x] LessonShell: add optional `subtitle?: string` and `modulePill?: string`; render when present.
  - [x] When step-by-step: pass `subtitle` and `modulePill` to shell; render content in one card; intro = first h2 + first paragraph with Target icon; split by h3 into steps (stable keys, include h3 in step blocks); each step with ListChecks icon and divider; reuse existing `renderBlocks()` for intro and each step.
- [x] **Exports:** Include `subtitle` in text, RTF, and PDF when present (`utils/export.ts`).
- [x] **App.tsx (follow-up):** When step-by-step layout is live and matches M1/M2 look, remove the custom route for `1-2` and `2-2` so they use LessonViewer (and optionally remove `Module1Lesson2StepByStepGuide.tsx` and `Module2Lesson2StepByStepGuide.tsx` or keep for reference).
- [x] **M3–20 subtitles (optional):** Add one-line `subtitle` to each Step-by-Step Lesson 2 where a natural tagline exists; otherwise leave unset and rely on no subtitle or future “first sentence” derivation.

### Dependencies and risks

- Phase 2 depends on Phase 1 so that all Step-by-Step lessons share the same content shape (first two blocks = h2 + paragraph; steps = h3).
- Removing M1/M2 custom components is optional and can be done in a follow-up commit after verifying the new layout matches the screenshots.

---

## Acceptance criteria

- **Phase 1:** Every LR module 1–20 Lesson 2 that is a Step-by-Step Guide has content that starts with h2 "Step-by-Step Guide: [Topic]", then one intro paragraph, then h3 "Step 1: …", "Step 2: …", etc. Lesson `title` is "Step-by-Step Guide" where it was previously topic-in-title (M6, M7).
- **Phase 2:** Viewing any Step-by-Step Lesson 2 (including M1 and M2) shows: title, subtitle (if set), module pill always, single white card, intro section with Target icon, dividers between steps, step sections with ListChecks icon. M1 and M2 can be switched to the shared path and custom components removed.

---

## Out of scope

- RC / “Step-by-Step Approach” lessons (M21+); can be aligned in a later plan.
- Other lessons that contain “Step 1 / Step 2” subsections (e.g. drills); no change in this plan.
- Changing step content or pedagogy; only structure and layout.
