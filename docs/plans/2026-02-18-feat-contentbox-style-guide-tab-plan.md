# feat: ContentBox Style Guide tab (10 live variants)

---
title: ContentBox Style Guide tab (10 live variants)
type: feat
status: completed
date: 2026-02-18
---

## Overview

Add a 5th tab to the in-app Style Guide modal that shows **10 live ContentBox visual variants**. Each variant has a label (e.g. "Variant 1 – Current", "Variant 2 – Minimal") and the same sample content; all are collapsible so the product owner can compare and later choose one to apply to the real `ContentBox` component. No "select variant" or persist-selection behavior in scope.

**Source:** [Brainstorm: 10 ContentBox variants live in Style Guide](../brainstorms/2026-02-18-contentbox-style-guide-mockups-brainstorm.md)

---

## Problem Statement / Motivation

- The app uses a single ContentBox design (slate-50 header, white body, rounded-xl, shadow). There is no way to compare alternative designs in-context.
- A style guide with multiple live variants allows comparing visuals (border, header, shadow, corners, body) and picking one before changing `ContentBox.tsx`.

---

## Proposed Solution

1. **New tab:** Add a 5th Style Guide tab (e.g. "ContentBox") alongside Components, Structure, Drill Format, Passage Format.
2. **Tab content:** When the ContentBox tab is active, render a **custom showcase view** (not `LessonViewer` + `ContentBlock[]`) that displays 10 labeled, collapsible boxes. Each box reuses the same structure as ContentBox (header button + expandable body) but with different Tailwind classes so the 10 look distinct.
3. **Labels:** Each variant shows a label above or beside the box (e.g. "Variant 1 – Current", "Variant 2 – Minimal", … "Variant 10 – …").
4. **Sample content:** One short, fixed sample (e.g. "Question · PT-107-S-4-Q-15" in header + 2–3 lines of body text) used for all 10 so comparison is fair.
5. **Behavior:** Multiple variants can be expanded at once; no accordion (single-open) requirement. Esc closes the modal (existing behavior). Scroll position in the modal resets to top when switching to the ContentBox tab (recommended for consistency).

---

## Technical Considerations

- **Layout.tsx**
  - Extend `styleGuideTab` type: `'components' | 'structure' | 'drills' | 'passages' | 'contentbox'`.
  - Add a 5th tab button (e.g. "ContentBox") that sets `styleGuideTab` to `'contentbox'`.
  - In the modal body: when `styleGuideTab === 'contentbox'`, render a dedicated **ContentBox showcase component** instead of `<LessonViewer title={...} content={...} variant="modal" />`. When any other tab is active, keep current behavior (LessonViewer + corresponding content array).
  - Optional: on tab change to `'contentbox'`, scroll the modal content area to top (e.g. via a ref on the scrollable div).
- **New component: ContentBoxShowcase (or similar)**
  - **Location:** e.g. `components/ContentBoxShowcase.tsx` (or under `components/style-guide/` if preferred).
  - **Responsibility:** Render a list of 10 sections. Each section has: (1) a visible label (e.g. "Variant 1 – Current"), (2) one collapsible box with the same sample header text and body content, (3) Tailwind classes that differ per variant (wrapper, header button, body div).
  - **State:** Each of the 10 can have its own `useState` for expanded/collapsed (or a single state object `{ [index]: boolean }`). Default: all collapsed (or all expanded—specify in AC).
  - **Sample content:** Hardcode one header string (e.g. "Question · PT-107-S-4-Q-15") and one body snippet (e.g. 2–3 lines of placeholder/question-style text). No props for content; this is style-guide-only.
  - **Accessibility:** Each collapsible header is a `<button>` with `aria-expanded` and clear label (e.g. include "Variant N" in button text or `aria-label`). No change to existing modal focus or Esc behavior unless desired (see AC).
- **ContentBox.tsx**
  - No change in this phase. The showcase is a separate component that duplicates the *structure* (button + conditional body) with different classNames. Once a variant is chosen later, the chosen style can be applied to `ContentBox.tsx` (or via a `styleVariant` prop) in a follow-up.

---

## Acceptance Criteria

