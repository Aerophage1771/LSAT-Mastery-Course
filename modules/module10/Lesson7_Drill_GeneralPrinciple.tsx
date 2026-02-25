import { Lesson } from '../../types';

export const Lesson7_Drill_GeneralPrinciple: Lesson = {
  id: "10-7",
  title: "Drill: The General Principle (PT-134-S-3-Q-21)",
  content: [
    { type: 'h2', text: 'The General Principle Pattern' },
    { type: 'paragraph', text: "In a General Principle sufficient assumption, the argument presents a **specific, detailed scenario** and draws a conclusion about the motive, classification, or evaluation of that scenario. The logical gap is the absence of a **broad rule** that covers the particular case. The correct answer states that rule — a universal principle that, when applied to the specific facts, forces the conclusion to follow." },
    { type: 'paragraph', text: "These arguments move from particular observations to a particular judgment, but the bridge between them is a general law the author never states. Because the rule must *guarantee* the conclusion, it will often sound extreme or overly simplistic. That is by design: its job is logical sufficiency, not real-world nuance." },
    { type: 'callout', variant: 'tip', title: 'How to Spot It', text: "Look for arguments where the premises describe **who did what and under what circumstances**, and the conclusion makes a judgment about **why they did it** or **how it should be classified**. The gap is always the missing general rule that turns specific facts into a guaranteed verdict." },

    { type: 'hr' },

    { type: 'h3', text: 'Practice Question' },

    { type: 'question-card',
      id: 'SA-10-7-001',
      questionType: 'Sufficient Assumption',
      difficulty: 'medium',
      stimulus: "Economics professor: Marty's Pizza and Checkers Pizza are the two major pizza parlors in our town. Marty's sold coupon books including coupons good for one large plain pizza at any local pizza parlor, at Marty's expense. But Checkers refused to accept these coupons, even though they were redeemed by all other local pizza parlors. Accepting them would have cost Checkers nothing and would have satisfied those of its potential customers who had purchased the coupon books. This shows that Checkers's motive in refusing to accept the coupons was simply to hurt Marty's Pizza.",
      question: "Which one of the following, if assumed, enables the economics professor's conclusion to be properly drawn?",
      options: [
        "(A) Any company that refuses to accept coupons issued by a competitor when doing so would satisfy some of the company's potential customers is motivated solely by the desire to hurt that competitor. (Correct)",
        "(B) Any company that wishes to hurt a competitor by refusing to accept coupons issued by that competitor will refuse to accept them even when accepting them would cost nothing and would satisfy its potential customers.",
        "(C) At least one company has refused to accept coupons issued by its major local competitor simply in order to hurt that competitor, even though those coupons were accepted by all other local competitors.",
        "(D) Any company that accepts its major competitor's coupons helps its competitor by doing so, even if it also satisfies its own actual or potential customers.",
        "(E) If accepting coupons issued by a competitor would not enable a company to satisfy its actual or potential customers, then that company's refusal to accept the coupons is motivated by the desire to satisfy customers."
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Step-by-Step Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Isolate the specific facts from the final judgment about motive." },
    { type: 'breakdown', labels: { title: "Statement", text: "Analysis" }, items: [
      { title: "Marty's Pizza and Checkers Pizza are the two major pizza parlors in our town. Marty's sold coupon books including coupons good for one large plain pizza at any local pizza parlor, at Marty's expense.", text: "Background context: Marty's is paying for a promotion that benefits customers at any local parlor." },
      { title: "But Checkers refused to accept these coupons, even though they were redeemed by all other local pizza parlors.", text: "The key action. Checkers did something that sets it apart from every other local competitor." },
      { title: "Accepting them would have cost Checkers nothing and would have satisfied those of its potential customers who had purchased the coupon books.", text: "Crucial evidence. Two facts: (1) no cost to Checkers, (2) customer satisfaction upside. By refusing, Checkers acted against its own apparent self-interest." },
      { title: "This shows that Checkers's motive in refusing to accept the coupons was simply to hurt Marty's Pizza.", text: "**Conclusion.** The professor interprets Checkers' seemingly irrational action as driven by a single motive: malice toward a competitor." }
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The argument moves from observed behavior to a definitive claim about inner motive.\n\n- **Facts:** Checkers refused a no-cost, customer-pleasing action.\n- **Conclusion:** Checkers' *only* motive was to hurt Marty's.\n\nThe gap is the assumption that no other motive exists. What if Checkers has a strict \"no outside coupons\" policy for branding reasons? What if they felt accepting the coupons would legitimize a rival's promotion? The argument assumes that once you eliminate financial self-interest, the only remaining explanation is the desire to harm." },

    { type: 'h4', text: 'Step 3: Prephrase the Bridge' },
    { type: 'paragraph', text: "We need a **general principle** that transforms the specific facts into a guaranteed verdict about motive:" },
    { type: 'list', items: [
      "**\"Any company that does exactly what Checkers did (refuses a no-cost, customer-satisfying coupon from a competitor) must be motivated solely by the desire to hurt that competitor.\"**",
      "This turns the particular story into a universal law of business behavior."
    ]},

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'breakdown', labels: { title: "Option", text: "Analysis" }, items: [
      { title: "(A) Any company that refuses to accept coupons issued by a competitor when doing so would satisfy some of the company's potential customers is motivated solely by the desire to hurt that competitor.", text: "This is the exact general principle we predicted. It takes the specific conditions from the evidence (refusing a competitor's coupon that would satisfy customers) and makes the conclusion (motivated solely by a desire to hurt) a universal rule.\n\n**Logic Check:** Did Checkers refuse coupons that would satisfy customers? Yes. Does this rule say any company doing so is motivated solely by a desire to hurt the competitor? Yes. Therefore, Checkers is motivated solely by a desire to hurt Marty's. The conclusion is 100% guaranteed.", badge: "Correct", badgeColor: "green" },
      { title: "(B) Any company that wishes to hurt a competitor by refusing to accept coupons issued by that competitor will refuse to accept them even when accepting them would cost nothing and would satisfy its potential customers.", text: "**Mistaken Reversal.** This says: If you *want* to hurt a competitor → you will refuse. The argument needs the opposite: If you *refuse* → you must want to hurt. Knowing what a malicious company would do does not prove that Checkers is malicious.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) At least one company has refused to accept coupons issued by its major local competitor simply in order to hurt that competitor, even though those coupons were accepted by all other local competitors.", text: "One example of malicious behavior elsewhere does not prove *Checkers'* motive in this case. An argument by example is never logically sufficient.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) Any company that accepts its major competitor's coupons helps its competitor by doing so, even if it also satisfies its own actual or potential customers.", text: "This provides a reason *not* to accept coupons but does not establish that the desire to hurt is the *sole* motive for refusing. It also does not apply to Checkers specifically.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) If accepting coupons issued by a competitor would not enable a company to satisfy its actual or potential customers, then that company's refusal to accept the coupons is motivated by the desire to satisfy customers.", text: "This describes the opposite scenario. The stimulus explicitly states that accepting would have satisfied customers. This answer is irrelevant to the facts at hand.", badge: "Incorrect", badgeColor: "red" }
    ]},

    { type: 'callout', title: "Key Takeaway", variant: "summary", text: "**The General Principle pattern** bridges specific facts to specific conclusions via a broad, universal rule. The correct answer will read like a law of nature: \"Any X that does Y must be Z.\" It takes the particular conditions from the stimulus and declares a universal truth about them.\n\n**How to recognize it:** The conclusion makes a judgment (about motive, classification, or evaluation) about a specific actor in a specific situation, but the premises only describe the situation — they never state the rule that justifies the judgment.\n\n**Common trap:** The Mistaken Reversal (B). If the argument says \"Checkers refused → must want to hurt,\" expect a wrong answer that reverses this to \"wants to hurt → will refuse.\"" }
  ]
};
