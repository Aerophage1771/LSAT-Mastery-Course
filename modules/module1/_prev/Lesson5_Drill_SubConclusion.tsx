import { Lesson } from '../../types';

export const Lesson5_Drill_SubConclusion: Lesson = {
  id: "1-5",
  title: "Drill: Sub-Conclusion (PT-114-S-4-Q-18)",
  content: [
    { type: 'h3', text: "Practice Drill: Identifying an Argument Part (PT-114-S-4-Q-18)" },
    { type: 'paragraph', text: "This drill introduces a critical structural element: the **Sub-Conclusion** (also known as an Intermediate Conclusion). These statements function as a bridge, receiving support from one claim while providing support to another." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-114-S-4-Q-18',
      stimulus: "**Anders:** The physical structure of the brain plays an important role in thinking. So researchers developing “thinking machines”—computers that can make decisions based on both common sense and factual knowledge—should closely model those machines on the structure of the brain.\n\n**Yang:** Important does not mean essential. After all, no flying machine closely modeled on birds has worked; workable aircraft are structurally very different from birds. **So thinking machines closely modeled on the brain are also likely to fail.** In developing a workable thinking machine, researchers would therefore increase their chances of success if they focus on the brain’s function and simply ignore its physical structure.",
      question: "The statement “thinking machines closely modeled on the brain are also likely to fail” serves which one of the following roles in Yang’s argument?",
      options: [
      "**(A)** the main conclusion of the argument",
      "**(B)** a subsidiary conclusion used in support of the main conclusion",
      "**(C)** a principle of research invoked in support of the conclusion",
      "**(D)** a particular example illustrating a general claim",
      "**(E)** background information providing a context for the argument"
    ]
    },
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Find the Target" },
    { type: 'paragraph', text: "The target is the sentence in the middle of Yang's response: *\"So thinking machines closely modeled on the brain are also likely to fail.\"*" },
    
    { type: 'h3', text: "2. Break Down the Content Line-by-Line" },
    { type: 'paragraph', text: "We focus specifically on Yang's argument." },
    
    { type: 'breakdown', labels: { title: 'Quote', text: 'Meaning' }, items: [
      {
        title: "\"Important does not mean essential.\"",
        text: "Yang challenges Anders' assumption. Just because structure matters, it doesn't mean it is required."
      },
      {
        title: "\"After all, no flying machine closely modeled on birds has worked...\"",
        text: "Yang offers an analogy as evidence: planes that tried to copy birds failed."
      },
      {
        title: "\"So thinking machines closely modeled on the brain are also likely to fail.\" (Target)",
        text: "Yang applies the analogy to the current topic: computers that try to copy brains will likely fail too. The word **\"So\"** indicates this is a conclusion drawn from the previous sentence."
      },
      {
        title: "\"In developing... researchers would therefore increase their chances of success if they... ignore its physical structure.\"",
        text: "Yang gives a final recommendation: because those machines will likely fail, researchers should try a different approach (ignoring structure). The word **\"therefore\"** indicates this is the final deduction."
      }
    ]},

    { type: 'h3', text: "3. Map the Argument's Logical Structure" },
    { type: 'paragraph', text: "Now, we map the flow of support within Yang's argument." },
    
    { type: 'breakdown', labels: { title: 'Statement', text: 'Role Analysis' }, items: [
      { 
        title: "The Bird/Plane Analogy (Premise)",
        text: "The claim regarding flying machines is used to support the Target Statement.",
        badge: "Premise",
        badgeColor: "indigo"
      },
      { 
        title: "\"thinking machines... likely to fail\" (Target)",
        text: "Predicted outcome derived from the analogy. It is then used to support the final recommendation.",
        badge: "Sub-Conclusion",
        badgeColor: "indigo"
      },
      { 
        title: "Recommendation to ignore structure (Main Conclusion)",
        text: "The final claim. It is supported by the target statement (because they will fail, we should do X).",
        badge: "Main Conclusion",
        badgeColor: "indigo"
      }
    ]},

    { type: 'h3', text: "4. Pinpoint Role & Predict" },
    { type: 'paragraph', text: "The target statement is supported by the premise about airplanes, but it also supports the final recommendation about how researchers should proceed. A statement that is supported by a premise and supports another conclusion is a **Sub-Conclusion** (or Subsidiary Conclusion)." },
    
    { type: 'callout', title: "Prediction", variant: "tip", text: "Therefore, our prediction is: **The target statement is a sub-conclusion used to support the final recommendation.**" },
    
    { type: 'h3', text: "5. Evaluate Answer Choices" },
    
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) the main conclusion of the argument",
        text: "The target statement supports the final sentence. If the target is true (machines will fail), that is the *reason* why researchers should adopt the strategy in the final sentence (ignore structure). Since the target supports something else, it cannot be the *main* conclusion.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) a subsidiary conclusion used in support of the main conclusion",
        text: "This perfectly matches our map. It receives support from the airplane analogy and provides support for the final recommendation.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(C) a principle of research invoked in support of the conclusion",
        text: "A principle is usually a broad, general rule (e.g., \"One should always model machines on nature\"). The target statement is a specific prediction about a specific type of machine (\"thinking machines... are likely to fail\").",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) a particular example illustrating a general claim",
        text: "The target is not an example; it is the prediction derived from an example. The *flying machines* were the example/analogy used to prove the point about thinking machines.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) background information providing a context for the argument",
        text: "The target statement is an argumentative claim derived from evidence (\"So...\"). It is not neutral background context.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question illustrates the role of a **Sub-Conclusion**.\n\nKey takeaways:\n* **The \"Double Indicator\" Trick:** Note that the stimulus contains two conclusion indicators: \"**So** thinking machines...\" and \"**therefore** increase their chances...\" When you see two indicators, the earlier one usually introduces a sub-conclusion, and the later one introduces the main conclusion.\n* **The Bridge Function:** A sub-conclusion acts as a bridge. It connects the raw evidence (the premise about birds) to the final point (the recommendation for researchers).\n* **Logical Direction:** Always ask: \"Does this statement support the next one, or does the next one support this one?\" Because machines will likely fail (Target), researchers should ignore structure (Main Conclusion). This confirms the direction of support." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "The Intermediate Conclusion"
        },
        {
          "type": "h3",
          "text": "Concept Focus: The Intermediate Conclusion"
        },
        {
          "type": "paragraph",
          "text": "In our last lesson, we covered the fundamental roles of Premise and Main Conclusion. However, arguments often involve a chain of reasoning. This is where our third core component comes in: the **Intermediate Conclusion** (also called a Subsidiary Conclusion). It is a statement that acts as a logical bridge, functioning as **both a conclusion and a premise**."
        },
        {
          "type": "list",
          "items": [
            "It is a **conclusion** because it is supported by at least one premise.",
            "It is a **premise** because it is then used to support the main conclusion."
          ]
        },
        {
          "type": "paragraph",
          "text": "This two-step structure (Premise → **Intermediate Conclusion** → Main Conclusion) is a common pattern, and these statements are tested in about **11% of Argument Part questions**."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Why This Role Is Tricky"
        },
        {
          "type": "paragraph",
          "text": "The Intermediate Conclusion is the most commonly misidentified role on LSAT Argument Part questions. The reason is simple: it looks like a conclusion *and* a premise because it genuinely is both. Students who only look for one function miss the dual nature of this role."
        },
        {
          "type": "paragraph",
          "text": "When you spot a statement that receives support from evidence but then feeds into a larger claim, you've found an Intermediate Conclusion. The mistake most test-takers make is labeling it as *only* a premise (because it supports something) or *only* the main conclusion (because it has evidence behind it). You must see both relationships simultaneously."
        },
        {
          "type": "callout",
          "title": "The Dual Nature Test",
          "variant": "tip",
          "text": "Ask two questions about the target statement: **(1)** Does any other statement provide a reason to believe this is true? If yes, it functions as a conclusion. **(2)** Does this statement provide a reason to believe some further claim? If yes, it also functions as a premise. If both answers are yes, you have an Intermediate Conclusion."
        },
        {
          "type": "h3",
          "text": "Comparing Premise, IC, and Main Conclusion"
        },
        {
          "type": "paragraph",
          "text": "Understanding the Intermediate Conclusion requires seeing how it differs from the other two core roles:"
        },
        {
          "type": "table",
          "headers": [
            "Role",
            "Receives Support?",
            "Gives Support?",
            "Position in Chain"
          ],
          "rows": [
            [
              "Premise",
              "No — taken as given",
              "Yes — supports other claims",
              "Bottom of the chain"
            ],
            [
              "Intermediate Conclusion",
              "Yes — supported by premises",
              "Yes — supports the main conclusion",
              "Middle of the chain"
            ],
            [
              "Main Conclusion",
              "Yes — supported by everything else",
              "No — it is the final destination",
              "Top of the chain"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Notice the pattern: as you move up the chain, statements gain support and eventually stop providing it. The Intermediate Conclusion is the only role that sits in both columns."
        },
        {
          "type": "h3",
          "text": "The Chain of Reasoning"
        },
        {
          "type": "paragraph",
          "text": "When an argument contains an Intermediate Conclusion, the support flows through a chain rather than directly from premise to conclusion:"
        },
        {
          "type": "process",
          "title": "Support Chain with an IC",
          "steps": [
            "**Premise(s):** Raw evidence or facts taken as given (the foundation)",
            "**Intermediate Conclusion:** A claim drawn from the premises — often signaled by \"since\" or \"because\" pointing backward to evidence",
            "**Main Conclusion:** The ultimate point, drawn from the IC — often signaled by \"therefore,\" \"thus,\" or \"so\" pointing forward from the IC"
          ]
        },
        {
          "type": "paragraph",
          "text": "The key structural insight is that the IC sits at the junction. Indicator words often point in both directions: one word connects the IC to its supporting premise, and another connects it to the main conclusion it supports."
        },
        {
          "type": "h3",
          "text": "Indicator Words That Signal ICs"
        },
        {
          "type": "paragraph",
          "text": "Intermediate Conclusions are often surrounded by two sets of indicator words — one connecting them to their supporting premise, and another connecting them to the main conclusion:"
        },
        {
          "type": "table",
          "headers": [
            "Words Leading TO the IC (from premise)",
            "Words Leading FROM the IC (to main conclusion)"
          ],
          "rows": [
            [
              "since...",
              "therefore..."
            ],
            [
              "because...",
              "thus..."
            ],
            [
              "for...",
              "so..."
            ],
            [
              "given that...",
              "hence..."
            ],
            [
              "after all...",
              "consequently..."
            ],
            [
              "as evidenced by...",
              "this shows that..."
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "A classic IC pattern looks like: *\"**Since** [premise], [IC]. **Therefore**, [main conclusion].\"* The word \"since\" points backward to support the IC, and \"therefore\" points forward from the IC to the main conclusion."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example (PT-112-S-4-Q-13)"
        },
        {
          "type": "question-card",
          "id": "PT-112-S-4-Q-13",
          "stimulus": "Joseph: My encyclopedia says that the mathematician Pierre de Fermat died in 1665 without leaving behind any written proof for a theorem that he claimed nonetheless to have proved. Probably this alleged theorem simply cannot be proved, since—as the article points out—no one else has been able to prove it. Therefore it is likely that Fermat was either lying or else mistaken when he made his claim.\n\nLaura: Your encyclopedia is out of date. Recently someone has in fact proved Fermat's theorem. And since the theorem is provable, your claim—that Fermat was lying or mistaken—clearly is wrong.",
          "question": "Joseph's statement that \"this alleged theorem simply cannot be proved\" plays which one of the following roles in his argument?",
          "options": [
            "(A) an assumption for which no support is offered",
            "(B) a subsidiary conclusion on which his argument's main conclusion is based (Correct)",
            "(C) a potential objection that his argument anticipates and attempts to answer before it is raised",
            "(D) the principal claim that his argument is structured to refute",
            "(E) background information that neither supports nor undermines his argument's conclusion"
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Analysis"
        },
        {
          "type": "paragraph",
          "text": "Let's trace the complete logical chain in Joseph's argument, mapping every statement to its structural role:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Statement",
            "text": "Role & Reasoning"
          },
          "items": [
            {
              "title": "\"No one else has been able to prove it.\"",
              "text": "This is a factual claim Joseph takes from his encyclopedia. He offers no further support for it — he treats it as established fact. It functions as a **premise**: raw evidence at the bottom of the chain.",
              "badge": "Premise",
              "badgeColor": "slate"
            },
            {
              "title": "\"Probably this alleged theorem simply cannot be proved.\"",
              "text": "This is the **target statement**. It is supported by the premise (signaled by \"since\"), and it in turn supports the final claim (signaled by \"Therefore\"). It receives support AND gives support — the hallmark of an Intermediate Conclusion.",
              "badge": "Intermediate Conclusion",
              "badgeColor": "blue"
            },
            {
              "title": "\"Fermat was either lying or else mistaken.\"",
              "text": "This is the ultimate point Joseph is trying to establish. It receives support from the IC but does not itself support any further claim. It is the **Main Conclusion**.",
              "badge": "Main Conclusion",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "process",
          "title": "Joseph's Chain of Reasoning",
          "steps": [
            "**Premise:** \"No one else has been able to prove it\" (fact from encyclopedia)",
            "**↓ \"since\" ↓**",
            "**Intermediate Conclusion:** \"The theorem simply cannot be proved\" (drawn from the premise)",
            "**↓ \"Therefore\" ↓**",
            "**Main Conclusion:** \"Fermat was lying or mistaken\" (drawn from the IC)"
          ]
        },
        {
          "type": "h3",
          "text": "Why Each Wrong Answer Fails"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Option",
            "text": "Detailed Evaluation"
          },
          "items": [
            {
              "title": "(A) an assumption for which no support is offered",
              "text": "This is directly contradicted by the text. The word \"since\" explicitly introduces support for the target statement: \"since no one else has been able to prove it.\" An assumption with no support would be a bare premise with no \"because\" or \"since\" clause attached. Here, support is clearly offered, so (A) fails on the \"no support\" claim.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(B) a subsidiary conclusion on which his argument's main conclusion is based",
              "text": "\"Subsidiary conclusion\" is the LSAT's standard synonym for Intermediate Conclusion. The target IS a conclusion (supported by evidence via \"since\") and the main conclusion IS \"based on\" it (connected by \"Therefore\"). Every element of this description matches.",
              "badge": "Correct",
              "badgeColor": "green"
            },
            {
              "title": "(C) a potential objection that his argument anticipates...",
              "text": "An objection would be a point that *challenges* Joseph's argument. But this statement is a key *building block* of his argument — it is part of his own reasoning chain, not a challenge to it. Joseph never addresses or attempts to counter this claim; he relies on it.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(D) the principal claim that his argument is structured to refute",
              "text": "Joseph's argument is structured to *prove* this claim is true, not to *refute* it. He uses it as a stepping stone to his main conclusion. (D) describes the exact opposite relationship.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(E) background information that neither supports nor undermines...",
              "text": "Background information is logically inert — it sets the scene but plays no role in the argument's logic. The target is the crucial logical link between the premise and the main conclusion. Removing it would break the chain of reasoning. It is anything but neutral background.",
              "badge": "Incorrect",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Test Yourself: Verifying You've Found an IC"
        },
        {
          "type": "callout",
          "title": "The Removal Test",
          "variant": "tip",
          "text": "To confirm a statement is an Intermediate Conclusion, try mentally removing it from the argument. If the premises can no longer logically reach the main conclusion — if there's a gap in the chain — then the statement was a crucial link (an IC). In Joseph's argument, remove \"the theorem cannot be proved.\" Now you have: \"No one has proved it → Therefore Fermat was lying.\" The leap is too large. The IC was the necessary bridge."
        },
        {
          "type": "callout",
          "title": "The Double-Arrow Check",
          "variant": "tip",
          "text": "Draw arrows of support. An IC will have at least one arrow pointing *into* it (from a premise) and at least one arrow pointing *out* of it (toward the main conclusion). If a statement only has arrows going out, it's a premise. If it only has arrows coming in, it's the main conclusion."
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "An **Intermediate Conclusion** is a statement that is **both supported by evidence and provides support** for another claim. Look for two-step arguments, often signaled by indicators like \"since\" leading *to* the IC and \"therefore\" leading *from* it. Distinguish it from a **simple premise** (gives support but does not receive it) and a **main conclusion** (receives support but does not give it). On the LSAT, this role is often described as a \"subsidiary conclusion\" — recognize this as a synonym."
        }
      ],
    },
  },
};
