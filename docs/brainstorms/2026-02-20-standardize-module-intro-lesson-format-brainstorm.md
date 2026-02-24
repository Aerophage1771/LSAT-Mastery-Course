# Brainstorm: Standardize Module 3–20 Lesson 1 Format to Match Module 1 & 2

**Date:** 2026-02-20  
**Status:** Draft  
**Scope:** LR modules 3–20, Lesson 1 (Introduction) only.

---

## What We're Building

- **Goal:** Determine the formatting style of Module 1 Lesson 1 and Module 2 Lesson 1, then apply that style to Module 3–20 Lesson 1s so all intro lessons share a consistent structure and appearance.
- **Outcome:** Students see the same section layout, goal callout, heading levels, and theme (Compact) for every LR module’s first lesson, whether they are viewing M1/M2 (custom components) or M3–20 (content rendered by LessonViewer).

---

## Current State

**Module 1 Lesson 1** (`Lesson1_Introduction.tsx` + custom component in App):
- **Content:** `formatId: 11` (Compact theme). Structure: **h2 "Question Goal"** → **callout** with `variant: 'goal'` → **hr** → **h2 "Introduction"** → paragraphs → **hr** → **h2 "Common Question Stems"** → intro paragraph + list → **hr** → **h2 "Core Concepts"** (and subsections) with lists/blockquotes. No "MODULE 1: …" heading in content.
- **Rendering:** Custom component `Module1Lesson1Introduction` in App; lesson data still used for export/other contexts.

**Module 2 Lesson 1** (custom component only; lesson file has different structure):
- **Content (file):** No `formatId`. Uses h2 "MODULE 2: Main Conclusion", then one paragraph containing "Question Goal" + goal text, then **h3** "Introduction", **h3** "Common Question Stems", **h3** "Core Concepts" with h4 subsections.
- **Rendering:** Custom component `Module2Lesson1Introduction` in App; same visual pattern as M1: Question Goal in a styled box (h2 + slate card), **h2** section headings with icon, **hr** between sections.

**Modules 3–20 Lesson 1** (content only, no custom component):
- **Content:** No `formatId`. Pattern: **h2 "MODULE N: [Topic]"** → single paragraph that often embeds "**Question Goal**\n\n**…**" → **h3** "Introduction" → **h3** "Common Question Stems" → **h3** "Core Concepts" (and sometimes blockquotes/lists). Section titles are h3, not h2.
- **Rendering:** `LessonViewer` with `title` and `content`; default (non-Compact) theme.

**Conclusion:** The “format” to standardize on is the **Module 1 content-block pattern**: Compact theme (`formatId: 11`), **Question Goal** as its own **h2 + goal callout**, **h2** for all major section titles (Introduction, Common Question Stems, Core Concepts), and **hr** between major sections. Module 2’s custom component matches this visually; its lesson file does not, but M1 is the clearest content-block source of truth.

---

## Desired End State

- **Modules 3–20 Lesson 1:** Each has `formatId: 11` and content restructured to the **exact structure** below. The **body begins with Question Goal** (no "MODULE N: Topic" heading); lesson title and nav supply module context.
- **Rendering:** Unchanged: M3–20 L1 continue to use **LessonViewer** (no new custom components). LessonViewer already supports `formatId: 11` and the callout block type, so they will visually align with M1 L1 when rendered from content.
- **Module 1 & 2:** No change to custom components or routing; their lesson files remain as-is (M1 already matches; M2 is custom-only).

### Standard structure (exact block sequence)

The lesson **content** array must follow this sequence. Every Lesson 1 body **begins with Question Goal**.

