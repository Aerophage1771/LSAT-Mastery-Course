import { Lesson } from '../../types';

export const Lesson6_Drill_UnrepresentativeSample: Lesson = {
  id: "5-6",
  title: "Drill: The Unrepresentative Sample Flaw",
  content: [
    { type: 'h2', text: 'Drill: The Unrepresentative Sample Flaw' },

    { type: 'h3', text: 'Concept Focus: Data & Sampling Errors' },
    { type: 'paragraph', text: "This lesson focuses on another fundamental error in arguments that use evidence to make a broad claim: **the unrepresentative sample**. An argument commits this flaw when it draws a conclusion about an entire group based on evidence from a subgroup that is either too small or is biased in some important way." },

    { type: 'hr' },

    { type: 'h3', text: 'The Core Error Explained' },
    { type: 'paragraph', text: 'The unrepresentative sample flaw is an unjustified **generalization**. The author assumes that a small group (the sample) is a perfect reflection of a large group (the population), but provides no reason to believe this is true. The sample may differ from the population in ways that make the generalization unreliable.' },

    { type: 'h4', text: 'What Makes a Sample Unrepresentative?' },
    { type: 'paragraph', text: 'A sample can fail to represent the population for several reasons:' },
    { type: 'table', headers: ['Problem', 'Description', 'Example'], rows: [
      ['**Self-Selection Bias**', 'Respondents choose to participate, so the sample over-represents people with strong opinions or motivation', 'An online poll about a political candidate attracts only passionate supporters and opponents, missing the moderate majority'],
      ['**Too Small**', 'The sample is so small that a few unusual cases can skew the results dramatically', 'Interviewing 5 customers at a store and concluding that "most customers are satisfied"'],
      ['**Wrong Population**', 'The sample is drawn from a group that differs from the target population in relevant ways', 'Surveying college students about retirement savings preferences and applying the results to the general public'],
      ['**Convenience Sampling**', 'The sample is chosen based on ease of access rather than representativeness', 'A reporter interviews people at a single bus stop and generalizes about the entire city\'s commuting habits'],
      ['**Survivor Bias**', 'The sample includes only successful cases, ignoring those that failed or dropped out', 'Studying only successful entrepreneurs to learn "what makes a business succeed" while ignoring the many who used the same methods and failed'],
    ]},

    { type: 'callout', variant: 'default', title: 'The Core Question', text: 'Whenever an argument uses a sample to make a broader claim, ask: **"Is there any reason this sample might not reflect the larger group?"** If you can identify a plausible reason the sample is biased, you have found the flaw.' },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot the Unrepresentative Sample Flaw' },
    { type: 'paragraph', text: 'Watch for these language patterns that signal a generalization from a sample:' },
    { type: 'breakdown', labels: { title: 'Signal', text: 'What to Watch For' }, items: [
      { title: 'Quantifier Mismatch', text: 'The **premise** uses words like "some," "a few," "a number of," "several," or "many" while the **conclusion** uses words like "all," "no," "every," "none," or "most." This scope shift from part to whole is a red flag.', badge: 'Key Signal', badgeColor: 'red' },
      { title: 'Specific → General', text: 'The evidence describes a specific group or location, but the conclusion applies to a broader population. Example: evidence about "residents of Smithville" → conclusion about "all Americans."', badge: 'Watch For', badgeColor: 'blue' },
      { title: 'Survey/Study Language', text: 'Phrases like "a recent survey found," "researchers studied," "according to a poll" — these all introduce sample-based evidence. Check whether the sample matches the population the conclusion is about.', badge: 'Watch For', badgeColor: 'blue' },
      { title: 'Biased Source', text: 'The evidence comes from people who have a reason to answer a certain way. Example: asking employees if their boss is a good leader (fear of retaliation biases the response).', badge: 'Watch For', badgeColor: 'blue' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'question-card',
      id: 'FL-5-6-001',
      questionType: 'Flaw',
      difficulty: 'medium',
      stimulus: "A number of Grandville's wealthiest citizens have been criminals. So, since it is of utmost importance that the Grandville Planning Committee be composed solely of individuals whose personal standards of ethics are beyond reproach, no wealthy person should be appointed to that committee.",
      question: "The argument is most vulnerable to the criticism that it",
      options: [
        "(A) confuses a result with something that is sufficient for bringing about that result",
        "(B) mistakes a temporal relationship for a causal relationship",
        "(C) assumes that because a certain action has a certain result the person taking that action intended that result",
        "(D) judges only by subjective standards something that can be readily evaluated according to objective standards",
        "(E) generalizes on the basis of what could be exceptional cases (Correct)",
      ],
    },

    { type: 'h3', text: 'Full Step-by-Step Analysis' },
    { type: 'process', title: 'Applying the 4-Step Method', steps: [
      '**Step 1 — Deconstruct the Argument:**\n• **Conclusion:** No wealthy person should be appointed to the planning committee.\n• **Premise 1:** The planning committee requires members with ethical standards "beyond reproach."\n• **Premise 2:** "A number of" (which means *some*) of Grandville\'s wealthiest citizens have been criminals.',
      '**Step 2 — Find the Logical Gap:** The argument makes a huge leap from evidence about *some* wealthy people to a rule about *all* wealthy people. The conclusion is an absolute ban — "no wealthy person" — on an entire group. The only evidence is that a few members of that group have been criminals. The "number of" criminals could be just a few bad apples, or "exceptional cases," that do not reflect the character of the group as a whole. The sample (criminals) is used to condemn the entire population (all wealthy citizens).',
      '**Step 3 — Prephrase:** "The argument generalizes from a few bad examples. It assumes that because some wealthy people are unethical, all wealthy people are unsuitable." **Prephrase:** Hasty generalization / unrepresentative sample.',
      '**Step 4 — Match to Answer:** Look for an answer that describes generalizing from exceptional or unrepresentative cases.',
    ]},

    { type: 'h3', text: 'Answer Choice Breakdown' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) confuses a result with something that is sufficient for bringing about that result', text: 'This describes a conditional or causal flaw. The argument is about generalizing a characteristic across a group, not about what is sufficient or necessary for a result.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) mistakes a temporal relationship for a causal relationship', text: 'This describes a causal flaw based on timing. The argument does not involve a sequence of events or a cause-and-effect claim.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) assumes that because a certain action has a certain result the person taking that action intended that result', text: 'This describes a flaw of confusing intent with effect. The argument is not about anyone\'s intentions.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) judges only by subjective standards something that can be readily evaluated according to objective standards', text: 'While ethics involves some subjectivity, the core problem is not *how* ethics are judged but the *generalization* about who is ethical.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) generalizes on the basis of what could be exceptional cases', text: 'This is a perfect match. "A number of" wealthy criminals could be "exceptional cases" that don\'t represent the group. The argument uses these exceptions to "generalize" about all wealthy people.', badge: 'Correct', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },
    { type: 'question-card',
      id: 'FL-5-6-002',
      questionType: 'Flaw',
      difficulty: 'medium',
      stimulus: "A magazine survey asked its readers whether they prefer to vacation domestically or internationally. Of the 2,000 readers who responded, 78% said they prefer international vacations. The magazine concluded that the vast majority of Americans prefer international vacations over domestic ones.",
      question: "The reasoning in the argument is most vulnerable to criticism on the grounds that it",
      options: [
        "(A) fails to consider that some respondents may have misunderstood the question",
        "(B) draws a conclusion about all Americans from a sample of magazine readers who chose to respond, a group that may not be representative of Americans as a whole (Correct)",
        "(C) assumes that vacation preference is the only relevant factor in determining travel trends",
        "(D) fails to specify the exact number of respondents who preferred international travel",
        "(E) treats a preference for international vacations as incompatible with also enjoying domestic travel",
      ],
    },

    { type: 'h3', text: 'Analysis' },
    { type: 'process', title: 'Step-by-Step', steps: [
      '**Conclusion:** The vast majority of *Americans* prefer international vacations.',
      '**Premise:** 78% of *magazine readers who responded* said they prefer international vacations.',
      '**Gap:** The sample suffers from at least two forms of bias: (1) **self-selection** — only readers who chose to respond are counted, and those with strong international travel preferences may be more motivated to respond; (2) **wrong population** — magazine readers are not representative of all Americans. The magazine\'s readership likely skews toward wealthier, more educated, and more travel-oriented people.',
      '**Prephrase:** "Generalizes from a biased, self-selected sample of magazine readers to all Americans."',
      '**Match:** Answer (B) describes exactly this — the sample is not representative.',
    ]},
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) some respondents may have misunderstood the question', text: 'This is possible but speculative and not the structural flaw. Even with perfect comprehension, the sample bias remains.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) draws a conclusion about all Americans from a group that may not be representative', text: 'This precisely identifies the unrepresentative sample flaw: magazine readers who chose to respond are not a stand-in for all Americans.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) assumes vacation preference is the only relevant factor', text: 'The argument only discusses vacation preference. It doesn\'t claim this is the only factor in anything broader.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) fails to specify the exact number', text: 'The argument says 78% of 2,000 respondents. The exact number (1,560) is easily calculable and isn\'t the problem.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) treats international preference as incompatible with domestic travel', text: 'The survey asked about preference, not exclusivity. The argument doesn\'t claim the two are incompatible.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Flaw in LSAT Answer Choice Language' },
    { type: 'paragraph', text: 'The LSAT uses several different phrasings to describe the unrepresentative sample flaw:' },
    { type: 'table', headers: ['LSAT Phrasing', 'What It Means'], rows: [
      ['"generalizes from a sample that is unlikely to be representative"', 'Classic description — the sample is biased or too small'],
      ['"draws a general conclusion based on a few exceptional cases"', 'The cases cited may be outliers, not typical'],
      ['"bases a broad claim on evidence from an unrepresentative group"', 'The evidence group doesn\'t match the conclusion group'],
      ['"generalizes on the basis of what could be exceptional cases"', 'The cited examples could be unusual, not typical'],
      ['"fails to consider whether the sample studied is typical of the larger group"', 'Questions whether the sample is representative'],
      ['"treats the experience of a few as sufficient to establish a general claim"', 'Too few cases to generalize'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• **Watch for Mismatched Quantifiers:** Be alert when evidence uses \"some,\" \"a few,\" or \"a number of\" but the conclusion uses \"all,\" \"no,\" or \"every.\" This scope shift signals a hasty generalization.\n• **Question the Sample:** Whenever an argument uses a subgroup to make a point about a larger group, ask: \"Is there any reason this sample might not reflect the larger group?\" Look for self-selection bias, too-small samples, wrong population, convenience sampling, or survivor bias.\n• **\"Generalizes\" is a Key Word:** Answer choices using \"generalizes\" are often describing this flaw. Check if the argument moves from a specific case or small group to a broad conclusion.\n• **Two-Step Check:** (1) What is the *sample*? (2) What is the *population* the conclusion is about? If these don't match, the argument has a sampling flaw.\n• **Don't confuse with Numbers vs. Percentages:** The unrepresentative sample flaw is about *who* is in the sample. The Numbers vs. Percentages flaw is about *how* the data is interpreted. They often co-occur but are distinct errors." },
  ]
};
