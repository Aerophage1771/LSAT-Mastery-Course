# Brainstorm: Standardize Question Format in Lesson Files (Module 1 First)

**Date:** 2026-02-18  
**Status:** Draft  
**Related:** Standard presentation format (ContentBox), `docs/audits/lesson-question-passage-audit.md`

---

## What We're Building

- **Goal:** Update lesson files so the question format is standardized: when a lesson includes one or more questions, each question appears inside the **integrated content box** (ContentBox) with the **question ID in the box header** (e.g. "Question · PT-107-S-4-Q-15").
- **Lesson titles:** Keep the **"Lesson X: [Simple Concept]"** (or "Advanced Lesson: …") style only. Do **not** use "Drill: …" style. Do **not** require or pull question IDs from lesson titles; prefer clean, conceptual titles.
- **Scope (first phase):** **Module 1 only.** Remaining modules can be updated in a later phase.

---

## Current State (Module 1)

- Lesson titles in the **active** Module 1 index are conceptual (e.g. "Lesson 1: …", "Lesson 4: Premises vs. Conclusions"). Some **unused** files in the folder use a "Drill: … (PT-xxx)" title style; we are **not** using that style.
- Some lessons use a **single accordion** whose **title** contains the PT-ID; ContentBox today derives its header ID from that accordion title.
- Other lessons have **inline content** (h2, blockquote, paragraph, options) with the PT-ID in an **h2** (e.g. "The Intermediate Conclusion (PT-112-S-4-Q-13)") rather than in an accordion title. Those do not currently sit inside a ContentBox; they are just blocks in the lesson.
- So: in Module 1 we have a mix of (a) accordion per question → already wrapped by ContentBox, ID from title, and (b) no accordion, question in flat blocks with ID in heading text → not yet in a box.

---

## Desired End State (Module 1)

- Every **lesson that contains a question** presents that question inside a **ContentBox** with header **"Question · &lt;PT-ID&gt;"**.
- **Lesson titles** stay as they are (e.g. "Lesson 2: The Intermediate Conclusion"); no need to embed PT-IDs in the lesson title.
- **PT-ID source:** The ID shown in the box should come from the **content** (e.g. accordion title, or a dedicated place in the block structure), not from the lesson title. Where content today has the ID only in an h2 or paragraph text, we either (1) add an accordion (or single ContentBox) that wraps that question and give it a title that includes the PT-ID for extraction, or (2) extend the content model so the ID can be provided explicitly (e.g. on a wrapper) and the box uses it.

---

## Key Decisions

- **Standard format:** Use the existing ContentBox; header shows "Question" + PT-ID when available.
- **Lesson title format:** Use only "Lesson X: [Simple Concept]" or "Advanced Lesson: …". **No "Drill: …" style.** Do not derive box ID from lesson title.
- **Scope:** **Start with Module 1 only**; other modules later.
- **ID in box:** When a question is present, its PT-ID must appear in the integrated content box header (either from accordion title or from another explicit source in the lesson content).

---

## Open Questions

- None.

---

## Resolved Questions

- **Scope:** Start with Module 1 only.
- **No drill style:** Do not use "Drill: …" in lesson titles; use only "Lesson X: [Simple Concept]" or "Advanced Lesson: …".
- **Lessons with no accordion:** Use **Option A**: wrap the question sequence (blockquote + stem + options) in an accordion whose title is "Question · PT-xxx" so ContentBox gets the ID. Change all such lessons to the new ContentBox style.

---

## Next Steps

- Execute Module 1 conversions (wrap inline questions in accordion with title "Question · PT-xxx").
- Optionally create an implementation plan for remaining modules.
