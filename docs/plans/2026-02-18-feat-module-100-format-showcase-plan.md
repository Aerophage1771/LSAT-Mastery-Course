# feat: Module 100 format showcase (10 typography/spacing themes)

---
title: Module 100 format showcase (10 typography/spacing themes)
type: feat
status: completed
date: 2026-02-18
---

## Enhancement Summary

**Deepened on:** 2026-02-18 (second pass: frontend-design focus)  
**Sections enhanced:** Overview, Proposed Solution, Technical Considerations, Phases 1–4, Acceptance Criteria, Dependencies & Risks, **Frontend-Design Deep Dive** (new)  
**Research agents used:** best-practices-researcher, framework-docs-researcher, generalPurpose (frontend-design), explore, code-simplicity-reviewer, architecture-strategist

### Key Improvements

1. **Theme system patterns:** Documented theme shape (element-keyed class strings), optional lookup helper vs direct index, and Tailwind scale consistency (same structure, different steps) to avoid layout shift and keep 10 themes comparable.
2. **Accessibility:** WCAG 1.4.12 (text spacing), contrast per theme (body text-slate-700/800), focus order unchanged across themes, and `prefers-reduced-motion` for any theme-switch transition.
3. **Simplification options:** Single `module100/lessons.ts` generator for 10 lessons (instead of 10 files); optional trim of theme type to only elements the showcase uses (e.g. omit h4 for v1); direct lookup `themes[formatId - 1]` acceptable instead of a helper.
4. **Implementation reference:** `constants/lessonFormatThemes.ts` already exists with all 10 personalities and `getLessonFormatTheme`; Phase 1 can verify/align with LessonViewer defaults rather than create from scratch.
5. **Tailwind reference:** Typography scale (text-sm → text-4xl), spacing scale, line-height (leading-snug/relaxed/loose), and contrast-safe body/heading classes documented for theme authoring.
6. **Frontend-design deep dive:** Each of the 10 themes mapped to a clear aesthetic direction (utilitarian, editorial, minimal, etc.); line-length and palette choices called out; contrast audit note for Minimal/Dense; sidebar labeling so format personality is scannable.

### New Considerations Discovered

- **FOUC/CLS:** For “content theme” (typography only) with no color-scheme switch, theme is applied in React on lesson change; no inline script required. To avoid layout shift, use only Tailwind scale-based spacing/sizing (no arbitrary values) so compact vs generous is “less margin” vs “more margin” from the same scale.
- **Theme getter location:** Architecture recommends keeping `getLessonFormatTheme` in the same constants file as the theme map; code-simplicity allows direct index in LessonViewer for v1. Plan supports both; implementer may choose.
- **List marker:** In `renderBlocks`, combine theme’s list base classes with `block.ordered ? 'list-decimal' : 'list-disc'` so each format’s list styling is preserved.

---

## Overview

Add **Module 100** (“Format showcase”) with **10 lessons** that each display the same content (Module 1’s “Premises vs. Conclusions”) in a different **spacing and typography** theme. A central theme config defines 10 distinct personalities (Current, Tight, Generous, Editorial, Minimal, Dense, Display, Warm, Sharp, Breathing room). LessonViewer applies the selected theme when the active lesson has `formatId` set. No content duplication; compare-only.

**Design:** [Module 100 format showcase design](./2026-02-18-module-100-format-showcase-design.md)  
**Frontend-design:** Each format is a clear aesthetic (utilitarian, editorial, minimal, etc.) with concrete Tailwind choices so the 10 feel distinctly different.

### Research Insights (Overview)

- **Existing asset:** `constants/lessonFormatThemes.ts` already defines `LessonFormatTheme`, `LESSON_FORMAT_THEMES` (all 10), and `getLessonFormatTheme(themes, formatId)`. Format 1 matches LessonViewer baseline; formats 2–10 use distinct Tailwind (Tight, Generous, Editorial, Minimal, Dense, Display, Warm, Sharp, Breathing room). Phase 1 can verify alignment with current viewer defaults rather than create from scratch.
- **Differentiation table (from frontend-design):** Tight = smaller padding, text-base, leading-snug; Generous = p-10 lg:p-16, mt-16 mb-8 on h2; Editorial = text-5xl title, font-black h2, large blockquote; Minimal = font-light, thin borders; Dense = text-sm, leading-snug, space-y-1; Display = font-black headings, body secondary; Warm = rounded-3xl, amber accent; Sharp = rounded-sm, tracking-tighter; Breathing room = max-w-3xl, p-12 lg:p-20, leading-loose.

