import { Lesson } from '../../types';

export const Lesson1_Foundations: Lesson = {
  id: "55-1",
  title: "The Foundations of the Material Conditional",
  content: [
    { type: 'h2', text: 'Lesson 1: The Foundations of the Material Conditional' },
    { type: 'paragraph', text: '**Objective:** Master the basic conditional relationship and distinguish between Sufficient and Necessary conditions by accurately translating LSAT language into logical diagrams.' },
    { type: 'paragraph', text: 'Everything we do in this module — no matter how complicated — builds on this lesson. The contrapositive, conditional fallacies, quantifiers, and complex chains all rest on the foundation you establish here. Our goal is to make basic conditional logic second nature so that when you encounter it on test day, translation is automatic.' },

    { type: 'hr' },

    { type: 'h3', text: '1.1 The Conditional Statement (A → B)' },
    { type: 'paragraph', text: 'A conditional statement is a rule stating that if one thing is true, another thing must also be true. It creates a relationship of absolute dependency — not about time, not about cause-and-effect, but simply about what must coexist. If the trigger is present, the requirement is guaranteed.' },
    {
      type: 'table',
      headers: ['Component', 'Logical Role', 'Definition', 'Diagram Structure'],
      rows: [
        ['**Core Concept**', 'Absolute Dependency', 'If the Sufficient condition is true, the Necessary condition is **100% guaranteed** to coexist.', 'A → B'],
        ['**Sufficient**', 'The Trigger', 'The "If" clause. Its presence is enough to force the result.', 'A (Left of Arrow)'],
        ['**Necessary**', 'The Requirement', 'The "Then" clause. It is mandatory; if missing, the trigger cannot exist.', 'B (Right of Arrow)'],
        ['**The Arrow**', 'One-Way Flow', 'Represents the logical direction. It points strictly from Trigger to Requirement.', '→ (Points Forward)']
      ]
    },

    { type: 'h4', text: 'The "Paris → France" Example' },
    { type: 'paragraph', text: 'The best way to visualize this is with geography. Consider the statement: "If you are in Paris, then you are in France" (**Paris → France**).' },
    { type: 'paragraph', text: 'In this relationship, being in **Paris** is the **sufficient condition**. It is sufficient to prove your location; if I know you are in Paris, I know for a fact you are in France. Meanwhile, being in **France** is the **necessary condition**. It is a mandatory requirement — you literally cannot be in Paris without also being in France.' },
    { type: 'paragraph', text: 'Crucially, this relationship is a **one-way street**. Just because you are in the necessary condition (**France**), it does not mean you are in the sufficient condition (**Paris**). You could be in Nice, Lyon, or Bordeaux. The logical arrow points forward, never backward.' },

    { type: 'h4', text: 'Sufficient vs. Necessary: A Side-by-Side Comparison' },
    { type: 'paragraph', text: 'Students often struggle to keep sufficient and necessary conditions straight. This comparison table isolates the key differences.' },
    { type: 'table', headers: ['Feature', 'Sufficient Condition', 'Necessary Condition'], rows: [
      ['**Position in diagram**', 'Left side of arrow (A →)', 'Right side of arrow (→ B)'],
      ['**What it does**', 'Triggers the relationship; its presence **guarantees** the other condition.', 'Is required by the relationship; its **absence disproves** the other condition.'],
      ['**Everyday analogy**', 'A light switch being flipped ON is sufficient to turn on the light.', 'Electricity is necessary for the light to turn on.'],
      ['**What happens when present?**', 'The necessary condition **must** also be present.', 'The sufficient condition **might or might not** be present.'],
      ['**What happens when absent?**', 'We learn **nothing** — the necessary condition could still be present for other reasons.', 'The sufficient condition **cannot** be present (this is the contrapositive).'],
      ['**Common LSAT signals**', 'If, When, Whenever, All, Every, Any, Each', 'Only if, Only when, Requires, Must, Needs, Then'],
    ]},

    { type: 'h4', text: 'The Trap of Conversation vs. The Reality of Logic' },
    { type: 'paragraph', text: 'In daily life, we often assume a two-way street that is not there. Imagine a manager says: "If you hit your sales target, you will get a $5,000 bonus."' },
    { type: 'paragraph', text: 'An employee might assume: "If I don\'t hit my target, I won\'t get the bonus."' },
    { type: 'paragraph', text: 'On the LSAT, that assumption is a fatal error. The statement **only** tells you what happens if you hit the target. It makes no promise about what happens if you **don\'t**. Maybe you still get a bonus because of a company-wide profit-sharing plan or a different performance metric. Logic is a strict, one-way street.' },

    { type: 'hr' },

    { type: 'h3', text: '1.2 Indicator Words & Translation' },
    { type: 'paragraph', text: 'The LSAT will not always make it easy with a simple "if-then" sentence. In fact, the test makers deliberately use a wide variety of words to hide the logical structure.' },
    { type: 'paragraph', text: 'Your mechanical skill — and the ideal first step in any translation — is to identify the specific **indicator words** that tell you which concept is the Trigger (Sufficient) and which is the Requirement (Necessary). Think of these words as road signs. Just as a stop sign tells you exactly what to do with your car, an indicator word tells you exactly where to place a concept in your diagram.' },
    { type: 'list', items: [
        '**Trigger (Sufficient) Signals:** These words introduce the condition that starts the chain reaction. If you see words that mean "any time this happens" (like *When, Whenever,* or *All*), you are looking at a Sufficient condition.',
        '**Requirement (Necessary) Signals:** These words introduce the condition that is mandatory. If you see words that mean "this is required" (like *Only, Must,* or *Requires*), you are looking at a Necessary condition.'
    ] },
    { type: 'paragraph', text: 'We provide a complete **Quick Reference Chart** of these words at the end of this lesson. For now, focus on spotting them in the examples below.' },

    { type: 'hr' },

    { type: 'h3', text: '1.3 Practice: Diagramming Conditional Statements' },
    { type: 'paragraph', text: 'Before tackling full LSAT questions, practice translating plain English conditionals into arrow notation. The key is to identify the indicator word, determine which condition it signals, and place both conditions on the correct sides of the arrow.' },

    { type: 'question-card',
      id: 'illustrative-55-1-001',
      questionType: 'Conditional Reasoning',
      difficulty: 'easy',
      stimulus: 'A university handbook states the following policy: "Any student who is caught plagiarizing will be expelled from the university." Suppose a student named Kenji has been caught plagiarizing.',
      question: 'If the statements above are true, which one of the following can be properly concluded?',
      options: [
        '(A) Kenji has been expelled from the university. (Correct)',
        '(B) If Kenji has not been caught plagiarizing, then he has not been expelled.',
        '(C) Every student who has been expelled was caught plagiarizing.',
        '(D) If Kenji has been expelled, then he was caught plagiarizing.',
        '(E) No student who avoids plagiarizing will be expelled.',
      ],
    },

    { type: 'h4', text: 'Walkthrough' },
    { type: 'paragraph', text: '**Step 1: Identify the indicator word.**\n\nThe policy says "**Any** student who is caught plagiarizing will be expelled." The word "any" is a sufficient condition indicator — it tells us that being caught plagiarizing triggers the consequence.' },
    { type: 'paragraph', text: '**Step 2: Diagram the rule.**\n\n`Caught Plagiarizing → Expelled`\n\nThe sufficient condition (caught plagiarizing) goes on the left. The necessary condition (expelled) goes on the right.' },
    { type: 'paragraph', text: '**Step 3: Apply the rule to the facts.**\n\nKenji has been caught plagiarizing. He satisfies the sufficient condition. Therefore, the necessary condition must hold: Kenji has been expelled.' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, colWidth: 'narrow', items: [
      { title: '(A)', text: 'Correct. Kenji triggers the sufficient condition (caught plagiarizing), so the necessary condition (expelled) must follow. This is a valid forward inference.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B)', text: 'Incorrect. This is a **Mistaken Negation** — it negates both sides without reversing. The rule says nothing about what happens when a student is NOT caught plagiarizing. A student could be expelled for other reasons.', badge: 'Mistaken Negation', badgeColor: 'red' },
      { title: '(C)', text: 'Incorrect. This is a **Mistaken Reversal** — it reads the arrow backward. The rule tells us plagiarizers are expelled, not that all expelled students were plagiarizers. A student could be expelled for violence, fraud, or other misconduct.', badge: 'Mistaken Reversal', badgeColor: 'red' },
      { title: '(D)', text: 'Incorrect. This also reverses the arrow. It says `Expelled → Caught Plagiarizing`, which the original rule does not support.', badge: 'Mistaken Reversal', badgeColor: 'red' },
      { title: '(E)', text: 'Incorrect. The rule addresses what happens when plagiarizing IS detected. It says nothing about students who avoid plagiarizing — they might still be expelled for entirely different violations.', badge: 'Out of Scope', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: '1.4 LSAT in Action: Diagramming a Conditional Argument' },
    { type: 'paragraph', text: 'Now let\'s apply this to a real LSAT question. This is a Sufficient Assumption question where you must find the missing link that makes the conclusion 100% valid.' },
    { type: 'paragraph', text: '**Question ID: PT-109-S-4-Q-5**' },
    { type: 'blockquote', text: '**Stimulus**\nAstronaut: Any moon, by definition, orbits some planet in a solar system. So, the moons in solar system S4 all orbit the planet Alpha.' },
    { type: 'paragraph', text: '**Question**\nThe astronaut\'s conclusion follows logically if which one of the following is assumed?' },
    { type: 'options', items: [
        "(A) There is only one moon in S4.",
        "(B) Every moon in S4 orbits the same planet.",
        "(C) Alpha is the only planet in S4.",
        "(D) Every planet in S4 is orbited by more than one moon.",
        "(E) There is at least one moon that orbits Alpha."
    ]},

    { type: 'h4', text: 'Breakdown & Explanation' },
    { type: 'paragraph', text: '**Analysis:** To understand this argument, we must translate the English sentences into conditional diagrams.' },
    { type: 'list', items: [
        '**Premise (The Rule):** "Any moon, by definition, orbits some planet..."\n**Indicator:** "**Any**" communicates complete membership. It tells us the rule applies to every single moon, making it the Sufficient condition.\n**Diagram:** `Moon → Orbits a Planet`',
        '**Conclusion:** "The moons in solar system S4 all orbit the planet Alpha."\n**Indicator:** "**All**" also communicates complete membership. It applies the claim to every moon in S4, making it the Sufficient condition.\n**Diagram:** `Moon in S4 → Orbits Alpha`'
    ] },
    { type: 'paragraph', text: '**The Logic Chain & The Gap:** Let\'s line up our diagrams to visualize the "Gap" — the missing link between our evidence and our conclusion.\n\n1.  **Premise:** `Moon in S4 → Orbits a Planet`\n2.  **Conclusion:** `Moon in S4 → Orbits Alpha`' },
    { type: 'paragraph', text: '**The Disconnect:** Notice that the trigger (Sufficient) is the same, but the requirement (Necessary) has changed. The premise only guarantees the moons orbit *some planet*. The conclusion insists that planet must be *Alpha*. Logic does not allow us to just swap terms; we need a bridge.' },
    { type: 'paragraph', text: '**The Bridge:** We need a new rule that connects the vague requirement ("Orbits a Planet") to the specific requirement ("Orbits Alpha").\n\n**Required Link:** `Orbits a Planet (in S4) → Orbits Alpha`' },
    { type: 'callout', title: 'The Solution', text: 'Answer Choice (C) provides this exact link. By stating that Alpha is the *only* planet in S4, it establishes that if you orbit a planet in S4, it must be Alpha.\n\n`Planet in S4 → Alpha`\n\nNow the chain is complete:\n1. `Moon in S4 → Orbits a Planet` (Premise)\n2. `Orbits a Planet → Orbits Alpha` (Answer C)\n3. **Therefore: `Moon in S4 → Orbits Alpha` (Conclusion)**' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Explanation' }, colWidth: 'narrow', items: [
        { title: '(A)', text: 'Incorrect. Knowing there is only one moon does not help us translate the rule. Even if there is one moon, we don\'t know it orbits Alpha.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(B)', text: 'Incorrect. This tells us `Moon → Orbits Same Planet`. But "Same Planet" is not "Alpha." We cannot complete the chain.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(C)', text: 'Correct. This establishes that `Planet in S4 → Alpha`. This allows us to replace the generic "Planet" in our premise with the specific "Alpha" needed for the conclusion.', badge: 'Correct', badgeColor: 'green' },
        { title: '(D)', text: 'Incorrect. This reverses the logic, talking about planets orbited by moons, rather than what moons orbit.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(E)', text: 'Incorrect. This says `Some Moon → Orbits Alpha`. The conclusion requires `All Moons → Orbit Alpha`.', badge: 'Incorrect', badgeColor: 'red' }
    ]},

    { type: 'hr' },

    { type: 'h3', text: '1.5 LSAT in Action: Connecting Specifics to General Rules' },
    { type: 'paragraph', text: 'Here is another logic puzzle where the argument jumps from a general rule to a specific claim. Your job is to find the missing link that validates the jump.' },
    { type: 'paragraph', text: '**Question ID: PT-118-S-3-Q-4**' },
    { type: 'blockquote', text: '**Stimulus**\nPsychiatrist: Take any visceral emotion you care to consider. There are always situations in which it is healthy to try to express that emotion. So, there are always situations in which it is healthy to try to express one\'s anger.' },
    { type: 'paragraph', text: '**Question**\nThe conclusion of the argument follows logically if which one of the following is assumed?' },
    { type: 'options', items: [
        "(A) Anger is always expressible.",
        "(B) Anger is a visceral emotion.",
        "(C) Some kinds of emotions are unhealthy to express.",
        "(D) All emotions that are healthy to express are visceral.",
        "(E) An emotion is visceral only if it is healthy to express."
    ]},

    { type: 'h4', text: 'Breakdown & Explanation' },
    { type: 'paragraph', text: '**Analysis:** Let\'s translate the psychiatrist\'s statements into conditional logic using full quotes from the text.' },
    { type: 'list', items: [
        '**Premise (The Rule):** "Take **any visceral emotion** you care to consider. There are **always** situations in which it is **healthy to try to express** that emotion."\n**Indicator:** "**Any**" serves as the Sufficient indicator. "**Always**" strengthens this sufficiency.\n**Diagram:** `Visceral Emotion → Healthy Situations to Express`',
        '**Conclusion:** "So, there are **always** situations in which it is **healthy to try to express one\'s anger**."\n**Analysis:** The conclusion relies on the same "Always" structure to imply that "Anger" is sufficient to guarantee the existence of these healthy situations.\n**Diagram:** `Anger → Healthy Situations to Express`'
    ] },
    { type: 'paragraph', text: '**The Logic Chain & The Gap:**\n1.  `Visceral Emotion → Healthy Situations to Express` (Premise)\n2.  `Anger → Healthy Situations to Express` (Conclusion)' },
    { type: 'paragraph', text: '**The Disconnect:** Both share the "right ending" but have a "wrong start." The argument assumes that Anger belongs to the "Visceral Emotion" category.' },
    { type: 'callout', title: 'The Bridge', text: 'We need to explicitly place "Anger" inside the "Visceral Emotion" category so it triggers the rule.\n\n**Required Link:** `Anger → Visceral Emotion`' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Explanation' }, colWidth: 'narrow', items: [
        { title: '(A)', text: 'Incorrect. This represents a scope shift. The concept of "always expressible" refers to *capability*, whereas the argument is about *healthiness*.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(B)', text: 'Correct. This supplies the exact logical bridge. By confirming that "Anger" is a member of the "Visceral Emotion" group, it allows anger to trigger the sufficient condition of the premise.', badge: 'Correct', badgeColor: 'green' },
        { title: '(C)', text: 'Incorrect. This focuses on emotions that are *unhealthy* to express. This is irrelevant because our goal is to prove a positive claim.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(D)', text: 'Incorrect. This is a **Mistaken Reversal**. It creates the rule: `Healthy → Visceral`. Even if true, it does not help us prove that Anger is healthy.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(E)', text: 'Incorrect. The phrase "**Only if**" introduces a Necessary condition. This translates to: `Visceral → Healthy`. This is merely a restatement of the original premise.', badge: 'Incorrect', badgeColor: 'red' }
    ]},

    { type: 'hr' },

    { type: 'h3', text: '1.6 The Bi-Conditional (The Two-Way Street)' },
    { type: 'paragraph', text: 'The bi-conditional is a rare but powerful logic structure where the relationship is perfectly symmetrical. Unlike the standard conditional, which is a strictly one-way street, the bi-conditional creates a logical loop where two terms are tied together completely.' },
    { type: 'table', headers: ['Feature', 'Standard Conditional (A → B)', 'Bi-Conditional (A ↔ B)'], rows: [
      ['**Direction**', 'One-way: A guarantees B, but B does not guarantee A.', 'Two-way: A guarantees B **and** B guarantees A.'],
      ['**Diagram**', '`A → B`', '`A ↔ B` (shorthand for `A → B` and `B → A`)'],
      ['**What A means for B**', 'A being true means B must be true.', 'A being true means B must be true.'],
      ['**What B means for A**', 'B being true tells us **nothing** about A.', 'B being true means A must be true.'],
      ['**LSAT indicators**', '"If," "When," "All," "Every," "Any"', '"If and only if," "Then and only then," "Is equivalent to," "Vice-versa"'],
      ['**Frequency on LSAT**', 'Extremely common — appears in most conditional questions.', 'Rare — appears mainly in Logic Games and occasional LR questions.'],
    ]},
    { type: 'list', items: [
        '**Key Indicators:** The most common is "**if and only if**." Others include "**then and only then**," "**is equivalent to**," "**vice-versa**," or "**identical to**."',
        '**Meaning:** The bi-conditional notation `A ↔ B` is simply shorthand for two separate rules combined: (`A → B`) and (`B → A`).',
        '**Symmetry:** In this relationship, A is both sufficient and necessary for B.',
        '**Example:** "G is selected **if and only if** H is selected." (`G ↔ H`). If G is in, H is in. If H is in, G is in. If G is out, H must be out. If H is out, G must be out.'
    ] },

    { type: 'hr' },

    { type: 'h3', text: '1.7 Quick Reference: Indicator Word Chart' },
    { type: 'table', headers: ['Relationship', 'Structure', 'Definition', 'Condition', 'Indicator Words', 'Diagram'], rows: [
        ['**Basic Conditional**', 'A → B', 'One-way guaranteed relationship.', '**Sufficient (Trigger)**', 'If, When, Whenever, All, Every, Any, Each, The Only', 'Left side (`A → B`)'],
        ['', '', '', '**Necessary (Requirement)**', 'Then, Only, Only if, Only when, Must, Requires, Needs, Requirement', 'Right side (`A → B`)'],
        ['**Bi-Conditional**', 'A ↔ B', 'Two-way relationship; both imply each other.', '**Two-Way**', 'If and only if, Then and only then, Vice-versa, Is equivalent to', 'Both sides (`A ↔ B`)']
    ] },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: '**1. The arrow is a one-way street.** Logic flows from the Trigger (Sufficient) to the Requirement (Necessary). When the trigger is absent, we learn nothing about the requirement — it might still be present for other reasons.\n\n**2. Sufficient means "enough to guarantee."** If the sufficient condition is present, the necessary condition is 100% guaranteed. No exceptions.\n\n**3. Necessary means "required."** If the necessary condition is absent, the sufficient condition cannot exist. This is the basis of the contrapositive.\n\n**4. Indicator words are your compass.** Spot the specific word — "if," "all," "only," "requires" — and you immediately know where to place each concept in your diagram.\n\n**5. Translate, don\'t assume.** Diagram exactly what is written. Never add unstated assumptions, reverse the arrow, or treat a one-way rule as a two-way rule. The LSAT is designed to punish intuitive leaps.\n\n**6. The bi-conditional is the exception.** When you see "if and only if" or equivalent language, the relationship genuinely flows both ways. This is rare on the LSAT but critical to recognize when it appears.' },

    { type: 'paragraph', text: '**Your assignment:** As you work through conditional LSAT questions, focus on diagramming every conditional statement you encounter. Build the habit: spot the indicator word, identify the sufficient and necessary conditions, and draw the arrow correctly. Speed and accuracy in diagramming will compound across every lesson in this module.' },
  ]
};
