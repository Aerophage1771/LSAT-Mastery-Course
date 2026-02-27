import { Lesson } from '../../types';

export const Lesson8_Drill_FalseDichotomy: Lesson = {
  id: "11-8",
  title: "Drill: The 'False Dichotomy' Assumption (PT-126-S-3-Q-8)",
  content: [
    { type: 'h2', text: 'The False Dichotomy' },
    { type: 'paragraph', text: "The False Dichotomy is a Necessary Assumption pattern where the author considers only two possible outcomes (or categories, or explanations) and builds a conclusion around them — while ignoring the possibility of a middle ground or a third option. The argument's logic is only valid if those two extremes are the *only* possibilities. The necessary assumption is the unstated belief that no other outcome exists." },
    { type: 'paragraph', text: "This pattern is deceptively simple: the author says \"Either X or Y,\" evaluates both, and reaches a conclusion. But the entire structure collapses if there is a Z that the author never considered. On the LSAT, the correct answer will state — or logically imply — that X and Y are exhaustive." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a False Dichotomy' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Look for two-scenario reasoning:** The author evaluates exactly two possibilities (\"If most...\" / \"If few...\"; \"Either A or B\") and draws a conclusion based on those two evaluations.',
      '**Ask: "Is there a middle ground?"** Could there be a moderate, intermediate, or third possibility that the author never considered? If yes, you have found a False Dichotomy.',
      '**Predict the answer:** The correct answer will state that the two scenarios presented are the *only* possible outcomes — that no alternative exists.',
    ]},
    { type: 'callout', variant: 'tip', title: 'The Missing Middle', text: "The False Dichotomy is about **exhaustiveness**, not about individual scenarios. The author may be perfectly right about what happens in Scenario A and Scenario B. The flaw is the assumption that A and B are the *only* scenarios. The Negation Test will reveal this: if a third scenario exists, the conclusion loses its support because the author never evaluated that scenario." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The False Dichotomy (PT-126-S-3-Q-8)' },

    { type: 'h4', text: 'The Problem' },


    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's map out the manager's reasoning, paying close attention to the two-scenario structure." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"There is absolutely no reason to offer our customers free gift wrapping again this holiday season."', text: "**Conclusion.** The manager makes a sweeping, absolute claim: there is *no reason* to offer the service. This is a very strong conclusion that requires very strong support." },
      { title: '"If most customers take the offer, it will be expensive and time-consuming for us."', text: "**Scenario A (High Demand).** The manager evaluates one extreme: if demand is high, the costs are too great. This scenario leads to a negative outcome." },
      { title: '"On the other hand, if only a few customers want it, there is no advantage in offering it."', text: "**Scenario B (Low Demand).** The manager evaluates the other extreme: if demand is low, there is no benefit. This scenario also leads to a negative outcome." },
    ]},
    { type: 'paragraph', text: "**The logical chain:**\nScenario A (most want it) → Bad outcome (expensive) + Scenario B (few want it) → Bad outcome (no advantage) → Therefore, no reason to offer it." },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**Scenario A:** High demand → Too expensive.\n\n**Scenario B:** Low demand → No advantage.\n\n**The Conclusion:** No reason to offer gift wrapping." },
    { type: 'paragraph', text: "**The Gap:** The manager only evaluates two extremes — \"most\" and \"a few.\" But what about the middle? What if a *moderate* number of customers want the service? Say 30-40% of customers take the offer — enough to create meaningful goodwill and customer satisfaction, but not so many that the cost becomes prohibitive. In this moderate scenario, the service might actually be worthwhile. The manager never considers this possibility, and the conclusion depends on it not existing." },
    { type: 'callout', variant: 'default', title: 'The Missing Scenario', text: "The manager's reasoning covers:\n\n- **\"Most\"** → Bad (too expensive)\n- **\"A few\"** → Bad (no advantage)\n- **A moderate number** → ??? (never evaluated)\n\nIf a moderate number of customers would use the service, it could be both affordable AND advantageous. The manager must assume this middle ground doesn't exist." },

    { type: 'h4', text: 'Step 3: Pre-phrase' },
    { type: 'paragraph', text: "The assumption must establish that the two scenarios presented — high demand and low demand — are the *only* possibilities. In other words, there is no moderate middle ground where gift wrapping could be both affordable and beneficial." },

    { type: 'h4', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Gift wrapping would cost the store more during this holiday season than in previous holiday seasons.', text: "This compares costs across years. The argument is about whether the service is worthwhile *this* year, regardless of what it cost in previous years. Whether costs went up or down doesn't affect the two-scenario logic.\n\n**Negation:** Gift wrapping would NOT cost more than in previous years. The manager's argument still works — the two scenarios still cover only the extremes. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Anything that slows down shoppers during the holiday season costs the store money.', text: "This provides a *reason* why high demand might be bad (it slows shoppers), but it is not the structural assumption. The manager already stated that high demand is \"expensive and time-consuming.\" This choice adds another cost but doesn't address the core structural gap.\n\n**Negation:** Things that slow shoppers do NOT cost money. This might weaken Scenario A slightly, but the False Dichotomy gap persists. **Argument survives (core gap untouched).**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) It would be to the store\'s advantage to charge customers for gift wrapping services.', text: "This suggests an alternative business model (paid gift wrapping). The argument is about *free* gift wrapping. Whether a paid service would be advantageous is a completely separate question.\n\n**Negation:** It would NOT be advantageous to charge for gift wrapping. This doesn't affect the argument about free gift wrapping at all. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) It would be expensive to inform customers about the free gift wrapping service.', text: "This introduces a new cost category (advertising/communication). But the manager's argument doesn't rely on marketing costs — it relies on the two demand scenarios. Even if informing customers were free, the two-scenario structure remains unchanged.\n\n**Negation:** It would NOT be expensive to inform customers. This doesn't affect the core logic. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Either few customers would want free gift wrapping or most customers would want it.', text: "This is the exact False Dichotomy assumption. It states that the only two possible outcomes are \"few\" or \"most\" — closing off the moderate middle ground.\n\n**Negation Test:** It is NOT the case that only few or most would want it — a **moderate number** could want it. If a moderate number of customers take the offer, the manager never evaluated this scenario. It could be affordable (unlike Scenario A) and still provide an advantage (unlike Scenario B). The conclusion — that there is \"absolutely no reason\" to offer it — is destroyed because there is an unevaluated scenario where it could work.\n\n**The argument collapses.**", badge: 'Correct', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Close the Middle Ground?'], rows: [
      ['(A)', 'Year-over-year cost comparison', 'No — different topic'],
      ['(B)', 'Why slowing shoppers is bad', 'No — adds detail to Scenario A, not the structure'],
      ['(C)', 'Alternative business model (paid wrapping)', 'No — out of scope'],
      ['(D)', 'Cost of informing customers', 'No — new cost, not the core gap'],
      ['**(E)**', '**Only two demand levels are possible**', '**Yes — eliminates the middle ground ✓**'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument presents exactly two scenarios and concludes something negative based on evaluating only those two, the necessary assumption is that those two scenarios are **exhaustive** — no third possibility exists.\n\nThe False Dichotomy pattern is about **completeness of coverage**. The author may be perfectly correct about what happens in each scenario. The flaw is the silent assumption that these are the *only* scenarios. The Negation Test reveals this: if a middle ground or third option exists, the conclusion loses its support because the author never evaluated that possibility.\n\nWatch for extreme language in the scenarios (\"most\" vs. \"a few\") and absolute language in the conclusion (\"absolutely no reason\"). These are signals that the argument has carved reality into exactly two buckets and assumed nothing falls in between." },
  ]
};
