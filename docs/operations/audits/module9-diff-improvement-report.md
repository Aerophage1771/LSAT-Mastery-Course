# Module 9: Strengthen -- Website Content Improvement Report

**Scope:** The 13 website lessons (9-1 through 9-13) evaluated as a standalone course unit.
**Date:** 2026-04-01

---

## Executive Summary

Module 9 is one of the strongest units in the course. The 13 lessons cover introduction through advanced concepts with 8 real PT question cards featuring full wrong-answer analyses. The drill lessons (9-3 through 9-12) are consistently excellent -- each one teaches a named strategy, provides a real question, and delivers a complete sentence-by-sentence breakdown with labeled wrong-answer patterns. The primary improvement opportunities are:

1. **Lesson 9-1 tries to do too much** -- it covers introduction, the Gap Model, Strengthen vs. Weaken, Strengthen vs. Sufficient Assumption, all six common strategies, AND a full worked example. That is ~52 blocks serving as both overview and reference. The Mastery Course content wisely trims this, but the website version still has scope creep.
2. **No practice questions in the first 2 lessons** -- the student reads ~98 blocks of theory (9-1 and 9-2) before encountering their first question-card in Lesson 9-3. The opening lessons are all lecture.
3. **Lessons 9-7 through 9-12 are excellent but structurally thin** -- each is only 16 blocks. They are tightly focused single-drill lessons with a real PT question and full analysis. This is the ideal format, but some lack the teaching preamble depth of earlier drills (9-3 through 9-5).
4. **The advanced lesson (9-6) is the module's best lesson** -- at 54 blocks it covers three difficulty factors, three advanced strategies, a hard PT question with full analysis, and elimination strategies. This is the gold standard.
5. **The reference guide (9-13) is solid but missing the drill map** -- at 30 blocks it covers the method, strategies, gap types, traps, EXCEPT strategy, and stem patterns. The Mastery Course version adds a Core Drill Map table anchoring each strategy to a specific PT question, which the website version should adopt.

---

## Lesson-by-Lesson Review

### Lesson 9-1: MODULE 9: Strengthen (52 blocks)

**Role:** Module introduction and overview.

**Strengths:**
- Clear Question Goal statement up front
- Strong "Why This Matters" section connecting Strengthen to Weaken (Module 8) as a mirror image
- The Gap Model breakdown with Strengthen/Weaken/Evaluate comparison is one of the best visual teaching tools in the module
- The Strengthen vs. Weaken and Strengthen vs. Sufficient Assumption comparison tables are clear and actionable
- Six Common Strengthening Strategies table with "When to Use It" column gives students a practical toolkit
- The "If True" callout is an essential LSAT concept, well-placed here
- The Worked Example (LED streetlights) walks through all steps coherently and connects back to the Weaken module

**Issues:**
- **Scope creep:** The lesson covers introduction, Gap Model, Strengthen vs. Weaken comparison, Strengthen vs. Sufficient Assumption comparison, all six common strategies, a full worked example, AND key principles. That is at least five distinct teaching goals.
- **No practice question.** 52 blocks of theory with no interactive practice. Even the worked example is a blockquote walkthrough, not a question-card the student can attempt.
- **The Common Strengthening Strategies table (6 strategies) partially overlaps with 9-6's Advanced Strategies section.** The introduction strategies (Confirm Causation, Rule Out Alternatives, Bridge Concepts, Support the Analogy, Eliminate a Counterexample, Validate the Data) are restated with different names in the advanced lesson and reference guide.
- **The "Strategy is not Formula" callout** is useful but could be more specific about when strategies blend.

**Suggested edits:**
- Trim the Strengthen vs. Sufficient Assumption section -- it is valuable but could be a shorter callout rather than a full section with a 5-row table. Students who need the full distinction can find it in the Reference Guide.
- Add a mini-exercise after the Worked Example: "Try it yourself: identify the gap and predict the strengthener for this short argument."
- The Mastery Course version wisely adds a "What You'll Learn in This Module" roadmap table. The website version should adopt this to help students navigate the 13-lesson sequence.

---

### Lesson 9-2: The 4-Step Method for Strengthen Questions (46 blocks)

**Role:** The complete method for solving any Strengthen question.

