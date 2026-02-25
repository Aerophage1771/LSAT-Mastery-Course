import { Lesson } from '../../types';

export const Lesson11_Drill_BlockingThirdParty: Lesson = {
  id: "11-11",
  title: "Drill: 'Blocking a Third Party' (PT-127-S-1-Q-19)",
  content: [
    { type: 'h2', text: 'Blocking Third Party' },
    { type: 'paragraph', text: "The Blocking Third Party pattern appears when an author disproves a specific version of a claim and then concludes that the *general* claim is false. The argument addresses only one possible source, basis, or pathway for a claim and, after refuting that particular source, declares the entire claim to be invalid. The flaw is ignoring that the same conclusion could be supported by a completely different source — a \"third party\" that the author never considered." },
    { type: 'paragraph', text: "This pattern is common in philosophical and ethical arguments, where an author disproves one *reason* for an obligation, belief, or rule, and then concludes the obligation itself doesn't exist. The necessary assumption is that the refuted source is the *only* possible source — blocking any third party from stepping in to support the claim." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Third Party Loophole' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Compare the scope of the refutation to the scope of the conclusion:** The refutation targets a *specific* entity, reason, or pathway. The conclusion makes a *general* claim. Is the conclusion broader than what was actually disproved?',
      '**Ask: "Could a different entity or reason support the same conclusion?"** If the author refutes an obligation to X but concludes there is no obligation at all, could the obligation be owed to Y instead?',
      '**Look for entity-specific language:** Phrases like \"obligation *to trees*,\" \"evidence *from studies*,\" or \"caused *by pollution*\" signal that the refutation targets one specific source, while the conclusion may sweep more broadly.',
      '**Predict the answer:** The correct answer will rule out the third-party alternative — stating that the refuted source is the only possible basis for the general claim.',
    ]},
    { type: 'callout', variant: 'tip', title: 'Specific vs. General', text: "The Third Party pattern is fundamentally a **scope mismatch**. The author proves something narrow (no obligation *to X*) and concludes something broad (no obligation *at all*). The assumption bridges this scope gap by eliminating all other possible sources. If even one alternative source exists, the broad conclusion doesn't follow from the narrow refutation." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Blocking a Third Party (PT-127-S-1-Q-19)' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '11-11-drill',
      questionType: 'Necessary Assumption',
      difficulty: 'hard',
      stimulus: "Editorialist: Some people argue that we have an obligation not to cut down trees. However, there can be no obligation to an entity unless that entity has a corresponding right. So if we have an obligation toward trees, then trees have rights. But trees are not the sort of things that can have rights. Therefore, we have no obligation not to cut down trees.",
      question: "The editorialist's argument depends on assuming which one of the following?",
      options: [
        "(A) If an entity has a right to certain treatment, we have an obligation to treat it that way.",
        "(B) Any entity that has rights also has obligations.",
        "(C) Only conscious entities are the sort of things that can have rights.",
        "(D) Avoiding cutting down trees is not an obligation owed to some entity other than trees. (Correct)",
        "(E) One does not always have the right to cut down the trees on one's own property.",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "This argument has a formal logical structure. Let's trace each step carefully, distinguishing what the editorialist actually proves from what they claim to prove." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"Some people argue that we have an obligation not to cut down trees."', text: "**Opposing View.** The editorialist sets up the position they will argue against: that there is an obligation not to cut down trees." },
      { title: '"However, there can be no obligation to an entity unless that entity has a corresponding right."', text: "**General Principle.** The editorialist states a rule: Obligation to X → X has rights. You can only have an obligation *toward* something if that something has corresponding rights." },
      { title: '"So if we have an obligation toward trees, then trees have rights."', text: "**Application of Principle.** Applying the general rule specifically to trees: Obligation toward trees → Trees have rights." },
      { title: '"But trees are not the sort of things that can have rights."', text: "**Key Premise.** Trees cannot have rights. Combined with the previous step via contrapositive: NOT (Trees have rights) → NOT (Obligation toward trees)." },
      { title: '"Therefore, we have no obligation not to cut down trees."', text: "**Conclusion — and the logical leap.** The editorialist moves from \"no obligation *toward trees*\" (which was logically proved) to \"no obligation *not to cut down trees*\" (a much broader claim). These are subtly but critically different statements." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**What Was Proved:** We have no obligation *toward trees* (i.e., we owe nothing to trees directly, because trees can't hold rights).\n\n**What Was Concluded:** We have no obligation *not to cut down trees* (i.e., no obligation of any kind, from any source, to preserve trees).\n\n**The Gap:** These are different claims. The editorialist successfully refutes a direct obligation *to trees*, but the conclusion eliminates *all* possible obligations not to cut down trees. What if we have an obligation to *future generations* to preserve forests? What if we have an obligation to *ecosystems* or to *other people who depend on the trees*? The obligation not to cut down trees could be owed to an entity *other than* the trees themselves." },
    { type: 'callout', variant: 'default', title: 'The Third Party', text: "The editorialist proves:\n- No obligation **to trees** → ✓ (trees can't have rights)\n\nBut the conclusion claims:\n- No obligation **not to cut down trees** (period)\n\nThe gap: An obligation not to cut down trees could be owed to **future generations**, **other communities**, **ecosystems with rights-holders**, or **humanity broadly**. These are the \"third parties\" whose existence the author must deny." },

    { type: 'h4', text: 'Step 3: Pre-phrase' },
    { type: 'paragraph', text: "The assumption must close the third-party loophole. It must state that the *only* possible source for an obligation not to cut down trees is an obligation owed directly to the trees themselves. If there is no other entity that could ground this obligation, then disproving the obligation to trees is sufficient to disprove the obligation entirely." },

    { type: 'h4', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) If an entity has a right to certain treatment, we have an obligation to treat it that way.', text: "This is the **converse** of the stated principle. The argument states: Obligation → Rights. This choice says: Rights → Obligation. That is the reverse direction. The argument's logic doesn't depend on this reverse being true — it only uses the original direction (and its contrapositive).\n\n**Negation:** Having rights does NOT always create an obligation. This doesn't affect the argument, which reasons from obligations to rights, not the other way around. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Any entity that has rights also has obligations.', text: "This introduces a claim about whether rights-holders must also bear obligations. The argument never discusses whether entities with rights also have obligations — it only discusses whether trees can *have* rights. This is a completely separate philosophical question.\n\n**Negation:** Some entities with rights do NOT have obligations. This has no impact on the argument about trees. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) Only conscious entities are the sort of things that can have rights.', text: "This provides a *reason* for the premise that trees can't have rights (trees aren't conscious). But the argument already *states* that trees can't have rights as a premise — it doesn't need to justify *why* trees can't have rights. The argument works even if the reason is something other than consciousness.\n\n**Negation:** Non-conscious entities CAN have rights. This might undermine the *premise* that trees can't have rights, but it doesn't address the structural gap between \"no obligation to trees\" and \"no obligation at all.\" Even if we accept the premise, the third-party loophole remains. **Targets the wrong gap.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Avoiding cutting down trees is not an obligation owed to some entity other than trees.', text: "This directly blocks the third-party loophole. It states that no other entity (future generations, communities, ecosystems) grounds an obligation not to cut down trees. If the only possible source of the obligation is the trees themselves, then disproving that source disproves the obligation entirely.\n\n**Negation Test:** Avoiding cutting down trees **IS** an obligation owed to some entity other than trees — for example, to future generations. If this is true, then even though we owe nothing directly to trees, we might owe it to future generations to preserve forests. The editorialist's conclusion — that there is *no* obligation not to cut down trees — is destroyed because a different obligation-holder exists.\n\n**The argument collapses.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(E) One does not always have the right to cut down the trees on one\'s own property.', text: "This introduces property rights — a legal concept outside the argument's philosophical scope. The argument is about moral obligations and rights in the abstract, not about property law. Whether someone has a legal right to cut trees on their land is a separate question.\n\n**Negation:** One DOES always have the right to cut trees on one's property. This doesn't affect the philosophical argument about obligations. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Block the Third Party?'], rows: [
      ['(A)', 'Converse of the stated principle (Rights → Obligation)', 'No — wrong logical direction'],
      ['(B)', 'Whether rights-holders also bear obligations', 'No — unrelated philosophical question'],
      ['(C)', 'Why trees can\'t have rights (consciousness)', 'No — explains premise, not the scope gap'],
      ['**(D)**', '**No other entity grounds this obligation**', '**Yes — blocks the third party ✓**'],
      ['(E)', 'Property rights and tree-cutting', 'No — legal concept outside the argument\'s scope'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument disproves a claim about a *specific* relationship (obligation to trees) but draws a *general* conclusion (no obligation not to cut trees), the necessary assumption must rule out all alternative relationships that could support the general claim.\n\nThe Third Party pattern tests whether you can see that refuting one *basis* for a claim does not refute the claim *itself* — unless that basis is the only possible one. The correct answer will always close the loophole by stating that no other entity, reason, or pathway could independently support the conclusion.\n\nWatch for the subtle difference between \"no obligation *to X*\" and \"no obligation *regarding X*.\" The first eliminates one specific relationship. The second eliminates all possible relationships — and the gap between the two is the third-party assumption." },
  ]
};
