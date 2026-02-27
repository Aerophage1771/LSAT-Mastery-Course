import { Lesson } from '../../types';

export const Lesson10_Advanced_SpecificJudgment: Lesson = {
  id: "2-10",
  title: "Advanced: Specific Judgment vs. General Rule",
  content: [
    { type: 'h2', text: 'Specific Judgment vs. General Rule' },
    { type: 'paragraph', text: "This lesson tackles one of the most sophisticated traps on Main Conclusion questions. On difficult questions, the author makes a specific judgment about a particular case — a ruling on *this situation* based on *these facts*. A highly tempting wrong answer takes that specific reasoning and generalizes it into a broad \"If... then...\" rule. The trap works because the general rule *accurately describes the logic* the author used, but it overstates the scope of the author's claim. Your task is to be precise: is the author making a ruling about one case, or trying to establish a universal law?" },

    { type: 'hr' },

    { type: 'h3', text: 'Specific vs. General: The Core Distinction' },
    { type: 'paragraph', text: "Understanding this distinction is the key to avoiding the Conditional Paraphrase Trap:" },
    { type: 'table', headers: ['Feature', 'Specific Judgment', 'General Rule'], rows: [
      ['Scope', 'About *this* particular case', 'About *all* cases meeting certain conditions'],
      ['Language', 'Uses proper nouns, definite articles (\"the,\" \"this\")', 'Uses conditionals (\"If... then...\"), universals (\"any,\" \"all\")'],
      ['Claim', '"In this situation, X is true"', '"Whenever Y happens, X follows"'],
      ['Provability', 'Proved by the specific facts presented', 'Would require evidence across many cases'],
      ['Example', '"The similarity between Novels X and Y is coincidental"', '"If two authors have similar lives, similar novels are coincidental"'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Scope Words Reference' },
    { type: 'paragraph', text: "These language markers help you quickly distinguish whether the author is making a specific or general claim:" },
    { type: 'table', headers: ['Specific Language (Conclusion is likely specific)', 'General Language (Conclusion might be general)'], rows: [
      ['"Novel X," "this policy," "the mayor\'s plan"', '"any novel," "all policies," "whenever"'],
      ['"in this case," "here," "for these novels"', '"in general," "as a rule," "in all cases"'],
      ['"is more likely," "was probably"', '"will always," "must necessarily"'],
      ['"the evidence suggests that..."', '"If X, then Y"'],
      ['"it is coincidental" (about one case)', '"coincidences are common when..." (general law)'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'The Conditional Paraphrase Trap' },
    { type: 'paragraph', text: "This trap is so common and effective that it deserves its own name. Here's how it works:" },
    { type: 'process', title: 'How the Trap Is Built', steps: [
      '**The author makes a specific judgment:** "The similarity between Novels X and Y is more likely coincidental than plagiarism."',
      '**The author gives a specific reason:** "...since both authors have led similar lives."',
      '**The trap answer generalizes the reasoning into a conditional rule:** "If two authors of similar novels have led similar lives, suspicions of plagiarism are likely unwarranted."',
      '**Why it\'s tempting:** The conditional accurately describes the *logic* the author used. It feels like a fair summary.',
      '**Why it\'s wrong:** The author never made a general claim about all similar novels. The conclusion is a judgment about *these two specific novels* based on *these specific facts*.',
    ]},
    { type: 'callout', variant: 'default', title: 'The Acid Test', text: "Ask yourself: \"Would the author stand behind this answer as their main point?\" An author who says \"these novels' similarities are coincidental\" would likely respond to the general rule with: \"I wasn't making a universal claim — I was just saying that *in this particular case*, coincidence is the better explanation.\" The general rule may follow logically from the reasoning, but it goes beyond what the author actually concluded." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },

    { type: 'hr' },

    { type: 'h3', text: 'Structural Map' },
    { type: 'paragraph', text: "This argument follows a classic rebuttal structure with a specific judgment:" },
    { type: 'process', title: 'The Argument Flow', steps: [
      '**Opposing View (S1):** The novels are very similar → one might suspect plagiarism. [The view the author will argue against.]',
      '**Pivot (\"However\"):** Signals that the author\'s own view is coming.',
      '**Main Conclusion (S2a):** \"It is more likely that the similarity... is merely coincidental.\" [A specific judgment about *these* novels.]',
      '**Premise (S2b):** \"...since both authors are from very similar backgrounds and have led similar lives.\" [The reason for the judgment, introduced by \"since.\"]',
    ]},

    { type: 'h3', text: 'Answer Choice Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Novel X and Novel Y are both semiautobiographical... similar themes...', text: 'This is the **initial premise** that sets up the puzzle. It\'s background information, not the author\'s point.', badge: 'Trap: The Premise', badgeColor: 'red' },
      { title: '(B) The fact that... might lead one to suspect plagiarism...', text: 'This is the **opposing viewpoint** — the suspicion the author argues *against*. The word \"However\" signals that the author rejects this view.', badge: 'Trap: Opposing Viewpoint', badgeColor: 'red' },
      { title: '(C) The author of Novel X and the author of Novel Y are from very similar backgrounds...', text: 'This is the **premise** used to support the conclusion, directly introduced by \"since.\" It\'s the evidence, not the point.', badge: 'Trap: The Premise', badgeColor: 'red' },
      { title: '(D) It is less likely that... plagiarism than that... merely coincidental.', text: 'This is a valid paraphrase of the main conclusion. \"More likely A than B\" is logically equivalent to \"Less likely B than A.\" It preserves the **specific judgment** about these two novels at the correct certainty level.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) If the authors of Novel X and Novel Y are from very similar backgrounds...', text: 'This is the **Conditional Paraphrase Trap**. It takes the author\'s specific line of reasoning and converts it into a general \"If... then...\" rule. The author made a ruling about *this one case*, not a universal claim about all similar situations. Note how it uses \"If\" — turning facts the author accepted as true into a hypothetical condition.', badge: 'Trap: Conditional Paraphrase', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why (D) Over (E): A Closer Look' },
    { type: 'paragraph', text: "Both (D) and (E) capture the gist of the author's reasoning. Here's why (D) is correct and (E) is not:" },
    { type: 'table', headers: ['Feature', '(D) — Correct', '(E) — Incorrect'], rows: [
      ['Scope', 'Specific: about Novels X and Y', 'General: \"If authors have similar backgrounds...\" (universal rule)'],
      ['Status of facts', 'Treats the similar backgrounds as *established*', 'Treats the similar backgrounds as *hypothetical* (\"If...\")'],
      ['What it claims', 'Coincidence is more likely than plagiarism *in this case*', 'Similar backgrounds generally make plagiarism suspicions unwarranted'],
      ['Author\'s intent', 'A judgment about these two novels', 'A principle that could apply to any pair of novels'],
    ]},

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Distinguish a Specific Judgment from a General Principle.** The main conclusion is often a specific claim about the case at hand, not a broad rule that could apply to other cases.\n**2. Watch for the Conditional Paraphrase Trap.** When an answer converts established facts into \"If... then...\" hypotheticals and specific cases into universal rules, it's a scope distortion — even if the logic is accurate.\n**3. A \"Rule\" answer can describe the logic without being the conclusion.** A tempting wrong answer can be a conditional statement that accurately reflects the *reasoning* used. The conclusion is the *product* of that reasoning, not a description of the reasoning process.\n**4. Use scope words as diagnostic tools.** Proper nouns, definite articles, and specific references signal a specific judgment. Conditionals, universals, and hypotheticals signal a general rule." }
  ]
};