**Strengths:**
- Excellent structure: overview process block, then each step gets its own H2 section with explanation, table, and callout
- The timing callout (1:30 per question, 50s for read + gap, 40s for prephrase + evaluate) is concrete and useful
- The Gap Pattern table (6 patterns) is one of the best teaching tools in the module -- it gives students a checklist of vulnerabilities
- Prephrase Examples by Gap Type table is highly actionable
- Common Wrong Answer Patterns table (5 traps) with "How to Spot It" column is practical
- The Direction Check callout is the single most important tactical tip in the module
- Full Worked Example (migraine medication) walks through all 4 steps with a clear correlation-to-causation gap

**Issues:**
- **No question-card.** Despite being the method lesson, there is no interactive practice. The worked example is a blockquote + process walkthrough, not a question-card.
- **The worked example (migraine) is illustrative, not a real PT question.** All drill lessons (9-3 through 9-12) use real PT questions. The method lesson should either use one or explicitly note it is illustrative.
- **The Common Wrong Answer Patterns table overlaps with 9-6** (Advanced Traits) which also covers weakener traps in detail. This is acceptable redundancy since 9-2 is the method lesson, but the overlap exists.

**Suggested edits:**
- Add a question-card after the Full Worked Example section, giving the student one chance to apply the method independently before the drill lessons begin.
- Consider using a real PT question for the worked example, or adding a second worked example with a real PT question after the illustrative one.
- The Mastery Course version adds a "Causal Strengthening Framework" table and a "Non-Causal Support Lens" section that the website version lacks. These are valuable additions for students who need more structure.

---

### Lesson 9-3: Strengthening Causal Arguments (33 blocks)

**Role:** First drill lesson -- causal claims with PT-128-S-3-Q-1.

**Strengths:**
- Clear three-strategy framework: Rule Out Alternative Causes, Show the Mechanism, Show Dose-Response/Timeline
- The "No Cause -> No Effect" test callout is one of the most powerful teaching tools in the module
- Full sentence-by-sentence breakdown of the stimulus with the breakdown component
- Explicit identification of four alternative explanations (self-selection, pre-existing condition, non-work stressors, non-stress causes)
- Multiple valid prephrases listed (not just one)
- Every wrong answer gets a labeled tag (The Proportionality Trap, The Weakener, The Irrelevant Context, The Scope Mismatch)
- The correct answer analysis (C) explains the "No Cause -> No Effect" pattern in action

**Issues:**
- **The question-card is missing a `questionType` field.** Most later drill lessons include `questionType: "Strengthen"` and `difficulty` in the question-card metadata; 9-3 has `id` and basic fields but these are inconsistently present across lessons.
- **The "Step 1" heading says "Break Down the Argument" but the breakdown component labels say "Quote" and "Analysis."** This is a different format from the method lesson's terminology. Consistency would help.
- Minor: the teaching preamble (3 strategy rows) is slightly thin compared to lessons 9-4 and 9-5 which have more introductory context.

**Suggested edits:**
- Add `questionType` and `difficulty` to the question-card for consistency.
- Add a brief "attempt this before reading on" prompt before the Full Analysis section.

---

### Lesson 9-4: Strengthening Numerical Arguments (34 blocks)

**Role:** Drill on percentage vs. absolute number gaps with PT-111-S-3-Q-4.

**Strengths:**
- The Rule callout explaining percentage vs. absolute amounts with a concrete numeric example (10% of $50k vs. 8% of $100k) is the single clearest explanation of this concept in the course
- Four Common Numerical Gap Patterns table is comprehensive
- The Strengthening Strategy callout gives a direct, actionable directive
- Sentence-by-sentence breakdown with the breakdown component
- Every wrong answer gets a clear, labeled tag (Totals vs. Averages Trap, Scope Mismatch, Irrelevant History Trap)
- The Key Takeaway callout includes the formula: Percentage x Base = Absolute Amount

**Issues:**
- **None significant.** This is one of the best-structured drill lessons in the module. The teaching preamble clearly explains the concept, the question is well-chosen, and the analysis is thorough.
- Minor: the question-card does not include a `questionType` or `difficulty` field.

**Suggested edits:**
- Add `questionType` and `difficulty` metadata to the question-card.
- Add a brief "attempt this before reading on" prompt.

---

### Lesson 9-5: Strengthening Comparative Claims (31 blocks)

**Role:** Drill on comparative arguments with PT-106-S-3-Q-9.

**Strengths:**
- Four-strategy framework for comparative claims is clear and actionable
- The "Unique Information Pattern" callout identifies the most common comparative strengthener on the LSAT
- Full sentence-by-sentence breakdown
- Every wrong answer gets a clear labeled tag (Irrelevant Practicality Trap, Irrelevant Context, Irrelevant Opinion Trap, Wrong Comparison Trap)
- The Key Takeaway callout clearly states the "capability gap" principle

