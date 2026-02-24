---
title: Review Lesson 1s (Copy and Design)—Modules 3–20
type: feat
status: completed
date: 2026-02-20
---

# Review Lesson 1s (Copy and Design)—Modules 3–20

## Enhancement Summary

**Revised on:** 2026-02-20 (second pass: frontend-design + every-style-editor)  
**Sections enhanced:** Overview, Proposed Solution, Technical Considerations, Acceptance Criteria, Implementation Outline, Dependencies & Risks; Phase 1 (every-style-editor workflow); Phase 2 (frontend-design guidelines).  
**Research agents used:** best-practices-researcher, framework-docs-researcher, pattern-recognition-specialist, code-simplicity-reviewer; **skills applied:** frontend-design, every-style-editor; web search (editorial style at scale, React callout theming).

### Key Improvements

1. **Phase 1:** Single style source (one checklist), same process per file, optional Vale-style linting; “do not change” zones for quoted stems and inline formatting; post-edit grep for em dash/overused words.
2. **Phase 2:** Default to refining hardcoded goal-callout classes only (no new theme slot); optional future path to CSS variables + `data-theme` documented in Research Insights; verification reduced to 3–5 Lesson 1s + 1–2 other Compact lessons.
3. **Consistency:** Normalize stem quotes to straight double quotes; scope Phase 1 to paragraph, callout, list, breakdown (M4 only); one verification rule for Phase 1 (build + spot-check 2–3 modules).
4. **Simplicity:** One goal-callout approach in scope; trimmed acceptance criteria; no “Decide” step for Phase 2.

### New Considerations

- Vale (or similar) can enforce style rules across the 18 files; use IgnoredScopes/SkippedScopes for quoted stems if adopting.
- CSS variables + `data-theme` (or `data-context`) on a wrapper would let export use different variable definitions without branching in the component; out of scope for this feat.
- Post–Phase 1 grep for `—`, *actually*, *very*, *just* recommended before starting Phase 2.
- **Every-style-editor:** Use the four-phase workflow (Initial Assessment → Line Edit → Mechanical Review → Recommendations) per file; add a Style Guide Compliance Checklist to the Phase 1 checklist.
- **Frontend-design:** Phase 2 is “refinements only”—commit to one clear direction (e.g., editorial/refined or minimal) and execute with restraint: typography, spacing, and hierarchy over new visuals or motion.

---

## Overview

Execute a two-phase review of the 18 standardized LR Lesson 1 intros (modules 3–20): **(1) copy/style pass** applying Every-style principles to all intro prose, then **(2) visual/design pass** to refine how those lessons render (goal callout, typography, spacing, hierarchy). Copy is done first so the design review is judged against final prose. Scope is the 18 files only; Modules 1 and 2 are unchanged.

**Source:** `docs/brainstorms/2026-02-20-review-lesson-1s-copy-and-design-brainstorm.md`

---

## Problem Statement / Motivation

- The team recently standardized Lesson 1s for structure (goal callout, context line, h2 sections, formatId 11). The *copy* in those blocks has not been line-edited for consistent grammar, punctuation, tone, or style.
- The *rendered experience* (goal callout, section hierarchy, spacing) uses hardcoded and theme-driven styles that may not feel intentionally designed. A focused design pass can align hierarchy and refinement with the course’s aesthetic goals without a full redesign.

---

## Proposed Solution

**Phase 1—Copy/Style Pass**

- Line-edit all copy in the 18 `Lesson1_Introduction.tsx` files (goal callout, context line, Introduction, Common Question Stems, Core Concepts, and **breakdown** (M4 only) where present). Scope: paragraph, callout, list, and breakdown blocks only; no other block types.
- Apply **Every-style** principles: active voice, no em dashes (project convention for lesson copy), Oxford comma, consistent list punctuation and structure, avoid overused words (actually, very, just), spell out one through nine.
- **Preserve:** Bold and italics for LSAT terms and emphasis, quoted question stems, and the existing block structure (no reordering).
- **Stem quotes:** Normalize to straight double quotes for question stems where inconsistent (e.g., doubled `""` vs. `"`); document choice in plan or style note.

