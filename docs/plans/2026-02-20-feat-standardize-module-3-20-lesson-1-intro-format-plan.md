---
title: Standardize Module 3–20 Lesson 1 intro format
type: feat
status: completed
date: 2026-02-20
---

# Standardize Module 3–20 Lesson 1 intro format

## Enhancement Summary

**Deepened on:** 2026-02-20  
**Sections enhanced:** Overview, Standard structure, Technical considerations, Acceptance criteria, Implementation checklist, Dependencies & risks  
**Research agents used:** best-practices-researcher, frontend-design (generalPurpose), pattern-recognition-specialist  

### Key improvements

1. **Validation & maintainability:** Optional validator script (`scripts/validate-lesson1-format.mjs`) for first-four-block sequence and no MODULE N h2; template snippet for opening blocks; anti-patterns list to avoid drift.
2. **Theme & accessibility:** Apply `theme?.h2` / `theme?.h3` in LessonViewer when formatId is set so Compact controls all typography; callout as `role="region"` or `aria-labelledby` (not `alert`); one h1 (page title) then h2 sections.
3. **Design guardrails:** Context line max ~80 characters; goal callout one sentence, verb-led; explicit typography hierarchy (Question Goal = section label, callout = takeaway, context = bridge).
4. **Edge cases:** M16/M17 (Introduction with h4; keep "Common Question Stems" as top-level h2); M19/M20 goal extraction from one or two blocks; template + validator reduce copy-paste errors.

### New considerations

- Use exact heading constants (e.g. `"Question Goal"`) or shared type/schema to catch typos at build time.
- Document that theme’s `container` is intentionally unused; goal callout uses fixed classes (optional future: `calloutGoal` in theme).
- Two validation schemas if automating: M1 (no context paragraph) vs M3–20 (context required).

---

## Overview

Apply the formatting style of Module 1 and Module 2 Lesson 1 (Introduction) to **LR modules 3–20** so every intro lesson shares the same structure and appearance when rendered by LessonViewer. No new custom components or App routing; each of the 18 lesson files gets `formatId: 11` (Compact theme) and content restructured to the exact block sequence defined in the brainstorm. The body of each Lesson 1 **begins with Question Goal** (h2 + goal callout + short context line), with no "MODULE N: Topic" heading in content.

**Source of truth:** `docs/brainstorms/2026-02-20-standardize-module-intro-lesson-format-brainstorm.md`

---

## Problem statement / motivation

- Module 1 and Module 2 Lesson 1 present a consistent pattern: Question Goal in a callout, h2 section headings (Introduction, Common Question Stems, Core Concepts), and clear visual separation (hr). M1 uses content blocks + formatId 11; M2 uses a custom component with the same visual pattern.
- Modules 3–20 Lesson 1 currently use LessonViewer with **no** formatId and a different structure: first heading is "MODULE N: [Topic]", goal text is embedded in a single paragraph, and section titles use **h3** instead of h2. This creates an inconsistent experience and makes the first lesson of each module feel less polished.
- Standardizing ensures students see the same section layout, goal callout, heading levels, and Compact theme for every LR module’s first lesson.

---

## Proposed solution

**Approach A (from brainstorm):** Content and theme only.

- Add **`formatId: 11`** to each of the 18 lesson objects (`modules/module3/Lesson1_Introduction.tsx` … `modules/module20/Lesson1_Introduction.tsx`).
- Restructure each file’s **`content`** array to match the **exact block sequence** below. No new React components; no changes to `App.tsx` routing. LessonViewer already supports formatId 11, goal callout (`variant: 'goal'`), and all required block types.

**Scope:** LR modules **3–20** only. Module 1 and Module 2 lesson files and custom components are **unchanged**. RC and other modules are out of scope.

---

## Standard structure (exact block sequence)

The lesson **content** array must follow this sequence. Every Lesson 1 body **begins with Question Goal**.

