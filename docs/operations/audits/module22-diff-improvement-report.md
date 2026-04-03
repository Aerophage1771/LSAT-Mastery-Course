# Module 55: Conditional Reasoning -- Website Content Improvement Report

**Scope:** The 9 website lessons (55-intro, 55-1 through 55-6, 55-ref, 55-summary) evaluated as a standalone course unit.
**Date:** 2026-04-01

---

## Executive Summary

Module 55 is the strongest conceptual module in the course -- it covers the single most important skill on the LSAT and does so with clear progressions, accurate logic, and well-chosen examples. The six core lessons form a clean pedagogical arc from foundations through advanced nuance. The primary improvement opportunities are:

1. **No "try it first" prompts before any worked example or analysis** -- every question walkthrough jumps directly into the analysis without giving the student a chance to attempt it independently. This is the highest-priority fix across the entire module.
2. **Lessons 4, 5, and 6 contain worked examples that reference stimuli not shown** -- the analysis sections refer to arguments the student never sees. The question-cards in Lessons 2 and 3 (with real PT IDs) work correctly; the prose-only examples in Lessons 4-6 do not.
3. **The Intro and IntroDeep lessons overlap heavily** -- both present the same question-type table, arrow notation table, trigger word table, and "All vs. Only" callout. A student reading both encounters the same content twice.
4. **The Reference Guide (55-ref) is comprehensive but could link back to lessons** -- at 9 sections it covers all major concepts but does not indicate which lesson to revisit for deeper treatment.
5. **The Concise Guide (55-summary) is well-scoped** -- it correctly functions as a quick-reference cheat sheet and complements the full Reference Guide without duplicating it.

---

## Lesson-by-Lesson Review

### 55-intro: Module Introduction: The Logic of Conditional Reasoning

**Role:** Module introduction and motivation.

**Strengths:**
- Clear Module Goal statement up front
- The "Why This Matters" section effectively motivates the topic with concrete question-type examples
- Frequency callout (40-60% of LR questions) is a strong motivator
- The rain/ground example is simple, correct, and immediately grounds the concept
- Module Roadmap process block gives a clear lesson-by-lesson preview
- Key Takeaways callout closes the lesson well

**Issues:**
- **Overlap with IntroDeep.** The question-type table, arrow notation section, trigger word table, and "All vs. Only" callout all appear in both the Intro and IntroDeep lessons. A student reading both encounters the same 6-row question-type table, the same 4-row notation table, and the same trigger word table twice.
- **Double `<hr>` block** between the trigger words section and the Module Roadmap section (two consecutive hr elements). Minor formatting glitch.
- **No practice element.** The lesson is all exposition with no interactive component, even a lightweight one.

**Suggested edits:**
- Cut the question-type table, arrow notation, trigger words, and "All vs. Only" sections from the Intro. Let IntroDeep own the detailed coverage. Keep the Intro focused on motivation, the rain example, and the roadmap.
- Fix the double `<hr>`.
- Consider adding a single-question mini-exercise after the rain example: "Diagram this statement: If you are a lawyer, you passed the bar."

---

### 55-intro-deep: Conditional Logic Essentials

**Role:** Pre-lesson overview covering question types, notation, and trigger words.

**Strengths:**
- The question-type table is accurate and well-organized
- Arrow notation table is clear and includes the biconditional
- The "Golden Rule of Arrows" callout is the single most important teaching moment in the pre-lesson content
- The "Indicator Words Are Clues, Not Proof" callout is a valuable nuance absent from the Intro
- The closing paragraph about disguised conditionals ("All poets are dreamers" in four phrasings) is excellent

**Issues:**
- **Heavy overlap with 55-intro** (see above). The same three tables appear in both lessons.
- **No practice element.** Pure exposition.

**Suggested edits:**
- If the Intro is trimmed as recommended, IntroDeep becomes the canonical pre-lesson reference for notation and trigger words. No further changes needed.
- Consider adding a mini-exercise: "Which of these sentences is a conditional? (a) Most dogs are friendly. (b) All dogs are mammals. (c) Dogs are popular pets."

---

### 55-1: The Foundations of the Material Conditional

**Role:** Core lesson on A -> B, sufficient vs. necessary, indicator words, diagramming, and the biconditional.

