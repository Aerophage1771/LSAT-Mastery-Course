import { Lesson } from '../../types';

export const Lesson5_Drill_UnintendedConsequences: Lesson = {
  id: "14-5",
  title: "Drill: Unintended Consequences (PT-124-S-1-Q-5)",
  content: [
    { type: 'h2', text: 'Unintended Consequences' },
    { type: 'paragraph', text: 'An **Unintended Consequences** generalization captures one of the most fundamental logical patterns on the LSAT: the "Problem \u2192 Solution \u2192 New Problem" cycle. The stimulus describes an action, policy, or innovation introduced to solve an initial problem. While the solution succeeds at its original goal, it creates a new, often unforeseen, problem as a downstream effect. Your task is to recognize this causal chain and extract the principle that *solving one problem can generate another*.' },

    { type: 'paragraph', text: 'This pattern is distinct from a simple trade-off. In a trade-off, the costs and benefits are simultaneous and often known in advance. In an unintended consequences scenario, the negative outcome is a *downstream effect* \u2014 it arises *because* the solution worked, not despite it. The causal chain is sequential: success in one domain causes disruption in another. The principle must capture this sequential, causal relationship.' },

    { type: 'h3', text: 'What Makes Unintended Consequences Distinctive' },
    { type: 'list', ordered: true, items: [
      '**A successful solution.** The stimulus establishes that an action or policy achieved its intended goal. The solution worked.',
      '**A downstream negative effect.** The success of the solution triggered a chain of events that produced a new, different problem \u2014 often in a completely separate domain.',
      '**Causal linkage.** The new problem exists *because* the solution succeeded, not independently of it. The language of the stimulus makes this causal chain explicit ("as a result of," "the resulting," "this led to").',
      '**The correct principle captures the full chain.** An answer that only describes the solution, or only describes the new problem, or claims the solution failed, misses the structural logic of the scenario.',
    ]},

    { type: 'callout', variant: 'default', title: 'Key Signal', text: 'Look for causal transition language: "as a result of," "the resulting," "this in turn," "but," "however." These markers trace the domino effect from solution to new problem. Also watch for a shift in domain \u2014 the original problem and the new problem are typically in different areas (health \u2192 finance, technology \u2192 employment, agriculture \u2192 environment).' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Unintended Consequences (PT-124-S-1-Q-5)' },
    { type: 'paragraph', text: 'This drill demonstrates the unintended consequences pattern using a modern medicine scenario. Read the stimulus and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '14-5-drill',
      questionType: 'Principle - Generalization',
      difficulty: 'medium',
      stimulus: 'As a result of modern medicine, more people have been able to enjoy long and pain-free lives. But the resulting increase in life expectancy has contributed to a steady increase in the proportion of the population that is of advanced age. This population shift is creating potentially devastating financial problems for some social welfare programs.',
      question: 'Which one of the following propositions is most precisely exemplified by the situation presented above?',
      options: [
        '(A) Technical or scientific innovation cannot be the solution to all problems.',
        '(B) Implementing technological innovations should be delayed until the resulting social changes can be managed.',
        '(C) Every enhancement of the quality of life has unavoidable negative consequences.',
        '(D) All social institutions are affected by a preoccupation with prolonging life.',
        '(E) Solving one set of problems can create a different set of problems. (Correct)',
      ],
    },

    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Understand the Situation' },
    { type: 'paragraph', text: 'The stimulus presents a clear three-link causal chain. Let\'s trace each link.' },

    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'Link 1: The Solution', text: 'Modern medicine has enabled people to enjoy longer, pain-free lives. This is the original achievement \u2014 a successful solution to the problems of disease, suffering, and premature death.', badge: 'Success', badgeColor: 'green' },
      { title: 'Link 2: The Intermediate Effect', text: '"The resulting increase in life expectancy" \u2014 because people live longer, the proportion of elderly people in the population has grown steadily. This is a direct, predictable consequence of the solution working.', badge: 'Consequence', badgeColor: 'blue' },
      { title: 'Link 3: The New Problem', text: 'The demographic shift is "creating potentially devastating financial problems for some social welfare programs." A new, different problem has emerged \u2014 in an entirely different domain (public finance vs. healthcare).', badge: 'New Problem', badgeColor: 'red' },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Key Dynamic' },
    { type: 'paragraph', text: 'The argument presents a domino effect: **Solution succeeds \u2192 Success produces a side effect \u2192 Side effect creates a new problem.** The key insight is that the new problem exists *because* the solution worked, not because it failed.' },
    { type: 'paragraph', text: 'Notice the domain shift: the original problem was in **healthcare** (disease, early death), but the new problem is in **public finance** (welfare program costs). This cross-domain consequence is characteristic of the unintended consequences pattern \u2014 solving something here breaks something over there.' },
    { type: 'paragraph', text: '**Key Dynamic:** The act of successfully solving one type of problem can directly cause a different type of problem to emerge.' },

    { type: 'h4', text: 'Step 3: Abstract to General Terms' },
    { type: 'table', headers: ['Specific Detail', 'Abstracted Version'], rows: [
      ['"Modern medicine"', '"A solution" or "an intervention"'],
      ['"Long and pain-free lives"', '"Solving the original problem"'],
      ['"Increase in life expectancy / aging population"', '"A consequence of the solution\'s success"'],
      ['"Financial problems for social welfare programs"', '"A new, different problem"'],
      ['"As a result of... the resulting... this is creating"', 'Causal chain: Solution \u2192 Success \u2192 New Problem'],
    ]},
    { type: 'paragraph', text: '**Pre-phrase:** "Solving one set of problems can create a different set of problems."' },

    { type: 'h4', text: 'Step 4: Evaluate Each Answer' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Technical or scientific innovation cannot be the solution to all problems.', text: 'This is too weak and misidentifies the lesson. The stimulus actually shows that innovation **was** the solution to the problem of early death \u2014 it succeeded. The issue is not that innovation fails or has limits, but that its very success can trigger new problems. This answer addresses the wrong question ("Can innovation solve everything?") rather than the right one ("What happens when it does solve something?").', badge: 'Wrong Lesson', badgeColor: 'red' },
      { title: '(B) Implementing technological innovations should be delayed until the resulting social changes can be managed.', text: 'The stimulus is purely **descriptive** \u2014 it explains what happened. This answer is **prescriptive** \u2014 it recommends what should be done. A factual narrative about consequences cannot support a policy recommendation about timing. Additionally, the stimulus never suggests that the consequences were foreseeable or manageable, which this prescription assumes.', badge: 'Normative Leap', badgeColor: 'red' },
      { title: '(C) Every enhancement of the quality of life has unavoidable negative consequences.', text: 'Two problems: (1) "Every" is a universal claim, but the stimulus provides only **one** example. A single case cannot prove that all quality-of-life improvements produce negatives. (2) "Unavoidable" adds a modal claim the stimulus does not support \u2014 the passage says the financial problems are occurring, not that they were inevitable. Both "every" and "unavoidable" are too strong.', badge: 'Too Strong', badgeColor: 'red' },
      { title: '(D) All social institutions are affected by a preoccupation with prolonging life.', text: '"All social institutions" is too broad \u2014 the stimulus mentions only "some social welfare programs," not all institutions. "A preoccupation with prolonging life" mischaracterizes the dynamic \u2014 the stimulus describes the *consequences* of longer life, not a societal obsession with longevity. Both the scope and the characterization are wrong.', badge: 'Scope + Characterization Error', badgeColor: 'red' },
      { title: '(E) Solving one set of problems can create a different set of problems.', text: 'This perfectly captures the entire causal chain. "Solving one set of problems" (illness and early death via modern medicine) \u2192 "can create" (appropriately moderate language \u2014 "can," not "always") \u2192 "a different set of problems" (financial strain on welfare programs). The principle accounts for the solution\'s success, the causal linkage, and the emergence of a new problem in a different domain. The stimulus is a textbook example.', badge: 'Correct', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: Summary Table' },
    { type: 'table', headers: ['Answer', 'What It Claims', 'Matches Causal Chain?', 'Verdict'], rows: [
      ['(A) Innovation can\'t solve all problems', 'Innovation has limits', '\u2717 \u2014 Innovation did solve the problem', 'Wrong Lesson'],
      ['(B) Delay innovation until ready', 'Prescriptive recommendation', '\u2717 \u2014 Stimulus is descriptive, not prescriptive', 'Normative Leap'],
      ['(C) Every enhancement \u2192 negatives', 'Universal + unavoidable', '\u2717 \u2014 One example can\'t prove "every" or "unavoidable"', 'Too Strong'],
      ['(D) All institutions affected', 'Universal scope', '\u2717 \u2014 Only "some" programs mentioned', 'Scope Error'],
      ['**(E) Solving problems \u2192 new problems**', '**Causal chain: success \u2192 new problem**', '**\u2713 \u2014 Captures full chain with moderate language**', '**Correct \u2713**'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Unintended Consequences: Common Traps' },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Spot It' }, items: [
      { title: 'The Normative Leap (Is \u2192 Ought)', text: 'The stimulus describes what **happened**; the wrong answer prescribes what **should** happen. Watch for "should," "ought to," "must" in answers when the stimulus contains no recommendations. A factual account of consequences does not justify a policy prescription.', badge: 'Most Common', badgeColor: 'blue' },
      { title: 'The Universal Overreach', text: 'The answer claims the pattern applies to "every," "all," or "any" case. The stimulus provides a single example, which supports "can" and "sometimes" but never "always" or "every." Check the force of the quantifiers.', badge: 'Common', badgeColor: 'blue' },
      { title: 'The "Solution Failed" Misread', text: 'The answer implies that the original solution did not work or was flawed. In an unintended consequences scenario, the solution **succeeded** \u2014 that is precisely why the new problem arose. An answer claiming the solution was inadequate misreads the causal direction.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'The Partial Chain', text: 'The answer captures only part of the sequence \u2014 either the solution or the new problem, but not the causal link between them. The correct principle must describe the entire arc: solving Problem A caused Problem B.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: '**1. Trace the full causal chain.** Unintended consequences stimuli present a sequence: Solution \u2192 Success \u2192 New Problem. Map each link before looking at answer choices. The correct principle must capture the entire chain, not just one link.\n\n**2. The solution worked \u2014 that\'s the point.** The new problem arises *because* the solution succeeded, not because it failed. Any answer implying the solution was inadequate or limited misreads the stimulus.\n\n**3. Watch for domain shifts.** The original problem and the new problem are typically in different areas (health \u2192 finance, technology \u2192 employment). This cross-domain shift is a hallmark of the pattern.\n\n**4. Descriptive \u2260 prescriptive.** A stimulus that describes what happened cannot support an answer about what should be done. The Is \u2192 Ought trap is the most common wrong answer in unintended consequences questions.\n\n**5. Moderate language wins.** A single case study supports "can" and "sometimes," not "every," "always," or "unavoidable." The correct answer will use appropriately hedged language that matches the evidence \u2014 one example proving a possibility, not a universal law.' },
  ]
};
