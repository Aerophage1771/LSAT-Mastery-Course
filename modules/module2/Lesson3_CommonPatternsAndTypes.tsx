import { Lesson } from '../../types';

export const Lesson3_CommonPatternsAndTypes: Lesson = {
  id: "2-3",
  title: "Common Patterns & Types",
  content: [
    { type: 'h2', text: 'Main Conclusion — Common Patterns & Types' },
    { type: 'paragraph', text: "While the task is always to find the main conclusion, the *nature* of that conclusion can vary. Knowing the common patterns will help you spot the author's ultimate point more quickly and confidently. Think of this as a spotter's guide to the four \"species\" of conclusions you will encounter on the LSAT." },

    { type: 'hr' },

    { type: 'h3', text: 'Summary Table' },
    { type: 'paragraph', text: "Here is a bird's-eye view of all four conclusion types. Refer back to this table as you study each type in depth below." },
    { type: 'table', headers: ['Type', 'Frequency', 'Core Function', 'Key Indicator Words'], rows: [
      ['**1. The Rebuttal**', '~45%', 'Rejects or critiques a claim held by others', '*But, However, Yet* + *mistaken, unfounded, dubious*'],
      ['**2. The Prescription**', '~25%', 'Makes a judgment or recommends an action', '*should, must, ought to, needs to, unwise, unfair*'],
      ['**3. The Explanation**', '~20%', 'Proposes a cause or reason for a phenomenon', '*The reason is…, is caused by…, is explained by…*'],
      ['**4. The Prediction / Fact**', '~10%', 'States a descriptive fact or future outcome', '*will, is likely to, can be expected to*'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '1. The Rebuttal (The Counter-Argument)' },
    { type: 'paragraph', text: "This is the most common argument structure on the LSAT (~45%). The author's primary goal is to **tear down an existing claim**. The stimulus introduces a position held by others, and the main conclusion is the author's direct rejection of that position." },

    { type: 'h4', text: 'How to Spot It' },
    { type: 'process', title: 'The Rebuttal Structure', steps: [
      '**They Say:** The argument opens with a viewpoint attributed to others ("Some people claim X…", "It is commonly believed that…").',
      '**The Pivot:** A strong contrast word — `But`, `However`, `Yet` — signals the shift to the author\'s position.',
      '**I Say (The Conclusion):** The author states their rejection, using words like *mistaken, ill founded, dubious, unconvincing, not the case*.',
      '**Because (The Evidence):** The author provides reasons why the opposing view is wrong.',
    ]},

    { type: 'h4', text: 'Example Stimulus' },
    { type: 'blockquote', text: '"Many critics argue that violent video games increase aggressive behavior in teenagers. However, this claim is not supported by the evidence. Longitudinal studies tracking teenagers over five-year periods have found no statistically significant correlation between game exposure and real-world aggression."' },
    { type: 'breakdown', labels: { title: 'Component', text: 'Role' }, items: [
      { title: '"Many critics argue that violent video games increase aggressive behavior..."', text: 'The opposing viewpoint being set up for rejection.', badge: 'Opposing View', badgeColor: 'slate' },
      { title: '"However, this claim is not supported by the evidence."', text: 'The author\'s rejection — the **main conclusion**. Introduced by the pivot word "However."', badge: 'Main Conclusion', badgeColor: 'indigo' },
      { title: '"Longitudinal studies... have found no statistically significant correlation..."', text: 'The evidence supporting the author\'s rejection.', badge: 'Premise', badgeColor: 'slate' },
    ]},

    { type: 'h4', text: 'Rebuttal Indicator Words' },
    { type: 'table', headers: ['Pivot Words (Before Conclusion)', 'Rejection Words (In Conclusion)'], rows: [
      ['But', 'mistaken'],
      ['However', 'ill founded / unfounded'],
      ['Yet', 'dubious / questionable'],
      ['Nevertheless', 'unconvincing'],
      ['On the contrary', 'not the case'],
      ['In fact', 'fails to account for'],
      ['Actually', 'overstated / exaggerated'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Rebuttal Shortcut', text: "When you see the \"They Say / But / I Say\" pattern, the conclusion is almost always the sentence that follows the pivot word. This pattern is so reliable that experienced test-takers can identify the conclusion in under 10 seconds on Rebuttal questions." },

    { type: 'hr' },

    { type: 'h2', text: '2. The Prescription (Recommendations & Judgments)' },
    { type: 'paragraph', text: "This type (~25%) moves beyond describing the world and makes a **judgment** about it or recommends a **course of action**. The author tells you what is good/bad, right/wrong, or what someone *should* or *should not* do." },

    { type: 'h4', text: 'How to Spot It' },
    { type: 'process', title: 'The Prescription Structure', steps: [
      '**The Situation:** The author presents facts, a problem, or context.',
      '**The Judgment (The Conclusion):** Based on the situation, the author issues a recommendation or value judgment. This is the main conclusion.',
      '**The Rationale:** The author explains *why* their judgment is correct.',
    ]},

    { type: 'h4', text: 'Example Stimulus' },
    { type: 'blockquote', text: '"Emergency room wait times have tripled in the past decade, and patient satisfaction scores have dropped accordingly. Hospitals that have adopted triage-nurse screening protocols have reduced wait times by 40%. All major hospitals should therefore implement triage-nurse screening."' },
    { type: 'breakdown', labels: { title: 'Component', text: 'Role' }, items: [
      { title: '"Emergency room wait times have tripled... satisfaction scores have dropped."', text: 'Background facts establishing the problem.', badge: 'Premise', badgeColor: 'slate' },
      { title: '"Hospitals that adopted triage-nurse screening reduced wait times by 40%."', text: 'Evidence supporting the recommendation.', badge: 'Premise', badgeColor: 'slate' },
      { title: '"All major hospitals should therefore implement triage-nurse screening."', text: 'The prescriptive recommendation — the **main conclusion**. Signaled by "should" and "therefore."', badge: 'Main Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Prescriptive Language Indicators' },
    { type: 'table', headers: ['Recommendation Words', 'Judgment Words'], rows: [
      ['should / should not', 'unfair / unjust'],
      ['must / needs to', 'unwise / imprudent'],
      ['ought to', 'pointless / futile'],
      ['it is advisable / inadvisable', 'it is better / worse that'],
      ['is required / is necessary', 'irresponsible / reckless'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '3. The Explanation (Causal Claims)' },
    { type: 'paragraph', text: "These arguments (~20%) start with a known fact, observation, or puzzle and then seek to explain **why** it is the case. The main conclusion is the proposed cause or reason. The author isn't trying to prove *that* something happened, but *why* it happened." },

    { type: 'h4', text: 'How to Spot It' },
    { type: 'process', title: 'The Explanation Structure', steps: [
      '**The Phenomenon:** The argument opens with a known fact or observation that needs explaining.',
      '**The Explanation (The Conclusion):** The author proposes a cause or reason for the phenomenon. This is the main conclusion.',
      '**Supporting Evidence:** The author provides additional facts that support their proposed explanation.',
    ]},

    { type: 'h4', text: 'Example Stimulus' },
    { type: 'blockquote', text: '"Bird populations in suburban areas have increased over the past twenty years, even as habitat loss from development has accelerated. This increase is best explained by the proliferation of backyard bird feeders, which now appear in over 60% of suburban homes compared to just 15% two decades ago."' },
    { type: 'breakdown', labels: { title: 'Component', text: 'Role' }, items: [
      { title: '"Bird populations in suburban areas have increased... even as habitat loss has accelerated."', text: 'The phenomenon that needs explaining — a surprising observation.', badge: 'Background / Premise', badgeColor: 'slate' },
      { title: '"This increase is best explained by the proliferation of backyard bird feeders..."', text: 'The proposed cause — the **main conclusion**. Signaled by "is best explained by."', badge: 'Main Conclusion', badgeColor: 'indigo' },
      { title: '"...which now appear in over 60% of suburban homes compared to just 15% two decades ago."', text: 'Statistical evidence supporting the proposed explanation.', badge: 'Premise', badgeColor: 'slate' },
    ]},

    { type: 'h4', text: 'Explanatory Language Indicators' },
    { type: 'table', headers: ['Causal Conclusion Words', 'Phenomenon Setup Words'], rows: [
      ['The reason for this is...', 'Surprisingly / Curiously'],
      ['This is because...', 'Despite this...'],
      ['is caused by / is due to', 'Paradoxically'],
      ['is best explained by...', 'Even though...'],
      ['can be attributed to...', 'While one would expect...'],
      ['is the result of...', 'It is puzzling that...'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '4. The Prediction or Factual Claim' },
    { type: 'paragraph', text: "This is the most straightforward type (~10%). The author uses a set of premises to prove a simple descriptive **fact** or make a **prediction** about a future event. It is a claim about what *is* or *will be* true." },

    { type: 'h4', text: 'How to Spot It' },
    { type: 'process', title: 'The Prediction / Fact Structure', steps: [
      '**The Evidence:** The argument presents a set of facts, trends, or observations.',
      '**The Claim (The Conclusion):** Based on the evidence, the author declares something to be true or predicts a future outcome. This is the main conclusion.',
    ]},

    { type: 'h4', text: 'Example Stimulus' },
    { type: 'blockquote', text: '"Online retail sales have grown by an average of 12% per year for the past five years, while brick-and-mortar retail has contracted by 3% annually. Consumer preference surveys confirm a strong shift toward online shopping. Thus, within the next decade, online retail will surpass brick-and-mortar retail in total revenue."' },
    { type: 'breakdown', labels: { title: 'Component', text: 'Role' }, items: [
      { title: '"Online retail sales have grown... brick-and-mortar has contracted..."', text: 'Factual trends offered as evidence.', badge: 'Premise', badgeColor: 'slate' },
      { title: '"Consumer preference surveys confirm a strong shift..."', text: 'Additional supporting data.', badge: 'Premise', badgeColor: 'slate' },
      { title: '"Thus, within the next decade, online retail will surpass brick-and-mortar..."', text: 'A prediction about the future — the **main conclusion**. Signaled by "Thus" and "will."', badge: 'Main Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Predictive / Factual Language Indicators' },
    { type: 'table', headers: ['Prediction Words', 'Factual Claim Words'], rows: [
      ['will / will not', 'is / is not'],
      ['is likely to / is unlikely to', 'has been shown to'],
      ['can be expected to', 'it is the case that'],
      ['is poised to / is set to', 'it is clear that'],
      ['in the future', 'the evidence shows that'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Quick Pattern Matching' },
    { type: 'paragraph', text: "When you encounter a Main Conclusion question, use this rapid identification process to classify the argument type before diving into the details:" },

    { type: 'process', title: 'Rapid Type Identification', steps: [
      '**Scan for attribution:** Does the argument introduce someone else\'s view ("Some argue...", "Critics claim...")? If yes → likely a **Rebuttal**.',
      '**Scan for prescriptive language:** Does the argument use "should," "must," "ought to," or value judgments like "unfair" or "unwise"? If yes → likely a **Prescription**.',
      '**Scan for causal language:** Does the argument propose a reason for an observed phenomenon ("This is because...", "is explained by...")? If yes → likely an **Explanation**.',
      '**Default:** If none of the above, the argument is probably stating a fact or making a prediction → likely a **Prediction / Factual Claim**.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Pivot Word Reference' },
    { type: 'paragraph', text: "Pivot words are critical structural markers. They signal a shift in the argument's direction — typically from background or an opposing view to the author's own position. In Rebuttal arguments, the conclusion almost always follows the pivot." },
    { type: 'table', headers: ['Pivot Word', 'Typical Function', 'What Follows'], rows: [
      ['**But**', 'Strong contrast; dismisses what came before', 'Author\'s conclusion (rejection of prior claim)'],
      ['**However**', 'Formal contrast; same as "But" in function', 'Author\'s conclusion or key qualification'],
      ['**Yet**', 'Unexpected contrast; emphasizes surprise', 'Author\'s position that defies expectation'],
      ['**Although / While**', 'Concession; grants a point before pivoting', 'Author\'s main argument (after the concession)'],
      ['**Nevertheless / Nonetheless**', 'Acknowledges opposition, then overrides it', 'Author\'s conclusion despite the admitted point'],
      ['**In fact / Actually**', 'Corrective; the author asserts the real truth', 'Author\'s corrected or strengthened position'],
      ['**On the contrary**', 'Direct opposition; reverses the prior claim', 'Author\'s opposing conclusion'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'The Sandwich Conclusion Pattern' },
    { type: 'paragraph', text: "Not every conclusion appears at the beginning or end of the stimulus. In the **Sandwich Conclusion** pattern, the conclusion is buried in the middle of the passage, with premises both before and after it." },

    { type: 'h4', text: 'How It Works' },
    { type: 'blockquote', text: '"Recent archaeological discoveries have uncovered pottery fragments dating to 3000 BCE in the region. This evidence strongly suggests that organized settlements existed in the area far earlier than previously thought. The fragments show consistent glaze patterns across multiple sites, and their distribution matches known trade route pathways."' },
    { type: 'breakdown', labels: { title: 'Component', text: 'Role' }, items: [
      { title: '"Recent archaeological discoveries have uncovered pottery fragments..."', text: 'A premise — evidence that comes *before* the conclusion.', badge: 'Premise (Before)', badgeColor: 'slate' },
      { title: '"This evidence strongly suggests that organized settlements existed far earlier..."', text: 'The **main conclusion** — sandwiched in the middle. Signaled by "strongly suggests."', badge: 'Main Conclusion', badgeColor: 'indigo' },
      { title: '"The fragments show consistent glaze patterns... distribution matches trade routes."', text: 'Additional premises that come *after* the conclusion, providing further support.', badge: 'Premise (After)', badgeColor: 'slate' },
    ]},

    { type: 'callout', variant: 'tip', title: 'Don\'t Assume Position = Role', text: "The Sandwich Conclusion is the most common source of errors for students who assume the conclusion is always the first or last sentence. **Position does not determine role.** Only the flow of support determines role. Always use the Why Test, regardless of where a statement appears." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• **Four conclusion types** cover virtually all Main Conclusion questions: Rebuttal (~45%), Prescription (~25%), Explanation (~20%), and Prediction/Fact (~10%).\n• **Rapid type identification** — scan for attribution (Rebuttal), prescriptive language (Prescription), causal language (Explanation), or default to Prediction/Fact.\n• **Pivot words** (But, However, Yet) are your fastest route to the conclusion in Rebuttal arguments.\n• **The Sandwich Conclusion** — the conclusion can appear in the middle of the stimulus, surrounded by premises on both sides. Never assume position equals role.\n• **Indicator words** for each type are distinct. Learn them, and you can classify arguments in seconds." },
  ]
};
