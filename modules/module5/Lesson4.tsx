import { Lesson } from '../../types';

export const Lesson4: Lesson = {
  id: '5-4',
  title: 'Lesson 1: Correlation Does Not Equal Causation (Flaw)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 1: Correlation Does Not Equal Causation (Flaw)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Causal Flaw"
    },
    {
      "type": "paragraph",
      "text": "This lesson focuses on the single most common and predictable error in reasoning on the LSAT: confusing correlation with causation. Many arguments present evidence that two things happen together (a correlation) and then leap to the conclusion that one of those things must be causing the other."
    },
    {
      "type": "paragraph",
      "text": "**Correlation:** A statistical link or association. Two things tend to happen at the same time, in the same people, or in the same places."
    },
    {
      "type": "paragraph",
      "text": "**Causation:** A direct cause-and-effect relationship. One thing actively makes another thing happen."
    },
    {
      "type": "paragraph",
      "text": "The fundamental flaw is assuming that a correlation is sufficient proof of causation. To weaken such an argument, you must consider **alternative explanations** for the observed correlation. The three most common alternatives are:"
    },
    {
      "type": "list",
      "items": [
        "**Reversed Causality:** Maybe Y causes X, instead of X causing Y.",
        "**A Common Cause:** Maybe a third factor, Z, causes both X and Y.",
        "**Coincidence:** The correlation might be random and meaningless."
      ]
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Worked Example"
    },
    {
      "type": "blockquote",
      "text": "**Stimulus** > > Videocassette recorders (VCRs) enable people to watch movies at home on videotape. People who own VCRs go to movie theaters more often than do people who do not own VCRs. Contrary to popular belief, therefore, owning a VCR actually stimulates people to go to movie theaters more often than they otherwise would. > > **Question** > > The argument is most vulnerable to criticism on the grounds that it > > *   (A) concludes that a claim must be false because of the mere absence of evidence in its favor > *   (B) cites, in support of the conclusion, evidence that is inconsistent with other information that is provided > *   (C) fails to establish that the phenomena interpreted as cause and effect are not both direct effects of some other factor > *   (D) takes a condition that by itself guarantees the occurrence of a certain phenomenon to be a condition that therefore must be met for that phenomenon to occur > *   (E) bases a broad claim about the behavior of people in general on a comparison between two groups of people that together include only a small proportion of people overall"
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** Owning a VCR *causes* people to go to movie theaters more often. (Look for the causal keyword \"stimulates\")."
    },
    {
      "type": "paragraph",
      "text": "**Premise:** There is a correlation between two things: people who own VCRs go to movie theaters more often than people who don't."
    },
    {
      "type": "h4",
      "text": "Step 2: Find the Logical Gap"
    },
    {
      "type": "paragraph",
      "text": "The argument observes a correlation and concludes it must be a specific causal relationship (VCR ownership → more theater visits). The gap is the failure to consider other possible explanations for this correlation."
    },
    {
      "type": "paragraph",
      "text": "**Ask \"What if?\":** What if the cause is reversed? Does going to the movies make you buy a VCR? (Possible, but less likely)."
    },
    {
      "type": "paragraph",
      "text": "**Ask \"What else?\":** What if a third factor causes both? What kind of person owns a VCR *and* goes to the movies a lot? A movie lover! Someone who is very interested in movies would be more likely to own a VCR for home viewing and also more likely to go to the theater to see new releases. This is a very plausible alternative explanation."
    },
    {
      "type": "h4",
      "text": "Step 3: Articulate the Flaw and Prephrase"
    },
    {
      "type": "paragraph",
      "text": "The argument assumes a causal link just because two things are correlated. It fails to consider a third factor—loving movies—that could be the real cause of both phenomena."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The argument overlooks the possibility that a third factor (like being a movie enthusiast) causes both VCR ownership and frequent movie-going."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) concludes that a claim must be false because of the mere absence of evidence in its favor**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This describes an \"Argument from Ignorance,\" a different flaw. The argument makes a positive claim based on the evidence it has, not a negative claim based on a lack of evidence."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Accurate Description of the Wrong Flaw)"
    },
    {
      "type": "paragraph",
      "text": "**(B) cites, in support of the conclusion, evidence that is inconsistent with other information that is provided**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This describes a contradiction. The evidence (the correlation) is perfectly consistent with the conclusion; the problem is that it isn't strong enough to prove it."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) fails to establish that the phenomena interpreted as cause and effect are not both direct effects of some other factor**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect, abstract match for our prephrase. The \"phenomena interpreted as cause and effect\" are VCR ownership and movie-going. The \"other factor\" is a shared interest in movies. The argument fails to rule out this alternative."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) takes a condition that by itself guarantees the occurrence of a certain phenomenon to be a condition that therefore must be met for that phenomenon to occur**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This describes a flaw in conditional logic (confusing a sufficient condition with a necessary one). The argument is about real-world cause and effect, not formal conditional rules."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Accurate Description of the Wrong Flaw)"
    },
    {
      "type": "paragraph",
      "text": "**(E) bases a broad claim about the behavior of people in general on a comparison between two groups of people that together include only a small proportion of people overall**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This describes a sampling flaw. While the sample might be small, the core logical error—the leap from correlation to causation—is the more fundamental problem. This flaw would exist even if the entire population were surveyed."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (The Secondary or Weaker Flaw)"
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "paragraph",
      "text": "**Be Skeptical of Causation:** Whenever you see a conclusion that claims one thing *causes*, *leads to*, *stimulates*, or *results in* another, be on high alert for a causal flaw."
    },
    {
      "type": "paragraph",
      "text": "**The Holy Trinity of Causal Flaws:** Always check for the three main alternative explanations for a correlation:"
    },
    {
      "type": "list",
      "items": [
        "**Reversed Causality:** The effect is actually the cause.",
        "**Common Cause:** A third factor is causing both.",
        "**Coincidence:** The link is random."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Match the Language:** The correct answer will often use formal language like \"correlation,\" \"cause,\" \"effect,\" or \"factor\" to describe the error."
    }
  ],
};
