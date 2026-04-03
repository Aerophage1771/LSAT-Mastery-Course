# Module 14: Principle-Generalization — Website Content Improvement Report

**Scope:** The 7 website lessons (14-1 through 14-7) evaluated as a standalone course unit.
**Date:** 2026-04-01

---

## Executive Summary

Module 14 is a well-structured, content-dense unit covering Principle-Generalization from first principles through four specialized drill patterns. The theory in Lessons 14-1 and 14-2 is accurate and thorough, and the four drill lessons (14-3 through 14-6) each follow a clean, consistent pattern: concept introduction → PT question card → full step-by-step analysis → wrong-answer table → pattern-specific traps → key takeaways. The Reference Guide (14-7) is the strongest in the module set examined so far — comprehensive, organized, and genuinely useful for pre-test review.

The primary improvement opportunities are:

1. **No "try it first" prompts before any worked analysis.** The module contains six worked examples (one in 14-1, one in 14-2, one in each drill lesson). None instruct students to attempt the analysis or question before reading the walkthrough. This is the single highest-impact fix.
2. **14-1 contains a full worked example with no question-card** — the congestion surcharge scenario is described but never presented as an interactive exercise. The step 3 "Evaluate the Choices" section references answer choices that are never provided.
3. **14-2's Full Worked Example uses `<br/>` spacer blocks** instead of a proper "try it first" prompt to create visual separation before the walkthrough. The spacer approach obscures the pedagogical intent.
4. **Module number inconsistency.** The mastery course files title the module "MODULE 15: Principle-Generalization" while the website files correctly use "MODULE 14." The `id` fields correctly use `14-x`, but the h2 heading and internal cross-references (e.g., "In Principle-Apply (Module 14)") use the wrong numbering.
5. **14-1 "Quick Example" section** covers the same guppy abstraction example that also appears in 14-1 website version's full Abstraction Skill section — the mastery course version cuts the table and keeps only the conclusion sentence, which is weaker.

---

## Lesson-by-Lesson Review

### Lesson 14-1: Introduction (website: 14-1.tsx)

**Role:** Module entry point covering question goal, question type comparison, abstraction skill, generalization categories, the stimulus-as-case-study framework, criteria for the correct principle, and a full worked example.

**Strengths:**
- The three-way comparison table (Principle-Strengthen / Principle-Apply / Principle-Generalization) is excellent — the clearest articulation of the distinction anywhere in the module.
- The Abstraction Skill section with the guppy example and full specifics-to-categories table is pedagogically strong. The Replacement Test callout is actionable.
- The Common Generalization Categories table gives students a head start on pre-phrasing.
- The "Stimulus as a Case Study" breakdown (Trade-Offs, Unintended Consequences, Perception Effects, Causal Explanations, Contextual Value) previews the four drill patterns, giving the module good structural coherence.
- The Criteria for the Correct Principle section is rigorous — the "Textbook Test" framing and the force-of-language table are among the best content in the module.
- Key Takeaways callout at the end is comprehensive and accurate.

**Issues:**
- **No "try it first" prompt before the Worked Example.** The congestion surcharge walkthrough dives directly into "Step 1: Identify the Central Dynamic" without asking the student to attempt the pre-phrase first. This is the highest-priority fix.
- **Missing answer choices in the Worked Example.** Step 3 ("Evaluate the Choices") describes what the correct answer should look like but provides no answer choices for the student to evaluate. The worked example is incomplete as a practice exercise.
- **"Direction Check" callout uses wrong module numbers** in the mastery course version ("Module 14" and "Module 13" instead of "Module 13" and "Module 12"). The website version is correct.
- **"Quick Example" in the mastery course version** truncates the guppy abstraction by removing the specifics-to-categories table and replacing it with only the final abstracted principle sentence. The full table is more instructive and should be preserved.
- The lesson is long (~49+ blocks in the website version). This is appropriate for an introduction to a conceptually demanding question type, but the Common Generalization Categories section and the Stimulus as a Case Study section overlap in coverage — both describe recurring stimulus patterns. One could be made a forward reference to the Reference Guide.