**Issues:**
- **None significant.** Well-structured drill lesson following the same gold-standard format as 9-3 and 9-4.
- Minor: no `questionType` or `difficulty` in the question-card.

**Suggested edits:**
- Add metadata fields to the question-card.
- Add a brief "attempt this before reading on" prompt.

---

### Lesson 9-6: Advanced Traits of Difficult Strengthen Questions (54 blocks)

**Role:** Bridge from basic to advanced, covering three difficulty factors and three advanced strategies.

**Strengths:**
- Clearly identifies three difficulty factors: Subtle Gaps, Weakener Traps, Indirect Strengtheners
- Concrete examples for each factor using a tutoring argument that students can follow across all three
- The Weakener Trap section (three sub-types: Alternative Cause Provider, Assumption Denier, Scope Expander) is the most thorough wrong-answer taxonomy in the module
- Three advanced strategies (The Defender, The Bridge, The Validator) are named, defined, and illustrated with examples
- Includes a hard practice question with the Varo River archaeology argument -- full analysis with labeled difficulty factors
- Five elimination strategies for hard questions, ordered by priority (Primary, Primary, Tiebreaker, Tiebreaker, Last Resort) with badges
- The Direction Check is reinforced here (first introduced in 9-2)

**Issues:**
- **The practice question is not in a question-card component.** The analysis refers to choices (A) through (E) but the stimulus and question are embedded in paragraph text, not in a `question-card` block. This means the student cannot attempt the question interactively before seeing the analysis.
- **The lesson has a paragraph that says "Apply the traits and strategies from this lesson to the following question" followed by "Answer Explanation" but no actual question stem or choices block in between.** The question-card is missing; only the analysis is present. This is a structural gap.
- **At 54 blocks, this is the longest lesson in the module.** The three difficulty factors, three strategies, the practice question, and the elimination strategies section is a lot of material. Consider whether the elimination strategies could move to the Reference Guide.

**Suggested edits:**
- Add the missing question-card block for the Varo River practice question so students can attempt it before reading the analysis.
- Add an "attempt this before reading on" prompt.
- Consider noting the PT source for the practice question (if it is a real PT question) in the question-card metadata.

---

### Lesson 9-7: The Defender Pattern (16 blocks)

**Role:** Focused drill on ruling out alternative explanations with PT-127-S-2-Q-14.

**Strengths:**
- Tight and focused -- 16 blocks, one clear goal
- "When to Expect the Defender" callout sets up the pattern effectively
- Real question-card with `questionType`, `difficulty: "hard"`, and full metadata
- Full wrong-answer analysis with labeled tags (Irrelevant Detail, Weakener, Scope Mismatch, Premise Booster)
- The Key Takeaway clearly explains why finding the same trait-behavior link in a different group is so powerful

**Issues:**
- **Very thin teaching preamble.** Only 2 blocks of teaching before the question-card (one paragraph + one callout). Compare to 9-3 which has a 3-row strategy table and a separate "No Cause -> No Effect" callout. The Defender deserves more setup.
- **No "attempt this before reading on" prompt.**

**Suggested edits:**
- Expand the teaching preamble by 2-3 blocks: add a table comparing "Direct Strengthener" vs. "Defender Strengthener" or a short second example of the Defender pattern.
- Add an "attempt this before reading on" prompt before the Full Analysis.

---

### Lesson 9-8: Bridging Conceptual Gaps (16 blocks)

**Role:** Focused drill on concept bridges with PT-101-S-3-Q-23.

**Strengths:**
- The "Spotting Conceptual Gaps" callout gives a clear diagnostic: compare key nouns in premise vs. conclusion
- Real question-card with `questionType`, `difficulty: "medium"`
- Full wrong-answer analysis with labeled tags (Irrelevant Fact, Premise Booster, Weakener, Scope Mismatch)
- The Key Takeaway about eliminating mundane alternatives is well-stated

**Issues:**
- **Same thin preamble issue as 9-7.** Only 2 blocks of teaching before the question.
- **No "attempt this before reading on" prompt.**

**Suggested edits:**
- Add a brief example of a conceptual gap before the question (e.g., "premises about cost, conclusion about quality -- the bridge is that cost reflects quality in this market").
- Add an "attempt this before reading on" prompt.

---

### Lesson 9-9: Strengthening Qualified Claims (16 blocks)

