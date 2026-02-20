# Module 100: Format Showcase (Design)

**Date:** 2026-02-18  
**Status:** Draft  
**Goal:** Add a dedicated Module 100 with 10 lessons that each display the same lesson content (Module 1’s “Premises vs. Conclusions”) in a different **spacing and typography** format, so you can compare and choose a format. Content and structure stay the same; only presentation (spacing, typography) varies.

---

## 1. Overview

- **What:** A new **Module 100** (“Format showcase” or “Lesson format comparison”) with **10 lessons**. Each lesson shows the same lesson: **Module 1’s “Lesson 1: Premises vs. Conclusions”** (full content: concept, worked example with question + real (A)–(E) options, analysis, breakdown, callout).
- **Why:** Compare 10 distinct typography/spacing “themes” in real lesson context (sidebar, header, full lesson view) and pick one for future use.
- **Scope:** Same content and structure; only spacing and typography change via a **central theme list** (Option 1). No rework of content, no new block types. Optional: later apply the chosen format to the rest of the course or to a specific module.

---

## 2. Central theme list (Option 1)

- **Single source of truth:** One config file (e.g. `constants/lessonFormatThemes.ts` or `config/lessonFormats.ts`) defines **10 named formats**.
- **Each format has:**
  - `id`: 1–10  
  - `name`: Short label (e.g. "Current", "Tight", "Generous")  
  - **Theme tokens:** A set of Tailwind class strings (or a small object) used to style the lesson view when this format is active. At minimum:
    - **Container:** padding, max-width if desired  
    - **Lesson title:** size, weight, spacing  
    - **Headings (h2, h3, h4):** size, weight, margin-top/bottom, border/background if used  
    - **Paragraph:** margin, line-height, text size  
    - **List:** spacing, marker style  
    - **Blockquote:** padding, border, background  
    - **HR:** margin  
    - **ContentBox (question box):** optional; header/body padding or wrapper margin if we want format to affect the box too  
- **Usage:** When the active lesson has `formatId: N`, LessonViewer (or a wrapper) looks up the theme for `N` and applies its classes to the lesson container and to each block type so that headings, paragraphs, lists, etc. use that format’s spacing and typography.

---

## 3. Ten format personalities (frontend-design)

Each format is a **clear aesthetic**, not a random tweak. Names and intent:

| # | Name | Intent |
|---|------|--------|
| 1 | **Current** | Baseline: existing LessonViewer spacing and typography (no change). |
| 2 | **Tight** | Compact, utilitarian: less whitespace, slightly smaller type, dense but readable. |
| 3 | **Generous** | Lots of breathing room: larger margins, more space between sections, relaxed. |
| 4 | **Editorial** | Magazine-like: strong headline hierarchy, larger pull-quote style blockquote, refined body. |
| 5 | **Minimal** | Very clean: thin weights where appropriate, lots of negative space, subtle borders. |
| 6 | **Dense** | High information density: smaller text, tight leading; legal/document feel. |
| 7 | **Display** | Headings dominate: big, bold titles; body stays readable but secondary. |
| 8 | **Warm** | Softer: slightly rounded, warmer spacing, approachable. |
| 9 | **Sharp** | Geometric: tight letter-spacing on headings, crisp spacing, precise. |
| 10 | **Breathing room** | Airy: extra padding, relaxed line-height, section separation. |

Implementation will map each name to concrete Tailwind (and optional font) choices so the 10 feel distinctly different when you flip between lessons.

---

## 4. Content and Module 100 structure

- **Content:** One shared copy of the Premises vs. Conclusions lesson content (same `ContentBlock[]` as in `modules/module1/Lesson4_PremisesVsConclusions.tsx`). No duplication of the long content; either:
  - Export the content array from a shared module (e.g. `content/premisesVsConclusionsContent.ts`) and import it into 10 thin lesson files, or  
  - One lesson content file re-exported by 10 lesson components that only differ by `id`, `title`, and `formatId`.
