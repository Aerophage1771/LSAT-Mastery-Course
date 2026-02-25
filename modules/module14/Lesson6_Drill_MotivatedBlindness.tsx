import { Lesson } from '../../types';

export const Lesson6_Drill_MotivatedBlindness: Lesson = {
  id: "14-6",
  title: "Drill: Motivated Blindness (PT-109-S-1-Q-18)",
  content: [
    { type: 'h2', text: 'Motivated Blindness' },
    { type: 'paragraph', text: '**Motivated Blindness** is an advanced Principle-Generalization pattern that moves beyond simple cause-and-effect into the realm of psychological reasoning. The stimulus does not merely present a trade-off or an unintended consequence \u2014 it offers an explanation for *why* a particular group overlooks a problem. The core insight is that when something strongly serves a person\'s or group\'s interests, they become psychologically inclined to ignore its downsides. Your task is to identify the principle that captures this specific cognitive bias.' },

    { type: 'paragraph', text: 'This pattern is distinct from a rational trade-off. In a rational trade-off, the person consciously weighs pros and cons and decides the benefits outweigh the costs. In a motivated blindness scenario, the person **fails to consider** the costs at all \u2014 not because the information is unavailable, but because their self-interest creates a psychological blind spot. The principle must capture this *failure to see*, not a deliberate decision to accept.' },

    { type: 'h3', text: 'What Makes Motivated Blindness Distinctive' },
    { type: 'list', ordered: true, items: [
      '**An action or tool strongly serves a group\'s interests.** The stimulus establishes that something is extremely beneficial to a specific group \u2014 it advances their goals, supports their agenda, or enables their work.',
      '**The same action has a significant downside.** There is a real, potentially serious negative consequence associated with the action or tool.',
      '**The group fails to consider the downside.** The stimulus does not say they weighed the costs and accepted them. It says they **fail to consider** them \u2014 the costs are invisible to them, not merely outweighed.',
      '**Self-interest explains the blind spot.** The stimulus explicitly or implicitly links the group\'s failure to see the downside to the fact that the action serves their interests. "It is no wonder that" is a classic LSAT phrase signaling this causal explanation.',
    ]},

    { type: 'callout', variant: 'default', title: 'Key Signal', text: 'Watch for explanatory phrases like "it is no wonder that," "it is unsurprising that," or "naturally" followed by a description of someone failing to see a problem. These phrases signal that the stimulus is explaining a cognitive bias \u2014 not just stating facts, but explaining *why* a group thinks (or fails to think) a certain way.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Motivated Blindness (PT-109-S-1-Q-18)' },
    { type: 'paragraph', text: 'This drill demonstrates the motivated blindness pattern using an environmentalist scenario. Read the stimulus and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '14-6-drill',
      questionType: 'Principle - Generalization',
      difficulty: 'hard',
      stimulus: 'The use of space-based satellites to study environmental conditions on Earth is an important development in the conservation movement\'s history. Environmental problems may now be observed long before they otherwise would be noticed, allowing for intervention before they reach the crisis stage. It is no wonder that environmentalists fail to consider both that spacecraft may damage the ozone layer and that this damage could be serious enough to warrant discontinuing spaceflight.',
      question: 'The reasoning above most closely conforms to which one of the following principles?',
      options: [
        '(A) People tend to ignore possible objectionable consequences of actions that support their activities. (Correct)',
        '(B) A negative consequence of an activity may be outweighed by its great positive consequences.',
        '(C) Technology usually has at least some negative impact on the environment, even if it is largely beneficial.',
        '(D) Even well-intentioned attempts to solve problems sometimes make them worse.',
        '(E) Attempts to employ technology often have unforeseen consequences that may be negative.',
      ],
    },

    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Understand the Situation' },
    { type: 'paragraph', text: 'The stimulus builds a three-part argument explaining a specific psychological phenomenon. Let\'s trace the author\'s reasoning.' },

    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'The Benefit', text: 'Satellites are an "important development" for conservation \u2014 they allow early detection of environmental problems and enable intervention before crises develop. This tool directly and powerfully serves environmentalists\' core mission.', badge: 'Serves Their Goals', badgeColor: 'green' },
      { title: 'The Downside', text: 'Spacecraft may damage the ozone layer, and the damage could be serious enough to warrant discontinuing spaceflight entirely. This is a significant environmental cost associated with the very tool environmentalists rely on.', badge: 'Potential Harm', badgeColor: 'red' },
      { title: 'The Blind Spot', text: 'Environmentalists "fail to consider" both the ozone damage and its severity. They are not weighing pros and cons \u2014 they are not seeing the cons at all. The phrase "it is no wonder" tells us the author considers this blindness predictable and explainable.', badge: 'Cognitive Bias', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Key Dynamic' },
    { type: 'paragraph', text: 'The stimulus is not primarily about satellites, the environment, or ozone damage. It is about **why people fail to see the downsides of things that serve their interests.** The author explains a psychological pattern:' },
    { type: 'list', items: [
      '**Cause:** Satellites strongly support environmentalists\' activities and goals.',
      '**Effect:** Environmentalists are psychologically unable or unwilling to consider the tool\'s negative consequences.',
      '**The link:** "It is no wonder" \u2014 the benefit is so aligned with their interests that the blind spot is predictable.',
    ]},
    { type: 'paragraph', text: 'The critical distinction: the stimulus says environmentalists "fail to consider" the consequences. It does **not** say they considered and dismissed them, or that they weighed pros against cons. The principle must capture this failure to even *perceive* the problem \u2014 a blind spot, not a calculated trade-off.' },
    { type: 'paragraph', text: '**Key Dynamic:** When an action or tool strongly supports a group\'s activities, that group tends to ignore the action\'s negative consequences.' },

    { type: 'h4', text: 'Step 3: Abstract to General Terms' },
    { type: 'table', headers: ['Specific Detail', 'Abstracted Version'], rows: [
      ['"Environmentalists"', '"People" or "a group"'],
      ['"Space-based satellites / spacecraft"', '"An action" or "a tool"'],
      ['"Important development in conservation"', '"Supports their activities"'],
      ['"Fail to consider"', '"Tend to ignore"'],
      ['"Damage the ozone layer"', '"Objectionable consequences"'],
      ['"It is no wonder"', 'Causal explanation for the bias'],
    ]},
    { type: 'paragraph', text: '**Pre-phrase:** "People tend to ignore the negative consequences of actions that support their own activities or interests."' },

    { type: 'h4', text: 'Step 4: Evaluate Each Answer' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) People tend to ignore possible objectionable consequences of actions that support their activities.', text: 'This perfectly captures the motivated blindness dynamic. "Actions that support their activities" = satellites serving conservation. "Objectionable consequences" = ozone damage. "Tend to ignore" = "fail to consider." The principle identifies the correct causal mechanism: self-interest creates a blind spot. The stimulus is a textbook example.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) A negative consequence of an activity may be outweighed by its great positive consequences.', text: 'This is the most tempting wrong answer because it seems logical. But it describes a **rational trade-off** \u2014 someone consciously weighing pros against cons and concluding the benefits are worth the costs. The stimulus explicitly says environmentalists "fail to consider" the negative consequences. They are not weighing and accepting; they are **not seeing**. This answer describes the wrong cognitive process.', badge: 'Rational Trade-off Trap', badgeColor: 'red' },
      { title: '(C) Technology usually has at least some negative impact on the environment, even if it is largely beneficial.', text: 'This is a general observation about technology and the environment. While factually consistent with the stimulus, it completely misses the **psychological core** of the argument \u2014 the explanation of *why* environmentalists fail to consider the downsides. The stimulus is not just saying "technology has pros and cons." It is explaining a cognitive bias. This answer captures the factual backdrop but not the lesson.', badge: 'Mismatched Focus', badgeColor: 'red' },
      { title: '(D) Even well-intentioned attempts to solve problems sometimes make them worse.', text: 'This describes an unintended consequences pattern (Lesson 5), not a motivated blindness pattern. It would apply if the stimulus claimed that using satellites ultimately caused more environmental harm than it prevented. But the stimulus makes no such net-negative claim \u2014 it only points out a negative consequence that is being overlooked, without concluding that it makes the overall situation worse.', badge: 'Wrong Pattern', badgeColor: 'red' },
      { title: '(E) Attempts to employ technology often have unforeseen consequences that may be negative.', text: '"Unforeseen" implies the consequences are impossible to predict or not yet known. But the stimulus does not say the ozone damage is unpredictable or unknown \u2014 it says environmentalists "fail to consider" it. The information is presumably available; the group simply does not engage with it because of their bias. There is a critical difference between consequences that **cannot be foreseen** and consequences that **are not considered** due to motivated blindness.', badge: 'Unforeseen \u2260 Ignored', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: Summary Table' },
    { type: 'table', headers: ['Answer', 'Cognitive Process Described', 'Matches Stimulus?', 'Verdict'], rows: [
      ['**(A) Ignore consequences of beneficial actions**', '**Blind spot from self-interest**', '**\u2713 \u2014 "Fail to consider" = ignore**', '**Correct \u2713**'],
      ['(B) Negatives outweighed by positives', 'Conscious weighing of pros/cons', '\u2717 \u2014 Stimulus says "fail to consider," not "weighed and accepted"', 'Wrong Process'],
      ['(C) Technology has negative impacts', 'Factual observation', '\u2717 \u2014 Misses the psychological explanation', 'Wrong Focus'],
      ['(D) Good intentions \u2192 worse outcomes', 'Unintended consequences', '\u2717 \u2014 No claim that satellite use made things worse', 'Wrong Pattern'],
      ['(E) Unforeseen negative consequences', 'Inability to predict', '\u2717 \u2014 "Unforeseen" \u2260 "fail to consider"', 'Wrong Mechanism'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Motivated Blindness: Common Traps' },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Spot It' }, items: [
      { title: 'The Rational Trade-off Trap', text: 'The answer describes a conscious cost-benefit analysis where someone decides the benefits are worth the costs. Motivated blindness is fundamentally different \u2014 the person **does not see** the costs. Check the stimulus for phrases like "fail to consider," "overlook," or "do not take into account" \u2014 these indicate a blind spot, not a calculated acceptance.', badge: 'Most Common', badgeColor: 'blue' },
      { title: 'The "Unforeseen" vs. "Ignored" Confusion', text: 'An answer about unforeseen or unpredictable consequences describes a different cognitive situation. In motivated blindness, the negative information may be available \u2014 the group simply does not engage with it because their interests create a filter. "Cannot be foreseen" \u2260 "fails to consider."', badge: 'Common', badgeColor: 'blue' },
      { title: 'The Pattern Swap', text: 'The answer describes an **unintended consequences** pattern (solution creates new problem) rather than a **motivated blindness** pattern (self-interest creates blind spot). These are related but distinct: unintended consequences is about causal chains; motivated blindness is about cognitive processes.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'The Factual Observation', text: 'The answer makes a true general statement about technology or the environment that happens to be consistent with the stimulus but misses the **explanatory core** \u2014 why the group fails to see the problem. The correct principle must explain the cognitive bias, not just describe the factual situation.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: '**1. Motivated blindness \u2260 rational trade-off.** The defining feature of motivated blindness is that the person *fails to see* the downside, not that they see it and accept it. "Fail to consider" and "outweighed by" describe fundamentally different cognitive processes. The correct principle must match the process described in the stimulus.\n\n**2. "It is no wonder" is an explanatory signal.** When the stimulus says "it is no wonder that" or "it is unsurprising that," it is providing a causal explanation for a cognitive pattern. The principle must capture this explanation, not just the facts.\n\n**3. Self-interest creates the blind spot.** The principle must link the group\'s failure to see the downside to the fact that the action serves their interests. Without this causal link, the principle is merely describing a coincidence, not explaining a pattern.\n\n**4. Distinguish "unforeseen" from "unconsidered."** Unforeseen consequences cannot be predicted in advance. Unconsidered consequences are available information that a group ignores because of bias. The stimulus describes the latter, not the former.\n\n**5. This is a psychological question, not a factual one.** The correct principle describes a cognitive pattern (how self-interest distorts perception), not a factual observation (technology has pros and cons). Always ask: what is the stimulus *explaining*, not just what is it *describing*?' },
  ]
};
