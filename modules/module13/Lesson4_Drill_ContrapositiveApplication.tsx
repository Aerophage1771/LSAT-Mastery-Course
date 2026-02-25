import { Lesson } from '../../types';

export const Lesson4_Drill_ContrapositiveApplication: Lesson = {
  id: "13-4",
  title: "Drill: Contrapositive Application (PT-106-S-1-Q-10)",
  content: [
    { type: 'h2', text: 'Contrapositive Application' },
    { type: 'paragraph', text: "A **Contrapositive Application** is a Principle-Apply pattern where the correct answer does not mirror the principle's forward logic. Instead, it applies the principle's logically equivalent contrapositive: if the consequence did not occur (or should not occur), then at least one condition must not have been met. This is the second most common Principle-Apply pattern after direct application, and it is the primary source of difficulty on these questions because it requires you to negate both sides of the rule and reverse the direction." },

    { type: 'paragraph', text: "Many students can apply a principle forward — IF conditions, THEN consequence — but freeze when the correct answer works backward. The LSAT exploits this by constructing stimuli with \"only when\" or \"only if\" language, which naturally sets up a necessary-condition relationship that is most cleanly applied via the contrapositive." },

    { type: 'h3', text: 'How the Contrapositive Works in Principle-Apply' },
    { type: 'paragraph', text: "Every conditional statement has a logically equivalent contrapositive. If the principle says:" },
    { type: 'list', ordered: false, items: [
      '**Original:** IF [Condition] → THEN [Consequence]',
      '**Contrapositive:** IF [NOT Consequence] → THEN [NOT Condition]',
    ]},
    { type: 'paragraph', text: "When a principle uses necessary-condition language — \"only when,\" \"only if,\" \"requires,\" \"must\" — the structure is:" },
    { type: 'list', ordered: false, items: [
      '**Original:** [Outcome] → [Necessary Condition must exist]',
      '**Contrapositive:** [Necessary Condition ABSENT] → [Outcome CANNOT occur]',
    ]},
    { type: 'paragraph', text: "In a contrapositive application, the correct answer shows a scenario where the necessary condition is absent and correctly concludes that the outcome cannot occur. The wrong answers typically commit one of two errors: (1) they treat the necessary condition as sufficient (\"The Balance exists → Growth guaranteed\") or (2) they distort the condition itself." },

    { type: 'callout', variant: 'tip', title: 'Spotting Contrapositive Questions', text: "Look for these signals in the principle:\n\n• **\"only when\"** / **\"only if\"** — the strongest necessary-condition indicators\n• **\"requires\"** / **\"must have\"** — explicit necessity language\n• **\"cannot... unless\"** — double-negative necessity\n\nWhen you see these, immediately write the contrapositive. The correct answer will almost always apply the principle in that reversed form." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Contrapositive Application (PT-106-S-1-Q-10)' },
    { type: 'paragraph', text: "This drill demonstrates the contrapositive pattern using a principle with \"only when\" language. Your task is to identify the necessary condition, form the contrapositive, and find the answer that correctly applies it." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '13-4-drill',
      questionType: 'Principle - Apply',
      difficulty: 'medium',
      stimulus: "It is a principle of economics that a nation can experience economic growth only when consumer confidence is balanced with a small amount of consumer skepticism.",
      question: "Which one of the following is an application of the economic principle above?",
      options: [
        "(A) Any nation in which consumer confidence is balanced with a small amount of consumer skepticism will experience economic growth.",
        "(B) Any nation in which the prevailing attitude of consumers is not skepticism will experience economic growth.",
        "(C) Any nation in which the prevailing attitude of consumers is either exclusively confidence or exclusively skepticism will experience economic growth.",
        "(D) Any nation in which the prevailing attitude of consumers is exclusively confidence will not experience economic growth. (Correct)",
        "(E) Any nation in which consumer skepticism is balanced with a small amount of consumer confidence will experience economic growth.",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Diagram the Principle' },
    { type: 'paragraph', text: "The principle uses the phrase \"only when,\" which is the LSAT's signature necessary-condition indicator. Let's translate:" },
    { type: 'paragraph', text: "**Natural language:** \"A nation can experience economic growth only when consumer confidence is balanced with a small amount of consumer skepticism.\"" },
    { type: 'paragraph', text: "**Logical form:** Economic Growth (EG) → The Balance must exist (confidence balanced with small amount of skepticism)" },
    { type: 'paragraph', text: "\"Only when\" tells us The Balance is *necessary* for Economic Growth. It does NOT tell us The Balance is *sufficient*. Having The Balance does not guarantee growth — it merely permits it." },

    { type: 'h4', text: 'Step 2: Form the Contrapositive' },
    { type: 'paragraph', text: "Since this is a necessary-condition principle, the most reliable way to apply it is through its contrapositive:" },
    { type: 'breakdown', labels: { title: 'Direction', text: 'Logical Statement' }, items: [
      { title: 'Original', text: 'Economic Growth → The Balance exists\n\nIf a nation has economic growth, then consumer confidence is balanced with a small amount of skepticism.', badge: 'Forward', badgeColor: 'blue' },
      { title: 'Contrapositive', text: '¬The Balance → ¬Economic Growth\n\nIf the balance does NOT exist (e.g., consumers are exclusively confident or exclusively skeptical), then the nation CANNOT experience economic growth.', badge: 'Reverse', badgeColor: 'indigo' },
    ]},
    { type: 'paragraph', text: "The correct answer should describe a scenario where The Balance is absent and correctly conclude that economic growth cannot occur." },

    { type: 'h4', text: 'Step 3: Check Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Checklist Evaluation' }, items: [
      { title: '(A) Balance exists → nation WILL experience economic growth.', text: "**What it claims:** The Balance is present → Economic Growth is guaranteed.\n**Why it fails:** This treats a necessary condition as a sufficient one. The principle says The Balance is *required* for growth, not that it *guarantees* growth. This is the classic Sufficient-Necessary Reversal — the single most common trap on conditional-reasoning questions.\n\n**Logical error:** Affirming the consequent (A → B, B, therefore A).", badge: 'Reversal Trap', badgeColor: 'red' },
      { title: '(B) Prevailing attitude is not skepticism → nation WILL experience economic growth.', text: "**What it claims:** If consumers are not skeptical, economic growth will follow.\n**Why it fails:** \"Not skepticism\" is far too vague. It could mean 100% confidence with zero skepticism — which would violate The Balance requirement. The principle requires a *specific mixture* (confidence balanced with a small amount of skepticism), not simply the absence of skepticism. This answer ignores the precise composition of the required balance.\n\n**Logical error:** Over-broad interpretation of the negated condition.", badge: 'Overly Broad', badgeColor: 'red' },
      { title: '(C) Exclusively confidence OR exclusively skepticism → nation WILL experience economic growth.', text: "**What it claims:** When consumers are all-in on confidence or all-in on skepticism, growth follows.\n**Why it fails:** \"Exclusively\" anything is the definition of NOT having The Balance. By the contrapositive, the absence of The Balance means growth CANNOT happen. Yet this answer claims growth WILL happen. It reaches the exact opposite conclusion from what the principle requires.\n\n**Logical error:** Direct contradiction of the contrapositive.", badge: 'Contradiction', badgeColor: 'red' },
      { title: '(D) Exclusively confidence → nation will NOT experience economic growth.', text: "**What it claims:** When consumers are exclusively confident (no skepticism), economic growth will not occur.\n**Why it works:** This is a textbook contrapositive application:\n\n1. **Trigger:** \"Exclusively confidence\" means there is no skepticism at all, so the required balance (confidence + small amount of skepticism) is absent. ¬The Balance.\n2. **Result:** The contrapositive dictates: ¬The Balance → ¬Economic Growth. The choice correctly concludes the nation \"will not experience economic growth.\"\n3. **Direction:** The reasoning flows from the absence of the condition to the denial of the outcome — exactly how a contrapositive works.", badge: 'Correct', badgeColor: 'green' },
      { title: '(E) Skepticism balanced with a small amount of confidence → nation WILL experience economic growth.', text: "**What it claims:** Flipping the ratio (skepticism dominant, small confidence) produces growth.\n**Why it fails:** Two independent errors. First, the principle specifies *confidence* balanced with a small amount of *skepticism* — not the reverse. The dominant attitude matters. Second, even if the condition were correctly stated, this answer commits the same reversal as (A): treating a necessary condition as sufficient.\n\n**Logical error:** Distortion of the condition + Sufficient-Necessary Reversal.", badge: 'Distortion + Reversal', badgeColor: 'red' },
    ]},

    { type: 'h4', text: 'Step 4: Verify' },
    { type: 'paragraph', text: "Re-read the principle and confirm that answer (D) correctly applies the contrapositive:" },
    { type: 'list', ordered: true, items: [
      '**Contrapositive formed correctly?** Original: EG → Balance. Contrapositive: ¬Balance → ¬EG. ✓',
      '**Trigger satisfied?** "Exclusively confidence" = no skepticism = The Balance is absent. ✓',
      '**Correct conclusion?** "Will not experience economic growth" = ¬EG. ✓',
      '**No logical errors?** No reversal, no distortion, no contradiction. ✓',
    ]},
    { type: 'paragraph', text: "All elements confirmed. Answer (D) is a clean contrapositive application." },

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'Balance Present?', 'Correct Direction?', 'Valid Conclusion?', 'Verdict'], rows: [
      ['(A) Balance → Growth', '✓ (present)', '✗ — treats necessary as sufficient', '✗ — guarantees growth', 'Reversal'],
      ['(B) Not skepticism → Growth', '? — vague', '✗ — unrelated to the principle\'s logic', '✗ — guarantees growth', 'Over-broad'],
      ['(C) Exclusive → Growth', '✗ (absent)', '✗ — should deny growth, not affirm it', '✗ — contradicts contrapositive', 'Contradiction'],
      ['**(D) Exclusive confidence → No growth**', '**✗ (absent)**', '**✓ — contrapositive direction**', '**✓ — denies growth**', '**Correct ✓**'],
      ['(E) Flipped ratio → Growth', '✗ (distorted)', '✗ — treats necessary as sufficient', '✗ — guarantees growth', 'Distortion + Reversal'],
    ]},

    { type: 'paragraph', text: "The pattern is striking: **four of five wrong answers claim economic growth WILL occur** in situations where the principle either says nothing about growth or actively prohibits it. The LSAT baits you with the appealing but invalid inference that meeting (or approximating) a necessary condition guarantees the outcome." },

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. \"Only when\" introduces a necessary condition, not a sufficient one.** The phrase \"X only when Y\" means Y is required for X, but Y alone does not guarantee X. The most reliable application is the contrapositive: if Y is absent, X cannot occur.\n\n**2. The contrapositive is the workhorse of necessary-condition principles.** When a principle tells you what is *required*, the cleanest application is to show what happens when the requirement is *not met*. Look for answers that deny the necessary condition and deny the outcome.\n\n**3. The Sufficient-Necessary Reversal is the #1 trap.** Choices (A) and (E) both commit this error: they assume that having the necessary condition guarantees the outcome. This is the most common wrong-answer pattern on conditional Principle-Apply questions.\n\n**4. Distortion of the condition is a secondary trap.** Choice (E) doesn't just reverse the logic — it also alters the condition itself by flipping the confidence-skepticism ratio. Always verify that the specific content of the condition matches the principle exactly, not just approximately.\n\n**5. When you see necessary-condition language, write the contrapositive immediately.** Don't wait until you've read the answers. Form the contrapositive as part of your principle decomposition in Step 1. This gives you two valid forms to match against, doubling your chances of recognizing the correct answer quickly." },
  ]
};