| Order | Block type | Required content / notes |
|-------|------------|---------------------------|
| 1 | `h2` | `"Question Goal"` (exact text) |
| 2 | `callout` | `variant: 'goal'`; `text` = one-sentence goal (e.g. *Identify the single claim the argument is designed to prove.*) |
| 3 | `paragraph` | **Short context line.** One sentence, e.g. *"This module covers [Topic]."* or *"Here we focus on [Topic]."* Use module title or lesson context for [Topic]. |
| 4 | `hr` | — |
| 5 | `h2` | `"Introduction"` |
| 6+ | `paragraph` (one or more) | Introduction prose (existing content, kept or lightly edited). |
| — | `hr` | — |
| — | `h2` | `"Common Question Stems"` |
| — | `paragraph` | Optional intro sentence. |
| — | `list` (or multiple lists with optional `h3`/`h4` subheadings) | Question stem examples (quoted). Lessons like M20 with "For Disagreement" / "For Agreement" may keep h3/h4 + multiple lists. |
| — | `hr` | — |
| — | `h2` | `"Core Concepts"` or `"Core Concepts: [Subtitle]"` |
| — | `paragraph`, `list`, `blockquote`, optional `h3` subsections | Existing core concepts; subheadings as **h3** or **bold** lead-ins per existing pattern in the file. |

- **First content = Question Goal.** No block with `type: 'h2'` and `text` matching `MODULE \d+:`.
- **Context line** is a single **paragraph** block immediately after the goal callout, before the first **hr**. Module 1 Lesson 1 is **not** updated to add this (M1 unchanged; context line only for M3–20).

### Edge cases (M3–20)

- **Stems with h3/h4 + multiple lists:** M20 (For Disagreement / For Agreement) may keep h3/h4 and multiple lists under Common Question Stems; already allowed in the table.
- **Introduction with h4 subsections:** Some lessons (e.g. M16, M17) have h4 under Introduction (e.g. “Common Question Stems” as h4). After restructure, **“Common Question Stems” must be a top-level h2**; move stem content under that h2 and keep other h4s under Introduction as needed.
- **Goal extraction:** M3 has goal in one paragraph to split into h2 + callout + context; M19/M20 may have two blocks to merge into one callout. Preserve the one-sentence goal only in the callout.

---

## Technical considerations

- **Block types:** Defined in `types.ts` (`ContentBlock`). Used: `h2`, `callout` (with `variant: 'goal'`), `paragraph`, `hr`, `list`, `blockquote`, and optionally `h3`, `h4`. See `modules/module1/Lesson1_Introduction.tsx` for reference (note: M1 has no context paragraph; M3–20 add it).
- **formatId 11:** Compact theme in `constants/lessonFormatThemes.ts`. LessonViewer applies it when `formatId` is set (`components/LessonViewer.tsx`: `getLessonFormatTheme(LESSON_FORMAT_THEMES, formatId)`). Affects paragraph, list, hr, h4, and blockquote (via paragraph) styling. Goal callout uses fixed classes in LessonViewer, not theme.
- **Rendering:** No code changes to LessonViewer or LessonShell. Theme’s `container` is not applied; LessonShell provides layout. Design intent: typography and spacing from Compact theme; structure from content blocks.
- **Export:** Text/RTF/JSON/PDF use lesson data (block order preserved). JSX/HTML copy the current DOM (Compact styling). No change to export behavior.

### Research insights (technical)

- **Theme application:** In LessonViewer, `theme` is used for paragraph, list, hr, h4, and blockquote; **h2 and h3 in block mode use hardcoded classes** and ignore `theme.h2` / `theme.h3`. For full Compact consistency, use `theme?.h2 ?? defaultH2` and `theme?.h3 ?? defaultH3` when `formatId` is set (optional follow-up; not required for this feat).
- **Container:** Theme’s `container` is intentionally not applied; LessonShell provides layout. Document this so future theming doesn’t assume container is used.
- **Callout styling:** Goal callout uses fixed classes in LessonViewer. For full theme consistency, an optional `calloutGoal` (or `callout`) key could be added to `LessonFormatTheme` later.
- **Validation:** If adding a validator script, use a tuple schema for “first 4 blocks” (h2, callout goal, paragraph, hr) and a separate check for no h2 matching `MODULE \d+:`. M1 has 3 blocks before first hr (no context); use two schemas or module-id conditional if validating M1.

