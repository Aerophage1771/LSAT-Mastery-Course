# Alternate Lesson Formats — Design Plan

**Purpose:** Design the alternate lesson format system that will eventually replace the current course content with a new presentation style, tested in parallel before a full cutover.
**Audience:** Germaine (sole operator), content agents, curriculum contributors.
**Status:** design
**Last reviewed:** 2026-03-31
**Related docs:** [course-experience.md](./course-experience.md), [course-naming-conventions.md](./course-naming-conventions.md), [../technical/architecture.md](../technical/architecture.md)

## Problem

The current course content was written in a single format: dense, text-heavy structured blocks. Every lesson — introductions, method walkthroughs, field guides, drills — uses the same presentation pattern. This works for reference material but creates friction for active learning. The content is good; the packaging needs options.

## Goal

Build and test replacement formats for every lesson type in parallel with the current content, then cut over to the winning format course-wide. This is not A/B testing for students — it is an author-side design review where Germaine evaluates each format and decides which becomes the new default.

## How the System Works

The `Lesson` type now supports an optional `alternates` field:

```typescript
interface LessonAlternate {
  label: string;                    // Tab label shown in the UI
  content: string | ContentBlock[];
}

interface Lesson {
  id: string;
  title: string;
  content: string | ContentBlock[];   // Original format (always preserved)
  alternates?: Record<string, LessonAlternate>;
}
```

When `alternates` is present, a tab bar appears below the lesson title. The first tab is always "Original." Each alternate key maps to its own tab. The user's last-selected tab is remembered per lesson in localStorage.

No routing changes. No progress changes. No catalog changes. It's a pure content toggle.

## Lesson Types and Target Formats

The course has six distinct lesson types. Each needs its own alternate format strategy.

### 1. Introductions (~100–150 lines each, 57 modules)

**Current format:** Paragraph-heavy orientation. Question goal, frequency callout, stem patterns table, "What's Coming" preview list.

**Proposed alternate: "At a Glance"**
- Key: `glance`
- Label: "At a Glance"
- Structure:
  - One-sentence question goal (h3, not paragraph)
  - Frequency badge (inline, not callout)
  - 3-column quick-reference table: Stem Pattern | Core Skill | Common Trap
  - Single "You'll Learn" bulleted list (max 5 items)
  - No prose paragraphs
- Target length: 40–60 lines
- Design principle: A student should be able to read this in under 90 seconds and know exactly what the module covers

### 2. Step-by-Step Method Guides (~230–400 lines each, 15 modules)

**Current format:** Numbered steps as h2 sections with paragraphs, tables, and sub-strategies. Reads like a textbook chapter.

**Proposed alternate: "Playbook"**
- Key: `playbook`
- Label: "Playbook"
- Structure:
  - One `process` block with all steps (compact numbered list)
  - For each step: one sentence of "what to do" + one sentence of "why"
  - A single decision-tree table: "If you see X → Do Y"
  - Summary callout with the full method as a one-line chain (e.g., "Find → Gap → Name → Match")
- Target length: 80–120 lines
- Design principle: A student who has read the original can use this as a rapid refresher. A student who hasn't read the original can still execute the method.

### 3. Worked Examples (~55–150 lines each, 11 modules)

**Current format:** Full stimulus text, then a process block walking through each method step, then a "why it works" callout.

**Proposed alternate: "Annotated Walkthrough"**
- Key: `annotated`
- Label: "Annotated"
- Structure:
  - Stimulus in a blockquote
  - Inline annotations: each sentence of the stimulus gets a `breakdown` item showing its logical role (premise, conclusion, background, counter)
  - Then the method steps as a compact `process` block
  - Wrong-answer elimination shown as a table: Choice | Why Wrong | Trap Type
- Target length: similar to current, but denser visual structure
- Design principle: The student sees the reasoning "painted onto" the stimulus, not described in separate paragraphs

### 4. Field Guides / Taxonomies (~160–340 lines each, 8 files)

**Current format:** Master table + numbered category sections with descriptions, examples, and answer-choice language.

**Proposed alternate: "Field Guide"**
- Key: `field`
- Label: "Field Guide"
- Structure:
  - Each category becomes a `breakdown` card (compact)
  - Card layout: Name + Frequency badge | One-line definition | Signal phrase | Example snippet
  - No prose paragraphs between cards
  - Master decision flowchart at the bottom as a `process` block
- Target length: 60–70% of current
- Design principle: A student scans the grid visually and pattern-matches, rather than reading sequentially

### 5. Reference Guides (~150–300 lines each, one per module)

**Current format:** Comprehensive summary tables, checklists, and quick-reference sections.

**Proposed alternate: "Cheat Sheet"**
- Key: `cheat`
- Label: "Cheat Sheet"
- Structure:
  - Everything in tables and breakdown cards — no prose at all
  - Method chain as a single bold line at top
  - Trap types as a compact 2-column table
  - Decision rules as "If → Then" rows
  - One summary callout: "The one thing to remember from this module"
- Target length: 50–70% of current
- Design principle: Printable one-pager. If a student could only bring one page into a study session, this is it.

## Rollout Plan — Unit Level

### Module Format Profiles

Not every module has every lesson type. The alternate formats each module receives depend on what lesson types it contains.

**Legend:** I = Introduction, F = Foundations, S = Step-by-Step, W = Worked Examples, G = Field Guide/Extended, D = Drills, A = Advanced, R = Reference Guide

| Profile | Alternates Applied | Modules |
|---|---|---|
| **Full** (I F S W G R) | All 5: At a Glance, Playbook, Annotated, Field Guide, Cheat Sheet | M2, M3, M5, M7 |
| **Core** (I F S W R) | 4: At a Glance, Playbook, Annotated, Cheat Sheet | M4, M6, M8, M9, M13, M15, M16 |
| **Method** (I F/– S D R) | 3: At a Glance, Playbook, Cheat Sheet | M11, M12, M14, M17, M18, M19, M20, M21 |
| **RC Concept** (I S only) | 2: At a Glance, Playbook | M24–M41 (18 mini-modules) |
| **Passage Practice** (custom) | Separate strategy — see Phase 5 | M42–M49, M51–M57 (15 modules) |
| **Cross-cutting** (varied) | Case-by-case | M1, M10, M22, M23, M55, M59, M60 |
| **Resource-only** | Skip | M47, M48, M49, M50, M53 |

---

### Phase 1: Pilot — Unit 3: Evaluation (5 modules)

**Why Unit 3:** Weaken (M8) + Strengthen (M9) + Evaluate (M7) are the most-studied question types. M7 is a Full-profile module (all 5 alternates). M8 and M9 are Core-profile. M11 (Sufficient Assumption) and M10 (Causal Reasoning) round out the unit for completeness.

| Module | Lessons to Write | Alternates |
|---|---|---|
| M7 Evaluate the Argument (15L) | Intro, Step-by-Step, Worked Ex, Field Guide + Extended, Ref Guide | At a Glance, Playbook, Annotated, Field Guide, Cheat Sheet |
| M8 Weaken (13L) | Intro, Step-by-Step, Worked Ex, Ref Guide | At a Glance, Playbook, Annotated, Cheat Sheet |
| M9 Strengthen (15L) | Intro, Step-by-Step, Worked Ex, Ref Guide | At a Glance, Playbook, Annotated, Cheat Sheet |
| M11 Sufficient Assumption (13L) | Intro, Step-by-Step, Ref Guide | At a Glance, Playbook, Cheat Sheet |
| M10 Causal Reasoning (7L) | Ref Guide only | Cheat Sheet |

**Total alternates to write:** ~22 lesson alternates
**Review checkpoint:** Germaine evaluates all 5 formats in the browser. Refine specs. Decide go/no-go per format.

---

### Phase 2: LR Units 1–2 (6 modules)

**Unit 1: Identification**

| Module | Profile | Alternates |
|---|---|---|
| M1 Argument Part (16L) | Cross-cutting (unique lesson structure) | At a Glance for intro-like lessons, Playbook for method lessons, Cheat Sheet for ref |
| M2 Main Conclusion (14L) | Full | All 5 |

**Unit 2: Analysis**

| Module | Profile | Alternates |
|---|---|---|
| M3 Method of Reasoning (15L) | Full | All 5 |
| M4 Parallel Reasoning (14L) | Core | 4 (no field guide) |
| M5 Flaw (15L) | Full | All 5 |
| M6 Parallel Flaw (12L) | Core | 4 (no field guide) |

**Total alternates to write:** ~28 lesson alternates
**Review checkpoint:** Compare Units 1–2 alternates against Phase 1 to confirm format consistency across question types.

---

### Phase 3: LR Units 4–7 (9 modules)

**Unit 4: Principle**

| Module | Profile | Alternates |
|---|---|---|
| M12 Necessary Assumption (15L) | Method | 3 |
| M13 Principle-Strengthen (9L) | Core | 4 |
| M14 Principle-Apply (8L) | Method | 3 |

