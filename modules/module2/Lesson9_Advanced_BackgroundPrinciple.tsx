import { Lesson } from '../../types';

export const Lesson9_Advanced_BackgroundPrinciple: Lesson = {
  id: "2-9",
  title: "Advanced: The Background Principle Trap",
  content: [
    { type: 'h2', text: 'The Background Principle Trap' },
    { type: 'paragraph', text: "An author sometimes opens an argument with a general rule, a definition, or a widely accepted truth. Because this statement is abstract and seems important, it's easy to mistake it for the main conclusion. But its true role is **foundational premise** — the author isn't trying to *prove* this principle; they're *using* it to prove a more specific point. Your challenge is to distinguish the general rule the author takes as given from the specific application the author is actually arguing for." },

    { type: 'hr' },

    { type: 'h3', text: 'Background Principle Indicators' },
    { type: 'paragraph', text: "Certain phrases explicitly signal that a statement is being presented as a given — something the author assumes rather than argues for. When you see these, the statement is almost never the main conclusion:" },
    { type: 'table', headers: ['Indicator Phrase', 'What It Signals', 'Example'], rows: [
      ['*It is a given that...*', 'Stated as an assumption, not proven', '"It is a given that to be intriguing, one must inspire curiosity."'],
      ['*It is well known that...*', 'Common knowledge used as a starting point', '"It is well known that exercise improves mental health."'],
      ['*It is obvious that...*', 'Treated as self-evident', '"It is obvious that businesses must adapt to survive."'],
      ['*It goes without saying that...*', 'Presented as beyond dispute', '"It goes without saying that education is valuable."'],
      ['*Everyone agrees that...*', 'Attributed to universal consensus', '"Everyone agrees that safety is the top priority."'],
      ['*By definition...*', 'Definitional claim used as a starting point', '"By definition, a democracy requires citizen participation."'],
      ['*It is widely accepted that...*', 'Attributed to broad consensus', '"It is widely accepted that climate change is real."'],
      ['*Of course...*', 'Acknowledged as obvious before pivoting', '"Of course talent matters, but practice matters more."'],
    ]},
    { type: 'callout', variant: 'tip', title: 'The Rule vs. Application Test', text: "When you see a background principle indicator, ask: \"Is the author trying to *prove* this statement, or is the author *using* this statement to prove something else?\" If the rest of the argument provides evidence *for* the statement, it might be the conclusion. If the rest of the argument *builds upon* it to reach a different claim, it's a foundational premise." },

    { type: 'hr' },

    { type: 'h3', text: 'Rule vs. Application' },
    { type: 'paragraph', text: "The core of the Background Principle trap is confusing the general rule with its specific application. Here's how they differ:" },
    { type: 'table', headers: ['Feature', 'The Rule (Background Principle)', 'The Application (Main Conclusion)'], rows: [
      ['Scope', 'General, abstract — applies to many cases', 'Specific — applies to the case at hand'],
      ['Status', 'Taken as given; not argued for', 'Argued for; supported by evidence'],
      ['Position', 'Usually appears first', 'Usually appears second or later'],
      ['Function', 'Sets up the logical framework', 'Is the point the argument is trying to make'],
      ['If removed', 'The specific conclusion loses its foundation', 'The argument loses its purpose'],
      ['Example', '"To be intriguing, one must inspire curiosity"', '"Broadening one\'s abilities will inspire curiosity"'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'The Logic-Flip' },
    { type: 'paragraph', text: "On the hardest questions involving background principles, the test-makers add another layer of difficulty: they offer a wrong answer that *reverses the logical direction* of the conclusion. This is the Logic-Flip trap." },
    { type: 'paragraph', text: "Here's how it works: If the conclusion states that X is *sufficient* for Y (\"Doing X will enable Y\"), a Logic-Flip answer restates this as X being *necessary* for Y (\"To achieve Y, one must do X\"). These sound similar but are logically different:" },
    { type: 'table', headers: ['What the Author Says', 'Logic-Flip Distortion', 'Why It\'s Wrong'], rows: [
      ['"Broadening abilities *will enable* inspiring curiosity"', '"To inspire curiosity, one *must* broaden abilities"', 'Sufficient → Necessary reversal. The author says X is enough; the trap says X is required.'],
      ['"Exercise *improves* mood"', '"To improve mood, one *must* exercise"', 'The author says exercise works; the trap says nothing else does.'],
      ['"Reading widely *helps* develop empathy"', '"To develop empathy, one *needs to* read widely"', 'The author claims a benefit; the trap claims a requirement.'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'question-card', id: 'bg-principle-worked-example', questionType: 'Main Conclusion', difficulty: 'hard',
      stimulus: "It is a given that to be an intriguing person, one must be able to inspire the perpetual curiosity of others. Constantly broadening one's abilities and extending one's intellectual reach will enable one to inspire that curiosity. For such a perpetual expansion of one's mind makes it impossible to be fully comprehended, making one a constant mystery to others.",
      question: "Which one of the following most accurately expresses the conclusion drawn in the argument above?",
      options: [
        "(A) To be an intriguing person, one must be able to inspire the perpetual curiosity of others.",
        "(B) If one constantly broadens one's abilities and extends one's intellectual reach, one will be able to inspire the perpetual curiosity of others. (Correct)",
        "(C) If one's mind becomes impossible to fully comprehend, one will always be a mystery to others.",
        "(D) To inspire the perpetual curiosity of others, one must constantly broaden one's abilities and extend one's intellectual reach.",
        "(E) If one constantly broadens one's abilities and extends one's intellectual reach, one will always have curiosity."
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Structural Map' },
    { type: 'process', title: 'The Argument Flow', steps: [
      '**Foundational Premise (S1):** \"It is a given that to be intriguing, one must inspire curiosity.\" [Background principle — taken as given, not argued for.]',
      '**Main Conclusion (S2):** \"Constantly broadening one\'s abilities... will enable one to inspire that curiosity.\" [The specific application — this is what the author is trying to prove.]',
      '**Supporting Premise (S3):** \"For such expansion makes it impossible to be fully comprehended, making one a mystery.\" [Introduced by \"For\" — evidence supporting S2.]',
    ]},
    { type: 'paragraph', text: "The Why Test confirms: *Why* will broadening one's abilities enable one to inspire curiosity? **Because** doing so makes one impossible to comprehend, creating mystery. Sentence 3 answers the \"Why\" for Sentence 2, confirming Sentence 2 is the conclusion." },

    { type: 'h3', text: 'Answer Choice Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) To be an intriguing person, one must be able to inspire... curiosity...', text: 'This quotes Sentence 1 verbatim. The phrase "It is a given" explicitly marks this as a **background principle** — the author assumes this, doesn\'t argue for it. This is the classic Background Principle trap.', badge: 'Trap: Background Principle', badgeColor: 'red' },
      { title: '(B) If one constantly broadens one\'s abilities..., one will be able to inspire... curiosity...', text: 'This accurately paraphrases Sentence 2 — the specific application the author argues for. The conditional framing ("If... then...") correctly captures the sufficient-condition relationship: broadening abilities is *sufficient* to inspire curiosity.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) If one\'s mind becomes impossible to fully comprehend...', text: 'This restates part of Sentence 3, which is the **premise** supporting the conclusion. The word "For" at the beginning of S3 marks it as evidence.', badge: 'Trap: The Premise', badgeColor: 'red' },
      { title: '(D) To inspire... curiosity..., one must constantly broaden one\'s abilities...', text: 'This is the **Logic-Flip** trap. The conclusion says broadening abilities is *sufficient* to inspire curiosity (\"will enable\"). This choice reverses it to say broadening is *necessary* (\"must\"). Sufficient ≠ Necessary.', badge: 'Trap: Logic-Flip (S↔N)', badgeColor: 'red' },
      { title: '(E) ...one will always have curiosity.', text: 'This misreads the conclusion entirely. The argument is about inspiring curiosity *in others*, not about *having* curiosity oneself. This shifts the subject from the audience to the individual.', badge: 'Trap: Subject Shift', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Background principle indicators (\"It is a given,\" \"It is well known,\" etc.) signal foundational premises, not conclusions.** The author isn't proving these statements — they're using them.\n**2. Distinguish the Rule from the Application.** The general rule sets the framework. The specific application built upon it is the main conclusion.\n**3. Watch for Logic-Flips.** A sufficient condition (\"X enables Y\") is not the same as a necessary condition (\"Y requires X\"). If an answer reverses this direction, it's a distortion.\n**4. The most abstract-sounding statement is not always the conclusion.** Background principles are abstract by nature, which makes them feel important. But importance ≠ conclusion." }
  ]
};