**Suggested edits:**
- Add a "Try this: Before reading the walkthrough below, read the congestion surcharge scenario and write your own pre-phrase in abstract terms. Then compare your formulation to the step-by-step analysis." prompt before Step 1 of the Worked Example.
- Add actual answer choices to the Worked Example (or replace the incomplete Step 3 analysis with a note: "Five sample answer choices and their evaluations appear in the Reference Guide.").
- Fix module number references throughout.
- In the mastery course version, restore the guppy abstraction table in the Quick Example section.

---

### Lesson 14-2: Step-by-Step Guide (website: 14-2.tsx)

**Role:** The complete 4-Step Method for solving Principle-Generalization questions, with worked example, wrong-answer patterns catalogue, and timing strategy.

**Strengths:**
- The 4-Step Method process block is clean and memorable.
- The three-component breakdown for Step 1 (Players / Key Variable / Outcome) is excellent — gives students a concrete checklist.
- The toddler biting example is well-chosen: counterintuitive, memorable, and easy to abstract. It threads through all four steps coherently.
- The "Moral of the Story" Test callout is the single best pedagogical tool in the lesson.
- The Abstraction Technique process block with five numbered steps is the most systematic treatment of abstraction in the module.
- The Common Abstraction Mistakes callout (Too Specific / Too Vague / Wrong Focus) directly addresses the three most common student errors.
- The wrong-answer patterns breakdown (Normative Leap, Partial Match, Reverse Logic, Too-Strong Claim, Out-of-Scope Concept, Prediction Mismatch) is the most complete trap catalogue in the module.
- The timing strategy table is specific and actionable.
- **The mastery course version adds content not in the website version** — the "Principle vs. Explanation Check" callout, the three-row table of explanation-to-principle transformations, and the Path Dependency / Lock-In and Emergence / Whole vs. Part advanced pattern content. This is genuine value-add that should be preserved and flagged as additions in the diff.

**Issues:**
- **No "try it first" prompt before the Full Worked Example.** The pharmaceutical trial scenario is set up with `<br/><br/><br/>` spacers and an `<hr/>` to create visual separation, but no explicit instruction tells the student to attempt the exercise before reading the walkthrough. The spacer approach is a workaround that doesn't communicate intent.
- **The Full Worked Example uses illustrative content, not a real LSAT question card.** Unlike the drill lessons (14-3 through 14-6), this lesson presents a worked scenario without a `question-card` block. Students get the analysis without the actual practice experience. This is consistent with its role as a method lesson, but a short note acknowledging this would set expectations.
- **The "Principle vs. Explanation Check" table** in the mastery course version (rows about lock-in, emergence) is genuinely good content but has no counterpart in the website version, making it an addition that should be flagged in the diff.

**Suggested edits:**
- Replace the `<br/><br/><br/>` spacers before the Full Worked Example with an explicit "Try this: Read the pharmaceutical trial scenario above. Before scrolling to the walkthrough, attempt Steps 1–3 on your own — identify the players, key variable, outcome, and write a pre-phrase." prompt.
- The wrong-answer patterns catalogue should move to or duplicate in the Reference Guide (14-7), where it currently appears in slightly less complete form.
- The Path Dependency and Emergence pattern content in the mastery course version should be marked as additions in the diff.

---

### Lesson 14-3: Drill — Experiment Generalization (website: 14-3.tsx)

**Role:** Practice drill using PT-116-S-3-Q-3 (tennis players / racket evaluation experiment).

**Strengths:**
- Excellent setup: the "Isolate, Then Generalize" two-phase strategy is a concrete, memorable framework specific to experiment-based stimuli.
- The "Independent Variable Rule" callout clearly identifies the most important skill for this pattern type.
- The question-card is present with all five answer choices including the correct answer marker.
- The full analysis follows a consistent five-step breakdown (Isolate Components → Key Dynamic → Abstract → Evaluate Each Answer → Summary Table).
- The wrong-answer evaluation is thorough — each of the five answer choices gets its own breakdown item with a specific failure label (Misidentified Variable, Out-of-Scope Concept, etc.).
- The Control Variable Confusion trap is the best-named trap in the module — it directly addresses the most common error in experiment generalization questions.
- Key Takeaways are well-calibrated: five points that each add something new.

