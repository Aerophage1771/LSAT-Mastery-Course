import { Lesson } from '../../types';

export const Lesson5_Drill_DefinitionalChecklist: Lesson = {
  id: "13-5",
  title: "Drill: Definitional Checklist (PT-123-S-2-Q-7)",
  content: [
    { type: 'h2', text: 'Definitional Checklist' },
    { type: 'paragraph', text: "A **Definitional Checklist** question is a Principle-Apply pattern where the principle defines a category by specifying what qualifies and — critically — what does not. The correct answer is the one scenario that meets every inclusion criterion while clearly avoiding every exclusion criterion. Your job is not to reason about conditional logic or contrapositives; it is to categorize each answer choice against a precise, multi-part definition." },

    { type: 'paragraph', text: "These questions feel different from standard conditional Principle-Apply because the principle reads more like a dictionary entry than a rule. It says: \"X is defined as [positive features] and is distinct from [excluded features].\" The difficulty comes from the LSAT's ability to construct answer choices that satisfy *most* of the definition but violate one element — usually the exclusion clause." },

    { type: 'h3', text: 'The Definitional Checklist Method' },
    { type: 'paragraph', text: "When the principle defines a category, build a two-part checklist before reading the answers:" },
    { type: 'process', title: 'Building a Definitional Checklist', steps: [
      '**Step 1 — Extract the Positive Criteria:** What features must be present for something to qualify? List each required element. Pay attention to words like "solely," "based on," "grounded in" — they tell you what the motivation or feature must be.',
      '**Step 2 — Extract the Exclusion Criteria:** What features must be absent? The principle will often say "in contrast with," "as opposed to," "not based on," or "distinct from." These categories are explicitly disqualified.',
      '**Step 3 — Categorize Each Answer:** For every answer choice, ask two questions: (a) Does it satisfy every positive criterion? (b) Does it fall into any excluded category? Only the answer that passes both filters is correct.',
    ]},

    { type: 'callout', variant: 'tip', title: 'The Exclusion Test Is Usually Decisive', text: "On most definitional checklist questions, multiple answers will superficially resemble the positive definition. The fastest path to the correct answer is often through the exclusion criteria: eliminate any choice whose motivation falls into an excluded category. Typically only one answer survives." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Definitional Checklist (PT-123-S-2-Q-7)' },
    { type: 'paragraph', text: "This drill uses a principle that defines \"the most advanced kind of moral motivation\" by stating what it IS (abstract principles) and what it is NOT (self-interest, societal norms). Your task is to build the checklist and sort five scenarios into the correct categories." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '13-5-drill',
      questionType: 'Principle - Apply',
      difficulty: 'medium',
      stimulus: "Ethicist: The most advanced kind of moral motivation is based solely on abstract principles. This form of motivation is in contrast with calculated self-interest or the desire to adhere to societal norms and conventions.",
      question: "The actions of which one of the following individuals exhibit the most advanced kind of moral motivation, as described by the ethicist?",
      options: [
        "(A) Bobby contributed money to a local charity during a charity drive at work because he worried that not doing so would make him look stingy.",
        "(B) Wes contributed money to a local charity during a charity drive at work because he believed that doing so would improve his employer's opinion of him.",
        "(C) Donna's employers engaged in an illegal but profitable practice that caused serious damage to the environment. Donna did not report this practice to the authorities, out of fear that her employers would retaliate against her.",
        "(D) Jadine's employers engaged in an illegal but profitable practice that caused serious damage to the environment. Jadine reported this practice to the authorities out of a belief that protecting the environment is always more important than monetary profit. (Correct)",
        "(E) Leigh's employers engaged in an illegal but profitable practice that caused serious damage to the environment. Leigh reported this practice to the authorities only because several colleagues had been pressuring her to do so.",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Build the Definitional Checklist' },
    { type: 'paragraph', text: "The ethicist's statement is a definition with explicit inclusion and exclusion criteria. Let's extract them:" },

    { type: 'breakdown', labels: { title: 'Checklist Item', text: 'What to Look For' }, items: [
      { title: 'Positive Criterion: Based solely on abstract principles', text: 'The person\'s motivation must be a general, abstract ethical belief — a principle that applies universally, not just to the specific situation. Key word: "solely" means no mixed motives. The abstract principle must be the *only* driver of the action.', badge: 'Must Be Present', badgeColor: 'blue' },
      { title: 'Exclusion 1: NOT calculated self-interest', text: 'The motivation cannot be personal gain, personal protection, career advancement, financial benefit, or avoidance of personal harm. Any scenario where the person acts to benefit or protect themselves fails this criterion.', badge: 'Must Be Absent', badgeColor: 'red' },
      { title: 'Exclusion 2: NOT desire to adhere to societal norms', text: 'The motivation cannot be peer pressure, fear of social judgment, desire to fit in, conformity, or following what others expect. Any scenario where the person acts because of what others think or want fails this criterion.', badge: 'Must Be Absent', badgeColor: 'red' },
    ]},

    { type: 'paragraph', text: "**The complete filter:** Advanced Motivation = [Abstract Principle as sole driver] + [NOT self-interest] + [NOT societal norms]. An answer must pass ALL three checks." },

    { type: 'h4', text: 'Step 2: Categorize Each Answer' },
    { type: 'paragraph', text: "Now apply the three-part checklist to each scenario. For each person, identify their stated motivation and classify it." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Checklist Evaluation' }, items: [
      { title: '(A) Bobby: worried not donating would make him look stingy.', text: "**Stated motivation:** Fear of negative social perception (\"look stingy\").\n**Category:** This is a textbook example of the desire to adhere to societal norms. Bobby is not driven by a belief about charity's value — he is driven by how others perceive him.\n\n**Positive Criterion (abstract principle)?** ✗ — No abstract principle stated.\n**Exclusion 1 (self-interest)?** Arguably yes, but primarily...\n**Exclusion 2 (societal norms)?** ✓ — Falls squarely into this excluded category.\n\n**Verdict: Fails.** Excluded category — societal norms.", badge: 'Societal Norms', badgeColor: 'red' },
      { title: "(B) Wes: believed donating would improve his employer's opinion of him.", text: "**Stated motivation:** Professional advantage (\"improve his employer's opinion\").\n**Category:** This is calculated self-interest. Wes donates as a career strategy, not out of moral conviction.\n\n**Positive Criterion (abstract principle)?** ✗ — No abstract principle stated.\n**Exclusion 1 (self-interest)?** ✓ — Falls squarely into this excluded category.\n**Exclusion 2 (societal norms)?** Not primarily.\n\n**Verdict: Fails.** Excluded category — self-interest.", badge: 'Self-Interest', badgeColor: 'red' },
      { title: '(C) Donna: did not report illegal practice out of fear of employer retaliation.', text: "**Stated motivation:** Fear of personal harm (\"retaliate against her\").\n**Category:** Self-preservation is a form of calculated self-interest. Donna's inaction is driven by protecting herself from consequences.\n\n**Positive Criterion (abstract principle)?** ✗ — No abstract principle stated.\n**Exclusion 1 (self-interest)?** ✓ — Falls squarely into this excluded category.\n**Exclusion 2 (societal norms)?** Not primarily.\n\n**Verdict: Fails.** Excluded category — self-interest (self-preservation).", badge: 'Self-Interest', badgeColor: 'red' },
      { title: '(D) Jadine: reported illegal practice out of a belief that protecting the environment is always more important than monetary profit.', text: "**Stated motivation:** A universal ethical belief (\"protecting the environment is *always* more important than monetary profit\").\n**Category:** This is an abstract principle — a general moral rule that applies universally (signaled by \"always\"), not just to Jadine's specific situation.\n\n**Positive Criterion (abstract principle)?** ✓ — \"Protecting the environment is always more important than monetary profit\" is a general, abstract ethical principle.\n**Exclusion 1 (self-interest)?** ✓ — Jadine gains nothing personally; she risks employer retaliation by reporting.\n**Exclusion 2 (societal norms)?** ✓ — No mention of peer pressure or social expectations driving her decision.\n\n**Verdict: Passes all three checks.** This is the definitional match.", badge: 'Correct', badgeColor: 'green' },
      { title: '(E) Leigh: reported illegal practice only because colleagues had been pressuring her.', text: "**Stated motivation:** Peer pressure (\"colleagues had been pressuring her\").\n**Category:** Yielding to group pressure is a direct instance of the desire to adhere to societal norms and conventions. The word \"only\" confirms this is Leigh's sole motivation.\n\n**Positive Criterion (abstract principle)?** ✗ — No abstract principle stated.\n**Exclusion 1 (self-interest)?** Not primarily.\n**Exclusion 2 (societal norms)?** ✓ — Falls squarely into this excluded category.\n\n**Verdict: Fails.** Excluded category — societal norms.", badge: 'Societal Norms', badgeColor: 'red' },
    ]},

    { type: 'h4', text: 'Step 3: Verify' },
    { type: 'paragraph', text: "Re-read the ethicist's definition and confirm that answer (D) is the only match:" },
    { type: 'list', ordered: true, items: [
      '**"Based solely on abstract principles"** → Jadine\'s belief that environmental protection is *always* more important than profit is a general, universal ethical principle. ✓',
      '**Not calculated self-interest** → Jadine gains no personal benefit; she actually risks retaliation by reporting her employer. ✓',
      '**Not desire to adhere to societal norms** → No mention of peer pressure, social expectations, or desire to fit in. ✓',
    ]},
    { type: 'paragraph', text: "All three elements confirmed. Answer (D) is the only scenario that satisfies the positive criterion while avoiding both exclusion categories." },

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'Abstract Principle?', 'Self-Interest?', 'Societal Norms?', 'Category'], rows: [
      ['(A) Bobby — look stingy', '✗', '—', '✓ Excluded', 'Societal Norms'],
      ['(B) Wes — employer opinion', '✗', '✓ Excluded', '—', 'Self-Interest'],
      ['(C) Donna — fear of retaliation', '✗', '✓ Excluded', '—', 'Self-Interest'],
      ['**(D) Jadine — environment > profit**', '**✓**', '**✗ Not present**', '**✗ Not present**', '**Advanced Motivation ✓**'],
      ['(E) Leigh — peer pressure', '✗', '—', '✓ Excluded', 'Societal Norms'],
    ]},

    { type: 'paragraph', text: "The sorting is clean: two answers fall into the Self-Interest bin (B, C), two fall into the Societal Norms bin (A, E), and only one — (D) — is driven by an abstract principle. Notice that the LSAT distributed the excluded categories evenly to make every wrong answer feel topically relevant while being categorically disqualified." },

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Definitional principles require categorization, not conditional logic.** Unlike direct or contrapositive applications, definitional checklist questions are about sorting scenarios into categories defined by the principle. Your primary skill is accurate classification.\n\n**2. Build both inclusion AND exclusion criteria.** The principle tells you what the category IS and what it IS NOT. Both halves are equally important. Wrong answers typically satisfy part of the positive definition but fall into an excluded category.\n\n**3. The word \"solely\" is load-bearing.** When the principle says motivation must be based \"solely\" on abstract principles, any mixed motivation disqualifies the answer. Even if someone acts partly from principle but partly from self-interest, they fail the criterion.\n\n**4. Look for the universal marker in the correct answer.** Jadine's belief uses the word \"always\" — a signal that her principle is abstract and general, not situation-specific. Abstract principles typically contain universalizing language: \"always,\" \"never,\" \"any,\" \"all.\"\n\n**5. The exclusion test is your fastest elimination tool.** On this question, you could eliminate all four wrong answers in under 30 seconds by asking a single question: \"Is this person motivated by personal benefit or social pressure?\" If yes, they are categorically excluded. Only then do you need to verify the positive criterion for the remaining answer." },
  ]
};
