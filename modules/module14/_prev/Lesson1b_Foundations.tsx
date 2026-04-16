import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '14-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Principle-Generalization: Core Concepts' },
    {
      type: 'paragraph',
      text: 'This lesson covers the foundational theory behind Principle-Generalization questions: how they compare to the other principle question types, what the abstraction skill really involves, the recurring generalization categories the LSAT draws from, how to read the stimulus as a case study, and the criteria that separate the correct principle from attractive traps.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Three Principle Question Types' },
    {
      type: 'paragraph',
      text: 'Principle-Generalization is one of three principle question types on the LSAT. Each type tests a different direction of reasoning between abstract rules and concrete cases. Understanding all three prevents you from accidentally solving the wrong question type.',
    },
    {
      type: 'table',
      headers: [
        'Feature',
        'Principle: Strengthen (Module 13)',
        'Principle-Apply (Module 14)',
        'Principle-Generalization (This Module)',
      ],
      rows: [
        [
          'What the stimulus contains',
          'A **specific argument** (evidence \u2192 conclusion)',
          'A **general principle** (the rule itself)',
          'A **specific scenario** (a case study or anecdote)',
        ],
        [
          'What the answer provides',
          'A **general rule** that justifies the argument',
          'A **specific scenario** that matches the rule',
          'A **general rule** that the scenario exemplifies',
        ],
        [
          'Direction of reasoning',
          '**Concrete \u2192 Abstract** (case to rule, to *strengthen*)',
          '**Abstract \u2192 Concrete** (rule to case)',
          '**Concrete \u2192 Abstract** (case to rule, to *describe*)',
        ],
        [
          'Your primary task',
          'Find the rule that bridges the logical gap',
          "Check whether facts satisfy the rule's conditions",
          'Strip away specifics to find the underlying pattern',
        ],
        [
          'Key skill tested',
          'Gap identification + abstraction',
          'Precision \u2014 decomposing and matching conditions',
          'Abstraction \u2014 seeing the universal in the particular',
        ],
        [
          'The answer must...',
          '...make the conclusion more defensible',
          '...satisfy every condition of the principle',
          '...be true BECAUSE OF the stimulus, not just consistent with it',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'The critical distinction between Principle: Strengthen and Principle-Generalization is subtle but important. Both move from concrete to abstract. However, in Strengthen, the stimulus is an *argument* (with a conclusion that needs support), and the principle must *justify the reasoning*. In Generalization, the stimulus is a *scenario* (often descriptive, without a formal conclusion), and the principle must *describe the pattern*. Strengthen asks "What rule makes this argument work?" Generalization asks "What rule does this situation illustrate?"',
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Abstraction Skill' },
    {
      type: 'paragraph',
      text: 'The core skill tested by Principle-Generalization is **abstraction** \u2014 the ability to strip specific details from a scenario and identify the universal pattern underneath. This is not guessing or paraphrasing. It is a precise, disciplined process of replacing particular nouns and verbs with their general categories while preserving the logical relationship between them.',
    },

    { type: 'h3', text: 'How Abstraction Works' },
    { type: 'paragraph', text: 'Consider this stimulus:' },
    {
      type: 'blockquote',
      text: '"Guppies with brightly colored spots attract more mates than dull-colored guppies, but they are also more visible to predators. In environments with few predators, brightly colored guppies thrive; in environments with many predators, dull-colored guppies predominate."',
    },
    { type: 'paragraph', text: 'To abstract this, you replace the specifics with general categories:' },
    {
      type: 'table',
      headers: ['Specific Detail', 'Abstracted Category'],
      rows: [
        ['"Guppies"', '"Organisms" or "members of a species"'],
        ['"Brightly colored spots"', '"A trait" or "a characteristic"'],
        ['"Attracting mates"', '"An advantage in one context"'],
        ['"Being visible to predators"', '"A disadvantage in another context"'],
        ['"Environments with few/many predators"', '"Different environmental conditions"'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The abstracted principle: **A single trait in an organism can be advantageous in one environmental context and disadvantageous in another, and the prevalence of that trait depends on which context dominates.**',
    },
    {
      type: 'paragraph',
      text: 'Notice what happened: the logical *structure* (a trait with dual effects, context-dependent prevalence) is preserved perfectly, but every *specific* detail (guppies, spots, mates, predators) has been replaced with a general category. This is the core of the abstraction skill.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The Replacement Test',
      text: "After you formulate your abstracted principle, check it with the **Replacement Test**: could you swap in a completely different specific example and have the principle still hold? If your principle says 'organisms with conspicuous traits face trade-offs between mating success and predation risk,' you could replace guppies with peacocks, deer, or any other species \u2014 and the principle would still apply. If the principle only works for guppies, it is not general enough.",
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Generalization Categories' },
    {
      type: 'paragraph',
      text: 'While every LSAT stimulus is unique, the principles they illustrate tend to fall into a small number of recurring categories. Recognizing these patterns gives you a head start on formulating your pre-phrase.',
    },

    {
      type: 'table',
      headers: ['Category', 'What It Captures', 'Example Principle'],
      rows: [
        [
          '**Causal Principles**',
          'A specific cause-effect relationship generalized to a pattern: X leads to Y under certain conditions.',
          '"A change in how a task is perceived can affect the quality of performance on that task."',
        ],
        [
          '**Trade-off / Dual-Effect Patterns**',
          'A single factor has both a positive and negative consequence, and the net effect depends on context.',
          '"A characteristic that is beneficial in one environment may be detrimental in a different environment."',
        ],
        [
          '**Behavioral Patterns**',
          'People (or organisms) react to certain conditions in predictable ways, often involving perception, motivation, or judgment.',
          '"People perform better when they do not believe their abilities are being evaluated."',
        ],
        [
          '**Ethical / Normative Rules**',
          'A moral judgment is generalized: certain types of actions are right or wrong under certain conditions.',
          '"An action that appears hostile may in fact be a rational response to an obstacle."',
        ],
        [
          '**Definitional Truths**',
          'Something qualifies (or fails to qualify) as a member of a category based on its characteristics.',
          '"A prediction\'s accuracy tends to increase as its specificity decreases."',
        ],
        [
          '**Practical Wisdom**',
          'A pragmatic observation about how things work in the real world \u2014 often counterintuitive.',
          '"Addressing one problem can sometimes create a new, unforeseen problem."',
        ],
        [
          '**Path Dependency / Lock-In**',
          'An early choice, default, or institutional advantage becomes self-reinforcing, making later change difficult.',
          '"Once a practice gains an early foothold, switching away from it can remain difficult even when better alternatives exist."',
        ],
        [
          '**Emergence / Whole vs Part**',
          'A whole system, group, or arrangement has a property that cannot be inferred by examining each part in isolation.',
          '"A collection can display a feature that none of its individual members displays on its own."',
        ],
      ],
    },

    {
      type: 'paragraph',
      text: 'These categories are not mutually exclusive \u2014 a single stimulus might illustrate both a causal principle and a trade-off pattern. The categories are a starting point for your pre-phrase, not a rigid classification system.',
    },
    {
      type: 'paragraph',
      text: 'Some stimuli will also sound explanatory rather than purely descriptive. The passage may tell you *why* a bias occurred or *why* a behavior persisted. Even then, the correct answer is still a **general principle** that the explanation instantiates, not a one-off story about these exact people or events.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Three Added Recognition Questions',
      text: 'When a stimulus feels unusual, ask three quick questions: **(1)** Is an early choice, default, or institutional advantage making later change harder? That points toward **Path Dependency / Lock-In**. **(2)** Is the interesting feature visible only at the level of the whole arrangement, not in the parts one at a time? That points toward **Emergence / Whole vs Part**. **(3)** Is the passage explaining why this one result happened? If so, convert that explanation into a reusable pattern rather than selecting a one-case retelling.',
    },
    {
      type: 'paragraph',
      text: 'Those three prompts do not change the module\u2019s standard. You still need a principle that the stimulus **directly demonstrates**. For Path Dependency / Lock-In, abstract the self-reinforcing structure instead of naming this exact market, institution, or technology. For Emergence / Whole vs Part, abstract the system-level property instead of describing this exact arrangement. For explanatory stimuli, abstract the recurring setup-and-result pattern instead of repeating the case history.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Stimulus as a Case Study' },
    {
      type: 'paragraph',
      text: 'In Principle-Generalization questions, the stimulus acts as your evidence. Unlike many other Logical Reasoning questions, it is often a **descriptive passage** rather than a formal argument with a conclusion. There may be no explicit thesis, no indicator words, and no logical gap to identify. Instead, you are reading a mini case study and asking: *What general lesson does this case study teach?*',
    },
    {
      type: 'paragraph',
      text: 'To find the principle, you must distill the **central dynamic** \u2014 the core relationship or mechanism that makes this case study interesting or noteworthy. Common dynamics include:',
    },
    {
      type: 'breakdown',
      labels: { title: 'Dynamic', text: 'Description' },
      items: [
        {
          title: 'Trade-Offs',
          text: 'A trait, policy, or strategy provides a benefit in one context but a disadvantage in another. The stimulus describes both sides and shows how context determines which side dominates.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Unintended Consequences',
          text: 'A solution to one problem inadvertently creates a new, different problem. The stimulus describes an action taken for a good reason that produced a bad side effect.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Perception Effects',
          text: 'How something is perceived or framed \u2014 rather than its objective characteristics \u2014 determines the outcome. The stimulus shows that changing the framing changes the result.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Causal Explanations',
          text: 'The passage explains the hidden or non-obvious reason for a specific behavior, outcome, or phenomenon. The principle captures that causal mechanism in general terms.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'Contextual Value',
          text: "Something's value, effectiveness, or desirability depends entirely on the context in which it is used or evaluated. What works in one setting fails in another.",
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'Path Dependency / Lock-In',
          text: 'An early decision or established structure narrows later options. The stimulus shows that once a path becomes entrenched, changing directions carries extra cost or friction even if a better alternative exists.',
          badge: 'Advanced',
          badgeColor: 'slate',
        },
        {
          title: 'Emergence / Whole vs Part',
          text: 'The relevant property belongs to the whole arrangement, not to any single part by itself. The stimulus teaches that system-level outcomes cannot always be read off from component-level facts.',
          badge: 'Advanced',
          badgeColor: 'slate',
        },
      ],
    },

    { type: 'h3', text: 'Principle vs. Explanation' },
    {
      type: 'paragraph',
      text: 'A recurring Module 15 trap is confusing a **principle** with an **explanation**. A principle states a reusable pattern: when one kind of setup appears, a certain kind of result can follow. An explanation merely retells why this one case happened. On Principle-Generalization questions, the correct answer must rise to the pattern level.',
    },
    {
      type: 'paragraph',
      text: 'This distinction matters especially in the newer recognition families. A Path Dependency stimulus may explain why an inferior practice persists; the right answer is not "this practice persisted because many people had already invested in it" but the broader rule that earlier adoption can lock later actors into a path. An Emergence stimulus may explain why a group, network, or arrangement has a feature none of its parts has alone; the right answer is the system-level principle, not a retelling of the particular components.',
    },
    {
      type: 'table',
      headers: ['If the answer choice...', 'Treat It As...'],
      rows: [
        [
          'States a recurring relationship that this stimulus exemplifies',
          'A live principle candidate',
        ],
        [
          'Retells why these specific people, tools, or events produced this exact result',
          'An explanation-style trap unless it is abstracted into a reusable pattern',
        ],
        [
          'Adds a recommendation, policy fix, or practical lesson beyond the evidence',
          'A normative leap, not a supported principle',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Criteria for the Correct Principle' },
    {
      type: 'paragraph',
      text: 'Not every general statement that is consistent with the stimulus is the correct answer. The correct principle must meet two strict criteria:',
    },

    { type: 'h3', text: '1. Strict Support \u2014 The Stimulus Must Prove the Principle' },
    {
      type: 'paragraph',
      text: 'You must be able to prove the principle using *only* the facts provided in the stimulus. If a principle makes a claim about "effectiveness" but the stimulus only discusses "intent," the principle is not supported. If a principle claims something "always" happens but the stimulus only shows one instance, the principle is too strong. The stimulus is your only evidence \u2014 treat it as the totality of what you know.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'The Key Rule',
      text: '**The correct answer must be true BECAUSE OF the stimulus, not just consistent with it.** Many wrong answers describe general truths that happen not to contradict the stimulus. The correct answer describes a general truth that the stimulus *specifically demonstrates*. Ask: "Does this stimulus provide direct evidence for this principle?" If the answer is "yes, the stimulus is a textbook example of this principle," you have the right answer. If the answer is "well, the stimulus doesn\'t contradict it," you have a trap.',
    },

    { type: 'h3', text: '2. Proper Strength \u2014 Watch the Force of Language' },
    {
      type: 'paragraph',
      text: 'Pay close attention to the force of the language in the answer choices. If the stimulus describes something that "can" or "sometimes" happens, an answer choice claiming it "usually" or "always" happens is too strong and therefore incorrect. Moderate language ("can," "may," "sometimes," "often") is frequently found in correct Principle-Generalization answers because the stimulus typically presents a single instance \u2014 which supports the possibility of a pattern but cannot prove its universality.',
    },
    {
      type: 'table',
      headers: ['Stimulus Shows', 'Acceptable Principle Language', 'Too Strong (Likely Wrong)'],
      rows: [
        [
          'One case where X led to Y',
          '"X can lead to Y" / "X sometimes leads to Y"',
          '"X always leads to Y" / "X necessarily leads to Y"',
        ],
        [
          'A difference between two groups',
          '"Under certain conditions, A outperforms B"',
          '"A is inherently superior to B"',
        ],
        [
          'An action that had a side effect',
          '"Actions of type X may have unintended consequences"',
          '"Actions of type X inevitably produce negative outcomes"',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    {
      type: 'paragraph',
      text: "Let's apply everything from this lesson to a complete Principle-Generalization question.",
    },
    { type: 'paragraph', text: 'Consider this illustrative case study:' },
    {
      type: 'blockquote',
      text: '"A city introduced a congestion surcharge for driving into the downtown core during peak hours, framing it as a penalty for contributing to traffic. Compliance was low and public backlash was intense. The following year, the city rebranded the same fee as a \\"congestion relief discount\\". The fee structure was identical, but compliance increased dramatically and public approval rose."',
    },
    {
      type: 'paragraph',
      text: 'The point of this example is that nothing substantive changed except the presentation. That makes it a strong test of whether you can generalize from the framing effect rather than from the policy topic.',
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Identify the Central Dynamic' },
    {
      type: 'paragraph',
      text: 'The stimulus describes a situation where the *identical* fee was framed two different ways \u2014 as a "penalty" (surcharge) and as a "benefit" (discount). The financial reality was the same. But the framing changed the outcome: low compliance \u2192 high compliance, backlash \u2192 approval. The central dynamic is: **how a policy is framed affects people\'s response to it, even when the substance is unchanged.**',
    },

    { type: 'h4', text: 'Step 2: Abstract to General Terms' },
    { type: 'paragraph', text: 'Replace specifics with general categories:' },
    {
      type: 'list',
      items: [
        '"Congestion surcharge" / "congestion relief discount" \u2192 a policy or measure',
        '"Framed as a penalty" vs. "framed as conferring a benefit" \u2192 the framing or presentation',
        '"Financial impact is the same" \u2192 identical substance',
        '"Compliance increased" \u2192 behavioral change or improved response',
      ],
    },
    {
      type: 'paragraph',
      text: '**Pre-phrase:** "People respond differently to the same policy depending on whether it is framed as a penalty or a benefit."',
    },

    { type: 'h4', text: 'Step 3: Evaluate the Choices' },
    {
      type: 'paragraph',
      text: 'The best generalization says that people respond differently to the same policy depending on whether it is framed as a gain or a loss, while holding the underlying financial effect constant. Answers that talk about congestion pricing itself, recommend how policymakers should always speak, or capture only the negative reaction miss the full dynamic of the story.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Key Principles' },
    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '**1. Generalization is the reverse of Application.** Apply gives you the rule and asks for the case. Generalization gives you the case and asks for the rule. The direction change means you need abstraction skills, not condition-matching skills.\n\n**2. The correct answer must be true BECAUSE OF the stimulus, not just consistent with it.** Many wrong answers are true statements that the stimulus does not contradict. The correct answer is a statement that the stimulus directly and specifically demonstrates. Ask: "Is this stimulus a textbook example of this principle?"\n\n**3. Strip specifics, preserve structure.** Replace proper nouns with general categories, specific verbs with abstract ones, and particular contexts with universal ones \u2014 but preserve the logical relationships between them. The principle must capture the same *dynamic* as the stimulus, just at a higher level of abstraction.\n\n**4. Watch the force of language.** A single case study supports "can" and "sometimes" but not "always" and "necessarily." Moderate language is a hallmark of correct Principle-Generalization answers.\n\n**5. Distinguish principle from explanation.** If an answer merely retells why this one case happened, it is still too concrete. The correct answer states a reusable pattern that this case exemplifies.\n\n**6. Pre-phrase the "moral of the story."** Before reading the answer choices, state the central dynamic of the stimulus in abstract terms. This pre-phrase is your most powerful tool against trap answers.',
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Principle-Apply Foundations — At a Glance' },
        {
          type: 'paragraph',
          text: 'Principle-Apply gives you the general rule and asks you to find the specific case that fits. Seven recurring generalization families appear in the principles you must apply.',
        },
        {
          type: 'table',
          headers: ['Family', 'What the Principle States', 'Signal in Stimulus', 'Quick Example', 'Matching Strategy', 'Common Trap', 'Key Test'],
          rows: [
            [
              '**Causal**',
              'If X causes Y, then Z should/should not occur',
              'Cause-and-effect language, "leads to," "results in"',
              '"Any policy that reduces emissions should be adopted."',
              'Verify the causal link fires in the answer scenario',
              'Answer where the cause is present but the effect is different',
              'Does the answer\'s cause match the principle\'s cause?',
            ],
            [
              '**Trade-off / Dual-Effect**',
              'When a factor has both positive and negative effects, weigh them by context',
              '"On the one hand... on the other hand"',
              '"A measure is justified only if its benefits outweigh its costs."',
              'Confirm both effects are present and the weighing matches',
              'Answer that shows only one side of the trade-off',
              'Are both the benefit and cost present in the scenario?',
            ],
            [
              '**Behavioral**',
              'People respond predictably to certain conditions',
              'Framing, perception, incentive language',
              '"People work harder when they believe their efforts are noticed."',
              'Check that the behavioral condition is met and the response follows',
              'Answer where the condition is met but a different behavior occurs',
              'Is the predicted response actually described?',
            ],
            [
              '**Ethical / Normative**',
              'Certain actions are right or wrong under specified conditions',
              '"Should," "ought," "obligated," "permitted"',
              '"One should not criticize others for faults one possesses oneself."',
              'Verify the moral condition and the corresponding judgment',
              'Answer where the judgment is correct but the condition is not met',
              'Does the actor meet the ethical condition?',
            ],
            [
              '**Definitional**',
              'Something qualifies as X if and only if it meets criteria A, B, C',
              '"Counts as," "is classified as," "qualifies as"',
              '"A sculpture is art only if it was created with aesthetic intent."',
              'Check each definitional criterion against the specific case',
              'Answer that meets some criteria but not all',
              'Has every required criterion been satisfied?',
            ],
            [
              '**Conditional / Rule-Based**',
              'If condition A, then consequence B',
              '"If... then," "whenever," "unless," "only if"',
              '"A contract is void if either party was coerced."',
              'Confirm the antecedent fires (or the contrapositive applies)',
              'Answer where the consequent is present but the antecedent was never triggered',
              'Does the triggering condition actually hold?',
            ],
            [
              '**Practical Wisdom**',
              'A pragmatic observation about unintended consequences, path dependency, or emergence',
              'Counterintuitive outcomes, system-level language',
              '"Addressing one problem can create a new, unforeseen problem."',
              'Verify the practical pattern plays out in the scenario',
              'Answer that describes the right topic but the wrong pattern',
              'Does the scenario instantiate the same mechanism?',
            ],
          ],
        },
        {
          type: 'blockquote',
          text: '"Principle: A government should not restrict any activity unless that activity poses a demonstrable risk to public safety." — Apply: decompose into trigger (restriction of an activity) and condition (demonstrable public-safety risk). The correct answer must fire the trigger AND satisfy the condition.',
        },
        { type: 'h4', text: 'Key Takeaways' },
        {
          type: 'list',
          items: [
            'Decompose the principle into trigger + conditions + result before reading answers.',
            'Every condition must be satisfied -- a partial match is a trap.',
            'Check the direction: Principle-Apply goes abstract to concrete, not concrete to abstract.',
          ],
        },
      ],
    },
  },
};
