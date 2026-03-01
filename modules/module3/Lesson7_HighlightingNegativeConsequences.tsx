import { Lesson } from '../../types';

export const Lesson7_HighlightingNegativeConsequences: Lesson = {
  id: '3-7',
  title: 'Lesson 4: Highlighting Negative Consequences (PT-110-S-3-Q-8)',
  content: [
    { type: 'h2', text: 'Lesson 4: Highlighting Negative Consequences (Method of Reasoning)' },
    { type: 'h3', text: 'Concept Focus: Highlighting Negative Consequences' },
    { type: 'paragraph', text: "A common way to argue against a proposal is to show that it will lead to bad outcomes. This strategy doesn't necessarily dispute the potential benefits of a plan. Instead, it focuses on the unintended, harmful side effects, suggesting that the plan will ultimately do more harm than good or will even defeat its own purpose." },
    { type: 'paragraph', text: "This method is common in debates about policy and technology. The speaker says, \"That's a nice idea in theory, but here's what will *really* happen, and it won't be good.\"" },

    { type: 'hr' },

    { type: 'h3', text: 'The Negative Consequences Method' },
    { type: 'paragraph', text: "Arguments that highlight negative consequences follow a predictable causal-chain pattern. The speaker accepts (or ignores) the proposed benefit and instead traces what *else* the proposal will cause:" },
    { type: 'process', title: 'How the Method Works', steps: [
      "**Identify the Proposal:** Someone advocates for a plan, policy, or technology, claiming it will produce a specific benefit.",
      "**Concede or Set Aside the Benefit:** The respondent may grant that the plan could achieve its stated goal — or simply ignore that claim entirely.",
      "**Trace the Causal Chain:** The respondent describes a sequence of events: the proposal triggers Step A, which leads to Step B, which leads to Step C.",
      "**Arrive at the Negative Outcome:** The chain culminates in an outcome that is harmful, counterproductive, or self-defeating.",
      "**Conclude Against the Proposal:** Because the negative consequences outweigh or undermine the benefit, the proposal should be rejected.",
    ]},

    { type: 'h3', text: 'Indicator Language for Negative Consequences' },
    { type: 'paragraph', text: "Certain words and phrases signal that a speaker is tracing negative consequences rather than attacking the logic directly. Watch for these:" },
    { type: 'table', headers: ['Category', 'Indicator Words & Phrases'], rows: [
      ['Causal Chain', '*will lead to, results in, causes, brings about, triggers, sets in motion, initiates a process*'],
      ['Negative Outcome', '*causes harm, does more harm than good, backfires, is counterproductive, defeats its own purpose, undermines, erodes*'],
      ['Predictive / Future', '*will, would, soon, eventually, in the long run, over time, ultimately*'],
      ['Escalation', '*even worse, moreover, furthermore, not only... but also, compounding the problem*'],
      ['Self-Defeat', '*the very thing it was designed to prevent, ironically, paradoxically, far from achieving*'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Negative Consequences vs. Counterexample' },
    { type: 'paragraph', text: "Students sometimes confuse highlighting negative consequences with providing a counterexample. They are fundamentally different strategies:" },
    { type: 'table', headers: ['Feature', 'Negative Consequences', 'Counterexample'], rows: [
      ['What it attacks', 'The *desirability* of the proposal', 'The *truth* of a general claim'],
      ['Does it dispute the stated benefit?', 'Not necessarily — it may grant the benefit exists', 'Yes — it directly disproves the claim'],
      ['Type of evidence', 'A predicted chain of *future* events', 'A specific *past or present* case'],
      ['Core logic', '"Even if your plan works, here\'s what else happens"', '"Your rule says X, but here\'s a case where X is false"'],
      ['Typical context', 'Policy debates, technology proposals, recommendations', 'Universal claims ("all," "never," "every")'],
      ['Result', 'The proposal is unwise or counterproductive', 'The general claim is proven false'],
    ]},
    { type: 'callout', variant: 'tip', title: 'When This Method Appears', text: "Negative Consequences arguments are overwhelmingly found in **policy and technology debates** — any stimulus where one speaker proposes a solution and the other predicts harmful side effects. If you see a dialogue about a new law, regulation, business strategy, or innovation, and the respondent uses predictive language to trace a chain of bad outcomes, you are almost certainly looking at this method." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    {
      type: 'question-card',
      id: 'PT-110-S-3-Q-8',
      stimulus: 'Dr. Jones: The new technology dubbed "telemedicine" will provide sustained improvement in at least rural patient care since it allows rural physicians to televise medical examinations to specialists who live at great distances—specialists who will thus be able to provide advice the rural patient would otherwise not receive.\nDr. Carabella: Not so. Telemedicine might help rural patient care initially. However, small hospitals will soon realize that they can minimize expenses by replacing physicians with technicians who can use telemedicine to transmit examinations to large medical centers, resulting in fewer patients being able to receive traditional, direct medical examinations. Eventually, it will be the rare individual who ever gets truly personal attention. Hence, rural as well as urban patient care will suffer.',
      question: 'Dr. Carabella uses which one of the following strategies in responding to Dr. Jones?',
      options: [
        '**(A)** listing a set of considerations to show that a prescribed treatment that seems to be benefiting a patient in fact harms that patient',
        '**(B)** describing the application of the technology discussed by Dr. Jones as one step that initiates a process that leads to an undesirable end (Correct) [97%]',
        '**(C)** citing evidence that Dr. Jones lacks the professional training to judge the case at issue',
        '**(D)** invoking medical statistics that cast doubt on the premises used in Dr. Jones\'s argument',
        '**(E)** providing grounds for dismissing Dr. Jones\'s interpretation of a key term in medical technology',
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Step 1: Deconstruct the Argument' },
    { type: 'paragraph', text: "The question asks for Dr. Carabella's strategy. Let's trace both arguments:" },
    { type: 'breakdown', labels: { title: 'Speaker', text: 'Argument Structure' }, items: [
      { title: "Dr. Jones's Argument", text: "Telemedicine allows rural physicians to connect with distant specialists, so it will sustain improvements in rural patient care. This is a straightforward benefit claim.", badge: 'Proposal', badgeColor: 'blue' },
      { title: "Dr. Carabella's Argument", text: "She disagrees (\"Not so\") and concedes the short-term benefit (\"might help initially\"). She then traces a multi-step causal chain:\n1. **Trigger:** Hospitals adopt telemedicine\n2. **Motive & Action:** To save money, they replace physicians with technicians\n3. **Immediate Consequence:** Fewer patients get direct, in-person exams\n4. **Final Result:** Patient care becomes impersonal and \"suffers\"", badge: 'Negative Consequences', badgeColor: 'red' },
    ]},

    { type: 'h3', text: 'Step 2: Characterize the Method and Prephrase' },
    { type: 'paragraph', text: "Dr. Carabella's method is clear: she concedes the technology might help in the short term, then traces a chain of events showing how its adoption will lead to a worse outcome overall." },
    { type: 'callout', title: 'Prephrase', text: 'She argues that the technology will initiate a process that leads to a negative outcome — a classic highlighting of negative consequences.', variant: 'tip' },

    { type: 'h3', text: 'Step 3: Evaluate the Answer Choices' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) listing a set of considerations to show that a prescribed treatment... in fact harms that patient', text: "The harm Dr. Carabella describes is an indirect, *systemic* consequence of the technology's adoption — not a direct harm from the technology itself as a treatment. She doesn't argue the technology hurts the patient it's used on; she argues that the *system's response* to the technology causes broader harm.", badge: 'Scope Mismatch', badgeColor: 'red' },
      { title: '(B) describing the application of the technology... as one step that initiates a process that leads to an undesirable end', text: "This is a perfect, abstract description of the causal chain. The \"application of the technology\" (using telemedicine) is \"one step that initiates a process\" (hospitals replace doctors → patients lose personal attention) that \"leads to an undesirable end\" (patient care suffers).", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) citing evidence that Dr. Jones lacks the professional training...', text: "Dr. Carabella never mentions Dr. Jones's qualifications. This describes an *ad hominem* attack — a personal attack on the speaker rather than the argument.", badge: 'Out of Scope', badgeColor: 'red' },
      { title: '(D) invoking medical statistics that cast doubt on the premises...', text: "Dr. Carabella makes a *prediction* about the future; she never cites statistics. She also doesn't dispute Dr. Jones's premise that telemedicine *can* connect doctors to specialists.", badge: 'Wrong Evidence Type', badgeColor: 'red' },
      { title: "(E) providing grounds for dismissing Dr. Jones's interpretation of a key term...", text: "Both doctors agree on what \"telemedicine\" means. Their disagreement is about its long-term *effects*, not its definition. This answer describes a definitional dispute that doesn't exist.", badge: 'Mischaracterization', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', title: 'Key Takeaways', variant: 'summary', text: "*   **Look for Causal Chains:** This method is signaled by a sequence of events, describing how one action leads to another, culminating in a harmful final outcome.\n*   **Future-Oriented Language:** These arguments use predictive language — \"will,\" \"would,\" \"soon,\" \"eventually\" — because the speaker is tracing what *will happen*, not what *has happened*.\n*   **Don't Confuse With Counterexample:** A counterexample disproves a rule; highlighting negative consequences argues a proposal is *unwise*, not that it's *logically false*.\n*   **Common Scenarios:** This strategy appears frequently in arguments about technology, economics, and policy — any context where a single change can have wide-ranging and unforeseen effects.\n*   **The Self-Defeating Variant:** The most devastating form argues that the proposal will actually produce the *opposite* of its intended effect — watch for language like \"defeats its own purpose\" or \"far from achieving.\"" }
  ]
};
