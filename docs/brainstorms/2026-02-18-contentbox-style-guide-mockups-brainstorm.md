# Brainstorm: 10 ContentBox Variants Live in Style Guide

**Date:** 2026-02-18  
**Status:** Draft  
**Goal:** Add 10 live ContentBox visual variants to the in-app Style Guide so you can compare and pick one.

---

## What We're Building

- **Deliverable:** A new **tab** in the existing Style Guide modal that shows **10 live ContentBox variants**—each with a label and a different visual treatment of the same collapsible "Question · PT-xxx" box.
- **Purpose:** Compare and choose one design in the app; no separate mockup images. Once chosen, that variant can be applied to the real ContentBox component.
- **Scope:** Visual only (header style, border, shadow, radius, body background). Same sample content in each (e.g. "Question · PT-107-S-4-Q-15" + a few lines of body text). All 10 are interactive (expand/collapse) so you can see both states.

---

## Why This Approach

- **Live in Style Guide:** You asked for option 1—all 10 versions rendered inside the app’s Style Guide modal so you can scroll, expand/collapse, and pick there.
- **Single source of truth:** The variants are real UI (Tailwind + React), so the chosen design maps directly to code changes in `ContentBox.tsx` (or a variant prop).
- **No static assets:** No image generation or screenshot step; everything is driven by the same stack the app uses.

---

## Key Decisions

- **Location:** Its own tab in the Style Guide modal (5th tab, e.g. "ContentBox" or "Question box"). Not a subsection under Components.
- **Labels:** Each of the 10 variants has a short label (e.g. "Variant 1 – Current", "Variant 2 – Minimal") so you can reference it when you choose.
- **Count:** 10 distinct visual variants.
- **Content:** Each variant shows the same sample (e.g. header "Question · PT-107-S-4-Q-15", same 2–3 lines of body copy) so the only difference is style.
- **Behavior:** Each variant remains collapsible (expand/collapse) so you can evaluate both states.
- **Picking:** For now, "picking" is a product decision after viewing; no in-app "select this variant" button required unless you want it later.

---

## What the 10 Variants Could Vary

Suggested axes so the 10 feel meaningfully different (final list can be fixed in planning):

1. **Border:** None, thin (current), thick, left-accent only.
2. **Header:** Background (e.g. slate-50, white, indigo-50, dark slate), with or without bottom border.
3. **Corners:** Sharp, slight (rounded-lg), pill (rounded-xl or more).
4. **Shadow:** None, subtle, medium.
5. **Body:** White vs very light tint (e.g. slate-50/30).
6. **Header typography:** Weight, all-caps label, or icon treatment.

Example spread: (1) current style, (2) minimal white + left border, (3) indigo header, (4) card with shadow, (5) flat no shadow, (6) dark header, (7) rounded-lg + subtle shadow, (8) outline only, (9) soft tint body, (10) bold header + pill corners.

---

## Open Questions

- None.

---

## Resolved Questions

- **Delivery:** Live in the Style Guide (not static images).
- **Place:** Existing Style Guide modal in the app.
- **Tab:** Its own tab (e.g. "ContentBox" or "Question box"); not a subsection under Components.
- **Labels:** Each variant has a label (e.g. "Variant 1 – Current", "Variant 2 – Minimal") for reference when choosing.

---

## Next Steps

- Run `/workflows:plan` to implement: new ContentBox tab, 10 labeled variant styles, and wiring so the chosen design can later be applied to `ContentBox.tsx`.
