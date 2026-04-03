# Jules Use Cases For LSAT Mastery Course

**Purpose:** Define the LSAT Mastery tasks that are a good fit for Jules as recurring delegated review, maintenance, and curriculum strategy work.  
**Audience:** Germaine and future operators using Jules against the course repo.  
**Status:** active  
**Source of truth:** yes  
**Last reviewed:** 2026-03-22  
**Related docs:** [README.md](./README.md), [AGENTS.md](./AGENTS.md), [docs/README.md](./docs/README.md), [docs/technical/architecture.md](./docs/technical/architecture.md)

## How To Use This File

- Bias toward daily validation because this repo is content-heavy and easy to quietly break through route drift, stale lesson references, or course-data mismatches.
- Prefer report-first prompts when the task touches pedagogy, curriculum ordering, or question-bank policy.
- Allow small safe fixes when the problem is a broken mapping, stale audit output, missing label, or obvious route/content mismatch.

## Function Types

### Navigation And Delivery

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D1` | Route and lesson linkage validation | Daily, 7:00 AM | Catch broken module-to-lesson links and route-map drift |
| `M-D4` | Lesson-to-module discoverability audit | Daily, 7:20 AM | Catch lessons that are technically present but hard to reach |
| `M-D5` | Deep-link and entry-point audit | Daily, 7:40 AM | Protect direct lesson opening and shareable navigation paths |
| `M-D6` | Lesson ordering sanity check | Daily, 8:00 AM | Catch bad within-module sequencing |
| `M-D7` | Mobile readability and progression audit | Daily, 8:20 AM | Watch for course use friction on smaller screens |
| `M-D8` | Portal-assignment readiness scan | Daily, 8:40 AM | Ensure lesson surfaces stay easy to assign from the website |

### Question Bank And Explanation Integrity

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D2` | Question bank integrity audit | Daily, 9:00 AM | Catch missing data, duplicate inventory, or broken question sourcing |
| `M-D9` | Answer-key consistency audit | Daily, 9:20 AM | Catch answer metadata and explanation mismatches |
| `M-D10` | Question-type labeling audit | Daily, 9:40 AM | Protect the integrity of type-based practice and assignment |
| `M-D11` | Explanation completeness scan | Daily, 10:00 AM | Find weak or missing explanation coverage |
| `M-D12` | Difficulty and progression audit | Daily, 10:20 AM | Check whether question progression feels pedagogically usable |
| `M-D13` | Duplicate-and-near-duplicate question scan | Daily, 10:40 AM | Catch repeated inventory and cannibalized practice value |

### Curriculum Architecture And Pedagogy

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-W1` | Curriculum clarity gap scan | Weekly, Thursday at 2:00 PM | Surface lesson clusters that need clearer scaffolding or prerequisites |
| `M-D14` | Prerequisite and scaffolding audit | Daily, 11:00 AM | Catch lessons that assume too much too early |
| `M-D15` | Concept repetition and overlap scan | Daily, 11:20 AM | Find modules that are reteaching without adding value |
| `M-D16` | Lesson objective sharpness review | Daily, 11:40 AM | Tighten what each lesson is actually trying to teach |
| `M-D17` | Framework codification scan | Daily, 12:00 PM | Find lessons that should become clearer repeatable systems |
| `M-D18` | Homework and drill leverage scan | Daily, 12:20 PM | Find where course content should produce better practice assets |

### Product And Cross-Stack Leverage

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D3` | Export contract review | Daily, 12:40 PM | Protect the DataToolkit handoff and export surfaces |
| `M-D19` | DataToolkit handoff opportunity scan | Daily, 1:00 PM | Find where Mastery improvements should inform toolkit workflows |
| `M-D20` | Website portal leverage audit | Daily, 1:20 PM | Ensure course structure supports the student portal cleanly |
| `M-D21` | Editorial spinout opportunity scan | Daily, 1:40 PM | Find course ideas that should become public content |
| `M-D22` | Assignment-pack buildout scan | Daily, 2:00 PM | Identify lesson clusters ripe for better assignment packaging |
| `M-D23` | Long-horizon course strategy memo | Daily, 2:20 PM | End with the most important next-bet recommendation |

### Student Outcome And Assignment Intelligence

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D24` | Skill-transfer outcome scan | Daily, 2:40 PM | Check whether lessons are likely to create real performance transfer |
| `M-D25` | Wrong-answer-pattern lesson mapping | Daily, 3:00 PM | Tie recurring student misses back to course gaps |
| `M-D26` | Assignment-sequence strategy audit | Daily, 3:20 PM | Improve how Mastery should actually be assigned in practice |
| `M-D27` | Diagnostic-to-curriculum routing scan | Daily, 3:40 PM | Better connect performance signals to lesson paths |
| `M-D28` | Retention-risk lesson scan | Daily, 4:00 PM | Find where course friction could reduce continuation |

### Productization And Offer Strategy

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D29` | Premium-offer support scan | Daily, 4:20 PM | Ensure the course strengthens the high-end tutoring offer |
| `M-D30` | Standalone-product opportunity scan | Daily, 4:40 PM | Find parts of Mastery that could become sellable sub-products |
| `M-D31` | Workshop and intensive spinout planner | Daily, 5:00 PM | Turn strong course clusters into live-offer ideas |
| `M-D32` | Evergreen asset buildout scan | Daily, 5:20 PM | Identify lessons that should become durable teaching assets |
| `M-D33` | Monetizable differentiation audit | Daily, 5:40 PM | Clarify what makes this course commercially distinct |

### Brand And Market Positioning

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D34` | Competitive differentiation scan | Daily, 6:00 PM | Find where Mastery can separate from generic LSAT courses |
| `M-D35` | Premium-positioning curriculum audit | Daily, 6:20 PM | Keep the course aligned with a premium brand posture |
| `M-D36` | Signature-framework mining | Daily, 6:40 PM | Surface the ideas GT should become known for |
| `M-D37` | Trust-builder lesson scan | Daily, 7:00 PM | Find lessons that most strongly prove authority and seriousness |
| `M-D38` | Public-story alignment memo | Daily, 7:20 PM | Check the narrative this course tells about GT |

### Research, Assessment, And Strategic Intelligence

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D39` | Assessment-design opportunity scan | Daily, 7:40 PM | Find better ways to measure whether lessons are working |
| `M-D40` | Coverage-gap and roadmap memo | Daily, 8:00 PM | Identify the most important missing parts of the course |
| `M-D41` | Longitudinal student-value hypothesis scan | Daily, 8:20 PM | Think through how this course changes outcomes over time |
| `M-D42` | Research-question generator | Daily, 8:40 PM | Generate the best next questions the course should answer |
| `M-D43` | Big-bet course strategy note | Daily, 9:00 PM | End with the strongest forward-looking recommendation |

### Portfolio And Operating Model

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D44` | Mastery-to-stack systems map | Daily, 9:20 PM | See how the course should interact with the rest of GT |
| `M-D45` | Tutor workflow integration scan | Daily, 9:40 PM | Make sure the course actually fits how tutoring is run |
| `M-D46` | Student lifecycle leverage audit | Daily, 10:00 PM | Map where the course helps acquisition, delivery, and retention |
| `M-D47` | Internal training playbook scan | Daily, 10:20 PM | Find where Mastery can sharpen tutor/operator consistency |
| `M-D48` | Course operating-model memo | Daily, 10:40 PM | Clarify how the course should be run as a live business asset |

### Packaging, Delivery, And Institutional Expansion

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D49` | Group-program packaging planner | Daily, 11:00 PM | Turn course clusters into group or cohort offers |
| `M-D50` | Institutional adoption scan | Daily, 11:20 PM | Explore whether parts of Mastery could work in school or org contexts |
| `M-D51` | Cohort-delivery strategy note | Daily, 11:40 PM | Reframe the course for synchronized delivery instead of self-paced use |
| `M-D52` | Licensing and reuse opportunity scan | Daily, 12:00 AM | Find parts of the course that could be reused or licensed safely |
| `M-D53` | Credential and milestone design scan | Daily, 12:20 AM | Explore milestone systems that make progress more legible |

