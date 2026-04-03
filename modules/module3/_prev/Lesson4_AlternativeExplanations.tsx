import { Lesson } from '../../types';

export const Lesson4_AlternativeExplanations: Lesson = {
  id: "3-4",
  title: "Alternative Explanations",
  content: [
    { type: 'h3', text: "Lesson 4: Alternative Explanations" },
    { type: 'paragraph', text: "Our goal here is to identify the **argumentative strategy** used to support the conclusion. While the Process of Elimination is a handy tool, it isn't actually the single most common reasoning structure on the test. That title belongs to the method we are about to discuss: **Offering an Alternative Explanation**." },
    { type: 'paragraph', text: "We will see this method applied in our first **two-speaker** argument. When you see two speakers, your job in Step 1 changes slightly: you need to determine exactly how the second person interacts with the first. Do they agree? Do they attack the evidence? Do they attack the conclusion?" },
    
    { 
      type: 'process', 
      title: "Plan of Attack",
      steps: [
        "Break down the argument into its parts",
        "Summarize the original argument",
        "Abstract that into a general method",
        "Look for that specific answer choice",
        "Select or remove it based on our Fact Test"
      ] 
    },

    { type: 'h4', text: "Question ID: PT-119-S-4-Q-4" },
    { type: 'h4', text: "Stimulus" },
    { type: 'blockquote', text: "**Anne:** Halley’s Comet, now in a part of its orbit relatively far from the Sun, recently flared brightly enough to be seen by telescope. No comet has ever been observed to flare so far from the Sun before, so such a flare must be highly unusual.\n\n**Sue:** Nonsense. Usually no one bothers to try to observe comets when they are so far from the Sun. This flare was observed only because an observatory was tracking Halley’s Comet very carefully." },
    
    { type: 'h4', text: "Question" },
    { type: 'paragraph', text: "Sue challenges Anne’s reasoning by" },
    
    { type: 'h4', text: "Answer Choices" },
    { 
      type: 'options', 
      items: [
        "(A) pointing out that Anne’s use of the term “observed” is excessively vague",
        "(B) drawing attention to an inconsistency between two of Anne’s claims",
        "(C) presenting evidence that directly contradicts Anne’s evidence",
        "(D) offering an alternative explanation for the evidence Anne cites",
        "(E) undermining some of Anne’s evidence while agreeing with her conclusion"
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Step 1: Break Down the Argument" },
    { type: 'paragraph', text: "Let's look at the conversation sentence by sentence to understand the complete picture." },
    
    { type: 'h4', text: "Anne's Argument" },
    { type: 'list', items: [
      "**\"Halley’s Comet... recently flared brightly enough to be seen by telescope.\"**\n*   **Reaction:** Factual context. A comet far away flared. Accepted fact.",
      "**\"No comet has ever been observed to flare so far from the Sun before...\"**\n*   **Reaction:** Evidence. This is different from the historical record.",
      "**\"...so such a flare must be highly unusual.\"**\n*   **Reaction:** Conclusion. Anne assumes that a lack of past observations means a lack of actual occurrences."
    ]},

    { type: 'h4', text: "Sue's Response" },
    { type: 'list', items: [
      "**\"Nonsense.\"**\n*   **Reaction:** Sue fundamentally disputes Anne's conclusion.",
      "**\"Usually no one bothers to try to observe comets when they are so far from the Sun.\"**\n*   **Reaction:** New detail. Challenges Anne's logic: we haven't seen it because we haven't been looking.",
      "**\"This flare was observed only because an observatory was tracking Halley’s Comet very carefully.\"**\n*   **Reaction:** Explaining the exception. Sue argues the lack of past sightings is due to lack of effort, not rarity of the event."
    ]},

    { type: 'h3', text: "Step 2: Summarize the Logic (Concrete)" },
    { type: 'paragraph', text: "Anne looks at the evidence—that we've never seen a flare like this before—and concludes that the flare itself must be a rare, unusual event. Sue looks at the exact same fact (we've never seen it) and argues that it's simply because we usually aren't looking." },

    { type: 'h3', text: "Step 3: Abstract the Logic (The Method)" },
    { type: 'paragraph', text: "Anne argues that **Effect A** (we have never seen this) is caused by **Cause A** (the event is rare). Sue argues that **Effect A** (we have never seen this) is actually caused by **Cause B** (we usually don't look)." },
    { type: 'paragraph', text: "Sue is accepting the evidence but providing a different reason for why that evidence exists." },
    { type: 'callout', title: "Method: Alternative Explanation", variant: "summary", text: "An argument that accepts the stated evidence but proposes a different cause or reason for that evidence, thereby weakening the original conclusion." },

    { type: 'h3', text: "Step 4: Apply the Fact Test" },
    { 
      type: 'breakdown', 
      labels: { title: 'Option Analysis', text: 'Fact Test Validation' },
      items: [
        {
          title: "(A) pointing out that Anne’s use of the term “observed” is excessively vague",
          text: "Sue uses the term \"observed,\" but she **never says it's vague or unclear**. She just explains the *circumstances* of the observation.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(B) drawing attention to an inconsistency between two of Anne’s claims",
          text: "Anne's claims are logically consistent. Sue attacks the **conclusion with new facts**; she doesn't point out a contradiction within Anne's words.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(C) presenting evidence that directly contradicts Anne’s evidence",
          text: "Sue actually **agrees with Anne's evidence** (that no comets were seen before). She contradicts the *conclusion*, not the evidence.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(D) offering an alternative explanation for the evidence Anne cites",
          text: "Sue explains the lack of sightings by citing a lack of effort/tracking. This is a **different, alternative reason** for the same evidence Anne used. Perfect match.",
          badge: "Correct",
          badgeColor: "green"
        },
        {
          title: "(E) undermining some of Anne’s evidence while agreeing with her conclusion",
          text: "Sue undermines the strength of the evidence, but she **disagrees with the conclusion**. She starts her response with \"Nonsense.\"",
          badge: "Incorrect",
          badgeColor: "red"
        }
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Summary" },
    { type: 'paragraph', text: "As we saw, all of our steps worked. We figured out each of the parts of the stimulus, converted that to a general description of what the author did, successfully converted that to an abstraction, and found that pattern in the answer choices." },
    { type: 'paragraph', text: "Two-speaker passages often involve the disagreement of individuals on a topic. If that topic is a phenomenon whose cause we are seeking to explain, one of the most common ways that disagreement occurs is in a dispute over what the *explanation* for the observation may be. If you see two speakers giving two different reasons for a thing they both agree is happening, you are likely dealing with an **Alternative Explanation**." },
    { type: 'blockquote', text: "**Library of Methods:**\n\n**1. Process of Elimination:** An argument that establishes a limited set of possibilities and systematically rules out alternatives to support the remaining option.\n\n**2. Alternative Explanation:** An argument that accepts the stated evidence but proposes a different cause or reason for that evidence, thereby weakening the original conclusion." },
    { type: 'paragraph', text: "Next, we are going to look at another very common method: **Explanation via a Similar Analogy**." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Lesson 1: Refutation by Analogy (Method of Reasoning)"
        },
        {
          "type": "paragraph",
          "text": "Refutation by analogy is one of the most powerful — and most tested — argumentative strategies on the LSAT. This lesson teaches you exactly how it works, how to spot it, and how to distinguish it from closely related methods."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Concept Focus: Refutation by Analogy"
        },
        {
          "type": "paragraph",
          "text": "This strategy attacks an opponent's *logic*, not their facts. To show an argument is flawed, you create a new argument that uses the exact same reasoning pattern but applies it to a different situation. The goal is to make this new argument lead to an obviously absurd or false conclusion, which proves that the original *form* of reasoning is unreliable."
        },
        {
          "type": "h3",
          "text": "How Analogies Work in Arguments"
        },
        {
          "type": "paragraph",
          "text": "An analogy works by establishing a structural parallel between two situations. If the same type of reasoning produces a clearly wrong result in one situation, we can conclude the reasoning pattern itself is defective — regardless of the specific content. The key insight: the attack targets the *logical form*, not the *factual claims*."
        },
        {
          "type": "process",
          "title": "The Analogy Method — How It Works",
          "steps": [
            "**Identify the opponent's reasoning pattern:** Extract the abstract logical structure from the opponent's argument.",
            "**Construct a parallel case:** Build a new argument using the exact same logical pattern but applied to a different situation.",
            "**Show the parallel produces an absurd result:** The conclusion in the new case must be obviously false or unacceptable.",
            "**Conclude the original reasoning is flawed:** Since the same logical form produces a bad result, the form itself is unreliable — and so is the original argument that uses it."
          ]
        },
        {
          "type": "callout",
          "title": "The \"By Your Logic\" Signal",
          "variant": "tip",
          "text": "In dialogues, refutation by analogy is often signaled by phrases like:\n• \"By your logic...\"\n• \"That is like saying...\"\n• \"It would be as if...\"\n• \"That makes about as much sense as...\"\n\nWhenever a speaker introduces a completely different scenario in response to another speaker's argument, suspect refutation by analogy."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Analogy vs. Counterexample"
        },
        {
          "type": "paragraph",
          "text": "Students frequently confuse these two methods. Understanding the difference is critical:"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Refutation by Analogy",
            "Counterexample"
          ],
          "rows": [
            [
              "**What it attacks**",
              "The *logical form* of the argument",
              "The *truth* of a general claim"
            ],
            [
              "**How it works**",
              "Applies the same reasoning to a *different domain* and shows it yields an absurd result",
              "Provides a specific *instance within the same domain* that violates the general claim"
            ],
            [
              "**The key move**",
              "Changes the domain, keeps the reasoning pattern",
              "Stays in the same domain, provides a factual case"
            ],
            [
              "**What it proves**",
              "The reasoning pattern is unreliable",
              "The general claim is false"
            ],
            [
              "**Example**",
              "\"Saying we shouldn't cure cancer because everyone dies is like saying we shouldn't feed people because everyone gets hungry again\"",
              "\"Not all birds can fly — penguins are birds but cannot fly\""
            ],
            [
              "**LSAT language**",
              "\"likens X to Y to show the reasoning is flawed\"",
              "\"provides a specific instance that contradicts the generalization\""
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Critical Distinction",
          "variant": "default",
          "text": "**Analogy** = different domain, same reasoning pattern.\n**Counterexample** = same domain, specific factual instance.\n\nIf the second speaker stays within the exact category being discussed and offers a real case, it is a counterexample. If they jump to a completely different topic to show the logic is bad, it is refutation by analogy."
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
          "id": "PT-107-S-3-Q-3",
          "stimulus": "Land developer: By attempting to preserve endangered species that otherwise would become extinct during our lifetime, we are wasting money on species that will disappear over time regardless of our efforts. Paleontologists have established that extinction is the normal fate of species on the geological time scale of millions of years.\n\nEnvironmentalist: To claim that we should let species disappear because all species eventually die out makes about as much sense as arguing that we should not spend money to find a cure for cancer because all humans are inevitably mortal.",
          "question": "The method the environmentalist uses to object to the land developer's argument is to",
          "options": [
            "**(A)** clarify a dilemma that is embedded in the land developer's argument",
            "**(B)** attack the character of the land developer rather than the position the land developer is taking",
            "**(C)** show that more evidence is needed to substantiate the land developer's conclusion",
            "**(D)** show that the land developer's line of reasoning would lead to an unacceptable conclusion if applied to a different situation (Correct) [99%]",
            "**(E)** argue that there are problems that money, however judiciously spent, cannot solve"
          ]
        },
        {
          "type": "h3",
          "text": "Step 1: Deconstruct the Argument"
        },
        {
          "type": "paragraph",
          "text": "The question asks for the **environmentalist's** method. Let's map both arguments:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Speaker",
            "text": "Argument Structure"
          },
          "items": [
            {
              "title": "Land Developer",
              "text": "**Premise:** All species eventually go extinct (paleontological fact).\n**Conclusion:** Therefore, spending money to preserve endangered species is a waste.\n**Underlying Principle:** If a negative outcome is inevitable in the long term, short-term prevention efforts are pointless.",
              "badge": "Target",
              "badgeColor": "slate"
            },
            {
              "title": "Environmentalist",
              "text": "**Strategy:** Takes the developer's underlying principle and applies it to a different domain.\n**Parallel Premise:** All humans are inevitably mortal.\n**Parallel Conclusion:** Therefore, we should not spend money to find a cure for cancer.\n**Purpose:** The parallel conclusion is obviously unacceptable, which proves the underlying principle is flawed.",
              "badge": "Response",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "h3",
          "text": "Step 2: Characterize the Method and Prephrase"
        },
        {
          "type": "paragraph",
          "text": "The environmentalist takes the developer's reasoning pattern — \"if something is inevitable in the long term, we shouldn't fight it in the short term\" — and applies it to cancer research, where the conclusion is clearly absurd."
        },
        {
          "type": "callout",
          "title": "Prephrase",
          "variant": "tip",
          "text": "The environmentalist uses an analogy to a different domain (cancer research) to show the developer's reasoning pattern produces an unacceptable conclusion."
        },
        {
          "type": "h3",
          "text": "Step 3: Evaluate the Answer Choices"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Option",
            "text": "Analysis"
          },
          "items": [
            {
              "title": "(A) Clarify a dilemma that is embedded in the developer's argument",
              "text": "The environmentalist doesn't analyze a dilemma *within* the developer's argument. They introduce a completely different situation (cancer research) to expose the reasoning as flawed.",
              "badge": "Wrong Action",
              "badgeColor": "red"
            },
            {
              "title": "(B) Attack the character of the land developer",
              "text": "This describes an ad hominem attack. The environmentalist attacks the developer's *reasoning pattern*, not their personal character or motives.",
              "badge": "Wrong Action",
              "badgeColor": "red"
            },
            {
              "title": "(C) Show that more evidence is needed to substantiate the conclusion",
              "text": "The environmentalist doesn't question the amount of evidence. They accept the factual claim (species go extinct) and attack the logical leap from that fact to the conclusion.",
              "badge": "Wrong Action",
              "badgeColor": "red"
            },
            {
              "title": "(D) Show that the developer's line of reasoning would lead to an unacceptable conclusion if applied to a different situation",
              "text": "This is a perfect abstract description of refutation by analogy. The \"line of reasoning\" is the underlying principle, the \"different situation\" is cancer research, and the \"unacceptable conclusion\" is that we shouldn't cure cancer.",
              "badge": "Correct",
              "badgeColor": "green"
            },
            {
              "title": "(E) Argue that there are problems that money cannot solve",
              "text": "This is the opposite of the environmentalist's point. The analogy implies that cancer research *is* worth the money, just as species preservation is worth the money.",
              "badge": "Wrong Direction",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Wrong Answer Analysis — Trap Types"
        },
        {
          "type": "paragraph",
          "text": "Understanding *why* each wrong answer is wrong helps you recognize trap patterns across future questions:"
        },
        {
          "type": "table",
          "headers": [
            "Option",
            "Trap Type",
            "What Went Wrong"
          ],
          "rows": [
            [
              "(A)",
              "**Wrong Action**",
              "Describes clarifying a dilemma — the environmentalist never clarifies anything within the developer's argument"
            ],
            [
              "(B)",
              "**Wrong Action**",
              "Describes an ad hominem attack — no personal attack occurs"
            ],
            [
              "(C)",
              "**Wrong Action**",
              "Describes questioning evidence sufficiency — the evidence (extinction facts) is not disputed"
            ],
            [
              "(E)",
              "**Wrong Direction**",
              "Describes a conclusion opposite to the environmentalist's point — the analogy argues money *should* be spent"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Additional Practice Patterns"
        },
        {
          "type": "paragraph",
          "text": "Here are other common setups for refutation by analogy that you should learn to recognize:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Pattern",
            "text": "Example"
          },
          "items": [
            {
              "title": "The Absurd Parallel",
              "text": "**Setup:** Speaker 1 argues that because X has some property, we should do Y.\n**Response:** Speaker 2: \"That is like saying that because [parallel property], we should [absurd action].\"\n**Example:** \"That's like saying that because all food eventually spoils, we should stop buying groceries.\"",
              "badge": "Most Common",
              "badgeColor": "indigo"
            },
            {
              "title": "The Double Standard",
              "text": "**Setup:** Speaker 1 applies a rule to one case but not another similar one.\n**Response:** Speaker 2 points out the parallel case where the same rule would yield an unacceptable result.\n**Example:** \"You say students shouldn't question teachers. By that logic, citizens shouldn't question elected officials.\"",
              "badge": "Common",
              "badgeColor": "blue"
            },
            {
              "title": "The Reverse Application",
              "text": "**Setup:** Speaker 1 makes a causal or conditional argument.\n**Response:** Speaker 2 reverses the application to show the logic fails.\n**Example:** \"If practice alone made people excellent, then everyone who practices the piano for 10 years would be a concert pianist.\"",
              "badge": "Less Common",
              "badgeColor": "slate"
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
          "text": "• **Refutation by analogy attacks the *logical form* of an argument**, not its facts. The opponent's reasoning pattern is applied to a new domain where it produces an absurd result.\n• **The critical signal is a domain shift.** When a speaker responds to an argument by jumping to a completely different topic, suspect refutation by analogy.\n• **Distinguish from counterexample:** Analogy = different domain, same reasoning. Counterexample = same domain, specific case.\n• **Look for signal phrases:** \"By your logic...\", \"That is like saying...\", \"It would be as if...\"\n• **The correct answer will describe the method abstractly:** \"shows the reasoning would lead to an unacceptable conclusion if applied to a different situation.\""
        }
      ],
    },
  },
};
