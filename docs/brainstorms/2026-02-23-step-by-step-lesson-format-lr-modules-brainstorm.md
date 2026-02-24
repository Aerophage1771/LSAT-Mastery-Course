# Brainstorm: Apply Module 1 & 2 Step-by-Step Lesson Format to Other Lessons

**Date:** 2026-02-23  
**Status:** Draft  
**Scope:** Step-by-step-style lessons across LR (and optionally RC) modules; focus on Lesson 2 “Step-by-Step Guide” in each module.

---

## What We're Building

- **Goal:** Reuse the Module 1 and Module 2 “Step-by-Step Guide” lesson format so that all modules’ step-by-step lessons share the same structure and, optionally, the same visual presentation (subtitle, card layout, section dividers, icons).
- **Outcome:** Students see a consistent step-by-step experience: clear guide title, intro callout, numbered steps with icons and bullets, and optional “Key Insight” callouts—whether they are in Module 1, 2, or any other module.

---

## Current State

**Module 1 & 2 Step-by-Step (custom components):**
- **Rendering:** Dedicated components `Module1Lesson2StepByStepGuide` and `Module2Lesson2StepByStepGuide` are routed in `App.tsx` when `activeLesson.id` is `1-2` or `2-2`. They do **not** use the generic `LessonViewer`.
- **Layout:** Title “Step-by-Step Guide,” **subtitle** (e.g. “A practical process for identifying the main conclusion with speed and accuracy.”), module badge, then a single white card containing:
  - Intro section: icon (e.g. Target) + **h2** “Step-by-Step Guide: [Topic]” + one paragraph.
  - Horizontal dividers between sections.
  - Each step: icon (e.g. ListChecks) + **h2** “Step N: [Title]” + paragraph(s) + bullet list.
  - Optional “Key Insight” block (e.g. M2’s “Recognize Common Patterns”) with distinct styling.
- **Content:** The same lessons have **data** in `modules/module1/Lesson2_StepByStepGuide.tsx` and `modules/module2/Lesson2_StepByStepGuide.tsx` (content array with h2, paragraph, h3, list, callout). The custom components **hardcode** layout and copy; the lesson files are still used for export or other consumers.

**Other modules (3–20+):**
- **Rendering:** All use **LessonViewer** with `title` and `content` from the lesson file. No subtitle, no step-specific card or dividers.
- **Content:** Many already have a Lesson 2 named “Step-by-Step Guide” with a similar **content pattern**: first block **h2** “Step-by-Step Guide: [Topic],” then paragraph, then **h3** “Step 1: …”, “Step 2: …”, etc., with paragraphs and lists. Examples: M3, M4, M8, M11, M12, M13, M14, M15, M16, M17, M18, M19, M20.
- **Inconsistencies:** Some modules use **h3** for the guide title and **h4** for steps (e.g. M5, M7), or a different lesson title (e.g. “Step-by-Step Approach”). M6 uses `title: "Step-by-Step Guide: Parallel Flaw"` instead of “Step-by-Step Guide.” M7 uses `title: "Step-by-Step Guide: Evaluate the Argument"`. RC-style modules (e.g. M21+) often use “Step-by-Step Approach” and h3/h4.

**Lesson type:** `Lesson` has `id`, `title`, `content`, and optional `formatId`. There is **no** `subtitle` field; the M2 subtitle is hardcoded in the custom component.

**LessonViewer:** Renders all content block types (h2, h3, paragraph, list, callout, hr). It adds an icon to h2/h3 via `getSectionIcon(headingText)` (e.g. CircleDot for “Question Goal” / “Introduction,” ListChecks for “Common Question Stems”). It does **not** treat “Step-by-Step Guide” or “Step 1” specially; step headings get a generic icon.

---

## Desired End State (Options)

- **Content structure:** Every Step-by-Step lesson (at least Lesson 2 for LR modules) follows the same schema: **h2** “Step-by-Step Guide: [Topic],” one intro **paragraph**, then **h3** “Step 1: …”, “Step 2: …”, etc., with paragraphs and lists, and optional **callout** blocks (e.g. “Key Insight,” “Note”).
- **Visual parity (optional):** Step-by-step lessons rendered with the same layout as M1/M2: page title + subtitle, single card, section dividers, consistent icons for guide vs. steps. This implies either extending LessonViewer with a “step-by-step” layout mode or introducing a shared **StepByStepGuideShell** that consumes content and renders the M1/M2 layout.
- **Single code path (optional):** Remove the need for per-module custom Step-by-Step components; M1 and M2 would be rendered the same way as M3+ (e.g. via LessonViewer with a step-by-step layout, or via a shared shell), with subtitle and module badge supplied by metadata or convention.

