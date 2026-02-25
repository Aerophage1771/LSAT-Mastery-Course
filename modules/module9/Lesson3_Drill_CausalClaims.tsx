import { Lesson } from '../../types';

export const Lesson3_Drill_CausalClaims: Lesson = {
  id: "9-3",
  title: "Drill: Strengthening Causal Claims (PT-128-S-3-Q-1)",
  content: [
    { type: 'h2', text: 'Strengthening Causal Arguments' },
    { type: 'paragraph', text: "Causal reasoning is one of the most frequently tested argument structures on the LSAT. In a causal argument, the author observes that two things are associated — they occur together, one follows the other, or they correlate statistically — and concludes that one **caused** the other. This leap from correlation to causation is inherently vulnerable because there are always alternative explanations for any observed association." },
    { type: 'paragraph', text: "To strengthen a causal argument, you must provide information that makes the author's proposed cause-effect relationship more plausible. You do this by narrowing the field of possible explanations until the author's preferred cause is the most likely one standing." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Strengthen Causal Claims' },
    { type: 'paragraph', text: "There are three primary strategies for strengthening a causal argument. Each attacks the gap from a different angle, but all share the same goal: making the proposed cause-effect link more credible." },

    { type: 'table', headers: ['Strategy', 'How It Works', 'Example'], rows: [
      ['**Rule Out Alternative Causes**', 'Eliminate other plausible explanations for the observed effect. If no other factor can explain the result, the author\'s explanation becomes more likely by default.', '"No other variable changed during the study period" eliminates confounding factors.'],
      ['**Show the Mechanism**', 'Provide a plausible explanation for *how* the cause produces the effect. A clear causal pathway makes the link more believable.', '"The chemical in substance X binds to pain receptors" explains how X reduces pain.'],
      ['**Show Dose-Response / Timeline**', 'Demonstrate that increasing the cause increases the effect (dose-response), or that the effect appears only after the cause is introduced and disappears when it is removed (timeline). These patterns are hallmarks of genuine causation.', '"Workers exposed for longer periods developed more severe symptoms" shows dose-response.'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The "No Cause → No Effect" Test', text: "One of the most powerful strengthening patterns on the LSAT is showing that when the alleged cause is absent, the effect does not occur. If removing the cause also removes the effect, the causal link becomes much harder to deny. Look for answer choices that establish this \"control group\" dynamic." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Strengthening Causal Claims (PT-128-S-3-Q-1)' },

    { type: 'h4', text: 'The Problem' },
    { type: 'blockquote', text: 'In a transportation company, a certain syndrome often attributed to stress by medical experts afflicts a significantly higher percentage of workers in Department F than in any other department. We can conclude, therefore, that the work done in Department F subjects workers to higher stress levels than does the work in the other departments in the company.' },
    { type: 'h4', text: 'The Question' },
    { type: 'paragraph', text: 'Which one of the following, if true, most helps to support the argument?' },

    { type: 'question-card',
      id: '9-3-drill',
      questionType: 'Strengthen',
      difficulty: 'medium',
      stimulus: 'In a transportation company, a certain syndrome often attributed to stress by medical experts afflicts a significantly higher percentage of workers in Department F than in any other department. We can conclude, therefore, that the work done in Department F subjects workers to higher stress levels than does the work in the other departments in the company.',
      question: 'Which one of the following, if true, most helps to support the argument?',
      options: [
        '(A) Department F has more employees than any other department in the company.',
        '(B) Some experts believe that the syndrome can be caused by various factors, only one of which is high stress.',
        '(C) Many workers who transfer into Department F from elsewhere in the company soon begin to develop the syndrome. (Correct)',
        '(D) It is relatively common for workers in the transportation industry to suffer from the syndrome.',
        '(E) Job-related stress has been the most frequently cited cause for dissatisfaction among workers at the company.',
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's engage with the text sentence by sentence to see how the author builds their causal case." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"In a transportation company, a certain syndrome often attributed to stress by medical experts afflicts a significantly higher percentage of workers in Department F than in any other department."', text: 'You are introduced to a correlation. There is a specific location, Department F, and a specific health problem, a stress-related syndrome. The key data point is that the *rate* of the syndrome is higher in Department F than anywhere else in the company.' },
      { title: '"We can conclude, therefore, that the work done in Department F subjects workers to higher stress levels than does the work in the other departments in the company."', text: 'This is the conclusion. The author is making a **causal claim**: because the syndrome is linked to stress and it happens more in Department F, the *work in Department F* must be the source of that stress. The word "therefore" signals this is the conclusion.' },
    ] },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: '**What Method of Reasoning is the argument using?**\nThe argument identifies a statistical correlation between working in Department F and having a stress-related syndrome. It then concludes that the specific work environment of Department F is the cause of increased stress levels. It relies on the pre-existing medical link between the syndrome and stress to justify the claim that the work itself is to blame.' },
    { type: 'paragraph', text: "**What's the Problem?**\nThe author assumes that the work environment is the only way to explain the high rate of the syndrome. They overlook several alternative explanations:" },
    { type: 'list', items: [
      '**Self-selection bias:** Maybe naturally stressed people or people already predisposed to the syndrome tend to seek out or be assigned to Department F.',
      '**Pre-existing condition:** Workers in Department F may have had the syndrome before they started working there.',
      '**Non-work stressors:** Something outside the job (commute length, shift timing, personal factors) might explain why Department F workers are more affected.',
      '**Non-stress causes:** The syndrome might have other causes besides stress that are more prevalent in Department F.',
    ]},

    { type: 'h4', text: 'Step 3: Prephrase the Strengthener' },
    { type: 'paragraph', text: "Since the core problem is the jump from correlation to causation, you can support the argument by ruling out the leading alternative explanations. The most direct prephrase: *\"The argument would be stronger if I found out that workers were healthy before joining Department F and only developed the syndrome afterward.\"* This would establish a timeline that rules out self-selection and pre-existing conditions." },
    { type: 'paragraph', text: "Other valid prephrases:" },
    { type: 'list', items: [
      '**Rule out alternative causes:** "...there is no other factor unique to Department F that could explain the syndrome."',
      '**Show the mechanism:** "...the work conditions in Department F are demonstrably more stressful (longer hours, tighter deadlines, more dangerous tasks)."',
      '**Show dose-response:** "...workers who spend more years in Department F have higher rates of the syndrome."',
    ]},

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'paragraph', text: "You are looking for the answer that makes the author's causal explanation more likely by ruling out a competing explanation." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Department F has more employees than any other department in the company.', text: '**[The Proportionality Trap]**\nThe stimulus is based on a *percentage* of workers, not the total number. If Department F has one thousand workers and ten percent are sick, that is one hundred people. If Department G has ten workers and one percent is sick, that is a very small number of people. The raw size of the department does not explain why the *rate* of sickness is higher in one group than the other. The percentage comparison already controls for group size.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Some experts believe that the syndrome can be caused by various factors, only one of which is high stress.', text: '**[The Weakener]**\nThis choice actually *hurts* the argument. If the syndrome can be caused by various factors other than stress — such as bad lighting, toxic chemicals, or poor ventilation — then the author\'s specific claim that stress from the *work* in Department F is the cause becomes less likely. This opens the door to alternative explanations rather than closing it. **Wrong direction.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) Many workers who transfer into Department F from elsewhere in the company soon begin to develop the syndrome.', text: '**[The Correct Choice — Timeline / No Cause → Effect]**\nThis is devastating because it provides a before-and-after comparison. These workers were presumably healthy while working in other departments (no cause → no effect). After transferring to Department F, they developed the syndrome (cause introduced → effect appears). This rules out the self-selection alternative: these workers didn\'t choose Department F *because* they were already stressed or sick — they only became affected *after* they started working there. This is the "No Cause → No Effect" pattern, one of the strongest forms of causal support.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) It is relatively common for workers in the transportation industry to suffer from the syndrome.', text: '**[The Irrelevant Context]**\nThis might explain why the company has the syndrome at all, but it does not explain the *internal difference* between Department F and the other departments. If the syndrome is common across the industry, we still don\'t know why Department F has a higher rate than other departments within the same company. **Outside the argument\'s specific scope.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Job-related stress has been the most frequently cited cause for dissatisfaction among workers at the company.', text: '**[The Scope Mismatch]**\nDissatisfaction is not the same thing as the specific medical syndrome mentioned in the stimulus. Furthermore, if stress-related dissatisfaction is high across the *whole company*, it does not explain why the syndrome is concentrated specifically in Department F. This choice fails to distinguish Department F from other departments. **Wrong concept and wrong scope.**', badge: 'Incorrect', badgeColor: 'red' },
    ] },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When you see an argument that makes a causal claim based on a correlation, immediately look for ways to confirm the cause-effect link. The three most powerful strengthening moves are: **(1)** Rule out alternative causes — eliminate other plausible explanations so the author's cause is the last one standing. **(2)** Show \"no cause → no effect\" — demonstrate that people who are not exposed to the alleged cause do not develop the effect, as Choice (C) does here with the transfer timeline. **(3)** Show a mechanism or dose-response — explain *how* or *how much* the cause produces the effect. On the LSAT, the \"no cause → no effect\" pattern (control group / timeline evidence) is the single most common form of causal strengthener." },
  ]
};
