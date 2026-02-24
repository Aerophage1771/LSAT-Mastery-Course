# Brainstorm: Templates as Third Top-Level Tab (below Dashboard and Question Bank)

**Date:** 2026-02-20  
**Status:** Draft  
**Goal:** Replace the Style Guide modal with a third top-level view **Templates**, offering template reference for Introduction, Step-by-step, Common roles, Lessons, and Reference guides; remove the header Style Guide button.

---

## What We're Building

- **Deliverable:** A **third top-level destination** in the app: **Course Dashboard** | **Question Bank** | **Templates**. "Templates" is its own full-page view (same level as Dashboard and Question Bank), not a tab inside either.
- **Content:** Five template sections (sub-tabs or sub-sections within the Templates view):
  1. **Introduction** – Template for module intro / Lesson 1 (e.g. goal callout, context line, h2 sections: Introduction, Common Question Stems, Core Concepts).
  2. **Step-by-step** – Template for Step-by-Step Guide lessons (e.g. Lesson2_StepByStepGuide pattern).
  3. **Common roles** – Template or reference for common argument/question roles (e.g. premise, conclusion, common question stems).
  4. **Lessons** – General lesson format (structure, components, voice & tone; can align with current "Components" + "Structure" content).
  5. **Reference guides** – Template for Reference Guide lessons (e.g. Lesson12_ReferenceGuide, RC Reference Guide).
- **Removal:** The header "Style Guide" (Palette) button and the modal are removed. Templates is only reachable via the new sidebar entry.
- **Purpose:** One place for course authors and editors to see how to structure intros, step-by-step guides, roles, lessons, and reference guides; consistent with Dashboard and Question Bank as top-level destinations; cleaner header.

---

## Why This Approach

- **User intent:** You specified (A) remove the header button, (B) the guide as a **third tab below Question Bank and Course Dashboard** (not inside either), and (C) **Templates** for Introduction, step-by-step, common roles, lessons, and reference guides. So the app gains a third top-level nav item labeled "Templates" with five template sections.
- **Consistency:** Dashboard and Question Bank are full-page views with sidebar highlighting. Templates behaves the same: one click in the sidebar, full main area for the five template sections.
- **Header simplification:** Dropping the Style Guide button from the header reduces clutter and avoids modal overlay UX.
- **Author-facing:** Templates are the single reference for how to structure each lesson type (intro, step-by-step, roles, general lessons, reference guides).

---

## Key Decisions

- **Sidebar label:** **"Templates"** (resolved).
- **Navigation:** Add a third sidebar button below "Question Bank" labeled **"Templates"**, with the same styling pattern as Course Dashboard and Question Bank. When selected, the templates view is active and the main content area shows the five template sections.
- **State:** Extend `ActiveView` in `App.tsx` to include the templates view (e.g. `'templates'`). Add a handler (e.g. `onGoToTemplates`) and pass it to Layout; Layout renders the new nav button and App renders the Templates view when that view is active.
- **Content ownership:** Current modal content (four arrays) lives in `Layout.tsx`. Move or reorganize into a dedicated module (e.g. `content/templatesContent.ts`) and a new view component `TemplatesView.tsx` that owns five sub-tabs and rendering. Layout drops all style-guide content and modal logic and only adds the sidebar entry and callback.
- **Sub-tabs:** The Templates view has **five** sub-tabs: Introduction, Step-by-step, Common roles, Lessons, Reference guides. Each renders that section’s content (ContentBlock[] or equivalent) via `LessonViewer` or the same pattern. Planning will define the exact content per section (reuse/adapt current four modal sections where they fit, add new sections for intro and reference-guide templates).

---

## Approaches (Summary)

1. **Inline in App + content from Layout:** Add the new activeView in App and render a new `TemplatesView` component. Layout passes the five (or repackaged) content arrays as props. Layout loses the modal and header button and gains the third nav button. **Pros:** Minimal file moves. **Cons:** Layout still holds content; App gets more props.
2. **Self-contained TemplatesView + shared content module:** New file(s) (e.g. `content/templatesContent.ts` or one file per section) export five `ContentBlock[]` arrays (Introduction, Step-by-step, Common roles, Lessons, Reference guides). New component `TemplatesView.tsx` imports that content and renders five sub-tabs and `LessonViewer`. Layout drops all style-guide content and modal logic and only adds the sidebar entry and callback. App renders `<TemplatesView />` when the templates view is active. **Pros:** Clear separation; Layout and App stay thin; one place for all template content. **Cons:** New content module(s); need to define or adapt content for all five sections.
3. **Phased:** Ship the third tab first with the current four sections (Components, Structure, Drill Format, Passage Format) renamed or reorganized into five tabs (e.g. Introduction = new content from standardization plan; Step-by-step = from Structure; Common roles = new or from Structure; Lessons = Components + Structure; Reference guides = new). Then refine content in a follow-up. **Pros:** Faster first ship; content can be iterated. **Cons:** Some sections may be placeholders or combined at first.

**Recommendation:** Approach 2 for structure (dedicated TemplatesView + content module). Use Approach 3 in planning to decide whether all five sections have full content at launch or some are derived from the current four and filled in later.

---

## Open Questions

- None. Sidebar label and five template sections are set.

---

## Resolved Questions

- **Where does the guide live?** As a third top-level view (same level as Course Dashboard and Question Bank), not inside Question Bank.
- **Header button?** Remove it; Templates is only reachable from the new sidebar entry.
- **Sidebar label?** **"Templates"**.
- **What’s in Templates?** Five sections: Introduction, Step-by-step, Common roles, Lessons, Reference guides.

---

## Out of Scope (for this brainstorm)

- URL/routing (app has no router; no deep link to Templates).
- Final copy for each of the five template sections (planning will specify reuse vs new content).
- ContentBox showcase or other future tabs (can be added later to the Templates view).
