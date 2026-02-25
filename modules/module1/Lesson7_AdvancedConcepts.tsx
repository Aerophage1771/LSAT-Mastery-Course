import { Lesson } from '../../types';

export const Lesson7_AdvancedConcepts: Lesson = {
  id: "1-7",
  title: "Advanced Concepts",
  content: [
    { type: 'h2', text: 'Advanced Concepts: Difficult Argument Part Questions' },
    { type: 'paragraph', text: "So far, we've covered the common roles that make up the vast majority of Argument Part questions. But what about the ones that still feel tough, even when you can map the basic structure? These questions are designed to test a deeper, more abstract level of understanding. This lesson breaks down what makes them hard and gives you concrete strategies for handling them." },

    { type: 'hr' },

    { type: 'h3', text: '1. The Logic Becomes More Complex' },
    { type: 'paragraph', text: "On harder questions, statements don't just act as simple premises or conclusions. They perform more sophisticated strategic jobs. Your task moves from identifying a building block to characterizing a complex maneuver." },

    { type: 'h4', text: 'Chains of Reasoning' },
    { type: 'paragraph', text: "Simple arguments flow from premise to conclusion in one step. Hard arguments chain multiple steps together, with each link depending on the previous one:" },
    { type: 'process', title: 'A Multi-Link Chain', steps: [
      '**Premise:** "Sales of electric vehicles have tripled in the last decade."',
      '**IC₁:** "Therefore, consumer demand for electric vehicles is strong."',
      '**IC₂:** "This strong demand will drive further investment in charging infrastructure."',
      '**Main Conclusion:** "Consequently, range anxiety will cease to be a significant barrier within five years."',
    ]},
    { type: 'paragraph', text: "In a chain like this, a question might ask about IC₁. The trap is that IC₁ looks like a conclusion (it follows \"therefore\") but also looks like a premise (it supports IC₂). You must see both relationships. The longer the chain, the more relationships you need to track." },

    { type: 'h4', text: 'Arguments Within Arguments' },
    { type: 'paragraph', text: "Some stimuli contain two arguments: one belonging to a person the author is critiquing, and one belonging to the author. A question might ask about a premise *within the argument the author is attacking*, not within the author's own argument." },
    { type: 'blockquote', text: "Economists argue that because free trade lowers prices for consumers, it benefits the economy overall. But this ignores the effects on displaced workers, whose lost income reduces consumer spending far more than trade savings increase it." },
    { type: 'paragraph', text: "If asked about \"free trade lowers prices for consumers,\" the answer is not simply \"a premise.\" It is a premise *within the economists' argument* — an argument the author rejects. The precise description would be something like: *\"a claim used to support a conclusion that the author challenges.\"*" },

    { type: 'h4', text: 'Strategic Moves' },
    { type: 'paragraph', text: "Beyond basic premises and conclusions, authors use specific rhetorical strategies. Recognizing these moves is essential for hard questions:" },
    { type: 'table', headers: ['Strategic Move', 'What the Author Does', 'Example'], rows: [
      ['Counterexample', 'Presents a specific case that disproves a general claim', '"Not all mammals live on land — whales are mammals and live in the ocean."'],
      ['Ruling Out an Alternative', 'Eliminates a competing explanation to strengthen their own', '"The increase can\'t be due to population growth, because the population has remained stable."'],
      ['Reductio ad Absurdum', 'Shows that accepting a claim leads to an absurd consequence', '"If that policy were correct, we would have to ban all outdoor activity whenever it rains."'],
      ['Analogy', 'Draws a parallel to a different case to support or undermine a point', '"Expecting students to learn without practice is like expecting athletes to compete without training."'],
      ['Concession', 'Grants a point to the opposition before pivoting', '"While it is true that costs have risen, the quality improvements justify the increase."'],
    ]},
    { type: 'paragraph', text: "When you encounter a statement that doesn't feel like a simple premise or conclusion, ask yourself: **What is the author *doing* with this piece of information?** Are they providing an example to disprove something? Eliminating a rival explanation? Showing an absurd consequence? The answer to this question is the statement's role." },

    { type: 'hr' },

    { type: 'h3', text: '2. The Language Becomes Abstract' },
    { type: 'paragraph', text: "Often, the stimulus is clear, but the answer choices are written in dense academic jargon. This is intentional. The test-makers are assessing your ability to think about logical structure in the abstract, not just follow the content." },

    { type: 'h4', text: 'Decoding Abstract Language' },
    { type: 'paragraph', text: "The key skill is translating abstract descriptions into concrete terms from the stimulus. Here is a reference table showing common abstract phrases and what they typically mean:" },
    { type: 'table', headers: ['Abstract Phrase in Answer Choice', 'Plain English Translation'], rows: [
      ['"a claim that the argument takes as evidence"', 'A premise'],
      ['"the overall conclusion drawn in the argument"', 'The main conclusion'],
      ['"a subsidiary conclusion used to support the main conclusion"', 'An intermediate conclusion'],
      ['"a claim that the argument is designed to refute"', 'The opposing viewpoint'],
      ['"it acknowledges a fact that counts against the conclusion"', 'A concession'],
      ['"the reasoning that it rejects"', 'The opposing argument / the other side\'s logic'],
      ['"it denies a claim assumed in the reasoning it opposes"', 'It attacks an unstated assumption of the other side'],
      ['"a phenomenon the argument seeks to explain"', 'The observation or fact being discussed'],
      ['"a consequence drawn in order to cast doubt on a position"', 'Part of a reductio / counterfactual argument'],
    ]},
    { type: 'callout', variant: 'tip', title: 'The Substitution Technique', text: "When you encounter a dense answer choice, replace every abstract phrase with the actual content from the stimulus. For example, if the choice says *\"It denies a claim that the argument takes to be assumed in the reasoning that it rejects,\"* translate: *\"the reasoning that it rejects\"* = the economists' argument. *\"assumed in the reasoning\"* = an unstated assumption of the economists. *\"It denies a claim\"* = the author says this assumption is false. Now read the translated version and check if it fits the target statement." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example: Abstract Answer Choices' },
    { type: 'question-card', id: 'advanced-abstract-example', questionType: 'Argument Part', difficulty: 'hard',
      stimulus: "Art critic: Biographers sometimes claim that the work of an artist who is unhappy must inevitably reflect that unhappiness. But this claim is false. The biographer of a famous artist recently argued that, because the artist's marriage was unhappy, the artist's painting of a couple in a garden is a depiction of marital discord. However, the painting is obviously a joyful celebration of nature.",
      question: "The statement that the painting is a joyful celebration of nature plays which one of the following roles in the art critic's argument?",
      options: [
        "(A) It is a premise used to support the claim that art cannot reflect an artist's emotional state.",
        "(B) It is used to support the main conclusion by providing a counterexample to a general claim. (Correct)",
        "(C) It is the main conclusion that the argument is structured to establish.",
        "(D) It is cited as a claim made by the biographer that the art critic seeks to undermine.",
        "(E) It is a concession to the biographer's position before the art critic presents a rebuttal."
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: "The art critic's argument has a layered structure. Let's map it:" },
    { type: 'breakdown', labels: { title: 'Statement', text: 'Role' }, items: [
      { title: '"Biographers claim unhappiness must reflect in art"', text: 'This is the **Opposing Viewpoint** — the general claim the art critic is about to argue against.', badge: 'Opposing View', badgeColor: 'red' },
      { title: '"This claim is false"', text: 'This is the **Main Conclusion** — the art critic\'s direct rejection of the opposing view.', badge: 'Main Conclusion', badgeColor: 'indigo' },
      { title: '"The biographer argued the painting depicts marital discord"', text: 'This is an instance of the opposing view applied to a specific case — setting up the counterexample.', badge: 'Supporting Context', badgeColor: 'slate' },
      { title: '"The painting is obviously a joyful celebration of nature"', text: 'This is the **Counterexample Premise** — a specific fact that contradicts the biographer\'s claim and, by extension, the general opposing viewpoint. It is evidence that art need not reflect unhappiness.', badge: 'Counterexample', badgeColor: 'blue' },
    ]},
    { type: 'paragraph', text: "The painting's joyful nature serves as a **counterexample**: a specific case that disproves the biographer's general claim. Since the artist was unhappy but the painting is joyful, the general rule (\"unhappiness must reflect in art\") is shown to be false. This makes (B) — \"used to support the main conclusion by providing a counterexample to a general claim\" — the correct answer." },

    { type: 'hr' },

    { type: 'h3', text: 'Strategy for Hard Questions' },
    { type: 'paragraph', text: "When you encounter a genuinely difficult Argument Part question, follow this disciplined process:" },
    { type: 'process', title: 'Hard Question Protocol', steps: [
      '**Map the Core First:** Before touching the target statement, identify the main conclusion and the primary premises. Get the skeleton right.',
      '**Locate the Target in the Chain:** How does the target connect to the main conclusion? Does it support it directly? Indirectly? Oppose it? Sit outside the chain entirely?',
      '**Characterize the Move:** Is the target a counterexample? A concession? A hypothetical? A premise within someone else\'s argument? Name the strategic move.',
      '**Translate Abstract Choices:** For each answer choice, replace abstract phrases with actual content from the stimulus. Read the translated version and check for a precise fit.',
      '**Eliminate Precisely:** Don\'t settle for "close enough." On hard questions, two or three choices may seem plausible. The correct answer will be flawlessly accurate; the wrong answers will contain at least one element that contradicts the stimulus.',
    ]},

    { type: 'callout', variant: 'default', title: 'A Mindset for Hard Questions', text: "Hard questions have tempting wrong answers that are \"close enough.\" The test-makers know that students who have a rough understanding of the structure will gravitate toward these near-misses. Your job is to find the choice that is **flawlessly accurate** in every detail. If even one word in a choice contradicts the stimulus, eliminate it — no matter how good the rest of the choice sounds." },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "Hard Argument Part questions test three things: **(1)** your ability to track complex reasoning chains with multiple steps, **(2)** your ability to identify sophisticated rhetorical moves like counterexamples and reductio arguments, and **(3)** your ability to decode abstract answer choices by translating them into concrete terms. Master these three skills and the hardest questions become manageable." },
  ]
};
