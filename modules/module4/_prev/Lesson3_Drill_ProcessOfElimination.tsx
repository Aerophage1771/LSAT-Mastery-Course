import { Lesson } from '../../types';

export const Lesson3_Drill_ProcessOfElimination: Lesson = {
  id: "4-3",
  title: "Drill: Process of Elimination (PT-101-S-2-Q-13)",
  content: [
    { type: 'h3', text: "Practice Drill: Parallel Reasoning (PT-101-S-2-Q-13)" },
    { type: 'paragraph', text: "This drill focuses on a common logical pattern: **Process of Elimination** (also known as Disjunctive Syllogism), where one of two possibilities is ruled out, leaving the other as the necessary conclusion." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-101-S-2-Q-13',
      stimulus: "Carl’s Coffee Emporium stocks only two decaffeinated coffees: French Roast and Mocha Java. Yusef only serves decaffeinated coffee, and the coffee he served after dinner last night was far too smooth and mellow to have been French Roast. So, if Yusef still gets all his coffee from Carl’s, what he served last night was Mocha Java.",
      question: "The argument above is most similar in its logical structure to which one of the following?",
      options: [
      "**(A)** Samuel wants to take three friends to the beach. His mother owns both a sedan and a convertible. The convertible holds four people so, although the sedan has a more powerful engine, if Samuel borrows a vehicle from his mother, he will borrow the convertible.",
      "**(B)** If Anna wants to walk from her house to the office where she works, she must either go through the park or take the overpass across the railroad tracks. The park paths are muddy, and Anna does not like using the overpass, so she never walks to work.",
      "**(C)** Rose can either take a two-week vacation in July or wait until October and take a three-week vacation. The trail she had planned to hike requires three weeks to complete but is closed by October, so if Rose takes a vacation, it will not be the one she had planned.",
      "**(D)** Werdix, Inc., has offered Arno a choice between a job in sales and a job in research. Arno would like to work at Werdix but he would never take a job in sales when another job is available, so if he accepts one of these jobs, it will be the one in research.",
      "**(E)** If Teresa does not fire her assistant, her staff will rebel and her department’s efficiency will decline. Losing her assistant would also reduce its efficiency, so, if no alternative solution can be found, Teresa’s department will become less efficient."
    ]
    },
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Deconstruct the Stimulus Argument" },
    { type: 'paragraph', text: "First, let's break down each sentence of the stimulus to understand its meaning and its role in the argument." },
    
    { type: 'breakdown', labels: { title: 'Quote', text: 'Role Analysis' }, items: [
      {
        title: "\"Carl’s Coffee Emporium stocks only two decaffeinated coffees...\"",
        text: "**Premise**. It establishes the limited set of options (A or B) that are available from a specific source.",
        badge: "Premise",
        badgeColor: "indigo"
      },
      {
        title: "\"Yusef only serves... coffee... too smooth... to have been French Roast.\"",
        text: "**Premise**. It eliminates one of the two options (Not A).",
        badge: "Premise",
        badgeColor: "indigo"
      },
      {
        title: "\"So, if Yusef still gets all his coffee from Carl’s... Mocha Java.\"",
        text: "**Conclusion**. It's a conditional conclusion that follows from the two premises. If Source -> B.",
        badge: "Conclusion",
        badgeColor: "indigo"
      }
    ]},

    { type: 'h3', text: "2. Abstract the Logical Method" },
    { type: 'paragraph', text: "Now, we create a simple, abstract blueprint of the argument's structure." },
    { type: 'list', items: [
      "**Motto:** \"If a choice came from this specific set of two, and it wasn't the first option, then it had to be the second option.\"",
      "**Diagram:**\n1. If from Source, then (Option A or Option B).\n2. It was not Option A.\n3. Conclusion: Therefore, if from Source, then it was Option B."
    ]},
    
    { type: 'h3', text: "3. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) Samuel wants to take three friends to the beach. His mother owns both a sedan and a convertible. The convertible holds four people so, although the sedan has a more powerful engine, if Samuel borrows a vehicle from his mother, he will borrow the convertible.",
        text: "This argument provides a positive reason to choose the convertible (it holds enough people). It does not explicitly state that the sedan is impossible or has been eliminated as an option. The structure is \"Choose B because B has a needed quality,\" not \"Choose B because A is ruled out.\"",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(B) If Anna wants to walk... she never walks to work.",
        text: "This argument eliminates *both* options (park and overpass are both undesirable). The conclusion is that the entire action (walking to work) is avoided. The stimulus eliminates only one option to confirm the other.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(C) Rose can either take a two-week vacation... it will not be the one she had planned.",
        text: "This argument also eliminates *both* options for the specific plan (July is too short; the trail is closed in October). The conclusion is a negative outcome. This does not match the stimulus's structure.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(D) Werdix, Inc., has offered Arno a choice... so if he accepts... it will be the one in research.",
        text: "This pattern is a perfect match.\n1. If from Source (Werdix), then (Sales or Research).\n2. It will not be Sales.\n3. Conclusion: Therefore, if from Source, then it will be Research.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(E) If Teresa does not fire her assistant... department will become less efficient.",
        text: "This describes a dilemma where both paths lead to the same negative outcome (less efficiency). It is not a process of elimination where one option is chosen over another.",
        badge: "Mismatch",
        badgeColor: "red"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question tests a core logical pattern: **Disjunctive Syllogism**.\n\n* **Look for Elimination:** The argument's strength comes from removing one possibility. Choices (A), (B), (C), and (E) do not do this in the same way.\n* **Watch the Conditional Conclusion:** The \"if...\" clause in the conclusion is a crucial structural element. The conclusion isn't that Yusef *did* serve Mocha Java; it's that *if* he got his coffee from Carl's, *then* he served Mocha Java. Choice (D) mirrors this conditional structure perfectly." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Parallel Reasoning — Common Argument Structures"
        },
        {
          "type": "paragraph",
          "text": "When you abstract an argument's logical skeleton, you are essentially identifying a **species** of argument. Most Parallel Reasoning questions test a small set of recurring patterns. Recognizing these patterns on sight dramatically speeds up your ability to create a blueprint and eliminate wrong answers."
        },
        {
          "type": "paragraph",
          "text": "This lesson is your master reference for the argument structures you will encounter. For each pattern, you will learn the abstract form, see a concrete example, learn the indicator words that signal it, and understand its common variations."
        },
        {
          "type": "callout",
          "title": "Structure Frequency",
          "variant": "tip",
          "text": "Not all patterns appear equally often. The following table shows approximate frequencies based on released LSAT questions. Focus your study time on the patterns that appear most frequently."
        },
        {
          "type": "table",
          "headers": [
            "Pattern",
            "Approx. Frequency",
            "Priority"
          ],
          "rows": [
            [
              "Conditional Chain (Transitive)",
              "~25%",
              "★★★ High"
            ],
            [
              "Modus Ponens / Modus Tollens",
              "~20%",
              "★★★ High"
            ],
            [
              "Eliminative (Disjunctive Syllogism)",
              "~15%",
              "★★★ High"
            ],
            [
              "Principle Application",
              "~12%",
              "★★☆ Medium-High"
            ],
            [
              "Quantifier Overlap",
              "~10%",
              "★★☆ Medium-High"
            ],
            [
              "Causal Explanation",
              "~8%",
              "★★☆ Medium"
            ],
            [
              "Analogy",
              "~5%",
              "★☆☆ Lower"
            ],
            [
              "Ad Hominem / Tu Quoque",
              "~3%",
              "★☆☆ Lower"
            ],
            [
              "Inductive Prediction",
              "~2%",
              "★☆☆ Lower"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "1. The Conditional Chain (\"The Domino Effect\")"
        },
        {
          "type": "paragraph",
          "text": "The most common pattern in Parallel Reasoning. The argument links a series of conditional (if/then) statements end-to-end, and the conclusion is a new conditional that connects the first trigger to the final result."
        },
        {
          "type": "h4",
          "text": "Abstract Pattern"
        },
        {
          "type": "table",
          "headers": [
            "Component",
            "Form"
          ],
          "rows": [
            [
              "Premise 1",
              "If A, then B (A → B)"
            ],
            [
              "Premise 2",
              "If B, then C (B → C)"
            ],
            [
              "Conclusion",
              "Therefore, if A, then C (A → C)"
            ]
          ]
        },
        {
          "type": "blockquote",
          "text": "\"If a country devalues its currency, its exports become cheaper. If a country's exports become cheaper, its trade deficit shrinks. Therefore, if a country devalues its currency, its trade deficit shrinks.\""
        },
        {
          "type": "h4",
          "text": "Indicator Words"
        },
        {
          "type": "paragraph",
          "text": "Look for: **if…then, any, all, every, whenever, only if, unless**. The conclusion is typically also a conditional statement (\"therefore, if…then\")."
        },
        {
          "type": "h4",
          "text": "Common Variations"
        },
        {
          "type": "table",
          "headers": [
            "Variation",
            "Structure",
            "Key Difference"
          ],
          "rows": [
            [
              "**3-link chain**",
              "A→B, B→C, C→D ∴ A→D",
              "Longer chain, same logic"
            ],
            [
              "**Conditional with negation**",
              "A→B, B→¬C ∴ A→¬C",
              "Result is negative"
            ],
            [
              "**Mixed chain**",
              "A→B, B→C ∴ A→C (applied: A, ∴ C)",
              "Chains then applies Modus Ponens at the end"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Key Structural Feature",
          "variant": "default",
          "text": "In a conditional chain, the **result** of one premise must be the **trigger** of the next. If Premise 1 ends with B and Premise 2 starts with B, you have a chain. If the terms don't link up, it's not a chain — it might be two independent conditional premises."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "2. Modus Ponens & Modus Tollens"
        },
        {
          "type": "paragraph",
          "text": "Two of the most fundamental valid argument forms. **Modus Ponens** affirms the trigger of a conditional to conclude the result. **Modus Tollens** denies the result to conclude the trigger must be false."
        },
        {
          "type": "h4",
          "text": "Abstract Patterns"
        },
        {
          "type": "table",
          "headers": [
            "Form",
            "Premise 1",
            "Premise 2",
            "Conclusion",
            "Validity"
          ],
          "rows": [
            [
              "**Modus Ponens**",
              "If A, then B",
              "A is true",
              "Therefore, B is true",
              "✓ Valid"
            ],
            [
              "**Modus Tollens**",
              "If A, then B",
              "B is not true",
              "Therefore, A is not true",
              "✓ Valid"
            ],
            [
              "**Affirming the Consequent**",
              "If A, then B",
              "B is true",
              "Therefore, A is true",
              "✗ Invalid"
            ],
            [
              "**Denying the Antecedent**",
              "If A, then B",
              "A is not true",
              "Therefore, B is not true",
              "✗ Invalid"
            ]
          ]
        },
        {
          "type": "blockquote",
          "text": "**Modus Ponens:** \"If it rains, the sidewalk gets wet. It is raining. Therefore, the sidewalk is wet.\""
        },
        {
          "type": "blockquote",
          "text": "**Modus Tollens:** \"If it rains, the sidewalk gets wet. The sidewalk is not wet. Therefore, it is not raining.\""
        },
        {
          "type": "h4",
          "text": "Indicator Words"
        },
        {
          "type": "paragraph",
          "text": "Look for: **if…then, since, therefore, must, cannot**. Modus Ponens affirms the \"if\" clause; Modus Tollens denies the \"then\" clause."
        },
        {
          "type": "callout",
          "title": "Watch for Invalid Twins",
          "variant": "tip",
          "text": "**Affirming the Consequent** and **Denying the Antecedent** look superficially similar to Modus Ponens and Modus Tollens, but they are **invalid**. If the stimulus uses one of these invalid forms, the correct answer must use the same invalid form — not a valid one. Check which part of the conditional is being affirmed or denied."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "3. The Eliminative Argument (\"Process of Elimination\")"
        },
        {
          "type": "paragraph",
          "text": "A straightforward deductive pattern. The argument presents a limited set of options (usually two), eliminates all but one, and concludes that the remaining option must be true. Formally, this is a **disjunctive syllogism**."
        },
        {
          "type": "h4",
          "text": "Abstract Pattern"
        },
        {
          "type": "table",
          "headers": [
            "Component",
            "Form"
          ],
          "rows": [
            [
              "Premise 1",
              "Either A or B (A ∨ B)"
            ],
            [
              "Premise 2",
              "Not A (¬A)"
            ],
            [
              "Conclusion",
              "Therefore, B"
            ]
          ]
        },
        {
          "type": "blockquote",
          "text": "\"The stain on the carpet was caused by either red wine or tomato sauce. Lab tests show it was not tomato sauce. Therefore, it was caused by red wine.\""
        },
        {
          "type": "h4",
          "text": "Indicator Words"
        },
        {
          "type": "paragraph",
          "text": "Look for: **either…or, the only possibilities are, must be one of, cannot be anything other than**. The elimination premise typically uses **not, cannot, ruled out, excluded**."
        },
        {
          "type": "h4",
          "text": "Common Variations"
        },
        {
          "type": "table",
          "headers": [
            "Variation",
            "Structure",
            "Key Difference"
          ],
          "rows": [
            [
              "**Binary elimination**",
              "A or B. Not A. ∴ B.",
              "Two options, classic form"
            ],
            [
              "**Multi-option elimination**",
              "A, B, or C. Not A. Not B. ∴ C.",
              "Three+ options, more elimination steps"
            ],
            [
              "**Conditional elimination**",
              "If X, then A or B. Not A. ∴ If X, then B.",
              "Elimination embedded in a conditional framework"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Key Structural Feature",
          "variant": "default",
          "text": "The premises must **exhaust all possibilities** and then **rule out** all but one. If the answer choice adds a positive reason to prefer one option rather than eliminating the others, it is not a true eliminative argument — it is a different structure."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "4. The Principle Application (\"The Judge\")"
        },
        {
          "type": "paragraph",
          "text": "The argument moves from a general rule to a specific case. It establishes a principle (moral, practical, or logical), shows that a specific situation satisfies the rule's conditions, and draws a conclusion about that specific case."
        },
        {
          "type": "h4",
          "text": "Abstract Pattern"
        },
        {
          "type": "table",
          "headers": [
            "Component",
            "Form"
          ],
          "rows": [
            [
              "Premise 1 (The Rule)",
              "General principle: If conditions C are met, then judgment J applies"
            ],
            [
              "Premise 2 (The Case)",
              "Specific case X meets conditions C"
            ],
            [
              "Conclusion",
              "Therefore, judgment J applies to X"
            ]
          ]
        },
        {
          "type": "blockquote",
          "text": "\"Anyone who knowingly sells a defective product is liable for damages. Acme Corp knowingly sold defective brake pads. Therefore, Acme Corp is liable for damages.\""
        },
        {
          "type": "h4",
          "text": "Indicator Words"
        },
        {
          "type": "paragraph",
          "text": "Look for evaluative or prescriptive language: **should, ought, must, justified, unjustified, unwise, reckless, fair, unfair, liable, responsible**. The argument moves from a \"rule\" to a \"verdict.\""
        },
        {
          "type": "h4",
          "text": "Common Variations"
        },
        {
          "type": "table",
          "headers": [
            "Variation",
            "Example",
            "Key Feature"
          ],
          "rows": [
            [
              "**Cost-Benefit**",
              "\"Long-term costs outweigh short-term benefits, so it is unwise\"",
              "Evaluative judgment based on weighing outcomes"
            ],
            [
              "**Fairness / Justice**",
              "\"Authority's own wrongdoing negates its right to punish\"",
              "Judgment based on a fairness principle"
            ],
            [
              "**Consistency**",
              "\"If rule applies to case A, it should apply to similar case B\"",
              "Judgment based on treating like cases alike"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "5. The Quantifier Argument (\"The Venn Diagram\")"
        },
        {
          "type": "paragraph",
          "text": "This pattern reasons about the overlap between groups using categorical logic. The premises establish relationships between categories (all, most, some, none), and the conclusion draws an inference about a resulting overlap."
        },
        {
          "type": "h4",
          "text": "Abstract Pattern"
        },
        {
          "type": "table",
          "headers": [
            "Component",
            "Form",
            "Key Word"
          ],
          "rows": [
            [
              "Premise 1",
              "All A are B",
              "all, every"
            ],
            [
              "Premise 2",
              "Some B are C",
              "some, a few"
            ],
            [
              "Conclusion",
              "Therefore, some A are C",
              "some (weaker conclusion)"
            ]
          ]
        },
        {
          "type": "blockquote",
          "text": "\"All of the committee members are lawyers. Some lawyers are also professors. Therefore, some committee members are professors.\""
        },
        {
          "type": "h4",
          "text": "Indicator Words"
        },
        {
          "type": "paragraph",
          "text": "Look for: **all, every, each, most, many, some, a few, none, no, not any**. The reasoning feels like a logic puzzle about overlapping categories."
        },
        {
          "type": "h4",
          "text": "Quantifier Strength Hierarchy"
        },
        {
          "type": "paragraph",
          "text": "The strength of quantifiers determines what conclusions can be drawn. Mismatching quantifier strengths is one of the most common trap answer designs:"
        },
        {
          "type": "table",
          "headers": [
            "Quantifier",
            "Logical Strength",
            "Meaning"
          ],
          "rows": [
            [
              "**All / Every / Each**",
              "Universal (100%)",
              "Applies to every member without exception"
            ],
            [
              "**Most**",
              "Majority (>50%)",
              "Applies to more than half but not necessarily all"
            ],
            [
              "**Some**",
              "Existential (≥1)",
              "Applies to at least one; could be all"
            ],
            [
              "**None / No**",
              "Universal Negative (0%)",
              "Applies to zero members"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Quantifier Matching Rule",
          "variant": "tip",
          "text": "In Parallel Reasoning, the quantifiers must match **exactly**. If the stimulus says \"most A are B,\" an answer saying \"all A are B\" is a structural mismatch — even though \"all\" is stronger. The *pattern* of reasoning changes when the quantifier changes, because different quantifiers yield different valid inferences."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "6. The Causal Explanation (\"The Scientist\")"
        },
        {
          "type": "paragraph",
          "text": "The argument's focus is explaining *why* something happens. It observes a phenomenon and proposes or challenges a causal explanation."
        },
        {
          "type": "h4",
          "text": "Abstract Pattern"
        },
        {
          "type": "table",
          "headers": [
            "Component",
            "Form"
          ],
          "rows": [
            [
              "Premise 1 (Observation)",
              "Phenomenon P is observed"
            ],
            [
              "Premise 2 (Evidence)",
              "Evidence suggests cause C"
            ],
            [
              "Conclusion",
              "Therefore, C causes (or explains) P"
            ]
          ]
        },
        {
          "type": "blockquote",
          "text": "\"Sales of ice cream and rates of drowning both increase in summer. But ice cream does not cause drowning. Both are independently caused by hot weather, which drives people to eat ice cream and to swim.\""
        },
        {
          "type": "h4",
          "text": "Indicator Words"
        },
        {
          "type": "paragraph",
          "text": "Look for: **causes, leads to, results from, is explained by, the reason for, is the result of, contributes to, is due to**."
        },
        {
          "type": "h4",
          "text": "Common Variations"
        },
        {
          "type": "table",
          "headers": [
            "Variation",
            "Structure",
            "Key Feature"
          ],
          "rows": [
            [
              "**Third Factor (Common Cause)**",
              "X doesn't cause Y; Z causes both X and Y",
              "Introduces a third variable"
            ],
            [
              "**Reversed Causality**",
              "X doesn't cause Y; Y causes X",
              "Flips the causal direction"
            ],
            [
              "**Alternative Cause**",
              "Not X but W causes Y",
              "Substitutes a different cause"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "7. The Analogy"
        },
        {
          "type": "paragraph",
          "text": "The argument compares two situations to transfer a conclusion from one to the other. If two cases are similar in relevant ways, what is true of one should be true of the other."
        },
        {
          "type": "h4",
          "text": "Abstract Pattern"
        },
        {
          "type": "table",
          "headers": [
            "Component",
            "Form"
          ],
          "rows": [
            [
              "Premise 1",
              "Situation X has properties P, Q, R"
            ],
            [
              "Premise 2",
              "Situation Y also has properties P, Q, R"
            ],
            [
              "Premise 3",
              "X has outcome O"
            ],
            [
              "Conclusion",
              "Therefore, Y will also have outcome O"
            ]
          ]
        },
        {
          "type": "blockquote",
          "text": "\"Just as a doctor who prescribes medication without diagnosing the patient is acting irresponsibly, a financial advisor who recommends investments without understanding the client's situation is acting irresponsibly.\""
        },
        {
          "type": "h4",
          "text": "Indicator Words"
        },
        {
          "type": "paragraph",
          "text": "Look for: **just as, similarly, in the same way, like, by that logic, analogously, it would be as if**."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "8. The Ad Hominem / Tu Quoque"
        },
        {
          "type": "paragraph",
          "text": "The argument attacks the person making a claim rather than the claim itself. The **tu quoque** (\"you too\") variant argues that someone cannot criticize an action they themselves have committed."
        },
        {
          "type": "h4",
          "text": "Abstract Pattern"
        },
        {
          "type": "table",
          "headers": [
            "Component",
            "Form"
          ],
          "rows": [
            [
              "Premise 1",
              "Person X criticizes action A"
            ],
            [
              "Premise 2",
              "Person X has done A themselves (or something equivalent)"
            ],
            [
              "Conclusion",
              "Therefore, X's criticism is hypocritical / unjustified"
            ]
          ]
        },
        {
          "type": "blockquote",
          "text": "\"The senator who voted against environmental regulations cannot credibly criticize the factory for polluting, since the senator's own campaign accepted donations from the fossil fuel industry.\""
        },
        {
          "type": "h4",
          "text": "Indicator Words"
        },
        {
          "type": "paragraph",
          "text": "Look for: **hypocritical, no right to criticize, cannot credibly, themselves guilty of, in no position to**."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "9. The Inductive Prediction (\"The Forecaster\")"
        },
        {
          "type": "paragraph",
          "text": "The argument uses past evidence to make a **probabilistic** prediction about a future event. Unlike deductive arguments, the conclusion is not certain."
        },
        {
          "type": "h4",
          "text": "Abstract Pattern"
        },
        {
          "type": "table",
          "headers": [
            "Component",
            "Form"
          ],
          "rows": [
            [
              "Premise",
              "Pattern P has been observed in the past (evidence of trend)"
            ],
            [
              "Conclusion",
              "Therefore, P will probably continue in the future"
            ]
          ]
        },
        {
          "type": "blockquote",
          "text": "\"In the last five elections, the incumbent party has lost when unemployment exceeded 8%. Unemployment currently exceeds 8%. Therefore, the incumbent party will probably lose the next election.\""
        },
        {
          "type": "h4",
          "text": "Indicator Words"
        },
        {
          "type": "paragraph",
          "text": "Look for probabilistic language: **probably, likely, unlikely, can be expected to, there is reason to believe**. The premises refer to past patterns (\"in the last ten years,\" \"historically\") and the conclusion projects forward."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Pattern Identification Process"
        },
        {
          "type": "paragraph",
          "text": "When you encounter a stimulus, use this decision process to quickly identify which pattern you are dealing with:"
        },
        {
          "type": "process",
          "title": "Quick Identification Steps",
          "steps": [
            "**Check for conditionals.** Does the argument use \"if…then\" statements? → Look for **Conditional Chain**, **Modus Ponens**, or **Modus Tollens**.",
            "**Check for disjunctions.** Does the argument present \"either…or\" options? → Look for **Eliminative Argument**.",
            "**Check for quantifiers.** Does the argument use \"all,\" \"most,\" \"some,\" or \"none\"? → Look for **Quantifier Argument**.",
            "**Check for evaluative language.** Does the conclusion use \"should,\" \"justified,\" \"unwise\"? → Look for **Principle Application**.",
            "**Check for causal language.** Does the argument discuss causes and effects? → Look for **Causal Explanation**.",
            "**Check for comparisons.** Does the argument compare two situations? → Look for **Analogy**.",
            "**Check for predictions.** Does the conclusion predict a future outcome using \"probably\" or \"likely\"? → Look for **Inductive Prediction**."
          ]
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "• Most Parallel Reasoning questions test one of **9 recurring patterns**. Recognizing these on sight saves enormous time.\n• The three most common patterns — **Conditional Chain**, **Modus Ponens/Tollens**, and **Eliminative Argument** — account for roughly **60%** of all Parallel Reasoning questions.\n• Each pattern has **indicator words** that signal its presence. Train yourself to spot these automatically.\n• When abstracting, match the pattern's **exact structure**: the quantifiers, the conclusion type, the number of premises, and the validity. Changing any of these creates a different pattern.\n• Use the **Pattern Identification Process** to quickly categorize any stimulus you encounter."
        }
      ],
    },
  },
};
