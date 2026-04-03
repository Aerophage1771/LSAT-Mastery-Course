import { Lesson } from '../../types';

export const Lesson7_Drill_AbstractRoles: Lesson = {
  id: "1-7",
  title: "Drill: Abstract Roles (PT-117-S-2-Q-24)",
  content: [
    { type: 'h3', text: "Practice Drill: Identifying an Argument Part (PT-117-S-2-Q-24)" },
    { type: 'paragraph', text: "This drill tackles a harder question. The complexity here lies in the multi-layered structure of the argument, which involves an author attacking a group of people who are attacking a third party." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-117-S-2-Q-24',
      stimulus: "**Psychologist:** Some psychologists mistakenly argue that because dreams result from electrical discharges in the brain, they must be understood purely in terms of their physiological function. They conclude, against Freud, that dreams reveal nothing about the character of the dreamer. **But since dream content varies enormously,** then even if electrical discharges provide the terms of the physiological explanation of dreams, they cannot completely explain the phenomenon of dreaming.",
      question: "The claim that *dream content varies enormously* plays which one of the following roles in the argument?",
      options: [
      "**(A)** It is used to support the anti-Freudian conclusion that some psychologists draw concerning dreams.",
      "**(B)** It is used to support the explicitly stated conclusion that a fully satisfactory account of dreams must allow for the possibility of their revealing significant information about the dreamer.",
      "**(C)** It is used to suggest that neither Freud’s theory nor the theory of anti-Freudian psychologists can completely explain the phenomenon of dreaming.",
      "**(D)** It is used to illustrate the difficulty of providing a complete explanation of the phenomenon of dreaming.",
      "**(E)** It is used to undermine a claim that some psychologists use to argue against a view of Freud’s."
    ]
    },
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Find the Target" },
    { type: 'paragraph', text: "The target is the phrase in the final sentence: *\"dream content varies enormously.\"*" },
    
    { type: 'h3', text: "2. Break Down the Content Line-by-Line" },
    { type: 'paragraph', text: "This argument has three distinct \"characters\": The Author (Psychologist), The \"Mistaken\" Psychologists (Anti-Freudians), and Freud." },
    
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      {
        title: "\"Some psychologists mistakenly argue...\"",
        text: "The Opposing Viewpoint. These psychologists believe dreams are *only* biology (electricity)."
      },
      {
        title: "\"They conclude, against Freud...\"",
        text: "The implication of the Opposing View. They use their view to attack Freud."
      },
      {
        title: "\"But since dream content varies enormously...\" (Target)",
        text: "The Author introduces a new fact. The word **\"since\"** indicates this is a premise."
      },
      {
        title: "\"...then even if electrical discharges... they cannot completely explain...\"",
        text: "The Author's Main Conclusion. Because content varies so much (Target), electricity (which is simple/constant) can't explain everything. This effectively rejects the Opposing View."
      }
    ]},

    { type: 'h3', text: "3. Map the Argument's Logical Structure" },
    { type: 'paragraph', text: "Let's trace the relationships:" },
    { type: 'list', ordered: true, items: [
      "**Opposing View:** \"dreams result from electrical discharges...\" → Therefore, \"dreams reveal nothing about the character of the dreamer.\" (This is their attack on Freud).",
      "**Target Statement (Premise):** \"dream content varies enormously.\"",
      "**Main Conclusion:** The Opposing View's premise is insufficient, as \"they cannot completely explain the phenomenon of dreaming.\""
    ]},
    { type: 'paragraph', text: "The Target Statement is evidence used by the Author to prove that the Opposing Psychologists are wrong." },
    
    { type: 'h3', text: "4. Pinpoint Role & Predict" },
    { type: 'paragraph', text: "The target statement is a premise. Its specific job is to support the Author's conclusion, which is a rejection of the \"Mistaken\" Psychologists' theory." },
    { type: 'callout', title: "Prediction", variant: "tip", text: "Therefore, our prediction is: **The target is a premise used to undermine the theory of the anti-Freudian psychologists.**" },
    
    { type: 'h3', text: "5. Evaluate Answer Choices" },
    { type: 'paragraph', text: "This is where the Abstract Referencing difficulty kicks in. We need to match our clear prediction to these complex descriptions." },
    
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) It is used to support the anti-Freudian conclusion that some psychologists draw concerning dreams.",
        text: "The Author is *attacking* the anti-Freudians, not supporting them. The target statement is used to show their theory is insufficient.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) It is used to support the explicitly stated conclusion that a fully satisfactory account of dreams must allow for the possibility of their revealing significant information about the dreamer.",
        text: "The stimulus never explicitly states this positive conclusion. The conclusion is negative: \"they cannot completely explain the phenomenon of dreaming.\" We cannot infer a positive conclusion that isn't written.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(C) It is used to suggest that neither Freud’s theory nor the theory of anti-Freudian psychologists can completely explain the phenomenon of dreaming.",
        text: "The target is used to attack the *anti-Freudian* psychologists. It is not used to attack Freud. The author actually seems to be defending Freud (or at least defending the *possibility* that Freud is right) against the attack.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) It is used to illustrate the difficulty of providing a complete explanation of the phenomenon of dreaming.",
        text: "Too vague. The author isn't just saying \"dreaming is hard to explain.\" They are making a specific argument against a specific group. The target has a specific attack function, not a general illustrative function.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) It is used to undermine a claim that some psychologists use to argue against a view of Freud’s.",
        text: "This matches perfectly. \"A view of Freud's\" = dreams reveal character. \"Some psychologists use to argue against\" = Anti-Freudians. \"Undermine a claim\" = The Author attacking them. The target is the evidence for that attack.",
        badge: "Correct",
        badgeColor: "green"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question is difficult because of the layers of attribution.\n\nKey takeaways:\n* **Track the Viewpoints:** You must distinguish between the Author, the \"Some Psychologists,\" and Freud.\n* **Map the Attacks:** The \"Some Psychologists\" are attacking Freud. The Author is attacking the \"Some Psychologists.\"\n* **Decode the Abstract Answers:** Choice (E) is accurate, but it requires you to substitute the specific groups from the text into the abstract placeholders." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Advanced Concepts: Difficult Argument Part Questions"
        },
        {
          "type": "paragraph",
          "text": "So far, we've covered the common roles that make up the vast majority of Argument Part questions. But what about the ones that still feel tough, even when you can map the basic structure? These questions are designed to test a deeper, more abstract level of understanding. This lesson breaks down what makes them hard and gives you concrete strategies for handling them."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "1. The Logic Becomes More Complex"
        },
        {
          "type": "paragraph",
          "text": "On harder questions, statements don't just act as simple premises or conclusions. They perform more sophisticated strategic jobs. Your task moves from identifying a building block to characterizing a complex maneuver."
        },
        {
          "type": "h4",
          "text": "Chains of Reasoning"
        },
        {
          "type": "paragraph",
          "text": "Simple arguments flow from premise to conclusion in one step. Hard arguments chain multiple steps together, with each link depending on the previous one:"
        },
        {
          "type": "process",
          "title": "A Multi-Link Chain",
          "steps": [
            "**Premise:** \"Sales of electric vehicles have tripled in the last decade.\"",
            "**IC₁:** \"Therefore, consumer demand for electric vehicles is strong.\"",
            "**IC₂:** \"This strong demand will drive further investment in charging infrastructure.\"",
            "**Main Conclusion:** \"Consequently, range anxiety will cease to be a significant barrier within five years.\""
          ]
        },
        {
          "type": "paragraph",
          "text": "In a chain like this, a question might ask about IC₁. The trap is that IC₁ looks like a conclusion (it follows \"therefore\") but also looks like a premise (it supports IC₂). You must see both relationships. The longer the chain, the more relationships you need to track."
        },
        {
          "type": "h4",
          "text": "Arguments Within Arguments"
        },
        {
          "type": "paragraph",
          "text": "Some stimuli contain two arguments: one belonging to a person the author is critiquing, and one belonging to the author. A question might ask about a premise *within the argument the author is attacking*, not within the author's own argument."
        },
        {
          "type": "blockquote",
          "text": "Economists argue that because free trade lowers prices for consumers, it benefits the economy overall. But this ignores the effects on displaced workers, whose lost income reduces consumer spending far more than trade savings increase it."
        },
        {
          "type": "paragraph",
          "text": "If asked about \"free trade lowers prices for consumers,\" the answer is not simply \"a premise.\" It is a premise *within the economists' argument* — an argument the author rejects. The precise description would be something like: *\"a claim used to support a conclusion that the author challenges.\"*"
        },
        {
          "type": "h4",
          "text": "Strategic Moves"
        },
        {
          "type": "paragraph",
          "text": "Beyond basic premises and conclusions, authors use specific rhetorical strategies. Recognizing these moves is essential for hard questions:"
        },
        {
          "type": "table",
          "headers": [
            "Strategic Move",
            "What the Author Does",
            "Example"
          ],
          "rows": [
            [
              "Counterexample",
              "Presents a specific case that disproves a general claim",
              "\"Not all mammals live on land — whales are mammals and live in the ocean.\""
            ],
            [
              "Ruling Out an Alternative",
              "Eliminates a competing explanation to strengthen their own",
              "\"The increase can't be due to population growth, because the population has remained stable.\""
            ],
            [
              "Reductio ad Absurdum",
              "Shows that accepting a claim leads to an absurd consequence",
              "\"If that policy were correct, we would have to ban all outdoor activity whenever it rains.\""
            ],
            [
              "Analogy",
              "Draws a parallel to a different case to support or undermine a point",
              "\"Expecting students to learn without practice is like expecting athletes to compete without training.\""
            ],
            [
              "Concession",
              "Grants a point to the opposition before pivoting",
              "\"While it is true that costs have risen, the quality improvements justify the increase.\""
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "When you encounter a statement that doesn't feel like a simple premise or conclusion, ask yourself: **What is the author *doing* with this piece of information?** Are they providing an example to disprove something? Eliminating a rival explanation? Showing an absurd consequence? The answer to this question is the statement's role."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "2. The Language Becomes Abstract"
        },
        {
          "type": "paragraph",
          "text": "Often, the stimulus is clear, but the answer choices are written in dense academic jargon. This is intentional. The test-makers are assessing your ability to think about logical structure in the abstract, not just follow the content."
        },
        {
          "type": "h4",
          "text": "Decoding Abstract Language"
        },
        {
          "type": "paragraph",
          "text": "The key skill is translating abstract descriptions into concrete terms from the stimulus. Here is a reference table showing common abstract phrases and what they typically mean:"
        },
        {
          "type": "table",
          "headers": [
            "Abstract Phrase in Answer Choice",
            "Plain English Translation"
          ],
          "rows": [
            [
              "\"a claim that the argument takes as evidence\"",
              "A premise"
            ],
            [
              "\"the overall conclusion drawn in the argument\"",
              "The main conclusion"
            ],
            [
              "\"a subsidiary conclusion used to support the main conclusion\"",
              "An intermediate conclusion"
            ],
            [
              "\"a claim that the argument is designed to refute\"",
              "The opposing viewpoint"
            ],
            [
              "\"it acknowledges a fact that counts against the conclusion\"",
              "A concession"
            ],
            [
              "\"the reasoning that it rejects\"",
              "The opposing argument / the other side's logic"
            ],
            [
              "\"it denies a claim assumed in the reasoning it opposes\"",
              "It attacks an unstated assumption of the other side"
            ],
            [
              "\"a phenomenon the argument seeks to explain\"",
              "The observation or fact being discussed"
            ],
            [
              "\"a consequence drawn in order to cast doubt on a position\"",
              "Part of a reductio / counterfactual argument"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Substitution Technique",
          "variant": "tip",
          "text": "When you encounter a dense answer choice, replace every abstract phrase with the actual content from the stimulus. For example, if the choice says *\"It denies a claim that the argument takes to be assumed in the reasoning that it rejects,\"* translate: *\"the reasoning that it rejects\"* = the economists' argument. *\"assumed in the reasoning\"* = an unstated assumption of the economists. *\"It denies a claim\"* = the author says this assumption is false. Now read the translated version and check if it fits the target statement."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example: Abstract Answer Choices"
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
          "text": "The art critic's argument has a layered structure. Let's map it:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Statement",
            "text": "Role"
          },
          "items": [
            {
              "title": "\"Biographers claim unhappiness must reflect in art\"",
              "text": "This is the **Opposing Viewpoint** — the general claim the art critic is about to argue against.",
              "badge": "Opposing View",
              "badgeColor": "red"
            },
            {
              "title": "\"This claim is false\"",
              "text": "This is the **Main Conclusion** — the art critic's direct rejection of the opposing view.",
              "badge": "Main Conclusion",
              "badgeColor": "indigo"
            },
            {
              "title": "\"The biographer argued the painting depicts marital discord\"",
              "text": "This is an instance of the opposing view applied to a specific case — setting up the counterexample.",
              "badge": "Supporting Context",
              "badgeColor": "slate"
            },
            {
              "title": "\"The painting is obviously a joyful celebration of nature\"",
              "text": "This is the **Counterexample Premise** — a specific fact that contradicts the biographer's claim and, by extension, the general opposing viewpoint. It is evidence that art need not reflect unhappiness.",
              "badge": "Counterexample",
              "badgeColor": "blue"
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "The painting's joyful nature serves as a **counterexample**: a specific case that disproves the biographer's general claim. Since the artist was unhappy but the painting is joyful, the general rule (\"unhappiness must reflect in art\") is shown to be false. This makes (B) — \"used to support the main conclusion by providing a counterexample to a general claim\" — the correct answer."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Strategy for Hard Questions"
        },
        {
          "type": "paragraph",
          "text": "When you encounter a genuinely difficult Argument Part question, follow this disciplined process:"
        },
        {
          "type": "process",
          "title": "Hard Question Protocol",
          "steps": [
            "**Map the Core First:** Before touching the target statement, identify the main conclusion and the primary premises. Get the skeleton right.",
            "**Locate the Target in the Chain:** How does the target connect to the main conclusion? Does it support it directly? Indirectly? Oppose it? Sit outside the chain entirely?",
            "**Characterize the Move:** Is the target a counterexample? A concession? A hypothetical? A premise within someone else's argument? Name the strategic move.",
            "**Translate Abstract Choices:** For each answer choice, replace abstract phrases with actual content from the stimulus. Read the translated version and check for a precise fit.",
            "**Eliminate Precisely:** Don't settle for \"close enough.\" On hard questions, two or three choices may seem plausible. The correct answer will be flawlessly accurate; the wrong answers will contain at least one element that contradicts the stimulus."
          ]
        },
        {
          "type": "callout",
          "title": "A Mindset for Hard Questions",
          "variant": "default",
          "text": "Hard questions have tempting wrong answers that are \"close enough.\" The test-makers know that students who have a rough understanding of the structure will gravitate toward these near-misses. Your job is to find the choice that is **flawlessly accurate** in every detail. If even one word in a choice contradicts the stimulus, eliminate it — no matter how good the rest of the choice sounds."
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "Hard Argument Part questions test three things: **(1)** your ability to track complex reasoning chains with multiple steps, **(2)** your ability to identify sophisticated rhetorical moves like counterexamples and reductio arguments, and **(3)** your ability to decode abstract answer choices by translating them into concrete terms. Master these three skills and the hardest questions become manageable."
        }
      ],
    },
  },
};
