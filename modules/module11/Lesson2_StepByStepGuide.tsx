import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "11-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'The 4-Step Method for Necessary Assumption Questions' },
    { type: 'paragraph', text: "This lesson provides a complete, repeatable method for solving any Necessary Assumption question. The goal is the same every time: understand the author's argument, find the logical gap, pre-phrase a \"must-have\" belief, and verify your answer with the **Negation Test**. Each step below includes concrete guidance, tips for tricky situations, and key insights." },

    { type: 'callout', variant: 'tip', title: 'Timing', text: "Budget roughly **1 minute and 30 seconds** per Necessary Assumption question. Steps 1–3 (reading, gap-finding, and pre-phrasing) should take about 50 seconds combined. Step 4 (evaluating choices with the Negation Test) should take about 40 seconds. The Negation Test may feel slow at first, but with practice you will only need to apply it to 1–2 choices. Resist the urge to skip the test — it is the difference between a good guess and a guaranteed correct answer." },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 — Break Down the Argument:** Read the stimulus, isolate the conclusion and premises, and summarize the author\'s reasoning in simple terms.',
      '**Step 2 — Identify the Logical Gap:** Find the disconnect between the evidence and the conclusion. Ask: "What did the author take for granted?"',
      '**Step 3 — Pre-phrase the Necessary Connection:** Predict the type of assumption the argument depends on before looking at the answer choices.',
      '**Step 4 — Evaluate with the Negation Test:** Test your top candidate(s) by negating them. If the negation destroys the argument, you have found the necessary assumption.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Before evaluating answer choices, you must map the argument's structure. You cannot find a missing piece until you understand how the existing pieces fit together." },
    { type: 'list', items: [
      '**Find the Main Conclusion:** Identify the author\'s primary claim, judgment, or prediction. This is the statement the author is trying to prove. Look for conclusion indicators: *therefore, thus, so, hence, consequently.*',
      '**Find the Premises:** Identify the evidence or reasons provided to support that conclusion. Look for premise indicators: *because, since, for, after all, given that.*',
      '**Summarize the Core Argument:** State the logic in simple terms: *"The author concludes [Conclusion], because of [Premises]."*',
    ]},
    { type: 'paragraph', text: "Pay close attention to the **specific terms** used in the premises versus the conclusion. NA questions frequently hinge on a mismatch between these terms — the conclusion uses a word or concept that the premises do not fully establish. This mismatch is the key to finding the gap." },

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "Some NA stimuli contain multiple layers of reasoning. When the argument is complex, focus on isolating the **single most important logical leap** — the jump from the key piece of evidence to the final conclusion. The necessary assumption will almost always address this primary leap, not a secondary detail." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Identify the Logical Gap' },
    { type: 'paragraph', text: "With the core argument identified, pinpoint the logical gap. Ask yourself: *\"How did the author get from the evidence to the conclusion? What idea did they take for granted?\"*" },
    { type: 'paragraph', text: "NA assumptions generally fall into two functional categories:" },

    { type: 'h3', text: 'A. Bridge Assumptions (Necessary Components)' },
    { type: 'paragraph', text: "These connect two different ideas in the argument. They are \"missing links\" that build a bridge between the evidence and the conclusion." },
    { type: 'list', items: [
      '**Definitional gap:** "The author is treating these two distinct ideas as the same thing (or as incompatible)."',
      '**Generalization gap:** "The author believes this specific instance applies to the whole group."',
      '**Key ingredient gap:** "The author assumes the intermediate benefit actually leads to the ultimate goal."',
    ]},

    { type: 'h3', text: 'B. Defender Assumptions (Defenders Against Negatives)' },
    { type: 'paragraph', text: "These eliminate potential threats that could destroy the argument. They \"protect\" the conclusion by assuming that a specific problem does not exist." },
    { type: 'list', items: [
      '**Causal gap:** "The author assumes this specific alternative factor wasn\'t the real cause."',
      '**Feasibility gap:** "The author assumes that there aren\'t any obstacles that would make this plan fail."',
      '**Source gap:** "The author assumes the source\'s bias doesn\'t automatically invalidate their arguments."',
    ]},

    { type: 'h4', text: 'Common Logical Leaps' },
    { type: 'table', headers: ['Leap Type', 'What the Author Does', 'What the NA Must Do'], rows: [
      ['**Causal Leap**', 'Assumes a correlation proves a specific cause, ignoring alternatives', 'Rule out a specific alternative cause or confirm the stated cause is the only one'],
      ['**Generalization Leap**', 'Assumes a specific example represents a broader category', 'Confirm the example is representative or that the broader category shares the relevant trait'],
      ['**Definitional Leap**', 'Assumes two different terms are equivalent or incompatible', 'Provide the definitional bridge connecting or separating the two terms'],
      ['**Feasibility Leap**', 'Assumes a proposed plan will work without obstacles', 'Confirm a specific obstacle does not exist'],
      ['**Analogy Leap**', 'Assumes two situations are similar in a relevant way', 'Confirm the situations share the specific feature that matters for the conclusion'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Pre-phrase the Necessary Connection' },
    { type: 'paragraph', text: "Before looking at the answer choices, articulate the assumption in your own words. Complete this sentence:" },
    { type: 'paragraph', text: "***\"For this argument to work, the author must believe that...\"***" },
    { type: 'paragraph', text: "Your pre-phrase does not need to be the exact wording of the correct answer — it just needs to capture the **type** of belief the argument depends on. A good pre-phrase tells you what kind of answer to look for, so you can scan the choices efficiently instead of evaluating each one from scratch." },

    { type: 'h4', text: 'Pre-phrase Examples' },
    { type: 'table', headers: ['Gap Type', 'Pre-phrase Template'], rows: [
      ['Key Ingredient', '"The intermediate benefit must actually be useful for the ultimate goal."'],
      ['Definitional Gap', '"These two concepts must be incompatible (or connected) in the way the author assumes."'],
      ['Only Way', '"The stated cause must be the only effective way to produce the effect."'],
      ['Closed Universe', '"The defined group must be the only eligible candidates."'],
      ['Source Fallacy', '"A biased source\'s arguments must be inherently invalid."'],
    ]},

    { type: 'callout', variant: 'tip', title: 'NA Pre-phrases Are Softer Than SA Pre-phrases', text: "On Sufficient Assumption questions, your pre-phrase should be a precise logical statement (\"B → C\"). On Necessary Assumption questions, your pre-phrase should capture the **direction and type** of the assumption without demanding exact wording. NA answers are often more modest and less predictable than SA answers, so a rigid pre-phrase can cause you to overlook the correct choice." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'paragraph', text: "The **Negation Test** is the definitive proof for this question type. It works on a simple, airtight principle: **if a statement is truly necessary, the argument cannot survive without it.**" },
    { type: 'process', title: 'Applying the Negation Test', steps: [
      '**Select your top candidate** — the answer choice that best matches your pre-phrase.',
      '**Negate the answer choice (flip it).** Turn the statement into its logical opposite. Be careful to negate the *logic*, not just the verb.',
      '**Insert the negation.** Treat the negated statement as a new fact. Ask: *"If this new fact is true, does the conclusion still make sense?"*',
      '**Evaluate the impact:**\n• **Argument Collapses = CORRECT.** If the negation destroys the conclusion or breaks the link between premises and conclusion, the original answer choice was **necessary**.\n• **Argument Survives = INCORRECT.** If the conclusion remains logically valid (even if slightly weakened), the answer choice was **not necessary**.',
    ]},

    { type: 'h4', text: 'Negation Quick Reference' },
    { type: 'breakdown', labels: { title: 'Original Statement', text: 'Logical Negation' }, items: [
      { title: '"All X are Y"', text: '"Not all X are Y" (Some X are not Y)' },
      { title: '"Some X are Y"', text: '"None of X are Y"' },
      { title: '"X causes Y"', text: '"X does not cause Y"' },
      { title: '"X is the only way"', text: '"X is not the only way"' },
      { title: '"X can lead to Y"', text: '"X cannot lead to Y"' },
    ]},

    { type: 'callout', variant: 'default', title: 'Why Common Traps Fail the Negation Test', text: "**The Helpful Strengthener:** Negating a \"helpful\" fact might weaken the argument, but it won't destroy it. Necessary assumptions are essential, not just helpful. If the argument limps along after the negation, the answer is wrong.\n\n**The Neutral Choice:** Negating an irrelevant statement has no impact on the conclusion. If the argument doesn't care whether the statement is true or false, it is not a necessary assumption.\n\n**The Restatement:** An answer that merely paraphrases an explicit premise cannot be an assumption — assumptions are *unstated*. Negating a restatement contradicts a stated premise, which makes it seem like the argument collapses, but this is a false signal. The argument already states this information, so it doesn't \"assume\" it.\n\n**The Sufficient Trap:** An answer that is *too strong* — one that would guarantee the conclusion rather than just support it — may or may not be necessary. Test it carefully. Sometimes a sufficient assumption is also necessary; sometimes it is too specific and goes beyond what the argument actually requires." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Wrong Answer Patterns' },
    { type: 'paragraph', text: "Wrong answers on NA questions fail in predictable ways. Recognizing these traps lets you eliminate quickly and with confidence." },
    { type: 'table', headers: ['Trap Type', 'What It Does', 'How to Spot It'], rows: [
      ['**Out of Scope**', 'Introduces irrelevant concepts or comparisons that do not affect the core argument.', 'Ask: "Does this choice address the specific gap between the premises and conclusion?" If the choice talks about something the argument never discussed, eliminate it.'],
      ['**Restatement**', 'Merely rehashes information already explicitly stated in the premises. Assumptions must be unstated.', 'Ask: "Is this already said in the stimulus?" If yes, the argument does not need to *assume* it — it already states it.'],
      ['**Weakener**', 'Undermines the conclusion. An author never assumes a fact that actively harms their own case.', 'Check the direction: does this choice hurt or help the argument? If it hurts, eliminate immediately.'],
      ['**Too Strong / Sufficient**', 'Goes beyond what the argument requires. The answer would *prove* the conclusion rather than merely supporting it.', 'Apply the Negation Test carefully. Sometimes a strong answer IS necessary; sometimes it is not. Let the test decide.'],
      ['**Wrong Direction**', 'Addresses the right topic but connects the concepts in the wrong direction (e.g., the answer says B leads to A, but the argument needs A leads to B).', 'Diagram the relationship if needed. Make sure the answer bridges the gap in the same direction the argument requires.'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Necessary Assumption question from start to finish." },

    { type: 'question-card',
      id: 'WE-11-2-001',
      questionType: 'Necessary Assumption',
      difficulty: 'medium',
      stimulus: "Editorial: Our city should convert the abandoned rail corridor into a bicycle commuting path. A recent survey found that 60% of residents who live within two miles of the corridor would use it for daily commuting if it were available. Converting the corridor would therefore significantly reduce automobile traffic congestion in the city.",
      question: "The argument depends on assuming which one of the following?",
      options: [
        "(A) The majority of the city's automobile traffic congestion is caused by commuters who live within two miles of the rail corridor.",
        "(B) Converting the rail corridor would not cost more than other traffic-reduction strategies the city has considered.",
        "(C) At least some of the residents who would use the bicycle path for commuting currently commute by automobile. (Correct)",
        "(D) The rail corridor is long enough to connect major residential areas with the city's central business district.",
        "(E) Bicycle commuting is more environmentally beneficial than automobile commuting.",
      ],
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'process', title: 'Step-by-Step Walkthrough', steps: [
      '**Step 1 — Break Down the Argument:**\n• **Conclusion:** Converting the corridor would significantly reduce automobile traffic congestion.\n• **Premise 1:** 60% of nearby residents would use the bicycle path for daily commuting.\n• **Core Logic:** People would bike → traffic congestion drops.',
      '**Step 2 — Identify the Logical Gap:**\nThe premises tell us people would *bike*. The conclusion says *automobile traffic* would drop. But do these bikers currently drive cars? If the 60% who say they would bike currently walk, take the bus, or work from home, then adding a bike path would not remove any cars from the road. The argument assumes that at least some of these potential cyclists are currently *automobile* commuters. This is a classic Key Ingredient gap: the intermediate effect (people biking) only reduces congestion if those people were previously contributing to the congestion.',
      '**Step 3 — Pre-phrase:**\n"For this argument to work, the author must believe that at least some of the people who would use the bike path currently commute by car. Otherwise, no cars are removed from the road, and congestion doesn\'t change."',
      '**Step 4 — Evaluate with the Negation Test:**\nScan the choices for the one that matches our pre-phrase. Choice (C) directly addresses this: "At least some... currently commute by automobile." Negate it: "NONE of the residents who would use the bicycle path currently commute by automobile." If zero car commuters would switch to biking, then zero cars are removed from the road, and the conclusion that traffic congestion would be "significantly reduced" is completely unsupported. The argument collapses.',
    ]},

    { type: 'h3', text: 'Answer Choice Breakdown' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) The majority of the city\'s automobile traffic congestion is caused by commuters who live within two miles of the rail corridor.', text: 'This would strengthen the argument, but the argument doesn\'t need the *majority* of congestion to come from nearby commuters. Even a modest number of car commuters switching to bikes could "significantly reduce" congestion. **Negation:** Most congestion is NOT caused by nearby commuters. The argument is weakened but not destroyed — some reduction could still occur. **Too strong — not necessary.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Converting the rail corridor would not cost more than other traffic-reduction strategies.', text: 'Cost comparisons are irrelevant to whether the plan would *work*. The argument claims the plan would reduce congestion, not that it is the cheapest option. **Out of scope.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) At least some of the residents who would use the bicycle path for commuting currently commute by automobile.', text: '**Negation:** NONE of the potential cyclists currently commute by automobile. If true, the bike path would not remove a single car from the road. The conclusion — that traffic congestion would be significantly reduced — is completely destroyed. **The argument collapses → Necessary.**', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) The rail corridor is long enough to connect major residential areas with the city\'s central business district.', text: 'While practically important, the argument already states that 60% of nearby residents *would use it* for commuting. The argument takes usability as given. **Negation:** The corridor is NOT long enough. This seems problematic, but the premise already says residents would use it — the argument doesn\'t depend on the corridor\'s length beyond what\'s already assumed. **Not the core gap.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Bicycle commuting is more environmentally beneficial than automobile commuting.', text: 'The argument is about traffic congestion, not environmental benefits. Whether biking is greener than driving is irrelevant to the conclusion. **Out of scope.**', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "The 4-Step Method gives you a reliable, repeatable process: **Break Down → Find the Gap → Pre-phrase → Negate and Verify.**\n\nThe Negation Test is your definitive tool. When in doubt between two answer choices, negate both. The one whose negation *destroys* the argument is the necessary assumption. The one whose negation merely *weakens* the argument is a strengthener, not a necessary assumption.\n\nNA answers are often **modest**. Don't look for the answer that \"best supports\" the conclusion — look for the answer whose denial is fatal. Choice (C) above is a perfect example: \"at least some\" is a very cautious claim, but its denial is catastrophic.\n\nWatch for the **Key Ingredient gap** — it is one of the most common NA patterns. When the evidence is about one thing and the conclusion is about another, the necessary assumption is always that the first thing is connected to the second." },
  ]
};
