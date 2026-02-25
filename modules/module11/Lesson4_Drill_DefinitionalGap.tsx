import { Lesson } from '../../types';

export const Lesson4_Drill_DefinitionalGap: Lesson = {
  id: "11-4",
  title: "Drill: The 'Definitional Gap' Assumption (PT-105-S-1-Q-18)",
  content: [
    { type: 'h2', text: 'The Definitional Gap' },
    { type: 'paragraph', text: "The Definitional Gap is a \"connector\" assumption pattern where the author uses two different terms or concepts and treats them as if they are incompatible, equivalent, or causally related — without ever explicitly stating why. The argument defines something one way (Standard A), describes how it has changed or been categorized differently (Category B), and then concludes that the change means it can no longer meet its original standard. The necessary assumption is the unstated belief that Category B and Standard A are incompatible." },
    { type: 'paragraph', text: "This pattern shows up whenever an argument introduces a conceptual leap — the premises talk about one quality and the conclusion talks about a different quality. The author simply assumes the two are connected, but never says so. Your job is to find the answer choice that states this unstated definitional bridge." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Definitional Gap' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Look for two different concepts:** The premises describe something using Term A. The conclusion evaluates it using Term B. The two terms are related but not identical.',
      '**Ask: "Did the author ever say these two concepts are connected?"** If the author treats them as equivalent or incompatible without saying so, you have found a definitional gap.',
      '**Predict the answer:** The correct answer will explicitly state the relationship between the two concepts — either that they are incompatible ("If B, then not A") or that they are equivalent ("B means A").',
    ]},
    { type: 'callout', variant: 'tip', title: 'The Key Question', text: "For every Definitional Gap question, the critical question is: **\"Could something be BOTH A and B at the same time?\"** If the author concludes that being B means you can't be A, but never explains why A and B are mutually exclusive, the necessary assumption is that they *are* mutually exclusive." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Definitional Gap (PT-105-S-1-Q-18)' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '11-4-drill',
      questionType: 'Necessary Assumption',
      difficulty: 'medium',
      stimulus: "Sociologist: The intended function of news is to give us information on which to act. But in a consumer society, news becomes a product to be manufactured and dispensed to the consumer. An enormous industry for the production and consumption of news has evolved, and we ingest news with an insatiable appetite. Under such circumstances, news is primarily entertaining and cannot, therefore, serve its intended function.",
      question: "Which one of the following is an assumption on which the sociologist's argument depends?",
      options: [
        "(A) News that serves its intended function should not be entertaining.",
        "(B) Most viewers prefer that news be entertaining.",
        "(C) News has only one important function.",
        "(D) News that primarily entertains does not give us information on which to act. (Correct)",
        "(E) A news industry that aims to make a profit inevitably presents news as entertainment.",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's dissect the argument line by line, paying close attention to the specific terms the sociologist uses." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"The intended function of news is to give us information on which to act."', text: "This establishes **Standard A** — the intended function of news. The sociologist defines what news is *supposed* to do: provide actionable information." },
      { title: '"But in a consumer society, news becomes a product to be manufactured and dispensed to the consumer."', text: "Background context. Explains *why* news has changed. This sets the stage for the next claim but is not itself evidence for the conclusion." },
      { title: '"An enormous industry for the production and consumption of news has evolved, and we ingest news with an insatiable appetite."', text: "More context. Describes the scale of the change. Still not the core logical move." },
      { title: '"Under such circumstances, news is primarily entertaining..."', text: "This is the key premise. The sociologist claims that news is now **Category B** — primarily entertaining. This is the current state of news." },
      { title: '"...and cannot, therefore, serve its intended function."', text: "This is the **conclusion**. The word \"therefore\" signals the logical leap. The sociologist concludes that being primarily entertaining (Category B) means news *cannot* fulfill its intended function (Standard A)." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**Standard A (Intended Function):** Give us information on which to act.\n\n**Category B (Current State):** Primarily entertaining.\n\n**The Conclusion:** B → Not A. Being primarily entertaining means it cannot serve its intended function." },
    { type: 'paragraph', text: "**The Gap:** The sociologist never explains *why* being primarily entertaining prevents news from providing actionable information. Is it impossible for something to be *both* primarily entertaining *and* informative? Think of a well-made documentary — it can be highly entertaining *and* deliver actionable information. The sociologist simply assumes that \"primarily entertaining\" and \"gives information on which to act\" are mutually exclusive, but never states this directly." },
    { type: 'callout', variant: 'default', title: 'The Two-Concept Test', text: "Ask: **Could news be primarily entertaining AND still give us information on which to act?** If yes, the argument falls apart. The sociologist must be assuming that this combination is impossible — that entertainment crowds out informational value." },

    { type: 'h4', text: 'Step 3: Pre-phrase' },
    { type: 'paragraph', text: "The assumption must state that Category B (primarily entertaining) is incompatible with Standard A (giving information on which to act). In other words: news that is primarily entertaining *does not* or *cannot* give us actionable information." },

    { type: 'h4', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) News that serves its intended function should not be entertaining.', text: "The sociologist's claim is that news is *primarily* entertaining, not that it can't be entertaining *at all*. The argument can survive even if functional news has some entertainment value — the issue is whether being *primarily* entertaining is the problem.\n\n**Negation:** News that serves its function CAN be entertaining. This doesn't destroy the argument because the sociologist never said functional news must be boring — only that *primarily* entertaining news can't serve its function. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Most viewers prefer that news be entertaining.', text: "Why viewers prefer entertaining news is a question about audience demand, not about whether entertaining news can be informative. The sociologist's argument is about the *nature* of primarily entertaining news, not about *why* it became that way.\n\n**Negation:** Most viewers do NOT prefer entertaining news. This doesn't affect whether primarily entertaining news can serve its function. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) News has only one important function.', text: "The argument focuses specifically on the \"intended function\" (providing actionable information). Whether news has other functions (e.g., building community, recording history) doesn't affect whether it can serve *this particular* function.\n\n**Negation:** News has MORE THAN one important function. This doesn't help or hurt the specific claim about the informational function. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) News that primarily entertains does not give us information on which to act.', text: "This is the exact definitional bridge we predicted. It states that Category B (primarily entertaining) is incompatible with Standard A (providing actionable information).\n\n**Negation Test:** News that primarily entertains **DOES** give us information on which to act. If this is true, then being primarily entertaining is perfectly compatible with serving the intended function. The sociologist's entire conclusion — that entertainment prevents news from serving its function — collapses. **The argument is destroyed.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(E) A news industry that aims to make a profit inevitably presents news as entertainment.', text: "This explains the *cause* of news becoming entertainment — the profit motive. But the argument's logic doesn't depend on *why* news became entertaining. It depends on the *consequence* of being entertaining (namely, that it can't serve its function). The \"why\" is background, not a necessary assumption.\n\n**Negation:** A profit-driven news industry does NOT inevitably present news as entertainment. This doesn't affect the conclusion because the sociologist already stated as a fact that news IS primarily entertaining — the cause doesn't matter. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Bridge Entertainment → Can\'t Inform?'], rows: [
      ['(A)', 'Whether functional news can have ANY entertainment value', 'No — too strong; misses "primarily"'],
      ['(B)', 'Why viewers prefer entertainment', 'No — explains cause, not consequence'],
      ['(C)', 'Whether news has other functions', 'No — other functions are irrelevant'],
      ['**(D)**', '**Whether primarily entertaining news can inform**', '**Yes — bridges the gap ✓**'],
      ['(E)', 'Why news became entertainment', 'No — explains cause, not consequence'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an author concludes that something fails to meet a standard *because* it falls into a new category, the necessary assumption is that the new category is **incompatible** with that standard. The author must believe that you cannot be both B and A at the same time.\n\nLook for the answer choice that builds a bridge of opposition between the two concepts. The correct answer will say, in effect: \"Being [Category B] means you cannot be [Standard A].\"\n\nBe careful to match the *precision* of the argument. Here, the argument says news is *primarily* entertaining — not that it's entertaining at all. Answer (A) fails because it's about *any* entertainment, while the argument is about *primary* entertainment. The correct answer (D) matches the exact scope of the argument." },
  ]
};
