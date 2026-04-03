import { Lesson } from '../../types';

export const Lesson7_HardQuestion_ExplanatoryArgument: Lesson = {
  id: "2-7",
  title: "Hard Question Deconstruction - The Explanatory Argument",
  content: [
    { type: 'h3', text: "Lesson 7: Deconstructing a Hard Question" },
    { type: 'paragraph', text: "In the last lesson, you learned the four key characteristics of the hardest Main Conclusion questions. Now, we will apply that knowledge to a Level 5 difficulty question that masterfully combines several of those challenging features." },
    { type: 'paragraph', text: "This question tests your ability to navigate an **explanatory argument**—one where the author's primary goal is not just to state a fact, but to provide the *reason* for a known phenomenon." },
    { type: 'hr' },
    { type: 'h3', text: "Worked Example" },
    { type: 'paragraph', text: "Read the stimulus and answer choices carefully. Try to identify which of the \"hard question\" characteristics are present before reading the detailed breakdown." },
    { type: 'blockquote', text: "**Stimulus:**\n\nEach of many different human hormones can by itself raise the concentration of glucose in the blood. The reason for this is probably a metabolic quirk of the brain. To see this, consider that although most human cells can produce energy from fats and proteins, brain cells can use only glucose. Thus, if blood glucose levels fall too low, brain cells will rapidly starve, leading to unconsciousness and death." },
    { type: 'paragraph', text: "**Question:**\n\nWhich one of the following most accurately expresses the main conclusion of the argument above?" },
    { type: 'options', items: [
      "(A) Each of many different human hormones can by itself raise blood glucose levels.",
      "(B) The reason that many different hormones can each independently raise blood glucose levels is probably a metabolic quirk of the brain.",
      "(C) Although most human cells can produce energy from fats and proteins, brain cells can produce energy only from glucose.",
      "(D) If blood glucose levels fall too low, then brain cells starve, resulting in loss of consciousness and death.",
      "(E) The reason brain cells starve if deprived of glucose is that they can produce energy only from glucose."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Analysis: What Makes This Question So Hard?" },
    { type: 'paragraph', text: "This question is difficult because it contains two of the advanced traps we discussed:" },
    { type: 'list', items: [
      "**The Intermediate Conclusion Trap:** The argument contains the powerful conclusion indicator \"**Thus**\" which points to a compelling but non-main conclusion.",
      "**Detailed Facts vs. Subtle Evaluation:** The premises are full of dramatic and interesting biological facts, while the main conclusion is a more abstract, explanatory claim."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Step-by-Step Deconstruction" },
    { type: 'h4', text: "Step 1 & 2: Deconstruct the Argument's Flow" },
    { type: 'paragraph', text: "This argument has a specific structure: it presents a puzzling fact and then offers and defends an explanation for it." },
    { type: 'list', items: [
      "**Sentence 1:** \"Each of many different human hormones can by itself raise the concentration of glucose in the blood.\"\n    *   **Role:** This is **The Phenomenon**. It's the interesting but neutral fact that the rest of the argument is designed to explain. It's the *topic* of the argument, not its point.",
      "**Sentence 2:** \"The reason for this is probably a metabolic quirk of the brain.\"\n    *   **Role:** This is **The Proposed Explanation**. The phrase \"**The reason for this is...**\" is a massive signpost. The author is explicitly stating their main point. This is our prime candidate for the **Main Conclusion**.",
      "**Sentence 3:** \"To see this, consider that... brain cells can use only glucose.\"\n    *   **Role:** This is the **Core Premise**. The phrase \"**To see this, consider...**\" tells the reader, \"Here is the evidence for the explanation I just gave you.\"",
      "**Sentence 4:** \"**Thus**, if blood glucose levels fall too low, brain cells will rapidly starve, leading to unconsciousness and death.\"\n    *   **Role:** This is an **Intermediate Conclusion**. It logically follows from the premise in Sentence 3. Its purpose is to explain *why* the brain's quirk is so critical, which in turn supports the main explanatory conclusion in Sentence 2."
    ]},
    { type: 'h4', text: "Step 3: Apply the \"Why Test\" Between the Two Conclusions" },
    { type: 'paragraph', text: "We have two \"conclusions\" in this argument: the proposed explanation in Sentence 2 and the \"Thus\" statement in Sentence 4. Let's test them against each other." },
    { type: 'list', items: [
      "**Test 1:** Is the explanation (\"The reason is a brain quirk\") true **because** low glucose leads to death? **Yes.** The fact that low glucose is so dangerous for the brain is the reason the body would have evolved multiple redundant systems (hormones) to prevent it. Sentence 4 supports Sentence 2.",
      "**Test 2:** Does low glucose lead to death **because** the reason for multiple hormones is a brain quirk? **No.** This makes no sense. The biological reality of brain starvation doesn't depend on the explanation for hormone redundancy."
    ]},
    { type: 'paragraph', text: "Since Sentence 4 supports Sentence 2, Sentence 2 is the **Main Conclusion**." },
    { type: 'h4', text: "Step 4: Pre-phrase the Conclusion" },
    { type: 'paragraph', text: "Our pre-phrase: \"The explanation for why so many hormones raise blood sugar is a unique feature of the brain.\"" },
    { type: 'h4', text: "Step 5: Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: "(A) Each of many different human hormones can by itself raise blood glucose levels.",
        text: "Trap Type: Premise Trap (specifically, The Phenomenon). This is the factual observation that the argument sets out to explain.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) The reason that many different hormones can each independently raise blood glucose levels is probably a metabolic quirk of the brain.",
        text: "Analysis: This is a perfect match for our pre-phrase and our analysis. It correctly identifies the author's central explanatory claim.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(C) Although most human cells can produce energy from fats and proteins, brain cells can produce energy only from glucose.",
        text: "Trap Type: Premise Trap. This is the core piece of evidence used to support the explanation.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) If blood glucose levels fall too low, then brain cells starve, resulting in loss of consciousness and death.",
        text: "Trap Type: Intermediate Conclusion Trap. This is the most dangerous distractor. It has a conclusion indicator (\"Thus\") and is a dramatic, weighty statement. However, it is not the argument's final point.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) The reason brain cells starve if deprived of glucose is that they can produce energy only from glucose.",
        text: "Trap Type: Premise Trap (phrased as an explanation). This is too narrow. It simply restates the causal link between the premise in Sentence 3 and the intermediate conclusion in Sentence 4.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Major Takeaways from this Hard Question" },
    { type: 'list', ordered: true, items: [
      "**Distinguish the Phenomenon from its Explanation:** In explanatory arguments, the main conclusion is the *explanation*, not the thing being explained.",
      "**Navigate Multi-Layered Arguments:** High-difficulty questions often have sub-conclusions. You must be able to trace the chain of support to find the final, unsupported claim.",
      "**Resist the Pull of \"Weighty\" Premises:** Don't be distracted by dramatic or scientifically interesting facts. The main conclusion is often a more abstract, overarching claim.",
      "**The \"Why Test\" is Your Ultimate Tool:** When faced with two competing conclusion candidates, the \"Why Test\" is the most reliable way to determine which one is the true main conclusion."
    ]}
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Advanced Concepts: Difficult Main Conclusion Questions"
        },
        {
          "type": "paragraph",
          "text": "You've mastered the fundamentals of identifying main conclusions. Now it's time to tackle the questions that are *designed* to be difficult. The LSAT doesn't raise difficulty by changing the core task — you're still finding the main conclusion. Instead, it layers complexity onto the stimulus, the answer choices, and the traps. This lesson breaks down exactly how, and gives you concrete strategies for each difficulty factor."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Three Difficulty Factors"
        },
        {
          "type": "paragraph",
          "text": "Every hard Main Conclusion question exploits one or more of these three factors. Knowing them in advance lets you diagnose why a question feels hard and apply the right counter-strategy:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Difficulty Factor",
            "text": "What Makes It Hard"
          },
          "items": [
            {
              "title": "1. Position Tricks",
              "text": "The main conclusion is hidden in an unexpected location — buried in the middle of the stimulus, embedded as a clause within a longer sentence, or placed at the very beginning before any indicator words appear. Hard questions deliberately violate the expectation that conclusions come last or follow \"therefore.\"",
              "badge": "Structural",
              "badgeColor": "indigo"
            },
            {
              "title": "2. Intermediate Conclusion Traps",
              "text": "The stimulus contains a multi-step reasoning chain where an intermediate conclusion — supported by evidence *and* supporting the main conclusion — appears at the end with a strong indicator like \"Thus\" or \"Therefore.\" Because it's the last thing you read and it has a conclusion indicator, it *feels* like the main point. But it's a stepping-stone, not the destination.",
              "badge": "Logical",
              "badgeColor": "blue"
            },
            {
              "title": "3. Scope Distortions",
              "text": "The correct answer paraphrases the conclusion using different words, a flipped sentence structure, or slightly different framing. Meanwhile, wrong answers quote the stimulus almost verbatim but capture a premise or intermediate conclusion. The trap exploits your preference for familiar language over accurate logic.",
              "badge": "Language",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Factor 1: Position Tricks in Action"
        },
        {
          "type": "paragraph",
          "text": "Most students expect the conclusion to appear at the end or right after \"therefore.\" Hard questions break this pattern deliberately:"
        },
        {
          "type": "blockquote",
          "text": "Art critic: The attempt to lift the embargo on importing ancient artifacts will not succeed. Foreign governments will object, and the public supports preserving cultural heritage. Consequently, the legislation will stall in committee."
        },
        {
          "type": "paragraph",
          "text": "The main conclusion is the *first* sentence (\"The attempt... will not succeed\"), not the final one. \"Consequently, the legislation will stall in committee\" is an intermediate conclusion that explains *how* it won't succeed. The Why Test confirms: *Why* won't the attempt succeed? Because foreign governments will object and the public supports preservation."
        },
        {
          "type": "h3",
          "text": "Factor 2: The IC Trap in Action"
        },
        {
          "type": "blockquote",
          "text": "The fact that many different hormones each independently raise blood glucose levels is probably due to a metabolic quirk of the brain. Brain cells can only use glucose for energy. Thus, if blood glucose falls too low, brain cells rapidly starve."
        },
        {
          "type": "paragraph",
          "text": "The final \"Thus\" sentence draws from one premise (brain cells only use glucose), but the *main* conclusion is the broader explanation in Sentence 1 (the \"metabolic quirk\" claim). The final sentence supports the main conclusion by showing why the brain's vulnerability is so critical that the body evolved redundant hormone systems."
        },
        {
          "type": "h3",
          "text": "Factor 3: Scope Distortion in Action"
        },
        {
          "type": "blockquote",
          "text": "The similarities between Novel X and Novel Y are more likely coincidental than plagiarism, since both authors led very similar lives."
        },
        {
          "type": "paragraph",
          "text": "A scope-distortion trap might offer: \"If authors of similar novels have led similar lives, suspicions of plagiarism are likely unwarranted.\" This converts the author's *specific judgment* about these two novels into a *general rule* about all similar novels. The conclusion is about *this case*, not about a universal principle."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Difficulty Decoder"
        },
        {
          "type": "paragraph",
          "text": "When a hard answer choice confuses you, use this decoder to identify what pattern it's exploiting:"
        },
        {
          "type": "table",
          "headers": [
            "Hard Answer Pattern",
            "What It Really Is",
            "How to Spot It"
          ],
          "rows": [
            [
              "Appears at the end with \"Thus/Therefore\"",
              "Intermediate Conclusion",
              "Ask: does this sentence then support an *earlier* broader claim?"
            ],
            [
              "Quotes the stimulus almost word-for-word",
              "Premise or Phenomenon dressed as conclusion",
              "Ask: does the argument try to *prove* this, or does it *use* this as evidence?"
            ],
            [
              "Uses \"If... then...\" conditional language",
              "General Rule distortion of a specific judgment",
              "Ask: is the author making a ruling on *this case* or stating a universal law?"
            ],
            [
              "Weakens certainty (\"could,\" \"might\")",
              "Certainty Downgrade",
              "Compare the modal verbs: does the author say \"will\" but the answer says \"might\"?"
            ],
            [
              "Strengthens certainty (\"must,\" \"always\")",
              "Certainty Upgrade",
              "Compare the modal verbs: does the author say \"likely\" but the answer says \"certainly\"?"
            ],
            [
              "Flips sufficient/necessary conditions",
              "Logical Reversal",
              "Check: does \"X enables Y\" become \"Y requires X\"?"
            ],
            [
              "Describes abstract logical function",
              "Correct but requires translation",
              "Substitute actual stimulus content into the abstract description"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example: A Genuinely Hard Question"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Analysis"
        },
        {
          "type": "paragraph",
          "text": "This question is hard because of its abstract, formal-logic content — not because the structure is hidden. The indicator word \"Therefore\" directly introduces the main conclusion in the final sentence. Everything before it is a premise:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Statement",
            "text": "Role"
          },
          "items": [
            {
              "title": "\"The chief of state combats the premier...\"",
              "text": "Premise 1 — a factual relationship between two roles.",
              "badge": "Premise",
              "badgeColor": "slate"
            },
            {
              "title": "\"The party that combats the premier combats every party the chief of state combats\"",
              "text": "Premise 2 — a conditional rule linking combatants.",
              "badge": "Premise",
              "badgeColor": "slate"
            },
            {
              "title": "\"No party combats itself\"",
              "text": "Premise 3 — a constraint that makes the logic work.",
              "badge": "Premise",
              "badgeColor": "slate"
            },
            {
              "title": "\"Therefore, the chief of state is not the premier\"",
              "text": "Main Conclusion — the logical deduction drawn from all three premises.",
              "badge": "Main Conclusion",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "The difficulty here is content-based: the formal logic is confusing enough that students second-guess whether \"Therefore\" really marks the conclusion. It does. The Why Test confirms: *Why* is the chief of state not the premier? Because if they were the same person, that party would combat itself — contradicting Premise 3."
        },
        {
          "type": "paragraph",
          "text": "The correct answer is **(C)** — it directly states the conclusion introduced by \"Therefore.\" Every other choice quotes a premise."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Elimination Strategy"
        },
        {
          "type": "paragraph",
          "text": "When prephrasing fails — because the argument is too abstract or complex to paraphrase confidently — switch to systematic elimination:"
        },
        {
          "type": "process",
          "title": "When Prephrasing Fails",
          "steps": [
            "**Run the Why Test on each answer choice.** For each option, ask: \"Why should I believe this?\" If the other sentences in the stimulus answer that question, the choice might be the conclusion.",
            "**Run the Reverse Test.** For each option, ask: \"Does this choice provide a *reason* for another option?\" If yes, it's a premise, not the conclusion. Eliminate it.",
            "**Check for indicator words.** Does the stimulus explicitly introduce any choice with \"therefore,\" \"thus,\" or \"consequently\"? If so, that's your strongest candidate.",
            "**Eliminate premises first.** Choices that restate facts, evidence, background, or supporting steps are never the main conclusion. Remove them.",
            "**Pick the survivor.** The last choice standing — the one that receives support from everything else and supports nothing — is the main conclusion."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Answer Choice Anatomy"
        },
        {
          "type": "paragraph",
          "text": "On hard questions, abstract or complex answer choices can be overwhelming. Break them into components and evaluate each piece:"
        },
        {
          "type": "table",
          "headers": [
            "Component",
            "What to Check",
            "Red Flag"
          ],
          "rows": [
            [
              "Subject",
              "Does the choice discuss the same subject as the conclusion?",
              "Shifts to a different entity or group"
            ],
            [
              "Predicate / Claim",
              "Does the choice make the same claim as the conclusion?",
              "Changes the action, judgment, or relationship"
            ],
            [
              "Scope",
              "Does the choice match the breadth of the conclusion?",
              "\"Some\" → \"All,\" or specific → general"
            ],
            [
              "Certainty",
              "Does the choice match the confidence level?",
              "\"Likely\" → \"Certainly,\" or \"will\" → \"might\""
            ],
            [
              "Conditionality",
              "Is the choice conditional when the conclusion is categorical (or vice versa)?",
              "\"X is true\" → \"If Y, then X is true\""
            ],
            [
              "Direction",
              "Does the choice preserve the logical direction?",
              "\"X enables Y\" becomes \"Y requires X\""
            ]
          ]
        },
        {
          "type": "callout",
          "title": "A Mindset for Hard Questions",
          "variant": "default",
          "text": "Hard questions have tempting wrong answers that are \"close enough.\" The test-makers know that students with a rough understanding of the structure will gravitate toward these near-misses. Your job is to find the choice that is **flawlessly accurate** in every detail. If even one component — subject, scope, certainty, or direction — contradicts the stimulus, eliminate it."
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "Hard Main Conclusion questions exploit three factors: **(1) Position tricks** that hide the conclusion in unexpected locations, **(2) Intermediate conclusion traps** that use final indicator words to disguise a sub-conclusion as the main point, and **(3) Scope distortions** that alter certainty, conditionality, or breadth. When prephrasing fails, switch to systematic elimination using the Why Test and Reverse Test on every answer choice. Break abstract choices into components (subject, scope, certainty, direction) and verify each one against the stimulus."
        }
      ],
    },
  },
};