- **Lesson type:** Extend `Lesson` in `types.ts` with optional **`formatId?: number`** (1–10). When present, the viewer applies the theme with that id.
- **Module 100:**
  - **id:** 100  
  - **title:** e.g. "Format showcase" or "Lesson format comparison"  
  - **category:** "LR" (or a dedicated "Meta" / "Design" if you add that)  
  - **unit:** e.g. "Format comparison"  
  - **description:** Short line explaining that these 10 lessons show the same content in different spacing/typography formats for comparison.  
  - **lessons:** 10 lessons. Each has:
    - `id`: `"100-1"` … `"100-10"`  
    - `title`: `"Format 1: Current"` … `"Format 10: Breathing room"` (or same names as in the theme list)  
    - `content`: the shared Premises vs. Conclusions content  
    - `formatId`: 1 … 10  

- **Registration:** Add Module 100 to the app’s module list (e.g. in `App.tsx` where `modules` is built) so it appears in the dashboard and sidebar like any other module.

---

## 5. Viewer behavior

- **When the active lesson has `formatId`:**  
  - LessonViewer (or a wrapper component) receives the active lesson. If `lesson.formatId` is defined, it looks up the theme for that id from the central theme list.  
  - The lesson is rendered inside a wrapper that applies the theme’s **container** classes.  
  - For each block type (h2, h3, paragraph, list, blockquote, hr, etc.), the viewer uses the theme’s classes for that element instead of the current hardcoded ones (or composes them). So one code path in LessonViewer branches on “theme present” and applies theme classes when rendering each block.  
  - ContentBox (question/passage box) can either (a) use the same styling as today, or (b) have a per-format override in the theme (e.g. extra margin, different inner padding) if we want the box to feel part of the format. Design choice: recommend (b) only for spacing/margin; box chrome can stay as-is unless we add a separate “ContentBox style” axis later.

- **When the active lesson has no `formatId`:**  
  - Behavior unchanged: current default spacing and typography (same as today).

- **Dashboard / navigation:**  
  - Module 100 appears in the course module list. User opens Module 100 and sees 10 lessons in the sidebar (“Format 1: Current” … “Format 10: Breathing room”). Selecting a lesson loads the same content with that format’s spacing and typography applied.

---

## 6. Files and responsibilities

| Item | Responsibility |
|------|----------------|
| `constants/lessonFormatThemes.ts` (or `config/lessonFormats.ts`) | Define the 10 themes: id, name, and Tailwind class sets for container, title, h2, h3, h4, paragraph, list, blockquote, hr, and optionally ContentBox spacing. |
| `modules/module100/` | Directory for Module 100. |
| Shared content | Export Premises vs. Conclusions `ContentBlock[]` from a single place (e.g. `content/premisesVsConclusionsContent.ts` or from module1 and re-export). |
| `modules/module100/Lesson1_FormatCurrent.tsx` … `Lesson10_FormatBreathingRoom.tsx` | Each exports a `Lesson` with `id`, `title`, `content` (shared), `formatId`. No content duplication. |
| `modules/Module100.tsx` | Defines `ModuleData` for id 100, title/description, and the 10 lessons. |
| `App.tsx` | Import Module100 and add it to the `modules` array (or equivalent) so it appears in the app. |
| `LessonViewer.tsx` | Accept optional theme (or `formatId` and resolve theme). When theme is present, apply theme classes to container and to each block type when rendering. |

---

## 7. Out of scope / later

- **Applying the chosen format to the rest of the course:** Not in this design; this is compare-only. A follow-up could add a setting or per-module override to use “Format N” for all lessons in a module or app-wide.
- **Changing ContentBox visual style (e.g. 10 box styles):** Separate from this. Module 100 is spacing/typography only; ContentBox styling can stay as-is or be wired to the same 10 Style Guide variants in a future step.
- **New fonts:** Themes can use existing font stack or Tailwind font-size/weight; adding new font files (e.g. for Editorial) is optional and can be a later enhancement.

---

## 8. Success criteria

- Module 100 is visible in the app; user can open it and select any of 10 lessons.
- Each of the 10 lessons shows the same Premises vs. Conclusions content (including real (A)–(E) options).
- Each lesson clearly looks different in spacing and/or typography (tight vs. generous vs. editorial, etc.).
- No duplicated lesson content; a single shared content source is used for all 10.
- Central theme list is the only place that defines the 10 formats; adding or changing a format is done in one file.

---

## Approval

If this design matches your intent, the next step is to create a **detailed implementation plan** (writing-plans) that breaks down tasks (theme config shape, Lesson type change, shared content extraction, Module 100 lessons and registration, LessonViewer theme wiring, and any Tailwind/custom CSS needed for the 10 personalities).