---

## Problem Statement / Motivation

- There is no way to compare alternative typography and spacing for lessons in real course context.
- Module 100 provides 10 live “same content, different format” lessons so the product owner can pick a format for future use.

---

## Proposed Solution

1. **Central theme list** in `constants/lessonFormatThemes.ts`: 10 themes, each with id, name, and Tailwind class sets for container, title, h2, h3, h4, paragraph, list, blockquote, hr, and optional ContentBox wrapper margin.
2. **Lesson type:** Add optional `formatId?: number` (1–10) in `types.ts`.
3. **Shared content:** Export Premises vs. Conclusions `ContentBlock[]` from a single module; 10 thin lesson files in `modules/module100/` reference it and set `id`, `title`, `formatId`.
4. **Module 100:** New `modules/Module100.tsx` with id 100, 10 lessons; registered in `App.tsx` so it appears in the dashboard/sidebar.
5. **LessonViewer:** Accept optional `formatId`. When present, look up theme and apply theme classes to container and to each block type (h2, h3, paragraph, list, blockquote, hr, etc.). When absent, keep current default styling.
6. **App:** Pass `activeLesson.formatId` into LessonViewer when rendering a lesson.

### Research Insights (Proposed Solution)

- **Theme shape (best practices):** Use a single type (e.g. `LessonFormatTheme`) with same keys for every theme: container, title, h2, h3, h4, paragraph, list, blockquote, hr, contentBoxWrapper optional. TypeScript enforces completeness; adding a theme is one new object. Alternative: CSS variables + one class per theme (e.g. `.content-theme-compact`) for “one class swap” on a wrapper; plan keeps class-string themes for minimal refactor and explicit per-element control.
- **Lookup:** Either (a) `getLessonFormatTheme(themes, formatId)` in constants (recommended by architecture; one place for “what themes exist” and “what theme does this id get”), or (b) direct index `LESSON_FORMAT_THEMES[formatId - 1]` in LessonViewer for v1 (simplicity). Plan supports both.
- **Resolution in viewer:** Resolve theme inside LessonViewer from `formatId`; do not resolve in App or pass theme object from App. That keeps theme types and registry out of Layout/Dashboard and avoids theme logic leaking.

---

## Technical Considerations

- **Theme shape:** Each theme is an object keyed by element: `container`, `title`, `h2`, `h3`, `h4`, `paragraph`, `list`, `blockquote`, `hr`, and optionally `contentBoxWrapper`. Values are Tailwind class strings. Format 1 “Current” uses the same classes as today’s LessonViewer defaults so behavior is identical when formatId is 1.
- **LessonViewer refactor:** Today classes are hardcoded in `renderBlocks` and in the container/title. When `formatId` is set, use theme classes instead (or merge with defaults). When `formatId` is undefined, use existing hardcoded classes (no behavior change for existing modules).
- **Shared content:** Extract `content` from `modules/module1/Lesson4_PremisesVsConclusions.tsx` into e.g. `content/premisesVsConclusionsContent.ts` (or a shared export from module1) and import that array in all 10 Module 100 lesson files. Do not duplicate the long ContentBlock[].
- **Dashboard ordering:** Module 100 can be appended to the `modules` array (e.g. at the end of the list or in a “Format comparison” section). No change to how modules are rendered in the dashboard beyond adding one more card.
- **Accessibility:** Theme classes must not reduce contrast or touch focus behavior; spacing/typography only.

### Research Insights (Technical Considerations)

- **Tailwind scale consistency:** Use only Tailwind’s typography scale (text-sm → text-4xl) and spacing scale (mb-2, mb-4, mb-6, mt-6, mt-8, etc.) so “compact” vs “relaxed” is different step indices, not arbitrary values. That keeps vertical rhythm comparable and reduces layout shift when switching lessons (same DOM, same scale).
- **Contrast (framework docs):** Body: `text-slate-700` or `text-slate-800` on light background (WCAG AA). Small text: prefer `text-slate-700`/`text-slate-800`; avoid `text-slate-400`/`text-slate-500` for long copy. Headings: `text-slate-900`. All 10 themes should keep these pairings so no theme reduces contrast.
- **No FOUC for content theme:** Theme is applied when user selects a lesson (React state); no color-scheme switch. No inline script in `<head>` required for this feature. If you later add a global “content density” setting persisted in localStorage, an inline script could set a data attribute before paint.
- **Layout shift (CLS):** Same DOM for all themes; only typography and spacing change. Avoid themes that add/remove large padding or change display/flex in a way that moves content. Use spacing scale so theme switch doesn’t cause reflow.
- **WCAG 1.4.12 (Text Spacing):** Ensure content remains readable when user overrides line/word/letter/paragraph spacing; avoid clipping or overlapping when spacing is increased. Test with increased line-height/word-spacing if themes use tight values.
- **Reduced motion:** If any transition is added when switching format (e.g. opacity), wrap in `@media (prefers-reduced-motion: reduce)` and disable or shorten it.
- **Focus order:** DOM order must stay logical across themes; do not reorder or hide sections by theme so focus order stays consistent (WCAG 2.4.3).

