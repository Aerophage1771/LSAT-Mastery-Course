import { Lesson } from '../../types';

export const Lesson5: Lesson = {
  id: '16-5',
  title: 'Lesson 2: The Necessary Reconciliation',
  content: [
    {
      "type": "h2",
      "text": "Lesson 2: The Necessary Reconciliation"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Resolving a Paradox"
    },
    {
      "type": "paragraph",
      "text": "This lesson focuses on a common pattern in \"Most Strongly Supported\" questions: The Necessary Reconciliation. The stimulus will present a set of facts that seem to conflict, contradict each other, or lead to a surprising outcome. It creates a logical puzzle."
    },
    {
      "type": "paragraph",
      "text": "Your task is to find the one answer choice that provides the missing piece of information that allows all the facts in the stimulus to be true simultaneously. The correct answer isn't just a possible explanation; it's the inference that *must* be true to resolve the apparent paradox."
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
      "text": "**Stimulus** > > Beginning in the 1950s, popular music was revolutionized by the electrification of musical instruments, which has enabled musicians to play with increased volume. Because individual musicians can play with increased volume, the average number of musicians per band has decreased. Nevertheless, electrification has increased rather than decreased the overall number of musicians who play popular music professionally. > > **Question** > > Which one of the following is most strongly supported by the statements above, if those statements are true? > > *   (A) The number of amateur musicians who play popular music has decreased. > *   (B) Most professional musicians are able to play both electric and nonelectric instruments. > *   (C) The number of professional musicians in some bands has increased. > *   (D) The total number of professional bands has increased as a result of electrification. > *   (E) Many professional musicians play in more than one band."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Stimulus"
    },
    {
      "type": "paragraph",
      "text": "Let's identify the key facts and the central puzzle:"
    },
    {
      "type": "list",
      "items": [
        "**Fact 1:** The average number of musicians per band has **decreased**. (Bands got smaller).",
        "**Fact 2:** The total number of professional musicians has **increased**. (More musicians overall).",
        "**The Puzzle:** How can there be *more* total musicians if the bands they are in are getting *smaller*?"
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Synthesize and Prephrase"
    },
    {
      "type": "paragraph",
      "text": "This is a simple mathematical relationship. The total number of musicians is a product of two factors: the number of bands and the average number of musicians in each band. `(Total Musicians) = (Number of Bands) × (Average Musicians per Band)`"
    },
    {
      "type": "paragraph",
      "text": "The stimulus tells us that the `Total Musicians` went up while the `Average Musicians per Band` went down. For this equation to hold true, the `Number of Bands` must have increased — and not just by a little, but by enough to overcome the decrease in band size."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The number of bands must have gone up."
    },
    {
      "type": "h4",
      "text": "Step 3 & 4: Evaluate Answer Choices and Eliminate Traps"
    },
    {
      "type": "paragraph",
      "text": "**(A) The number of amateur musicians who play popular music has decreased.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus talks exclusively about **professional** musicians. Any information about amateur musicians is new and unsupported."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(B) Most professional musicians are able to play both electric and nonelectric instruments.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The passage mentions the electrification of instruments but says nothing about the specific skills of the musicians. This is new information."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(C) The number of professional musicians in some bands has increased.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This directly contradicts the stimulus, which states that the **average** number of musicians per band has **decreased**."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Contradiction)"
    },
    {
      "type": "paragraph",
      "text": "**(D) The total number of professional bands has increased as a result of electrification.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our prephrase. It is the necessary reconciliation that allows both facts in the stimulus to be true. If there are more musicians overall but fewer in each band, there must be more bands."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) Many professional musicians play in more than one band.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus provides no information about how many bands individual musicians play in. This is another out-of-scope detail."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "list",
      "items": [
        "**Spot the Paradox:** When you read a stimulus and think, \"Wait, how can both of those things be true?\" you've likely found a Reconciliation pattern.",
        "**Look for the Missing Variable:** The key to resolving the puzzle is often to identify the unstated factor that connects the conflicting facts. In this case, the missing variable was the number of bands.",
        "**Trust the Math:** Some Reconciliation questions are disguised math problems. If you can express the relationship as a simple equation, the inference will become clear."
      ]
    }
  ],
};
