# feat: Format showcase full design systems (3–4 macro formats + full question cards)

---
title: Format showcase full design systems (3–4 macro formats + full question cards)
type: feat
status: completed
date: 2026-02-18
---

## Overview

Module 100’s 10 formats today feel like small tweaks (typography/spacing only); the question block is always the same ContentBox + OptionsBlock. This feature reduces the showcase to **3–4 macro formats**, each a **full design system**: lesson shell (container, headings, prose) **and** a **full question card** component (structural and tonal variety, aligned with `lsat_question_card_ui_preview.jsx`, `(2).jsx`, `(3).jsx`). Style Guide ContentBox tab stays separate.

**Brainstorm:** [Format showcase full design systems](docs/brainstorms/2026-02-18-format-showcase-full-design-systems-brainstorm.md)  
**User choices:** Approach A (3–4 macro formats), use full question card components, keep Style Guide separate.

---

## Problem Statement / Motivation

- Many of the current 10 formats (e.g. 2, 3, 8, 9) feel like “one setting tweaks” on the same form.
- The question/ContentBox never changes with format, so the showcase doesn’t feel like distinct design systems.
- Goal: when a user picks a macro format, the **entire** lesson (including the question) should share one coherent tone (minimal, graphic, editorial, etc.).

---

## Proposed Solution

1. **Macro format config:** Define 3–4 macro format ids (e.g. 1–4) and a single config mapping each to: (a) lesson shell theme (reuse or subset from `lessonFormatThemes`), (b) question card variant name (e.g. `minimal`, `graphic`, `editorial`). Expose `isMacroFormat(formatId)` and `getMacroConfig(formatId)`.
2. **QuestionCard component(s):** Add a full question card component that supports 3–4 variants. Base behavior and props on the three preview files (`LsatQuestion`-like: id, stimulus, stem, choices, correctAnswer optional). Variants implement the structural/visual differences (labels, borders, sections, choice styling). Variant mapping: minimal ≈ preview 1, graphic ≈ preview 2, editorial ≈ preview 3; optional 4th (e.g. warm) if desired.
3. **Parse accordion → question shape:** In LessonViewer, when handling a **question** accordion and the lesson has a **macro** formatId, try to parse `block.content` (ContentBlock[]) into `{ id, stimulus, stem, choices, correctIndex? }`. Rules: first blockquote → stimulus; first paragraph after stimulus (or next paragraph) → stem; first `options` block → items; normalize "(A) text" → `{ letter: 'A', text }`; derive correct from "(Correct)" in option text or from following breakdown block if present; if not found, `correctIndex` optional (reveal disabled or display-only). If content is string or parse fails, **fallback:** render current ContentBox + renderBlocks(block.content) (no QuestionCard).
4. **LessonViewer branch:** For `block.type === 'accordion'`: if variant is passage, always use ContentBox. If variant is question and `formatId` is macro and parse succeeds, render `<QuestionCard question={parsed} variant={questionCardVariant} />` (and do not recurse into block.content for that branch). Otherwise render ContentBox + renderBlocks(block.content). Invalid or out-of-range formatId: treat as non-macro (ContentBox for all accordions).
5. **Module 100 reduction:** Change Module 100 from 10 lessons to 3–4 lessons (one per macro format). Reuse same content (`premisesVsConclusionsContent`); each lesson has `formatId` in macro set. Update `module100/lessons.ts` to build from macro config only.
6. **Style Guide:** No changes to ContentBox tab or unification with format themes.

---

## Technical Considerations

