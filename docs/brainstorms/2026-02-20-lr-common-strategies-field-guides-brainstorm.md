---
date: 2026-02-20
topic: lr-common-strategies-field-guides
---

# LR Common Strategies / Field Guides (Section 3) — Content Update

## What We're Building

Add or replace **Section 3** content (“Common Strategies,” “Common Patterns,” or “Field Guide”) across LR modules 1–20 using the exact copy you provided. Each topic’s content goes into the **appropriate lesson file** for that module. Where a module already has a dedicated Lesson 3 (or equivalent) for this material, we **update** that file. Where it does not, we **add** a new lesson (or decide to place content in an existing Reference Guide).

**Scope:** LR modules 1–20 only. Content is formatting and structure only per your paste; no new pedagogy or copy changes beyond what you supplied.

---

## Target Files (Where Each Section 3 Goes)

| Module | Topic | Current lesson that holds “Section 3” | Action |
|--------|--------|----------------------------------------|--------|
| 1 | Argument Part — Common Roles & Patterns | `Lesson3_CommonRolesAndPatterns.tsx` | **Update** existing content with your full version (incl. Context/Framing table, Key Takeaway). |
| 2 | Main Conclusion — Common Patterns & Types | `Lesson3_CommonPatternsAndTypes.tsx` | **Update** with your version (incl. Summary Table). |
| 3 | Method of Reasoning — Field Guide | `Lesson3_FieldGuide.tsx` | **Update** with your “Field Guide to Common Strategies” (7 strategies, percentages). |
| 4 | Parallel Reasoning — Common Argument Structures | `Lesson3_CommonArgumentStructures.tsx` | **Update** with your 6 structures (Conditional Chain, Quantifier, Eliminative, Principle Application, Causal Explanation, Inductive Prediction). |
| 5 | Flaw — Field Guide | `Lesson3_FieldGuide.tsx` | **Update** with your “Field Guide to Common Error Types” (6 categories, sub-types, tables). |
| 6 | Parallel Flaw — Field Guide | *(none; Lesson 3 is a drill)* | **Add** new lesson (e.g. `Lesson3_FieldGuide.tsx` or new index) with your Parallel Flaw field guide. |
| 7 | Evaluate — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your Evaluate patterns (5 patterns). |
| 8 | Weaken — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your 4 Weaken answer types. |
| 9 | Strengthen — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your 6 Strengthen answer types. |
| 10 | Sufficient Assumption — Answer Types | *(Lesson 3 is a drill)* | **Add** new lesson with your 5 answer types. |
| 11 | Necessary Assumption — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your 4 assumption types. |
| 12 | Principle-Strengthen (Justifying Principles) | *(Lesson 3 is a drill)* | **Add** new lesson with your 4 principle patterns. |
| 13 | Principle-Apply — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your 3 patterns. |
| 14 | Principle-Generalization — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your 5 principle types. |
| 15 | Fill in the Blank — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your 4 answer types. |
| 16 | Most Strongly Supported — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your 4 inference patterns. |
| 17 | Must Be True — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your 5 answer types. |
| 18 | Must Be False — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your 5 contradiction patterns. |
| 19 | Paradox/Explain — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your 4 resolution patterns. |
| 20 | Agree/Disagree — Field Guide | *(Lesson 3 is a drill)* | **Add** new lesson with your Part A (Disagreement) + Part B (Agreement) patterns. |

---

## Why This Approach

- **Consistency:** Modules 1–5 already use a dedicated “Lesson 3” (or equivalent) for this content. Reusing that pattern for 6–20 keeps navigation and mental model consistent.
- **Single source of truth:** Your paste is the canonical Section 3 content; we convert it into the app’s block format and do not invent new copy.
- **YAGNI:** We only add new lessons where Section 3 content does not currently exist. We do not redesign Reference Guides or other lessons unless needed to house this content.

---

## Key Decisions

1. **One lesson per topic:** Each module’s Section 3 content lives in exactly one lesson (either the existing Lesson 3 field guide or a new lesson). We do not split it across Lesson 3 + Reference Guide unless we explicitly decide that for a specific module.

2. **Block format:** Content is stored as `ContentBlock[]` in the existing lesson format: `paragraph`, `h2`, `h3`, `h4`, `list`, `callout`, `hr`, `breakdown`, and `table` where appropriate. Markdown-style emphasis in your copy (e.g. **bold**, *italic*) is preserved inside `text` strings.

3. **Tables:** Your markdown tables (e.g. Role Type | Function | Example; Sub-Type | Function & Example) are converted to the app’s `table` type (`headers` + `rows`) or, where it fits better, to `breakdown` (e.g. for “sub-types” with title + text). Implementation can standardize on one pattern for consistency (e.g. all “spotter” tables as `table`, all “sub-type” lists as `breakdown`).

4. **New lessons for M6–M20:** For modules where Lesson 3 is currently a drill, we **add a new lesson** that holds the Section 3 field guide. We insert the new lesson at position 3 and shift the current Lesson 3 (and all later lessons) down by one.

5. **No change to Step-by-Step or other lessons:** Only the Section 3 / field-guide lesson per module is added or updated. No edits to Lesson 1, Lesson 2, or drills. Reference Guides that already have a "Field Guide" or "Common Patterns" subsection get a **condensed version** of the Section 3 content (in addition to the full lesson).

---

## Open Questions

*(None.)*

---

## Resolved Questions

- **Lesson order for M6–M20:** Field Guide is always **Lesson 3**; current Lesson 3 and later lessons shift down by one.
- **Reference Guides:** When a module has a Reference Guide with a "Field Guide" or "Common Patterns" subsection, we **also** add a condensed version of the Section 3 content there (in addition to the full dedicated lesson).

---

## Next Steps

- Run `/workflows:plan` to produce an implementation plan (file-by-file edits, block conversion rules, and any new-lesson registration in module `ModuleN.tsx`).
