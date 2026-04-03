import { Lesson } from '../../types';

export const Lesson8_HardQuestion_LogicFlip: Lesson = {
  id: "2-8",
  title: "Hard Question Deconstruction - The Logic-Flip",
  content: [
    { type: 'h3', text: "Lesson 8: Deconstructing a Hard Question" },
    { type: 'paragraph', text: "This lesson tackles a high-difficulty question that hinges on your ability to precisely map conditional logic. The argument itself is a short, logical chain, but the answer choices are designed to trap anyone who is not paying close attention to the **direction of the logical arrow**." },
    { type: 'paragraph', text: "This is a classic example of the **Logic-Flip** trap, where the wrong answer uses the same terms as the conclusion but reverses the sufficient and necessary conditions." },
    { type: 'hr' },
    { type: 'h3', text: "Worked Example" },
    { type: 'paragraph', text: "Read the stimulus and answer choices carefully. Try to map the conditional statements and identify the specific relationship the author is trying to prove." },
    { type: 'blockquote', text: "**Stimulus:**\n\nIt is a given that to be an intriguing person, one must be able to inspire the perpetual curiosity of others. Constantly broadening one’s abilities and extending one’s intellectual reach will enable one to inspire that curiosity. For such a perpetual expansion of one’s mind makes it impossible to be fully comprehended, making one a constant mystery to others." },
    { type: 'paragraph', text: "**Question:**\n\nWhich one of the following most accurately expresses the conclusion drawn in the argument above?" },
    { type: 'options', items: [
      "(A) To be an intriguing person, one must be able to inspire the perpetual curiosity of others.",
      "(B) If one constantly broadens one’s abilities and extends one’s intellectual reach, one will be able to inspire the perpetual curiosity of others.",
      "(C) If one’s mind becomes impossible to be fully comprehended, one will always be a mystery to others.",
      "(D) To inspire the perpetual curiosity of others, one must constantly broaden one’s abilities and extend one’s intellectual reach.",
      "(E) If one constantly broadens one’s abilities and extends one’s intellectual reach, one will always have curiosity."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Analysis: What Makes This Question So Hard?" },
    { type: 'list', ordered: true, items: [
      "**Subtle Conditional Language:** The conclusion uses the word \"enable,\" a softer synonym for \"ensure\" or \"is sufficient for,\" which can be harder to spot than a classic \"if... then...\" structure.",
      "**The Logic-Flip Distractor:** The most tempting wrong answer (D) takes the correct components and reverses the logic, turning a sufficient condition into a necessary one. A full 11% of test-takers fall for this.",
      "**The \"Given\" Premise Trap:** The argument starts with a premise that looks and sounds like a strong conclusion, trapping 34% of test-takers into picking it."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Step-by-Step Deconstruction" },
    { type: 'h4', text: "Step 1 & 2: Deconstruct the Argument's Flow" },
    { type: 'list', items: [
      "**Sentence 1:** \"It is a given that to be an intriguing person, one must be able to inspire the perpetual curiosity of others.\"\n    *   **Role:** The phrase \"**It is a given that...**\" signals that this is not the point the author is trying to prove, but a starting point or **Premise** that the author assumes is true. It establishes a necessary condition: Intriguing Person $\\rightarrow$ Inspire Curiosity.",
      "**Sentence 2:** \"Constantly broadening one’s abilities and extending one’s intellectual reach will **enable** one to inspire that curiosity.\"\n    *   **Role:** This is the central claim the author is building. The word \"enable\" means that broadening your reach is *sufficient* to inspire curiosity. This is our candidate for the **Main Conclusion**. It establishes a sufficient condition: Broaden Reach $\\rightarrow$ Inspire Curiosity.",
      "**Sentence 3:** \"**For** such a perpetual expansion of one’s mind makes it impossible to be fully comprehended, making one a constant mystery to others.\"\n    *   **Role:** The premise indicator \"**For**\" tells us this sentence is the **Premise** that supports the previous claim. It explains the mechanism: Broadening your reach makes you a mystery, which is how you inspire curiosity."
    ]},
    { type: 'h4', text: "Step 3: Apply the \"Why Test\"" },
    { type: 'paragraph', text: "Our candidate conclusion is the claim from Sentence 2: \"Constantly broadening... will enable one to inspire that curiosity.\"" },
    { type: 'list', items: [
      "**Ask \"Why?\":** *Why* will broadening your reach enable you to inspire curiosity?",
      "**Answer from Stimulus:** **Because** (\"For\") doing so makes you impossible to fully comprehend and a constant mystery to others."
    ]},
    { type: 'paragraph', text: "The final sentence provides the \"Why\" for the second sentence. This confirms Sentence 2 is the **Main Conclusion**." },
    { type: 'h4', text: "Step 4: Pre-phrase the Conclusion" },
    { type: 'paragraph', text: "Our pre-phrase should capture the conditional relationship: \"If you keep expanding your mind, then you'll be able to make people curious about you.\"" },
    { type: 'h4', text: "Step 5: Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: "(A) To be an intriguing person, one must be able to inspire the perpetual curiosity of others.",
        text: "Trap Type: Premise Trap. This is the most popular wrong answer. It's a direct restatement of the first sentence, but the phrase \"It is a given\" marks it as an accepted starting point, not the point being argued for.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) If one constantly broadens one’s abilities and extends one’s intellectual reach, one will be able to inspire the perpetual curiosity of others.",
        text: "Analysis: This is a perfect match for our pre-phrase. It correctly translates \"will enable\" into an \"If... then...\" structure, identifying broadening your reach as a *sufficient* condition for inspiring curiosity. **This is the correct answer.**",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(C) If one’s mind becomes impossible to be fully comprehended, one will always be a mystery to others.",
        text: "Trap Type: Premise Trap. This is a restatement of the reasoning presented in the final sentence, which is the evidence for the main conclusion.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) To inspire the perpetual curiosity of others, one must constantly broaden one’s abilities and extend one’s intellectual reach.",
        text: "Trap Type: Logic-Flip Trap. This is the most dangerous distractor for those who identify the right components. It takes the relationship from our conclusion (Broaden Reach $\\rightarrow$ Inspire Curiosity) and reverses it, claiming that broadening your reach is *necessary* (\"must\") to inspire curiosity (Inspire Curiosity $\\rightarrow$ Broaden Reach). The author never makes this claim.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) If one constantly broadens one’s abilities and extends one’s intellectual reach, one will always have curiosity.",
        text: "Trap Type: Distortion Trap. This twists the conclusion. The point is about *inspiring* curiosity in *others*, not about *having* curiosity yourself.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Major Takeaways from this Hard Question" },
    { type: 'list', ordered: true, items: [
      "**\"It is a given that...\" is a Premise Indicator.** When an author says a claim is \"given,\" \"clear,\" or \"obvious,\" they are treating it as an undisputed starting point, not the conclusion they are trying to prove.",
      "**Translate Vague Terms into Strict Logic.** Words like \"enables,\" \"allows,\" or \"leads to\" often signal a *sufficient* condition (the \"if\" part of an \"if... then...\" statement).",
      "**Beware the Logic-Flip.** High-difficulty distractors will use the same vocabulary as the correct answer but will reverse the logical relationship. Always confirm the direction of the arrow."
    ]}
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "The Intermediate Conclusion Trap"
        },
        {
          "type": "paragraph",
          "text": "The intermediate conclusion (IC) trap is the single most effective trap on difficult Main Conclusion questions. It works because ICs look and feel like main conclusions — they are supported by evidence and introduced by words like \"Thus\" or \"Therefore.\" The critical difference is that an IC then goes on to support an even broader claim. Your task is to see the entire chain and identify the *final destination*, not the *last stepping-stone*."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The IC Trap Pattern"
        },
        {
          "type": "paragraph",
          "text": "The test-makers construct IC traps using a predictable pattern. Recognizing it in advance is your best defense:"
        },
        {
          "type": "process",
          "title": "How the IC Trap Is Built",
          "steps": [
            "**Step 1: Plant the main conclusion early.** The actual main conclusion appears in the first or second sentence, often without a conclusion indicator word.",
            "**Step 2: Provide evidence.** One or more premises support both the main conclusion and the intermediate conclusion.",
            "**Step 3: End with a strong indicator + IC.** The final sentence begins with \"Thus,\" \"Therefore,\" or \"Consequently\" — introducing a sub-conclusion that *feels* like the final point.",
            "**Step 4: Create the trap answer.** One answer choice restates the IC. Because it's the last thing you read and has a conclusion indicator, it's extremely tempting."
          ]
        },
        {
          "type": "callout",
          "title": "The Final \"Thus\" Warning",
          "variant": "tip",
          "text": "A conclusion indicator at the *end* of the stimulus does not guarantee you've found the *main* conclusion. On hard questions, the final \"Thus\" frequently introduces an intermediate conclusion that *supports* a broader claim made earlier. Always ask: \"Does this 'Thus' sentence then support something else?\""
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "When Final Indicators Are NOT the Main Conclusion"
        },
        {
          "type": "paragraph",
          "text": "Here's a reference for recognizing when a final indicator word is misleading:"
        },
        {
          "type": "table",
          "headers": [
            "Scenario",
            "Final Indicator Marks...",
            "How to Detect It"
          ],
          "rows": [
            [
              "Explanation arguments",
              "IC describing the mechanism",
              "The main conclusion (proposed cause) appeared earlier, often in Sentence 1"
            ],
            [
              "Multi-step chains",
              "IC that is one step in a longer chain",
              "The IC supports a broader claim stated before it"
            ],
            [
              "Rebuttal arguments",
              "IC that elaborates on the rebuttal",
              "The main rebuttal (\"However, this is wrong\") appeared earlier after the pivot word"
            ],
            [
              "Conditional conclusions",
              "IC deriving a specific consequence",
              "The main conclusion is the general principle, not the specific consequence"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "IC vs. Main Conclusion: The Checklist"
        },
        {
          "type": "paragraph",
          "text": "When you've identified two candidate conclusions, use this checklist to determine which is the main conclusion and which is the IC:"
        },
        {
          "type": "table",
          "headers": [
            "Test",
            "Main Conclusion",
            "Intermediate Conclusion"
          ],
          "rows": [
            [
              "Does it receive support from other statements?",
              "✓ Yes",
              "✓ Yes"
            ],
            [
              "Does it *give* support to another claim?",
              "✗ No — it's the final destination",
              "✓ Yes — it supports the main conclusion"
            ],
            [
              "Why Test: Do premises answer \"Why?\" for it?",
              "✓ Yes — the whole argument explains it",
              "✓ Partially — only some premises explain it"
            ],
            [
              "Reverse Test: Does it explain another claim?",
              "✗ No",
              "✓ Yes — it helps prove the main conclusion"
            ],
            [
              "Scope",
              "Broader, more general",
              "Narrower, more specific"
            ],
            [
              "If removed, does the argument lose its main point?",
              "✓ Yes — the argument collapses",
              "✗ No — the main point still stands"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example 1"
        },
        {
          "type": "question-card",
          "id": "PT-116-S-3-Q-23",
          "stimulus": "Each of many different human hormones can by itself raise the concentration of glucose in the blood. The reason for this is probably a metabolic quirk of the brain. To see this, consider that although most human cells can produce energy from fats and proteins, brain cells can use only glucose. Thus, if blood glucose levels fall too low, brain cells will rapidly starve, leading to unconsciousness and death.",
          "question": "Which one of the following most accurately expresses the main conclusion of the argument above?",
          "options": [
            "**(A)** Each of many different human hormones can by itself raise blood glucose levels.",
            "**(B)** The reason that many different hormones can each independently raise blood glucose levels is probably a metabolic quirk of the brain. (Correct) [53%]",
            "**(C)** Although most human cells can produce energy from fats and proteins, brain cells can produce energy only from glucose.",
            "**(D)** If blood glucose levels fall too low, then brain cells starve, resulting in loss of consciousness and death.",
            "**(E)** The reason brain cells starve if deprived of glucose is that they can produce energy only from glucose."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Structural Chain Diagram"
        },
        {
          "type": "paragraph",
          "text": "Let's map the full logical chain to see how each piece connects:"
        },
        {
          "type": "process",
          "title": "The Argument Flow",
          "steps": [
            "**Phenomenon (S1):** Many hormones each independently raise blood glucose. [The \"what\" — the observation to be explained.]",
            "**Main Conclusion (S2):** \"The reason for this is probably a metabolic quirk of the brain.\" [The \"why\" — the proposed cause.]",
            "**Premise (S3):** Brain cells can only use glucose (unlike other cells). [Evidence — introduced by \"consider that.\"]",
            "**Intermediate Conclusion (S4):** \"Thus, if blood glucose falls too low, brain cells starve.\" [Draws from S3, but then supports S2 by showing why the body needs so many backup glucose systems.]"
          ]
        },
        {
          "type": "paragraph",
          "text": "The IC (S4) is derived from the premise (S3), but its purpose is to support the main conclusion (S2). The severe consequences of low glucose (starvation, death) explain *why* the body would evolve redundant hormone systems — which is exactly what S2 claims."
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
              "title": "(A) Each of many different human hormones can by itself raise blood glucose levels.",
              "text": "This is the **phenomenon** — the observation the argument sets out to explain. No one disputes it; the author's job is to explain *why* it's true.",
              "badge": "Trap: Phenomenon",
              "badgeColor": "red"
            },
            {
              "title": "(B) The reason that many hormones can each independently raise blood glucose levels is probably a metabolic quirk of the brain.",
              "text": "Perfect match for Sentence 2 — the explanatory conclusion. \"Probably\" correctly preserves the author's certainty level.",
              "badge": "Correct",
              "badgeColor": "green"
            },
            {
              "title": "(C) Although most human cells can produce energy from fats and proteins, brain cells can produce energy only from glucose.",
              "text": "This is the core **premise**, introduced by \"consider that.\" It's evidence for the IC and indirectly for the main conclusion, but it's not the point of the argument.",
              "badge": "Trap: The Premise",
              "badgeColor": "red"
            },
            {
              "title": "(D) If blood glucose levels fall too low, then brain cells starve...",
              "text": "This is the **intermediate conclusion** — the sentence introduced by \"Thus\" at the end. It draws from the premise (C) and supports the main conclusion (B). This is the classic IC trap: it appears last, has a conclusion indicator, and feels important.",
              "badge": "Trap: IC (Final \"Thus\")",
              "badgeColor": "red"
            },
            {
              "title": "(E) The reason brain cells starve if deprived of glucose is that they can produce energy only from glucose.",
              "text": "This describes the relationship between the premise (S3) and the IC (S4) — a sub-argument. It's logically accurate but captures only a supporting detail, not the main point.",
              "badge": "Trap: Sub-Argument",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example 2 (Shorter Stimulus)"
        },
        {
          "type": "h3",
          "text": "Quick Analysis"
        },
        {
          "type": "paragraph",
          "text": "The IC trap appears again: \"Therefore\" in Sentence 3 introduces an intermediate conclusion (offices maintain desktops), but the *main* conclusion is Sentence 1 (smartphones haven't diminished the need). The \"Therefore\" sentence is an observable consequence that supports the broader claim. Why haven't smartphones diminished the need? Because desktops have superior power (premise), so offices maintain both (IC supporting the MC)."
        },
        {
          "type": "paragraph",
          "text": "The correct answer is **(A)** — the broad claim in Sentence 1. Choice (C) is the IC trap. Choice (B) is the premise."
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "**1. Beware the final \"Thus.\"** On hard questions, the last sentence with a conclusion indicator is frequently an intermediate conclusion, not the main conclusion.\n**2. Map the entire chain.** Before selecting an answer, trace the full flow of support. Ask: \"Does this conclusion then support an even broader claim?\"\n**3. Use the IC Checklist.** The main conclusion receives support but doesn't give it. The IC both receives *and* gives support.\n**4. The IC trap works because ICs feel important.** They are supported by evidence and sound conclusory. But importance ≠ main conclusion. The main conclusion is the *final destination*, not the most impressive stepping-stone."
        }
      ],
    },
  },
};
