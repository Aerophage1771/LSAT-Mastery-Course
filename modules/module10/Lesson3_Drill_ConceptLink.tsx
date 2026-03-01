import { Lesson } from '../../types';

export const Lesson3_Drill_ConceptLink: Lesson = {
  id: "10-3",
  title: "Drill: The Concept Link (PT-120-S-1-Q-12)",
  content: [
    { type: 'h2', text: 'The Concept Link' },
    { type: 'paragraph', text: "The Concept Link is the most common Sufficient Assumption pattern on the LSAT. In these questions, the premises describe a situation using one set of terms (Concept A), and the conclusion introduces a brand-new term or idea (Concept B) that was never mentioned in the evidence. The logical gap is the missing connection between A and B. The argument simply assumes that if you have A, you automatically have B — but it never says so." },
    { type: 'paragraph', text: "Your task is straightforward: **find the \"rogue\" term in the conclusion** — the concept that appears for the first time — and then **find the answer choice that explicitly links it back to a term in the premises.** The correct answer will function like a definition or a rule: it will state that having the characteristics described in the premises *guarantees* having the characteristic described in the conclusion." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Concept Link Gap' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Compare terms:** Read the conclusion and underline any term or concept that does not appear in the premises. This is the "rogue" term.',
      '**Identify the bridge needed:** The gap is always: *"Why does having [premise concept] mean you also have [conclusion concept]?"*',
      '**Predict the answer:** The correct answer will take the form: *"If [premise concept], then [conclusion concept]"* or equivalently *"Anything that has [premise concept] also has [conclusion concept]."*',
    ]},
    { type: 'callout', variant: 'tip', title: 'The Matching Game', text: "Think of Concept Link questions as a matching game. You need to match a term from the premises to the rogue term in the conclusion. The correct answer provides the match. If an answer choice connects two concepts that are *both already in the premises*, it does not bridge the gap — it just reinforces what we already know." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Concept Link (PT-120-S-1-Q-12)' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: 'PT-120-S-1-Q-12',
      questionType: 'Sufficient Assumption',
      difficulty: 'medium',
      stimulus: "All known living things are made of the same basic kinds of matter, are carbon based, and are equipped with genetic codes. So human life has the same origin as all other known life.",
      question: "The conclusion follows logically if which one of the following is assumed?",
      options: [
        "(A) Without the existence of other life forms, human life would never have come into existence.",
        "(B) There are not any living beings that have genetic codes but are not carbon based.",
        "(C) There can never be any living thing that does not have a genetic code.",
        "(D) Many yet-to-be-discovered types of living things will also be carbon based.",
        "(E) Any two living things made of the same basic kinds of matter have the same origin. (Correct)",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's dissect the argument to identify the premise and the conclusion, paying careful attention to the specific terms used." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"All known living things are made of the same basic kinds of matter, are carbon based, and are equipped with genetic codes."', text: "This is the evidence. It lists three specific traits shared by all known living things (including humans):\n1. Same basic matter\n2. Carbon-based\n3. Genetic codes\n\nThese are **compositional** facts — they describe what living things are *made of* and how they are *structured*." },
      { title: '"So human life has the same origin as all other known life."', text: "This is the conclusion. The word \"So\" signals the logical leap. The conclusion introduces a brand-new concept: **\"same origin.\"** This term was never mentioned in the premise. The author jumps from shared *composition* (what things are made of) to shared *origin* (where things came from)." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**What method of reasoning is the argument using?**\nThe argument uses a \"Shared Characteristics\" method. It observes that Group A (humans) and Group B (all other known life) share certain compositional features, and concludes they must therefore share another feature: origin." },
    { type: 'paragraph', text: "**Where is the rogue term?**\nThe rogue term is **\"same origin.\"** It appears only in the conclusion. The premises talk about matter, carbon, and genetic codes — but never about where things came from." },
    { type: 'paragraph', text: "**What's the problem?**\nThere is a massive logical gap between composition and origin. Just because two things are made of the same stuff doesn't prove they came from the same place. Two cars might both be made of steel and run on gasoline, but one was built in Detroit and the other in Tokyo. The argument assumes a connection between \"what things are made of\" and \"where things came from\" that it has not established." },
    { type: 'callout', variant: 'default', title: 'Spotting the Gap', text: "The fastest way to find the gap in a Concept Link question is to ask: **\"Which word in the conclusion is new?\"** Here, \"origin\" is new. Every term in the premises (matter, carbon, genetic codes) relates to *composition*. The conclusion is about *origin*. The bridge must connect composition to origin." },

    { type: 'h4', text: 'Step 3: Prephrase the Bridge' },
    { type: 'paragraph', text: "To make the conclusion airtight, we need a rule that guarantees the jump from shared composition to shared origin. The prephrase:" },
    { type: 'paragraph', text: "***\"To make the conclusion guaranteed, I need a rule that says: If two things share the same basic matter (or carbon base, or genetic codes), then they have the same origin.\"***" },
    { type: 'paragraph', text: "In other words, we need a definitional bridge: **Same Composition → Same Origin.**" },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'paragraph', text: "We are looking for the answer that connects one of the compositional traits from the premises to the \"same origin\" concept in the conclusion." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Without the existence of other life forms, human life would never have come into existence.', text: "This establishes a *dependency* — humans needed other life to exist. But dependency is not the same as shared origin. Two things can depend on each other without coming from the same source. A parasite depends on its host, but they don't share an origin. **Wrong concept — dependency ≠ origin.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) There are not any living beings that have genetic codes but are not carbon based.', text: "This connects two of the *premise* terms together (genetic codes and carbon base). It says these traits always co-occur. But both of these concepts are already in the premise — this answer reinforces the evidence without crossing the bridge to the *new* concept of \"origin.\" **Stays within the premises — doesn't reach the conclusion.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) There can never be any living thing that does not have a genetic code.', text: "This just reinforces the universality of genetic codes. We already know all *known* living things have them. Making this universal doesn't help prove anything about where they came from. **Strengthens a premise without bridging the gap.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Many yet-to-be-discovered types of living things will also be carbon based.', text: "The argument is strictly about *\"all known living things.\"* Future discoveries are outside the scope of the argument. Furthermore, even if undiscovered life is also carbon-based, this still doesn't connect composition to origin. **Out of scope and wrong concept.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Any two living things made of the same basic kinds of matter have the same origin.', text: "This is the perfect bridge. It takes a compositional trait from the premise (\"same basic kinds of matter\") and links it directly to the rogue concept in the conclusion (\"same origin\").\n\n**Logic Check:**\n• Do humans and other known life share the same basic matter? **Yes** (from Premise).\n• Does this rule say same matter → same origin? **Yes** (from Answer E).\n• Therefore, do humans and other known life have the same origin? **Yes.** The conclusion is now 100% guaranteed. ✓\n\nNotice that the correct answer only needs to connect *one* of the three premise traits (matter, carbon, genetic codes) to the conclusion. It doesn't need to use all three — one bridge is sufficient.", badge: 'Correct', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Connects', 'Does It Reach "Origin"?'], rows: [
      ['(A)', 'Dependency between humans and other life', 'No — dependency ≠ origin'],
      ['(B)', 'Genetic codes ↔ Carbon base (premise to premise)', 'No — stays within premises'],
      ['(C)', 'Universality of genetic codes', 'No — reinforces a premise'],
      ['(D)', 'Future life and carbon base', 'No — out of scope'],
      ['**(E)**', '**Same matter → Same origin (premise to conclusion)**', '**Yes — bridges the gap ✓**'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "In \"Concept Link\" questions, your primary job is to play a **matching game**. Identify the term in the conclusion that is new — the concept that appears nowhere in the premises. Then, find the answer choice that explicitly connects a term from the evidence to that new term. The correct answer will be a rule or definition that says: \"If you have [premise concept], then you have [conclusion concept].\"\n\nDo not be distracted by answers that add more detail to the evidence without crossing the bridge to the conclusion. Answers that connect premise-to-premise or reinforce what we already know cannot close the gap, no matter how true they sound." },
  ]
};