**Issues:**
- **No "try it first" prompt before the Full Analysis.** The question-card is followed immediately by the Full Analysis section. The lesson even includes explicit instructions ("Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis.") but these appear in a plain paragraph block that students may skim rather than heed. A `{{+**Try this:** ...+}}` diff marker or a callout block would make the instruction more prominent.
- **The spacer paragraph** (`<br/><br/><br/>`) between the question-card and the Full Analysis section is the correct structural intent but is not self-explanatory in the context of the mastery course viewer.
- The lesson currently lacks any formal `alternates` section. Adding a diff alternate would allow the "try it first" prompt to appear there without modifying the base content.

**Suggested edits:**
- Add a `{{+**Try this:** Attempt this question before reading the analysis below. Identify the independent variable, the control variable, and the outcome. Write your pre-phrase in abstract terms before looking at the choices.+}}` prompt in the diff alternate, inserted immediately before the "Full Analysis" h3 block.
- Consider promoting the explicit practice instruction (currently in a paragraph block) to a callout block with `variant: "tip"` in the base lesson.

---

### Lesson 14-4: Drill — Contextual Value (website: 14-4.tsx)

**Role:** Practice drill using PT-119-S-3-Q-8 (jazz pianists / context-dependent trait value).

**Strengths:**
- The four-item "What Makes Contextual Value Distinctive" list is the clearest articulation of this pattern's defining features.
- The "Key Signal" callout (contrast words: "but," "however," "precisely because") is highly actionable.
- The question-card appears after the concept introduction, as expected.
- The analysis breakdown correctly identifies "precisely because" as the pivot phrase that signals both sides of the contextual value dynamic.
- The wrong-answer breakdown is precise and distinctive: each answer gets a different failure label (Mismatched Focus, Too Strong, Imported Concept, Wrong Lesson) that teaches the general trap category.
- The Key Takeaways at the end include the observation that "'Precisely because' is a gift," which is memorable and accurate.

**Issues:**
- **No "try it first" prompt before the Full Analysis.** The spacer paragraph (`<br/><br/><br/>`) appears before the question-card (not between the question-card and the analysis), so the structural separation is in the wrong place — the student sees the spacer before reading the question, not before the analysis appears.
- **The concept introduction and the analysis are both present but not cleanly separated.** The "Step 1: Understand the Situation" heading immediately follows the question-card with no pause for student attempt. The analysis proceeds without giving the student a chance to apply the Isolate framework to the actual question.
- The lesson is shorter than the other drill lessons (~50 blocks) because the concept section is leaner. This is appropriate — Contextual Value is a simpler pattern than Motivated Blindness.

**Suggested edits:**
- Move the `<br/><br/><br/>` spacer to between the question-card and the "Full Analysis" section (or replace it with an explicit "Try this" prompt).
- Add "Try this: Before reading the analysis, identify the trait, the two contexts, and the opposite outcomes. Write your pre-phrase." before the Full Analysis.

---

### Lesson 14-5: Drill — Unintended Consequences (website: 14-5.tsx)

**Role:** Practice drill using PT-124-S-1-Q-5 (modern medicine / life expectancy / welfare costs).

**Strengths:**
- The distinction between a trade-off (simultaneous costs and benefits) and an unintended consequence (sequential, downstream effect) is clearly drawn in the opening paragraphs. This is the module's best treatment of the trade-off/unintended-consequence distinction.
- The "Key Signal" callout (causal transition language) correctly identifies the linguistic markers of this pattern.
- The three-link causal chain breakdown (Solution → Consequence → New Problem) is clean and memorable.
- The full analysis correctly identifies the domain shift (healthcare → public finance) as a characteristic feature of this pattern type.
- The wrong-answer evaluations are accurate and the failure labels are varied and instructive.
- The "Unintended Consequences: Common Traps" breakdown specifically addresses the "Solution Failed" Misread trap, which is distinctive and important.
- The Key Takeaways at the end include the domain-shift observation, which students would not think to look for on their own.