**Strengths:**
- The Paris/France example is the best introductory example in the module -- geographic, concrete, and universally understood
- The side-by-side comparison table (Sufficient vs. Necessary) is a strong diagnostic tool
- The "Trap of Conversation vs. The Reality of Logic" section addresses a real and common student error
- Two full LSAT question-cards with PT IDs (PT-109-S-4-Q-5 and PT-118-S-3-Q-4) provide genuine practice
- The "Logic Chain & The Gap" analysis format is clear and reproducible
- The biconditional section is appropriately brief and accurate
- The Indicator Word Chart (Section 1.7) is comprehensive

**Issues:**
- **No "try it first" prompt before either worked example.** Both question-cards are followed immediately by analysis. The student reads the stimulus and the breakdown simultaneously with no pause for independent thought.
- **The Validity vs. Truth callout** (mastery version) is good new content but is placed before the core A -> B table. Consider whether it might work better after the first example.
- **Length.** The lesson is long (covers definitions, Paris example, comparison table, conversation trap, two LSAT questions, biconditional, and indicator chart). Students may fatigue before reaching the biconditional.

**Suggested edits:**
- Add "Try this: Attempt the question before reading the analysis below." before each LSAT walkthrough.
- Consider moving the biconditional section to a later lesson (Lesson 5 covers compound structures) or keeping it here as a brief preview with a forward reference.
- The Indicator Word Chart duplicates content from IntroDeep. If IntroDeep is the canonical source, this chart could be shortened to the top 5 indicators per side.

---

### 55-2: Using the Contrapositive to Unlock New Inferences

**Role:** Contrapositive mechanics, LSAT application, chain contrapositives, and De Morgan's Laws.

**Strengths:**
- The mechanical process (Reverse and Negate) is clearly presented as a two-step process block
- Worked examples table (Dog, Rain, NOT Study, Lawyer) covers four patterns including double-negative cancellation
- Two real LSAT question-cards (PT-101-S-2-Q-21 and PT-101-S-3-Q-10) with full chain analysis
- The "Disguised Assumption" concept is well-taught -- students learn to hunt for contrapositives in answer choices
- De Morgan's Laws section with AND/OR examples and the "chain vs. ropes" memory device
- Common Contrapositive Triggers table (Section 2.6) is a useful reference

**Issues:**
- **No "try it first" prompt before either LSAT question walkthrough.** The analyses follow the question-cards immediately.
- **De Morgan's Laws section is dense.** Two examples (negating AND, negating OR) followed by the memory device is good, but no practice opportunity is offered for this critical skill.
- **The Quick Reference Chart at the end** duplicates content from the Reference Guide. Acceptable for a lesson closer but worth noting.

**Suggested edits:**
- Add "Try this: Attempt the question before reading the analysis below." before each analysis section.
- Consider adding a mini-exercise after De Morgan's Laws: "Form the contrapositive of: (A or B) -> C."

---

### 55-3: Two Classic Conditional Reasoning Errors

**Role:** Mistaken Reversal and Mistaken Negation -- definitions, structures, LSAT application, and relationship.

**Strengths:**
- The Wet Sidewalk analogy is used consistently for both fallacies, creating a unified mental model
- The invalid structure tables are clear and parallel for both fallacies
- Real LSAT question-card (PT-120-S-4-Q-17) with full Parallel Flaw analysis
- The "Relationship Between the Two Fallacies" section (they are contrapositives of each other) is an excellent insight
- The "Quick Identification" callout gives students a two-question diagnostic
- The LSAT Language patterns table (Section 3.4) maps natural language to fallacy types

**Issues:**
- **No "try it first" prompt before the LSAT question walkthrough.**
- **Only one LSAT question-card.** The Mistaken Negation section uses a constructed example (littering/trash cans) rather than a real PT question. This is the weaker half of the lesson pedagogically.
- **The constructed Mistaken Negation example** uses a "Checkpoint" breakdown format that differs from the standard answer-choice breakdown used elsewhere in the module. The content is good but the format inconsistency is noticeable.

**Suggested edits:**
- Add "Try this: Attempt the question before reading the analysis below." before the PT-120 analysis.
- Consider adding a real LSAT question-card for the Mistaken Negation section to match the Mistaken Reversal section.
- The constructed littering example is pedagogically sound. If no real PT question is added, at minimum add a "Try this" prompt before the Checkpoint breakdown.

---

### 55-4: Quantifiers -- All, Most, Some, and Few

**Role:** Quantifier hierarchy, special quantifiers, valid and invalid inference patterns.

**Strengths:**
- The quantifier hierarchy table is clear and includes all three levels with properties
- The Overlap Rule is well-explained with the "room of 100 people" intuition
- The Some-All Chain is a valuable addition
- Both "LSAT in Action" sections (Overlap Rule and Undistributed Middle) have full answer explanations
- The Invalid Quantifier Chain section clearly distinguishes valid from invalid patterns
- The negated quantifiers table is useful
- Quick Reference Guide (Valid vs. Invalid) at the end is excellent

