import { Lesson } from '../../types';

export const Lesson4_Drill_ProportionalReasoning: Lesson = {
  id: "4-4",
  title: "Drill: Proportional Reasoning (PT-101-S-3-Q-21)",
  content: [
    { type: 'h3', text: "Practice Drill: Parallel Reasoning (PT-101-S-3-Q-21)" },
    { type: 'paragraph', text: "This drill focuses on a **Mathematical** or **Proportional** pattern of reasoning. The logic relies on how two quantities change in relation to one another." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-101-S-3-Q-21',
      stimulus: "The amount of electricity consumed in Millville on any day in August is directly proportional to peak humidity on that day. Since the average peak humidity this August was three points higher than the average peak humidity last August, it follows that more energy was consumed in Millville this August than last August.",
      question: "Which one of the following arguments has a pattern of reasoning most similar to the one in the argument above?",
      options: [
      "**(A)** The amount of art supplies used in any of the Aesthetic Institute’s 25 classes is directly proportional to the number of students in that class. Since in these classes the institute enrolled 20 percent more students overall last year than in the previous year, more art supplies were used in the institute’s classes last year than in the previous year.",
      "**(B)** The number of courses in painting offered by the Aesthetic Institute in any term is directly proportional to the number of students enrolled in the institute in that term. But the institute offers the same number of courses in sculpture each term. Hence, the institute usually offers more courses in painting than in sculpture.",
      "**(C)** The number of new students enrolled at the Aesthetic Institute in any given year is directly proportional to the amount of advertising the institute has done in the previous year. Hence, if the institute seeks to increase its student body it must increase the amount it spends on advertising.",
      "**(D)** The fees paid by a student at the Aesthetic Institute are directly proportional to the number of classes in which that student enrolls. Since the number of students at the Aesthetic Institute is increasing, it follows that the institute is collecting a greater amount in fees paid by students than it used to.",
      "**(E)** The number of instructors employed by the Aesthetic Institute in any term is directly proportional to the number of classes offered in that term and also directly proportional to the number of students enrolled at the institute. Thus, the number of classes offered by the institute in any term is directly proportional to the number of students enrolled in that term."
    ]
    },
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Deconstruct the Stimulus Argument" },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Role Analysis' }, items: [
      {
        title: "\"The amount of electricity consumed... is directly proportional to peak humidity...\"",
        text: "**Premise**. Establishes a rule connecting two variables: Electricity Use (Output) and Humidity (Input).",
        badge: "Rule",
        badgeColor: "indigo"
      },
      {
        title: "\"Since the average peak humidity this August was three points higher...\"",
        text: "**Premise**. Provides evidence that the condition for the rule was met (Input variable increased).",
        badge: "Evidence",
        badgeColor: "indigo"
      },
      {
        title: "\"...it follows that more energy was consumed...\"",
        text: "**Conclusion**. The outcome derived from applying the rule to the evidence (Output variable must also increase).",
        badge: "Conclusion",
        badgeColor: "indigo"
      }
    ]},

    { type: 'h3', text: "2. Abstract the Logical Method" },
    { type: 'list', items: [
      "**Motto:** \"Output A is tied to Input B. Since Input B went up, Output A also went up.\"",
      "**Diagram:**\n1. Rule: A is directly proportional to B.\n2. Evidence: B (Time 2) > B (Time 1).\n3. Conclusion: Therefore, A (Time 2) > A (Time 1)."
    ]},

    { type: 'h3', text: "3. Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) The amount of art supplies... proportional to number of students... 20 percent more students... more art supplies used...",
        text: "This argument is a perfect match.\n1. Rule: Art Supplies (A) are proportional to Students (B).\n2. Evidence: Students (B) increased last year compared to the previous year.\n3. Conclusion: Therefore, Art Supplies (A) increased last year compared to the previous year.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(B) ...proportional to students... usually offers more courses in painting than in sculpture.",
        text: "The conclusion here compares two different categories at the same time (painting vs. sculpture). The stimulus compares the same category at two different times (this August vs. last August). Structural mismatch.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(C) ...proportional to advertising... must increase the amount it spends on advertising.",
        text: "The conclusion is a recommendation or a statement of necessity (\"it must increase...\"). The stimulus concludes with a factual claim about what happened (\"more energy was consumed\"). The type of conclusion is different.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(D) Fees proportional to classes... number of students increasing... collecting greater fees...",
        text: "Variable mismatch. The rule connects **fees per student** to **classes per student**. However, the evidence given is about a different variable: the **total number of students**. The argument doesn't state that students are taking more classes.",
        badge: "Mismatch",
        badgeColor: "red"
      },
      {
        title: "(E) ...Thus, the number of classes offered... is directly proportional to the number of students...",
        text: "This argument's conclusion establishes a new rule of proportionality. The stimulus uses a rule to reach a conclusion about a specific outcome; it does not conclude with a new rule.",
        badge: "Mismatch",
        badgeColor: "red"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question tests your ability to follow a simple mathematical relationship and ensure variable consistency.\n\n* **Variable Matching is Crucial:** The most common trap, seen in choice (D), is a \"variable mismatch.\" The rule connects one pair of variables, but the evidence discusses a different, unrelated variable.\n* **Conclusion Type as a Filter:** Checking whether the conclusion is a factual comparison, a recommendation, or a new rule is a fast way to eliminate incorrect answers." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Lesson 1: The Conditional Chain (Parallel Reasoning)"
        },
        {
          "type": "paragraph",
          "text": "This lesson takes a deep dive into the single most common logical pattern in Parallel Reasoning questions: the **Conditional Chain**. This pattern connects \"if/then\" statements like a series of falling dominoes, where the result of one premise becomes the trigger for the next."
        },
        {
          "type": "callout",
          "title": "Why This Pattern Matters",
          "variant": "tip",
          "text": "Conditional chains account for approximately **25% of all Parallel Reasoning questions**. If you can recognize and abstract this pattern instantly, you will have a reliable strategy for a quarter of the questions you face. Mastering this pattern alone dramatically improves your accuracy on Parallel Reasoning."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "The Conditional Chain Pattern"
        },
        {
          "type": "paragraph",
          "text": "A conditional chain argument links two or more \"if/then\" statements end-to-end. The **result** of the first conditional becomes the **trigger** of the second conditional, creating a chain that allows you to draw a new conditional connecting the first trigger to the final result."
        },
        {
          "type": "h3",
          "text": "The Core Structure"
        },
        {
          "type": "table",
          "headers": [
            "Component",
            "Abstract Form",
            "Role in the Chain"
          ],
          "rows": [
            [
              "Premise 1",
              "If A, then B (A → B)",
              "First link: A triggers B"
            ],
            [
              "Premise 2",
              "If B, then C (B → C)",
              "Second link: B triggers C"
            ],
            [
              "Conclusion",
              "Therefore, if A, then C (A → C)",
              "Chain result: A ultimately triggers C"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "The connecting element is **B** — it appears as the result in Premise 1 and the trigger in Premise 2. This overlap is what makes the chain possible."
        },
        {
          "type": "h3",
          "text": "The Process Diagram"
        },
        {
          "type": "process",
          "title": "How to Identify a Conditional Chain",
          "steps": [
            "**Spot the conditionals.** Look for \"if…then\" statements, or their equivalents (\"any,\" \"all,\" \"every,\" \"whenever\").",
            "**Find the linking term.** Identify the term that appears as the *result* of one premise and the *trigger* of the next. This is the middle link (B).",
            "**Trace the chain.** The first trigger (A) connects to the final result (C) through the middle link.",
            "**Check the conclusion.** The conclusion should be a new conditional connecting A directly to C: \"If A, then C.\"",
            "**Verify validity.** A properly constructed chain is always **valid**. If the conclusion isn't a conditional or doesn't connect the first trigger to the last result, something is wrong."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "How to Abstract Conditional Logic"
        },
        {
          "type": "paragraph",
          "text": "The key skill for conditional chain questions is translating natural language into symbolic form. Here's how to handle the most common conditional phrasings:"
        },
        {
          "type": "table",
          "headers": [
            "Natural Language",
            "Symbolic Form",
            "Trigger → Result"
          ],
          "rows": [
            [
              "\"If it rains, the game is cancelled\"",
              "Rain → Cancel",
              "Rain triggers cancellation"
            ],
            [
              "\"All mammals are warm-blooded\"",
              "Mammal → Warm-blooded",
              "Being a mammal triggers warm-bloodedness"
            ],
            [
              "\"Every student who passes receives credit\"",
              "Pass → Credit",
              "Passing triggers credit"
            ],
            [
              "\"Whenever the alarm sounds, evacuate\"",
              "Alarm → Evacuate",
              "Alarm triggers evacuation"
            ],
            [
              "\"Only certified technicians may operate the equipment\"",
              "Operate → Certified",
              "**Careful:** \"Only\" reverses the direction"
            ],
            [
              "\"No reptile is warm-blooded\"",
              "Reptile → ¬Warm-blooded",
              "Being a reptile triggers NOT warm-blooded"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The \"Only\" Trap",
          "variant": "default",
          "text": "The word **\"only\"** reverses the conditional direction compared to \"if.\" Compare:\n\n• \"**If** you are a citizen, you can vote.\" → Citizen → Vote\n• \"**Only** citizens can vote.\" → Vote → Citizen\n\nIn the first, citizenship triggers voting eligibility. In the second, voting requires citizenship. When abstracting conditional chains, pay close attention to \"only if\" — it reverses the arrow."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Common Conditional Chain Variations"
        },
        {
          "type": "paragraph",
          "text": "While the basic A → B → C pattern is the most common, several variations appear on the LSAT:"
        },
        {
          "type": "table",
          "headers": [
            "Variation",
            "Structure",
            "Example",
            "Key Feature"
          ],
          "rows": [
            [
              "**Basic Chain**",
              "A→B, B→C ∴ A→C",
              "\"If rain → flood, if flood → damage ∴ if rain → damage\"",
              "Two links, conditional conclusion"
            ],
            [
              "**Extended Chain**",
              "A→B, B→C, C→D ∴ A→D",
              "\"If tax hike → less spending → recession → unemployment\"",
              "Three+ links, same logic"
            ],
            [
              "**Chain + Application**",
              "A→B, B→C, A ∴ C",
              "\"If rain → flood, if flood → damage, it's raining ∴ damage\"",
              "Chains then applies (Modus Ponens at end)"
            ],
            [
              "**Contrapositive Chain**",
              "A→B, B→C, ¬C ∴ ¬A",
              "\"If A→B→C, not C ∴ not A\"",
              "Chains then applies Modus Tollens"
            ],
            [
              "**Negative Result**",
              "A→B, B→¬C ∴ A→¬C",
              "\"If elected → policy change → no more deficit\"",
              "Final result is negative"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Chain + Application Is a Common Trap",
          "variant": "tip",
          "text": "A stimulus with a **conditional conclusion** (\"If A, then C\") cannot be paralleled by an answer with a **factual conclusion** (\"C is true\"). The \"Chain + Application\" variation looks similar to the basic chain but has a fundamentally different conclusion type. Always check whether the conclusion is conditional or factual."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example"
        },
        {
          "type": "paragraph",
          "text": "Let's apply the full 4-step method to a conditional chain question."
        },
        {
          "type": "h3",
          "text": "Step-by-Step Solution"
        },
        {
          "type": "process",
          "title": "Applying the 4-Step Method",
          "steps": [
            "**Step 1 — Identify Structure:**\n• Premise 1: If A (spicy meal) → B (heartburn)\n• Premise 2: If B (heartburn) → C (grouchy)\n• Conclusion: If A (spicy meal) → C (grouchy)\n• Linking term: B (heartburn)\n• Validity: Valid conditional chain",
            "**Step 2 — Abstract the Pattern:**\nA → B, B → C, ∴ A → C\nTwo conditional premises forming a chain; conditional conclusion connecting first trigger to final result.",
            "**Step 3 — Quick Scan (Conclusion Type):**\n• (A) Conclusion: \"she must not have planted daffodils\" — factual, not conditional. **Eliminate.**\n• (B) Conclusion: \"either…or\" disjunction, not a conditional. **Eliminate.**\n• (C) Conclusion: \"either purple or red flowers\" — disjunction based on an \"either/or\" premise, not a chain. **Eliminate.**\n• (D) Conclusion: \"if Li plants old rose varieties, her neighbors will be impressed\" — conditional. **Keep.**\n• (E) Conclusion: \"Bryan is sure to fertilize\" — factual claim, not conditional. **Eliminate.**",
            "**Step 4 — Verify (D):**\n• Premise 1: If Li plants old roses → garden looks beautiful (A → B) ✓\n• Premise 2: If garden looks beautiful → neighbors impressed (B → C) ✓\n• Conclusion: If Li plants old roses → neighbors impressed (A → C) ✓\n• Linking term: \"garden looks beautiful\" = B ✓\n• Valid chain ✓\nPerfect structural match."
          ]
        },
        {
          "type": "h3",
          "text": "Wrong-Answer Analysis"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Option",
            "text": "Why It Fails"
          },
          "items": [
            {
              "title": "(A) Ruth planted only daffodils → yellow flowers. No flowers blooming → must not have planted daffodils.",
              "text": "This is **Modus Tollens** (If A→B, ¬B, ∴ ¬A), not a conditional chain. The conclusion is a factual denial, not a new conditional. Both the structure and the conclusion type differ.",
              "badge": "Modus Tollens",
              "badgeColor": "red"
            },
            {
              "title": "(B) Shawn starts early → plenty of tomatoes. No tomatoes → either didn't start early or didn't plant early.",
              "text": "The conclusion is a **disjunction** (\"either…or\"), not a conditional. Additionally, the argument introduces a new element (\"plant tomatoes early\") not present in the original premises. Structural mismatch.",
              "badge": "Disjunction",
              "badgeColor": "red"
            },
            {
              "title": "(C) Maria plants either petunias or geraniums. Both are flowers → purple or red.",
              "text": "The first premise is a **disjunction** (\"either…or\"), not a conditional. There is no chain of \"if/then\" statements. The reasoning pattern is entirely different.",
              "badge": "Disjunction",
              "badgeColor": "red"
            },
            {
              "title": "(D) If Li plants roses → beautiful garden. If beautiful → neighbors impressed. ∴ If roses → impressed.",
              "text": "A → B, B → C, ∴ A → C. Identical chain structure. Same linking mechanism, same conditional conclusion, same validity.",
              "badge": "Correct Match",
              "badgeColor": "green"
            },
            {
              "title": "(E) Trees must be pruned or fertilized to produce well. Bryan prunes → sure to fertilize.",
              "text": "The conclusion (\"sure to fertilize\") does not follow from the premises. The argument confuses a disjunction (\"either prune or fertilize\") with a conjunction (\"both prune and fertilize\"). Structural mismatch and invalid in a different way.",
              "badge": "Non Sequitur",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Common Traps in Conditional Chain Questions"
        },
        {
          "type": "paragraph",
          "text": "Test-makers design wrong answers to look similar to conditional chains while actually using different logical structures. Here are the traps to watch for:"
        },
        {
          "type": "table",
          "headers": [
            "Trap",
            "What It Looks Like",
            "How to Detect It"
          ],
          "rows": [
            [
              "**Modus Tollens Disguise**",
              "Uses conditionals but denies the result to deny the trigger",
              "Check whether the conclusion is a conditional (chain) or a factual denial (Modus Tollens)"
            ],
            [
              "**Broken Chain**",
              "Two conditionals that don't link — the result of Premise 1 is not the trigger of Premise 2",
              "Verify the linking term: the result of P1 must be the trigger of P2"
            ],
            [
              "**Disjunction Swap**",
              "Uses \"either/or\" instead of \"if/then\" in the premises",
              "Check whether the premises are conditionals or disjunctions"
            ],
            [
              "**Factual Conclusion**",
              "Chains the conditionals correctly but draws a factual conclusion instead of a conditional one",
              "If the stimulus concludes \"If A then C,\" the answer must also conclude with a conditional"
            ],
            [
              "**Reversed Direction**",
              "The chain flows in the opposite direction (C → B → A instead of A → B → C)",
              "Verify that the conclusion connects the *first* trigger to the *last* result, not the reverse"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "• The **Conditional Chain** is the most common Parallel Reasoning pattern (~25% of questions). Its structure is A → B, B → C, ∴ A → C.\n• The **linking term** (B) is the key: it must appear as the result of one premise and the trigger of the next.\n• The conclusion of a chain is always a **new conditional** — not a factual claim. If the stimulus concludes \"If A, then C,\" eliminate any answer with a non-conditional conclusion.\n• Watch for **variations**: extended chains (3+ links), chains with application (Modus Ponens at the end), and contrapositive chains.\n• The biggest traps are **Modus Tollens disguises** (conditional premises but factual denial conclusion) and **broken chains** (conditionals that don't link through a shared term).\n• Always verify the **direction** of the chain. The conclusion must connect the first trigger to the last result."
        }
      ],
    },
  },
};
