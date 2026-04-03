import { Lesson } from '../../types';

export const Lesson_AdvancedConcepts: Lesson = {
  id: '6-adv',
  title: 'Advanced Concepts: Difficult Parallel Flaw Questions',
  content: [
    {
      "type": "h2",
      "text": "Advanced Concepts: Difficult Parallel Flaw Questions  Just like standard Parallel Reasoning questions, the \"Difficult\" version of Parallel Flaw raises the bar not by changing the fundamental task, but by increasing the abstraction and complexity of the argument's components. These questions punish superficial matching and reward deep structural analysis."
    },
    {
      "type": "paragraph",
      "text": "Let's break down the three primary factors that make these questions significantly harder."
    },
    {
      "type": "h3",
      "text": "1. The Stimulus: Increased Logical Density On easier questions, the flaw is often a single, glaring error like a Mistaken Reversal. On harder questions, the stimulus becomes more intricate. *"
    },
    {
      "type": "paragraph",
      "text": "**Multiple Flaws:** A difficult stimulus might contain two distinct logical errors (e.g., a Mistaken Reversal combined with an Ad Hominem attack). Your job is to find the answer choice that replicates *both* flaws, or at least the primary structural defect that drives the argument. *"
    },
    {
      "type": "paragraph",
      "text": "**Subtle Flaws:** The error might be less obvious, such as a subtle shift in the meaning of a key term (Equivocation) or a flaw involving complex probability (e.g., confusing the probability of a sequence with the probability of a single event). *"
    },
    {
      "type": "paragraph",
      "text": "**Formal Logic in Disguise:** The argument may not look like a formal logic problem at first glance, but underlying the conversational language is a strict conditional or quantifier-based structure. You must be able to translate \"Unless we act now...\" into `Act Now → Success` to see the flaw clearly."
    },
    {
      "type": "h3",
      "text": "2. The Answer Choices: The Abstraction Gauntlet As with Method of Reasoning questions, the answer choices in difficult Parallel Flaw questions often use abstract, formal language to describe the argument's structure."
    },
    {
      "type": "table",
      "headers": [
        "Instead of...",
        "A Hard Answer Choice Might Look Like..."
      ],
      "rows": [
        [
          "\"Most A are B, most B are C, so most A are C.\"",
          "\"The argument attempts to establish a relationship between two groups based on their mutual relationship to a third group using non-transitive quantifiers.\""
        ],
        [
          "\"Just because X happened after Y, it doesn't mean Y caused X.\"",
          "\"The argument infers a causal relationship solely on the basis of a temporal sequence, ignoring potential common causes.\""
        ]
      ]
    },
    {
      "type": "h3",
      "text": "3. The Trap Answers: Sophisticated Counterfeits The trap answers on Level 5 questions are designed to exploit common student errors. *"
    },
    {
      "type": "paragraph",
      "text": "**The Valid Argument Trap:** This is the most dangerous trap on high-level questions. The answer choice will present an argument that deals with the same topic or uses similar sentence structures but is **logically valid**. If you haven't precisely diagnosed the flaw in the stimulus, this valid argument will look like the \"perfect match\" because it makes sense. *"
    },
    {
      "type": "paragraph",
      "text": "**The \"Different Flaw\" Trap:** The answer choice is definitely flawed, but it commits a *different* error. For example, if the stimulus commits a Mistaken Reversal (`If A→B, B, ∴ A`), the trap might commit a Mistaken Negation (`If A→B, Not A, ∴ Not B`). To the untrained eye, both look like \"bad conditional reasoning,\" but they are distinct logical structures. *"
    },
    {
      "type": "paragraph",
      "text": "**The \"Same Content, Different Structure\" Trap:** The answer choice might mirror the subject matter (e.g., both are about politics or science) but use a completely different logical structure (e.g., causal reasoning instead of conditional reasoning)."
    },
    {
      "type": "paragraph",
      "text": "**The Key to Success:** Precision. You cannot rely on a \"vague vibe\" of the argument. You must be able to name the flaw (e.g., \"Mistaken Reversal\") and verify that the answer choice commits that exact same error."
    }
  ],
};