---

## Approaches Considered

**A. Content-only standardization (minimal)**  
- Standardize the **content** of every module’s Step-by-Step lesson (at least Lesson 2) to the M1/M2 pattern: h2 guide title, intro paragraph, h3 steps, optional callouts. Fix modules that use h3/h4 or different titles.
- **Pros:** No viewer changes; content becomes consistent; LessonViewer already renders h2/h3 with an icon. **Cons:** Visual experience for M3+ still differs from M1/M2 (no subtitle, no card, no step-specific dividers).
- **Best for:** Quick alignment of structure and copy without touching rendering.

**B. Viewer “step-by-step” layout mode (recommended if visual parity matters)**  
- Detect step-by-step lessons (e.g. `title` starts with “Step-by-Step Guide” or a new `lessonKind: 'step-by-step'` flag) and render them with the M1/M2 layout: LessonShell with subtitle slot, one card, intro as first section with icon, dividers between steps, consistent step icons. Subtitle could come from a new optional `subtitle` on `Lesson` or from the first paragraph.
- **Pros:** One code path; all modules get the same look; M1/M2 can eventually use the same path and retire custom components. **Cons:** Requires LessonViewer (or a shared shell) changes and a clear detection rule or metadata.
- **Best for:** Full format application (structure + visual) without maintaining 20+ custom components.

**C. Shared StepByStepGuideShell component**  
- Build a single component that takes `title`, optional `subtitle`, optional `moduleBadge`, and `content` (or a structured steps array) and renders the M1/M2 layout. Use it for M1, M2, and all other Step-by-Step lessons; LessonViewer would delegate to this shell when the lesson is step-by-step.
- **Pros:** Clear separation of “step-by-step” layout from generic lesson layout; easy to add subtitle/badge. **Cons:** Need to define how content blocks map into the shell (e.g. first h2+paragraph = intro, then h3 = steps), or introduce a dedicated step-by-step content shape.
- **Best for:** Long-term maintainability and a single source of truth for step-by-step UI.

---

## Key Decisions

- **Canonical structure:** The M1/M2 **content** pattern is the target: **h2** “Step-by-Step Guide: [Topic]” → **paragraph** (intro) → **h3** “Step 1: …” … → **h3** “Step N: …” with paragraphs/lists/callouts as needed.
- **Scope of “other lessons”:** At least each LR module’s **Lesson 2** (Step-by-Step Guide). Optionally include other lessons that are step-by-step in nature (e.g. drills with “Step 1 / Step 2” subsections); that can be a later pass.
- **Naming:** Standardize lesson `title` to “Step-by-Step Guide” and keep the topic in the first **h2** (“Step-by-Step Guide: [Topic]”). Modules that currently use “Step-by-Step Approach” or topic-in-title can be aligned to this.
- **Subtitle:** If we want visual parity, we need a source for the subtitle (e.g. new `Lesson.subtitle`, or “use first sentence of intro paragraph”). M1/M2 custom components currently hardcode it.

---

## Open Questions

1. **Scope of “format”:** Should we only standardize **content structure** (so every Step-by-Step lesson has the same block types and order), or do we also want **visual parity** (subtitle, card, dividers, same icons as in the M1/M2 screenshots)? If visual parity is desired, should we retire the custom M1/M2 Step-by-Step components and render them through the same path as the rest?

---

## Resolved Questions

1. **Scope of "format":** **Both.** Standardize content structure first, then add the step-by-step layout in the viewer (subtitle, card, dividers, same icons) so all modules match M1/M2.

---

## Next Steps

- Resolve open question above.
- If content-only: draft a short content-editing checklist (heading levels, title string) and list of files to change.
- If visual parity: choose between LessonViewer layout mode vs. StepByStepGuideShell, then add `subtitle` (or convention) and implement detection + layout.
- Optionally plan a follow-up to align “Step-by-Step Approach” (RC) lessons to the same structure for consistency.
