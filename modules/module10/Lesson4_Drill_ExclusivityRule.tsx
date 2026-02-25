import { Lesson } from '../../types';

export const Lesson4_Drill_ExclusivityRule: Lesson = {
  id: "10-4",
  title: "Drill: The Exclusivity Rule (PT-122-S-2-Q-25)",
  content: [
    { type: 'h2', text: 'The Exclusivity Rule' },
    { type: 'paragraph', text: "The Exclusivity Rule pattern appears when an argument uses a specific, limited set of conditions to reach a sweeping, absolute conclusion. The premises lay out a defined list of triggers or reasons — \"disclosure is required in these two cases\" or \"a violation occurs only when these three conditions are met\" — and then show that none of the listed triggers apply to the situation. The conclusion leaps to an absolute claim: there is **no reason at all**, it is **impossible**, or it is **unnecessary**." },
    { type: 'paragraph', text: "The logical flaw is that the argument treats a limited list as if it were an exhaustive one. Just because the stated triggers don't apply doesn't mean that *other, unstated* triggers don't exist. The sufficient assumption you need is an **exclusivity rule** — a statement declaring that the listed conditions are the **only** conditions that could ever apply. Once you close this door, the conclusion follows with certainty." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot an Exclusivity Gap' },
    { type: 'paragraph', text: "Use this checklist:" },
    { type: 'list', items: [
      '**Look for a defined list in the premises.** The argument will enumerate specific conditions, rules, or reasons (often using language like "in two cases only," "the following conditions," or "these requirements").',
      '**Look for an absolute conclusion.** The conclusion will use language like "there is no reason," "it is impossible," "there is no need," or "it cannot be the case." This absolute scope is the tell.',
      '**Ask: could there be other reasons?** If you can imagine a reason outside the listed set that would make the conclusion false, you have found the gap. The correct answer will eliminate this possibility by declaring the list exhaustive.',
    ]},
    { type: 'table', headers: ['Premise Structure', 'Conclusion Structure', 'Gap'], rows: [
      ['Rules X and Y are the stated triggers', '"There is no reason at all"', 'Could triggers Z, W, etc. exist outside the stated list?'],
      ['Conditions A, B, and C are defined', '"It is impossible for this to occur"', 'Could condition D (unstated) also cause it?'],
      ['The policy lists three requirements', '"The policy does not apply"', 'Could other policies or requirements also apply?'],
    ]},
    { type: 'callout', variant: 'default', title: 'The Scope Mismatch', text: "The core issue is always a **scope mismatch**: the premises are narrow (a specific list from a specific source), but the conclusion is broad (an absolute claim about all possibilities). The exclusivity rule closes this scope mismatch by declaring that the narrow list *is* the complete list. This transforms the narrow premise into a universal claim, making the absolute conclusion valid." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Exclusivity Rule (PT-122-S-2-Q-25)' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '10-4-drill',
      questionType: 'Sufficient Assumption',
      difficulty: 'medium',
      stimulus: "Cecile's association requires public disclosure of an officer's investments in two cases only: when an officer is authorized to disburse association funds, and when an officer sits on the board of a petrochemical company. Cecile, an officer who is not authorized to disburse funds, sits on the board of just one company, a small timber business. Therefore, there is no reason for Cecile to publicly disclose her investments at this time.",
      question: "The conclusion of the argument follows logically if which one of the following is assumed?",
      options: [
        "(A) Cecile will not be appointed to a position in the association that authorizes her to disburse funds.",
        "(B) Cecile's office and her position on the timber business's board create no conflicts of interest.",
        "(C) The association's requirements provide the only reasons there might be for Cecile to disclose her investments. (Correct)",
        "(D) The timber business on whose board Cecile sits is owned by a petrochemical company.",
        "(E) Cecile owns no investments in the petrochemical industry.",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's trace the argument's logic piece by piece, paying close attention to the scope of each claim." },
    { type: 'breakdown', labels: { title: 'Statement', text: 'Analysis' }, items: [
      { title: '"Cecile\'s association requires public disclosure of an officer\'s investments in two cases only: when an officer is authorized to disburse association funds, and when an officer sits on the board of a petrochemical company."', text: "This is a rule from a specific source — the association. The phrase \"in two cases only\" is critical: it tells us the **complete list of triggers according to the association**. There are exactly two:\n\n**Trigger 1:** Officer is authorized to disburse funds → Must disclose.\n**Trigger 2:** Officer sits on petrochemical board → Must disclose.\n\nImportantly, this rule only covers what the *association* requires. It says nothing about federal law, state regulations, company bylaws, or other potential sources of disclosure obligations." },
      { title: '"Cecile, an officer who is not authorized to disburse funds, sits on the board of just one company, a small timber business."', text: "This applies the association's rules to Cecile specifically:\n\n• **Trigger 1 check:** Does she disburse funds? **No** — she is \"not authorized.\"\n• **Trigger 2 check:** Does she sit on a petrochemical board? **No** — she sits on a *timber* board.\n\nSo according to the association's rules, neither trigger is activated. The association does not require Cecile to disclose." },
      { title: '"Therefore, there is no reason for Cecile to publicly disclose her investments at this time."', text: "This is the conclusion. Notice the critical scope expansion: the author does not say \"the association does not require Cecile to disclose.\" Instead, the author says there is **\"no reason\"** — meaning no reason *whatsoever*, from *any source* — for Cecile to disclose. This is a much broader claim." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**What is the scope mismatch?**\nThe argument moves from a narrow premise to a broad conclusion:" },
    { type: 'table', headers: ['Premise Scope', 'Conclusion Scope'], rows: [
      ['Cecile does not need to disclose **according to the association\'s two rules**', 'There is **no reason at all** for Cecile to disclose'],
    ]},
    { type: 'paragraph', text: "The gap is the possibility that other reasons exist outside of the association's specific requirements. What if federal securities law requires disclosure for officers with stock holdings? What if a court order mandates it? What if professional ethics standards require it? The argument assumes the association's rules are the *only* rules that matter — but it never states this." },

    { type: 'h4', text: 'Step 3: Prephrase the Bridge' },
    { type: 'paragraph', text: "To make the conclusion airtight, we must eliminate every possible reason for disclosure outside the association's rules. We need:" },
    { type: 'paragraph', text: "***\"To make the conclusion guaranteed, I need a rule that says: The association's requirements are the ONLY reasons that could apply to Cecile.\"***" },
    { type: 'paragraph', text: "This exclusivity statement would transform the narrow \"association doesn't require it\" into the broad \"there is no reason at all.\"" },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'paragraph', text: "We are looking for the answer that makes the association's list exhaustive — the only possible reasons for disclosure." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Cecile will not be appointed to a position in the association that authorizes her to disburse funds.', text: "The conclusion is about whether there is a reason to disclose **\"at this time.\"** What might happen in the future is irrelevant to her current duties. Even without this assumption, we already know she currently doesn't disburse funds. This answer addresses a future scenario that the conclusion doesn't concern itself with. **Wrong timeframe.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Cecile\'s office and her position on the timber business\'s board create no conflicts of interest.', text: "A conflict of interest might be a *good moral reason* for disclosure, but the argument is about whether a reason *exists that would require it*. More importantly, this answer still leaves open the possibility that other non-conflict-based reasons exist (e.g., legal requirements). It only eliminates one potential alternative reason while the conclusion claims there are *no* reasons. **Too narrow — doesn't achieve exclusivity.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) The association\'s requirements provide the only reasons there might be for Cecile to disclose her investments.', text: "This is the **Exclusivity Rule**. It declares that the association's two-trigger list is the complete, exhaustive set of reasons that could ever require Cecile to disclose. No federal law, no state regulation, no ethics code, no other source — just the association's rules.\n\n**Logic Check:**\n• The association has two triggers (Premise 1).\n• Cecile activates neither trigger (Premise 2).\n• These are the only reasons that could apply (Answer C).\n• Therefore, there is **no reason** for Cecile to disclose. ✓\n\nThe conclusion follows with 100% certainty.", badge: 'Correct', badgeColor: 'green' },
      { title: '(D) The timber business on whose board Cecile sits is owned by a petrochemical company.', text: "This would actually **undermine** the conclusion. If the timber company is owned by a petrochemical company, there is an argument that Cecile effectively sits on the board of a petrochemical-affiliated entity, which could activate Trigger 2. This answer makes disclosure *more likely*, not less. **Wrong direction — this is a weakener.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Cecile owns no investments in the petrochemical industry.', text: "The association's trigger is about sitting on the *board* of a petrochemical company, not about owning *investments* in the industry. Cecile already doesn't sit on a petrochemical board (she's on a timber board), so this information about her investment portfolio doesn't address either trigger. **Addresses the wrong rule condition.**", badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'The Exclusivity Pattern in Action' },
    { type: 'paragraph', text: "Here is the logical structure laid bare:" },
    { type: 'process', title: 'How the Exclusivity Rule Closes the Gap', steps: [
      '**Premise:** The association lists reasons R₁ and R₂ for disclosure.',
      '**Premise:** Neither R₁ nor R₂ applies to Cecile.',
      '**Gap:** Could there be reasons R₃, R₄, ... Rₙ that also require disclosure?',
      '**Sufficient Assumption (C):** R₁ and R₂ are the ONLY reasons that exist.',
      '**Conclusion (now guaranteed):** There is NO reason for Cecile to disclose. ✓',
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument uses a **specific list** to reach a **broad, absolute conclusion** (like \"there is no reason\" or \"it is impossible\"), the gap is the assumption that the list is exhaustive. The correct sufficient assumption will be a statement of **exclusivity** — it will declare that the stated reasons, rules, or conditions are the **only** ones that could apply.\n\nWatch for the scope mismatch: premises limited to a particular source (one organization's rules, one study's findings, one policy's conditions) versus a conclusion that claims universality (no reason at all, impossible, unnecessary). The exclusivity rule bridges this mismatch by promoting the limited list to the status of a complete list." },
  ]
};
