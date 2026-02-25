import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "15-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'The 4-Step Method for Fill in the Blank Questions' },
    { type: 'paragraph', text: 'This lesson provides a complete, repeatable method for solving any Fill in the Blank question. Each step includes concrete guidance, and the lesson concludes with a full worked example applying all four steps from start to finish.' },

    { type: 'callout', variant: 'tip', title: 'Timing', text: 'You should spend roughly **1 minute and 20 seconds** per Fill in the Blank question. These questions reward strong prephrasing, so invest the majority of your time reading the premises carefully and forming a prediction. If your prediction is sharp, evaluating the answer choices takes only seconds.' },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 — Read the Premises:** Identify every statement before the blank and understand how they connect.',
      '**Step 2 — Identify the Gap:** Determine what logical role the blank plays (conclusion or premise) and what type of reasoning the argument uses.',
      '**Step 3 — Prephrase the Conclusion:** Synthesize the premises into a clear prediction of what should fill the blank.',
      '**Step 4 — Match the Answer:** Find the choice that aligns with your prediction and eliminate traps.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Read the Premises' },
    { type: 'paragraph', text: 'Begin by reading the entire stimulus with one goal: understand every statement that precedes the blank. These are your premises. Translate complex language into simple terms and note how each premise relates to the others.' },
    { type: 'list', items: [
      '**Simplify as you read.** Turn academic or technical language into plain English. "The municipality\'s fiscal constraints preclude additional capital expenditures" becomes "the city can\'t spend more money."',
      '**Track the key terms.** Identify the core nouns and concepts that the argument revolves around. The conclusion will almost certainly reference these same terms.',
      '**Note the direction.** Is the argument building toward a positive claim, a negative claim, a comparison, or a recommendation? The direction of the premises predicts the direction of the conclusion.',
    ]},
    { type: 'callout', variant: 'default', title: 'Critical Habit', text: 'Do NOT look at the answer choices yet. Reading the choices before forming a prediction biases your thinking and makes you vulnerable to attractive-sounding wrong answers. The premises contain all the information you need.' },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: 'Before you can fill the blank, you must understand what kind of statement belongs there. This step takes only a few seconds but determines your entire approach.' },

    { type: 'h4', text: 'Classify the Blank' },
    { type: 'paragraph', text: 'Look at the word immediately before the blank:' },
    { type: 'table', headers: ['If you see...', 'The blank is a...', 'Your task'], rows: [
      ['Therefore, _______ / Thus, _______ / Hence, _______ / So, _______', '**Conclusion**', 'Synthesize the premises into the argument\'s endpoint'],
      ['...since _______ / ...because _______ / ...for _______', '**Premise**', 'Find the evidence that supports the already-stated conclusion'],
    ]},

    { type: 'h4', text: 'Identify the Reasoning Pattern' },
    { type: 'paragraph', text: 'Once you know the blank\'s role, identify the argument\'s reasoning pattern. This sharpens your prediction dramatically.' },
    { type: 'breakdown', labels: { title: 'Pattern', text: 'What to Expect in the Blank' }, items: [
      { title: 'Causal Chain', text: 'The premises describe a sequence of causes and effects. The blank states the final effect in the chain. Follow the dominoes forward.', badge: 'A causes B, B causes C → blank = A causes C', badgeColor: 'green' },
      { title: 'Analogy', text: 'The premises establish a parallel between two subjects. The blank applies a known fact about the first subject to the second. Map the relationship precisely.', badge: 'X is like Y; X has property P → blank = Y has property P', badgeColor: 'blue' },
      { title: 'Rule Application', text: 'The premises state a general rule and a specific case that meets the rule\'s conditions. The blank applies the rule to that case.', badge: 'If A then B; this is A → blank = this is B', badgeColor: 'blue' },
      { title: 'Problem-Solution', text: 'The premises describe a problem and constraints. The blank recommends an action or states a consequence. The conclusion is normative (uses "should" or "ought").', badge: 'Problem exists + constraint → blank = action needed', badgeColor: 'slate' },
      { title: 'Paradox Resolution', text: 'The premises present two facts that seem contradictory. The blank resolves the tension by explaining how both can be true simultaneously.', badge: 'Fact A seems to conflict with Fact B → blank = explanation', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Prephrase the Conclusion' },
    { type: 'paragraph', text: 'This is the most important step. Based on your reading of the premises and your identification of the gap, form a clear, specific prediction of what should fill the blank. Say it to yourself in plain language before looking at the answer choices.' },
    { type: 'list', items: [
      '**Be specific.** A vague prediction like "something about the policy" is useless. A strong prediction captures the direction, scope, and key terms: "the policy will not achieve its goal of reducing emissions because the exemptions are too broad."',
      '**Match the scope.** Your prediction should be exactly as strong as the premises warrant. If the premises show one example, your conclusion should be modest. If the premises establish a universal rule and a clear case, your conclusion can be stronger.',
      '**Use the premises\' language.** The correct answer will typically reference the same core terms that appear in the premises. If the premises discuss "revenue" and "enrollment," your prediction should involve those same concepts, not new ones.',
    ]},
    { type: 'callout', variant: 'tip', title: 'The Litmus Test', text: 'After forming your prediction, mentally insert it into the blank and re-read the full argument. Does it flow naturally? Does it feel like the author\'s own words? If something feels off, revisit the premises and adjust your prediction before looking at answers.' },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Match the Answer and Spot Traps' },
    { type: 'paragraph', text: 'Scan the five answer choices for the one that most closely matches your prediction. The correct answer should feel like the author\'s natural next sentence, using information and concepts already present in the stimulus.' },

    { type: 'paragraph', text: 'If no answer clearly matches, switch to elimination. Wrong answers on Fill in the Blank questions follow predictable patterns:' },

    { type: 'breakdown', labels: { title: 'Trap Type', text: 'How to Spot It' }, items: [
      { title: 'Too Strong', text: 'Uses extreme language (all, never, only, must, impossible) when the premises support only a moderate claim. One study does not prove something is "always" true. Look for hedging in the premises — if the evidence is qualified, the conclusion should be too.', badge: 'Scope Error', badgeColor: 'red' },
      { title: 'Out of Scope', text: 'Introduces a concept, comparison, or topic that never appeared in the stimulus. If the premises discuss employee productivity and the answer choice mentions customer satisfaction, it is out of scope — even if it sounds reasonable in the real world.', badge: 'New Information', badgeColor: 'red' },
      { title: 'Reversed Logic', text: 'Gets the direction of the reasoning backward. If the premises show that A leads to B, this trap says B leads to A. Causal chains and conditional arguments are particularly vulnerable to this reversal.', badge: 'Direction Error', badgeColor: 'red' },
      { title: 'Mere Restatement', text: 'Simply paraphrases a premise already stated in the stimulus. A conclusion must add something beyond the raw evidence. If an answer choice just rephrases what you already read, it is not completing the argument — it is circling back to the start.', badge: 'No Progress', badgeColor: 'red' },
      { title: 'Wrong Relationship', text: 'Focuses on a superficial or irrelevant connection between the premises rather than the core logical relationship. Common in analogy-based arguments where the answer mirrors the wrong aspect of the comparison.', badge: 'Misapplied Logic', badgeColor: 'red' },
    ]},

    { type: 'callout', variant: 'default', title: 'When Two Answers Look Good', text: 'If you are stuck between two choices, re-read the premises and ask which answer is more directly supported by the specific evidence given. The correct answer will reference the same terms and relationships that appear in the stimulus. The trap answer will subtly shift the topic, broaden the scope, or require an assumption not warranted by the premises.' },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: 'Let\'s apply all four steps to a complete question.' },

    { type: 'question-card',
      id: 'WE-15-2-001',
      questionType: 'Fill in the Blank',
      difficulty: 'medium',
      stimulus: 'Psychologist: Studies show that children who are praised for their effort rather than their innate ability tend to embrace challenging tasks and persist longer when they encounter difficulty. In contrast, children praised for being "smart" tend to avoid challenges and give up quickly when they struggle, apparently because failure threatens their identity as a smart person. Since schools want students who are resilient and willing to tackle difficult material, teachers should _______.',
      question: 'Which one of the following most logically completes the psychologist\'s argument?',
      options: [
        '(A) avoid giving any praise to students, since all praise risks creating dependency',
        '(B) praise students for their effort rather than for their innate ability (Correct)',
        '(C) assign only tasks that are well within each student\'s current ability level',
        '(D) inform parents that praising children for intelligence is psychologically harmful',
        '(E) use standardized testing to identify which students are genuinely gifted',
      ],
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'process', title: 'Step-by-Step Walkthrough', steps: [
      '**Step 1 — Read the Premises:** (1) Children praised for effort embrace challenges and persist. (2) Children praised for being smart avoid challenges and quit. (3) Schools want resilient students willing to tackle hard material.',
      '**Step 2 — Identify the Gap:** The blank follows "teachers should," which is a normative conclusion. The reasoning pattern is Problem-Solution: the problem is that "smart" praise undermines resilience, and the premises point to effort praise as the solution. The word "Since" before the school\'s goal confirms the blank is the conclusion.',
      '**Step 3 — Prephrase the Conclusion:** The premises directly support: "teachers should praise students for effort rather than for being smart." This is the only recommendation the evidence warrants.',
      '**Step 4 — Match the Answer:** Choice (B) — "praise students for their effort rather than for their innate ability" — matches the prediction exactly. It uses the same terms (effort vs. innate ability) and stays within the scope of the evidence.',
    ]},

    { type: 'h3', text: 'Answer Choice Breakdown' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) avoid giving any praise to students, since all praise risks creating dependency', text: 'Too extreme. The premises do not argue against all praise — they distinguish between two types of praise. This answer eliminates praise entirely, which the evidence does not support.', badge: 'Too Strong', badgeColor: 'red' },
      { title: '(B) praise students for their effort rather than for their innate ability', text: 'Perfect match. The premises establish that effort-praise produces the outcomes schools want (resilience, persistence). This is the natural synthesis.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) assign only tasks that are well within each student\'s current ability level', text: 'Contradicts the argument\'s direction. The premises value students who tackle difficult material. Assigning easy tasks avoids the challenge rather than building resilience.', badge: 'Reversed Logic', badgeColor: 'red' },
      { title: '(D) inform parents that praising children for intelligence is psychologically harmful', text: 'Out of scope. The argument is about what teachers should do in schools. Parent behavior is not discussed, and "psychologically harmful" is stronger than anything the premises state.', badge: 'Out of Scope', badgeColor: 'red' },
      { title: '(E) use standardized testing to identify which students are genuinely gifted', text: 'Completely irrelevant. Testing and giftedness are never mentioned. This answer shifts the topic from praise strategies to assessment methods.', badge: 'Out of Scope', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Common Mistakes and How to Avoid Them' },
    { type: 'paragraph', text: 'Even with a strong method, certain habits can undermine your accuracy on Fill in the Blank questions. Watch for these pitfalls:' },

    { type: 'breakdown', labels: { title: 'Mistake', text: 'Fix' }, items: [
      { title: 'Reading the answers before prephrasing', text: 'This is the single most common mistake. Attractive wrong answers will contaminate your thinking. Force yourself to predict before you look. Cover the answers with your hand if necessary.', badge: 'Process', badgeColor: 'indigo' },
      { title: 'Choosing an answer that sounds true in the real world', text: 'The correct answer must be supported by the specific premises in the stimulus, not by your outside knowledge. A statement can be objectively true and still be a wrong answer if the premises do not support it.', badge: 'Scope', badgeColor: 'blue' },
      { title: 'Ignoring hedging language', text: 'If the premises say "some studies suggest" or "in many cases," the conclusion cannot say "all" or "always." Match the strength of your conclusion to the strength of the evidence.', badge: 'Strength', badgeColor: 'blue' },
      { title: 'Failing to re-read with the answer inserted', text: 'After selecting an answer, mentally insert it into the blank and read the full argument. If it reads awkwardly or introduces a logical jump, reconsider. The correct answer should flow seamlessly.', badge: 'Verification', badgeColor: 'slate' },
    ]},

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: 'The 4-Step Method gives you a repeatable process: **Read Premises → Identify the Gap → Prephrase → Match.**\n\nPrephrasing is everything. If you can predict the conclusion before seeing the answers, you will almost always get the question right.\n\nWrong answers follow predictable patterns: Too Strong, Out of Scope, Reversed Logic, Mere Restatement, and Wrong Relationship. Learn to recognize them and elimination becomes a powerful backup strategy.\n\nFill in the Blank rewards the same skills you use on Main Conclusion, Must Be True, and Sufficient Assumption questions. If you are strong on those types, treat Fill in the Blank as a confidence booster.' },
  ]
};