**Phase 2—Visual/Design Pass**

- Review rendered Lesson 1s (Module 3–20 → Lesson 1) in the app (LessonViewer + Compact theme).
- Refine *only* styling: goal callout treatment, vertical rhythm, section hierarchy, spacing. No structural or copy changes.
- Implement by **refining existing goal callout classes in LessonViewer.tsx** and spacing in LessonViewer and/or **constants/lessonFormatThemes.ts** (Compact id 11). Do not add a theme-driven goal slot or new themes; no full redesign.
- **Export:** In-app refinements only unless otherwise specified; export (PDF/JSX/HTML) may keep current callout styling unless a follow-up task updates `exportRendering.ts`.

### Research Insights (Proposed Solution)

**Copy/style at scale (Phase 1):**

- Use a **single style source** (one checklist in-repo or in plan) and the **same review sequence** for every file to reduce drift (e.g., assessment → line edit → mechanical review).
- Define **“do not change” zones**: quoted stems, block quotes, and code stay verbatim; only change surrounding prose. Preserve `**bold**` / `*italic*`; avoid adding spaces between delimiters and text.
- **Post-edit QA:** Run a grep (or script) for `—`, *actually*, *very*, *just* across the 18 files and fix remaining hits before Phase 2. Optional: use a style linter (e.g., Vale) with IgnoredScopes/SkippedScopes for quoted content so automation doesn’t touch stems.
- **Batch workflow:** (1) Normalize quote style (straight double quotes for stems). (2) Edit file by file with the checklist. (3) Run post-edit grep. (4) Build + spot-check 2–3 modules.

**Design/theming (Phase 2):**

- **Default for this feat:** Refine existing goal callout classes in `LessonViewer.tsx` and spacing in LessonViewer/Compact only. Do not add a theme-driven goal slot (keeps touch points minimal).
- **Future option:** Theme-driven callouts via CSS variables (e.g., `var(--callout-goal-bg)`) and a wrapper with `data-theme` or `data-context` so in-app vs export can use different variable sets without branching in the component. See Technical considerations → Research insights.

**References:**

- Proofed, “How to Fix Content Inconsistency for Good (Checklist)”: https://proofed.com/knowledge-hub/how-to-fix-content-inconsistency-for-good-checklist/
- Vale (style linter): https://vale.sh/ ; BlockIgnores/SkippedScopes: https://vale.sh/docs/keys/blockignores

---

## Technical Considerations

- **Content location:** All editable copy is in `content[].text` (or `content[].items`) in `modules/module3/Lesson1_Introduction.tsx` … `modules/module20/Lesson1_Introduction.tsx`. Edits are string changes only; block types and order stay the same. In-scope block types: paragraph, callout, list, breakdown (M4 only).
- **Inline formatting:** LessonViewer uses `parseInlineStyles()` for `**bold**`, `*italic*`, `` `code` ``. Preserve these in Phase 1.
- **Goal callout:** Rendered in `LessonViewer.tsx` (lines ~296–302) with fixed classes; does not use Compact theme. Phase 2 refines those classes and spacing only (no new theme slot). See Research insights for a future theme-driven option.
- **Breakdown blocks:** M4 Lesson 1 includes a `breakdown` block; its `title`/`text` (and nested formatting) are in scope for the same Every-style pass.
- **Every-style reference:** Use the every-style-editor skill and its `references/EVERY_WRITE_STYLE.md` (e.g., in compound-engineering plugin) for rules. Project overrides: avoid em dashes in lesson copy; preserve bold for LSAT terms and quoted stems.

### Research Insights (Technical)

**Theme-driven vs hardcoded (for future reference):**

- Prefer **CSS variables** on a wrapper (e.g., `data-theme` or `data-context`) over hardcoded classes for callouts if you later need theme-driven styling: components use `var(--callout-goal-bg)` etc.; in-app and export can load different variable sets.
- **Scoping:** Use `@scope (.lesson-body)` or `.lesson-body .callout--goal` so callout styles don’t leak; semantic class names + variables keep markup reusable. `@scope` is well-supported in current browsers (Chrome 118+, Safari 17.4+, Firefox 146+).
- **Export isolation:** Same component for app and export; different wrapper attribute and/or different CSS (or variable definitions) for static output so theme changes in-app don’t affect export unless you update export CSS.

