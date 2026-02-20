# Brainstorm: Standard Presentation Format for LR Questions, RC Passages, and RC Questions

**Date:** 2026-02-18  
**Status:** Approach chosen (A); ready for plan  
**Feature:** Box-style integrated design so LR questions, RC passages, and RC questions share a consistent visual language across the course.

---

## What We're Building

A **standard presentation format** (box-style, integrated) for three content types:

1. **LR questions** — Stimulus (argument text) + question stem + answer choices. Currently: blockquote (indigo left border) for stimulus, paragraph or blockquote for stem, OptionsBlock cards for choices; in Module 48 each full question lives in an accordion.
2. **RC passages** — Long passage text. Currently: always inside an accordion (slate border, collapsible); no dedicated "passage" block type.
3. **RC questions** — Question stem + answer choices, often shown after or alongside the passage. Currently: blockquote for stem ("**Question:** …"), same OptionsBlock for choices; in Module 53 each question is in its own accordion.

**Goal:** One coherent "box" system used **in both the Question Bank and in lessons**: same format everywhere. Each box has a header that says **"Question"** or **"Passage"** (plus question ID / passage ID when available). Boxes **start expanded** and are **collapsible** so the user can collapse if needed. Same border radius, spacing, and visual hierarchy in both contexts.

---

## Current State (Summary)

| Content type   | Where it appears        | Current chrome                                      |
|----------------|-------------------------|-----------------------------------------------------|
| LR stimulus    | LessonViewer, Module 48 | blockquote: indigo left border, bg indigo-50/50    |
| RC passage     | Module 52/53, style tab | accordion only: slate border, bg slate-50/white     |
| Question stem  | LR & RC                 | blockquote (indigo) or paragraph                    |
| Answer choices | LR & RC                 | OptionsBlock: white/slate cards, hover/reveal states |

**Gaps:** No single "question box" or "passage box" component. Stimulus vs passage use different patterns (blockquote vs accordion). Styling is consistent only for options; stimulus and passage look unrelated.

---

## Approaches Explored

### Approach A: Unified content box with semantic slots *(chosen)*

Introduce one **ContentBox** (or a small set for Question vs Passage) that wraps stimulus, passage, or question content. Each has the same outer box, a header that says **"Question"** or **"Passage"** plus ID (e.g. "Question · PT-107-S-4-Q-15", "Passage · PT-108-S-1-P-4"), and the same inner padding and typography. **Same format in Question Bank and in lessons.** Boxes **start expanded** and are **collapsible** (user can collapse if needed).

- **Pros:** Single design token set; authors and learners see one visual language; easy to add variants (e.g. "Drill" vs "Example") later.
- **Cons:** Requires mapping existing block types to the new box (blockquote → StimulusBox, accordion with passage → PassageBox); some refactor in LessonViewer and possibly content.
- **Best when:** You want a clear, long-term design system and are willing to touch render logic and possibly content structure.

### Approach B: Standardize styling tokens only (no new components)

Keep current structure (blockquote for stimulus/stem, accordion for passage, options as-is) but define shared CSS/Tailwind tokens: one "content box" class (e.g. `rounded-xl border border-slate-200 shadow-sm bg-white` or a softer variant for stimulus). Apply that class to blockquote and to the accordion body (and optionally to a wrapper around stem + options). So stimulus, passage body, and question stem all share the same border/radius/background; only layout (and accordion header for passage) differ.

- **Pros:** Minimal code change; no new block types or components; quick to ship.
- **Cons:** "Integration" is visual only; you still have two different structures (blockquote vs accordion) that happen to look similar.
- **Best when:** You want a fast, low-risk consistency pass without refactoring component boundaries.

### Approach C: Dedicated QuestionBlock and PassageBlock in content model

Add two new block types to `types.ts`: e.g. `question` (stimulus + stem + options) and `passage` (title + long text, optionally collapsible). LessonViewer renders them with a single **box style** (same border, radius, padding, optional header). Existing lessons can keep using blockquote + paragraph + options; new or migrated content can use the new blocks for a fully integrated look. LR and RC would both use `question`; RC would add `passage` for the passage text.

- **Pros:** Clear semantics; one box per "unit" (one passage, one question); content authors can choose the integrated format explicitly.
- **Cons:** New types and migration path; some content may stay in old form (mixed look until migration).
- **Best when:** You want content to explicitly declare "this is a question" or "this is a passage" and are okay with a phased rollout.

---

## Recommendation

**Approach A chosen.** Implement shared wrapper components (Question box, Passage box) that reuse the same border, radius, shadow, and padding. **Use the same format in the Question Bank and in lessons.** Header says **"Question"** or **"Passage"** plus ID when available (e.g. "Question · PT-107-S-4-Q-15", "Passage · PT-108-S-1-P-4"). **Start expanded; collapsible** so the user can collapse when needed. Render existing blockquote and accordion content inside these wrappers. Options stay as OptionsBlock inside the Question box.

---

## Key Decisions

- **Approach:** Approach A (unified content box with semantic slots). Wrapper components (Question box, Passage box) with shared box style; existing block types unchanged.
- **Same format everywhere:** Use the same box format in **both the Question Bank and in lessons** so presentation is consistent.
- **Header label:** Box header says **"Question"** or **"Passage"** (not "Stimulus"); include question ID and/or passage ID when available (e.g. "Question · PT-107-S-4-Q-15", "Passage · PT-108-S-1-P-4").
- **Expand/collapse:** Boxes **start expanded**; user can **collapse** when needed (accordion-style).
- **Scope:** Standardize the presentation of LR stimulus, RC passage, and RC question stem + options. Options component (reveal, correct/wrong) stays behaviorally the same; only outer chrome and grouping are standardized.
- **Visual language:** One family of boxes: same border radius, border color, background, and padding; header shows "Question" or "Passage" + ID where available.

---

## Open Questions

*(None; see Resolved below.)*

---

## Resolved Questions

- **Include IDs:** Question ID and/or passage ID must be shown in the box header. Approach A chosen.
- **Same format in Question Bank and lessons:** Yes; use the same box format in both places.
- **Label text:** Header says **"Question"** or **"Passage"** (clear type label).
- **Expand/collapse:** Start **expanded**; boxes are **collapsible** so the user can collapse if needed.

---

## Next Steps

- Resolve open questions above.
- If approved: create an implementation plan (e.g. via `/workflows:plan`) for the chosen approach (wrapper components, tokens, or new block types and migration).
