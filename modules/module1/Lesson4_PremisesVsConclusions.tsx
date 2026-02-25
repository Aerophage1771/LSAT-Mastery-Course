import { Lesson } from '../../types';

export const Lesson4_PremisesVsConclusions: Lesson = {
  id: "1-4",
  title: "Lesson 1: Premises vs. Conclusions",
  content: [
    { type: 'h2', text: 'Concept Focus: The Core Components' },
    { type: 'paragraph', text: "Every argument is built on a foundation of two key components: a **conclusion** (the point the author is trying to prove) and **premises** (the evidence used to prove it). These two roles are the most fundamental building blocks of logical reasoning. A staggering **two-thirds of all Argument Part questions** target a statement functioning as either a premise or a conclusion." },
    { type: 'paragraph', text: "Mastering the ability to distinguish between \"the point\" and \"the proof\" is the single most important skill for this question type, and it underpins every other LR skill you will learn." },

    { type: 'hr' },

    { type: 'h3', text: 'The Two Core Roles' },
    { type: 'breakdown', labels: { title: 'Role', text: 'Definition & Key Properties' }, items: [
      { title: 'Conclusion (The Point)', text: "The author's main claim; the one statement that everything else is designed to convince you of.\n**Receives support** from other statements.\n**Does not give support** to any other claim.\nOften a recommendation, prediction, or judgment.", badge: 'What to believe', badgeColor: 'indigo' },
      { title: 'Premise (The Proof)', text: "The evidence, fact, or reason the author provides to justify the conclusion.\n**Gives support** to the conclusion.\n**Does not receive support** from other statements.\nOften a fact, observation, study result, or general principle.", badge: 'Why to believe it', badgeColor: 'slate' },
    ]},

    { type: 'h3', text: 'The Direction of Support' },
    { type: 'paragraph', text: "Every argument has a logical direction. Evidence flows toward the conclusion like tributaries flowing into a river. When you read an argument, your job is to trace that flow and identify which statements are doing the supporting (premises) and which statement is being supported (conclusion)." },
    { type: 'paragraph', text: "This direction is your compass. If Statement A supports Statement B, then A is the premise and B is the conclusion. The relationship is always one-directional within a single argument." },

    { type: 'h3', text: 'Three Techniques for Identifying the Conclusion' },
    { type: 'paragraph', text: "You have three reliable methods. Use them together for confidence." },
    { type: 'process', title: 'Identification Methods', steps: [
      '**Indicator Words:** Look for conclusion indicators (*therefore, thus, so, hence, consequently*) and premise indicators (*because, since, for, after all, given that*). The statement following a conclusion indicator is usually the conclusion. The statement following a premise indicator is usually a premise.',
      '**The Why Test:** Ask "Why?" of each candidate conclusion. If the other statements in the argument answer the "Why?", you have found the conclusion. If asking "Why?" of a statement gets no answer from the argument, it is a premise.',
      '**The Opinion Test:** The conclusion is almost always the author\'s opinion, recommendation, or judgment. Premises tend to be factual claims that the author presents as established truths. Ask: "Which statement is the author trying to *convince* me of?"',
    ]},

    { type: 'callout', variant: 'tip', title: 'Common Trap', text: "Do not assume the conclusion is always the last sentence. On the LSAT, the conclusion can appear anywhere in the stimulus: first, last, or buried in the middle. Position does not determine role. Only the flow of support determines role." },

    { type: 'hr' },

    { type: 'h3', text: 'Worked Example' },
    { type: 'question-card',
      id: 'PT-107-S-4-Q-15',
      questionType: 'Argument Part',
      difficulty: 'easy',
      stimulus: "Ambiguity inspires interpretation. The saying \"We are the measure of all things,\" for instance, has been interpreted by some people to imply that humans are centrally important in the universe, while others have interpreted it to mean simply that, since all knowledge is human knowledge, humans must rely on themselves to find the truth.",
      question: "The claim that ambiguity inspires interpretation figures in the argument in which one of the following ways?",
      options: [
        "(A) It is used to support the argument's conclusion.",
        "(B) It is an illustration of the claim that we are the measure of all things.",
        "(C) It is compatible with either accepting or rejecting the argument's conclusion.",
        "(D) It is a view that other statements in the argument are intended to support. (Correct)",
        "(E) It sets out a difficulty the argument is intended to solve.",
      ],
    },

    { type: 'h3', text: 'Step-by-Step Analysis' },
    { type: 'process', title: 'Solving This Question', steps: [
      '**Find the Target:** The question asks about the first sentence: "Ambiguity inspires interpretation."',
      '**Spot the Indicator:** The second sentence begins with "for instance," which is a premise indicator. "For instance" means "here is an example that proves my point." The example supports the first sentence.',
      '**Map the Flow:** The saying about "the measure of all things" is the example (premise). The two different interpretations of that saying demonstrate that ambiguity does indeed inspire interpretation. Support flows from the example to the first sentence.',
      '**Pinpoint the Role:** The target sentence is what the example is designed to prove. It receives support from the rest of the argument. It is the **Main Conclusion**.',
      '**Match to Answer Choices:** We need a choice that describes a main conclusion in abstract terms.',
    ]},

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) It is used to support the argument\'s conclusion.', text: 'This describes a **premise**. But our target is the conclusion itself, not a supporting statement. The direction of support is reversed.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) It is an illustration of the claim that we are the measure of all things.', text: 'This gets the relationship backward. The saying is the illustration (premise); the target is what the illustration supports (conclusion).', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) It is compatible with either accepting or rejecting the argument\'s conclusion.', text: 'This says the statement is neutral and unconnected to the argument\'s logic. But the target IS the conclusion.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) It is a view that other statements are intended to support.', text: '"A view that other statements are intended to support" is a textbook definition of a main conclusion. The example about the saying is the "other statement" that supports this "view."', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) It sets out a difficulty the argument is intended to solve.', text: 'The argument does not frame ambiguity as a problem to solve. It presents ambiguity as a principle to demonstrate with evidence.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Abstract Pattern' },
    { type: 'paragraph', text: "This question tests the most common pattern in Argument Part: **identifying the main conclusion when it appears first and is followed by supporting examples.** The indicator \"for instance\" is a strong signal that everything after it is a premise supporting the claim before it." },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "The most fundamental skill is distinguishing between the **Conclusion (the point)** and the **Premise (the proof)**.\n\nLook for indicator words like **\"for instance\"** and **\"for example,\"** which almost always introduce premises.\n\nAlways ask: *What is the author trying to get me to believe?* (That's the conclusion). Then ask: *Why should I believe that?* (Those are the premises).\n\nThe correct answer will describe the role in **abstract terms**. Choice (D) doesn't say \"conclusion\" directly, but \"a view that other statements are intended to support\" is functionally identical." },
  ]
};
