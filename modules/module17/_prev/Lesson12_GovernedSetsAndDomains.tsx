import { Lesson } from '../../types';

export const Lesson12_GovernedSetsAndDomains: Lesson = {
  id: '17-12',
  title: 'Governed Sets & Domains',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Governed Sets & Domains' },
    {
      type: 'paragraph',
      text: 'Many hard Must Be True questions are not really about complicated logic. They are about **keeping a rule inside the exact domain it governs**. The stimulus may mention a broad topic, but the operative rule often governs only a narrower subset defined by age, role, trigger condition, or conjunction of traits.',
    },
    {
      type: 'paragraph',
      text: 'That is why domain discipline matters so much on MBT questions. Once you misidentify the governed set, every later inference becomes unreliable. The correct answer stays inside the rule\'s actual domain. Wrong answers typically broaden the rule to a larger class, apply it to a neighboring category, or ignore a limiting condition that defines who is actually governed.',
    },

    { type: 'h3', text: 'The Domain-First Routine' },
    {
      type: 'process',
      title: 'How to Keep the Rule in Bounds',
      steps: [
        '**Name the governed set.** Ask: who or what is this rule actually about? Do not settle for the broad topic; identify the exact governed subgroup.',
        '**Separate trigger from decoration.** Strip away descriptive details that do not affect the rule. Keep the few terms that determine who falls inside the domain.',
        '**Check each answer against the domain first.** Before evaluating logical force, ask whether the answer stays inside the same governed class.',
        '**Use boundary testing.** If the answer shifts from "under eighteen" to "eighteen or younger," or from a narrow subgroup to the whole topic, it has changed the domain and is almost certainly wrong.',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The Domain Question',
      text: 'Before you diagram or prephrase, ask: **"What exact set is being governed here?"** On many hard MBT questions, that one question eliminates several answer choices before formal logic even begins.',
    },

    { type: 'h3', text: 'Practice This Concept' },
    {
      type: 'callout',
      variant: 'default',
      title: 'Recommended Drill: PT-101-S-2-Q-11',
      text: 'Practice this concept with **Drill: Governed Sets & Domains (PT-101-S-2-Q-11)**. That question forces you to keep the rule inside the exact under-eighteen domain instead of broadening it to adjacent categories like legal voters, professors, or eighteen-year-olds.',
    },

    { type: 'h3', text: 'Real-Question Lens: PT-101-S-2-Q-11' },
    {
      type: 'paragraph',
      text: 'PT-101-S-2-Q-11 is the cleanest Module 18 example of governed-domain discipline. The stimulus gives two universal negatives about the exact domain **under eighteen** and then supplies a "some" statement that places a subgroup of brilliant people inside that domain. Once that happens, the subgroup inherits every restriction attached to the domain.',
    },
    {
      type: 'breakdown',
      labels: { title: 'Layer', text: 'What the Question Forces' },
      items: [
        {
          title: 'Governed Domain',
          text: 'People under eighteen.',
          badge: 'Domain',
          badgeColor: 'blue',
        },
        {
          title: 'Attached Rules',
          text: 'No one under eighteen is a professor, and no one under eighteen is a legal voter.',
          badge: 'Rules',
          badgeColor: 'indigo',
        },
        {
          title: 'Forced Subgroup',
          text: 'Some brilliant people are under eighteen, so some brilliant people inherit both exclusions.',
          badge: 'Inference',
          badgeColor: 'green',
        },
        {
          title: 'Boundary Trap',
          text: 'An answer about eighteen-year-olds changes the domain. "Under eighteen" does not include people who are exactly eighteen.',
          badge: 'Trap',
          badgeColor: 'red',
        },
      ],
    },

    { type: 'h3', text: 'Domain Errors This Pairing Trains' },
    {
      type: 'table',
      headers: ['PT-101 Pattern', 'Wrong Move', 'Why It Fails'],
      rows: [
        [
          '"under eighteen"',
          'treating it as "eighteen or younger"',
          'The answer crosses the age boundary and changes the governed set.',
        ],
        [
          '"some brilliant people are under eighteen"',
          'treating it as "all brilliant people"',
          'The answer broadens a narrow subgroup into the whole class.',
        ],
        [
          'rules attached to under-eighteen status',
          'applying them to professors or voters generally',
          'The stimulus governs only those who fall inside the under-eighteen domain.',
        ],
      ],
    },

    { type: 'h3', text: 'Real-Question Lens: PT-106-S-2-Q-19' },
    {
      type: 'paragraph',
      text: 'PT-106-S-2-Q-19 reinforces the same skill from a different angle. The fast subgroup is **correctly addressed mail**. The slow total is **all mail**. The right inference does not blur those sets together. It asks what must be true about the complement domain: incorrectly addressed mail.',
    },
    {
      type: 'paragraph',
      text: 'That is another version of domain control. Once you know which subgroup the stimulus describes and which broader population it sits inside, you can test whether an answer stays with the subgroup, the whole, or the complement. Hard MBT questions often hide the right answer in that distinction.',
    },

    { type: 'h3', text: 'Why This Matters for MBT' },
    {
      type: 'paragraph',
      text: 'Must Be True questions punish overextension more harshly than almost any other question type. A domain shift often produces an answer that feels close, reasonable, and even useful. But MBT does not reward useful. It rewards **provable**. If the answer changes who is governed, even slightly, it has changed the proof target and must be eliminated.',
    },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaway',
      text: 'The fastest way to lose control of a hard MBT question is to let a rule drift outside its governed set. Name the exact domain first, keep every inference inside it, and treat boundary changes as immediate red flags. Domain discipline is not a side skill in Must Be True. It is part of the proof standard itself.',
    },
  ],
};
