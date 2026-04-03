import { Lesson } from '../../types';

export const Lesson6_OpposingViewpoint: Lesson = {
  id: '1-6',
  title: 'Lesson 3: The Opposing Viewpoint',
  questionPolicy: 'repository_required',
  content: [
    { type: 'h2', text: 'The Opposing Viewpoint' },

    { type: 'h3', text: 'Concept Focus: The Opposing Viewpoint' },
    {
      type: 'paragraph',
      text: "Many arguments are constructed as a direct response to another viewpoint. In these cases, the author's main goal is to challenge or refute a position held by someone else. This introduces a critical role: the **Opposing Viewpoint**, also known as the **Target of the Argument**. This role appears in about **8% of Argument Part questions**.",
    },
    {
      type: 'paragraph',
      text: 'Arguments that feature an opposing viewpoint almost always follow a predictable "rebuttal" structure. Understanding this structure lets you identify the opposing viewpoint quickly and reliably, even when the argument is complex.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'The Rebuttal Pattern' },
    {
      type: 'paragraph',
      text: "Nearly every argument containing an opposing viewpoint follows the same four-part pattern. Learn it once and you'll recognize it instantly:",
    },
    {
      type: 'process',
      title: 'The Rebuttal Structure',
      steps: [
        '**Attribution:** The author reports someone else\'s belief or position — *"Some people argue that...", "Critics contend that...", "It is commonly held that..."*',
        "**Opposing View:** The specific claim being attributed to others. This is the statement that will become the target of the author's rebuttal.",
        '**Pivot:** The author shifts from reporting to arguing. Signaled by contrast words — *"But", "However", "Yet", "Nevertheless"*. Everything after this word is the author\'s own position.',
        "**Author's Response:** The author's conclusion (rejecting the opposing view) and the author's evidence supporting that rejection.",
      ],
    },
    {
      type: 'paragraph',
      text: "The opposing viewpoint always sits *before* the pivot. The author's conclusion always sits *after* the pivot. This structural fact is your most reliable tool.",
    },

    { type: 'h3', text: 'Attribution Phrases That Signal an Opposing Viewpoint' },
    {
      type: 'paragraph',
      text: "When the author introduces someone else's position, they use attribution phrases. These are your early warning system that a rebuttal is coming:",
    },
    {
      type: 'table',
      headers: ['Attribution Phrase', 'What It Signals'],
      rows: [
        ['Some people argue that...', 'An unnamed group holds a position the author will challenge'],
        ['It has been claimed that...', 'A passive attribution — the author distances themselves from the claim'],
        ['Many believe that...', 'A widely held view the author considers mistaken'],
        ['Critics contend that...', 'An opposing camp has raised an objection'],
        ['Proponents of X say...', 'A specific school of thought is being introduced for rebuttal'],
        ['According to conventional wisdom...', 'The established view is about to be challenged'],
        ['The common assumption is that...', 'A default belief the author will argue against'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The Attribution Rule',
      text: 'If the author attributes a claim to someone else and then disagrees with it, the attributed claim is the Opposing Viewpoint. The author\'s disagreement is the Main Conclusion. This is true even if the author never uses the word "wrong" or "mistaken" — the pivot word alone signals the disagreement.',
    },

    { type: 'h3', text: 'Common Pivot Words' },
    {
      type: 'paragraph',
      text: 'The pivot is the structural hinge of the rebuttal. Everything before the pivot belongs to the opposing side; everything after belongs to the author:',
    },
    {
      type: 'table',
      headers: ['Pivot Word/Phrase', 'Strength of Contrast'],
      rows: [
        ['But', 'Direct, forceful rejection'],
        ['However', 'Formal, measured disagreement'],
        ['Yet', 'Concessive tone — acknowledges the view before rejecting it'],
        ['Nevertheless / Nonetheless', 'The view has some merit, but the author still disagrees'],
        ['On the contrary', 'Signals the author will assert the opposite'],
        ['This is mistaken / This is wrong', 'Explicit rejection — doubles as the main conclusion'],
        ['In fact', 'The author is about to correct the record'],
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Distinguishing Author from Opponent' },
    {
      type: 'paragraph',
      text: "One of the most common errors on these questions is confusing the opposing viewpoint with the author's own conclusion. This happens because both are strong, assertive claims. Here's how to keep them straight:",
    },
    {
      type: 'list',
      items: [
        '**Who is speaking?** If the claim is attributed to someone else ("some argue," "critics say"), it\'s the opposing viewpoint. If the author asserts it in their own voice, it\'s the author\'s claim.',
        '**Where does it fall relative to the pivot?** Claims before "But" / "However" belong to the opposing side. Claims after the pivot belong to the author.',
        "**Does the author agree?** If the author provides evidence *against* the claim, it's the opposing viewpoint. If the author provides evidence *for* the claim, it's the author's conclusion.",
        '**Is the author building on it or tearing it down?** The opposing view is something the author works to dismantle. The conclusion is something the author works to establish.',
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: "Common Trap: Confusing the Opposing View with the Author's Conclusion",
      text: "On harder questions, the LSAT may not use obvious attribution phrases. Instead, the opposing side may get several sentences, and the target may be a premise inside that rejected reasoning rather than the opponent's final conclusion. When in doubt, find the pivot word and work outward: map which claims belong to the opposing side, then ask which claim they are using as support and which claim they are trying to prove.",
    },

    { type: 'hr' },

    { type: 'h3', text: 'Nested Opponent Mapping' },
    {
      type: 'paragraph',
      text: 'Easy rebuttal questions let you label a sentence as "the opposing viewpoint" and move on. Hard rebuttal questions demand a second layer: you must map **whose reasoning** the sentence belongs to and **what role it plays inside that reasoning**.',
    },
    {
      type: 'table',
      headers: ['Layer', 'Question to ask', 'Why it matters'],
      rows: [
        [
          'Speaker ownership',
          'Who is asserting this sentence: the author, the opponent, or both sides as common ground?',
          'You avoid wrong-answer choices that put the sentence in the wrong voice.',
        ],
        [
          'Local role',
          'Within that speaker\'s reasoning, is the sentence a conclusion, a premise, an example, or a concession?',
          'A sentence can belong to the opponent without being the opponent\'s main claim.',
        ],
        [
          'Author\'s treatment',
          'Does the author attack this sentence, concede it, or use it as shared setup?',
          'That determines whether the best description is "refuted," "granted," or something more precise.',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The Nested Mapping Rule',
      text: 'On hard rebuttals, do not stop at "before the pivot = opponent." Keep going: ask what the opponent is trying to prove and what sentence the opponent is using to prove it. The credited answer may describe the target as "a claim used to support a position the author rejects" rather than as the rejected position itself.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example (PT-129-S-2-Q-13)' },
    {
      type: 'question-card',
      id: 'PT-129-S-2-Q-13',
      stimulus:
        'Administrators of educational institutions are enthusiastic about the educational use of computers because they believe that it will enable schools to teach far more courses with far fewer teachers than traditional methods allow. Many teachers fear computers for the same reason. But this reason is mistaken. Computerized instruction requires more, not less, time of instructors, which indicates that any reduction in the number of teachers would require an accompanying reduction in courses offered.',
      question:
        'The statement that the educational use of computers enables schools to teach far more courses with far fewer teachers figures in the argument in which one of the following ways?',
      options: [
        '(A) It is presented as a possible explanation for an observation that follows it.',
        '(B) It is a statement of the problem the argument sets out to solve.',
        '(C) It is a statement that the argument is designed to refute. (Correct)',
        "(D) It is a statement offered in support of the argument's main conclusion.",
        "(E) It is the argument's main conclusion.",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: "Let's map this argument using the Rebuttal Pattern:" },

    {
      type: 'process',
      title: 'Structural Map',
      steps: [
        '**Attribution:** Administrators and teachers share a belief — the statement is attributed to *others*, not the author.',
        '**Opposing View (Target):** "The educational use of computers will enable schools to teach far more courses with far fewer teachers."',
        '**Pivot:** "**But** this reason is mistaken." — The author explicitly rejects the opposing view.',
        '**Author\'s Response:** "Computerized instruction requires more, not less, time of instructors..." — Evidence supporting the rejection.',
      ],
    },
    {
      type: 'process',
      title: 'Speaker Map',
      steps: [
        '**Administrators:** Like computers because they think schools can offer more courses with fewer teachers.',
        '**Teachers:** Fear computers for that same reason.',
        '**Author:** Rejects that shared reason as mistaken.',
        '**Result:** The target is the belief both groups share, and it is the exact claim the author is trying to knock out.',
      ],
    },

    {
      type: 'breakdown',
      labels: { title: 'Statement', text: 'Role' },
      items: [
        {
          title: '"Computers will enable more courses with fewer teachers"',
          text: 'This is the **Opposing Viewpoint** — a belief held by administrators and teachers that the author is about to argue against. It is attributed to others and sits before the pivot.',
          badge: 'Opposing Viewpoint',
          badgeColor: 'red',
        },
        {
          title: '"But this reason is mistaken"',
          text: "This is the **Main Conclusion** — the author's direct rejection of the opposing view. It sits at the pivot point and is the claim the author spends the rest of the argument supporting.",
          badge: 'Main Conclusion',
          badgeColor: 'indigo',
        },
        {
          title: '"Computerized instruction requires more time..."',
          text: 'This is the **Premise** — the factual evidence the author provides to support the claim that the opposing view is mistaken.',
          badge: 'Premise',
          badgeColor: 'slate',
        },
      ],
    },

    { type: 'h3', text: 'Why Each Wrong Answer Fails' },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Detailed Evaluation' },
      items: [
        {
          title: '(A) A possible explanation for an observation that follows it.',
          text: 'This reverses the logical relationship. The observation that "computerized instruction requires more time" is not something the target explains — it is evidence *against* the target. The target and the observation are in direct conflict, not in an explanatory relationship.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title: '(B) A statement of the problem the argument sets out to solve.',
          text: 'The author treats the target as a *mistaken belief*, not a practical problem that needs solving. The argument is structured to correct a factual error, not to propose a solution.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title: '(C) A statement that the argument is designed to refute.',
          text: 'The author explicitly calls the target "mistaken" and provides evidence to prove it wrong. The entire argument is designed around refuting this specific belief. This is the textbook definition of the opposing viewpoint\'s role.',
          badge: 'Correct',
          badgeColor: 'green',
        },
        {
          title: "(D) A statement offered in support of the argument's main conclusion.",
          text: 'This is the opposite of the actual role. The target is the claim being *attacked*, not a piece of evidence supporting the attack. Evidence in support of the main conclusion would be the observation about instructors needing more time.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title: "(E) It is the argument's main conclusion.",
          text: 'This confuses the opposing viewpoint with the author\'s own position. The main conclusion is "this reason is mistaken" — the author\'s rejection of the target. The target itself is the thing being rejected, not the rejection.',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: 'Many arguments are structured as a **rebuttal**. The pattern is: **Attribution** ("Some say...") → **Opposing View** → **Pivot** ("But...") → **Author\'s Response**. The opposing viewpoint is the claim just *before* the pivot. The author\'s Main Conclusion in these arguments is their direct rejection of the Opposing Viewpoint (e.g., "This is mistaken"). When answer choices describe a "claim the argument is designed to refute" or "a position the author challenges," they are describing the opposing viewpoint.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "The Opposing Viewpoint"
        },
        {
          "type": "diff-note",
          "text": "{{+Consider opening directly with the Rebuttal Pattern below. The definition of Opposing Viewpoint is already established in Lessons 1-1 and 1-3; repeating it here delays the new material. Suggested lead-in: \"Now that you know what the Opposing Viewpoint is, let's learn the structural pattern that makes it easy to spot.\"+}}",
          "variant": "comment"
        },
        {
          "type": "h3",
          "text": "Concept Focus: The Opposing Viewpoint"
        },
        {
          "type": "paragraph",
          "text": "Many arguments are constructed as a direct response to another viewpoint. In these cases, the author's main goal is to challenge or refute a position held by someone else. This introduces a critical role: the **Opposing Viewpoint**, also known as the **Target of the Argument**. This role appears in about **8% of Argument Part questions**."
        },
        {
          "type": "paragraph",
          "text": "Arguments that feature an opposing viewpoint almost always follow a predictable \"rebuttal\" structure. Understanding this structure lets you identify the opposing viewpoint quickly and reliably, even when the argument is complex."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Rebuttal Pattern"
        },
        {
          "type": "paragraph",
          "text": "Nearly every argument containing an opposing viewpoint follows the same four-part pattern. Learn it once and you'll recognize it instantly:"
        },
        {
          "type": "process",
          "title": "The Rebuttal Structure",
          "steps": [
            "**Attribution:** The author reports someone else's belief or position — *\"Some people argue that...\", \"Critics contend that...\", \"It is commonly held that...\"*",
            "**Opposing View:** The specific claim being attributed to others. This is the statement that will become the target of the author's rebuttal.",
            "**Pivot:** The author shifts from reporting to arguing. Signaled by contrast words — *\"But\", \"However\", \"Yet\", \"Nevertheless\"*. Everything after this word is the author's own position.",
            "**Author's Response:** The author's conclusion (rejecting the opposing view) and the author's evidence supporting that rejection."
          ]
        },
        {
          "type": "paragraph",
          "text": "The opposing viewpoint always sits *before* the pivot. The author's conclusion always sits *after* the pivot. This structural fact is your most reliable tool."
        },
        {
          "type": "h3",
          "text": "Attribution Phrases That Signal an Opposing Viewpoint"
        },
        {
          "type": "paragraph",
          "text": "When the author introduces someone else's position, they use attribution phrases. These are your early warning system that a rebuttal is coming:"
        },
        {
          "type": "table",
          "headers": [
            "Attribution Phrase",
            "What It Signals"
          ],
          "rows": [
            [
              "Some people argue that...",
              "An unnamed group holds a position the author will challenge"
            ],
            [
              "It has been claimed that...",
              "A passive attribution — the author distances themselves from the claim"
            ],
            [
              "Many believe that...",
              "A widely held view the author considers mistaken"
            ],
            [
              "Critics contend that...",
              "An opposing camp has raised an objection"
            ],
            [
              "Proponents of X say...",
              "A specific school of thought is being introduced for rebuttal"
            ],
            [
              "According to conventional wisdom...",
              "The established view is about to be challenged"
            ],
            [
              "The common assumption is that...",
              "A default belief the author will argue against"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Attribution Rule",
          "variant": "tip",
          "text": "If the author attributes a claim to someone else and then disagrees with it, the attributed claim is the Opposing Viewpoint. The author's disagreement is the Main Conclusion. This is true even if the author never uses the word \"wrong\" or \"mistaken\" — the pivot word alone signals the disagreement."
        },
        {
          "type": "h3",
          "text": "Common Pivot Words"
        },
        {
          "type": "paragraph",
          "text": "The pivot is the structural hinge of the rebuttal. Everything before the pivot belongs to the opposing side; everything after belongs to the author:"
        },
        {
          "type": "table",
          "headers": [
            "Pivot Word/Phrase",
            "Strength of Contrast"
          ],
          "rows": [
            [
              "But",
              "Direct, forceful rejection"
            ],
            [
              "However",
              "Formal, measured disagreement"
            ],
            [
              "Yet",
              "Concessive tone — acknowledges the view before rejecting it"
            ],
            [
              "Nevertheless / Nonetheless",
              "The view has some merit, but the author still disagrees"
            ],
            [
              "On the contrary",
              "Signals the author will assert the opposite"
            ],
            [
              "This is mistaken / This is wrong",
              "Explicit rejection — doubles as the main conclusion"
            ],
            [
              "In fact",
              "The author is about to correct the record"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Distinguishing Author from Opponent"
        },
        {
          "type": "paragraph",
          "text": "One of the most common errors on these questions is confusing the opposing viewpoint with the author's own conclusion. This happens because both are strong, assertive claims. Here's how to keep them straight:"
        },
        {
          "type": "list",
          "items": [
            "**Who is speaking?** If the claim is attributed to someone else (\"some argue,\" \"critics say\"), it's the opposing viewpoint. If the author asserts it in their own voice, it's the author's claim.",
            "**Where does it fall relative to the pivot?** Claims before \"But\" / \"However\" belong to the opposing side. Claims after the pivot belong to the author.",
            "**Does the author agree?** If the author provides evidence *against* the claim, it's the opposing viewpoint. If the author provides evidence *for* the claim, it's the author's conclusion.",
            "**Is the author building on it or tearing it down?** The opposing view is something the author works to dismantle. The conclusion is something the author works to establish."
          ]
        },
        {
          "type": "diff-note",
          "text": "{{+Worked mini-example added below to make the four-part checklist concrete.+}}",
          "variant": "add"
        },
        {
          "type": "callout",
          "variant": "default",
          "title": "{{+Try It: Author vs. Opponent+}}",
          "text": "{{+Read the following short argument and decide: which claim belongs to the author and which belongs to the opponent?\n\n\"Nutritionists maintain that a vegetarian diet cannot supply adequate protein for athletes. However, recent studies of Olympic weightlifters on plant-based diets show that their protein levels match those of meat-eating peers.\"\n\n**The opponent's claim:** \"A vegetarian diet cannot supply adequate protein for athletes\" -- attributed to nutritionists, sits before the pivot (\"However\"), and is the claim the author works to tear down.\n\n**The author's claim:** \"Recent studies show protein levels match\" -- asserted in the author's own voice, sits after the pivot, and is supported by evidence the author provides.+}}"
        },
        {
          "type": "callout",
          "title": "Common Trap: Confusing the Opposing View with the Author's Conclusion",
          "variant": "default",
          "text": "On harder questions, the LSAT may not use obvious attribution phrases. Instead, the opposing view may be stated as a general fact before the pivot, and the author's rejection may be subtle. When in doubt, find the pivot word and work outward: *before pivot = not the author's view; after pivot = the author's view.*"
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example (PT-129-S-2-Q-13)"
        },
        {
          "type": "question-card",
          "id": "PT-129-S-2-Q-13",
          "stimulus": "Administrators of educational institutions are enthusiastic about the educational use of computers because they believe that it will enable schools to teach far more courses with far fewer teachers than traditional methods allow. Many teachers fear computers for the same reason. But this reason is mistaken. Computerized instruction requires more, not less, time of instructors, which indicates that any reduction in the number of teachers would require an accompanying reduction in courses offered.",
          "question": "The statement that the educational use of computers enables schools to teach far more courses with far fewer teachers figures in the argument in which one of the following ways?",
          "options": [
            "(A) It is presented as a possible explanation for an observation that follows it.",
            "(B) It is a statement of the problem the argument sets out to solve.",
            "(C) It is a statement that the argument is designed to refute. (Correct)",
            "(D) It is a statement offered in support of the argument's main conclusion.",
            "(E) It is the argument's main conclusion."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "variant": "tip",
          "title": "{{+Try This First+}}",
          "text": "{{+Before reading the analysis below, re-read the stimulus and try to answer two questions on your own: (1) Where is the pivot word? (2) Which specific claim is the Opposing Viewpoint? Write down your answers, then compare them with the walkthrough.+}}"
        },
        {
          "type": "h3",
          "text": "Analysis"
        },
        {
          "type": "paragraph",
          "text": "Let's map this argument using the Rebuttal Pattern:"
        },
        {
          "type": "process",
          "title": "Structural Map",
          "steps": [
            "**Attribution:** Administrators and teachers share a belief — the statement is attributed to *others*, not the author.",
            "**Opposing View (Target):** \"The educational use of computers will enable schools to teach far more courses with far fewer teachers.\"",
            "**Pivot:** \"**But** this reason is mistaken.\" — The author explicitly rejects the opposing view.",
            "**Author's Response:** \"Computerized instruction requires more, not less, time of instructors...\" — Evidence supporting the rejection."
          ]
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Statement",
            "text": "Role"
          },
          "items": [
            {
              "title": "\"Computers will enable more courses with fewer teachers\"",
              "text": "This is the **Opposing Viewpoint** — a belief held by administrators and teachers that the author is about to argue against. It is attributed to others and sits before the pivot.",
              "badge": "Opposing Viewpoint",
              "badgeColor": "red"
            },
            {
              "title": "\"But this reason is mistaken\"",
              "text": "This is the **Main Conclusion** — the author's direct rejection of the opposing view. It sits at the pivot point and is the claim the author spends the rest of the argument supporting.",
              "badge": "Main Conclusion",
              "badgeColor": "indigo"
            },
            {
              "title": "\"Computerized instruction requires more time...\"",
              "text": "This is the **Premise** — the factual evidence the author provides to support the claim that the opposing view is mistaken.",
              "badge": "Premise",
              "badgeColor": "slate"
            }
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
              "title": "(A) A possible explanation for an observation that follows it.",
              "text": "This reverses the logical relationship. The observation that \"computerized instruction requires more time\" is not something the target explains — it is evidence *against* the target. The target and the observation are in direct conflict, not in an explanatory relationship.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(B) A statement of the problem the argument sets out to solve.",
              "text": "The author treats the target as a *mistaken belief*, not a practical problem that needs solving. The argument is structured to correct a factual error, not to propose a solution.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(C) A statement that the argument is designed to refute.",
              "text": "The author explicitly calls the target \"mistaken\" and provides evidence to prove it wrong. The entire argument is designed around refuting this specific belief. This is the textbook definition of the opposing viewpoint's role.",
              "badge": "Correct",
              "badgeColor": "green"
            },
            {
              "title": "(D) A statement offered in support of the argument's main conclusion.",
              "text": "This is the opposite of the actual role. The target is the claim being *attacked*, not a piece of evidence supporting the attack. Evidence in support of the main conclusion would be the observation about instructors needing more time.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(E) It is the argument's main conclusion.",
              "text": "This confuses the opposing viewpoint with the author's own position. The main conclusion is \"this reason is mistaken\" — the author's rejection of the target. The target itself is the thing being rejected, not the rejection.",
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
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "Many arguments are structured as a **rebuttal**. The pattern is: **Attribution** (\"Some say...\") → **Opposing View** → **Pivot** (\"But...\") → **Author's Response**. The opposing viewpoint is the claim just *before* the pivot. The author's Main Conclusion in these arguments is their direct rejection of the Opposing Viewpoint (e.g., \"This is mistaken\"). When answer choices describe a \"claim the argument is designed to refute\" or \"a position the author challenges,\" they are describing the opposing viewpoint."
        }
      ],
    },
  },
};