- **Correct answer:** Optional for first version. Parser may derive from option text "(Correct)" or from next breakdown block’s green badge; if absent, QuestionCard renders without “Show answer” / correct feedback or with reveal disabled. Document in code.
- **Fallback contract:** Parse only when `block.content` is ContentBlock[] and has at least one of stimulus/stem and an options block; otherwise fallback. String content → no parse, use ContentBox + renderMarkdown.
- **Options normalization:** Parse `options` items like `"(A) It is used to support..."` into `{ letter: 'A', text: 'It is used to support...' }`; strip "(Correct)" from text and use it to set correctIndex when present.
- **Theme vs macro:** Existing `lessonFormatThemes` can still define shell styles for ids 1–4 (and optionally 5–10 for non-showcase use). Macro config maps formatId 1–4 to those themes and to question card variant names. Lessons with formatId 5–10 (if any) continue to use ContentBox for accordions.
- **Accessibility:** QuestionCard must support keyboard (expand/collapse, choice selection), ARIA (aria-expanded, aria-pressed, labels), and focus management. Align with existing ContentBox/OptionsBlock patterns where applicable.
- **Export:** Export (text/RTF/PDF etc.) can continue to use raw lesson content (ContentBlock[]); no requirement to emit parsed question shape for macro lessons in this feature.

---

## Implementation Phases

### Phase 1: Macro config and types

- [x] Add `constants/macroFormatConfig.ts` (or extend `lessonFormatThemes`): define `MACRO_FORMAT_IDS` (e.g. `[1, 2, 3, 4]`), type for macro config entry `{ lessonThemeId: number; questionCardVariant: 'minimal' | 'graphic' | 'editorial' | 'warm' }`, and `getMacroConfig(formatId)`, `isMacroFormat(formatId)`.
- [x] Ensure lesson shell theme for ids 1–4 exists in `lessonFormatThemes` (reuse Current, or define 3–4 dedicated shell themes for minimal/graphic/editorial). Document mapping in macro config.

**Files:** `constants/macroFormatConfig.ts` (new), optionally `constants/lessonFormatThemes.ts`.

### Phase 2: QuestionCard component and variants

- [x] Add shared types for question card: `QuestionCardQuestion` (id, stimulus, stem, choices: `{ letter, text }[]`, correctAnswer?: ChoiceLetter). Align with preview types.
- [x] Implement `QuestionCard` component (e.g. `components/QuestionCard/QuestionCard.tsx` or `components/QuestionCard.tsx`) with props: `question`, `variant: 'minimal' | 'graphic' | 'editorial' | 'warm'`, `defaultExpanded?: boolean`, optional `locked`, `onSelect`. Implement 3 (or 4) variants by copying/adapting structure and Tailwind from `lsat_question_card_ui_preview.jsx`, `(2).jsx`, `(3).jsx`; one component with variant-driven classes or 3–4 subcomponents. Include collapse, choice selection, and “Show answer” / “Hide answer” (when correctAnswer present).
- [x] Ensure a11y: expand/collapse button (aria-expanded, aria-label), choice buttons (aria-pressed), focus order.

**Files:** `components/QuestionCard.tsx` (or `components/QuestionCard/*`), types in `types.ts` or next to component.

### Phase 3: Parse accordion content and LessonViewer integration

- [x] Add `parseAccordionToQuestion(block.content, block.title)` in LessonViewer or in a small util. Input: ContentBlock[] (or string → return null), accordion title (for id). Output: `{ id, stimulus, stem, choices, correctIndex? } | null`. Rules: id from title (e.g. extractPtIdFromTitle); first blockquote text → stimulus; first paragraph after blockquote → stem; first options block → normalize to choices, detect "(Correct)" for correctIndex; if no options or no stimulus/stem, return null. Handle string content by returning null.
- [x] In `LessonViewer.renderBlocks`, for `case 'accordion'`: if variant is passage, keep current ContentBox path. If variant is question: if `isMacroFormat(formatId)` and `parseAccordionToQuestion(block.content, block.title)` returns non-null, render `<QuestionCard question={parsed} variant={getMacroConfig(formatId).questionCardVariant} defaultExpanded />`; else render current `<ContentBox>… renderBlocks(block.content) …</ContentBox>`.
- [x] Normalize options: parse each item to extract letter (A–E) and text; if text contains "(Correct)", set correctIndex and strip from display text.

