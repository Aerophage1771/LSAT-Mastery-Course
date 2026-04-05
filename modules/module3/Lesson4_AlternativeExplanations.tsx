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
  ]
};
