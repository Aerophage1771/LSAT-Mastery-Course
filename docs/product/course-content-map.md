# Course Content Map

**Purpose:** Give a compact but specific map of the current canonical course so contributors can spot-check missing concepts, thin modules, naming drift, or assembly problems without rereading every lesson file.  
**Audience:** Content editors, engineers, operators, and review agents checking coverage or consistency.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-27  
**Related docs:** [./course-experience.md](./course-experience.md), [./course-naming-conventions.md](./course-naming-conventions.md), [../technical/content-and-validation.md](../technical/content-and-validation.md)

> Generated from the live canonical lesson source in `modules/` plus `utils/courseCatalog.ts` route naming.

## Snapshot

- Current canonical source shape: `57` route modules, `389` canonical lessons
- LR span: route modules `1-23`
- RC span: route modules `24-50`
- Advanced span: route modules `51-57`
- Source categories inside Mastery metadata: `23` LR modules, `34` RC modules, `0` source modules still labeled `Advanced`
- Downstream course-platform rule: advanced RC is folded into `RC` in DataToolkit and website release artifacts.

## How To Read This

- Each lesson line is a compact signature of the actual lesson body, not just the lesson title.
- If one of the listed intra-lesson topics disappears, treat that as a likely content regression or assembly/import bug.
- Route ids are the live lesson-route ids. `src` ids matter only where route ids were remapped during catalog cleanup.
- LR modules usually carry the fullest shape. RC core modules are still much thinner. RC practice and advanced modules should be checked lesson-by-lesson against their listed question-review set.

## Unit 1: Identification

### `1` Argument Part

Define the specific function a particular sentence serves within the argument (e.g., main conclusion, subsidiary conclusion, premise, counter-premise).

- `1-1` Introduction: Argument Part; Define the specific logical function a particular sentence serves within the argument.; What Makes This Question Type Unique; The LR Operating System; 1. Stem first; 2. Stimulus branch; 3. Assumption relevance; 4. Answer-shape anticipation
- `1-2` Step-by-Step: Step-by-Step: Argument Part; The 5-Step Method; Find the Target; Analyze & Hypothesize; Map the Structure; Pinpoint & Prephrase; Evaluate Choices; The Global LR Operating System
- `1-3` Common Roles & Patterns: Argument Part — Common Roles & Patterns; Role Frequency Summary; Premise / Evidence; Main Conclusion; Intermediate Conclusion; Context / Background; Opposing Viewpoint; Reading Mechanics Before Role Labels
- `1-4` Lesson 1: Concept Focus: The Core Components; The Two Core Roles; Conclusion (The Point); Premise (The Proof); The Direction of Support; Support Is a Spectrum, Not a Switch; No support; Weak support
- `1-5` Lesson 2: The Intermediate Conclusion; Concept Focus: The Intermediate Conclusion; It is a conclusion because it is supported by at least one...; It is a premise because it is then used to support the...; Why This Role Is Tricky; Comparing Premise, IC, and Main Conclusion; Premise; Intermediate Conclusion
- `1-6` Lesson 3: The Opposing Viewpoint; Concept Focus: The Opposing Viewpoint; The Rebuttal Pattern; The Rebuttal Structure; Attribution; Opposing View; Pivot; Author's Response
- `1-7` Advanced Concepts: Advanced Concepts: Difficult Argument Part Questions; 1. The Logic Becomes More Complex; Chains of Reasoning; A Multi-Link Chain; Premise; IC₁; IC₂; Main Conclusion
- `1-8` Advanced Lesson: Advanced Lesson 1: Concessions; Concept Focus: The Concession; The Concession Structure; Concession Pattern; Concession Indicator; Conceded Point; Pivot; Author's Response
- `1-9` Advanced Lesson: Advanced Lesson 2: The Phenomenon to be Explained; Concept Focus: The Phenomenon to be Explained; Phenomenon vs. Conclusion; Status; Position in argument; Relationship to evidence; Can the author be wrong about it?; What question does it answer?
- `1-10` Advanced Lesson: Advanced Lesson 3: The Counterfactual Rebuttal; Concept Focus: The Counterfactual Rebuttal; The Counterfactual Pattern; Counterfactual Structure; Identify the Opposed Claim; Construct a Hypothetical World; State a Necessary Consequence; Contradict the Consequence with Reality
- `1-11` Advanced Lesson: Advanced Lesson 4: The Context Statement; Concept Focus: The Context Statement; Types of Context Statements; Background Information; Framing Statement; Limitation / Scope; Common Ground; Context vs. Premise
- `1-12` Reference Guide: Argument Part: Complete Reference; The 5-Step Method; Find the Target; Analyze & Hypothesize; Map the Structure; Pinpoint & Prephrase; Evaluate Choices; Core Foundations Before You Label Roles

### `2` Main Conclusion

Identify the single, overarching claim that the entire argument is constructed to prove. In other words, what is the one ultimate point the author wants the reader to accept?

- `2-1` Introduction: Main Conclusion; Frequency & Difficulty; Recognizing the Question; "Which one of the following most accurately expresses the main conclusion of...; "Which one of the following most accurately states the main point of...; "The overall conclusion of the argument is that..."; "The argument is structured to lead to which one of the following...; "The main point of the argument is that..."
- `2-2` Step-by-Step: Step-by-Step: Main Conclusion; The 6-Step Method; Confirm the Task; Read for Structure; Spot Indicator Words; Apply the Why Test; Prephrase the Conclusion; Step 1: Confirm the Task
- `2-3` Common Patterns & Types: Main Conclusion — Common Patterns & Types; Summary Table; 1. The Rebuttal; 2. The Prescription; 3. The Explanation; 4. The Prediction / Fact; 1. The Rebuttal (The Counter-Argument); How to Spot It
- `2-4` Lesson 1: The Rebuttal — Deep Dive; The Rebuttal Structure; The Rebuttal Framework; They Say (The Setup); The Pivot; I Say (The Conclusion); Because (The Evidence); Identifying the Author's Voice
- `2-5` Lesson 2: The Prescription — Deep Dive; The Prescription Structure; The Prescription Framework; The Situation (Premises); The Bridge (Optional); The Judgment (The Conclusion); The Rationale (Optional Premises); Prescriptive Language Indicators
- `2-6` Lesson 3: The Explanatory Argument; The Explanation Structure; Phenomenon → Explanation → Supporting Evidence; Phenomenon; Explanation (Main Conclusion); Supporting Evidence (Premises); Explanation vs. Simple Argument; Goal
- `2-7` Advanced Concepts: Advanced Concepts: Difficult Main Conclusion Questions; The Three Difficulty Factors; 1. Position Tricks; 2. Intermediate Conclusion Traps; 3. Scope Distortions; Factor 1: Position Tricks in Action; Factor 2: The IC Trap in Action; Factor 3: Scope Distortion in Action
- `2-8` Advanced: The Intermediate Conclusion Trap; The IC Trap Pattern; How the IC Trap Is Built; Step 1; Step 2; Step 3; Step 4; When Final Indicators Are NOT the Main Conclusion
- `2-9` Advanced: The Background Principle Trap; Background Principle Indicators; It is a given that...; It is well known that...; It is obvious that...; It goes without saying that...; Everyone agrees that...; Rule vs. Application
- `2-10` Advanced: Specific Judgment vs. General Rule; Specific vs. General: The Core Distinction; Scope; Language; Claim; Provability; Scope Words Reference; "Novel X," "this policy," "the mayor's plan"
- `2-11` Reference Guide: Main Conclusion — Complete Reference; The Goal; The 5-Step Method; Identify Task & Read for Structure; Spot Indicator Words; Pinpoint & Confirm with the "Why Test"; Prephrase; Evaluate & Eliminate

## Unit 2: Analysis

### `3` Method of Reasoning

Describe the argumentative strategy the author uses to support the conclusion. In other words, what is the logical structure of the argument?

- `3-1` Introduction: Method of Reasoning; Identify the specific rhetorical or logical strategy the author uses to reach...; Frequency & Difficulty; Recognizing the Question; "The argument proceeds by..."; "Which one of the following most accurately describes the method of reasoning...; "The argument derives its conclusion by..."; "Which one of the following is an argumentative strategy employed by the...
- `3-2` Step-by-Step: Step-by-Step: Method of Reasoning; The 4-Step Method; Break Down the Argument; Characterize the Method & Prephrase; Evaluate Answer Choices Against Your Prephrase; Systematically Eliminate Traps; Step 1: Break Down the Argument; What to Identify
- `3-3` A Field Guide to Common Strategies: A Field Guide to Common Strategies; Master Summary Table; Analogy; Consequences; Causal Reasoning; Challenging Assumptions; Applying Principles; 1. Argument by Analogy (23%)
- `3-4` Lesson 1: Lesson 1: Refutation by Analogy (Method of Reasoning); Concept Focus: Refutation by Analogy; How Analogies Work in Arguments; The Analogy Method — How It Works; Identify the opponent's reasoning pattern; Construct a parallel case; Show the parallel produces an absurd result; Conclude the original reasoning is flawed
- `3-5` Lesson 2: Lesson 2: Process of Elimination (Method of Reasoning); Concept Focus: Process of Elimination; The Elimination Method — How It Works; Establish the candidate set; Systematically eliminate alternatives; Conclude the remaining option is correct; Elimination Language in Arguments; Setting up the candidate set
- `3-6` Lesson 3: Lesson 3: Refutation by Counterexample (Method of Reasoning); Concept Focus: Refutation by Counterexample; 1. A Universal Claim; 2. A Specific Rebuttal; The Counterexample Method — How It Works; Step-by-Step Logic; Identify the universal claim; Find the specific instance
- `3-7` Lesson 4: Lesson 4: Highlighting Negative Consequences (Method of Reasoning); Concept Focus: Highlighting Negative Consequences; The Negative Consequences Method; How the Method Works; Identify the Proposal; Concede or Set Aside the Benefit; Trace the Causal Chain; Arrive at the Negative Outcome
- `3-8` Advanced Concepts: Advanced Concepts: Difficult Method Questions; The Three Difficulty Factors; 1. Complex or Layered Reasoning; 2. Highly Abstract Answer Choices; 3. Sophisticated Trap Answers; Factor 1: Complex Reasoning in Action; The author provides an analogy; The author provides a counterexample
- `3-9` Advanced Lesson 1: Advanced Lesson 1: Challenging an Unstated Assumption (Method of Reasoning); Concept Focus: Challenging an Unstated Assumption; The Assumption Challenge Pattern; How the Method Works; Speaker A States an Argument; Identify the Logical Gap; Speaker B Introduces New Information; The Assumption Is Exposed as False
- `3-10` Advanced Lesson 2: Advanced Lesson 2: Proof by Contradiction (Method of Reasoning); Concept Focus: Proof by Contradiction; The Reductio Ad Absurdum Pattern; How Proof by Contradiction Works; Hypothetical Assumption; Derive a Necessary Consequence; Show the Consequence Is False; Reject the Original Assumption
- `3-11` Advanced Lesson 3: Advanced Lesson 3: Challenging an Unstated Assumption (Part 2) (Method of Reasoning); Concept Focus: Complex Hidden Assumptions; Types of Hidden Assumptions; Part-to-Whole (or Whole-to-Part); Correlation-to-Causation; Necessity-to-Sufficiency; Past-to-Future; Representative Sample
- `3-12` Reference Guide: Method of Reasoning — Complete Reference; The Goal: What's the Blueprint?; The 4-Step Method; Deconstruct the Argument; Characterize the Method; Evaluate Answer Choices; Eliminate Traps; All Method Types: Complete Reference

### `4` Parallel Reasoning

Identify an argument's pattern. Then find an answer choice that follows the exact same logical structure.

