import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "2-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'The 6-Step Method for Main Conclusion Questions' },
    { type: 'paragraph', text: "This lesson provides a complete, repeatable method for solving any Main Conclusion question. Each step includes a concrete example, a tip for when the step gets tricky, and common mistakes to avoid. At the end, you will work through a full example applying all six steps." },

    { type: 'callout', variant: 'tip', title: 'Timing', text: "You should spend roughly **1 minute and 15 seconds** per Main Conclusion question. These questions are designed to be solved quickly once you have a reliable method. If you are spending more than 90 seconds, you are likely overthinking the structure. Timed drilling is the fastest way to internalize the process." },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 6-Step Method', steps: [
      '**Step 1 — Confirm the Task:** Read the question stem and confirm you are looking for the main conclusion.',
      '**Step 2 — Read for Structure:** Read the stimulus, tagging each sentence as premise, conclusion, background, or opposing view.',
      '**Step 3 — Spot Indicator Words:** Use conclusion, premise, and pivot indicators to map the argument\'s flow.',
      '**Step 4 — Apply the Why Test:** Isolate your candidate conclusion and verify it with the Why Test.',
      '**Step 5 — Prephrase the Conclusion:** State the main conclusion in your own words before looking at answers.',
      '**Step 6 — Evaluate & Eliminate:** Match your prephrase to the answer choices and eliminate traps.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Confirm the Task' },
    { type: 'paragraph', text: "Always read the question stem first. Confirm that you are being asked for the **main conclusion** or **main point** of the argument—not for a premise, an assumption, or an argument part. This sets your reading lens." },

    { type: 'h4', text: 'Example' },
    { type: 'blockquote', text: '"Which one of the following most accurately expresses the main conclusion of the argument?"' },
    { type: 'paragraph', text: "This is a standard Main Conclusion stem. You now know to read the stimulus looking for the ultimate point." },

    { type: 'callout', variant: 'default', title: 'Common Mistake at Step 1', text: "Don't confuse Main Conclusion with Argument Part. If the stem quotes a specific sentence and asks about its *role*, that is Argument Part (Module 1). Main Conclusion stems ask about the argument *as a whole*." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Read for Structure' },
    { type: 'paragraph', text: "Read the entire stimulus with a structural lens. As you read each sentence, mentally tag it with a role hypothesis. Don't try to memorize the passage—translate each sentence into simple terms and assign a tentative label." },

    { type: 'h4', text: 'Hypothesis Tags' },
    { type: 'table', headers: ['If a statement looks like...', 'Tag it as...', 'Example Signal Words'], rows: [
      ['A factual observation or study result', '**Likely Premise**', '*because, since, studies show*'],
      ['A recommendation, judgment, or prediction', '**Likely Conclusion**', '*should, therefore, thus*'],
      ['An undisputed fact setting the scene', '**Likely Background**', '*It is well known, Historically*'],
      ['A view attributed to someone else', '**Likely Opposing View**', '*Some argue, Critics claim*'],
      ['A point the author concedes', '**Likely Concession**', '*Although, While it is true, Granted*'],
    ]},

    { type: 'h4', text: 'Example' },
    { type: 'blockquote', text: '"Organic farming produces lower yields per acre than conventional farming. However, organic produce commands premium prices and avoids the long-term soil degradation caused by synthetic fertilizers. Therefore, farmers who own their land should consider transitioning to organic methods."' },
    { type: 'paragraph', text: "Quick hypothesis tags:" },
    { type: 'breakdown', labels: { title: 'Sentence', text: 'Hypothesis' }, items: [
      { title: '"Organic farming produces lower yields..."', text: 'A factual observation that seems to work against the conclusion. **Tag: Likely Concession.** The author admits this but will argue past it.', badge: 'Concession', badgeColor: 'slate' },
      { title: '"However, organic produce commands premium prices and avoids soil degradation..."', text: 'A pivot introduced by "However" with supporting facts. **Tag: Likely Premise.** These facts support the recommendation.', badge: 'Premise', badgeColor: 'slate' },
      { title: '"Therefore, farmers who own their land should consider transitioning..."', text: 'A recommendation introduced by "Therefore." **Tag: Likely Conclusion.** This is the ultimate point.', badge: 'Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'callout', variant: 'default', title: 'Common Mistake at Step 2', text: "Don't assume the longest or most detailed sentence is the conclusion. Conclusions are often shorter and more general than premises. The most data-rich sentence is usually a premise providing evidence." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Spot Indicator Words' },
    { type: 'paragraph', text: "Scan the stimulus for structural signal words. These words tell you the logical role of the statements they introduce." },

    { type: 'table', headers: ['Type', 'Indicator Words', 'What They Signal'], rows: [
      ['**Conclusion**', '*Therefore, Thus, So, Hence, Consequently, It follows that*', 'The statement that follows is a claim being argued for'],
      ['**Premise**', '*Because, Since, For, After all, Given that, As evidenced by*', 'The statement that follows is evidence supporting something'],
      ['**Pivot / Contrast**', '*But, However, Yet, Although, Nevertheless, On the other hand*', 'The argument is shifting direction — often from an opposing view to the author\'s position'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Pivot Is Your Best Friend', text: "In nearly half of Main Conclusion questions (the Rebuttal type), the conclusion follows a **pivot word** like \"But\" or \"However.\" When you see a pivot, the author's real position is almost always on the other side of it. Train yourself to treat pivot words as flashing arrows pointing at the conclusion." },

    { type: 'callout', variant: 'default', title: 'Common Mistake at Step 3', text: "Don't over-rely on indicator words. Some conclusions have no indicator word at all. And \"therefore\" can introduce a sub-conclusion rather than the main conclusion. Indicator words narrow your search; the Why Test (Step 4) confirms your answer." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Apply the Why Test' },
    { type: 'paragraph', text: "This is the most critical step. The Why Test is the single most reliable method for confirming whether a statement is the main conclusion, a sub-conclusion, or a premise." },

    { type: 'process', title: 'The Why Test', steps: [
      '**Isolate your candidate:** Pick the sentence you think is the main conclusion.',
      '**Ask "Why is this true?"** — Look at the rest of the stimulus.',
      '**If the argument answers:** The other sentences provide reasons why your candidate is true → Your candidate is the **conclusion**.',
      '**If the argument does NOT answer:** Your candidate provides reasons for a *different* statement → Your candidate is a **premise** or **sub-conclusion**.',
      '**Sub-conclusion check:** If your candidate is both supported by evidence AND supports a further claim, it is a **sub-conclusion**, not the main conclusion. Keep looking for the statement it supports.',
    ]},

    { type: 'h4', text: 'Demonstration' },
    { type: 'blockquote', text: '"Public libraries are essential community resources. They provide free access to information for all citizens regardless of income. They also serve as gathering spaces that strengthen neighborhood bonds. City councils should therefore increase library funding rather than cut it."' },
    { type: 'paragraph', text: "Which statement is the main conclusion?" },

    { type: 'breakdown', labels: { title: 'Candidate', text: 'Why Test Result' }, items: [
      { title: '"Public libraries are essential community resources."', text: '**Ask:** Why are they essential? **Answer:** Because they provide free access to information and serve as gathering spaces. ✓ The argument answers — but does this support something further? Yes: the recommendation about funding. This is a **sub-conclusion**.', badge: 'Sub-Conclusion', badgeColor: 'blue' },
      { title: '"City councils should increase library funding."', text: '**Ask:** Why should they increase funding? **Answer:** Because libraries are essential — they provide free access and strengthen community bonds. ✓ The argument answers, and this statement supports nothing else. This is the **main conclusion**.', badge: 'Main Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'callout', variant: 'default', title: 'Common Mistake at Step 4', text: "The most dangerous trap is stopping at a sub-conclusion. A sub-conclusion *receives* support (so the Why Test works on it), but it *also gives* support to a further claim. Always ask: \"Does my candidate support anything else in the argument?\" If yes, keep looking." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 5: Prephrase the Conclusion' },
    { type: 'paragraph', text: "Before looking at the answer choices, state the main conclusion in your own simple terms. This crucial step creates a mental benchmark that protects you from persuasive-sounding wrong answers." },

    { type: 'h4', text: 'Good Prephrases vs. Weak Prephrases' },
    { type: 'table', headers: ['Weak Prephrase', 'Strong Prephrase', 'Why It Matters'], rows: [
      ['"Something about libraries."', '"City councils should increase library funding."', 'The weak prephrase is too vague to eliminate traps.'],
      ['"The argument is about organic farming."', '"Land-owning farmers should switch to organic methods."', 'Topic identification is not prephrasing — you need the *claim*.'],
      ['"The author disagrees."', '"The belief that Tennyson referenced Darwin is wrong."', 'Name the specific disagreement, not just the fact of disagreement.'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The One-Sentence Rule', text: "Your prephrase should be expressible in a single sentence. If you need multiple sentences, you may be conflating the conclusion with its premises. Strip away the evidence and state only the claim." },

    { type: 'callout', variant: 'default', title: 'Common Mistake at Step 5', text: "Don't skip prephrasing. Students who jump straight to the answer choices are significantly more likely to pick a premise or opposing viewpoint that \"sounds right.\" The 5 seconds spent prephrasing save 30+ seconds of deliberation between tempting wrong answers." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 6: Evaluate & Eliminate' },
    { type: 'paragraph', text: "Scan the five answer choices for the one that matches your prephrase. The LSAT presents the main conclusion in one of four ways:" },

    { type: 'breakdown', labels: { title: 'Answer Type', text: 'Description' }, items: [
      { title: 'Quotation (~15%)', text: 'The answer matches the exact wording of the conclusion from the stimulus. Easy to spot if your prephrase is accurate.', badge: '15%', badgeColor: 'green' },
      { title: 'Paraphrase (~44%)', text: 'The answer restates the conclusion using different wording but preserves the original meaning. This is the most common correct answer type.', badge: '44%', badgeColor: 'indigo' },
      { title: 'Expansion (~39%)', text: 'The answer "fills in" a vague conclusion. If the stimulus says "this view is mistaken," the answer will specify *which* view is mistaken based on context.', badge: '39%', badgeColor: 'blue' },
      { title: 'Inference (~2%)', text: 'The conclusion isn\'t stated in one sentence but is the necessary logical result of the premises. Very rare.', badge: '2%', badgeColor: 'slate' },
    ]},

    { type: 'h4', text: 'The Four Traps to Eliminate' },
    { type: 'paragraph', text: "Wrong answers in Main Conclusion questions almost always fall into one of four categories. Know them and you can eliminate quickly:" },
    { type: 'table', headers: ['Trap Type', 'What It Is', 'How to Spot It'], rows: [
      ['**The Premise**', 'A statement that is true in the argument but serves as *support*, not the main point.', "Apply the Why Test. If the choice answers \"Why?\" for another statement, it's a premise."],
      ['**The Sub-Conclusion**', "A claim that is both supported by evidence AND supports the main conclusion. It's a stepping-stone.", "Check if the choice supports another claim in the argument. If so, it's intermediate."],
      ['**The Opposing Viewpoint**', "The opinion the author is *arguing against*, not the author's own position.", 'Check attribution: is this what "some people" or "critics" believe?'],
      ['**The Distortion**', 'Close to the conclusion but too strong, too weak, or shifted in scope.', 'Compare the scope words: does the answer say "all" when the argument says "some"?'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Elimination Order', text: "Eliminate in this order for maximum efficiency:\n1. **Opposing Viewpoints** — Fastest to spot (look for attribution cues).\n2. **Premises** — Apply the Why Test to any choice that states a fact or study result.\n3. **Distortions** — Compare scope and strength to your prephrase.\n4. **Sub-Conclusions** — Check if the remaining candidate supports a further claim." },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all six steps to a single Main Conclusion question from start to finish." },

    { type: 'question-card',
      id: 'WE-2-2-001',
      questionType: 'Main Conclusion',
      difficulty: 'medium',
      stimulus: "Educator: It is commonly believed that smaller class sizes automatically lead to better student outcomes. But the evidence for this claim is far weaker than most people assume. Studies comparing classes of 15 to classes of 25 show negligible differences in test scores when teacher quality is held constant. The real driver of student achievement is not the number of students in the room but the skill of the teacher at the front of it. School districts would therefore be better served by investing in teacher training programs than in hiring additional staff to reduce class sizes.",
      question: "Which one of the following most accurately expresses the main conclusion of the educator's argument?",
      options: [
        "(A) Smaller class sizes do not automatically lead to better student outcomes.",
        "(B) Studies show negligible differences in test scores between classes of 15 and classes of 25.",
        "(C) Teacher quality is a more significant factor in student achievement than class size.",
        "(D) School districts should invest in teacher training rather than in reducing class sizes. (Correct)",
        "(E) The belief that smaller classes improve education is nearly universal among parents and educators.",
      ],
    },

    { type: 'h3', text: 'Applying the 6-Step Method' },

    { type: 'process', title: 'Step-by-Step Walkthrough', steps: [
      '**Step 1 — Confirm the Task:** The stem asks for the "main conclusion." Confirmed: this is a Main Conclusion question.',
      '**Step 2 — Read for Structure:** Tag each sentence:\n• "It is commonly believed that smaller class sizes..." → Opposing View (attributed to common belief).\n• "But the evidence for this claim is far weaker..." → Author\'s pushback (pivot with "But").\n• "Studies comparing classes of 15 to classes of 25..." → Premise (study data).\n• "The real driver of student achievement is... the skill of the teacher." → Strong claim — Sub-Conclusion candidate.\n• "School districts would therefore be better served by investing in teacher training..." → Recommendation introduced by "therefore" — Conclusion candidate.',
      '**Step 3 — Spot Indicator Words:** "But" signals the pivot from opposing view to the author\'s position. "Therefore" introduces the final recommendation. "Since" / "Because" are absent, but the study data clearly serves as evidence.',
      '**Step 4 — Apply the Why Test:** Candidate: "School districts should invest in teacher training." Why? Because teacher quality is the real driver of achievement, and reducing class sizes shows negligible benefit. ✓ The argument answers. Does this candidate support anything else? No — it is the final destination.',
      '**Step 5 — Prephrase:** "Districts should spend money on teacher training, not on smaller classes."',
      '**Step 6 — Evaluate:** (A) is the rebuttal of the opposing view — a sub-conclusion. (B) is a premise (study data). (C) is another sub-conclusion that supports the recommendation. (D) matches our prephrase — the final recommendation. (E) is background describing the opposing belief. **Answer: (D).**',
    ]},

    { type: 'h3', text: 'Answer Choice Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Smaller class sizes do not automatically lead to better outcomes.', text: 'This is the author\'s pushback against the common belief, but it\'s a stepping-stone to the recommendation. It is a **sub-conclusion** — it supports the further claim that districts should invest in training instead.', badge: 'Trap: Sub-Conclusion', badgeColor: 'red' },
      { title: '(B) Studies show negligible differences in test scores between classes of 15 and 25.', text: 'This is a factual finding from research — a **premise** used as evidence.', badge: 'Trap: Premise', badgeColor: 'red' },
      { title: '(C) Teacher quality is a more significant factor than class size.', text: 'This is a strong claim, but it supports the recommendation (the real main conclusion). It is an **intermediate conclusion**.', badge: 'Trap: Sub-Conclusion', badgeColor: 'red' },
      { title: '(D) School districts should invest in teacher training rather than in reducing class sizes.', text: 'This matches our prephrase. It is the **final recommendation** that all other statements build toward. Nothing in the argument supports a further claim beyond this.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) The belief that smaller classes improve education is nearly universal.', text: 'This is the **opposing viewpoint** that the author is arguing against. It is not the author\'s own claim.', badge: 'Trap: Opposing View', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "The 6-Step Method gives you a repeatable process: **Confirm → Read → Spot → Test → Prephrase → Evaluate.**\n\n• **Prephrasing** is the single most important habit. If you can state the conclusion before reading the answers, your accuracy will increase dramatically.\n• The **Why Test** (Step 4) is the most reliable tool. It catches sub-conclusions that indicator words cannot.\n• Wrong answers almost always fall into four traps: **Premise, Sub-Conclusion, Opposing View, or Distortion**. Knowing these categories lets you eliminate quickly.\n• When in doubt, ask: \"Does my candidate support anything else in the argument?\" If yes, it's not the main conclusion." },
  ]
};
