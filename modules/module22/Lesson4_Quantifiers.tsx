import { Lesson } from '../../types';

export const Lesson4_Quantifiers: Lesson = {
  id: '22-4',
  title: 'Quantifiers — All, Most, Some, and Few',
  questionPolicy: 'none',
  content: [
    { type: 'h3', text: 'Lesson 4: Quantifiers — All, Most, Some, and Few' },
    {
      type: 'paragraph',
      text: '**Objective:** The goal of this lesson is to help you accurately diagram statements involving quantifiers and make valid inferences from them. You will learn to spot the difference between rock-solid logical chains and the common fallacies that fall apart under scrutiny. Until now, we have mostly dealt with absolute statements. A phrase like "All dogs are mammals" creates a 100% certain relationship (Dog -> Mammal): if you have a dog, you definitely have a mammal. However, LSAT arguments rarely offer this level of certainty. More often, arguments rely on quantifiers—words like "most" or "some"—that express partial truths. Mastering the specific rules for these words is key to handling a large portion of Logical Reasoning questions and avoids the trap of treating a "likelihood" as a "guarantee."',
    },

    { type: 'h4', text: '4.1 The Quantifier Hierarchy & Diagramming' },
    { type: 'paragraph', text: 'Think of quantifiers as existing on a spectrum of certainty:' },
    {
      type: 'table',
      headers: ['Quantifier', 'Strength', 'Diagram', 'Meaning', 'Properties'],
      rows: [
        [
          '**All**',
          '100%',
          'A -> B',
          'Every single member of group A is a member of group B.',
          'Simple conditional relationship open to conditional chaining and contraposing.',
        ],
        [
          '**Most**',
          '>50%',
          'A -m-> B',
          'A majority; more than half of the members of group A are also members of group B.',
          'NOT Contraposable. Cannot end a valid conditional chain.',
        ],
        [
          '**Some**',
          '>= 1',
          'A <-s-> B',
          'There is at least one member of group A that is also a member of group B.',
          'Reversible. (A <-s-> B is identical to B <-s-> A). NOT Contraposable. Cannot end a valid conditional chain.',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Treat each quantifier as a **threshold**, not as a vibe. **All** gives you a full lower and upper bound: 100%. **Most** gives you only a lower bound: more than half. **Some** gives you only the bare minimum overlap: at least one. That is why the LSAT loves wrong answers that quietly upgrade a safe lower-bound statement into something stronger the evidence never guaranteed.',
    },

    { type: 'h4', text: '4.2 Special Quantifiers and Boundary Logic' },
    {
      type: 'breakdown',
      items: [
        {
          title: 'Some',
          text: '**Meaning:** At least one. That is only a **lower bound**. Unless context explicitly closes the door, "some" leaves open the possibility of **all**.',
        },
        {
          title: 'Many',
          text: '**Meaning:** Vague (could be 10% or 90%). For guaranteed deductions, treat "Many" as **Some** (`A <-s-> B`). It sounds stronger than its safe lower bound, but logic only lets you keep the overlap unless the stimulus adds more structure.',
        },
        {
          title: 'Usually',
          text: '**Meaning:** Majority-style language. The safest logical translation is **Most** (`A -m-> B`) unless the sentence itself narrows or qualifies the range further.',
        },
        {
          title: 'Few',
          text: '**Meaning:** Implies two things at once. "Few A are B" creates two rules:\n\n1. Some A are B: A <-s-> B\n2. Most A are NOT B: A -m-> NOT B',
        },
        {
          title: 'Fewer Than Half / A Minority',
          text: '**Meaning:** This sits on the other side of "most." If fewer than half of A are B, then **most A are not B**. Translate it as a majority-not relationship instead of leaving it vague.',
        },
      ],
    },
    {
      type: 'callout',
      title: 'Boundary Rule',
      text: 'Ask two questions every time you see a quantifier:\n1. **What is the smallest thing this statement guarantees?**\n2. **What stronger reading does it still leave open?**\n\nExample: "Some applicants were admitted" guarantees only at least one admitted applicant. It still leaves open the possibility that every applicant was admitted.',
    },

    { type: 'h4', text: '4.3 Translating Natural-Language Quantifiers' },
    {
      type: 'table',
      headers: ['Phrase', 'Safe Translation', 'Reason'],
      rows: [
        ['Many A are B', 'Some A are B', 'Keep the guaranteed overlap, not the rhetorical force.'],
        ['Usually A are B', 'Most A are B', 'This is majority language, not certainty language.'],
        ['A minority of A are B', 'Most A are not B', 'Minority language flips into majority-not.'],
        ['Fewer than half of A are B', 'Most A are not B', 'Under half satisfying the predicate means over half do not.'],
        ['Not all A are B', 'Some A are not B', 'This negates the universal claim without erasing all overlap.'],
        ['Nearly all A are B', 'Most A are B', 'The safest forced inference stays at the majority level.'],
      ],
    },
    {
      type: 'paragraph',
      text: 'This translation habit matters in support questions because the correct answer is often written with a **weaker quantity** or a **weaker predicate** than the stimulus. Your job is to keep the strongest statement the evidence truly forces, not the strongest statement that sounds close enough.',
    },

    { type: 'h4', text: '4.4 Valid Quantifier Inferences: The Overlap Rule' },
    {
      type: 'paragraph',
      text: 'This is one of the most frequently tested valid deductions. The rule is simple: if a single group has two different majority characteristics, there must be an overlap between those characteristics.',
    },
    {
      type: 'callout',
      title: 'The Rule',
      text: 'Most A are B + Most A are C -> Some B are C\n\nWhy it works: Imagine a room with 100 people (Group A). If "most" are wearing hats (at least 51 people) and "most" are wearing gloves (at least 51 people), you can\'t have two separate groups of 51 within a population of 100 (51 + 51 = 102, which is 2 over the total). There must be at least two people who are wearing both.',
    },

    { type: 'h4', text: '4.5 The Some-All Chain' },
    {
      type: 'paragraph',
      text: 'Another powerful and valid inference pattern pairs a "Some" statement with an "All" statement. When you know that some members of group A are members of group B, and all members of group B are members of group C, those overlapping members must also be in group C.',
    },
    {
      type: 'callout',
      title: 'The Pattern',
      text: 'Some A are B + All B are C -> Some A are C\n\nDiagram: A <-s-> B -> C\n\nWhy it works: The "Some" link guarantees at least one entity sits in both A and B. The "All" link guarantees every member of B is in C. Therefore, the entity that is in both A and B must also be in C.',
    },
    {
      type: 'paragraph',
      text: 'This pattern frequently appears on the LSAT as a two-step derivation: first you derive an overlap using the Overlap Rule, then you chain that overlap through an "All" statement to reach a final conclusion.',
    },

    { type: 'h4', text: 'LSAT in Action: Applying the Overlap Rule' },
    {
      type: 'paragraph',
      text: '**Analysis:** Let\'s break down the stimulus. **Premise 1:** "Most serious students are happy students" translates to `Serious Students -m-> Happy Students`. **Premise 2:** "...and most serious students go to graduate school" translates to `Serious Students -m-> Graduate School`. **Premise 3:** "Furthermore, all students who go to graduate school are overworked" translates to `Graduate School -> Overworked`. Since the first two premises share the same subject ("Serious Students") and use the "Most" quantifier, this sets up the Overlap Rule.',
    },
    {
      type: 'paragraph',
      text: "We can combine the 'Most + Most' statements to make our first inference: because a majority of Serious Students are Happy and a majority go to Grad School, there must be an overlap. Therefore, `Some Happy Students go to Graduate School` (`Happy <-s-> Graduate School`). We can then chain this new 'Some' inference with the 'All' statement from Premise 3: `Happy <-s-> Graduate School -> Overworked`. The result is `Happy <-s-> Overworked`, because if some happy students are in the grad school group, and everyone in that group is overworked, then those happy students must also be overworked. Our final conclusion is that **Some Happy Students are Overworked.**",
    },
    {
      type: 'paragraph',
      text: '**Strategy Note:** You don\'t necessarily have to get all the way to the final conclusion immediately. Simply deriving the initial "Most + Most" overlap often serves you well. Test makers might base the correct answer solely on this intermediate step, or they might connect it further (as they did here). Either way, finding any inference is usually the critical first step to defeating a conditional Must Be True question.',
    },

    { type: 'h4', text: 'Answer Explanations' },
    {
      type: 'breakdown',
      items: [
        {
          title: '(A) Incorrect.',
          text: 'This overextends the logic. We established that some happy students are overworked. However, we cannot extend this to conclude anything about the majority of the "overworked" group. The group of overworked students could be very large, including many non-students or unhappy students, making the "happy" ones a minority.',
        },
        {
          title: '(B) Correct.',
          text: "This follows directly from the facts. Because 'most' serious students are happy and 'most' go to graduate school, some must be both (the Overlap Rule). Since everyone in graduate school is overworked, those specific happy students must be overworked.",
        },
        {
          title: '(C) Incorrect.',
          text: 'This requires you to both use the false reversal of Overworked -> Graduate School and upgrade the false reversal of Graduate School -> Serious (treating a weaker connection as an "all" connection). It forces logical relationships backwards and makes them stronger than the evidence supports.',
        },
        {
          title: '(D) Incorrect.',
          text: 'This assumes that knowing some graduate students are happy tells us that some aren\'t. In logic, "some" includes the possibility of "all." It is entirely possible that all serious students (and therefore all graduate students in this context) are happy, meaning this statement isn\'t guaranteed to be true.',
        },
        {
          title: '(E) Incorrect.',
          text: 'This requires upgrading the "Serious Students -> Graduate School" connection from "most" to "all". We only know most serious students go to grad school; therefore, we can only conclude that most (not all) serious students are overworked.',
        },
      ],
    },

    { type: 'h4', text: '4.6 Invalid Quantifier Chains: The Undistributed Middle' },
    {
      type: 'paragraph',
      text: "Just as important as knowing what you can conclude is knowing what you cannot. It is crucial to distinguish a valid double overlap from an invalid chain. The invalid pattern is: **Most A are B + Most B are C -> NO CONCLUSION about A and C.** The difference is that in the valid Overlap Rule, the shared term is the source (B <-m- A -m-> C), while in the invalid chain, the shared term is in the middle (A -m-> B -m-> C). It fails because the group of \"A's that are B's\" might be the specific minority of B's that are NOT C's. There is no guaranteed overlap.",
    },
    {
      type: 'callout',
      title: 'The Invalid Order Family',
      text: 'The same logic kills **all-before-most** arguments. `All A are B + Most B are C` still gives you no forced conclusion about A and C, because the A-group might live entirely inside the minority of B that is not C. The safe habit is to ask: **does the evidence control the whole base group, or only a subgroup of a larger set?**',
    },
    {
      type: 'table',
      headers: ['Pattern', 'Status', 'Why'],
      rows: [
        ['Most A are B + Most A are C', 'VALID', 'Two majorities of the same base group must overlap.'],
        ['Most A are B + Most B are C', 'INVALID', 'The shared term is a middle group, not a common base.'],
        ['All A are B + Most B are C', 'INVALID', 'A subgroup can sit inside the minority of B that is not C.'],
        ['All A are B + Some B are C', 'INVALID', 'A subgroup does not inherit a property held by only some of the larger group.'],
      ],
    },
    {
      type: 'paragraph',
      text: 'A related trap is **Most Reversal**. `Most A are B` does not mean `Most B are A`. Majority language measures how much of **A** falls inside **B**. It says nothing about how large A is relative to the entire B-population.',
    },

    { type: 'h4', text: 'LSAT in Action: Spotting the Flaw' },
    {
      type: 'paragraph',
      text: "**Analysis:** Let's diagram the flawed reasoning. **Premise 1:** `Compujack Employees -m-> Programmers`. **Premise 2:** `Programmers -m-> Excellent Salaries`. **Conclusion:** `Compujack Employees <-s-> Excellent Salaries`. This is the classic invalid quantifier chain (Undistributed Middle). The argument tries to bridge two groups (Compujack Employees and High Earners) via a shared middle group (Programmers), but the connection is broken. The Compujack employees could be the specific minority of programmers who are underpaid. Without a guarantee of overlap, the conclusion is invalid.",
    },

    { type: 'h4', text: 'Answer Explanations' },
    {
      type: 'breakdown',
      items: [
        {
          title: '(A) Correct.',
          text: 'This argument replicates the Undistributed Middle flaw. It sets up a chain: `Molly\'s Classmates -m-> Gardeners` and `Gardeners -m-> Patience`. It then incorrectly concludes that the first group must overlap with the third (`Classmates <-s-> Patience`). Just like the stimulus, it ignores the possibility that the "Gardeners" who are classmates are distinct from the "Gardeners" who are patient.',
        },
        {
          title: '(B) Incorrect.',
          text: 'This fails to match the modality of the conclusion. The stimulus concludes that something "must" be true (certainty). This answer choice concludes that something "could" be true (possibility). Since it is logically possible for the groups to overlap, this argument is actually valid (or at least, less obviously flawed in the same way). The flaw in the stimulus is claiming certainty where none exists.',
        },
        {
          title: '(C) Incorrect.',
          text: 'This changes the scope of the conclusion. The stimulus makes a claim connecting two distinct groups (Compujack Employees <-s-> Excellent Salaries). This answer choice, however, applies its conclusion to a combined subset (Classmates who are Gardeners <-s-> Patience). By narrowing the scope to this combined group, it creates a more complex claim that deviates from the flawed pattern found in the stimulus.',
        },
        {
          title: '(D) Incorrect.',
          text: 'This introduces a new 4th variable ("women") that disrupts the logical chain. The stimulus follows a strict A -> B -> C structure. This answer choice introduces a fourth element (A -> B (Gardeners), then jumps to Classmates who garden -> Women), breaking the parallel structure.',
        },
        {
          title: '(E) Incorrect.',
          text: 'This argument uses a completely different (and valid) logical structure: the Overlap Rule. It states Most Classmates -> Gardeners and Most Classmates -> Women. Since both "most" statements originate from the same group ("Classmates"), there must be an overlap (Some Gardeners are Women). Because this reasoning is valid, it cannot parallel the flawed reasoning of the stimulus.',
        },
      ],
    },

    { type: 'h4', text: '4.7 Negated Quantifiers and Their Interactions' },
    {
      type: 'paragraph',
      text: 'The LSAT occasionally introduces negated quantifiers—phrases like "not all" or "not every"—that many test-takers misinterpret. The key is that **logical negation means contradiction, not casual opposite**. Your task is to find the statement that would make the original sentence false.',
    },
    {
      type: 'table',
      headers: ['Phrase', 'Logical Contradictory', 'What It Does NOT Mean', 'Diagram'],
      rows: [
        ['"Not all A are B"', '"Some A are not B"', '"No A are B"', 'A <-s-> ~B'],
        ['"Not every A is B"', '"Some A are not B"', '"No A are B"', 'A <-s-> ~B'],
        ['"It is not the case that some A are B"', '"No A are B"', '"Most A are not B"', 'A -> ~B'],
        [
          '"It is not the case that most A are B"',
          '"At most half of A are B" / "50% or fewer A are B"',
          '"Most A are not B" in every possible setup',
          'No standard diagram; treat as blocking the Most inference',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'The critical insight is that "not all" does **not** mean "none." It only tells you that the universal claim fails—at least one exception exists. Likewise, "not most" means the majority threshold was not reached. The safest reading is **50% or fewer**, not whichever stronger opposite sounds emotionally satisfying.',
    },
    {
      type: 'process',
      steps: [
        '**Step 1: Identify the original threshold.** Is the statement claiming all, most, some, or none?',
        '**Step 2: Flip to the contradictory, not the dramatic opposite.** The contradiction of "All" is "Some...not," not "None."',
        '**Step 3: Keep the weakest guaranteed contradiction.** The contradiction of "Most" is simply "not most" / "50% or fewer."',
      ],
    },

    { type: 'h3', text: 'Lesson 4 Key Takeaways & Practice Focus' },
    {
      type: 'list',
      items: [
        'Diagram with Precision: Use the correct arrow for each quantifier (->, -m->, <-s->).',
        'Know the Properties: Memorize which quantifiers are reversible (Some) and which are not (Most, All).',
        'Think in Boundaries: Ask what lower bound the statement guarantees and what stronger reading it still leaves open.',
        'Master the Valid Inferences: The Overlap Rule (Most A are B + Most A are C) is your most powerful tool for "Must Be True" questions.',
        'Recognize the Flaws: The Invalid Chain family includes `Most A are B + Most B are C`, `All A are B + Most B are C`, and similar wrong-order patterns where the shared term sits in the middle or on the necessary side.',
        'Handle Negated Quantifiers: "Not all" means "some are not," never "none are." "Not most" means the majority threshold failed, not automatically a clean majority-not diagram.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Your assignment: Focus on "Must Be True" and "Parallel Flaw" questions containing the words "most," "some," "few," or natural-language quantity markers like "usually" and "many." Diagram the statements, identify the safe lower bound, and then check for Overlap Rules, valid chains, or blocked inferences.',
    },

    { type: 'h4', text: '4.8 Quick Reference Guide: Valid vs. Invalid' },
    {
      type: 'table',
      headers: ['Logic Pattern', 'Validity', 'Name'],
      rows: [
        ['Most A are B + Most A are C -> Some B are C', 'VALID', 'The Overlap Rule'],
        ['Some A are B + All B are C -> Some A are C', 'VALID', 'The Some-All Chain'],
        ['All A are B + All B are C -> All A are C', 'VALID', 'Transitive Property'],
        ['All A are B + Most B are C -> Most A are C', 'INVALID', 'Wrong-Order Majority Chain'],
        ['Most A are B + Most B are C -> Some A are C', 'INVALID', 'The Undistributed Middle'],
        ['Some A are B + Some B are C -> Some A are C', 'INVALID', 'Broken Chain'],
        ['Not All A are B -> No A are B', 'INVALID', 'Negation Upgrade'],
      ],
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Lesson 4: Quantifiers — All, Most, Some, and Few"
        },
        {
          "type": "paragraph",
          "text": "**Objective:** The goal of this lesson is to help you accurately diagram statements involving quantifiers and make valid inferences from them. You will learn to spot the difference between rock-solid logical chains and the common fallacies that fall apart under scrutiny. Until now, we have mostly dealt with absolute statements. A phrase like \"All dogs are mammals\" creates a 100% certain relationship (Dog -> Mammal): if you have a dog, you definitely have a mammal. However, LSAT arguments rarely offer this level of certainty. More often, arguments rely on quantifiers—words like \"most\" or \"some\"—that express partial truths. Mastering the specific rules for these words is key to handling a large portion of Logical Reasoning questions and avoids the trap of treating a \"likelihood\" as a \"guarantee.\""
        },
        {
          "type": "h4",
          "text": "4.1 The Quantifier Hierarchy & Diagramming"
        },
        {
          "type": "paragraph",
          "text": "Think of quantifiers as existing on a spectrum of certainty:"
        },
        {
          "type": "table",
          "headers": [
            "Quantifier",
            "Strength",
            "Diagram",
            "Meaning",
            "Properties"
          ],
          "rows": [
            [
              "**All**",
              "100%",
              "A -> B",
              "Every single member of group A is a member of group B.",
              "Simple conditional relationship open to conditional chaining and contraposing."
            ],
            [
              "**Most**",
              ">50%",
              "A -m-> B",
              "A majority; more than half of the members of group A are also members of group B.",
              "NOT Contraposable. Cannot end a valid conditional chain."
            ],
            [
              "**Some**",
              ">= 1",
              "A <-s-> B",
              "There is at least one member of group A that is also a member of group B.",
              "Reversible. (A <-s-> B is identical to B <-s-> A). NOT Contraposable. Cannot end a valid conditional chain."
            ]
          ]
        },
        {
          "type": "h4",
          "text": "4.2 Special Quantifiers: \"Many\" and \"Few\""
        },
        {
          "type": "breakdown",
          "items": [
            {
              "title": "Many",
              "text": "**Meaning:** Vague (could be 10% or 90%). For the purpose of making a guaranteed deduction, treat \"Many\" as \"Some\" (A <-s-> B). We can only be certain of the bare minimum it implies: an overlap of at least one."
            },
            {
              "title": "Few",
              "text": "**Meaning:** Implies two things at once. \"Few A are B\" creates two rules:\n\n1. Some A are B: A <-s-> B\n2. Most A are NOT B: A -m-> NOT B"
            }
          ]
        },
        {
          "type": "h4",
          "text": "4.3 Valid Quantifier Inferences: The Overlap Rule"
        },
        {
          "type": "paragraph",
          "text": "This is one of the most frequently tested valid deductions. The rule is simple: if a single group has two different majority characteristics, there must be an overlap between those characteristics."
        },
        {
          "type": "callout",
          "title": "The Rule",
          "text": "Most A are B + Most A are C -> Some B are C\n\nWhy it works: Imagine a room with 100 people (Group A). If \"most\" are wearing hats (at least 51 people) and \"most\" are wearing gloves (at least 51 people), you can't have two separate groups of 51 within a population of 100 (51 + 51 = 102, which is 2 over the total). There must be at least two people who are wearing both."
        },
        {
          "type": "h4",
          "text": "4.4 The Some-All Chain"
        },
        {
          "type": "paragraph",
          "text": "Another powerful and valid inference pattern pairs a \"Some\" statement with an \"All\" statement. When you know that some members of group A are members of group B, and all members of group B are members of group C, those overlapping members must also be in group C."
        },
        {
          "type": "callout",
          "title": "The Pattern",
          "text": "Some A are B + All B are C -> Some A are C\n\nDiagram: A <-s-> B -> C\n\nWhy it works: The \"Some\" link guarantees at least one entity sits in both A and B. The \"All\" link guarantees every member of B is in C. Therefore, the entity that is in both A and B must also be in C."
        },
        {
          "type": "paragraph",
          "text": "This pattern frequently appears on the LSAT as a two-step derivation: first you derive an overlap using the Overlap Rule, then you chain that overlap through an \"All\" statement to reach a final conclusion."
        },
        {
          "type": "h4",
          "text": "LSAT in Action: Applying the Overlap Rule"
        },
        {
          "type": "diff-note",
          "text": "{{!The stimulus for this LSAT example is not shown. Add a question-card or blockquote with the full stimulus so students can attempt the problem independently.!}}",
          "variant": "comment"
        },
        {
          "type": "paragraph",
          "text": "{{+**Try this:** Attempt the question before reading the analysis below.+}}"
        },
        {
          "type": "h4",
          "text": "Analysis:"
        },
        {
          "type": "paragraph",
          "text": "Let's break down the stimulus. **Premise 1:** \"Most serious students are happy students\" translates to `Serious Students -m-> Happy Students`. **Premise 2:** \"...and most serious students go to graduate school\" translates to `Serious Students -m-> Graduate School`. **Premise 3:** \"Furthermore, all students who go to graduate school are overworked\" translates to `Graduate School -> Overworked`. Since the first two premises share the same subject ('Serious Students') and use the 'Most' quantifier, this sets up the Overlap Rule."
        },
        {
          "type": "paragraph",
          "text": "We can combine the 'Most + Most' statements to make our first inference: because a majority of Serious Students are Happy and a majority go to Grad School, there must be an overlap. Therefore, `Some Happy Students go to Graduate School` (`Happy <-s-> Graduate School`). We can then chain this new 'Some' inference with the 'All' statement from Premise 3: `Happy <-s-> Graduate School -> Overworked`. The result is `Happy <-s-> Overworked`, because if some happy students are in the grad school group, and everyone in that group is overworked, then those happy students must also be overworked. Our final conclusion is that **Some Happy Students are Overworked.**"
        },
        {
          "type": "paragraph",
          "text": "**Strategy Note:** You don't necessarily have to get all the way to the final conclusion immediately. Simply deriving the initial \"Most + Most\" overlap often serves you well. Test makers might base the correct answer solely on this intermediate step, or they might connect it further (as they did here). Either way, finding any inference is usually the critical first step to defeating a conditional Must Be True question."
        },
        {
          "type": "h4",
          "text": "Answer Explanations:"
        },
        {
          "type": "breakdown",
          "items": [
            {
              "title": "(A) Incorrect.",
              "text": "This overextends the logic. We established that some happy students are overworked. However, we cannot extend this to conclude anything about the majority of the \"overworked\" group. The group of overworked students could be very large, including many non-students or unhappy students, making the \"happy\" ones a minority."
            },
            {
              "title": "(B) Correct.",
              "text": "This follows directly from the facts. Because 'most' serious students are happy and 'most' go to graduate school, some must be both (the Overlap Rule). Since everyone in graduate school is overworked, those specific happy students must be overworked."
            },
            {
              "title": "(C) Incorrect.",
              "text": "This requires you to both use the false reversal of Overworked -> Graduate School and upgrade the false reversal of Graduate School -> Serious (treating a weaker connection as an \"all\" connection). It forces logical relationships backwards and makes them stronger than the evidence supports."
            },
            {
              "title": "(D) Incorrect.",
              "text": "This assumes that knowing some graduate students are happy tells us that some aren't. In logic, \"some\" includes the possibility of \"all.\" It is entirely possible that all serious students (and therefore all graduate students in this context) are happy, meaning this statement isn't guaranteed to be true."
            },
            {
              "title": "(E) Incorrect.",
              "text": "This requires upgrading the \"Serious Students -> Graduate School\" connection from \"most\" to \"all\". We only know most serious students go to grad school; therefore, we can only conclude that most (not all) serious students are overworked."
            }
          ]
        },
        {
          "type": "h4",
          "text": "4.5 Invalid Quantifier Chains: The Undistributed Middle"
        },
        {
          "type": "paragraph",
          "text": "Just as important as knowing what you can conclude is knowing what you cannot. It is crucial to distinguish a valid double overlap from an invalid chain. The invalid pattern is: **Most A are B + Most B are C -> NO CONCLUSION about A and C.** The difference is that in the valid Overlap Rule, the shared term is the source (B <-m- A -m-> C), while in the invalid chain, the shared term is in the middle (A -m-> B -m-> C). It fails because the group of \"A's that are B's\" might be the specific minority of B's that are NOT C's. There is no guaranteed overlap."
        },
        {
          "type": "h4",
          "text": "LSAT in Action: Spotting the Flaw"
        },
        {
          "type": "diff-note",
          "text": "{{!The stimulus for this LSAT example is not shown. Add a question-card or blockquote with the full stimulus so students can attempt the problem independently.!}}",
          "variant": "comment"
        },
        {
          "type": "paragraph",
          "text": "{{+**Try this:** Attempt the question before reading the analysis below.+}}"
        },
        {
          "type": "h4",
          "text": "Analysis:"
        },
        {
          "type": "paragraph",
          "text": "Let's diagram the flawed reasoning. **Premise 1:** `Compujack Employees -m-> Programmers`. **Premise 2:** `Programmers -m-> Excellent Salaries`. **Conclusion:** `Compujack Employees <-s-> Excellent Salaries`. This is the classic invalid quantifier chain (Undistributed Middle). The argument tries to bridge two groups (Compujack Employees and High Earners) via a shared middle group (Programmers), but the connection is broken. The Compujack employees could be the specific minority of programmers who are underpaid. Without a guarantee of overlap, the conclusion is invalid."
        },
        {
          "type": "h4",
          "text": "Answer Explanations:"
        },
        {
          "type": "breakdown",
          "items": [
            {
              "title": "(A) Correct.",
              "text": "This argument replicates the Undistributed Middle flaw. It sets up a chain: `Molly's Classmates -m-> Gardeners` and `Gardeners -m-> Patience`. It then incorrectly concludes that the first group must overlap with the third (`Classmates <-s-> Patience`). Just like the stimulus, it ignores the possibility that the \"Gardeners\" who are classmates are distinct from the \"Gardeners\" who are patient."
            },
            {
              "title": "(B) Incorrect.",
              "text": "This fails to match the modality of the conclusion. The stimulus concludes that something \"must\" be true (certainty). This answer choice concludes that something \"could\" be true (possibility). Since it is logically possible for the groups to overlap, this argument is actually valid (or at least, less obviously flawed in the same way). The flaw in the stimulus is claiming certainty where none exists."
            },
            {
              "title": "(C) Incorrect.",
              "text": "This changes the scope of the conclusion. The stimulus makes a claim connecting two distinct groups (Compujack Employees <-s-> Excellent Salaries). This answer choice, however, applies its conclusion to a combined subset (Classmates who are Gardeners <-s-> Patience). By narrowing the scope to this combined group, it creates a more complex claim that deviates from the flawed pattern found in the stimulus."
            },
            {
              "title": "(D) Incorrect.",
              "text": "This introduces a new 4th variable (\"women\") that disrupts the logical chain. The stimulus follows a strict A -> B -> C structure. This answer choice introduces a fourth element (A -> B (Gardeners), then jumps to Classmates who garden -> Women), breaking the parallel structure."
            },
            {
              "title": "(E) Incorrect.",
              "text": "This argument uses a completely different (and valid) logical structure: the Overlap Rule. It states Most Classmates -> Gardeners and Most Classmates -> Women. Since both \"most\" statements originate from the same group (\"Classmates\"), there must be an overlap (Some Gardeners are Women). Because this reasoning is valid, it cannot parallel the flawed reasoning of the stimulus."
            }
          ]
        },
        {
          "type": "h4",
          "text": "4.6 Negated Quantifiers and Their Interactions"
        },
        {
          "type": "paragraph",
          "text": "The LSAT occasionally introduces negated quantifiers—phrases like \"not all\" or \"not every\"—that many test-takers misinterpret. Understanding how negation interacts with quantifiers prevents costly errors."
        },
        {
          "type": "table",
          "headers": [
            "Phrase",
            "Logical Equivalent",
            "Diagram"
          ],
          "rows": [
            [
              "\"Not all A are B\"",
              "\"Some A are not B\"",
              "A <-s-> ~B"
            ],
            [
              "\"Not every A is B\"",
              "\"Some A are not B\"",
              "A <-s-> ~B"
            ],
            [
              "\"It is not the case that some A are B\"",
              "\"No A are B\"",
              "A -> ~B"
            ],
            [
              "\"It is not the case that most A are B\"",
              "\"At most half of A are B\"",
              "No standard diagram; treat as blocking the Most inference"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "The critical insight is that \"not all\" does **not** mean \"none.\" It only tells you that the universal claim fails—at least one exception exists. This distinction is a favorite testing point in Flaw and Must Be True questions."
        },
        {
          "type": "h3",
          "text": "Lesson 4 Key Takeaways & Practice Focus"
        },
        {
          "type": "list",
          "items": [
            "Diagram with Precision: Use the correct arrow for each quantifier (->, -m->, <-s->).",
            "Know the Properties: Memorize which quantifiers are reversible (Some) and which are not (Most, All).",
            "Master the Valid Inferences: The Overlap Rule (Most A are B + Most A are C) is your most powerful tool for \"Must Be True\" questions.",
            "Recognize the Flaws: The Invalid Chain (Most A are B + Most B are C) is a common pattern in \"Flaw\" and \"Parallel Flaw\" questions.",
            "Handle Negated Quantifiers: \"Not all\" means \"some are not,\" never \"none are.\" Keep this distinction sharp."
          ]
        },
        {
          "type": "paragraph",
          "text": "Your assignment: Focus on \"Must Be True\" and \"Parallel Flaw\" questions containing the words \"most,\" \"some,\" or \"few.\" Diagram the statements and check for the Overlap Rule or Invalid Chains."
        },
        {
          "type": "h4",
          "text": "4.7 Quick Reference Guide: Valid vs. Invalid"
        },
        {
          "type": "table",
          "headers": [
            "Logic Pattern",
            "Validity",
            "Name"
          ],
          "rows": [
            [
              "Most A are B + Most A are C -> Some B are C",
              "VALID",
              "The Overlap Rule"
            ],
            [
              "Some A are B + All B are C -> Some A are C",
              "VALID",
              "The Some-All Chain"
            ],
            [
              "All A are B + All B are C -> All A are C",
              "VALID",
              "Transitive Property"
            ],
            [
              "Most A are B + Most B are C -> Some A are C",
              "INVALID",
              "The Undistributed Middle"
            ],
            [
              "Some A are B + Some B are C -> Some A are C",
              "INVALID",
              "Broken Chain"
            ],
            [
              "Not All A are B -> No A are B",
              "INVALID",
              "Negation Upgrade"
            ]
          ]
        }
      ],
    },
  },
};
