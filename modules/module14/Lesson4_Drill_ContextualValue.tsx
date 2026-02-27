import { Lesson } from '../../types';

export const Lesson4_Drill_ContextualValue: Lesson = {
  id: "14-4",
  title: "Drill: Contextual Value (PT-119-S-3-Q-8)",
  content: [
    { type: 'h2', text: 'Contextual Value' },
    { type: 'paragraph', text: 'A **Contextual Value** generalization captures a recurring LSAT pattern: a single trait, quality, or characteristic is a liability in one context but becomes an asset in another. The stimulus presents a "double-edged sword" \u2014 the same attribute produces opposite outcomes depending on the role, environment, or situation in which it operates. Your task is to strip away the specific details and extract the principle that *context determines value*.' },

    { type: 'paragraph', text: 'This pattern differs from a simple trade-off. In a trade-off, one action produces both a benefit and a cost simultaneously. In a contextual value scenario, the trait itself does not change \u2014 only the setting changes, and with it, the trait\'s entire valence flips from negative to positive (or vice versa). The principle must capture this *context-dependent reversal*, not merely list pros and cons.' },

    { type: 'h3', text: 'What Makes Contextual Value Distinctive' },
    { type: 'list', ordered: true, items: [
      '**One trait, two contexts.** The stimulus describes a single characteristic operating in two different settings, roles, or situations.',
      '**Opposite outcomes.** In Context A the trait is a weakness; in Context B the same trait is a strength (or vice versa).',
      '**The trait itself is neutral.** The stimulus implies that the trait is neither inherently good nor inherently bad \u2014 its value is determined entirely by where and how it is deployed.',
      '**The correct principle captures the reversal.** An answer that only describes one side of the coin (the weakness or the strength, but not both) is a partial match and therefore wrong.',
    ]},

    { type: 'callout', variant: 'default', title: 'Key Signal', text: 'Look for contrast words \u2014 "but," "however," "precisely because," "on the other hand" \u2014 that pivot from one context to another. These structural markers signal that the stimulus is setting up a contextual value dynamic.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Contextual Value (PT-119-S-3-Q-8)' },
    { type: 'paragraph', text: 'This drill demonstrates the contextual value pattern using a jazz history scenario. Read the stimulus and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Understand the Situation' },
    { type: 'paragraph', text: 'The stimulus describes gifted jazz pianists who possess a specific trait: they have **no striking musical ideas**. The passage then shows this trait operating in two distinct contexts.' },

    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'The Players', text: 'Gifted jazz pianists \u2014 technically skilled musicians who lack originality in musical ideas.', badge: 'Who', badgeColor: 'blue' },
      { title: 'The Trait', text: '"No striking musical ideas" \u2014 a lack of original creative vision. This single characteristic is the fulcrum of the entire argument.', badge: 'The Variable', badgeColor: 'indigo' },
      { title: 'Context 1: Leadership Role', text: 'When these pianists led recording sessions, the absence of striking ideas meant they produced **no memorable recordings**. In this context, the trait is a clear weakness.', badge: 'Weakness', badgeColor: 'red' },
      { title: 'Context 2: Supporting Role', text: '"Precisely because" they lacked strong ideas of their own, they could respond quickly and adaptively to the ideas of imaginative leaders. This made them ideal collaborators, and they contributed "masterful touches to some of the greatest jazz recordings."', badge: 'Strength', badgeColor: 'green' },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Key Dynamic' },
    { type: 'paragraph', text: 'The argument is built around a paradox: a single quality (lacking striking ideas) is presented as both a flaw and a virtue. The **context** \u2014 whether the pianist is leading or supporting \u2014 determines which side of the trait manifests.' },
    { type: 'paragraph', text: 'Crucially, the word "precisely because" signals that the strength in Context 2 is a *direct consequence* of the same attribute that was a weakness in Context 1. The trait did not change; the role changed.' },
    { type: 'paragraph', text: '**Key Dynamic:** A characteristic that is a liability in one role can be the very thing that enables excellence in a different role.' },

    { type: 'h4', text: 'Step 3: Abstract to General Terms' },
    { type: 'table', headers: ['Specific Detail', 'Abstracted Version'], rows: [
      ['"Gifted pianists"', '"Individuals" or "people"'],
      ['"No striking musical ideas"', '"A trait" or "a characteristic"'],
      ['"Led no memorable recording sessions"', '"A weakness in some settings"'],
      ['"Responded quickly to imaginative leaders"', '"A strength in other settings"'],
      ['"Adding masterful touches to greatest recordings"', '"Contributing to greatness"'],
    ]},
    { type: 'paragraph', text: '**Pre-phrase:** "A trait that is a weakness in one context can be a strength \u2014 and contribute to greatness \u2014 in another context."' },

    { type: 'h4', text: 'Step 4: Evaluate Each Answer' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) The success of a group enterprise depends on the ability of the leader to recognize the weaknesses of others in the group.', text: 'The stimulus focuses on the **paradoxical nature of the pianist\'s trait**, not on the leader\'s perceptiveness. We are never told that the leaders recognized these pianists\' weaknesses and strategically deployed them. The leader\'s perspective is entirely absent from the passage. This answer shifts the focus to the wrong player.', badge: 'Mismatched Focus', badgeColor: 'red' },
      { title: '(B) The production of any great work requires contributions from those who are unimaginative but technically skilled.', text: 'The word "requires" creates a necessary condition: **every** great work needs unimaginative contributors. The stimulus says these pianists contributed to "some of the greatest" recordings \u2014 it does not claim that great recordings are impossible without such contributors. "Any" and "requires" are far too strong for what a single historical observation can support.', badge: 'Too Strong', badgeColor: 'red' },
      { title: '(C) People without forceful personalities cannot become great leaders in a field.', text: 'The stimulus links a lack of "striking musical ideas" to an inability to lead memorable sessions. This answer substitutes "forceful personalities" \u2014 a different concept entirely. A lack of creative ideas is not the same as lacking a forceful personality; a pianist could be highly assertive but still unoriginal. This imports an unsupported concept.', badge: 'Imported Concept', badgeColor: 'red' },
      { title: '(D) A trait that is a weakness in some settings can contribute to greatness in other settings.', text: 'This perfectly captures the contextual value dynamic. "A trait" generalizes "no striking musical ideas." "A weakness in some settings" captures the failed leadership context. "Contribute to greatness in other settings" captures the successful supporting role. The principle accounts for **both sides** of the coin and correctly identifies context as the determining variable. The stimulus is a textbook example of this proposition.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) No one can achieve great success without the help of others who are able to bring one\'s ideas to fruition.', text: 'This is a general platitude about teamwork and collaboration. While the stimulus does involve collaboration, this principle misses the **core insight** \u2014 that the same trait flips from weakness to strength depending on context. Answer (E) says nothing about context-dependent value; it merely asserts that success requires collaborators. It describes a true aspect of the scenario but not the *lesson* of the scenario.', badge: 'Wrong Lesson', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: Summary Table' },
    { type: 'table', headers: ['Answer', 'What It Focuses On', 'Matches Core Dynamic?', 'Verdict'], rows: [
      ['(A) Leader recognition', 'The leader\'s perceptiveness', '\u2717 \u2014 Leader\'s perspective absent from stimulus', 'Mismatched Focus'],
      ['(B) Requires unimaginative contributors', 'Necessary condition for great works', '\u2717 \u2014 "Any" and "requires" too strong', 'Too Strong'],
      ['(C) Forceful personalities', 'Personality type \u2192 leadership', '\u2717 \u2014 "Ideas" \u2260 "personality"', 'Imported Concept'],
      ['**(D) Weakness \u2192 Strength by context**', '**Context-dependent trait value**', '**\u2713 \u2014 Captures both sides**', '**Correct \u2713**'],
      ['(E) Success needs collaborators', 'Teamwork in general', '\u2717 \u2014 Misses the context-reversal insight', 'Wrong Lesson'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Contextual Value: Common Traps' },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Spot It' }, items: [
      { title: 'One-Sided Capture', text: 'The answer describes only the weakness side or only the strength side of the trait. A contextual value principle must capture **both** sides \u2014 the trait operating in two different contexts with opposite results. If the answer only says "this trait is bad" or "this trait is good," it is incomplete.', badge: 'Most Common', badgeColor: 'blue' },
      { title: 'Wrong Player Focus', text: 'The answer shifts attention to a different person or entity (e.g., the leader instead of the pianist). Check: does the stimulus analyze the behavior or perspective of the entity the answer focuses on? If not, the answer has the wrong subject.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Concept Substitution', text: 'The answer replaces the actual trait with a related but different concept (e.g., "personality" instead of "ideas," or "effort" instead of "talent"). The abstraction must generalize the trait, not swap it for a different one.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Teamwork Generalization', text: 'The answer latches onto the collaborative aspect of the scenario and produces a generic principle about teamwork, missing the specific insight about how context determines the value of a trait.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: '**1. Contextual value = one trait, two contexts, opposite outcomes.** The same characteristic is a weakness in one setting and a strength in another. The correct principle must capture this reversal, not just one side of it.\n\n**2. "Precisely because" is a gift.** When the stimulus uses language like "precisely because" or "the very trait that," it is explicitly telling you that the same attribute drives both the negative and positive outcomes. This is the strongest signal of a contextual value pattern.\n\n**3. The trait is neutral; context determines value.** Do not look for an answer that judges the trait as inherently good or bad. The correct principle will say the trait *can* be good or bad depending on the setting.\n\n**4. Both sides must be captured.** An answer that only describes the weakness ("people without ideas can\'t lead") or only the strength ("responsive people make great collaborators") is a partial match. The correct answer accounts for the full dynamic.\n\n**5. Abstraction \u2260 substitution.** When abstracting, generalize the trait to a higher category ("a characteristic"), don\'t replace it with a different specific concept ("a personality type"). The logical relationship must be preserved.' },
  ]
};
