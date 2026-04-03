import { Lesson } from '../../types';

export const Lesson8_Drill_IndependentRoles: Lesson = {
  id: "1-8",
  title: "Drill: Independent Roles (PT-108-S-2-Q-22)",
  content: [
    { type: 'h3', text: "Practice Drill: Identifying an Argument Part (PT-108-S-2-Q-22)" },
    { type: 'paragraph', text: "This drill tackles a question with an **Unconventional Logical Role**. In harder questions, not every statement fits neatly into a \"Premise supports Conclusion\" box. Some statements act as independent observations or clarifications." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-108-S-2-Q-22',
      stimulus: "One can be at home and be in the backyard, that is, not in one’s house at all. One can also be in one’s house but not at home, if one owns the house but rents it out to others, for example. So one’s being at home is not required for one’s being in one’s own house.",
      question: "Which one of the following most accurately describes the relationship between the argument’s conclusion and its claim that *one can be at home without being in one’s house*?",
      options: [
      "**(A)** The claim is required to establish the conclusion.",
      "**(B)** The claim represents the point the conclusion is intended to refute.",
      "**(C)** The claim is compatible with the truth or falsity of the conclusion.",
      "**(D)** The claim points out an ambiguity in the phrase “at home.”",
      "**(E)** The claim inadvertently contradicts the conclusion."
    ]
    },
    
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
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Advanced Lesson 1: Concessions"
        },
        {
          "type": "h3",
          "text": "Concept Focus: The Concession"
        },
        {
          "type": "paragraph",
          "text": "A **Concession** is a statement that acknowledges a fact or point that seems to contradict or run counter to the author's main argument. The author grants this point as true before pivoting to show why it doesn't actually weaken their overall conclusion. It's a strategic move to show the author is being reasonable and to preemptively neutralize a potential objection."
        },
        {
          "type": "paragraph",
          "text": "Concessions are one of the trickiest roles to identify because the conceded point genuinely seems to support the *opposite* of the author's conclusion. Students often mistake a concession for an opposing viewpoint or even for a premise supporting the conclusion. Understanding the structure is essential."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Concession Structure"
        },
        {
          "type": "paragraph",
          "text": "Concessions follow a predictable four-step pattern. The author acknowledges a challenge, then explains why it doesn't change the bottom line:"
        },
        {
          "type": "process",
          "title": "Concession Pattern",
          "steps": [
            "**Concession Indicator:** The author signals they are about to acknowledge something unfavorable — *\"Although,\" \"While it is true that,\" \"Granted,\" \"Despite,\" \"Admittedly\"*",
            "**Conceded Point:** The specific fact or observation the author accepts as true, even though it appears to weaken their position.",
            "**Pivot:** The author shifts from acknowledgment to argument — *\"but,\" \"yet,\" \"however,\" \"nevertheless,\" \"this does not mean that\"*",
            "**Author's Response:** The author explains why the conceded point doesn't undermine their conclusion, often providing additional evidence or reframing the issue."
          ]
        },
        {
          "type": "paragraph",
          "text": "The conceded point always sits *between* the concession indicator and the pivot. The author's actual argument resumes *after* the pivot."
        },
        {
          "type": "h3",
          "text": "Concession Indicator Words vs. Pivot Words"
        },
        {
          "type": "paragraph",
          "text": "Recognizing concessions requires two sets of signal words working in tandem — the concession indicator introduces the point being granted, and the pivot signals the author's return to their own argument:"
        },
        {
          "type": "table",
          "headers": [
            "Concession Indicators (Introduce the granted point)",
            "Pivot Words (Return to the author's argument)"
          ],
          "rows": [
            [
              "Although / Though",
              "But"
            ],
            [
              "While it is true that",
              "However"
            ],
            [
              "Granted",
              "Yet"
            ],
            [
              "Despite / In spite of",
              "Nevertheless / Nonetheless"
            ],
            [
              "Admittedly",
              "This does not mean that"
            ],
            [
              "Even though",
              "Still"
            ],
            [
              "It may be the case that",
              "The fact remains that"
            ],
            [
              "To be sure",
              "Even so"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Sandwich Pattern",
          "variant": "tip",
          "text": "A concession is always \"sandwiched\" between its indicator and the pivot. If you see *\"Although X, Y\"* — then X is the concession and Y contains the author's actual position. The indicator tells you a concession is starting; the pivot tells you it's ending."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Concession vs. Opposing Viewpoint"
        },
        {
          "type": "paragraph",
          "text": "Students often confuse these two roles because both involve points the author disagrees with. But they differ in critical ways:"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Concession",
            "Opposing Viewpoint"
          ],
          "rows": [
            [
              "Does the author accept it as true?",
              "Yes — the author grants it",
              "No — the author argues it is false"
            ],
            [
              "Does the author argue against it?",
              "No — the author explains why it's irrelevant",
              "Yes — the author provides evidence to refute it"
            ],
            [
              "Relationship to conclusion",
              "Appears to weaken the conclusion but is neutralized",
              "Directly contradicts the conclusion and is attacked"
            ],
            [
              "Attribution",
              "Usually not attributed to anyone specific",
              "Often attributed to others (\"Some argue...\")"
            ],
            [
              "Author's attitude",
              "Acceptance + dismissal of significance",
              "Rejection + evidence of falsity"
            ],
            [
              "Indicator words",
              "\"Although,\" \"Granted,\" \"Admittedly\"",
              "\"Some argue,\" \"Critics contend,\" \"It is claimed\""
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "The essential difference: with a **concession**, the author says *\"Yes, this is true, but it doesn't matter.\"* With an **opposing viewpoint**, the author says *\"No, this is wrong, and here's why.\"*"
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example (PT-131-S-2-Q-18)"
        },
        {
          "type": "question-card",
          "id": "PT-131-S-2-Q-18",
          "stimulus": "Contrary to Malthus's arguments, human food-producing capacity has increased more rapidly than human population. Yet, agricultural advances often compromise biological diversity. Therefore, Malthus's prediction that insufficient food will doom humanity to war, pestilence, and famine will likely be proven correct in the future, because a lack of biodiversity will eventually erode our capacity to produce food.",
          "question": "The statement that human food-producing capacity has increased more rapidly than human population plays which one of the following roles in the argument?",
          "options": [
            "(A) It is a hypothesis the argument provides reasons for believing to be presently false.",
            "(B) It is a part of the evidence used in the argument to support the conclusion that a well-known view is misguided.",
            "(C) It is an observation that the argument suggests actually supports Malthus's position.",
            "(D) It is a general fact that the argument offers reason to believe will eventually change. (Correct)",
            "(E) It is a hypothesis that, according to the argument, is accepted on the basis of inadequate evidence."
          ]
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
          "text": "This is a subtle concession because the indicator is unusual — *\"Contrary to Malthus's arguments\"* — rather than a standard \"Although\" or \"Granted.\" But the structure is the same: the author acknowledges a fact that seems to favor the other side, then pivots to explain why it ultimately supports their own conclusion."
        },
        {
          "type": "paragraph",
          "text": "Let's map the full argument:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Statement",
            "text": "Role & Reasoning"
          },
          "items": [
            {
              "title": "\"Food-producing capacity has increased more rapidly than population\"",
              "text": "This is the **Concession**. Introduced with \"Contrary to Malthus's arguments,\" the author acknowledges a fact that seems to disprove Malthus. The author accepts this as currently true. But the author does NOT argue it is false — instead, the author will explain why it won't remain true.",
              "badge": "Concession",
              "badgeColor": "blue"
            },
            {
              "title": "\"Agricultural advances often compromise biological diversity\"",
              "text": "This is a **Premise** — the key piece of evidence that bridges the concession to the conclusion. It explains *why* the current favorable trend will reverse.",
              "badge": "Premise",
              "badgeColor": "slate"
            },
            {
              "title": "\"Malthus's prediction will likely be proven correct\"",
              "text": "This is the **Main Conclusion** — the author's ultimate point. Despite the concession, Malthus will turn out to be right in the long run.",
              "badge": "Main Conclusion",
              "badgeColor": "indigo"
            },
            {
              "title": "\"Lack of biodiversity will eventually erode our capacity to produce food\"",
              "text": "This is a **Supporting Premise** — introduced by \"because,\" it provides the causal mechanism explaining why the main conclusion will come true.",
              "badge": "Premise",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "process",
          "title": "The Logic Flow",
          "steps": [
            "**Concession:** Food production has outpaced population (currently true, seems to disprove Malthus)",
            "**Pivot:** \"Yet\" — the author shifts to their own argument",
            "**Premise:** Agricultural advances compromise biodiversity",
            "**Premise:** Biodiversity loss will erode food production capacity",
            "**Main Conclusion:** Therefore, Malthus will be proven right in the future"
          ]
        },
        {
          "type": "h3",
          "text": "Why Each Wrong Answer Fails"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Option",
            "text": "Detailed Evaluation"
          },
          "items": [
            {
              "title": "(A) A hypothesis... presently false",
              "text": "The author treats the target as **presently true**. The word \"Contrary to Malthus's arguments\" acknowledges it as an established fact. The author never claims it is currently false — only that it will eventually change. (A) gets the present status wrong.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(B) Evidence... that a well-known view is misguided",
              "text": "The conclusion is that Malthus's view is ultimately *correct*, not misguided. (B) has the direction of the argument exactly backward.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(C) An observation that actually supports Malthus's position",
              "text": "This is a seductive trap. The *argument as a whole* supports Malthus, but the target statement itself is introduced as being \"Contrary to\" Malthus. The target, on its face, weakens Malthus — it's a concession, not evidence for Malthus.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(D) A general fact that will eventually change",
              "text": "The author accepts it as a \"general fact\" (true now). The argument \"offers reason to believe\" (biodiversity loss) that this fact \"will eventually change\" (food capacity will decline). Every element matches the argument's treatment of the concession.",
              "badge": "Correct",
              "badgeColor": "green"
            },
            {
              "title": "(E) A hypothesis accepted on inadequate evidence",
              "text": "The author never questions the *evidence* for the target statement. The author accepts the fact and argues it will reverse for different reasons. (E) attributes a criticism the author never makes.",
              "badge": "Incorrect",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Why This Question Is Tricky",
          "variant": "default",
          "text": "The correct answer (D) never uses the word \"concession.\" Instead, it describes the *dynamic role* the concession plays: a currently true fact that the argument predicts will change. This is a hallmark of hard questions — the correct answer describes the role in functional terms rather than using a structural label you've memorized. You must understand what a concession *does*, not just what it's called."
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "**Concessions** are strategic acknowledgments of points that seem to weaken the author's own conclusion. The author grants the point as true, then explains why it doesn't change the bottom line. The pattern is: **Concession Indicator** → **Conceded Point** → **Pivot** → **Author's Response**. Distinguish concessions from opposing viewpoints: a concession is *accepted as true but dismissed as insignificant*; an opposing viewpoint is *argued to be false*."
        }
      ],
    },
  },
};