| Order | Block type | Required content / notes |
|-------|------------|---------------------------|
| 1 | `h2` | `"Question Goal"` |
| 2 | `callout` | `variant: 'goal'`; text = the one-sentence goal (e.g. *Identify the single claim the argument is designed to prove.*) |
| 3 | `paragraph` | **Short context line.** One sentence placing the module: e.g. *"This module covers [Topic]."* or *"Here we focus on [Topic]."* |
| 4 | `hr` | — |
| 5 | `h2` | `"Introduction"` |
| 6+ | `paragraph` (one or more) | Introduction prose (existing content, kept or lightly edited). |
| — | `hr` | — |
| — | `h2` | `"Common Question Stems"` |
| — | `paragraph` | Optional intro sentence. |
| — | `list` | Items = question stem examples (quoted). |
| — | `hr` | — |
| — | `h2` | `"Core Concepts"` (or `"Core Concepts: [Subtitle]"` if needed) |
| — | `paragraph`, `list`, `blockquote` as needed | Existing core concepts; subheadings within can stay as bold lead-ins or become `h3` per existing patterns. |

- **First content = Question Goal.** No `h2 "MODULE N: …"` in the body.
- **Context line** is a single paragraph block immediately after the goal callout, before the first `hr`.

---

## Approaches Considered

**A. Content + theme only (recommended)**  
- Add `formatId: 11` to each M3–20 Lesson 1 and restructure content to the M1 pattern: Question Goal (h2 + callout), h2 for Introduction / Common Question Stems / Core Concepts, hr between sections. No new components; LessonViewer does the rest.  
- **Pros:** Minimal code change, single source of truth (lesson content), consistent with M1. **Cons:** Slight content-editing effort per file (18 lessons).  
- **Best for:** Standardizing appearance and structure without introducing 18 custom components or new routing.

**B. Custom component per module (M3–20)**  
- Build a `ModuleNLesson1Introduction` (or similar) for each of modules 3–20 and route them in App like M1/M2.  
- **Pros:** Pixel-perfect match to M1/M2 custom UIs. **Cons:** 18 new components, 18 new branches in App, duplicated layout logic.  
- **Best for:** Only if we need layout or copy that cannot be expressed in content blocks.

**C. Single parameterized “Module Lesson 1” component**  
- One shared component (e.g. `ModuleLesson1Introduction`) that takes module id, title, badge text, and either structured sections or raw content and renders the M1/M2 layout. Refactor M1 and M2 to use it.  
- **Pros:** One component, consistent layout everywhere. **Cons:** Larger refactor; M1/M2 become data-driven; content may need to be reorganized for the component API.  
- **Best for:** Long-term if we want all Lesson 1s (including M1/M2) driven from a single template.

**Recommendation:** **Approach A.** It achieves visual and structural consistency with the least code and no new components; LessonViewer + formatId 11 + callout already support the target look. We can revisit B or C later if we need custom layout or a single shared component.

---

## Key Decisions

- **Standard definition:** Module 1 Lesson 1 content structure + Compact theme (formatId 11). Use the **exact block sequence** in "Standard structure (exact block sequence)" above.
- **Scope:** Only **Lesson 1 (Introduction)** of **LR modules 3–20**. No change to Module 1 or 2 lesson files or custom components. RC modules (e.g. 39+) and other lesson numbers are out of scope unless we extend later.
- **Implementation path:** Content and theme only: add `formatId: 11` and restructure each M3–20 `Lesson1_Introduction.tsx` to match the standard. No new custom components or App routing.
- **Body begins with Question Goal:** The first content block is **h2 "Question Goal"**; there is no "MODULE N: Topic" heading in the body. Lesson title and nav supply module context.
- **Short context line:** Include one **paragraph** block immediately after the goal callout: a single sentence that frames the module (e.g. *"This module covers [Topic]."*). Then **hr**, then **h2 "Introduction"**.

---

## Open Questions

- None.

---

## Resolved Questions

- **Context line:** Include a short context line. One **paragraph** block immediately after the goal callout, before the first **hr**, e.g. *"This module covers [Topic]."* or *"Here we focus on [Topic]."*

---

## Next Steps

- Run `/workflows:plan` to produce an implementation plan (per-file content edits, any shared script or checklist for the 18 lessons).