---

## Acceptance criteria

- [x] **FormatId:** Each of the 18 files (`modules/module3/Lesson1_Introduction.tsx` … `modules/module20/Lesson1_Introduction.tsx`) sets **`formatId: 11`** on the exported lesson object.
- [x] **First block:** For each of the 18, the first content block is **`{ type: 'h2', text: 'Question Goal' }`**.
- [x] **Goal callout:** The second content block is **`{ type: 'callout', text: '...', variant: 'goal' }`** with the **one-sentence** goal for that module (ideally verb-led: e.g. "Identify…", "Determine…").
- [x] **Context line:** The third content block is **`{ type: 'paragraph', text: '...' }`** (short context sentence, e.g. "This module covers [Topic]."); **max ~80 characters** so it stays one line (design: breathing room, refined minimalism).
- [x] **Fourth block:** The fourth content block is **`{ type: 'hr' }`**.
- [x] **No MODULE N heading:** No content block has `type: 'h2'` and `text` starting with `"MODULE "` followed by a number and colon.
- [x] **Section headings:** Major sections use **h2** for "Introduction", "Common Question Stems", and "Core Concepts" (not h3). **hr** between these major sections.
- [x] **Common Question Stems:** Optional intro paragraph + one or more **list** blocks; **h3**/ **h4** subheadings allowed where content requires (e.g. M20 Agreement vs Disagreement).
- [x] **Core Concepts:** **h2** "Core Concepts" or "Core Concepts: [Subtitle]"; then paragraphs/lists/blockquotes; **h3** or bold lead-ins for subsections allowed.
- [x] **Module 1 & 2:** No changes to `modules/module1/Lesson1_Introduction.tsx`, `modules/module2/Lesson1_Introduction.tsx`, or to App routing/custom components.
- [x] **Visual check:** In the app, opening any Module 3–20 Lesson 1 shows: goal callout, context line, then Introduction, Common Question Stems, Core Concepts with Compact theme applied.
- [x] **Copy and hierarchy (design guardrails):** Context line is one short sentence (max ~80 characters). Goal callout text is one sentence, ideally verb-led (e.g. “Identify…”, “Determine…”). Typography hierarchy: “Question Goal” = section label, callout = takeaway, context line = bridge; Introduction / Stems / Core Concepts = major h2 sections.

### Research insights (accessibility)

- **Heading hierarchy:** One h1 per page (lesson title in LessonShell); major sections in body are h2; subsections h3 then h4. Do not skip levels. Plan’s use of h2 for Introduction, Stems, Core Concepts is correct.
- **Callout semantics:** Goal/tip/summary callouts are static highlights. Do **not** use `role="alert"`. Prefer `role="region" aria-label="Question goal"` or `aria-labelledby` pointing to the preceding h2 so the callout is a named landmark. Optional: add `id` to the Question Goal h2 and `aria-labelledby` on the callout div for better landmark navigation.

---

## Success metrics

- All 18 LR Lesson 1s render with the same structural pattern (Question Goal → context → Introduction → Stems → Core Concepts) and Compact theme.
- No "MODULE N: Topic" in the body of any M3–20 Lesson 1.
- Exports (Text/RTF/JSON/PDF) emit content in block order; JSX/HTML reflect current lesson DOM with Compact styling.

---

## Dependencies & risks

- **Dependencies:** None. LessonViewer and types already support formatId 11 and all block types.
- **Risks:** Manual edits across 18 files may introduce typos or block-order mistakes. Mitigation: use the checklist below and optionally add a small validator script (e.g. `scripts/validate-lesson1-format.mjs`) to assert first four blocks and absence of "MODULE N:" h2; run in CI or pre-commit if desired.

### Research insights (validation)

- **Validator scope:** First four blocks = h2 "Question Goal", callout `variant: 'goal'`, paragraph (context), hr; no block with type h2 and text matching `MODULE \d+:`. Optional: check `formatId === 11`, context length (e.g. ≤120 chars), single-sentence goal.
- **Schema:** If using Zod (or similar), use a tuple for the prefix and `.rest()` for remaining blocks; separate schema for M1 (3 blocks before first hr) vs M3–20 (4 blocks). Content is `string | ContentBlock[]`; validate only when content is an array.

