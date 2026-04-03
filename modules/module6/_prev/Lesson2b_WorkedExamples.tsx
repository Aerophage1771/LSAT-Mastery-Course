import { Lesson } from '../../types';

export const Lesson2b_WorkedExamples: Lesson = {
  id: '6-2b',
  title: 'Worked Examples',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Common Wrong Answer Patterns' },
    {
      type: 'paragraph',
      text: 'The LSAT uses predictable trap answer designs in Parallel Flaw questions. Learning to recognize these patterns helps you eliminate quickly:',
    },
    {
      type: 'table',
      headers: ['Wrong Answer Pattern', "Why It's Wrong", 'How to Spot It'],
      rows: [
        [
          '**Valid Argument**',
          'Contains no flaw at all — the conclusion follows from the premises',
          'Test the logic: if the premises are true, must the conclusion be true? If yes, eliminate.',
        ],
        [
          '**Adjacent Flaw**',
          'Commits a *similar* but distinct error (e.g., Mistaken Negation instead of Mistaken Reversal)',
          'Apply your blueprint precisely. Both are conditional errors, but the direction of the error differs.',
        ],
        [
          '**Topic Match**',
          'Shares the same subject matter as the stimulus but uses different (or valid) logic',
          'Ignore the topic entirely. Two arguments about "law" can have completely different logical structures.',
        ],
        [
          '**Reversed Direction**',
          'Commits the mirror image of the flaw (e.g., Division instead of Composition)',
          'Track the direction: Small → Big or Big → Small? The direction must match.',
        ],
        [
          '**Partial Flaw Match**',
          'Contains one flaw that matches but also contains a second, different flaw',
          'If the stimulus has one flaw, the correct answer should have exactly one matching flaw.',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Method Snapshot' },
    {
      type: 'paragraph',
      text: 'Here is what the method looks like when you apply it to a typical correlation-to-causation Parallel Flaw stimulus, without needing a full standalone practice question in this lesson.',
    },

    { type: 'h3', text: 'Applying the 3-Step Method' },
    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        '**Step 1 — Identify the Flaw:**\nSuppose an argument says that cities with more public parks tend to have lower crime rates, then concludes that adding parks will reduce crime. The flaw is a **causal confusion**: the author treats a correlation as proof of causation and ignores alternative explanations such as wealth, tax base, policing, or population density.',
        '**Step 2 — Abstract the Pattern:**\n**Blueprint:** X and Y tend to appear together. Therefore X causes Y. Therefore, we should do more X to get more Y. Once written this way, the content drops out and the flawed move becomes much easier to recognize.',
        '**Step 3 — Match the Error:**\nWhen you go to the answer choices, ignore topic overlap and ask only whether the choice repeats the same sequence: correlation first, causal leap second, recommendation last. Eliminate choices that merely discuss the issue, supply an alternative explanation, or treat the causal link as already established.',
      ],
    },

    { type: 'h3', text: 'What the Right Match Must Do' },
    {
      type: 'breakdown',
      labels: { title: 'Requirement', text: 'What You Need to See' },
      items: [
        {
          title: 'Same flaw category',
          text: 'The answer must commit the same **correlation → causation** error, not a nearby flaw like mistaken negation, composition, or a missing comparison argument.',
          badge: 'Required',
          badgeColor: 'green',
        },
        {
          title: 'Same logical direction',
          text: 'The choice must move from evidence about co-occurrence to a causal conclusion, not from a causal claim to criticism or from a recommendation to evidence.',
          badge: 'Required',
          badgeColor: 'green',
        },
        {
          title: 'Same argumentative role',
          text: 'The choice must **commit** the flaw. If it explains why the causal inference is weak, it is not parallel even if it mentions the same concepts.',
          badge: 'Required',
          badgeColor: 'green',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Trap Pattern to Watch',
      text: 'A common wrong answer talks about the same type of evidence but then **critiques** the causal move instead of making it. Another common trap states the causal link as an accepted fact rather than inferring it from the correlation. Both miss the structure you are trying to match.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Quick Reference: The Steps' },
    {
      type: 'process',
      title: 'The 3-Step Method Summary',
      steps: [
        '**Diagnose:** Find the conclusion and premises. Name the specific flaw. Be precise — "Mistaken Negation" beats "bad logic."',
        '**Abstract:** Build a blueprint that captures the flawed move in variable form. Strip away the topic.',
        '**Match:** Scan choices using the Flaw Matching Checklist. Eliminate valid arguments first. Eliminate wrong flaw types second. Confirm the final match by blueprint verification.',
      ],
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated',
      content: [
        { type: 'h3', text: 'Annotated Stimulus' },
        {
          type: 'blockquote',
          text: '"All of the books on the bestseller list are well-written. This novel is clearly well-written, so it must be on the bestseller list."',
        },
        { type: 'h4', text: 'Structural Annotation' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Role' },
          items: [
            {
              title: '"All of the books on the bestseller list are well-written."',
              text: 'Universal conditional rule: All A are B (all bestseller books are well-written).',
              badge: 'Premise',
              badgeColor: 'blue',
            },
            {
              title: '"This novel is clearly well-written."',
              text: 'Observes the consequent for a specific case: X is B.',
              badge: 'Premise',
              badgeColor: 'blue',
            },
            {
              title: '"...so it must be on the bestseller list."',
              text: 'Concludes the antecedent: X is A. This is the flawed leap.',
              badge: 'Conclusion (Flawed)',
              badgeColor: 'red',
            },
          ],
        },
        { type: 'h3', text: 'Annotated Correct Match' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Role' },
          items: [
            {
              title: '"All championship teams have strong coaching."',
              text: 'Universal conditional rule: All A are B.',
              badge: 'Premise',
              badgeColor: 'blue',
            },
            {
              title: '"The Falcons have strong coaching."',
              text: 'Observes the consequent for a specific case: X is B.',
              badge: 'Premise',
              badgeColor: 'blue',
            },
            {
              title: '"Therefore, the Falcons are a championship team."',
              text: 'Concludes the antecedent: X is A. Same Mistaken Reversal.',
              badge: 'Conclusion (Flawed)',
              badgeColor: 'red',
            },
          ],
        },
        { type: 'h3', text: 'Method Applied' },
        {
          type: 'process',
          steps: [
            '**Identify the Flaw:** The stimulus treats a necessary condition (well-written) as sufficient. All A are B, X is B, therefore X is A. This is a Mistaken Reversal (affirming the consequent).',
            '**Abstract the Pattern:** If A -> B. B. Therefore A.',
            '**Match the Error:** Scan for any choice that takes a rule "All A are B," observes B in a specific case, and wrongly concludes A. Reject valid arguments, reject Mistaken Negation (denying the antecedent), reject different flaw families.',
          ],
        },
        { type: 'h3', text: 'Trap Table' },
        {
          type: 'table',
          headers: ['Wrong Answer Type', 'Why It Fails'],
          rows: [
            ['**Valid Argument**', 'Conclusion follows from premises -- in Parallel Flaw, every valid answer is automatically wrong.'],
            ['**Mistaken Negation (Adjacent Flaw)**', 'Same conditional family but wrong direction: not-A therefore not-B instead of B therefore A.'],
            ['**Topic Match**', 'Same subject matter (books, literature) but the logic is different or valid.'],
            ['**Reversed Direction**', 'Commits Whole-to-Part (Division) when stimulus commits Part-to-Whole (Composition), or vice versa.'],
            ['**Partial Flaw Match**', 'One flaw matches but a second, different flaw is also present -- the stimulus has only one flaw.'],
          ],
        },
      ],
    },
  },
};
