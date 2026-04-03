import { Lesson } from '../../types';

export const Lesson9_Drill_ChainOfLogic2: Lesson = {
  id: '10-9',
  title: 'Drill: The Chain of Logic Part 2 (PT-120-S-4-Q-15)',
  questionPolicy: 'repository_required',
  content: [
    { type: 'h2', text: 'Chain of Logic — Complex Chains' },
    {
      type: 'paragraph',
      text: 'This lesson builds on the Chain of Logic pattern with a more complex variation. Here, the argument describes **two separate groups** using different characteristics and then draws a conclusion that connects them. The logical chain is broken because the author assumes — without proof — that the defining trait of Group A overlaps with or implies the defining trait of Group B.',
    },
    {
      type: 'paragraph',
      text: 'Your task is to provide the missing **definitional link** between those traits. The correct answer often uses formal logical language — "Only X are Y" or "No X are Y" — creating a strict bridge that completes the chain.',
    },
    {
      type: 'paragraph',
      text: 'This lesson also covers an advanced variant that shows up in harder causal Sufficient Assumption questions: the premises already give you the core rule or causal chain, but the conclusion quietly assumes a triggering fact or conditional activation step that has never been established. In those cases, the correct answer is often narrower than students expect.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Translating "Only" Statements',
      text: '"Only X are Y" translates to **Y → X** (if Y, then X). This reverses the intuitive reading order. "The only X are Y" translates to **X → Y** (if X, then Y). Getting this translation right is critical — many wrong answers exploit the confusion between these two forms.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Practice Question' },

    { type: 'hr' },

    {
      type: 'question-card',
      id: 'PT-120-S-4-Q-15',
      stimulus:
        'People who have doctorates in the liberal arts are interested in improving their intellects. Companies, however, rarely hire people who are not concerned with the financial gain that can be obtained by hard work in the business world. As a result, companies rarely hire people who have doctorates in the liberal arts.',
      question: 'The conclusion of the argument follows logically if which one of the following is assumed?',
      options: [
        '(A) Companies would hire people with doctorates in the liberal arts if such people were interested in the money available in the business world.',
        '(B) Some people who are interested in the liberal arts do not care about money.',
        '(C) The only people not interested in making money in the business world are people who are interested in improving their intellects.',
        '(D) People with doctorates in the liberal arts are interested in employment in the business world.',
        '(E) Only people not concerned with making money in the business world are interested in improving their intellects. (Correct)',
      ],
    },

    { type: 'h3', text: 'Step-by-Step Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    {
      type: 'paragraph',
      text: 'Map each statement to its conditional form, paying attention to the distinct concepts each premise introduces.',
    },
    {
      type: 'breakdown',
      labels: { title: 'Statement', text: 'Logic' },
      items: [
        {
          title: 'People who have doctorates in the liberal arts are interested in improving their intellects.',
          text: '**LA Doctorate → Interested in Improving Intellect** (LA → II)',
        },
        {
          title:
            'Companies, however, rarely hire people who are not concerned with the financial gain that can be obtained by hard work in the business world.',
          text: '**Not Concerned with Money → Rarely Hired** (NCM → RH)',
        },
        {
          title: 'As a result, companies rarely hire people who have doctorates in the liberal arts.',
          text: '**Conclusion:** LA Doctorate → Rarely Hired (LA → RH)',
        },
      ],
    },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: 'The argument\'s chain is broken. The two premises talk about **different traits**:\n\n- Premise 1 connects LA doctorates to "improving intellects"\n- Premise 2 connects "not concerned with money" to rarely hired\n\nTo prove LA → RH, we need to link the *end* of Premise 1 to the *start* of Premise 2.',
    },
    {
      type: 'code',
      text: 'Have:         LA → II        (Premise 1)\nHave:         NCM → RH       (Premise 2)\nNeed:         LA → RH        (Conclusion)\nMissing link: II → NCM\n\nFull chain:   LA → II → NCM → RH  ✓',
    },

    { type: 'h4', text: 'Step 3: Prephrase the Bridge' },
    {
      type: 'paragraph',
      text: 'We need: **"If you are Interested in Improving your Intellect, then you are Not Concerned with Money."** (II → NCM)\n\nThis link may appear in disguised form — particularly as an "only" statement, which reverses the apparent order of terms.',
    },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        {
          title:
            '(A) Companies would hire people with doctorates in the liberal arts if such people were interested in the money available in the business world.',
          text: 'This describes a hypothetical scenario ("if they were interested in money"). It does not establish what is actually true about people with LA doctorates. A conditional about a different situation cannot close the gap in the current argument.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title: '(B) Some people who are interested in the liberal arts do not care about money.',
          text: '"Some" is far too weak for a sufficient assumption. Even if *some* LA-interested people don\'t care about money, we cannot conclude that companies rarely hire *the entire group*. Sufficiency requires a universal claim, not a partial one.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title:
            '(C) The only people not interested in making money in the business world are people who are interested in improving their intellects.',
          text: '"The only X are Y" translates to **X → Y**, so this gives us: NCM → II. That is the **reverse** of the link we need (II → NCM). It tells us that everyone not concerned with money is interested in improving their intellect — but we need the opposite direction.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title: '(D) People with doctorates in the liberal arts are interested in employment in the business world.',
          text: 'This establishes that LA doctorate holders *want* business jobs, but it does not explain why they are rarely hired. It provides no bridge between "improving intellects" and "not concerned with money."',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title:
            '(E) Only people not concerned with making money in the business world are interested in improving their intellects.',
          text: '"Only X are Y" translates to **Y → X**: If you are Interested in Improving your Intellect (Y), then you are Not Concerned with Money (X).\n\n**Translation:** II → NCM — exactly the bridge we predicted.\n\n**Full chain:** LA → II → NCM → RH. The conclusion (LA → RH) follows with certainty.',
          badge: 'Correct',
          badgeColor: 'green',
        },
      ],
    },

    {
      type: 'callout',
      title: 'Key Takeaway',
      variant: 'summary',
      text: '**Complex chains** involve premises that use *different concepts* for their endpoints. The gap is a definitional link that equates or connects those concepts.\n\n**Translation is everything.** "Only X are Y" means Y → X. "The only X are Y" means X → Y. Many wrong answers exploit this confusion by offering the reversal of the link you need.\n\n**Systematic approach:** (1) Diagram each premise as a conditional. (2) Diagram the conclusion. (3) Identify which link is missing. (4) Translate each answer choice into conditional form and check if it supplies the missing link.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Advanced Variant: Existing Rule, Missing Trigger' },
    {
      type: 'paragraph',
      text: 'One of the most useful high-difficulty SA heuristics is this: sometimes the rule is already on the page. The answer does not need to invent a new medical, economic, or legal principle. It only needs to supply the one fact that shows the existing rule applies to the case in the conclusion.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Do Not Rewrite The Rule',
      text: 'If the premises already say "If X, then higher risk," the right answer may simply say that the new program, study, or policy will produce X. Students often over-search for a broader rule and miss the narrow bridge that actually proves the conclusion.',
    },

    {
      type: 'question-card',
      id: 'PT-114-S-1-Q-1',
      questionType: 'Sufficient Assumption',
      difficulty: 'easy',
      stimulus:
        'Physician: In itself, exercise does not cause heart attacks; rather, a sudden increase in an exercise regimen can be a cause. When people of any physical condition suddenly increase their amount of exercise, they also increase their risk of heart attack. As a result, there will be an increased risk of heart attack among employees of this company due to the new health program.',
      question: 'The conclusion drawn by the physician follows logically if which one of the following is assumed?',
      options: [
        '(A) Employees will abruptly increase their amount of exercise as a result of the new health program. (Correct)',
        '(B) The exercises involved in the new health program are more strenuous than those in the previous health program.',
        '(C) The new health program will force employees of all levels of health to exercise regularly.',
        '(D) The new health program constitutes a sudden change in the company\'s policy.',
        '(E) All employees, no matter what their physical condition, will participate in the new health program.',
      ],
    },

    { type: 'h4', text: 'Quick Analysis: PT-114-S-1-Q-1' },
    {
      type: 'paragraph',
      text: 'The physician already gives the operative causal rule: **sudden increases in exercise raise heart-attack risk**. The conclusion applies that rule to the company\'s new health program. So the only real gap is whether the program will actually cause employees to increase exercise abruptly.',
    },
    {
      type: 'code',
      text: 'Given rule:    Sudden increase in exercise -> Increased heart-attack risk\nConclusion:    New health program -> Increased heart-attack risk\nMissing link:  New health program -> Sudden increase in exercise\n\nFull chain:    New program -> Sudden increase -> Increased risk  ✓',
    },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        {
          title: '(A) Employees will abruptly increase their amount of exercise as a result of the new health program.',
          text: 'This is the exact missing trigger. Once the program causes an abrupt increase in exercise, the physician\'s stated causal rule takes over and the conclusion follows.',
          badge: 'Correct',
          badgeColor: 'green',
        },
        {
          title: '(B) The exercises involved in the new health program are more strenuous than those in the previous health program.',
          text: 'More strenuous is not the same as a **sudden increase** in exercise. The stimulus gives a rule about abrupt increases, not about intensity in the abstract.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title: '(C) The new health program will force employees of all levels of health to exercise regularly.',
          text: 'Regular exercise could be introduced gradually. This answer never guarantees the abrupt increase that the rule requires.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title: '(D) The new health program constitutes a sudden change in the company\'s policy.',
          text: 'A sudden policy change does not prove a sudden change in employee exercise behavior. The rule is about what employees do, not about how quickly the company announces the program.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title: '(E) All employees, no matter what their physical condition, will participate in the new health program.',
          text: 'Participation alone is still not enough. Even full participation would not guarantee the needed abrupt increase in exercise.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Advanced Variant: Activating A Conditional Causal Chain' },
    {
      type: 'paragraph',
      text: 'A second high-difficulty variation appears when the stimulus already gives you almost the entire causal chain, but one link is conditional. The conclusion then states the final result **without** that condition. In those cases, the correct answer often does not add a new theory at all. It simply activates the conditional link already sitting in the premises.',
    },

    {
      type: 'question-card',
      id: 'PT-112-S-1-Q-18',
      questionType: 'Sufficient Assumption',
      difficulty: 'hard',
      stimulus:
        'Moderate exercise lowers the risk of blockage of the arteries due to blood clots, since anything that lowers blood cholesterol levels also lowers the risk of hardening of the arteries, which in turn lowers the risk of arterial blockage due to blood clots; and, if the data reported in a recent study are correct, moderate exercise lowers blood cholesterol levels.',
      question: 'The conclusion drawn above follows logically if which one of the following is assumed?',
      options: [
        '(A) The recent study investigated the relationship between exercise and blood cholesterol levels.',
        '(B) Blockage of the arteries due to blood clots can be prevented.',
        '(C) Lowering blood cholesterol levels lowers the risk of blockage of the arteries.',
        '(D) The data reported in the recent study are correct. (Correct)',
        '(E) Hardening of the arteries increases the risk of blockage of the arteries due to blood clots.',
      ],
    },

    { type: 'h4', text: 'Quick Analysis: PT-112-S-1-Q-18' },
    {
      type: 'paragraph',
      text: 'This argument already gives you a nearly complete causal chain. The only weakness is that the exercise-to-cholesterol link is conditional: it holds **if** the recent study\'s data are correct. The conclusion, however, drops the "if" and states the full result unconditionally.',
    },
    {
      type: 'code',
      text: 'If study data are correct -> Moderate exercise lowers cholesterol\nLower cholesterol -> Lower risk of hardening\nLower risk of hardening -> Lower risk of clot blockage\n\nConclusion needs: Moderate exercise -> Lower risk of clot blockage\nMissing link: The study data are correct',
    },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        {
          title: '(A) The recent study investigated the relationship between exercise and blood cholesterol levels.',
          text: 'This merely confirms the subject of the study. The gap is not about what the study investigated, but about whether its reported data can be relied on.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title: '(B) Blockage of the arteries due to blood clots can be prevented.',
          text: 'The conclusion is about lowering risk, not about complete prevention. This does nothing to activate the conditional link already in the stimulus.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title: '(C) Lowering blood cholesterol levels lowers the risk of blockage of the arteries.',
          text: 'This is basically a compressed restatement of the causal chain the stimulus already gives. It does not fix the one conditional step that keeps the conclusion from following.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title: '(D) The data reported in the recent study are correct.',
          text: 'This activates the exact conditional premise the argument depends on. Once the study data are certified, the entire causal chain becomes unconditional and the conclusion follows.',
          badge: 'Correct',
          badgeColor: 'green',
        },
        {
          title: '(E) Hardening of the arteries increases the risk of blockage of the arteries due to blood clots.',
          text: 'This, too, only restates part of the existing chain from the opposite direction. The real gap is still the unactivated study condition.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
      ],
    },

    {
      type: 'callout',
      title: 'Updated Takeaway',
      variant: 'summary',
      text: '**Complex chains** involve premises that use different concepts for their endpoints, and the answer supplies the one missing link that lets the chain run to the conclusion.\n\n**Advanced SA questions often hide the gap inside an already-stated rule or causal chain.** In those cases, do not invent a bigger principle. Ask whether the conclusion quietly assumes a trigger fact or drops an "if" that still needs to be activated.\n\n**Causal language does not change the standard.** Even in medical or scientific stimuli, the answer still has to make the conclusion logically guaranteed, not merely more plausible.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Chain of Logic — Complex Chains"
        },
        {
          "type": "paragraph",
          "text": "This lesson builds on the Chain of Logic pattern with a more complex variation. Here, the argument describes **two separate groups** using different characteristics and then draws a conclusion that connects them. The logical chain is broken because the author assumes — without proof — that the defining trait of Group A overlaps with or implies the defining trait of Group B."
        },
        {
          "type": "paragraph",
          "text": "Your task is to provide the missing **definitional link** between those traits. The correct answer often uses formal logical language — \"Only X are Y\" or \"No X are Y\" — creating a strict bridge that completes the chain."
        },
        {
          "type": "callout",
          "title": "Translating \"Only\" Statements",
          "variant": "tip",
          "text": "\"Only X are Y\" translates to **Y → X** (if Y, then X). This reverses the intuitive reading order. \"The only X are Y\" translates to **X → Y** (if X, then Y). Getting this translation right is critical — many wrong answers exploit the confusion between these two forms."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Practice Question"
        },
        {
          "type": "hr"
        },
        {
          "type": "question-card",
          "id": "PT-120-S-4-Q-15",
          "stimulus": "People who have doctorates in the liberal arts are interested in improving their intellects. Companies, however, rarely hire people who are not concerned with the financial gain that can be obtained by hard work in the business world. As a result, companies rarely hire people who have doctorates in the liberal arts.",
          "question": "The conclusion of the argument follows logically if which one of the following is assumed?",
          "options": [
            "(A) Companies would hire people with doctorates in the liberal arts if such people were interested in the money available in the business world.",
            "(B) Some people who are interested in the liberal arts do not care about money.",
            "(C) The only people not interested in making money in the business world are people who are interested in improving their intellects.",
            "(D) People with doctorates in the liberal arts are interested in employment in the business world.",
            "(E) Only people not concerned with making money in the business world are interested in improving their intellects. (Correct)"
          ]
        },
        {
          "type": "paragraph",
          "text": "{{+**Try this:** Diagram all three statements as conditionals. Identify the missing link between the end of Premise 1 and the start of Premise 2. Then translate each answer choice into arrow form and check which one supplies the missing link.+}}"
        },
        {
          "type": "h3",
          "text": "Step-by-Step Analysis"
        },
        {
          "type": "h4",
          "text": "Step 1: Break Down the Argument"
        },
        {
          "type": "paragraph",
          "text": "Map each statement to its conditional form, paying attention to the distinct concepts each premise introduces."
        },
        {
          "type": "breakdown",
          "labels": {"title": "Statement", "text": "Logic"},
          "items": [
            {
              "title": "People who have doctorates in the liberal arts are interested in improving their intellects.",
              "text": "**LA Doctorate → Interested in Improving Intellect** (LA → II)"
            },
            {
              "title": "Companies, however, rarely hire people who are not concerned with the financial gain that can be obtained by hard work in the business world.",
              "text": "**Not Concerned with Money → Rarely Hired** (NCM → RH)"
            },
            {
              "title": "As a result, companies rarely hire people who have doctorates in the liberal arts.",
              "text": "**Conclusion:** LA Doctorate → Rarely Hired (LA → RH)"
            }
          ]
        },
        {
          "type": "h4",
          "text": "Step 2: Identify the Gap"
        },
        {
          "type": "paragraph",
          "text": "The argument's chain is broken. The two premises talk about **different traits**:\n\n- Premise 1 connects LA doctorates to \"improving intellects\"\n- Premise 2 connects \"not concerned with money\" to rarely hired\n\nTo prove LA → RH, we need to link the *end* of Premise 1 to the *start* of Premise 2."
        },
        {
          "type": "code",
          "text": "Have:         LA → II        (Premise 1)\nHave:         NCM → RH       (Premise 2)\nNeed:         LA → RH        (Conclusion)\nMissing link: II → NCM\n\nFull chain:   LA → II → NCM → RH  ✓"
        },
        {
          "type": "h4",
          "text": "Step 3: Prephrase the Bridge"
        },
        {
          "type": "paragraph",
          "text": "We need: **\"If you are Interested in Improving your Intellect, then you are Not Concerned with Money.\"** (II → NCM)\n\nThis link may appear in disguised form — particularly as an \"only\" statement, which reverses the apparent order of terms."
        },
        {
          "type": "h4",
          "text": "Step 4: Evaluate the Choices"
        },
        {
          "type": "breakdown",
          "labels": {"title": "Option", "text": "Analysis"},
          "items": [
            {
              "title": "(A) Companies would hire people with doctorates in the liberal arts if such people were interested in the money available in the business world.",
              "text": "This describes a hypothetical scenario (\"if they were interested in money\"). It does not establish what is actually true about people with LA doctorates. A conditional about a different situation cannot close the gap in the current argument.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(B) Some people who are interested in the liberal arts do not care about money.",
              "text": "\"Some\" is far too weak for a sufficient assumption. Even if *some* LA-interested people don't care about money, we cannot conclude that companies rarely hire *the entire group*. Sufficiency requires a universal claim, not a partial one.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(C) The only people not interested in making money in the business world are people who are interested in improving their intellects.",
              "text": "\"The only X are Y\" translates to **X → Y**, so this gives us: NCM → II. That is the **reverse** of the link we need (II → NCM). It tells us that everyone not concerned with money is interested in improving their intellect — but we need the opposite direction.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(D) People with doctorates in the liberal arts are interested in employment in the business world.",
              "text": "This establishes that LA doctorate holders *want* business jobs, but it does not explain why they are rarely hired. It provides no bridge between \"improving intellects\" and \"not concerned with money.\"",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(E) Only people not concerned with making money in the business world are interested in improving their intellects.",
              "text": "\"Only X are Y\" translates to **Y → X**: If you are Interested in Improving your Intellect (Y), then you are Not Concerned with Money (X).\n\n**Translation:** II → NCM — exactly the bridge we predicted.\n\n**Full chain:** LA → II → NCM → RH. The conclusion (LA → RH) follows with certainty.",
              "badge": "Correct",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Key Takeaway",
          "variant": "summary",
          "text": "**Complex chains** involve premises that use *different concepts* for their endpoints. The gap is a definitional link that equates or connects those concepts.\n\n**Translation is everything.** \"Only X are Y\" means Y → X. \"The only X are Y\" means X → Y. Many wrong answers exploit this confusion by offering the reversal of the link you need.\n\n**Systematic approach:** (1) Diagram each premise as a conditional. (2) Diagram the conclusion. (3) Identify which link is missing. (4) Translate each answer choice into conditional form and check if it supplies the missing link."
        }
      ]
    }
  },
};
