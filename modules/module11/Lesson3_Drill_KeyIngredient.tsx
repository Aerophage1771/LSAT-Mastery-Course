import { Lesson } from '../../types';

export const Lesson3_Drill_KeyIngredient: Lesson = {
  id: "11-3",
  title: "Drill: The 'Key Ingredient' Assumption (PT-103-S-1-Q-4)",
  content: [
    { type: 'h2', text: 'The Key Ingredient' },
    { type: 'paragraph', text: "The Key Ingredient is one of the most common Necessary Assumption patterns on the LSAT. In these questions, the author recommends a plan to achieve an ultimate goal, but the evidence only shows that the plan achieves an *intermediate* effect. The argument never states that the intermediate effect actually contributes to the ultimate goal. The necessary assumption is the missing link between the two." },
    { type: 'paragraph', text: "Think of it like a recipe: the author provides one ingredient (morale, efficiency, awareness) and claims the dish (production, safety, health) will be delicious. But the recipe never says that the ingredient actually *goes into* the dish. The necessary assumption is the belief that the ingredient is, in fact, a key component of the desired outcome." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Key Ingredient Gap' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Compare the evidence and the conclusion:** Does the evidence talk about one concept (e.g., morale) while the conclusion talks about a different concept (e.g., production)?',
      '**Look for an unstated causal chain:** The argument assumes a sequence — Plan → Intermediate Effect → Ultimate Goal — but only states the first link (Plan → Intermediate Effect). The second link (Intermediate Effect → Ultimate Goal) is the assumption.',
      '**Predict the answer:** The correct answer will say something like: "The intermediate effect *can contribute to* or *is valuable for* the ultimate goal."',
    ]},
    { type: 'callout', variant: 'tip', title: 'Strength of the Link', text: "Notice that the necessary assumption does NOT need to say the intermediate effect *guarantees* the ultimate goal. It only needs to say the intermediate effect *can contribute to* or *is relevant to* the goal. A sufficient assumption would need to guarantee the outcome; a necessary assumption only needs to establish that the connection is *possible*. This is why NA answers often use cautious language like \"could,\" \"can,\" or \"is likely to.\"" },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Key Ingredient (PT-103-S-1-Q-4)' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '11-3-drill',
      questionType: 'Necessary Assumption',
      difficulty: 'easy',
      stimulus: "In order to increase production, ABC Company should implement a flextime schedule, which would allow individual employees some flexibility in deciding when to begin and end their workday. Studies have shown that working under flextime schedules is associated with increased employee morale.",
      question: "The argument depends on the assumption that",
      options: [
        "(A) the employees who prefer a flextime schedule are the most productive employees at ABC Company",
        "(B) an increase in the morale of ABC Company's employees could lead to increased production (Correct)",
        "(C) flextime schedules tend to be associated with reduced lateness and absenteeism",
        "(D) employees are most productive during the part of the day when all employees are present",
        "(E) companies that are in competition with ABC Company also use a flextime schedule",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's dissect the argument to identify the premise and the conclusion, paying careful attention to the specific terms used." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"In order to increase production, ABC Company should implement a flextime schedule..."', text: "This is the conclusion. The author recommends a specific action (flextime) to achieve a specific goal (**increased production**). The phrase \"in order to\" signals the ultimate goal." },
      { title: '"Studies have shown that working under flextime schedules is associated with increased employee morale."', text: "This is the premise. It provides evidence that flextime leads to an intermediate effect: **increased morale**. Note the mismatch: the evidence is about *morale*, but the conclusion is about *production*." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**The Evidence:** Flextime → Increased Morale\n\n**The Conclusion:** Flextime → Increased Production\n\n**The Gap:** The argument leaps from morale to production without connecting them. The author takes for granted that higher morale leads to (or at least contributes to) higher production. But is that necessarily true? Employees could be extremely happy and morale could be sky-high, yet production might not change at all — or could even decrease if happier employees spend more time socializing." },
    { type: 'callout', variant: 'default', title: 'Visualizing the Chain', text: "The argument assumes a three-link chain:\n\n**Flextime → Morale ↑ → Production ↑**\n\nThe premise establishes the first link. The conclusion asserts the third link. The second link — morale leads to production — is the unstated necessary assumption." },

    { type: 'h4', text: 'Step 3: Pre-phrase' },
    { type: 'paragraph', text: "Before looking at the choices, our prediction is clear: the author must assume that higher morale *can contribute to* higher production. Without this belief, the evidence about morale is completely irrelevant to the conclusion about production." },

    { type: 'h4', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) the employees who prefer a flextime schedule are the most productive employees at ABC Company', text: "The argument is about the *effect* of implementing flextime on the company as a whole, not about the pre-existing traits of employees who happen to prefer it. Whether the most productive workers already want flextime is a separate question from whether flextime would increase production.\n\n**Negation:** The employees who prefer flextime are NOT the most productive. This doesn't destroy the argument — even less-productive employees gaining morale could lead to increased production. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: "(B) an increase in the morale of ABC Company's employees could lead to increased production", text: "This perfectly provides the missing Key Ingredient link. It connects the intermediate effect (morale) to the ultimate goal (production).\n\n**Negation Test:** An increase in employee morale **COULD NOT** lead to increased production. If this is true, then the author's evidence about morale is *completely irrelevant* to the conclusion about production. The argument has no logical connection between its evidence and its conclusion. **The argument collapses.**\n\nNotice the careful wording: \"could lead to\" — not \"will lead to\" or \"guarantees.\" This is a modest, cautious claim, which is typical of NA answers.", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) flextime schedules tend to be associated with reduced lateness and absenteeism', text: "This offers an *alternative* reason why flextime might increase production — but it is not the reason the author gave. The author's evidence is about *morale*, not *attendance*. A necessary assumption must connect the evidence *actually provided* to the conclusion. This choice introduces a new benefit that the argument never mentioned.\n\n**Negation:** Flextime is NOT associated with reduced lateness. This doesn't hurt the argument because the argument never relied on attendance in the first place. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) employees are most productive during the part of the day when all employees are present', text: "This detail is irrelevant to the connection between morale and production. If anything, it could be a reason *against* flextime (since flextime means not all employees are present at the same time). The argument certainly doesn't depend on assuming a fact that might undermine its own conclusion.\n\n**Negation:** Employees are NOT most productive when everyone is present. This has no impact on the morale-to-production link. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) companies that are in competition with ABC Company also use a flextime schedule', text: "What competitors do is irrelevant to the internal logic of this argument. The argument is about whether flextime would increase production at ABC Company — it doesn't compare ABC to other companies.\n\n**Negation:** Competitors do NOT use flextime. This has zero impact on whether flextime would help ABC. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Bridge Morale → Production?'], rows: [
      ['(A)', 'Pre-existing traits of employees', 'No — wrong topic'],
      ['**(B)**', '**Whether morale can lead to production**', '**Yes — bridges the gap ✓**'],
      ['(C)', 'Alternative benefit of flextime (attendance)', 'No — different evidence chain'],
      ['(D)', 'When employees are most productive', 'No — irrelevant detail'],
      ['(E)', 'What competitors do', 'No — out of scope'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument's evidence offers an intermediate benefit that is different from the conclusion's ultimate goal, the necessary assumption is the belief that the intermediate benefit *can contribute to* the ultimate goal. Without this link, the evidence is irrelevant to the conclusion.\n\nAlways confirm your choice with the Negation Test. The correct answer's negation will make the evidence completely disconnected from the conclusion — not just weaker, but *irrelevant*.\n\nWatch the strength of the language: NA answers use modest phrasing like \"could lead to\" rather than \"will guarantee.\" The assumption doesn't need to prove the goal will be achieved — it only needs to establish that the connection *can exist*." },
  ]
};