- [x] **Tab:** A 5th tab, labeled "ContentBox" (or "Question box"), exists in the Style Guide modal. Selecting it shows only the ContentBox variants content.
- [x] **Variants:** Exactly 10 ContentBox-style variants are shown. Each has a visible label (e.g. "Variant 1 – Current", "Variant 2", … "Variant 10"); one variant is explicitly labeled "Current" (recommended: Variant 1).
- [x] **Collapsible:** Each variant is expandable/collapsible. Same sample header and body content for all 10. Multiple variants may be expanded at once.
- [x] **Visual spread:** The 10 variants differ meaningfully by at least: border, header background, corners, shadow, and/or body background (see "10 variant styles" below).
- [x] **Scroll:** Modal content area scrolls when content overflows; body scroll remains locked while modal is open. Optional: scroll to top when switching to the ContentBox tab.
- [x] **Keyboard:** Enter/Space on a variant header toggles that variant; Esc closes the modal (existing behavior). Tab order includes the new tab and variant headers.
- [x] **No selection:** No control in this tab to select or apply a variant; compare-only.
- [x] **Default state:** Define default expanded/collapsed for the 10 (e.g. all collapsed).

---

## 10 variant styles (implementation reference)

Use these as the Tailwind basis for each of the 10 boxes (header = button, body = div below). Same markup, different classes.

| # | Label (suggestion) | Outer | Header | Body |
|---|---------------------|--------|--------|------|
| 1 | Variant 1 – Current | `rounded-xl border border-slate-200 shadow-sm` | `bg-slate-50 hover:bg-slate-100` | `bg-white border-t border-slate-200` |
| 2 | Variant 2 – Minimal | `border-l-4 border-l-indigo-500 border border-slate-200` | `bg-white` | `bg-white border-t border-slate-100` |
| 3 | Variant 3 – Indigo header | `rounded-xl border border-slate-200` | `bg-indigo-50 hover:bg-indigo-100 text-indigo-900` | `bg-white border-t border-indigo-100` |
| 4 | Variant 4 – Card shadow | `rounded-xl border border-slate-200 shadow-md` | `bg-slate-50` | `bg-white border-t` |
| 5 | Variant 5 – Flat | `border border-slate-200` (no rounded, no shadow) | `bg-slate-50` | `bg-white border-t` |
| 6 | Variant 6 – Dark header | `rounded-lg overflow-hidden` | `bg-slate-800 text-white hover:bg-slate-700` | `bg-white border-t border-slate-200` |
| 7 | Variant 7 – Rounded soft | `rounded-lg border border-slate-200 shadow-sm` | `bg-slate-50` | `bg-slate-50/50 border-t` |
| 8 | Variant 8 – Outline only | `rounded-xl border-2 border-slate-300` (no fill on header) | `bg-transparent hover:bg-slate-50 border-b border-slate-200` | `bg-white` |
| 9 | Variant 9 – Tinted body | `rounded-xl border border-slate-200` | `bg-slate-50` | `bg-slate-50/30 border-t` |
| 10 | Variant 10 – Bold pill | `rounded-2xl border-2 border-slate-300 shadow-sm` | `bg-slate-100 font-extrabold uppercase tracking-wide` | `bg-white border-t-2` |

Shared for all: `overflow-hidden` on outer; header `p-4`, body `p-6`; prose for body text.

---

## Dependencies & Risks

- **Dependencies:** None. All changes are in `Layout.tsx` and one new component; no new block types or LessonViewer changes required.
- **Risks:** Minimal. Duplicated "ContentBox-like" markup in the showcase (intentional) so `ContentBox.tsx` stays unchanged until a variant is chosen.

---

## Success Metrics

- Product owner can open Style Guide → ContentBox tab → see 10 labeled variants and expand/collapse to compare.
- No regression to existing Style Guide tabs or modal behavior (open/close, Esc, scroll lock).

---

## References & Research

- **Style Guide state and tabs:** `components/Layout.tsx` (e.g. lines 230–231, 433–436, 441–454).
- **ContentBox current styling:** `components/ContentBox.tsx` (lines 33–53).
- **Brainstorm:** `docs/brainstorms/2026-02-18-contentbox-style-guide-mockups-brainstorm.md`.
- **SpecFlow notes:** Default to multiple variants open at once; scroll to top on tab switch; Esc closes modal; all collapsed by default unless otherwise specified.