---

## Implementation checklist (per file)

Apply the following to **each** of the 18 files. Use `modules/module1/Lesson1_Introduction.tsx` as structural reference (block types and order); add the **context paragraph** after the goal callout as in the table above.

| # | File | Notes |
|---|------|--------|
| 1 | `modules/module3/Lesson1_Introduction.tsx` | Remove h2 "MODULE 3: Method of Reasoning"; extract goal into callout; add context line; h3→h2 for Introduction, Stems, Core Concepts; add hr. |
| 2 | `modules/module4/Lesson1_Introduction.tsx` | Same pattern. |
| 3 | `modules/module5/Lesson1_Introduction.tsx` | Same pattern. |
| 4 | `modules/module6/Lesson1_Introduction.tsx` | Same pattern. |
| 5 | `modules/module7/Lesson1_Introduction.tsx` | Same pattern. |
| 6 | `modules/module8/Lesson1_Introduction.tsx` | Same pattern. |
| 7 | `modules/module9/Lesson1_Introduction.tsx` | Same pattern. |
| 8 | `modules/module10/Lesson1_Introduction.tsx` | Same pattern. |
| 9 | `modules/module11/Lesson1_Introduction.tsx` | Same pattern. |
| 10 | `modules/module12/Lesson1_Introduction.tsx` | Same pattern. |
| 11 | `modules/module13/Lesson1_Introduction.tsx` | Same pattern. |
| 12 | `modules/module14/Lesson1_Introduction.tsx` | Same pattern. |
| 13 | `modules/module15/Lesson1_Introduction.tsx` | Same pattern. |
| 14 | `modules/module16/Lesson1_Introduction.tsx` | Same pattern. |
| 15 | `modules/module17/Lesson1_Introduction.tsx` | Same pattern. |
| 16 | `modules/module18/Lesson1_Introduction.tsx` | Same pattern. |
| 17 | `modules/module19/Lesson1_Introduction.tsx` | Same pattern. |
| 18 | `modules/module20/Lesson1_Introduction.tsx` | Same pattern; keep h3/h4 + multiple lists under Common Question Stems if present (Agreement vs Disagreement). |

**Per-file steps (repeat for each):**

1. Add **`formatId: 11`** to the lesson object.
2. Remove the first block if it is **h2 "MODULE N: [Topic]"**.
3. Replace the single paragraph that contains "**Question Goal**" (and goal text) with: **h2** "Question Goal" → **callout** `variant: 'goal'` (text = goal sentence only) → **paragraph** (context line) → **hr**.
4. Change every **h3** used for "Introduction", "Common Question Stems", or "Core Concepts" to **h2**.
5. Insert **hr** between major sections (after goal block group, after Introduction, after Common Question Stems).
6. Preserve all other content (lists, blockquotes, subsections). Use **h3** or bold for Core Concepts subsections as already present in the file.
7. **Design guardrails:** Context line one sentence, under 80 characters. Goal callout one sentence only. Introduction: clear first sentence; avoid long walls before first list. Common Question Stems: consistent formatting (e.g. quoted stems).

