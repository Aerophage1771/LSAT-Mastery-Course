import { Lesson } from '../../types';

export const Lesson4: Lesson = {
  id: '14-4',
  title: 'Lesson 1: The Behavioral Principle',
  content: [
    {
      "type": "h2",
      "text": "Lesson 1: The Behavioral Principle"
    },
    {
      "type": "h3",
      "text": "Concept Focus: From Experiment to Rule"
    },
    {
      "type": "paragraph",
      "text": "This lesson focuses on the most common pattern in Principle-Generalization questions: The Behavioral Principle. The stimulus will present a specific case study—often an experiment, an anecdote, or a social observation—that reveals something about how people think, act, or learn. Your task is to extract the general rule of human nature that this specific case illustrates. You must move from a single data point (the stimulus) to the universal law it represents (the correct answer)."
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
      "text": "**Stimulus** > > In an experiment, tennis players who were told that their performance would be used to assess only the quality of their rackets performed much better than an equally skilled group of tennis players who were told that their tennis-playing talent would be measured. > > **Question** > > The situation described above most closely conforms to which one of the following propositions? > > *   (A) People do less well on a task if they have been told that they will be closely watched while doing it. > *   (B) People execute a task more proficiently when they do not believe their abilities are being judged. > *   (C) People perform a task more proficiently when they have confidence in their abilities. > *   (D) People who assess their talents accurately generally perform near their actual level of proficiency. > *   (E) People who think that a superior performance will please those who are testing them generally try harder."
    },
    {
      "type": "h4",
      "text": "Step 1: Analyze the Stimulus and Identify the Central Dynamic"
    },
    {
      "type": "paragraph",
      "text": "The stimulus describes an experiment with two groups of equally skilled tennis players. Let's isolate the key variable and the result:"
    },
    {
      "type": "list",
      "items": [
        "**Group 1 (Low Pressure):** Told their performance would assess the **racket's quality**. The focus is on an external object.",
        "**Group 2 (High Pressure):** Told their performance would measure their **personal talent**. The focus is on their internal ability.",
        "**The Result:** The low-pressure group \"performed much better.\""
      ]
    },
    {
      "type": "paragraph",
      "text": "The **central dynamic** is the causal link between the players' *belief about what was being evaluated* and their subsequent *performance*. The only difference between the groups was this belief. When the pressure of being judged on personal skill was removed, performance improved."
    },
    {
      "type": "h4",
      "text": "Step 2: Prephrase the Principle—Find the \"Moral of the Story\""
    },
    {
      "type": "paragraph",
      "text": "Let's abstract this dynamic into a general rule. The story is about how the fear of being judged on your talent makes you perform worse."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** People do a task better when they aren't worried about their personal ability being judged."
    },
    {
      "type": "h4",
      "text": "Step 3: Evaluate Answer Choices Against Your Prephrase"
    },
    {
      "type": "paragraph",
      "text": "Now, let's scan the choices for a match to our prephrase."
    },
    {
      "type": "paragraph",
      "text": "**(B) People execute a task more proficiently when they do not believe their abilities are being judged.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a nearly perfect match. \"Execute a task more proficiently\" aligns with \"performed much better,\" and \"when they do not believe their abilities are being judged\" is a direct generalization of the low-pressure group's situation."
    },
    {
      "type": "h4",
      "text": "Step 4: Systematically Eliminate Traps"
    },
    {
      "type": "paragraph",
      "text": "Let's confirm by checking the other options."
    },
    {
      "type": "paragraph",
      "text": "**(A) People do less well on a task if they have been told that they will be closely watched while doing it.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus doesn't mention the level of observation (\"closely watched\"). Both groups were watched. The variable was the *purpose* of the observation, not the intensity."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(B) People execute a task more proficiently when they do not believe their abilities are being judged.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This aligns perfectly with our analysis and prephrase. The group that didn't believe their abilities were being judged (Group 1) performed better."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) People perform a task more proficiently when they have confidence in their abilities.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus provides no information about the players' internal \"confidence levels.\" While plausible, it's an assumption not supported by the text."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope / Unsupported Assumption)"
    },
    {
      "type": "paragraph",
      "text": "**(D) People who assess their talents accurately generally perform near their actual level of proficiency.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The experiment is not about self-assessment. We are told the players are \"equally skilled,\" but we know nothing about how they perceive their own skills."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(E) People who think that a superior performance will please those who are testing them generally try harder.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus discusses *performance* (\"performed much better\"), not *effort* (\"try harder\"). It also doesn't mention the players' desire to \"please the testers.\" These are unsupported concepts."
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
        "**Isolate the Variable:** In stimuli describing an experiment or comparison, identify the single key difference between the groups. This difference is the cause of the observed outcome.",
        "**Generalize the Cause and Effect:** The correct principle will abstract the specific cause (believing talent isn't being judged) and the specific effect (better performance) into a general rule.",
        "**Stick to the Text:** Be ruthless about eliminating choices that introduce concepts, however plausible, that are not explicitly mentioned in the stimulus (e.g., \"confidence,\" \"effort,\" \"being watched\"). The correct answer can always be justified using only the information provided."
      ]
    }
  ],
};