---

## Frontend-Design Deep Dive

This section aligns the 10 format personalities with the frontend-design skill: **bold aesthetic direction**, **intentionality** (not random tweaks), and **differentiation** so the showcase feels designed, not generic.

### Aesthetic direction per format (from `constants/lessonFormatThemes.ts`)

| Format | Direction | Typography / spatial / color levers |
|--------|-----------|-------------------------------------|
| **1 Current** | Baseline | Existing viewer: indigo accent, text-lg body, border-l-4 h2, rounded-r-lg. |
| **2 Tight** | Industrial, utilitarian | Smaller padding (p-5 lg:p-8), text-base body, leading-snug, slate accent, rounded-lg; dense but readable. |
| **3 Generous** | Relaxed, spacious | p-10 lg:p-16, rounded-3xl, mt-16 mb-8 on h2, space-y-4 lists, my-14 hr; indigo retained. |
| **4 Editorial** | Magazine, strong hierarchy | text-5xl title, font-black h2, border-b-2; blockquote text-xl font-medium not-italic, bg-slate-100; max-w-3xl on paragraph; tracking-widest h4. |
| **5 Minimal** | Clean, light | font-light title/body, max-w-3xl container, border-l (thin) not border-l-4, border-slate-100 hr, marker:text-slate-400. |
| **6 Dense** | Legal/document density | max-w-5xl, text-sm body/headings, leading-snug, space-y-1 lists, border-l-2, tight margins. |
| **7 Display** | Headings dominate | font-black title + h2, border-b-4 title, text-3xl h2; body text-slate-600 text-base so headings lead. |
| **8 Warm** | Soft, approachable | rounded-3xl, stone palette (border-stone-200, text-stone-*), amber accent (border-amber-400, bg-amber-50, marker:text-amber-600), rounded-r-2xl blockquote. |
| **9 Sharp** | Geometric, crisp | rounded-sm / rounded-none, tracking-tighter on title/h3/h4, border-slate-700 h2, no rounded blockquote. |
| **10 Breathing room** | Airy | max-w-3xl, p-12 lg:p-20, leading-loose paragraph, space-y-3 lists, mt-14 mb-8 h2; indigo accent. |

### Frontend-design checklist (applied to themes)

- **Typography:** Each format uses a distinct combination of size scale (text-sm → text-5xl), weight (font-light … font-black), and letter-spacing (tracking-tight vs tracking-widest). No theme is “default Inter”; personalities are clear.
- **Spatial composition:** Line length varies (max-w-3xl Minimal/Breathing room vs max-w-5xl Dense); vertical rhythm varies (mt-6 … mt-16, mb-2 … mb-8). Generous negative space (Minimal, Breathing room) vs controlled density (Tight, Dense) creates clear contrast.
- **Color & theme:** Dominant neutrals (slate/stone) with one accent per theme (indigo baseline, slate Tight/Editorial/Sharp, amber Warm). No purple gradients; palettes are intentional.
- **Differentiation:** Sidebar labels should be **“Format N: [Name]”** (e.g. “Format 4: Editorial”) so the product owner can scan and remember which personality they’re comparing.

### Contrast and accessibility (theme audit)

- **Minimal (5):** Uses `text-slate-600` and `marker:text-slate-400`. Body at text-lg meets large-text contrast; list markers may be decorative. If markers convey meaning, consider `marker:text-slate-500` or ensure 4.5:1 on background; otherwise leave as-is and rely on body contrast.
- **Dense (6):** text-sm body; keep `text-slate-700` (already in theme). Do not lighten to slate-500 for long copy.
- **Display (7):** Body `text-slate-600` at text-base; verify 4.5:1 on white. If borderline, use `text-slate-700`.
- All other themes use text-slate-700/800/900 for body and headings; no change needed for AA.

