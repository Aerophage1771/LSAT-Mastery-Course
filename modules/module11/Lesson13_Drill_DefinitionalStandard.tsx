import { Lesson } from '../../types';

export const Lesson13_Drill_DefinitionalStandard: Lesson = {
  id: "11-13",
  title: "Drill: 'Definitional Standard' (PT-114-S-4-Q-20)",
  content: [
    { type: 'h2', text: 'Definitional Standard' },
    { type: 'paragraph', text: "The Definitional Standard pattern appears when an author makes a final judgment about something's quality, success, or value based on a single flaw or risk — applying an unstated, rigid definition that the reader is expected to accept without question. The author identifies a potential negative outcome and concludes that the strategy, plan, or approach is a failure. The necessary assumption is the hidden evaluative rule: that *any* strategy with this particular flaw automatically fails to meet the standard." },
    { type: 'paragraph', text: "This pattern is common in arguments about policies, strategies, and solutions. The author points to one downside and declares the whole thing a failure, effectively defining \"success\" so strictly that a single risk is disqualifying. The correct answer will state the rigid definitional standard the author is silently applying." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Definitional Standard' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Look for a final judgment:** The conclusion uses evaluative language like \"not successful,\" \"inadequate,\" \"ineffective,\" or \"fails.\" The author is passing a verdict on something.',
      '**Identify the single basis for the judgment:** What specific flaw, risk, or downside does the author cite? Is the verdict based entirely on this one point?',
      '**Ask: "Is this standard stated or assumed?"** The author uses a strict definition of the evaluative term (\"successful,\" \"effective\") but never explicitly says what that definition is. A more lenient definition might allow the thing to pass despite the cited flaw.',
      '**Predict the answer:** The correct answer will state the rigid definitional rule — that nothing with the cited flaw can meet the evaluative standard.',
    ]},
    { type: 'callout', variant: 'tip', title: 'The Hidden Rulebook', text: "The Definitional Standard is essentially a hidden evaluative criterion. The author declares something a failure, but never shows you the rulebook they're using. On the LSAT, you need to find the answer that *is* the rulebook — the unstated rule that says \"anything with Flaw X cannot be [successful/effective/adequate].\" Without this rule, the observed flaw might be tolerable, and the final judgment wouldn't follow." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Definitional Standard (PT-114-S-4-Q-20)' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '11-13-drill',
      questionType: 'Necessary Assumption',
      difficulty: 'hard',
      stimulus: "Shy adolescents often devote themselves totally to a hobby to help distract them from the loneliness brought on by their shyness. Sometimes they are able to become friends with others who share their hobby. But if they lose interest in that hobby, their loneliness may be exacerbated. So developing an all-consuming hobby is not a successful strategy for overcoming adolescent loneliness.",
      question: "Which one of the following assumptions does the argument depend on?",
      options: [
        "(A) Eventually, shy adolescents are going to want a wider circle of friends than is provided by their hobby.",
        "(B) No successful strategy for overcoming adolescent loneliness ever intensifies that loneliness. (Correct)",
        "(C) Shy adolescents will lose interest in their hobbies if they do not make friends through their engagement in those hobbies.",
        "(D) Some other strategy for overcoming adolescent loneliness is generally more successful than is developing an all-consuming hobby.",
        "(E) Shy adolescents devote themselves to hobbies mainly because they want to make friends.",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's trace the argument's structure, paying attention to the balance of evidence and how the author reaches the final verdict." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"Shy adolescents often devote themselves totally to a hobby to help distract them from the loneliness brought on by their shyness."', text: "**Background.** Establishes the scenario: shy teens use hobbies to cope with loneliness. This sets up the strategy being evaluated." },
      { title: '"Sometimes they are able to become friends with others who share their hobby."', text: "**Potential Benefit.** The strategy sometimes leads to friendships — a *positive* outcome. The word \"sometimes\" suggests this benefit is not guaranteed but does occur." },
      { title: '"But if they lose interest in that hobby, their loneliness may be exacerbated."', text: "**Potential Risk (Key Premise).** If interest fades, loneliness might get *worse*. Notice two important qualifiers: \"if\" (conditional — this may not happen) and \"may be\" (possibility — not certainty). This is a potential downside, not a guaranteed one." },
      { title: '"So developing an all-consuming hobby is not a successful strategy for overcoming adolescent loneliness."', text: "**Conclusion (Final Verdict).** Despite the potential benefit (sometimes makes friends), the author declares the strategy \"not successful\" based on the potential risk (loneliness may worsen). The word \"so\" signals the logical leap from risk to verdict." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**The Evidence:** The strategy sometimes creates friendships (pro) but may worsen loneliness if interest fades (con).\n\n**The Conclusion:** The strategy is \"not successful.\"\n\n**The Gap:** Why does a *potential* risk of worsening loneliness automatically make the strategy unsuccessful? Many strategies have risks but are still considered successful. Medication may have side effects; therapy may temporarily increase anxiety before helping; exercise regimens may cause injury. In all these cases, we might still call the strategy \"successful\" if its benefits outweigh its risks. The author applies an unstated rule: *any* strategy that *could* intensify loneliness is automatically disqualified from being \"successful.\"" },
    { type: 'callout', variant: 'default', title: 'The Unstated Standard', text: "The author's hidden definition of \"successful strategy\":\n\n**Strict Standard (assumed):** A successful strategy NEVER risks making the problem worse.\n\n**Alternative Standard (possible):** A successful strategy has benefits that outweigh its risks, even if some risk exists.\n\nThe argument only works under the strict standard. Under the alternative standard, the hobby strategy could be successful despite the risk — because it sometimes creates friendships and the risk only materializes *if* the teen loses interest." },

    { type: 'h4', text: 'Step 3: Pre-phrase' },
    { type: 'paragraph', text: "The assumption must state the rigid definitional standard: a strategy cannot be \"successful\" if it has any potential to intensify the problem. In other words, no successful strategy for overcoming loneliness ever risks making that loneliness worse. This is the hidden evaluative rule that drives the conclusion." },

    { type: 'h4', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Eventually, shy adolescents are going to want a wider circle of friends than is provided by their hobby.', text: "This introduces a *future limitation* of the hobby strategy (too narrow a social circle), but the argument's reasoning is about the risk of *losing* the hobby, not about its social scope being too small. The argument would work the same way even if the hobby provided a perfectly adequate social circle.\n\n**Negation:** Shy adolescents will NOT want a wider circle than their hobby provides. This doesn't affect the risk-based reasoning. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) No successful strategy for overcoming adolescent loneliness ever intensifies that loneliness.', text: "This is the hidden definitional standard. It defines \"successful\" in a way that automatically disqualifies any strategy with a risk of intensifying the problem — exactly the rule the author applies.\n\n**Negation Test:** A successful strategy for overcoming loneliness **CAN sometimes** intensify that loneliness. If this is true, then the fact that the hobby strategy *might* worsen loneliness is no longer a valid reason to call it \"not successful.\" A strategy could risk worsening loneliness *and still be considered successful* if its benefits are significant enough. The conclusion loses its only support.\n\n**The argument collapses.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Shy adolescents will lose interest in their hobbies if they do not make friends through their engagement in those hobbies.', text: "This suggests a *cause* for losing interest (no friends → boredom). But the argument's logic doesn't depend on *why* teens might lose interest — it depends on the *consequence* of losing interest (worsened loneliness). The risk exists regardless of the cause.\n\n**Negation:** Shy adolescents will NOT lose interest even without making friends. This would actually *help* the argument by removing the risk scenario, but it doesn't address the core definitional gap. **Wrong gap.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Some other strategy for overcoming adolescent loneliness is generally more successful than is developing an all-consuming hobby.', text: "The argument makes an *absolute* judgment (\"not successful\"), not a *comparative* one (\"less successful than X\"). Whether other strategies exist and work better is irrelevant to whether *this* strategy meets the standard of \"successful.\" A strategy can be \"not successful\" even if no better alternative exists, and it can be \"successful\" even if better alternatives exist.\n\n**Negation:** No other strategy is more successful. This doesn't affect the absolute verdict. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Shy adolescents devote themselves to hobbies mainly because they want to make friends.', text: "This addresses the *motivation* for pursuing hobbies. But the argument is about the *outcomes* (risk vs. benefit), not the *reasons* adolescents choose hobbies. Whether they do it to make friends or to distract themselves from loneliness doesn't change the risk-benefit analysis.\n\n**Negation:** Shy adolescents do NOT mainly pursue hobbies to make friends. This doesn't affect the argument about whether the strategy is successful. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Define "Successful"?'], rows: [
      ['(A)', 'Future desire for wider social circle', 'No — introduces new limitation, not the definitional rule'],
      ['**(B)**', '**No successful strategy ever intensifies loneliness**', '**Yes — provides the strict standard ✓**'],
      ['(C)', 'Why teens might lose interest', 'No — addresses cause of risk, not the evaluative rule'],
      ['(D)', 'Whether better strategies exist', 'No — comparative, not absolute'],
      ['(E)', 'Why teens pursue hobbies', 'No — motivation, not outcome evaluation'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument makes a final evaluative judgment (\"not successful,\" \"inadequate,\" \"a failure\") based on a single flaw or risk, the necessary assumption is the **rigid definitional standard** that makes that one flaw disqualifying. The author is silently applying a strict definition of the evaluative term — one where *any* instance of the cited problem automatically means failure.\n\nThe correct answer will state this absolute standard as a general rule: \"No [successful/effective/adequate] X ever has property Y.\" The Negation Test converts this to: \"A [successful/effective/adequate] X *can* have property Y\" — which immediately removes the basis for the verdict.\n\nWatch for the mismatch between *hedged evidence* and *absolute conclusions*. In this argument, the evidence uses \"if\" and \"may be\" (conditional, tentative), but the conclusion uses \"not a successful strategy\" (definitive, absolute). The assumption bridges this gap by treating a possibility as a disqualifier." },
  ]
};