**Unit 5: Inference**

| Module | Profile | Alternates |
|---|---|---|
| M15 Principle-Generalization (9L) | Core | 4 |
| M16 Fill in the Blank (10L) | Core | 4 |
| M17 Most Strongly Supported (11L) | Method | 3 |
| M18 Must Be True (13L) | Method | 3 |

**Unit 6: Resolution + Unit 7: Conflict**

| Module | Profile | Alternates |
|---|---|---|
| M19 Must Be False (8L) | Method | 3 |
| M20 Paradox/Explain (10L) | Method | 3 |
| M21 Agree/Disagree (10L) | Method | 3 |

**Total alternates to write:** ~30 lesson alternates
**Review checkpoint:** Full LR track now covered. Final format refinements before RC.

---

### Phase 4: RC Concept Modules (Units 8–11, 18 mini-modules)

Modules M24–M41 each have only 2 lessons (Introduction + Step-by-Step). Each gets 2 alternates: At a Glance + Playbook.

| Unit | Modules | Alternates per Module |
|---|---|---|
| Unit 8: Summarizing | M21 (done in Phase 3), M34, M36, M37 | 2 each |
| Unit 9: Analyzing | M25, M31, M32, M33 | 2 each |
| Unit 10: Perspectives | M26, M27, M29, M35 | 2 each |
| Unit 11: Extending | M22, M24, M28, M30, M38 | 2 each |

**Also in this phase:**

| Module | Profile | Alternates |
|---|---|---|
| M22 Conditional Reasoning (10L) | Cross-cutting | Cheat Sheet for reference lessons |
| M55 Conditional Logic (adv.) | Cross-cutting | At a Glance for intro, Cheat Sheet for ref |
| M59 LSAT Math (7L) | Cross-cutting | Cheat Sheet only |
| M60 Causal Reasoning | Cross-cutting | Cheat Sheet for ref (if not done in Phase 1 with M10) |
| M23 LSAT Math (7L) | Cross-cutting | Cheat Sheet only |

**Total alternates to write:** ~40 lesson alternates (many are small — 2 per module)
**Review checkpoint:** RC concept modules are short. Batch review to confirm At a Glance + Playbook work for the RC question-type format.

---

### Phase 5: RC Passage Modules (Units 12, 14)

These modules (M42–M49 practice passages, M51–M57 advanced passages) are structurally different — they contain passage text, question sets, and analysis walkthroughs rather than the standard Intro/Method/Drill sequence.

**Separate format strategy needed.** Options to evaluate after Phases 1–4:

- **Annotated Passage:** Apply the Annotated Walkthrough concept to the passage itself — sentence-by-sentence structural annotation
- **Speed Read:** Compressed passage summary + question-only view for timed practice
- **Comparison View:** Side-by-side passage paragraphs with structural labels

This phase is deferred until the five core formats are proven on LR content.

---

### Phase 6: Cutover Decision

For each of the 5 formats, choose one of:

| Decision | What Happens |
|---|---|
| **Replace** | Alternate becomes default `content`. Current moves to `alternates.legacy`. |
| **Keep Both** | Both stay. Rename tabs (e.g., "Deep Dive" / "Quick Review"). |
| **Discard** | Remove the alternate. Keep original only. |

After cutover:
1. Run `node scripts/rebuild-course-catalog.mjs`
2. Update `docs/product/course-experience.md`
3. Update this document's status from `design` to `completed`

---

### Summary Metrics

| Phase | Modules | Alternates | Agent Batches (est.) |
|---|---|---|---|
| Phase 1: Unit 3 Pilot | 5 | ~22 | 2–3 |
| Phase 2: Units 1–2 | 6 | ~28 | 3 |
| Phase 3: Units 4–7 | 9 | ~30 | 3–4 |
| Phase 4: RC Concepts | ~22 | ~40 | 4–5 |
| Phase 5: RC Passages | ~15 | TBD | TBD |
| **Total** | **~57** | **~120+** | **~15** |

## Module-Level Specifications

Each entry below lists every lesson that receives an alternate, the source file, current line count, target alternate format, and the alternate key that will be added to the lesson's `alternates` field.

Drills, advanced drills, and advanced concept lessons do **not** receive alternates — they stay as-is.

---

### Phase 1: Unit 3 — Evaluation (Pilot)

#### M7 — Evaluate the Argument (Full profile: 5 alternates)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 137 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 299 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 309 | Playbook | `playbook` |
| 4 | Worked Examples | `Lesson2b_WorkedExamples.tsx` | 152 | Annotated Walkthrough | `annotated` |
| 5 | Common Evaluation Targets | `Lesson3_CommonEvaluationTargets.tsx` | 205 | Field Guide | `field` |
| 6 | Evaluation Targets: Extended | `Lesson3b_EvaluationTargets_Extended.tsx` | 147 | Field Guide | `field` |
| 7 | Reference Guide | `Lesson11_ReferenceGuide.tsx` | 322 | Cheat Sheet | `cheat` |

**7 alternates to write.**

#### M8 — Weaken (Core profile: 4 alternates)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 106 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 234 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 287 | Playbook | `playbook` |
| 4 | Worked Examples | `Lesson2b_WorkedExamples.tsx` | 109 | Annotated Walkthrough | `annotated` |
| 5 | Reference Guide | `Lesson11_ReferenceGuide.tsx` | 395 | Cheat Sheet | `cheat` |

**5 alternates to write.**

#### M9 — Strengthen (Core profile: 4 alternates)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 111 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 241 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 304 | Playbook | `playbook` |
| 4 | Worked Examples | `Lesson2b_WorkedExamples.tsx` | 45 | Annotated Walkthrough | `annotated` |
| 5 | Reference Guide | `Lesson13_ReferenceGuide.tsx` | 359 | Cheat Sheet | `cheat` |

**5 alternates to write.**

#### M11 — Sufficient Assumption (Method profile: 3 alternates)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 107 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 228 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 294 | Playbook | `playbook` |
| 4 | Reference Guide | `Lesson14_ReferenceGuide.tsx` | 308 | Cheat Sheet | `cheat` |

**4 alternates to write.**

#### M10 — Causal Reasoning (Cross-cutting: 1 alternate)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Reference Guide | `Lesson12_ReferenceGuide.tsx` | 313 | Cheat Sheet | `cheat` |

**1 alternate to write.**

**Phase 1 Total: 22 alternates across 5 modules.**

---

### Phase 1 — File-by-File Agent Instructions

Below is the exact conversion instruction for every lesson in Phase 1. An agent receives one module section at a time.

#### M7 Evaluate the Argument — 7 alternates

**M7-1. `Lesson1_Introduction.tsx` (137L) → At a Glance (`glance`)**

Current structure: h2 title → tip (Frequency ~7%) → h3 Why This Matters (2 paragraphs) → h3 Recognizing the Question (table: 6 stem patterns) → hr → h3 Quick Example (blockquote stimulus → process: 3-step mini-walkthrough → breakdown: result) → hr → h3 What You'll Learn (process: 5 items) → summary callout

Target alternate:
- h3: "Evaluate the Argument — At a Glance"
- paragraph: "**Goal:** Determine which additional fact would help decide whether the argument's conclusion is valid. **Frequency:** ~7% of LR questions."
- table (3-col): Stem Pattern | Core Skill | Common Trap — pull 4 best stem patterns from original table, pair with "Yes/No Test" skill and "Strengthener/Weakener in disguise" trap
- blockquote: keep the Quick Example stimulus (shortened to 3 sentences if longer)
- paragraph: 1-sentence analysis: "The gap is [X]; the right answer asks whether [Y]."
- h4: "What's in This Module"
- list: 5 bullets max, extracted from What You'll Learn process block, each ≤12 words

**M7-2. `Lesson1b_Foundations.tsx` (299L) → At a Glance (`glance`)**

Current structure: h2 Evaluate vs Strengthen vs Weaken (table comparison + breakdown) → hr → h2 The Neutral Evaluator Mindset (paragraphs + tip callout) → hr → h2 The Yes/No Test (table + process) → hr → h2 Common Evaluation Targets (table: 6 targets) → hr → h2 Worked Example (blockquote → process walkthrough) → hr → summary callout

Target alternate:
- h3: "Core Concepts"
- table (3-col): Concept | Definition | Key Distinction
  - Row 1: "Evaluate vs. Strengthen" | "[1-sentence from original]" | "Evaluate is neutral; Strengthen takes a side"
  - Row 2: "The Yes/No Test" | "If the answer is yes the argument works, if no it fails" | "Both yes AND no must change the verdict"
  - Row 3: "Neutral Evaluator" | "[1-sentence]" | "You're testing, not attacking or defending"
- h3: "Evaluation Targets"
- table (2-col): Target Type | Frequency — copy from original's Common Evaluation Targets table (6 rows)
- h3: "Quick Example"
- blockquote: abbreviated stimulus from Worked Example section
- paragraph: 2-sentence analysis (conclusion + gap + what the right question asks)
- summary callout: 3 bullet points max from original's summary

