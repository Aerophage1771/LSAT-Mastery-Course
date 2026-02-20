# Implementation Plan: Standard Presentation Format (Question / Passage Boxes)

**Date:** 2026-02-18  
**Status:** Active  
**Source:** `docs/brainstorms/2026-02-18-standard-presentation-format-lr-rc-brainstorm.md`

---

## Enhancement Summary

**Deepened on:** 2026-02-18  
**Change:** Manual lesson-file audit step added.

### Addition

- **Phase 2.3 — Manual audit of every lesson file:** For each lesson file, manually check for question/passage presence and record either (a) that a question was used there (with PT-IDs if present), (b) that a passage was used there, or (c) the other purpose of that lesson (e.g. introduction, reference, breakdown-only). Deliverable: `docs/audits/lesson-question-passage-audit.md` (or .tsv) with columns such as module, lessonFile, hasQuestion, hasPassage, purposeOrNotes. This supports correct application of Question/Passage boxes and documents which lessons need no box treatment.

---

## Overview

Implement a unified box-style presentation for **Question** and **Passage** content used in both **lessons** and the **Question Bank**. Each box has a header showing "Question" or "Passage" plus PT-ID when available; boxes start expanded and are collapsible. Same visual format everywhere.

---

## Success Criteria

- [ ] Shared **QuestionBox** and **PassageBox** (or single **ContentBox** with `variant: 'question' | 'passage'`) with consistent border, radius, shadow, header, and body padding.
- [ ] Header displays **"Question"** or **"Passage"** and, when available, **question ID** or **passage ID** (e.g. "Question · PT-107-S-4-Q-15", "Passage · PT-108-S-1-P-4").
- [ ] Boxes **start expanded** and are **collapsible** (user can collapse/expand).
- [ ] **Lessons:** All question-like and passage-like content (accordions, and where applicable blockquote+options groups) render inside these boxes in LessonViewer.
- [ ] **Question Bank:** When full question or passage content is shown (e.g. expand row or detail view), it uses the same boxes.
- [ ] Options (answer choices) remain the existing OptionsBlock component inside the Question box; behavior unchanged.

---

## Phase 1: Shared Box Components

**Goal:** One place that defines the "Question" / "Passage" box chrome so LessonViewer and Question Bank can reuse it.

### 1.1 Create ContentBox (or QuestionBox + PassageBox)

- **Location:** New file `components/ContentBox.tsx` (or `components/QuestionBox.tsx` and `components/PassageBox.tsx` with shared styles).
- **API (recommended):** Single component:
  - `variant: 'question' | 'passage'`
  - `id?: string` — PT-ID (e.g. `PT-107-S-4-Q-15`), shown in header when present
  - `children: React.ReactNode` — body content
  - `defaultExpanded?: boolean` — default `true` (start expanded)
- **Behavior:** Collapsible section: header shows label ("Question" or "Passage") + optional ` · {id}`; chevron toggles expand/collapse; body uses same padding and typography as current accordion body.
- **Styling:** Shared tokens, e.g.:
  - Outer: `rounded-xl border border-slate-200 shadow-sm overflow-hidden`
  - Header: `p-4 bg-slate-50 hover:bg-slate-100 font-bold text-slate-800`, with chevron (ChevronDown/ChevronUp)
  - Body: `p-6 bg-white border-t border-slate-200`
- **Accessibility:** Use a `<button>` for the header to toggle; ensure aria-expanded and aria-controls if needed.

### 1.2 Extract PT-ID from title helper

- Add a small helper (e.g. in `ContentBox.tsx` or `utils/contentBox.ts`) to extract PT-ID from a string: match `PT-\d+-S-\d+-Q-\d+` or `PT-\d+-S-\d+-P-\d+`. Use when lesson content only provides a title string (e.g. accordion title) so the box can show the ID in the header.

---

## Phase 2: LessonViewer Integration

**Goal:** Lessons use the new boxes for all question and passage content; same format, start expanded, collapsible.

### 2.1 Use ContentBox for accordion blocks

- In **LessonViewer**, when rendering `block.type === 'accordion'`:
  - Decide **variant**: if the accordion title suggests a passage (e.g. contains "Passage", "Read Passage", or content is a single string and title matches passage-like patterns), use `variant="passage"`; otherwise use `variant="question"`.
  - **Extract ID:** From `block.title` using the PT-ID regex; pass to ContentBox as `id`.
  - **Header label:** Always "Question" or "Passage" (not the raw accordion title). Display as "Question · PT-xxx" or "Passage · PT-xxx" when ID is present.
  - **Body:** Render `block.content` inside ContentBox children (same as current FullAccordionBlock: string → split newlines and parse; ContentBlock[] → renderBlocks).
  - **defaultExpanded:** `true` (replace current `useState(false)` so boxes start open).
- Remove or refactor the current **FullAccordionBlock** so it is replaced by ContentBox + the same body rendering logic (can be an internal helper or inline).

### 2.2 Optional: Wrap standalone question-like blocks

- If there are lessons that use blockquote + paragraph + options **without** an accordion wrapper, consider wrapping that sequence in a ContentBox (variant="question") so the format is consistent. This may require detecting "question groups" in the block list (e.g. blockquote followed by options). **Scope:** Only if such patterns exist and are in scope; otherwise defer.

### 2.3 Manual audit: every lesson file (question/passage presence)

