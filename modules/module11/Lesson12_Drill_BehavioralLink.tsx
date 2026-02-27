import { Lesson } from '../../types';

export const Lesson12_Drill_BehavioralLink: Lesson = {
  id: "11-12",
  title: "Drill: The 'Behavioral Link' Assumption (PT-112-S-3-Q-18)",
  content: [
    { type: 'h2', text: 'The Behavioral Link' },
    { type: 'paragraph', text: "The Behavioral Link is a Necessary Assumption pattern where an author attacks a principle (like self-acceptance) because it supposedly prevents a necessary behavior (like pursuing excellence). The author establishes that a certain behavior is required for a desired outcome, then claims that the targeted principle is incompatible with that behavior. The necessary assumption is the unstated connection between the *internal state* (the mindset or belief the principle promotes) and the *external behavior* (the action the author says is required)." },
    { type: 'paragraph', text: "This pattern is subtle because the author's rule about the required behavior may be perfectly correct. The flaw is the hidden leap: the assumption that adopting a certain mindset *actually prevents* the required behavior. It's entirely possible to hold the mindset the author attacks and *still* engage in the necessary behavior. The correct answer will state the missing behavioral link that the author takes for granted." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Behavioral Link Gap' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Look for a principle under attack:** The author criticizes a belief, value, or mindset (e.g., \"people should accept themselves\") and claims it leads to a bad outcome.',
      '**Identify the required behavior:** The author states that a certain action or pursuit is necessary for a desired goal (e.g., \"happiness requires pursuing personal excellence\").',
      '**Ask: "Does the author ever connect the mindset to the behavior?"** The author assumes the criticized principle *prevents* the required behavior, but does the argument actually say so? Could someone hold the principle *and still* engage in the behavior?',
      '**Predict the answer:** The correct answer will state that people who adopt the criticized principle are less likely (or unable) to perform the required behavior.',
    ]},
    { type: 'callout', variant: 'tip', title: 'Mindset ≠ Action', text: "The Behavioral Link pattern exploits a common intuition: that what people *believe* determines what they *do*. But this isn't necessarily true. Someone who \"accepts themselves as they are\" might still pursue excellence — they just do so from a place of satisfaction rather than dissatisfaction. The author assumes self-acceptance *prevents* the pursuit of excellence, but that's an empirical claim, not a logical certainty." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Behavioral Link (PT-112-S-3-Q-18)' },

    { type: 'h4', text: 'The Problem' },


    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "This argument attacks a principle by building a chain of reasoning. Let's identify each link in the chain." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"It is said that people should accept themselves as they are instead of being dissatisfied with their own abilities."', text: "**The Targeted Principle.** The author describes a principle they are about to attack: self-acceptance over self-dissatisfaction. Note the key terms: \"accept themselves\" = not dissatisfied with abilities." },
      { title: '"But this is clearly a bad principle if the goal is a society whose citizens are genuinely happy..."', text: "**Conclusion.** The principle of self-acceptance is \"bad\" for the goal of societal happiness. The word \"but\" signals the author is arguing against the principle." },
      { title: '"...for no one can be genuinely happy if he or she is not pursuing personal excellence..."', text: "**Premise (Rule 1).** Genuine happiness requires pursuing personal excellence. This is a stated conditional: Happy → Pursuing Excellence." },
      { title: '"...and is unwilling to undergo personal change of any kind."', text: "**Premise (Rule 2).** Genuine happiness also requires willingness to change. This adds a second requirement: Happy → Willing to Change. Combined: Happy → Pursuing Excellence AND Willing to Change." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**The Targeted Principle:** Accept yourself as you are (= be satisfied, not dissatisfied).\n\n**The Stated Rule:** Genuine happiness requires pursuing personal excellence.\n\n**The Conclusion:** Self-acceptance is bad for happiness." },
    { type: 'paragraph', text: "**The Gap:** The argument never explains *why* accepting yourself would prevent you from pursuing excellence. Is it really true that people who are satisfied with themselves don't try to improve? Many people pursue excellence *because* they enjoy it, not because they're dissatisfied. A person could accept themselves *and* still pursue growth — self-acceptance and self-improvement aren't necessarily contradictory. The author assumes that the state of mind (satisfaction) dictates the behavior (not pursuing excellence), but this link is never stated." },
    { type: 'callout', variant: 'default', title: 'The Missing Connection', text: "The argument needs this chain:\n\n1. Happiness requires pursuing excellence (**stated**)\n2. Self-accepting people don't pursue excellence (**unstated — the behavioral link**)\n3. Therefore, self-acceptance prevents happiness (**conclusion**)\n\nStep 2 is the hidden assumption. Without it, there's no reason to think self-acceptance conflicts with happiness. Self-accepting people might *also* pursue excellence, in which case the principle of self-acceptance is perfectly compatible with happiness." },

    { type: 'h4', text: 'Step 3: Pre-phrase' },
    { type: 'paragraph', text: "The assumption must connect the internal state (self-acceptance / not being dissatisfied) to the external behavior (not pursuing excellence). It must state that satisfied, self-accepting people are less likely to pursue personal excellence — otherwise, the principle of self-acceptance poses no threat to the pursuit of excellence and therefore no threat to happiness." },

    { type: 'h4', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Those who are willing to change will probably find genuine happiness.', text: "This is a **Mistaken Reversal** of the stated premise. The argument says: Happy → Willing to Change. This choice says: Willing to Change → Probably Happy. That's the reverse direction. The argument needs to connect *self-acceptance* to *not pursuing excellence* — not to establish what happens to people who are willing to change.\n\n**Negation:** Being willing to change does NOT probably lead to happiness. This doesn't affect the argument's core logic about self-acceptance. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) People who are not dissatisfied with themselves are less likely than others to pursue personal excellence.', text: "This is the exact Behavioral Link. It connects the mindset the principle promotes (not being dissatisfied = self-accepting) to the behavior the argument says is required (pursuing personal excellence). Notice the carefully modest wording: \"less likely\" — not \"will never\" or \"cannot.\"\n\n**Negation Test:** People who are not dissatisfied are **NOT less likely** (i.e., equally or more likely) to pursue personal excellence. If this is true, then self-accepting people pursue excellence just as much as dissatisfied people do. Self-acceptance poses no threat to the pursuit of excellence, and therefore no threat to happiness. The conclusion — that self-acceptance is a \"bad principle\" — has no support.\n\n**The argument collapses.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Personal excellence cannot be acquired by those who lack genuine confidence in their own abilities.', text: "This introduces \"confidence\" — a concept the argument never uses. The argument discusses *dissatisfaction* and *self-acceptance*, not confidence. More importantly, self-acceptance could *promote* confidence, which under this choice would actually *help* pursue excellence — potentially undermining the argument rather than supporting it.\n\n**Negation:** Personal excellence CAN be acquired without confidence. This doesn't affect the self-acceptance → pursuit of excellence link. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) People are justified in feeling content with themselves when they have achieved some degree of personal excellence.', text: "This discusses when satisfaction is *justified* — after achieving excellence. But the argument is about whether being satisfied *before* achieving excellence prevents the *pursuit* of it. The question is about motivation, not about when satisfaction is deserved.\n\n**Negation:** People are NOT justified in feeling content after achieving excellence. This addresses a moral question about when satisfaction is appropriate, which is completely tangential to the argument. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Happiness is not genuine unless it is based on something that is painful to obtain.', text: "This introduces \"pain\" as a requirement for genuine happiness — a much stronger and more specific claim than anything in the argument. The argument requires pursuing excellence, not that the pursuit be painful. This is an unnecessarily extreme condition.\n\n**Negation:** Happiness CAN be genuine even if based on something easy to obtain. This doesn't affect the argument's logic about self-acceptance and the pursuit of excellence. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Link Mindset → Behavior?'], rows: [
      ['(A)', 'Willing to change → happy (Mistaken Reversal)', 'No — wrong direction'],
      ['**(B)**', '**Not dissatisfied → less likely to pursue excellence**', '**Yes — provides the behavioral link ✓**'],
      ['(C)', 'Whether confidence is needed for excellence', 'No — introduces unrelated concept (confidence)'],
      ['(D)', 'When satisfaction is justified', 'No — addresses aftermath, not motivation'],
      ['(E)', 'Whether happiness requires pain', 'No — introduces extreme, unrelated condition'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument claims a belief or principle is \"bad\" because it prevents a necessary behavior, the necessary assumption is the **behavioral link** — the unstated connection between the mindset and the action. The author takes for granted that an internal state (satisfaction, acceptance, confidence) *dictates* an external behavior (pursuing excellence, seeking change, taking risks).\n\nPay close attention to the *strength* of the correct answer. Notice that (B) says \"less likely\" — not \"will never\" or \"cannot.\" Necessary assumptions often use modest, cautious language. The assumption doesn't need to establish that self-accepting people *never* pursue excellence — only that they are *less likely* to. This modest claim is still enough to make the argument work, and its negation is still enough to destroy it.\n\nAlso watch for Mistaken Reversal traps like choice (A). The argument states one conditional (Happy → Pursue Excellence) and the trap reverses it (Pursue Excellence → Happy). Always check the direction of the logical arrow." },
  ]
};
