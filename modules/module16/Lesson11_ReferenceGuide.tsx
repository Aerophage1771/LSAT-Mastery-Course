import { Lesson } from '../../types';

export const Lesson11_ReferenceGuide: Lesson = {
  id: "16-11",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Module 16: Most Strongly Supported \u2014 Reference Guide' },
    { type: 'paragraph', text: 'This reference guide consolidates everything from Module 16 into a single, quick-access resource. Use it for pre-test review, timed practice sessions, and as a checklist before attempting Most Strongly Supported questions.' },

    { type: 'hr' },

    { type: 'h2', text: '1. The 4-Step Method' },
    { type: 'paragraph', text: 'Every Most Strongly Supported question follows the same repeatable process. Memorize this sequence and apply it consistently.' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 \u2014 Identify the Question\'s Goal:** Read the question stem first. Words like "most strongly supported," "can be properly inferred," or "most supported by the information" confirm that your task is to find the answer choice made most probable by the stimulus. Accept all stimulus information as true.',
      '**Step 2 \u2014 Break Down the Information:** Read the stimulus and decompose it into discrete facts. Note key terms, definitions, strength of language (some, most, all, never), and relationships between ideas (causal links, comparisons, conditional rules). Map how each fact connects to the others.',
      '**Step 3 \u2014 Connect the Evidence:** Before reading the answer choices, synthesize the facts. Ask: "What is the most direct consequence of combining these points?" Look for chains, overlapping groups, causal mechanisms, or rule applications. Form a pre-phrase \u2014 a prediction of what the correct answer will say.',
      '**Step 4 \u2014 Evaluate and Eliminate:** Check each answer choice against the stimulus. Ask: "Is this statement made highly likely by the information I read?" The correct answer should feel like a natural next step requiring no outside assumptions. Eliminate traps by checking scope, strength, and logical direction.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Timing Target', text: '~15 sec reading the stem and confirming question type \u2192 ~30 sec breaking down the stimulus \u2192 ~15 sec synthesizing and pre-phrasing \u2192 ~30 sec evaluating choices \u2192 ~10 sec final verification. Total: **~100 seconds.** The synthesis step is non-negotiable \u2014 skipping it makes you vulnerable to attractive distractors.' },

    { type: 'hr' },

    { type: 'h2', text: '2. Inference Types' },
    { type: 'paragraph', text: 'Most Strongly Supported stimuli generate inferences through recurring logical patterns. Recognizing the pattern accelerates your synthesis.' },

    { type: 'table', headers: ['Inference Type', 'How It Works', 'What to Look For', 'Lesson'], rows: [
      ['**Causal Synthesis**', 'Two or more causal facts combine to produce a conclusion neither states alone.', 'Multiple cause-and-effect statements that share a common term or link in a chain.', 'Lesson 3'],
      ['**Definitional Application**', 'A definition or rule is stated, and a specific example satisfies the definition\'s criteria.', 'A general definition followed by a specific case that clearly meets (or fails to meet) its conditions.', 'Lesson 4'],
      ['**Causal Chain**', 'A sequence of causes and effects links A to B to C, allowing you to infer A\'s connection to C.', 'Step-by-step processes where each outcome triggers the next event (A \u2192 B \u2192 C, therefore A \u2192 C).', 'Lesson 5'],
      ['**Constraint-Based**', 'Rules, limitations, or conditions narrow the range of possible conclusions.', 'Conditional statements, exceptions, or boundary conditions that restrict what can be true.', 'Lesson 7'],
      ['**Logical Density**', 'A short, information-dense stimulus packs multiple relationships into a few sentences.', 'Compact stimuli with overlapping quantifiers, nested conditions, or multiple intersecting groups.', 'Lesson 8'],
      ['**Semantic Nuance**', 'Subtle differences in word meaning or connotation drive the correct inference.', 'Near-synonyms used precisely, hedged language, or qualifying phrases that shift meaning.', 'Lesson 9'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '3. MSS vs. Must Be True vs. Strengthen' },
    { type: 'paragraph', text: 'These three question types overlap enough to cause confusion. Use this comparison to distinguish them quickly and apply the correct strategy.' },

    { type: 'table', headers: ['Feature', 'Most Strongly Supported', 'Must Be True', 'Strengthen'], rows: [
      ['**Standard of proof**', 'High probability (~99%). The answer is the most logically supported option.', 'Absolute certainty (100%). The answer must be proven beyond any doubt.', 'Any degree. The answer only needs to make the conclusion somewhat more likely.'],
      ['**Direction of reasoning**', 'Stimulus \u2192 Answer. The stimulus provides facts; you find the conclusion they best support.', 'Stimulus \u2192 Answer. The stimulus provides facts; you find what must logically follow.', 'Answer \u2192 Stimulus. The answer provides new information that strengthens the stimulus\'s conclusion.'],
      ['**Stimulus structure**', 'Usually a collection of facts without a stated conclusion.', 'Usually a collection of facts without a stated conclusion, or a formal logical structure.', 'An argument with a clear conclusion and premises.'],
      ['**Role of the answer**', 'The answer IS the conclusion you derive from the facts.', 'The answer IS a guaranteed consequence of the facts.', 'The answer IS a new premise that supports the existing conclusion.'],
      ['**Trap to watch**', 'Answers that overreach beyond what the evidence supports (too strong).', 'Answers that are probable but not certain (could be true vs. must be true).', 'Answers that are relevant but do not actually increase the conclusion\'s likelihood.'],
      ['**Typical stems**', '"most strongly supported," "can be properly inferred," "most supported by"', '"must be true," "can be properly concluded," "logically follows"', '"most strengthens," "provides the most support for," "most justifies"'],
    ]},

    { type: 'callout', variant: 'default', title: 'Key Distinction', text: 'MSS and Must Be True both reason from stimulus to answer, but MSS allows a small inferential leap while Must Be True demands airtight proof. Strengthen reverses the direction entirely \u2014 you add new evidence to an existing argument rather than deriving a conclusion from given facts.' },

    { type: 'hr' },

    { type: 'h2', text: '4. Strength of Support Scale' },
    { type: 'paragraph', text: 'The language in both the stimulus and the correct answer must match in strength. This scale helps you calibrate your expectations.' },

    { type: 'table', headers: ['Level', 'Strength', 'Typical Language', 'Example'], rows: [
      ['1', '**Certain**', 'must, always, all, every, none, never, impossible, only', '"All licensed physicians have completed medical school."'],
      ['2', '**Very Likely**', 'almost always, nearly all, very few exceptions, overwhelmingly', '"Nearly all respondents reported improvement."'],
      ['3', '**Probable**', 'most, usually, typically, generally, tends to, likely', '"Most students who study consistently perform well."'],
      ['4', '**Possible**', 'some, sometimes, can, may, might, often, could', '"Some medications can cause drowsiness."'],
      ['5', '**Speculative**', 'conceivably, not impossible, in rare cases, one might argue', '"It is conceivable that the trend will reverse."'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Matching Rule', text: 'The correct answer should never exceed the strength level established in the stimulus. If the stimulus uses "some" (Level 4), the answer cannot use "most" (Level 3) or "all" (Level 1). When in doubt, the safer, more modest answer is almost always correct.' },

    { type: 'hr' },

    { type: 'h2', text: '5. Common Traps' },
    { type: 'paragraph', text: 'Wrong answers on MSS questions fall into predictable categories. Memorize these patterns to eliminate traps quickly during timed practice.' },

    { type: 'breakdown', labels: { title: 'Trap', text: 'Description & How to Spot It' }, items: [
      { title: '1. Overreach', text: 'The answer draws a conclusion that goes further than the evidence permits. It may be directionally correct but uses language that is too strong or too broad. **Test:** Could you defend this claim using only the stimulus, with no outside knowledge? If you need to add assumptions, it overreaches.', badge: 'Strength', badgeColor: 'red' },
      { title: '2. Reversed Direction', text: 'The answer flips the logical or causal relationship stated in the stimulus. If the stimulus says A causes B, this trap claims B causes A. **Test:** Does the answer\'s causal arrow point the same direction as the stimulus\'s?', badge: 'Logic', badgeColor: 'indigo' },
      { title: '3. Outside Scope', text: 'The answer introduces a concept, comparison, or topic that the stimulus never mentions or implies. It may sound plausible based on real-world knowledge, but the stimulus provides no basis for it. **Test:** Can you point to a specific sentence in the stimulus that supports every term in this answer?', badge: 'Scope', badgeColor: 'blue' },
      { title: '4. Too Extreme', text: 'The answer uses absolute language (all, never, only, impossible) when the stimulus uses hedged language (some, can, usually). Even if the direction is correct, the degree is wrong. **Test:** Would softening the answer\'s language (replacing "all" with "some") make it more defensible?', badge: 'Strength', badgeColor: 'red' },
      { title: '5. Restates Premise Without Inferring', text: 'The answer simply rephrases a fact already stated in the stimulus rather than deriving a new conclusion from the evidence. It goes in a circle instead of taking a logical step forward. **Test:** Is this just repeating something the stimulus already said? If yes, it is not an inference.', badge: 'Logic', badgeColor: 'indigo' },
      { title: '6. Confuses Correlation with Causation', text: 'The answer assumes a causal relationship when the stimulus only describes a correlation or co-occurrence. Two things happening together does not mean one causes the other. **Test:** Does the stimulus explicitly state a causal mechanism, or merely describe a pattern?', badge: 'Logic', badgeColor: 'indigo' },
      { title: '7. Distorts Degree or Quantity', text: 'The answer uses the right concepts but shifts a quantifier or qualifier \u2014 turning "some" into "most," "unlikely" into "impossible," or "a few" into "many." **Test:** Compare the exact quantifiers in the answer to those in the stimulus word by word.', badge: 'Strength', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: '6. LEAST Supported Strategy' },
    { type: 'paragraph', text: 'Some MSS questions invert the task by asking which answer choice is LEAST supported. This requires a fundamentally different approach.' },

    { type: 'process', title: 'LEAST Supported Approach', steps: [
      '**Recognize the inversion.** The stem asks for the answer that is "LEAST supported" or that the stimulus provides "the least support for." Your job flips: four answers are supported, and one is not.',
      '**Evaluate all five choices.** You cannot shortcut this question type. Systematically check each answer against the stimulus and rate its level of support.',
      '**Look for the orphan.** The correct answer is typically not contradicted by the stimulus \u2014 it simply lacks evidentiary support. It may sound plausible on its own but has no specific sentence or combination of sentences backing it up.',
      '**Watch for the effect-vs-intent trap.** A common pattern: the stimulus describes an effect or outcome, and the least supported answer attributes a purpose or intent that was never stated. An effect is observable; intent is about motivation and must be explicitly stated.',
      '**Confirm by elimination.** Once you identify your candidate, verify that each of the other four choices has clear textual support. If you can point to specific evidence for four answers, the remaining one is correct.',
    ]},

    { type: 'callout', variant: 'default', title: 'Key Insight', text: '"Least supported" does not mean "contradicted." The correct answer is usually something for which there is simply no evidence \u2014 a statement that is neither proven nor disproven by the stimulus. Students who look for contradictions instead of absence of support often choose the wrong answer.' },

    { type: 'hr' },

    { type: 'h2', text: '7. Test Day Checklist' },
    { type: 'paragraph', text: 'Run through this checklist on every Most Strongly Supported question during timed practice and on test day.' },

    { type: 'process', title: 'Test Day Checklist', steps: [
      '**Confirm the question type.** The stem says "most strongly supported," "can be properly inferred," or "most supported by." If the stem asks what "must be true" or what "strengthens," switch to the correct strategy.',
      '**Read the stimulus as a fact collector.** Accept every statement as true. Do not evaluate whether the premises are reasonable \u2014 your only job is to determine what follows from them.',
      '**Identify the inference type.** Is the stimulus building a causal chain? Applying a definition? Presenting constraints? Packing dense logical relationships? Recognizing the pattern accelerates your synthesis.',
      '**Synthesize before reading choices.** Pause after reading the stimulus and ask: "What is the most direct conclusion I can draw from combining these facts?" Form a clear pre-phrase.',
      '**Match your pre-phrase to the choices.** Scan all five options for the one that aligns with your prediction. Do not expect identical wording \u2014 expect the same logical content expressed differently.',
      '**Eliminate using the trap checklist.** For each remaining contender, check: Does it overreach? Reverse a relationship? Introduce outside concepts? Use language that is too extreme? Merely restate a premise?',
      '**Verify strength calibration.** Confirm that the answer\'s language matches the evidence\'s strength. Weak evidence supports weak conclusions; strong evidence supports strong conclusions. Never go stronger than the stimulus.',
      '**Check for LEAST Supported inversion.** If the stem says "LEAST supported," invert your approach: find the one answer that lacks textual support rather than the one that has it.',
      '**Final read-through.** Re-read the stimulus with your selected answer in mind. Does the answer follow naturally from the facts? If it requires any outside assumption or logical jump beyond what the stimulus provides, reconsider.',
      '**Select and move on.** Commit to your answer. MSS questions reward careful synthesis and disciplined pre-phrasing \u2014 if you followed the 4 steps, trust the process.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Quick-Reference Tables' },

    { type: 'h3', text: 'Inference Type Quick-Check' },
    { type: 'table', headers: ['If You See...', 'The Inference Type Is Likely...', 'Synthesis Strategy'], rows: [
      ['Multiple cause-effect statements sharing a common term', 'Causal Synthesis', 'Link the shared term to derive a new causal relationship neither premise states alone.'],
      ['A general definition followed by a specific case', 'Definitional Application', 'Check whether the specific case meets (or fails to meet) every element of the definition.'],
      ['A step-by-step process (A \u2192 B \u2192 C)', 'Causal Chain', 'Connect the first cause to the final effect, skipping intermediate steps.'],
      ['Conditional rules with exceptions or boundaries', 'Constraint-Based', 'Identify what must or cannot be true given the stated constraints.'],
      ['A short stimulus packed with overlapping groups or quantifiers', 'Logical Density', 'Slow down and diagram the relationships. Look for where groups overlap.'],
      ['Near-synonyms, hedged language, or subtle qualifiers', 'Semantic Nuance', 'Pay close attention to exact word meanings. The inference hinges on a precise distinction.'],
    ]},

    { type: 'h3', text: 'Strength Matching Quick-Check' },
    { type: 'table', headers: ['Stimulus Language', 'Safe Answer Language', 'Unsafe Answer Language'], rows: [
      ['all, every, always', 'all, every, always (matching strength)', 'N/A \u2014 you can match the strongest level'],
      ['most, usually, typically', 'most, usually, some, may', 'all, every, always, never'],
      ['some, sometimes, can', 'some, sometimes, can, may', 'most, usually, all, always'],
      ['a few, occasionally, rarely', 'a few, occasionally, some', 'most, usually, typically, all'],
      ['might, could, conceivably', 'might, could, is not impossible', 'some, usually, most, all'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Module 16 Summary', text: '**Most Strongly Supported = Synthesis-Based Inference.** You receive a set of facts and determine which answer choice is made most probable by combining them.\n\n**The 4-Step Method:** Identify the Goal \u2192 Break Down the Information \u2192 Connect the Evidence \u2192 Evaluate and Eliminate.\n\n**Six inference types:** Causal Synthesis, Definitional Application, Causal Chain, Constraint-Based, Logical Density, Semantic Nuance.\n\n**Standard of proof:** High probability (~99%), slightly more flexible than Must Be True (100%) but far stricter than Strengthen (any degree).\n\n**Seven common traps:** Overreach, reversed direction, outside scope, too extreme, restates premise, confuses correlation with causation, distorts degree.\n\n**The Strength Matching Rule is your safeguard.** Never select an answer whose language is stronger than the stimulus. When in doubt, the more modest answer is almost always correct.' },
  ]
};
