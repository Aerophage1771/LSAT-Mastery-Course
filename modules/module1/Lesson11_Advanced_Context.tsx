import { Lesson } from '../../types';

export const Lesson11_Advanced_Context: Lesson = {
  id: "1-11",
  title: "Advanced Lesson: Context Statements",
  content: [
    { type: 'h2', text: 'Advanced Lesson 4: The Context Statement' },

    { type: 'h3', text: 'Concept Focus: The Context Statement' },
    { type: 'paragraph', text: "Not all statements are part of the direct line of reasoning. Some provide **background context** or **frame the debate**. These statements introduce the topic or offer undisputed information that sets the stage. While thematically relevant, the argument's conclusion is proven by *other* evidence, making context statements logically separate from the final proof." },
    { type: 'paragraph', text: "Context statements are tricky because they *look* important — they appear in the stimulus, they're related to the topic, and they sometimes feel like they're doing logical work. But the key test is whether the conclusion *depends* on them. If the argument would work just as well without the statement, it's context, not a premise." },

    { type: 'hr' },

    { type: 'h3', text: 'Types of Context Statements' },
    { type: 'paragraph', text: "Context statements come in several varieties. Recognizing these categories helps you identify them quickly:" },
    { type: 'breakdown', labels: { title: 'Type', text: 'Description & Example' }, colWidth: 'equal', items: [
      { title: 'Background Information', text: 'Provides general facts about the topic to orient the reader. The argument could stand without it.\n\n*"Landfills are generally designed to hold ten years\' worth of waste. A new study shows that..."*', badge: 'Background', badgeColor: 'slate' },
      { title: 'Framing Statement', text: 'Sets up the debate or identifies the issue being discussed, without taking a side.\n\n*"The question of whether artificial sweeteners are safe has been debated for decades."*', badge: 'Framing', badgeColor: 'blue' },
      { title: 'Limitation / Scope', text: 'Narrows the scope of the argument without providing evidence. Tells you what the argument is and isn\'t about.\n\n*"Setting aside the ethical concerns, the economic case for the policy is..."*', badge: 'Limitation', badgeColor: 'indigo' },
      { title: 'Common Ground', text: 'A fact that both sides of a debate agree on, mentioned to establish shared understanding before the argument proceeds.\n\n*"Everyone agrees that test scores have declined. The question is why."*', badge: 'Common Ground', badgeColor: 'green' },
    ]},

    { type: 'h3', text: 'Context vs. Premise' },
    { type: 'paragraph', text: "The most common error with context statements is mislabeling them as premises. Both are facts the argument treats as true. The difference is whether the conclusion *logically depends* on the statement:" },
    { type: 'table', headers: ['Feature', 'Context Statement', 'Premise'], rows: [
      ['Logical relationship to conclusion', 'Independent — conclusion doesn\'t depend on it', 'Dependent — conclusion requires it as support'],
      ['What happens if you remove it?', 'Argument still works; conclusion still follows', 'Argument collapses; conclusion loses its support'],
      ['Purpose in the stimulus', 'Sets the stage, introduces the topic', 'Provides the logical foundation for the conclusion'],
      ['Typical position', 'Usually appears at the very beginning', 'Can appear anywhere in the argument'],
      ['Indicator words', 'Rarely preceded by "because" or "since"', 'Often preceded by "because," "since," "for," "given that"'],
      ['Could it appear in a completely different argument?', 'Yes — it\'s general information', 'No — it\'s specific to this argument\'s logic'],
    ]},
    { type: 'callout', variant: 'tip', title: 'The Removal Test for Context', text: "Mentally remove the suspect statement from the argument. Then ask: Does the conclusion still logically follow from the remaining statements? If yes — the statement is context. If no — it's a premise. This is the single most reliable test for distinguishing context from premises." },

    { type: 'h3', text: 'Recognizing Logical Independence' },
    { type: 'paragraph', text: "Context statements have a special relationship with the conclusion: **logical independence**. This means the truth of the context statement neither proves nor disproves the conclusion. They can both be true, both be false, or one can be true while the other is false — the relationship between them is coincidental, not logical." },
    { type: 'list', items: [
      "**If the statement could be false and the conclusion would still be supported by the other evidence**, it's logically independent (context).",
      "**If the statement could be true and the conclusion could still be false**, that's also a sign of logical independence.",
      "**If the statement provides a reason to believe the conclusion**, it's a premise, not context.",
      "**If the statement provides a reason to doubt the conclusion**, it's an objection or concession, not context.",
    ]},
    { type: 'paragraph', text: "On the LSAT, this logical independence is sometimes described in abstract terms like *\"compatible with the truth or falsity of the conclusion\"* — which simply means the statement and the conclusion have no logical bearing on each other." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example (PT-108-S-2-Q-22)' },
    {
      type: 'question-card',
      id: 'PT-108-S-2-Q-22',
      stimulus: 'One can be at home and be in the backyard, that is, not in one\'s house at all. One can also be in one\'s house but not at home, if one owns the house but rents it out to others, for example. So one\'s being at home is not required for one\'s being in one\'s own house.',
      question: 'Which one of the following most accurately describes the relationship between the argument\'s conclusion and its claim that one can be at home without being in one\'s house?',
      options: [
        '(A) The claim is required to establish the conclusion.',
        '(B) The claim represents the point the conclusion is intended to refute.',
        '(C) The claim is compatible with the truth or falsity of the conclusion. (Correct)',
        '(D) The claim points out an ambiguity in the phrase "at home."',
        '(E) The claim inadvertently contradicts the conclusion.',
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: "This question asks about the *relationship* between the conclusion and one specific claim. Let's map the entire argument first:" },

    { type: 'breakdown', labels: { title: 'Statement', text: 'Role & Reasoning' }, items: [
      { title: '"One can be at home and be in the backyard — not in one\'s house at all"', text: 'This is the **Target Statement (Context)**. It illustrates that "at home" and "in one\'s house" are different concepts by showing you can be at home without being in your house. But notice: the *conclusion* is about the reverse relationship (being in your house without being at home). This statement, while thematically related, proves a *different* point than the conclusion requires.', badge: 'Context', badgeColor: 'blue' },
      { title: '"One can be in one\'s house but not at home — e.g., if one rents it out"', text: 'This is the **Premise** — the statement that directly supports the conclusion. The conclusion says "being at home is not required for being in one\'s house," and this example proves exactly that: you can be in your house without being at home.', badge: 'Premise', badgeColor: 'slate' },
      { title: '"One\'s being at home is not required for one\'s being in one\'s own house"', text: 'This is the **Main Conclusion** — signaled by "So." It asserts that "at home" is not a prerequisite for "in your house." The landlord example proves this directly.', badge: 'Main Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'paragraph', text: "The critical insight is that the target statement and the conclusion address *different logical directions*:" },
    { type: 'table', headers: ['Statement', 'What It Proves'], rows: [
      ['Target: "You can be at home without being in your house"', 'Being in your house is not required for being at home (backyard example)'],
      ['Conclusion: "Being at home is not required for being in your house"', 'Being at home is not required for being in your house (landlord example)'],
    ]},
    { type: 'paragraph', text: "These are two different claims about the relationship between \"at home\" and \"in your house.\" The target proves that the first doesn't require the second. The conclusion asserts that the second doesn't require the first. They are logically independent of each other — knowing one tells you nothing about whether the other is true." },

    { type: 'h3', text: 'Why Each Wrong Answer Fails' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Detailed Evaluation' }, items: [
      { title: '(A) The claim is required to establish the conclusion', text: 'The conclusion is that being at home isn\'t necessary for being in your house. This is proven entirely by the landlord example (sentence 2). The backyard example (sentence 1) is *not needed* for this proof — it proves a related but different point. Remove sentence 1 and the conclusion still follows from sentence 2.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) The claim represents the point the conclusion is intended to refute', text: 'The author believes both the target and the conclusion are true. There is no refutation here — the author isn\'t arguing against the backyard claim. Both claims illustrate the separability of "at home" and "in one\'s house" from different angles.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) The claim is compatible with the truth or falsity of the conclusion', text: 'This is the abstract way of describing **logical independence**. The target could be true while the conclusion is false, or false while the conclusion is true — neither one\'s truth value determines the other\'s. This perfectly captures the context relationship.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) The claim points out an ambiguity in the phrase "at home"', text: 'The argument is distinguishing two *concepts* ("at home" vs. "in one\'s house"), not identifying an ambiguity in a single phrase. Ambiguity means one phrase has multiple meanings; here, two different phrases have different meanings.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) The claim inadvertently contradicts the conclusion', text: 'The two claims are perfectly consistent. "You can be at home without being in your house" and "You can be in your house without being at home" are not contradictions — they can both be true simultaneously. (E) mistakes independence for conflict.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'tip', title: 'Spotting the "Wrong Direction" Trap', text: "This argument contains a common structural trap: two statements that seem to prove the same thing but actually prove *different things*. The backyard example proves that \"in your house\" is not needed for \"at home.\" The conclusion states that \"at home\" is not needed for \"in your house.\" These are logically distinct claims (like \"all dogs are mammals\" vs. \"all mammals are dogs\"). When an argument contains two similar-sounding claims, check the direction of the logical relationship carefully." },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "Not every statement is part of the core proof. **Context statements** provide background, framing, or common ground without logically supporting the conclusion. The key test is the **Removal Test**: if the conclusion still follows without the statement, it's context. On the LSAT, the relationship between a context statement and the conclusion is one of **logical independence** — often described abstractly as \"compatible with the truth or falsity of the conclusion.\" Four types of context: **Background** (general facts), **Framing** (introduces the debate), **Limitation** (narrows scope), and **Common Ground** (shared assumptions)." },
  ]
};
