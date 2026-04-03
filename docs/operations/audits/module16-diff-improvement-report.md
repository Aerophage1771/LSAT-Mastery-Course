# Module 16: Most Strongly Supported — Website Content Improvement Report

**Scope:** The 11 website lessons (16-1 through 16-11) evaluated as a standalone course unit.
**Date:** 2026-04-01

---

## Executive Summary

Module 16 is a well-structured inference module covering every major MSS pattern with real PT questions, full wrong-answer analyses, and strong conceptual framing. The lessons are logically sequenced and the drill lessons (16-3 through 16-10) each follow a consistent format. The primary improvement opportunities are:

1. **No "try it first" prompts before any worked analysis.** Every drill lesson (16-3 through 16-10) presents a question-card and then immediately follows with the full breakdown. Students should be prompted to attempt the question before reading the analysis. This is the highest-priority gap.
2. **Lessons 16-3 through 16-8 (and 16-10) contain a placeholder between the question-card and the analysis** — an `<h4>The Problem</h4>` block followed by `<br/><br/><br/>` spacer paragraphs and an `<hr/>`. This blank space was likely intended to create a visual break for the try-it prompt but is currently empty. It should either hold the try-it prompt or be removed.
3. **Lesson 16-1 (Introduction)** is well-scoped but the website version has a simpler "Key Principle" callout than the mastery course version, which includes the MSS Support Spectrum table and relative-best reasoning explanation. The mastery course version is richer. The diff should add those additions.
4. **Lesson 16-2 (Step-by-Step Guide)** website version is missing the Mastery Course's "Relative-Best Reasoning" callout, the "Special MSS Hazard Checks" section, and the fifth wrong-answer pattern ("Merely Consistent"). These are genuine additions the mastery course already has; the diff should mark them as additions to the website version.
5. **Lesson 16-6 (Advanced: High-Difficulty)** has a missing question-card. The section "Hard MSS Drill" sets up a scenario (clinical trial / pharmaceutical summary) with full analysis, but the actual question-card block is absent — the analysis refers to answer choices (A) through (E) that are not displayed in a question-card format. This is the module's only structural defect.
7. **Lesson 16-11 (Reference Guide)** website version is somewhat thinner than the mastery course version — it lacks the Support Spectrum quick-check table, additional trap types 8 and 9 (state of mind; unstated comparative baseline), and the more explicit quick-reference tables at the end. The mastery course version is superior. The diff should note these additions.

---

## Lesson-by-Lesson Review

### Lesson 16-1: MODULE 16: Most Strongly Supported (10 blocks)

**Role:** Module introduction and overview.

**Strengths:**
- Clear Question Goal statement up front.
- The MSS vs. Must Be True distinction is concise and correct.
- The MSS vs. Strengthen Direction of Support comparison is the most important concept in the introduction and is stated clearly.
- Common Inference Patterns list previews the drill lesson taxonomy accurately.
- The Concept Snapshot (clearance sweater example) is a strong concrete illustration.

**Issues:**
- **Missing the MSS Support Spectrum.** The website version's Key Principle callout says only "The correct answer is PROVEN by the stimulus, not just consistent with it." This is accurate but omits the important "merely consistent" / "anti-supported" framing that distinguishes MSS from Must Be True in practice. The mastery course content adds the support spectrum table and the "relative-best reasoning" explanation. The website version should include this.
- **Missing the third MSS vs. Must Be True bullet** about hard MSS being "relative" (the best-supported / least-bad choice). This is a high-value teaching point that appears in the mastery course but not in the website version.
- **No practice question.** The introduction is purely definitional. A single lightweight inline question would improve engagement, but this is low priority for an intro lesson.

**Suggested edits:**
- Add the MSS Support Spectrum table (Strongly supported / Merely consistent / Anti-supported) before the Key Principle callout.
- Add the third MSS vs. Must Be True bullet about relative-best reasoning.
- Replace the Key Principle callout text to include the "merely consistent" distinction.

---

### Lesson 16-2: Step-by-Step Guide (11 blocks)

**Role:** The complete method for solving MSS questions.

**Strengths:**
- The 4-step process is clear and actionable.
- Wrong-Answer Patterns list names the four most common error types.
- The Worked Method Snapshot (breaks/focus example) illustrates the method with a concrete scenario.
- Timing Tip callout provides a useful heuristic (60/40 split).