**References:**

- Epic React, “CSS Variables” (theming without Context): https://www.epicreact.dev/css-variables  
- MDN `@scope`: https://developer.mozilla.org/en-US/docs/Web/CSS/@scope

---

## Acceptance Criteria

### Phase 1—Copy/Style

- [x] All **18** files are line-edited for Every-style (grammar, punctuation, active voice, list consistency, no em dashes); scope is paragraph, callout, list, and breakdown (M4 only).
- [x] **Bold** and *italics* for terms and quoted stems are preserved; question stem quotes are consistent (straight double quotes) across the 18 files.
- [x] No block order or block types changed; no removal of sections.
- [x] Build passes and spot-check 2–3 modules in app for formatting and sense (no full read-through required).

### Phase 2—Design

- [x] Refinements implemented only in `LessonViewer.tsx` and/or `constants/lessonFormatThemes.ts` (Compact id 11); goal callout classes and spacing improved.
- [x] No structural or copy changes in Phase 2; no new themes or theme-driven goal slot.
- [ ] View 3–5 Lesson 1s to confirm refinements and 1–2 other Compact lessons for regression.

---

## Success Metrics

- Lesson 1 copy reads consistently and follows the agreed style (Every-style + project overrides).
- Rendered Lesson 1s (M3–20) have clear hierarchy and intentional spacing/callout treatment.
- All 18 files remain valid (build passes, no broken JSX or missing blocks).

---

## Dependencies & Risks

- **Dependencies:** None. Content is in place; LessonViewer and Compact theme exist.
- **Risks:** (1) Scope creep in Phase 1 (e.g., rewriting rather than editing)—mitigate by sticking to style/mechanics and fixed block-type scope. (2) Phase 2 goal-callout change affecting export—accept in-app only unless export update is scoped. (3) Inconsistent application of Every-style across 18 files—mitigate by single checklist, same process per file, and post-edit grep for em dash/overused words.
- **Pattern consistency:** Where it fits without changing block order, use one canonical phrasing per recurring slot (e.g., “You can recognize…”) and standardize the “Common Question Stems” intro pattern across the 18 files to reduce drift. Apply the same Every-style and quote rules to M4’s breakdown block.

---

## Implementation Outline

### Phase 1—Copy/Style Pass

1. **Style checklist (in-repo or in plan):**  
   - Every-style: active voice, Oxford comma, numbers one–nine spelled out, no em dashes (lesson copy), avoid *actually* / *very* / *just*, list parallelism and punctuation.  
   - Project: preserve `**bold**` / `*italic*` for terms and stems; keep quoted stems; straight double quotes for stems.  
   - Use the same checklist and review sequence for every file to avoid drift. Optional: run Vale (or similar) with IgnoredScopes for quoted content after edits.

2. **Per-file edit:**  
   For each of the 18 files, edit every `paragraph`, `callout`, `list`, and `breakdown` (M4 only) `text` / `items` per the checklist. Do not change `type`, order, or add/remove blocks.

3. **Files:**  
   `modules/module3/Lesson1_Introduction.tsx` … `modules/module20/Lesson1_Introduction.tsx`.

4. **Verification:**  
   Build passes; spot-check 2–3 modules in app for formatting and sense. Before starting Phase 2, run a grep for `—`, *actually*, *very*, *just* across the 18 files and fix any remaining hits.

#### Every-style-editor skill (Phase 1)

Apply the skill’s four-phase process **per file** so copy review is consistent and auditable:

