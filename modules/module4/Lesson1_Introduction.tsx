import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "4-1",
  title: "Introduction",
  content: [
    { type: 'h2', text: 'MODULE 4: Parallel Reasoning' },
    { type: 'paragraph', text: '**Question Goal:** Identify the abstract logical pattern of the stimulus argument and then find the one answer choice whose argument follows the **exact same structure of reasoning.** The topics will be completely different — your job is to match the logical skeleton, not the content.' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: "Parallel Reasoning is the ultimate test of your ability to think abstractly about arguments. Every other LR question type lets you stay inside the argument's content — you evaluate its flaws, find its assumptions, or describe its structure. Parallel Reasoning demands something different: you must **extract the logical skeleton** from one argument and **recognize that same skeleton** dressed in entirely new clothing." },
    { type: 'paragraph', text: "This skill is the culmination of everything you learned in Modules 1–3. In Module 1 (Argument Part), you learned to label the structural role of each sentence. In Module 2 (Main Conclusion), you learned to identify the argument's destination. In Module 3 (Method of Reasoning), you learned to describe *how* the argument works. Now you must take all three skills and go one step further: **replicate** the structure in a new context." },
    { type: 'callout', variant: 'tip', title: 'Frequency & Timing', text: "Parallel Reasoning questions appear on most scored LR sections, typically **1–2 per section**. They are among the **longest and most time-consuming** questions on the test — both the stimulus and the five answer choices tend to be full arguments. Budget **2–2.5 minutes** per question. Many test-takers skip these and return to them at the end of the section. The strategies in this module will help you solve them efficiently rather than avoiding them." },

    { type: 'h3', text: 'What Makes This Question Type Unique' },
    { type: 'paragraph', text: "Unlike Flaw, Weaken, or Assumption questions, you are not evaluating whether the argument is good or bad. Unlike Method of Reasoning, you are not simply *describing* the strategy. You must **match** the strategy — finding an answer choice whose argument is a structural twin of the stimulus. The content will always be different (law vs. cooking vs. biology), but the logical architecture must be identical." },
    { type: 'paragraph', text: "This means two arguments about completely unrelated topics can be logically parallel:" },
    { type: 'breakdown', labels: { title: 'Argument', text: 'Abstract Pattern' }, items: [
      { title: '"All mammals are warm-blooded. Whales are mammals. Therefore, whales are warm-blooded."', text: 'All A are B. X is A. Therefore, X is B.', badge: 'Biology', badgeColor: 'blue' },
      { title: '"All employees must attend the meeting. Sarah is an employee. Therefore, Sarah must attend the meeting."', text: 'All A are B. X is A. Therefore, X is B.', badge: 'Workplace', badgeColor: 'green' },
    ]},
    { type: 'paragraph', text: "The topics are completely different, but the logical skeleton is identical. Both apply a universal rule to a specific member of that category. This is the essence of Parallel Reasoning." },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: "You can identify a Parallel Reasoning question because the stem asks you to find an argument with a similar or identical *pattern*, *structure*, or *reasoning*. Look for these patterns:" },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"Which one of the following arguments is most similar in its reasoning to the argument above?"', 'Asks for **similar reasoning**'],
      ['"The pattern of reasoning in the argument above is most similar to that in which one of the following?"', 'Asks for the same **pattern of reasoning**'],
      ['"Which one of the following exhibits a pattern of reasoning most similar to that exhibited by the argument above?"', 'Asks for a **parallel pattern**'],
      ['"Which one of the following judgments best illustrates the principle illustrated by the argument above?"', 'Asks you to **illustrate the same principle** (Principle Application variant)'],
      ['"Which one of the following arguments is most similar in its logical features to the argument above?"', 'Asks for matching **logical features**'],
    ]},

    { type: 'callout', variant: 'default', title: 'Parallel Reasoning vs. Parallel Flaw', text: "Don't confuse these two question types. **Parallel Reasoning** asks you to find an argument with the same *valid or invalid* structure — you are matching the pattern regardless of whether it is logically sound. **Parallel Flaw** specifically asks you to find an argument with the same *type of logical error*. The stems differ:\n\n• Parallel Reasoning: \"most similar in its reasoning\"\n• Parallel Flaw: \"most similar in its **flawed** reasoning\" or \"exhibits a **flaw** most similar to...\"\n\nIf the stem mentions a flaw, you are in Parallel Flaw territory — a different question type covered in a later module." },

    { type: 'hr' },

    { type: 'h2', text: 'The Core Skill: Abstraction' },
    { type: 'paragraph', text: "The single most important skill for Parallel Reasoning is **abstraction** — the ability to strip away an argument's content and see only its logical skeleton. You are essentially translating natural language into a formula." },

    { type: 'h3', text: 'The Abstraction Process' },
    { type: 'paragraph', text: "Consider the following argument:" },
    { type: 'blockquote', text: '"If a restaurant receives three consecutive health code violations, it will be shut down. Café Deluxe has received three consecutive health code violations. Therefore, Café Deluxe will be shut down."' },
    { type: 'paragraph', text: "To abstract this argument, replace the specific nouns and facts with variables while preserving the logical connectors:" },
    { type: 'table', headers: ['Concrete Element', 'Abstract Variable'], rows: [
      ['"a restaurant"', 'X (any member of a category)'],
      ['"receives three consecutive health code violations"', 'A (the triggering condition)'],
      ['"will be shut down"', 'B (the result)'],
      ['"Café Deluxe"', 'X (a specific member)'],
    ]},
    { type: 'paragraph', text: "The abstract skeleton becomes: **If X does A, then B. X has done A. Therefore, B.**" },
    { type: 'paragraph', text: "This is a classic *Modus Ponens* (affirming the antecedent). Any answer choice with this same skeleton — regardless of whether it's about restaurants, animals, or politics — is the correct match." },

    { type: 'h3', text: 'What to Preserve, What to Discard' },
    { type: 'paragraph', text: "When abstracting, some features of the argument *must* be preserved because they define the logical structure, while others can be safely discarded because they are mere content." },
    { type: 'table', headers: ['Must Preserve (Structural)', 'Can Discard (Content)'], rows: [
      ['Type of conclusion (recommendation, prediction, conditional, factual)', 'Specific subject matter (law, science, cooking)'],
      ['Logical connectors (if/then, either/or, all/some/none)', 'Proper nouns (Café Deluxe, Sarah, Mars)'],
      ['Certainty/force of the conclusion (must, probably, might)', 'Specific details (three violations, 30% increase)'],
      ['Number and type of premises', 'Emotional tone or persuasive language'],
      ['Validity or invalidity of the reasoning', 'Domain-specific vocabulary'],
      ['Direction of support (which claims support which)', 'Whether the argument is interesting or dull'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Common Logical Structures — Preview' },
    { type: 'paragraph', text: "Most Parallel Reasoning questions test a small set of recurring logical patterns. You will study each in depth in later lessons, but here is a quick preview so you know what to expect:" },

    { type: 'table', headers: ['Pattern', 'Abstract Form', 'Example Signal Words'], rows: [
      ['**Conditional Chain**', 'If A → B, and B → C, then A → C', 'if…then, any, all, every'],
      ['**Modus Ponens**', 'If A → B. A is true. Therefore B.', 'if…then, since, therefore'],
      ['**Modus Tollens (Contrapositive)**', 'If A → B. Not B. Therefore Not A.', 'if…then, but…not, so…cannot'],
      ['**Eliminative (Disjunctive Syllogism)**', 'Either A or B. Not A. Therefore B.', 'either…or, the only options, must be'],
      ['**Principle Application**', 'General Rule + Specific Case → Judgment', 'should, ought, unjustified, unwise'],
      ['**Causal Explanation**', 'Effect observed. Cause proposed or challenged.', 'causes, leads to, is explained by'],
      ['**Quantifier Overlap**', 'All A are B. Some B are C. Therefore some A are C.', 'all, most, some, none, few'],
      ['**Analogy**', 'X is like Y in relevant ways. Y has property P. Therefore X has P.', 'just as, similarly, like'],
      ['**Ad Hominem / Tu Quoque**', 'Person X did Y, so X cannot criticize Y.', 'hypocritical, no right to, themselves guilty'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Big Three', text: "Conditional chains, eliminative arguments, and principle applications account for the majority of Parallel Reasoning questions. Master these three patterns first, and you will be prepared for most questions you encounter." },

    { type: 'hr' },

    { type: 'h2', text: 'The 4-Step Method — Preview' },
    { type: 'paragraph', text: "In the next lesson, you will learn a complete, repeatable 4-step method for solving Parallel Reasoning questions. Here is a brief overview:" },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Identify the Structure** — Break the stimulus into conclusion + premises. Label each component.',
      '**Abstract the Pattern** — Replace content with variables. Write out the logical skeleton (e.g., "If A → B, A, therefore B").',
      '**Match by Elimination** — Scan answer choices, starting with the conclusion type. Eliminate mismatches quickly.',
      '**Verify the Final Match** — Confirm the remaining choice replicates every structural element: conclusion type, premise structure, validity, certainty, and logical connectors.',
    ]},
    { type: 'paragraph', text: "The key insight is that you should work from the **conclusion outward**. Matching the conclusion type first lets you eliminate 2–3 answer choices in seconds, saving valuable time on these lengthy questions." },

    { type: 'hr' },

    { type: 'h2', text: 'Your First Parallel Reasoning Question' },
    { type: 'paragraph', text: "Let's put everything together with a concrete practice question. Read the stimulus, abstract its logical skeleton, and find the answer choice with the same structure." },

    { type: 'question-card',
      id: 'PR-4-1-001',
      questionType: 'Parallel Reasoning',
      difficulty: 'easy',
      stimulus: "Every student who completes the advanced seminar receives a certificate. Maria completed the advanced seminar. Therefore, Maria received a certificate.",
      question: "Which one of the following arguments is most similar in its reasoning to the argument above?",
      options: [
        "(A) Every employee who passes the safety exam is allowed to operate heavy machinery. Tom did not pass the safety exam. Therefore, Tom is not allowed to operate heavy machinery.",
        "(B) Every musician who wins the regional competition advances to the national competition. Anika won the regional competition. Therefore, Anika advances to the national competition. (Correct)",
        "(C) Some athletes who train daily qualify for the Olympics. Chen trains daily. Therefore, Chen qualifies for the Olympics.",
        "(D) Most residents who sign the petition will attend the town meeting. Li signed the petition. Therefore, Li will attend the town meeting.",
        "(E) Every applicant who submits a portfolio is considered for the fellowship. Several applicants submitted portfolios. Therefore, several applicants were awarded the fellowship.",
      ],
    },

    { type: 'h3', text: 'Walkthrough' },
    { type: 'process', title: 'Solving Step by Step', steps: [
      '**Abstract the stimulus:** All A are B. X is A. Therefore, X is B. This is a classic Modus Ponens with a universal premise.',
      '**Check conclusion type:** The conclusion is a definite factual statement about a specific individual. Eliminate any choice whose conclusion doesn\'t match this pattern.',
      '**Scan and eliminate:** (A) uses a *negative* premise and *negative* conclusion — this is Modus Tollens, not Modus Ponens. (C) uses "some" instead of "every" — quantifier mismatch. (D) uses "most" — quantifier mismatch. (E) shifts from "considered for" to "awarded" — the conclusion\'s predicate changes.',
      '**Confirm (B):** Every A → B. X is A. Therefore X is B. Perfect structural match.',
    ]},

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Every…passes…allowed. Tom did not pass. Tom not allowed.', text: 'The premise negates the trigger ("did not pass"), and the conclusion negates the result. This is a **Mistaken Reversal** (denying the antecedent), not Modus Ponens. The stimulus affirms the trigger.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Every…wins…advances. Anika won. Anika advances.', text: 'Universal premise (Every A → B), specific instance affirms trigger (X is A), conclusion follows (X is B). Identical structure to the stimulus.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Some…train…qualify. Chen trains. Chen qualifies.', text: '"Some" is not the same as "every." The stimulus uses a **universal** quantifier; this uses an **existential** one. The conclusion does not validly follow.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Most…sign…attend. Li signed. Li will attend.', text: '"Most" is weaker than "every." The logical force of the premise is different, so the reasoning pattern does not match.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Every…submits…considered. Several submitted. Several awarded.', text: 'Two mismatches: (1) the premise says "considered for" but the conclusion says "awarded" — the predicate shifts, and (2) the subject changes from a specific individual to "several applicants."', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• Parallel Reasoning asks you to **match logical structure**, not content. The topics will always differ.\n• The core skill is **abstraction**: strip away the nouns to reveal the logical skeleton.\n• **Preserve** structural features (conclusion type, quantifiers, logical connectors, validity) and **discard** content features (subject matter, proper nouns, specific details).\n• Start by matching the **conclusion type** — this eliminates wrong answers fastest.\n• Most questions test a small set of patterns: conditional chains, eliminative arguments, principle applications, and quantifier reasoning.\n• Don't confuse **Parallel Reasoning** (match the structure) with **Parallel Flaw** (match the specific error).\n• Budget **2–2.5 minutes** per question. The 4-step method you will learn next makes these manageable." },
  ]
};
