import { Lesson } from '../../types';

export const Lesson5_Drill_ComparativeClaims: Lesson = {
  id: "9-5",
  title: "Drill: Strengthening Comparative Claims (PT-106-S-3-Q-9)",
  content: [
    { type: 'h2', text: 'Strengthening Comparative Claims' },
    { type: 'paragraph', text: "Comparative arguments assert that one method, group, policy, or object is superior to another in some specific way. The author typically provides evidence about one option and concludes that it outperforms the alternative. The gap in these arguments almost always involves the comparison itself: the author has not adequately demonstrated that the two options differ in the way the conclusion claims." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Strengthen Comparative Claims' },
    { type: 'paragraph', text: "Comparative arguments are vulnerable because any comparison depends on two things: **(1)** a relevant standard of comparison, and **(2)** evidence that the preferred option genuinely meets that standard better than the alternative. To strengthen a comparative argument, you must reinforce one or both of these." },

    { type: 'table', headers: ['Strategy', 'How It Works', 'Example'], rows: [
      ['**Highlight the Limit of the Alternative**', 'Show that the competing option has a specific weakness or limitation in the area being compared, making the preferred option look stronger by contrast.', '"Surveys cannot capture unconscious behavior" highlights a limitation of surveys when the conclusion favors observation.'],
      ['**Show a Unique Advantage**', 'Demonstrate that the preferred option has a capability or benefit that the alternative fundamentally cannot match.', '"The new engine operates efficiently at temperatures where the old design fails" shows a unique advantage.'],
      ['**Confirm the Fairness of the Comparison**', 'Provide evidence that the two options were evaluated under comparable conditions, ruling out the possibility that the comparison is skewed.', '"Both groups were tested under identical conditions" validates the comparison.'],
      ['**Bridge the Gap Between Concepts**', 'If the premises discuss one metric and the conclusion discusses another, provide information that links the two metrics.', 'If the evidence is about speed and the conclusion is about efficiency, show that speed directly determines efficiency in this context.'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The "Unique Information" Pattern', text: "One of the most common comparative strengtheners on the LSAT demonstrates that the preferred option provides access to a type of information, result, or capability that the alternative **fundamentally cannot provide**. This \"unique information\" pattern is especially common in arguments comparing research methods, policies, or technologies." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Strengthening Comparative Claims (PT-106-S-3-Q-9)' },

    { type: 'h4', text: 'The Problem' },
    { type: 'blockquote', text: 'Market research traditionally entails surveying consumers about why they buy and use particular products and brands. Observational research—actually watching consumers shopping and interacting with products—is now increasingly used by market researchers to supplement surveys. Market researchers claim that observational research yields information about consumer behavior that surveys alone cannot provide.' },
    { type: 'h4', text: 'The Question' },
    { type: 'paragraph', text: 'Which one of the following, if true, provides the strongest support for the market researchers\' claim?' },

    { type: 'question-card',
      id: '9-5-drill',
      questionType: 'Strengthen',
      difficulty: 'medium',
      stimulus: 'Market research traditionally entails surveying consumers about why they buy and use particular products and brands. Observational research—actually watching consumers shopping and interacting with products—is now increasingly used by market researchers to supplement surveys. Market researchers claim that observational research yields information about consumer behavior that surveys alone cannot provide.',
      question: 'Which one of the following, if true, provides the strongest support for the market researchers\' claim?',
      options: [
        '(A) Even consumers who are unable to explain their preference for or rejection of particular brands reveal which brands they are considering by picking up and putting down products while they are shopping. (Correct)',
        '(B) Market researchers find that consumers are almost always willing to participate in observational research for which the consumer is paid by the hour.',
        '(C) Consumers are becoming increasingly self-conscious about their buying habits, and some consumers have stopped buying some items that they normally used to buy.',
        '(D) Market researchers say they find data collection more enjoyable in observational research than in survey research, because observational research requires more creative judgment on their part.',
        '(E) Consumers are more likely to respond to oral surveys than they are to respond to written questionnaires.',
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's engage with the text sentence by sentence to see how the author sets up their comparison." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"Market research traditionally entails surveying consumers about why they buy and use particular products and brands. Observational research—actually watching consumers shopping and interacting with products—is now increasingly used by market researchers to supplement surveys."', text: 'You are introduced to two different methods of market research: **(1)** asking people questions (surveys), and **(2)** watching people shop (observation). The key detail is that surveys rely on consumers\' *self-reported* reasons, while observation captures *visible behavior* directly.' },
      { title: '"Market researchers claim that observational research yields information about consumer behavior that surveys alone cannot provide."', text: 'This is the conclusion. The author is making a **comparative claim** of superiority. They assert that observation has a unique advantage over surveys because it provides a type of information that is impossible to get from surveys alone. The keyword is "cannot" — the claim is that there is information surveys are *fundamentally incapable* of capturing.' },
    ] },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: '**What Method of Reasoning is the argument using?**\nThe argument makes a claim of superiority for one method (observation) over another (surveys). The specific advantage claimed is that observation can yield "information... that surveys alone cannot provide."' },
    { type: 'paragraph', text: "**What's the Problem?**\nThe argument provides no evidence to support this claim. It is simply an assertion. The author has not identified any specific type of information that observation can capture but surveys cannot. To strengthen the claim, we need a concrete example demonstrating this unique capability." },
    { type: 'paragraph', text: "The key vulnerability: for the claim to hold, there must exist a category of consumer behavior that is **(a)** invisible to surveys (because consumers can't or won't report it accurately) but **(b)** visible to observation (because researchers can see it happening). Without such a category, the comparative claim has no foundation." },

    { type: 'h4', text: 'Step 3: Prephrase the Strengthener' },
    { type: 'paragraph', text: "Since the core claim is that observation provides unique information, we need an example that demonstrates this uniqueness. Prephrase: *\"The argument would be stronger if I found out that there is a specific, valuable type of consumer information that can only be gathered by watching consumers and cannot be obtained by asking them.\"*" },
    { type: 'paragraph', text: "The most natural way this would work: consumers have preferences or behaviors they cannot articulate in words. A survey relies on verbal responses, so if the information is non-verbal or unconscious, only observation can capture it." },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'paragraph', text: "You are looking for the answer that provides a clear example of information that observation can capture but surveys cannot." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Even consumers who are unable to explain their preference for or rejection of particular brands reveal which brands they are considering by picking up and putting down products while they are shopping.', text: '**[The Correct Choice — Unique Information Pattern]**\nThis perfectly illustrates the unique advantage of observation. It describes a situation where consumers have preferences they *cannot put into words* ("unable to explain"). A survey, which relies on verbal or written answers, would miss this information entirely — you can\'t survey someone about something they can\'t articulate. However, a researcher who is watching can gather this data by observing the consumer\'s physical actions (picking up and putting down products). This is exactly the type of information that "surveys alone cannot provide." **Matches the prephrase perfectly.**', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) Consumers are almost always willing to participate in observational research for which they are paid.', text: '**[The Irrelevant Practicality Trap]**\nThis choice is about the *feasibility* and *participation rates* of observational research, not about the *quality or uniqueness of the information* it yields. Whether people are willing to participate tells you nothing about whether the data gathered is different from what surveys provide. **Wrong dimension of comparison.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) Consumers are becoming increasingly self-conscious about their buying habits, and some have stopped buying items they normally used to buy.', text: '**[The Irrelevant Context]**\nThis is a general fact about changing consumer behavior. It doesn\'t help compare the effectiveness of surveys versus observation. In fact, self-consciousness might affect both methods: people might give different survey answers *and* alter their shopping behavior if they know they\'re being watched. This choice doesn\'t establish any advantage for either method. **No impact on the comparison.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Market researchers find data collection more enjoyable in observational research.', text: '**[The Irrelevant Opinion Trap]**\nThe researchers\' personal enjoyment of a method has no bearing on whether that method produces *unique, valuable information about consumers*. The argument is about the quality and type of data, not the experience of the data collectors. **Completely outside the argument\'s scope.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Consumers are more likely to respond to oral surveys than to written questionnaires.', text: '**[The Wrong Comparison Trap]**\nThis choice compares two different types of *surveys* (oral vs. written). The argument, however, is about comparing *surveys in general* to *observational research*. Whether consumers prefer oral or written surveys is a debate within one side of the comparison and tells you nothing about the other side. **Irrelevant internal distinction.**', badge: 'Incorrect', badgeColor: 'red' },
    ] },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument claims that one method is superior to another because it provides unique information, the best strengthener will provide a **concrete example** of information that the preferred method can capture but the alternative *fundamentally cannot*.\n\nLook for scenarios where the alternative method has a structural limitation — not just a practical one. In this question, surveys fail not because they are poorly designed, but because they rely on verbal self-reporting, and some consumer behaviors are non-verbal and unconscious. That structural gap is what makes observation uniquely valuable.\n\nOn the LSAT, comparative Strengthen questions almost always reward the answer that identifies a **capability gap** between the two options — a specific area where one option can succeed and the other cannot, no matter how well it is implemented." },
  ]
};
