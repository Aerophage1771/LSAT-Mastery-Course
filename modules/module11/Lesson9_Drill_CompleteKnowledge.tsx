import { Lesson } from '../../types';

export const Lesson9_Drill_CompleteKnowledge: Lesson = {
  id: "11-9",
  title: "Drill: The 'Complete Knowledge' Assumption (PT-138-S-3-Q-23)",
  content: [
    { type: 'h2', text: 'The Complete Knowledge' },
    { type: 'paragraph', text: "The Complete Knowledge pattern appears when an author draws a definitive conclusion based on an incomplete set of evidence — treating what is *known* as if it represents the *complete picture*. The argument relies on a limited sample (\"known works,\" \"documented cases,\" \"studies to date\") to make a sweeping judgment about all of reality. The necessary assumption is the unstated belief that the known evidence is fully representative — that there are no undiscovered exceptions hiding outside the sample." },
    { type: 'paragraph', text: "This pattern is especially common in arguments about authenticity, history, science, and classification. Any time an author uses what has been observed to make a categorical claim about what *is*, they assume that nothing unobserved would change the picture. The correct answer will state that the known body of evidence contains no gaps relevant to the conclusion." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Complete Knowledge Gap' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Look for \"known\" qualifiers:** Phrases like \"known to be,\" \"documented,\" \"on record,\" \"studies show,\" or \"to date\" signal that the author is working from a limited evidence set.',
      '**Compare the evidence scope to the conclusion scope:** The evidence talks about a subset (\"known works\"). The conclusion talks about the whole category (\"all works\" or \"this specific work\"). Is the conclusion broader than the evidence?',
      '**Ask: "Could there be undiscovered exceptions?"** If the author concludes something definitive but the evidence only covers what has been found so far, the assumption is that nothing undiscovered would change the conclusion.',
      '**Predict the answer:** The correct answer will say that the known sample is complete or fully representative — that nothing outside the sample contradicts the conclusion.',
    ]},
    { type: 'callout', variant: 'tip', title: 'Known ≠ All', text: "The key logical error is treating a *sample* as if it were the *population*. \"No known case of X\" does not mean \"X has never happened\" — it means we haven't *found* a case of X yet. The author must assume that what we haven't found doesn't exist. This assumption is often reasonable in everyday life, but on the LSAT it creates a gap that the correct answer will fill." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Complete Knowledge (PT-138-S-3-Q-23)' },

    { type: 'h4', text: 'The Problem' },


    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's trace the art historian's reasoning, paying close attention to the scope of the evidence versus the scope of the conclusion." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"This painting, purportedly by Mary Cassatt, is a forgery."', text: "**Conclusion.** The art historian declares the painting a forgery — a definitive, categorical judgment. The word \"definitely\" (used later) reinforces how absolute this claim is." },
      { title: '"Although the canvas and other materials are consistent with most of Cassatt\'s work, and the subject matter is similar to that of Cassatt\'s finest paintings..."', text: "**Concession.** The historian acknowledges evidence *supporting* authenticity (materials and subject matter match). The word \"although\" signals that the historian will argue against authenticity despite these facts." },
      { title: '"...the brush style of this painting is not found in any work known to be Cassatt\'s."', text: "**Key Premise.** The decisive evidence: the brush style doesn't match anything in the *known* body of Cassatt's work. Notice the crucial qualifier — \"known to be Cassatt's.\" This limits the evidence to works that have already been identified and authenticated." },
      { title: '"Hence this painting is definitely not a genuine Cassatt."', text: "**Conclusion restated.** \"Hence\" signals the logical leap. The historian moves from \"not found in known works\" to \"definitely not genuine\" — from a limited evidence set to an absolute claim." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**The Evidence:** The brush style is not found in any work *known* to be Cassatt's.\n\n**The Conclusion:** The painting is *definitely* not a genuine Cassatt.\n\n**The Gap:** The evidence covers only *known* works — a subset of everything Cassatt ever painted. What if Cassatt experimented with a new brush style in a work that hasn't been catalogued? What if this painting is itself one of those undiscovered works? The historian leaps from \"we haven't seen this style in what we know\" to \"Cassatt never used this style\" — treating the known catalog as if it were complete." },
    { type: 'callout', variant: 'default', title: 'The Scope Mismatch', text: "**Evidence scope:** Works *known* to be Cassatt's (a subset).\n\n**Conclusion scope:** ALL of Cassatt's genuine works (the complete set).\n\nThe gap: known works ≠ all works. The historian assumes they are equal — that no genuine Cassatt painting exists outside the known catalog that would display this brush style." },

    { type: 'h4', text: 'Step 3: Pre-phrase' },
    { type: 'paragraph', text: "The assumption must state that Cassatt's known works represent her *complete* range of brush styles — that she never used any brush style that isn't already exhibited in her known body of work. Without this, the painting could be a genuine but previously uncatalogued Cassatt with an experimental style." },

    { type: 'h4', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) The type of canvas and other materials that Cassatt used in most of her work were readily available to others.', text: "This makes it *easier* for a forger to fake the materials — it could support the conclusion. But it's not *necessary* for the argument. The argument rests on brush style, not materials. Even if the materials were unique to Cassatt, the historian's logic (based on brush style) would be unchanged.\n\n**Negation:** The materials were NOT readily available to others. This actually would *strengthen* the argument for authenticity (harder to forge materials), but it doesn't destroy the brush-style reasoning. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) None of Cassatt\'s works is painted using a brush style that is not exhibited in any of her known works.', text: "This directly states the Complete Knowledge assumption: every brush style Cassatt ever used appears somewhere in her known works. Her known catalog is a complete inventory of her stylistic range.\n\n**Negation Test:** At least one of Cassatt's genuine works **IS** painted using a brush style **NOT** exhibited in her known works. If this is true, then Cassatt *did* sometimes use brush styles that aren't in the known catalog — meaning this painting, with its unfamiliar brush style, could be one of those genuine but uncatalogued works. The historian can no longer conclude it's \"definitely\" a forgery.\n\n**The argument collapses.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Cassatt\'s work generally had a characteristic subject matter that distinguished it from the work of other painters of her era.', text: "The historian already conceded that the subject matter *matches* Cassatt's style. Whether her subject matter was distinctive among her peers doesn't affect the brush-style reasoning. The argument doesn't depend on subject matter being a reliable identifier.\n\n**Negation:** Cassatt's subject matter was NOT distinctive from other painters. This doesn't affect the brush-style logic at all. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) The most characteristic feature of Cassatt\'s work is her brush style.', text: "The argument doesn't need brush style to be the *most* characteristic feature — it only needs the absence of a known brush style to be *sufficient* to declare a forgery. Whether brush style is #1 or #5 on the list of characteristic features is irrelevant to the logical structure.\n\n**Negation:** Brush style is NOT the most characteristic feature. The argument still works because it relies on brush style as *a* decisive factor, not necessarily the *top* one. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) No painter other than Cassatt would be able to match Cassatt\'s brush style perfectly.', text: "This is about whether forgers *could copy* Cassatt's known styles. But the argument's issue is the opposite: the painting's style *doesn't match* any known Cassatt style. The question isn't whether someone copied her style — it's whether the unfamiliar style could still be genuinely hers.\n\n**Negation:** Other painters COULD match her style perfectly. This is about copying known styles, not about whether unknown styles exist. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Bridge Known → All?'], rows: [
      ['(A)', 'Availability of materials to forgers', 'No — wrong evidence category (materials, not brush style)'],
      ['**(B)**', '**Whether known works cover all brush styles**', '**Yes — bridges the gap ✓**'],
      ['(C)', 'Distinctiveness of Cassatt\'s subject matter', 'No — subject matter already conceded as matching'],
      ['(D)', 'Relative importance of brush style', 'No — ranking of features is irrelevant'],
      ['(E)', 'Whether others could copy her style', 'No — about copying known styles, not unknown ones'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument uses the word \"known\" (or \"documented,\" \"recorded,\" \"to date\") and then draws a definitive conclusion, there is almost always a Complete Knowledge gap. The author assumes that the known sample is comprehensive — that nothing outside the sample would contradict the conclusion.\n\nThe Negation Test is especially powerful here: negate the correct answer and you create the possibility of an *undiscovered exception* that destroys the absolute conclusion.\n\nWatch for the mismatch between cautious evidence language (\"known to be,\" \"on record\") and absolute conclusion language (\"definitely,\" \"certainly,\" \"must be\"). The bigger the gap between the evidence qualifier and the conclusion's certainty, the stronger the Complete Knowledge assumption." },
  ]
};
