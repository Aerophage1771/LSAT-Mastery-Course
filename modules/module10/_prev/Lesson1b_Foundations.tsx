import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '10-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Sufficient Assumption vs. Necessary Assumption' },
    {
      type: 'paragraph',
      text: 'Students frequently confuse Sufficient Assumption and Necessary Assumption because both question types deal with unstated assumptions. However, the two question types ask fundamentally different things. Understanding the distinction is critical to accuracy on both.',
    },
    {
      type: 'table',
      headers: ['Feature', 'Sufficient Assumption', 'Necessary Assumption'],
      rows: [
        [
          'What you are looking for',
          'A premise that **guarantees** the conclusion (makes it 100% certain)',
          'A premise that is **required** for the conclusion (without it, the argument falls apart)',
        ],
        [
          'Degree of support',
          'Complete \u2014 the conclusion must be logically valid once you add the answer',
          'Minimal \u2014 the answer only needs to be something the argument cannot survive without',
        ],
        [
          'Answer strength',
          'Often **broad or overly strong** \u2014 a powerful rule that sweeps in the conclusion',
          'Often **modest or narrow** \u2014 just enough to keep the argument alive',
        ],
        [
          'Key test for the correct answer',
          '**Premises + Answer \u2192 Conclusion is guaranteed**',
          '**Deny the answer \u2192 Argument collapses** (the Negation Test)',
        ],
        [
          'Stem language',
          '"follows logically if assumed" / "enables the conclusion to be properly drawn"',
          '"depends on" / "requires" / "the argument assumes"',
        ],
        [
          'Common trap',
          'Picking an answer that is necessary but not strong enough to guarantee the conclusion',
          'Picking an answer that is sufficient but too strong \u2014 goes beyond what the argument requires',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Think of it this way: a **Sufficient Assumption** is like a steel beam that fully bridges a canyon \u2014 once you place it, you can walk across with absolute certainty. A **Necessary Assumption** is like one of many support cables \u2014 if you remove it, the bridge collapses, but having it alone does not guarantee a safe crossing.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The Relationship Between SA and NA',
      text: 'Every sufficient assumption is also a necessary assumption (if the correct SA answer were denied, the argument would certainly fail). But not every necessary assumption is sufficient \u2014 a necessary assumption may be too weak to guarantee the conclusion on its own. On difficult SA questions, test-takers often select an answer that is necessary but not sufficient. Always check: does the answer + premises = conclusion is 100% guaranteed?',
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Logical Gap' },
    {
      type: 'paragraph',
      text: "Every Sufficient Assumption question is built on a **provable logical gap** \u2014 a disconnect between the argument's premises and its conclusion that can be closed by a single, precisely worded new premise. This gap is not a matter of probability or opinion; it is a structural flaw in the argument's logic.",
    },
    {
      type: 'paragraph',
      text: 'Your first task is always to find this gap. The gap in SA questions tends to be more precise and identifiable than in Strengthen or Weaken questions. This is by design: because the correct answer must *guarantee* the conclusion, the gap must be narrow enough to be closed by one statement.',
    },
    { type: 'paragraph', text: 'The gap typically takes one of these forms:' },
    {
      type: 'list',
      items: [
        '**A new concept in the conclusion:** The conclusion introduces a term or idea that does not appear in the premises. The gap is the missing link between the premise concepts and this new concept.',
        '**A broken conditional chain:** The premises establish a sequence of conditional relationships (A \u2192 B, B \u2192 C) but the conclusion requires a step that is missing from the chain.',
        '**An unjustified scope expansion:** The premises discuss a specific set of rules or conditions, but the conclusion makes a broader claim that goes beyond those rules.',
        '**An unstated classification:** The conclusion places something into a category, but the premises never establish the criteria for that category.',
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'The Sufficient Assumption Equation',
      text: 'The test for the correct answer is absolute and can be expressed as a formula:\n\n**Premise(s) + Correct Answer = Conclusion is 100% proven**\n\nWhen you add the correct answer to the argument, the conclusion is guaranteed to be true. There should be no room for doubt or alternative possibilities. If you can imagine any scenario where the premises plus the answer are true but the conclusion is still false, the answer is not sufficient.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common SA Patterns' },
    {
      type: 'paragraph',
      text: 'While every SA question has a unique argument, the logical gaps tend to fall into a small number of recurring structural patterns. Learning to recognize these patterns gives you a head start on identifying the gap and prephrasing the correct answer.',
    },
    {
      type: 'table',
      headers: ['Pattern', 'How It Works', 'What the Correct Answer Does'],
      rows: [
        [
          '**The Concept Link**',
          'The premises discuss concept A, but the conclusion introduces concept B. There is no stated connection between A and B.',
          'Provides a rule linking A to B (e.g., "All things that are A are also B").',
        ],
        [
          '**The Conditional Chain**',
          'The premises establish partial conditional relationships (A \u2192 B, C \u2192 D), but the conclusion requires a complete chain (A \u2192 D). One link is missing.',
          'Supplies the missing link (e.g., B \u2192 C) to complete the chain from A to D.',
        ],
        [
          '**The General Principle**',
          'The premises describe a specific situation, and the conclusion draws a broad normative or prescriptive judgment about it.',
          'Provides a general principle that, when applied to the specific facts, yields the conclusion (e.g., "Any action that has property X should be classified as Y").',
        ],
        [
          '**The Exclusivity Rule**',
          'The premises show that certain conditions from a list do not apply, and the conclusion states that the entire category does not apply.',
          'Declares the listed conditions to be exhaustive \u2014 "These are the only reasons that could apply."',
        ],
        [
          '**The Binary Assumption**',
          'The premises prove something is "not X," and the conclusion asserts it must be "Y." The gap is the assumption that X and Y are the only two possibilities.',
          'Establishes a strict binary: "If something is not X, it must be Y" \u2014 eliminating any third option.',
        ],
        [
          '**Mutually Exclusive Categories**',
          'The premises show something belongs to Category A, and the conclusion states it cannot belong to Category B.',
          'Declares A and B to be mutually exclusive: "Nothing can be both A and B."',
        ],
        [
          '**Causal Sufficient Assumption**',
          'The stimulus already gives a causal claim or a causal chain, but the conclusion assumes that the case at hand actually satisfies the missing causal trigger.',
          'Supplies the one missing causal link, activation fact, or condition that makes the stated causal reasoning prove the conclusion.',
        ],
        [
          '**Existing Rule, Missing Trigger**',
          'The premises already contain the governing rule, but the conclusion quietly assumes that the case satisfies that rule.',
          'Provides the specific missing fact that turns the stated rule on in this case.',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Each of these patterns is explored in depth in the drill lessons that follow. For now, notice that the correct SA answer tends to be a **rule, definition, or principle** \u2014 it is a broad, powerful statement that eliminates possibilities and forces the conclusion to follow.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Two High-Difficulty Looks To Expect',
      text: 'Some of the hardest SA questions feel harder only because the missing link is narrower than students expect. If the stimulus already gives you the main rule, look for the fact that **triggers** that rule. And if the argument is causal, do not settle for an answer that merely helps the conclusion sound plausible. The answer still has to make the stated causal reasoning **guarantee** the conclusion.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    {
      type: 'paragraph',
      text: "Let's apply everything from this lesson to a complete Sufficient Assumption question.",
    },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"Every employee who completes the leadership training program is eligible for a management position. Sandra has been offered a management position. Therefore, Sandra must have completed the leadership training program."',
    },
    {
      type: 'paragraph',
      text: 'This is a clean Sufficient Assumption example because the gap is purely structural. The argument has one conditional rule, then it tries to reverse that rule without permission.',
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    {
      type: 'paragraph',
      text: '**Conclusion:** Sandra must have completed the leadership training program.\n\n**Premises:**\n1. Every employee who completes the leadership training program is eligible for a management position. (Completes Program \u2192 Eligible for Management)\n2. Sandra has been offered a management position.',
    },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: "The premise tells us: **Completes Program \u2192 Eligible.** The conclusion asserts: **Sandra is eligible \u2192 Sandra completed the program.** This is a classic **Mistaken Reversal**. The premise says completing the program is sufficient for eligibility, but the conclusion treats it as *necessary* for eligibility. The gap is: could Sandra be eligible *without* completing the program? Maybe there are other paths to eligibility that the argument hasn't considered.",
    },

    { type: 'h4', text: 'Step 3: Prephrase' },
    {
      type: 'paragraph',
      text: 'To guarantee the conclusion, we need a statement that makes completing the program the *only* way to be eligible. We need the reverse of the given conditional: **Eligible \u2192 Completed Program.** In other words, "only people who completed the program are eligible."',
    },

    { type: 'h4', text: 'Step 4: Confirm the Missing Rule' },
    {
      type: 'paragraph',
      text: "To make the conclusion certain, you must add the reverse link the argument improperly assumed: if someone is eligible for a management position, that person completed the program. Once that bridge is in place, Sandra's eligibility forces the conclusion. Any fact about tenure, rigor, or who else received offers leaves the logical gap untouched.",
    },

    { type: 'hr' },

    { type: 'h2', text: 'Key Principles' },
    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '**1. The correct answer + premises = conclusion follows with certainty.** This is the defining test of a Sufficient Assumption. If you can imagine any scenario where the premises and the answer are true but the conclusion is false, the answer is not sufficient.\n\n**2. SA answers tend to be strong, broad statements.** Don\'t shy away from answers that seem "too strong." Unlike Necessary Assumption answers (which tend to be modest), SA answers are powerful rules or principles that force the conclusion to follow. Overly cautious answers are usually wrong.\n\n**3. Find the gap before reading the choices.** SA questions reward precise prephrasing. Identify the disconnect between the premises and the conclusion, articulate what kind of statement would bridge it, and then scan the choices. The correct answer should match your prephrase.\n\n**4. Watch for conditional logic.** Many SA questions involve conditional chains. If the argument uses "if," "only if," "all," "every," or "must," diagram the relationships. The correct answer often supplies a missing link in the chain or provides the reverse of a given conditional.\n\n**5. Know the difference between SA and NA.** A sufficient assumption *guarantees* the conclusion. A necessary assumption is *required* for the conclusion but may not be strong enough to guarantee it. On SA questions, don\'t settle for an answer that merely "helps" \u2014 demand one that *proves.*\n\n**6. Recognize recurring patterns.** Most SA gaps fall into a handful of structural categories: concept links, conditional chains, exclusivity rules, binary assumptions, general principles, and mutually exclusive categories. Learning these patterns accelerates your gap identification.',
    },
  ],
};
