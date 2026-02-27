import { Lesson } from '../../types';

export const Lesson6_Drill_LesserOfTwoEvils: Lesson = {
  id: "12-6",
  title: "Drill: Strengthening a 'Lesser of Two Evils' Argument (PT-113-S-2-Q-22)",
  content: [
    { type: 'h2', text: 'The Lesser of Two Evils' },
    { type: 'paragraph', text: "The Lesser of Two Evils principle addresses arguments where all available options have downsides, and the author concludes that one imperfect option should be chosen over another. Unlike the Normative Bridge (which bridges facts to values) or the Efficiency Principle (which bridges cost comparisons to choices), this principle type operates in a space of **acknowledged trade-offs**. The author concedes that the preferred option causes harm, but argues it is still the right choice because the alternative is worse." },
    { type: 'paragraph', text: "These arguments are among the most difficult Principle-Strengthen questions because the correct answer is often a highly abstract statement about risk management or comparative value — not a topically specific rule. The argument's structure involves a concession (\"Yes, Option A has this cost\"), a practical problem (\"But Option B has a worse risk\"), and a conclusion (\"Therefore, choose Option A\"). The unstated principle is a **hierarchy of errors**: a meta-rule about which type of mistake is more acceptable." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Lesser of Two Evils Gap' },
    { type: 'paragraph', text: "Use this diagnostic:" },
    { type: 'list', items: [
      '**Check for a concession:** Does the author acknowledge that the preferred option has a downside? Look for language like "Granted," "Admittedly," "It is true that," or "While it may..." This is the hallmark signal.',
      '**Check for two flawed systems:** Does the argument implicitly or explicitly compare two options, both of which produce errors or harms? One option risks Error Type A; the other risks Error Type B.',
      '**Check the conclusion:** Does the author choose one imperfect option over the other, despite the acknowledged cost? ("Nonetheless," "Nevertheless," "Even so, one should...")',
      '**If YES to all three:** The argument has a lesser-of-two-evils gap. The correct principle will state which type of error is more acceptable — it will provide the value judgment that the argument relies on but never states.',
    ]},
    { type: 'callout', variant: 'default', title: 'The Lesser of Two Evils Template', text: "**Option A Risk:** Error Type 1 (e.g., being too harsh on some)\n\n**Option B Risk:** Error Type 2 (e.g., being too lenient on others)\n\n**Concession:** \"Admittedly, Option A causes Error Type 1.\"\n\n**Conclusion:** \"Nonetheless, choose Option A.\"\n\n**Missing Principle:** \"Error Type 1 is more acceptable than Error Type 2.\"\n\nThe principle does not eliminate the downside of the chosen option — it establishes that the downside is the *lesser* evil compared to the alternative." },

    { type: 'h4', text: 'Common Lesser of Two Evils Variations' },
    { type: 'table', headers: ['Concession', 'Practical Problem', 'Principle Needed'], rows: [
      ['Some deserving people will be treated too harshly', 'The alternative risks undeserved leniency', 'Severity errors are preferable to leniency errors'],
      ['The cautious approach misses some real opportunities', 'The aggressive approach risks catastrophic losses', 'Missing opportunities is better than risking catastrophe'],
      ['Strict rules are sometimes unfair to individuals', 'Flexible rules are open to manipulation and abuse', 'Occasional unfairness is preferable to systemic abuse'],
      ['Rejecting a true claim is a loss', 'Accepting a false claim causes greater harm', 'False acceptance is worse than false rejection'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Lesser of Two Evils (PT-113-S-2-Q-22)' },

    { type: 'h4', text: 'The Problem' },


    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "This argument has a sophisticated rhetorical structure: opposing view → concession → conclusion with evidence. Let's dissect each move." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"Many people believe that the punishment of those who commit even the most heinous crimes should be mitigated to some extent if the crime was motivated by a sincere desire to achieve some larger good."', text: "This is the opposing viewpoint the theorist will argue against. It presents a morally intuitive position: good motives should lead to lighter sentences, even for terrible crimes. The theorist introduces this view to acknowledge its appeal before dismantling it." },
      { title: '"Granted, some criminals with admirable motives deserve mitigated punishments."', text: "This is a critical **concession**. The theorist admits that, in a world of perfect information, the opposing view has merit — some well-intentioned criminals genuinely deserve lighter sentences. This concession is the hallmark of a \"lesser of two evils\" argument: the theorist acknowledges a real cost to the position they will advocate. This single word — \"Granted\" — signals the entire argument structure." },
      { title: '"Nonetheless, judges should never mitigate punishment on the basis of motives..."', text: "This is the main conclusion. \"Nonetheless\" signals the pivot from concession to hardline rule. Despite admitting that some criminals with admirable motives *deserve* mitigation, the theorist advocates for an absolute ban on motive-based mitigation. This creates a known cost: some deserving people will receive overly harsh sentences." },
      { title: '"...since motives are essentially a matter of conjecture and even vicious motives can easily be presented as altruistic."', text: "This is the evidence justifying the conclusion. The reasoning is practical and epistemic: motives are internal psychological states that cannot be reliably verified. The risk is that criminals with *vicious* motives will successfully present themselves as well-intentioned, receiving undeserved leniency. This is the harm the theorist wants to avoid." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Logical Leap' },
    { type: 'paragraph', text: "The argument identifies two flawed sentencing systems and chooses one over the other:" },
    { type: 'table', headers: ['', 'System 1: Consider Motives', 'System 2: Never Consider Motives'], rows: [
      ['**Goal**', 'Perfect justice — tailor sentences to true motives', 'Avoid deception — don\'t let bad actors game the system'],
      ['**The Risk**', 'Errors of **leniency**: vicious criminals fake good motives and receive lighter sentences', 'Errors of **severity**: well-intentioned criminals receive harsher sentences than they deserve'],
      ['**The Cost**', 'Bad actors exploit the system', 'Good actors are treated unfairly'],
    ]},
    { type: 'paragraph', text: "The theorist chooses System 2 (never consider motives). The concession acknowledges System 2's cost: some deserving criminals will be sentenced too harshly. The evidence highlights System 1's risk: motives can be faked, so the system would be exploited by bad actors." },
    { type: 'paragraph', text: "**The gap:** The theorist never states *why* System 2's errors (overly harsh sentences for some) are preferable to System 1's errors (undeserved leniency for bad actors). The argument needs a value judgment about which type of sentencing error is more acceptable." },
    { type: 'callout', variant: 'default', title: 'Classifying the Gap', text: "This is a **Lesser of Two Evils** gap. The argument concedes a real cost (errors of severity), presents a practical risk with the alternative (errors of leniency from unverifiable motives), and concludes in favor of the option with the acknowledged cost. The bridge needed is a principle establishing that severity errors are preferable to leniency errors — a hierarchy of sentencing mistakes." },

    { type: 'h4', text: 'Step 3: Pre-phrase the Principle' },
    { type: 'paragraph', text: "The argument needs a general rule that establishes which type of sentencing error is worse. In abstract terms:" },
    { type: 'paragraph', text: "***\"It is better to err on the side of excessive severity than to err on the side of excessive leniency.\"***" },
    { type: 'paragraph', text: "This principle, if valid, closes the gap: the theorist's preferred system (System 2) risks severity errors, while the rejected system (System 1) risks leniency errors. If severity errors are the lesser evil, then choosing System 2 is justified — even though it comes at the cost of treating some well-intentioned criminals too harshly." },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'paragraph', text: "Armed with our pre-phrase, let's evaluate each answer choice systematically. This question is especially trap-heavy because several answers sound topically relevant to criminal justice." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Laws that prohibit or permit actions solely on the basis of psychological states should not be part of a legal system.', text: "This is the most tempting wrong answer. \"Motives\" are indeed psychological states, and the theorist does argue against using motives. However, the theorist's reason for rejecting motive-based mitigation is not that psychological states are inherently improper legal criteria — it is that motives are *unknowable* and *fakeable*. The theorist's reasoning is practical (we can't verify motives), not categorical (psychological states should never matter in law). This principle is too broad and does not capture the specific risk-based reasoning.\n\n**Why it fails:** It offers a categorical rule about psychological states in general, when the argument's logic is about the practical problem of verifying motives specifically.", badge: 'Topically-Relevant Trap', badgeColor: 'red' },
      { title: '(B) It is better to err on the side of overly severe punishment than to err on the side of overly lenient punishment.', text: "This matches our pre-phrase almost exactly. It directly addresses the choice between the two flawed systems by providing the missing value judgment: leniency errors are worse than severity errors. Applied to the argument:\n\n1. System 1 (consider motives) risks leniency errors — bad actors getting lighter sentences.\n2. System 2 (never consider motives) risks severity errors — good actors getting harsher sentences.\n3. This principle says severity errors are the lesser evil.\n4. Therefore, System 2 is the better choice.\n\nThe principle justifies the theorist's decision to adopt the absolute \"never mitigate\" rule, even at the cost of treating some well-intentioned criminals too harshly.", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) The legal permissibility of actions should depend on the perceivable consequences of those actions.', text: "This answer tempts because it invokes \"perceivable\" — which seems related to the \"conjecture\" problem with motives. However, the stimulus is about how to determine *punishment* (sentencing), not about the \"legal permissibility of actions\" (whether conduct is legal or illegal). The crime has already been committed; the question is how to sentence the criminal, not whether the action should be legal.\n\n**Why it fails:** It addresses the wrong legal question — permissibility of actions vs. severity of punishment.", badge: 'Scope Mismatch', badgeColor: 'red' },
      { title: '(D) No law that cannot be enforced should be enacted.', text: "The argument is not about whether a law *can be enforced*. It is about what criteria judges should use when determining sentences. A law requiring judges to consider motives *could* be enforced — judges would simply ask about motives and make a judgment. The problem the theorist identifies is not enforceability but *reliability*: the system would be enforced, but enforced badly because motives can be faked.\n\n**Why it fails:** It addresses enforceability when the argument is about reliability of information.", badge: 'Irrelevant Issue', badgeColor: 'red' },
      { title: '(E) A legal system that, if adopted, would have disastrous consequences ought not be adopted.', text: "The theorist never claims that allowing motive-based mitigation would be \"disastrous.\" The argument acknowledges that considering motives *would sometimes produce correct results* (the concession admits some criminals genuinely deserve mitigation). The problem is not catastrophe but *error rate*: some bad actors would successfully fake good motives. \"Disastrous\" is too extreme for the nuanced, comparative reasoning the theorist employs.\n\n**Why it fails:** It uses extreme language that overshoots the argument's careful comparative analysis.", badge: 'Extreme Language Trap', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Establish a Hierarchy of Errors?'], rows: [
      ['(A)', 'Categorical ban on psychological-state-based laws', 'No — too broad; wrong reason for rejecting motives'],
      ['**(B)**', '**Preference for severity errors over leniency errors**', '**Yes — bridges the gap directly \u2713**'],
      ['(C)', 'Legal permissibility based on consequences', 'No — wrong legal question (permissibility vs. sentencing)'],
      ['(D)', 'Enforceability of laws', 'No — the argument is about reliability, not enforceability'],
      ['(E)', 'Rejecting systems with disastrous consequences', 'No — too extreme for the argument\'s nuanced reasoning'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. The \"Granted... Nonetheless\" structure is the fingerprint of a Lesser of Two Evils argument.** When an author concedes a point but then makes a hardline conclusion, they are making a comparative judgment about which error is worse. The strengthening principle will be a meta-rule about error preferences, not a topical rule about the subject matter.\n\n**2. Map the two systems and their error types before reading the answer choices.** Identify what each option risks. System 1 risks Error A; System 2 risks Error B. The principle must say \"Error B is preferable to Error A\" (or equivalently, \"Error A is worse than Error B\"). This mapping makes the correct answer obvious and exposes topically-relevant traps.\n\n**3. Beware the Topically-Relevant Trap.** Answer (A) is about psychological states in law — deeply relevant to the topic of motives. But topical relevance is not logical relevance. The principle must address the *structure* of the argument (which error is worse), not the *subject* of the argument (motives in criminal law).\n\n**4. Concessions are valuable clues, not distractions.** The concession (\"some criminals with admirable motives deserve mitigated punishments\") reveals the cost the theorist accepts. The strengthening principle must justify accepting this cost by establishing that the alternative cost is worse.\n\n**5. The correct answer for Lesser of Two Evils questions is often surprisingly abstract.** \"It is better to err on the side of X than Y\" is a meta-principle about risk management. It does not mention motives, criminals, or sentencing. This level of abstraction is expected — the principle must be general enough to apply across many similar trade-off situations." },
  ]
};
