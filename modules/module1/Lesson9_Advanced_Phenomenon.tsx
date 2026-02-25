import { Lesson } from '../../types';

export const Lesson9_Advanced_Phenomenon: Lesson = {
  id: "1-9",
  title: "Advanced Lesson: The Phenomenon",
  content: [
    { type: 'h2', text: 'Advanced Lesson 2: The Phenomenon to be Explained' },

    { type: 'h3', text: 'Concept Focus: The Phenomenon to be Explained' },
    { type: 'paragraph', text: "Some arguments don't set out to prove a new fact. Instead, they start with an accepted fact, observation, or puzzle and then debate its *cause*. The initial fact isn't a premise in the traditional sense — it doesn't support the conclusion. Rather, it frames the entire discussion. It's the \"what\" that the rest of the argument is trying to explain the \"why\" of." },
    { type: 'paragraph', text: "This role is often signaled by introductory language like *\"It has been noted that...\"*, *\"Scientists have discovered that...\"*, or *\"A recent study found that...\"* The rest of the argument will focus on causality — proposing, evaluating, or rejecting explanations for why the phenomenon occurs." },

    { type: 'hr' },

    { type: 'h3', text: 'Phenomenon vs. Conclusion' },
    { type: 'paragraph', text: "The Phenomenon is easily confused with the Main Conclusion because both are important claims. But they play fundamentally different roles in the argument:" },
    { type: 'table', headers: ['Feature', 'Phenomenon', 'Main Conclusion'], rows: [
      ['Status', 'Taken as a given, undisputed fact', 'The claim the author is trying to establish'],
      ['Position in argument', 'Sets the stage — usually appears first', 'The final destination — often appears last or after \"therefore\"'],
      ['Relationship to evidence', 'The evidence tries to explain it', 'The evidence tries to prove it'],
      ['Can the author be wrong about it?', 'No — it\'s accepted as true by all parties', 'Yes — it\'s the author\'s debatable claim'],
      ['What question does it answer?', '"What happened?" or "What is the case?"', '"What should we believe about why it happened?"'],
    ]},
    { type: 'paragraph', text: "The critical distinction: a **phenomenon** is the *subject* of the argument — the thing everyone agrees is true and wants to explain. The **conclusion** is the author's *answer* about why the phenomenon occurs or what it means." },
    { type: 'callout', variant: 'tip', title: 'The Dispute Test', text: "If the parties in the argument disagree about *whether* the statement is true, it might be the conclusion. If everyone agrees the statement is true and they disagree about *why* it's true, the statement is a phenomenon." },

    { type: 'h3', text: 'The Phenomenon Argument Pattern' },
    { type: 'paragraph', text: "Arguments built around phenomena follow a distinctive pattern. The author presents the fact, introduces one or more explanations, and then argues for or against them:" },
    { type: 'process', title: 'Phenomenon Argument Structure', steps: [
      '**Phenomenon:** An undisputed observation or fact is presented — *"It has been noted that X..."*',
      '**Proposed Explanation:** Someone offers a causal account — *"Some say this is because Y..."*',
      '**Author\'s Response:** The author either (a) supports the proposed explanation with additional evidence, (b) rejects it and offers a different explanation, or (c) argues that the proposed explanation is insufficient without offering an alternative.',
    ]},
    { type: 'paragraph', text: "In many LSAT arguments, the author's response is to *reject* the proposed explanation. This creates a rebuttal structure where the phenomenon sits outside the debate entirely — both sides agree the phenomenon exists; they disagree about what causes it." },

    { type: 'h3', text: 'Abstract Language in Phenomenon Questions' },
    { type: 'paragraph', text: "Answer choices describing phenomena often use abstract language. Here's how common abstract phrases map to the phenomenon role:" },
    { type: 'table', headers: ['Abstract Answer Choice Language', 'What It Describes'], rows: [
      ['"what the argument purports to explain"', 'The phenomenon — if the argument offers an explanation for it'],
      ['"what the position the author rejects is purported to explain"', 'The phenomenon — if the opposing explanation is what the author attacks'],
      ['"an observation that the argument takes as given"', 'The phenomenon — emphasizing its undisputed status'],
      ['"a fact that both sides of the debate accept"', 'The phenomenon — emphasizing universal agreement'],
      ['"the subject matter of the disagreement"', 'The phenomenon — it\'s what the argument is about'],
    ]},
    { type: 'callout', variant: 'default', title: 'The Abstract Language Trap', text: "The trickiest phenomenon questions use highly abstract correct answers. The phrase *\"what the position the columnist tries to undermine is purported to explain\"* is dense, but it just means: *\"the thing that the explanation the author rejects claims to account for.\"* Always substitute the actual content from the stimulus to verify." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example (PT-131-S-2-Q-7)' },
    { type: 'question-card', id: 'phenomenon-worked-example', questionType: 'Argument Part', difficulty: 'hard',
      stimulus: "Columnist: It has been noted that attending a live musical performance is a richer experience than is listening to recorded music. Some say that this is merely because we do not see the performers when we listen to recorded music. However, there must be some other reason, for there is relatively little difference between listening to someone read a story over the radio and listening to someone in the same room read a story.",
      question: "Which one of the following most accurately expresses the role played in the argument by the observation that attending a live musical performance is a richer experience than is listening to recorded music?",
      options: [
        "(A) It is what the columnist's argument purports to show.",
        "(B) It is the reason given for the claim that the columnist's argument is attempting to undermine.",
        "(C) It is what the columnist's argument purports to explain.",
        "(D) It is what the columnist's argument purports to refute.",
        "(E) It is what the position that the columnist tries to undermine is purported to explain. (Correct)"
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: "Let's map this argument using the Phenomenon Pattern:" },

    { type: 'breakdown', labels: { title: 'Statement', text: 'Role & Reasoning' }, items: [
      { title: '"Attending a live performance is a richer experience than listening to recorded music"', text: 'This is the **Phenomenon** — an undisputed observation that everyone accepts as true. It\'s introduced with "It has been noted that..." signaling it is a given fact, not a debatable claim. The rest of the argument is about explaining *why* this is true.', badge: 'Phenomenon', badgeColor: 'blue' },
      { title: '"Some say this is merely because we do not see the performers"', text: 'This is the **Proposed Explanation** (Opposing View) — an explanation offered by others for why the phenomenon occurs. The author will argue this explanation is wrong.', badge: 'Opposing Explanation', badgeColor: 'red' },
      { title: '"However, there must be some other reason"', text: 'This is the **Main Conclusion** — the author\'s own claim, rejecting the proposed explanation. The author does NOT offer the correct explanation — only argues the proposed one is insufficient.', badge: 'Main Conclusion', badgeColor: 'indigo' },
      { title: '"There is relatively little difference between listening to a story over the radio vs. in person"', text: 'This is the **Premise** — an analogy used to disprove the proposed explanation. If \"not seeing performers\" were the reason, then the same gap should exist for storytelling, but it doesn\'t.', badge: 'Premise', badgeColor: 'slate' },
    ]},

    { type: 'process', title: 'The Logic Flow', steps: [
      '**Phenomenon:** Live music is richer than recorded music (undisputed fact)',
      '**Proposed Explanation:** "Some say" it\'s because we can\'t see the performers',
      '**Author\'s Conclusion:** "However, there must be some other reason" (rejecting the proposed explanation)',
      '**Author\'s Evidence:** The radio vs. in-person storytelling comparison shows that visual contact alone doesn\'t explain the richness gap',
    ]},

    { type: 'h3', text: 'Why Each Wrong Answer Fails' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Detailed Evaluation' }, items: [
      { title: '(A) What the argument purports to show', text: 'Translation: "It\'s the main conclusion." Wrong — the author takes this as a *given fact*, not something requiring proof. The argument doesn\'t try to prove live music is richer; it tries to explain why.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) The reason given for the claim the argument attempts to undermine', text: 'Translation: "It\'s a premise supporting the opposing view." Wrong — the target is the phenomenon itself, not evidence for the opposing explanation. The opposing explanation is about *not seeing performers*, not about the richness of live music.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) What the argument purports to explain', text: 'This is the most tempting wrong answer. At first glance, the argument does seem to be about explaining the phenomenon. But the author\'s specific conclusion is *negative* — "there must be some **other** reason." The author rejects one explanation without providing the correct one. The argument doesn\'t actually explain the phenomenon; it only debunks one explanation of it.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) What the argument purports to refute', text: 'Translation: "The author argues this is false." Wrong — the author fully accepts the phenomenon as true. What the author refutes is the *proposed explanation* for the phenomenon, not the phenomenon itself.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) What the position the columnist tries to undermine is purported to explain', text: 'Dense but correct. Let\'s translate piece by piece: "the position the columnist tries to undermine" = the "some say" explanation (not seeing performers). "Is purported to explain" = claims to account for. "It" = the target (live music is richer). Full translation: "The target is the thing that the rejected explanation claims to account for." This is precisely what a phenomenon is in a rebuttal-of-explanation argument.', badge: 'Correct', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'tip', title: 'Why (C) vs. (E) Matters', text: "The difference between (C) and (E) is subtle but crucial. (C) says the *author's argument* explains the phenomenon. (E) says the *rejected position* claims to explain the phenomenon. Since the author never provides the real explanation — only debunks a wrong one — (C) overstates the argument's scope. (E) precisely identifies the phenomenon's relationship to the opposing view." },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "A **Phenomenon** is a statement of undisputed fact that an argument seeks to explain the cause of. It is the subject of the debate, not part of the proof. It differs from a conclusion because no one argues about *whether* the phenomenon is true — they argue about *why* it's true. When faced with highly abstract answer choices, **break them down and substitute**: replace abstract phrases like \"the position the argument rejects\" with the actual content from the stimulus to test the fit." },
  ]
};
