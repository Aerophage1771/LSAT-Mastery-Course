import { Lesson } from '../../types';

export const Lesson13_PolicyRuleExceptionPurposeEffect: Lesson = {
  id: '17-13',
  title: 'Policy, Rule, Exception, Purpose, and Effect',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Policy, Rule, Exception, Purpose, and Effect' },
    {
      type: 'paragraph',
      text: 'Some Must Be True stimuli mix several layers that feel conceptually related but do different logical jobs. A policy sets the broader context. A rule states what must or may not happen. An exception carves out a subgroup. A purpose explains why the rule exists. An effect describes what follows when the rule applies. Hard MBT questions become much easier once you separate those layers instead of treating them as one blur of meaning.',
    },
    {
      type: 'paragraph',
      text: 'The central risk is that answer choices often convert one layer into another. They treat a purpose as if it were a rule, an exception as if it erased the whole rule, or an observed effect as if it were itself mandated. In Must Be True, those layer jumps are fatal unless the text explicitly authorizes them.',
    },

    { type: 'h3', text: 'The Rule-Layer Checklist' },
    {
      type: 'table',
      headers: ['Layer', 'What It Does', 'Valid MBT Use', 'Classic Trap'],
      rows: [
        [
          'Policy',
          'Frames the general objective or institutional backdrop',
          'Helps you understand what kind of rule is being discussed',
          'Treating the policy goal as if it directly proves a specific requirement',
        ],
        [
          'Rule',
          'States the operative command, prohibition, or permission',
          'Can support direct inferences and contrapositives',
          'Weakening or broadening the trigger language',
        ],
        [
          'Exception',
          'Carves out a subgroup to which the general rule does not apply',
          'Narrows the domain; it does not erase the general rule',
          'Acting as if one exception destroys the rule for everyone',
        ],
        [
          'Purpose',
          'Explains why the rule exists',
          'May clarify scope, but does not create new obligations by itself',
          'Turning "the point of the rule" into "therefore any act serving that point is required"',
        ],
        [
          'Effect',
          'Describes what happens when the rule applies in a case',
          'Lets you infer consequences for cases that satisfy the rule',
          'Mistaking one observed effect for the complete content of the rule',
        ],
      ],
    },

    { type: 'h3', text: 'How to Separate the Layers' },
    {
      type: 'process',
      title: 'A Mechanical Sorting Routine',
      steps: [
        '**Underline the operative rule.** Find the sentence that actually says must, may not, cannot, only if, or unless.',
        '**Box the exception separately.** If the rule has a carve-out, keep it as a separate limiting condition.',
        '**Label purpose language as explanatory, not operative.** Words like "in order to," "so that," or "to protect" often explain the rule rather than add a new requirement.',
        '**Infer effects only after the rule is fixed.** Once you know the rule and its exception, then ask what follows for a person or case inside that governed set.',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Purpose Is Not Permission',
      text: 'A purpose clause tells you why the rule exists. It does **not** automatically prove that every action advancing that purpose is allowed, required, or effective. On MBT questions, that jump is usually a trap.',
    },

    { type: 'h3', text: 'Paired Real Questions' },
    {
      type: 'callout',
      variant: 'default',
      title: 'Primary Pairings: PT-103-S-3-Q-22 and PT-104-S-1-Q-19',
      text: 'Use **Lesson 7: Drill: Policy, Rule, Exception, Purpose, and Effect (PT-103-S-3-Q-22)** for rule/scope/default-effect discipline, and **Lesson 10: Drill: Precision in Causality (PT-104-S-1-Q-19)** for the narrower purpose/effect problem of not turning a stated function into a proven effect in a new setting.',
    },

    { type: 'h3', text: 'Real-Question Lens: PT-103-S-3-Q-22' },
    {
      type: 'paragraph',
      text: 'PT-103-S-3-Q-22 is the cleanest Module 18 example of rule-layer separation. The stimulus gives a decision rule about when Kay may vote for a candidate. The scope condition limits when the rule activates. The operative rule requires a unique minimum number of disagreements. The "otherwise" clause states the default effect when that condition fails.',
    },
    {
      type: 'breakdown',
      labels: { title: 'Layer', text: 'What the Question Actually Gives You' },
      items: [
        {
          title: 'Policy Context',
          text: 'Kay is deciding what course of action to take in an election with at least one issue important to her.',
          badge: 'Context',
          badgeColor: 'slate',
        },
        {
          title: 'Rule',
          text: 'Voting for candidate X is acceptable only if every other candidate has more disagreements with Kay than X does.',
          badge: 'Rule',
          badgeColor: 'blue',
        },
        {
          title: 'Scope / Trigger',
          text: 'The rule operates only in single-candidate elections where at least one issue matters to Kay.',
          badge: 'Scope',
          badgeColor: 'indigo',
        },
        {
          title: 'Effect',
          text: 'If no candidate is uniquely best, then no candidate is acceptable. That is why a tie at three disagreements each forces answer (D).',
          badge: 'Effect',
          badgeColor: 'green',
        },
      ],
    },

    {
      type: 'paragraph',
      text: 'The wrong answers prove why this framework matters. They either move outside the rule\'s scope, compare the wrong quantities, or invent a broader decision principle than the stimulus states. That is exactly the trap family the report flags.',
    },

    { type: 'h3', text: 'Why Purpose and Effect Can Mislead MBT Students' },
    {
      type: 'paragraph',
      text: 'Purpose language feels intuitive, and effect language feels concrete. That is why LSAT answer choices love them. But MBT requires proof, not intuitiveness. A purpose clause may suggest what the policy-maker cares about, yet still leave many means open. An effect may describe one consequence of a rule without exhausting everything the rule implies. Your job is to hold each layer still and ask what is actually forced by the text.',
    },

    { type: 'h3', text: 'Real-Question Lens: PT-104-S-1-Q-19' },
    {
      type: 'paragraph',
      text: 'PT-104-S-1-Q-19 trains the narrower purpose/effect problem. Antihistamines are described by what they do: they minimize allergy symptoms by blocking histamine. But once the stimulus tells you histamine plays no role in cold symptoms, you cannot convert the drug\'s general function into proof that it must work the same way in the cold context.',
    },
    {
      type: 'table',
      headers: ['PT-104 Layer', 'What You May Infer', 'What You May NOT Infer'],
      rows: [
        [
          'Stated mechanism',
          'Any cold-symptom relief cannot come from blocking histamine.',
          'Antihistamines are therefore useless for colds.',
        ],
        [
          'Other effects',
          'Another pathway could explain any cold-symptom relief.',
          'Any side effect automatically becomes a therapeutic effect.',
        ],
        [
          'Function in allergy setting',
          'The drug works through histamine-blocking for allergy symptoms.',
          'The same mechanism must explain every effect in every setting.',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaway',
      text: 'When a Must Be True stimulus mixes policy, rule, exception, purpose, and effect, sort the layers before you infer. The operative rule does the logical work. The exception narrows the domain. The purpose explains; it does not legislate. The effect follows only once the rule is properly applied. Keep those roles separate, and many attractive wrong answers collapse immediately.',
    },
  ],
};
