import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '13-1',
  title: 'Introduction',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'MODULE 13: Principle - Apply' },
    {
      type: 'paragraph',
      text: "**Question Goal**\n\nYou are given a general rule or principle in the stimulus. Your job is to find the one answer choice that describes a specific situation in which that principle is correctly applied — where the facts satisfy every condition of the rule and the outcome matches the rule's stated consequence.",
    },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    {
      type: 'paragraph',
      text: 'Principle-Apply questions test one of the most fundamental skills in logical reasoning: **moving from the abstract to the concrete**. In everyday life, we constantly apply general rules to specific situations — deciding whether a receipt qualifies for a warranty return, whether a parking violation meets the threshold for towing, whether a grant application satisfies the eligibility criteria. The LSAT operationalizes this skill by giving you a general rule and asking you to identify which specific scenario correctly falls under it.',
    },
    {
      type: 'paragraph',
      text: "These questions appear roughly **1–2 times per scored Logical Reasoning section** and span the full difficulty range. They are often underestimated because the principle is given to you — you don't have to find it yourself. But the challenge lies in the precision required: the correct answer must satisfy *every* condition in the principle, and wrong answers are designed to match *almost* perfectly while violating a single, easy-to-miss requirement.",
    },
    {
      type: 'paragraph',
      text: "Mastering Principle-Apply also strengthens your performance on related question types. The ability to decompose a rule into conditions and consequences is the same skill you need for Sufficient Assumption questions (where you construct the rule), Parallel Reasoning (where you match the rule's logical form), and Conditional Reasoning throughout the Logic Games section. This module trains your precision, and precision pays compound interest across the entire exam.",
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Frequency & Difficulty',
      text: 'Expect **1–2 Principle-Apply questions per scored section**. They range from straightforward (the principle is a single conditional with one clear match) to highly difficult (the principle has multiple layered conditions and the answer choices are designed to satisfy all but one). Students who develop a systematic checklist approach consistently outperform those who rely on intuition.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    {
      type: 'paragraph',
      text: 'Principle-Apply question stems are distinctive because they present the principle *in the stimulus* and ask you to find the answer choice that correctly instantiates it. The stem directs you downward — from the general rule to a specific case. Learn to distinguish these from Principle-Strengthen stems (which ask you to find the *rule itself*).',
    },
    {
      type: 'table',
      headers: ['Question Stem Pattern', 'Key Signal'],
      rows: [
        [
          '"Which one of the following is an application of the principle above?"',
          '"**application of**" — find the scenario that uses the rule',
        ],
        [
          '"Which one of the following most closely conforms to the principle?"',
          '"**conforms to**" — find the case that fits the rule\'s requirements',
        ],
        [
          '"Which one of the following judgments best illustrates the principle?"',
          '"**illustrates**" — find the specific example of the general rule in action',
        ],
        [
          '"The reasoning in which one of the following is most strongly supported by the guidelines?"',
          '"**supported by the guidelines**" — the guidelines are given; find the matching case',
        ],
        [
          '"Which one of the following is consistent with the principle stated above?"',
          '"**consistent with**" — find the scenario that does not violate the rule',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'What Makes Apply Different' },
    {
      type: 'paragraph',
      text: 'The defining feature of Principle-Apply is that **the principle is given to you in the stimulus**. You are not hunting for the hidden rule — you already have it. Your task is to find the specific scenario among the answer choices that correctly applies it. This is the opposite direction from Principle-Strengthen, where you are given a specific argument and must find the general rule that supports it.',
    },
    { type: 'paragraph', text: 'Think of it this way:' },
    {
      type: 'list',
      items: [
        '**Principle-Apply:** You have the *law*. Find the *case* it governs.',
        '**Principle-Strengthen:** You have the *case*. Find the *law* that governs it.',
      ],
    },
    {
      type: 'paragraph',
      text: "Because the principle is already provided, Principle-Apply questions reward **precision over creativity**. You don't need to abstract or generalize. You need to decompose the rule into its exact conditions and consequences, then systematically check each answer choice against that checklist. The correct answer will satisfy every condition and reach the consequence stated by the rule. Wrong answers will fail on at least one condition — and the LSAT designs those failures to be subtle.",
    },

    { type: 'h3', text: 'Principle-Apply vs. Principle-Strengthen' },
    {
      type: 'paragraph',
      text: 'These two question types are mirror images. Confusing them leads to solving the wrong problem entirely. Here is a precise comparison:',
    },
    {
      type: 'table',
      headers: ['Feature', 'Principle-Apply (This Module)', 'Principle-Strengthen (Module 12)'],
      rows: [
        [
          'What the stimulus contains',
          'The **general principle** (the rule itself)',
          'A **specific argument** (evidence → conclusion)',
        ],
        [
          'What the answer provides',
          'A **specific scenario** that matches the rule',
          "A **general rule** that justifies the argument's logic",
        ],
        [
          'Direction of reasoning',
          '**Abstract → Concrete** (top-down: rule to case)',
          '**Concrete → Abstract** (bottom-up: case to rule)',
        ],
        [
          'Your primary task',
          "Check whether facts **satisfy the rule's conditions**",
          'Identify the **logical gap** and find the bridging principle',
        ],
        [
          'Key skill tested',
          'Precision — decomposing conditions and matching',
          'Abstraction — generalizing from specifics to universals',
        ],
        [
          'Common mistake',
          'Matching most conditions but missing one',
          'Picking an answer that is too specific or too narrow',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'The Direction Test',
      text: 'If the stimulus is a general rule and the answer choices are specific scenarios, you are doing **Principle-Apply**. If the stimulus is a specific argument and the answer choices are general rules, you are doing **Principle-Strengthen**. Always check the direction before you start solving.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Matching Process' },
    {
      type: 'paragraph',
      text: 'The core of every Principle-Apply question is a systematic matching process. You break the principle into its component parts, then check each answer choice against those parts. Here is how the process works:',
    },

    { type: 'h3', text: 'Step 1: Break the Principle into Conditions and Consequences' },
    { type: 'paragraph', text: 'Every principle on the LSAT can be decomposed into two components:' },
    {
      type: 'list',
      items: [
        '**Conditions (the "If" side):** The specific facts or circumstances that must be present for the rule to apply. There are often multiple conditions, and *all* of them must be satisfied.',
        '**Consequence (the "Then" side):** The outcome, judgment, or recommended action that follows when all conditions are met.',
      ],
    },
    {
      type: 'paragraph',
      text: '**Example Principle:** "A business owner who knowingly sells a defective product to a customer is liable for any injuries that result from the defect."',
    },
    {
      type: 'breakdown',
      labels: { title: 'Component', text: 'What It Requires' },
      items: [
        {
          title: 'Condition 1: Business owner',
          text: 'The person must be a business owner (not a private individual, not an employee, etc.)',
          badge: 'Condition',
          badgeColor: 'blue',
        },
        {
          title: 'Condition 2: Knowingly sells',
          text: 'The sale must be intentional with knowledge of the defect (not accidental, not unknowing)',
          badge: 'Condition',
          badgeColor: 'blue',
        },
        {
          title: 'Condition 3: Defective product',
          text: 'The product must actually be defective',
          badge: 'Condition',
          badgeColor: 'blue',
        },
        {
          title: 'Condition 4: Sold to a customer',
          text: 'The transaction must be a sale to a customer (not a gift, not internal use)',
          badge: 'Condition',
          badgeColor: 'blue',
        },
        {
          title: 'Consequence: Liable for resulting injuries',
          text: 'The owner is legally responsible for injuries that result from the defect',
          badge: 'Consequence',
          badgeColor: 'indigo',
        },
      ],
    },

    { type: 'h3', text: 'Step 2: Check Each Answer Against the Checklist' },
    {
      type: 'paragraph',
      text: 'For each answer choice, ask: does this scenario satisfy **every** condition? And does it reach the **exact** consequence stated in the principle? A wrong answer might satisfy three out of four conditions, or it might satisfy all conditions but reach a different consequence.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The \"All Conditions\" Rule',
      text: 'This is the single most important principle in this module: **Every condition in the principle must be satisfied by the correct answer.** If even one condition is missing, the answer is wrong — no matter how closely the scenario resembles the principle. This is where students lose points: they see a strong match on most conditions and stop checking.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Principle Structures' },
    {
      type: 'paragraph',
      text: 'While every principle is unique, they tend to fall into recurring structural patterns. Recognizing these patterns helps you decompose the principle faster and anticipate what the correct answer will look like.',
    },

    {
      type: 'table',
      headers: ['Principle Type', 'Structure', 'Example'],
      rows: [
        [
          '**Conditional Rule**',
          'IF [conditions], THEN [consequence]. The most common structure. Multiple conditions are joined by AND.',
          '"If an employee is terminated without cause AND has been employed for more than one year, the employer must provide severance pay."',
        ],
        [
          '**Definitional Criterion**',
          'X counts as / qualifies as Y when [features are present]. Establishes category membership.',
          '"An action qualifies as negligent when the actor fails to exercise the care that a reasonable person would exercise."',
        ],
        [
          '**Ethical Guideline**',
          'It is right/wrong/permissible/impermissible to [action] when [circumstances]. Makes a moral judgment contingent on specific conditions.',
          '"It is wrong to break a promise unless keeping the promise would cause serious harm to an innocent party."',
        ],
        [
          '**Causal Principle**',
          '[Factor] causes / leads to / produces [outcome] when [conditions]. Describes cause-and-effect relationships.',
          '"Public criticism of a policy will undermine public trust in the institution only if the criticism comes from within the institution itself."',
        ],
      ],
    },

    {
      type: 'paragraph',
      text: 'Regardless of the structural type, the decomposition process is the same: identify every condition, identify the consequence, and then find the answer choice that satisfies all conditions and matches the consequence.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    {
      type: 'paragraph',
      text: "Let's apply the matching process to a complete Principle-Apply question from start to finish.",
    },
    { type: 'paragraph', text: 'Consider this illustrative principle and application set:' },
    {
      type: 'blockquote',
      text: '"A government regulation is justified only if it addresses a clear harm to the public AND the regulation does not impose a burden on individuals that outweighs the harm it prevents."',
    },
    {
      type: 'paragraph',
      text: 'This kind of Principle-Apply problem is about disciplined checklist matching. The best scenario must clearly satisfy both conditions or clearly fail one and reach the matching negative conclusion.',
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Decompose the Principle' },
    { type: 'paragraph', text: 'The editorial states: a regulation is **justified** only if two conditions are met:' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Condition 1:** The regulation addresses a clear harm to the public.',
        '**Condition 2:** The regulation does not impose a burden on individuals that outweighs the harm it prevents.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The consequence: the regulation is **justified**. Notice the "only if" — this means both conditions are *necessary*. If either condition fails, the regulation is *not* justified. For a scenario to correctly apply this principle, it must either (a) show both conditions met and conclude "justified," or (b) show at least one condition failed and conclude "not justified."',
    },

    { type: 'h4', text: 'Step 2: Evaluate Each Answer' },
    {
      type: 'paragraph',
      text: 'The cleanest application is the one that makes both prongs explicit: the regulation addresses a clear public harm, and its burden is obviously modest relative to the harm avoided. A seat-belt rule is a good model because the public harm is direct and the burden is minor. By contrast, scenarios that skip the weighing, change the standard to public voting or policy alternatives, or rely on a stretched definition of public harm are not precise matches.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Key Principles' },
    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: "**1. Every condition in the principle must be satisfied by the correct answer.** This is the golden rule of Principle-Apply. If a scenario matches three of four conditions, it is wrong. Treat the principle as a checklist and verify each item.\n\n**2. The principle is given — your job is precision, not creativity.** Unlike Principle-Strengthen, you don't need to abstract or generalize. You need to decompose the rule and match it methodically.\n\n**3. Break every principle into Conditions + Consequence.** Regardless of the principle's structure (conditional rule, definitional criterion, ethical guideline, causal principle), it can always be decomposed into conditions that trigger a consequence.\n\n**4. Wrong answers fail in predictable ways.** They satisfy most conditions but miss one, they reach a different consequence, they apply a different standard than the one in the principle, or they ignore a required weighing or comparison.\n\n**5. Check the direction of the match.** The correct answer may apply the principle positively (all conditions met → consequence follows) or negatively (a condition fails → consequence does not follow). Both are valid applications. Make sure the answer's reasoning aligns with the principle's logic in whichever direction it goes.\n\n**6. Principle-Apply is the mirror image of Principle-Strengthen.** Apply gives you the rule and asks for the case. Strengthen gives you the case and asks for the rule. Always check which direction you're solving before you begin.",
    },
  ],
};
