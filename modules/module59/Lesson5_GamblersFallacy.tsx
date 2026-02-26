import { Lesson } from '../../types';

export const Lesson5_GamblersFallacy: Lesson = {
  id: "59-5",
  title: "Flawed Predictions - The Gambler's Fallacy",
  content: [
    { type: 'h3', text: 'Lesson 5: Flawed Predictions' },
    { type: 'paragraph', text: '**Lesson Objective:** To identify arguments that incorrectly use past outcomes to predict future random events. You will learn to distinguish independent events from dependent events, recognize the Gambler\'s Fallacy and its mirror image (the Hot Hand Fallacy), and understand how probability errors surface on the LSAT.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Gambler\'s Fallacy' },
    { type: 'paragraph', text: 'The Gambler\'s Fallacy is the mistaken belief that random processes have a built-in memory—that probability "self-corrects" in the short term to match long-run averages. In reality, each independent event is unaffected by what came before it.' },

    { type: 'blockquote', text: '"The roulette wheel landed on red six times in a row, so black is due next." This sentence captures the essence of the Gambler\'s Fallacy: treating probability as a debt that nature must repay.' },

    { type: 'list', items: [
      '**The Core Trap:** Believing an outcome is "due" or "overdue" because it hasn\'t occurred recently.',
      '**Why It Feels Right:** Our brains are pattern-seeking machines. A long streak of one outcome *feels* like it should reverse, because we intuitively expect short sequences to resemble the long-run average. This is called the "representativeness heuristic."',
      '**Why It\'s Wrong:** The coin, die, or natural process has no memory. Each trial starts fresh with the same probability. A fair coin that has landed heads 10 times still has exactly a 50% chance of heads on the next flip.',
      '**Everyday Example:** "I\'ve lost five poker hands in a row—I\'m due for a win!" The cards don\'t know your history.',
      '**LSAT Example (The Meteorite Case):** "Meteorites of this size strike the Earth every 100 million years on average. It has been 100 million years since the last strike, so one is imminent." The flaw: geological averages describe long-run frequency, not a countdown timer. The probability of a strike in any given year doesn\'t increase just because time has passed.'
    ]},

    { type: 'callout', variant: 'tip', title: 'The Emotional Hook', text: 'LSAT arguments exploiting this fallacy often use emotionally loaded language—"overdue," "bound to happen," "long streak," "due for a correction." These phrases signal that the argument treats randomness as having a schedule. Flag them immediately.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Hot Hand Fallacy' },
    { type: 'paragraph', text: 'The Hot Hand Fallacy is the mirror image of the Gambler\'s Fallacy. Instead of expecting a streak to reverse, this error expects a streak to continue—purely because it has been going on.' },

    { type: 'list', items: [
      '**The Core Trap:** Believing that a random streak proves an underlying trend or "hot hand" that will persist.',
      '**Why It Feels Right:** Streaks look purposeful. When a basketball player makes five shots in a row, spectators feel the player "can\'t miss." But controlled studies show the next shot\'s success rate is often no higher than the player\'s overall average.',
      '**Why It\'s Wrong (for independent events):** Just as past failures don\'t make success more likely, past successes don\'t make the next success more likely—*if the events are independent*.',
      '**Everyday Example:** "This stock has gone up for eight straight quarters—it\'s on a roll and will keep climbing!" Stock returns in an efficient market are largely independent; past gains don\'t guarantee future gains.',
      '**LSAT Application:** "The restaurant has received perfect health inspection scores for five consecutive years. Therefore, it will certainly pass its inspection next year." The argument treats each inspection as if past results guarantee future performance, ignoring that conditions can change independently.'
    ]},

    { type: 'callout', variant: 'default', title: 'Gambler\'s vs. Hot Hand', text: '**Gambler\'s Fallacy:** "The streak must end!" → Expects reversal.\n**Hot Hand Fallacy:** "The streak must continue!" → Expects persistence.\nBoth errors share the same root cause: treating independent events as if they influence each other.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Key Concept: Independence of Events' },
    { type: 'paragraph', text: 'The critical distinction underlying both fallacies is whether events are **independent** or **dependent**. Getting this right is essential for evaluating probability arguments on the LSAT.' },

    { type: 'breakdown',
      labels: { title: 'Event Type', text: 'Definition & Behavior' },
      items: [
        {
          title: 'Independent Events',
          text: '**Definition:** The outcome of one event has no effect on the outcome of the next.\n**Examples:** Coin flips, dice rolls, roulette spins, lottery draws (with replacement), natural disasters.\n**Key Rule:** Past outcomes do not change future probabilities. P(Heads on flip 11) = 50%, regardless of what happened on flips 1–10.',
          badge: 'No Memory',
          badgeColor: 'blue'
        },
        {
          title: 'Dependent Events',
          text: '**Definition:** The outcome of one event changes the probability of subsequent events.\n**Examples:** Drawing cards from a deck without replacement, removing marbles from a bag, depleting inventory.\n**Key Rule:** Past outcomes DO change future probabilities. After drawing 4 aces from a 52-card deck, the probability of drawing another ace is 0/48 = 0%.',
          badge: 'Has Memory',
          badgeColor: 'red'
        }
      ]
    },

    { type: 'paragraph', text: '**The Critical LSAT Skill:** When an argument makes a prediction based on past frequency, ask: "Are these events independent or dependent?" If independent, past outcomes are irrelevant—and any prediction based on a streak is fallacious (either Gambler\'s or Hot Hand). If dependent, past outcomes legitimately affect future probabilities.' },

    { type: 'list', items: [
      '**Independent (Fallacy applies):** "It rained 10 of the last 12 days, so tomorrow will be sunny." Weather patterns have some dependency, but this argument treats the count as a self-correcting mechanism—a classic Gambler\'s Fallacy framing.',
      '**Dependent (Fallacy does NOT apply):** "We\'ve pulled 8 red marbles out of a bag that started with 10 red and 10 blue. The next marble is more likely to be blue." This is correct reasoning—removing red marbles genuinely shifts the odds.',
      '**Ambiguous (LSAT Loves These):** "This volcano erupts every 500 years on average. The last eruption was 500 years ago." Is volcanic activity truly independent from eruption to eruption? The LSAT exploits this ambiguity by having arguments treat complex processes as if they follow simple independent probability.'
    ]},

    { type: 'hr' },

    { type: 'h4', text: 'How Probability Errors Appear on the LSAT' },
    { type: 'paragraph', text: 'The LSAT doesn\'t test your ability to calculate probabilities. Instead, it tests whether you can spot when an argument misuses probability concepts. Here are the most common patterns:' },

    { type: 'process', title: 'Common LSAT Probability Error Patterns', steps: [
      '**Pattern 1: The "Due" Argument.** The argument notes that something hasn\'t happened in a while and concludes it must happen soon. Signal words: "due," "overdue," "bound to happen," "long overdue." Flaw: Gambler\'s Fallacy applied to independent events.',
      '**Pattern 2: The "Streak" Argument.** The argument notes a streak of outcomes and concludes the streak will continue. Signal words: "track record," "consistently," "proven pattern," "will continue." Flaw: Hot Hand Fallacy applied to independent events.',
      '**Pattern 3: The "Average as Schedule" Argument.** The argument converts a long-run average into a specific prediction. Signal words: "on average every X years," "typically occurs once per," "the average interval." Flaw: Treating a statistical average as a timetable.',
      '**Pattern 4: The Reversed Conditional Probability.** The argument confuses P(A|B) with P(B|A)—covered in Lesson 4, but often combined with gambler-style reasoning. Watch for arguments that chain a probability reversal with a prediction about future events.',
      '**Pattern 5: Confusing Frequency with Certainty.** The argument takes a high probability and treats it as certainty, or a low probability and treats it as impossibility. Signal words: "almost always" → "will," "rarely" → "won\'t." Flaw: Eliminating the possibility space.'
    ]},

    { type: 'hr' },

    { type: 'h4', text: 'Practice: Identifying the Fallacy' },
    { type: 'paragraph', text: 'Consider this illustrative example that combines several concepts from this lesson:' },

    { type: 'question-card',
      id: 'illustrative-59-5-001',
      questionType: 'LSAT Math',
      difficulty: 'medium',
      stimulus: 'A seismologist reports that major earthquakes in a certain region occur on average once every 50 years. The last major earthquake in the region occurred 53 years ago. A local official argues that because the region is "overdue" for a major earthquake, the town should immediately invest in expensive seismic retrofitting for all public buildings, since a major earthquake is virtually certain to occur within the next few years.',
      question: 'The official\'s reasoning is most vulnerable to criticism on the grounds that it',
      options: [
        '(A) relies on the testimony of an authority figure without questioning the seismologist\'s methodology',
        '(B) assumes that the fact that a certain amount of time has elapsed since the last earthquake makes another earthquake more likely to occur soon (Correct)',
        '(C) fails to consider whether the cost of seismic retrofitting is justified by the potential damage from an earthquake',
        '(D) ignores the possibility that smaller earthquakes might occur before a major one',
        '(E) treats the average frequency of earthquakes in the past as a guarantee of their frequency in the future'
      ]
    },

    { type: 'accordion', title: 'Full Analysis of Practice Question', content: [
      { type: 'paragraph', text: '**Why (B) is correct:** The official\'s argument hinges on the word "overdue"—the classic signal of the Gambler\'s Fallacy. The argument assumes that because 53 years have passed (slightly more than the 50-year average), a major earthquake is "virtually certain" soon. This treats independent geological events as if probability accumulates over time, like a debt that must be repaid.' },
      { type: 'paragraph', text: '**Why (E) is tempting but wrong:** Answer (E) describes a related but different flaw. The official does use past averages to predict the future, but the *specific* error is the "overdue" reasoning—the belief that elapsed time increases the probability of the next event. Answer (E) is too broad; it doesn\'t capture the particular mechanism of the fallacy.' },
      { type: 'paragraph', text: '**Why (A) is wrong:** The argument\'s flaw isn\'t about the seismologist\'s credibility. Even if the 50-year average is perfectly accurate, the "overdue" reasoning is still fallacious.' },
      { type: 'paragraph', text: '**Why (C) is wrong:** Cost-benefit analysis is a separate issue. The flaw is in the probability reasoning, not the economic reasoning.' },
      { type: 'paragraph', text: '**Why (D) is wrong:** The occurrence of smaller earthquakes is irrelevant to the logical flaw in the argument about major earthquakes being "overdue."' },
      { type: 'paragraph', text: '**Key Takeaway:** When you see an argument claiming something is "overdue" or "due" based on past frequency, the flaw is almost always the Gambler\'s Fallacy. The correct answer will identify the assumption that elapsed time increases probability for independent events.' }
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Lesson Takeaway', text: 'The Gambler\'s Fallacy and the Hot Hand Fallacy are two sides of the same coin—both incorrectly assume that independent events influence each other. When an LSAT argument predicts something is "due," "overdue," or "bound to continue," ask one question: **"Are these events truly independent?"** If so, past outcomes tell you nothing about what comes next. The past does not negotiate with the future.' }
  ]
};