- **Goal:** Manually check every lesson file in the repo and record what role it plays so the standard format can be applied correctly and we have a single source of truth for “where are questions/passages?”
- **Scope:** All lesson files (e.g. under `modules/module1/`, `modules/module2/`, … `modules/module53/`, etc.) that are imported and rendered as lesson content.
- **Process:**
  1. List every lesson file (e.g. `Lesson1_*.tsx`, `Lesson2_*.tsx`, … in each module directory).
  2. For each file, open it and inspect its content (and optionally the lesson `title` and `content` structure).
  3. Record one of:
     - **Question used:** The lesson contains at least one LR question or RC question (stimulus/passage + stem + options or accordion with question-like content). Note PT-IDs if present in the title or content.
     - **Passage used:** The lesson contains at least one RC passage (accordion or block with long passage text). Note passage ID if present (e.g. PT-xxx-S-x-P-x).
     - **Other purpose:** The lesson has no question and no passage; record briefly what it is for (e.g. “Introduction”, “Step-by-step guide”, “Reference”, “Drill instructions”, “Breakdown/analysis only”).
- **Deliverable:** A single audit artifact (e.g. `docs/audits/lesson-question-passage-audit.md` or `.tsv`) with one row per lesson file and columns such as: `module`, `lessonFile`, `hasQuestion`, `hasPassage`, `purposeOrNotes`. This supports correct application of ContentBox (question vs passage) and documents which lessons need no box treatment.
- **When:** Can be done in parallel with or after Phase 2.1; use the audit to validate variant logic (e.g. passage-like vs question-like accordions) and to catch any standalone question blocks in Phase 2.2.

---

## Phase 3: Question Bank Same Format

**Goal:** When the Question Bank shows full question (or passage) content, it uses the same ContentBox.

### 3.1 Add full-question / passage view in Question Bank

- **Current state:** Question Bank shows a list of items (PT-ID, topic label, "Taught in" link, and a short question snippet). No full stimulus + stem + options view.
- **Change:** Add a way to view full content for one item, e.g.:
  - **Option A:** Expandable row: clicking a row (or an "Expand" control) reveals below it the full question in a ContentBox (Question · PT-xxx), with stimulus, question text, and OptionsBlock. For RC, if the item has an associated passage, show a PassageBox above (Passage · PT-xxx) then Question box.
  - **Option B:** Modal or side panel: click opens a modal that renders the same ContentBox(es) with full content.
- Use **ContentBox** with `variant="question"` (and `variant="passage"` when showing an RC passage). Pass `id={item.id}`. Use existing `item.stimulus`, `item.question`, `item.options` (and passage text if available from RC data) to render body content in the same structure as in lessons (e.g. stimulus blockquote, paragraph for stem, OptionsBlock for choices).

### 3.2 Reuse OptionsBlock

- When rendering the full question in Question Bank, reuse the same **OptionsBlock** component used in LessonViewer so answer choices look and behave the same (reveal, correct/wrong).

---

## Phase 4: Polish and Validation

### 4.1 Visual consistency

- Audit one LR lesson (e.g. Module 48) and one RC lesson (e.g. Module 52 or 53): confirm headers show "Question" or "Passage" + ID, boxes start expanded, collapse works, and body content matches previous layout (no regressions in typography or spacing).

### 4.2 Question Bank

- Confirm that when full content is shown in the Question Bank, the box and options match the lesson view.

### 4.3 Edge cases

- Accordions whose title has no PT-ID: header shows only "Question" or "Passage" (no " · ").
- Very long passage/question: scrolling and collapse both work; no layout breaks.

---

## Implementation Checklist

- [x] **1.1** Create `ContentBox.tsx` (or QuestionBox + PassageBox) with variant, id, defaultExpanded, collapsible header, shared styles.
- [x] **1.2** Add PT-ID extraction helper; use in ContentBox header when id is provided.
- [x] **2.1** In LessonViewer, replace FullAccordionBlock usage for accordions with ContentBox; derive variant and ID from block; defaultExpanded true.
- [ ] **2.2** (Optional) Wrap standalone blockquote+options question groups in ContentBox.
- [x] **2.3** Manual audit: check every lesson file for question/passage presence; record either “question used” (with PT-IDs if present), “passage used”, or “other purpose” in `docs/audits/lesson-question-passage-audit.md` (or equivalent).
- [x] **3.1** In QuestionBankView, add expand or modal to show full question (and passage when applicable) using ContentBox + OptionsBlock.
- [x] **3.2** Ensure OptionsBlock is reused in Question Bank full view (OptionsBlock in `components/OptionsBlock.tsx`, used by both).
- [ ] **4.1** Visual pass on one LR and one RC lesson.
- [ ] **4.2** Confirm Question Bank full view matches lesson format.
- [ ] **4.3** Check edge cases (no ID, long content).

---

## Dependencies

- **LessonViewer:** Must import ContentBox and pass variant/id/children/defaultExpanded; refactor accordion rendering.
- **QuestionBankView:** Needs full content view (expand or modal) and access to stimulus, question, options (and passage for RC); already has `QuestionBankItem` with id, stimulus, question, options; RC passage may need to be loaded from module or passed per item if available.
- **OptionsBlock:** Stay in LessonViewer (or move to a shared component file if not already) so Question Bank can import and use it.

---

## References

- Brainstorm: `docs/brainstorms/2026-02-18-standard-presentation-format-lr-rc-brainstorm.md`
- LessonViewer: `components/LessonViewer.tsx` (FullAccordionBlock, renderBlocks, blockquote, options)
- QuestionBankView: `components/QuestionBankView.tsx` (list items, QuestionBankItem shape)
- Types: `types.ts` (ContentBlock, accordion)
- Audit deliverable: `docs/audits/lesson-question-passage-audit.md` (or .tsv) — one row per lesson file, columns: module, lessonFile, hasQuestion, hasPassage, purposeOrNotes.
