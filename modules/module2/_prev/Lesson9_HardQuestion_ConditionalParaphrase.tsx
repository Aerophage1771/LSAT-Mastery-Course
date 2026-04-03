import { Lesson } from '../../types';

export const Lesson9_HardQuestion_ConditionalParaphrase: Lesson = {
  id: "2-9",
  title: "Hard Question Deconstruction - The Conditional Paraphrase",
  content: [
    { type: 'h3', text: "Lesson 9: Deconstructing a Hard Question" },
    { type: 'paragraph', text: "This lesson focuses on a high-difficulty question that perfectly illustrates the **Conditional Paraphrase** trap. In this pattern, the author's conclusion is a nuanced claim about probability or likelihood. The most tempting wrong answer takes this nuanced claim and transforms it into a rigid, absolute conditional rule (\"If... then...\")." },
    { type: 'paragraph', text: "Mastering this distinction is key to succeeding on the hardest Main Conclusion questions. It requires you to pay precise attention to the *logical force* of the author's claim." },
    { type: 'hr' },
    { type: 'h3', text: "Worked Example" },
    { type: 'paragraph', text: "Read the stimulus and answer choices. As you analyze, focus on the exact nature of the author's main point: is it a certainty, a probability, or a conditional rule?" },
    { type: 'blockquote', text: "**Stimulus:**\n\nNovel X and Novel Y are both semiautobiographical novels and contain many very similar themes and situations, which might lead one to suspect plagiarism on the part of one of the authors. However, it is more likely that the similarity of themes and situations in the two novels is merely coincidental, since both authors are from very similar backgrounds and have led similar lives." },
    { type: 'paragraph', text: "**Question:**\n\nWhich one of the following most accurately expresses the conclusion drawn in the argument?" },
    { type: 'options', items: [
      "(A) Novel X and Novel Y are both semiautobiographical novels, and the two novels contain many very similar themes and situations.",
      "(B) The fact that Novel X and Novel Y are both semiautobiographical novels and contain many very similar themes and situations might lead one to suspect plagiarism on the part of one of the authors.",
      "(C) The author of Novel X and the author of Novel Y are from very similar backgrounds and have led similar lives.",
      "(D) It is less likely that one of the authors of Novel X or Novel Y is guilty of plagiarism than that the similarity of themes and situations in the two novels is merely coincidental.",
      "(E) If the authors of Novel X and Novel Y are from very similar backgrounds and have led similar lives, suspicions that either of the authors plagiarized are very likely to be unwarranted."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Analysis: What Makes This Question So Hard?" },
    { type: 'list', ordered: true, items: [
      "**Nuanced Conclusion:** The conclusion is not a simple fact but a **comparative judgment of probability** (\"it is more likely that...\"). This is a more complex idea than a straightforward claim.",
      "**The Conditional Paraphrase Trap:** The most popular wrong answer (E) takes the argument's components and reassembles them into a formal \"If... then...\" statement. This answer choice sounds logical and \"LSAT-like,\" trapping nearly a third of test-takers.",
      "**Buried Middle Structure:** The conclusion is \"sandwiched\" in the middle of the stimulus, following a pivot word."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Step-by-Step Deconstruction" },
    { type: 'h4', text: "Step 1 & 2: Deconstruct the Argument's Flow" },
    { type: 'list', items: [
      "**Sentence 1 (first half):** \"Novel X and Novel Y are both semiautobiographical novels and contain many very similar themes and situations...\"\n    *   **Role:** This is **Background Information** or context.",
      "**Sentence 1 (second half):** \"...which might lead one to suspect plagiarism...\"\n    *   **Role:** This introduces a potential explanation for the background facts—the **Opposing Viewpoint** that the author will argue against.",
      "**Sentence 2 (first half):** \"**However**, it is more likely that the similarity... is merely coincidental...\"\n    *   **Role:** The pivot word \"**However**\" signals the author's disagreement. This comparative claim is our candidate for the **Main Conclusion**. The author is weighing two possible explanations (plagiarism vs. coincidence) and judging one to be more probable.",
      "**Sentence 2 (second half):** \"...**since** both authors are from very similar backgrounds and have led similar lives.\"\n    *   **Role:** The premise indicator \"**since**\" marks this as the **Premise**. It provides the reason *why* a coincidence is the more likely explanation."
    ]},
    { type: 'h4', text: "Step 3: Apply the \"Why Test\"" },
    { type: 'paragraph', text: "Our candidate conclusion is: \"It is more likely that the similarity... is merely coincidental.\"" },
    { type: 'list', items: [
      "**Ask \"Why?\":** *Why* is it more likely that the similarities are a coincidence?",
      "**Answer from Stimulus:** **Because** (\"since\") the authors have very similar backgrounds and lives."
    ]},
    { type: 'paragraph', text: "The final clause provides the \"Why\" for the middle clause. This confirms that the middle clause is the **Main Conclusion**." },
    { type: 'h4', text: "Step 4: Pre-phrase the Conclusion" },
    { type: 'paragraph', text: "Our pre-phrase: \"The similarities between the novels are probably a coincidence, not plagiarism.\" Or more precisely: \"Coincidence is a better explanation than plagiarism.\"" },
    { type: 'h4', text: "Step 5: Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: "(A) Novel X and Novel Y are both semiautobiographical novels, and the two novels contain many very similar themes and situations.",
        text: "Trap Type: Premise Trap (specifically, Background Information). This is the factual setup for the argument.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) The fact that Novel X and Novel Y are... similar... might lead one to suspect plagiarism...",
        text: "Trap Type: Opposing Viewpoint Trap. This states the potential suspicion that the author is arguing against.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(C) The author of Novel X and the author of Novel Y are from very similar backgrounds and have led similar lives.",
        text: "Trap Type: Premise Trap. This is the evidence the author provides to support the main conclusion.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) It is less likely that one of the authors... is guilty of plagiarism than that the similarity... is merely coincidental.",
        text: "Analysis: This is a perfect, if slightly rephrased, match for our conclusion. Stating that plagiarism is \"less likely\" than coincidence is logically identical to stating that coincidence is \"more likely\" than plagiarism. It captures the comparative judgment of probability perfectly. **This is the correct answer.**",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(E) If the authors... are from very similar backgrounds... suspicions that either of the authors plagiarized are very likely to be unwarranted.",
        text: "Trap Type: Conditional Paraphrase Trap. This is the most dangerous distractor. It takes the premise (\"similar backgrounds\") and the conclusion (\"plagiarism is unlikely\") and fuses them into a rigid \"If... then...\" rule. The author's argument is a specific judgment about a specific case. This answer choice elevates that judgment to a general principle. The author never claims this rule holds true in all cases; they only use the premise to support the conclusion in this one instance. This changes the logical force of the author's claim.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Major Takeaways from this Hard Question" },
    { type: 'list', ordered: true, items: [
      "**Match the Logical Force:** The author made a claim about *probability*. The correct answer must also be a claim about probability. Distractors that turn this into a certainty or a conditional rule are incorrect.",
      "**A Single Case vs. a General Rule:** Be wary of answer choices that take a specific argument and generalize it into a broad principle. The author uses the similar backgrounds as a premise *in this case*, not as the \"if\" part of a universal rule.",
      "**Paraphrasing is Key:** The correct answer (D) rephrased \"more likely X\" as \"less likely Y.\" This is a common and logically valid way to restate a comparative claim. Be prepared to recognize these logical equivalences."
    ]}
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "The Background Principle Trap"
        },
        {
          "type": "paragraph",
          "text": "An author sometimes opens an argument with a general rule, a definition, or a widely accepted truth. Because this statement is abstract and seems important, it's easy to mistake it for the main conclusion. But its true role is **foundational premise** — the author isn't trying to *prove* this principle; they're *using* it to prove a more specific point. Your challenge is to distinguish the general rule the author takes as given from the specific application the author is actually arguing for."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Background Principle Indicators"
        },
        {
          "type": "paragraph",
          "text": "Certain phrases explicitly signal that a statement is being presented as a given — something the author assumes rather than argues for. When you see these, the statement is almost never the main conclusion:"
        },
        {
          "type": "table",
          "headers": [
            "Indicator Phrase",
            "What It Signals",
            "Example"
          ],
          "rows": [
            [
              "*It is a given that...*",
              "Stated as an assumption, not proven",
              "\"It is a given that to be intriguing, one must inspire curiosity.\""
            ],
            [
              "*It is well known that...*",
              "Common knowledge used as a starting point",
              "\"It is well known that exercise improves mental health.\""
            ],
            [
              "*It is obvious that...*",
              "Treated as self-evident",
              "\"It is obvious that businesses must adapt to survive.\""
            ],
            [
              "*It goes without saying that...*",
              "Presented as beyond dispute",
              "\"It goes without saying that education is valuable.\""
            ],
            [
              "*Everyone agrees that...*",
              "Attributed to universal consensus",
              "\"Everyone agrees that safety is the top priority.\""
            ],
            [
              "*By definition...*",
              "Definitional claim used as a starting point",
              "\"By definition, a democracy requires citizen participation.\""
            ],
            [
              "*It is widely accepted that...*",
              "Attributed to broad consensus",
              "\"It is widely accepted that climate change is real.\""
            ],
            [
              "*Of course...*",
              "Acknowledged as obvious before pivoting",
              "\"Of course talent matters, but practice matters more.\""
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Rule vs. Application Test",
          "variant": "tip",
          "text": "When you see a background principle indicator, ask: \"Is the author trying to *prove* this statement, or is the author *using* this statement to prove something else?\" If the rest of the argument provides evidence *for* the statement, it might be the conclusion. If the rest of the argument *builds upon* it to reach a different claim, it's a foundational premise."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Rule vs. Application"
        },
        {
          "type": "paragraph",
          "text": "The core of the Background Principle trap is confusing the general rule with its specific application. Here's how they differ:"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "The Rule (Background Principle)",
            "The Application (Main Conclusion)"
          ],
          "rows": [
            [
              "Scope",
              "General, abstract — applies to many cases",
              "Specific — applies to the case at hand"
            ],
            [
              "Status",
              "Taken as given; not argued for",
              "Argued for; supported by evidence"
            ],
            [
              "Position",
              "Usually appears first",
              "Usually appears second or later"
            ],
            [
              "Function",
              "Sets up the logical framework",
              "Is the point the argument is trying to make"
            ],
            [
              "If removed",
              "The specific conclusion loses its foundation",
              "The argument loses its purpose"
            ],
            [
              "Example",
              "\"To be intriguing, one must inspire curiosity\"",
              "\"Broadening one's abilities will inspire curiosity\""
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Logic-Flip"
        },
        {
          "type": "paragraph",
          "text": "On the hardest questions involving background principles, the test-makers add another layer of difficulty: they offer a wrong answer that *reverses the logical direction* of the conclusion. This is the Logic-Flip trap."
        },
        {
          "type": "paragraph",
          "text": "Here's how it works: If the conclusion states that X is *sufficient* for Y (\"Doing X will enable Y\"), a Logic-Flip answer restates this as X being *necessary* for Y (\"To achieve Y, one must do X\"). These sound similar but are logically different:"
        },
        {
          "type": "table",
          "headers": [
            "What the Author Says",
            "Logic-Flip Distortion",
            "Why It's Wrong"
          ],
          "rows": [
            [
              "\"Broadening abilities *will enable* inspiring curiosity\"",
              "\"To inspire curiosity, one *must* broaden abilities\"",
              "Sufficient → Necessary reversal. The author says X is enough; the trap says X is required."
            ],
            [
              "\"Exercise *improves* mood\"",
              "\"To improve mood, one *must* exercise\"",
              "The author says exercise works; the trap says nothing else does."
            ],
            [
              "\"Reading widely *helps* develop empathy\"",
              "\"To develop empathy, one *needs to* read widely\"",
              "The author claims a benefit; the trap claims a requirement."
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example"
        },
        {
          "type": "question-card",
          "id": "PT-130-S-1-Q-13",
          "stimulus": "It is a given that to be an intriguing person, one must be able to inspire the perpetual curiosity of others. Constantly broadening one's abilities and extending one's intellectual reach will enable one to inspire that curiosity. For such a perpetual expansion of one's mind makes it impossible to be fully comprehended, making one a constant mystery to others.",
          "question": "Which one of the following most accurately expresses the conclusion drawn in the argument above?",
          "options": [
            "**(A)** To be an intriguing person, one must be able to inspire the perpetual curiosity of others.",
            "**(B)** If one constantly broadens one's abilities and extends one's intellectual reach, one will be able to inspire the perpetual curiosity of others. (Correct) [49%]",
            "**(C)** If one's mind becomes impossible to fully comprehend, one will always be a mystery to others.",
            "**(D)** To inspire the perpetual curiosity of others, one must constantly broaden one's abilities and extend one's intellectual reach.",
            "**(E)** If one constantly broadens one's abilities and extends one's intellectual reach, one will always have curiosity."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Structural Map"
        },
        {
          "type": "process",
          "title": "The Argument Flow",
          "steps": [
            "**Foundational Premise (S1):** \"It is a given that to be intriguing, one must inspire curiosity.\" [Background principle — taken as given, not argued for.]",
            "**Main Conclusion (S2):** \"Constantly broadening one's abilities... will enable one to inspire that curiosity.\" [The specific application — this is what the author is trying to prove.]",
            "**Supporting Premise (S3):** \"For such expansion makes it impossible to be fully comprehended, making one a mystery.\" [Introduced by \"For\" — evidence supporting S2.]"
          ]
        },
        {
          "type": "paragraph",
          "text": "The Why Test confirms: *Why* will broadening one's abilities enable one to inspire curiosity? **Because** doing so makes one impossible to comprehend, creating mystery. Sentence 3 answers the \"Why\" for Sentence 2, confirming Sentence 2 is the conclusion."
        },
        {
          "type": "h3",
          "text": "Answer Choice Analysis"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Option",
            "text": "Analysis"
          },
          "items": [
            {
              "title": "(A) To be an intriguing person, one must be able to inspire... curiosity...",
              "text": "This quotes Sentence 1 verbatim. The phrase \"It is a given\" explicitly marks this as a **background principle** — the author assumes this, doesn't argue for it. This is the classic Background Principle trap.",
              "badge": "Trap: Background Principle",
              "badgeColor": "red"
            },
            {
              "title": "(B) If one constantly broadens one's abilities..., one will be able to inspire... curiosity...",
              "text": "This accurately paraphrases Sentence 2 — the specific application the author argues for. The conditional framing (\"If... then...\") correctly captures the sufficient-condition relationship: broadening abilities is *sufficient* to inspire curiosity.",
              "badge": "Correct",
              "badgeColor": "green"
            },
            {
              "title": "(C) If one's mind becomes impossible to fully comprehend...",
              "text": "This restates part of Sentence 3, which is the **premise** supporting the conclusion. The word \"For\" at the beginning of S3 marks it as evidence.",
              "badge": "Trap: The Premise",
              "badgeColor": "red"
            },
            {
              "title": "(D) To inspire... curiosity..., one must constantly broaden one's abilities...",
              "text": "This is the **Logic-Flip** trap. The conclusion says broadening abilities is *sufficient* to inspire curiosity (\"will enable\"). This choice reverses it to say broadening is *necessary* (\"must\"). Sufficient ≠ Necessary.",
              "badge": "Trap: Logic-Flip (S↔N)",
              "badgeColor": "red"
            },
            {
              "title": "(E) ...one will always have curiosity.",
              "text": "This misreads the conclusion entirely. The argument is about inspiring curiosity *in others*, not about *having* curiosity oneself. This shifts the subject from the audience to the individual.",
              "badge": "Trap: Subject Shift",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "**1. Background principle indicators (\"It is a given,\" \"It is well known,\" etc.) signal foundational premises, not conclusions.** The author isn't proving these statements — they're using them.\n**2. Distinguish the Rule from the Application.** The general rule sets the framework. The specific application built upon it is the main conclusion.\n**3. Watch for Logic-Flips.** A sufficient condition (\"X enables Y\") is not the same as a necessary condition (\"Y requires X\"). If an answer reverses this direction, it's a distortion.\n**4. The most abstract-sounding statement is not always the conclusion.** Background principles are abstract by nature, which makes them feel important. But importance ≠ conclusion."
        }
      ],
    },
  },
};
