import { Lesson } from '../../types';

export const Lesson9_Drill_ProcessOfElimination: Lesson = {
  id: "8-9",
  title: "Attacking by Process of Elimination (PT-111-S-4-Q-20)",
  content: [
    { type: 'h3', text: 'Concept: The False Dichotomy' },
    { type: 'paragraph', text: 'Many arguments on the LSAT are built on a simple but powerful logical structure: **Process of Elimination**. The author presents a limited set of possibilities and then tries to prove one is correct by ruling out the others. These arguments often take the form, "The explanation must be either A or B. We have evidence that it isn\'t B. Therefore, it must be A."' },
    { type: 'paragraph', text: 'While this structure seems logical, it contains a critical hidden assumption: that A and B are the *only* possibilities. High-difficulty Weaken questions often exploit this flaw. The most effective way to attack a Process of Elimination argument is to introduce a third, unconsidered possibility (Option C) that also explains the evidence. This shatters the author\'s limited framework and reveals their conclusion to be an unproven assumption.' },

    { type: 'callout', variant: 'tip', title: 'Recognizing the Pattern', text: 'Process of Elimination arguments reveal themselves through language like "must be," "the only explanation," "either...or," and "since it is not X, it is Y." When you spot these signals, immediately ask: **"Has the author considered all the possibilities?"**' },

    { type: 'paragraph', text: 'There are two distinct ways to weaken a Process of Elimination argument:' },
    { type: 'breakdown', labels: { title: 'Attack Type', text: 'How It Works' }, items: [
      { title: 'Introduce Option C', text: 'Show that the author\'s set of possibilities is incomplete. A third option exists that the author never considered, which could also explain the evidence.', badge: 'Most Common', badgeColor: 'green' },
      { title: 'Show Option A Is Impossible', text: 'Even within the author\'s framework, demonstrate that the chosen option cannot be correct for an independent reason. This leaves the argument in paradox — devastating on the LSAT.', badge: 'Less Common', badgeColor: 'blue' },
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Practice: Break the False Dichotomy' },
    {
      type: 'question-card',
      id: '8-9-practice',
      questionType: 'Weaken',
      difficulty: 'hard',
      stimulus: 'Archaeologist: A skeleton of a North American mastodon that became extinct at the peak of the Ice Age was recently discovered. It contains a human-made projectile dissimilar to any found in that part of Eurasia closest to North America. Thus, since Eurasians did not settle in North America until shortly before the peak of the Ice Age, the first Eurasian settlers in North America probably came from a more distant part of Eurasia.',
      question: 'Which one of the following, if true, most seriously weakens the archaeologist\'s argument?',
      options: [
        '(A) The projectile found in the mastodon does not resemble any that were used in Eurasia before or during the Ice Age. (Correct)',
        '(B) The people who occupied the Eurasian area closest to North America remained nomadic throughout the Ice Age.',
        '(C) The skeleton of a bear from the same place and time as the mastodon skeleton contains a similar projectile.',
        '(D) Other North American artifacts from the peak of the Ice Age are similar to ones from the same time found in more distant parts of Eurasia.',
        '(E) Climatic conditions in North America just before the Ice Age were more conducive to human habitation than were those in the part of Eurasia closest to North America at that time.'
      ]
    },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },
    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: 'Let\'s engage with the text sentence by sentence to see how the archaeologist builds their case.' },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis'}, items: [
        { title: '"A skeleton of a North American mastodon... contains a human-made projectile dissimilar to any found in that part of Eurasia closest to North America."', text: 'This is the core piece of physical evidence. We have a unique projectile found in North America. The key fact is that it *doesn\'t* match the technology of the Eurasian group that was geographically nearest.'},
        { title: '"Thus, since Eurasians did not settle in North America until shortly before the peak of the Ice Age, the first Eurasian settlers in North America probably came from a more distant part of Eurasia."', text: 'This is the conclusion. The archaeologist assumes the projectile *must* have a Eurasian origin. Since it\'s not from the "close part" of Eurasia, it must be from the "distant part." This is a classic Process of Elimination setup.'}
    ]},
    { type: 'h4', text: 'Step 2: Argument Analysis' },
    { type: 'paragraph', text: '**What Method of Reasoning is the argument using?**\nThe archaeologist sets up a limited set of choices for the origin of the projectile: either it came from the nearby part of Eurasia or a distant part of Eurasia. By presenting evidence against the "nearby" origin, the archaeologist concludes it must be the "distant" origin.' },
    { type: 'paragraph', text: '**The Hidden Framework:**' },
    { type: 'table', headers: ['Possibility', 'Status in the Argument'], rows: [
      ['Projectile from nearby Eurasia', 'Eliminated (doesn\'t match their technology)'],
      ['Projectile from distant Eurasia', 'Concluded by default'],
      ['Projectile not Eurasian at all', '**Never considered**'],
    ]},
    { type: 'paragraph', text: '**What\'s the Problem?**\nThe argument\'s fatal flaw is the assumption that the projectile *must* have a Eurasian origin. The archaeologist never considers a third possibility: that the projectile was not Eurasian at all.' },
    { type: 'h4', text: 'Step 3: How Can We Weaken?' },
    { type: 'paragraph', text: 'To weaken a Process of Elimination argument, you must break the "either/or" structure by introducing a plausible third option that the author has overlooked.' },
    { type: 'list', items: ['**Introduce a Third Possibility:** The argument\'s framework is `(Origin = Close Eurasia) OR (Origin = Distant Eurasia)`. The evidence rules out `Close Eurasia`. To weaken the conclusion, you must show that there is another option, such as `(Origin = North American invention)`.']},
    { type: 'h4', text: 'Step 4: Evaluation' },
    { type: 'paragraph', text: 'You are looking for the answer that introduces an alternative origin for the projectile, thereby breaking the archaeologist\'s limited framework.' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis'}, items: [
        { title: '(A) The projectile found in the mastodon does not resemble any that were used in Eurasia before or during the Ice Age.', text: '**[The Correct Choice - Introducing a Third Option]**\nThis is the perfect weakener. The archaeologist\'s entire argument rests on the assumption that the projectile is Eurasian. This answer choice provides strong evidence that it is *not* Eurasian at all (neither from the close part nor the distant part). This introduces a third possibility the author ignored: the projectile could have been developed independently in North America. This shatters the Process of Elimination logic.', badge: 'Correct', badgeColor: 'green'},
        { title: '(B) The people who occupied the Eurasian area closest to North America remained nomadic throughout the Ice Age.', text: '**[The Irrelevant Detail]**\nTheir nomadic lifestyle doesn\'t change the fact that their projectiles didn\'t match the one found in the mastodon. This detail doesn\'t impact the core evidence or the logical leap.', badge: 'Incorrect', badgeColor: 'red'},
        { title: '(C) The skeleton of a bear from the same place and time as the mastodon skeleton contains a similar projectile.', text: '**[The Corroborator]**\nThis strengthens, if anything. Finding another similar projectile from the same period makes the original finding seem less like a fluke, but it does nothing to challenge the archaeologist\'s conclusion about its origin.', badge: 'Incorrect', badgeColor: 'red'},
        { title: '(D) Other North American artifacts from the peak of the Ice Age are similar to ones from the same time found in more distant parts of Eurasia.', text: '**[The Strengthener]**\nThis directly supports the archaeologist\'s conclusion. It provides independent evidence that there was, in fact, a link between North America and "more distant parts of Eurasia" during that time, making the conclusion more plausible.', badge: 'Incorrect', badgeColor: 'red'},
        { title: '(E) Climatic conditions in North America just before the Ice Age were more conducive to human habitation than were those in the part of Eurasia closest to North America at that time.', text: '**[The Irrelevant Context]**\nThis might explain *why* people would have wanted to migrate to North America, but it does not help determine *where* they came from. It\'s background information that doesn\'t affect the logic of the argument.', badge: 'Incorrect', badgeColor: 'red'}
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Mapping the Logical Structure' },
    { type: 'paragraph', text: 'Visualizing the argument\'s structure makes the flaw immediately apparent:' },
    { type: 'process', title: 'The Archaeologist\'s Reasoning', steps: [
      '**Premise:** The projectile doesn\'t match nearby Eurasia\'s technology.',
      '**Hidden assumption:** The only possible origins are nearby Eurasia or distant Eurasia.',
      '**Conclusion:** Therefore, it came from distant Eurasia.',
      '**The Flaw:** The projectile doesn\'t match *any* Eurasian technology — it may not be Eurasian at all.',
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Key Takeaway' },
    { type: 'paragraph', text: 'High-difficulty Weaken questions often target arguments built on a hidden and flawed Process of Elimination.'},
    { type: 'list', ordered: true, items: [
        '**Identify the Limited Options:** When an author concludes something *must* be true by ruling out another possibility, your first step is to identify the limited set of options they are considering. In this case, the options were limited to "Close Eurasia" and "Distant Eurasia."',
        '**Expose the False Dichotomy:** The weakness in these arguments is almost always the assumption that the initial set of options is complete. The author has created a "false dichotomy" by ignoring other plausible explanations.',
        '**Find the Answer that Introduces "Option C":** The strongest weakener will be the answer choice that presents a new, credible possibility that the author failed to consider. Here, the new possibility was that the projectile had no Eurasian origin at all. This invalidates the entire logical structure of the argument.'
    ]}
  ]
};