**M7-3. `Lesson2_StepByStepGuide.tsx` (309L) → Playbook (`playbook`)**

Current structure: h2 title → h3 Overview (process: 4 steps + timing tip) → hr → h2 Step 1 (3 paragraphs + example + tip) → hr → h2 Step 2 (paragraphs + "Even If True" test + example + Common Gap Patterns table + Causal Framework) → hr → h2 Step 3 (Prephrasing Technique + example + Quality Check breakdown) → hr → h2 Step 4 (Yes/No Test mechanics + demonstration breakdown + contrast breakdown) → hr → summary callout

Target alternate:
- tip callout: "**Target:** 1:30 per Evaluate question"
- h3: "The Method"
- process block (4 steps):
  1. "**Find the conclusion.** Locate the author's main claim — often after 'therefore,' 'thus,' or 'so.'"
  2. "**Identify the gap.** Ask: even if every premise is true, what could still prevent the conclusion from following? Use the 'Even If True' test."
  3. "**Prephrase the pivotal question.** Convert the gap into a yes/no question. If yes → argument works; if no → argument fails."
  4. "**Apply the Yes/No test.** The correct answer is the question where both outcomes change the verdict."
- h3: "Decision Table"
- table (3-col, 6 rows): "If You See..." | "Then Do..." | "Watch Out For..."
  - Row 1: "Causal claim" | "Ask about alternative causes or reverse causation" | "Answer that only confirms the correlation"
  - Row 2: "Statistical generalization" | "Ask about sample representativeness" | "Answer about a different population"
  - Row 3: "Analogy" | "Ask whether the comparison holds" | "Answer that questions irrelevant differences"
  - Row 4: "Feasibility claim" | "Ask about implementation barriers" | "Answer about desirability instead of feasibility"
  - Row 5: "Prediction" | "Ask about changed conditions" | "Answer about past events instead of future"
  - Row 6: "No obvious pattern" | "Use the 'Even If True' test on each premise" | "Answer that addresses only one premise"
- summary callout: "**Find → Gap → Prephrase Question → Yes/No Test**"

**M7-4. `Lesson2b_WorkedExamples.tsx` (152L) → Annotated Walkthrough (`annotated`)**

Current structure: h2 Common Wrong Answers (table: 5 trap types) → hr → h2 Full Worked Example (blockquote stimulus → h3 Applying the 4-Step Method with h4 per step → summary callout)

Target alternate:
- h3: "Annotated Stimulus"
- blockquote: original stimulus text (unchanged)
- h4: "Structural Annotation"
- breakdown block: one item per sentence of stimulus
  - Each: title = quoted sentence, text = role description, badge = role, badgeColor = green/blue/slate/red
- h3: "Method Applied"
- process block: 4 steps, each referencing annotations (e.g., "Step 1 — Conclusion is sentence 3 (green): '[text]'")
- h3: "Trap Table"
- table (2-col): Wrong Answer Type | Why It Fails — from Common Wrong Answers section (5 rows)
- summary callout: from original's "Why it works" callout

**M7-5. `Lesson3_CommonEvaluationTargets.tsx` (205L) → Field Guide (`field`)**

Current structure: h2 title → h3 Master Table (table: 6 targets with frequency/signal/question) → hr → h2 "1. Causal Claims (~30%)" (h4 What It Looks Like + h4 Pivotal Question Pattern + tip callout) → hr → h2 "2. Statistical Generalizations (~25%)" (same pattern) → hr → h2 "3. Analogies (~15%)" (same pattern) → summary callout

Target alternate:
- h3: "Quick Reference"
- table: keep original Master Table unchanged
- h3: "Pattern Cards"
- breakdown block (3 items, colWidth: 'narrow'):
  - Item 1: title "Causal Claims", badge "~30%", badgeColor "green", text: "**Signal:** [1 phrase from What It Looks Like]\n**Question:** [1 template from Pivotal Question Pattern]\n**Trap:** [from tip callout or paragraph]"
  - Item 2: title "Statistical Generalizations", badge "~25%", badgeColor "green", text: same extraction pattern
  - Item 3: title "Analogies", badge "~15%", badgeColor "blue", text: same extraction pattern
- summary callout: from original

**M7-6. `Lesson3b_EvaluationTargets_Extended.tsx` (147L) → Field Guide (`field`)**

Current structure: h2 title → h2 "4. Feasibility Claims (~12%)" → h2 "5. Predictions (~10%)" → h2 "6. Definitions / Categories (~8%)" → h2 Quick Identification Process (process block) → summary callout

Target alternate:
- h3: "Quick Reference" — no master table here; start directly with cards
- h3: "Pattern Cards"
- breakdown block (3 items):
  - Item 1: "Feasibility Claims", badge "~12%", badgeColor "blue"
  - Item 2: "Predictions", badge "~10%", badgeColor "slate"
  - Item 3: "Definitions / Categories", badge "~8%", badgeColor "slate"
- h3: "Quick Identification"
- process block: keep from original
- summary callout: from original

**M7-7. `Lesson11_ReferenceGuide.tsx` (322L) → Cheat Sheet (`cheat`)**

Current structure: h2 title → h3 Evaluation Targets (table) → h3 Validated Anchors (table) → h3 The 4-Step Method (process) → h3 Causal Research Framework (process + table) → h3 Yes/No Test (breakdown) → h3 Recognizing Stems (breakdown) → h3 Common Traps (breakdown) → h3 Difficulty Factors (table) → h3 Quick ID Process (process) → summary callout

Target alternate:
- summary callout title "The Method": "**Find → Gap → Prephrase Question → Yes/No Test**"
- h3: "Decision Rules"
- table (2-col, ~8 rows): "If You See..." | "Do This" — merge from Evaluation Targets + Causal Framework
- h3: "Traps"
- table (2-col, ~5 rows): "Trap" | "How to Spot" — from Common Traps breakdown (compress each to 1 sentence)
- h3: "Quick Distinctions"
- table (2-col): "Evaluate vs." | "Key Difference" — from existing comparison sections
- h3: "Stems"
- list: 4–6 stem patterns from Recognizing Stems breakdown
- summary callout title "The One Thing": "**The right answer is the question whose yes/no answers produce opposite verdicts on the conclusion.**"

---

#### M8 Weaken — 5 alternates

Apply the same conversion rules as M7 with these module-specific values:

- **Method chain:** Find → Gap → Prephrase Weakener → Match & Eliminate
- **Timing target:** 1:30 per Weaken question
- **Decision table rows** (Playbook): Causal claim → attack correlation | Statistical → question sample | Scope shift → find the category mismatch | Conditional → deny the consequent | Numbers → check percentages | No pattern → "Even If True" test
- **Cheat Sheet "One Thing":** "**Name the gap, prephrase the attack, and never confuse weakening the conclusion with weakening a premise.**"
- **Foundations At a Glance concepts:** Gap Model, Weaken vs. Flaw, Weaken vs. Strengthen, Common Weakening Strategies (6 from table)
- **Worked Examples annotation:** stimulus has distinct premises, conclusion, and background — annotate all. Process block has 4 steps matching M8's method.
- **Reference Guide Cheat Sheet:** skip "Validated Anchors" and "Difficulty Factors" sections. Keep: Method, Strategies (as decision rules), Traps, Negation Test (as 1 tip callout), Stems.

---

#### M9 Strengthen — 5 alternates

Module-specific values:

- **Method chain:** Find → Gap → Prephrase Strengthener → Evaluate & Eliminate
- **Timing target:** 1:30 per Strengthen question
- **Decision table rows** (Playbook): Causal claim → confirm no alternative cause | Statistical → add supporting evidence | Analogy → confirm comparability | Conditional → supply missing premise | Scope gap → bridge the categories | EXCEPT → flip the task (find the non-strengthener)
- **Cheat Sheet "One Thing":** "**The right answer fills the exact gap between premises and conclusion — not a different gap, and not a new argument.**"
- **Foundations At a Glance concepts:** Gap Model, Strengthen vs. Weaken, Strengthen vs. Sufficient Assumption, Common Strengthening Strategies (from table)
- **Worked Examples note:** Only 45L — the Annotated Walkthrough may be longer than the original. That's fine; the annotation structure adds visual value even on short stimuli. Pull the "Common Wrong Answer Patterns" h3 from the Step-by-Step guide to populate the trap table.
- **Reference Guide Cheat Sheet:** skip "Core Drill Map." Keep: Method, Strategies (as decision rules), Traps, EXCEPT strategy (as tip callout), Stems.

---

#### M11 Sufficient Assumption — 4 alternates

Module-specific values:

