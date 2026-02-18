import { Lesson } from '../../types';

export const Lesson8_Drill_IndependentRoles: Lesson = {
  id: "1-8",
  title: "Drill: Independent Roles (PT-108-S-2-Q-22)",
  content: [
    { type: 'h3', text: "Practice Drill: Identifying an Argument Part (PT-108-S-2-Q-22)" },
    { type: 'paragraph', text: "This drill tackles a question with an **Unconventional Logical Role**. In harder questions, not every statement fits neatly into a \"Premise supports Conclusion\" box. Some statements act as independent observations or clarifications." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    { type: 'h4', text: "The Stimulus" },
    { type: 'blockquote', text: "One can be at home and be in the backyard, that is, not in one’s house at all. One can also be in one’s house but not at home, if one owns the house but rents it out to others, for example. So one’s being at home is not required for one’s being in one’s own house." },
    { type: 'h4', text: "The Question" },
    { type: 'paragraph', text: "Which one of the following most accurately describes the relationship between the argument’s conclusion and its claim that *one can be at home without being in one’s house*?" },
    
    { type: 'options', items: [
      "**(A)** The claim is required to establish the conclusion.",
      "**(B)** The claim represents the point the conclusion is intended to refute.",
      "**(C)** The claim is compatible with the truth or falsity of the conclusion.",
      "**(D)** The claim points out an ambiguity in the phrase “at home.”",
      "**(E)** The claim inadvertently contradicts the conclusion."
    ]},
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Find the Target" },
    { type: 'paragraph', text: "The target is the first sentence: *\"One can be at home and be in the backyard, that is, not in one’s house at all.\"*" },
    
    { type: 'h3', text: "2. Break Down the Content Line-by-Line" },
    
    { type: 'breakdown', labels: { title: 'Quote', text: 'Meaning' }, items: [
      {
        title: "\"One can be at home and be in the backyard, that is, not in one’s house at all.\" (Target)",
        text: "You can have the condition \"At Home\" without the condition \"In the House\". (At Home ≠ In House)."
      },
      {
        title: "\"One can also be in one’s house but not at home, if one owns the house but rents it out to others...\"",
        text: "You can have the condition \"In the House\" without the condition \"At Home\". (In House ≠ At Home)."
      },
      {
        title: "\"So one’s being at home is not required for one’s being in one’s own house.\"",
        text: "This is the Main Conclusion. It asserts that \"At Home\" is not a necessary condition for \"In the House\"."
      }
    ]},

    { type: 'h3', text: "3. Map the Argument's Logical Structure" },
    { type: 'paragraph', text: "This argument uses two examples to show that two concepts (\"At Home\" and \"In House\") are separate. However, we must look strictly at the logic of the Conclusion." },
    { type: 'list', items: [
      "**The Conclusion:** Proves that \"In House\" does **not** require \"At Home\".",
      "**The Evidence for the Conclusion:** To prove that *X* does not require *Y*, you need an example where you have *X* but do NOT have *Y*. The **second sentence** provides this: You are in the house (X), but not at home (No Y). This effectively proves the conclusion on its own.",
      "**The Target Statement (First Sentence):** It proves the *reverse*. It shows you can be At Home (Y) without being In House (No X). While this helps illustrate the general separation of the concepts, it is **logically irrelevant** to the specific conclusion drawn."
    ]},
    
    { type: 'h3', text: "4. Pinpoint Role & Predict" },
    { type: 'paragraph', text: "The target statement is a claim that is conceptually related but logically independent from the conclusion. The conclusion could be true or false regardless of whether the target statement is true." },
    { type: 'callout', title: "Prediction", variant: "tip", text: "Therefore, our prediction is: **The target statement is independent of the conclusion; it does not prove it, nor is it required for it.**" },
    
    { type: 'h3', text: "5. Evaluate Answer Choices" },
    
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      {
        title: "(A) The claim is required to establish the conclusion.",
        text: "Incorrect. This is the most common trap. Students assume that because it is a \"premise\" in the text, it must be required. However, the *second* sentence is the one that proves the conclusion. The fact that you can be in the backyard (Target) is not necessary to prove that a landlord can be in a rented house (Conclusion).",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) The claim represents the point the conclusion is intended to refute.",
        text: "Incorrect. The author accepts both statements as true. There is no refutation here.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(C) The claim is compatible with the truth or falsity of the conclusion.",
        text: "Correct. This describes **Logical Independence**. If the Conclusion is TRUE, the Target can be true. If the Conclusion were FALSE, the Target could *still* be true. Because the truth of one does not force the truth or falsity of the other, they are merely compatible.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(D) The claim points out an ambiguity in the phrase “at home.”",
        text: "Incorrect. The author is distinguishing concepts, not claiming the term is ambiguous or confusing. They are offering a precise definition/example.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) The claim inadvertently contradicts the conclusion.",
        text: "Incorrect. The two claims do not contradict. They simply describe two different overlapping circles in a Venn diagram.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question illustrates the difficulty of **Unconventional Logical Roles**.\n\nKey takeaways:\n* **Not All Premises Support the Conclusion:** In looser arguments, an author might list several facts to paint a picture, but only *one* of those facts logically supports the specific conclusion drawn.\n* **Test for \"Required\":** If an answer choice says a claim is \"required,\" ask: \"If I deleted this sentence, would the logic fall apart?\" Here, if you deleted the backyard example, the landlord example would still fully prove the conclusion. Therefore, the target is not required.\n* **Don't Fear \"Compatible\":** If two statements are about different logical relationships (e.g., one is A -> B, the other is B -> A), they are logically independent. \"Compatible\" is the technical way to describe that independence." }
  ]
};