1. **Initial assessment**—Note document type (lesson intro), audience (LSAT students), tone (clear, instructional). Identify “do not change” zones (quoted stems, block quotes, inline `**bold**` / `*italic*` for terms).
2. **Detailed line edit**—Check every sentence for: grammar, punctuation (Oxford comma, no em dashes in lesson copy), capitalization (sentence case in body; title case only for true headlines if any), word choice (remove/replace *actually*, *very*, *just*), passive → active where natural. Use `EVERY_WRITE_STYLE.md` for edge cases.
3. **Mechanical review**—Same style choices across the file: list parallelism and punctuation, number format (spell out one–nine), stem quotes (straight double quotes), spacing. Preserve special elements (lists, quoted stems) without changing meaning.
4. **Recommendations**—After editing, note recurring issues for that file; fix before moving on. Optionally keep a one-line “recurring issues” note per file to catch patterns across the 18.

**Style guide compliance checklist (add to Phase 1 checklist):**  
✓ Title case only for real headlines; sentence case elsewhere. ✓ Active voice. ✓ Numbers one–nine spelled out. ✓ Oxford comma. ✓ No em dashes (project override). ✓ Overused words removed. ✓ Lists parallel and consistently punctuated. ✓ Bold/italics and quoted stems preserved. ✓ Straight double quotes for stems.  
**Common areas (Every-style):** Punctuation (commas, quotation marks), passive voice, overused words, list structure, hyphenation (compound adjectives), word usage (e.g., fewer vs. less). Project override: **bold** allowed for LSAT terms and emphasis in lesson copy.

### Phase 2—Visual/Design Pass

1. **Review:**  
   Open a sample of Module 3–20 → Lesson 1 in the app; note refinements for goal callout, typography, spacing, hierarchy.

2. **Implement:**  
   Refine existing goal callout classes in `LessonViewer.tsx` and spacing in LessonViewer and/or `lessonFormatThemes.ts` (Compact). No new theme slot; no DOM or content changes. Document approach in PR.

3. **Verify:**  
   View 3–5 Lesson 1s to confirm refinements; check 1–2 other lessons that use Compact for regression.

#### Frontend-design skill (Phase 2)

Phase 2 is **refinements only**, so match implementation to a single, clear direction: choose one aesthetic and execute with precision rather than adding many effects.

- **Purpose:** Lesson intros should feel clear and trustworthy (LSAT study context). Goal callout and section hierarchy should support scanning and focus, not distract.
- **Tone:** Commit to one direction—e.g., **editorial/refined** (generous spacing, clear typographic hierarchy, restrained color) or **minimal/utilitarian** (tight spacing, strong hierarchy, minimal decoration). Avoid mixing generic “card” styling with no point of view.
- **Constraints:** No new theme slot; no structural or copy changes. Limit changes to CSS/classes in LessonViewer and/or Compact theme. Accessibility: keep contrast and focus states intact.
- **Differentiation:** One memorable choice is enough—e.g., a distinct goal callout treatment (border, background, or typography) that feels intentional and on-brand, not a default Tailwind card.

**Frontend aesthetics (refinements-only scope):**  
- **Typography:** Ensure section headings (h2) and goal callout text have clear hierarchy; avoid generic system stacks if the app already uses a distinctive font—keep it.  
- **Color & theme:** Use existing palette; goal callout can use a single dominant color or neutral with one sharp accent (e.g., left border) so it reads as “goal” without competing with body text.  
- **Spatial composition:** Vertical rhythm (margins between sections, space after goal callout) matters more than new layout; generous or consistent spacing beats cramped blocks.  
- **Avoid:** Generic purple gradients, Inter/Roboto if avoidable, scattered micro-interactions. No new motion required for this pass.

**Important:** Match complexity to the vision. This is a refinement pass, so prefer restraint, precision, and subtle improvements over elaborate new visuals or animations.

---

## References & Research

- **Brainstorm:** `docs/brainstorms/2026-02-20-review-lesson-1s-copy-and-design-brainstorm.md`
- **Standard structure (block order):** `docs/plans/2026-02-20-feat-standardize-module-3-20-lesson-1-intro-format-plan.md`
- **Lesson content & rendering:** `types.ts` (ContentBlock), `components/LessonViewer.tsx`, `constants/lessonFormatThemes.ts`, `components/LessonShell.tsx`
- **Every-style:** every-style-editor skill and `references/EVERY_WRITE_STYLE.md` (e.g., under compound-engineering plugin)
- **SpecFlow:** Gaps and recommendations incorporated (breakdown in scope, quote normalization, goal-callout decision, Phase 1/2 done criteria, export scope).