- **Method chain:** Break Down → Force Standard → Diagnose Family → Prephrase Minimum → Negate & Verify
- **Timing target:** 1:45 per SA question (harder than average)
- **Decision table rows** (Playbook): Concept link → find the missing term | Exclusivity rule → supply the "only if" | Binary assumption → force the either/or | General principle → supply the rule that makes it airtight | Chain of logic → supply the missing link in the chain | Normative bridge → supply the "ought" from "is"
- **Cheat Sheet "One Thing":** "**The right answer, combined with the premises, makes the conclusion logically inescapable — no exceptions, no wiggle room.**"
- **Foundations At a Glance concepts:** Necessary vs. Sufficient, Negation Test, Reasoning Family Diagnostics (from table), Common NA Patterns (from table)
- **No Worked Examples lesson** — no Annotated Walkthrough to write. The Step-by-Step contains an embedded worked example (h2 "Full Worked Example" near bottom) — the Playbook will skip it; the Cheat Sheet will not reference it.
- **Reference Guide Cheat Sheet:** Keep: Method (5-step), Force Standard, Reasoning Families (as decision rules), Negation Test (as tip), Traps, Stems. Skip: NA Patterns (too detailed for cheat sheet).

---

#### M10 Causal Reasoning — 1 alternate

**M10-1. `Lesson12_ReferenceGuide.tsx` (313L) → Cheat Sheet (`cheat`)**

- **Method chain:** not a standalone method — this is a cross-cutting reasoning pattern. Use: "**Claim → Check Reverse → Check Third Factor → Check Coincidence**"
- **Cheat Sheet "One Thing":** "**Correlation is not causation. Every causal claim needs three checks: reverse causation, third factor, and coincidence.**"
- Extract causal reasoning strategies from existing reference tables, compress to "If You See → Do This" format
- Skip any cross-module routing references (metacommentary already cleaned)

---

### Phase 2: Units 1–2 — Identification + Analysis

#### M1 — Argument Part (Cross-cutting: custom)

M1 has a unique lesson structure (split into 4 sub-method lessons + roles + patterns). Map to closest format:

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 133 | At a Glance | `glance` |
| 2 | The Method | `Lesson2a_TheMethod.tsx` | 73 | Playbook | `playbook` |
| 3 | Read & Decode | `Lesson2b_ReadAndDecode.tsx` | 250 | Playbook | `playbook` |
| 4 | Map & Prephrase | `Lesson2c_MapAndPrephrase.tsx` | 150 | Playbook | `playbook` |
| 5 | Evaluate & Apply | `Lesson2d_EvaluateAndApply.tsx` | 177 | Annotated Walkthrough | `annotated` |
| 6 | The Six Roles | `Lesson3_TheSixRoles.tsx` | 287 | Field Guide | `field` |
| 7 | Reading & Patterns | `Lesson3b_ReadingAndPatterns.tsx` | 183 | Field Guide | `field` |
| 8 | Reference Guide | `Lesson12_ReferenceGuide.tsx` | 387 | Cheat Sheet | `cheat` |

**8 alternates.**

#### M2 — Main Conclusion (Full profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 102 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 241 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 406 | Playbook | `playbook` |
| 4 | Worked Examples | `Lesson2b_WorkedExamples.tsx` | 55 | Annotated Walkthrough | `annotated` |
| 5 | Common Patterns & Types | `Lesson3_CommonPatternsAndTypes.tsx` | 202 | Field Guide | `field` |
| 6 | Patterns Extended | `Lesson3b_PatternsExtended.tsx` | 313 | Field Guide | `field` |
| 7 | Reference Guide | `Lesson11_ReferenceGuide.tsx` | 302 | Cheat Sheet | `cheat` |

**7 alternates.**

#### M3 — Method of Reasoning (Full profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 102 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 227 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 352 | Playbook | `playbook` |
| 4 | Worked Examples | `Lesson2b_WorkedExamples.tsx` | 39 | Annotated Walkthrough | `annotated` |
| 5 | Field Guide | `Lesson3_FieldGuide.tsx` | 298 | Field Guide | `field` |
| 6 | Field Guide Extended | `Lesson3b_FieldGuide_Extended.tsx` | 167 | Field Guide | `field` |
| 7 | Reference Guide | `Lesson12_ReferenceGuide.tsx` | 301 | Cheat Sheet | `cheat` |

**7 alternates.**

#### M4 — Parallel Reasoning (Core profile + field guide variant)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 142 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 165 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 310 | Playbook | `playbook` |
| 4 | Worked Examples | `Lesson2b_WorkedExamples.tsx` | 40 | Annotated Walkthrough | `annotated` |
| 5 | Common Argument Structures | `Lesson3_CommonArgumentStructures.tsx` | 448 | Field Guide | `field` |
| 6 | Reference Guide | `Lesson12_ReferenceGuide.tsx` | 283 | Cheat Sheet | `cheat` |

**6 alternates.**

#### M5 — Flaw (Full profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 105 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 227 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 319 | Playbook | `playbook` |
| 4 | Worked Examples | `Lesson2b_WorkedExamples.tsx` | 83 | Annotated Walkthrough | `annotated` |
| 5 | Field Guide | `Lesson3_FieldGuide.tsx` | 283 | Field Guide | `field` |
| 6 | Field Guide Extended | `Lesson3b_FieldGuide_Extended.tsx` | 363 | Field Guide | `field` |
| 7 | Reference Guide | `Lesson12_ReferenceGuide.tsx` | 460 | Cheat Sheet | `cheat` |

**7 alternates.**

#### M6 — Parallel Flaw (Core profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 99 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 207 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 246 | Playbook | `playbook` |
| 4 | Worked Examples | `Lesson2b_WorkedExamples.tsx` | 110 | Annotated Walkthrough | `annotated` |
| 5 | Reference Guide | `Lesson10_ReferenceGuide.tsx` | 286 | Cheat Sheet | `cheat` |

**5 alternates.**

**Phase 2 Total: 40 alternates across 6 modules.**

---

### Phase 2 — File-by-File Agent Instructions

#### M1 Argument Part — 8 alternates (custom mapping)

M1 is unique: its step-by-step was split into 4 sub-lessons (Method → Read & Decode → Map & Prephrase → Evaluate & Apply). The Six Roles and Reading & Patterns are effectively field guides even though they're not named that way.

- **Method chain:** Find Target → Analyze Roles → Map Structure → Prephrase → Evaluate Choices
- **Timing target:** 1:15 per Argument Part question
- **Cheat Sheet "One Thing":** "**Every sentence in an LSAT argument has exactly one job. Name the job before you read the answers.**"

**M1-1. Intro (133L) → At a Glance:** Standard intro conversion. Frequency ~10%. Stem patterns from table (5 patterns). Quick Example has a blockquote + breakdown — compress to blockquote + 1 sentence.

**M1-2. The Method (73L) → Playbook:** Already compact. Convert Overview process block to the primary process. Add decision table: "If the target is a conclusion → check Why Test" / "If intermediate → check support direction" / etc. Method chain as summary.

**M1-3. Read & Decode (250L) → Playbook:** Steps 1–2 of the method. Currently h2 Step 1 (Find Target: tables + process + breakdowns) + h2 Step 2 (Analyze Statements: tables + breakdowns). Compress each to 2 sentences in a process block. Convert the Parsing Toolkit table (3 tables in original) to a single decision table.

**M1-4. Map & Prephrase (150L) → Playbook:** Steps 3–4 of the method. Compress similarly. Convert the "Support Spectrum" and "Why Test" content to decision table rows.

**M1-5. Evaluate & Apply (177L) → Annotated Walkthrough:** Contains Step 5 (Evaluate Choices) + a Full Worked Example + "When the Method Gets Hard" section. The Worked Example has a process walkthrough — restructure as annotated stimulus with sentence-by-sentence role labeling. Keep the "When the Method Gets Hard" as a tip callout at the end.

**M1-6. The Six Roles (287L) → Field Guide:** h2 Core Components (3 roles) + h2 Contextual/Counter (3 roles), each with h3 sub-sections, frequency data, and examples. Convert each role to a breakdown card: title = role name, badge = frequency%, text = 1-sentence definition + signal phrase + common trap.

**M1-7. Reading & Patterns (183L) → Field Guide:** h2 Reading Mechanics + h2 Three Argument Structures. Convert Reading Mechanics to a compact table. Convert each Pattern (Simple, Chain, Rebuttal) to a breakdown card with a mini-diagram in the text field.

**M1-8. Reference Guide (387L) → Cheat Sheet:** Heavy reference file — 6 tables, 2 process blocks, 4 breakdowns. Keep: Method chain, All Argument Roles table (6 rows), Indicator Words (compress to top 10), Common Traps (5 rows). Skip: Support Spectrum, Argument vs Non-Argument, Blind Review Workflow, Transfer Map.

---

#### M2 Main Conclusion — 7 alternates