- `4-1` Introduction: Parallel Reasoning; Identify the abstract logical pattern of the stimulus argument and then find...; What Makes This Question Type Unique; "All mammals are warm-blooded. Whales are mammals. Therefore, whales are warm-blooded."; "All employees must attend the meeting. Sarah is an employee. Therefore, Sarah...; Recognizing the Question; "Which one of the following arguments is most similar in its reasoning...; "The pattern of reasoning in the argument above is most similar to...
- `4-2` Step-by-Step: Step-by-Step: Parallel Reasoning; The 4-Step Method; Identify the Structure; Abstract the Pattern; Match by Elimination; Verify the Final Match; Step 1: Identify the Structure; What to Identify
- `4-3` Common Argument Structures: Parallel Reasoning — Common Argument Structures; Conditional Chain (Transitive); Modus Ponens / Modus Tollens; Eliminative (Disjunctive Syllogism); Principle Application; Quantifier Overlap; 1. The Conditional Chain ("The Domino Effect"); Abstract Pattern
- `4-4` Lesson 1: Lesson 1: The Conditional Chain (Parallel Reasoning); The Conditional Chain Pattern; The Core Structure; Premise 1; Premise 2; The Process Diagram; How to Identify a Conditional Chain; Spot the conditionals. Look for "if…then" statements, or their equivalents ("any," "all,"...
- `4-5` Lesson 2: Lesson 2: The Eliminative Argument (Parallel Reasoning); The Eliminative Pattern; The Core Structure; Premise 1 (The Options); Premise 2 (The Elimination); The Process Diagram; How to Identify an Eliminative Argument; Spot the disjunction. Look for "either…or," "the only possibilities are," "must be...
- `4-6` Lesson 3: Lesson 3: The Principle Application (Parallel Reasoning); The Principle Application Pattern; The Core Structure; Premise 1 (The Rule); Premise 2 (The Case); Conclusion (The Verdict); The Process Diagram; How to Solve Principle Application Questions
- `4-7` Lesson 4: Lesson 4: The Quantifier Argument (Parallel Reasoning); The Quantifier Pattern; The Quantifier Hierarchy; All / Every / Any; Most; Many / Several; Some / A few; Few
- `4-8` Advanced Concepts: Advanced Concepts: Difficult Parallel Questions; Three Difficulty Factors; Factor 1: Complex Multi-Step Structure; Easy (2 steps); Medium (3 steps); Hard (4+ steps); What to do: Before blueprinting a complex stimulus, count the premises and...; Factor 2: Mixed Reasoning Types
- `4-9` Advanced: Advanced Lesson 1: Advanced Conditional Chains (Parallel Reasoning); Advanced Conditional Structures; 1. Nested Conditionals (If-Then Within If-Then); "If A, then if B, then C"; "If A and B, then C"; "If A, then B and C"; 2. Biconditionals (If and Only If); "A if and only if B"
- `4-10` Advanced: Advanced Lesson 2: The Statistical Rebuttal (Parallel Reasoning); The Statistical Rebuttal Pattern; The Core Structure; Base Rate Premise; Implicit Opposing View; Types of Statistical Arguments; Correlation Claim; Causation Claim
- `4-11` Advanced: Advanced Lesson 3: The Correlational Rule (Parallel Reasoning); The Correlational Rule Pattern; Premise 1 (The Rule); Premise 2 (The Case); Correlation Directions; Direct (Positive); Inverse (Negative); Correlation vs. Causation in Parallel Structure
- `4-12` Reference Guide: Parallel Reasoning Reference Guide; The Goal; The 4-Step Method; Identify the Structure; Abstract the Pattern; Match by Elimination; Verify the Final Match; When To Diagram

### `5` Flaw

Identify the specific reasoning error that makes the argument's conclusion unproven by its evidence. In other words, why is the logical connection between the premise and the conclusion broken?

- `5-1` Introduction: Flaw; Recognizing the Question; "The reasoning in the argument is most vulnerable to criticism on the...; "The argument's reasoning is flawed in that it..."; "Which one of the following most accurately describes a flaw in the...; "The reasoning in the argument is questionable because..."; "A questionable technique used in the argument is to..."; The Flaw Mindset: From Description to Evaluation
- `5-2` Step-by-Step: Step-by-Step: Flaw; The 4-Step Method; Identify the Conclusion and Premises; Find the Gap; Name the Flaw (Prephrase); Match to Answer; Step 1: Identify the Conclusion and Premises; Tools for Deconstruction
- `5-3` A Field Guide to Common Flaws: A Field Guide to Common Error Types; Master Flaw Taxonomy; Causal; Conditional; CATEGORY 1: Causal Flaws; 1A. Correlation → Causation; Why it's flawed: The evidence shows a correlation (more police and more...; "infers a causal relationship from a mere correlation"
- `5-4` Drill: Drill: Correlation Does Not Equal Causation; Concept Focus: The Causal Flaw; Correlation vs. Causation — Defined; Correlation; Causation; The Three Types of Causal Error; Correlation → Causation; Reversed Causality
- `5-5` Drill: Drill: The Numbers vs. Percentages Flaw; Concept Focus: Data & Sampling Errors; The Core Error Explained; Why Numbers and Percentages Can Diverge; Group A; Group B; Common Patterns of This Flaw; More total events → "more likely"
- `5-6` Drill: Drill: The Unrepresentative Sample Flaw; Concept Focus: Data & Sampling Errors; The Core Error Explained; What Makes a Sample Unrepresentative?; Self-Selection Bias; Too Small; Wrong Population; Convenience Sampling
- `5-7` Drill: Drill: The Conditional Logic Flaw; Concept Focus: Errors of Conditional Logic; How Conditional Statements Work; Valid vs. Invalid Conditional Inferences; Modus Ponens (Direct); Modus Tollens (Contrapositive); Affirming the Consequent (Mistaken Reversal); Denying the Antecedent (Mistaken Negation)
- `5-8` Advanced Concepts: Advanced Concepts: Difficult Flaw Questions; The Three Difficulty Factors; Factor 1: Subtle Flaws (The Stimulus Is Hard to Crack); Hybrid Argumentation; Everyday Language Disguise; Multi-Step Reasoning; Example: The Causal-Conditional Blur; Factor 2: Compound Flaws (Multiple Errors in One Argument)
- `5-9` Advanced Drill: Advanced Drill: Necessary vs. Sufficient Conditions in Disguise; Concept Focus: The Most Tested Conditional Flaw; The Necessary vs. Sufficient Distinction; Sufficient Condition; Necessary Condition; The Directional Arrow; The Straw Man Variant; How the Straw Man Variant Works
- `5-10` Advanced Drill: Advanced Drill: The Certainty Flaw; Concept Focus: Treating Probability as Proof; Types of Certainty Flaws; Type 1: Possibility → Certainty; Why it's flawed: The evidence shows that the compound can inhibit cancer...; LSAT language: "treats a possibility as a certainty" or "confuses what could...; Type 2: Some → All (Scope Shift in Quantity); Why it's flawed: "Most" is not "all." The minority who took AP...
- `5-11` Advanced Drill: Advanced Drill: The Quantitative-Conditional Translation; Concept Focus: Where Quantity Meets Conditional Logic; The Critical Distinction: "If" vs. "Only If"; "Officials should resign if indicted"; "Officials should resign only if convicted"; "If indicted" group; "Only if convicted" group; How Percentage Arguments Can Be Structurally Flawed
- `5-12` Reference Guide: Flaw Reference Guide; The Goal: Find the Logical Gap; The 4-Step Method; Deconstruct the Argument; Find the Logical Gap; Prephrase the Flaw; Evaluate the Answers; The Two-Step Answer Test

### `6` Parallel Flaw

Identify the argument with a logical error that mirrors the error in the stimulus.

- `6-1` Introduction: Parallel Flaw; Recognizing the Question; "The flawed reasoning in the argument above is most similar to the...; "Which one of the following exhibits a pattern of questionable reasoning most...; "The argument's reasoning is flawed in a way that is most parallel...; "The flawed pattern of reasoning exhibited by which one of the following...; "Which one of the following arguments contains a flaw that is most...; Parallel Flaw vs. Parallel Reasoning
- `6-2` Step-by-Step: Step-by-Step: Parallel Flaw; The 3-Step Method; Identify the Flaw; Abstract the Pattern; Match the Error; Step 1: Identify the Flaw; A. Find the Conclusion and Premises; Find the Conclusion
- `6-3` Drill: Drill: The Mistaken Negation Flaw; Concept Focus: The Mistaken Negation; The Formal Structure; The Rule (Premise); The Observation (Premise); The Flawed Conclusion; Valid vs. Invalid Conditional Inferences; If A → B. A is true. Therefore B.
- `6-4` Drill: Drill: The Composition / Division Flaw; Concept Focus: Composition and Division; Composition vs. Division; Direction; Core Error; Abstract Pattern; Classic Example; Why It Fails
- `6-5` Drill: Drill: The "Compared to What?" Flaw; Concept Focus: The Missing Comparison; Types of Compared-to-What Errors; Missing Baseline; Self-Selected Comparison; Incomplete Data; Temporal Gap; How This Flaw Appears in Parallel Structures
- `6-6` Advanced: Advanced: Deconstructing High-Difficulty Parallel Flaws; Why Some Parallel Flaw Questions Are Brutally Hard; The Three Difficulty Factors; Factor 1: Compound Flaws; Factor 2: Abstract Structure; Factor 3: Multiple Viable Candidates; The Structural Elimination Method; Diagnose All Flaws
- `6-7` Drill: Drill: The Double Flaw; Concept Focus: The Double Flaw Pattern; How Double Flaws Are Constructed; Surface Flaw; Deep Flaw; How to Identify Compound Flaws; The stem says "both"; Mental-state language
- `6-8` Drill: Drill: The Net Effect Flaw; Concept Focus: The Net Effect Flaw; Understanding the Mechanism; How Percentage and Quantity Arguments Create Net Effect Errors; Percentage / Rate Arguments; Quantity / Magnitude Arguments; Comparative Arguments; Spotting the Net Effect Flaw
- `6-9` Drill: Drill: The Overlap Flaw; Concept Focus: The Overlap Flaw; Venn Diagram Logic: Why Groups Can Overlap Without Having To; Some Tenured Faculty are not Full Professors; All Linguistics Faculty have tenure; How to Spot the Overlap Flaw; Quantifier Language; Subset Relationship
- `6-10` Reference Guide: Parallel Flaw — Complete Reference; The Goal; The 3-Step Method; Identify the Flaw; Abstract the Pattern; Match the Error; Complete Flaw Types Table; Mistaken Reversal

## Unit 3: Evaluation

### `7` Evaluate the Argument

Find the pivotal question whose answer would most decisively strengthen or weaken an argument.

- `7-1` Introduction: Evaluate the Argument; Strengthen; Weaken; Evaluate; Study design; Sampling vs. assignment; Measurement + rival explanations; Recognizing the Question
- `7-2` Step-by-Step: Step-by-Step: Evaluate the Argument; The 4-Step Method; Find the Conclusion; Identify the Gap; Find the Pivotal Question; Apply the Yes/No Test; Step 1: Find the Conclusion; "After the city installed speed cameras on Main Street, the number of...
- `7-3` Common Evaluation Targets: A Field Guide to Evaluation Targets; Master Table of Evaluation Targets; Causal Claims; Statistical Generalizations; Analogies; Feasibility Claims; Predictions; 1. Causal Claims (30%)
- `7-3a` Drill: Drill: The Missing Baseline; The Missing Baseline Concept; Types of Missing Baselines; Before/After; Control Group; Historical Norm; Alternative Scenario; How to Spot Missing Baseline Arguments
- `7-4` Drill: Drill: The Unrepresentative Sample in Evaluate Questions; Why Sample Quality Is the Pivotal Question; "Yes — the sample is representative"; "No — the sample is not representative"; Types of Sample Problems; Self-Selection Bias; Too Small; Wrong Population
- `7-6` Drill: Drill: Evaluating Causal Claims; The Researcher Checklist; Baseline; Comparison group; Assignment vs. sampling; Measurement quality; Rival explanations; Evaluate vs. Weaken vs. Strengthen on the Same Causal Gap
- `7-7` Drill: Drill: Evaluating Arguments by Analogy; The Structure of an Analogy Argument; The Source Case; The Target Case; The Bridge; Common Analogy Patterns on the LSAT; Geographic Transfer; Temporal Transfer
- `7-8` Drill: Drill: Evaluating Feasibility Claims; The Three Feasibility Gaps; Implementation Obstacle; Unintended Consequence; Better Alternative; Spotting Feasibility Language; should / ought to; proposed / plan
- `7-5` Drill: Drill: The Rank vs. Raw Number Confusion; How Rankings Can Be Misleading; Scenario A: Even Distribution; Scenario B: Extreme Skew; Common Rank/Number Confusion Patterns; High Rank → Large Quantity; Rank Improvement → Actual Improvement; Top Percentage → Large Number
- `7-9` Advanced: Advanced: Difficult Evaluate Questions; The Three Difficulty Factors; Compound Gaps; Abstract Answer Language; Multiple Viable Candidates; 1. Compound Gaps (40%); How to Handle Compound Gaps; Compound Gap Strategy
- `7-10` Advanced: Advanced: Arguments with Multiple Gaps; Why Multiple Gaps Are Dangerous; Step 1: You find Gap A; Step 2: You see Answer (B) matches your prephrase; Step 3: The correct answer targets Gap B; The Gap Prioritization Strategy; 5-Step Prioritization; List all gaps. After reading the stimulus, spend 15 seconds brainstorming every...
- `7-11` Reference Guide: Evaluate the Argument: Complete Reference; Evaluation Targets; Causal Claims; Statistical Generalizations; Analogies; Feasibility Claims; Predictions; Validated Module 7 Anchors

### `8` Weaken

Find the fact that, if true, would undermine the argument or cast doubt on the conclusion.

- `8-1` Introduction: Weaken; Recognizing the Question; "Which one of the following, if true, most seriously weakens the argument?"; "Which one of the following, if true, most undermines the reasoning above?"; "Which one of the following, if true, casts the most doubt on...; "Which one of the following, if true, most seriously calls into question...; "Which one of the following, if true, most weakens the argument above?"; The Gap Model
- `8-2` Step-by-Step: Step-by-Step: Weaken; The 4-Step Method; Find the Conclusion; Identify the Gap; Prephrase the Weakener; Match and Eliminate; Step 1: Find the Conclusion; "Researchers found that students who listened to classical music while studying scored...
- `8-3` Drill: Drill: The Scope Shift Flaw; Understanding the Scope Shift; Types of Scope Shifts; Part → Whole; Narrow Group → Broad Group; One Metric → Different Metric; One Time Period → All Time; How to Weaken a Scope Shift Argument
- `8-4` Drill: Drill: The Baseline Flaw; Understanding the Baseline Flaw; How the Baseline Flaw Works; Recognizing the Pattern; Post-intervention data only; Success attributed to a program; No comparison group; Self-selected participants
- `8-5` Drill: Drill: Attacking the Data; Understanding Data-Based Weakening; Types of Data Attacks; Reporting Bias; Selection Bias; Survivorship Bias; Measurement Error; Confounding Variable
- `8-6` Advanced: Advanced: Traits of High-Difficulty Weaken Questions; Two Advanced Branches; Causal Application; Non-Causal Fallback; Three Difficulty Factors for Weaken; 1. Subtle Gaps; 2. Strengthener Traps; 3. Pattern Forcing
- `8-7` Drill: Drill: Reverse Causation; Alternative Cause; Reverse Causation; Common Cause; Practice: Identify the Reverse Causal Weakener; Full Analysis; Step 1: Break Down the Argument; "It is well known that becoming angry often induces temporary incidents of...
- `8-8` Drill: Drill: The Composition Flaw; Composition Flaw; Denominator Neglect; Part-to-Whole; Practice: Spot the Composition Flaw; Full Analysis; Step 1: Break Down the Argument; "Over the last 25 years, the average price paid for a new...
- `8-9` Drill: Drill: Process of Elimination; Introduce Option C; Show Option A Is Impossible; Practice: Break the False Dichotomy; Full Analysis; Step 1: Break Down the Argument; "A skeleton of a North American mastodon... contains a human-made projectile dissimilar...; "Thus, since Eurasians did not settle in North America until shortly before...
- `8-10` Drill: Drill: Weaken EXCEPT; Strengthener; Irrelevant Statement; Premise Restatement; Practice: Weaken EXCEPT; Full Analysis; Step 1: Break Down the Argument; "In Australia the population that is of driving age has grown larger...
- `8-11` Reference Guide: Weaken: Complete Reference; The 4-Step Method; Solving Any Weaken Question; Find the Conclusion; Identify the Gap; Prephrase the Attack; Test Each Answer for Direction; Two-Lens Solve Order

### `9` Strengthen

Select a new fact that makes the conclusion more likely to follow from the premises.

- `9-1` Introduction: Strengthen; Recognizing the Question; "Which one of the following, if true, most strengthens the argument?"; "Which one of the following, if true, most supports the conclusion drawn...; "Which one of the following, if true, provides the strongest support for...; "Which one of the following, if true, most helps to justify the...; "Which one of the following principles, if valid, provides the most support...; The Gap Model
- `9-2` Step-by-Step: Step-by-Step: Strengthen; The 4-Step Method; Break Down the Argument; Identify the Gap; Prephrase the Strengthener; Evaluate and Eliminate; Step 1: Break Down the Argument; Find the Main Conclusion
- `9-3` Drill: Strengthening Causal Arguments; How to Strengthen Causal Claims; Rule Out Alternative Causes; Show the Mechanism; Show Dose-Response / Timeline; The Ideal Experiment Checklist; Baseline; Control / comparison group
- `9-4` Drill: Strengthening Numerical Arguments; The Percentage ↔ Number Gap; Common Numerical Gap Patterns; Percentage → Absolute Amount; Absolute Amount → Percentage; Rate Over Time; Per Capita vs. Total; Drill: Strengthening Arguments with Numbers (PT-111-S-3-Q-4)
- `9-5` Drill: Strengthening Comparative Claims; How to Strengthen Comparative Claims; Highlight the Limit of the Alternative; Show a Unique Advantage; Confirm the Fairness of the Comparison; Bridge the Gap Between Concepts; Drill: Strengthening Comparative Claims (PT-106-S-3-Q-9); The Problem
- `9-6` Advanced: Advanced: Hallmarks of Difficult Strengthen Questions; Three Difficulty Factors for Strengthen; 1. Subtle Gaps; 2. Weakener Traps; 3. Indirect Strengtheners; Concrete Examples of Each Difficulty Factor; Factor 1: Subtle Gaps; Factor 2: Weakener Traps
- `9-7` Drill: The Defender Pattern; Illustrative Strengthen; Full Analysis; Step 1: Break Down the Argument; "We asked 100 entrepreneurs and 100 business managers to answer various questions...; "This indicates that people who are especially overconfident are more likely to...; Step 2: Identify the Gap; Step 3: Prephrase the Strengthen
- `9-8` Drill: Bridging Conceptual Gaps; Illustrative Strengthen; Full Analysis; Step 1: Break Down the Argument; "The boards used on the floors of bigger houses were generally much...; "Floors made out of narrow floorboards were probably once a status symbol,...; Step 2: Identify the Gap; Step 3: Prephrase the Strengthen
- `9-9` Drill: Strengthening Qualified Claims; Illustrative Strengthen; Full Analysis; Step 1: Break Down the Argument; "Our station's weather forecasts are more useful and reliable than those of...; "On most of the occasions when we have forecast rain for the...; "The same cannot be said for either of our competitors."; Step 2: Identify the Gap
- `9-10` Drill: Strengthening by Analogy; Illustrative Strengthen; Full Analysis; Step 1: Break Down the Argument; "The introduction of a new drug into the marketplace should be contingent...; "However, the social impact of the newly marketed antihistamine is far from...; "There should be a general reduction in the pace of bringing to...; Step 2: Identify the Gap
- `9-11` Drill: The Dose-Response Pattern; Illustrative Strengthen; Full Analysis; Step 1: Break Down the Argument; "They found that those whose composition skills had improved the most had...; "This suggests that producing characters more automatically frees up mental resources for...; Step 2: Identify the Gap; Step 3: Prephrase the Strengthen
- `9-12` Drill: Strengthen EXCEPT; Illustrative Strengthen; Full Analysis; Step 1: Break Down the Argument; "Antarctic seals dive to great depths and stay submerged for hours. They...; "Some researchers hypothesize that for long dives these seals also store oxygenated...; Step 2: Map the Strengthening Angles; Necessity
- `9-13` Reference Guide: Strengthen: Complete Reference; The 4-Step Method; Solving Any Strengthen Question; Find the Conclusion; Identify the Gap; Prephrase the Support; Test Each Answer for Direction; Core Drill Map

### `11 (route 11, src 10)` Sufficient Assumption

Provide a premise that, when added, makes the argument 100% logically valid.

- `10-1` Introduction: Sufficient Assumption; Recognizing the Question; "The conclusion follows logically if which one of the following is assumed?"; "Which one of the following, if assumed, enables the conclusion to be...; "The conclusion is properly inferred if which one of the following is...; "Which one of the following principles, if valid, most helps to justify...; "Which one of the following, if assumed, allows the conclusion above to...; Sufficient Assumption vs. Necessary Assumption
- `10-2` Step-by-Step: Sufficient Assumption: Step-by-Step: Sufficient Assumption; The 4-Step Method; Break Down the Argument; Diagram and Identify the Gap; Prephrase the Bridge; Evaluate and Eliminate; Step 1: Break Down the Argument; Find the Conclusion
- `10-3` Drill: The Concept Link: The Concept Link; How to Spot a Concept Link Gap; Compare terms; Identify the bridge needed; Predict the answer; Drill: The Concept Link (PT-120-S-1-Q-12); The Problem; Illustrative Sufficient Assumption
- `10-4` Drill: The Exclusivity Rule: The Exclusivity Rule; How to Spot an Exclusivity Gap; Look for a defined list in the premises; Look for an absolute conclusion; Ask; Rules X and Y are the stated triggers; Conditions A, B, and C are defined; The policy lists three requirements
- `10-5` Drill: The Binary Assumption: The Binary Assumption; How to Spot a Binary Gap; Look for two defined categories; Look for a negation in the reasoning; Look for a positive conclusion; Ask; Defines "wrong" + shows item is not wrong; Defines "failure" + shows item is not a failure
- `10-6` Drill: Mutually Exclusive Categories: Mutually Exclusive Categories; How to Spot a Mutual Exclusivity Gap; Look for category placement in the premises; Look for category exclusion in the conclusion; Ask; Item belongs to "great dramatic novels"; Item qualifies as "educational"; Action is "legally permitted"
- `10-7` Drill: The General Principle: The General Principle Pattern; Practice Question; Step-by-Step Analysis; Step 1: Break Down the Argument; Marty's Pizza and Checkers Pizza are the two major pizza parlors in...; But Checkers refused to accept these coupons, even though they were redeemed...; Accepting them would have cost Checkers nothing and would have satisfied those...; This shows that Checkers's motive in refusing to accept the coupons was...
- `10-8` Drill: The Chain of Logic: The Chain of Logic Pattern; Premise 1; Premise 2; Missing Link; Practice Question; Step-by-Step Analysis; Step 1: Break Down the Argument; A country's rapid emergence from an economic recession requires substantial new investment...
- `10-9` Drill: The Chain of Logic Part 2: Chain of Logic — Complex Chains; Practice Question; Step-by-Step Analysis; Step 1: Break Down the Argument; People who have doctorates in the liberal arts are interested in improving...; Companies, however, rarely hire people who are not concerned with the financial...; As a result, companies rarely hire people who have doctorates in the...; Step 2: Identify the Gap
- `10-10` Drill: The Either/Or Bridge: The Either/Or Bridge Pattern; Premise: X is either A or B; Premise: If A → response C; Premise: If B → response D; Conclusion: Response E is wrong; Gap: If C or D → not E; Practice Question; Step-by-Step Analysis
- `10-11` Drill: The Normative Bridge: The Normative Bridge Pattern; Descriptive Fact (Premise); Normative Conclusion; Gap (Missing Rule); Practice Question; Step-by-Step Analysis; Step 1: Break Down the Argument; Some theorists argue that literary critics should strive to be value-neutral in...
- `10-12` Reference Guide: Sufficient Assumption — Complete Reference Guide; The 4-Step Method; Break Down the Argument; Diagram and Identify the Gap; Prephrase the Bridge; Evaluate and Eliminate; Complete SA Patterns Table; Concept Link

### `12 (route 12, src 11)` Necessary Assumption

Identify the premise an argument requires to stay standing, and separate required assumptions from mere strengtheners or full sufficient bridges.

- `11-1` Introduction: Necessary Assumption; Recognizing the Question; "The argument relies on which one of the following assumptions?"; "The argument depends on assuming which one of the following?"; "Which one of the following is an assumption required by the argument?"; "The conclusion above follows only if which one of the following is...; "The argument presupposes that..."; Necessary vs. Strengthener vs. Sufficient
- `11-2` Step-by-Step: Necessary Assumption: Step-by-Step: Necessary Assumption; The 5-Step Method; Break Down the Argument; Set the Force Standard; Diagnose the Reasoning Family; Pre-phrase the Minimum Requirement; Verify with the Negation Test; Step 1: Break Down the Argument
- `11-3` Drill: The 'Key Ingredient' Assumption: The Key Ingredient; How to Spot a Key Ingredient Gap; Compare the evidence and the conclusion; Look for an unstated causal chain; Predict the answer; Drill: The Key Ingredient (PT-103-S-1-Q-4); The Problem; Illustrative Necessary Assumption
- `11-4` Drill: The 'Definitional Gap' Assumption: The Definitional Gap; How to Spot a Definitional Gap; Look for two different concepts; Ask; Predict the answer; Drill: The Definitional Gap (PT-105-S-1-Q-18); The Problem; Full Analysis
- `11-5` Drill: The 'Only Way' Assumption: The Only Way; How to Spot an Only Way Gap; Look for absolute language in the conclusion; Ask; Predict the answer; Drill: The Only Way (PT-116-S-3-Q-1); The Problem; Full Analysis
- `11-6` Drill: The 'Closed Universe' Assumption: The Closed Universe; How to Spot a Closed Universe Gap; Look for a process of elimination; Look for "must" language; Ask; Predict the answer; Drill: The Closed Universe (PT-118-S-1-Q-3); The Problem
- `11-7` Drill: The 'Source Fallacy' Assumption: The Source Fallacy; How to Spot a Source Fallacy Gap; Look for an attack on the source, not the argument; Look for bias language; Ask; Predict the answer; Drill: The Source Fallacy (PT-121-S-4-Q-10); The Problem
- `11-8` Drill: The 'False Dichotomy' Assumption: The False Dichotomy; How to Spot a False Dichotomy; Look for two-scenario reasoning; Ask; Predict the answer; Drill: The False Dichotomy (PT-126-S-3-Q-8); The Problem; Full Analysis
- `11-9` Drill: The 'Complete Knowledge' Assumption: The Complete Knowledge; How to Spot a Complete Knowledge Gap; Look for "known" qualifiers; Compare the evidence scope to the conclusion scope; Ask; Predict the answer; Drill: The Complete Knowledge (PT-138-S-3-Q-23); The Problem
- `11-10` Drill: Advanced 'Forced Choice': Forced Choice Advanced; How to Spot an Advanced Forced Choice; Look for a dichotomy with a sorting criterion; Look for the ruling-out move; Ask; Predict the answer; Drill: Advanced Forced Choice (PT-117-S-4-Q-16); The Problem
- `11-11` Drill: 'Blocking a Third Party': Blocking Third Party; How to Spot a Third Party Loophole; Compare the scope of the refutation to the scope of the conclusion; Ask; Look for entity-specific language; Predict the answer; Drill: Blocking a Third Party (PT-127-S-1-Q-19); The Problem
- `11-12` Drill: The 'Behavioral Link' Assumption: The Behavioral Link; How to Spot a Behavioral Link Gap; Look for a principle under attack; Identify the required behavior; Ask; Predict the answer; Drill: The Behavioral Link (PT-112-S-3-Q-18); The Problem
- `11-13` Drill: 'Definitional Standard': Definitional Standard; How to Spot a Definitional Standard; Look for a final judgment; Identify the single basis for the judgment; Ask; Predict the answer; Drill: Definitional Standard (PT-114-S-4-Q-20); The Problem
- `11-14` Reference Guide: Necessary Assumption — Complete Reference Guide; The 5-Step Method; Necessary Assumption — 5 Steps; Break Down the Argument. Identify the conclusion, the premises, and any sub-conclusions....; Set the Force Standard. Ask whether the gap calls for something merely...; Diagnose the Reasoning Family. Decide whether the gap is mainly a bridge...; Pre-phrase the Minimum Requirement. State the smallest belief the argument must have...; Verify with the Negation Test. Negate your finalist. If the argument collapses,...

## Unit 3A: Causal Reasoning

### `10 (route 10, src 60)` Causal Reasoning

A cross-question-type framework for recognizing, testing, attacking, and supporting causal reasoning without treating it as a standalone question type.

- `60-intro` Introduction: Causal Reasoning: Introduction: Causal Reasoning; Where Causal Reasoning Appears; Main Conclusion / Argument Part; Method of Reasoning; Flaw / Evaluate; Strengthen / Weaken / Assumption; The Five Causal Checks; Use These In Order
- `60-1` Lesson 1: Causal Reasoning in Main Conclusion, Argument Part, and Method: Lesson 1: Causal Reasoning in Main Conclusion, Argument Part, and Method; Recognition Workflow; Identify the Function of the Causal Claim; Locate the phenomenon. If the stimulus starts from an accepted event and...; Find the proposed cause. The sentence answering "why did this happen?" is...; Check whether the causal sentence supports something broader. A later mechanistic sentence...; In Method questions, abstract the move. Decide whether the author is offering...; Common Structural Roles
- `60-2` Lesson 2: Causal Flaw Applications: Lesson 2: Causal Flaw Applications; Major Causal Flaw Families; Alternative cause; Reverse causation; Common cause; Selection or measurement problem; Baseline or comparison failure; Real Questions To Use With This Lesson
- `60-3` Lesson 3: Evaluating Causal Claims and Questions to Ask: Lesson 3: Evaluating Causal Claims and Questions to Ask; The Pivotal Questions; Ask These Before Trusting a Causal Study; What was the baseline? Did the studied group already have the highlighted...; Who was sampled? If the sample is unrepresentative, the observed pattern may...; Was there random assignment or only random sampling? Random assignment helps causal...; Could self-selection, placebo effects, or poor blinding explain the result? The design...; Is there a plausible mechanism? A bare correlation becomes more credible when...
- `60-4` Lesson 4: Causal Reasoning in Strengthen and Weaken: Lesson 4: Causal Reasoning in Strengthen and Weaken; Two-Sided Causal Toolkit; Strengthen; Weaken; Real Questions To Use With This Lesson; PT-128-S-3-Q-1 — Supporting a Claimed Causal Relationship; PT-126-S-1-Q-22 — Undermining a Claimed Causal Relationship
- `60-5` Lesson 5: Causal Reasoning in Sufficient and Necessary Assumption: Lesson 5: Causal Reasoning in Sufficient and Necessary Assumption; SA vs. NA in Causal Arguments; Sufficient Assumption; Necessary Assumption; Real Questions To Use With This Lesson; PT-114-S-1-Q-1 — Assuming a Claimed Causal Relationship; PT-112-S-1-Q-18 — Assuming a Claimed Causal Chain; PT-103-S-1-Q-4 — Assuming the Relevance of an Intermediate Cause
- `60-ref` Reference Guide: Causal Reasoning Reference Guide; because / due to / resulted from; therefore / thus / hence; leads to / brings about / triggers; explained by / the reason for this is; Fast Diagnostic Table; Main Conclusion / Argument Part; Method

## Unit 4: Principle

### `13 (route 13, src 12)` Principle-Strengthen

Find the general rule that, if valid, justifies or strongly supports the argument's reasoning by completing the missing bridge.

- `12-1` Introduction: Principle-Strengthen; Shared Principle-Family Vocabulary; Trigger; Case Facts; Bridge; Verdict; Recognizing the Question; "Which one of the following principles, if valid, most helps to justify...
- `12-2` Step-by-Step: Principle-Strengthen: Step-by-Step: Principle-Strengthen; The 5-Step Method; Find the Conclusion; Identify the Logical Leap; Abstract the Principle Needed; Complete the Application; Match the Answer; Trigger
- `12-3` Drill: Strengthening with a Normative Bridge: The Normative Bridge; How to Spot a Normative Bridge Gap; Check the premises; Check the conclusion; If YES to both; Common Normative Bridge Variations; An action causes harm; A policy has a certain effect
- `12-4` Drill: Strengthening with an Efficiency Principle: The Efficiency Principle; How to Spot an Efficiency Principle Gap; Check the premises; Check the conclusion; If YES to both; Common Efficiency Principle Variations; Expensive tool = cheap tool in results; Complex method has no advantage over simple method
- `12-5` Drill: Strengthening with a Principle of Accountability: The Accountability Principle; How to Spot an Accountability Principle Gap; Check the premises; Check the conclusion; If YES to both; Common Accountability Principle Variations; Professional omitted publicly available information; Person was unaware of a risk they could have discovered
- `12-6` Drill: Strengthening a 'Lesser of Two Evils' Argument: The Lesser of Two Evils; How to Spot a Lesser of Two Evils Gap; Check for a concession; Check for two flawed systems; Check the conclusion; If YES to all three; Common Lesser of Two Evils Variations; Some deserving people will be treated too harshly
- `12-7` Reference Guide: Principle-Strengthen — Complete Reference Guide; Trigger; Case Facts; Bridge; Verdict; The 5-Step Method; Principle-Strengthen - 5 Steps; Find the Conclusion

### `14 (route 14, src 13)` Principle-Apply

Use a trigger checklist to find the specific case whose facts cleanly bridge to a stated rule's verdict.

- `13-1` Introduction: Principle-Apply; Recognizing the Question; "Which one of the following is an application of the principle above?"; "Which one of the following most closely conforms to the principle?"; "Which one of the following judgments best illustrates the principle?"; "The reasoning in which one of the following is most strongly supported...; "Which one of the following is consistent with the principle stated above?"; What Makes Apply Different
- `13-2` Step-by-Step: Principle-Apply: Step-by-Step: Principle-Apply; The 4-Step Method; Diagram the Principle; Build the Trigger Checklist; Check the Case Facts; Verify the Bridge; Trigger Match; Bridge Check
- `13-3` Drill: Direct Application: Direct Application; What Makes an Application "Direct"; Presents facts that satisfy every condition in the principle; Reaches the exact consequence stated in the principle; Uses the principle in the forward direction; Drill: Direct Application (PT-104-S-4-Q-1); Instructions: Read the stimulus, question, and answer choices below.; The Problem
- `13-4` Drill: Contrapositive Application: Contrapositive Application; How the Contrapositive Works in Principle-Apply; Original; Contrapositive; Drill: Contrapositive Application (PT-106-S-1-Q-10); Instructions: Read the stimulus, question, and answer choices below.; The Problem; Full Analysis
- `13-5` Drill: Definitional Checklist: Definitional Checklist; The Definitional Checklist Method; Building a Definitional Checklist; Extract the Positive Criteria; Extract the Exclusion Criteria; Categorize Each Answer; Drill: Definitional Checklist (PT-123-S-2-Q-7); Instructions: Read the stimulus, question, and answer choices below.
- `13-6` Drill: Advanced Application: Advanced Application; Anatomy of an Advanced Principle; Multi-Condition Rules; High-Threshold Language; Nested Conditionals; Abstract Ethical Rules; Drill: Advanced Application (PT-119-S-2-Q-21); Instructions: Read the stimulus, question, and answer choices below.
- `13-7` Reference Guide: Principle-Apply — Complete Reference Guide; Trigger; Case Facts; Bridge; Verdict; Contrapositive; The 4-Step Method; Principle-Apply — 4 Steps

### `15 (route 15, src 14)` Principle-Generalization

Find the general rule the case study actually demonstrates, including when the passage sounds explanatory, rather than the most plausible one-case story about it.

- `14-1` Introduction: Principle-Generalization; Recognizing the Question; "Which one of the following propositions is best illustrated by the situation...; "The situation described most closely conforms to which one of the following...; "Which one of the following principles is best illustrated by the information...; "The passage most precisely illustrates which one of the following propositions?"; "The situation as described above most closely conforms to which one of...; The Three Principle Question Types
- `14-2` Step-by-Step: Principle-Generalization: Step-by-Step: Principle-Generalization; The 4-Step Method; Understand the Situation; Identify the Key Dynamic; Abstract to General Terms; Match the Answer; Step 1: Understand the Situation; The Players
- `14-3` Drill: Experiment Generalization: Experiment Generalization; What Makes Experiment Generalization Distinctive; Identify the correct independent variable; Capture the correct causal direction; Match the scope of the result; Key Strategy: Isolate, Then Generalize; Isolate, Then Generalize; Phase 1 — Isolate
- `14-4` Drill: Contextual Value: Contextual Value; What Makes Contextual Value Distinctive; One trait, two contexts; Opposite outcomes; The trait itself is neutral; The correct principle captures the reversal; Drill: Contextual Value (PT-119-S-3-Q-8); The Problem
- `14-5` Drill: Unintended Consequences: Unintended Consequences; What Makes Unintended Consequences Distinctive; A successful solution; A downstream negative effect; Causal linkage; The correct principle captures the full chain; Drill: Unintended Consequences (PT-124-S-1-Q-5); The Problem
- `14-6` Drill: Motivated Blindness: Motivated Blindness; What Makes Motivated Blindness Distinctive; An action or tool strongly serves a group's interests; The same action has a significant downside; The group fails to consider the downside; Self-interest explains the blind spot; Drill: Motivated Blindness (PT-109-S-1-Q-18); The Problem
- `14-7` Reference Guide: Principle-Generalization — Reference Guide; 1. The 4-Step Method; The 4-Step Method; Understand the Situation; Identify the Key Dynamic; Abstract to General Terms; Match the Answer; 2. Generalization Categories

## Unit 5: Inference

### `16 (route 16, src 15)` Fill in the Blank

Identify the missing conclusion or premise required to complete an argument's logical structure.

- `15-1` Introduction: Introduction: Fill in the Blank; Determine the logical function of the missing phrase and select the answer...; Recognizing the Question; "Which one of the following most logically completes the argument?"; "Which one of the following most logically completes the argument below?"; "Which one of the following most reasonably completes the passage?"; Fill in the Blank vs. Main Conclusion; What you find
- `15-2` Step-by-Step: Fill in the Blank: Step-by-Step: Fill in the Blank; The 4-Step Method; Read and Parse the Premises; Identify the Gap; Prephrase the Missing Thought; Sort the Answers by Support; Step 1: Read the Premises; Simplify as you read
- `15-3` Drill: Mechanistic Chain: The Mechanistic Chain; What Makes the Mechanistic Chain Distinctive; Follow the chain to its endpoint; Ignore the actors' intentions; Match the scope of the final step; Key Strategy: Trace the Dominoes; Trace the Dominoes; Phase 1 — Map the Chain
- `15-4` Drill: Analogy: The Analogy Completion; What Makes the Analogy Completion Distinctive; Preserve the action; Transfer the subject correctly; Maintain the scope and tone; Key Strategy: Build the Map; Build the Map; Phase 1 — Identify the Analogy
- `15-5` Drill: Problem and Solution: Problem and Solution; What Makes Problem and Solution Distinctive; Target the specific obstacle; Preserve the argument's own framework; Match the logical force of "unless." The word "unless" introduces a necessary...; Key Strategy: Problem → Solution → Obstacle → Reversal; Problem → Solution → Obstacle → Reversal; Identify the Problem
- `15-6` Drill: Philosophical Rebuttal: Philosophical Rebuttal; What Makes Philosophical Rebuttal Distinctive; State the consequence of the redefinition; Stay within the author's framework; Match the argument's level of abstraction; Key Strategy: Thesis → Challenge → Rebuttal → Consequence; Thesis → Challenge → Rebuttal → Consequence; Identify the Thesis
- `15-7` Drill: Conditional Logic and Paradox: Conditional Logic and Paradox; What Makes Conditional Logic and Paradox Distinctive; State the paradox, not resolve it; Combine both premises; Use appropriately hedged language; Key Strategy: Fact → Condition → Conflict → Paradox; Fact → Condition → Conflict → Paradox; Identify the Fact
- `15-8` Reference Guide: Reference Guide: Fill in the Blank; 1. The 4-Step Method; The 4-Step Method; Read the Premises and Locate the Blank; Identify the Gap; Pre-phrase the Answer; Match and Eliminate; 2. Blank Types

### `17 (route 17, src 16)` Most Strongly Supported

Identify the inference that is most logically proven by the information in the stimulus.

- `16-1` Introduction: Introduction: Most Strongly Supported; Recognizing the Question Stem; Which one is most strongly supported?; Which one can be most reasonably inferred?; The statements best support which one?; MSS vs. Must Be True; Must Be True requires certainty; Most Strongly Supported requires strong support
- `16-2` Step-by-Step: Most Strongly Supported: Step-by-Step: Most Strongly Supported; The 4-Step Method; Solving MSS Questions; Read for Facts. Treat every sentence as a premise you must accept....; Identify Key Relationships. Look for links between premises; Prephrase an Inference. Before reading the answers, ask yourself; Test and Rank Each Answer. Check every choice against the stimulus. Rank...; Wrong-Answer Patterns
- `16-3` Drill: Synthesis of Causal Claims: Drill: Synthesis Causal; The Concept; Practice Question; Illustrative Most Strongly Supported; Full Analysis; Breaking Down the Premises; Premise 1 (Effect); Premise 2 (Cause)
- `16-4` Drill: Applying Strict Definitions: Applying Definitions; The Two-Layer Structure; The Rule Layer; The Fact Layer; Drill: Applying Strict Definitions (PT-101-S-3-Q-8); Instructions: Read the stimulus and commit to an answer before scrolling down...; The Problem; Full Analysis
- `16-5` Drill: Causal Chaining: Causal Chaining; The Chaining Technique; Trace the Chain; Identify the Links; Connect the Endpoints; Match the Qualifiers; Drill: Causal Chaining (PT-107-S-3-Q-5); Instructions: Read the stimulus and commit to an answer before scrolling down...
- `16-6` Advanced: High-Difficulty MSS Questions: Advanced: High-Difficulty MSS Questions; The Three Difficulty Factors; Factor 1: Subtle Inferences; Factor 2: Overreach Traps; Factor 3: Multiple Plausible Answers; The Overreach Trap: The 1 Killer on Hard MSS; Anatomy of an Overreach; Causal upgrade
- `16-7` Drill: Inference by Constraint: Inference by Constraint; What Makes Inference by Constraint Distinctive; Superlatives set ceilings and floors; Restrictions create exclusions; The answer describes the unstated; Drill: Inference by Constraint; The Problem; Full Analysis
- `16-8` Drill: Navigating Logical Density: Logical Density; What Makes Logical Density Distinctive; Mixed quantifiers demand precision; Conditional triggers create hypothetical scope; The correct answer mirrors the stimulus's uncertainty; Drill: Navigating Logical Density; The Problem; Full Analysis
- `16-9` Drill: Exploiting Semantic Nuance: Semantic Nuance; What Makes Semantic Nuance Distinctive; The pivot word controls the inference; "Not necessarily X" means "possibly not X." This is the most commonly...; Wrong answers exploit the misreading; Drill: Exploiting Semantic Nuance; The Problem; Full Analysis
- `16-10` Drill: LEAST Supported (EXCEPT-Style): LEAST Supported (EXCEPT-Style); What Makes LEAST Supported Distinctive; The task is inverted; The correct answer is usually unsupported, not contradicted; Systematic evaluation is mandatory; Drill: LEAST Supported (EXCEPT-Style); The Problem; Full Analysis
- `16-11` Reference Guide: Reference Guide: Most Strongly Supported; 1. The 4-Step Method; The 4-Step Method; Identify the Question's Goal; Break Down the Information; Connect the Evidence; Evaluate and Eliminate; Support Spectrum Quick-Check

### `18 (route 18, src 17)` Must Be True

Find the statement the facts definitely prove by tracking governed domains, rule layers, and precise inference paths.

- `17-1` Introduction: Introduction: Must Be True; Recognizing the Question Stem; Which one of the following must also be true?; Which one of the following can be properly inferred?; Which one of the following follows logically from the statements?; Which one of the following is strictly implied?; Must Be True vs. Most Strongly Supported; Standard of Proof
- `17-2` Step-by-Step: Must Be True: Step-by-Step: Must Be True; The 4-Step Method; Solving Must Be True Questions; Confirm the Task. Read the stem first. Once you see language like...; Deconstruct the Stimulus. Break every sentence into its logical skeleton. Diagram conditional...; Synthesize When the Inference Is Visible. Look for a shared term that...; Use Answer-Driven POE When the Inference Is Not Cleanly Visible. If no...; Conditional Diagramming
- `17-3` Drill: Conditional Logic: Drill: Conditional Logic in Must Be True; The Concept: Chaining If-Then Statements; Practice Question; Illustrative Must Be True; Full Analysis; Step 1: Diagram Each Premise; Sentence 1; Sentence 2
- `17-4` Drill: Governed Sets & Domains: Governed Sets & Domains; Core Quantifier Rules; All A are B; No A are B; Some A are B; Most A are B; The Governed-Domain Inference; Deriving a Governed-Domain Inference
- `17-5` Drill: Numerical Reasoning: Numerical Reasoning; Common Numerical Patterns; Constant Ratio; Majority Overlap; Subgroup Constraint; Percentage vs. Count; Drill: Numerical Reasoning (PT-119-S-3-Q-11); Instructions: Translate the stimulus into a mathematical relationship and commit to an...
- `17-7` Drill: Policy, Rule, Exception, Purpose, and Effect: Policy, Rule, Exception, Purpose, and Effect; Drill: Policy, Rule, Exception, Purpose, and Effect (PT-103-S-3-Q-22); Instructions: Read the stimulus carefully, translate the rule into logical terms, and...; The Problem; Full Analysis; Step 1: Separate the Policy Layers; Scope Condition; Acceptable Condition
- `17-6` Advanced: High-Difficulty Analysis: What Makes the Hardest MBT Questions Unique?; The Three Difficulty Factors; Factor 1: High Cognitive Load; Factor 2: Multi-Step Inference Chains; Factor 3: Inferences from Disparity; The "Could Be True" Trap; Must Be True; Could Be True
- `17-8` Drill: Multi-Step Inference: Multi-Step Inference; The Chaining Method; Building a Multi-Step Inference; Inventory the Rules; Identify the Trigger; Trace the Chain; Drill: Multi-Step Inference (PT-102-S-2-Q-21); Instructions: Formalize the rules, identify the chain, and commit to an answer...
- `17-9` Drill: Inferences from Disparity: Inferences from Disparity; The Disparity Framework; Resolving Subgroup-Total Conflicts; Identify the Subgroup Claim; Identify the Total Claim; Deduce the Complement; Drill: Inferences from Disparity (PT-106-S-2-Q-19); Instructions: Identify the subgroup claim, the total claim, and what must be...
- `17-10` Drill: Precision in Causality: Precision in Causality; The Mechanism-Constraint Pattern; Analyzing Causal Precision Questions; Identify the Mechanism; Identify the Constraint; Draw the Narrow Inference; Drill: Precision in Causality (PT-104-S-1-Q-19); Instructions: Map the mechanism, identify the constraint, and formulate your inference before...
- `17-12` Governed Sets & Domains: Governed Sets & Domains; The Domain-First Routine; How to Keep the Rule in Bounds; Name the governed set. Ask; Separate trigger from decoration. Strip away descriptive details that do not affect...; Check each answer against the domain first. Before evaluating logical force, ask...; Use boundary testing. If the answer shifts from "under eighteen" to "eighteen...; Paired Real Question
- `17-13` Policy, Rule, Exception, Purpose, and Effect: Policy, Rule, Exception, Purpose, and Effect; The Rule-Layer Checklist; Policy; Rule; Exception; Purpose; Effect; How to Separate the Layers
- `17-11` Reference Guide: Reference Guide: Must Be True; 1. The 4-Step Method; The 4-Step Method; Identify the Task and Set the Standard of Proof; Deconstruct the Stimulus into Governed Components; Synthesize and Prephrase When the Inference Is Visible; Use Answer-Driven POE When the Inference Is Not Cleanly Visible; 2. MBT Reasoning Types

### `19 (route 19, src 18)` Must Be False

Identify the answer choice that is logically proven impossible by the information provided in the stimulus.

- `18-1` Introduction: Introduction: Must Be False; Recognizing the Question Stem; Which one CANNOT be true?; Which one must be false?; Each of the following could be true EXCEPT:; The claims above are incompatible with which one?; Which one violates the principle described?; Must Be False vs. Must Be True
- `18-2` Step-by-Step: Must Be False: Step-by-Step: Must Be False; The 4-Step Method; Solving Must Be False Questions; Diagram the Rules. Read the stimulus and extract every rule. Pay special...; Test Each Answer. For each answer choice, ask; Find the Contradiction. Identify the one answer where every attempt to make...; Verify Impossibility. Before confirming, double-check that the answer genuinely contradicts the stimulus...; The "Could Be True" Elimination Technique
- `18-3` Drill: Conditional Breakers: Conditional Breakers; How Conditional Rules Break; Identify the sufficient condition (P); Identify the necessary condition (Q); The contradiction is P and not-Q; Drill: Conditional Breakers (PT-103-S-1-Q-13); Instructions: Read the stimulus and commit to an answer before scrolling down...; The Problem
- `18-4` Drill: Quantifier Clashes: Quantifier Clashes; The Quantifier Hierarchy; "All X are Y" is contradicted by "Some X are not Y."...; "No X are Y" is contradicted by "Some X are Y." Again,...; "All X are Y" is NOT contradicted by "Some X are Y."...; Drill: Quantifier Clashes (PT-113-S-3-Q-8); Instructions: Read the stimulus and commit to an answer before scrolling down...; The Problem
- `18-5` Drill: Exclusive Boundaries: Exclusive Boundaries; Building the Logical Map; Step 1; Step 2; Step 3; Drill: Exclusive Boundaries (PT-102-S-4-Q-15); Instructions: Read the stimulus and commit to an answer before scrolling down...; The Problem
- `18-6` Drill: Numerical Impossibility: Drill: Numerical Impossibility; The Core Principle: Why Numbers Create Impossibility; Types of Numerical Constraints; Overlapping Majorities; Fixed Totals; Exhaustive Partitions; Rate-Based Constraints; Practice Problem
- `18-7` Advanced: Complex Contradictions: Advanced: Complex Contradictions; The Three Difficulty Factors; Factor 1: Multi-Step Deductions; Factor 2: Embedded Distractors; Factor 3: Conditional Reversals and Contrapositives; Complex Contradiction Drill; The Problem; Full Analysis
- `18-8` Reference Guide: Reference Guide: Must Be False; 1. The 4-Step Method; The 4-Step Method; Check the Facts and Find the Rules; Combine Rules and Prephrase a Contradiction; Scan Answers for a Conflict; Eliminate Incorrect Answers and Traps; 2. MBF Contradiction Types

## Unit 6: Resolution

### `20 (route 20, src 19)` Paradox/Explain

Find the new fact that clearly resolves two clashing statements, not one that merely helps a little.

- `19-1` Introduction: Paradox/Explain; Recognizing the Question Stem; "most helps to explain"; "most helps to resolve the apparent discrepancy"; "most helps to reconcile"; Paradox vs. Strengthen; The Two-Fact Structure; Naive Assumption vs. Phenomenon-Hypothesis
- `19-2` Step-by-Step: Paradox/Explain: Step-by-Step: Paradox/Explain; The 5-Step Method; Identify Both Facts — Read the stimulus and isolate Fact 1 (the...; State the Naive Assumption — Ask; Define the Phenomenon-Hypothesis — Ask; Prephrase a Bridge — Before looking at the choices, predict the KIND...; Apply the Clear Resolution Test — Test each choice against one question; The Clear Resolution Standard
- `19-3` Drill: Numbers vs. Percentages: Numbers vs. Percentages Paradox; How It Works; Percentage up, number down; Percentage down, number up; Subgroup vs; Recognition Cues; "the percentage increased"; "the number increased"
- `19-4` Drill: Selection Bias: Drill: Selection Bias (PT-103-S-1-Q-20); Instructions: Read the stimulus and commit to an answer before scrolling down...; The Problem; Analysis & Explanation; Step 1: Deconstruction; Fact 1; Fact 2; Naive Assumption
- `19-5` Drill: Causal Mechanisms: Drill: Causal Mechanisms (PT-122-S-4-Q-11); Instructions: Read the stimulus and commit to an answer before scrolling down...; The Problem; Analysis & Explanation; Step 1: Deconstruction; Fact 1 (The Success); Fact 2 (The Paradoxical Recommendation); Naive Assumption
- `19-6` Advanced: Hardest Paradox Questions: Advanced: Hardest Paradox Questions; Three Difficulty Factors; 1. Linguistic Camouflage; 2. Systemic Complexity; 3. Inverted Question Format; Naive Assumption vs. Phenomenon-Hypothesis on Hard Questions; Naive Assumption; Phenomenon-Hypothesis
- `19-7` Drill: The Hidden Distinction: Drill: The Hidden Distinction; Analysis & Explanation; Step 1: Deconstruction; Fact 1; Fact 2; Naive Assumption; The Bridge; Step 2: Abstraction
- `19-8` Drill: The Counterintuitive Causal Web: Drill: The Counterintuitive Causal Web; Analysis & Explanation; Step 1: Deconstruction; Percentage-Profit Contract; Fixed-Profit Contract; Naive Assumption; The Paradox; Step 2: Abstraction
- `19-9` Drill: Flawed Logic in EXCEPT Questions: Drill: Explain EXCEPT; Systematic EXCEPT Approach; Identify the two conflicting facts and state the paradox in your own...; For each answer choice, ask; If yes, the choice resolves the paradox—eliminate it. If no, the choice...; Double-check; Analysis & Explanation; Step 1: Deconstruction
- `19-10` Reference Guide: Paradox/Explain — Reference Guide; 1. The 5-Step Method; The 5-Step Method; Identify the Facts; Name the Naive Assumption; Define the Phenomenon-Hypothesis; Prephrase a Bridge; Match the Answer Using the Clear Resolution Standard

## Unit 7: Conflict

### `21 (route 21, src 20)` Agree/Disagree (Point at Issue)

Compare each speaker's explicit and implicit commitments, then identify the exact proposition they oppose or share.

- `20-1` Introduction: Agree/Disagree (Point at Issue); Recognizing Question Stems; "committed to disagreeing about whether..."; "most strongly supports the claim that X and Y disagree about..."; "provides the most support for the claim that they agree..."; Point of Disagreement vs. Point of Agreement; Explicit vs. Implicit Commitments; The Overlap Test
- `20-2` Step-by-Step: Agree/Disagree (Point at Issue): Step-by-Step: Agree/Disagree (Point at Issue); Step 1: Map Each Speaker's Position; Conclusion -- What is the speaker's main claim?; Premises -- What evidence or reasoning supports it?; Concessions -- Does the speaker grant any of the other speaker's points?; Step 2: Build the Commitment Ladder; Explicit statement or rejection; Necessary implication
- `20-3` Drill: Disagreement (Definitional Rule): Definitional Rule Disagreement; Practice Question; Illustrative Point at Issue; Full Analysis; Step 1: Map Each Speaker's Position; Ilana; Gustav; Step 2: Identify the Core Conflict
- `20-4` Drill: Disagreement (Explanatory Cause): Analysis & Explanation; Step 1: Deconstruction; Powell; Freeman; Step 2: Abstraction; Motto; Blueprint; Step 3: Evaluation
- `20-5` Drill: Point of Agreement (Shared Assumption): Analysis & Explanation; Step 1: Deconstruction; Denise; Reshmi; Step 2: Abstraction; Motto; Blueprint; Step 3: Evaluation
- `20-6` Advanced: Hardest Agree/Disagree Questions: Advanced: Hardest Agree/Disagree Questions; Three Difficulty Factors; Factor 1: Referential Ambiguity and Indirect Stance; The Strategic Insight; Indirect stance test; Recognition cue; Factor 2: The Clash of Criteria; How to Apply This Strategy
- `20-7` Drill: Disagreement (Clash of Criteria): Full Analysis; Step 1: Deconstruction; Monica; Hector; Step 2: Abstraction; Motto; Blueprint; Recognition Cue
- `20-8` Drill: Disagreement (Definitional Clash): Full Analysis; Step 1: Deconstruction; Mario; Lucy; Step 2: Abstraction; Motto; Blueprint; Recognition Cue
- `20-9` Drill: Point of Agreement (Shared Diagnosis): Full Analysis; Step 1: Deconstruction; Marc; Robert; Step 2: Abstraction; Motto; Blueprint; Recognition Cue
- `20-10` Reference Guide: Agree/Disagree (Point at Issue) — Reference Guide; 1. The 5-Step Method; The 5-Step Method; Map Positions; Run the Commitment Ladder; Identify Claims; Apply the Overlap Test; Verify Commitment

## Unit 8: Conditional Reasoning

### `22 (route 22, src 55)` Conditional Reasoning

This module strengthens the essential LSAT reasoning skills: translating complex statements into diagrams, deriving sound conclusions, and recognizing flawed arguments.

- `55-intro` Introduction: Conditional Reasoning; What Is Conditional Reasoning?; Question Types That Rely on Conditional Logic; Sufficient Assumption (SA); Necessary Assumption (NA); Flaw; Parallel Reasoning; Must Be True (MBT)
- `55-1` Lesson 1: Foundations of the Material Conditional: Lesson 1: The Foundations of the Material Conditional; Objective: Master the basic conditional relationship and distinguish between Sufficient and Necessary...; 1.1 The Conditional Statement (A → B); Core Concept; Sufficient; Necessary; The Arrow; The "Paris → France" Example
- `55-2` Lesson 2: The Contrapositive: Lesson 2: Using the Contrapositive to Unlock New Inferences; Objective: To learn how to form and use the contrapositive, which is...; 2.1 What the Contrapositive Is (and Why It Matters); Original Statement; Contrapositive; Logical Status; Original; Mistaken Reversal
- `55-3` Lesson 3: Two Classic Conditional Reasoning Errors: Lesson 3: Two Classic Conditional Reasoning Errors; Objective: To identify and understand the two most common errors in conditional...; Original; Contrapositive; Mistaken Reversal; Mistaken Negation; 3.1 The Mistaken Reversal (Affirming the Consequent); The Invalid Structure
- `55-4` Lesson 4: Quantifiers - All, Most, Some, and Few: Lesson 4: Quantifiers — All, Most, Some, and Few; Objective: The goal of this lesson is to help you accurately diagram...; 4.1 The Quantifier Hierarchy & Diagramming; All; Most; Some; 4.2 Special Quantifiers and Boundary Logic; Many
- `55-5` Lesson 5: Complex Structures & Compound Logic: Lesson 5: Complex Structures & Compound Logic; Objective: To learn how to map out and solve the hardest logical...; 5.1 Logical Chains; The Structure: If A - B and B - C, you can...; The Logic: The logical force transfers through the common term (B).; Domain-Reduction Routine; Name the domain. Is this a rule about students, contracts, elected officials,...; Erase decoration. Remove adjectives and side comments that do not affect the...
- `55-6` Lesson 6: Real-World Nuance & Probabilistic Logic: Lesson 6: Real-World Nuance & Probabilistic Logic; Objective: To accurately interpret and make inferences from conditional statements that use...; 6.1 Probabilistic Indicators vs. Absolute Indicators; Hard Language (Absolute); Soft Language (Probabilistic); Note: One of the most frequent LSAT traps involves conflating these distinct...; 6.2 The Modal Fallacy: Confusing Frequency with Necessity; The Flaw: This error occurs when an argument treats a statement about...
- `55-summary` Reference: Concise Guide to Conditional Logic: Concise Guide: Conditional Logic; Part 1: Foundations; Conditional; Contrapositive; Bi-Conditional; Translation: Sufficient Indicators (The Trigger); All / Every / Each; If
- `55-ref` Reference Guide: Conditional Reasoning — Complete Reference; Most Reversal; All before Most; Some-to-Subgroup transfer; Section 1: Conditional Trigger Words; Sufficient Condition Triggers; If; When / Whenever

## Unit 9: LSAT Math

### `23 (route 23, src 59)` LSAT Math

A comprehensive framework for mastering quantitative questions within the LSAT Logical Reasoning section. Learn to identify and dismantle the most common logical fallacies involving numbers, percentages, and statistics.

- `59-1` Introduction: LSAT Math; Lesson 1: The Foundational Toolkit; Lesson Objective: Introduce the ten fundamental quantitative terms that form the bedrock...; 1. Absolute Number; 2. Rate / Likelihood; 3. Total / Aggregate; 4. Percentage / Proportion; 5. Average (Mean)
- `59-2` Lesson 2: The Part vs. The Whole: Lesson 2: The Part vs. The Whole; Lesson Objective: Identify and deconstruct the LSAT's most common quantitative traps: presenting...; The Absolute Number vs. Rate Fallacy; How It Works; The Core Trap; Classic Example; What's Missing; Spotting the Swap
- `59-3` Lesson 3: The Averages Fallacy: Lesson 3: The Averages Fallacy; Lesson Objective: Understand how averages mislead—through Simpson's Paradox, weighted-average errors, and mean-vs-median...; Simpson's Paradox; Mild cases; Severe cases; Combined; Weighted Averages; Mean vs. Median
- `59-4` Lesson 4: Invalid Mathematical Reasoning: Lesson 4: Invalid Mathematical Reasoning; Lesson Objective: Identify the four most common math errors the LSAT embeds...; 1. Absolute vs. Relative Change; 2. Double-Counting (Overlapping Sets); 3. Base-Rate Neglect; 4. Percentage of a Percentage; Practice Question; Full Analysis
- `59-5` Lesson 5: Flawed Predictions - The Gambler's Fallacy: Lesson 5: Flawed Predictions; Lesson Objective: To identify arguments that incorrectly use past outcomes to predict...; The Gambler's Fallacy; The Core Trap; Why It Feels Right; Why It's Wrong; Everyday Example; The Hot Hand Fallacy
- `59-6` Strategy: Test Day Checklist: Mastering LSAT Math; Combining Quantitative Flaws; Why the LSAT combines flaws: A single-flaw argument is relatively easy to...; Common Combination 1; Common Combination 2; Common Combination 3; Common Combination 4; Spotting Quantitative Arguments
- `59-7` Reference Guide: LSAT Math — Comprehensive Reference Guide; Master Flaw Types Table; Numbers vs. Percentages; Part vs. Whole; Averages / Simpson's Paradox; Base Rate Neglect; Gambler's Fallacy; Signal Words Table

## Unit 8: Summarizing the Passage

### `24 (route 24, src 21)` Main Idea

Identify the central idea of a passage, synthesizing the author's primary conclusion and scope.

- `21-1` Introduction: Introduction: Main Idea; A problem and the author's proposed solution.; A common theory and the author's alteration of it.; An explanation for a puzzling phenomenon.; A comparison of two or more things to arrive at a judgment.; LR to RC: Same Tools, Different Posture; Use the same tools; Adopt a different posture
- `21-2` Step-by-Step: Step-by-Step: Main Idea; The Shared RC Reading Loop; Build a low-resolution paragraph summary after each paragraph.; Track different perspectives and who owns each claim.; Mark the author's opinion whenever the passage leans, criticizes, or endorses.; Make a light next-paragraph prediction after major pivots.; Form an early passage-style hypothesis; Read for the Overall Argument and Predict the Main Idea
- `21-3` Pattern Recognition: Pattern Recognition: Clues in the Passage and Answers; Pattern 1: The "Problem / Solution / Critique"; Pattern 2: The "Correcting the Record" or "Debate"; Pattern 3: The "Balanced Summary"; Pattern 4: The "Single Position + Support Density" Passage; Pattern 5: The "Phenomenon - Explanation(s)" Passage
- `21-4` Trap Answer Types: Trap Answer Types; 1. Inaccurate Information; 2. Outside the Scope or Too Extreme; 3. Too Narrow; 4. Opposing Viewpoint

### `37 (route 37, src 34)` Passage Function

Identify the author's primary reason for writing the text—their overarching intent and central task.

- `34-1` Introduction: Germaine's Guide to RC Passage Function Questions; What's this question asking?; Arguing for a specific change; Explaining a phenomenon; Evaluating a theory; Reconciling viewpoints; Spotlight Passage Purpose; Stem Identification: How to Spot a Passage Function Question
- `34-2` Step-by-Step: Step-by-Step: Passage Function; Step 1: Synthesize the Passage's Main Point and Structure; What is the author's main conclusion? What is the one thing they...; How do they build their argument? Do they critique a view, explain...; What is the author's overall tone? (e.g., critical, explanatory, persuasive); Debate or critique passage; Single-position passage; Phenomenon-hypothesis passage

### `39 (route 39, src 36)` Structure

Identify the overall logical organization of the passage, mapping the flow of the argument.

- `36-1` Introduction: Germaine's Guide to RC Structure Questions; What are Structure questions actually asking you to see?; Track what each paragraph is doing, not just what it says.; Notice shifts in function; Translate the passage into abstract verbs before you ever look at the...; Early Style Hypothesis; The Main Structure Tasks in the Pool; Whole-Passage Blueprint
- `36-2` Step-by-Step: Step-by-Step: Structure; The Structure Workflow; After reading, assign each paragraph a job label rather than a topic...; Notice the transition words and pivots that connect those jobs.; Compress the passage into a short blueprint using abstract verbs.; Match the answer choices against that blueprint, checking both verb precision and...; If the question targets one paragraph or two related paragraphs, narrow your...; Step 1: Give Each Paragraph a Functional Label

### `40 (route 40, src 37)` Title

Select the phrase that best summarizes the passage or the relationship between two passages.

- `37-1` Introduction: Germaine's Guide to RC Title Questions; What's this question asking?; Standard Title (for a single passage); Analogous Titles (for comparative passages); Stem Identification: How to Spot a Title Question; Standard Title (Single Passage); Paired Titles (Comparative Passages); Analogous Relationship
- `37-2` Step-by-Step: Step-by-Step: Title; For Standard Title Questions (Single Passage); Too Narrow; Too Broad; Wrong Focus; For Paired or Analogous Title Questions (Comparative Passages); Comparative Title Workflow; For Paired Titles

## Unit 11: Extending the Reasoning

### `25 (route 25, src 22)` Inference

Identify a statement that is very likely to be true based on the information provided in the passage, using strict evidential backing.

- `22-1` Introduction: Introduction: Inference; Stem Identification: How to Spot an Inference Question; Direct Question Phrasing; Classic Inference Phrasing; Evidence & Support Phrasing; Negative Inference Phrasing; Overarching Takeaway; The Importance of Inference Questions
- `22-2` Step-by-Step: Step-by-Step: Inference; Run Two Stem Checks First; Scan for stated Answer Choices First; Look for Direct Matches; Eliminate Obvious Falsities; Locate & Clarify Uncertain Choices; Validate Indirect Inferences; Step 1: Scan for stated Answer Choices First
- `22-3` Pattern Recognition: Pattern Recognition: Correct Answers; The "Two-Part Proof" (Combining Facts); The "Necessarily Consequenced"; Cautious Wording Matches Cautious Evidence; Tactics, Do's and Don'ts; Evidence & Proof; Standard of Proof; Precision & Wording
- `22-4` Trap Answer Types: The Trap Library: Common Distractors; The "Too Extreme" Trap; The "Out of Scope" Trap; The "Reversed Relationship" Trap; The "Misattributed View" Trap; The "One Word Off" Trap; Speed and Success Metrics; Success Metrics: Gauging Mastery

### `26 (route 26, src 23)` Analogy

Identify a scenario in the answer choices that mirrors the logic or structure of a situation in the passage.

- `23-1` Introduction: Germaine's Guide to RC Analogy Questions; What's this question asking?; Identify the original relationship; State the relationship abstractly; Test the choices; Stem Identification: How to Spot an Analogy Question; Direct Comparison Phrasing; Relational Parallel Phrasing
- `23-2` Step-by-Step: Step-by-Step: Analogy; Step 1: Isolate the Original Relationship & State It Abstractly; Step 2: Test Each Answer Choice Against Your Abstract Rule; If You Get Stuck Between Two Choices...; Tie-Breaker 1: The Reverse Test; Tie-Breaker 2: Focus on the Difference

### `27 (route 27, src 24)` Application

Apply a rule, principle, or theory from the passage to a new, hypothetical situation.

- `24-1` Introduction: Germaine's Guide to RC Application Questions; What's this question actually testing?; Principle / standard; Exemplify / instantiate; Hypothetical result; Policy / legal application; What counts as an Application question in the live pool?; Applying a standard or definition
- `24-2` Step-by-Step: Step-by-Step: Application; Step 1: Classify the Task Before You Read the Choices; Am I choosing the scenario that fits a rule or standard?; Am I choosing the example that best embodies a conception or definition?; Am I projecting what would follow if the passage's theory were applied...; Am I finding the choice that is least compatible with the passage's...; Step 2: Rebuild the Passage Rule as a Working Checklist; Necessary condition

### `31 (route 31, src 28)` Complete the Passage

Select the sentence that would most logically conclude the passage or a specific paragraph.

- `28-1` Introduction: Germaine's Guide to RC Complete the Passage Questions; What's this question asking?; Synthesize the main point of the final paragraph.; Reinforce the overall argument of the entire passage.; Provide a final, logical implication of the reasoning just presented.; Avoid introducing new, unsupported topics or contradicting earlier points.; High-Value Continuation Patterns; Stem Identification: How to Spot a Complete the Passage Question
- `28-2` Step-by-Step: Step-by-Step: Complete the Passage; Step 1: Identify the Role of the Final Paragraph; Providing a final piece of evidence?; Proposing a solution to a problem raised earlier?; Summarizing the main argument?; Discussing the implications or future of the topic?; Step 2: Predict the Logical Next Thought; Phenomenon-hypothesis evaluation

### `33 (route 33, src 30)` Passage Principle

Identify the underlying rule or generalization that supports an argument, action, or viewpoint within the text.

- `30-1` Introduction: Germaine's Guide to RC Passage Principle Questions; What's this question asking?; Identify the specific scenario; Isolate the underlying logic; Generalize the finding; Stem Identification: How to Spot a Passage Principle Question; Direct Principle Phrasing; Generalization & Criterion Phrasing
- `30-2` Step-by-Step: Step-by-Step: Passage Principle; Step 1: Isolate the Specific Argument or Action; Step 2: Formulate the Underlying Rule; Example (cont.); Step 3: Test Each Answer Choice Against Your Rule; Too Specific; Too Broad; Mismatch
- `30-3` Pattern Recognition: Pattern Recognition; Pattern 1: The Standard of Evaluation; Pattern 2: The Justification for Action; Pattern 3: The Underlying Logical Rule

### `41 (route 41, src 38)` Weaken-Strengthen

Evaluate how a new piece of information would affect an argument or hypothesis from the passage.

- `38-1` Introduction: Germaine's Guide to RC Weaken-Strengthen Questions; What are these questions really asking?; Find the exact target claim; Separate the core reasoning from the topic; Ask what kind of new information would matter most; The Main Weaken-Strengthen Jobs in the Real Pool; Attack or Support an Interpretation; Attack or Support a Practical Claim
- `38-2` Step-by-Step: Step-by-Step: Weaken-Strengthen; Isolate the exact claim the stem wants you to affect; Classify how that claim is being supported; Predict the kind of new fact that would matter most; Judge each answer by direct impact, not by topic overlap; Break ties by scope, direction, and centrality; Step 1: Isolate the exact claim the stem wants you to affect; What is the specific conclusion or interpretation being tested?

## Unit 9: Analyzing the Components

### `28 (route 28, src 25)` Approach

Describe the author's argumentative strategy or the overall structure of the passage.

- `25-1` Introduction: Germaine's Guide to RC Approach Questions; What's this question asking?; Presenting a theory and then providing evidence to support it.; Introducing a problem and then evaluating several potential solutions.; Contrasting two different perspectives on a single topic.; Refuting a commonly held belief by pointing out a flaw in its...; Shared RC Method Reminder; Stem Identification: How to Spot an Approach Question
- `25-2` Step-by-Step: Step-by-Step: Approach; Step 1: Create a Passage Blueprint; Example Blueprint; Para 1; Para 2; Para 3; Step 1A: Form a Light Style Hypothesis; Tracks competing views and author alignment

### `34 (route 34, src 31)` Phrase Meaning

Identify the specific definition of a word or phrase based on its immediate context.

- `31-1` Introduction: Germaine's Guide to RC Phrase Meaning Questions; What's this question asking?; Examining the sentences immediately before and after the phrase for context clues.; Substituting the answer choices into the original sentence to see which one...; Considering the author's tone and the specific subject matter to ensure the...; Identifying instances where the author uses a common word in a technical,...; High-Value Context Clues; Stem Identification: How to Spot a Phrase Meaning Question
- `31-2` Step-by-Step: Step-by-Step: Phrase Meaning; Step 1: Locate the Phrase and Read the Surrounding Context; Step 2: Predict the Meaning Based on its Role; Contrast clues; Restatement clues; Example clues; Step 3: Test the Answer Choices by Substitution; Eliminate Mismatches

### `35 (route 35, src 32)` Phrase Function

Determine the rhetorical purpose of a specific word, phrase, or example within the author's argument.

- `32-1` Introduction: Germaine's Guide to RC Phrase Function Questions; What's this question asking?; Identify the rhetorical role; Look at the surrounding context; Connect to the main argument; Focus on the intent; Content vs. Function; Stem Identification: How to Spot a Phrase Function Question
- `32-2` Step-by-Step: Step-by-Step: Phrase Function; Step 1: Locate the Phrase and Identify its Local Context; Step 2: Determine the Phrase's Relationship to the Local Point; Providing Evidence for a claim just made?; Giving an Example to illustrate a concept?; Acknowledging a Counterargument or concession?; Offering a Definition or clarification?; Function Test

### `36 (route 36, src 33)` Paragraph Function

Identify the specific role a paragraph plays within the passage's overall structure.

- `33-1` Introduction: Germaine's Guide to RC Paragraph Function Questions; What's this question asking?; Introducing a problem or phenomenon; Providing evidence or examples; Presenting an alternative view; Evaluating a proposal; Style-Specific Paragraph Jobs; Stem Identification: How to Spot a Paragraph Function Question
- `33-2` Step-by-Step: Step-by-Step: Paragraph Function; Step 1: Read and Summarize the Target Paragraph's Content; Step 2: Analyze the Paragraph's Relationship to its Neighbors; How does it relate to the paragraph before it? Does it provide...; How does it set up the paragraph after it? Does it pose...; Function Standard; Debate / critique; Single position

## Unit 10: Identifying the Perspectives

### `29 (route 29, src 26)` Author Attitude

Identify the author's opinion, tone, or perspective regarding a specific subject.

- `26-1` Introduction: Germaine's Guide to RC Author Attitude Questions; What's this question asking?; Specific word choice; Degree of qualification; Presentation of evidence; Rhetorical structure; Stem Identification: How to Spot an Author Attitude Question; Direct Inquiry
- `26-2` Step-by-Step: Step-by-Step: Author Attitude; Step 1: Locate the Specific Topic in the Passage; Two-part stem check; Narrow the issue before you judge tone; Step 2: Hunt for "Charged" Language; Adjectives; Adverbs; Verbs

### `30 (route 30, src 27)` Author Viewpoint

Determine which statement the author would most likely agree with or support.

- `27-1` Introduction: Germaine's Guide to RC Author Viewpoint Questions; What's this question asking?; The central argument; Tone and degree; Logical implications; Evaluative language; Debate Passages: Separate the Voices Before You Infer; Stem Identification: How to Spot an Author Viewpoint Question
- `27-2` Step-by-Step: Step-by-Step: Author Viewpoint; Start With The Stem's Exact Issue; Step 1: Synthesize the Author's Core Argument and Tone; What is their central claim or thesis?; What is their attitude toward the main subject (e.g., critical, supportive, objective)?; What are the main reasons they provide to support their claims?; Author; Competing view

### `32 (route 32, src 29)` Third-Party Viewpoint

Identify the specific belief, argument, or perspective of a person or group mentioned in the passage who is not the author.

- `29-1` Introduction: Germaine's Guide to Third-Party Viewpoint Questions; What's this question asking?; Identify the target voice exactly; Collect only attributable claims; Separate viewpoint from commentary; Track the exact force of the claim; Stem Identification: The Main Families in the Real Pool; Direct View Ascription
- `29-2` Step-by-Step: Step-by-Step: Third-Party Viewpoint; Identify the exact target voice; Build a speaker ledger from the passage; Separate attributed claims from author commentary; Match the answer to the target voice and force; Use special checks for agreement and comparative questions; Step 1: Identify the Exact Target Voice; Circle the label in your head

### `38 (route 38, src 35)` Relationship

Define the logical connection between two passages, paragraphs, or specific claims.

- `35-1` Introduction: Germaine's Guide to RC Relationship Questions; What's this question asking?; Points of agreement or disagreement; General theory vs; Critique and counterpoint; Expansion of scope; Stem Identification: How to Spot a Relationship Question; Direct Inquiry
- `35-2` Step-by-Step: Step-by-Step: Relationship; Step 1: Summarize the Main Point of Each Component; Example (for comparative passages); Passage A's Main Point; Passage B's Main Point; Step 2: Define the Interaction Between the Two Components; Do they agree or disagree?; Does one provide a general theory, while the other gives a specific...

## Unit 12: Sample Passages

### `42 (route 42, src 39)` Practice Passage 1: Obasan

A complete breakdown of a literary criticism passage, analyzing structure, symbolism, and question strategies.

- `39-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: The Thesis Statement; The Novel's Form (Structure); The Use of Symbols; Paragraph 2: Heroism Through Form (The Rites of Passage); Separation; Alienation
- `39-2` Question 8: Read Passage; Question 8 Breakdown; (A) While telling a story of familial disruption, Obasan uses structure and...; (B) By means of its structure and symbolism, Obasan mounts a harsh...; (C) Although intended primarily as social criticism, given its structure Obasan can...; (D) With its three-part structure that parallels rites of passage, Obasan manages...; (E) Although intended primarily as a story of heroic transformation, Obasan can...
- `39-3` Question 10: Read Passage; Question 10 Breakdown; (A) Two points are made about a novel, the first supported with...; (B) Two points are made about a novel, the first supported with...; (C) Two points are made about a novel, the first reasserted without...; (D) Two points are made about a novel, the first supported with...; Thesis Statement (Paragraph 1); Support for Point 1 (Paragraph 2)
- `39-4` Question 11: Read Passage; Question 11 Breakdown; (A) reconciliation with her past [89.0%] (Correct); (B) careful deployment of structure and symbol [5.0%]; (C) relationship with her surrogate family [3.0%]; (D) renewal of her religious beliefs [0.0%]; It's called "reintegration into society."; The passage says Naomi develops toward a "final integration with the larger...
- `39-5` Question 12: Read Passage; Question 12 Breakdown; (A) alienation, dislocation, integration [1.0%]; (B) separation, alienation, reintegration [97.0%] (Correct); (C) integration, alienation, disintegration [1.0%]; (D) dislocation, reconciliation, reintegration [1.0%]; (A) alienation, dislocation, integration; (B) separation, alienation, reintegration
- `39-6` Question 13: Read Passage; Question 13 Breakdown; (A) her reunion with her parents [0.0%]; (B) the exile of her parents [0.0%]; (C) her critique of the majority society [1.0%]; (D) her separation from her aunt and uncle [0.0%]; (A) her reunion with her parents; (B) the exile of her parents
- `39-7` Question 14: Read Passage; Question 14 Breakdown; (A) It discouraged its citizens from seeking out their heritage; (B) It endeavored to thwart its citizens’ attempts at heroic transformation; (C) It violated its own supposed religious ethics by doing so; (D) It prohibited its citizens from participating in rites of passage; (A) It discouraged its citizens from seeking out their heritage.; (B) It endeavored to thwart its citizens’ attempts at heroic transformation.
- `39-8` Question 15: Read Passage; Question 15 Breakdown; (A) her willingness to make political statements [3.0%]; (B) her imaginative development of characters [3.0%]; (C) her subtle use of literary techniques [90.0%] (Correct); (D) her knowledge of Christian rituals and symbols [3.0%]; (A) her willingness to make political statements; (B) her imaginative development of characters

### `43 (route 43, src 40)` Practice Passage 2: Bankruptcy Laws

A complete breakdown of a persuasive essay on bankruptcy law, analyzing argument structure, author attitude, and weaken strategies.

- `40-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: The Thesis and the Central Conflict; Paragraph 2: The Old System and Why It Failed; Paragraph 3: The Modern System and Why It Works; Problem-Analysis Anchor; Summary
- `40-2` Question 6: Read Passage; Question Breakdown: PT-128-S-1-P-2-Q-6; (A) The modern trend in bankruptcy law away from punishment and toward...; (B) Bankruptcy laws have evolved in order to meet the needs of...; (C) Modern bankruptcy laws are justified on humanitarian grounds, even though the...; (D) Punishment for debt no longer holds deterrent value for debtors and...; (E) Greater economic interdependence has triggered the formation of bankruptcy laws that...
- `40-3` Question 7: Read Passage; Question Breakdown: PT-128-S-1-P-2-Q-7; (A) are often surprised to receive compensation in bankruptcy courts [3.0%]; (B) have unintentionally become the chief beneficiaries of bankruptcy laws [7.0%]; (C) were a consideration, though not a primary one, in the formulation...; (D) are better served than is immediately apparent by laws designed in...; (A) are often surprised to receive compensation in bankruptcy courts; (B) have unintentionally become the chief beneficiaries of bankruptcy laws
- `40-4` Question 8: Read Passage; Question Breakdown: PT-128-S-1-P-2-Q-8; (A) approval of changes that have been made to inefficient laws [93.0%]...; (B) confidence that further changes to today’s laws will be unnecessary [6.0%]; (C) neutrality toward laws that, while helpful to many, remain open to...; (D) skepticism regarding the possibility of solutions to the problem of insolvency...; The old system is described with terms like "harsh punishment" and its...; The modern system is framed as a solution that "address[es] the shortcomings...
- `40-5` Question 9: Read Passage; Question Breakdown: PT-128-S-1-P-2-Q-9; (A) offer a critique of both past and present approaches to insolvency...; (B) compare the practices of bankruptcy courts of the past with those...; (C) criticize those who would change the bankruptcy laws of today [1.0%]; (D) reexamine today’s bankruptcy laws in an effort to point to further...; (A) offer a critique of both past and present approaches to insolvency; (C) criticize those who would change the bankruptcy laws of today
- `40-6` Question 10: Read Passage; Question Breakdown: PT-128-S-1-P-2-Q-10; (A) Debt that has become so great that repayment is impossible is...; (B) Because insolvency ultimately harms the entire economy, the law should provide...; (C) The insolvency of companies or individuals is tolerable if the debt...; (D) The dissolution of a large enterprise is costly to the economy...; Excessive debt resulted from a debtor's "unwillingness to meet obligations or from...; Insolvency was a violation of a "sacrosanct social contract."
- `40-7` Question 11: Read Passage; Question Breakdown: PT-128-S-1-P-2-Q-11; (A) Only when today’s bankruptcy laws are ultimately seen as inadequate on...; (B) Punishment is no longer the primary goal of bankruptcy law, even...; (C) Since leniency serves the public interest in bankruptcy law, it is...; (D) Future bankruptcy legislation could include punitive measures, but only if such...; The primary goal of modern bankruptcy law has shifted to serving the...; However, some "strictures" of modern bankruptcy (like public records) "may still serve...
- `40-8` Question 12: Read Passage; Question Breakdown: PT-128-S-1-P-2-Q-12; (A) Bankruptcy laws always result from gradual changes in philosophy followed by...; (B) Changes in bankruptcy law were initiated by the courts and only...; (C) The adjustment of bankruptcy laws away from a punitive focus was...; (D) Bankruptcy laws underwent change because the traditional approach proved inadequate and...; The Problem (Paragraph 2); The Solution (Paragraph 3)
- `40-9` Question 13: Read Passage; Question Breakdown: PT-128-S-1-P-2-Q-13; (A) Extensive study of the economic and legal history of many countries...; (B) The bankruptcy of a certain large company has had a significant...; (C) Once imprisonment was no longer a consequence of insolvency, bankruptcy filings...; (D) The court-ordered liquidation of a large and insolvent company’s assets threw...; Author's Equation; Weakening Equation

### `44 (route 44, src 41)` Practice Passage 3: Cultural Identity

A breakdown of a humanities passage exploring how cultural identities are constructed, featuring analysis of main idea, inference, and author attitude.

- `41-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: The Problem of Cultural Definitions and Present Bias; Paragraph 2: "Tradition" as a Tool for Power; Paragraph 3: Native Cultures Creating Idealized Pasts; Paragraph 4: The Paradox of Sovereignty and Interconnectedness; Summary
- `41-2` Question 14: Read Passage; Question Breakdown: PT-128-S-1-P-3-Q-14; (A) Either by ignoring a native culture’s own self-understanding or by substituting...; (B) Attempts to reconstruct a native, precolonial culture by members of decolonized...; (C) In attempting to impose a monolithic culture on the peoples they...; (D) While most colonized societies have regained their independence, they retain trappings...; (E) Despite nationalistic creation of images of cultures as unified and monolithic,...
- `41-3` Question 15: Read Passage; Question Breakdown: PT-128-S-1-P-3-Q-15; (A) What kinds of influences affect the national identities people construct from...; (B) Why did nineteenth-century European commentators ignore some discussion of Greek culture...; (C) In what ways did African cultural influence affect the culture of...; (D) Why was Queen Victoria of England declared empress of India in...; (E) What is one reason why revolutionary poets speak and write as...
- `41-4` Question 16: Read Passage; Question Breakdown: PT-128-S-1-P-3-Q-16; (A) overall agreement with their conclusion about influences on cultural identity [92.0%]...; (B) reservation over their preoccupation with colonialism [1.0%]; (C) skepticism toward the relevance of the examples they cite [2.0%]; (D) concern that they fail to explain ancient Greek culture [2.0%]; (A) overall agreement with their conclusion about influences on cultural identity; (B) reservation over their preoccupation with colonialism
- `41-5` Question 17: Read Passage; Question Breakdown: PT-128-S-1-P-3-Q-17; (A) had been revived after centuries of neglect [3.0%]; (B) were legitimized by their historic use in the native culture [9.0%]; (C) exemplified the dominance of the imperial culture [8.0%]; (D) conferred spurious historical legitimacy upon colonial authority [76.0%] (Correct); (A) had been revived after centuries of neglect; (B) were legitimized by their historic use in the native culture
- `41-6` Question 18: Read Passage; Question Breakdown: PT-128-S-1-P-3-Q-18; (A) Colonized nations should not attempt to regain their historical cultures; (B) Imperial cultures should incorporate the traditions of their colonies; (C) The cultural traditions of a nation should remain untainted by outside...; (D) A country’s cultural identity partakes of many social and cultural domains; (A) Colonized nations should not attempt to regain their historical cultures.; (B) Imperial cultures should incorporate the traditions of their colonies.
- `41-7` Question 19: Read Passage; Question Breakdown: PT-128-S-1-P-3-Q-19; (A) an annual ceremony held by an institution of the colonizing culture...; (B) a religious service of the colonizing culture that has been adapted...; (C) a traditional play that is part of a colonized nation’s original...; (D) a ritual dance, traditionally used to commemorate the union of two...; (E) a traditional village oratory competition in which members of the native...
- `41-8` Question 20: Read Passage; Question Breakdown: PT-128-S-1-P-3-Q-20; (A) Apparent traditions may be products of artifice; (B) National identity generally requires cultural uniformity; (C) Most colonial cultures are by nature artificial and contrived; (D) Historical and cultural experiences may cross national boundaries; (A) Apparent traditions may be products of artifice.; (B) National identity generally requires cultural uniformity.
- `41-9` Question 21: Read Passage; Question Breakdown: PT-128-S-1-P-3-Q-21; (A) argue for the creation of a global culture made up of...; (B) explain how the desire for cultural uniformity supports imperialist attitudes [9.0%]; (C) stress the importance of objectivity in studying the actual sources of...; (D) advance the claim that present concerns motivate the shaping of cultural...; (B) explain how the desire for cultural uniformity supports imperialist attitudes; (E) reveal the imperialist motivations of some nineteenth-century scholarship

### `45 (route 45, src 42)` Practice Passage 4: Woody Allen Films

A breakdown of an art criticism passage about Woody Allen's films, focusing on the recurring theme of narcissistic artists.

- `42-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: The Thesis and the Prime Example; Paragraph 2: Supporting Evidence, Part 1 — Stardust Memories; Paragraph 3: Supporting Evidence, Part 2 — Manhattan; Paragraph 4: The Final Proof — The Inverse Correlation; Summary of the Argument
- `42-2` Question 7: Read Passage; Question Breakdown: PT-128-S-4-P-2-Q-7; (A) The theme of the neurotic and narcissistic nature of artists is,...; (B) Woody Allen’s films suggest, by means of their depictions of artists,...; (C) Deconstructing Harry, like many of Woody Allen’s films, shows that the...; (D) Woody Allen’s career indicates that, like most artists, he uses his...; (E) Woody Allen’s films show that artists are unavoidably narcissistic and neurotic...
- `42-3` Question 8: Read Passage; Question Breakdown: PT-128-S-4-P-2-Q-8; (A) Critics should consider not only an individual film in isolation, but...; (B) People who are not themselves artists should not presume to interpret...; (C) The fate that a character in a movie meets can give...; (D) The writer of a film’s screenplay should be considered only one...; (E) Prior work of a film’s cast members should be taken into...
- `42-4` Question 9: Read Passage; Question Breakdown: PT-128-S-4-P-2-Q-9; (A) present an exception to the general thesis stated in the first...; (B) qualify an assertion made in the first paragraph [11.0%]; (C) provide an illustration that is contrasted to the illustration given in...; (D) provide additional support for a contention made in the second paragraph...; (B) qualify an assertion made in the first paragraph; (D) provide additional support for a contention made in the second paragraph
- `42-5` Question 10: Read Passage; Question Breakdown: PT-128-S-4-P-2-Q-10; (A) offensive [18.0%]; (B) neurotic [18.0%]; (C) stubborn [2.0%]; (D) egocentric [12.0%]; (A) offensive; (B) neurotic
- `42-6` Question 11: Read Passage; Question Breakdown: PT-128-S-4-P-2-Q-11; (A) counter the prevailing critical view of Allen's films [1.0%]; (B) exemplify a primary preoccupation of Allen's works [4.0%]; (C) serve as a contrast to the fate of artistic characters in...; (D) demonstrate that artistic characters have always been important in Allen's films...; (A) counter the prevailing critical view of Allen's films; (B) exemplify a primary preoccupation of Allen's works
- `42-7` Question 12: Read Passage; Question Breakdown: PT-128-S-4-P-2-Q-12; (A) Most people who consider themselves to be artists are merely documenting...; (B) The continuing presence of a topic in an artist's work suggests...; (C) Allen's film career is unique in that he regularly features unhappy,...; (D) An artist must use his or her own experiences as the...; (E) Allen's films accurately reflect real life in depicting inartistic individuals as...

### `46 (route 46, src 43)` Practice Passage 5: Cosmic Justice

A breakdown of a comparative law passage analyzing the concepts of 'cosmic' and 'traditional' justice, with questions on main idea, author viewpoint, and logical structure.

- `43-1` Passage Analysis: Read Passage; Passage Analysis; Passage A: The Argument from Human Limitation; Passage B: The Argument from Flawed Concepts and Bad Consequences; The Head-to-Head: Inability vs. Illegitimacy; Passage A's argument is about inability; Passage B's argument is about illegitimacy and negative consequences; Comparative Workflow Anchor
- `43-2` Question 20: Read Passage; Question Breakdown: PT-128-S-4-P-4-Q-20; (A) “Cosmic Justice Meets Human Limitations” “Fairness as Process versus Cosmic Fairness”...; (B) “Sowell’s Theory of Justice” “The Key to Deterrence” [2.0%]; (C) “Just Deserts” “Fair and Unfair Disadvantages” [0.0%]; (D) “A Critique of Sowell” “Traditional Justice Writ Large” [1.0%]; (A) “Cosmic Justice Meets Human Limitations” / “Fairness as Process versus Cosmic...; (B) “Sowell’s Theory of Justice” / “The Key to Deterrence”
- `43-3` Question 21: Read Passage; Question Breakdown: PT-128-S-4-P-4-Q-21; (A) punishment [7.0%]; (B) trials [88.0%] (Correct); (C) rewards [2.0%]; (D) legal systems [1.0%]; (A) punishment; (B) trials
- `43-4` Question 22: Read Passage; Question Breakdown: PT-128-S-4-P-4-Q-22; (A) abstract [79.0%] (Correct); (B) inflammatory [1.0%]; (C) technical [5.0%]; (D) narrative [10.0%]; (A) abstract; (B) inflammatory
- `43-5` Question 23: Read Passage; Question Breakdown: PT-128-S-4-P-4-Q-23; (A) A local library charges children lower fines for overdue materials and...; (B) In assigning grades, a teacher takes into account not only written...; (C) In assigning employee parking spaces, management takes into account an employee’s...; (D) An employer with a proven history of age discrimination is forced...; (A) A local library charges children lower fines...; (B) In assigning grades, a teacher takes into account... background factors unique...
- `43-6` Question 24: Read Passage; Question Breakdown: PT-128-S-4-P-4-Q-24; (A) fair rules (middle of the first paragraph of passage B) [1.0%]; (B) unjust trial (near the end of the first paragraph of passage...; (C) impartial processes (end of the first paragraph of passage B) [2.0%]; (D) traumatic childhood (middle of the final paragraph of passage B) [95.0%]...; (A) fair rules; (B) unjust trial
- `43-7` Question 25: Read Passage; Question Breakdown: PT-128-S-4-P-4-Q-25; (A) From the perspective of cosmic justice, the murderer cannot be considered...; (B) Once the jury has convicted the murderer, the judge should be...; (C) Recognition of our common human fallibility should lead us to err...; (D) The extent, if any, to which the murderer’s culpability is mitigated...; (B) Once the jury has convicted..., the judge should be permitted substantial...; (E) The murderer’s childhood must be presumed to have been without influence...
- `43-8` Question 26: Read Passage; Question Breakdown: PT-128-S-4-P-4-Q-26; (A) One should refrain from action when one lacks complete information; (B) Whether a punishment is fair matters less than whether it deters...; (C) Although we should aim at perfect justice, we should recognize that...; (D) One should not pass judgment on an action unless one knows...; (A) One should refrain from action when one lacks complete information.; (E) If a goal is known to be impossible, then it should...
- `43-9` Question 27: Read Passage; Question Breakdown: PT-128-S-4-P-4-Q-27; (A) It is sometimes possible for the legal system to take unmerited...; (B) Whether or not cosmic justice is an attainable ideal, human law...; (C) Impartial legal processes are a better means of achieving cosmic justice...; (D) Human law should be concerned with the consequences of human actions,...; (B) ...human law should strive for it...; (E) Human legal systems can in theory achieve cosmic justice...

### `47 (route 47, src 44)` Practice Passage 6: Julia Margaret Cameron

A breakdown of an art criticism passage on Julia Margaret Cameron's photography, exploring the paradox that the work's artistic success stems from its technical failures and amateurish qualities.

- `44-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: The Central Paradox - A Successful Failure; Paragraph 2: The Theory Behind the Paradox - The "Doubleness" of Photography; Paragraph 3: The Final Nuance - The Magic of "Good Amateurism"; Spotlight Anchor; Summary
- `44-2` Question 8: Read Passage; Question Breakdown: PT-141-S-1-P-2-Q-8; (A) The circumstances under which Cameron’s fancy-subject pictures were taken render them...; (B) The peculiar charm of Cameron’s fancy-subject pictures derives from the viewer’s...; (C) The implicit claim of Cameron’s fancy-subject pictures to comparison with the...; (D) The most successful of Cameron’s fancy-subject pictures from an aesthetic point...; (E) The interest of Cameron’s fancy-subject pictures consists in what they tell...
- `44-3` Question 9: Read Passage; Question Breakdown: PT-141-S-1-P-2-Q-9; (A) examples of amateurish aspects of the work [85.0%] (Correct); (B) evidence of the transformative power of theater [4.0%]; (C) testimonies to Cameron’s ingenuity [7.0%]; (D) indications that the work is intended ironically [3.0%]; (A) examples of amateurish aspects of the work; (B) evidence of the transformative power of theater
- `44-4` Question 10: Read Passage; Question Breakdown: PT-141-S-1-P-2-Q-10; (A) Sitting for a painting typically takes much longer than sitting for...; (B) Paintings, unlike photographs, can depict obviously impossible situations; (C) All of the sitters for a painting do not have to...; (D) A painter can suppress details about a sitter that are at...; (B) Paintings, unlike photographs, can depict obviously impossible situations.; (E) Paintings typically bear the stylistic imprint of an artist, school, or...
- `44-5` Question 11: Read Passage; Question Breakdown: PT-141-S-1-P-2-Q-11; (A) a playwright who introduces incongruous elements to preserve an aesthetic distance...; (B) a rap artist whose lyrics are designed to subvert the meaning...; (C) a sculptor whose works possess a certain grandeur even though they...; (D) an architect whose buildings are designed to be as functional as...; (E) a film director who employs ordinary people as actors in order...
- `44-6` Question 12: Read Passage; Question Breakdown: PT-141-S-1-P-2-Q-12; (A) A less realistic medium can be more conducive to suspension of...; (B) Amateurishness is a positive quality in some works of art; (C) What might appear to be an incongruity in a narrative photograph...; (D) We are sometimes aware of both the real and the imaginary...; (B) Amateurishness is a positive quality in some works of art.; (E) A work of art succeeds only to the extent that it...
- `44-7` Question 13: Read Passage; Question Breakdown: PT-141-S-1-P-2-Q-13; (A) there was little interest in photographs documenting contemporary life [14.0%]; (B) photography was practiced mainly by wealthy amateurs [3.0%]; (C) publicity stills of actors were coming into vogue [5.0%]; (D) there were no professional artist’s models [8.0%]; (A) there was little interest in photographs documenting contemporary life; (B) photography was practiced mainly by wealthy amateurs
- `44-8` Question 14: Read Passage; Question Breakdown: PT-141-S-1-P-2-Q-14; (A) It is the main conclusion of the passage, for which the...; (B) It introduces a contrast the author uses in characterizing the peculiar...; (C) It is the key step in an argument supporting the author’s...; (D) It is used to explain a criticism of Cameron’s fancy-subject pictures...; (E) It draws a contrast between narrative painting and drama to support...
- `44-9` Question 15: Read Passage; Question Breakdown: PT-141-S-1-P-2-Q-15; (A) to chronicle Cameron’s artistic development as a photographer, which culminated in...; (B) to argue that the tension between Cameron’s aims and the results...; (C) to show that Cameron’s essentially theatrical vision accounts for both the...; (D) to explain why Cameron’s project of acquiring for photography the prestige...; (E) to defend Cameron’s masterpiece The Passing of Arthur against its detractors...

### `48 (route 48, src 45)` Practice Passage 7: Advertising Critique

A breakdown of a philosophy/social criticism passage about advertising and Herbert Marcuse's 'false needs' theory, focusing on the main idea and the author's rebuttal.

- `45-1` Passage Analysis: Read Passage; Passage Analysis; Paragraphs 1 & 2: The Marcuse Critique of Advertising; Paragraph 3: The First Rebuttal - A Philosophical Problem; Paragraph 4: The Main Rebuttal - The Autonomous Consumer; Debate + Problem-Analysis Hybrid Anchor; Summary
- `45-2` Question 16: Read Passage; Question Breakdown: PT-141-S-1-P-3-Q-16; (A) Advertising has greater social value than Marcusians have supposed, because it...; (B) Even if, as Marcusians have argued, there is a theoretical difference...; (C) Marcusian arguments regarding advertisers’ creation of false needs are mistaken, because...; (D) Critics of advertising typically focus on the development of false needs...; (A) Advertising has greater social value than Marcusians have supposed...; (B) Even if, as Marcusians have argued...
- `45-3` Question 17: Read Passage; Question Breakdown: PT-141-S-1-P-3-Q-17; (A) base many of their manipulative strategies on psychological research findings [3.0%]; (B) appeal to people’s real needs in order to create false needs...; (C) are restricted to a degree by regulations prohibiting misinformation [2.0%]; (D) exaggerate the consumer’s need for independent decision-making [1.0%]; (A) base many of their manipulative strategies on psychological research findings; (B) appeal to people’s real needs in order to create false needs
- `45-4` Question 18: Read Passage; Question Breakdown: PT-141-S-1-P-3-Q-18; (A) summarize the political and economic context from which Marcusian critiques of...; (B) outline the mechanisms by which false needs originate in mass market...; (C) evaluate the psychological processes by which the manipulative techniques of mass...; (D) describe the prevailing views among contemporary critics of advertising and categorize...; (E) describe Marcusian views regarding mass market manipulation and indicate their role...
- `45-5` Question 19: Read Passage; Question Breakdown: PT-141-S-1-P-3-Q-19; (A) In modern society, advertising helps lead people to think that they...; (B) Modern societies differ from earlier societies in that they fail to...; (C) It is impossible to draw any meaningful distinction between real and...; (D) Advertising in modern society has sometimes become a tool of oppression...; (E) Advertising exploits basic human needs by deriving from them certain secondary...
- `45-6` Question 20: Read Passage; Question Breakdown: PT-141-S-1-P-3-Q-20; (A) intentionally dishonest claims that some theorists argue are common in advertising...; (B) innate, instinctual drives that some theorists say are fundamental to human...; (C) emotional pressures that some theorists claim are exerted over individuals by...; (D) subtle practices of social indoctrination that some theorists say are sponsored...; (A) intentionally dishonest claims that some theorists argue are common in advertising; (E) manipulative influences that some theorists say go unrecognized by those affected...
- `45-7` Question 21: Read Passage; Question Breakdown: PT-141-S-1-P-3-Q-21; (A) Therefore, while in principle there might be grounds for holding that...; (B) Therefore, although Marcusian claims about advertising are rationally justified, the mistake...; (C) Therefore, any shift in basic assumptions required to correct the abuses...; (D) Therefore, while emphasizing only detrimental social aspects of advertising, Marcusians have...; (B) Therefore, although Marcusian claims about advertising are rationally justified...; (E) Therefore, the Marcusian critique of advertising is mistaken except in its...

### `49 (route 49, src 46)` Practice Passage 8: Property Justice

A breakdown of a comparative law passage analyzing principles of justice in property acquisition, transfer, and rectification.

- `46-1` Passage Analysis: Read Passage; Passage Analysis; Passage A: The Philosophical Framework; Passage B: A Real-World Application; The Head-to-Head: Theory Meets Practice; Passage B's argument that Native Americans were the original owners aligns with...; The claim that the land was "illicitly taken" is a clear example...; The call to restore the land to its rightful owners is a...
- `46-2` Question 22: Read Passage; Question Breakdown: PT-141-S-1-P-4-Q-22; (A) Passage A; (B) Passage A; (C) Passage A; (D) Passage A; Passage A's Purpose; Passage B's Purpose
- `46-3` Question 23: Read Passage; Question Breakdown: PT-141-S-1-P-4-Q-23; (A) transfer of property from one owner to another [62.0%] (Correct); (B) a legal basis for recovery of property [13.0%]; (C) entitlement to property in a wholly just world [8.0%]; (D) practicability of rectification of past injustice [16.0%]; (A) transfer of property from one owner to another; (B) a legal basis for recovery of property
- `46-4` Question 24: Read Passage; Question Breakdown: PT-141-S-1-P-4-Q-24; (A) The second paragraph of passage B attempts to develop a broader...; (B) The second paragraph of passage B purports to state facts that...; (C) The argument in the second paragraph of passage B is structurally...; (D) Passage A presents a theory that tends to support the argument...; Passage A provides a general philosophical theory; The second paragraph of Passage B makes a specific argument
- `46-5` Question 25: Read Passage; Question Breakdown: PT-141-S-1-P-4-Q-25; (A) “Card Counting for Everyone; (B) “Mayor McConnell Is Unfit to Serve” “Why Mayor McConnell Should be...; (C) “Pruning Fruit Trees; (D) “Notable Failures of the STORM Weather Forecasting Model” “Meteorologists’ Best Tool...; Passage A presents a general, abstract, philosophical theory; Passage B presents a specific, concrete, real-world case
- `46-6` Question 26: Read Passage; Question Breakdown: PT-141-S-1-P-4-Q-26; (A) legitimization of actual property holdings during the eighteenth century [3.0%]; (B) clarification of existing laws regarding transfer of property [4.0%]; (C) assurance of conformity to the principle of justice in acquisition [11.0%]; (D) prevention of violations of the principle of justice in transfer [61.0%]...; (A) legitimization of actual property holdings during the eighteenth century; (B) clarification of existing laws regarding transfer of property
- `46-7` Question 27: Read Passage; Question Breakdown: PT-141-S-1-P-4-Q-27; (A) Passage A espouses a general view without providing details, while passage...; (B) Passage A argues for the superiority of one view over competing...; (C) Passage A invokes commonly held principles to support a policy recommendation,...; (D) Passage A briefly states a view and then provides an argument...; Passage A's Approach; Passage B's Approach

## Unit 13: Reference

### `50 (route 50, src 47)` RC Quick Reference Guide

A comprehensive guide to every LSAT Reading Comprehension question type, including core tasks, approaches, and traps.

- `47-1` RC Quick Reference Guide: RC Quick Reference Guide; The Shared RC Reading Method; Low-resolution paragraph summary; Different-perspective tracking; Author-opinion tracking; Next-paragraph prediction; Early passage-style hypothesis; Default Comparative Workflow

## Unit 14: Advanced Passages

### `51 (route 51, src 50)` Advanced Passage 1: Mathematics as Language

An advanced passage exploring the philosophy of science, questioning whether mathematics is a literal description of reality or a conventional language.

- `50-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: Math as a Language; Paragraph 2: The Big Debate in Language; Paragraph 3: Applying the 'Rules' View to Science; Paragraph 4: The Unanswered Question for Scientists; Summary
- `50-2` Question 22: Read Passage; Question Breakdown: PT-108-S-1-P-4-Q-22; (A) Although scientists must rely on both language and mathematics in their...; (B) The acquisition of scientific knowledge depends on an agreement among scientists...; (C) If science is truly to progress, scientists must temporarily abandon the...; (D) In order to better understand the acquisition of scientific knowledge, scientists...; Explanation; (A)
- `50-3` Question 23: Read Passage; Question Breakdown: PT-108-S-1-P-4-Q-23; (A) The categories of physical objects employed by one language correspond remarkably...; (B) The categories of physical objects employed by one language correspond remarkably...; (C) The categories of physical objects employed by speakers of a language...; (D) The sentence structures of languages in scientifically sophisticated societies vary little...; Explanation; (A)
- `50-4` Question 24: Read Passage; Question Breakdown: PT-108-S-1-P-4-Q-24; (A) conveys meaning in the same way that metaphors do [5.0%]; (B) constitutes a systematic collection of signs [65.0%] (Correct); (C) corresponds exactly to aspects of physical phenomena [5.0%]; (D) confers explanatory power on scientific theories [18.0%]; Explanation; (A)
- `50-5` Question 25: Read Passage; Question Breakdown: PT-108-S-1-P-4-Q-25; (A) offer support for the view of linguists who believe that language...; (B) elaborate the position of linguists who believe that truth is merely...; (C) illustrate the differences between the essentialist and conventionalist positions in the...; (D) demonstrate the similarity of the linguists’ debate to a current debate...; Explanation; (A)
- `50-6` Question 26: Read Passage; Question Breakdown: PT-108-S-1-P-4-Q-26; (A) speakers of English have accepted that “The ball is red” applies...; (B) speakers of English do not accept that synonyms for “ball” and...; (C) “The ball is red” corresponds essentially to every aspect of the...; (D) “ball” and “red” actually refer to an entity and a property...; Explanation; (A)

### `52 (route 52, src 51)` Advanced Passage 2: Bentham

An advanced passage exploring Jeremy Bentham's revolutionary 'nonexclusion principle' for legal evidence and its impact on modern law.

- `51-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: The Old, Irrational System; Paragraph 2: Rules That Hid the Truth; Paragraph 3: Bentham's Radical Solution; Paragraph 4: Problems with the Solution; Paragraph 5: Bentham's Enduring Legacy
- `51-2` Question 23: Read Passage; Question Breakdown: PT-109-S-2-P-4-Q-23; (A) Bentham questioned the expediency of modern rules of legal evidence; (B) Bentham’s proposed reform of rules of evidence was imperfect but beneficial; (C) Bentham’s nonexclusion principle should be reexamined in the light of subsequent...; (D) Rules of legal evidence inevitably entail imperfect mediations of conflicting values...; Explanation; (A)
- `51-3` Question 24: Read Passage; Question Breakdown: PT-109-S-2-P-4-Q-24; (A) sympathetic [7.0%]; (B) critical [68.0%] (Correct); (C) respectful [7.0%]; (D) scornful [7.0%]; Explanation; (A)
- `51-4` Question 25: Read Passage; Question Breakdown: PT-109-S-2-P-4-Q-25; (A) suggest a situation in which application of the nonexclusion principle may...; (B) cite an example of objections that were raised to Bentham’s proposed...; (C) illustrate the conflict between competing social interests [18.0%]; (D) demonstrate the difference between social interests and social values [3.0%]; Explanation; (A)
- `51-5` Question 26: Read Passage; Question Breakdown: PT-109-S-2-P-4-Q-26; (A) Common-law rules of evidence have been replaced by modern principles; (B) Modern evidence law is less rigid than was eighteenth-century evidence law; (C) Some current laws regarding evidence do not derive from common-law doctrines; (D) The late eighteenth century marked the beginning of evidence law; Explanation; (A)
- `51-6` Question 27: Read Passage; Question Breakdown: PT-109-S-2-P-4-Q-27; (A) suggesting the advantages and limitations of a legal reform [64.0%] (Correct); (B) summarizing certain deficiencies of an outmoded legal system [21.0%]; (C) justifying the apparent inadequacies of current evidence law [5.0%]; (D) detailing objections to the nonexclusion principle [8.0%]; Explanation; (A)
- `51-7` Question 28: Read Passage; Question Breakdown: PT-109-S-2-P-4-Q-28; (A) uncritical acceptance of legal conventions [3.0%]; (B) failure to weigh the advantages of legal reform [2.0%]; (C) exclusion of sacramental confessions [11.0%]; (D) refusal to allow the jury to hear and assess relevant testimony...; Explanation; (A)

### `53 (route 53, src 52)` Advanced Passage 3: Critical Legal Studies

An advanced passage analyzing philosopher Denise Meyerson's critique of the Critical Legal Studies (CLS) movement.

- `52-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: Introducing the Players; Paragraph 2: Disagreement 1 - You Can Solve Conflicts; Paragraph 3: Disagreement 2 - A Choice Can Be Good, Not Perfect; Paragraph 4: Disagreement 3 - Law is Just a Game; Summary of the Argument
- `52-2` Question 15: Read Passage; Question 15 Breakdown; (A) The arguments of the Critical Legal Studies movement are under attack...; (B) In critiquing the Critical Legal Studies movement, Meyerson charges that the...; (C) Meyerson objects to the propositions of the Critical Legal Studies movement...; (D) Meyerson poses several objections to the tenets of the Critical Legal...; (A); (B)
- `52-3` Question 16: Read Passage; Question 16 Breakdown; (A) provide an example of how a principle has previously been applied...; (B) demonstrate a point by means of an analogy [94.0%] (Correct); (C) emphasize the relative unimportance of an activity [1.0%]; (D) contrast two situations by exaggerating their differences [1.0%]; (A); (B)
- `52-4` Question 17: Read Passage; Question 17 Breakdown; (A) evaluate divergent legal doctrines [4.0%]; (B) explain how a controversy arose [2.0%]; (C) advocate a new interpretation of legal tradition [3.0%]; (D) describe a challenge to a school of thought [79.0%] (Correct); (A); (B)
- `52-5` Question 18: Read Passage; Question 18 Breakdown; (A) How one determines the extent to which these considerations are relevant...; (B) The extent to which these considerations are part of the legal...; (C) When these considerations have more moral authority than the law, the...; (D) If one uses these considerations in determining a legal solution, one...; (A); (B)
- `52-6` Question 19: Read Passage; Question 19 Breakdown; (A) any choice made between conflicting solutions to a legal question will...; (B) every legal question will involve the consideration of a set of...; (C) two or more alternative solutions to a legal question may carry...; (D) no legal question will have a single correct answer [16.0%]; (A); (B)
- `52-7` Question 20: Read Passage; Question 20 Breakdown; (A) A criticism is identified and its plausibility is investigated; (B) The different arguments made by two opponents of a certain viewpoint...; (C) The arguments for and against a certain position are outlined, then...; (D) A belief is presented and its worth is debated on the...; (A); (B)
- `52-8` Question 21: Read Passage; Question 21 Breakdown; (A) It incorporates moral principles in order to yield definitive solutions to...; (B) It does not necessarily imply approval of any policies or values; (C) It is insufficient in itself to determine the answer to a...; (D) It is comparable to the application of rules in a game; (A); (B)

### `54` Advanced Passage 4: Dworkin

An advanced passage analyzing Ronald Dworkin's legal theory as a middle ground between legal positivism and natural law.

- `54-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: The Problem - A Rock and a Hard Place; Paragraph 2: Theory 1 - Legal Positivism (The 'Rules are Rules' View); Paragraph 3: Dworkin's 'Middle Ground' Solution; Paragraph 4: The Takeaway - Law Has Its Own Logic; Summary
- `54-2` Question 21: Read Passage; Question 21 Breakdown; (A) Dworkin regards natural law theory as a middle ground between legal...; (B) Dworkin holds that judicial interpretations should not be based solely on...; (C) Dworkin argues that the internal logic of the law should generally...; (D) Dworkin’s theory of legal interpretation is based on borrowing equally from...; (A); (B)
- `54-3` Question 22: Read Passage; Question 22 Breakdown; (A) to explain why legal positivism is so popular [1.0%]; (B) to evaluate the theory of legal positivism [24.0%]; (C) to discuss how judicial consensus is determined [2.0%]; (D) to identify the basic tenets of legal positivism [72.0%] (Correct); (A); (B)
- `54-4` Question 23: Read Passage; Question 23 Breakdown; (A) confident endorsement of its central assertions [90.0%] (Correct); (B) caution about its potential for justifying some forms of judicial activism...; (C) modest expectation that some of its claims will be found to...; (D) quiet conviction that its importance derives only from its originality [2.0%]; (A); (B)
- `54-5` Question 24: Read Passage; Question 24 Breakdown; (A) to evaluate previous legal interpretations by judges influenced by legal positivism...; (B) to dispute the notion that social consensus plays any role in...; (C) to provide a theoretical argument against the use of moral intuition...; (D) to argue that legal decisions must be based on the principles...; (A); (B)
- `54-6` Question 25: Read Passage; Question 25 Breakdown; (A) Judges and lawyers too often act as though there is a...; (B) Judges should not use their moral intuition when it conflicts with...; (C) Legal positivism is a more popular theory than natural law theory...; (D) If there is consensus about how to interpret a law, then...; (A); (B)
- `54-7` Question 26: Read Passage; Question 26 Breakdown; (A) Judges sometimes ought to be allowed to use personal moral convictions...; (B) Disagreements about the meaning of a law are never legitimate; (C) The ultimate standard of interpretation is the logic of the law...; (D) The meaning of a law derives from jurists’ interpretations of that...; (A); (B)

### `55 (route 55, src 56)` Advanced Passage 5: Psychology of Risk

An advanced passage analyzing the psychology of decision making and loss aversion, with an application to international relations.

- `56-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: The Main Idea - We Hate Losing; Paragraph 2: Old Theory vs. New Research; Paragraph 3: Applying It to Countries; Summary
- `56-2` Question 22: Read Passage; Question 22 Breakdown; (A) the country’s actions are consistent with previously accepted views of the...; (B) the new research findings indicate that the country from which the...; (C) in spite of surface appearances to the contrary, the new research...; (D) the facts of the situation show that the government is motivated...; (A); (B)
- `56-3` Question 23: Read Passage; Question 23 Breakdown; (A) the introduction to a thought experiment whose results the author expects...; (B) a rhetorical question whose assumed answer is in conflict with the...; (C) the basis for an illustration of how the previously accepted view...; (D) a suggestion that the discrepancies between subjective and objective valuations of...; (A); (B)
- `56-4` Question 24: Read Passage; Question 24 Breakdown; (A) When states try to regain losses through risky conflict, they generally...; (B) Government decision makers subjectively evaluate the acceptability of risks involving national...; (C) A new method for predicting and mediating international conflict has emerged...; (D) Truly rational decision making is a rare phenomenon in international crises...; (A); (B)
- `56-5` Question 25: Read Passage; Question 25 Breakdown; (A) a psychological analysis of the motives involved in certain types of...; (B) a presentation of a psychological hypothesis which is then subjected to...; (C) a suggestion that psychologists should incorporate the findings of political scientists...; (D) an examination of some new psychological considerations regarding risk and their...; (A); (B)
- `56-6` Question 26: Read Passage; Question 26 Breakdown; (A) Researchers have previously been too willing to accept the claims that...; (B) There is inadequate research support for the hypothesis that except when...; (C) It can reasonably be argued that the risk that Britain accepted...; (D) The new findings suggest that because of the subjective elements involved,...; (A); (B)

### `56 (route 56, src 57)` Advanced Passage 6: Historical Sociology

An advanced passage analyzing Philip Abrams's theory of 'structuring' and its application to historical sociology.

- `57-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: The Problem with Sociology & Abrams's Fix; Paragraph 2: Applying 'Structuring' to History; Paragraph 3: A 'How-To' Guide for Historians; Summary of the Argument
- `57-2` Question 15: Read Passage; Question 15 Breakdown; (A) Abrams argues that historical sociology rejects the claims of sociologists who...; (B) Abrams argues that historical sociology assumes that, despite the views of...; (C) Abrams argues that historical sociology demonstrates that, despite the views of...; (D) Abrams describes historical sociology as a discipline that unites two approaches...; (A); (B)
- `57-3` Question 16: Read Passage; Question 16 Breakdown; (A) Only if they adhere to this structure, Abrams believes, can historical...; (B) Only if they adhere to this structure, Abrams believes, will historical...; (C) Unless they can agree to adhere to this structure, Abrams believes,...; (D) By adhering to this structure, Abrams believes, historical sociologists can shed...; (A); (B)
- `57-4` Question 17: Read Passage; Question 17 Breakdown; (A) a social phenomenon [3.0%]; (B) a form of historical structuring [64.0%] (Correct); (C) an accidental circumstance [10.0%]; (D) a condition controllable to some extent by an individual [16.0%]; (A); (B)
- `57-5` Question 18: Read Passage; Question 18 Breakdown; (A) In a report on the enactment of a bill into law,...; (B) In a consultation with a patient, a doctor reviews the patient’s...; (C) In an analysis of a historical novel, a critic provides information...; (D) In a presentation to stockholders, a corporation’s chief executive officer describes...; (A); (B)
- `57-6` Question 19: Read Passage; Question 19 Breakdown; (A) outline the merits of Abrams’s conception of historical sociology [3.0%]; (B) convey the details of Abrams’s conception of historical sociology [14.0%]; (C) anticipate challenges to Abrams’s conception of historical sociology [2.0%]; (D) examine the roles of key terms used in Abrams’s conception of...; (A); (B)
- `57-7` Question 20: Read Passage; Question 20 Breakdown; (A) the effect of the fact that a person experienced political injustice...; (B) the effect of the fact that a person was raised in...; (C) the effect of the fact that a person lives in a...; (D) the effect of the fact that a person’s parents practiced a...; (A); (B)

### `57 (route 57, src 58)` Advanced Passage 7: Digitalization and Copyright Law

An advanced passage analyzing the conflict between internet culture and Canadian copyright law in the face of digitalization.

- `58-1` Passage Analysis: Read Passage; Passage Analysis; Paragraph 1: The Problem - Free Info vs. Copyright; Paragraph 2: Why the Law is Outdated; Paragraph 3: Why Fixing the Law is Hard; Summary
- `58-2` Question 24: Read Passage; Question 24 Breakdown; (A) Despite the widely recognized need to revise Canadian copyright law to...; (B) Although the necessity of revising Canadian copyright law to protect works...; (C) While the unauthorized reproduction and distribution of copyrighted works over the...; (D) Despite the fact that current Canadian copyright law does not cover...; (A); (B)
- `58-3` Question 25: Read Passage; Question 25 Breakdown; (A) Digitalization of copyrighted works is permitted to Internet users who pay...; (B) Digitalization of copyrighted works is prohibited to Internet users who are...; (C) Digitalization of copyrighted works is permitted to all Internet users without...; (D) Digitalization of copyrighted works is prohibited to all Internet users without...; (A); (B)
- `58-4` Question 26: Read Passage; Question 26 Breakdown; (A) how copyright infringement of protected works is punished under current Canadian...; (B) why current Canadian copyright law is not easily applicable to digitalization...; (C) how the Internet has caused copyright holders to look for new...; (D) why copyright experts propose protecting copyrighted works from unauthorized digitalization [4.0%]; (A); (B)
- `58-5` Question 27: Read Passage; Question 27 Breakdown; (A) It is unlikely that every instance of digitalization could be detected...; (B) Criminalizing unauthorized digitalization appears to be consistent with the publishing community’s...; (C) When copyright law is revised to cover digitalization, the revised law...; (D) The number of instances of unauthorized digitalization would likely rise if...; (A); (B)
- `58-6` Question 28: Read Passage; Question 28 Breakdown; (A) Unauthorized digitalization of a copyrighted work should be considered a crime...; (B) Unauthorized digitalization of a copyrighted work should be considered a crime...; (C) Making a copy of a copyrighted work from an unauthorized digitalization...; (D) Making a copy of a copyrighted work from an unauthorized digitalization...; (A); (B)

## Fast Spot-Check Heuristics

- LR identification and evaluation modules should not lose named subtype lessons or advanced subtype lessons. Those are part of the expected module spine.
- `Step-by-Step` lessons should expose an actual repeatable method. If the lesson signature loses steps and only shows generic framing, it has likely been flattened or broken.
- RC core modules `24-35` are still thin, so even one missing topic is meaningful there.
- RC practice passages `36-45` and advanced passages `51-57` should each contain the exact reviewed question set listed above. Missing question-review lessons usually means an assembly or naming mismatch.
- For course-platform work, treat `24-50` as the core RC family and treat `51-57` as advanced RC folded into RC downstream when needed.
