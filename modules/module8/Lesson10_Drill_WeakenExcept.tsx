import { Lesson } from '../../types';

export const Lesson10_Drill_WeakenExcept: Lesson = {
  id: "8-10",
  title: "Mastering Weaken EXCEPT Questions (PT-101-S-2-Q-19)",
  content: [
    { type: 'h3', text: 'Concept: Weaken EXCEPT Questions' },
    { type: 'paragraph', text: 'Weaken EXCEPT questions are a test of mental discipline and precision. They invert the standard task: instead of finding the one answer that weakens the argument, you must find the four answers that weaken it and select the one that is left over. The correct answer will be the choice that either **strengthens** the argument or is completely **irrelevant** to it.' },
    { type: 'paragraph', text: 'These questions are challenging because they require you to perform multiple logical analyses under time pressure. The key to success is to have a crystal-clear understanding of the argument\'s core logic and to methodically test each answer choice against it.' },

    { type: 'callout', variant: 'tip', title: 'The EXCEPT Mindset', text: 'On standard Weaken questions, you look for the answer that hurts the argument. On EXCEPT questions, you look for the answer that **doesn\'t** hurt it. Flip your mental filter: mark each answer as "WEAKENS" or "DOESN\'T WEAKEN." The odd one out is your answer.' },

    { type: 'paragraph', text: 'The correct answer in a Weaken EXCEPT question typically falls into one of three categories:' },
    { type: 'table', headers: ['Correct Answer Type', 'What It Does', 'How to Spot It'], rows: [
      ['**Strengthener**', 'Directly supports the argument\'s conclusion or confirms its assumption', 'It makes the conclusion *more* likely, not less'],
      ['**Irrelevant Statement**', 'On the same topic but logically disconnected from the argument\'s core gap', 'The Yes/No test produces no effect on the conclusion'],
      ['**Premise Restatement**', 'Simply repeats or rephrases information already given in the stimulus', 'It adds no new information that could challenge the logic'],
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Practice: Weaken EXCEPT' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },
    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: 'Let\'s engage with the stimulus sentence by sentence to understand the core causal claim.' },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis'}, items: [
        { title: '"In Australia the population that is of driving age has grown larger over the last five years, but the annual number of traffic fatalities has declined."', text: 'This is the evidence. The author presents a surprising trend: despite more potential drivers on the road, the number of deaths has gone down. The author wants to explain *why* this happened.'},
        { title: '"This leads to the conclusion that, overall, the driving-age population of Australia consists of more skillful drivers now than five years ago."', text: 'This is the conclusion. The author\'s explanation for the drop in fatalities is that drivers got better. This is a causal argument: `Improved Skill → Fewer Fatalities`.'}
    ]},
    { type: 'h4', text: 'Step 2: Argument Analysis' },
    { type: 'paragraph', text: '**What Method of Reasoning is the argument using?**\nThe argument observes an effect (fewer traffic deaths) and proposes a single cause for it (more skillful drivers). This is a classic causal explanation.' },
    { type: 'paragraph', text: '**What\'s the Problem?**\nThe argument has a significant flaw: it completely ignores all other possible explanations for the decline in traffic fatalities. Improved driver skill is just one of many potential causes.' },

    { type: 'h4', text: 'Step 3: The EXCEPT Strategy' },
    { type: 'paragraph', text: 'Because this is a Weaken EXCEPT question, your primary goal is to find four answers that provide **alternative causes** for the drop in fatalities. Anything other than "better drivers" that could lead to fewer deaths will weaken the argument. The one answer that supports the "better drivers" explanation or is irrelevant is your answer.' },
    { type: 'process', title: 'Systematic EXCEPT Approach', steps: [
      '**Identify the causal claim:** Improved skill → Fewer fatalities.',
      '**For each answer, ask:** "Does this provide an alternative explanation for fewer fatalities?"',
      '**If YES → mark as WEAKENS** (eliminate it).',
      '**If NO → this is your answer** (it either strengthens or is irrelevant).',
    ]},

    { type: 'h4', text: 'Step 4: Evaluation' },
    { type: 'paragraph', text: 'Let\'s test each choice. Does it provide an alternative cause for fewer fatalities?' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis'}, items: [
        { title: '(A) Three years ago, a mandatory seat-belt law went into effect throughout Australia.', text: '**Verdict: WEAKENS.**\nThis provides a classic alternative cause. If more people are wearing seat belts, they are more likely to survive accidents. This would reduce fatalities even if driver skill remained the same.', badge: 'WEAKENS', badgeColor: 'red'},
        { title: '(B) Five years ago, Australia began a major road repair project.', text: '**Verdict: WEAKENS.**\nThis provides another alternative cause. If the roads are safer (fewer potholes, better lighting, etc.), there will be fewer accidents and thus fewer fatalities, regardless of driver skill.', badge: 'WEAKENS', badgeColor: 'red'},
        { title: '(C) Because of increases in the price of fuel, Australians on average drive less each year than in the preceding year.', text: '**Verdict: WEAKENS.**\nThis provides a third alternative cause. If people are driving less, there is less opportunity for accidents to occur. Fewer miles driven would naturally lead to fewer fatalities, even with no change in driver skill.', badge: 'WEAKENS', badgeColor: 'red'},
        { title: '(D) The number of hospital emergency facilities in Australia has doubled in the last five years.', text: '**Verdict: WEAKENS.**\nThis provides a fourth alternative cause. The statistic is about *fatalities*, not accidents. If there are more and better hospitals, accident victims who would have previously died might now be saved. This reduces the number of deaths without any change in driver skill or accident rates.', badge: 'WEAKENS', badgeColor: 'red'},
        { title: '(E) In response to an increase in traffic fatalities, Australia instituted a program of mandatory driver education five years ago.', text: '**[The Correct Choice - A Strengthener]**\n**Verdict: STRENGTHENS, so it does NOT weaken. This is the answer.**\nThis is the only choice that supports the author\'s conclusion. A mandatory driver education program is a direct mechanism for making drivers *more skillful*. This choice provides a reason *why* the drivers might have gotten better, which strengthens the author\'s proposed cause.', badge: 'CORRECT', badgeColor: 'green'}
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Why EXCEPT Questions Are Tricky' },
    { type: 'paragraph', text: 'Many test-takers mistakenly select (E) thinking, "If the government had to create a driver education program, that suggests drivers weren\'t skilled before." But this reasoning goes *beyond* what (E) states. Choice (E) says the program was *instituted* — it doesn\'t say it failed. The most natural reading is that the program worked, which would explain improved skill and thus support the conclusion.' },
    { type: 'paragraph', text: 'This illustrates a critical principle for EXCEPT questions: **take each answer at face value.** Don\'t layer additional inferences on top of what the answer actually says.' },
    { type: 'hr' },

    { type: 'h3', text: 'Key Takeaway' },
    { type: 'paragraph', text: 'Weaken EXCEPT questions require a systematic and disciplined approach. You are not just looking for one flaw; you are identifying a pattern of flaws.'},
    { type: 'list', ordered: true, items: [
        '**Isolate the Causal Link:** The first and most important step is to identify the simple causal relationship at the heart of the argument. Here, it was `Better Skill → Fewer Deaths`.',
        '**Hunt for Alternative Causes:** In causal arguments, the most common type of weakener is an alternative cause. For EXCEPT questions, this means you should expect to find several of them. Your job is to tick them off one by one.',
        '**The "Odd One Out" is Your Answer:** The correct answer will be the one that breaks the pattern. It will not provide an alternative cause. In this case, it did the opposite: it provided a reason to believe the author\'s stated cause was actually true.',
        '**Take Answers at Face Value:** Do not add unstated assumptions to an answer choice. Read what it says, test its direction, and move on.'
    ]}
  ]
};
