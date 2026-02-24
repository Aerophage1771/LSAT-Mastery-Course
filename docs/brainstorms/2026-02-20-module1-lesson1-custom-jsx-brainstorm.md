# Brainstorm: Replace Module 1 Lesson 1 with Custom JSX Format

**Date:** 2026-02-20  
**Status:** Draft  
**Scope:** Argument Part · Lesson 1 (Introduction to Argument Parts)

---

## What We're Building

- **Goal:** Replace the current Module 1 Lesson 1 content **with the exact custom JSX format** provided: a full-page React component that includes its own header (BookOpen, title, subtitle, "Module 1 · Argument Part" badge), Question Goal box, Introduction, Common Question Stems, Anatomy of an Argument (blockquote + list), and Common Roles Explained.
- **Current state:** Lesson 1 is `Lesson1_Introduction.tsx` with `content: ContentBlock[]` rendered by `LessonViewer` + `LessonShell`.
- **Desired state:** When the user selects Module 1 Lesson 1, the app renders this **custom component** instead of the generic block-based view. Layout and styling match the provided snippet exactly.

---

## Why This Approach (Option A)

- **Exact layout:** The snippet has specific structure (section icons, rounded goal box, horizontal dividers, badge). Delivering it as custom JSX preserves that design without extending the content-block system.
- **Single lesson first:** We only change how Lesson 1 is rendered. Other Module 1 lessons continue to use `LessonViewer` and `ContentBlock[]`.

---

## Approaches Considered

### 1. Route-level override (match Module 100 pattern)

- **What:** In `App.tsx`, add a condition: if `activeModuleId === 1 && activeLesson.id === '1-1'`, render the custom Introduction component; else render `LessonViewer` as today.
- **Pros:** No type change; mirrors existing `FormatShowcaseLesson` branch. Fast to implement.
- **Cons:** Every future “custom JSX” lesson would add another `activeModuleId === X && activeLesson.id === 'Y'` branch.

### 2. Extend Lesson type with optional content component

- **What:** Add to `Lesson`: `ContentComponent?: React.ComponentType`. When rendering the active lesson, if `activeLesson.ContentComponent` is set, render `<activeLesson.ContentComponent />`; otherwise render `LessonViewer` with `title` and `content`. Lesson1_Introduction exports the Lesson with `ContentComponent` pointing to the new view.
- **Pros:** One pattern for any future custom-lesson view; no lesson-id checks in App. Clear opt-in per lesson.
- **Cons:** Course-level export (text/RTF/PDF) currently walks `lesson.content`; for lessons with only a component, export would need a fallback (e.g. use component-displayed text or skip).

### 3. Hybrid: override for now, refactor later

- **What:** Implement Approach 1 for Module 1 Lesson 1 only. Document that we can refactor to Approach 2 when a second custom-lesson appears.
- **Pros:** Minimal change now; no type or export behavior change.
- **Cons:** Technical debt; two ways to render lessons until refactor.

**Recommendation:** **Approach 2** (extend Lesson with optional `ContentComponent`). It keeps App.tsx free of lesson-id conditionals and gives a clear, reusable pattern. Export can treat “component-only” lessons by either (a) rendering the component off-screen and serializing, or (b) keeping a minimal `content` array for export-only text for this lesson. YAGNI: start with (b) — keep a short `content` for Lesson 1 used only for course export if needed.

---

## Key Decisions

- **Delivery:** Exact custom JSX (Option A). The provided component (or a file that exports it) is the source of truth for Lesson 1’s view.
- **Rendering path:** Prefer extending `Lesson` with optional `ContentComponent` so the app renders that component when set, and `LessonViewer` otherwise.
- **Export:** Course export (and any single-lesson export that uses `lesson.content`) must still work. Options: (1) Lesson 1 keeps a minimal `content` array used only for text/RTF/PDF export, or (2) export logic detects component-only lessons and uses a fallback (e.g. title only, or render component and serialize). Decision can be finalized in implementation plan.
- **Export controls (Copy as JSX/HTML):** The custom component is the full lesson view. Either (a) wrap it in a thin layout that adds the export dropdown (like LessonShell) and mark the custom root as `data-export-content`, or (b) add export controls inside the custom component. Recommendation: (a) so the snippet stays unchanged and we add a wrapper only in the app.

---

## Open Questions

- **Export:** For course-wide export (e.g. “Export Course”), should Lesson 1 contribute (1) text derived from a minimal `content` array, (2) text derived from the component (e.g. snapshot), or (3) title-only for that lesson? To be decided in implementation plan unless you have a preference now.

---

## Resolved Questions

- **Same content vs exact JSX?** → Exact custom JSX (Option A).
- **Where to branch (App vs type)?** → Prefer extending Lesson with optional `ContentComponent` (Approach 2).

---

## Out of Scope

- Changing other Module 1 lessons to custom JSX.
- Changing the structure of the provided snippet (only wiring it into the app and, if needed, a small wrapper for export controls).