**Issues:**
- **Missing "Relative-Best Reasoning" callout.** The mastery course adds a callout explaining that hard MSS sometimes requires choosing the best-supported answer even when no answer is ideal. This is a meaningful distinction from Must Be True and is absent from the website version.
- **Missing "Special MSS Hazard Checks" section.** The mastery course adds three specific hazard checks: state-of-mind trap, comparative baseline trap, and relative-best trap. These are precise and actionable. The website version has only the four generic wrong-answer patterns.
- **Missing fifth wrong-answer pattern: "Merely Consistent."** The website version lists only four wrong-answer patterns. The mastery course adds the "Merely Consistent" pattern, which is important for hard MSS questions where multiple answers seem defensible.
- **Step 4 phrasing differs.** Website says "Test Each Answer. Check every choice against the stimulus. The correct answer is the one the premises most directly support." The mastery course version adds "Rank it as strongly supported, merely consistent, or anti-supported" — a more active and precise direction.
- **No "try it first" prompt.** The Worked Method Snapshot is a prose description rather than an interactive question, so this is less critical here, but a question-card after the snapshot would improve this lesson.

**Suggested edits:**
- Add the Relative-Best Reasoning callout after the 4-Step Method process block.
- Add the Special MSS Hazard Checks section before or after Wrong-Answer Patterns.
- Add "Merely Consistent" as a fifth wrong-answer pattern.
- Revise Step 4 text to include the ranking language.

---

### Lesson 16-3: Drill — Synthesis Causal (10 blocks)

**Role:** First drill lesson, introducing causal synthesis with PT-128-S-2-Q-2.

**Strengths:**
- Clear concept framing: "neither premise alone is enough."
- Real PT question-card (PT-128-S-2-Q-2, medium) with five options and correct answer marked.
- Full breakdown with badge labels (Unsupported, Outside Scope, Correct, Too Extreme) for all five options.
- Key Takeaway callout generalizes the lesson correctly.

**Issues:**
- **No "try it first" prompt.** The question-card is followed immediately by the Full Analysis section with no pause or prompt encouraging the student to attempt the question first. The section structure (question-card → h3 "Full Analysis" → breakdown) should insert a try-it prompt between the question-card and the analysis.
- **`<h4>The Problem</h4>` + spacer blocks.** The website version has a placeholder pattern (`<h4>The Problem</h4>` + empty `<br/>` paragraphs + `<hr/>`) between the question stem and the analysis. This was probably intended to hold the try-it prompt. In the mastery course version, this placeholder is absent. The diff should mark this pattern as the location for a try-it prompt.
- **Concept section is brief.** "The Concept" section (two short paragraphs) provides adequate framing but would benefit from a one-line note about what makes synthesis causal distinct from pure causal chain (Lesson 16-5).

**Suggested edits:**
- Add `{{+**Try this:** Attempt the question before reading the analysis below.+}}` before the Full Analysis section.
- Remove the empty spacer `<br/>` blocks.

---

### Lesson 16-4: Applying Definitions (23 blocks)

**Role:** Drill on definition-application inference type, using PT-101-S-3-Q-8.

**Strengths:**
- The Two-Layer Structure (Rule Layer / Fact Layer) framework is a strong conceptual tool.
- The "Strategy: Work the Boundaries" callout identifies the key skill precisely.
- Full breakdown analysis with five distinct trap labels (State of Mind, Current Condition, False Obligation, Past Event).
- Common Traps table at the end consolidates the lesson's pattern taxonomy.
- Key Takeaway callout correctly emphasizes the "exclusion" pattern.

**Issues:**
- **No "try it first" prompt.** Same issue as 16-3 — the question-card appears but is followed immediately by the Full Analysis with no pause.
- **`<h4>The Problem</h4>` + spacer blocks.** Same placeholder pattern as 16-3.
- **The "Instructions" prompt in the website version** ("Read the stimulus and commit to an answer before scrolling down to the analysis") is a paragraph block rather than a structured try-it callout. This should be standardized with a diff-note marker.
- **The opening two paragraphs** are concept-level prose that could be condensed. The Two-Layer Structure section immediately repeats the idea of rules vs. facts in the same frame. Minor redundancy.

**Suggested edits:**
- Add the standardized `{{+**Try this:** Attempt the question before reading the analysis below.+}}` prompt as a callout block before Full Analysis.
- Consider merging the opening concept prose with the Two-Layer Structure framework to reduce redundancy.

---

### Lesson 16-5: Causal Chaining (22 blocks)

