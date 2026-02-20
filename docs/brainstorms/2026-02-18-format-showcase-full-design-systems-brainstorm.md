---
date: 2026-02-18
topic: format-showcase-full-design-systems
---

# Format Showcase: Full Design Systems (Not One-Setting Tweaks)

## What We're Building

Module 100’s 10 formats today feel **insubstantial** — many (e.g. 2, 3, 8, 9) are “one setting tweaks” on the same form (slightly more padding, different font weight). The user wants **bigger changes**: each format should feel like a **distinct design system** with a **consistent tone** across the whole lesson, including the **question/ContentBox** component — similar in spirit to the three reference question-card UIs in `lsat_question_card_ui_preview.jsx`, `lsat_question_card_ui_preview(2).jsx`, and `lsat_question_card_ui_preview(3).jsx`.

## Reference: What “Bigger Changes” Looks Like

The three preview files show **structural and tonal** differences, not just spacing:

| Preview | Tone | Structural / visual differences |
|--------|------|----------------------------------|
| **1** | Minimal, soft | Slate-50 page; simple text labels (“Stimulus”, “Stem”, “Choices”); one stimulus box (bg-slate-50); circular letter bubbles; full-width “Show answer” button. |
| **2** | Graphic, bold | Strong borders (slate-400); horizontal rule above section labels; stimulus and stem each in **separate bordered rounded-2xl boxes**; ring on selected choice; white page. |
| **3** | Editorial | Header has category label (“LSAT Logical Reasoning”) + question id; **PillLabel** for Stimulus/Stem/Choices; softer shadow; same content, different visual language. |

So “same new tone throughout” means: **lesson shell** (container, headings, blockquote, lists) and **question/ContentBox** (layout, section labels, borders, choice styling) should **both** follow the same design system for that format — not “current shell + current ContentBox” with a few typography tweaks.

## Why This Matters

- **Current state:** `lessonFormatThemes.ts` only drives container + title + h2/h3/h4/paragraph/list/blockquote/hr. ContentBox and OptionsBlock are **one fixed design**; they don’t vary by format.
- **Gap:** Switching from Format 2 to Format 9 changes prose look slightly but the question box looks the same. The formats don’t feel like distinct “skins” or design systems.
- **Goal:** When a user picks “Format 4: Editorial,” the **entire** lesson (including the question card) should feel editorial (e.g. pill labels, strong hierarchy, consistent borders and radius). When they pick “Format 9: Sharp,” it should feel geometric and crisp end-to-end.

## Approaches

### Approach A: 3–4 macro formats (recommended)

**Description:** Reduce to **3–4 “macro” formats**, each mapped to a **full design system** inspired by the three previews (and optionally one more). Each macro format defines both the **lesson shell** and the **question/ContentBox** treatment. Module 100 would show 3–4 lessons (or 3–4 “modes” with clear names), each a big, coherent shift.

**Pros:**  
- Each format is clearly different; no “one-setting tweak” feeling.  
- Design and implementation effort is bounded (3–4 full systems).  
- Easy to align with the three reference previews (e.g. Macro 1 = minimal, Macro 2 = graphic, Macro 3 = editorial).

**Cons:**  
- Fewer than 10 options; some current format names (Tight, Generous, …) would be folded into the macro that fits best or dropped.

**Best when:** You want maximum impact per format and are okay with fewer, bolder choices.

---

### Approach B: 10 full design systems

**Description:** Keep **10 formats** but make each a **full design system**: 10 lesson shells **and** 10 question/ContentBox variants (structure + styling). Every format gets its own question-card “skin” and prose treatment.

**Pros:**  
- Maximum variety; every format feels unique.  
- Keeps names like Tight, Generous, Editorial, etc., each with a full identity.

**Cons:**  
- High design and implementation cost (10 distinct question-card layouts/stylings).  
- Risk of some formats still feeling similar unless we deliberately push structure (e.g. different section layouts, label styles).

**Best when:** You need 10 clearly named formats and can invest in 10 full designs.

---

### Approach C: Hybrid — 10 shells, 3–4 question-card skins

**Description:** Keep **10 lesson shells** (Current, Tight, Generous, …) for prose/container/headings, but have them **share 3–4 question-card “skins”** (e.g. Minimal, Graphic, Editorial). So “Tight” and “Dense” might both use the “minimal” question card; “Editorial” and “Display” might share the “editorial” card. Shell and box still share a tone family, but we don’t design 10 separate box variants.

**Pros:**  
- Preserves 10 format names and 10 prose treatments.  
- Question card still changes meaningfully (3–4 distinct looks) and matches the tone of the shell.  
- Less work than 10 full box designs.

**Cons:**  
- Some formats will share the same question card, so “same tone throughout” is by family, not by unique identity per format.

**Best when:** You want to keep 10 format names and noticeable question-card variety without 10 fully custom box designs.

---

## Recommendation

**Lead with Approach A (3–4 macro formats).** It matches the three reference previews directly, gives “bigger changes” and “same tone throughout” without scope creep, and keeps implementation manageable. If you later want more names, we can add more shells that reuse the same 3–4 question-card skins (moving toward C).

## Key Decisions

- **Differentiation level:** We want **full design-system-level** differentiation (structure + visual language + tone), not just typography/spacing tweaks.
- **Scope of “tone”:** Tone must apply to **both** the lesson shell and the question/ContentBox (and ideally options styling); ContentBox/OptionsBlock need to be theme-aware (e.g. via `formatId` or theme classes from `lessonFormatThemes`).
- **Reference:** The three `lsat_question_card_ui_preview*.jsx` files are the bar for “bigger changes” — different layouts, labels, borders, and page context, not just class tweaks.

## Open Questions

*(Moved to Resolved below.)*

## Resolved Questions

1. **Scope of formats:** **A** — 3–4 macro formats, each a full design system (lesson shell + question card).
2. **ContentBox vs full question card:** Use the **full question card components** (like the three previews). Replace the in-lesson question block with a full QuestionCard when the lesson is a macro format and accordion content parses successfully; otherwise keep ContentBox + OptionsBlock.
3. **Alignment with ContentBoxShowcase:** **Keep separate for now.** Format showcase and Style Guide ContentBox tab remain independent; no unification in this feature.

## References

- `lsat_question_card_ui_preview.jsx`, `lsat_question_card_ui_preview(2).jsx`, `lsat_question_card_ui_preview(3).jsx` — reference question card designs (minimal, graphic, editorial).
- `constants/lessonFormatThemes.ts` — current 10 themes (prose only; `contentBoxWrapper` exists but unused).
- `components/ContentBox.tsx`, `components/OptionsBlock.tsx` — current question/passage and options UI; no format/theme props.
- `docs/plans/2026-02-18-feat-module-100-format-showcase-plan.md` — current Module 100 implementation.