### Implementation note

When wiring LessonViewer, preserve the **exact** class strings from `lessonFormatThemes.ts` for each block type. Do not merge or override with prose classes in a way that flattens the difference between formats (e.g. avoid a wrapper that forces one line-height on all themes). Theme classes should win for container, title, and every themed block.

---

## Implementation Phases

### Phase 1: Types and theme config

- [x] **types.ts:** Add optional `formatId?: number` to `Lesson` interface.
- [x] **constants/lessonFormatThemes.ts:** Create file (or verify existing). Define type for a single theme (e.g. `LessonFormatTheme` with `id`, `name`, and class keys: container, title, h2, h3, h4, paragraph, list, blockquote, hr, contentBoxWrapper optional). Export array `LESSON_FORMAT_THEMES` of 10 themes. Format 1 “Current” must match current LessonViewer class strings exactly (copy from `LessonViewer.tsx`). Formats 2–10: define distinct Tailwind for each personality (Tight, Generous, Editorial, Minimal, Dense, Display, Warm, Sharp, Breathing room) per design doc. Use frontend-design: bold, intentional choices (e.g. Editorial = larger blockquote and strong heading hierarchy; Dense = text-sm, tight leading; Minimal = thin font weights and generous margins).

**Files:** `types.ts`, `constants/lessonFormatThemes.ts` (new or existing).

**Research insights:** `constants/lessonFormatThemes.ts` already exists with all 10 themes and `getLessonFormatTheme`. Phase 1 = verify Format 1 classes match LessonViewer lines 107–114 and 151–165 exactly; add `formatId` to `Lesson` in types. Optional v1 simplification: omit `h4` (and h1) from theme type if the showcase lesson does not use them (add when needed).

### Phase 2: Shared content and Module 100 lessons

- [x] **Shared content:** Create `content/premisesVsConclusionsContent.ts` (or equivalent). Export `premisesVsConclusionsContent: ContentBlock[]` by copying the `content` array from `modules/module1/Lesson4_PremisesVsConclusions.tsx`. Update `Lesson4_PremisesVsConclusions.tsx` to import and use that shared content so there is a single source of truth.
- [x] **modules/module100/:** Create directory. Used single `lessons.ts` generator (builds 10 lessons from LESSON_FORMAT_THEMES).
- [x] **modules/Module100.tsx:** New file. Import the 10 lessons. Export `Module100: ModuleData` with id 100, title "Format showcase", category "LR", unit "Format comparison", description one line about comparing 10 spacing/typography formats, lessons array of the 10 lessons.

**Files:** `content/premisesVsConclusionsContent.ts` (new), `modules/module1/Lesson4_PremisesVsConclusions.tsx` (use shared content), `modules/module100/Lesson1_FormatCurrent.tsx` … `Lesson10_FormatBreathingRoom.tsx` (new), `modules/Module100.tsx` (new).

**Research insights (simplification):** Alternatively use a single generator: one file `modules/module100/lessons.ts` that builds 10 lessons from `LESSON_FORMAT_THEMES` (and theme `name` or a parallel title list): `id: \`100-${i+1}\``, `title: theme.name` or "Format N: {name}", `content: premisesVsConclusionsContent`, `formatId: i+1`. Export `module100Lessons: Lesson[]`; Module100.tsx imports that array. Same UI outcome, fewer files, single place to add/remove/rename formats.

### Phase 3: LessonViewer theme wiring

- [x] **LessonViewer.tsx:** Extend props with optional `formatId?: number`. When `formatId` is defined, import `getLessonFormatTheme(LESSON_FORMAT_THEMES, formatId)` (or direct lookup). Apply theme’s `container` and `title` classes to the root div and title. In `renderBlocks`, when theme is present, use theme’s classes for each block type (h2, h3, h4, paragraph, list, blockquote, hr); for block types not in the theme (e.g. code, table, callout, process, breakdown, options, accordion), use existing default classes or add keys to the theme. ContentBox: when theme has `contentBoxWrapper`, wrap ContentBox in a div with that class (margin/padding only); otherwise no change. When `formatId` is undefined, use existing hardcoded classes throughout (no change for all current lessons).

**Files:** `components/LessonViewer.tsx`, optionally a small helper in `constants/lessonFormatThemes.ts` (e.g. `getLessonFormatTheme(themes, id)`).