---

## Pattern & Consistency Review (Recommendations)

*Added from pattern-recognition pass to keep implementation consistent and maintainable.*

### 1. Phase 1 vs. Phase 2 Consistency

- **Goal callout ownership:** Phase 2 says refine goal callout in LessonViewer and/or Compact theme. Today the goal is **hardcoded** in `LessonViewer.tsx` (e.g., `rounded-xl border border-slate-200 bg-slate-50 p-5`) and does **not** use `lessonFormatThemes` (Compact has no `calloutGoal`). Decide up front: **(a)** only change those hardcoded classes, or **(b)** add a theme slot (e.g., `calloutGoal`) and use it when `formatId === 11`. Document the choice in the plan or PR so Phase 2 doesn’t introduce two code paths or regress other lessons that use `variant: 'goal'` without formatId.
- **Copy vs layout:** Phase 1 edits copy only; Phase 2 edits only styling. If Phase 2 changes goal callout size or line length (e.g., padding/width), do a quick pass over 2–3 Lesson 1s to ensure goal **text** still fits and doesn’t wrap awkwardly; no need to re-edit copy unless something breaks.

### 2. Inconsistencies Across the 18 Files (Pre-Existing)

- **Quote style:** Several files use doubled straight quotes (`""`) or four quotes (`""""`) for question stems (e.g., M4, M10, M12, M14, M15). Phase 1 already calls for normalizing to straight double quotes (`"`); apply that rule to **all** stem quotes and in-paragraph quoted phrases in the 18 files so rendering is consistent.
- **Section lead-in for “Common Question Stems”:** Some lessons have an intro paragraph before the list (“You can recognize these questions by…”), others go straight to the list. Don’t change block order, but in Phase 1 use a **single preferred pattern** where possible (e.g., one short intro sentence before the list) so the 18 files don’t drift further.
- **Em dashes and style words:** Current content uses em dashes (—) and words like *actually*, *very*, *just* in places. Phase 1 checklist should explicitly: replace em dashes with comma or rephrase; reduce/remove *actually* / *very* / *just* per Every-style. Add a **post–Phase 1 verification step**: e.g., `rg '—|actually|very|just' modules/module{3..20}/Lesson1_Introduction.tsx` (or a short script) to catch missed spots before calling Phase 1 done.

### 3. Duplication and Drift Risks (18 Similar Files)

- **Single source of truth for style:** Keep one **in-repo** checklist or short doc (e.g., `docs/style/lesson-1-copy-checklist.md` or a “Phase 1 checklist” section in this plan) listing: Every-style rules, project overrides (no em dash, preserve bold/italics, straight double quotes), and optional “template” phrases (e.g., “This module covers [Topic].”, “You can recognize these questions by…”). Reference it for every file so all 18 are edited against the same baseline and future edits stay consistent.
- **No shared content fragments:** Lesson content is per-file only; there are no shared constants for repeated sentences. For Phase 1, consider drafting **one canonical sentence** for each recurring slot (e.g., the “You can recognize…” lead-in) and reusing that wording across files where the meaning fits, to limit drift.
- **Breakdown and other block types:** Only M4 Lesson 1 has a `breakdown` block. Phase 1 scope already includes it; ensure Every-style and quote rules are applied to `breakdown.items[].text` and `labels` so that block type doesn’t diverge from the rest.

### 4. Maintainability and Verification

- **Phase 2 regression:** After changing LessonViewer or Compact (e.g., goal callout or section spacing), quickly open 1–2 **other** lessons that use `variant: 'goal'` and/or formatId 11 (e.g., another module’s Lesson 1 or a different lesson using Compact) to confirm no unintended style or layout regressions.
- **Build and spot-check:** Plan already calls for “build passes” and “spot-check 2–3 Lesson 1s.” Add: run the same **style grep** (em dash / *actually* / *very* / *just*) after Phase 1 and fix any remaining hits before starting Phase 2.