**Role:** Drill on causal chain inference, using PT-107-S-3-Q-5.

**Strengths:**
- The three-step Chaining Technique (process block) is clearly structured.
- "Qualifier Matching" callout is excellent — names the weakest-link principle.
- Full breakdown maps each answer to a specific trap type (Detail Swap + Extreme, Temporal Shift, Scope Shift, Causal Reversal).
- Causal Chaining Trap Taxonomy table at the end is a strong reference.
- Key Takeaway callout is complete and actionable.

**Issues:**
- **No "try it first" prompt.** Same issue as 16-3.
- **`<h4>The Problem</h4>` + spacer blocks.** Same placeholder pattern.
- **Pre-Phrase callout appears inside the analysis rather than before the question.** The "Pre-Phrase" callout ("If CO2 continues to increase, tropical storms will become more likely") appears inside Step 2 of the analysis. It could alternatively be surfaced before the answer choices to model the prephrase habit.
- **The Concept section** (first paragraph) briefly mentions that easy questions have two links and hard questions have three or more. This is a useful difficulty signal that could be made more explicit with a brief example of a two-link vs. three-link chain.

**Suggested edits:**
- Add try-it prompt before Full Analysis.
- Remove spacer blocks.

---

### Lesson 16-6: Advanced — High-Difficulty MSS Questions (43 blocks)

**Role:** Advanced lesson on the three difficulty factors, overreach traps, and hard MSS strategies.