**Optional:** Use the template snippet (see [Pattern consistency & maintainability](#pattern-consistency--maintainability-analysis)) for the first four blocks; after editing all 18 files, run `node scripts/validate-lesson1-format.mjs` if the validator script is implemented.

### Anti-patterns to avoid

- Batch-editing without per-file or batch validation.
- Changing section order (e.g. Stems before Introduction).
- Leaving "Introduction" / "Common Question Stems" / "Core Concepts" as h3 after restructure.
- Inconsistent context line; prefer one pattern (e.g. "This module covers [Topic].").
- Removing or demoting content h4s that belong in Stems or Core Concepts.
- Forgetting `formatId: 11` in one file.
- Copy-pasting goal text that includes "**Question Goal**" or extra headings into the callout.

---

## References & research

- **Brainstorm (source of truth):** `docs/brainstorms/2026-02-20-standardize-module-intro-lesson-format-brainstorm.md`
- **Reference lesson:** `modules/module1/Lesson1_Introduction.tsx` (formatId 11, block order; no context paragraph)
- **Block types:** `types.ts` (`ContentBlock`, `Lesson`)
- **Theme:** `constants/lessonFormatThemes.ts` (id 11 = Compact)
- **Rendering:** `components/LessonViewer.tsx` (formatId, renderBlocks, goal callout at line ~296)
- **SpecFlow analysis:** Gaps and recommendations incorporated above (context line for M3–20 only; Stems may have h3/h4 + multiple lists; Core Concepts h3 or bold; M1 unchanged).
- **Deepen-plan research:** Best practices (content structure, theme application, Zod validation, a11y); frontend-design (typography hierarchy, context line length, goal copy, design guardrails); pattern-recognition (validator script, template snippet, edge cases, anti-patterns).

---

## Pattern consistency & maintainability (analysis)

*Added to support repeatable edits across 18 files and reduce drift.*

### 1. Patterns that reduce drift

| Pattern | Purpose | Recommendation |
|--------|--------|----------------|
| **Shared validator** | Single source of truth for “first four blocks + no MODULE N h2”; catches copy-paste and ordering mistakes. | Add `scripts/validate-lesson1-format.mjs` (or `.cjs`) that: (1) accepts file paths or glob `modules/module{3..20}/Lesson1_Introduction.tsx`, (2) loads each file’s exported `content` (e.g. via dynamic import or regex/parse of the array), (3) asserts block 1 = `h2` "Question Goal", block 2 = `callout` with `variant: 'goal'`, block 3 = `paragraph`, block 4 = `hr`, (4) asserts no block has `type: 'h2'` and `text` matching `/^MODULE \d+:/`. Run after each file or in batch; optionally in CI. |
| **Template snippet** | Ensures identical opening sequence and reduces typos (e.g. "Question Goal" vs "Question Goals"). | Add a **snippet** (in plan or in repo, e.g. `docs/snippets/lesson1-intro-first-blocks.txt`) with the exact first four blocks as copy-paste, with placeholders: `[GOAL_SENTENCE]`, `[CONTEXT_LINE]`. Example: `{ type: 'h2', text: 'Question Goal' }, { type: 'callout', text: '[GOAL_SENTENCE]', variant: 'goal' }, { type: 'paragraph', text: '[CONTEXT_LINE]' }, { type: 'hr' }`. |
| **Checklist format** | Keeps per-file progress and prevents skipping files. | Keep the existing per-file table; add one checkbox per file: “Validator passes” and a single global step: “Run `node scripts/validate-lesson1-format.mjs` after all edits.” |

### 2. Edge cases (different structure) and how to document them

| Edge case | Example files | How to handle / document |
|-----------|----------------|---------------------------|
| **Multiple lists under Common Question Stems with h4 subheadings** | M20 (For Disagreement / For Agreement) | Plan already allows: keep h3/h4 + multiple lists under Stems. Document in plan: “Stems: optional intro paragraph + one or more list blocks; h3/h4 subheadings allowed (e.g. M20).” |
| **h4 subsections under Introduction (before Stems)** | M16 (The Art of Synthesis, MSS vs. Must Be True, then Common Question Stems as h4); M17 (The Foundation of Deduction, then Common Question Stems as h4) | **Document:** Under “Standard structure,” state: “Introduction may contain one or more **h3** or **h4** subsections and multiple paragraphs/lists. The **next** major section is **h2** ‘Common Question Stems’ (not an h4).” For M16/M17: after converting to standard, the **h2** “Introduction” block is followed by existing h4/h3 + content; then **hr**; then **h2** “Common Question Stems” with only the stem list(s). Content that is currently under an h4 “Common Question Stems” (M16/M17) moves under the new h2 “Common Question Stems”; other h4s stay under Introduction. |
| **Goal in two blocks** | M19, M20 (paragraph “**Question Goal**” then separate paragraph with goal text) | **Document:** “Goal extraction: if goal is in one paragraph with ‘**Question Goal**’ prefix, split into h2 + callout text only. If two blocks (title + text), merge into one callout `text` and remove the title paragraph.” |
| **Core Concepts with numbered h4 subsections** | M19, M7, M15, M18, etc. | Plan already allows h3 or bold; keep existing h4 numbered subsections under Core Concepts. No change. |

**Recommendation:** Add a short **“Edge cases (M3–20)”** subsection under “Standard structure” that lists: (1) Stems may have h3/h4 + multiple lists (M20); (2) Introduction may have h3/h4 subsections—Stems must still be a top-level h2 (M16, M17); (3) goal may be one paragraph (split) or two blocks (merge into callout).

### 3. Anti-patterns to avoid when editing 18 similar files

- **Batch-editing without per-file validation:** Editing many files in one go without running the validator (or spot-checking) after each file increases the chance that one file keeps a wrong first block or a stray “MODULE N:” h2.
- **Changing section order:** Do not move “Common Question Stems” before “Introduction” or merge sections. Stick to the defined block sequence.
- **Leaving major sections as h3:** After restructure, “Introduction,” “Common Question Stems,” and “Core Concepts” must be **h2**. Replacing the MODULE h2 with “Question Goal” but leaving the rest as h3 is an anti-pattern.
- **Inconsistent context line:** Avoid ad-hoc phrasing. Prefer a single pattern, e.g. “This module covers [Topic].” or “Here we focus on [Topic].” and derive [Topic] from the lesson/module title.
- **Removing or demoting content h4s:** Do not remove or convert to paragraph the h4 subheadings that structure content (e.g. M20 “For Disagreement” / “For Agreement,” M19 “1. Isolate the Conflict”). Only the **major** section titles become h2; subsections stay h3/h4 as they are.
- **Forgetting `formatId: 11` in one file:** Easy to miss when copying. Mitigation: validator can optionally check for `formatId: 11` in the lesson object if the script has access to the full export.
- **Copy-pasting goal text with markdown from the original paragraph:** Goal callout should be one sentence; strip extra “**Question Goal**” or duplicate headings from the callout `text`.

### 4. Optional automation: validator script

- **Scope:** Validate the **first four content blocks** and the **absence of any h2** whose `text` matches `MODULE \d+:`.
- **Location:** `scripts/validate-lesson1-format.mjs` (or `.cjs` to avoid import assertions).
- **Input:** File paths as args, or default glob `modules/module{3..20}/Lesson1_Introduction.tsx` (ensure only the 18 in-scope files).
- **Checks:**
  1. Block 1: `content[0].type === 'h2' && content[0].text === 'Question Goal'`
  2. Block 2: `content[1].type === 'callout' && content[1].variant === 'goal' && typeof content[1].text === 'string' && content[1].text.length > 0`
  3. Block 3: `content[2].type === 'paragraph' && typeof content[2].text === 'string'`
  4. Block 4: `content[3].type === 'hr'`
  5. No block: `b.type === 'h2' && /^MODULE \d+:/.test(b.text)`
- **Optional:** Assert `formatId === 11` if the script imports the lesson object.
- **Output:** Exit 0 if all pass; exit 1 and print which file(s) and which check(s) failed.
- **Usage:** `node scripts/validate-lesson1-format.mjs` or `node scripts/validate-lesson1-format.mjs modules/module5/Lesson1_Introduction.tsx`.

### 5. Actionable recommendations to add to the plan

1. **Add the validator script** as in §4; add to implementation checklist: “Run validator after each file (or after all 18) and fix any failures.”
2. **Add the template snippet** (first four blocks with placeholders) under “Implementation checklist” or in `docs/snippets/lesson1-intro-first-blocks.txt`.
3. **Document edge cases** in a short “Edge cases (M3–20)” subsection: Stems with h3/h4 + lists (M20); Introduction with h3/h4 subsections and Stems as top-level h2 (M16, M17); goal in one vs two blocks.
4. **Add “Anti-patterns”** to the checklist: “Avoid: leaving Introduction/Stems/Core Concepts as h3; removing content h4s; forgetting formatId; inconsistent context line; batch edits without validation.”
5. **Optional CI:** Run `scripts/validate-lesson1-format.mjs` in CI on the 18 files so future changes don’t regress the structure.
