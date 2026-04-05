import { Lesson } from '../../types';

export const Lesson5_Application_FinalConclusion: Lesson = {
  id: "2-5",
  title: "Application - The Final Conclusion",
  content: [
    { type: 'h3', text: "Lesson 5: Application - The Final Conclusion" },
    { type: 'paragraph', text: "So far, we have analyzed arguments where the conclusion appears at the beginning (the Concise Rebuttal) or in the middle (the Middle Pivot). In this lesson, we will focus on the third and most classic argumentative structure: **The Final Conclusion**." },
    { type: 'paragraph', text: "In this pattern, the author builds their case piece by piece, presenting a series of premises, facts, or observations first. The argument's momentum carries the reader toward the main point, which is stated in the final sentence as the logical culmination of all the evidence." },
    { type: 'hr' },
    { type: 'h3', text: "Worked Example" },
    { type: 'paragraph', text: "Before reading the analysis, attempt the following question. Track how the information in each sentence is used to build toward the final statement." },
    { type: 'blockquote', text: "**Stimulus:**\n\nFor years scientists have been scanning the skies in the hope of finding life on other planets. But in spite of the ever-increasing sophistication of the equipment they employ, some of it costing hundreds of millions of dollars, not the first shred of evidence of such life has been forthcoming. And there is no reason to think that these scientists will be any more successful in the future, no matter how much money is invested in the search. The dream of finding extraterrestrial life is destined to remain a dream, as science’s experience up to this point should indicate." },
    { type: 'paragraph', text: "**Question:**\n\nWhich one of the following most accurately states the main point of the argument?" },
    { type: 'options', items: [
      "(A) There is no reason to believe that life exists on other planets.",
      "(B) The equipment that scientists employ is not as sophisticated as it should be.",
      "(C) Scientists searching for extraterrestrial life will not find it.",
      "(D) Only if scientists had already found evidence of life on other planets would continued search be justified.",
      "(E) We should not spend money on sophisticated equipment to aid in the search for extraterrestrial life."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Step-by-Step Deconstruction" },
    { type: 'h4', text: "Step 1: Read the Question Stem" },
    { type: 'paragraph', text: "The stem asks for the \"main point,\" which is our cue to find the argument's central conclusion." },
    { type: 'h4', text: "Step 2: Deconstruct the Argument & Look for Signposts" },
    { type: 'paragraph', text: "Let's trace the argument's flow from beginning to end." },
    { type: 'list', items: [
      "**Sentence 1:** \"For years scientists have been scanning the skies in the hope of finding life on other planets.\" This sets the stage. It is **Background Information** about a scientific endeavor.",
      "**Sentence 2:** \"But in spite of the ever-increasing sophistication... not the first shred of evidence of such life has been forthcoming.\" This is the first piece of evidence. It's a statement about the past: despite our best efforts, we have found nothing. This is a **Premise**.",
      "**Sentence 3:** \"And there is no reason to think that these scientists will be any more successful in the future...\" This is the second piece of evidence. It makes a prediction about the future based on the past lack of success. This is also a **Premise**.",
      "**Sentence 4:** \"The dream of finding extraterrestrial life is destined to remain a dream, as science’s experience up to this point should indicate.\" This is the final, overarching statement that synthesizes the previous premises. The phrase \"**as... should indicate**\" functions like a conclusion indicator. This is our candidate for the **Main Conclusion**."
    ]},
    { type: 'h4', text: "Step 3: Isolate a Candidate and Apply the \"Why Test\"" },
    { type: 'paragraph', text: "Our candidate conclusion is the final sentence: \"The dream of finding extraterrestrial life is destined to remain a dream.\"" },
    { type: 'list', items: [
      "**Ask \"Why?\":** *Why* is the dream destined to remain a dream?",
      "**Answer from Stimulus:** **Because** we have found no evidence so far, despite using sophisticated equipment, and there is no reason to think future efforts will be any more successful."
    ]},
    { type: 'paragraph', text: "The premises provide a direct and logical answer to the \"Why?\" question, confirming that the final sentence is the main conclusion." },
    { type: 'h4', text: "Step 4: Pre-phrase the Conclusion" },
    { type: 'paragraph', text: "Our summary of the author’s point: \"The search for alien life is hopeless; we're never going to find it.\"" },
    { type: 'h4', text: "Step 5: Evaluate the Answer Choices by Eliminating Traps" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: "(A) There is no reason to believe that life exists on other planets.",
        text: "Trap Type: Distortion. The author argues that we will not *find* life. This is different from arguing that life does not *exist*.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) The equipment that scientists employ is not as sophisticated as it should be.",
        text: "Trap Type: Contradiction. The stimulus explicitly states that the equipment is \"ever-increasingly sophisticated.\"",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(C) Scientists searching for extraterrestrial life will not find it.",
        text: "Analysis: This is a perfect paraphrase of our pre-phrased conclusion. The statement \"the dream is destined to remain a dream\" means the goal will not be achieved. **This is the correct answer.**",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(D) Only if scientists had already found evidence... would continued search be justified.",
        text: "Trap Type: Out of Scope. The argument makes no claims about what would or would not *justify* the search.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) We should not spend money on sophisticated equipment...",
        text: "Trap Type: Out of Scope. This is a *recommendation* about funding. The author makes a prediction, not a prescription.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},
    { type: 'hr' },
    { type: 'callout', title: "Summary of the Final Conclusion Structure", variant: "summary", text: "In this classic form, the author presents a logical chain of evidence that leads the reader to an inevitable final point. When you see an argument that lays out facts and observations without an immediate conclusion, your attention should be focused on the final sentence." },
    { type: 'paragraph', text: "**Next Up:** In Lesson 6, you will learn to identify the key characteristics of the very hardest Main Conclusion questions." }
  ]
};