**Role:** Focused drill on narrow statistics with PT-125-S-4-Q-20.

**Strengths:**
- The "Playing It Safe" flaw callout is an excellent named concept students can carry to test day
- Real question-card with `questionType`, `difficulty: "hard"`
- Full wrong-answer analysis with labeled tags (Wrong Comparison, Irrelevant Reason, Irrelevant Policy, Irrelevant Agreement)
- The Key Takeaway about cherry-picked statistics is clear

**Issues:**
- **Thin preamble (2 blocks).** The "Playing It Safe" concept deserves more setup -- perhaps a quick numeric example showing how a rare prediction can have 100% accuracy without being useful.
- **No "attempt this before reading on" prompt.**

**Suggested edits:**
- Add a 2-block example illustrating the "Playing It Safe" flaw with numbers.
- Add an "attempt this before reading on" prompt.

---

### Lesson 9-10: Strengthening by Analogy (16 blocks)

**Role:** Focused drill on analogy/best-case arguments with PT-112-S-4-Q-20.

**Strengths:**
- The "Best-Case Strengthening" callout names a powerful pattern: if even the strongest candidate fails, the rest must too
- Real question-card with `questionType`, `difficulty: "hard"`
- Full wrong-answer analysis with labeled tags ("Some" Trap, Scope Mismatch, Reversal Trap)
- The Key Takeaway about "best-case-still-fails" is one of the most memorable concepts in the module

**Issues:**
- **Thin preamble (2 blocks).**
- **No "attempt this before reading on" prompt.**

**Suggested edits:**
- Add a 2-block setup distinguishing "worst-case analogy" from "best-case analogy" -- students often confuse the two directions.
- Add an "attempt this before reading on" prompt.

---

### Lesson 9-11: The Dose-Response Pattern (16 blocks)

**Role:** Focused drill on dose-response with PT-120-S-1-Q-26.

**Strengths:**
- The "Snapshot vs. Trajectory" callout clearly distinguishes static vs. dynamic evidence
- Real question-card with `questionType`, `difficulty: "hard"`
- Full wrong-answer analysis with labeled tags (Irrelevant Link, Reverse Causality, External Validity)
- The Key Takeaway about step-by-step co-variation is well-stated

**Issues:**
- **Thin preamble (2 blocks).**
- **No "attempt this before reading on" prompt.**

**Suggested edits:**
- Add a brief example distinguishing a "snapshot correlation" from a "dose-response trajectory."
- Add an "attempt this before reading on" prompt.

---

### Lesson 9-12: Strengthen EXCEPT (17 blocks)

**Role:** Focused drill on EXCEPT format with PT-113-S-2-Q-20.

**Strengths:**
- The Systematic EXCEPT Approach callout (4-step process) is clear and repeatable
- Real question-card with `questionType`, `difficulty: "hard"`
- Step 2 ("Map the Strengthening Angles") preemptively identifies four support categories before evaluating choices -- excellent pedagogical move
- "Systematic Sweep" heading makes the evaluation method explicit
- Every answer is tagged as STRENGTHENS or DOES NOT STRENGTHEN
- Verification step confirms the 4:1 ratio

**Issues:**
- **This is the only lesson that teaches a question format variant (EXCEPT) rather than a content pattern.** This is appropriate given that Strengthen EXCEPT is a common format, but it means the lesson serves a different pedagogical purpose than the other drills.
- **No "attempt this before reading on" prompt.**

**Suggested edits:**
- Add an "attempt this before reading on" prompt.
- Consider adding a brief note about how common EXCEPT questions are (frequency data) to motivate the format.

---

### Lesson 9-13: Strengthen Complete Reference (30 blocks)

**Role:** One-stop cheat sheet for the entire module.

**Strengths:**
- Covers the 4-Step Method, all strategies, gap types with frequency percentages, Strengthen vs. Weaken vs. Sufficient Assumption comparison, common traps with badges, EXCEPT strategy, question stem patterns, and a Test Day Checklist
- The gap type breakdown with approximate frequency percentages (~35% Causal, ~20% Conceptual, etc.) is the most actionable prioritization tool in the module
- Seven traps listed with severity badges (Very Common, Common, Moderate, Less Common)
- The Test Day Checklist is a practical 7-item pre-answer checklist

