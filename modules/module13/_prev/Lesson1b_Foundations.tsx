import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '13-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'What Makes Apply Different' },
    {
      type: 'paragraph',
      text: 'The defining feature of Principle-Apply is that **the principle is given to you in the stimulus**. You are not hunting for the hidden rule — you already have it. Your task is to find the specific scenario among the answer choices that correctly applies it. This is the opposite direction from Principle: Strengthen, where you are given a specific argument and must find the general rule that supports it.',
    },
    { type: 'paragraph', text: 'Think of it this way:' },
    {
      type: 'list',
      items: [
        '**Principle-Apply:** You have the *law*. Find the *case* it governs.',
        '**Principle: Strengthen:** You have the *case*. Find the *law* that governs it.',
      ],
    },
    {
      type: 'paragraph',
      text: "Because the principle is already provided, Principle-Apply questions reward **precision over creativity**. You don't need to abstract or generalize. You need to decompose the rule into its exact trigger and verdict, then systematically check each answer choice's case facts against that checklist. The correct answer will satisfy every part of the trigger and reach the verdict stated by the rule. Wrong answers will fail on at least one trigger element — and the LSAT designs those failures to be subtle.",
    },

    { type: 'h3', text: 'Principle-Apply vs. Principle: Strengthen' },
    {
      type: 'paragraph',
      text: 'These two question types are mirror images. Confusing them leads to solving the wrong problem entirely. Here is a precise comparison:',
    },
    {
      type: 'table',
      headers: ['Feature', 'Principle-Apply (This Module)', 'Principle: Strengthen (Module 12)'],
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
          "Check whether the **case facts satisfy the rule's trigger**",
          'Identify the **logical gap** and find the bridging principle',
        ],
        [
          'Key skill tested',
          'Precision — decomposing trigger and verdict, then matching',
          'Abstraction — generalizing from specifics to universals',
        ],
        [
          'Common mistake',
          'Matching most of the trigger but missing one load-bearing detail',
          'Picking an answer that is too specific or too narrow',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'The Direction Test',
      text: 'If the stimulus is a general rule and the answer choices are specific scenarios, you are doing **Principle-Apply**. If the stimulus is a specific argument and the answer choices are general rules, you are doing **Principle: Strengthen**. Always check the direction before you start solving.',
    },

    { type: 'h3', text: 'Shared Principle Vocabulary' },
    {
      type: 'paragraph',
      text: 'To keep the Principle family coordinated with Modules 10 and 12, use the same operating vocabulary here: the principle supplies the **trigger** and the **verdict**; the answer choice supplies the **case facts**; your job is to see whether those case facts **bridge** cleanly into the trigger so that the verdict follows. When the principle uses necessary-condition language, also write the **contrapositive** so you can test the reverse trigger as well.',
    },
    {
      type: 'table',
      headers: ['Term', 'What It Means in Principle-Apply'],
      rows: [
        ['**Trigger**', 'The set of conditions that activates the rule.'],
        ['**Case Facts**', 'The concrete details in an answer choice that may or may not satisfy the trigger.'],
        ['**Bridge**', 'The match between the case facts and the rule: do these facts actually satisfy the trigger?'],
        ['**Verdict**', 'What the rule says once the trigger is met or fails to be met.'],
        ['**Contrapositive**', 'The reverse-valid form of the rule when necessary-condition language is present.'],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Matching Process' },
    {
      type: 'paragraph',
      text: 'The core of every Principle-Apply question is a systematic matching process. You break the principle into its trigger and verdict, then check each answer choice\'s case facts against that structure. Here is how the process works:',
    },

    { type: 'h3', text: 'Step 1: Break the Principle into Trigger and Verdict' },
    { type: 'paragraph', text: 'Every principle on the LSAT can be decomposed into two components:' },
    {
      type: 'list',
      items: [
        '**Trigger:** The specific facts or circumstances that activate the rule. There are often multiple trigger elements, and *all* of them must be satisfied.',
        '**Verdict:** The outcome, judgment, or recommended action that follows once the trigger is satisfied, or fails once the trigger is absent where the rule supports that move.',
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
          title: 'Trigger Element 1: Business owner',
          text: 'The person must be a business owner (not a private individual, not an employee, etc.)',
          badge: 'Trigger',
          badgeColor: 'blue',
        },
        {
          title: 'Trigger Element 2: Knowingly sells',
          text: 'The sale must be intentional with knowledge of the defect (not accidental, not unknowing)',
          badge: 'Trigger',
          badgeColor: 'blue',
        },
        {
          title: 'Trigger Element 3: Defective product',
          text: 'The product must actually be defective',
          badge: 'Trigger',
          badgeColor: 'blue',
        },
        {
          title: 'Trigger Element 4: Sold to a customer',
          text: 'The transaction must be a sale to a customer (not a gift, not internal use)',
          badge: 'Trigger',
          badgeColor: 'blue',
        },
        {
          title: 'Verdict: Liable for resulting injuries',
          text: 'The owner is legally responsible for injuries that result from the defect',
          badge: 'Verdict',
          badgeColor: 'indigo',
        },
      ],
    },

    { type: 'h3', text: 'Step 2: Check Each Answer Against the Checklist' },
    {
      type: 'paragraph',
      text: 'For each answer choice, ask: do the **case facts** satisfy **every** part of the trigger? And do they reach the **exact** verdict stated in the principle? A wrong answer might satisfy three out of four trigger elements, or it might satisfy the trigger but reach a different verdict.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The Full-Trigger Rule',
      text: 'This is the single most important principle in this module: **Every part of the trigger must be satisfied by the correct answer.** If even one trigger element is missing, the answer is wrong — no matter how closely the scenario resembles the principle. This is where students lose points: they see a strong match on most of the trigger and stop checking.',
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
          'IF [trigger], THEN [verdict]. The most common structure. Multiple trigger elements are often joined by AND.',
          '"If an employee is terminated without cause AND has been employed for more than one year, the employer must provide severance pay."',
        ],
        [
          '**Definitional Criterion**',
          'X counts as / qualifies as Y when [features are present]. Establishes category membership.',
          '"An action qualifies as negligent when the actor fails to exercise the care that a reasonable person would exercise."',
        ],
        [
          '**Ethical Guideline**',
          'It is right/wrong/permissible/impermissible to [action] when [circumstances]. Makes a moral verdict contingent on a specific trigger.',
          '"It is wrong to break a promise unless keeping the promise would cause serious harm to an innocent party."',
        ],
        [
          '**Causal Principle**',
          '[Factor] causes / leads to / produces [outcome] when [conditions]. Describes a trigger that leads to a causal verdict.',
          '"Public criticism of a policy will undermine public trust in the institution only if the criticism comes from within the institution itself."',
        ],
      ],
    },

    {
      type: 'paragraph',
      text: 'Regardless of the structural type, the decomposition process is the same: identify the trigger, identify the verdict, and then find the answer choice whose case facts bridge cleanly from one to the other.',
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
      text: 'This kind of Principle-Apply problem is about disciplined checklist matching. The best scenario must clearly satisfy the full trigger or clearly fail one trigger element and reach the matching negative verdict.',
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Decompose the Principle' },
    { type: 'paragraph', text: 'The editorial states: a regulation is **justified** only if two trigger elements are met:' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Trigger element 1:** The regulation addresses a clear harm to the public.',
        '**Trigger element 2:** The regulation does not impose a burden on individuals that outweighs the harm it prevents.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The verdict is that the regulation is **justified**. Notice the "only if" — this means both trigger elements are *necessary*. If either trigger element fails, the regulation is *not* justified. For a scenario to correctly apply this principle, it must either (a) show both trigger elements met and conclude "justified," or (b) show at least one trigger element failed and conclude "not justified."',
    },

    { type: 'h4', text: 'Step 2: Evaluate Each Answer' },
    {
      type: 'paragraph',
      text: 'The cleanest application is the one whose case facts bridge both prongs explicitly: the regulation addresses a clear public harm, and its burden is obviously modest relative to the harm avoided. A seat-belt rule is a good model because the public harm is direct and the burden is minor. By contrast, scenarios that skip the weighing, change the standard to public voting or policy alternatives, or rely on a stretched definition of public harm do not bridge cleanly to the verdict.',
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Principle-Apply Foundations — At a Glance' },
        {
          type: 'table',
          headers: ['Concept', 'Key Distinction'],
          rows: [
            ['**Apply vs Strengthen direction**', 'Apply: you have the *law*, find the *case*. Strengthen: you have the *case*, find the *law*. Always check whether the stimulus contains the rule or the argument.'],
            ['**Full-trigger rule**', 'Every part of the trigger must be satisfied. If even one element is missing, the answer is wrong — no matter how close the overall match.'],
            ['**Contrapositive validity**', 'When the principle uses necessary-condition language ("only if," "only when"), the contrapositive is always a valid application. Write it immediately.'],
          ],
        },
        { type: 'h4', text: 'Common Principle Structures' },
        {
          type: 'table',
          headers: ['Structure', 'Form', 'Example'],
          rows: [
            ['**Conditional**', 'IF [trigger] THEN [verdict]', '"If an employee is terminated without cause and has been employed > 1 year, severance is required."'],
            ['**Definitional**', 'X qualifies as Y when [features]', '"An action is negligent when the actor fails to exercise reasonable care."'],
            ['**Ethical**', 'It is right/wrong to [action] when [circumstances]', '"It is wrong to break a promise unless keeping it causes serious harm."'],
            ['**Causal**', '[Factor] produces [outcome] when [conditions]', '"Public criticism undermines trust only if it comes from within the institution."'],
          ],
        },
        {
          type: 'paragraph',
          text: '**Walkthrough:** Principle: "A regulation is justified only if it addresses a clear public harm and does not impose a burden that outweighs the harm prevented." Trigger elements: (1) addresses clear public harm, (2) burden does not outweigh harm. The correct answer must show both elements met (verdict: justified) or at least one element failed (verdict: not justified).',
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Three Things to Remember',
          text: '1. Treat the principle as a checklist — decompose trigger elements and score each answer against them.\n2. Write the contrapositive immediately when you see "only if," "only when," or "requires."\n3. Wrong answers fail by one detail: a missing qualifier, a wrong verdict, or a reversed direction.',
        },
      ],
    },
  },
};
