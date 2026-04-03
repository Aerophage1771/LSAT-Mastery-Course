import { Lesson } from '../../types';

export const Lesson3b_FieldGuide_Extended: Lesson = {
  id: '5-3b',
  title: 'Common Flaws: Extended Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'CATEGORY 3: Statistical / Sampling Flaws' },
    {
      type: 'paragraph',
      text: "These flaws involve misusing data, surveys, or statistics. The argument draws a conclusion about a large group based on evidence that doesn't properly represent that group.",
    },

    { type: 'h3', text: '3A. Unrepresentative Sample' },
    {
      type: 'paragraph',
      text: 'The argument generalizes from a sample that is too small, self-selected, or otherwise biased.',
    },
    {
      type: 'blockquote',
      text: '*"A survey of people leaving a vegetarian restaurant found that 90% prefer plant-based diets. Therefore, 90% of the general public prefers plant-based diets."*',
    },
    {
      type: 'paragraph',
      text: "**Why it's flawed:** The sample (people leaving a vegetarian restaurant) is drastically unrepresentative of the general public — it self-selects for people who already prefer vegetarian food.",
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"generalizes from a sample that is unlikely to be representative"',
        '"draws a conclusion about a population based on a biased sample"',
        '"bases a broad claim on evidence from an unrepresentative group"',
      ],
    },

    { type: 'h3', text: '3B. Numbers vs. Percentages' },
    {
      type: 'paragraph',
      text: 'The argument uses a raw number to support a conclusion about a rate (or vice versa), ignoring the size of the reference group.',
    },
    {
      type: 'blockquote',
      text: '*"More car accidents happen within 25 miles of home than anywhere else. Therefore, it is safer to drive far from home."*',
    },
    {
      type: 'paragraph',
      text: "**Why it's flawed:** The raw number of accidents near home is higher because people do *most* of their driving near home. The *rate* of accidents per mile driven might actually be higher far from home.",
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"fails to account for the possibility that the total number of events is a function of the total opportunity for those events to occur"',
        '"confuses absolute numbers with proportional rates"',
        '"ignores the base rates of the relevant groups"',
      ],
    },

    { type: 'h3', text: '3C. Base Rate Neglect' },
    {
      type: 'paragraph',
      text: 'The argument ignores the overall frequency of a phenomenon when interpreting a specific statistic.',
    },
    {
      type: 'blockquote',
      text: '*"This medical test is 99% accurate. The test came back positive for Disease X. Therefore, you almost certainly have Disease X."*',
    },
    {
      type: 'paragraph',
      text: "**Why it's flawed:** If Disease X affects only 1 in 10,000 people, then even with a 99% accurate test, most positive results will be false positives. The base rate of the disease is so low that accuracy alone is insufficient.",
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"fails to consider the overall incidence of the condition in the population"',
        '"neglects the base rate of the relevant phenomenon"',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'CATEGORY 4: Scope Shift Flaws' },
    {
      type: 'paragraph',
      text: "These flaws occur when the conclusion's scope goes beyond what the evidence supports — in quantity, time, group, or domain.",
    },

    { type: 'h3', text: '4A. Part → Whole (Composition Fallacy)' },
    {
      type: 'paragraph',
      text: 'Assumes that because the individual parts have a property, the whole must also have that property.',
    },
    {
      type: 'blockquote',
      text: '*"Every player on this team is an all-star. Therefore, this must be the best team in the league."*',
    },
    {
      type: 'paragraph',
      text: "**Why it's flawed:** Individual talent doesn't guarantee team success. The players might not work well together, or the coaching might be poor.",
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"assumes that what is true of each member of a group is true of the group as a whole"',
        '"infers a property of the whole from properties of its parts"',
      ],
    },

    { type: 'h3', text: '4B. Whole → Part (Division Fallacy)' },
    {
      type: 'paragraph',
      text: 'Assumes that because the whole has a property, each individual part must also have that property.',
    },
    {
      type: 'blockquote',
      text: '*"This company is highly profitable. Therefore, every division of the company must be highly profitable."*',
    },
    {
      type: 'paragraph',
      text: "**Why it's flawed:** Overall profitability could be driven by one or two strong divisions while others lose money.",
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"assumes that what is true of the whole is true of each of its parts"',
        '"infers a property of individual members from a property of the group"',
      ],
    },

    { type: 'h3', text: '4C. Some → All (Hasty Generalization)' },
    { type: 'paragraph', text: 'Jumps from evidence about some cases to a universal or near-universal conclusion.' },
    {
      type: 'blockquote',
      text: '*"Three patients in the trial experienced side effects. Therefore, this medication causes side effects in all patients."*',
    },
    {
      type: 'paragraph',
      text: "**Why it's flawed:** Three patients is far too few to conclude the medication affects *all* patients. The side effects could be idiosyncratic.",
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"generalizes on the basis of what could be exceptional cases"',
        '"draws a universal conclusion from evidence about a limited number of cases"',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'CATEGORY 5: Other Common Flaws' },
    {
      type: 'paragraph',
      text: "These flaw types don't fit neatly into the categories above but appear regularly on the LSAT.",
    },

    { type: 'h3', text: '5A. Ad Hominem / Source Attack' },
    { type: 'paragraph', text: 'The argument attacks the person making a claim rather than the claim itself.' },
    {
      type: 'blockquote',
      text: '*"Senator Green says we should invest in renewable energy. But Senator Green owns stock in a solar company. Therefore, we should ignore this advice."*',
    },
    {
      type: 'paragraph',
      text: "**Why it's flawed:** The senator's financial interest may create a conflict of interest, but it doesn't make the *argument* for renewable energy wrong. The proposal should be evaluated on its merits.",
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"rejects a claim by attacking the person who made it rather than the claim itself"',
        '"dismisses an argument based on the source\'s perceived bias rather than the argument\'s merits"',
      ],
    },

    { type: 'h3', text: '5B. Straw Man' },
    {
      type: 'paragraph',
      text: "The argument misrepresents or exaggerates an opponent's position to make it easier to attack.",
    },
    {
      type: 'blockquote',
      text: '*"My opponent wants to reduce military spending by 10%. So she wants to leave our country completely defenseless."*',
    },
    {
      type: 'paragraph',
      text: "**Why it's flawed:** The opponent wants a modest reduction, not the elimination of all military capacity. The argument distorts the original position.",
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: ['"distorts the position of those it disagrees with"', '"misrepresents the claim it seeks to refute"'],
    },

    { type: 'h3', text: '5C. Appeal to Ignorance (Argument from Ignorance)' },
    { type: 'paragraph', text: 'The argument treats the absence of evidence as evidence of absence (or vice versa).' },
    { type: 'blockquote', text: '*"No one has ever proven that ghosts do NOT exist. Therefore, ghosts must exist."*' },
    {
      type: 'paragraph',
      text: "**Why it's flawed:** The lack of disproof is not proof. The claim has not been established; it simply hasn't been refuted.",
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"takes the absence of evidence against a claim as evidence for that claim"',
        '"confuses a lack of proof that something is the case with proof that it is not the case"',
      ],
    },

    { type: 'h3', text: '5D. False Dichotomy' },
    {
      type: 'paragraph',
      text: 'The argument presents only two options when more exist, then eliminates one to force a conclusion.',
    },
    {
      type: 'blockquote',
      text: '*"Either we ban all cars from the city center or air pollution will continue to worsen. Since we cannot let pollution worsen, we must ban all cars."*',
    },
    {
      type: 'paragraph',
      text: "**Why it's flawed:** There are alternatives beyond a total ban — electric vehicles, congestion charges, improved public transit, etc.",
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"presents a false dilemma by treating two options as the only possibilities"',
        '"fails to consider alternatives to the two positions presented"',
      ],
    },

    { type: 'h3', text: '5E. Circular Reasoning' },
    { type: 'paragraph', text: 'The argument uses its own conclusion as a premise, reasoning in a circle.' },
    { type: 'blockquote', text: '*"This book is a bestseller because it is the most popular book on the market."*' },
    {
      type: 'paragraph',
      text: '**Why it\'s flawed:** "Bestseller" and "most popular" mean the same thing. The argument restates the conclusion rather than supporting it.',
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"assumes what it sets out to prove"',
        '"its conclusion is merely a restatement of a claim made in its premises"',
      ],
    },

    { type: 'h3', text: '5F. Equivocation' },
    {
      type: 'paragraph',
      text: "The argument's validity depends on a key word or phrase being used in two different senses.",
    },
    {
      type: 'blockquote',
      text: '*"The law says that everyone has the right to a fair trial. I just bought tickets to the county fair. Therefore, my trial should be held at the county fair."*',
    },
    {
      type: 'paragraph',
      text: '**Why it\'s flawed:** "Fair" means "just and impartial" in the first sentence and "an outdoor event" in the second. The argument conflates two different meanings.',
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"relies on an ambiguity in a key term"',
        '"uses a key term in two different senses"',
        '"trades on an equivocation"',
      ],
    },

    { type: 'h3', text: '5G. Appeal to Inappropriate Authority' },
    {
      type: 'paragraph',
      text: 'The argument relies on an authority figure whose expertise is irrelevant to the topic at hand.',
    },
    {
      type: 'blockquote',
      text: '*"Dr. Smith, a renowned physicist, says we should invest in cryptocurrency. Therefore, cryptocurrency is a good investment."*',
    },
    {
      type: 'paragraph',
      text: "**Why it's flawed:** Dr. Smith's expertise in physics does not make her qualified to give financial advice.",
    },
    { type: 'paragraph', text: '**How answer choices describe it:**' },
    {
      type: 'list',
      items: [
        '"cites an authority whose expertise is not relevant to the issue"',
        '"appeals to an authority in a field unrelated to the topic at hand"',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'LSAT Language Translation Table' },
    {
      type: 'paragraph',
      text: 'One of the biggest challenges of Flaw questions is that the LSAT describes flaws in abstract, formal language rather than plain English. This table maps common flaw names to the language the LSAT actually uses in answer choices:',
    },
    {
      type: 'table',
      headers: ['Common Name', 'How the LSAT Describes It'],
      rows: [
        ['Correlation → Causation', '"infers a causal relationship from a mere correlation"'],
        ['Reverse Causation', '"fails to consider that the cause and effect may be reversed"'],
        ['Third Factor', '"fails to establish that the phenomena are not both effects of some other factor"'],
        ['Mistaken Reversal', '"confuses a sufficient condition with a necessary condition"'],
        ['Mistaken Negation', '"assumes the absence of a sufficient condition guarantees the absence of the result"'],
        ['Nec. vs. Suff.', '"takes a necessary condition to be a sufficient condition"'],
        ['Unrepresentative Sample', '"generalizes from a sample that is unlikely to be representative"'],
        [
          'Numbers vs. Percentages',
          '"fails to consider that a change in total numbers may not reflect a change in proportions"',
        ],
        ['Part → Whole', '"assumes what is true of each member of a group is true of the group as a whole"'],
        ['Whole → Part', '"assumes what is true of the whole is true of each part"'],
        ['Ad Hominem', '"rejects a claim by attacking the person who made it"'],
        ['Straw Man', '"distorts the position it seeks to criticize"'],
        ['Appeal to Ignorance', '"takes the absence of evidence as evidence of absence"'],
        ['False Dichotomy', '"treats two options as if they are the only possibilities"'],
        ['Circular Reasoning', '"assumes what it sets out to prove" or "its conclusion is a restatement of a premise"'],
        ['Equivocation', '"relies on an ambiguity in a key term"'],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Quick Identification Flowchart' },
    {
      type: 'paragraph',
      text: 'Use this decision process to quickly narrow down the flaw type when reading a stimulus:',
    },
    {
      type: 'process',
      title: 'Flaw Identification Steps',
      steps: [
        '**Does the conclusion claim CAUSATION?** (causes, leads to, results in, stimulates) → Check for **Causal Flaw** (correlation→causation, reverse causation, third factor).',
        '**Does the argument contain IF/THEN, ALL, or ONLY IF language?** → Check for **Conditional Logic Flaw** (mistaken reversal, mistaken negation, necessary vs. sufficient).',
        '**Does the argument cite a STUDY, SURVEY, or STATISTIC?** → Check for **Statistical Flaw** (unrepresentative sample, numbers vs. percentages, base rate neglect).',
        "**Does the conclusion's scope EXCEED the evidence's scope?** (some→all, part→whole, past→future) → Check for **Scope Shift Flaw**.",
        '**Does the argument ATTACK A PERSON rather than address a claim?** → Check for **Ad Hominem** or **Straw Man**.',
        "**Does the argument claim something must be true because it HASN'T BEEN DISPROVEN?** → Check for **Appeal to Ignorance**.",
        '**Does the argument present ONLY TWO OPTIONS?** → Check for **False Dichotomy**.',
        '**Does a KEY TERM seem to shift meaning?** → Check for **Equivocation**.',
        '**Does the argument seem to RESTATE its conclusion as evidence?** → Check for **Circular Reasoning**.',
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: "• **Statistical flaws** exploit misused data: unrepresentative samples, raw-number-vs.-percentage confusion, and base-rate neglect.\n• **Scope shift flaws** occur when the conclusion overreaches — from parts to whole, whole to parts, or some to all.\n• **Other common flaws** — ad hominem, straw man, appeal to ignorance, false dichotomy, circular reasoning, equivocation, and appeal to authority — round out the taxonomy.\n• The **LSAT Language Translation Table** maps everyday flaw names to the abstract phrasing used in answer choices. Memorize these translations.\n• The **Quick Identification Flowchart** provides a step-by-step decision process for rapidly categorizing any flaw stimulus.",
    },
  ],
  alternates: {
    field: {
      label: 'Field Guide',
      content: [
        { type: 'h3', text: 'Flaw Cards' },
        {
          type: 'breakdown',
          items: [
            {
              title: 'Unrepresentative Sample',
              badge: 'Medium Frequency',
              badgeColor: 'blue',
              text: '**Signal:** Survey, poll, or study cited with a clearly biased or self-selected group.\n**Example:** "A survey at a vegetarian restaurant found 90% prefer plant-based diets. Therefore, 90% of the public does."\n**Trap:** Answer describes numbers-vs.-percentages when the real issue is the biased sample.',
            },
            {
              title: 'Numbers vs. Percentages',
              badge: 'Medium Frequency',
              badgeColor: 'blue',
              text: '**Signal:** Raw count used to support a conclusion about a rate, or vice versa.\n**Example:** "More accidents happen near home. Therefore, driving far from home is safer."\n**Trap:** Answer describes an unrepresentative sample instead of a numbers/rates confusion.',
            },
            {
              title: 'Base Rate Neglect',
              badge: 'Lower Frequency',
              badgeColor: 'slate',
              text: '**Signal:** A test or statistic is interpreted without considering the overall incidence in the population.\n**Example:** "This test is 99% accurate and came back positive. Therefore, you almost certainly have the disease."\n**Trap:** Answer describes sampling bias rather than failure to account for base rates.',
            },
            {
              title: 'Part \u2192 Whole (Composition)',
              badge: 'Lower Frequency',
              badgeColor: 'slate',
              text: '**Signal:** Properties of individual members assumed for the group.\n**Example:** "Every player is an all-star. Therefore, this is the best team."\n**Trap:** Answer describes hasty generalization (some\u2192all) instead of composition (parts\u2192whole).',
            },
            {
              title: 'Whole \u2192 Part (Division)',
              badge: 'Lower Frequency',
              badgeColor: 'slate',
              text: '**Signal:** Properties of a group assumed for each member.\n**Example:** "The company is profitable. Therefore, every division is profitable."\n**Trap:** Answer describes composition (parts\u2192whole) when the direction is reversed.',
            },
            {
              title: 'Some \u2192 All (Hasty Generalization)',
              badge: 'Medium Frequency',
              badgeColor: 'blue',
              text: '**Signal:** Evidence about a few cases, conclusion about all cases.\n**Example:** "Three patients had side effects. Therefore, all patients will."\n**Trap:** Answer describes an unrepresentative sample instead of the scope leap from some to all.',
            },
            {
              title: 'Ad Hominem / Source Attack',
              badge: 'Medium Frequency',
              badgeColor: 'blue',
              text: '**Signal:** The argument attacks a person\'s character, motive, or background instead of their claim.\n**Example:** "Senator Green owns solar stock, so ignore her renewable energy proposal."\n**Trap:** Answer describes a straw man when the argument attacks the person, not the position.',
            },
            {
              title: 'Straw Man',
              badge: 'Lower Frequency',
              badgeColor: 'slate',
              text: '**Signal:** An opponent\'s position is exaggerated or distorted before being attacked.\n**Example:** "My opponent wants to cut military spending 10%, so she wants us defenseless."\n**Trap:** Answer describes ad hominem when the argument distorts the position, not the person.',
            },
            {
              title: 'Appeal to Ignorance',
              badge: 'Medium Frequency',
              badgeColor: 'blue',
              text: '**Signal:** "No one has proven X" leading to "therefore not-X" (or vice versa).\n**Example:** "No one has proven ghosts don\'t exist. Therefore, ghosts exist."\n**Trap:** Answer describes circular reasoning instead of the absence-of-evidence error.',
            },
            {
              title: 'False Dichotomy',
              badge: 'Lower Frequency',
              badgeColor: 'slate',
              text: '**Signal:** "Either X or Y" framing with no third option considered.\n**Example:** "Either ban all cars or pollution worsens. So ban all cars."\n**Trap:** Answer describes equivocation when the real error is the artificially limited options.',
            },
            {
              title: 'Circular Reasoning',
              badge: 'Lower Frequency',
              badgeColor: 'slate',
              text: '**Signal:** The conclusion restates a premise using different words.\n**Example:** "This book is a bestseller because it is the most popular book."\n**Trap:** Answer describes appeal to authority when the argument simply restates itself.',
            },
            {
              title: 'Equivocation',
              badge: 'Lower Frequency',
              badgeColor: 'slate',
              text: '**Signal:** A key term shifts meaning between premise and conclusion.\n**Example:** "Everyone has the right to a fair trial. I bought tickets to the county fair. My trial should be at the fair."\n**Trap:** Answer describes a scope shift when the real issue is the ambiguous term.',
            },
            {
              title: 'Appeal to Inappropriate Authority',
              badge: 'Lower Frequency',
              badgeColor: 'slate',
              text: '**Signal:** An expert in one field cited as authority on an unrelated topic.\n**Example:** "Dr. Smith, a physicist, says invest in crypto. Therefore, crypto is a good investment."\n**Trap:** Answer describes ad hominem when the error is misplaced reliance on authority.',
            },
          ],
        },
        { type: 'h3', text: 'LSAT Language Translation' },
        {
          type: 'table',
          headers: ['LSAT Phrasing', 'What It Means'],
          rows: [
            ['"infers a causal relationship from a mere correlation"', 'Correlation \u2192 Causation'],
            ['"fails to consider that the cause and effect may be reversed"', 'Reverse Causation'],
            ['"confuses a sufficient condition with a necessary condition"', 'Mistaken Reversal'],
            ['"takes a necessary condition to be a sufficient condition"', 'Necessary \u2192 Sufficient Confusion'],
            ['"generalizes from a sample that is unlikely to be representative"', 'Unrepresentative Sample'],
            ['"assumes what is true of each member is true of the group as a whole"', 'Composition (Part \u2192 Whole)'],
            ['"rejects a claim by attacking the person who made it"', 'Ad Hominem / Source Attack'],
            ['"takes the absence of evidence as evidence of absence"', 'Appeal to Ignorance'],
            ['"treats two options as if they are the only possibilities"', 'False Dichotomy'],
            ['"relies on an ambiguity in a key term"', 'Equivocation'],
          ],
        },
        { type: 'h3', text: 'Quick Identification' },
        {
          type: 'process',
          title: 'Flaw Identification Steps',
          steps: [
            '**Conclusion claims CAUSATION?** (causes, leads to, results in) \u2192 Check for **Causal Flaw**.',
            '**IF/THEN, ALL, or ONLY IF language?** \u2192 Check for **Conditional Logic Flaw**.',
            '**Cites a STUDY, SURVEY, or STATISTIC?** \u2192 Check for **Statistical Flaw**.',
            '**Conclusion scope EXCEEDS evidence scope?** (some\u2192all, part\u2192whole) \u2192 Check for **Scope Shift**.',
            '**ATTACKS A PERSON rather than addressing a claim?** \u2192 Check for **Ad Hominem**.',
            '**Claims something is true because it HASN\'T BEEN DISPROVEN?** \u2192 Check for **Appeal to Ignorance**.',
            '**Presents ONLY TWO OPTIONS?** \u2192 Check for **False Dichotomy**.',
            '**KEY TERM shifts meaning?** \u2192 Check for **Equivocation**.',
            '**RESTATES conclusion as evidence?** \u2192 Check for **Circular Reasoning**.',
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Statistical, Scope Shift, and Other flaws round out the taxonomy.** Memorize the LSAT phrasing translations and use the flowchart to narrow the category within seconds.',
        },
      ],
    },
  },
};