**Strengths:**
- The Three Difficulty Factors framework (Subtle Inference, Overreach Trap, Multiple Plausible Answers) is the module's strongest conceptual framework.
- Each factor has a concrete inline example (callout blocks), not just an abstract description.
- The Overreach Trap anatomy section (five types with table) is highly actionable.
- The Degree of Support Hierarchy table is excellent — maps levels to language and MSS viability.
- Four advanced elimination strategies (Provability Test, Downgrade Don't Upgrade, Clause-by-Clause, Negative Proof Test) are the most sophisticated tools in the module.
- Common Wrong Answer Patterns table (six rows) covers the full spectrum.

**Issues:**
- **CRITICAL: Missing question-card.** The "Hard MSS Drill" section begins "Commit to an answer before reading the analysis" and then jumps directly to "Full Analysis" with a breakdown of options (A) through (E). There is no question-card block displaying the stimulus and options for the student. The stimulus (pharmaceutical clinical trial / placebo group) and the five answer choices exist in the analysis section but are only readable by working through the answer evaluation. A student attempting the drill cannot see the question to attempt it.
- **No "try it first" prompt** (compound issue with the missing question-card).
- **The `<h4>The Problem</h4>` + spacer blocks** are present but because the question-card is missing, the student sees only the empty spacer and then immediately the analysis.
- **Lesson is long (43 blocks).** This is not a structural problem per se — the content justifies the length — but the multiple sub-sections (Difficulty Factors, Overreach Anatomy, Degree Hierarchy, Hard Drill, Elimination Strategies, Wrong-Answer Patterns, Key Takeaways) make this lesson feel like two or three lessons. Consider whether a second-pass split is warranted.

**Suggested edits:**
- Add the missing question-card block (PT question, pharmaceutical/placebo scenario) with stimulus and five answer options before the Full Analysis section.
- Add a try-it prompt after the question-card.

---

### Lesson 16-7: Inference by Constraint (17 blocks)

**Role:** Drill on constraint-based inference (superlatives, restrictions), using a gold-purity/Senegalese gold stimulus.

**Strengths:**
- The "Negative Space Rule" callout is the defining teaching insight of this lesson and is stated crisply.
- Three-item list of what makes Inference by Constraint distinctive is accurate and non-redundant.
- The stimulus is conceptually rich — superlatives + process restrictions combining to force a deduction about an unstated source.
- Full breakdown labels traps distinctively (Term Shift Trap, Out of Scope Trap, Unsupported Absolute).
- Three Key Lessons callout at the end correctly generalizes.

**Issues:**
- **No "try it first" prompt.** Same issue as prior drills.
- **`<h4>The Problem</h4>` + spacer blocks** present.
- **Missing PT question identifier.** The stimulus describes a gold/mint scenario but no PT ID is given in the website version (unlike Lessons 16-3, 16-4, 16-5 which all have PT IDs). If this question is from a real PT, the ID should be added.
- **The "Drill: Inference by Constraint" header** is an `h3` that introduces the drill section, but the actual question-card doesn't appear until after the spacer. The header and the card are visually disconnected.

**Suggested edits:**
- Add try-it prompt before Full Analysis.
- Add PT question ID to the question-card if available.
- Remove spacer blocks.

---

### Lesson 16-8: Logical Density (19 blocks)

**Role:** Drill on dense stimuli with mixed quantifiers, using an ant/pheromone/Sahara scenario.

**Strengths:**
- The Qualifier Matching Rule callout is precisely stated.
- The three-item list of what makes Logical Density distinctive clearly names the key skills.
- Tagging each fact by certainty level (MOST / ALL / TYPICAL) before building the inference chain is the best teaching technique in this lesson.
- Full breakdown systematically applies the qualifier rule to each answer.
- Three Key Lessons callout correctly identifies the no-adaptation-inference principle.

**Issues:**
- **No "try it first" prompt.**
- **`<h4>The Problem</h4>` + spacer blocks** present.
- **Missing PT question identifier.** Same issue as 16-7.
- **The inference chain in Step 2** ends with "generally" without explaining why "generally" follows from "typical" + "all." A one-sentence explicit chain ("'typically' × 'all' = 'generally,' not 'always'") would improve the teaching.

**Suggested edits:**
- Add try-it prompt before Full Analysis.
- Add explicit chain explanation in Step 2.
- Add PT question ID if available.

---

### Lesson 16-9: Semantic Nuance (20 blocks)

**Role:** Drill on modifier precision, using a manners-vs-morals / "not necessarily social" stimulus.

**Strengths:**
- The Possibility Rule callout is the core insight and is stated precisely.
- The three-item list of what makes Semantic Nuance distinctive correctly identifies the pivot-word mechanics.
- The Step 1 table (Manners: NECESSARILY Social vs. Morals: NOT NECESSARILY Social) is clean and effective.
- The inference chain (not necessarily social → possibly non-social → can be immoral alone → can harm no one) is step-by-step and correct.
- The Misinterpretation Trap (answer E) is explicitly flagged in both the breakdown and the Key Lessons callout — this is the most important wrong-answer analysis in the lesson.

**Issues:**
- **No "try it first" prompt.**
- **`<h4>The Problem</h4>` + spacer blocks** present.
- **Missing PT question identifier.** Same issue as 16-7 and 16-8.
- **The translation phrase** ("not necessarily X" = "possibly not X") appears in the opening paragraph but not as a standalone rule/formula block. Promoting it to a callout or table would make it more scannable.

**Suggested edits:**
- Add try-it prompt before Full Analysis.
- Add PT question ID if available.
- Promote the "not necessarily X = possibly not X" translation to a callout or mini-table.

---

### Lesson 16-10: LEAST Supported (EXCEPT-Style) (21 blocks)

**Role:** Drill on inverted MSS / EXCEPT-style questions, using a poetry/translation stimulus.

**Strengths:**
- The EXCEPT Approach callout ("tag each as SUPPORTED or NOT SUPPORTED") is the key strategic insight and is stated early.
- The three-item list of what makes LEAST Supported distinctive correctly identifies the inverted task and systematic requirement.
- The Stimulus Deconstruction (Step 1) breaks the poetry argument into Rule 1, Claim 1, Reasoning, Rule 2 — effective structural mapping.
- The EXCEPT Evaluation (Step 2) systematically tags all five options with SUPPORTED / NOT SUPPORTED badges.
- The Effect vs. Purpose Distinction table at the end is the module's clearest statement of this critical logical distinction.
- Four Key Lessons callout comprehensively summarizes.

**Issues:**
- **No "try it first" prompt.**
- **`<h4>The Problem</h4>` + spacer blocks** present.
- **Missing PT question identifier.** No PT ID for the poetry/translation stimulus.
- **The task inversion is explained twice** — once in the opening paragraph and again in the EXCEPT Approach callout. The opening paragraph could be trimmed.

**Suggested edits:**
- Add try-it prompt before Full Analysis.
- Add PT question ID if available.
- Trim the opening paragraph since the EXCEPT Approach callout covers the same ground more precisely.

---

### Lesson 16-11: Reference Guide (long form — ~47 blocks)

**Role:** One-stop reference for the entire module.

**Strengths:**
- The 4-Step Method process block is comprehensive and includes a Timing Target callout (100 seconds total).
- The Inference Types table correctly maps all six types to lessons.
- The MSS vs. Must Be True vs. Strengthen comparison table is the best three-way comparison in the module.
- The Strength of Support Scale (5 levels) with Matching Rule callout is precise and actionable.
- The Common Traps breakdown covers 7 traps in the website version.
- The LEAST Supported strategy process block is thorough (5 steps).
- Test Day Checklist (10 steps) is comprehensive.
- Quick-Reference Tables (Inference Type / Strength Matching) consolidate the module well.
- Module 16 Summary callout at the end is a strong closing statement.

**Issues:**
- **Missing two trap types from the mastery course version.** The mastery course's reference guide adds Trap 8 (State of Mind from Surface Facts) and Trap 9 (Unstated Comparative Baseline). The website version has only 7 traps. These two additions are important and should be in the reference guide.
- **Missing Support Spectrum quick-check table** from the mastery course. The mastery course's reference guide includes a three-row table (Strongly supported / Merely consistent / Anti-supported) with action column. The website version lacks this.
- **The Reference Guide covers MSS vs. MBT vs. Strengthen in a large table** (Section 3) but doesn't add this comparison to the intro lesson. The reference is the right place for a deep comparison, but the intro lesson (16-1) should at least flag that such a comparison exists.
- **No question-card.** A reference guide does not need practice problems, but a single "diagnostic check" example would help students confirm they can apply the guide. Low priority.

**Suggested edits:**
- Add Trap 8 (State of Mind) and Trap 9 (Unstated Comparative Baseline) to the Common Traps breakdown.
- Add the Support Spectrum quick-check table before or after Section 1.

---

## Structural Issues

### 1. Systematic Missing Try-It Prompts (HIGH PRIORITY)

All eight drill and advanced lessons (16-3 through 16-10) present a question-card and then immediately display the full analysis. There is no prompt asking the student to attempt the question before reading the answer. This is the module's single biggest pedagogical gap. The placeholder structure (`<h4>The Problem</h4>` + spacers + `<hr/>`) exists in the website versions but is empty.

**Recommendation:** Insert a standardized `**Try this:** Attempt the question before reading the analysis below.` prompt as an inline annotation before every Full Analysis section.

### 2. Missing Question-Card in Lesson 16-6

The Hard MSS Drill in Lesson 16-6 is the only drill in the module without a question-card. The analysis refers to options (A) through (E) but the student cannot see the actual question stimulus and answer choices in a navigable format.

**Recommendation:** Add the question-card block with stimulus and five options to Lesson 16-6.

### 3. Missing PT Question IDs in Lessons 16-7, 16-8, 16-9, 16-10

Four drills have no PT source identifier. If these are real LSAT questions, the IDs should be added for student cross-reference. If they are constructed examples, a note should say so.

### 4. Mastery Course vs. Website Version Gaps in Lessons 16-1 and 16-2

The mastery course has richer content in both the Introduction and Step-by-Step Guide than the website versions. The diff alternates for these lessons should annotate the additions the mastery course includes.

---

## Missing Content

| Gap | Where It Should Go | Priority |
|-----|--------------------|----------|
| "Try it first" prompts before every worked analysis | Lessons 16-3 through 16-10 | **High** |
| Missing question-card | Lesson 16-6 (Hard MSS Drill) | **High** |
| MSS Support Spectrum table | Lesson 16-1 | Medium |
| Relative-Best Reasoning callout | Lesson 16-2 | Medium |
| Special MSS Hazard Checks section | Lesson 16-2 | Medium |
| Fifth wrong-answer pattern (Merely Consistent) | Lesson 16-2 | Medium |
| Trap 8 and 9 (State of Mind, Comparative Baseline) | Lesson 16-11 | Medium |
| Support Spectrum quick-check table | Lesson 16-11 | Medium |
| PT question IDs | Lessons 16-7 through 16-10 | Low |
| "Not necessarily X = possibly not X" callout | Lesson 16-9 | Low |

---

## Summary of Priorities

1. **Add "try it first" prompts before every worked analysis** — the module's single biggest pedagogical gap
2. **Add missing question-card to Lesson 16-6** — the only drill without one
3. **Enrich Lessons 16-1 and 16-2 with mastery course additions** — support spectrum, hazard checks, relative-best reasoning
4. **Add Trap 8 and 9 to Reference Guide** — the reference guide should be exhaustive
5. **Add PT IDs to lessons 16-7 through 16-10** — student cross-reference and credibility