**Issues:**
- **No "try it first" prompt before the Full Analysis.** Same structural issue as Lessons 14-3 and 14-4.
- **The spacer paragraph** appears in the same wrong position — before the question-card rather than between it and the analysis.
- Answer (A) evaluation has a subtle framing issue: it says "Innovation did solve the problem" but the principle it evaluates is more nuanced than that — the real issue is that (A) says innovation "cannot be the solution to ALL problems," implying a limitation, while the stimulus actually shows innovation *fully succeeding* at its goal. The analysis in the lesson correctly identifies the "Wrong Lesson" but could be sharpened.

**Suggested edits:**
- Reposition the spacer (or replace with a "Try this" prompt) to between the question-card and the analysis.
- The Answer (A) evaluation could note that the stimulus is evidence *for* innovation's power, not *against* it — the lesson is not "innovation has limits" but "success can cause new problems."

---

### Lesson 14-6: Drill — Motivated Blindness (website: 14-6.tsx)

**Role:** Practice drill using PT-109-S-1-Q-18 (environmentalists / satellites / ozone layer).

**Strengths:**
- The opening distinction between motivated blindness and a rational trade-off is the conceptually sharpest writing in the module. The phrase "they do not *see* the costs" (as opposed to "they *accept* the costs") captures the distinction precisely.
- The "Key Signal" callout ("it is no wonder that") correctly identifies the LSAT's signature motivated-blindness phrase.
- The question-card is present with all five answer choices.
- The analysis breakdown is the most psychologically sophisticated in the module: it correctly identifies that the critical issue is the *cognitive process* (failure to consider) not the *factual situation* (ozone damage is real).
- The wrong-answer breakdown for Answer (B) — the "Rational Trade-off Trap" — is the single best wrong-answer analysis in the module. It clearly explains why the stimulus's language of "fail to consider" rules out a cost-benefit interpretation.
- The "Unforeseen vs. Ignored Confusion" trap is unique to this lesson and addresses a genuine source of student error.

**Issues:**
- **No "try it first" prompt before the Full Analysis.** Same structural issue as other drill lessons.
- **The spacer appears before the question-card,** not between the question-card and the analysis.
- The lesson is the most conceptually demanding drill (identifying a cognitive bias from a descriptive passage), but it does not warn students of this in advance. A brief difficulty signal or framing note at the start would set appropriate expectations.
- The "Pattern Swap" trap (unintended consequences vs. motivated blindness) is the most sophisticated trap in the module, but the explanation is brief. It would benefit from an explicit cross-reference to Lesson 14-5.

**Suggested edits:**
- Add a brief framing note at the start: "This is the most conceptually advanced drill in the module. The key challenge is distinguishing *why* the group fails to see the downside — not just that it does."
- Add "Try this" prompt before the Full Analysis.
- Expand the Pattern Swap trap explanation with a cross-reference to Lesson 14-5.

---

### Lesson 14-7: Reference Guide (website: 14-7.tsx)

**Role:** Comprehensive one-stop cheat sheet for the entire module.

**Strengths:**
- This is the best-developed Reference Guide in the modules examined. At 9 major sections (4-Step Method, Generalization Categories, Three-Way Comparison, Scope Calibration, Common Traps, Test Day Checklist, Abstraction Cheat Sheet, Force-of-Language Guide, Module Summary), it covers everything a student needs for pre-test review.
- The Scope Calibration section (Section 4) with the Scope Spectrum table (Too Specific / Correct / Too Broad) using the jazz pianists example is excellent — it addresses the hardest skill in the question type with a concrete visual model.
- The "How to Find the Right Scope" process block (4 steps) is actionable and self-contained.
- The 9-trap Common Traps section (Section 5) is the most complete trap catalogue in the module and should be cross-referenced from 14-2.
- The 10-item Test Day Checklist (Section 6) covers the full question-answering workflow from type identification through answer selection.
- The Quick-Reference Tables at the end (Abstraction Cheat Sheet + Force-of-Language Guide) are immediately usable as test-day flashcards.
- The Module Summary callout at the end covers all five key themes in order.

