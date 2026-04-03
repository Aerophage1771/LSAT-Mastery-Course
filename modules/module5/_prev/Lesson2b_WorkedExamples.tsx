import { Lesson } from '../../types';

export const Lesson2b_WorkedExamples: Lesson = {
  id: '5-2b',
  title: 'Worked Examples',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Flaw question." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"Editorial: The city council recently voted to ban all food trucks from operating within the downtown area, arguing that food trucks create litter and traffic congestion. But this ban is clearly unjustified, because several food truck owners have stated that they always clean up after themselves and have never received a littering citation."',
    },
    {
      type: 'paragraph',
      text: 'This scenario is useful because it contains two real vulnerabilities at once: the editorial relies on testimony from only some owners, and it answers only the litter concern while leaving traffic congestion untouched.',
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },
    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        '**Step 1 — Identify Conclusion & Premises:**\n• **Conclusion:** The ban is clearly unjustified.\n• **Premise 1:** The council cited litter and traffic congestion as reasons.\n• **Premise 2:** Several food truck owners say they clean up and have never received littering citations.\n• **Premise 3 (implicit):** Since the litter claim is disputed, the ban is unjustified.',
        '**Step 2 — Find the Gap:**\nThe editorial uses testimony from *some* food truck owners to dismiss the ban on *all* food trucks. Several problems: (1) "several owners" is not all owners — maybe others do litter; (2) the editorial only addresses the litter concern but ignores the traffic congestion concern; (3) the owners are a biased source (self-interested). The gap: the evidence is both **unrepresentative** and **incomplete**.',
        '**Step 3 — Prephrase:**\nThe argument generalizes from a few food truck owners to all of them, and it only addresses one of the two stated reasons for the ban. My prephrase: "The argument uses evidence from some owners to make a claim about all food trucks, and ignores the traffic congestion reason."',
        '**Step 4 — Match to Answer:**\nScan for an answer that describes a sampling/generalization flaw or a failure to address all reasons.',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'What the Method Reveals',
      text: "This editorial is weak for two independent reasons. First, it generalizes from a few self-interested owners to the entire food-truck population. Second, it answers only one of the council's stated concerns. That combination is a useful reminder that Flaw arguments can be vulnerable in more than one place, even when one defect does the most structural damage.",
    },

    { type: 'hr' },

    { type: 'h2', text: 'Prephrasing Practice' },
    {
      type: 'paragraph',
      text: 'Prephrasing is the skill that separates good Flaw solvers from great ones. Here are three argument snippets — practice naming the flaw before reading the answer:',
    },

    { type: 'h4', text: 'Snippet 1' },
    {
      type: 'blockquote',
      text: '"If a country has a strong military, it will be safe from invasion. Country X is safe from invasion. Therefore, Country X must have a strong military."',
    },
    {
      type: 'accordion',
      title: 'Reveal the Flaw',
      content:
        '**Conditional Logic Flaw — Affirming the Consequent.** The argument reverses the conditional. Knowing that A → B and that B is true does NOT mean A is true. Country X might be safe for other reasons (geography, alliances, etc.).',
    },

    { type: 'h4', text: 'Snippet 2' },
    {
      type: 'blockquote',
      text: '"No one has proven that the new pesticide harms honeybees. Therefore, the pesticide is safe for honeybees."',
    },
    {
      type: 'accordion',
      title: 'Reveal the Flaw',
      content:
        '**Argument from Ignorance (Absence of Evidence).** The absence of proof that the pesticide is harmful is not proof that it is safe. Perhaps no studies have been conducted, or the effects take years to manifest.',
    },

    { type: 'h4', text: 'Snippet 3' },
    {
      type: 'blockquote',
      text: '"Professor Lee argues that the university should require a foreign language course. But Professor Lee has never traveled abroad and speaks only English. Clearly, the foreign language requirement is a bad idea."',
    },
    {
      type: 'accordion',
      title: 'Reveal the Flaw',
      content:
        "**Ad Hominem (Source Attack).** The argument rejects the proposal by attacking Professor Lee's personal qualifications rather than the merits of the foreign language requirement itself. Whether Lee speaks a foreign language is irrelevant to whether the requirement is good policy.",
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated',
      content: [
        { type: 'h3', text: 'Annotated Worked Example' },
        {
          type: 'paragraph',
          text: 'Each sentence of the stimulus is annotated with its structural role and the reasoning move it reveals.',
        },
        {
          type: 'table',
          headers: ['Sentence', 'Role', 'What to Notice'],
          rows: [
            [
              '"The city council recently voted to ban all food trucks from operating within the downtown area, arguing that food trucks create litter and traffic congestion."',
              '**Background + Opposing View**',
              'The council gives *two* reasons for the ban: litter AND traffic congestion. Both must be addressed to defeat the ban.',
            ],
            [
              '"But this ban is clearly unjustified..."',
              '**Main Conclusion**',
              '"Clearly unjustified" is strong evaluative language \u2014 the editorial claims the ban fails entirely.',
            ],
            [
              '"...because several food truck owners have stated that they always clean up after themselves and have never received a littering citation."',
              '**Premise (evidence)**',
              'Only addresses litter, not traffic. Only cites *some* owners (biased, self-interested source). Two gaps in one sentence.',
            ],
          ],
        },
        { type: 'h3', text: 'Prephrasing Practice' },
        {
          type: 'accordion',
          title: 'Snippet 1: "If a country has a strong military, it will be safe from invasion. Country X is safe from invasion. Therefore, Country X must have a strong military."',
          content:
            '**Conditional Logic Flaw \u2014 Affirming the Consequent.** The argument reverses the conditional. Knowing that A \u2192 B and that B is true does NOT mean A is true. Country X might be safe for other reasons (geography, alliances, etc.).',
        },
        {
          type: 'accordion',
          title: 'Snippet 2: "No one has proven that the new pesticide harms honeybees. Therefore, the pesticide is safe for honeybees."',
          content:
            '**Argument from Ignorance (Absence of Evidence).** The absence of proof that the pesticide is harmful is not proof that it is safe. Perhaps no studies have been conducted, or the effects take years to manifest.',
        },
        {
          type: 'accordion',
          title: 'Snippet 3: "Professor Lee argues that the university should require a foreign language course. But Professor Lee has never traveled abroad and speaks only English. Clearly, the foreign language requirement is a bad idea."',
          content:
            "**Ad Hominem (Source Attack).** The argument rejects the proposal by attacking Professor Lee's personal qualifications rather than the merits of the foreign language requirement itself.",
        },
        { type: 'h3', text: 'Common Traps' },
        {
          type: 'table',
          headers: ['Trap', 'What It Does', 'How to Catch It'],
          rows: [
            ['**Out of Scope**', 'Raises a valid real-world concern unrelated to the logical gap', 'Ask: does this affect the *reasoning structure*?'],
            ['**Wrong Flaw**', 'Names a real flaw type the argument did not commit', 'Point to the exact sentences where the error occurs'],
            ['**Premise Attack**', 'Challenges whether a premise is true', 'Flaw is in the inference, never in the facts'],
            ['**Reverse Logic**', 'Gets the direction of the error backward (e.g., reversal vs. negation)', 'Diagram the conditional or causal arrow'],
            ['**Describes Method, Not Flaw**', 'Accurately describes a technique without saying why it fails', 'Correct answer must identify an *error*'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Annotate sentence by sentence, prephrase before reading choices, and verify that every clause in the answer matches the actual argument.**',
        },
      ],
    },
  },
};
