import { Lesson } from '../../types';

export const Lesson5_Drill_OnlyWay: Lesson = {
  id: "11-5",
  title: "Drill: The 'Only Way' Assumption (PT-116-S-3-Q-1)",
  content: [
    { type: 'h2', text: 'The Only Way' },
    { type: 'paragraph', text: "The \"Only Way\" pattern is a \"defender\" assumption — it protects the argument against alternatives rather than building a bridge between concepts. In these questions, the author identifies a single factor as crucial for an outcome. They then conclude that if this factor is removed, the outcome is impossible. The logic depends entirely on the unstated belief that **no alternative factors could produce the same outcome**." },
    { type: 'paragraph', text: "This pattern appears whenever an author treats one cause as the *exclusive* means to an end. The evidence shows that removing Factor X eliminates incentive/cause/mechanism Y. The conclusion then makes the absolute claim that without X, the outcome won't happen at all. The gap is the ignored universe of alternative causes — the author never considers that Y could come from somewhere else." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot an Only Way Gap' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Look for absolute language in the conclusion:** Words like "no one will," "nothing can," "the only," or "impossible without" signal that the author is making an exclusive claim about a single cause.',
      '**Ask: "Could there be other causes?"** If the evidence only eliminates *one* factor, but the conclusion says the *entire outcome* is eliminated, the author must be assuming there are no alternative paths to the outcome.',
      '**Predict the answer:** The correct answer will state that the identified factor is the *only effective* way to produce the outcome — there are no alternatives.',
    ]},
    { type: 'callout', variant: 'tip', title: 'The Defender Role', text: "\"Only Way\" assumptions are **defender assumptions** — they don't build a bridge between concepts; instead, they defend the argument by eliminating threats. The threat is: \"What if there's another way to achieve the same result?\" The necessary assumption defends against this threat by asserting that no other way exists." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Only Way (PT-116-S-3-Q-1)' },

    { type: 'h4', text: 'The Problem' },


    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "This argument has a clear logical chain. Let's trace it carefully." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"The development of new inventions is promoted by the granting of patent rights..."', text: "Background. Establishes that patents promote invention by giving inventors exclusive profit rights." },
      { title: '"Without patent rights, anyone could simply copy another\'s invention; consequently, inventors would have no financial incentive..."', text: "This is the key premise. It establishes a specific causal chain: No patents → No exclusive profits → No **financial** incentive. Note the crucial word: **financial**." },
      { title: '"Thus, it is important to continue to grant patent rights, or else no one will engage in original development and consequently no new inventions will be forthcoming."', text: "This is the conclusion. \"Thus\" signals the leap. The author claims: without patents, **no one** will invent anything. This is an absolute claim — not \"fewer\" inventions, but *zero*." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**The Evidence:** Without patents → No *financial* incentive to invent.\n\n**The Conclusion:** Without patents → *No one* will invent anything.\n\n**The Gap:** The evidence only eliminates one specific type of motivation: **financial incentive**. But are financial incentives the *only* reason people invent things? Consider:\n- Scientists might invent out of **curiosity** or intellectual passion.\n- Inventors might seek **fame** or recognition.\n- People might invent to **solve a personal problem** or improve their own lives.\n- Academics might invent as part of **research obligations**.\n\nThe conclusion's absolute language (\"no one will engage\") requires that none of these alternative motivations are sufficient to drive invention. If even one person would invent without financial incentive, the conclusion fails." },
    { type: 'callout', variant: 'default', title: 'Spotting the Scope Shift', text: "The telltale sign is the shift from a **specific** type of incentive (financial) to a **universal** claim (no one). Whenever you see this kind of scope expansion — from one factor to all factors — the author is assuming that the one factor is the only one that matters." },

    { type: 'h4', text: 'Step 3: Pre-phrase' },
    { type: 'paragraph', text: "For the argument to work, the author must assume that financial reward is the *only effective* incentive for invention. If other incentives could motivate people to invent, then removing patents (and thus financial incentives) would not necessarily eliminate all invention." },

    { type: 'h4', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Financial reward is the only incentive that will be effective in motivating people to develop new inventions.', text: "This directly fills the \"Only Way\" gap. It asserts that no alternative incentives can effectively motivate invention.\n\n**Negation Test:** Financial reward is **NOT** the only effective incentive. If true, then even without patents (and without financial incentive), people might still invent for other reasons — curiosity, fame, problem-solving, etc. The absolute conclusion that \"no one will engage\" is destroyed. **The argument collapses.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(B) When an inventor sells patent rights to a manufacturer, the manufacturer makes less total profit than the inventor does.', text: "The specific distribution of profits between inventors and manufacturers is irrelevant to whether financial incentive is the only motivation for invention. This is a detail about how the patent system distributes wealth, not about the fundamental question of what motivates invention.\n\n**Negation:** The manufacturer makes MORE profit. This doesn't affect whether people would invent without financial incentives. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) Any costs incurred by a typical inventor in applying for patent rights are insignificant...', text: "This is about the cost-benefit analysis of *using* the patent system. It's a detail about how the current system operates, not about the hypothetical world without patents. The argument's conclusion is about what would happen if patents didn't exist at all.\n\n**Negation:** The costs ARE significant compared to benefits. This might make the current system less effective, but doesn't affect whether people would invent without any financial incentive. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Patent rights should be granted only if an inventor\'s product is not similar to another invention already covered by patent rights.', text: "This is a policy prescription about *how* patents should be granted. The argument is about *why* patents are necessary, not about the criteria for granting them.\n\n**Negation:** Patents SHOULD be granted even if similar inventions exist. This doesn't affect the core argument about incentives. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) The length of a patent right is usually proportional to the costs involved in inventing the product.', text: "A detail about how patent duration is calibrated. This is about the mechanics of the patent system, not about the fundamental question of what motivates people to invent.\n\n**Negation:** Patent length is NOT proportional to invention costs. This might make the system less efficient, but doesn't affect whether financial incentive is the only motivation. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Address Alternative Incentives?'], rows: [
      ['**(A)**', '**Whether financial reward is the only effective incentive**', '**Yes — closes the gap ✓**'],
      ['(B)', 'Profit distribution in patent sales', 'No — detail about current system'],
      ['(C)', 'Cost of applying for patents', 'No — detail about current system'],
      ['(D)', 'Criteria for granting patents', 'No — policy detail'],
      ['(E)', 'Duration calibration of patents', 'No — system mechanic'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument claims that removing one specific cause will eliminate an effect **entirely**, it is making an \"Only Way\" assumption. The author must believe that the stated cause is the *only effective way* to produce the effect — no alternatives exist.\n\nThe signature of this pattern is **absolute language in the conclusion**: \"no one will,\" \"impossible without,\" \"the only way.\" Whenever you see this, ask: \"Could there be another way?\" The necessary assumption defends against this threat by asserting exclusivity.\n\nNotice how the wrong answers in this question are all about the *mechanics* of the patent system — profit splits, application costs, duration, criteria. These are details that don't touch the core logical question: \"Is financial incentive the only thing that motivates invention?\" Don't be distracted by choices that are on-topic but off-logic." },
  ]
};
