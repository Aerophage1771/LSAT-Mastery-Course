import { Lesson } from '../../types';

export const Lesson_AdvancedConcepts: Lesson = {
  id: '17-adv',
  title: 'Advanced Concepts: Difficult Must Be True Questions',
  content: [
    {
      "type": "h2",
      "text": "Advanced Concepts: Difficult Must Be True Questions"
    },
    {
      "type": "paragraph",
      "text": "You have now mastered the core methodology for solving Must Be True questions. However, some questions are designed to push your reasoning to its absolute limit. The difficulty on these advanced questions doesn't come from changing the rules of the game, but from increasing the complexity of the stimulus, the answer choices, and the traps. This section will prepare you for these challenges."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "1. Stimulus Complexity: The Logic Gets Denser"
    },
    {
      "type": "paragraph",
      "text": "On harder questions, the stimulus is not just a simple set of facts; it's a dense logical system. The deductions required are often multi-layered and less obvious."
    },
    {
      "type": "list",
      "items": [
        "**Formal Logic Hybrids:** The stimulus may combine different types of conditional logic. Instead of a simple `A→B→C` chain, you might face a combination of disjunctions (`either/or`), complex necessary conditions (`only if`), and negations. To solve these, you must be able to diagram and synthesize multiple rule types at once.",
        "**Complex Quantifier Reasoning:** The logic can move beyond a simple \"Some + All\" combination. A difficult question might require you to reconcile two \"most\" statements about the same population, combine a \"most\" statement with the contrapositive of a conditional rule, or resolve a statistical paradox where group averages and overall averages seem to conflict (weighted averages).",
        "**Implicit Premises & Proof by Contradiction:** The hardest stimuli may rely on information that is not explicitly stated but is logically necessary for the situation to make sense (e.g., \"a single event cannot happen at two different times\"). In other cases, the only way to prove a conclusion is to demonstrate that its opposite leads to a logical contradiction, a technique known as *proof by contradiction*."
      ]
    },
    {
      "type": "h3",
      "text": "2. Answer Choice Wording: The Abstraction Challenge"
    },
    {
      "type": "paragraph",
      "text": "Often, the difficulty lies not in the stimulus but in the answer choices. You may derive the correct deduction, only to find that it is expressed in highly abstract or convoluted language."
    },
    {
      "type": "list",
      "items": [
        "**Abstract Phrasing:** The correct answer will describe the concrete deduction in formal, logical terms. For example, instead of saying, \"The city's justification for the law is flawed,\" an answer choice might state, \"The government's stated positions are logically inconsistent.\" You must be able to translate your concrete understanding into its abstract equivalent.",
        "**Conditional Answers:** A particularly tricky format is an answer choice that is itself an \"if-then\" statement. To test this type of answer, you must: (1) temporarily assume the \"if\" clause is true, (2) combine that assumption with the facts from the stimulus, and (3) see if this combination logically forces the \"then\" clause to be true. If it does, the conditional statement is valid."
      ]
    },
    {
      "type": "h3",
      "text": "3. The Trap Answers: Sophisticated Illusions"
    },
    {
      "type": "paragraph",
      "text": "On advanced questions, the incorrect answer choices are engineered to be exceptionally tempting by exploiting subtle reasoning errors."
    },
    {
      "type": "list",
      "items": [
        "**The \"Highly Plausible\" Inference:** This is the most dangerous trap. It's a statement that is almost certainly true in the real world and seems to follow from the stimulus, but it is not a 100% logical certainty. These traps test your discipline to rely *only* on the information given and to resist making common-sense assumptions.",
        "**The \"Almost Right\" Quantifier:** The trap will be identical in substance to a valid deduction but will get the quantifier wrong. For example, it might state that \"**most** X are Y\" when the stimulus only supports that \"**some** X are Y.\" This tests your precision with quantifier words.",
        "**The Subtle Scope Shift:** This trap applies a rule from the stimulus to a group that is slightly different from the one the rule was intended for. For example, a rule about \"horror stories about monstrous beasts\" might be incorrectly applied in an answer choice to \"all descriptions of monstrous beasts,\" which could include non-horror genres. This tests your attention to the precise scope of the premises."
      ]
    }
  ],
};