**Issues:**
- **Missing the Core Drill Map.** The Mastery Course version includes a table linking each drill question to its pattern, which is absent from the website version. This anchor table helps students connect strategies to concrete examples.
- **The strategies table (8 rows) does not include all patterns from the drills.** Missing: "Ideal Experiment Upgrade" (from Mastery Course), "Cost-Benefit / Tradeoff Lens" (from Mastery Course), "Competing-Hypothesis Screen" (from Mastery Course), and "Fallback Support Lens" (from Mastery Course). The Mastery Course version is richer with 12 strategy rows.
- **The gap types breakdown is missing "Cost-Benefit / Tradeoff Gap."** The Mastery Course version includes this; the website version does not.
- **No question-card.** A reference guide does not need one, but a single quick-check exercise would help students verify they can apply the reference.

**Suggested edits:**
- Add the Core Drill Map table linking each PT question to its pattern and a memorable takeaway.
- Add the Cost-Benefit / Tradeoff gap type to the breakdown.
- Consider expanding the strategies table to include the Ideal Experiment Upgrade and Cost-Benefit Lens patterns.
- The Mastery Course's Test Day Checklist has 8 items (adding the tradeoff check); the website version has 7. Adopt the 8-item version.

---

## Structural Issues

### 1. Practice Drought in Lessons 9-1 and 9-2

The first two lessons contain ~98 blocks of theory and zero practice questions. The first question-card appears in Lesson 9-3. Students who learn best by doing will disengage before they get a chance to try anything.

**Recommendation:** Add at least one lightweight exercise (not necessarily a full question-card) to each of the first two lessons. Even "identify the gap in this 3-sentence argument and predict the strengthener" in a callout would help.

### 2. Missing Question-Card in Lesson 9-6

Lesson 9-6 (Advanced Traits) discusses a hard practice question (Varo River archaeology) but the stimulus and answer choices are not in a `question-card` component. The analysis is present, but the student cannot attempt the question interactively before seeing the answers.

**Recommendation:** Add the missing question-card block for the Varo River question, including the stimulus, question stem, and five answer choices. Place an "attempt this before reading on" prompt between the question-card and the analysis.

### 3. Thin Preambles in Lessons 9-7 through 9-12

Each of these drill lessons has only 2 blocks of teaching before the question-card (one paragraph + one callout). While the tight focus is a strength, some students need more setup to understand the pattern before attempting the question. Compare to lessons 9-3 through 9-5 which have 6-8 blocks of teaching preamble.

**Recommendation:** Add 2-3 blocks of teaching to each of lessons 9-7 through 9-12 -- a second example, a comparison table, or a brief exercise. This would bring them to ~18-19 blocks, still compact but more pedagogically complete.

### 4. Inconsistent Question-Card Metadata

Lessons 9-3 through 9-5 have question-cards with only `id`, `stimulus`, `question`, and `options` fields. Lessons 9-7 through 9-12 add `questionType` and `difficulty` fields. The first three drills should match the later format.

**Recommendation:** Add `questionType: "Strengthen"` and `difficulty` fields to the question-cards in 9-3, 9-4, and 9-5.

---

## Missing Content

| Gap | Where It Should Go | Priority |
|-----|--------------------|----------|
| Practice question or exercise in early lessons (9-1, 9-2) | Each lesson | High |
| "Attempt before reading" prompts before every analysis | All drill lessons | High |
| Missing question-card for Varo River question in 9-6 | Lesson 9-6 | High |
| Core Drill Map table in Reference Guide | Lesson 9-13 | Medium |
| Cost-Benefit / Tradeoff gap type in Reference Guide | Lesson 9-13 | Medium |
| Expanded strategies table in Reference Guide | Lesson 9-13 | Medium |
| `questionType` and `difficulty` metadata in 9-3, 9-4, 9-5 | Each question-card | Medium |
| Expanded teaching preambles in 9-7 through 9-12 | Each lesson | Low |
| Frequency data for Strengthen EXCEPT format | Lesson 9-12 | Low |

---

## Summary of Priorities

1. **Add "attempt before reading" prompts before every worked analysis** -- small change, big pedagogical impact across all drill lessons
2. **Add the missing question-card to Lesson 9-6** -- the only advanced lesson without an interactive question
3. **Add practice to lessons 9-1 and 9-2** -- closes the 98-block theory-only gap
4. **Enrich the Reference Guide (9-13)** -- add Core Drill Map, Cost-Benefit gap type, and expanded strategies to match the Mastery Course version
5. **Standardize question-card metadata across all drills** -- add `questionType` and `difficulty` to 9-3, 9-4, and 9-5