**Issues:**
- **Module number inconsistency.** The website version correctly uses "Module 14: Principle-Generalization" in the h2 heading. The mastery course version uses "Module 15: Principle-Generalization — Reference Guide." This should be fixed in the diff.
- **The Generalization Categories table (Section 2)** includes a "Behavioral Pattern" row that references "Lessons 1–2" for coverage. This is the only category without a dedicated drill lesson, and no explanation is given. A note acknowledging that behavioral pattern questions are covered using the general 4-step method would prevent student confusion.
- **No cross-reference to Lesson 14-2's wrong-answer patterns.** Section 5 of the Reference Guide covers 9 traps, while Lesson 14-2 covers 6. The two lists overlap but are not identical. A student using only the Reference Guide would see a different (and incomplete) trap catalogue than a student who read Lesson 14-2.
- **The "Quick Direction Check" callout** in the PG vs. PA vs. PS section correctly distinguishes all three types, but the format is inconsistent with the table that precedes it. The callout presents the same information in prose form, creating minor redundancy.

**Suggested edits:**
- Fix module number in the mastery course version heading.
- Add a note to the "Behavioral Pattern" row in Section 2: "No dedicated drill lesson — apply the general 4-step method."
- Expand the Common Traps section to cross-reference Lesson 14-2's six traps and confirm that all nine traps in this section subsume or extend those six.
- The Quick Direction Check callout can be trimmed or removed since it duplicates the table directly above it.

---

## Structural Issues

### 1. "Try It First" Prompts Are Missing Everywhere

The module contains six opportunities for active student practice (one worked example in 14-1, one in 14-2, and one PT question per drill lesson 14-3 through 14-6). None of them include an explicit instruction to attempt the exercise before reading the analysis. The drill lessons do include a sentence ("Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis.") but this appears in a paragraph block that gets visually lost.

**Recommendation:** Add a prominent "Try this" callout or bold prompt immediately before each analysis section across all six worked exercises. The diff alternate format makes this straightforward to add without modifying base content.

### 2. Spacer Blocks in Wrong Position

Lessons 14-3 through 14-6 use `<br/><br/><br/>` spacer paragraphs to create visual separation between content sections. In all four drill lessons, the spacer appears immediately before the question-card (not between the question-card and the analysis). This means the visual gap is in the wrong place — the student needs the gap after the question-card, not before it.

**Recommendation:** In the diff alternates, note this structural issue and recommend moving the spacer or replacing it with a proper "Try this" prompt callout placed after the question-card.

### 3. Module Number Inconsistency

The mastery course Lesson1_Introduction.tsx and Lesson7_ReferenceGuide.tsx files use "MODULE 15" in their h2 headings, and the direction-check callout references "Module 14" and "Module 13" for Principle-Apply and Principle-Strengthen respectively (which would be correct for a module numbered 15, but the module is actually module 14). The website versions correctly use "Module 14" throughout.

**Recommendation:** Fix the module numbers in all mastery course lesson files. The diff alternates already contain the corrected numbers.

---

## Missing Content

| Gap | Where It Should Go | Priority |
|-----|-------------------|----------|
| "Try it first" prompts before every worked example and question-card analysis | All 6 worked examples (14-1 through 14-6) | High |
| Complete answer choices for the 14-1 Worked Example | Lesson 14-1 | High |
| Cross-reference from 14-2's wrong-answer patterns to 14-7's 9-trap list | Lesson 14-2 | Medium |
| "Behavioral Pattern" drill lesson or explanation note | Reference Guide Section 2 | Medium |
| Framing note for difficulty of 14-6 | Lesson 14-6 | Low |
| Cross-reference from 14-6 Motivated Blindness to 14-5 Unintended Consequences | Lesson 14-6 | Low |

---

## Summary of Priorities

1. **Add "try it first" prompts before every worked analysis** — the single highest-impact improvement across all six lessons.
2. **Complete the 14-1 Worked Example** — add actual answer choices or replace the truncated Step 3 with a proper reference.
3. **Fix module number inconsistency** — "MODULE 15" in mastery course files should be "MODULE 14."
4. **Cross-reference 14-2's trap catalogue with 14-7's trap list** — prevent students from seeing two conflicting incomplete lists.
5. **Reposition spacer blocks** in drill lessons — the visual gap should appear after the question-card, not before it.
