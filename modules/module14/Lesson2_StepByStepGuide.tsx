import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "14-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'The 4-Step Method for Principle-Generalization Questions' },
    { type: 'paragraph', text: "This lesson provides a complete, repeatable method for solving any Principle-Generalization question. Each step includes concrete guidance, examples of how the step works in practice, and callouts for when things get tricky. At the end, you will work through a full example applying all four steps, followed by a catalogue of wrong-answer patterns and a timing strategy." },

    { type: 'callout', variant: 'tip', title: 'Timing', text: "You should spend roughly **1 minute and 30 seconds** per Principle-Generalization question. The majority of your time (~40 seconds) should be spent on Steps 1 and 2 — understanding the situation and formulating your pre-phrase. If your pre-phrase is strong, evaluating the answer choices (Step 4) takes only 30–40 seconds. A weak or missing pre-phrase forces you to evaluate each choice from scratch, which easily pushes you past 2 minutes." },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 — Understand the Situation:** Read the stimulus as a case study. Identify the key players, the key change or comparison, and the outcome.',
      '**Step 2 — Identify the Key Dynamic:** Determine the central mechanism — the one relationship or pattern that makes this situation noteworthy.',
      '**Step 3 — Abstract to General Terms:** Replace specific details with general categories while preserving the logical structure. Formulate your pre-phrase: the "moral of the story."',
      '**Step 4 — Match the Answer:** Compare each answer choice to your pre-phrase and the stimulus. The correct answer must be a general rule that the stimulus directly and specifically demonstrates.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Understand the Situation' },
    { type: 'paragraph', text: "Your first task is to read the stimulus and understand it as a self-contained case study. Unlike Flaw, Weaken, or Strengthen questions, you are usually **not** reading a formal argument. There is often no explicit conclusion, no logical gap to exploit, and no indicator words to guide you. Instead, you are reading a short narrative — the results of an experiment, an observation about behavior, a historical anecdote — and your job is to understand what happened and why." },

    { type: 'paragraph', text: "As you read, identify three components:" },
    { type: 'breakdown', labels: { title: 'Component', text: 'What to Look For' }, items: [
      { title: 'The Players', text: 'Who or what is involved? People, organisms, policies, groups? Are there two groups being compared, or one group observed over time? Identify the subjects of the scenario.', badge: 'Who/What', badgeColor: 'blue' },
      { title: 'The Key Variable', text: 'What is the one factor that changes, differs, or is being manipulated? In an experiment, this is the independent variable. In an anecdote, this is the distinguishing feature between two situations or the cause of a notable outcome.', badge: 'What Changed', badgeColor: 'blue' },
      { title: 'The Outcome', text: 'What happened as a result? What is the observed effect, consequence, or difference in behavior? This is the dependent variable — the thing that the key variable influenced.', badge: 'What Resulted', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Example' },
    { type: 'blockquote', text: '"Toddlers in a day-care study who bit other children were not acting out of hostility. Researchers observed that biting occurred almost exclusively when a child wanted a toy that another child was holding and verbal negotiation had failed. The biting stopped when caregivers taught the children to trade toys."' },
    { type: 'paragraph', text: "Applying the three-component framework:" },
    { type: 'list', items: [
      '**Players:** Toddlers in a day-care setting.',
      '**Key Variable:** The reason for biting — not hostility, but a failed attempt to obtain a toy (a problem-solving strategy).',
      '**Outcome:** Once an alternative strategy (trading) was taught, the biting stopped.',
    ]},

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "Some stimuli present three or four interrelated facts without a clear \"experiment\" structure. When this happens, look for the **contrast** — the element that makes one thing different from another. If there is no contrast, look for the **causal chain** — what leads to what. Every Principle-Generalization stimulus has a core relationship; your job in Step 1 is to find it, even if the stimulus does not make it obvious." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Identify the Key Dynamic' },
    { type: 'paragraph', text: "Now that you understand what happened, ask yourself: **What is the one relationship or pattern that makes this situation interesting or noteworthy?** This is the central dynamic — the mechanism that the principle will capture." },

    { type: 'paragraph', text: "The key dynamic is not a summary of the stimulus. It is the **underlying logic** — the reason *why* the outcome occurred, expressed in terms of the relationship between the key variable and the outcome. To find it, ask:" },
    { type: 'list', ordered: true, items: [
      '"**Why** did this outcome occur?" — This points to the causal mechanism.',
      '"**What is surprising or noteworthy** about this situation?" — This points to the principle\'s insight.',
      '"**Would this same pattern apply** if I changed the specific details?" — If yes, you have found a generalizable dynamic.',
    ]},

    { type: 'h4', text: 'Example (Continued)' },
    { type: 'paragraph', text: "From the toddler stimulus:" },
    { type: 'list', items: [
      '**Why did biting occur?** Not from hostility, but as a problem-solving strategy when verbal negotiation failed.',
      '**What is noteworthy?** The behavior that looked aggressive was actually instrumental — a means to an end, not an expression of emotion.',
      '**Would this apply elsewhere?** Yes — any time a behavior *appears* hostile but is actually a rational response to an obstacle.',
    ]},
    { type: 'paragraph', text: "**Key Dynamic:** A behavior that appears aggressive or hostile may actually be a rational attempt to solve a problem, and it can be eliminated by providing an alternative solution." },

    { type: 'callout', variant: 'tip', title: 'The \"Moral of the Story\" Test', text: "Imagine you are telling this story to a friend and they ask, \"So what\'s the point?\" Your answer to that question is the key dynamic. If you cannot state the point in one or two sentences without using any specific details from the stimulus, you have not yet identified the dynamic. Keep refining until you can." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Abstract to General Terms' },
    { type: 'paragraph', text: "This is the most critical step. Take the key dynamic from Step 2 and translate it into fully abstract, general language. Replace every specific detail with a general category, while preserving the logical structure." },

    { type: 'h4', text: 'The Abstraction Technique' },
    { type: 'paragraph', text: "Follow this systematic process:" },
    { type: 'process', title: 'Abstraction Process', steps: [
      '**List the specific nouns** in your key dynamic (toddlers, biting, toys, trading). Replace each with a general category (individuals, a behavior, a desired resource, an alternative strategy).',
      '**List the specific verbs** (bit, wanted, failed, stopped). Replace each with a general verb (engaged in, sought, was unable to, ceased).',
      '**List the specific context** (day care, caregivers). Remove or replace with a general setting (an environment, authority figures).',
      '**Preserve the logical connectors** — the "because," "when," "leads to," "instead of" — that link the components. These are the skeleton of the principle.',
      '**State the result** as a general proposition: "A behavior that appears [negative quality] may in fact be [functional purpose], and can be eliminated by [providing alternative means]."',
    ]},

    { type: 'h4', text: 'Example (Continued)' },
    { type: 'table', headers: ['Specific Detail', 'Abstracted Version'], rows: [
      ['"Toddlers"', '"Individuals" or "agents"'],
      ['"Biting"', '"A behavior that appears aggressive"'],
      ['"Wanting a toy another child was holding"', '"Attempting to obtain a desired resource"'],
      ['"Verbal negotiation had failed"', '"Standard means of achieving the goal were unavailable"'],
      ['"Trading toys"', '"An alternative means of achieving the goal"'],
      ['"Biting stopped"', '"The apparently aggressive behavior ceased"'],
    ]},
    { type: 'paragraph', text: "**Pre-phrase:** \"A behavior that appears hostile or aggressive may actually be a rational attempt to achieve a goal when other means are unavailable, and providing an effective alternative eliminates the behavior.\"" },

    { type: 'callout', variant: 'default', title: 'Common Abstraction Mistakes', text: "**Too specific:** \"Children bite because they want toys.\" This is a summary, not a principle. It only applies to this exact scenario.\n\n**Too vague:** \"People sometimes do bad things for good reasons.\" This loses the critical mechanism — the role of unavailable alternatives and the solution of providing them.\n\n**Wrong focus:** \"Teaching children to trade is an effective discipline strategy.\" This captures a practical recommendation but misses the underlying *principle* about why the behavior occurred in the first place.\n\nThe correct level of abstraction preserves the **mechanism** (why → because → therefore) while removing the **specifics** (who, where, what exactly)." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Match the Answer' },
    { type: 'paragraph', text: "Compare each answer choice to your pre-phrase. The correct answer will be a general proposition that captures the same dynamic you identified, phrased in abstract terms. Use two checks:" },

    { type: 'breakdown', labels: { title: 'Check', text: 'What to Verify' }, items: [
      { title: 'Check 1: The Textbook Test', text: 'Is the stimulus a *textbook example* of this principle? Would a professor use this stimulus as a case study to illustrate this principle? If yes, the principle is likely correct. If the stimulus merely "doesn\'t contradict\" the principle, it is likely wrong.', badge: 'Primary', badgeColor: 'indigo' },
      { title: 'Check 2: The Strength Test', text: 'Is the principle\'s language appropriately calibrated to the evidence? A single case supports \"can\" and \"sometimes\" but not \"always\" and \"necessarily.\" If the principle claims more than the stimulus demonstrates, it is too strong.', badge: 'Secondary', badgeColor: 'blue' },
    ]},

    { type: 'paragraph', text: "When two choices seem close, apply the **Whole Story Test**: does the principle capture the *entire* central dynamic, or just a piece of it? The correct answer accounts for all the important elements of the story — not just one aspect." },

    { type: 'callout', variant: 'tip', title: 'The Flexibility Pivot', text: "If no answer choice matches your pre-phrase exactly, do not abandon the logic of the stimulus. Instead, look for the choice that best *describes the situation* using different abstract language than you expected. The correct answer often phrases the principle in a way you did not anticipate — but it still captures the same underlying dynamic. Trust your understanding of the stimulus, not your exact wording." },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Principle-Generalization question from start to finish." },

    { type: 'question-card',
      id: 'WE-14-2-001',
      questionType: 'Principle - Generalization',
      difficulty: 'medium',
      stimulus: "A pharmaceutical company developed a new pain reliever and tested it against a placebo in two trials. In the first trial, patients were told they might receive either the drug or a sugar pill. In the second trial, patients were told they would definitely receive a powerful new pain medication (though half actually received the placebo). In the first trial, the drug outperformed the placebo by a modest margin. In the second trial, both groups — including those receiving the placebo — reported dramatically higher pain relief than either group in the first trial.",
      question: "Which one of the following propositions is best illustrated by the situation described above?",
      options: [
        "(A) Placebos can be as effective as actual medication in treating pain when patients believe they are receiving real treatment.",
        "(B) The effectiveness of a medical treatment can be significantly influenced by the patient's expectations about that treatment. (Correct)",
        "(C) Drug companies should always tell patients they are receiving real medication in order to maximize treatment effectiveness.",
        "(D) Pain is a subjective experience that cannot be reliably measured through clinical trials.",
        "(E) Clinical trials that do not control for patient expectations produce unreliable results.",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'process', title: 'Step-by-Step Walkthrough', steps: [
      '**Step 1 — Understand the Situation:**\n• **Players:** Patients in two clinical trials for a new pain reliever.\n• **Key Variable:** What patients were *told* about their treatment. Trial 1: might get drug or sugar pill. Trial 2: told they would definitely get a powerful new medication.\n• **Outcome:** Trial 2 produced dramatically higher pain relief in *both* groups (even the placebo group) compared to Trial 1. The patients\' beliefs, not the actual substance, drove the difference.',
      '**Step 2 — Identify the Key Dynamic:**\nThe same substances (drug and placebo) produced different results depending on what patients *believed* they were receiving. When patients expected a powerful treatment, even the placebo worked much better. The key dynamic is: **expectations about a treatment affect the treatment\'s observed effectiveness.**',
      '**Step 3 — Abstract to General Terms:**\n• "Pain reliever" → "a medical treatment"\n• "Patients were told" → "expectations were set"\n• "Higher pain relief" → "greater effectiveness"\n• "Sugar pill / placebo" → "an inert substance"\n• Pre-phrase: "The perceived effectiveness of a treatment is influenced by the patient\'s expectations about that treatment, independent of the treatment\'s actual properties."',
      '**Step 4 — Match the Answer:**\nScan for the choice that captures the expectations → effectiveness dynamic. Choice (B) — "The effectiveness of a medical treatment can be significantly influenced by the patient\'s expectations about that treatment" — is a near-perfect match to our pre-phrase. It captures the right variable (expectations), the right outcome (effectiveness), the right scope (medical treatment), and uses appropriately moderate language ("can be").',
    ]},

    { type: 'h3', text: 'Answer Choice Breakdown' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Placebos can be as effective as actual medication in treating pain when patients believe they are receiving real treatment.', text: "This focuses only on the placebo's performance. While the stimulus does show the placebo working better in Trial 2, the central dynamic is broader: *both* groups (drug and placebo) performed better when expectations were high. This principle captures a subset of the story (the placebo result) but misses the larger point (expectations affect all treatments, not just placebos).", badge: 'Partial Match', badgeColor: 'red' },
      { title: '(B) The effectiveness of a medical treatment can be significantly influenced by the patient\'s expectations about that treatment.', text: "This captures the entire central dynamic. It identifies the key variable (patient expectations), the key outcome (treatment effectiveness), and uses appropriately moderate language (\"can be significantly influenced\"). The stimulus is a textbook example of this proposition — both the drug and placebo results changed based on expectations.", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Drug companies should always tell patients they are receiving real medication in order to maximize treatment effectiveness.', text: "This is a prescriptive recommendation (\"should always\") drawn from a descriptive case study. The stimulus tells us *what happened*, not *what should be done*. Additionally, \"always\" is too strong, and this raises ethical concerns (deception in medicine) that the stimulus does not address. Classic Normative Leap trap.", badge: 'Normative Leap', badgeColor: 'red' },
      { title: '(D) Pain is a subjective experience that cannot be reliably measured through clinical trials.', text: "The stimulus does not claim that pain cannot be measured. Both trials successfully measured pain relief outcomes. The issue is not measurement reliability but the *influence of expectations* on those measurements. This principle addresses a completely different concern (measurement validity) than the one the stimulus illustrates (expectation effects).", badge: 'Wrong Topic', badgeColor: 'red' },
      { title: '(E) Clinical trials that do not control for patient expectations produce unreliable results.', text: "This is a methodological recommendation about trial design. While the stimulus *implies* that expectations matter for trial design, the central dynamic is about the *relationship between expectations and effectiveness*, not about the proper design of clinical trials. This answer shifts the focus from the psychological phenomenon to the research methodology.", badge: 'Scope Shift', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Wrong-Answer Patterns' },
    { type: 'paragraph', text: "Principle-Generalization wrong answers fall into predictable categories. Recognizing these patterns helps you eliminate traps quickly during timed practice." },

    { type: 'breakdown', labels: { title: 'Trap Type', text: 'How It Works' }, items: [
      { title: 'The Normative Leap (Is → Ought)', text: 'The stimulus is *descriptive* (explaining what happened), but the answer is *prescriptive* (arguing what should happen). A factual story cannot support a moral recommendation. Watch for words like \"should,\" \"ought to,\" \"must\" in the answer when the stimulus contains none.', badge: 'Common', badgeColor: 'blue' },
      { title: 'The Partial Match', text: 'Captures one element of the story correctly (e.g., the cause) but ignores the critical interaction (e.g., the effect), failing to cover the whole dynamic. These answers feel right because they touch on something real from the stimulus — but they miss the complete picture.', badge: 'Common', badgeColor: 'blue' },
      { title: 'The Reverse Logic', text: 'Reverses the direction of causation or conditionality found in the story. The stimulus says \"A leads to B,\" but the answer says \"B leads to A\" or \"B indicates A.\" Always check: does the principle\'s causal arrow point in the same direction as the stimulus\'s?', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'The Too-Strong Claim', text: 'Uses absolute language (\"always,\" \"never,\" \"necessarily,\" \"all\") when the stimulus provides only one example. A single case study supports \"can\" and \"sometimes,\" not \"always\" and \"every.\"', badge: 'Common', badgeColor: 'blue' },
      { title: 'The Out-of-Scope Concept', text: 'Introduces a concept not mentioned or implied in the stimulus — confidence, effort, self-assessment, morality — and builds the principle around that imported concept. The principle may be true in the real world, but the stimulus provides no evidence for it.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'The Prediction Mismatch', text: 'If you actually applied this principle to the facts of the stimulus, it would predict a *different* outcome than what actually occurred. This is the ultimate dealbreaker: the stimulus must be a *positive* example of the principle, not a counterexample.', badge: 'Rare but Decisive', badgeColor: 'indigo' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Timing Strategy' },
    { type: 'paragraph', text: "Here is how to allocate your ~90 seconds on a Principle-Generalization question:" },
    { type: 'table', headers: ['Phase', 'Time', 'Action'], rows: [
      ['Read stimulus', '~25 sec', 'Read carefully. Identify players, key variable, outcome.'],
      ['Identify dynamic + pre-phrase', '~15 sec', 'State the \"moral of the story\" in abstract terms. This is non-negotiable.'],
      ['Scan answers', '~35 sec', 'Check each answer against your pre-phrase. Apply the Textbook Test and Strength Test.'],
      ['Verify', '~10 sec', 'Confirm your choice captures the whole story. Eliminate any remaining competitors.'],
      ['**Total**', '**~85 sec**', '**Leave 5 seconds as buffer for hard questions.**'],
    ]},
    { type: 'callout', variant: 'tip', title: 'The Pre-Phrase Saves Time', text: "Students who skip the pre-phrase and go straight to the answer choices typically spend 15–20 seconds *per choice* evaluating from scratch. That is 75–100 seconds on choices alone, leaving almost no time for understanding the stimulus. Students who invest 15 seconds in a strong pre-phrase typically spend only 5–8 seconds per choice, finishing the entire question in under 90 seconds with higher accuracy." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**The 4-Step Method gives you a repeatable process:** Understand → Identify the Dynamic → Abstract → Match.\n\n**Step 2 (Identify the Key Dynamic) is the pivot point.** If you correctly identify the central mechanism, the rest of the question falls into place. If you misidentify it, no amount of careful answer evaluation will save you.\n\n**The Abstraction Technique is learnable.** Replace specific nouns with general categories, specific verbs with abstract verbs, specific contexts with universal settings — but preserve the logical connectors. Practice this on every Principle-Generalization question you encounter.\n\n**Pre-phrase before reading answers.** Your pre-phrase is your shield against trap answers. Without it, every answer choice looks plausible. With it, the correct answer is usually obvious.\n\n**Wrong answers fail in predictable ways.** Learn the six trap types (Normative Leap, Partial Match, Reverse Logic, Too Strong, Out of Scope, Prediction Mismatch) and you will be able to eliminate 3–4 answers in seconds.\n\n**The correct answer passes the Textbook Test.** Ask: \"Is this stimulus a textbook example of this principle?\" If the stimulus specifically and directly demonstrates the principle, you have the right answer. If the stimulus merely does not contradict it, you have a trap." },
  ]
};
