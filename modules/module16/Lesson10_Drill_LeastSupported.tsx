import { Lesson } from '../../types';

export const Lesson10_Drill_LeastSupported: Lesson = {
  id: "16-10",
  title: "Drill: LEAST Supported (EXCEPT-Style)",
  content: [
    { type: 'h2', text: 'LEAST Supported (EXCEPT-Style)' },
    { type: 'paragraph', text: "A **LEAST Supported** question inverts the standard Most Strongly Supported task. Instead of finding the one answer that *is* supported by the stimulus, you must find the one answer that is *not* supported \u2014 while confirming that the other four *are*. This is an EXCEPT-style question: four answers pass the support test, and one fails. The difficulty lies in the inverted logic and the discipline required to systematically verify all five options." },

    { type: 'paragraph', text: "These questions are rare but high-difficulty because they punish shortcuts. You cannot simply find one strong answer and move on \u2014 you must evaluate every option against the stimulus and determine its support status. The correct answer is often not contradicted by the stimulus; it is simply the one for which no evidence is provided." },

    { type: 'h3', text: 'What Makes LEAST Supported Distinctive' },
    { type: 'list', ordered: true, items: [
      '**The task is inverted.** You are looking for the answer that is NOT supported, not the one that is. This requires you to prove four answers correct before identifying the one that fails.',
      '**The correct answer is usually unsupported, not contradicted.** The LEAST supported option typically has no evidence for or against it. It introduces a concept (like "purpose" or "intent") that the stimulus never addresses.',
      '**Systematic evaluation is mandatory.** You cannot rely on intuition. You must check each option against specific facts in the stimulus and tag it as SUPPORTED or NOT SUPPORTED before selecting your answer.',
    ]},

    { type: 'callout', variant: 'default', title: 'The EXCEPT Approach', text: "For LEAST Supported questions, use a systematic elimination process: evaluate each answer independently against the stimulus. Tag each one as SUPPORTED or NOT SUPPORTED. The one tagged NOT SUPPORTED is your answer. Do not stop after finding a likely candidate \u2014 verify all five." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: LEAST Supported (EXCEPT-Style)' },
    { type: 'paragraph', text: "This drill demonstrates the systematic EXCEPT approach. The stimulus is logically dense, and four of the five answers are directly supported. Your job is to find the one that lacks support. Read the stimulus, commit to an answer, then review the full analysis below." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Deconstruct the Stimulus' },
    { type: 'paragraph', text: "Before evaluating the answers, map the logical structure of the stimulus:" },
    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'Rule 1', text: '"Only poetry cannot be translated well." This means: if something cannot be translated well, it must be poetry. Contrapositive: if it is not poetry, it can be translated well.', badge: 'Conditional', badgeColor: 'indigo' },
      { title: 'Claim 1', text: '"It is poets who preserve languages." This is a causal claim about the *effect* of poetry being untranslatable.', badge: 'Effect', badgeColor: 'blue' },
      { title: 'Reasoning', text: '"We would not bother to learn a language if we could get everything written in it from translation." Because poetry cannot be translated, we cannot get everything from translation, so we must learn the language.', badge: 'Support', badgeColor: 'slate' },
      { title: 'Rule 2', text: '"We cannot witness the beauty of poetry except in the language in which it is composed." Poetry must be read in its original language to be fully appreciated.', badge: 'Conditional', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Systematic EXCEPT Evaluation' },
    { type: 'paragraph', text: "Now evaluate each answer independently. Tag each as SUPPORTED or NOT SUPPORTED based on specific evidence from the stimulus:" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) All nonpoetic literature can be translated well.', text: 'This is the direct contrapositive of Rule 1. "Only poetry cannot be translated well" logically entails that everything that is not poetry *can* be translated well.', badge: 'SUPPORTED', badgeColor: 'green' },
      { title: '(B) One purpose of writing poetry is to preserve the language in which it is written.', text: 'The stimulus describes the *effect* of poetry being untranslatable: it motivates people to learn the language, which preserves it. However, the stimulus never attributes this as a *purpose* or *intent* of the poet. The preservation is an unintended consequence, not a stated goal. This answer confuses effect with purpose.', badge: 'NOT SUPPORTED', badgeColor: 'red' },
      { title: '(C) Some translations do not capture all that was expressed in the original language.', text: 'The stimulus states that poetry "cannot be translated well." This directly implies that translations of poetry fail to capture everything in the original \u2014 which is an instance of translations not capturing all that was expressed.', badge: 'SUPPORTED', badgeColor: 'green' },
      { title: '(D) The beauty of poetry is not immediately accessible to people who do not understand the language...', text: 'This is a direct paraphrase of Rule 2: "we cannot witness the beauty of poetry except in the language in which it is composed." If you do not understand the language, the beauty is inaccessible.', badge: 'SUPPORTED', badgeColor: 'green' },
      { title: '(E) Perfect translation from one language to another is sometimes impossible.', text: 'The stimulus says poetry cannot be translated well. This is an instance of perfect translation being impossible. "Sometimes" is satisfied by even one case (poetry).', badge: 'SUPPORTED', badgeColor: 'green' },
    ]},

    { type: 'h4', text: 'Step 3: Confirm the Answer' },
    { type: 'paragraph', text: "Four answers (A, C, D, E) are directly supported by specific facts in the stimulus. Answer (B) is the only one that lacks support \u2014 it introduces the concept of \"purpose,\" which the stimulus never addresses. The stimulus describes what poetry *does* (preserve languages), not what poets *intend*." },

    { type: 'hr' },

    { type: 'h3', text: 'The Effect vs. Purpose Distinction' },
    { type: 'paragraph', text: "This question illustrates one of the most important distinctions in LSAT reasoning:" },
    { type: 'table', headers: ['Category', 'Example from Stimulus', 'What It Means'], rows: [
      ['Effect', 'Poetry preserves languages because it motivates people to learn them.', 'This is what happens as a result of poetry being untranslatable. It is stated in the stimulus.'],
      ['Purpose', 'Poets write poetry in order to preserve languages.', 'This is a claim about the poet\'s intention. It is NOT stated in the stimulus.'],
    ]},
    { type: 'paragraph', text: "The stimulus tells us that poetry has the *effect* of preserving languages. It never claims that preservation is a *purpose* of writing poetry. Poets may write for beauty, self-expression, or any number of reasons \u2014 the stimulus simply does not say." },

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. LEAST Supported = find the one without evidence.** The correct answer is usually not contradicted \u2014 it is simply unsupported. Look for the option that introduces a concept the stimulus never addresses.\n\n**2. Use the systematic EXCEPT approach.** Evaluate all five answers independently. Tag each as SUPPORTED or NOT SUPPORTED. Do not stop after finding a likely candidate \u2014 confirm that the other four are genuinely supported.\n\n**3. Distinguish effect from purpose.** A stated *effect* (\"poetry preserves languages\") does not support a claim about *purpose* (\"poets intend to preserve languages\"). This distinction is one of the most commonly tested traps in EXCEPT-style questions.\n\n**4. The correct answer often feels plausible.** Because it is merely unsupported rather than contradicted, the LEAST supported answer can seem reasonable on a casual read. Only systematic evaluation reveals that it lacks textual backing." },
  ]
};