- **Method chain:** Confirm Task → Read for Structure → Spot Indicators → Why Test → Prephrase → Evaluate & Eliminate
- **Timing target:** 1:15 per Main Conclusion question
- **Cheat Sheet "One Thing":** "**The main conclusion is the claim that everything else in the argument exists to support. Apply the Why Test: X because Y — X is the conclusion.**"

**M2-1. Intro (102L) → At a Glance:** Standard. Frequency ~8%.

**M2-2. Foundations (241L) → At a Glance:** 5 h2 sections (Foundations overview, Core Concepts, Indicator Words, Four Conclusion Types preview, First Question). Compress Core Concepts + Indicator Words into a single reference table. Four Conclusion Types becomes a 4-row table: Type | Signal | Example.

**M2-3. Step-by-Step (406L) → Playbook:** 6-step method — longest step-by-step in the course. Compress each step to 1 "what" + 1 "why" in the process block. Decision table focus on the 4 conclusion types: Rebuttal → look for "but/however", Prescription → look for "should/ought", Explanation → look for "because/since" + causal claim, Prediction → look for "will/likely". Method chain: "**Confirm → Structure → Indicators → Why Test → Prephrase → Eliminate**"

**M2-4. Worked Examples (55L) → Annotated Walkthrough:** Short — only has a Full Worked Example with a process block. Add sentence-by-sentence annotation of the stimulus. Pull trap data from the Step-by-Step if available.

**M2-5. Common Patterns (202L) → Field Guide:** Currently trimmed to Sections 1–2 (Rebuttal, Prescription) + Summary Table. Convert each section to a breakdown card: title = pattern name, text = signal + structure + trap.

**M2-6. Patterns Extended (313L) → Field Guide:** Sections 3–4 (Explanation, Prediction) + Quick Pattern Matching + Pivot Words + Sandwich Pattern. Convert sections to cards. Keep Quick Pattern Matching as a process block. Pivot Words become a compact table.

**M2-7. Reference Guide (302L) → Cheat Sheet:** Keep: Method chain, Conclusion Types table, Indicator Words (top 10), Traps (5 rows), Stems. Skip: detailed examples, extended analysis.

---

#### M3 Method of Reasoning — 7 alternates

- **Method chain:** Break Down → Characterize Method → Prephrase Label → Evaluate → Eliminate Traps
- **Timing target:** 1:45 per Method of Reasoning question (above average — requires abstract thinking)
- **Cheat Sheet "One Thing":** "**Describe HOW the argument works, not WHAT it says. The right answer is a strategy label, not a content summary.**"

**M3-1. Intro (102L) → At a Glance:** Standard. Frequency ~6%.

**M3-2. Foundations (227L) → At a Glance:** 6 h2 sections. Key concept table: Strategy vs. Content | Method vs. Argument Part | Category preview. Compress the First Question walkthrough to blockquote + 1-sentence.

**M3-3. Step-by-Step (352L) → Playbook:** 4-step method. Decision table rows: "Analogy used" → "Look for 'similarly' or comparison" | "Consequence highlighted" → "Look for 'would result in'" | "Assumption challenged" → "Look for 'fails to consider'" | "Counterexample given" → "Look for specific case against general rule" | etc.

**M3-4. Worked Examples (39L) → Annotated Walkthrough:** Very short — only a process block + brief analysis. The Annotated version will be *longer* than the original, which is fine — the annotation adds visual structure. Pull wrong-answer patterns from the Step-by-Step's elimination section.

**M3-5. Field Guide (298L) → Field Guide:** 4 strategies (Analogy ~23%, Consequences ~17%, Causal ~14%, Challenging Assumption ~11%) + Master Table. Convert each to a breakdown card with frequency badge, signal phrase, question template, and top trap.

**M3-6. Field Guide Extended (167L) → Field Guide:** 3 remaining strategies (Principles ~8%, Elimination ~6%, Counterexample ~5%) + Quick Pattern Matching decision process + Method Indicator Language table. Cards + process block.

**M3-7. Reference Guide (301L) → Cheat Sheet:** Keep: Method chain, Strategy summary (7 rows), Traps (from breakdown), Stems. Skip: detailed examples.

---

#### M4 Parallel Reasoning — 6 alternates

- **Method chain:** Identify Structure → Abstract Pattern → Match by Elimination → Verify Final Match
- **Timing target:** 2:00 per Parallel question (time-intensive — 5 answer choices to check)
- **Cheat Sheet "One Thing":** "**Match the logical structure, not the topic. Abstract the pattern before reading any answer choice.**"

**M4-1. Intro (142L) → At a Glance:** Standard. Frequency ~3%.

**M4-2. Foundations (165L) → At a Glance:** Already relatively compact. Concepts table + quick example.

**M4-3. Step-by-Step (310L) → Playbook:** 4-step method. Decision table: "Conditional chain" → "Match the if-then direction" | "Eliminative" → "Match the either/or + elimination" | "Principle application" → "Match the rule + case structure" | "Quantifier" → "Match the some/all/none pattern".

**M4-4. Worked Examples (40L) → Annotated Walkthrough:** Very short. Annotation will be longer. Annotate both the stimulus AND the correct answer choice to show structural parallel.

**M4-5. Common Argument Structures (448L) → Field Guide:** This is the longest non-reference file. Currently has detailed sections per structure type. Convert each to a card: title = structure name, text = template pattern + signal + common trap.

**M4-6. Reference Guide (283L) → Cheat Sheet:** Keep: Method chain, Structure table, Traps, Stems. Skip: detailed examples.

---

#### M5 Flaw — 7 alternates

- **Method chain:** Identify → Gap → Name the Flaw → Match to Answer
- **Timing target:** 1:30 per Flaw question
- **Cheat Sheet "One Thing":** "**Name the flaw at a moderate level of abstraction — not so specific that it's content-bound, not so vague that it fits any argument.**"

**M5-1. Intro (105L) → At a Glance:** Standard. Frequency ~10%.

**M5-2. Foundations (227L) → At a Glance:** Gap Model, Common Flaw Categories preview, First Question. Concepts table focus on the distinction between describing the flaw vs. the argument's content.

**M5-3. Step-by-Step (319L) → Playbook:** 4-step method. Decision table: "Correlation mentioned" → "Causal flaw (check reverse/third factor)" | "If-then language" → "Conditional flaw (check reversal/negation)" | "Sample mentioned" → "Sampling flaw (check representativeness)" | "Conclusion broader than evidence" → "Scope shift (part→whole, some→all)" | "Person attacked" → "Ad hominem" | "Only two options presented" → "False dichotomy".

**M5-4. Worked Examples (83L) → Annotated Walkthrough:** Has Full Worked Example + Prephrasing Practice (3 snippets). Annotate the main worked example stimulus. Keep the 3 practice snippets as compact accordion exercises.

**M5-5. Field Guide (283L) → Field Guide:** Categories 1–2 (Causal: 3 sub-types, Conditional: 3 sub-types) + Master Taxonomy. Convert each sub-type to a card: title, badge (high/medium frequency), signal, example snippet, trap.

**M5-6. Field Guide Extended (363L) → Field Guide:** Categories 3–5 (Statistical: 3 sub-types, Scope Shift: 3 sub-types, Other: 7 sub-types) + Translation Table + Flowchart. 13 sub-types → 13 cards. Keep Translation Table. Keep Flowchart as process block.

