import { Lesson } from '../../types';

export const Lesson3_ProcessOfElimination: Lesson = {
  id: "3-3",
  title: "The Process of Elimination",
  content: [
    { type: 'h3', text: "Lesson 3: The Process of Elimination" },
    { type: 'paragraph', text: "Our goal here is to identify the **argumentative strategy** the author uses to support their conclusion. We are about to look at one of the more common methods of reasoning found on the LSAT: the **Process of Elimination**." },
    { type: 'paragraph', text: "Here is the plan of attack for this lesson:" },
    
    { 
      type: 'process', 
      title: "Plan of Attack",
      steps: [
        "Break down the argument into its parts",
        "Summarize the original argument",
        "Abstract that into a general method",
        "Look for that specific answer choice",
        "Confirm by selecting or removing answers based on our Fact Test"
      ] 
    },

    { type: 'paragraph', text: "Let’s apply this method to the following question." },
    { type: 'h4', text: "Question ID: PT-135-S-2-Q-5" },
    
    { type: 'h4', text: "Stimulus" },
    { type: 'blockquote', text: "**Lahar:** We must now settle on a procedure for deciding on meeting agendas. Our club’s constitution allows three options: unanimous consent, majority vote, or assigning the task to a committee. Unanimous consent is unlikely. Forming a committee has usually led to factionalism and secret deals. Clearly, we should subject meeting agendas to majority vote." },
    
    { type: 'h4', text: "Question" },
    { type: 'paragraph', text: "Lahar’s argument does which one of the following?" },
    
    { type: 'h4', text: "Answer Choices" },
    { 
      type: 'options', 
      items: [
        "(A) rejects suggested procedures on constitutional grounds",
        "(B) claims that one procedure is the appropriate method for reaching every decision in the club",
        "(C) suggests a change to a constitution on the basis of practical considerations",
        "(D) recommends a choice based on the elimination of alternative options",
        "(E) supports one preference by arguing against those who have advocated alternatives"
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Step 1: Break Down the Argument" },
    { type: 'paragraph', text: "Let's engage with the text sentence by sentence to see how the pieces fit together." },
    { type: 'list', items: [
      "**\"We must now settle on a procedure for deciding on meeting agendas.\"**\n*   **Reaction:** Okay, we have a clear goal. We need to figure out how to set the agenda for a meeting.",
      "**\"Our club’s constitution allows three options: unanimous consent, majority vote, or assigning the task to a committee.\"**\n*   **Reaction:** We have a specific menu of choices. We are limited to exactly three variations of how to solve the problem.",
      "**\"Unanimous consent is unlikely.\"**\n*   **Reaction:** That is a negative attached to Option 1. It seems like a significant hurdle.",
      "**\"Forming a committee has usually led to factionalism and secret deals.\"**\n*   **Reaction:** That sounds pretty bad. \"Factionalism and secret deals\" are definitely negatives. It seems like Option 3 has some serious downsides as well.",
      "**\"Clearly, we should subject meeting agendas to majority vote.\"**\n*   **Reaction:** This is the conclusion. He is confirming that we should go with Option 2. This also confirms that the negatives we saw earlier were indeed the reasons he used to reject the first and third options."
    ]},

    { type: 'h3', text: "Step 2: Summarize the Logic (Concrete)" },
    { type: 'paragraph', text: "Lahar needs to pick a way to set meeting agendas. He identifies that there are only three possible ways to do it. He points out that the first way won't work and the third way causes problems. Because he has rejected two of the three choices, he concludes that the club should use the remaining one: majority vote." },

    { type: 'h3', text: "Step 3: Abstract the Logic (The Method)" },
    { type: 'paragraph', text: "What is the abstract structure here? The author established a closed set of possibilities (1, 2, and 3). He then systematically ruled out 1 and 3. This leaves 2 as the only logical conclusion." },
    { type: 'callout', title: "Method: Process of Elimination", variant: "summary", text: "An argument that establishes a limited set of possibilities and systematically rules out alternatives to support the remaining option." },

    { type: 'h3', text: "Step 4: Apply the Fact Test" },
    { type: 'paragraph', text: "Now we evaluate the answer choices. We will break each answer down into its individual components. If *any* component fails the Fact Test—meaning it didn't happen in the text—the whole answer is wrong." },
    
    { 
      type: 'breakdown', 
      labels: { title: 'Option Evaluation', text: 'Validation' },
      items: [
        {
          title: "(A) rejects suggested procedures on constitutional grounds",
          text: "He rejects Option 1 and 3, but **not on constitutional grounds**. The constitution actually *allows* all three. He rejects them for practical reasons.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(B) claims that one procedure is for reaching every decision in the club",
          text: "He argues for majority vote for **meeting agendas**, not for *every* decision in the club. The scope is too broad.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(C) suggests a change to a constitution on the basis of practical considerations",
          text: "He discusses practical issues, but he works **within** the rules. He never suggests *changing* the constitution itself.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(D) recommends a choice based on the elimination of alternative options",
          text: "Conclusion is a recommendation (\"we should...\"). This is supported by **ruling out** Option 1 and Option 3. Perfect match.",
          badge: "Correct",
          badgeColor: "green"
        },
        {
          title: "(E) supports one preference by arguing against those who have advocated alternatives",
          text: "He attacks the **procedures**, not the **people** who advocate them. There are no advocates mentioned in the text.",
          badge: "Incorrect",
          badgeColor: "red"
        }
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Summary" },
    { type: 'paragraph', text: "As we just saw, our steps worked perfectly. We figured out each of the parts of the stimulus, converted that to a general description of what the author did, and successfully converted that to an abstraction. We then found that exact pattern in the answer choices and were able to remove each of the wrong answers for a specific reason." },
    { type: 'paragraph', text: "Carry this forward: Whenever you see an author give you a \"menu\" of options and then start crossing them off, you are looking for the **Process of Elimination**. If you hold to this form, the only thing you'll need to work on is improving your ability to recognize these patterns and your familiarity with how the LSAT phrases them." },
    { type: 'paragraph', text: "Now that we've mastered this structure, let’s walk through the most common method you'll encounter—one that frequently appears in two-speaker arguments." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "A Field Guide to Common Strategies"
        },
        {
          "type": "paragraph",
          "text": "Method of Reasoning questions test your ability to recognize recurring logical patterns. While arguments can seem unique, most fall into a handful of strategic categories. This guide catalogs every major strategy, shows you what each one looks like in a real stimulus, and teaches you to match indicator language to methods at a glance."
        },
        {
          "type": "callout",
          "title": "How to Use This Guide",
          "variant": "tip",
          "text": "Don't try to memorize everything in one sitting. Read through once for familiarity, then return to individual sections as you encounter each method during practice. Over time, pattern recognition will become automatic."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Master Summary Table"
        },
        {
          "type": "paragraph",
          "text": "The table below lists every major method category in order of frequency, with key descriptions and the language you will see in correct answer choices. Use this as your primary quick-reference."
        },
        {
          "type": "table",
          "headers": [
            "Method",
            "Freq.",
            "Core Description",
            "Answer Choice Language"
          ],
          "rows": [
            [
              "**Analogy**",
              "~23%",
              "Compares two situations to transfer a conclusion",
              "\"draws a comparison,\" \"uses an analogy,\" \"likens X to Y\""
            ],
            [
              "**Consequences**",
              "~17%",
              "Argues for/against based on predicted outcomes",
              "\"points out a consequence,\" \"shows X would lead to Y\""
            ],
            [
              "**Causal Reasoning**",
              "~14%",
              "Proposes or challenges a cause-effect link",
              "\"offers an alternative explanation,\" \"questions the causal claim\""
            ],
            [
              "**Challenging Assumptions**",
              "~11%",
              "Exposes and attacks a hidden premise",
              "\"calls into question the assumption,\" \"undermines the presupposition\""
            ],
            [
              "**Applying Principles**",
              "~8%",
              "Applies a general rule to a specific case",
              "\"invokes a principle,\" \"applies a general rule to a particular case\""
            ],
            [
              "**Elimination**",
              "~6%",
              "Rules out all but one possibility",
              "\"eliminates alternatives,\" \"rules out competing explanations\""
            ],
            [
              "**Counterexample**",
              "~5%",
              "Disproves a generalization with a single instance",
              "\"presents a counterexample,\" \"cites an instance that contradicts\""
            ],
            [
              "**Authority / Evidence**",
              "~4%",
              "Cites expert opinion or empirical data",
              "\"appeals to expert testimony,\" \"cites research findings\""
            ],
            [
              "**Other**",
              "~12%",
              "Reductio, definition disputes, conditional logic, etc.",
              "Various — typically described in full in the answer choice"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "1. Argument by Analogy (~23%)"
        },
        {
          "type": "paragraph",
          "text": "The most common method on the LSAT. The author makes a point about one situation by comparing it to another. Because two things are similar in relevant ways, what is true of one is argued to be true of the other."
        },
        {
          "type": "h4",
          "text": "Variations"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Sub-Type",
            "text": "Description"
          },
          "items": [
            {
              "title": "Supportive Analogy",
              "text": "Because two things are similar in one way, they are likely similar in another. The known case supports a conclusion about the unknown case.\n\n**Example:** \"Just as regular car maintenance prevents expensive breakdowns, regular health checkups prevent expensive medical treatments.\"",
              "badge": "Support",
              "badgeColor": "green"
            },
            {
              "title": "Refutation by Analogy",
              "text": "The opponent's reasoning is applied to a different situation where it produces an absurd conclusion, showing the original reasoning is flawed.\n\n**Example:** \"By your logic, since everyone eventually dies, we shouldn't bother treating diseases.\"",
              "badge": "Attack",
              "badgeColor": "red"
            },
            {
              "title": "Attacking an Analogy",
              "text": "An author weakens an analogy by pointing out a crucial *difference* between the two things being compared.\n\n**Example:** \"Unlike the brain, a computer does not have consciousness, so the comparison is misleading.\"",
              "badge": "Attack",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "h4",
          "text": "Concrete Example"
        },
        {
          "type": "blockquote",
          "text": "\"Critic: You argue that violent video games cause real-world violence. But millions of people play these games without committing violent acts. By your reasoning, watching cooking shows should cause everyone to become a chef.\""
        },
        {
          "type": "paragraph",
          "text": "The critic uses a **refutation by analogy**: the opponent's causal logic (exposure → behavior) is applied to a different domain (cooking shows → chefs) where the conclusion is obviously false."
        },
        {
          "type": "h4",
          "text": "Indicator Language"
        },
        {
          "type": "list",
          "items": [
            "\"just as,\" \"similarly,\" \"in the same way,\" \"it would be like\"",
            "\"by that logic,\" \"by your reasoning,\" \"that is like saying\"",
            "\"but unlike X, Y is...\" (attacking an analogy)"
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "2. Highlighting Consequences (~17%)"
        },
        {
          "type": "paragraph",
          "text": "The author argues for or against a position by focusing on its predicted outcomes. This is especially common when evaluating proposals, policies, or plans."
        },
        {
          "type": "h4",
          "text": "Variations"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Sub-Type",
            "text": "Description"
          },
          "items": [
            {
              "title": "Negative Consequences",
              "text": "Argues against a plan by showing it will produce harmful, undesirable, or counterproductive results.\n\n**Example:** \"Raising the minimum wage would cause businesses to lay off workers, increasing unemployment.\"",
              "badge": "Against",
              "badgeColor": "red"
            },
            {
              "title": "Proof by Contradiction (Reductio)",
              "text": "Assumes a claim is true and shows the assumption leads to a false or logically impossible consequence, therefore disproving the original claim.\n\n**Example:** \"Suppose all ravens are white. Then the black bird we just saw is not a raven. But it has every other trait of a raven. Therefore, not all ravens are white.\"",
              "badge": "Disproof",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "h4",
          "text": "Concrete Example"
        },
        {
          "type": "blockquote",
          "text": "\"Councilmember: The proposal to eliminate all parking downtown would devastate local businesses. Shoppers who cannot find convenient parking will simply drive to suburban malls instead. The resulting loss in foot traffic would bankrupt many small retailers within a year.\""
        },
        {
          "type": "paragraph",
          "text": "The councilmember argues against the proposal by **highlighting its negative consequences**: lost shoppers, reduced foot traffic, and business failures."
        },
        {
          "type": "h4",
          "text": "Indicator Language"
        },
        {
          "type": "list",
          "items": [
            "\"would result in,\" \"would lead to,\" \"the consequence would be\"",
            "\"suppose X were true — then Y would follow, but Y is false\"",
            "\"this would cause,\" \"the effect would be\""
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "3. Causal Reasoning & Explanations (~14%)"
        },
        {
          "type": "paragraph",
          "text": "These arguments focus on the *cause* of an observed event or phenomenon. The author either proposes a cause, challenges someone else's proposed cause, or offers a different cause entirely."
        },
        {
          "type": "h4",
          "text": "Variations"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Sub-Type",
            "text": "Description"
          },
          "items": [
            {
              "title": "Alternative Explanation",
              "text": "The author agrees that a phenomenon occurred but offers a different cause than the one proposed.\n\n**Example:** \"The drop in crime may not be due to increased policing — it could be explained by demographic shifts and an aging population.\"",
              "badge": "Alternative",
              "badgeColor": "blue"
            },
            {
              "title": "Weakening a Causal Claim",
              "text": "The author challenges a cause-and-effect conclusion by showing the effect occurs even without the proposed cause, or the cause occurs without the effect.\n\n**Example:** \"Japan has strict gun laws and low gun violence, but Switzerland also has widespread gun ownership and low gun violence.\"",
              "badge": "Weaken",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "h4",
          "text": "Concrete Example"
        },
        {
          "type": "blockquote",
          "text": "\"Researcher: It has been widely claimed that increased screen time causes depression in teenagers. However, a large-scale study found that moderate screen time actually correlates with *higher* well-being. It is more likely that depression drives increased screen time — teens who are already depressed withdraw from social activities and spend more time on screens as a result.\""
        },
        {
          "type": "paragraph",
          "text": "The researcher uses two methods: (1) cites evidence undermining the original causal claim, and (2) offers an **alternative explanation** that reverses the causal direction."
        },
        {
          "type": "h4",
          "text": "Indicator Language"
        },
        {
          "type": "list",
          "items": [
            "\"is caused by,\" \"is the result of,\" \"is explained by\"",
            "\"an alternative explanation is,\" \"could instead be caused by\"",
            "\"the effect occurs even without the proposed cause\""
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "4. Challenging an Unstated Assumption (~11%)"
        },
        {
          "type": "paragraph",
          "text": "A sophisticated rebuttal where the author attacks the logical foundation of an argument by exposing a hidden weakness. Rather than disputing the stated evidence, the author identifies a necessary but unstated premise and provides evidence that this assumption is false."
        },
        {
          "type": "h4",
          "text": "Concrete Example"
        },
        {
          "type": "blockquote",
          "text": "\"Manager: We should hire only candidates from top-ranked universities because they receive the best education. Colleague: That assumes university ranking accurately measures educational quality. In fact, rankings are primarily determined by research funding and alumni donations, neither of which directly reflects teaching quality.\""
        },
        {
          "type": "paragraph",
          "text": "The colleague identifies the manager's **unstated assumption** (that rankings = educational quality) and then provides evidence that this assumption is false (rankings measure research funding and donations, not teaching)."
        },
        {
          "type": "h4",
          "text": "Indicator Language"
        },
        {
          "type": "list",
          "items": [
            "\"assumes without justification,\" \"presupposes,\" \"takes for granted\"",
            "\"the argument relies on the unwarranted assumption that\"",
            "\"overlooks the possibility that,\" \"fails to consider that\""
          ]
        },
        {
          "type": "callout",
          "title": "How to Spot It",
          "variant": "tip",
          "text": "The second speaker does *not* attack the stated evidence. Instead, they introduce a new piece of information that breaks the logical link between the first speaker's evidence and conclusion. The correct answer will often use words like \"assumption,\" \"presupposition,\" or \"premise.\""
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "5. Applying Principles & Rules (~8%)"
        },
        {
          "type": "paragraph",
          "text": "The argument is structured around the application of a general rule, definition, or principle to a specific case. The argument moves from the general to the specific — or occasionally, from specific instances to a general principle."
        },
        {
          "type": "h4",
          "text": "Concrete Example"
        },
        {
          "type": "blockquote",
          "text": "\"Legal scholar: Under contract law, an agreement is void if one party was coerced into signing. The evidence clearly shows that the defendant signed the contract under threat of termination. Therefore, the contract is void.\""
        },
        {
          "type": "paragraph",
          "text": "The legal scholar **applies a general legal principle** (coerced agreements are void) to a specific case (the defendant was coerced) to reach a conclusion (the contract is void)."
        },
        {
          "type": "h4",
          "text": "Indicator Language"
        },
        {
          "type": "list",
          "items": [
            "\"according to the principle,\" \"by definition,\" \"under the rule\"",
            "\"since X satisfies the criteria for Y,\" \"fits the definition of\"",
            "\"generalizes from specific cases to establish a principle\""
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "6. Process of Elimination (~6%)"
        },
        {
          "type": "paragraph",
          "text": "This strategy reaches a conclusion by showing it is the only viable option remaining. The author identifies a limited set of possible explanations and then provides reasons to reject all but one."
        },
        {
          "type": "h4",
          "text": "Concrete Example"
        },
        {
          "type": "blockquote",
          "text": "\"Detective: The stolen painting must have been taken by one of three people who had access to the gallery that night: the security guard, the curator, or the janitor. The security guard was on camera the entire evening, and the curator was at a documented conference in another city. Therefore, the janitor must be the thief.\""
        },
        {
          "type": "paragraph",
          "text": "The detective **eliminates alternatives** systematically: the security guard has an alibi (camera footage), the curator has an alibi (conference), leaving only the janitor."
        },
        {
          "type": "h4",
          "text": "Indicator Language"
        },
        {
          "type": "list",
          "items": [
            "\"the only remaining option,\" \"since it cannot be X,\" \"must therefore be Y\"",
            "\"rules out,\" \"eliminates,\" \"having excluded\"",
            "\"one of three possible explanations... but not A... and not B... therefore C\""
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "7. Refutation by Counterexample (~5%)"
        },
        {
          "type": "paragraph",
          "text": "A direct and powerful way to disprove a general claim. The author refutes a universal claim (\"All X are Y\" or \"No X is Y\") by providing a single specific instance where the claim is false. One valid counterexample is logically sufficient to disprove any universal claim."
        },
        {
          "type": "h4",
          "text": "Concrete Example"
        },
        {
          "type": "blockquote",
          "text": "\"Professor: It is not true that every successful entrepreneur dropped out of college. Warren Buffett graduated from the University of Nebraska, earned a master's from Columbia, and built one of the largest companies in the world.\""
        },
        {
          "type": "paragraph",
          "text": "The professor **provides a counterexample** (Warren Buffett) to disprove the universal claim that every successful entrepreneur dropped out."
        },
        {
          "type": "h4",
          "text": "Indicator Language"
        },
        {
          "type": "list",
          "items": [
            "\"but consider the case of,\" \"for example, [specific instance]\"",
            "\"there is at least one instance where,\" \"not all X are Y — for instance\"",
            "\"this is contradicted by the case of\""
          ]
        },
        {
          "type": "callout",
          "title": "Counterexample vs. Analogy",
          "variant": "default",
          "text": "A **counterexample** is a specific instance of the *exact same category* being discussed. An **analogy** is a comparison to a *different category*. If someone says \"All birds can fly\" and you mention penguins, that is a counterexample (penguins are birds). If you compare birds to airplanes, that is an analogy."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Quick Pattern Matching — Decision Process"
        },
        {
          "type": "paragraph",
          "text": "Use this decision process when you encounter a Method of Reasoning question and need to quickly identify the strategy:"
        },
        {
          "type": "process",
          "title": "Pattern Matching Flowchart",
          "steps": [
            "**Does the argument compare two different situations?** → If yes, it is likely an **Analogy** (supportive, refutation, or attacking).",
            "**Does the argument predict what would happen if a plan is followed?** → If yes, it is likely **Highlighting Consequences** (negative or reductio).",
            "**Does the argument offer a different cause for the same observed event?** → If yes, it is likely an **Alternative Explanation** (Causal Reasoning).",
            "**Does the argument expose a hidden assumption and show it is false?** → If yes, it is likely **Challenging an Assumption**.",
            "**Does the argument apply a general rule/principle to a specific case?** → If yes, it is likely **Applying a Principle**.",
            "**Does the argument list possibilities and rule them out one by one?** → If yes, it is likely **Process of Elimination**.",
            "**Does the argument respond to a universal claim with a single specific case that violates it?** → If yes, it is likely a **Counterexample**.",
            "**Does the argument cite expert opinion or research data?** → If yes, it is likely **Appeal to Authority/Evidence**."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Method Indicator Language — Quick Reference"
        },
        {
          "type": "paragraph",
          "text": "This table maps common phrases you will see in *answer choices* to the method they describe. Use this when evaluating answers in Step 3 of the 4-Step Method:"
        },
        {
          "type": "table",
          "headers": [
            "Answer Choice Language",
            "Method It Describes"
          ],
          "rows": [
            [
              "\"draws a comparison between two cases\"",
              "Analogy (Supportive)"
            ],
            [
              "\"applies the opponent's reasoning to a different case to show it leads to an absurd result\"",
              "Refutation by Analogy"
            ],
            [
              "\"points out a relevant difference between two things being compared\"",
              "Attacking an Analogy"
            ],
            [
              "\"argues that a proposal would have undesirable consequences\"",
              "Negative Consequences"
            ],
            [
              "\"assumes the claim is true and derives a contradiction\"",
              "Proof by Contradiction (Reductio)"
            ],
            [
              "\"offers an alternative explanation for the observed phenomenon\"",
              "Alternative Explanation"
            ],
            [
              "\"questions the causal connection between X and Y\"",
              "Weakening a Causal Claim"
            ],
            [
              "\"challenges an assumption on which the argument depends\"",
              "Challenging an Assumption"
            ],
            [
              "\"applies a general principle to a specific case\"",
              "Applying a Principle"
            ],
            [
              "\"eliminates competing alternative explanations\"",
              "Process of Elimination"
            ],
            [
              "\"presents a counterexample to a generalization\"",
              "Counterexample"
            ],
            [
              "\"cites expert testimony in support of a claim\"",
              "Appeal to Authority"
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
          "text": "• Most Method of Reasoning arguments fall into **7–8 recurring categories**. Recognizing the category instantly narrows your answer choices.\n• **Analogy** is the most common method (~23%), followed by **Consequences** (~17%) and **Causal Reasoning** (~14%).\n• Each method has distinctive **indicator language** in both the stimulus and the answer choices. Learn to spot these signals.\n• Use the **Quick Pattern Matching** decision process when you need to quickly identify a method during timed practice.\n• The **Master Summary Table** at the top of this lesson is your go-to quick reference. Return to it often during practice sessions."
        }
      ],
    },
  },
};