### Evidence, Proof, And Measurement Architecture

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D54` | Evidence architecture audit | Daily, 12:40 AM | Decide what proof this course should eventually produce |
| `M-D55` | Outcome-proof asset scan | Daily, 1:00 AM | Find where the course can generate stronger credibility assets |
| `M-D56` | Student case-study extraction planner | Daily, 1:20 AM | Identify the best lessons for future case-study style proof |
| `M-D57` | Learning telemetry hypothesis memo | Daily, 1:40 AM | Think through what signals would show the course is working |
| `M-D58` | Course ROI modeling note | Daily, 2:00 AM | Clarify how the course creates business and student value |

### IP, Category Building, And Long-Horizon Bets

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D59` | IP moat and asset-ownership scan | Daily, 2:20 AM | Identify what parts of Mastery could become durable GT assets |
| `M-D60` | Canonical-method architecture memo | Daily, 2:40 AM | Clarify the core method architecture the course should embody |
| `M-D61` | Five-year course platform note | Daily, 3:00 AM | Think about what this becomes if it compounds for years |
| `M-D62` | GT learning ecosystem expansion scan | Daily, 3:20 AM | Identify adjacent learning products this course points toward |
| `M-D63` | Foundational research agenda note | Daily, 3:40 AM | End with the deepest unanswered questions worth building around |

### Adaptive Learning, Personalization, And Intelligence

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D64` | Personalization architecture scan | Daily, 4:00 AM | Identify where the course should adapt more intelligently to the student |
| `M-D65` | Adaptive sequencing strategy note | Daily, 4:20 AM | Think through how lesson order should flex based on real need |
| `M-D66` | Mastery-threshold design audit | Daily, 4:40 AM | Clarify what should count as ready to move on |
| `M-D67` | Intervention-trigger mapping | Daily, 5:00 AM | Define where the system should escalate to tutoring or support |
| `M-D68` | Student-profile routing planner | Daily, 5:20 AM | Map different student archetypes to better course paths |

### Distribution, Partnerships, And Channel Strategy

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D69` | Channel expansion memo | Daily, 5:40 AM | Find the best new delivery or access channels for Mastery |
| `M-D70` | Partner-education packaging scan | Daily, 6:00 AM | Reframe pieces of Mastery for collaborators or partners |
| `M-D71` | Admissions-crossover opportunity scan | Daily, 6:20 AM | Find where LSAT learning can support broader prelaw positioning |
| `M-D72` | Prelaw-community partnership scan | Daily, 6:40 AM | Explore communities or institutions that Mastery could serve |
| `M-D73` | Free-to-paid ladder design note | Daily, 7:00 AM | Think through how Mastery should convert interest into deeper engagement |

### Credentialing, Authority, And Institutional Proof

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D74` | Certification path planner | Daily, 7:20 AM | Explore whether formal mastery paths could add value |
| `M-D75` | Instructor-proof asset audit | Daily, 7:40 AM | Identify course elements that most strongly prove teaching quality |
| `M-D76` | Benchmarking and standards memo | Daily, 8:00 AM | Clarify what standards Mastery should be held against |
| `M-D77` | Institutional trust signal scan | Daily, 8:20 AM | Find what would make outside orgs trust the product more |
| `M-D78` | Flagship capstone design note | Daily, 8:40 AM | Imagine the strongest culminating experience the course could offer |

### Frontier Bets And Scenario Planning

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D79` | AI-assisted course companion strategy scan | Daily, 9:00 AM | Explore how an intelligent companion could extend Mastery |
| `M-D80` | Tutor-plus-course hybrid model memo | Daily, 9:20 AM | Clarify the strongest hybrid between product and service |
| `M-D81` | Scenario-planning stress test | Daily, 9:40 AM | Pressure-test the course against different future conditions |
| `M-D82` | Moat erosion risk audit | Daily, 10:00 AM | Identify what could make Mastery easier to commoditize over time |
| `M-D83` | Category-defining flagship bet note | Daily, 10:20 AM | End with the boldest next big move for the product |

### Ecosystem Governance, Standards, And Institutional Control

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D84` | Open-standard design memo | Daily, 10:40 AM | Explore whether GT should define standards others could reference |
| `M-D85` | Tutor-certification ecosystem scan | Daily, 11:00 AM | Think beyond students to a broader training or accreditation layer |
| `M-D86` | Benchmark dataset strategy note | Daily, 11:20 AM | Consider how Mastery could anchor a recognized benchmark set |
| `M-D87` | Institutional reporting layer scan | Daily, 11:40 AM | Explore what outside stakeholders would want to see from the product |
| `M-D88` | Trust-consortium and standards-body memo | Daily, 12:00 PM | Think about how GT could shape the standards conversation |

### Network Effects, Community, And Flywheel Design

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D89` | Alumni and peer-learning network scan | Daily, 12:20 PM | Identify how Mastery could create value beyond solo course use |
| `M-D90` | Community insight-loop planner | Daily, 12:40 PM | Turn learner interaction into better future course intelligence |
| `M-D91` | Mentor-marketplace hybrid memo | Daily, 1:00 PM | Explore whether Mastery could support a guidance network layer |
| `M-D92` | Reputation and progress graph strategy | Daily, 1:20 PM | Think through legible progress and status across a broader system |
| `M-D93` | Referral and advocacy engine scan | Daily, 1:40 PM | Find how a stronger Mastery experience could compound referrals |

