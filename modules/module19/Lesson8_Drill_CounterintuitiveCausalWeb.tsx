import { Lesson } from '../../types';

export const Lesson8_Drill_CounterintuitiveCausalWeb: Lesson = {
  id: "19-8",
  title: "Drill: The Counterintuitive Causal Web (PT-103-S-1-Q-23)",
  content: [
    { type: 'h3', text: 'Practice Drill: The Counterintuitive Causal Web' },
    { type: 'paragraph', text: 'A Counterintuitive Causal Web paradox arises when multiple causal factors interact to produce an unexpected net result. The scenario with the *weaker* incentive for bad behavior actually produces *more* of it. Resolving this requires you to look beyond the most obvious actor and consider how incentive structures change the behavior of *everyone* in the system\u2014especially the overlooked second actor.' },
    { type: 'hr' },

    { type: 'question-card',
      id: '19-8-drill',
      questionType: 'Paradox / Explain',
      difficulty: 'hard',
      stimulus: 'Construction contractors working on the cutting edge of technology nearly always work on a \u201ccost-plus\u201d basis only. One kind of cost-plus contract stipulates the contractor\u2019s profit as a fixed percentage of the contractor\u2019s costs; the other kind stipulates a fixed amount of profit over and above costs. Under the first kind of contract, higher costs yield higher profits for the contractor, so this is where one might expect final costs in excess of original cost estimates to be more common. Paradoxically, such cost overruns are actually more common if the contract is of the fixed-profit kind.',
      question: 'Which one of the following, if true, most helps to resolve the apparent paradox in the situation described above?',
      options: [
        '(A) Clients are much less likely to agree to a fixed-profit type of cost-plus contract when it is understood that the project may be scuttled under certain conditions.',
        '(B) On long-term contracts, cost projections take future inflation into account, but since the figures are provided by the government, they are usually underestimates.',
        '(C) On any sizable construction project, the contractor bills the client monthly or quarterly, so any tendency for cost estimates to be exceeded can be detected early.',
        '(D) Clients billed under a cost-plus contract are free to review individual billings to uncover wasteful expenditures, but they do so only when the contractor\u2019s profit varies with cost. (Correct)',
        '(E) The practice of submitting deliberately exaggerated cost estimates is most common in fixed-profit contracts, because it makes the profit, as a percentage of estimated cost, appear modest.'
      ]
    },

    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },
    { type: 'h3', text: 'Analysis & Explanation' },

    { type: 'h4', text: 'Step 1: Deconstruction' },
    { type: 'paragraph', text: 'Clearly define the two contract types and the paradox.' },
    { type: 'list', items: [
      '**Percentage-Profit Contract:** Profit = fixed % of costs. The contractor profits from higher costs, so cost overruns *should* be common here.',
      '**Fixed-Profit Contract:** Profit = fixed dollar amount. The contractor has no incentive to inflate costs, so cost overruns should be *rare* here.',
      '**The Paradox:** Cost overruns are actually *more common* under the fixed-profit contract\u2014the very arrangement where the contractor has zero incentive to inflate costs. The explanation must come from a factor other than the contractor\'s direct profit motive.'
    ]},

    { type: 'h4', text: 'Step 2: Abstraction' },
    { type: 'callout', title: 'Causal Web Blueprint', variant: 'tip', text: 'An incentive structure affects everyone in the system, not just the person it targets. When an arrangement that should prevent a bad outcome paradoxically produces more of it, introduce a second actor whose vigilance changes in response to the perceived risk. The net effect of multiple actors\u2019 changing behavior explains the surprise.' },

    { type: 'h4', text: 'Step 3: Evaluation' },
    { type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: '(A) Clients less likely to agree to fixed-profit contracts when the project may be scuttled.', text: 'Irrelevant Condition. This describes when clients *choose* a contract type, not why cost overruns occur after the contract is signed. It leaves the paradox untouched.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(B) Government inflation figures are usually underestimates.', text: 'Affects Both Equally. Underestimated inflation would cause cost overruns under *both* contract types. It cannot explain why overruns are more common under fixed-profit contracts specifically.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(C) Contractors bill monthly or quarterly, so overruns can be detected early.', text: 'Deepens the Paradox. If cost overruns are detectable early, they should be easier to control\u2014making the high rate of overruns under fixed-profit contracts even more puzzling.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(D) Clients review billings to uncover waste, but only when the contractor\u2019s profit varies with cost.', text: 'This introduces the overlooked second actor: the client. Under a percentage-profit contract, the client knows the contractor is incentivized to inflate costs, so the client audits every bill\u2014and this vigilance *prevents* overruns. Under a fixed-profit contract, the client assumes the contractor has no motive to waste money, so the client relaxes oversight\u2014and that lack of scrutiny *allows* waste and overruns to go unchecked. The net effect of the contractor\'s incentive *plus* the client\'s changing vigilance resolves the paradox.', badge: 'Correct', badgeColor: 'green' },
        { title: '(E) Deliberately exaggerated cost estimates are most common in fixed-profit contracts.', text: 'Close But Wrong. This identifies a bad practice linked to fixed-profit contracts, but the paradox concerns *final costs exceeding original estimates* (overruns during the project). Inflating the initial estimate actually makes a subsequent overrun *less* likely, not more.', badge: 'Incorrect', badgeColor: 'red' }
      ]
    },

    { type: 'hr' },
    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'The most difficult paradoxes often require you to shift focus from the obvious actor (the contractor) to a less obvious one (the client). When an incentive structure produces a counterintuitive result, ask how it affects the behavior of *everyone* involved. The resolution is typically found in the actions of the "watcher" whose vigilance changes depending on the perceived risk\u2014creating the surprising net effect.' }
  ]
};
