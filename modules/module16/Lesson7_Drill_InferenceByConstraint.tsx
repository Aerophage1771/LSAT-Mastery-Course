import { Lesson } from '../../types';

export const Lesson7_Drill_InferenceByConstraint: Lesson = {
  id: "16-7",
  title: "Drill: Inference by Constraint",
  content: [
    { type: 'h2', text: 'Inference by Constraint' },
    { type: 'paragraph', text: "An **Inference by Constraint** question provides a stimulus that establishes boundaries or limits \u2014 through superlatives, absolutes, or restrictive conditions \u2014 that narrow down what must be true. The correct answer is not stated directly; it is forced into existence by the constraints. You must reason into the \"negative space\" created by words like \"purest,\" \"only,\" and \"never\" to deduce what the stimulus necessarily implies about things it never explicitly describes." },

    { type: 'paragraph', text: "These questions reward disciplined, deductive reading. The key skill is recognizing that a constraint on one category automatically tells you something about every other category. If X is the \"most efficient\" method, then every other method is less efficient. If Y is \"never\" subjected to a process, then any item that was subjected to that process is not Y." },

    { type: 'h3', text: 'What Makes Inference by Constraint Distinctive' },
    { type: 'list', ordered: true, items: [
      '**Superlatives set ceilings and floors.** Words like "purest," "best," "only," and "most" establish an upper or lower bound. The inference is about what falls on the other side of that bound.',
      '**Restrictions create exclusions.** Phrases like "never refined" or "only used for" tell you that certain processes or categories are off-limits for a given item \u2014 which means the process must apply to something else.',
      '**The answer describes the unstated.** The correct answer typically describes a property of something the stimulus mentions only indirectly, by combining two or more constraints.',
    ]},

    { type: 'callout', variant: 'default', title: 'The Negative Space Rule', text: "When you encounter a superlative or absolute restriction, ask: \"What does this tell me about everything else?\" The inference is rarely about the item described by the superlative itself \u2014 it is about the items that fall outside the constraint." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Inference by Constraint' },
    { type: 'paragraph', text: "This drill demonstrates how superlatives and restrictions combine to force a deduction about something the stimulus never directly addresses. Read the stimulus, commit to an answer, then review the full analysis below." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Identify the Constraints' },
    { type: 'paragraph', text: "The stimulus establishes four facts, two of which function as constraints that limit what can be true:" },
    { type: 'breakdown', labels: { title: 'Fact', text: 'Details' }, items: [
      { title: 'Fact 1: Purity Level', text: 'Senegalese gold had a 92 percent gold content. This is a specific, measurable property.', badge: 'Fact', badgeColor: 'slate' },
      { title: 'Fact 2: The Superlative Constraint', text: 'Senegalese gold was the **purest known** unrefined gold. This sets a ceiling: no other unrefined gold could have a purity higher than 92%.', badge: 'Constraint', badgeColor: 'indigo' },
      { title: 'Fact 3: Refining Capability', text: 'The mints produced "other kinds of coins that had much purer gold content" by refining gold.', badge: 'Fact', badgeColor: 'slate' },
      { title: 'Fact 4: The Process Constraint', text: 'The Senegalese gold was **never refined**. This means the refined, purer coins must have been made from a different source of gold.', badge: 'Constraint', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Reason into the Negative Space' },
    { type: 'paragraph', text: "Combine the two constraints to deduce something about the unstated source:" },
    { type: 'list', items: [
      'The mints made coins with "much purer" gold content by refining (Fact 3).',
      'The source for this refined gold could not have been Senegalese gold, because it was never refined (Fact 4).',
      'Therefore, the source must have been some *other* unrefined gold.',
      'Because Senegalese gold was the "purest known" at 92%, any other unrefined gold must have had a purity of *less than* 92% (Fact 2).',
    ]},
    { type: 'paragraph', text: "The inference: to produce the purer coins, the mints had to start with lower-quality raw material and refine it upward. This conclusion is never stated in the stimulus \u2014 it is forced by the constraints." },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Coins minted from Senegalese gold all contained the same weight, as well as the same proportion, of gold.', text: 'The stimulus confirms the same *proportion* (92%) but says nothing about *weight* or size. This adds an unsupported claim about a property the stimulus never addresses.', badge: 'Term Shift Trap', badgeColor: 'red' },
      { title: '(B) The source of some refined gold from which coins were minted was unrefined gold with a gold content of less than 92 percent.', text: 'This is the product of reasoning by constraint. The mints refined gold to make purer coins. That gold was not Senegalese (never refined). Any other unrefined gold was below 92% (Senegalese was the purest). Therefore, the source material was below 92%.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Two coins could have the same monetary value even though they differed from each other in the percentage of gold they contained.', text: 'The stimulus discusses metallurgy, not economics or monetary value. There is no information about how coins were valued relative to each other.', badge: 'Out of Scope Trap', badgeColor: 'red' },
      { title: '(D) No gold coins were minted that had a gold content of less than 92 percent.', text: 'This is an unsupported absolute. It is entirely possible that coins were also minted from lower-grade, unrefined gold without refining, resulting in coins below 92% purity.', badge: 'Unsupported Absolute', badgeColor: 'red' },
      { title: '(E) The only unrefined gold from which coins could be minted was Senegalese gold.', text: 'The word "only" makes this too extreme. The stimulus says Senegalese gold was the *purest*, not the *only* mintable source. Other lower-purity gold could also have been used.', badge: 'Unsupported Absolute', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Superlatives define boundaries, not just descriptions.** \"Purest known\" does not just describe Senegalese gold \u2014 it tells you that every other unrefined gold was less pure. Always ask what a superlative implies about everything else in the category.\n\n**2. Restrictions force alternative explanations.** \"Never refined\" eliminates Senegalese gold as the source for refined coins. When an item is excluded from a process, look for what must have taken its place.\n\n**3. The correct answer describes the unstated.** The stimulus never mentions any gold source other than Senegalese gold. But the constraints force the conclusion that such a source existed and had specific properties. The best-supported inference is often about something the stimulus implies but does not say." },
  ]
};