**Issues:**
- **No "try it first" prompt before either LSAT walkthrough.** The analyses follow the headers immediately.
- **Both LSAT examples reference stimuli that are not shown.** The "LSAT in Action" sections jump directly to "Analysis:" without providing the actual stimulus text or question-card. Students see the diagramming but cannot attempt the question themselves.
- **The mastery version adds boundary logic, natural-language quantifier translation, and the "Invalid Order Family" content** -- all excellent additions. But the lesson is now very long. Students may fatigue.

**Suggested edits:**
- Add "Try this: Attempt the question before reading the analysis below." before each analysis section.
- Add question-cards (or at minimum blockquote stimuli) for both LSAT examples so students can read the actual argument.
- Consider whether the "Translating Natural-Language Quantifiers" table (mastery addition) would work better in the Concise Guide.

---

### 55-5: Complex Structures & Compound Logic

**Role:** Logical chains, "unless" translation, De Morgan's Laws in compound statements.

**Strengths:**
- The three Deep Dive Analysis sections (chain, unless, De Morgan's) each follow a clear STEP 1/2/3/4 format
- The "Unless Equation" is presented as a simple mechanical rule with worked examples
- The De Morgan's Laws section includes a full walkthrough of the Rienzi shipwreck problem -- one of the best examples in the module
- The "Common Pitfalls" callout (splitting AND, forgetting the flip) addresses real student errors
- Quick Reference Chart at the end covers all five structure types

**Issues:**
- **No "try it first" prompt before any of the three Deep Dive analyses.**
- **All three LSAT examples reference stimuli that are not shown.** The Deep Dive sections jump to STEP 1 without providing the actual stimulus text. Students cannot attempt the problems independently.
- **The lesson is very long.** Three full Deep Dive analyses plus the Unless section plus De Morgan's Laws is a lot of content for one lesson.
- **The Domain-Reduction Routine (mastery addition)** is a good strategic addition but is somewhat disconnected from the rest of the lesson content.

**Suggested edits:**
- Add "Try this: Attempt the question before reading the analysis below." before each Deep Dive.
- Add blockquote stimuli for all three LSAT examples so students can read the actual argument.
- Consider splitting into two lessons: (a) Chains + Unless, (b) Compound Statements + De Morgan's.

---

### 55-6: Real-World Nuance & Probabilistic Logic

**Role:** Hard vs. soft language, modal fallacy, possibility vs. certainty, double negatives, spectrum of certainty.

**Strengths:**
- The hard/soft language distinction is clearly presented and immediately useful
- The Modal Fallacy section (frequency -> necessity) is well-explained
- Two worked examples (musical education, caffeine) illustrate different modal shifts
- Double Negatives and Litotes table is a practical reference
- The Spectrum of Certainty table (Section 6.5) is the single best reference tool in the lesson -- it unifies all quantifier and modal levels
- The Hard vs. Soft Language breakdown at the end is a clean closing reference

**Issues:**
- **No "try it first" prompt before either worked example.**
- **Both worked examples reference answer explanations for questions whose stimuli are not fully shown.** The musical education example shows premises and conclusion but no question stem or question-card. The caffeine example is entirely constructed.
- **No real LSAT question-card.** This is the only core lesson in the module without a PT-sourced question.

**Suggested edits:**
- Add "Try this: Attempt the question before reading the analysis below." before each answer explanation section.
- Consider adding a real LSAT question-card for the Modal Fallacy section.

---

### 55-ref: Complete Reference Guide

**Role:** One-stop reference for all conditional reasoning concepts.

**Strengths:**
- Comprehensive: covers trigger words, contrapositive, valid/invalid inferences, quantifiers, overlap rules, unless translation, compound statements, negating quantifiers, common fallacies, complex structures, and a diagnostic flowchart
- The "Modus Ponens/Tollens" concrete examples breakdown (dog/mammal) is the clearest presentation in the module
- The quantifier hierarchy table includes all entailment relationships
- The "Common Conditional Fallacies" breakdown with frequency badges is useful for triage
- The Test Day Checklist is an excellent closer
- **Mastery additions:** "Why Most Is Not Reversible" callout, the Trap Family table, and the invalid-order entries in the combination rules table are all valuable new content

**Issues:**
- **No lesson cross-references.** A student looking up "De Morgan's Laws" cannot easily find which lesson covers it in depth.
- **The "Beyond Pure Conditionals" section (causal, obligation, probabilistic)** from the website version is absent from the mastery Reference Guide. This is important context for Lesson 6.
- **No question or exercise.** A reference guide does not need one, but a single diagnostic exercise would help students verify their recall.

**Suggested edits:**
- Add parenthetical lesson references: e.g., "De Morgan's Laws (see Lesson 2 and Lesson 5)" after relevant sections.
- Add the "Beyond Pure Conditionals" table from the website version.

---

### 55-summary: Concise Guide: Conditional Logic

**Role:** Quick-reference cheat sheet.

**Strengths:**
- Tightly scoped -- covers foundations, valid/invalid inferences, quantifiers, deductions, advanced structures, negation, and common traps in a scannable format
- The Memory Aid callout is useful
- Quantifier Combination Rules table is well-organized
- Common Traps breakdown with badges provides quick visual triage
- Test Day Checklist closes the guide
- **Mastery additions:** "Usually" and "Many" rows in the quantifier table, the Boundary Reminder callout, the Invalid Order Family callout, and the "Some A are NOT B" row in the negation table are all valuable new content

**Issues:**
- **The website version includes "Ensures/Guarantees" and "Inevitably" as necessary indicators** in the translation tables. These are borderline -- "ensures" and "invariably" are arguably sufficient indicators. The diagrams shown (Ticket -> Entry, High Demand -> High Prices) are correct, but the categorization as "necessary" could confuse students. This is present in both versions.
- **No exercise or diagnostic question.** Acceptable for a cheat sheet.

**Suggested edits:**
- Minor: review whether "Ensures/Guarantees" and "Invariably/Inevitably" are better categorized as sufficient indicators with necessary-condition implications, or add a footnote clarifying the distinction.

---

## Structural Issues

### 1. Missing "Try It First" Prompts (HIGH PRIORITY)

No lesson in the module includes a prompt asking the student to attempt a question before reading the analysis. Every worked example and LSAT walkthrough goes directly from stimulus to breakdown. This is the single highest-priority fix across the entire module. Active recall before seeing the answer is one of the most effective study techniques, and its absence here means students passively consume every analysis.

**Recommendation:** Add a brief prompt -- "**Try this:** Attempt the question before reading the analysis below." -- before every analysis section in every lesson.

### 2. Overlap Between Intro and IntroDeep

The question-type table (6 rows), arrow notation table (4 rows), trigger word table (2 rows), and "All vs. Only" callout appear in both the Intro and IntroDeep lessons. This is ~20 content blocks of near-identical material.

**Recommendation:** Keep the Intro focused on motivation, the rain example, and the roadmap. Move the detailed tables to IntroDeep only.

### 3. Missing Stimuli in Lessons 4, 5, and 6

Lessons 4, 5, and 6 contain "LSAT in Action" sections where the analysis references arguments the student never sees. Unlike Lessons 2 and 3 (which include question-cards with real PT IDs and full stimulus text), Lessons 4-6 jump directly to diagramming and answer explanations.

**Recommendation:** Add question-cards or blockquote stimuli for all LSAT examples in Lessons 4-6.

---

## Missing Content

| Gap | Where It Should Go | Priority |
|-----|--------------------|----------|
| "Try it first" prompts before every worked analysis | All lessons with LSAT walkthroughs | High |
| Stimuli/question-cards for Lessons 4-6 LSAT examples | Lessons 55-4, 55-5, 55-6 | High |
| Mini-exercises in Intro, IntroDeep, and Lesson 1 | Early lessons | Medium |
| Lesson cross-references in Reference Guide | 55-ref | Medium |
| "Beyond Pure Conditionals" table in Reference Guide | 55-ref | Medium |
| Real LSAT question-card for Lesson 6 | 55-6 | Medium |
| Real LSAT question-card for Mistaken Negation in Lesson 3 | 55-3 | Low |
| De Morgan's practice exercise in Lesson 2 | 55-2 | Low |

---

## Summary of Priorities

1. **Add "try it first" prompts before every worked analysis** -- the single highest-impact pedagogical fix
2. **Add missing stimuli/question-cards to Lessons 4-6** -- students cannot attempt problems they cannot see
3. **Eliminate Intro / IntroDeep overlap** -- the same tables appear twice
4. **Add lesson cross-references to the Reference Guide** -- helps students navigate back to detailed coverage
5. **Add "Beyond Pure Conditionals" to the Reference Guide** -- important context for Lesson 6's modal logic content