**Files:** `components/LessonViewer.tsx`, optionally `utils/parseQuestionFromAccordion.ts`.

### Phase 4: Module 100 reduction and verification

- [x] Update `modules/module100/lessons.ts`: build lessons only for `MACRO_FORMAT_IDS` (3–4 lessons), same content, `formatId` 1–4 (or macro ids). Titles e.g. "Format 1: Minimal", "Format 2: Graphic", "Format 3: Editorial", "Format 4: Warm" (or 3 titles if only 3 macros).
- [x] Update `constants/lessonFormatThemes` if needed so themes for ids 1–4 match desired shell look for minimal/graphic/editorial (and optional 4th). Existing 10-theme array can remain; Module 100 just uses first 3–4.
- [x] Run build; manually verify: Module 100 shows 3–4 lessons; selecting each shows same content with distinct lesson shell and full question card (minimal/graphic/editorial); passage accordions and non–Module 100 lessons still use ContentBox; parse failure (e.g. wrong content) falls back to ContentBox without crash; Style Guide ContentBox tab unchanged.

**Files:** `modules/module100/lessons.ts`, `constants/lessonFormatThemes.ts` (if changed).

---

## Acceptance Criteria

- [ ] Module 100 displays 3–4 lessons (one per macro format). Selecting a lesson applies that macro’s lesson shell theme and question card variant to the entire view.
- [ ] For a **question** accordion in a **macro** lesson, when accordion content is parseable (ContentBlock[] with blockquote/paragraph and options), the question is rendered as **QuestionCard** with the macro’s variant (minimal, graphic, or editorial [+ optional 4th]). Collapse, choice selection, and “Show answer” (when correct is known) work.
- [ ] For a **passage** accordion (in any lesson), and for **question** accordions when formatId is not macro or parse fails or content is string, rendering uses **ContentBox** + inner content (current behavior). No crash, no blank area.
- [ ] Invalid or out-of-range formatId (e.g. 0, 11, undefined) is treated as non-macro: default shell and ContentBox for all accordions.
- [ ] Options are normalized from "(A) text" to choice objects; "(Correct)" in option text is used to set correct answer when present.
- [ ] Style Guide ContentBox tab is unchanged and separate from format showcase.
- [ ] Build passes; no new lint errors. QuestionCard is keyboard- and screen-reader friendly (expand/collapse, choice selection, labels).

---

## Success Metrics

- Product owner can open Format showcase, switch among 3–4 macro lessons, and see clearly different **full design systems** (lesson + question card), not one-setting tweaks.
- Question cards feel structurally and tonally distinct (minimal vs graphic vs editorial) in line with the three reference previews.

---

## Dependencies & Risks

- **Dependencies:** Existing Module 100, lessonFormatThemes, ContentBox, OptionsBlock, premisesVsConclusionsContent. Reference preview files at repo root (no runtime dependency; copy patterns into app).
- **Risks:** Parse heuristic may need tuning for other lesson content shapes; fallback must be robust. Correct answer optional reduces scope but may require follow-up if reveal is required later.

---

## References & Research

- **Brainstorm:** `docs/brainstorms/2026-02-18-format-showcase-full-design-systems-brainstorm.md`
- **Reference UIs:** `lsat_question_card_ui_preview.jsx`, `lsat_question_card_ui_preview(2).jsx`, `lsat_question_card_ui_preview(3).jsx`
- **Current showcase:** `docs/plans/2026-02-18-feat-module-100-format-showcase-plan.md`, `constants/lessonFormatThemes.ts`, `modules/module100/lessons.ts`
- **LessonViewer accordion/options:** `components/LessonViewer.tsx` (renderBlocks, ContentBox, OptionsBlock), `components/ContentBox.tsx`, `components/OptionsBlock.tsx`
- **Content shape:** `content/premisesVsConclusionsContent.ts`, `types.ts` (ContentBlock, accordion, options)
- **SpecFlow:** Parse contract, fallback, invalid formatId, correct answer optional, a11y (see SpecFlow analysis).