**M5-7. Reference Guide (460L) → Cheat Sheet:** Longest reference guide in the course. Keep: Method chain, Flaw Categories table (5 rows with top sub-types), Traps (5 rows), Stems. Skip: detailed sub-type analysis (that's what the Field Guide alternate is for).

---

#### M6 Parallel Flaw — 5 alternates

- **Method chain:** Identify the Flaw → Abstract the Pattern → Match the Error
- **Timing target:** 2:00 per Parallel Flaw question (combines Flaw + Parallel difficulty)
- **Cheat Sheet "One Thing":** "**Find the flaw first, abstract the error pattern, then match — don't try to match content, match the type of mistake.**"

**M6-1. Intro (99L) → At a Glance:** Standard. Frequency ~2%.

**M6-2. Foundations (207L) → At a Glance:** Already moderate length. Focus on the key distinction: identify the flaw BEFORE matching.

**M6-3. Step-by-Step (246L) → Playbook:** 3-step method (shorter than most). Decision table: "Causal flaw in stimulus" → "Find the answer with a different causal error about a different topic" | "Conditional reversal" → "Match the reversal direction" | "Scope overgeneralization" → "Find part→whole or some→all in a different domain".

**M6-4. Worked Examples (110L) → Annotated Walkthrough:** Full walkthrough available. Annotate both stimulus and matching answer to highlight the parallel error structure.

**M6-5. Reference Guide (286L) → Cheat Sheet:** Keep: Method chain, Flaw matching strategies, Traps, Stems. One Thing is about matching error type, not content.

---

**Phase 2 File-by-File Total: 40 alternates with module-specific instructions for every file.**

---

### Phase 3: Units 4–7 — Principle, Inference, Resolution, Conflict

#### M12 — Necessary Assumption (Method profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 131 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 258 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 238 | Playbook | `playbook` |
| 4 | Worked Examples | `Lesson2b_WorkedExamples.tsx` | 84 | Annotated Walkthrough | `annotated` |
| 5 | Reference Guide | `Lesson7_ReferenceGuide.tsx` | 333 | Cheat Sheet | `cheat` |

**5 alternates.**

#### M13 — Principle-Strengthen (Core profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 104 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 243 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 293 | Playbook | `playbook` |
| 4 | Reference Guide | `Lesson7_ReferenceGuide.tsx` | 299 | Cheat Sheet | `cheat` |

**4 alternates.**

#### M14 — Principle-Apply (Method profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 147 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 381 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 288 | Playbook | `playbook` |
| 4 | Worked Examples | `Lesson2b_WorkedExamples.tsx` | 134 | Annotated Walkthrough | `annotated` |
| 5 | Reference Guide | `Lesson7_ReferenceGuide.tsx` | 467 | Cheat Sheet | `cheat` |

**5 alternates.**

#### M15 — Principle-Generalization (Core profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 102 | At a Glance | `glance` |
| 2 | Foundations | `Lesson1b_Foundations.tsx` | 188 | At a Glance | `glance` |
| 3 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 232 | Playbook | `playbook` |
| 4 | Worked Examples | `Lesson2b_WorkedExamples.tsx` | 87 | Annotated Walkthrough | `annotated` |
| 5 | Reference Guide | `Lesson8_ReferenceGuide.tsx` | 397 | Cheat Sheet | `cheat` |

**5 alternates.**

#### M16 — Fill in the Blank (Core profile, compact)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 82 | At a Glance | `glance` |
| 2 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 63 | Playbook | `playbook` |
| 3 | Reference Guide | `Lesson11_ReferenceGuide.tsx` | 405 | Cheat Sheet | `cheat` |

**3 alternates.** (Intro and Step-by-Step are already compact — At a Glance and Playbook may be very similar to originals. Evaluate whether to skip.)

#### M17 — Most Strongly Supported (Method profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 89 | At a Glance | `glance` |
| 2 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 151 | Playbook | `playbook` |
| 3 | Reference Guide | `Lesson11_ReferenceGuide.tsx` | 463 | Cheat Sheet | `cheat` |

**3 alternates.**

#### M18 — Must Be True (Method profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 71 | At a Glance | `glance` |
| 2 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 63 | Playbook | `playbook` |
| 3 | Reference Guide | `Lesson8_ReferenceGuide.tsx` | 372 | Cheat Sheet | `cheat` |

**3 alternates.** (Same note as M16 — Intro and Step-by-Step are already short.)

#### M19 — Must Be False (Method profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 90 | At a Glance | `glance` |
| 2 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 52 | Playbook | `playbook` |
| 3 | Reference Guide | `Lesson10_ReferenceGuide.tsx` | 389 | Cheat Sheet | `cheat` |

**3 alternates.**

#### M20 — Paradox/Explain (Method profile)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 65 | At a Glance | `glance` |
| 2 | Step-by-Step | `Lesson2_StepByStepGuide.tsx` | 109 | Playbook | `playbook` |
| 3 | Reference Guide | `Lesson10_ReferenceGuide.tsx` | 406 | Cheat Sheet | `cheat` |

**3 alternates.**

#### M21 — Agree/Disagree (Method profile, compact)

| # | Lesson | File | Lines | Alternate | Key |
|---|---|---|---|---|---|
| 1 | Introduction | `Lesson1_Introduction.tsx` | 74 | At a Glance | `glance` |
| 2 | Step-by-Step | `Lesson2_StepByStepApproach.tsx` | 50 | Playbook | `playbook` |
| 3 | Reference Guide (if exists) | — | — | Cheat Sheet | `cheat` |

**2–3 alternates.** (Step-by-Step at 50 lines is already minimal.)

**Phase 3 Total: ~37 alternates across 10 modules.**

---

### Phase 3 — File-by-File Agent Instructions

#### M12 Necessary Assumption — 5 alternates

- **Method chain:** Break Down → Force Standard → Diagnose Family → Prephrase Minimum → Negate & Verify
- **Timing target:** 1:45 per NA question
- **Cheat Sheet "One Thing":** "**The right answer, if negated, destroys the argument. If the argument can survive without it, it's not necessary.**"

**M12-1. Intro (131L) → At a Glance:** Standard. Frequency ~8%. Has a "Quick Example" section — keep as blockquote + 1 sentence.

**M12-2. Foundations (258L) → At a Glance:** 6 h2 sections: Necessary vs Sufficient, Negation Test, Reasoning Families, Common Patterns, Worked Example, Key Principles. Concepts table (3 rows): NA vs Strengthener | NA vs SA | Negation Test. Compress Reasoning Families into a compact table. Skip worked example walkthrough (Playbook covers it).

**M12-3. Step-by-Step (238L) → Playbook:** 5-step method (unique — extra "Force Standard" step). Decision table: "Concept gap" → "Supply the linking definition" | "Exclusivity missing" → "Supply the 'only if'" | "Binary assumed" → "Force the either/or" | "General rule needed" → "Supply the universal" | "Chain incomplete" → "Supply the missing link" | "Normative leap" → "Supply the ought-from-is bridge".

**M12-4. Worked Examples (84L) → Annotated Walkthrough:** Has Common Wrong Answer Patterns table + Full Worked Example (5-step process). Annotate stimulus. 5 trap rows.

**M12-5. Reference Guide (333L) → Cheat Sheet:** Keep: 5-step method chain, Force Standard reference, Reasoning Family diagnostics (as decision table), Negation Test (as tip callout), Traps, Stems.

---

#### M13 Principle-Strengthen — 4 alternates

- **Method chain:** Identify Argument → Find Gap → Prephrase Principle → Match General Rule
- **Timing target:** 1:30 per Principle-Strengthen question
- **Cheat Sheet "One Thing":** "**The right answer is a general rule that, if true, bridges the exact gap between the premises and conclusion.**"

**M13-1. Intro (104L) → At a Glance:** Standard. Frequency ~3%.

**M13-2. Foundations (243L) → At a Glance:** Concepts: Principle-Strengthen vs plain Strengthen, vs SA. Compress strategy overview into a table.

**M13-3. Step-by-Step (293L) → Playbook:** Decision table: "Normative gap" → "Look for a moral/ethical rule" | "Efficiency gap" → "Look for a cost-benefit rule" | "Accountability gap" → "Look for a responsibility rule" | "Scope gap" → "Look for a category-bridging rule".

**M13-4. Reference Guide (299L) → Cheat Sheet:** Keep: Method chain, Principle types table, Traps, Stems. Skip: detailed drill map.

---

#### M14 Principle-Apply — 5 alternates

- **Method chain:** Understand Principle → Identify Trigger → Check Conditions → Match Application
- **Timing target:** 1:30 per Principle-Apply question
- **Cheat Sheet "One Thing":** "**Read the principle as a rule: IF [trigger], THEN [result]. Find the answer choice where the trigger fires and the result follows.**"

**M14-1. Intro (147L) → At a Glance:** Standard. Frequency ~2%.

**M14-2. Foundations (381L) → At a Glance:** Longest Foundations file in the course. 7+ h2 sections covering generalization families. Compress to concepts table (7 rows: one per family with 1-sentence definition). Skip walkthrough.

**M14-3. Step-by-Step (288L) → Playbook:** Decision table: "Direct application" → "Trigger fires, result follows directly" | "Contrapositive" → "Result absent, therefore trigger absent" | "Definitional" → "Match case to category definition" | "Advanced" → "Multiple conditions must all be satisfied".

**M14-4. Worked Examples (134L) → Annotated Walkthrough:** Full stimulus annotation. Has wrong-answer patterns — convert to trap table.

**M14-5. Reference Guide (467L) → Cheat Sheet:** Second-longest reference guide. Keep: Method chain, Application types (4 rows), Traps, Recognition topics table (compressed). Skip: extensive family coverage tables.

---

#### M15 Principle-Generalization — 5 alternates

- **Method chain:** Understand Case → Identify Dynamic → Abstract to Principle → Match General Rule
- **Timing target:** 1:30 per Principle-Generalization question
- **Cheat Sheet "One Thing":** "**State the 'moral of the story' in abstract terms before reading the answers. The right answer generalizes — it doesn't retell the story.**"

**M15-1. Intro (102L) → At a Glance:** Standard. Frequency ~2%.

**M15-2. Foundations (188L) → At a Glance:** Concepts: 7 recurring categories (Experiment, Contextual Value, Unintended Consequences, etc.). Compress to a 7-row table: Category | Signal | Example.

**M15-3. Step-by-Step (232L) → Playbook:** Decision table: "Experiment result" → "Generalize the finding" | "Value judgment" → "Abstract the criterion" | "Unintended consequence" → "State the tradeoff principle" | "Motivated blindness" → "State the bias rule" | "Behavioral pattern" → "Abstract the tendency".

**M15-4. Worked Examples (87L) → Annotated Walkthrough:** Annotate stimulus sentence-by-sentence with role labels (setup, key finding, implication).

**M15-5. Reference Guide (397L) → Cheat Sheet:** Keep: Method chain, 7 categories table, Three Tests (Textbook, Strength, Whole Story — as 3-row table), Ten Common Traps (compress to 5 most important). Skip: detailed family coverage.

---

#### M16 Fill in the Blank — 3 alternates

- **Method chain:** Read Context → Identify Gap → Prephrase Completion → Match & Verify
- **Timing target:** 1:30 per FitB question
- **Cheat Sheet "One Thing":** "**The blank is always a logical consequence of the preceding argument. Prephrase what MUST follow before reading the choices.**"

**M16-1. Intro (82L) → At a Glance:** Already compact. May be very close to original — include only if the structural conversion adds value.

**M16-2. Step-by-Step (63L) → Playbook:** Already very short. The Playbook may simply restructure into process + decision table without significant compression.

**M16-3. Reference Guide (405L) → Cheat Sheet:** This is where the real value is — 405L reference down to ~200L cheat sheet. Keep: Method chain, Completion patterns table, Traps, Stems.

---

#### M17 Most Strongly Supported — 3 alternates

- **Method chain:** Catalog Premises → Combine Claims → Prephrase Inference → Match Weakest Link
- **Timing target:** 1:30 per MSS question
- **Cheat Sheet "One Thing":** "**The right answer is the safest, most conservative claim the premises actually support. Reject anything that goes beyond the evidence.**"

**M17-1. Intro (89L) → At a Glance:** Compact. Frequency ~5%.

**M17-2. Step-by-Step (151L) → Playbook:** Medium length. Decision table: "Multiple premises combine" → "Synthesize the intersection" | "Causal claim in premises" → "Infer the effect" | "Strict definition given" → "Apply to stated facts" | "Constraint + condition" → "Derive what follows".

**M17-3. Reference Guide (463L) → Cheat Sheet:** Longest reference guide in Phase 3. Heavy compression needed. Keep: Method chain, Inference strategies (6 rows), Traps (5 rows), MSS vs MBT distinction (1 row), Stems.

---

#### M18 Must Be True — 3 alternates

- **Method chain:** Parse Rules → Chain Logic → Derive Conclusion → Verify Necessity
- **Timing target:** 1:30 per MBT question
- **Cheat Sheet "One Thing":** "**The right answer is logically guaranteed by the premises — no assumptions, no probability, no 'probably true.'**"

**M18-1. Intro (71L) → At a Glance:** Very compact. May not benefit from conversion — evaluate after pilot.

**M18-2. Step-by-Step (63L) → Playbook:** Very short. Likely a restructure rather than compression.

**M18-3. Reference Guide (372L) → Cheat Sheet:** Keep: Method chain, Logic patterns, Governed Sets reference, Traps, Stems.

---

#### M19 Must Be False — 3 alternates

- **Method chain:** Parse Constraints → Find Contradiction → Verify Impossibility
- **Timing target:** 1:30 per MBF question
- **Cheat Sheet "One Thing":** "**The right answer directly contradicts what the premises establish. Find the impossibility, not just the improbability.**"

**M19-1. Intro (90L) → At a Glance:** Compact.

**M19-2. Step-by-Step (52L) → Playbook:** Very short — may not benefit. Evaluate after pilot.

**M19-3. Reference Guide (389L) → Cheat Sheet:** Keep: Method chain, Contradiction types (Conditional Breakers, Quantifier Clashes, Exclusive Boundaries, Numerical Impossibility), Traps, Stems.

---

#### M20 Paradox/Explain — 3 alternates

- **Method chain:** Identify the Paradox → Hold Both Facts True → Prephrase Resolution → Match
- **Timing target:** 1:15 per Paradox question (typically faster than average)
- **Cheat Sheet "One Thing":** "**Both facts in the paradox are TRUE. The right answer explains how they can coexist — it doesn't deny either one.**"

**M20-1. Intro (65L) → At a Glance:** Very compact. Minimal conversion.

**M20-2. Step-by-Step (109L) → Playbook:** Moderate. Decision table: "Numbers vs percentages" → "The rate changed but the count didn't (or vice versa)" | "Selection bias" → "The sample self-selected" | "Hidden distinction" → "Two groups seem the same but differ on a key variable" | "Counterintuitive cause" → "An unseen mechanism connects the two facts".

**M20-3. Reference Guide (406L) → Cheat Sheet:** Keep: Method chain, Paradox patterns (5 types as decision table), Traps, Stems.

---

#### M21 Agree/Disagree — 2 alternates

- **Method chain:** Read Both Speakers → Find Overlap → Test Each Answer Against Both
- **Timing target:** 1:30 per A/D question
- **Cheat Sheet "One Thing":** "**The right answer is the claim where Speaker A says yes and Speaker B says no (or vice versa). If either speaker has no opinion, it's wrong.**"

**M21-1. Intro (74L) → At a Glance:** Compact. Frequency ~3%.

**M21-2. Step-by-Step (50L) → Playbook:** Very short — essentially already a playbook. Restructure into process block + 1 small decision table (Disagreement types: Definitional | Explanatory | Evaluative).

**Note:** M21 may not have a reference guide file. If absent, skip Cheat Sheet.

---

**Phase 3 File-by-File Total: 37 alternates with module-specific instructions for every file.**

---

### Revised Summary Metrics

| Phase | Modules | Alternates | Source Lines Covered |
|---|---|---|---|
| Phase 1: Unit 3 Pilot | 5 | 22 | ~4,450L |
| Phase 2: Units 1–2 | 6 | 40 | ~8,100L |
| Phase 3: Units 4–7 | 10 | 37 | ~7,200L |
| Phase 4: RC Concepts | ~22 | ~40 | ~2,000L (mostly short) |
| Phase 5: RC Passages | ~15 | TBD | TBD |
| **Total** | **~58** | **~139** | **~21,750L** |

## Block-Level Conversion Specs — Phase 1 (M7, M8, M9, M11)

Each spec below shows the **current content structure** (left) and the **target alternate structure** (right) for every lesson that receives an alternate. This is the agent instruction sheet.

---

### At a Glance — Conversion Rules (Introductions + Foundations)

**Input pattern** (current Intro, ~100–140L):
```
h2: MODULE N: [Type]              → REMOVE (redundant with page title)
[tip callout: Frequency]          → KEEP as inline badge, not callout
h3: Why This Matters              → COMPRESS to 1 sentence
h3: Recognizing the Question      → COMPRESS to table row
  [table: stem patterns]          → KEEP but merge into unified quick-ref table
h3: Quick Example                 → KEEP as single blockquote + 1-line analysis
  [process/breakdown]             → REMOVE (too detailed for glance)
h3: What You'll Learn             → CONVERT to compact bulleted list (max 5)
[summary callout]                 → REMOVE (At a Glance IS the summary)
```

**Output pattern** (At a Glance, target ~40–60L):
```
h3: [Question Type] — At a Glance
[paragraph: 1 sentence question goal with bold frequency inline]
[table: 3 columns — Stem Pattern | Core Skill | Common Trap]
  (merge stem patterns, key skill, and top trap into single reference table)
[blockquote: stimulus snippet from Quick Example — max 3 sentences]
[paragraph: 1-sentence analysis of the example]
h4: What's in This Module
[list: max 5 bullet items, each ≤12 words]
```

**Input pattern** (current Foundations, ~200–300L):
```
h2: [Concept A]                   → COMPRESS to 1-row table entry
h2: [Concept B]                   → COMPRESS to 1-row table entry
h2: [Concept C]                   → COMPRESS to 1-row table entry
h2: Common Strategies / Patterns  → CONVERT to compact table
  [multiple tables, breakdowns]   → MERGE into single reference table
h2: Worked Example                → COMPRESS to blockquote + 1 paragraph
  [process: walkthrough steps]    → REMOVE (save for Playbook)
[summary callout]                 → KEEP (abbreviate to 2–3 lines)
```

**Output pattern** (Foundations At a Glance, target ~80–120L):
```
h3: Core Concepts
[table: Concept | Definition | Key Distinction — one row per h2 section]
h3: Strategies at a Glance
[table: Strategy | When to Use | Signal — one row per strategy from original]
h3: Quick Example
[blockquote: original stimulus, abbreviated if >4 sentences]
[paragraph: 2-sentence analysis covering conclusion + gap]
[summary callout: abbreviated key takeaways, max 3 bullet points]
```

---

### Playbook — Conversion Rules (Step-by-Step Guides)

**Input pattern** (current Step-by-Step, ~230–400L):
```
h2: Step-by-Step: [Type]          → REMOVE (redundant)
h3: Overview                      → REMOVE (Playbook IS the overview)
  [process: step list]            → KEEP as primary content, but compress
  [tip callout: timing]           → KEEP as first element
h2: Step 1: [Name]                → COMPRESS: 1 "what" sentence + 1 "why" sentence
  [h4: Example]                   → REMOVE
  [h4: sub-techniques]            → CONVERT to single table row
  [breakdown/table details]       → MERGE into decision table
h2: Step 2: [Name]                → Same compression
h2: Step 3: [Name]                → Same compression
h2: Step 4: [Name]                → Same compression
[summary callout]                 → CONVERT to method-chain one-liner
```

**Output pattern** (Playbook, target ~80–120L):
```
[tip callout: "Target: X:XX per question"]
h3: The Method
[process block: N steps — each step is 1 bold "what" sentence + 1 "why" sentence]
  (NO sub-steps, NO examples, NO h4 details)
h3: Decision Table
[table: "If You See..." | "Then Do..." | "Watch Out For..."]
  (one row per common gap/pattern from the original's h4 sub-techniques)
  (max 8 rows)
[summary callout variant='summary': method chain as single bold line]
  e.g., "**Find → Gap → Prephrase → Match**"
```

**Module-specific method chains:**
- M7 Evaluate: **Find → Gap → Prephrase Question → Yes/No Test**
- M8 Weaken: **Find → Gap → Prephrase Weakener → Match & Eliminate**
- M9 Strengthen: **Find → Gap → Prephrase Strengthener → Evaluate & Eliminate**
- M11 Sufficient Assumption: **Break Down → Force Standard → Diagnose Family → Prephrase Minimum → Negate & Verify**

---

### Annotated Walkthrough — Conversion Rules (Worked Examples)

**Input pattern** (current Worked Examples, ~45–152L):
```
h2: Common Wrong Answer Patterns   → CONVERT to compact trap table (if present)
  [table: trap types]              → KEEP but compress column count
h2: Full Worked Example            → RESTRUCTURE completely
  [blockquote: stimulus]           → KEEP as source, then annotate
  h3: Applying the N-Step Method
  [process: step walkthrough]      → CONVERT to inline annotations
  [summary/callout: why it works]  → KEEP at end
```

**Output pattern** (Annotated Walkthrough, target ~100–160L):
```
h3: Annotated Stimulus
[blockquote: original stimulus text, unchanged]
h4: Structural Annotation
[breakdown block:
  labels: { title: 'Sentence', text: 'Role' }
  items: one per stimulus sentence
    title: quoted sentence (or paraphrase if >20 words)
    text: logical role — Premise / Conclusion / Background / Counter / Evidence
    badge: role name
    badgeColor: green=conclusion, blue=premise, slate=background, red=counter
]
h3: Method Applied
[process block: same steps as original, but each step references the annotation above]
  e.g., "Step 1 — The conclusion is sentence 3 (green badge above): '[quoted]'"
h3: Trap Table
[table: 2 columns — Wrong Answer Type | Why It Fails]
  (max 5 rows, from Common Wrong Answer Patterns section)
[summary callout: "Why this answer works" — from original's final callout]
```

**Module-specific annotation notes:**
- M7 Evaluate (152L): Has both Common Wrong Answers + Full Worked Example. Full annotation.
- M8 Weaken (109L): Has both sections. Full annotation.
- M9 Strengthen (45L): Only has Full Worked Example + brief analysis. Add trap table from step-by-step's "Common Wrong Answer Patterns" h3.

---

### Field Guide — Conversion Rules (Taxonomies / Common Patterns)

**Input pattern** (current Field Guide, ~150–300L per file):
```
h2: A Field Guide to [Type]       → REMOVE (title is in page header)
h3: Master Table                  → KEEP as overview, but it becomes the primary view
h2: 1. [Category] (~N%)           → CONVERT to breakdown card
  h4: What It Looks Like          → Extract 1 signal phrase
  h4: Pivotal Question Pattern    → Extract 1 question template
  [paragraphs of description]     → COMPRESS to 1 sentence
h2: 2. [Category] (~N%)           → Same card conversion
...
[summary callout]                 → KEEP
```

**Output pattern** (Field Guide alternate, target ~60–70% of original):
```
h3: Quick Reference
[table: original Master Table — unchanged, this is the anchor]
h3: Pattern Cards
[breakdown block:
  labels: { title: 'Pattern', text: 'Details' }
  colWidth: 'narrow'
  items: one per category
    title: "[Category Name]"
    badge: "~N%"
    badgeColor: frequency-based (green=high, blue=medium, slate=low)
    text: "**Signal:** [1 phrase]\n**Question:** [1 template]\n**Trap:** [most common wrong answer pattern]"
]
[summary callout: unchanged from original]
```

**Module-specific Field Guide targets:**
- M7 `CommonEvaluationTargets` (205L): 3 targets → 3 cards. Target: ~120L.
- M7 `EvaluationTargets_Extended` (147L): 3 targets + Quick ID Process → 3 cards + process block. Target: ~100L.

---

### Cheat Sheet — Conversion Rules (Reference Guides)

**Input pattern** (current Reference Guide, ~280–460L):
```
h2: [Type]: Complete Reference     → REMOVE
h3: The N-Step Method              → CONVERT to bold one-liner
  [process block]                  → CONVERT to single bold chain
h3: [Strategies/Patterns]          → CONVERT to "If → Then" table
  [table: detailed strategies]     → COMPRESS: keep 2 columns max
h3: Common Traps                   → KEEP as compact table
  [breakdown: trap details]        → COMPRESS to table rows
h3: [vs. Comparison]               → CONVERT to single comparison row
h3: Difficulty Factors             → REMOVE (not a quick-ref need)
h3: Question Stems                 → CONVERT to bulleted list
[summary callout]                  → REPLACE with "One Thing" callout
```

**Output pattern** (Cheat Sheet, target ~50–70% of original):
```
[summary callout variant='summary' title='The Method':
  text: bold method chain, e.g., "**Find → Gap → Prephrase → Yes/No Test**"]
h3: Decision Rules
[table: 2 columns — "If You See..." | "Do This"]
  (one row per strategy/pattern, max 10)
h3: Traps
[table: 2 columns — "Trap" | "How to Spot"]
  (one row per common trap, max 6)
h3: Quick Distinctions
[table: 2 columns — "[Type] vs." | "Key Difference"]
  (one row per comparison pair, e.g., Weaken vs. Flaw)
h3: Stems
[list: bulleted, 4–6 stem patterns]
[summary callout variant='summary' title='The One Thing':
  text: single bold sentence — the most important takeaway for this question type]
```

**Module-specific Cheat Sheet "One Thing" lines:**
- M7 Evaluate: "**The right answer is the question whose yes/no answers produce opposite verdicts on the conclusion.**"
- M8 Weaken: "**Name the gap, prephrase the attack, and never confuse weakening the conclusion with weakening a premise.**"
- M9 Strengthen: "**The right answer fills the exact gap between premises and conclusion — not a different gap, and not a new argument.**"
- M11 Sufficient Assumption: "**The right answer, combined with the premises, makes the conclusion logically inescapable — no exceptions, no wiggle room.**"
- M10 Causal Reasoning: "**Correlation is not causation. Every causal claim needs three checks: reverse causation, third factor, and coincidence.**"

---

## Content Block Inventory for New Formats

| Block Type | Use in Alternates |
|---|---|
| `process` | Playbook method steps |
| `breakdown` | Field Guide cards, Annotated Walkthrough annotations |
| `table` | At a Glance quick-reference, Cheat Sheet "If → Then" rules, Playbook decision trees |
| `callout` (summary) | Cheat Sheet "one thing to remember" anchors |
| `callout` (tip) | Playbook action cues |
| `accordion` | Annotated Walkthrough explanation reveals |

No new block types are needed. The existing `ContentBlock` union covers every proposed format.

## What This Does NOT Cover

- Student-facing format selection (this is author-side review only for now)
- Analytics on which format students prefer (future, requires server-side tracking)
- Mobile-specific layouts (Tailwind responsive classes handle this already)
- New content — alternates repackage existing content, they don't add new teaching material

## File Conventions

Alternate content lives inside the same lesson file, not in separate files:

```
modules/module8/Lesson1_Introduction.tsx
  → content: [ ... ]           // Original
  → alternates:
       flash: { label: 'Flash Brief', content: [ ... ] }
```

This keeps the lesson as a single unit of truth. The catalog script ignores alternates — it only reads `title` and `id`.

## Success Criteria

A format is ready for cutover when:
1. Germaine has reviewed it in the browser and approved the presentation
2. The alternate is complete for every lesson in at least one full module
3. No content is lost — every teaching point from the original appears in the alternate (possibly compressed or restructured)
4. The alternate renders correctly on both desktop and mobile viewports
