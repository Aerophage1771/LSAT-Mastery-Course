import { Lesson } from '../../types';

export const Lesson5_IntermediateConclusion: Lesson = {
  id: "1-5",
  title: "Lesson 2: The Intermediate Conclusion",
  content: [
    { type: 'h2', text: 'The Intermediate Conclusion' },

    { type: 'h3', text: 'Concept Focus: The Intermediate Conclusion' },
    { type: 'paragraph', text: "In our last lesson, we covered the fundamental roles of Premise and Main Conclusion. However, arguments often involve a chain of reasoning. This is where our third core component comes in: the **Intermediate Conclusion** (also called a Subsidiary Conclusion). It is a statement that acts as a logical bridge, functioning as **both a conclusion and a premise**." },
    { type: 'list', items: [
      "It is a **conclusion** because it is supported by at least one premise.",
      "It is a **premise** because it is then used to support the main conclusion."
    ]},
    { type: 'paragraph', text: "This two-step structure (Premise → **Intermediate Conclusion** → Main Conclusion) is a common pattern, and these statements are tested in about **11% of Argument Part questions**." },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Role Is Tricky' },
    { type: 'paragraph', text: "The Intermediate Conclusion is the most commonly misidentified role on LSAT Argument Part questions. The reason is simple: it looks like a conclusion *and* a premise because it genuinely is both. Students who only look for one function miss the dual nature of this role." },
    { type: 'paragraph', text: "When you spot a statement that receives support from evidence but then feeds into a larger claim, you've found an Intermediate Conclusion. The mistake most test-takers make is labeling it as *only* a premise (because it supports something) or *only* the main conclusion (because it has evidence behind it). You must see both relationships simultaneously." },
    { type: 'callout', variant: 'tip', title: 'The Dual Nature Test', text: "Ask two questions about the target statement: **(1)** Does any other statement provide a reason to believe this is true? If yes, it functions as a conclusion. **(2)** Does this statement provide a reason to believe some further claim? If yes, it also functions as a premise. If both answers are yes, you have an Intermediate Conclusion." },

    { type: 'h3', text: 'Comparing Premise, IC, and Main Conclusion' },
    { type: 'paragraph', text: "Understanding the Intermediate Conclusion requires seeing how it differs from the other two core roles:" },
    { type: 'table', headers: ['Role', 'Receives Support?', 'Gives Support?', 'Position in Chain'], rows: [
      ['Premise', 'No — taken as given', 'Yes — supports other claims', 'Bottom of the chain'],
      ['Intermediate Conclusion', 'Yes — supported by premises', 'Yes — supports the main conclusion', 'Middle of the chain'],
      ['Main Conclusion', 'Yes — supported by everything else', 'No — it is the final destination', 'Top of the chain'],
    ]},
    { type: 'paragraph', text: "Notice the pattern: as you move up the chain, statements gain support and eventually stop providing it. The Intermediate Conclusion is the only role that sits in both columns." },

    { type: 'h3', text: 'The Chain of Reasoning' },
    { type: 'paragraph', text: "When an argument contains an Intermediate Conclusion, the support flows through a chain rather than directly from premise to conclusion:" },
    { type: 'process', title: 'Support Chain with an IC', steps: [
      '**Premise(s):** Raw evidence or facts taken as given (the foundation)',
      '**Intermediate Conclusion:** A claim drawn from the premises — often signaled by \"since\" or \"because\" pointing backward to evidence',
      '**Main Conclusion:** The ultimate point, drawn from the IC — often signaled by \"therefore,\" \"thus,\" or \"so\" pointing forward from the IC',
    ]},
    { type: 'paragraph', text: "The key structural insight is that the IC sits at the junction. Indicator words often point in both directions: one word connects the IC to its supporting premise, and another connects it to the main conclusion it supports." },

    { type: 'h3', text: 'Indicator Words That Signal ICs' },
    { type: 'paragraph', text: "Intermediate Conclusions are often surrounded by two sets of indicator words — one connecting them to their supporting premise, and another connecting them to the main conclusion:" },
    { type: 'table', headers: ['Words Leading TO the IC (from premise)', 'Words Leading FROM the IC (to main conclusion)'], rows: [
      ['since...', 'therefore...'],
      ['because...', 'thus...'],
      ['for...', 'so...'],
      ['given that...', 'hence...'],
      ['after all...', 'consequently...'],
      ['as evidenced by...', 'this shows that...'],
    ]},
    { type: 'paragraph', text: "A classic IC pattern looks like: *\"**Since** [premise], [IC]. **Therefore**, [main conclusion].\"* The word \"since\" points backward to support the IC, and \"therefore\" points forward from the IC to the main conclusion." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example (PT-112-S-4-Q-13)' },
    {
      type: 'question-card',
      id: 'PT-112-S-4-Q-13',
      stimulus: 'Joseph: My encyclopedia says that the mathematician Pierre de Fermat died in 1665 without leaving behind any written proof for a theorem that he claimed nonetheless to have proved. Probably this alleged theorem simply cannot be proved, since\u2014as the article points out\u2014no one else has been able to prove it. Therefore it is likely that Fermat was either lying or else mistaken when he made his claim.\n\nLaura: Your encyclopedia is out of date. Recently someone has in fact proved Fermat\'s theorem. And since the theorem is provable, your claim\u2014that Fermat was lying or mistaken\u2014clearly is wrong.',
      question: 'Joseph\'s statement that "this alleged theorem simply cannot be proved" plays which one of the following roles in his argument?',
      options: [
        '(A) an assumption for which no support is offered',
        '(B) a subsidiary conclusion on which his argument\'s main conclusion is based (Correct)',
        '(C) a potential objection that his argument anticipates and attempts to answer before it is raised',
        '(D) the principal claim that his argument is structured to refute',
        '(E) background information that neither supports nor undermines his argument\'s conclusion',
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: "Let's trace the complete logical chain in Joseph's argument, mapping every statement to its structural role:" },

    { type: 'breakdown', labels: { title: 'Statement', text: 'Role & Reasoning' }, items: [
      { title: '"No one else has been able to prove it."', text: 'This is a factual claim Joseph takes from his encyclopedia. He offers no further support for it — he treats it as established fact. It functions as a **premise**: raw evidence at the bottom of the chain.', badge: 'Premise', badgeColor: 'slate' },
      { title: '"Probably this alleged theorem simply cannot be proved."', text: 'This is the **target statement**. It is supported by the premise (signaled by "since"), and it in turn supports the final claim (signaled by "Therefore"). It receives support AND gives support — the hallmark of an Intermediate Conclusion.', badge: 'Intermediate Conclusion', badgeColor: 'blue' },
      { title: '"Fermat was either lying or else mistaken."', text: 'This is the ultimate point Joseph is trying to establish. It receives support from the IC but does not itself support any further claim. It is the **Main Conclusion**.', badge: 'Main Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'process', title: "Joseph's Chain of Reasoning", steps: [
      '**Premise:** "No one else has been able to prove it" (fact from encyclopedia)',
      '**↓ "since" ↓**',
      '**Intermediate Conclusion:** "The theorem simply cannot be proved" (drawn from the premise)',
      '**↓ "Therefore" ↓**',
      '**Main Conclusion:** "Fermat was lying or mistaken" (drawn from the IC)',
    ]},

    { type: 'h3', text: 'Why Each Wrong Answer Fails' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Detailed Evaluation' }, items: [
      { title: '(A) an assumption for which no support is offered', text: 'This is directly contradicted by the text. The word "since" explicitly introduces support for the target statement: "since no one else has been able to prove it." An assumption with no support would be a bare premise with no "because" or "since" clause attached. Here, support is clearly offered, so (A) fails on the "no support" claim.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) a subsidiary conclusion on which his argument\'s main conclusion is based', text: '"Subsidiary conclusion" is the LSAT\'s standard synonym for Intermediate Conclusion. The target IS a conclusion (supported by evidence via "since") and the main conclusion IS "based on" it (connected by "Therefore"). Every element of this description matches.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) a potential objection that his argument anticipates...', text: 'An objection would be a point that *challenges* Joseph\'s argument. But this statement is a key *building block* of his argument — it is part of his own reasoning chain, not a challenge to it. Joseph never addresses or attempts to counter this claim; he relies on it.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) the principal claim that his argument is structured to refute', text: 'Joseph\'s argument is structured to *prove* this claim is true, not to *refute* it. He uses it as a stepping stone to his main conclusion. (D) describes the exact opposite relationship.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) background information that neither supports nor undermines...', text: 'Background information is logically inert — it sets the scene but plays no role in the argument\'s logic. The target is the crucial logical link between the premise and the main conclusion. Removing it would break the chain of reasoning. It is anything but neutral background.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Test Yourself: Verifying You\'ve Found an IC' },
    { type: 'callout', variant: 'tip', title: 'The Removal Test', text: "To confirm a statement is an Intermediate Conclusion, try mentally removing it from the argument. If the premises can no longer logically reach the main conclusion — if there's a gap in the chain — then the statement was a crucial link (an IC). In Joseph's argument, remove \"the theorem cannot be proved.\" Now you have: \"No one has proved it → Therefore Fermat was lying.\" The leap is too large. The IC was the necessary bridge." },
    { type: 'callout', variant: 'tip', title: 'The Double-Arrow Check', text: "Draw arrows of support. An IC will have at least one arrow pointing *into* it (from a premise) and at least one arrow pointing *out* of it (toward the main conclusion). If a statement only has arrows going out, it's a premise. If it only has arrows coming in, it's the main conclusion." },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "An **Intermediate Conclusion** is a statement that is **both supported by evidence and provides support** for another claim. Look for two-step arguments, often signaled by indicators like \"since\" leading *to* the IC and \"therefore\" leading *from* it. Distinguish it from a **simple premise** (gives support but does not receive it) and a **main conclusion** (receives support but does not give it). On the LSAT, this role is often described as a \"subsidiary conclusion\" — recognize this as a synonym." },
  ]
};
