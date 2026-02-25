import { Lesson } from '../../types';

export const Lesson6_Drill_AdvancedApplication: Lesson = {
  id: "13-6",
  title: "Drill: Advanced Application (PT-119-S-2-Q-21)",
  content: [
    { type: 'h2', text: 'Advanced Application' },
    { type: 'paragraph', text: "An **Advanced Application** is a Principle-Apply pattern that combines multiple conditions, high-threshold language, nested conditionals, or abstract ethical rules. These are the hardest Principle-Apply questions because the principle itself is complex — it may contain two or three independent requirements that must all be satisfied, use extreme modifiers like \"overwhelming\" or \"disastrous\" that set a high bar, or embed one conditional inside another." },

    { type: 'paragraph', text: "The difficulty of advanced application questions comes not from the logical direction (they are usually forward applications) but from the *precision* required in evaluating each element. The LSAT constructs wrong answers that meet most requirements but fail on a single high-threshold word — and the test-makers know students will latch onto the most dramatic element (\"endanger innocent lives\") while overlooking the qualifier that disqualifies the answer (\"slight chance\")." },

    { type: 'h3', text: 'Anatomy of an Advanced Principle' },
    { type: 'paragraph', text: "Advanced principles typically contain one or more of the following features:" },
    { type: 'breakdown', labels: { title: 'Feature', text: 'What It Means for You' }, items: [
      { title: 'Multi-Condition Rules', text: 'The principle has two or more independent conditions that must ALL be satisfied (or not satisfied) simultaneously. Example: "If one does not have [A] AND the consequences would be [B], then one ought to [C]." You must track each condition separately — satisfying one while failing the other means the principle does not apply.', badge: 'Common', badgeColor: 'blue' },
      { title: 'High-Threshold Language', text: 'Extreme modifiers like "overwhelming," "disastrous," "solely," "never," "always," "exclusively." These set a bar that must be fully cleared — "some evidence" does not equal "overwhelming evidence," and "harm" does not equal "disaster." Trap answers match the general concept but fail the specific threshold.', badge: 'Critical', badgeColor: 'indigo' },
      { title: 'Nested Conditionals', text: 'The principle contains an exception or secondary rule embedded within a primary rule. Example: "Duties are not absolute; however, if you do not have evidence of exception, you must fulfill the duty." You must parse the primary rule AND the exception condition as a single logical unit.', badge: 'Tricky', badgeColor: 'slate' },
      { title: 'Abstract Ethical Rules', text: 'The principle uses moral or philosophical language ("one ought to," "it is a principle of morality that") that must be translated into concrete conditions. The abstraction makes it harder to match against specific scenarios because you must bridge between philosophical language and practical facts.', badge: 'Common', badgeColor: 'blue' },
    ]},

    { type: 'callout', variant: 'tip', title: 'The Threshold Matching Strategy', text: "When you encounter high-threshold language, create a two-column mental ledger:\n\n**Column 1: What the principle requires** — Write the exact qualifier (e.g., \"overwhelming evidence,\" \"disastrous consequences\").\n**Column 2: What the answer provides** — Write what the scenario actually states (e.g., \"slight chance,\" \"might harm\").\n\nIf Column 2 does not meet or exceed Column 1, the answer fails — regardless of how dramatic or sympathetic the scenario is." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Advanced Application (PT-119-S-2-Q-21)' },
    { type: 'paragraph', text: "This drill uses a principle with nested conditional logic and dual high-threshold requirements: \"overwhelming evidence\" and \"disastrous consequences.\" Both thresholds must be met simultaneously to excuse someone from a duty. Your task is to find the answer where neither threshold is met, so the duty must be fulfilled." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '13-6-drill',
      questionType: 'Principle - Apply',
      difficulty: 'hard',
      stimulus: "Ethicist: As a function of one's job and societal role, one has various duties. There are situations where acting in accord with one of these duties has disastrous consequences, and thus the duties are not absolute. However, it is a principle of morality that if one does not have overwhelming evidence that fulfilling such a duty will have disastrous consequences, one ought to fulfill it.",
      question: "Which one of the following most closely conforms to the principle of morality cited by the ethicist?",
      options: [
        "(A) A teacher thinks that a certain student has received the course grade merited by the quality of his work. The teacher should fulfill her duty not to raise the student's grade, even though the lower grade might harm the student's chance of obtaining an internship. (Correct)",
        "(B) A person should not fulfill his duty to tell his friend the truth about the friend's new haircut, because lying will make the friend happier than the truth would.",
        "(C) A police investigator discovers that a contractor has slightly overcharged wealthy customers in order to lower rates for a charity. The investigator should not fulfill his duty to report the contractor provided that the contractor stops the practice.",
        "(D) A psychiatrist's patient tells her about his recurring nightmares of having committed a terrible crime. The psychiatrist should fulfill her duty to report this to the authorities because the patient may have broken the law, even though the psychiatrist also has a duty of confidentiality to her patients.",
        "(E) A journalist thinks there is a slight chance that a story about a developing crisis will endanger innocent lives. Therefore, the journalist should await further developments before fulfilling his duty to file the story.",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Diagram the Principle' },
    { type: 'paragraph', text: "The ethicist's principle is a nested conditional with two high-threshold conditions. Let's parse it layer by layer:" },
    { type: 'paragraph', text: "**Background:** People have duties tied to their roles. These duties are not absolute — sometimes fulfilling a duty causes disaster." },
    { type: 'paragraph', text: "**The Core Principle:** IF one does NOT have overwhelming evidence that fulfilling a duty will have disastrous consequences → THEN one OUGHT TO fulfill the duty." },
    { type: 'paragraph', text: "**The Contrapositive:** IF one is excused from fulfilling a duty → THEN one MUST have overwhelming evidence of disastrous consequences." },

    { type: 'h4', text: 'Step 2: Identify the High-Threshold Requirements' },
    { type: 'paragraph', text: "The principle contains TWO independent thresholds that must BOTH be met to excuse someone from a duty:" },
    { type: 'breakdown', labels: { title: 'Threshold', text: 'Calibration' }, items: [
      { title: 'Threshold 1: "Overwhelming Evidence"', text: '**What clears the bar:** Near-certainty based on strong, direct evidence. Verified facts, expert consensus, clear data.\n**What does NOT clear the bar:** "Thinks," "might," "slight chance," speculation, hunches, possibilities, unverified suspicions.\n\nThe word "overwhelming" means the evidence must be so strong that a reasonable person would consider it conclusive or nearly so.', badge: 'Evidence Bar', badgeColor: 'blue' },
      { title: 'Threshold 2: "Disastrous Consequences"', text: '**What clears the bar:** Catastrophic outcomes — loss of life, severe harm, irreversible damage, systemic failure.\n**What does NOT clear the bar:** Inconvenience, unhappiness, financial loss, mild harm, career setback, emotional discomfort.\n\nThe word "disastrous" means the consequence must be catastrophic, not merely negative.', badge: 'Severity Bar', badgeColor: 'indigo' },
    ]},
    { type: 'paragraph', text: "**The Logic:** If EITHER threshold is not met — if the evidence is not overwhelming OR the consequences are not disastrous — the principle commands that the duty be fulfilled." },

    { type: 'h4', text: 'Step 3: Check Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Threshold Evaluation' }, items: [
      { title: '(A) Teacher: student received merited grade; lower grade "might harm" internship chances; teacher should fulfill duty.', text: "**Duty:** Assign grades based on merit (not inflate them).\n**Evidence of Disaster?** The teacher \"thinks\" the grade is correct and the lower grade \"might harm\" the student's internship chances. \"Thinks\" and \"might\" are speculative — far below \"overwhelming.\" ✗\n**Disastrous Consequences?** Harming a chance at an internship is a setback, not a disaster. ✗\n**Conclusion:** Since neither threshold is met, the principle commands: fulfill the duty. The answer correctly concludes the teacher \"should fulfill her duty.\"\n\n**This is a clean application:** evidence below threshold + consequences below threshold → fulfill the duty.", badge: 'Correct', badgeColor: 'green' },
      { title: '(B) Friend: should NOT tell truth about haircut because lying makes friend happier.', text: "**Duty:** Tell the truth to a friend.\n**Evidence of Disaster?** Not addressed — the answer simply states that lying produces happiness. No evidence is weighed at all.\n**Disastrous Consequences?** A friend feeling unhappy about a haircut is not remotely \"disastrous.\"\n**Conclusion:** The principle would command: fulfill the duty (tell the truth). But this answer says the person should NOT fulfill the duty — the opposite conclusion.\n\n**Fails:** Wrong conclusion. Low-severity consequences do not excuse the duty.", badge: 'Wrong Conclusion', badgeColor: 'red' },
      { title: '(C) Police investigator: should NOT report contractor who overcharged for charity, provided contractor stops.', text: "**Duty:** Report illegal activity.\n**Evidence of Disaster?** No evidence of any disastrous consequences from fulfilling the duty (reporting the contractor). The scenario describes a sympathetic situation, but the principle asks about evidence of disaster from *doing the duty*, not from the underlying behavior.\n**Disastrous Consequences?** Not identified.\n**Conclusion:** The principle would command: fulfill the duty (report). But this answer says the investigator should NOT fulfill the duty — the opposite conclusion, and it adds an extra condition (\"provided that the contractor stops\") that is entirely outside the principle's framework.\n\n**Fails:** Wrong conclusion + introduces conditions not in the principle.", badge: 'Wrong Conclusion', badgeColor: 'red' },
      { title: '(D) Psychiatrist: should report patient\'s nightmares because patient "may have broken the law," despite duty of confidentiality.', text: "**Duty:** This scenario presents a *conflict between two duties* — the duty to report potential crimes AND the duty of confidentiality. The principle tells us when we can be excused from *a single duty*; it provides no framework for choosing between competing duties.\n**The Problem:** Even if we set aside the competing-duties issue, the evidence is \"recurring nightmares\" — which are not evidence of an actual crime. The patient \"may have\" broken the law is speculative, not overwhelming.\n**Conclusion:** The answer reaches the right general direction (fulfill a duty) but for the wrong reason and within the wrong framework.\n\n**Fails:** Scope mismatch — the principle doesn't address duty conflicts.", badge: 'Scope Mismatch', badgeColor: 'red' },
      { title: '(E) Journalist: "slight chance" story will endanger lives → should await further developments before filing.', text: "**Duty:** File the story (journalistic duty to report).\n**Evidence of Disaster?** \"Slight chance\" — this is explicitly weak evidence, the opposite of \"overwhelming.\" ✗\n**Disastrous Consequences?** \"Endanger innocent lives\" — this IS potentially disastrous. ✓\n**Conclusion:** Since the evidence is NOT overwhelming (only a \"slight chance\"), the principle commands: fulfill the duty (file the story). But this answer says the journalist should \"await further developments\" — i.e., NOT fulfill the duty.\n\n**Fails:** This is the most tempting trap. The consequence IS disastrous, but the evidence is NOT overwhelming. BOTH thresholds must be met to excuse the duty, and only one is met here. The answer reaches the wrong conclusion.", badge: 'High-Threshold Trap', badgeColor: 'red' },
    ]},

    { type: 'h4', text: 'Step 4: Verify' },
    { type: 'paragraph', text: "Re-read the principle and confirm that answer (A) satisfies every requirement:" },
    { type: 'list', ordered: true, items: [
      '**Role-based duty identified?** Teaching duty to assign grades based on merit. ✓',
      '**Evidence below "overwhelming" threshold?** "Thinks" and "might" are speculative, not overwhelming. ✓',
      '**Consequences below "disastrous" threshold?** Potential harm to internship chances is a setback, not a disaster. ✓',
      '**Correct conclusion?** Since neither threshold is met, the duty must be fulfilled. The answer concludes the teacher "should fulfill her duty." ✓',
    ]},
    { type: 'paragraph', text: "All elements confirmed. Answer (A) is a textbook application of the principle." },

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'Evidence Overwhelming?', 'Consequences Disastrous?', 'Correct Conclusion?', 'Verdict'], rows: [
      ['**(A) Teacher — grade**', '**✗ "thinks," "might"**', '**✗ internship harm**', '**✓ fulfill duty**', '**Correct ✓**'],
      ['(B) Friend — haircut', '— not addressed', '✗ unhappiness', '✗ says don\'t fulfill', 'Wrong Conclusion'],
      ['(C) Investigator — charity', '— not addressed', '— not identified', '✗ says don\'t fulfill', 'Wrong Conclusion'],
      ['(D) Psychiatrist — nightmares', '✗ "may have"', '— competing duties', '? wrong framework', 'Scope Mismatch'],
      ['(E) Journalist — crisis', '✗ "slight chance"', '✓ endanger lives', '✗ says don\'t fulfill', 'High-Threshold Trap'],
    ]},

    { type: 'paragraph', text: "The critical insight: **choice (E) is the hardest trap because it meets one of the two thresholds**. The consequence (endangering lives) IS disastrous. But the evidence (a \"slight chance\") is NOT overwhelming. Since both thresholds must be met simultaneously to excuse the duty, meeting only one is insufficient. The LSAT knows students will be drawn to the dramatic consequence and overlook the weak evidence qualifier." },

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. High-threshold language creates dual traps.** When a principle requires BOTH \"overwhelming evidence\" AND \"disastrous consequences,\" the LSAT will construct answers that meet one threshold but not the other. You must check both independently.\n\n**2. Be hyper-literal with modifiers.** \"Might harm\" ≠ \"disastrous.\" \"Slight chance\" ≠ \"overwhelming evidence.\" \"Thinks\" ≠ \"knows.\" The LSAT chooses these words with surgical precision, and so must you. Read the qualifiers in each answer choice as if they were legal terms of art.\n\n**3. The correct answer often has the LEAST dramatic scenario.** Choice (A) — a student's internship chances — sounds mundane compared to endangering innocent lives (E) or breaking the law (D). But the correct answer is the one where the principle's conditions are met, not the one with the most dramatic facts. Resist the pull of dramatic content.\n\n**4. \"Fulfill the duty\" is the default.** The principle says: unless you have overwhelming evidence of disaster, you MUST fulfill the duty. This means the *default* conclusion is \"fulfill.\" Only extraordinary circumstances — both extreme evidence and extreme consequences — override this default. Most wrong answers incorrectly override it.\n\n**5. Competing duties are outside the principle's scope.** Choice (D) introduces a conflict between two duties. The principle only addresses whether ONE duty should be fulfilled. It provides no framework for resolving conflicts between duties. Recognizing when a scenario falls outside the principle's scope is a critical advanced skill." },
  ]
};
