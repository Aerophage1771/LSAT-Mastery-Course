import { Lesson } from '../../types';

export const Lesson4_Drill_CompositionFlaw: Lesson = {
  id: "6-4",
  title: "Drill: The Composition Flaw",
  content: [
    { type: 'h2', text: 'Drill: The Composition / Division Flaw' },

    { type: 'h3', text: 'Concept Focus: Composition and Division' },
    { type: 'paragraph', text: "In logical reasoning, **scale matters**. One of the most common errors the LSAT tests is the assumption that what is true of individual parts must also be true of the whole — or vice versa. These are the **Composition** and **Division** flaws, and they are two sides of the same coin." },
    { type: 'paragraph', text: "Think about a brick wall. Each individual brick is small, light, and easy to carry. Does that mean the wall itself is small, light, and easy to carry? Obviously not. The wall has **emergent properties** — size, weight, structural strength — that no individual brick possesses. The Composition Flaw is the error of assuming the wall must share the properties of its bricks. The Division Flaw is the reverse: assuming each brick must share the properties of the wall." },

    { type: 'hr' },

    { type: 'h3', text: 'Composition vs. Division' },
    { type: 'paragraph', text: "These two flaws are mirror images. The direction of the logical leap determines which one you are dealing with:" },
    { type: 'table', headers: ['Feature', 'Composition (Part → Whole)', 'Division (Whole → Part)'], rows: [
      ['**Direction**', 'Reasons from individual parts to the aggregate whole', 'Reasons from the aggregate whole to individual parts'],
      ['**Core Error**', 'Assumes the whole inherits each part\'s properties', 'Assumes each part inherits the whole\'s properties'],
      ['**Abstract Pattern**', 'Each X has property P. The group is made of Xs. Therefore the group has P.', 'The group has property P. X is a member of the group. Therefore X has P.'],
      ['**Classic Example**', '"Each thread is weak, so the rope must be weak."', '"The rope is strong, so each thread must be strong."'],
      ['**Why It Fails**', 'Aggregation can create emergent properties (many weak threads form a strong rope)', 'Group-level properties may not distribute to individuals (a wealthy country may have poor citizens)'],
      ['**LSAT Frequency**', 'More common in Parallel Flaw', 'Less common but appears as a trap answer'],
    ]},
    { type: 'callout', variant: 'default', title: 'Direction Is Everything', text: "In Parallel Flaw questions, the LSAT frequently pairs a **Composition** stimulus with a **Division** trap answer (or vice versa). Both involve parts and wholes, so students who identify the flaw loosely as \"a part/whole error\" will fall for the trap. You must track the **direction** of the logical leap:\n\n• **Small → Big** = Composition\n• **Big → Small** = Division\n\nDraw a mental arrow. Match the arrow's direction." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot This Flaw' },
    { type: 'paragraph', text: "Composition and Division flaws are signaled by specific language patterns. Watch for these triggers in both the stimulus and the answer choices:" },
    { type: 'table', headers: ['Signal in the Argument', 'What It Suggests'], rows: [
      ['"Each member / every individual / no single person..."', 'The premise is about individual parts — check if the conclusion is about the group (Composition)'],
      ['"The team / the company / the country / the collection..."', 'The conclusion is about the whole — check if the evidence is about parts (Composition)'],
      ['"Since the group / because the organization..."', 'The premise is about the whole — check if the conclusion is about a member (Division)'],
      ['"...is just a collection of..."', 'Explicit link between parts and whole — high probability of Composition/Division flaw'],
      ['"...so each / therefore every / thus any individual..."', 'The conclusion distributes a group property to individuals (Division)'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Everyday Examples' },
    { type: 'paragraph', text: "Before tackling the LSAT question, let's build intuition with clear real-world examples of each flaw:" },
    { type: 'breakdown', labels: { title: 'Example', text: 'Analysis' }, items: [
      { title: '"Every player on the team is fast. Therefore the team is fast."', text: '**Composition (Part → Whole).** A team\'s speed depends on coordination, strategy, and teamwork — not just individual speed. A group of fast runners might still be a slow relay team if they fumble the baton.', badge: 'Composition', badgeColor: 'blue' },
      { title: '"This is a prestigious university, so every professor here must be prestigious."', text: '**Division (Whole → Part).** The university\'s prestige might come from its research funding, history, or a few star faculty — not every individual professor.', badge: 'Division', badgeColor: 'indigo' },
      { title: '"Each ingredient in this recipe is inexpensive, so the meal must be inexpensive."', text: '**Composition (Part → Whole).** If the recipe requires 30 inexpensive ingredients, the total cost could be quite high. The argument ignores the additive effect.', badge: 'Composition', badgeColor: 'blue' },
      { title: '"The orchestra sounds beautiful, so each musician must sound beautiful on their own."', text: '**Division (Whole → Part).** An orchestra\'s beauty comes from harmony — the blending of many instruments. Individual musicians playing alone might sound unremarkable.', badge: 'Division', badgeColor: 'indigo' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },

    { type: 'question-card',
      id: 'PF-6-4-001',
      questionType: 'Parallel Flaw',
      difficulty: 'medium',
      stimulus: "Historian: The ancient Greeks failed to recognize that, morally, democracy is no improvement over monarchy. It is wrong for an individual to have the power to choose the course of action for a government, so it is no less wrong to grant this power to society, which is just a collection of individuals.",
      question: "The pattern of flawed reasoning in the argument above is most similar to that in which one of the following?",
      options: [
        "(A) There is no point in trying to find someone else to solve that problem. If Robin cannot solve it, then none of Robin's friends would be able to solve it.",
        "(B) We should not pick Hank for the relay team. He has not won a race all season, so there is no reason to expect him to help the relay team win.",
        "(C) Laws that contain exemptions for some individuals based on no relevant consideration are fundamentally immoral. If it is wrong for a given person to commit an act, then it is wrong for anyone else in similar circumstances to commit the act.",
        "(D) There is no point in asking the club to purchase tents and make them available for use by club members. No member of the club can afford one of those tents, so the club is unable to afford any either. (Correct)",
        "(E) Agreeing with all of the other members of society does not guarantee that one is correct about an issue. With many topics it is possible for society to be mistaken and hence every individual in society to be likewise mistaken.",
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Full Step-by-Step Analysis' },

    { type: 'h3', text: 'Step 1: Identify the Flaw' },
    { type: 'paragraph', text: "Let's trace the Historian's reasoning carefully:" },
    { type: 'list', items: [
      '**Premise:** It is wrong for an *individual* to have the power to choose the course of action for a government.',
      '**Bridge:** Society is "just a collection of individuals."',
      '**Conclusion:** It is wrong to grant this power to *society* (therefore democracy is no improvement over monarchy).',
    ]},
    { type: 'paragraph', text: "The argument starts with a moral claim about an **individual part** (a single person) and transfers that claim to the **aggregate whole** (society). The justification is that society is \"just a collection of individuals\" — but this ignores the possibility that a collective might have rights, capacities, or moral standing that individuals lack." },
    { type: 'paragraph', text: "Just as a choir can sing a chord that no single singer can produce alone, a democratic society might have a moral right to self-governance that no single dictator possesses. The Historian's error is the **Composition Flaw**: reasoning from Part → Whole." },

    { type: 'h3', text: 'Step 2: Abstract the Pattern' },
    { type: 'callout', title: 'Blueprint', variant: 'tip', text: "Part [X] has limitation [Y].\nWhole [Z] is made up of Parts [X].\nTherefore, Whole [Z] has limitation [Y].\n\n(Composition: Individual property transferred to the group.)" },

    { type: 'h3', text: 'Step 3: Match the Error' },
    { type: 'paragraph', text: "We need an argument that:\n1. Makes a claim about individual *parts* (members, pieces, individuals)\n2. Notes that the whole is composed of those parts\n3. Concludes that the *whole* must share the same property\n\nCritically, the direction must be **Part → Whole** (Composition), not Whole → Part (Division)." },

    { type: 'hr' },

    { type: 'h3', text: 'Answer Choice Breakdown' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: "(A) If Robin cannot solve it, then none of Robin's friends would be able to solve it.",
        text: "This argument compares one **individual** (Robin) to other **individuals** (Robin's friends). It assumes that peers are equally capable. It does not aggregate the friends into a \"whole\" to claim the group itself is incapable. This is an **analogy error** (assuming similarity between individuals), not a Composition flaw.",
        badge: 'Incorrect — Analogy Error',
        badgeColor: 'red'
      },
      {
        title: '(B) Hank has not won a race, so there is no reason to expect him to help the relay team win.',
        text: "This is tempting because it mentions a \"team\" (whole) and \"Hank\" (part). However, the flaw is about **prediction or causation**: it argues that because Hank is bad, the team won't win. It doesn't claim the team *is* Hank — it claims Hank can't *contribute* to a team win. This is closer to a hasty generalization than a Composition error.",
        badge: 'Incorrect — Prediction Error',
        badgeColor: 'red'
      },
      {
        title: '(C) If it is wrong for a given person to commit an act, then it is wrong for anyone else in similar circumstances.',
        text: "This argument applies a moral rule **equally across similar individuals**. It argues that what applies to Person A should apply to Person B in similar circumstances. It does not move from a part to a whole; it stays at the individual level throughout. This is a principle of **moral consistency**, not a Composition flaw.",
        badge: 'Incorrect — Moral Consistency',
        badgeColor: 'red'
      },
      {
        title: '(D) No member of the club can afford a tent, so the club is unable to afford one either.',
        text: "Perfect match.\n• **The Part:** \"No member\" (individuals) has the limitation \"cannot afford.\"\n• **The Whole:** \"The club\" (the aggregate group).\n• **The Flawed Conclusion:** Therefore, the club cannot afford it.\n\nThis ignores the power of **aggregation** — pooling resources. If each member has $10 and the tent costs $100, no individual can afford it, but 10 members together can. The argument transfers an individual limitation to the group. This is exactly the Composition Flaw: Part → Whole.",
        badge: 'Correct',
        badgeColor: 'green'
      },
      {
        title: '(E) Society to be mistaken and hence every individual in society to be likewise mistaken.',
        text: "This is the **\"Evil Twin\"** trap answer. It deals with Society (Whole) and Individuals (Parts), but the logic flows from **Whole → Part**: because society is mistaken, every individual must also be mistaken. This is the **Division Flaw** — the mirror image of Composition. The *direction* is reversed.",
        badge: 'Incorrect — Division (Wrong Direction)',
        badgeColor: 'red'
      },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Trap Analysis: Composition vs. Division' },
    { type: 'paragraph', text: "Answer choice **(E)** is the most instructive trap in this question. It involves the same concepts (society, individuals, moral/epistemic properties) and even the same *type* of flaw (Part/Whole reasoning). But the **direction** is reversed:" },
    { type: 'table', headers: ['Element', 'Stimulus (Composition)', 'Choice E (Division)'], rows: [
      ['**Premise about...**', 'The individual (part)', 'Society (whole)'],
      ['**Conclusion about...**', 'Society (whole)', 'Every individual (part)'],
      ['**Direction**', 'Small → Big', 'Big → Small'],
      ['**Arrow**', 'Part → Whole', 'Whole → Part'],
    ]},
    { type: 'paragraph', text: "By tracking the direction of the arrow — who is the premise about, and who is the conclusion about — you can instantly distinguish Composition from Division and avoid this trap." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• The **Composition Flaw** (Part → Whole) assumes the whole inherits each part's properties. The **Division Flaw** (Whole → Part) assumes each part inherits the whole's properties.\n• The LSAT loves pairing these two flaws in the same Parallel Flaw question — one in the stimulus, the other as a trap answer.\n• **Direction is everything.** Draw a mental arrow: Small → Big = Composition, Big → Small = Division.\n• Watch for the phrase \"is just a collection of\" — it is a strong signal that a Composition flaw is present.\n• The correct answer must match both the **type** of flaw (Part/Whole) and the **direction** (Part → Whole or Whole → Part).\n• Aggregation creates emergent properties: a group of individually weak/poor/wrong members can be collectively strong/wealthy/right. This is the core insight that the Composition Flaw ignores." },
  ]
};
