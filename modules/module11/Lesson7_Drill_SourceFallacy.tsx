import { Lesson } from '../../types';

export const Lesson7_Drill_SourceFallacy: Lesson = {
  id: "11-7",
  title: "Drill: The 'Source Fallacy' Assumption (PT-121-S-4-Q-10)",
  content: [
    { type: 'h2', text: 'The Source Fallacy' },
    { type: 'paragraph', text: "The Source Fallacy pattern (also called \"ad hominem\" reasoning) appears when an author dismisses an argument by attacking the person or group who made it, rather than addressing the argument's content. The author observes that a source has a bias, vested interest, or questionable motive, and concludes that the source's arguments must therefore be bad. The necessary assumption is the unstated general principle that connects a person's motives to the quality of their reasoning." },
    { type: 'paragraph', text: "This is a powerful and common fallacy because it *feels* intuitively right — we naturally distrust biased sources. But logic doesn't work that way. A biased person can still make a valid argument, just as a neutral person can make a terrible one. The source of an argument is separate from the strength of an argument. When the LSAT presents this pattern, the necessary assumption is always the unwritten rule that conflates the two." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Source Fallacy Gap' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Look for an attack on the source, not the argument:** The author dismisses a claim by pointing out *who* made it or *why* they made it, rather than addressing the claim\'s logic or evidence.',
      '**Look for bias language:** Words like "vested interest," "competing," "self-serving," "stands to gain," or "biased" signal that the author is focused on motive.',
      '**Ask: "Did the author actually address the content of the opposing arguments?"** If the author only talked about *who* made the arguments and *why*, without evaluating *what* the arguments say, you have a Source Fallacy.',
      '**Predict the answer:** The correct answer will state the general principle that arguments from biased sources are inherently invalid — that motive determines quality.',
    ]},
    { type: 'callout', variant: 'tip', title: 'The Logical Error', text: "The fundamental error in Source Fallacy reasoning is treating the *identity* of the arguer as evidence about the *quality* of the argument. A tobacco company's scientist might have a vested interest in minimizing health risks, but their specific study could still be methodologically sound. The LSAT tests whether you can see that \"biased source\" does not automatically equal \"bad argument\" — and that an argument that assumes this connection has a necessary assumption that can be identified." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Source Fallacy (PT-121-S-4-Q-10)' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '11-7-drill',
      questionType: 'Necessary Assumption',
      difficulty: 'medium',
      stimulus: "The proposed coal-burning electric plant should be approved, since no good arguments have been offered against it. After all, all the arguments against it have been presented by competing electricity producers.",
      question: "Which one of the following is an assumption on which the reasoning above depends?",
      options: [
        "(A) The competing electricity producers would stand to lose large amounts of revenue from the building of the coal-burning electric plant.",
        "(B) If a person's arguments against a proposal are defective, then that person has a vested interest in seeing that the proposal is not implemented.",
        "(C) Approval of the coal-burning electric plant would please coal suppliers more than disapproval would please suppliers of fuel to the competing electricity producers.",
        "(D) If good arguments are presented for a proposal, then that proposal should be approved.",
        "(E) Arguments made by those who have a vested interest in the outcome of a proposal are not good arguments. (Correct)",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "This argument has a layered structure with a sub-conclusion leading to a main conclusion. Let's trace each step." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"The proposed coal-burning electric plant should be approved..."', text: "**Main Conclusion.** The author's ultimate recommendation: approve the plant." },
      { title: '"...since no good arguments have been offered against it."', text: "**Sub-Conclusion** (supports the main conclusion). The word \"since\" signals that this is the reason for the recommendation. But notice: this claim is itself supported by the next sentence." },
      { title: '"After all, all the arguments against it have been presented by competing electricity producers."', text: "**Premise** (supports the sub-conclusion). \"After all\" is a premise indicator. This is the author's *evidence* for claiming there are \"no good arguments\" against the plant. The evidence is entirely about the *source* of the arguments — competitors — not about the *content* of the arguments." },
    ]},
    { type: 'paragraph', text: "**The logical chain:**\nArguments came from competitors (premise) → Therefore, no good arguments exist (sub-conclusion) → Therefore, the plant should be approved (main conclusion)." },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**The Evidence:** All arguments against the plant came from competitors (a biased source).\n\n**The Sub-Conclusion:** Therefore, there are \"no good arguments\" against it.\n\n**The Gap:** The author leaps from \"the source is biased\" to \"the arguments are bad.\" But these are two completely different claims. A biased source can still make excellent arguments. A competing electricity producer might oppose the plant for legitimate environmental, safety, or economic reasons. The fact that they have a financial motive to oppose it doesn't automatically make their arguments wrong." },
    { type: 'paragraph', text: "The author assumes a **general principle** connecting motive to argument quality: if someone has a vested interest in a particular outcome, their arguments for that outcome cannot be good. This is the unstated rule that makes the logical leap from \"biased source\" to \"bad arguments.\"" },
    { type: 'callout', variant: 'default', title: 'Two Separate Questions', text: "The argument conflates two distinct questions:\n\n1. **Who** made the arguments? (Answer: competitors with a financial stake)\n2. **Are the arguments good?** (Answer: the argument never evaluates them)\n\nThe author treats the answer to Question 1 as if it automatically answers Question 2. The necessary assumption is the rule that connects the two: vested interest → not good arguments." },

    { type: 'h4', text: 'Step 3: Pre-phrase' },
    { type: 'paragraph', text: "The assumption must establish that having a \"vested interest\" is sufficient grounds to dismiss an argument as \"not good.\" In other words, the author must assume a general rule: arguments from interested parties are inherently invalid." },

    { type: 'h4', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) The competing electricity producers would stand to lose large amounts of revenue from the building of the coal-burning electric plant.', text: "This explains *why* the competitors have a vested interest — they would lose money. But the argument already implies the competitors are biased (they are \"competing\" producers). Knowing the *magnitude* of their financial stake doesn't provide the crucial logical link between having a stake and making bad arguments.\n\n**Negation:** Competitors would NOT lose large amounts of revenue. This slightly weakens the claim that competitors are biased, but even a small financial interest could still make them biased. More importantly, the gap between \"biased\" and \"bad arguments\" remains unfilled. **Argument survives (the core gap persists).**", badge: 'Incorrect', badgeColor: 'red' },
      { title: "(B) If a person's arguments against a proposal are defective, then that person has a vested interest in seeing that the proposal is not implemented.", text: "This **reverses the logic**. The argument reasons from vested interest → bad arguments. This choice reasons from bad arguments → vested interest. That's the wrong direction. Even if all people who make bad arguments happen to have vested interests, it doesn't follow that all people with vested interests make bad arguments.\n\n**Logical structure:** The argument needs: Vested Interest → Bad Arguments. Choice (B) gives: Bad Arguments → Vested Interest. This is a Mistaken Reversal. **Wrong direction.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) Approval of the coal-burning electric plant would please coal suppliers more than disapproval would please suppliers of fuel to the competing electricity producers.', text: "This compares the happiness of different stakeholders. Whether coal suppliers are more pleased than competing fuel suppliers has no bearing on whether the competitors' arguments are good or bad. This is a classic out-of-scope choice.\n\n**Negation:** Coal suppliers would NOT be more pleased. This doesn't affect the logic of the argument at all. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) If good arguments are presented for a proposal, then that proposal should be approved.', text: "The conclusion is based on the *absence* of good arguments *against* the plant. This choice talks about the *presence* of good arguments *for* a proposal. These are different logical situations. The argument's logic is: \"No good arguments against it → should be approved.\" This choice addresses: \"Good arguments for it → should be approved.\" Different premise, different direction.\n\n**Negation:** Good arguments for a proposal do NOT mean it should be approved. This doesn't affect the argument, which is about the *absence* of arguments against. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Arguments made by those who have a vested interest in the outcome of a proposal are not good arguments.', text: "This perfectly states the unwritten general principle. It provides the rule that connects the source's motive (vested interest) to the quality of their arguments (not good). This is the exact bridge the argument needs to go from \"competitors made the arguments\" to \"the arguments are not good.\"\n\n**Negation Test:** Arguments made by those with a vested interest **CAN BE** good arguments. If this is true, then the fact that the arguments came from competitors does NOT prove the arguments are bad. The sub-conclusion (\"no good arguments have been offered\") loses its only support. Without the sub-conclusion, the main conclusion (\"the plant should be approved\") is completely unsupported.\n\n**The argument collapses at both levels.**", badge: 'Correct', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Link Motive → Argument Quality?'], rows: [
      ['(A)', 'Magnitude of competitors\' financial stake', 'No — explains WHY they\'re biased, not why bias = bad arguments'],
      ['(B)', 'Bad arguments → vested interest (reversed)', 'No — wrong direction (Mistaken Reversal)'],
      ['(C)', 'Happiness of coal suppliers vs. fuel suppliers', 'No — completely out of scope'],
      ['(D)', 'Good arguments for a proposal → should approve', 'No — different logical situation (for vs. against)'],
      ['**(E)**', '**Vested interest → arguments are not good**', '**Yes — bridges the gap ✓**'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument dismisses a position by attacking the **motives** of the person making it, it commits a Source Fallacy. The argument *must assume* a general principle: that the source's characteristics (bias, financial interest, competing motives) are a valid basis for judging the argument's quality.\n\nThe necessary assumption is always a **general rule** connecting identity/motive to argument quality. The correct answer will state something like: \"Arguments from biased sources are not good\" or \"Having a vested interest makes arguments invalid.\"\n\nWatch for the **Mistaken Reversal** trap — choice (B) in this question. The argument reasons from \"biased source\" to \"bad arguments.\" The reversed version (\"bad arguments\" to \"biased source\") does not help, because even if all bad arguers are biased, it doesn't follow that all biased arguers are bad. Direction matters.\n\nAlso watch for choices that explain *why* the source is biased (like choice A) versus choices that state the *rule* connecting bias to argument quality (like choice E). The argument doesn't need to know *how biased* the competitors are — it needs the principle that bias invalidates arguments." },
  ]
};