### Expansion Horizons And Adjacencies

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D94` | Adjacent-exam expansion scan | Daily, 2:00 PM | Explore where the instructional model could travel beyond LSAT |
| `M-D95` | Internationalization and localization note | Daily, 2:20 PM | Think about portability across regions and contexts |
| `M-D96` | Prelaw foundation-year pathway planner | Daily, 2:40 PM | Reframe the course as part of a broader prelaw learning path |
| `M-D97` | Law-school bridge curriculum scan | Daily, 3:00 PM | Identify what pieces could extend past the LSAT boundary |
| `M-D98` | Consumer-to-enterprise expansion memo | Daily, 3:20 PM | Explore how Mastery might evolve from direct-to-student into larger deals |

### Category Control, Research Labs, And Moonshots

| Selection | Function type | Recommended cadence | Best use |
| --- | --- | --- | --- |
| `M-D99` | Reasoning-ontology architecture note | Daily, 3:40 PM | Think about the deepest conceptual model the course could encode |
| `M-D100` | GT benchmark and challenge exam strategy | Daily, 4:00 PM | Explore a more public demonstration of GT standards and rigor |
| `M-D101` | Research lab and publication agenda | Daily, 4:20 PM | Push toward a more formal knowledge-production posture |
| `M-D102` | Anti-commoditization experience design memo | Daily, 4:40 PM | Clarify how the product stays hard to replace in an AI-heavy market |
| `M-D103` | Founder-scale moonshot platform bet | Daily, 5:00 PM | End with the largest credible product vision for Mastery |

## Prompt Library

### Navigation And Delivery

#### `M-D1` Route And Lesson Linkage Validation

- Function type: Route and lesson linkage validation
- Recommended cadence: Daily, 7:00 AM
- Mode: Fix small safe issues if found

```text
Review LSAT Mastery for route and lesson linkage breakage. Focus on App.tsx, utils/courseCatalog.ts, modules, and any validation scripts that cover lesson references or route-module mapping. Identify lessons that are no longer reachable, stale route remaps, broken lesson metadata, or recent content edits that create navigation issues. Make small safe mapping fixes if they are obvious; otherwise return a concise report.
```

#### `M-D4` Lesson-To-Module Discoverability Audit

- Function type: Lesson-to-module discoverability audit
- Recommended cadence: Daily, 7:20 AM
- Mode: Report only

```text
Audit LSAT Mastery for lessons that technically exist but are hard to discover from normal module navigation. Focus on gaps between courseCatalog metadata, rendered module lists, and lesson-reader entry points. Return a concise report showing which lessons are effectively buried and what is making them hard to reach.
```

#### `M-D5` Deep-Link And Entry-Point Audit

- Function type: Deep-link and entry-point audit
- Recommended cadence: Daily, 7:40 AM
- Mode: Report first, fix small safe issues if obvious

```text
Review LSAT Mastery for deep-link and entry-point integrity. Focus on direct lesson opening, query-param driven lesson selection, module launch buttons, and any path that needs to land the student in the right lesson without confusion. Return a report on broken or fragile entry points, and fix small safe route mismatches if they are clear.
```

#### `M-D6` Lesson Ordering Sanity Check

- Function type: Lesson ordering sanity check
- Recommended cadence: Daily, 8:00 AM
- Mode: Report only

```text
Review module lesson ordering in LSAT Mastery and identify places where the sequence feels pedagogically wrong, internally inconsistent, or hostile to smooth learning. Focus on order inside modules, not just route availability. Return a short report with the highest-value sequencing fixes first.
```

#### `M-D7` Mobile Readability And Progression Audit

- Function type: Mobile readability and progression audit
- Recommended cadence: Daily, 8:20 AM
- Mode: Report only

```text
Audit LSAT Mastery for mobile-use friction in the lesson reader and module flow. Focus on lesson navigation clarity, readability, accidental clutter, and whether students can actually move from one lesson to the next without getting lost on a smaller screen. Return a practical usability report.
```

#### `M-D8` Portal-Assignment Readiness Scan

- Function type: Portal-assignment readiness scan
- Recommended cadence: Daily, 8:40 AM
- Mode: Report only

```text
Review LSAT Mastery from the perspective of website portal assignment and linked lesson use. Identify lessons or module surfaces that are awkward to assign, unclear when linked externally, or too dependent on local context to stand on their own. Return the highest-priority assignment-readiness gaps.
```

### Question Bank And Explanation Integrity

#### `M-D2` Question Bank Integrity Audit

- Function type: Question bank integrity audit
- Recommended cadence: Daily, 9:00 AM
- Mode: Report first

```text
Audit the LSAT Mastery question bank sources and recent changes for integrity issues. Focus on modules/module48, modules/module49, modules/module53, the standalone question bank flow, and any audit or inventory scripts. Look for duplicates, broken answer metadata, missing explanations or labels, and inconsistencies between lesson references and question-bank entries. Return a concise report with file paths and severity.
```

#### `M-D9` Answer-Key Consistency Audit

- Function type: Answer-key consistency audit
- Recommended cadence: Daily, 9:20 AM
- Mode: Report only

```text
Review LSAT Mastery question and explanation data for answer-key mismatches. Focus on cases where the credited answer, explanation logic, or question metadata appear out of sync. Return a ranked report with exact references and a short description of the mismatch risk.
```

#### `M-D10` Question-Type Labeling Audit

- Function type: Question-type labeling audit
- Recommended cadence: Daily, 9:40 AM
- Mode: Report only

```text
Audit question-type labeling across LSAT Mastery with emphasis on the categories that are reused for drills, assignment generation, and downstream exports. Look for mislabeled question types, inconsistent naming, or edge cases that would confuse practice-set selection. Return a concise labeling-risk report.
```

#### `M-D11` Explanation Completeness Scan

- Function type: Explanation completeness scan
- Recommended cadence: Daily, 10:00 AM
- Mode: Report only

```text
Scan LSAT Mastery for questions or lesson-linked problem sets that have weak, missing, or clearly underdeveloped explanation coverage. Focus on where the course claims instructional value but the explanation layer would not actually support learning well. Return the highest-priority explanation gaps first.
```

#### `M-D12` Difficulty And Progression Audit

- Function type: Difficulty and progression audit
- Recommended cadence: Daily, 10:20 AM
- Mode: Report only

```text
Review the question-bank and lesson-linked practice flow for difficulty progression issues. Look for sequences that jump too fast, stay too easy too long, or fail to create a usable pedagogical ramp. Return a concise progression audit with the most important problem clusters first.
```

#### `M-D13` Duplicate-And-Near-Duplicate Question Scan

- Function type: Duplicate-and-near-duplicate question scan
- Recommended cadence: Daily, 10:40 AM
- Mode: Report only

```text
Audit LSAT Mastery for duplicate or near-duplicate question inventory. Focus on places where repeated questions, overly similar variants, or stale mirrored assets reduce the real value of the bank. Return a report showing exact duplicates, likely duplicates, and the highest-risk practice-value collisions.
```

### Curriculum Architecture And Pedagogy

#### `M-W1` Curriculum Clarity And Prerequisite Gap Scan

- Function type: Curriculum clarity gap scan
- Recommended cadence: Weekly, Thursday at 2:00 PM
- Mode: Report only

```text
Review LSAT Mastery as a curriculum system and identify lessons or module sequences that appear under-scaffolded, redundant, or missing prerequisite explanation. Focus on high-value clarity issues that would make the course easier to navigate or easier to assign from the website portal. Return a concise grouped report with lesson IDs, titles, and recommended follow-up work.
```

#### `M-D14` Prerequisite And Scaffolding Audit

- Function type: Prerequisite and scaffolding audit
- Recommended cadence: Daily, 11:00 AM
- Mode: Report only

```text
Review LSAT Mastery for lessons that assume too much too early or rely on prior concepts without making that dependence visible. Focus on logical scaffolding, not just broken links. Return a concise scaffolding audit with the most important missing-prerequisite problems first.
```

#### `M-D15` Concept Repetition And Overlap Scan

- Function type: Concept repetition and overlap scan
- Recommended cadence: Daily, 11:20 AM
- Mode: Report only

```text
Audit the LSAT Mastery curriculum for concept repetition that is no longer additive. Look for modules or lessons that keep revisiting the same point without creating a sharper distinction, deeper framework, or new practice value. Return a concise overlap report with the most wasteful repetition first.
```

#### `M-D16` Lesson Objective Sharpness Review

- Function type: Lesson objective sharpness review
- Recommended cadence: Daily, 11:40 AM
- Mode: Report only

```text
Review LSAT Mastery lessons for objective clarity. Focus on whether each lesson has a crisp teachable point, whether the title matches the actual instruction, and whether the lesson earns its place in the curriculum. Return a short report with the weakest lesson objectives first.
```

#### `M-D17` Framework Codification Scan

- Function type: Framework codification scan
- Recommended cadence: Daily, 12:00 PM
- Mode: Report or draft only

```text
Review LSAT Mastery for lessons that contain useful insight but are not yet codified into named, repeatable frameworks students can actually remember and use. Return the strongest framework-codification opportunities with a short note on what should be formalized.
```

#### `M-D18` Homework And Drill Leverage Scan

- Function type: Homework and drill leverage scan
- Recommended cadence: Daily, 12:20 PM
- Mode: Report or draft only

```text
Audit LSAT Mastery for where course content should generate stronger homework, drill, or assignment assets. Focus on lessons that teach something worth rehearsing but do not yet clearly produce usable follow-up practice. Return the best leverage points for turning instruction into assignments.
```

### Product And Cross-Stack Leverage

#### `M-D3` Export Contract Review

- Function type: Export contract review
- Recommended cadence: Daily, 12:40 PM
- Mode: Report first, fix small export-script mismatches if safe

```text
Review LSAT Mastery export behavior with emphasis on canonical-course, interchange-course, and legacy full-course outputs. Identify recent changes that could break downstream use in DataToolkit, stale docs about export roles, or places where the export builders and course data are out of sync. If a fix is small and limited to local export code or docs, make it. Otherwise return a concrete contract-risk report.
```

#### `M-D19` DataToolkit Handoff Opportunity Scan

- Function type: DataToolkit handoff opportunity scan
- Recommended cadence: Daily, 1:00 PM
- Mode: Report only

```text
Review LSAT Mastery with emphasis on what should cleanly hand off into DataToolkit. Focus on export fidelity, category mapping, lesson-question relationships, and any course-side changes that should influence toolkit workflows. Return a concise report on the highest-value handoff opportunities or risks.
```

#### `M-D20` Website Portal Leverage Audit

- Function type: Website portal leverage audit
- Recommended cadence: Daily, 1:20 PM
- Mode: Report only

```text
Audit LSAT Mastery from the perspective of the website student portal. Look for curriculum surfaces, lesson metadata, and module organization choices that either help or hurt the portal experience. Return the most important course-side improvements that would make portal use cleaner and more intuitive.
```

#### `M-D21` Editorial Spinout Opportunity Scan

- Function type: Editorial spinout opportunity scan
- Recommended cadence: Daily, 1:40 PM
- Mode: Draft or report only

```text
Review LSAT Mastery lessons and question clusters for ideas that should spin out into public editorial content. Focus on concepts that are strong enough to teach publicly without giving away the entire course experience. Return a ranked list of the best editorial spinout opportunities.
```

#### `M-D22` Assignment-Pack Buildout Scan

- Function type: Assignment-pack buildout scan
- Recommended cadence: Daily, 2:00 PM
- Mode: Report or draft only

```text
Identify lesson clusters inside LSAT Mastery that are ripe for stronger assignment packaging. Focus on combinations that would work well as a short sequence, tutoring homework block, or linked lesson-plus-practice package. Return the best assignment-pack opportunities and why they matter.
```

#### `M-D23` Long-Horizon Course Strategy Memo

- Function type: Long-horizon course strategy memo
- Recommended cadence: Daily, 2:20 PM
- Mode: Draft only

```text
Write a long-horizon strategy memo for the LSAT Mastery course based on the current code and curriculum structure. Identify where the course is strongest, where it is still too fragile or underbuilt, what the next major improvement bet should be, and what should not be prioritized yet. Keep it concrete and operator-facing.
```

### Student Outcome And Assignment Intelligence

#### `M-D24` Skill-Transfer Outcome Scan

- Function type: Skill-transfer outcome scan
- Recommended cadence: Daily, 2:40 PM
- Mode: Report only

```text
Review LSAT Mastery lessons and practice surfaces for whether they are likely to produce real performance transfer rather than just local understanding. Focus on whether lessons teach reusable moves, whether drills reinforce those moves, and where the current structure may create recognition without durable skill. Return a concise outcome-risk report.
```

#### `M-D25` Wrong-Answer-Pattern Lesson Mapping

- Function type: Wrong-answer-pattern lesson mapping
- Recommended cadence: Daily, 3:00 PM
- Mode: Report or draft only

```text
Think across likely wrong-answer-journal patterns and identify where LSAT Mastery should do a better job addressing them. Focus on recurring reasoning mistakes, approach errors, and habit failures that the current curriculum may not be targeting clearly enough. Return the strongest lesson-gap mappings first.
```

#### `M-D26` Assignment-Sequence Strategy Audit

- Function type: Assignment-sequence strategy audit
- Recommended cadence: Daily, 3:20 PM
- Mode: Report only

```text
Review LSAT Mastery as something that needs to be assigned in the real tutoring workflow, not just browsed. Focus on whether the current module and lesson structure supports sensible assignment sequencing, homework packaging, and staged reinforcement. Return the most important assignment-strategy gaps or improvements.
```

#### `M-D27` Diagnostic-To-Curriculum Routing Scan

- Function type: Diagnostic-to-curriculum routing scan
- Recommended cadence: Daily, 3:40 PM
- Mode: Report or draft only

```text
Review LSAT Mastery for how well it could support routing from student diagnostic signals into specific lessons or lesson clusters. Focus on question types, skill deficits, and obvious performance patterns that should cleanly map into the curriculum. Return the strongest routing opportunities and the weakest current gaps.
```

#### `M-D28` Retention-Risk Lesson Scan

- Function type: Retention-risk lesson scan
- Recommended cadence: Daily, 4:00 PM
- Mode: Report only

```text
Audit LSAT Mastery for lessons or module sequences that may create unnecessary frustration, confusion, or loss of momentum for students. Focus on friction that could hurt continuation or make the course feel harder to use than it needs to be. Return a concise retention-risk report with the biggest sources of drag first.
```

### Productization And Offer Strategy

#### `M-D29` Premium-Offer Support Scan

- Function type: Premium-offer support scan
- Recommended cadence: Daily, 4:20 PM
- Mode: Report only

```text
Review LSAT Mastery for how well it supports the premium GT tutoring offer. Focus on whether the course demonstrates rare value, complements tutoring rather than flattening it, and reinforces the seriousness of the broader business. Return the strongest support points and the clearest mismatches.
```

#### `M-D30` Standalone-Product Opportunity Scan

- Function type: Standalone-product opportunity scan
- Recommended cadence: Daily, 4:40 PM
- Mode: Draft or report only

```text
Identify parts of LSAT Mastery that could plausibly become standalone sellable products, mini-courses, or high-value focused modules. Focus on coherent clusters with clear outcomes and obvious commercial usefulness. Return the strongest product opportunities with a note on what would need to be built out.
```

#### `M-D31` Workshop And Intensive Spinout Planner

- Function type: Workshop and intensive spinout planner
- Recommended cadence: Daily, 5:00 PM
- Mode: Draft only

```text
Review LSAT Mastery for lesson clusters that could become workshops, intensives, or live teaching events. Focus on modules with enough structure and payoff to stand up as concentrated offers. Return the best spinout candidates, a suggested format, and why each would work.
```

#### `M-D32` Evergreen Asset Buildout Scan

- Function type: Evergreen asset buildout scan
- Recommended cadence: Daily, 5:20 PM
- Mode: Report only

```text
Scan LSAT Mastery for lessons that should become evergreen teaching assets, reference modules, or stable backbone content used repeatedly across the business. Focus on concepts with durable value rather than timely or narrow pieces. Return the highest-value evergreen buildout candidates first.
```

#### `M-D33` Monetizable Differentiation Audit

- Function type: Monetizable differentiation audit
- Recommended cadence: Daily, 5:40 PM
- Mode: Report only

```text
Audit LSAT Mastery for what actually makes it commercially distinct. Focus on frameworks, lesson architecture, question usage, and instructional style that could justify premium pricing or stronger positioning. Return a concise differentiation audit grounded in what is actually present in the course.
```

### Brand And Market Positioning

#### `M-D34` Competitive Differentiation Scan

- Function type: Competitive differentiation scan
- Recommended cadence: Daily, 6:00 PM
- Mode: Report only

```text
Review LSAT Mastery against the kind of generic LSAT course patterns that dominate the market and identify where this course can separate more clearly. Focus on pedagogical distinctiveness, practical realism, and areas where the current course still feels too conventional. Return a concise differentiation report.
```

#### `M-D35` Premium-Positioning Curriculum Audit

- Function type: Premium-positioning curriculum audit
- Recommended cadence: Daily, 6:20 PM
- Mode: Report only

```text
Audit the current LSAT Mastery curriculum for whether it feels like a premium educational product rather than a commodity prep course. Focus on structure, depth, clarity, and the signals of seriousness the course sends. Return the strongest premium-positioning wins and the biggest weak spots.
```

#### `M-D36` Signature-Framework Mining

- Function type: Signature-framework mining
- Recommended cadence: Daily, 6:40 PM
- Mode: Draft only

```text
Mine LSAT Mastery for the strongest recurring frameworks, named moves, and teaching systems that GT should become known for. Focus on concepts that feel memorable, repeatable, and genuinely useful to students. Return the best candidate signature frameworks and why they matter.
```

#### `M-D37` Trust-Builder Lesson Scan

- Function type: Trust-builder lesson scan
- Recommended cadence: Daily, 7:00 PM
- Mode: Report or draft only

```text
Identify which LSAT Mastery lessons most strongly build trust in Germaine’s authority and seriousness, and which lessons fail to do so despite occupying important space. Focus on instructional honesty, usefulness, and unmistakable competence. Return the best trust builders and the biggest missed chances.
```

#### `M-D38` Public-Story Alignment Memo

- Function type: Public-story alignment memo
- Recommended cadence: Daily, 7:20 PM
- Mode: Draft only

```text
Write a short memo on the story LSAT Mastery is telling publicly about GT as a business and Germaine as a teacher. Focus on whether the current course structure aligns with the brand narrative GT should be building, and identify any meaningful mismatch between the product and the story.
```

### Research, Assessment, And Strategic Intelligence

#### `M-D39` Assessment-Design Opportunity Scan

- Function type: Assessment-design opportunity scan
- Recommended cadence: Daily, 7:40 PM
- Mode: Report or draft only

```text
Review LSAT Mastery for where better assessment design would improve the course. Focus on ways to tell whether a lesson actually worked, whether a student is ready to move on, and where mastery checks are currently too weak or absent. Return the strongest assessment-design opportunities first.
```

#### `M-D40` Coverage-Gap And Roadmap Memo

- Function type: Coverage-gap and roadmap memo
- Recommended cadence: Daily, 8:00 PM
- Mode: Draft only

```text
Review the current course structure and write a concise roadmap memo identifying the most important missing coverage areas, thinly built parts of the course, and what the next sequence of buildout should probably be. Keep it practical and tied to the real current repo.
```

#### `M-D41` Longitudinal Student-Value Hypothesis Scan

- Function type: Longitudinal student-value hypothesis scan
- Recommended cadence: Daily, 8:20 PM
- Mode: Report only

```text
Think through how LSAT Mastery is likely to change student performance over time if used well. Focus on what kinds of value accumulate, where the current course may underdeliver over longer use, and what patterns would matter most if you wanted the course to compound student gains. Return a short hypothesis report.
```

#### `M-D42` Research-Question Generator

- Function type: Research-question generator
- Recommended cadence: Daily, 8:40 PM
- Mode: Draft only

```text
Generate the most important next research questions LSAT Mastery should answer. Focus on unresolved curriculum decisions, lesson-design uncertainties, question-bank strategy issues, and student-use assumptions that deserve explicit investigation. Return the strongest questions with one sentence on why each matters.
```

#### `M-D43` Big-Bet Course Strategy Note

- Function type: Big-bet course strategy note
- Recommended cadence: Daily, 9:00 PM
- Mode: Draft only

```text
Write a big-bet strategy note for LSAT Mastery. Based on the current repo, identify the single most important forward-looking course bet, why it matters, what it could unlock across the stack, and what should be deprioritized if you choose it. Keep it concrete and operator-facing.
```

### Portfolio And Operating Model

#### `M-D44` Mastery-To-Stack Systems Map

- Function type: Mastery-to-stack systems map
- Recommended cadence: Daily, 9:20 PM
- Mode: Report only

```text
Review LSAT Mastery as one part of the broader GT stack and map how it should interact with tutoring, the website portal, Editorial Stream, DataToolkit, and future products. Focus on where the course is already a useful system component and where it still operates too independently. Return a concise systems map memo with the highest-leverage integration opportunities first.
```

#### `M-D45` Tutor Workflow Integration Scan

- Function type: Tutor workflow integration scan
- Recommended cadence: Daily, 9:40 PM
- Mode: Report only

```text
Audit LSAT Mastery for fit with the real tutoring workflow. Focus on whether tutors can actually assign it, reference it, reinforce it, and build on it without extra friction. Return the biggest tutor-workflow wins and the biggest mismatches between the course and real tutoring operations.
```

#### `M-D46` Student Lifecycle Leverage Audit

- Function type: Student lifecycle leverage audit
- Recommended cadence: Daily, 10:00 PM
- Mode: Report only

```text
Review LSAT Mastery across the full student lifecycle: acquisition, onboarding, active tutoring, retention, and continuation. Focus on where the course creates leverage at each stage and where it is currently underused. Return a concise lifecycle-leverage report with the most valuable missed opportunities first.
```

#### `M-D47` Internal Training Playbook Scan

- Function type: Internal training playbook scan
- Recommended cadence: Daily, 10:20 PM
- Mode: Report or draft only

```text
Review LSAT Mastery for parts of the course that should double as internal training assets or tutor-consistency tools. Focus on frameworks, lesson structures, and instructional language that could tighten how GT teaches across contexts. Return the best internal-playbook opportunities and why they matter.
```

#### `M-D48` Course Operating-Model Memo

- Function type: Course operating-model memo
- Recommended cadence: Daily, 10:40 PM
- Mode: Draft only

```text
Write a practical operating-model memo for LSAT Mastery. Focus on how this course should function as a live business asset rather than just a static repo: who it serves, how it gets assigned, how it compounds tutoring, and what kinds of maintenance or evolution actually matter. Keep it concrete and operational.
```

### Packaging, Delivery, And Institutional Expansion

#### `M-D49` Group-Program Packaging Planner

- Function type: Group-program packaging planner
- Recommended cadence: Daily, 11:00 PM
- Mode: Draft only

```text
Review LSAT Mastery for clusters that could be repackaged into group programs, study intensives, or structured cohort products. Focus on combinations with clear outcomes and strong teaching sequence. Return the best packaging ideas with a short note on who they would be for and why they would work.
```

#### `M-D50` Institutional Adoption Scan

- Function type: Institutional adoption scan
- Recommended cadence: Daily, 11:20 PM
- Mode: Report only

```text
Think about whether parts of LSAT Mastery could work in school, advising, or other institutional contexts. Focus on lesson clusters that are structured, legible, and portable enough to matter outside one-on-one tutoring. Return the strongest institutional-use opportunities and the biggest blockers.
```

#### `M-D51` Cohort-Delivery Strategy Note

- Function type: Cohort-delivery strategy note
- Recommended cadence: Daily, 11:40 PM
- Mode: Draft only

```text
Reframe LSAT Mastery as if it needed to be delivered to a cohort instead of only through self-paced or tutor-assigned use. Focus on what sequencing, pacing, reinforcement, and support structures would need to change. Return a concise cohort-delivery strategy note.
```

#### `M-D52` Licensing And Reuse Opportunity Scan

- Function type: Licensing and reuse opportunity scan
- Recommended cadence: Daily, 12:00 AM
- Mode: Report only

```text
Review LSAT Mastery for parts that could plausibly be reused, licensed, or repurposed across other GT surfaces or future partnerships. Focus on assets that are durable, distinctive, and not overly dependent on fragile local context. Return the best reuse opportunities and the main cautions around them.
```

#### `M-D53` Credential And Milestone Design Scan

- Function type: Credential and milestone design scan
- Recommended cadence: Daily, 12:20 AM
- Mode: Draft or report only

```text
Review LSAT Mastery for places where milestone, checkpoint, or credential-style markers could make student progress more legible and motivating without turning the course into shallow gamification. Return the best milestone-design opportunities and the logic behind each.
```

### Evidence, Proof, And Measurement Architecture

#### `M-D54` Evidence Architecture Audit

- Function type: Evidence architecture audit
- Recommended cadence: Daily, 12:40 AM
- Mode: Report only

```text
Audit LSAT Mastery for what kinds of evidence it should eventually produce if GT wanted to prove the course is working. Focus on proof of understanding, proof of transfer, proof of consistency, and proof of student value. Return a concise evidence-architecture report grounded in the current course.
```

#### `M-D55` Outcome-Proof Asset Scan

- Function type: Outcome-proof asset scan
- Recommended cadence: Daily, 1:00 AM
- Mode: Report or draft only

```text
Review LSAT Mastery for where the course could generate stronger proof assets for marketing, student trust, or internal decision-making. Focus on lessons and structures that could produce before-after evidence, clean demonstrations, or compelling proof of seriousness. Return the best proof-asset opportunities first.
```

#### `M-D56` Student Case-Study Extraction Planner

- Function type: Student case-study extraction planner
- Recommended cadence: Daily, 1:20 AM
- Mode: Draft only

```text
Identify which parts of LSAT Mastery would make the strongest foundations for future case studies about student growth, better reasoning, or improved execution. Focus on lessons with clear transformation potential rather than vague inspiration. Return the best case-study extraction opportunities and why they are promising.
```

#### `M-D57` Learning Telemetry Hypothesis Memo

- Function type: Learning telemetry hypothesis memo
- Recommended cadence: Daily, 1:40 AM
- Mode: Draft only

```text
Think through what meaningful learning telemetry would look like for LSAT Mastery if GT wanted to know whether the course was truly working. Focus on signals that would matter pedagogically and commercially, not vanity metrics. Return a concise telemetry hypothesis memo.
```

#### `M-D58` Course ROI Modeling Note

- Function type: Course ROI modeling note
- Recommended cadence: Daily, 2:00 AM
- Mode: Draft only

```text
Write a practical ROI note for LSAT Mastery. Focus on how the course creates value for students, for tutoring delivery, and for the broader GT business, and where that value is strongest or weakest today. Keep it concrete rather than financial-model theater.
```

### IP, Category Building, And Long-Horizon Bets

#### `M-D59` IP Moat And Asset-Ownership Scan

- Function type: IP moat and asset-ownership scan
- Recommended cadence: Daily, 2:20 AM
- Mode: Report only

```text
Review LSAT Mastery for which parts of the course could become durable GT intellectual property or long-lived competitive assets. Focus on frameworks, lesson architecture, question organization, and pedagogical systems that are hard to casually copy. Return the strongest moat-building assets first.
```

#### `M-D60` Canonical-Method Architecture Memo

- Function type: Canonical-method architecture memo
- Recommended cadence: Daily, 2:40 AM
- Mode: Draft only

```text
Write a memo clarifying the canonical method architecture that LSAT Mastery should embody. Focus on the deep instructional logic that should unify the course, not just the current module list. Return a concrete note on the method architecture this course should most clearly express.
```

#### `M-D61` Five-Year Course Platform Note

- Function type: Five-year course platform note
- Recommended cadence: Daily, 3:00 AM
- Mode: Draft only

```text
Think about LSAT Mastery as if it compounded for five years. Focus on what kind of platform, library, or ecosystem it could become if GT keeps strengthening it intelligently. Return a concise five-year note with the most important compounding paths and the biggest risks to that trajectory.
```

#### `M-D62` GT Learning Ecosystem Expansion Scan

- Function type: GT learning ecosystem expansion scan
- Recommended cadence: Daily, 3:20 AM
- Mode: Report or draft only

```text
Review LSAT Mastery for what adjacent learning products, learning layers, or support systems it naturally points toward. Focus on expansions that would actually deepen the GT ecosystem instead of creating shallow side projects. Return the best ecosystem expansion opportunities first.
```

#### `M-D63` Foundational Research Agenda Note

- Function type: Foundational research agenda note
- Recommended cadence: Daily, 3:40 AM
- Mode: Draft only

```text
Write a foundational research agenda note for LSAT Mastery. Focus on the deepest unresolved questions about pedagogy, sequencing, skill transfer, course structure, and product leverage that GT should keep investigating over time. Return the most important long-horizon questions and why they matter.
```

### Adaptive Learning, Personalization, And Intelligence

#### `M-D64` Personalization Architecture Scan

- Function type: Personalization architecture scan
- Recommended cadence: Daily, 4:00 AM
- Mode: Report only

```text
Review LSAT Mastery for where the course should adapt more intelligently to different student states, not just present one fixed path. Focus on question-type weaknesses, pacing differences, confidence gaps, and obvious branching moments. Return a concise personalization-architecture report grounded in the current course.
```

#### `M-D65` Adaptive Sequencing Strategy Note

- Function type: Adaptive sequencing strategy note
- Recommended cadence: Daily, 4:20 AM
- Mode: Draft only

```text
Write a strategy note on how LSAT Mastery sequencing should flex for different kinds of students. Focus on when the standard order should hold, when it should bend, and what kinds of triggers should move a student into a different lesson path. Keep it practical and tied to the real curriculum.
```

#### `M-D66` Mastery-Threshold Design Audit

- Function type: Mastery-threshold design audit
- Recommended cadence: Daily, 4:40 AM
- Mode: Report only

```text
Audit LSAT Mastery for what should actually count as mastery at the lesson or module level. Focus on places where the course implies progress without a clear threshold for real readiness. Return the most important gaps in mastery-threshold design and the strongest opportunities to tighten them.
```

#### `M-D67` Intervention-Trigger Mapping

- Function type: Intervention-trigger mapping
- Recommended cadence: Daily, 5:00 AM
- Mode: Report or draft only

```text
Review LSAT Mastery and identify where the system should trigger extra support, human intervention, tutoring escalation, or more targeted assignment. Focus on moments where a student is likely to stall or mislearn without help. Return a concise trigger map with the most important intervention points first.
```

#### `M-D68` Student-Profile Routing Planner

- Function type: Student-profile routing planner
- Recommended cadence: Daily, 5:20 AM
- Mode: Draft only

```text
Draft a routing planner for different LSAT student archetypes inside LSAT Mastery. Focus on how students with different timing profiles, accuracy problems, reasoning weaknesses, or confidence issues should move through the course differently. Return the clearest profile-to-path mappings you can justify.
```

### Distribution, Partnerships, And Channel Strategy

#### `M-D69` Channel Expansion Memo

- Function type: Channel expansion memo
- Recommended cadence: Daily, 5:40 AM
- Mode: Draft only

```text
Write a memo on the best new channels through which LSAT Mastery could be delivered, surfaced, or sold. Focus on plausible channels that fit GT’s premium position and real operational capacity, not generic growth fantasy. Return the strongest channel expansion opportunities and the key caution for each.
```

#### `M-D70` Partner-Education Packaging Scan

- Function type: Partner-education packaging scan
- Recommended cadence: Daily, 6:00 AM
- Mode: Report or draft only

```text
Review LSAT Mastery for pieces that could be repackaged for collaborators, referral partners, or aligned organizations. Focus on educational units that are coherent, portable, and still strategically safe to expose. Return the best partner-facing packaging opportunities first.
```

#### `M-D71` Admissions-Crossover Opportunity Scan

- Function type: Admissions-crossover opportunity scan
- Recommended cadence: Daily, 6:20 AM
- Mode: Report only

```text
Think across LSAT Mastery and the broader prelaw journey and identify where course ideas could support admissions-related positioning, advising trust, or broader prelaw brand authority without diluting the LSAT core. Return the best crossover opportunities and the main risk for each.
```

#### `M-D72` Prelaw-Community Partnership Scan

- Function type: Prelaw-community partnership scan
- Recommended cadence: Daily, 6:40 AM
- Mode: Report only

```text
Review LSAT Mastery for what parts could matter to prelaw clubs, advising programs, or other student communities. Focus on lesson clusters or course features that are structured enough to support partnerships or community-based use. Return the strongest partnership openings and the biggest adoption barriers.
```

#### `M-D73` Free-To-Paid Ladder Design Note

- Function type: Free-to-paid ladder design note
- Recommended cadence: Daily, 7:00 AM
- Mode: Draft only

```text
Write a note on how LSAT Mastery should fit into a smarter free-to-paid ladder for GT. Focus on what should be public, what should be gated, what should lead naturally into tutoring or paid learning, and what should not be given away too casually. Keep it commercially grounded.
```

### Credentialing, Authority, And Institutional Proof

#### `M-D74` Certification Path Planner

- Function type: Certification path planner
- Recommended cadence: Daily, 7:20 AM
- Mode: Draft or report only

```text
Explore whether LSAT Mastery could support meaningful certification or formalized mastery paths without becoming gimmicky. Focus on whether there are lesson clusters or milestone structures that could create real signaling value. Return the best certification-path possibilities and the strongest argument against weak versions of the idea.
```

#### `M-D75` Instructor-Proof Asset Audit

- Function type: Instructor-proof asset audit
- Recommended cadence: Daily, 7:40 AM
- Mode: Report only

```text
Audit LSAT Mastery for the elements that most strongly prove Germaine’s teaching quality and instructional rigor. Focus on assets that a skeptical student, parent, or outside observer would see as evidence of real expertise. Return the strongest proof assets and the most obvious missing ones.
```

#### `M-D76` Benchmarking And Standards Memo

- Function type: Benchmarking and standards memo
- Recommended cadence: Daily, 8:00 AM
- Mode: Draft only

```text
Write a memo on what standards LSAT Mastery should be benchmarked against. Focus on pedagogy quality, lesson structure, practice integrity, tutoring leverage, and student usability rather than superficial feature comparison. Return the most useful benchmark framework for evaluating the course over time.
```

#### `M-D77` Institutional Trust Signal Scan

- Function type: Institutional trust signal scan
- Recommended cadence: Daily, 8:20 AM
- Mode: Report only

```text
Review LSAT Mastery for what would make schools, advising programs, or serious external stakeholders trust it more. Focus on signals of rigor, clarity, consistency, and reliability that go beyond marketing language. Return the highest-value trust signals GT could strengthen.
```

#### `M-D78` Flagship Capstone Design Note

- Function type: Flagship capstone design note
- Recommended cadence: Daily, 8:40 AM
- Mode: Draft only

```text
Design the strongest plausible flagship capstone experience for LSAT Mastery. Focus on what kind of culminating sequence, synthesis task, or advanced experience would make the course feel like a serious complete system. Return a concrete capstone concept and what it should prove.
```

### Frontier Bets And Scenario Planning

#### `M-D79` AI-Assisted Course Companion Strategy Scan

- Function type: AI-assisted course companion strategy scan
- Recommended cadence: Daily, 9:00 AM
- Mode: Report or draft only

```text
Review LSAT Mastery for where an AI-assisted course companion could add real value without undermining the pedagogy. Focus on guidance, routing, reinforcement, and clarification use cases that actually fit the course. Return the best companion opportunities and the biggest reasons to be cautious.
```

#### `M-D80` Tutor-Plus-Course Hybrid Model Memo

- Function type: Tutor-plus-course hybrid model memo
- Recommended cadence: Daily, 9:20 AM
- Mode: Draft only

```text
Write a memo on the strongest hybrid model between LSAT Mastery as a product and GT tutoring as a service. Focus on where the course should do the heavy lifting, where tutors should intervene, and how the hybrid could become more powerful than either alone. Keep it concrete and strategic.
```

#### `M-D81` Scenario-Planning Stress Test

- Function type: Scenario-planning stress test
- Recommended cadence: Daily, 9:40 AM
- Mode: Report only

```text
Stress-test LSAT Mastery against several plausible future scenarios: increased competition, faster AI commoditization, higher student expectations, lower attention spans, or greater pressure for measurable outcomes. Return a concise report on where the course looks resilient and where it looks exposed.
```

#### `M-D82` Moat Erosion Risk Audit

- Function type: Moat erosion risk audit
- Recommended cadence: Daily, 10:00 AM
- Mode: Report only

```text
Audit LSAT Mastery for what could cause its defensibility to erode over time. Focus on parts of the course that are too easy to imitate, too weakly differentiated, or not yet converted into durable GT advantages. Return the biggest moat-erosion risks and the best ways to harden them.
```

#### `M-D83` Category-Defining Flagship Bet Note

- Function type: Category-defining flagship bet note
- Recommended cadence: Daily, 10:20 AM
- Mode: Draft only

```text
Write a note on the boldest category-defining flagship bet LSAT Mastery could make next. Focus on a move that would meaningfully change the product’s strategic position if GT pursued it seriously. Return the flagship bet, what it could unlock, and what it would force GT to get right.
```

### Ecosystem Governance, Standards, And Institutional Control

#### `M-D84` Open-Standard Design Memo

- Function type: Open-standard design memo
- Recommended cadence: Daily, 10:40 AM
- Mode: Draft only

```text
Write a memo on whether LSAT Mastery should eventually define or influence an open standard for high-quality reasoning instruction, lesson structure, or mastery progression. Focus on standards GT could credibly shape from strength, not vanity standard-setting. Return the strongest open-standard opportunities and the main risks of trying.
```

#### `M-D85` Tutor-Certification Ecosystem Scan

- Function type: Tutor-certification ecosystem scan
- Recommended cadence: Daily, 11:00 AM
- Mode: Report or draft only

```text
Think beyond student use and explore whether LSAT Mastery could support a tutor-training or tutor-certification ecosystem over time. Focus on what parts of the course would need to exist for that to be real rather than superficial branding. Return the best certification-ecosystem opportunities and the strongest blockers.
```

#### `M-D86` Benchmark Dataset Strategy Note

- Function type: Benchmark dataset strategy note
- Recommended cadence: Daily, 11:20 AM
- Mode: Draft only

```text
Write a strategy note on whether LSAT Mastery could anchor a recognized benchmark dataset, challenge set, or structured evaluation corpus for reasoning instruction. Focus on what would make a benchmark meaningful, defensible, and valuable to GT over time. Return the strongest benchmark strategy you can justify.
```

#### `M-D87` Institutional Reporting Layer Scan

- Function type: Institutional reporting layer scan
- Recommended cadence: Daily, 11:40 AM
- Mode: Report only

```text
Review LSAT Mastery for what an institutional stakeholder would want to see if the product were ever used in a school, advising, or partner setting. Focus on progress visibility, rigor, proof of use, and reporting needs. Return the most important reporting-layer opportunities and the main current gaps.
```

#### `M-D88` Trust-Consortium And Standards-Body Memo

- Function type: Trust-consortium and standards-body memo
- Recommended cadence: Daily, 12:00 PM
- Mode: Draft only

```text
Write a memo exploring whether GT should eventually participate in, convene, or influence a standards conversation around serious LSAT or reasoning instruction. Focus on where LSAT Mastery could support that role and what GT would need to build before it could credibly matter there.
```

### Network Effects, Community, And Flywheel Design

#### `M-D89` Alumni And Peer-Learning Network Scan

- Function type: Alumni and peer-learning network scan
- Recommended cadence: Daily, 12:20 PM
- Mode: Report only

```text
Review LSAT Mastery for how it could create value beyond solo course consumption through alumni loops, peer learning, or student-to-student reinforcement. Focus on network effects that would deepen learning rather than add empty community overhead. Return the strongest peer-network opportunities first.
```

#### `M-D90` Community Insight-Loop Planner

- Function type: Community insight-loop planner
- Recommended cadence: Daily, 12:40 PM
- Mode: Draft only

```text
Draft a plan for how learner interaction around LSAT Mastery could create a better future version of the course. Focus on what kinds of community signals, discussion patterns, or repeated friction would be most useful to feed back into the product. Return the strongest insight-loop design.
```

#### `M-D91` Mentor-Marketplace Hybrid Memo

- Function type: Mentor-marketplace hybrid memo
- Recommended cadence: Daily, 1:00 PM
- Mode: Draft only

```text
Explore whether LSAT Mastery could eventually support a mentor or guide layer that sits between self-study and full premium tutoring. Focus on what a high-quality mentor-marketplace hybrid would need to avoid becoming low-trust commodity help. Return the strongest version of the idea and the biggest caution.
```

#### `M-D92` Reputation And Progress Graph Strategy

- Function type: Reputation and progress graph strategy
- Recommended cadence: Daily, 1:20 PM
- Mode: Draft or report only

```text
Think through what a meaningful reputation or progress graph would look like around LSAT Mastery if GT wanted progress to be legible across the broader ecosystem. Focus on signals that would matter educationally and commercially without becoming fake prestige. Return the best graph strategy you can justify.
```

#### `M-D93` Referral And Advocacy Engine Scan

- Function type: Referral and advocacy engine scan
- Recommended cadence: Daily, 1:40 PM
- Mode: Report only

```text
Review LSAT Mastery for how a stronger student experience could naturally compound referrals, advocacy, and word-of-mouth. Focus on aspects of the product that would make students more likely to talk about it because it genuinely changed how they think or perform. Return the strongest referral-engine opportunities first.
```

### Expansion Horizons And Adjacencies

#### `M-D94` Adjacent-Exam Expansion Scan

- Function type: Adjacent-exam expansion scan
- Recommended cadence: Daily, 2:00 PM
- Mode: Report only

```text
Review LSAT Mastery for how much of its instructional model could travel to adjacent exams or neighboring reasoning-heavy contexts. Focus on what is truly portable, what is deeply LSAT-specific, and where GT might have expansion logic without losing strategic focus. Return the strongest adjacent-expansion opportunities and risks.
```

#### `M-D95` Internationalization And Localization Note

- Function type: Internationalization and localization note
- Recommended cadence: Daily, 2:20 PM
- Mode: Draft only

```text
Write a note on how LSAT Mastery would need to change if GT ever wanted the product to work across different regions, educational norms, or delivery contexts. Focus on what is portable, what would need localization, and what could break outside the current assumed student environment.
```

#### `M-D96` Prelaw Foundation-Year Pathway Planner

- Function type: Prelaw foundation-year pathway planner
- Recommended cadence: Daily, 2:40 PM
- Mode: Draft only

```text
Reframe LSAT Mastery as one layer inside a broader prelaw foundation-year pathway. Focus on what comes before, what surrounds, and what follows the current course if GT wanted to build a fuller prelaw learning system. Return the strongest pathway design you can justify.
```

#### `M-D97` Law-School Bridge Curriculum Scan

- Function type: Law-school bridge curriculum scan
- Recommended cadence: Daily, 3:00 PM
- Mode: Report or draft only

```text
Review LSAT Mastery for what parts of its pedagogy could extend into the transition from LSAT prep to early law-school success. Focus on reasoning frameworks or learning habits that may remain valuable beyond the test itself. Return the strongest law-school-bridge opportunities and the biggest mismatch risks.
```

#### `M-D98` Consumer-To-Enterprise Expansion Memo

- Function type: Consumer-to-enterprise expansion memo
- Recommended cadence: Daily, 3:20 PM
- Mode: Draft only

```text
Write a memo exploring how LSAT Mastery could evolve from a direct-to-student product into something that also supports larger institutional, programmatic, or enterprise-style relationships. Focus on what would need to change in packaging, proof, and control surfaces for that to become real.
```

### Category Control, Research Labs, And Moonshots

#### `M-D99` Reasoning-Ontology Architecture Note

- Function type: Reasoning-ontology architecture note
- Recommended cadence: Daily, 3:40 PM
- Mode: Draft only

```text
Write a note on the deepest reasoning ontology LSAT Mastery could eventually encode. Focus on how the course might formalize the underlying map of argument types, failure modes, decision moves, and learning structures that GT believes matter most. Return the strongest ontology architecture you can articulate from the current product.
```

#### `M-D100` GT Benchmark And Challenge Exam Strategy

- Function type: GT benchmark and challenge exam strategy
- Recommended cadence: Daily, 4:00 PM
- Mode: Draft or report only

```text
Explore whether GT should eventually create its own benchmark or challenge experience tied to LSAT Mastery. Focus on what a serious benchmark could prove about reasoning growth, course rigor, or GT standards without collapsing into gimmickry. Return the strongest version of the idea and the clearest reasons to avoid a weak one.
```

#### `M-D101` Research Lab And Publication Agenda

- Function type: Research lab and publication agenda
- Recommended cadence: Daily, 4:20 PM
- Mode: Draft only

```text
Write a research-lab and publication agenda for LSAT Mastery if GT wanted the course to become part of a more formal knowledge-production engine. Focus on what kinds of questions, findings, reports, or public artifacts the product could generate over time. Keep the agenda grounded in what the current course actually suggests.
```

#### `M-D102` Anti-Commoditization Experience Design Memo

- Function type: Anti-commoditization experience design memo
- Recommended cadence: Daily, 4:40 PM
- Mode: Draft only

```text
Write a memo on how LSAT Mastery should be designed to stay hard to commoditize in an AI-heavy market. Focus on what kinds of product experience, instructional structure, trust, and integration make the course more than a pile of explanations. Return the strongest anti-commoditization design logic you can justify.
```

#### `M-D103` Founder-Scale Moonshot Platform Bet

- Function type: Founder-scale moonshot platform bet
- Recommended cadence: Daily, 5:00 PM
- Mode: Draft only

```text
Write the biggest credible moonshot platform bet for LSAT Mastery. Focus on what the product could become if GT pursued the most ambitious version of its logic seriously over the long run. Return the bet, what it would unlock, what it would demand operationally, and why it might actually be worth pursuing.
```
