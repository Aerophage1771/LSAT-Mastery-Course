import { Lesson } from '../../types';

export const Lesson3_Drill_MechanisticChain: Lesson = {
  id: "15-3",
  title: "Drill: Mechanistic Chain (PT-102-S-2-Q-3)",
  content: [
    { type: 'h2', text: 'The Mechanistic Chain' },
    { type: 'paragraph', text: "A **Mechanistic Chain** is the most concrete pattern in Fill in the Blank questions. The stimulus describes a step-by-step physical, biological, or economic process \u2014 each step triggering the next like dominoes \u2014 and the blank asks you to state the final result of that chain. Your job is to trace the sequence of cause and effect to its logical endpoint, ignoring every other consideration." },

    { type: 'paragraph', text: "Mechanistic Chain stimuli are distinctive because they present a process that operates independently of anyone's intentions. The people described in the stimulus may have goals, but the mechanism doesn't care about those goals. It runs on physics, biology, or economics \u2014 not on wishes. This creates the central tension of the question: the mechanism's output often contradicts the actors' stated objectives, and the LSAT uses that contradiction to generate compelling wrong answers." },

    { type: 'h3', text: 'What Makes the Mechanistic Chain Distinctive' },
    { type: 'paragraph', text: "In a Mechanistic Chain completion, the correct answer must:" },
    { type: 'list', ordered: true, items: [
      '**Follow the chain to its endpoint.** The stimulus lays out A \u2192 B \u2192 C. The blank asks for C (or D). The correct answer states the final effect in the sequence \u2014 not a side effect, not a long-term consequence, and not a reversal of the process.',
      '**Ignore the actors\' intentions.** If people are dieting to reduce cholesterol, but the mechanism shows cholesterol increasing, the answer must reflect the mechanism, not the goal. Answers aligned with stated goals are the primary trap.',
      '**Match the scope of the final step.** If the last step says cholesterol "spills into the bloodstream," the answer should describe an increase in blood cholesterol \u2014 not a permanent health outcome, not a dietary recommendation, and not a comparison to other diets.',
    ]},

    { type: 'callout', variant: 'default', title: 'The Intention-Mechanism Split', text: "The single most important skill in Mechanistic Chain questions is separating what people *want* to happen from what the mechanism *causes* to happen. The LSAT constructs these stimuli so the mechanism's output is surprising or counterintuitive relative to the actors' goals. If your answer feels like good news for the people in the stimulus, it is almost certainly wrong. The correct answer follows the physics, not the plan." },

    { type: 'hr' },

    { type: 'h3', text: 'Key Strategy: Trace the Dominoes' },
    { type: 'paragraph', text: "The strategy for Mechanistic Chain completions is a linear, three-phase process:" },
    { type: 'process', title: 'Trace the Dominoes', steps: [
      '**Phase 1 \u2014 Map the Chain:** Read the stimulus and number each causal step. Identify the triggering action, each intermediate effect, and the final described effect. Write these in "A \u2192 B \u2192 C" form.',
      "**Phase 2 \u2014 Identify the Endpoint:** The blank always asks for the next step after the last described effect. Ask: \"Given C, what must happen next?\" The answer is dictated by the mechanism, not by anyone's preferences.",
      "**Phase 3 \u2014 Check for Goal Contradiction:** Verify whether the endpoint contradicts the actors' stated goals. If it does, that's a strong confirmation you've found the right answer. The LSAT designs these questions precisely to create this tension.",
    ]},

    { type: 'paragraph', text: "The critical verification step is to confirm that no link in your chain is missing or assumed. Every step must be explicitly stated in the stimulus. If you find yourself inferring a step that isn't written, you've gone beyond the evidence \u2014 and probably into a trap answer." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Mechanistic Chain (PT-102-S-2-Q-3)' },
    { type: 'paragraph', text: "This drill demonstrates the Mechanistic Chain pattern using a classic biology-based process. Your job is to trace the causal chain from the initial action to its final described effect and state the conclusion the mechanism demands." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: 'PT-102-S-2-Q-3',
      questionType: 'Fill in the Blank',
      difficulty: 'medium',
      stimulus: "Many people limit the intake of calories and cholesterol in their diet in order to lose weight and reduce the level of cholesterol in their blood. When a person loses weight, the fat cells in that person's body decrease in size but not in number. As they decrease in size, fat cells spill the cholesterol they contain into the bloodstream. Therefore, a person who goes on a low-calorie, low-cholesterol diet _______.",
      question: "Which one of the following most logically completes the argument?",
      options: [
        "(A) might at first have an increased level of cholesterol in his or her blood (Correct)",
        "(B) will not lose weight any faster than will a person whose diet is high in calories",
        "(C) might lose more weight by going on a low-calorie, high-cholesterol diet than by going on the low-calorie, low-cholesterol diet",
        "(D) will not decrease the size of his or her fat cells",
        "(E) will both decrease the level of cholesterol in his or her blood and gain weight",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Map the Causal Chain' },
    { type: 'paragraph', text: "Let's break the stimulus into its sequential causal steps using our Trace the Dominoes framework:" },

    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'Triggering Action', text: 'A person goes on a low-calorie, low-cholesterol diet. This is the initial input that starts the chain. Note that the diet has a **stated goal**: lose weight and reduce blood cholesterol.', badge: 'Step 0', badgeColor: 'blue' },
      { title: 'Step 1: Weight Loss', text: 'The diet causes weight loss. This is implied by the stated goal and confirmed by the next premise, which describes what happens "when a person loses weight."', badge: 'Step 1', badgeColor: 'blue' },
      { title: 'Step 2: Fat Cells Shrink', text: '"The fat cells in that person\'s body decrease in size but not in number." Key detail: cells get smaller, but none are eliminated. This distinction matters because the cholesterol is stored in the cells.', badge: 'Step 2', badgeColor: 'blue' },
      { title: 'Step 3: Cholesterol Released', text: '"Fat cells spill the cholesterol they contain into the bloodstream." This is the final described effect. Shrinking cells release their stored cholesterol directly into the blood.', badge: 'Step 3', badgeColor: 'indigo' },
      { title: 'Endpoint (The Blank)', text: 'The "therefore" signals we need the conclusion. Given Step 3, the immediate result is that **blood cholesterol increases** \u2014 at least temporarily, as a direct mechanical consequence of the weight loss process.', badge: 'Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Intention-Mechanism Split' },
    { type: 'paragraph', text: "**What is the causal mechanism?**" },
    { type: 'paragraph', text: "The stimulus describes a straightforward biological process: Diet \u2192 Weight Loss \u2192 Fat Cells Shrink \u2192 Cholesterol Spills into Bloodstream \u2192 Blood Cholesterol Rises. Each step mechanically triggers the next." },
    { type: 'paragraph', text: "**Where is the goal contradiction?**" },
    { type: 'paragraph', text: "The dieters' two goals are:" },
    { type: 'list', items: [
      '**Goal 1:** Lose weight. \u2192 The mechanism achieves this (fat cells shrink).',
      '**Goal 2:** Reduce blood cholesterol. \u2192 The mechanism **contradicts** this (cholesterol is released into the bloodstream, increasing blood cholesterol).',
    ]},
    { type: 'paragraph', text: "This is a textbook Intention-Mechanism Split. The diet achieves one goal while mechanically undermining the other. The correct answer must reflect the mechanism's output (cholesterol increase), not the dieter's hope (cholesterol decrease)." },

    { type: 'h4', text: 'Step 3: Pre-Phrase the Answer' },
    { type: 'paragraph', text: "Synthesize the chain: the immediate, mechanical result of the diet is that stored cholesterol enters the bloodstream. Therefore:" },
    { type: 'callout', title: 'Pre-Phrase', variant: 'tip', text: "A person on this diet will experience a temporary increase in blood cholesterol as an immediate byproduct of the weight-loss process, even though reducing cholesterol was one of their goals." },

    { type: 'h4', text: 'Step 4: Evaluate Each Answer' },
    { type: 'paragraph', text: "Now apply the Chain Endpoint Test (Does this answer state the final mechanical result?) and the Goal Contradiction Test (Does it correctly contradict the stated intention?) to each choice." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) might at first have an increased level of cholesterol in his or her blood', text: "This perfectly captures the chain's endpoint. \"Increased level of cholesterol in his or her blood\" matches Step 3 (cholesterol spilling into the bloodstream). The qualifier \"at first\" correctly limits the effect to the immediate, process-related timeframe \u2014 the stimulus only describes what happens during weight loss, not long-term outcomes. The qualifier \"might\" is appropriately modest. **Passes both the Chain Endpoint Test and the Goal Contradiction Test.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(B) will not lose weight any faster than will a person whose diet is high in calories', text: "The stimulus provides zero information about the **rate** of weight loss or about comparisons to other diet types. This answer introduces an entirely new dimension (speed of weight loss, high-calorie diets) that the mechanism does not address. The chain is about cholesterol, not about comparative weight-loss rates.", badge: 'Out-of-Scope Comparison', badgeColor: 'red' },
      { title: '(C) might lose more weight by going on a low-calorie, high-cholesterol diet...', text: "This answer compares two diets, but the stimulus only describes one process. No information is given about what a high-cholesterol diet would do. The chain traces the effects of *this* diet; it does not compare it to alternatives. This answer also redirects attention to weight loss rather than the cholesterol mechanism that is the chain's endpoint.", badge: 'Unsupported Comparison', badgeColor: 'red' },
      { title: '(D) will not decrease the size of his or her fat cells', text: "This directly **contradicts** Step 2 of the chain. The stimulus explicitly states that fat cells \"decrease in size\" when a person loses weight. Choosing this answer requires ignoring a stated premise. This is a contradiction trap \u2014 it tests whether you read the stimulus carefully.", badge: 'Contradicts Premise', badgeColor: 'red' },
      { title: '(E) will both decrease the level of cholesterol in his or her blood and gain weight', text: "This answer gets both conclusions backward. The mechanism shows cholesterol **increasing** (not decreasing) and the diet causes weight **loss** (not gain). It aligns with neither the mechanism nor the stated goals. This is a double-contradiction trap designed to catch test-takers who confuse the direction of the chain.", badge: 'Double Contradiction', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: Summary Table' },
    { type: 'table', headers: ['Answer', 'What It Claims', 'Chain Support?', 'Verdict'], rows: [
      ['**(A) Cholesterol increases at first**', '**Blood cholesterol rises temporarily**', '**\u2713 \u2014 Direct endpoint of the chain**', '**Correct \u2713**'],
      ['(B) No faster weight loss', 'Rate comparison to other diets', '\u2717 \u2014 No rate or comparison data given', 'Out of Scope'],
      ['(C) High-cholesterol diet better', 'Diet comparison', '\u2717 \u2014 Only one diet described', 'Unsupported'],
      ['(D) Fat cells don\'t shrink', 'No size decrease', '\u2717 \u2014 Directly contradicts premise', 'Contradiction'],
      ['(E) Lower cholesterol + weight gain', 'Opposite of mechanism', '\u2717 \u2014 Reverses both outcomes', 'Double Contradiction'],
    ]},

    { type: 'paragraph', text: "Notice the pattern: wrong answers either **leave the chain** (B, C introduce comparisons the stimulus never makes), **contradict a premise** (D denies fat cell shrinkage), or **reverse the mechanism's direction** (E flips both outcomes). Only (A) follows the chain to its mechanical endpoint and states the result with appropriate qualifiers." },

    { type: 'hr' },

    { type: 'h3', text: 'Mechanistic Chain: Common Traps' },
    { type: 'paragraph', text: "Mechanistic Chain stimuli generate a specific set of traps that recur across many questions. Be alert to these:" },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Spot It' }, items: [
      { title: 'Goal Alignment', text: 'The answer states a result that aligns with the actors\' **stated intentions** rather than the mechanism\'s actual output. Ask: "Does the mechanism support this, or does only the actors\' hope support it?" If the mechanism contradicts the goal, goal-aligned answers are wrong.', badge: 'Most Common', badgeColor: 'blue' },
      { title: 'Scope Expansion', text: 'The answer introduces a **comparison, rate, or long-term outcome** not discussed in the stimulus. The chain only describes what happens next; it does not compare diets, predict timelines, or project permanent results. If the answer discusses something the stimulus doesn\'t, it has left the chain.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Premise Contradiction', text: 'The answer **denies a stated fact** from the stimulus. This is the simplest trap to catch: re-read the premises and verify that each claim in the answer is consistent with them. Any answer that says "X doesn\'t happen" when the stimulus says "X happens" is instantly eliminable.', badge: 'Easy to Catch', badgeColor: 'slate' },
      { title: 'Direction Reversal', text: 'The answer **flips the direction** of the chain\'s output. If the chain leads to an increase, the answer claims a decrease (or vice versa). Check the polarity of the final step against each answer choice.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Trace the chain, not the goal.** The mechanism operates independently of what anyone wants. If the chain says cholesterol goes up, the answer says cholesterol goes up \u2014 even if the whole point of the diet was to bring it down.\n\n**2. Every link must be explicit.** Each step in the chain must be directly stated in the stimulus. If you find yourself inferring a step, you have left the chain and are likely heading toward a trap answer.\n\n**3. Qualifiers matter.** The correct answer (A) uses \"might\" and \"at first\" \u2014 both appropriately modest. The stimulus describes a process, not a guarantee. Answers that overclaim (\"will permanently,\" \"always\") or underclaim (\"might eventually, years later\") fail the scope test.\n\n**4. Contradictions are free eliminations.** Any answer that denies a stated premise is wrong, full stop. Train yourself to spot these immediately \u2014 they are the easiest points available on the test.\n\n**5. Comparisons require data.** An answer comparing two diets is only valid if the stimulus provides data about both. A single-chain stimulus cannot support a comparative conclusion." },
  ]
};
