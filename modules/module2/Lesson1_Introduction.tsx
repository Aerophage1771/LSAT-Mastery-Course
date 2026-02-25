import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "2-1",
  title: "Introduction & Core Concepts",
  content: [
    { type: 'h2', text: 'MODULE 2: Main Conclusion' },
    { type: 'paragraph', text: '**Question Goal**\n\n**Identify the single, overarching claim that the entire argument is constructed to prove.** In other words, what is the one ultimate point the author wants the reader to accept?' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: "Main Conclusion is the most direct application of the structural skill you learned in Module 1 (Argument Part). Where Argument Part asks you to label one sentence's role, Main Conclusion asks you to find the single most important sentence—the destination the entire argument is driving toward. If you cannot reliably identify the main conclusion, every downstream question type becomes harder." },
    { type: 'callout', variant: 'tip', title: 'Dependency Chain', text: "Main Conclusion identification is a prerequisite for nearly every other LR question type:\n\n• **Flaw** — You must know the conclusion to see where the reasoning breaks down.\n• **Assumption** — The unstated link connects the premises *to the conclusion*.\n• **Strengthen / Weaken** — You are strengthening or weakening *the conclusion*.\n• **Sufficient Assumption** — You need the conclusion to build the logical bridge.\n• **Parallel Reasoning** — You must match the conclusion's structure.\n\nMastering this question type pays compound interest across the entire LR section." },

    { type: 'h3', text: 'Frequency & Difficulty' },
    { type: 'paragraph', text: "Main Conclusion questions appear on most scored LR sections, typically 1–2 per section. They skew toward the easier end of the difficulty scale, but the LSAT tests this skill indirectly in dozens of other question types. The questions are rarely hard because of the reasoning—they are hard because of the *answer choice design*, which is built to exploit common structural misreadings." },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: "You can identify a Main Conclusion question because the stem will ask you for the argument's overall point, main claim, or conclusion. Look for these patterns:" },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"Which one of the following most accurately expresses the main conclusion of the argument?"', 'Asks for the **main conclusion**'],
      ['"Which one of the following most accurately states the main point of the argument?"', 'Asks for the **main point**'],
      ['"The overall conclusion of the argument is that..."', 'Asks you to complete the **overall conclusion**'],
      ['"The argument is structured to lead to which one of the following conclusions?"', 'Asks what the argument **leads to**'],
      ['"The main point of the argument is that..."', 'Asks you to complete the **main point**'],
    ]},

    { type: 'h3', text: 'Main Conclusion vs. Argument Part' },
    { type: 'paragraph', text: "These two question types are closely related, but they ask fundamentally different things. Understanding the distinction prevents confusion:" },
    { type: 'table', headers: ['Feature', 'Main Conclusion (Module 2)', 'Argument Part (Module 1)'], rows: [
      ['**What it asks**', 'Find the single ultimate point of the argument', 'Identify the role of a *specific quoted sentence*'],
      ['**Target**', 'The whole argument (find the destination)', 'One particular sentence (label its function)'],
      ['**Answer choices**', 'Paraphrases of the conclusion (content-based)', 'Abstract role descriptions (function-based)'],
      ['**Example answer**', '"Tennyson\'s line was not about Darwin."', '"It is a premise offered in support of the main conclusion."'],
      ['**Core skill**', 'Identifying *which* claim is the main point', 'Describing *what role* a claim plays'],
    ]},
    { type: 'callout', variant: 'default', title: 'The Connection', text: "Think of it this way: Argument Part gives you a sentence and asks \"What does this do?\" Main Conclusion asks \"Which sentence is the final destination?\" Both require you to map the argument's structure—Main Conclusion just narrows the task to finding the top of the support chain." },

    { type: 'hr' },

    { type: 'h2', text: 'Core Concepts' },

    { type: 'h3', text: 'The "Why" Test' },
    { type: 'paragraph', text: "The most reliable tool for identifying the Main Conclusion is the **\"Why\" Test**. Because the conclusion is the claim that everything else supports, you can locate it by testing the direction of support." },
    { type: 'process', title: 'How to Apply the Why Test', steps: [
      '**Pick a candidate statement** — Choose the sentence you suspect is the conclusion.',
      '**Ask "Why is this true?"** — Look at the rest of the stimulus.',
      '**Check if the argument answers** — If the other sentences provide reasons *why* your candidate is true, you have found the **conclusion**.',
      '**Reverse check** — If your candidate answers the "Why?" question for a *different* sentence, it is a **premise**, not the conclusion.',
    ]},

    { type: 'h4', text: 'Worked Demonstration' },
    { type: 'paragraph', text: "Let's see the Why Test in action on a simple argument:" },
    { type: 'blockquote', text: '"Cycling to work is healthier than driving. Studies show that regular cyclists have a 30% lower risk of cardiovascular disease. Additionally, cycling provides daily aerobic exercise that most commuters otherwise lack."' },

    { type: 'breakdown', labels: { title: 'Statement', text: 'Why Test Result' }, items: [
      { title: '"Cycling to work is healthier than driving."', text: '**Ask:** Why is cycling healthier? **Answer from argument:** Because cyclists have 30% lower cardiovascular risk, and cycling provides daily aerobic exercise. ✓ The argument answers the "Why?" — this is the **conclusion**.', badge: 'Conclusion', badgeColor: 'indigo' },
      { title: '"Studies show that regular cyclists have a 30% lower risk..."', text: '**Ask:** Why do cyclists have lower risk? **Answer from argument:** The argument doesn\'t explain why. This is taken as a given fact. ✓ No answer — this is a **premise**.', badge: 'Premise', badgeColor: 'slate' },
      { title: '"Cycling provides daily aerobic exercise..."', text: '**Ask:** Why does cycling provide exercise? **Answer from argument:** The argument doesn\'t explain this either. It\'s another given fact. ✓ No answer — this is a **premise**.', badge: 'Premise', badgeColor: 'slate' },
    ]},

    { type: 'callout', variant: 'tip', title: 'The "Because" Reversal', text: "A quick shortcut: try inserting the word **\"because\"** between your candidate conclusion and the other statements. If it makes logical sense, you have the right direction.\n\n*\"Cycling is healthier **because** cyclists have lower cardiovascular risk.\"* ✓ Makes sense.\n*\"Cyclists have lower cardiovascular risk **because** cycling is healthier.\"* ✗ Backwards." },

    { type: 'hr' },

    { type: 'h3', text: 'The Final Destination Principle' },
    { type: 'paragraph', text: "Arguments often contain multiple layers: background information, opposing viewpoints, intermediate conclusions, and the main conclusion. A common trap is mistaking a sub-conclusion for the main conclusion. The key insight:" },
    { type: 'callout', variant: 'default', title: 'The Final Destination', text: "The Main Conclusion is the statement that **supports nothing else**. It is the end of the line — the final judgment, prediction, or recommendation that the author is trying to leave you with. It is not necessarily the \"heaviest\" or most complex sentence; it is simply the one sentence that all other sentences work to prove." },

    { type: 'hr' },

    { type: 'h2', text: 'Indicator Words Reference' },
    { type: 'paragraph', text: "Indicator words are your most reliable tool for quickly identifying argument structure. These words signal whether a statement is serving as a conclusion, a premise, or a pivot between viewpoints." },

    { type: 'table', headers: ['Conclusion Indicators', 'Premise Indicators', 'Contrast / Pivot Indicators'], rows: [
      ['Therefore', 'Because', 'But'],
      ['Thus', 'Since', 'However'],
      ['So', 'For', 'Yet'],
      ['Hence', 'After all', 'Although'],
      ['Consequently', 'Given that', 'While'],
      ['It follows that', 'As evidenced by', 'Nevertheless'],
      ['This shows that', 'Due to the fact that', 'Despite'],
      ['We can conclude that', 'On the grounds that', 'On the other hand'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Warning: Indicator Words Are Clues, Not Guarantees', text: "Not every conclusion has an indicator word, and not every \"therefore\" introduces the *main* conclusion—it might introduce a sub-conclusion. Always confirm with the Why Test. Indicator words narrow your search; the Why Test confirms your answer." },

    { type: 'hr' },

    { type: 'h2', text: 'The Four Conclusion Types — Preview' },
    { type: 'paragraph', text: "Main conclusions on the LSAT come in four flavors. You will study each in depth in upcoming lessons, but here is a quick overview so you know what to expect:" },

    { type: 'breakdown', labels: { title: 'Conclusion Type', text: 'Description & Key Signals' }, items: [
      { title: '1. The Rebuttal', text: 'The author rejects or critiques a claim held by others. The stimulus introduces someone else\'s position, then pivots to tear it down.\n\n**Signals:** *But, However, Yet* + rejection words (*mistaken, unfounded, dubious, unconvincing*)\n**Frequency:** ~45% of Main Conclusion questions', badge: '~45%', badgeColor: 'indigo' },
      { title: '2. The Prescription', text: 'The author makes a judgment or recommends a course of action. The conclusion goes beyond describing facts to say what *should* or *must* be done.\n\n**Signals:** *should, must, ought to, needs to, it is advisable, unfair, unwise*\n**Frequency:** ~25% of Main Conclusion questions', badge: '~25%', badgeColor: 'blue' },
      { title: '3. The Explanation', text: 'The author proposes a cause or reason for a known phenomenon. The question isn\'t *whether* something happened, but *why* it happened.\n\n**Signals:** *The reason is…, is caused by…, is explained by…, This is because…*\n**Frequency:** ~20% of Main Conclusion questions', badge: '~20%', badgeColor: 'slate' },
      { title: '4. The Prediction / Factual Claim', text: 'The author uses premises to prove a descriptive fact or predict a future outcome. The most straightforward type.\n\n**Signals:** *will, will not, is likely to, can be expected to*\n**Frequency:** ~10% of Main Conclusion questions', badge: '~10%', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Your First Main Conclusion Question' },
    { type: 'paragraph', text: "Let's put everything together with a concrete practice question. Read the stimulus, apply the Why Test, spot indicator words, and find the main conclusion before looking at the answer choices." },

    { type: 'question-card',
      id: 'MC-2-1-001',
      questionType: 'Main Conclusion',
      difficulty: 'easy',
      stimulus: "Many pet owners assume that feeding a dog table scraps is harmless. However, several common human foods—including chocolate, grapes, and onions—are toxic to dogs and can cause serious illness. Even foods that are not toxic often lead to obesity and digestive problems in dogs. Therefore, dog owners should avoid giving their pets table scraps altogether.",
      question: "Which one of the following most accurately expresses the main conclusion of the argument?",
      options: [
        "(A) Many pet owners believe that table scraps are harmless for dogs.",
        "(B) Chocolate, grapes, and onions are toxic to dogs.",
        "(C) Non-toxic human foods can cause obesity in dogs.",
        "(D) Dog owners should not feed their pets table scraps. (Correct)",
        "(E) Dogs are more sensitive to human foods than most pet owners realize.",
      ],
    },

    { type: 'h4', text: 'Walkthrough' },
    { type: 'breakdown', labels: { title: 'Step', text: 'Application' }, items: [
      { title: 'Spot the indicator words', text: '**"However"** signals a pivot from the common belief. **"Therefore"** introduces the final claim. These two words map the argument instantly.', badge: 'Step 1', badgeColor: 'blue' },
      { title: 'Apply the Why Test', text: '**Candidate:** "Dog owners should avoid giving their pets table scraps."\n**Ask:** Why should they avoid it?\n**Answer:** Because some human foods are toxic, and even non-toxic foods cause obesity and digestive problems.\n✓ The argument answers the "Why?" — this is the conclusion.', badge: 'Step 2', badgeColor: 'blue' },
      { title: 'Identify the type', text: 'The conclusion uses **"should"** — this is a **Prescription** (a recommendation about what dog owners ought to do).', badge: 'Step 3', badgeColor: 'blue' },
      { title: 'Evaluate choices', text: '**(A)** is the opposing viewpoint the author challenges. **(B)** and **(C)** are premises. **(E)** is a reasonable inference but not stated as the main point. **(D)** matches our prephrase perfectly: a recommendation to avoid table scraps.', badge: 'Step 4', badgeColor: 'blue' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• The Main Conclusion is the **final destination** of the argument — the one claim that everything else supports and that supports nothing else.\n• The **Why Test** is your most reliable tool: ask \"Why?\" of your candidate, and if the argument answers, you have the conclusion.\n• **Indicator words** (therefore, because, however) are clues that speed up your search, but always confirm with the Why Test.\n• Main Conclusion questions are foundational — this skill is a prerequisite for Flaw, Assumption, Strengthen, Weaken, and more.\n• Conclusions come in four types: **Rebuttal**, **Prescription**, **Explanation**, and **Prediction/Fact**. You will master each in the lessons ahead." },
  ]
};