**Research insights:** When theme is present, combine theme’s list classes with `block.ordered ? 'list-decimal' : 'list-disc'` in `renderBlocks` so list marker type is preserved per block. For block types not in the theme (code, table, callout, process, breakdown, options, accordion), keep existing default classes. Direct lookup `LESSON_FORMAT_THEMES[formatId - 1]` is acceptable for v1; use `getLessonFormatTheme` if you want a single place for validation or fallback.

### Phase 4: App registration and validation

- [x] **App.tsx:** Import `Module100`. Add `Module100` to the `modules` array (e.g. at end: `..., Module100]` or in a logical group). Ensure `Layout` and lesson view receive the same `modules` list so Module 100 appears in sidebar when a module is selected. When rendering `LessonViewer`, pass `formatId={activeLesson?.formatId}` so the viewer can apply the theme.
- [x] **Verification:** Run build. Manually open Module 100, select each of the 10 lessons, and confirm (1) same content in all, (2) visibly different spacing/typography per lesson, (3) no regressions on other modules.

**Files:** `App.tsx`.

**Research insights:** Do not add `moduleId === 100` or “format showcase” checks in App/Layout; only pass `formatId` from activeLesson. Theme logic stays in constants + LessonViewer only.

---

## Acceptance Criteria

- [ ] Module 100 appears in the app’s module list; user can open it and see 10 lessons in the sidebar.
- [ ] Each of the 10 lessons displays the same Premises vs. Conclusions content (including real (A)–(E) options, analysis, breakdown, callout).
- [ ] Each lesson has visibly different spacing and/or typography (Tight vs. Generous vs. Editorial, etc.) per the 10 theme personalities.
- [ ] Lesson content is defined in one place only; Module 100 lessons reference shared content.
- [ ] Central theme list is the single source for the 10 formats; adding or editing a format is done in `constants/lessonFormatThemes.ts`.
- [ ] All existing modules and lessons behave unchanged when `formatId` is not set.
- [ ] Build passes; no new lint errors.

**Research insights:** Validate that each of the 10 themes keeps body text at least `text-slate-700` (or equivalent contrast) so WCAG AA is met. No theme should rely on color alone for meaning; focus order and semantics must be identical across themes.

---

## Success Metrics

- Product owner can open Format showcase, switch between Format 1–10, and compare typography/spacing in real lesson context.
- No regression to dashboard, sidebar, or other module/lesson views.

---

## Dependencies & Risks

- **Dependencies:** None beyond existing stack (React, Tailwind, types).
- **Risks:** LessonViewer gains branching logic; must keep default path identical for lessons without `formatId`. Refactor should be scoped to “if formatId then use theme classes else use current classes.”

**Research insights:** Keep theme only in (1) `constants/lessonFormatThemes.ts` and (2) LessonViewer. Avoid theme-specific logic in Layout, Dashboard, or routing. If you add a “format gallery” or style-guide view later, it can use the same Lesson + LessonViewer + formatId flow without spreading theme logic. References: [web.dev Theme switch](https://web.dev/patterns/theming/theme-switch/pattern), [WCAG 1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html), [Tailwind font-size](https://tailwindcss.com/docs/font-size), [Tailwind spacing](https://tailwindcss.com/docs/padding).

---

## References & Research

- **Design:** `docs/plans/2026-02-18-module-100-format-showcase-design.md`
- **Lesson type:** `types.ts` (Lesson interface)
- **LessonViewer block rendering:** `components/LessonViewer.tsx` (containerClasses, titleClasses, renderBlocks with h2/h3/paragraph/list/blockquote/hr)
- **Premises vs. Conclusions content:** `modules/module1/Lesson4_PremisesVsConclusions.tsx`
- **Module registration:** `App.tsx` (modules array, lines 70–91)
- **Frontend-design:** 10 formats as bold, distinct aesthetics (see design doc §3); frontend-design skill: typography, color/theme, spatial composition, avoid generic AI aesthetics (see § Frontend-Design Deep Dive).
- **Deepen-plan research (2026-02-18):** Best practices (theme shape, Tailwind scale, FOUC/CLS); framework docs (Tailwind typography/spacing/contrast); accessibility (WCAG 1.4.12, focus order, reduced motion); code-simplicity (single lessons.ts option, direct lookup); architecture (resolve in viewer, getter in constants). Second pass: frontend-design deep dive (aesthetic direction table, contrast audit, sidebar labeling).
