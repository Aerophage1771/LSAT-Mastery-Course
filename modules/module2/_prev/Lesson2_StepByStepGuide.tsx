import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '2-2',
  title: 'Step-by-Step: Main Conclusion',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Main Conclusion' },
    {
      type: 'paragraph',
      text: 'This lesson provides a complete, repeatable method for solving any Main Conclusion question. Each step includes a concrete example, a tip for when the step gets tricky, and common mistakes to avoid. At the end, you will work through a full example applying all six steps.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing',
      text: 'You should spend roughly **1 minute and 15 seconds** per Main Conclusion question. These questions are designed to be solved quickly once you have a reliable method. If you are spending more than 90 seconds, you are likely overthinking the structure. Timed drilling is the fastest way to internalize the process.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    {
      type: 'process',
      title: 'The 6-Step Method',
      steps: [
        '**Step 1 \u2014 Confirm the Task:** Read the question stem and confirm you are looking for the main conclusion.',
        '**Step 2 \u2014 Read for Structure:** Read the stimulus, tagging each sentence as premise, conclusion, background, or opposing view.',
        "**Step 3 \u2014 Spot Indicator Words:** Use conclusion, premise, and pivot indicators to map the argument's flow.",
        '**Step 4 \u2014 Apply the Why Test:** Isolate your candidate conclusion and verify it with the Why Test.',
        '**Step 5 \u2014 Prephrase the Conclusion:** State the main conclusion in your own words before looking at answers.',
        '**Step 6 \u2014 Evaluate & Eliminate:** Match your prephrase to the answer choices and eliminate traps.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Confirm the Task' },
    {
      type: 'paragraph',
      text: 'Always read the question stem first. Confirm that you are being asked for the **main conclusion** or **main point** of the argument\u2014not for a premise, an assumption, or an argument part. This sets your reading lens.',
    },

    { type: 'h4', text: 'Example' },
    {
      type: 'blockquote',
      text: '"Which one of the following most accurately expresses the main conclusion of the argument?"',
    },
    {
      type: 'paragraph',
      text: 'This is a standard Main Conclusion stem. You now know to read the stimulus looking for the ultimate point.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Common Mistake at Step 1',
      text: "Don't confuse Main Conclusion with Argument Part. If the stem quotes a specific sentence and asks about its *role*, that is Argument Part (Module 1). Main Conclusion stems ask about the argument *as a whole*.",
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Read for Structure' },
    {
      type: 'paragraph',
      text: "Read the entire stimulus with a structural lens. As you read each sentence, mentally tag it with a role hypothesis. Don't try to memorize the passage\u2014translate each sentence into simple terms and assign a tentative label.",
    },

    { type: 'h4', text: 'Hypothesis Tags' },
    {
      type: 'table',
      headers: ['If a statement looks like...', 'Tag it as...', 'Example Signal Words'],
      rows: [
        ['A factual observation or study result', '**Likely Premise**', '*because, since, studies show*'],
        ['A recommendation, judgment, or prediction', '**Likely Conclusion**', '*should, therefore, thus*'],
        ['An undisputed fact setting the scene', '**Likely Background**', '*It is well known, Historically*'],
        ['A view attributed to someone else', '**Likely Opposing View**', '*Some argue, Critics claim*'],
        ['A point the author concedes', '**Likely Concession**', '*Although, While it is true, Granted*'],
      ],
    },

    { type: 'h4', text: 'Example' },
    {
      type: 'blockquote',
      text: '"Organic farming produces lower yields per acre than conventional farming. However, organic produce commands premium prices and avoids the long-term soil degradation caused by synthetic fertilizers. Therefore, farmers who own their land should consider transitioning to organic methods."',
    },
    { type: 'paragraph', text: 'Quick hypothesis tags:' },
    {
      type: 'breakdown',
      labels: { title: 'Sentence', text: 'Hypothesis' },
      items: [
        {
          title: '"Organic farming produces lower yields..."',
          text: 'A factual observation that seems to work against the conclusion. **Tag: Likely Concession.** The author admits this but will argue past it.',
          badge: 'Concession',
          badgeColor: 'slate',
        },
        {
          title: '"However, organic produce commands premium prices and avoids soil degradation..."',
          text: 'A pivot introduced by "However" with supporting facts. **Tag: Likely Premise.** These facts support the recommendation.',
          badge: 'Premise',
          badgeColor: 'slate',
        },
        {
          title: '"Therefore, farmers who own their land should consider transitioning..."',
          text: 'A recommendation introduced by "Therefore." **Tag: Likely Conclusion.** This is the ultimate point.',
          badge: 'Conclusion',
          badgeColor: 'indigo',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Common Mistake at Step 2',
      text: "Don't assume the longest or most detailed sentence is the conclusion. Conclusions are often shorter and more general than premises. The most data-rich sentence is usually a premise providing evidence.",
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Spot Indicator Words' },
    {
      type: 'paragraph',
      text: 'Scan the stimulus for structural signal words. These words tell you the logical role of the statements they introduce.',
    },

    {
      type: 'table',
      headers: ['Type', 'Indicator Words', 'What They Signal'],
      rows: [
        [
          '**Conclusion**',
          '*Therefore, Thus, So, Hence, Consequently, It follows that*',
          'The statement that follows is a claim being argued for',
        ],
        [
          '**Premise**',
          '*Because, Since, For, After all, Given that, As evidenced by*',
          'The statement that follows is evidence supporting something',
        ],
        [
          '**Pivot / Contrast**',
          '*But, However, Yet, Although, Nevertheless, On the other hand*',
          "The argument is shifting direction \u2014 often from an opposing view to the author's position",
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The Pivot Is Your Best Friend',
      text: 'In nearly half of Main Conclusion questions (the Rebuttal type), the conclusion follows a **pivot word** like "But" or "However." When you see a pivot, the author\'s real position is almost always on the other side of it. Train yourself to treat pivot words as flashing arrows pointing at the conclusion.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Common Mistake at Step 3',
      text: 'Don\'t over-rely on indicator words. Some conclusions have no indicator word at all. And "therefore" can introduce a sub-conclusion rather than the main conclusion. Indicator words narrow your search; the Why Test (Step 4) confirms your answer.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Apply the Why Test' },
    {
      type: 'paragraph',
      text: 'This is the most critical step. The Why Test is the single most reliable method for confirming whether a statement is the main conclusion, a sub-conclusion, or a premise.',
    },

    {
      type: 'process',
      title: 'The Why Test',
      steps: [
        '**Isolate your candidate:** Pick the sentence you think is the main conclusion.',
        '**Ask "Why is this true?"** \u2014 Look at the rest of the stimulus.',
        '**If the argument answers:** The other sentences provide reasons why your candidate is true \u2192 Your candidate is the **conclusion**.',
        '**If the argument does NOT answer:** Your candidate provides reasons for a *different* statement \u2192 Your candidate is a **premise** or **sub-conclusion**.',
        '**Sub-conclusion check:** If your candidate is both supported by evidence AND supports a further claim, it is a **sub-conclusion**, not the main conclusion. Keep looking for the statement it supports.',
      ],
    },

    { type: 'h4', text: 'Demonstration' },
    {
      type: 'blockquote',
      text: '"Public libraries are essential community resources. They provide free access to information for all citizens regardless of income. They also serve as gathering spaces that strengthen neighborhood bonds. City councils should therefore increase library funding rather than cut it."',
    },
    { type: 'paragraph', text: 'Which statement is the main conclusion?' },

    {
      type: 'breakdown',
      labels: { title: 'Candidate', text: 'Why Test Result' },
      items: [
        {
          title: '"Public libraries are essential community resources."',
          text: '**Ask:** Why are they essential? **Answer:** Because they provide free access to information and serve as gathering spaces. \u2713 The argument answers \u2014 but does this support something further? Yes: the recommendation about funding. This is a **sub-conclusion**.',
          badge: 'Sub-Conclusion',
          badgeColor: 'blue',
        },
        {
          title: '"City councils should increase library funding."',
          text: '**Ask:** Why should they increase funding? **Answer:** Because libraries are essential \u2014 they provide free access and strengthen community bonds. \u2713 The argument answers, and this statement supports nothing else. This is the **main conclusion**.',
          badge: 'Main Conclusion',
          badgeColor: 'indigo',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Common Mistake at Step 4',
      text: 'The most dangerous trap is stopping at a sub-conclusion. A sub-conclusion *receives* support (so the Why Test works on it), but it *also gives* support to a further claim. Always ask: "Does my candidate support anything else in the argument?" If yes, keep looking.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 5: Prephrase the Conclusion' },
    {
      type: 'paragraph',
      text: 'Before looking at the answer choices, state the main conclusion in your own simple terms. This crucial step creates a mental benchmark that protects you from persuasive-sounding wrong answers.',
    },

    { type: 'h4', text: 'Good Prephrases vs. Weak Prephrases' },
    {
      type: 'table',
      headers: ['Weak Prephrase', 'Strong Prephrase', 'Why It Matters'],
      rows: [
        [
          '"Something about libraries."',
          '"City councils should increase library funding."',
          'The weak prephrase is too vague to eliminate traps.',
        ],
        [
          '"The argument is about organic farming."',
          '"Land-owning farmers should switch to organic methods."',
          'Topic identification is not prephrasing \u2014 you need the *claim*.',
        ],
        [
          '"The author disagrees."',
          '"The belief that Tennyson referenced Darwin is wrong."',
          'Name the specific disagreement, not just the fact of disagreement.',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The One-Sentence Rule',
      text: 'Your prephrase should be expressible in a single sentence. If you need multiple sentences, you may be conflating the conclusion with its premises. Strip away the evidence and state only the claim.',
    },

    { type: 'h4', text: 'Answer-Side Translation' },
    {
      type: 'paragraph',
      text: 'Prephrasing is only half the job. On many Main Conclusion questions, the credited answer does not sound identical to your prephrase because it translates the conclusion into cleaner answer-choice language. You need a repeatable method for recognizing when an answer is saying the same thing in a more explicit or compressed way.',
    },
    {
      type: 'process',
      title: 'The Translation Check',
      steps: [
        '**Resolve referentials.** If the stimulus says "this claim," "that view," or "such a policy," identify the full idea those words point to before you compare answers.',
        '**Allow implicit \u2192 explicit wording.** If the conclusion says "this view is mistaken," the credited answer may name the view directly instead of repeating the vague phrase.',
        '**Allow comparative rewrites.** "More likely A than B" can become "Less likely B than A." "Better than" can become "worse than the alternative."',
        '**Keep the author\'s real commitment level.** A good paraphrase may sharpen the wording, but it cannot add certainty the author never expressed.',
        '**Prefer the best-supported paraphrase, not the prettiest sentence.** If no answer sounds perfect, choose the one that preserves the conclusion\'s subject, scope, certainty, and logical direction most faithfully.',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Common Mistake at Step 5',
      text: 'Don\'t skip prephrasing. Students who jump straight to the answer choices are significantly more likely to pick a premise or opposing viewpoint that "sounds right." The 5 seconds spent prephrasing save 30+ seconds of deliberation between tempting wrong answers.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 6: Evaluate & Eliminate' },
    {
      type: 'paragraph',
      text: 'Scan the five answer choices for the one that matches your prephrase. The LSAT presents the main conclusion in one of four ways:',
    },

    {
      type: 'breakdown',
      labels: { title: 'Answer Type', text: 'Description' },
      items: [
        {
          title: 'Quotation (~15%)',
          text: 'The answer matches the exact wording of the conclusion from the stimulus. Easy to spot if your prephrase is accurate.',
          badge: '15%',
          badgeColor: 'green',
        },
        {
          title: 'Paraphrase (~44%)',
          text: 'The answer restates the conclusion using different wording but preserves the original meaning. This is the most common correct answer type.',
          badge: '44%',
          badgeColor: 'indigo',
        },
        {
          title: 'Expansion (~39%)',
          text: 'The answer "fills in" a vague conclusion. If the stimulus says "this view is mistaken," the answer will specify *which* view is mistaken based on context.',
          badge: '39%',
          badgeColor: 'blue',
        },
        {
          title: 'Inference (~2%)',
          text: "The conclusion isn't stated in one sentence but is the necessary logical result of the premises. Very rare.",
          badge: '2%',
          badgeColor: 'slate',
        },
      ],
    },

    { type: 'h4', text: 'When No Answer Sounds Perfect' },
    {
      type: 'paragraph',
      text: 'Hard Main Conclusion questions often feel uncomfortable because none of the five answers repeats your prephrase exactly. That does **not** mean the question is ambiguous. It means you need to compare how each choice translates the conclusion.',
    },
    {
      type: 'table',
      headers: ['Translation Issue', 'Accept It When...', 'Eliminate It When...'],
      rows: [
        [
          '**Referential expansion**',
          'The answer simply names the vague claim or group that the stimulus referred to indirectly.',
          'The answer names the wrong view, speaker, or object.',
        ],
        [
          '**Implicit \u2192 explicit**',
          'The answer states clearly what the stimulus implied as the author\'s point.',
          'The answer adds a new premise or assumption the author never committed to.',
        ],
        [
          '**Comparative rewrite**',
          'The answer preserves the same comparison in equivalent language.',
          'The answer changes the baseline, direction, or strength of the comparison.',
        ],
        [
          '**Best-supported paraphrase**',
          'The answer is not elegant, but it is the closest match on subject, scope, certainty, and logic.',
          'A different answer preserves those features better, even if it sounds less familiar.',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'POE on Translation Questions',
      text: 'If no answer looks like a clean quotation, switch into POE mode: eliminate the choice with the wrong **speaker**, then the wrong **subject**, then the wrong **scope/certainty**, then the wrong **direction**. The survivor is usually the credited paraphrase even if it initially feels less natural than a trap.',
    },

    { type: 'h4', text: 'The Four Traps to Eliminate' },
    {
      type: 'paragraph',
      text: 'Wrong answers in Main Conclusion questions almost always fall into one of four categories. Know them and you can eliminate quickly:',
    },
    {
      type: 'table',
      headers: ['Trap Type', 'What It Is', 'How to Spot It'],
      rows: [
        [
          '**The Premise**',
          'A statement that is true in the argument but serves as *support*, not the main point.',
          'Apply the Why Test. If the choice answers "Why?" for another statement, it\'s a premise.',
        ],
        [
          '**The Sub-Conclusion**',
          "A claim that is both supported by evidence AND supports the main conclusion. It's a stepping-stone.",
          "Check if the choice supports another claim in the argument. If so, it's intermediate.",
        ],
        [
          '**The Opposing Viewpoint**',
          "The opinion the author is *arguing against*, not the author's own position.",
          'Check attribution: is this what "some people" or "critics" believe?',
        ],
        [
          '**The Distortion**',
          'Close to the conclusion but too strong, too weak, or shifted in scope.',
          'Compare the scope words: does the answer say "all" when the argument says "some"?',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Elimination Order',
      text: 'Eliminate in this order for maximum efficiency:\n1. **Opposing Viewpoints** \u2014 Fastest to spot (look for attribution cues).\n2. **Premises** \u2014 Apply the Why Test to any choice that states a fact or study result.\n3. **Distortions** \u2014 Compare scope and strength to your prephrase.\n4. **Sub-Conclusions** \u2014 Check if the remaining candidate supports a further claim.',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Method Summary',
      text: '**The 6-Step Method: Confirm \u2192 Read \u2192 Spot \u2192 Test \u2192 Prephrase \u2192 Evaluate.**\n\nPrephrasing is the single most important habit. The Why Test is the most reliable confirmation tool. Wrong answers almost always fall into four traps: Premise, Sub-Conclusion, Opposing View, or Distortion. Continue to the next lesson for a full worked example applying all six steps from start to finish.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "The 6-Step Method for Main Conclusion Questions"
        },
        {
          "type": "paragraph",
          "text": "This lesson provides a complete, repeatable method for solving any Main Conclusion question. Each step includes a concrete example, a tip for when the step gets tricky, and common mistakes to avoid. At the end, you will work through a full example applying all six steps."
        },
        {
          "type": "callout",
          "title": "Timing",
          "variant": "tip",
          "text": "You should spend roughly **1 minute and 15 seconds** per Main Conclusion question. These questions are designed to be solved quickly once you have a reliable method. If you are spending more than 90 seconds, you are likely overthinking the structure. Timed drilling is the fastest way to internalize the process. {{+Consider adding per-step time targets: ~5s for Step 1, ~20s for Step 2, ~10s for Step 3, ~15s for Step 4, ~10s for Step 5, ~15s for Step 6.+}}"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Overview"
        },
        {
          "type": "process",
          "title": "The 6-Step Method",
          "steps": [
            "**Step 1 — Confirm the Task:** Read the question stem and confirm you are looking for the main conclusion.",
            "**Step 2 — Read for Structure:** Read the stimulus, tagging each sentence as premise, conclusion, background, or opposing view.",
            "**Step 3 — Spot Indicator Words:** Use conclusion, premise, and pivot indicators to map the argument's flow.",
            "**Step 4 — Apply the Why Test:** Isolate your candidate conclusion and verify it with the Why Test.",
            "**Step 5 — Prephrase the Conclusion:** State the main conclusion in your own words before looking at answers.",
            "**Step 6 — Evaluate & Eliminate:** Match your prephrase to the answer choices and eliminate traps."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 1: Confirm the Task"
        },
        {
          "type": "paragraph",
          "text": "Always read the question stem first. Confirm that you are being asked for the **main conclusion** or **main point** of the argument—not for a premise, an assumption, or an argument part. This sets your reading lens."
        },
        {
          "type": "h4",
          "text": "Example"
        },
        {
          "type": "blockquote",
          "text": "\"Which one of the following most accurately expresses the main conclusion of the argument?\""
        },
        {
          "type": "paragraph",
          "text": "This is a standard Main Conclusion stem. You now know to read the stimulus looking for the ultimate point."
        },
        {
          "type": "callout",
          "title": "Common Mistake at Step 1",
          "variant": "default",
          "text": "Don't confuse Main Conclusion with Argument Part. If the stem quotes a specific sentence and asks about its *role*, that is Argument Part (Module 1). Main Conclusion stems ask about the argument *as a whole*."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 2: Read for Structure"
        },
        {
          "type": "paragraph",
          "text": "Read the entire stimulus with a structural lens. As you read each sentence, mentally tag it with a role hypothesis. Don't try to memorize the passage—translate each sentence into simple terms and assign a tentative label."
        },
        {
          "type": "h4",
          "text": "Hypothesis Tags"
        },
        {
          "type": "table",
          "headers": [
            "If a statement looks like...",
            "Tag it as...",
            "Example Signal Words"
          ],
          "rows": [
            [
              "A factual observation or study result",
              "**Likely Premise**",
              "*because, since, studies show*"
            ],
            [
              "A recommendation, judgment, or prediction",
              "**Likely Conclusion**",
              "*should, therefore, thus*"
            ],
            [
              "An undisputed fact setting the scene",
              "**Likely Background**",
              "*It is well known, Historically*"
            ],
            [
              "A view attributed to someone else",
              "**Likely Opposing View**",
              "*Some argue, Critics claim*"
            ],
            [
              "A point the author concedes",
              "**Likely Concession**",
              "*Although, While it is true, Granted*"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Example"
        },
        {
          "type": "blockquote",
          "text": "\"Organic farming produces lower yields per acre than conventional farming. However, organic produce commands premium prices and avoids the long-term soil degradation caused by synthetic fertilizers. Therefore, farmers who own their land should consider transitioning to organic methods.\""
        },
        {
          "type": "paragraph",
          "text": "Quick hypothesis tags:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Sentence",
            "text": "Hypothesis"
          },
          "items": [
            {
              "title": "\"Organic farming produces lower yields...\"",
              "text": "A factual observation that seems to work against the conclusion. **Tag: Likely Concession.** The author admits this but will argue past it.",
              "badge": "Concession",
              "badgeColor": "slate"
            },
            {
              "title": "\"However, organic produce commands premium prices and avoids soil degradation...\"",
              "text": "A pivot introduced by \"However\" with supporting facts. **Tag: Likely Premise.** These facts support the recommendation.",
              "badge": "Premise",
              "badgeColor": "slate"
            },
            {
              "title": "\"Therefore, farmers who own their land should consider transitioning...\"",
              "text": "A recommendation introduced by \"Therefore.\" **Tag: Likely Conclusion.** This is the ultimate point.",
              "badge": "Conclusion",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Common Mistake at Step 2",
          "variant": "default",
          "text": "Don't assume the longest or most detailed sentence is the conclusion. Conclusions are often shorter and more general than premises. The most data-rich sentence is usually a premise providing evidence."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 3: Spot Indicator Words"
        },
        {
          "type": "paragraph",
          "text": "Scan the stimulus for structural signal words. These words tell you the logical role of the statements they introduce."
        },
        {
          "type": "table",
          "headers": [
            "Type",
            "Indicator Words",
            "What They Signal"
          ],
          "rows": [
            [
              "**Conclusion**",
              "*Therefore, Thus, So, Hence, Consequently, It follows that*",
              "The statement that follows is a claim being argued for"
            ],
            [
              "**Premise**",
              "*Because, Since, For, After all, Given that, As evidenced by*",
              "The statement that follows is evidence supporting something"
            ],
            [
              "**Pivot / Contrast**",
              "*But, However, Yet, Although, Nevertheless, On the other hand*",
              "The argument is shifting direction — often from an opposing view to the author's position"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Pivot Is Your Best Friend",
          "variant": "tip",
          "text": "In nearly half of Main Conclusion questions (the Rebuttal type), the conclusion follows a **pivot word** like \"But\" or \"However.\" When you see a pivot, the author's real position is almost always on the other side of it. Train yourself to treat pivot words as flashing arrows pointing at the conclusion."
        },
        {
          "type": "callout",
          "title": "Common Mistake at Step 3",
          "variant": "default",
          "text": "Don't over-rely on indicator words. Some conclusions have no indicator word at all. And \"therefore\" can introduce a sub-conclusion rather than the main conclusion. Indicator words narrow your search; the Why Test (Step 4) confirms your answer."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 4: Apply the Why Test"
        },
        {
          "type": "paragraph",
          "text": "This is the most critical step. The Why Test is the single most reliable method for confirming whether a statement is the main conclusion, a sub-conclusion, or a premise."
        },
        {
          "type": "process",
          "title": "The Why Test",
          "steps": [
            "**Isolate your candidate:** Pick the sentence you think is the main conclusion.",
            "**Ask \"Why is this true?\"** — Look at the rest of the stimulus.",
            "**If the argument answers:** The other sentences provide reasons why your candidate is true → Your candidate is the **conclusion**.",
            "**If the argument does NOT answer:** Your candidate provides reasons for a *different* statement → Your candidate is a **premise** or **sub-conclusion**.",
            "**Sub-conclusion check:** If your candidate is both supported by evidence AND supports a further claim, it is a **sub-conclusion**, not the main conclusion. Keep looking for the statement it supports."
          ]
        },
        {
          "type": "h4",
          "text": "Demonstration"
        },
        {
          "type": "blockquote",
          "text": "\"Public libraries are essential community resources. They provide free access to information for all citizens regardless of income. They also serve as gathering spaces that strengthen neighborhood bonds. City councils should therefore increase library funding rather than cut it.\""
        },
        {
          "type": "paragraph",
          "text": "Which statement is the main conclusion?"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Candidate",
            "text": "Why Test Result"
          },
          "items": [
            {
              "title": "\"Public libraries are essential community resources.\"",
              "text": "**Ask:** Why are they essential? **Answer:** Because they provide free access to information and serve as gathering spaces. ✓ The argument answers — but does this support something further? Yes: the recommendation about funding. This is a **sub-conclusion**.",
              "badge": "Sub-Conclusion",
              "badgeColor": "blue"
            },
            {
              "title": "\"City councils should increase library funding.\"",
              "text": "**Ask:** Why should they increase funding? **Answer:** Because libraries are essential — they provide free access and strengthen community bonds. ✓ The argument answers, and this statement supports nothing else. This is the **main conclusion**.",
              "badge": "Main Conclusion",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Common Mistake at Step 4",
          "variant": "default",
          "text": "The most dangerous trap is stopping at a sub-conclusion. A sub-conclusion *receives* support (so the Why Test works on it), but it *also gives* support to a further claim. Always ask: \"Does my candidate support anything else in the argument?\" If yes, keep looking."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 5: Prephrase the Conclusion"
        },
        {
          "type": "paragraph",
          "text": "Before looking at the answer choices, state the main conclusion in your own simple terms. This crucial step creates a mental benchmark that protects you from persuasive-sounding wrong answers."
        },
        {
          "type": "h4",
          "text": "Good Prephrases vs. Weak Prephrases"
        },
        {
          "type": "table",
          "headers": [
            "Weak Prephrase",
            "Strong Prephrase",
            "Why It Matters"
          ],
          "rows": [
            [
              "\"Something about libraries.\"",
              "\"City councils should increase library funding.\"",
              "The weak prephrase is too vague to eliminate traps."
            ],
            [
              "\"The argument is about organic farming.\"",
              "\"Land-owning farmers should switch to organic methods.\"",
              "Topic identification is not prephrasing — you need the *claim*."
            ],
            [
              "\"The author disagrees.\"",
              "\"The belief that Tennyson referenced Darwin is wrong.\"",
              "Name the specific disagreement, not just the fact of disagreement."
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The One-Sentence Rule",
          "variant": "tip",
          "text": "Your prephrase should be expressible in a single sentence. If you need multiple sentences, you may be conflating the conclusion with its premises. Strip away the evidence and state only the claim."
        },
        {
          "type": "callout",
          "title": "Common Mistake at Step 5",
          "variant": "default",
          "text": "Don't skip prephrasing. Students who jump straight to the answer choices are significantly more likely to pick a premise or opposing viewpoint that \"sounds right.\" The 5 seconds spent prephrasing save 30+ seconds of deliberation between tempting wrong answers."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 6: Evaluate & Eliminate"
        },
        {
          "type": "paragraph",
          "text": "Scan the five answer choices for the one that matches your prephrase. The LSAT presents the main conclusion in one of four ways:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Answer Type",
            "text": "Description"
          },
          "items": [
            {
              "title": "Quotation (~15%)",
              "text": "The answer matches the exact wording of the conclusion from the stimulus. Easy to spot if your prephrase is accurate.",
              "badge": "15%",
              "badgeColor": "green"
            },
            {
              "title": "Paraphrase (~44%)",
              "text": "The answer restates the conclusion using different wording but preserves the original meaning. This is the most common correct answer type.",
              "badge": "44%",
              "badgeColor": "indigo"
            },
            {
              "title": "Expansion (~39%)",
              "text": "The answer \"fills in\" a vague conclusion. If the stimulus says \"this view is mistaken,\" the answer will specify *which* view is mistaken based on context.",
              "badge": "39%",
              "badgeColor": "blue"
            },
            {
              "title": "Inference (~2%)",
              "text": "The conclusion isn't stated in one sentence but is the necessary logical result of the premises. Very rare.",
              "badge": "2%",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "h4",
          "text": "The Four Traps to Eliminate"
        },
        {
          "type": "paragraph",
          "text": "Wrong answers in Main Conclusion questions almost always fall into one of four categories. Know them and you can eliminate quickly:"
        },
        {
          "type": "table",
          "headers": [
            "Trap Type",
            "What It Is",
            "How to Spot It"
          ],
          "rows": [
            [
              "**The Premise**",
              "A statement that is true in the argument but serves as *support*, not the main point.",
              "Apply the Why Test. If the choice answers \"Why?\" for another statement, it's a premise."
            ],
            [
              "**The Sub-Conclusion**",
              "A claim that is both supported by evidence AND supports the main conclusion. It's a stepping-stone.",
              "Check if the choice supports another claim in the argument. If so, it's intermediate."
            ],
            [
              "**The Opposing Viewpoint**",
              "The opinion the author is *arguing against*, not the author's own position.",
              "Check attribution: is this what \"some people\" or \"critics\" believe?"
            ],
            [
              "**The Distortion**",
              "Close to the conclusion but too strong, too weak, or shifted in scope.",
              "Compare the scope words: does the answer say \"all\" when the argument says \"some\"?"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Elimination Order",
          "variant": "tip",
          "text": "Eliminate in this order for maximum efficiency:\n1. **Opposing Viewpoints** — Fastest to spot (look for attribution cues).\n2. **Premises** — Apply the Why Test to any choice that states a fact or study result.\n3. **Distortions** — Compare scope and strength to your prephrase.\n4. **Sub-Conclusions** — Check if the remaining candidate supports a further claim."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Full Worked Example"
        },
        {
          "type": "paragraph",
          "text": "Let's apply all six steps to a single Main Conclusion question from start to finish."
        },
        {
          "type": "diff-note",
          "text": "Add a question-card here so students can attempt the question independently before the walkthrough. The current format only shows the analysis, never the question itself.",
          "variant": "add"
        },
        {
          "type": "paragraph",
          "text": "{{~Use the method on a representative argument like this: an educator challenges the popular belief that smaller class sizes automatically improve outcomes, cites studies showing negligible score differences once teacher quality is controlled, and ends by recommending investment in teacher training instead of smaller classes.~}} {{!This describes the argument narratively rather than presenting an actual stimulus with answer choices. Replace with a real blockquote stimulus and a question-card so students can practice the evaluate-and-eliminate step.!}} That structure gives you opposing view, premises, sub-conclusion, and final recommendation all in one stimulus."
        },
        {
          "type": "h3",
          "text": "Applying the 6-Step Method"
        },
        {
          "type": "process",
          "title": "Step-by-Step Walkthrough",
          "steps": [
            "**Step 1 — Confirm the Task:** The stem asks for the \"main conclusion.\" Confirmed: this is a Main Conclusion question.",
            "**Step 2 — Read for Structure:** Tag each sentence:\n• \"It is commonly believed that smaller class sizes...\" → Opposing View (attributed to common belief).\n• \"But the evidence for this claim is far weaker...\" → Author's pushback (pivot with \"But\").\n• \"Studies comparing classes of 15 to classes of 25...\" → Premise (study data).\n• \"The real driver of student achievement is... the skill of the teacher.\" → Strong claim — Sub-Conclusion candidate.\n• \"School districts would therefore be better served by investing in teacher training...\" → Recommendation introduced by \"therefore\" — Conclusion candidate.",
            "**Step 3 — Spot Indicator Words:** \"But\" signals the pivot from opposing view to the author's position. \"Therefore\" introduces the final recommendation. \"Since\" / \"Because\" are absent, but the study data clearly serves as evidence.",
            "**Step 4 — Apply the Why Test:** Candidate: \"School districts should invest in teacher training.\" Why? Because teacher quality is the real driver of achievement, and reducing class sizes shows negligible benefit. ✓ The argument answers. Does this candidate support anything else? No — it is the final destination.",
            "**Step 5 — Prephrase:** \"Districts should spend money on teacher training, not on smaller classes.\"",
            "**Step 6 — Evaluate:** Separate the opposing view, the research evidence, and the teacher-quality sub-conclusion from the final recommendation. The main conclusion is the only statement that every other major claim is working to support."
          ]
        },
        {
          "type": "callout",
          "title": "Final Check",
          "variant": "default",
          "text": "In a stimulus like this one, the most tempting traps are the study data itself, the author's rebuttal of the popular belief, and the sub-conclusion about teacher quality. All of those matter, but they matter because they support the final policy recommendation. That recommendation is the real main conclusion."
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "The 6-Step Method gives you a repeatable process: **Confirm → Read → Spot → Test → Prephrase → Evaluate.**\n\n• **Prephrasing** is the single most important habit. If you can state the conclusion before reading the answers, your accuracy will increase dramatically.\n• The **Why Test** (Step 4) is the most reliable tool. It catches sub-conclusions that indicator words cannot.\n• Wrong answers almost always fall into four traps: **Premise, Sub-Conclusion, Opposing View, or Distortion**. Knowing these categories lets you eliminate quickly.\n• When in doubt, ask: \"Does my candidate support anything else in the argument?\" If yes, it's not the main conclusion.\n{{+• **Note:** The Reference Guide condenses this into a 5-step version (merging Confirm and Read into one step). Both approaches capture the same logic -- use whichever fits your pace.+}}"
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        { type: 'h3', text: 'Main Conclusion \u2014 Playbook' },
        {
          type: 'callout',
          variant: 'tip',
          text: '**Target:** 1:15 per Main Conclusion question',
        },
        { type: 'h3', text: 'The Method' },
        {
          type: 'process',
          steps: [
            '**Confirm the task.** Verify the question asks for the main conclusion, not a premise or intermediate step.',
            '**Read for structure.** Identify which claims support which \u2014 don\'t get absorbed in content.',
            '**Spot indicator words.** "Therefore," "thus," "so" point to conclusions; "because," "since" point to premises.',
            '**Apply the Why Test.** Ask: "Why does the author believe X?" If Y answers it, X is the conclusion.',
            '**Prephrase the conclusion.** State the main point in your own words before reading choices.',
            '**Evaluate and eliminate.** Match your prephrase. Reject premises, intermediate conclusions, and scope shifts.',
          ],
        },
        { type: 'h3', text: 'Decision Table' },
        {
          type: 'table',
          headers: ['If You See', 'Then Do', 'Watch Out For'],
          rows: [
            [
              '**Rebuttal** (but / however)',
              'The conclusion is almost always the sentence after the pivot word',
              'Picking the opposing view that appears before the pivot',
            ],
            [
              '**Prescription** (should / ought)',
              'The recommendation or value judgment is the conclusion',
              'Confusing the problem description with the recommendation',
            ],
            [
              '**Explanation** (because + causal)',
              'The proposed cause is the conclusion, not the phenomenon it explains',
              'Treating the observed phenomenon as the conclusion',
            ],
            [
              '**Prediction** (will / likely)',
              'The forward-looking claim is the conclusion; trend data is the premise',
              'Selecting the trend data instead of the prediction it supports',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Confirm \u2192 Structure \u2192 Indicators \u2192 Why Test \u2192 Prephrase \u2192 Eliminate**',
        },
      ],
    },
  },
};
