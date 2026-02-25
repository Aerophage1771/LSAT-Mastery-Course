import { Lesson } from '../../types';

export const Lesson5_TheEliminativeArgument: Lesson = {
  id: "4-5",
  title: "Lesson 2: The Eliminative Argument",
  content: [
    { type: 'h2', text: 'Lesson 2: The Eliminative Argument (Parallel Reasoning)' },
    { type: 'paragraph', text: "This lesson focuses on a fundamental pattern of deductive reasoning: the **Eliminative Argument**, also known as a *disjunctive syllogism*. The argument begins by establishing a limited set of possibilities, then provides evidence that rules out all but one, and concludes that the remaining option must be true." },

    { type: 'callout', variant: 'tip', title: 'Why This Pattern Matters', text: "Eliminative arguments account for approximately **15% of Parallel Reasoning questions**. They are among the most straightforward patterns to identify and match — if you can spot the \"either…or\" setup and the elimination step, you can solve these quickly and confidently." },

    { type: 'hr' },

    { type: 'h2', text: 'The Eliminative Pattern' },
    { type: 'paragraph', text: "An eliminative argument works like a detective narrowing down suspects. You start with a finite list of possibilities, rule out all but one, and conclude that the remaining option must be the answer." },

    { type: 'h3', text: 'The Core Structure' },
    { type: 'table', headers: ['Component', 'Abstract Form', 'Role'], rows: [
      ['Premise 1 (The Options)', 'Either A or B (A ∨ B)', 'Establishes the complete set of possibilities'],
      ['Premise 2 (The Elimination)', 'Not A (¬A)', 'Rules out one possibility with evidence'],
      ['Conclusion', 'Therefore, B', 'The remaining option must be true'],
    ]},

    { type: 'h3', text: 'The Process Diagram' },
    { type: 'process', title: 'How to Identify an Eliminative Argument', steps: [
      '**Spot the disjunction.** Look for "either…or," "the only possibilities are," "must be one of," or any language that establishes a finite set of options.',
      '**Identify the elimination.** Find the premise that rules out one or more options. Look for "not," "cannot be," "is ruled out," "was too [adjective] to be."',
      '**Check the conclusion.** The conclusion should assert that the remaining option is true. It may be framed as definite ("therefore B") or conditional ("if X, then B").',
      '**Verify exhaustiveness.** The set of options must be presented as exhaustive — if there could be other possibilities not listed, the argument structure changes.',
      '**Check how elimination works.** Is the option eliminated for a **negative reason** (it fails a test) or is the other option chosen for a **positive reason** (it passes a test)? This distinction matters for matching.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'How to Recognize Elimination Patterns' },
    { type: 'paragraph', text: "Eliminative arguments don't always use the words \"either/or\" explicitly. Here are the common ways the LSAT presents the disjunction:" },

    { type: 'table', headers: ['Phrasing', 'Translation', 'Example'], rows: [
      ['"Either A or B"', 'A ∨ B (explicit disjunction)', '"Either the butler or the gardener committed the crime"'],
      ['"The only possibilities are A and B"', 'A ∨ B (explicit exhaustion)', '"The only possible causes are a virus or a bacterium"'],
      ['"X stocks only A and B"', 'A ∨ B (limited inventory)', '"The store stocks only two types: French Roast and Mocha Java"'],
      ['"A can be divided into A₁ and A₂"', 'A₁ ∨ A₂ (categorization)', '"Expenses are either fixed or variable"'],
      ['"It must have been one of the following"', 'A ∨ B ∨ C (enumeration)', '"The signal came from Mars, Venus, or an asteroid"'],
    ]},

    { type: 'paragraph', text: "And here are common elimination phrasings:" },
    { type: 'table', headers: ['Elimination Phrasing', 'What It Does'], rows: [
      ['"Not A" / "It cannot be A"', 'Direct denial'],
      ['"was too [adjective] to be A"', 'Indirect elimination via attribute mismatch'],
      ['"lacks the characteristics of A"', 'Elimination by disqualification'],
      ['"tests showed it was not A"', 'Elimination by evidence'],
      ['"A has been ruled out"', 'Explicit elimination'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Variations of the Eliminative Pattern' },
    { type: 'paragraph', text: "The basic \"Either A or B; Not A; Therefore B\" pattern has several important variations that appear on the LSAT:" },

    { type: 'h3', text: '1. Binary Elimination (Basic Form)' },
    { type: 'table', headers: ['Component', 'Form'], rows: [
      ['Premise 1', 'Either A or B'],
      ['Premise 2', 'Not A'],
      ['Conclusion', 'Therefore, B'],
    ]},
    { type: 'blockquote', text: '"The noise is coming from either the engine or the transmission. The mechanic confirmed the engine is fine. So the noise must be coming from the transmission."' },

    { type: 'h3', text: '2. Multi-Option Elimination' },
    { type: 'table', headers: ['Component', 'Form'], rows: [
      ['Premise 1', 'A, B, or C (three possibilities)'],
      ['Premise 2', 'Not A'],
      ['Premise 3', 'Not B'],
      ['Conclusion', 'Therefore, C'],
    ]},
    { type: 'blockquote', text: '"The artifact is from either the Roman, Greek, or Egyptian period. Carbon dating rules out the Roman period. The inscription style rules out the Greek period. Therefore, the artifact is from the Egyptian period."' },

    { type: 'h3', text: '3. Conditional Elimination' },
    { type: 'table', headers: ['Component', 'Form'], rows: [
      ['Framework', 'If condition X applies...'],
      ['Premise 1', '...then either A or B'],
      ['Premise 2', 'Not A'],
      ['Conclusion', 'Therefore, if X, then B'],
    ]},
    { type: 'blockquote', text: '"Carl\'s Coffee stocks only two decaf options: French Roast and Mocha Java. The coffee served was too smooth to be French Roast. So if the coffee came from Carl\'s, it was Mocha Java."' },

    { type: 'callout', variant: 'default', title: 'Conditional Framing Is Critical', text: "Pay close attention to whether the conclusion is **definite** (\"Therefore, B\") or **conditional** (\"If X, then B\"). A stimulus with a conditional elimination conclusion can only be matched by an answer with a conditional conclusion. A definite conclusion cannot parallel a conditional one." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply the full method to an eliminative argument question." },

    { type: 'question-card',
      id: 'PR-4-5-001',
      questionType: 'Parallel Reasoning',
      difficulty: 'medium',
      stimulus: "Carl's Coffee Emporium stocks only two decaffeinated coffees: French Roast and Mocha Java. Yusef only serves decaffeinated coffee, and the coffee he served after dinner last night was far too smooth and mellow to have been French Roast. So, if Yusef still gets all his coffee from Carl's, what he served last night was Mocha Java.",
      question: "The argument above is most similar in its logical structure to which one of the following?",
      options: [
        "(A) Samuel wants to take three friends to the beach. His own car holds only two passengers. His mother has a sedan that holds four and a convertible that holds two. Since the sedan can hold Samuel's friends but the convertible cannot, if Samuel borrows a vehicle from his mother, he will borrow the sedan.",
        "(B) If Anna wants to walk from her house to the office, she must go down either Maple Street or Elm Street. Maple Street has construction that makes it impassable on foot. But Anna drives to work every day, so she never walks to work.",
        "(C) Rose can either take a two-week vacation in July or wait until October for her three-week vacation. Rose has already committed to a project that runs through July. So if Rose takes a vacation, it will be the October one.",
        "(D) Werdix, Inc., has offered Arno a choice between a job in sales and a job in research. Arno would never take a job that requires frequent travel, and the sales position requires weekly travel to client sites. So if he accepts one of these jobs, it will be the one in research. (Correct)",
        "(E) If Teresa does not fire her assistant, her staff will rebel and her department's efficiency will decline. If she does fire him, she will have to hire and train a replacement, which will temporarily reduce efficiency. So if no alternative solution can be found, Teresa's department will become less efficient.",
      ],
    },

    { type: 'h3', text: 'Step-by-Step Solution' },

    { type: 'process', title: 'Applying the Method', steps: [
      '**Step 1 — Identify Structure:**\n• Framework: "If Yusef still gets coffee from Carl\'s" (conditional framing)\n• Premise 1 (Options): Two possibilities — French Roast or Mocha Java\n• Premise 2 (Elimination): "Too smooth to be French Roast" — eliminates one option by attribute mismatch\n• Conclusion: "If [framework], then Mocha Java" — conditional conclusion asserting the remaining option',
      '**Step 2 — Abstract the Pattern:**\nConditional framework + two options (A ∨ B) + elimination of A (¬A by attribute mismatch) → conditional conclusion (If framework, then B)\nBlueprint: Conditional elimination with two options, one ruled out by failing a test.',
      '**Step 3 — Quick Scan:**\n• (A) Conclusion: "if Samuel borrows…he will borrow the sedan." Conditional. But the elimination is by **positive selection** (sedan *can* hold friends), not negative elimination (the other *fails* a test). **Keep for now.**\n• (B) Conclusion: "she never walks to work." Doesn\'t resolve the disjunction — abandons both options. **Eliminate.**\n• (C) Conclusion: "if Rose takes a vacation, it will be the October one." Conditional, two options, one eliminated. **Keep.**\n• (D) Conclusion: "if he accepts one of these jobs, it will be the one in research." Conditional, two options, one eliminated. **Keep.**\n• (E) Conclusion: "Teresa\'s department will become less efficient." Both paths lead to the same result — this is a **dilemma**, not an elimination. **Eliminate.**',
      '**Step 4 — Compare (A), (C), (D) in detail:**\n• (A): The sedan is chosen because it *can* hold the friends — a positive reason. In the stimulus, French Roast is ruled out because it *fails* a test (too smooth). **Elimination method differs.** Also, there are three vehicles mentioned (own car, sedan, convertible), adding structural complexity.\n• (C): Rose has two options. July is eliminated because she\'s committed to a project (fails a constraint). The conclusion is conditional. But the elimination is by schedule conflict, not attribute mismatch — still, the structure matches: two options, one ruled out, conditional conclusion. **Strong candidate.**\n• (D): Arno has two options. Sales is eliminated because it requires travel and Arno won\'t travel (fails a personal constraint). The conclusion is conditional. Two options, one ruled out by failing a test, conditional conclusion. **Perfect match.**\n\nBoth (C) and (D) are close. The deciding factor: in the stimulus, the framework ("if Yusef still gets coffee from Carl\'s") parallels "if he accepts one of these jobs" in (D) — both frame the conclusion as conditional on the person staying within the established set of options.',
    ]},

    { type: 'h3', text: 'Wrong-Answer Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Why It Fails' }, items: [
      { title: '(A) Samuel borrows sedan because it fits his friends', text: 'The sedan is selected because it **passes a test** (can hold passengers), not because the other option **fails** a test. In the stimulus, French Roast is eliminated for being too smooth — negative elimination, not positive selection. Additionally, three vehicles are mentioned (own car, sedan, convertible), adding structural complexity not present in the stimulus.', badge: 'Positive Selection', badgeColor: 'red' },
      { title: '(B) Anna must take Maple or Elm, but she drives instead', text: 'The conclusion abandons the disjunction entirely — Anna doesn\'t choose either option. In the stimulus, the conclusion picks the remaining option. The entire point of an eliminative argument is to select the survivor, not reject both.', badge: 'Abandons Options', badgeColor: 'red' },
      { title: '(C) Rose takes July or October vacation; July is ruled out', text: 'Very close structurally, but the conditional framing is slightly different. "If Rose takes a vacation" is less precisely parallel to the stimulus\'s framework than (D)\'s "if he accepts one of these jobs." Both (C) and (D) are eliminative, but (D) more precisely mirrors the stimulus\'s framework of choosing within a specific supplier/set.', badge: 'Close but (D) is tighter', badgeColor: 'red' },
      { title: '(D) Arno chooses sales or research; sales eliminated by travel requirement', text: 'Two options within a defined set (Werdix\'s offer). One eliminated because it fails a personal constraint (won\'t travel). Conditional conclusion: "if he accepts one of these jobs, it will be research." Identical structure to the stimulus.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) Both options for Teresa lead to reduced efficiency', text: 'This is a **dilemma** (both paths lead to the same result), not an elimination (one path eliminated, the other selected). The structural pattern is entirely different: If A, then C. If ¬A, then C. Therefore C.', badge: 'Dilemma, Not Elimination', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Common Traps in Eliminative Questions' },
    { type: 'paragraph', text: "Test-makers use several strategies to create tempting wrong answers for eliminative argument questions:" },

    { type: 'table', headers: ['Trap Label', 'What It Does', 'How to Detect It'], rows: [
      ['**Positive Selection**', 'Chooses an option because it passes a test, rather than eliminating the other for failing', 'Ask: is the winning option chosen for its own merits, or is it the last one standing?'],
      ['**The Dilemma**', 'Both options lead to the same outcome — no real elimination occurs', 'Check: does the conclusion pick one option, or does it assert an inevitable outcome?'],
      ['**The Abandonment**', 'Neither option is chosen — the argument escapes the disjunction entirely', 'Check: does the conclusion select the remaining option or reject the whole framework?'],
      ['**Wrong Conclusion Frame**', 'The elimination is correct, but the conclusion is definite when it should be conditional (or vice versa)', 'Compare the conclusion framing word-for-word: "if…then" vs. "therefore"'],
      ['**Extra Options**', 'Presents three or more options when the stimulus had two, or vice versa', 'Count the options in the disjunction and compare'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• The **Eliminative Argument** establishes a limited set of possibilities, rules out all but one, and concludes that the remaining option must be true.\n• The core structure is: **Either A or B. Not A. Therefore B.** (Disjunctive Syllogism)\n• Pay close attention to **how** an option is eliminated: negative elimination (fails a test) vs. positive selection (another option passes a test) are **structurally different**.\n• **Conditional framing** matters: a conditional conclusion (\"if X, then B\") cannot parallel a definite conclusion (\"therefore B\").\n• Variations include **binary elimination** (two options), **multi-option elimination** (three+), and **conditional elimination** (elimination within a conditional framework).\n• Common traps include dilemmas (both options lead to the same result), abandonments (neither option chosen), and positive selection disguised as elimination." },
  ]
};
