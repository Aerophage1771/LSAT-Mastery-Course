import { Lesson } from '../../types';

export const Lesson7_ReferenceGuide: Lesson = {
  id: '14-7',
  title: 'Reference Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Module 15: Principle-Generalization \u2014 Reference Guide' },
    {
      type: 'paragraph',
      text: 'This reference guide consolidates everything from Module 15 into a single, quick-access resource. Use it for pre-test review, timed practice sessions, and as a checklist before attempting Principle-Generalization questions.',
    },

    { type: 'hr' },

    { type: 'h2', text: '1. The 4-Step Method' },
    {
      type: 'paragraph',
      text: 'Every Principle-Generalization question follows the same repeatable process. Memorize this sequence and apply it consistently.',
    },
    {
      type: 'process',
      title: 'The 4-Step Method',
      steps: [
        '**Step 1 \u2014 Understand the Situation:** Read the stimulus as a case study. Identify the players (who/what), the key variable (what changed or differs), and the outcome (what resulted).',
        '**Step 2 \u2014 Identify the Key Dynamic:** Ask: "What is the one relationship or pattern that makes this situation noteworthy?" State the central mechanism in one sentence. This is the "moral of the story."',
        '**Step 3 \u2014 Abstract to General Terms:** Replace specific nouns with general categories, specific verbs with abstract verbs, and specific contexts with universal settings. Preserve all logical connectors (because, when, leads to). Formulate your pre-phrase.',
        '**Step 4 \u2014 Match the Answer:** Apply the Textbook Test ("Is the stimulus a textbook example of this principle?") and the Strength Test ("Is the language appropriately calibrated?"). Confirm the answer captures the *whole* story.',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing Target',
      text: '~25 sec reading \u2192 ~15 sec identifying the dynamic and pre-phrasing \u2192 ~35 sec scanning answers \u2192 ~10 sec verifying. Total: **~85 seconds.** The pre-phrase is non-negotiable \u2014 it saves 10\u201315 seconds per answer choice during evaluation.',
    },

    { type: 'hr' },

    { type: 'h2', text: '2. Generalization Categories' },
    {
      type: 'paragraph',
      text: 'Principle-Generalization stimuli cluster into recurring patterns. Recognizing the category early gives you a head start on your pre-phrase.',
    },

    {
      type: 'table',
      headers: ['Category', 'Core Pattern', 'Pre-Phrase Template', 'Lesson'],
      rows: [
        [
          '**Experiment Generalization**',
          'Controlled experiment with one manipulated variable produces a measurable outcome',
          '"[Abstract variable] affects [abstract outcome] because [mechanism]."',
          'Lesson 3',
        ],
        [
          '**Contextual Value**',
          'One trait is a weakness in Context A but a strength in Context B',
          '"A trait that is a weakness in one setting can be a strength in another."',
          'Lesson 4',
        ],
        [
          '**Unintended Consequences**',
          'A solution succeeds but triggers a new, different problem downstream',
          '"Solving one set of problems can create a different set of problems."',
          'Lesson 5',
        ],
        [
          '**Motivated Blindness**',
          'Self-interest causes a group to ignore the downsides of something beneficial to them',
          '"People tend to ignore negative consequences of actions that serve their interests."',
          'Lesson 6',
        ],
        [
          '**Path Dependency / Lock-In**',
          'An early default or advantage becomes self-reinforcing and makes later switching difficult',
          '"Once an arrangement becomes established, replacing it can remain difficult even when a better option exists."',
          'Lessons 1-2 (recognition only)',
        ],
        [
          '**Emergence / Whole vs Part**',
          'The whole system has a feature that is not visible by examining the parts one at a time',
          '"A collection can display a property that none of its members displays individually."',
          'Lessons 1-2 (recognition only)',
        ],
        [
          '**Behavioral Pattern**',
          'People react to certain conditions (framing, perception, expectations) in predictable ways',
          '"How [X] is perceived or framed affects [outcome], regardless of [objective reality]."',
          'Lessons 1\u20132',
        ],
      ],
    },

    {
      type: 'paragraph',
      text: 'These categories are not mutually exclusive \u2014 a stimulus may combine elements of two patterns. Use them as starting points for your pre-phrase, not rigid boxes.',
    },
    {
      type: 'h3',
      text: 'Validated Pairing Status',
    },
    {
      type: 'table',
      headers: ['Family', 'Current Repository-Backed Pairing', 'Status'],
      rows: [
        [
          '**Experiment Generalization**',
          '**PT-116-S-3-Q-3** (Lesson 3)',
          'Fully paired and live.',
        ],
        [
          '**Contextual Value**',
          '**PT-119-S-3-Q-8** (Lesson 4)',
          'Fully paired and live.',
        ],
        [
          '**Unintended Consequences**',
          '**PT-124-S-1-Q-5** (Lesson 5)',
          'Fully paired and live.',
        ],
        [
          '**Motivated Blindness**',
          '**PT-109-S-1-Q-18** (Lesson 6)',
          'Fully paired and live. Also reinforces the principle-vs-explanation boundary.',
        ],
        [
          '**Path Dependency / Lock-In**',
          '**PT-133-S-3-Q-3**',
          'Recognition example for path dependency and lock-in patterns.',
        ],
        [
          '**Emergence / Whole vs Part**',
          '**PT-135-S-4-Q-18**',
          'Recognition example for emergence and whole-vs-part dynamics.',
        ],
      ],
    },
    {
      type: 'table',
      headers: ['Recognition Topic', 'Fast Signal', 'Stay Within the Module 14 Standard'],
      rows: [
        [
          '**Path Dependency / Lock-In**',
          'Early choice, default, installed base, sunk investment, or coordination pattern makes later switching hard',
          'State the self-reinforcing pattern in abstract terms; do not retell the history of this exact institution, market, or tool.',
        ],
        [
          '**Emergence / Whole vs Part**',
          'The whole arrangement has a feature that no part has in isolation',
          'State the system-level principle; do not merely list component facts or describe the arrangement concretely.',
        ],
        [
          '**Principle vs. Explanation**',
          'The stimulus explains why this one result happened',
          'Convert the explanation into a reusable setup-and-result pattern rather than choosing a one-case retelling.',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: '3. PG vs. PA vs. PS \u2014 Three-Way Comparison' },
    {
      type: 'paragraph',
      text: 'The LSAT tests three distinct Principle question types. Confusing them leads to solving the wrong question. Use this table to confirm which type you are facing before you begin.',
    },

    {
      type: 'table',
      headers: ['Feature', 'Principle-Strengthen (PS)', 'Principle-Apply (PA)', 'Principle-Generalization (PG)'],
      rows: [
        [
          '**Stimulus contains**',
          'A specific argument (evidence \u2192 conclusion)',
          'A general principle (the rule itself)',
          'A specific scenario (case study or anecdote)',
        ],
        [
          '**Answer provides**',
          'A general rule that justifies the argument',
          'A specific scenario that matches the rule',
          'A general rule the scenario exemplifies',
        ],
        [
          '**Direction**',
          'Concrete \u2192 Abstract (to strengthen)',
          'Abstract \u2192 Concrete (to apply)',
          'Concrete \u2192 Abstract (to describe)',
        ],
        [
          '**Your primary task**',
          'Bridge the logical gap with a rule',
          "Check if facts satisfy the rule's conditions",
          'Strip away specifics to find the pattern',
        ],
        [
          '**Key skill**',
          'Gap identification + abstraction',
          'Precision \u2014 decomposing and matching conditions',
          'Abstraction \u2014 seeing the universal in the particular',
        ],
        [
          '**The answer must...**',
          '...make the conclusion more defensible',
          '...satisfy every condition of the principle',
          '...be true BECAUSE OF the stimulus',
        ],
        [
          '**Stem language**',
          '"Which principle, if valid, most helps to justify..."',
          '"Which situation conforms to the principle above?"',
          '"Which principle is best illustrated by the above?"',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Quick Direction Check',
      text: '**Specific scenario in stimulus + general rules in answers = Principle-Generalization (this module).**\n\nGeneral rule in stimulus + specific scenarios in answers = Principle-Apply (Module 14).\n\nSpecific argument in stimulus + general rules in answers + "justify" language = Principle-Strengthen (Module 13).\n\nAlways check the direction before solving.',
    },

    { type: 'h3', text: 'Principle vs. Explanation' },
    {
      type: 'paragraph',
      text: 'Use a one-step conversion test here: if the answer still depends on these exact people, objects, or events, it is probably explanation-level. Rewrite it one level up. If the rewrite changes the meaning materially, the original answer was too concrete for Principle-Generalization.',
    },
    {
      type: 'table',
      headers: ['Answer Style', 'How to Treat It'],
      rows: [
        [
          'Reusable pattern stated in abstract language',
          'Potentially correct principle answer',
        ],
        [
          'Case-specific explanation of why these exact facts produced this exact outcome',
          'Usually too concrete for Principle-Generalization',
        ],
        [
          'Recommendation, fix, or policy lesson',
          'Normative drift unless the stimulus itself supports that rule',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: '4. Scope Calibration Guide' },
    {
      type: 'paragraph',
      text: 'The hardest skill in Principle-Generalization is finding the **right level of generality**. Too specific, and the principle only restates the stimulus. Too broad, and it could apply to anything. The correct principle sits in a "Goldilocks zone" \u2014 abstract enough to be universal, specific enough to be *about* the stimulus.',
    },

    { type: 'h3', text: 'The Scope Spectrum' },
    {
      type: 'table',
      headers: ['Level', 'Example (Jazz Pianists Stimulus)', 'Problem'],
      rows: [
        [
          '**Too Specific**',
          '"Jazz pianists without striking ideas can\'t lead sessions but can support imaginative leaders."',
          'This is a summary, not a principle. It only applies to this exact scenario. Swap in different players and it breaks.',
        ],
        [
          '**Correct Scope**',
          '"A trait that is a weakness in some settings can contribute to greatness in other settings."',
          'General enough to apply beyond jazz. Specific enough to capture the context-dependent reversal. Passes the Replacement Test.',
        ],
        [
          '**Too Broad**',
          '"People sometimes do bad things for good reasons."',
          'This could apply to almost any scenario. It loses the mechanism (context determines value) and is so vague it is unfalsifiable.',
        ],
      ],
    },

    { type: 'h3', text: 'How to Find the Right Scope' },
    {
      type: 'process',
      title: 'Scope Calibration Steps',
      steps: [
        '**Start with your pre-phrase.** Your "moral of the story" from Step 2 is your baseline scope.',
        '**Apply the Replacement Test.** Could you swap in completely different specific details (different people, different context, different domain) and have the principle still hold? If yes, the scope is at least general enough. If no, you are too specific.',
        '**Apply the Stimulus Test.** Does the principle capture the *specific mechanism* of the stimulus \u2014 not just a vague truth? If the stimulus is a "textbook example" of the principle, the scope is specific enough. If the stimulus is merely "consistent with" the principle, you are too broad.',
        '**Check for mechanism preservation.** The correct scope preserves the causal or logical mechanism (e.g., context determines value, success causes new problems, self-interest creates blind spots). If your principle has lost the mechanism, widen your scope slightly. If it contains unnecessary details, narrow it.',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The Sweet Spot',
      text: 'The correct principle should make you think: "Yes, this stimulus is a *perfect example* of that principle \u2014 and I can think of other completely different examples that would also fit." If you can only think of this one example, the principle is too specific. If you can think of thousands of unrelated examples, it is too broad.',
    },

    { type: 'hr' },

    { type: 'h2', text: '5. Common Traps' },
    {
      type: 'paragraph',
      text: 'Wrong answers in Principle-Generalization questions fall into predictable categories. Memorize these patterns to eliminate traps quickly during timed practice.',
    },

    {
      type: 'breakdown',
      labels: { title: 'Trap', text: 'Description & How to Spot It' },
      items: [
        {
          title: '1. Too Specific (Summary Trap)',
          text: 'The answer merely **restates the stimulus** in slightly different words rather than abstracting to a general principle. It uses the same specific nouns and verbs from the passage. **Test:** Could this statement apply to a completely different scenario? If no \u2192 too specific.',
          badge: 'Scope',
          badgeColor: 'blue',
        },
        {
          title: '2. Too Broad (Platitude Trap)',
          text: 'The answer is a vague, unfalsifiable generalization that could apply to virtually anything ("people sometimes make mistakes," "things are not always what they seem"). It loses the specific mechanism that makes the stimulus interesting. **Test:** Is the stimulus a *textbook example* of this, or just vaguely consistent? If the latter \u2192 too broad.',
          badge: 'Scope',
          badgeColor: 'blue',
        },
        {
          title: '3. Wrong Relationship',
          text: 'The answer identifies a **different causal or logical relationship** than the one in the stimulus. For example, the stimulus shows "context determines value" but the answer describes "effort determines outcome." The variables are wrong even though the general topic overlaps. **Test:** Does the principle\'s mechanism match the stimulus\'s mechanism?',
          badge: 'Logic',
          badgeColor: 'indigo',
        },
        {
          title: '4. Describes Rather Than Generalizes',
          text: 'The answer describes what happened in the stimulus without extracting the underlying rule. It is a narrative restatement, not an abstraction. Often uses the same domain language ("jazz," "medicine," "satellites"). **Test:** Does the answer use general categories, or specific terms from the passage?',
          badge: 'Scope',
          badgeColor: 'blue',
        },
        {
          title: '5. Reverses the Direction',
          text: 'The answer states the causal arrow in the **opposite direction** from the stimulus. If the stimulus says "A leads to B," the wrong answer says "B leads to A" or "B indicates A." **Test:** Does the principle\'s cause match the stimulus\'s cause, and the effect match the effect?',
          badge: 'Logic',
          badgeColor: 'indigo',
        },
        {
          title: '6. Normative Leap (Is \u2192 Ought)',
          text: 'The stimulus **describes** what happened; the answer **prescribes** what should happen. A factual case study cannot support a moral or policy recommendation. **Test:** Does the answer contain "should," "ought," or "must" when the stimulus contains none?',
          badge: 'Force',
          badgeColor: 'slate',
        },
        {
          title: '7. Too-Strong Quantifier',
          text: 'The answer uses "always," "never," "every," "all," or "necessarily" when the stimulus provides only one example. A single case supports "can" and "sometimes" but not universal claims. **Test:** Count the examples in the stimulus \u2014 if there is only one, reject universals.',
          badge: 'Force',
          badgeColor: 'slate',
        },
        {
          title: '8. Partial Match',
          text: 'The answer captures one element of the dynamic correctly but ignores the other half. For contextual value, it only mentions the weakness OR the strength. For unintended consequences, it only mentions the solution OR the new problem. **Test:** Does the answer capture the *whole* story?',
          badge: 'Completeness',
          badgeColor: 'red',
        },
        {
          title: '9. Imported Concept',
          text: 'The answer introduces a concept \u2014 confidence, effort, morality, self-assessment \u2014 that is **not mentioned or implied** in the stimulus. The principle builds on an assumption, not on the evidence provided. **Test:** Does this concept appear anywhere in the stimulus?',
          badge: 'Evidence',
          badgeColor: 'red',
        },
        {
          title: '10. Explanation Instead of Principle',
          text: 'The answer stays at the level of this one case and explains why it happened rather than stating the broader rule it exemplifies. **Test:** Could this answer teach a recurring LSAT pattern, or does it only retell this stimulus?',
          badge: 'Abstraction',
          badgeColor: 'red',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: '6. Test Day Checklist' },
    {
      type: 'paragraph',
      text: 'Run through this checklist on every Principle-Generalization question during timed practice and on test day.',
    },

    {
      type: 'process',
      title: 'Test Day Checklist',
      steps: [
        '**Confirm the question type.** Specific scenario in stimulus + general rules in answers + "illustrates" / "conforms to" / "exemplifies" language = Principle-Generalization. If not, switch to the correct method (PA or PS).',
        '**Read the stimulus as a case study.** Identify players, key variable, and outcome. Do NOT look for a conclusion or logical gap \u2014 this is not a flaw or strengthen question.',
        '**State the "moral of the story" in one sentence.** This is your pre-phrase. It must be in abstract, general terms \u2014 no proper nouns, no domain-specific language. If you cannot state it without using specific details from the stimulus, keep refining.',
        '**Scan answers for your pre-phrase match.** The correct answer will capture the same dynamic using different abstract language. Do not expect a word-for-word match \u2014 expect a structural match.',
        '**Reject explanation-only answers.** If a choice merely retells why this one case happened, it has not risen to the principle level yet.',
        '**Apply the Textbook Test.** Ask: "Is this stimulus a textbook example of this principle?" If the stimulus specifically and directly demonstrates the principle, it is likely correct. If the stimulus merely does not contradict it, it is likely a trap.',
        '**Apply the Strength Test.** Check quantifiers and modal verbs. A single case study supports "can" and "sometimes" but not "always," "never," or "necessarily." Eliminate overly strong answers.',
        '**Apply the Whole Story Test.** Does the answer capture the *entire* central dynamic, or just one piece? If two answers seem close, the one that accounts for more of the story wins.',
        "**Verify the causal direction.** Confirm the principle's causal arrow points the same way as the stimulus's. If the stimulus says A \u2192 B, the principle must not say B \u2192 A.",
        '**Check for normative language.** If the stimulus is descriptive (what happened) and the answer is prescriptive (what should happen), eliminate it. Is \u2192 Ought is never valid from a single case study.',
        '**Select and move on.** Commit to your answer. Principle-Generalization questions reward preparation and method \u2014 if you followed the 4 steps, trust the process.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Quick-Reference Tables' },

    { type: 'h3', text: 'Abstraction Cheat Sheet' },
    {
      type: 'table',
      headers: ['Specific Language', 'Abstracted Language'],
      rows: [
        ['Named individuals ("tennis players," "environmentalists")', '"People," "individuals," "a group"'],
        ['Specific traits ("no striking musical ideas")', '"A trait," "a characteristic," "a quality"'],
        ['Specific actions ("biting," "using satellites")', '"An action," "a behavior," "an activity"'],
        ['Specific contexts ("jazz session," "clinical trial")', '"A setting," "a context," "an environment"'],
        [
          'Specific outcomes ("performed better," "created financial problems")',
          '"An outcome," "a result," "a consequence"',
        ],
        [
          '"Because," "as a result of," "precisely because"',
          'Preserve as-is \u2014 these are logical connectors, not specific details',
        ],
      ],
    },

    { type: 'h3', text: 'Force-of-Language Guide' },
    {
      type: 'table',
      headers: ['Stimulus Evidence', 'Acceptable Principle Language', 'Too Strong (Eliminate)'],
      rows: [
        [
          'One example of X \u2192 Y',
          '"X can lead to Y" / "X sometimes leads to Y"',
          '"X always leads to Y" / "X necessarily leads to Y"',
        ],
        [
          'A difference between two groups',
          '"Under certain conditions, A outperforms B"',
          '"A is inherently superior to B"',
        ],
        [
          'An action with a side effect',
          '"Actions of type X may have consequences"',
          '"Actions of type X inevitably produce negatives"',
        ],
        [
          'One group overlooking a problem',
          '"People tend to ignore..."',
          '"People always ignore..." / "No one ever considers..."',
        ],
        [
          'A trait with context-dependent value',
          '"A trait can be beneficial in some contexts"',
          '"This trait is always beneficial" / "is never beneficial"',
        ],
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Module 15 Summary',
      text: '**Principle-Generalization = Concrete \u2192 Abstract.** You receive a specific case study and extract the general rule it illustrates.\n\n**The 4-Step Method:** Understand \u2192 Identify Dynamic \u2192 Abstract \u2192 Match.\n\n**Seven recurring categories:** Experiment, Contextual Value, Unintended Consequences, Motivated Blindness, Path Dependency / Lock-In, Emergence / Whole vs Part, and Behavioral Pattern.\n\n**Three tests for the correct answer:** Textbook Test (is the stimulus a textbook example?), Strength Test (is the language calibrated?), Whole Story Test (does it capture the full dynamic?).\n\n**Ten common traps:** Too specific, too broad, wrong relationship, describes rather than generalizes, reverses direction, normative leap, too-strong quantifier, partial match, imported concept, explanation instead of principle.\n\n**The pre-phrase is your most powerful tool.** Students who state the "moral of the story" in abstract terms before reading answers consistently outperform those who evaluate each choice from scratch.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Module 14: Principle-Generalization — Reference Guide"
        },
        {
          "type": "paragraph",
          "text": "This reference guide consolidates everything from Module 14 into a single, quick-access resource. Use it for pre-test review, timed practice sessions, and as a checklist before attempting Principle-Generalization questions."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "1. The 4-Step Method"
        },
        {
          "type": "paragraph",
          "text": "Every Principle-Generalization question follows the same repeatable process. Memorize this sequence and apply it consistently."
        },
        {
          "type": "process",
          "title": "The 4-Step Method",
          "steps": [
            "**Step 1 — Understand the Situation:** Read the stimulus as a case study. Identify the players (who/what), the key variable (what changed or differs), and the outcome (what resulted).",
            "**Step 2 — Identify the Key Dynamic:** Ask: \"What is the one relationship or pattern that makes this situation noteworthy?\" State the central mechanism in one sentence. This is the \"moral of the story.\"",
            "**Step 3 — Abstract to General Terms:** Replace specific nouns with general categories, specific verbs with abstract verbs, and specific contexts with universal settings. Preserve all logical connectors (because, when, leads to). Formulate your pre-phrase.",
            "**Step 4 — Match the Answer:** Apply the Textbook Test (\"Is the stimulus a textbook example of this principle?\") and the Strength Test (\"Is the language appropriately calibrated?\"). Confirm the answer captures the *whole* story."
          ]
        },
        {
          "type": "callout",
          "title": "Timing Target",
          "variant": "tip",
          "text": "~25 sec reading → ~15 sec identifying the dynamic and pre-phrasing → ~35 sec scanning answers → ~10 sec verifying. Total: **~85 seconds.** The pre-phrase is non-negotiable — it saves 10–15 seconds per answer choice during evaluation."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "2. Generalization Categories"
        },
        {
          "type": "paragraph",
          "text": "Principle-Generalization stimuli cluster into recurring patterns. Recognizing the category early gives you a head start on your pre-phrase."
        },
        {
          "type": "table",
          "headers": [
            "Category",
            "Core Pattern",
            "Pre-Phrase Template",
            "Lesson"
          ],
          "rows": [
            [
              "**Experiment Generalization**",
              "Controlled experiment with one manipulated variable produces a measurable outcome",
              "\"[Abstract variable] affects [abstract outcome] because [mechanism].\"",
              "Lesson 3"
            ],
            [
              "**Contextual Value**",
              "One trait is a weakness in Context A but a strength in Context B",
              "\"A trait that is a weakness in one setting can be a strength in another.\"",
              "Lesson 4"
            ],
            [
              "**Unintended Consequences**",
              "A solution succeeds but triggers a new, different problem downstream",
              "\"Solving one set of problems can create a different set of problems.\"",
              "Lesson 5"
            ],
            [
              "**Motivated Blindness**",
              "Self-interest causes a group to ignore the downsides of something beneficial to them",
              "\"People tend to ignore negative consequences of actions that serve their interests.\"",
              "Lesson 6"
            ],
            [
              "**Behavioral Pattern**",
              "People react to certain conditions (framing, perception, expectations) in predictable ways",
              "\"How [X] is perceived or framed affects [outcome], regardless of [objective reality].\"",
              "Lessons 1–2"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "These categories are not mutually exclusive — a stimulus may combine elements of two patterns. Use them as starting points for your pre-phrase, not rigid boxes."
        },
        {
          "type": "diff-note",
          "text": "{{+**Note on Behavioral Pattern:** This category (framing, perception, expectations) does not have a dedicated drill lesson. Apply the general 4-Step Method directly. The congestion surcharge example in Lesson 1 and the pharmaceutical trial example in Lesson 2 are both behavioral pattern examples you can use for practice.+}}",
          "variant": "comment"
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "3. PG vs. PA vs. PS — Three-Way Comparison"
        },
        {
          "type": "paragraph",
          "text": "The LSAT tests three distinct Principle question types. Confusing them leads to solving the wrong question. Use this table to confirm which type you are facing before you begin."
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Principle-Strengthen (PS)",
            "Principle-Apply (PA)",
            "Principle-Generalization (PG)"
          ],
          "rows": [
            [
              "**Stimulus contains**",
              "A specific argument (evidence → conclusion)",
              "A general principle (the rule itself)",
              "A specific scenario (case study or anecdote)"
            ],
            [
              "**Answer provides**",
              "A general rule that justifies the argument",
              "A specific scenario that matches the rule",
              "A general rule the scenario exemplifies"
            ],
            [
              "**Direction**",
              "Concrete → Abstract (to strengthen)",
              "Abstract → Concrete (to apply)",
              "Concrete → Abstract (to describe)"
            ],
            [
              "**Your primary task**",
              "Bridge the logical gap with a rule",
              "Check if facts satisfy the rule's conditions",
              "Strip away specifics to find the pattern"
            ],
            [
              "**Key skill**",
              "Gap identification + abstraction",
              "Precision — decomposing and matching conditions",
              "Abstraction — seeing the universal in the particular"
            ],
            [
              "**The answer must...**",
              "...make the conclusion more defensible",
              "...satisfy every condition of the principle",
              "...be true BECAUSE OF the stimulus"
            ],
            [
              "**Stem language**",
              "\"Which principle, if valid, most helps to justify...\"",
              "\"Which situation conforms to the principle above?\"",
              "\"Which principle is best illustrated by the above?\""
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Quick Direction Check",
          "variant": "default",
          "text": "**Specific scenario in stimulus + general rules in answers = Principle-Generalization (this module).**\n\nGeneral rule in stimulus + specific scenarios in answers = Principle-Apply (Module 13).\n\nSpecific argument in stimulus + general rules in answers + \"justify\" language = Principle-Strengthen (Module 12).\n\nAlways check the direction before solving."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "4. Scope Calibration Guide"
        },
        {
          "type": "paragraph",
          "text": "The hardest skill in Principle-Generalization is finding the **right level of generality**. Too specific, and the principle only restates the stimulus. Too broad, and it could apply to anything. The correct principle sits in a \"Goldilocks zone\" — abstract enough to be universal, specific enough to be *about* the stimulus."
        },
        {
          "type": "h3",
          "text": "The Scope Spectrum"
        },
        {
          "type": "table",
          "headers": [
            "Level",
            "Example (Jazz Pianists Stimulus)",
            "Problem"
          ],
          "rows": [
            [
              "**Too Specific**",
              "\"Jazz pianists without striking ideas can't lead sessions but can support imaginative leaders.\"",
              "This is a summary, not a principle. It only applies to this exact scenario. Swap in different players and it breaks."
            ],
            [
              "**Correct Scope**",
              "\"A trait that is a weakness in some settings can contribute to greatness in other settings.\"",
              "General enough to apply beyond jazz. Specific enough to capture the context-dependent reversal. Passes the Replacement Test."
            ],
            [
              "**Too Broad**",
              "\"People sometimes do bad things for good reasons.\"",
              "This could apply to almost any scenario. It loses the mechanism (context determines value) and is so vague it is unfalsifiable."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "How to Find the Right Scope"
        },
        {
          "type": "process",
          "title": "Scope Calibration Steps",
          "steps": [
            "**Start with your pre-phrase.** Your \"moral of the story\" from Step 2 is your baseline scope.",
            "**Apply the Replacement Test.** Could you swap in completely different specific details (different people, different context, different domain) and have the principle still hold? If yes, the scope is at least general enough. If no, you are too specific.",
            "**Apply the Stimulus Test.** Does the principle capture the *specific mechanism* of the stimulus — not just a vague truth? If the stimulus is a \"textbook example\" of the principle, the scope is specific enough. If the stimulus is merely \"consistent with\" the principle, you are too broad.",
            "**Check for mechanism preservation.** The correct scope preserves the causal or logical mechanism (e.g., context determines value, success causes new problems, self-interest creates blind spots). If your principle has lost the mechanism, widen your scope slightly. If it contains unnecessary details, narrow it."
          ]
        },
        {
          "type": "callout",
          "title": "The Sweet Spot",
          "variant": "tip",
          "text": "The correct principle should make you think: \"Yes, this stimulus is a *perfect example* of that principle — and I can think of other completely different examples that would also fit.\" If you can only think of this one example, the principle is too specific. If you can think of thousands of unrelated examples, it is too broad."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "5. Common Traps"
        },
        {
          "type": "paragraph",
          "text": "Wrong answers in Principle-Generalization questions fall into predictable categories. Memorize these patterns to eliminate traps quickly during timed practice."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Trap",
            "text": "Description & How to Spot It"
          },
          "items": [
            {
              "title": "1. Too Specific (Summary Trap)",
              "text": "The answer merely **restates the stimulus** in slightly different words rather than abstracting to a general principle. It uses the same specific nouns and verbs from the passage. **Test:** Could this statement apply to a completely different scenario? If no → too specific.",
              "badge": "Scope",
              "badgeColor": "blue"
            },
            {
              "title": "2. Too Broad (Platitude Trap)",
              "text": "The answer is a vague, unfalsifiable generalization that could apply to virtually anything (\"people sometimes make mistakes,\" \"things are not always what they seem\"). It loses the specific mechanism that makes the stimulus interesting. **Test:** Is the stimulus a *textbook example* of this, or just vaguely consistent? If the latter → too broad.",
              "badge": "Scope",
              "badgeColor": "blue"
            },
            {
              "title": "3. Wrong Relationship",
              "text": "The answer identifies a **different causal or logical relationship** than the one in the stimulus. For example, the stimulus shows \"context determines value\" but the answer describes \"effort determines outcome.\" The variables are wrong even though the general topic overlaps. **Test:** Does the principle's mechanism match the stimulus's mechanism?",
              "badge": "Logic",
              "badgeColor": "indigo"
            },
            {
              "title": "4. Describes Rather Than Generalizes",
              "text": "The answer describes what happened in the stimulus without extracting the underlying rule. It is a narrative restatement, not an abstraction. Often uses the same domain language (\"jazz,\" \"medicine,\" \"satellites\"). **Test:** Does the answer use general categories, or specific terms from the passage?",
              "badge": "Scope",
              "badgeColor": "blue"
            },
            {
              "title": "5. Reverses the Direction",
              "text": "The answer states the causal arrow in the **opposite direction** from the stimulus. If the stimulus says \"A leads to B,\" the wrong answer says \"B leads to A\" or \"B indicates A.\" **Test:** Does the principle's cause match the stimulus's cause, and the effect match the effect?",
              "badge": "Logic",
              "badgeColor": "indigo"
            },
            {
              "title": "6. Normative Leap (Is → Ought)",
              "text": "The stimulus **describes** what happened; the answer **prescribes** what should happen. A factual case study cannot support a moral or policy recommendation. **Test:** Does the answer contain \"should,\" \"ought,\" or \"must\" when the stimulus contains none?",
              "badge": "Force",
              "badgeColor": "slate"
            },
            {
              "title": "7. Too-Strong Quantifier",
              "text": "The answer uses \"always,\" \"never,\" \"every,\" \"all,\" or \"necessarily\" when the stimulus provides only one example. A single case supports \"can\" and \"sometimes\" but not universal claims. **Test:** Count the examples in the stimulus — if there is only one, reject universals.",
              "badge": "Force",
              "badgeColor": "slate"
            },
            {
              "title": "8. Partial Match",
              "text": "The answer captures one element of the dynamic correctly but ignores the other half. For contextual value, it only mentions the weakness OR the strength. For unintended consequences, it only mentions the solution OR the new problem. **Test:** Does the answer capture the *whole* story?",
              "badge": "Completeness",
              "badgeColor": "red"
            },
            {
              "title": "9. Imported Concept",
              "text": "The answer introduces a concept — confidence, effort, morality, self-assessment — that is **not mentioned or implied** in the stimulus. The principle builds on an assumption, not on the evidence provided. **Test:** Does this concept appear anywhere in the stimulus?",
              "badge": "Evidence",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "6. Test Day Checklist"
        },
        {
          "type": "paragraph",
          "text": "Run through this checklist on every Principle-Generalization question during timed practice and on test day."
        },
        {
          "type": "process",
          "title": "Test Day Checklist",
          "steps": [
            "**Confirm the question type.** Specific scenario in stimulus + general rules in answers + \"illustrates\" / \"conforms to\" / \"exemplifies\" language = Principle-Generalization. If not, switch to the correct method (PA or PS).",
            "**Read the stimulus as a case study.** Identify players, key variable, and outcome. Do NOT look for a conclusion or logical gap — this is not a flaw or strengthen question.",
            "**State the \"moral of the story\" in one sentence.** This is your pre-phrase. It must be in abstract, general terms — no proper nouns, no domain-specific language. If you cannot state it without using specific details from the stimulus, keep refining.",
            "**Scan answers for your pre-phrase match.** The correct answer will capture the same dynamic using different abstract language. Do not expect a word-for-word match — expect a structural match.",
            "**Apply the Textbook Test.** Ask: \"Is this stimulus a textbook example of this principle?\" If the stimulus specifically and directly demonstrates the principle, it is likely correct. If the stimulus merely does not contradict it, it is likely a trap.",
            "**Apply the Strength Test.** Check quantifiers and modal verbs. A single case study supports \"can\" and \"sometimes\" but not \"always,\" \"never,\" or \"necessarily.\" Eliminate overly strong answers.",
            "**Apply the Whole Story Test.** Does the answer capture the *entire* central dynamic, or just one piece? If two answers seem close, the one that accounts for more of the story wins.",
            "**Verify the causal direction.** Confirm the principle's causal arrow points the same way as the stimulus's. If the stimulus says A → B, the principle must not say B → A.",
            "**Check for normative language.** If the stimulus is descriptive (what happened) and the answer is prescriptive (what should happen), eliminate it. Is → Ought is never valid from a single case study.",
            "**Select and move on.** Commit to your answer. Principle-Generalization questions reward preparation and method — if you followed the 4 steps, trust the process."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Quick-Reference Tables"
        },
        {
          "type": "h3",
          "text": "Abstraction Cheat Sheet"
        },
        {
          "type": "table",
          "headers": [
            "Specific Language",
            "Abstracted Language"
          ],
          "rows": [
            [
              "Named individuals (\"tennis players,\" \"environmentalists\")",
              "\"People,\" \"individuals,\" \"a group\""
            ],
            [
              "Specific traits (\"no striking musical ideas\")",
              "\"A trait,\" \"a characteristic,\" \"a quality\""
            ],
            [
              "Specific actions (\"biting,\" \"using satellites\")",
              "\"An action,\" \"a behavior,\" \"an activity\""
            ],
            [
              "Specific contexts (\"jazz session,\" \"clinical trial\")",
              "\"A setting,\" \"a context,\" \"an environment\""
            ],
            [
              "Specific outcomes (\"performed better,\" \"created financial problems\")",
              "\"An outcome,\" \"a result,\" \"a consequence\""
            ],
            [
              "\"Because,\" \"as a result of,\" \"precisely because\"",
              "Preserve as-is — these are logical connectors, not specific details"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Force-of-Language Guide"
        },
        {
          "type": "table",
          "headers": [
            "Stimulus Evidence",
            "Acceptable Principle Language",
            "Too Strong (Eliminate)"
          ],
          "rows": [
            [
              "One example of X → Y",
              "\"X can lead to Y\" / \"X sometimes leads to Y\"",
              "\"X always leads to Y\" / \"X necessarily leads to Y\""
            ],
            [
              "A difference between two groups",
              "\"Under certain conditions, A outperforms B\"",
              "\"A is inherently superior to B\""
            ],
            [
              "An action with a side effect",
              "\"Actions of type X may have consequences\"",
              "\"Actions of type X inevitably produce negatives\""
            ],
            [
              "One group overlooking a problem",
              "\"People tend to ignore...\"",
              "\"People always ignore...\" / \"No one ever considers...\""
            ],
            [
              "A trait with context-dependent value",
              "\"A trait can be beneficial in some contexts\"",
              "\"This trait is always beneficial\" / \"is never beneficial\""
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Module 14 Summary",
          "variant": "summary",
          "text": "**Principle-Generalization = Concrete → Abstract.** You receive a specific case study and extract the general rule it illustrates.\n\n**The 4-Step Method:** Understand → Identify Dynamic → Abstract → Match.\n\n**Five recurring categories:** Experiment, Contextual Value, Unintended Consequences, Motivated Blindness, Behavioral Pattern.\n\n**Three tests for the correct answer:** Textbook Test (is the stimulus a textbook example?), Strength Test (is the language calibrated?), Whole Story Test (does it capture the full dynamic?).\n\n**Nine common traps:** Too specific, too broad, wrong relationship, describes rather than generalizes, reverses direction, normative leap, too-strong quantifier, partial match, imported concept.\n\n**The pre-phrase is your most powerful tool.** Students who state the \"moral of the story\" in abstract terms before reading answers consistently outperform those who evaluate each choice from scratch."
        }
      ],
    },
    cheat: {
      label: 'Cheat Sheet',
      content: [
        {
          type: 'callout',
          variant: 'summary',
          title: 'The Method',
          text: '**Understand Principle -> Identify Trigger -> Check Conditions -> Match Application.** Read the principle as a rule: IF [trigger], THEN [result]. Find the answer where the trigger fires and the result follows.',
        },
        { type: 'h3', text: 'Decision Rules' },
        {
          type: 'table',
          headers: ['If You See...', 'Then Do...', 'Watch Out For...', 'Quick Check', 'Time Saver'],
          rows: [
            [
              'A conditional principle (if A then B)',
              'Confirm the antecedent fires in the answer scenario',
              'Answer that affirms the consequent instead of the antecedent',
              'Does the IF actually hold?',
              'Scan for antecedent first; skip answers where it fails',
            ],
            [
              'A normative principle (should, ought, permitted)',
              'Verify the moral/ethical condition is met before checking the judgment',
              'Answer where the judgment is stated but the condition is unmet',
              'Is the normative trigger satisfied?',
              'Check condition before evaluating the judgment',
            ],
            [
              'A definitional principle (X counts as Y if...)',
              'Check every criterion of the definition against the scenario',
              'Answer that meets most criteria but fails one',
              'Has every single criterion been satisfied?',
              'List criteria; tick each one off',
            ],
            [
              'Multiple conditions (A and B and C must hold)',
              'Verify each condition independently',
              'Answer where conditions are individually plausible but one is actually unmet',
              'Can you point to evidence for EACH condition?',
              'Check the hardest condition first -- it eliminates fastest',
            ],
            [
              'Contrapositive application (result absent)',
              'If the result did not occur, the trigger must not have fired',
              'Answer that reverses the conditional without proper contrapositive logic',
              'Does NOT-result truly imply NOT-trigger?',
              'Flip the principle and re-check',
            ],
          ],
        },
        { type: 'h3', text: 'Application Types' },
        {
          type: 'table',
          headers: ['Type', 'Pattern', 'Correct Answer Shows', 'Primary Trap'],
          rows: [
            ['**Direct**', 'Trigger fires, result follows', 'All conditions met, consequence matches', 'Partial match (one condition missed)'],
            ['**Contrapositive**', 'Result absent, therefore trigger absent', 'Absence of result properly linked to absence of trigger', 'Reversed conditional direction'],
            ['**Definitional**', 'Case matches category criteria', 'Every definitional criterion satisfied', 'Near-miss on one criterion'],
            ['**Advanced**', 'Multiple conditions must all hold', 'Each condition independently confirmed', 'Plausible but one condition is actually unmet'],
          ],
        },
        { type: 'h3', text: 'Common Traps' },
        {
          type: 'table',
          headers: ['Trap', 'What Happens', 'How to Catch It', 'Quick Test', 'Frequency'],
          rows: [
            ['Partial Match', 'One condition met but another missed', 'Check every condition, not just the obvious one', 'Tick off each condition', 'Very common'],
            ['Reversed Direction', 'Goes concrete-to-abstract instead of abstract-to-concrete', 'Confirm you are applying the rule, not generalizing from a case', 'Direction check', 'Common'],
            ['Wrong Relationship', 'Correct topic but the causal or logical mechanism differs', 'Compare the principle\'s mechanism to the answer\'s mechanism', 'Mechanism match', 'Moderate'],
            ['Normative Leap', 'Descriptive principle applied as a prescriptive judgment', 'Check whether the principle actually supports a "should" claim', 'Is-Ought boundary', 'Moderate'],
            ['Too Strong', 'Answer claims more than the principle warrants', 'Compare the strength of language in principle vs. answer', 'Force calibration', 'Common'],
          ],
        },
        { type: 'h3', text: 'Stem Patterns' },
        {
          type: 'list',
          items: [
            '"Which situation conforms to the principle above?"',
            '"Which is an application of the principle?"',
            '"The principle most helps to justify which argument?"',
            '"Which judgment conforms to the principle?"',
            '"Which situation best illustrates the principle?"',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'The One Thing',
          text: '**Read the principle as a rule: IF [trigger], THEN [result]. Find the answer choice where the trigger fires and the result follows.** Every condition must be satisfied -- a partial match is a trap.',
        },
      ],
    },
  },
};
