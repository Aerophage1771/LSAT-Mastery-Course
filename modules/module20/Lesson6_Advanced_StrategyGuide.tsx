import { Lesson } from '../../types';

export const Lesson6_Advanced_StrategyGuide: Lesson = {
  id: "20-6",
  title: "Advanced Strategy Guide",
  content: [
    { type: 'h3', text: 'Advanced Strategy Guide: Mastering the Hardest Agree / Disagree Questions' },
    { type: 'paragraph', text: 'Easy Agree/Disagree questions involve direct, explicit contradictions. The hardest questions, however, are rarely so straightforward. They conceal the point of contention or consensus within layers of abstraction, unstated assumptions, or competing frameworks. This guide covers the three core difficulty factors, an advanced trap pattern, and a challenging practice question.' },
    { type: 'hr' },
    { type: 'h3', text: 'Three Difficulty Factors' },
    { type: 'paragraph', text: 'Understanding *why* certain Agree/Disagree questions are harder than others is the first step to mastering them. The difficulty of any question in this category can be traced back to three factors, often working in combination.' },
    { type: 'h4', text: 'Factor 1: The Clash of Criteria' },
    { type: 'paragraph', text: 'This pattern occurs when speakers agree on the facts of a situation but use different standards to evaluate those facts, leading to opposite conclusions. Their disagreement is not about *what is*, but about *what matters*.' },
    { type: 'list', items: [
      '**The Strategic Insight:** The conflict is not about the evidence itself, but about which standard of judgment is the correct one to apply. One speaker\'s entire argument will rest on the primacy of their chosen criterion (e.g., artistic merit, safety, efficiency), while the second speaker will explicitly prioritize a different one (e.g., public opinion, personal liberty, cost).',
      '**How to Apply This Strategy:**\n1.  Isolate the standard of judgment each speaker uses. Ask yourself, "What is the ultimate reason for their conclusion?"\n2.  Frame the conflict as a choice between these two standards.\n3.  Find the answer choice that questions the *relevance* or *centrality* of one speaker\'s standard. The correct answer will be a statement one speaker believes is the most important consideration and the other believes is irrelevant or secondary.',
      '**Strategic Tip:** When speakers agree on the facts but reach different conclusions, the point of contention is almost always the rule or standard they are using to make their judgment.'
    ]},
    { type: 'h4', text: 'Factor 2: The Definitional Dispute' },
    { type: 'paragraph', text: 'Here, the entire argument hinges on the definition of a key term. The speakers propose conflicting rules, often involving necessary or sufficient conditions, and the point at issue is a direct test of their competing definitions.' },
    { type: 'list', items: [
      '**The Strategic Insight:** The most efficient way to solve this is to formalize the logic. One speaker will propose a rule, such as "To be considered X, something must have characteristic A." The other speaker will reject this rule, often by proposing a different one, such as "Having characteristic B is enough to be considered X." The dispute is whether something can be X if it fails the first speaker\'s test but passes the second\'s.',
      '**How to Apply This Strategy:**\n1.  Translate each speaker\'s definition into a conditional rule (e.g., "If X, then Y").\n2.  Look for an answer choice, often a complex conditional statement itself, that presents a scenario where the two rules would yield opposite results.\n3.  Apply the Truth Test: one speaker\'s rule will force them to deny the statement, while the other speaker\'s rule will force them to affirm it.',
      '**Strategic Tip:** When a disagreement centers on the meaning of a term, formalizing the logic is your most powerful tool. The correct answer will be the one that perfectly isolates the logical conflict between their two rules.'
    ]},
    { type: 'h4', text: 'Factor 3: Consensus in Conflict (The Hardest "Agree" Questions)' },
    { type: 'paragraph', text: 'These questions are challenging because the speakers\' final conclusions are often diametrically opposed. The point of agreement is not an obvious fact but a deeper, structural element of their arguments -- a shared assumption that both must hold for their arguments to be coherent.' },
    { type: 'list', items: [
      '**The Strategic Insight:** The shared belief is what *enables* their disagreement. Without it, their arguments wouldn\'t be on the same topic. This consensus typically takes one of two forms:\n*   **The Shared Diagnosis:** They agree on the existence of a problem or symptom but disagree on its specific cause or meaning.\n*   **The Shared Causal Link:** They agree that a factor *will cause an effect* but disagree on whether the effect will be positive or negative.',
      '**How to Apply This Strategy:**\n1.  Look past the conflicting conclusions to the shared starting point of their arguments.\n2.  Find an answer choice that states this shared premise in a more general or neutral way.\n3.  The correct answer will be a statement that both speakers must accept as true for their specific (and conflicting) claims to make sense.',
      '**Strategic Tip:** For difficult "Agree" questions, look for the unstated foundation. Pay close attention to neutral language like "affects," "influences," or "is a factor in," as these words can often capture a shared belief in a causal link without specifying the conflicting outcomes.'
    ]},
    { type: 'hr' },
    { type: 'h3', text: 'The Implicit Commitment Trap' },
    { type: 'paragraph', text: 'The single most dangerous trap on hard Agree/Disagree questions is the **Implicit Commitment Trap**. This occurs when a speaker\'s stated position logically *implies* agreement or disagreement on a point that the speaker never directly addresses. The test-makers exploit the gap between what a speaker explicitly says and what their position logically commits them to.' },
    { type: 'callout', title: 'What Makes It a Trap', variant: 'tip', text: 'A speaker doesn\'t have to say "I agree" or "I disagree" for their position to commit them. If Speaker A argues that "all effective policies require public input," Speaker A is *implicitly committed* to the claim that a policy enacted without public input cannot be effective -- even though they never said those words. The test will offer answer choices that test this implicit commitment.' },
    { type: 'h4', text: 'How the Trap Works' },
    { type: 'paragraph', text: 'Consider a dialogue where Speaker 1 argues that digital art isn\'t "real" art because it doesn\'t require physical skill, and Speaker 2 argues that a particular digital piece is a masterwork. Speaker 2 never explicitly says "digital art is real art," but their position *logically requires* that belief. The test may offer an answer choice like "Whether a work can be considered art does not depend solely on the physical skill required to produce it." Speaker 1 would deny this; Speaker 2 is implicitly committed to affirming it.' },
    { type: 'list', items: [
      '**Detection Strategy:** After reading each speaker\'s argument, ask yourself: "What MUST this speaker believe to be true in order for their argument to work?" These unstated-but-required beliefs are the implicit commitments.',
      '**The Contrapositive Test:** If a speaker claims "If A, then B," they are implicitly committed to "If not B, then not A." Test-makers frequently disguise the correct answer as the contrapositive of a speaker\'s stated claim.',
      '**The Scope Extension:** A speaker who makes a claim about a specific case (e.g., "This policy failed") may be implicitly committed to a more general principle (e.g., "Policies of this type can fail"). Look for answers that generalize from a speaker\'s specific claims.'
    ]},
    { type: 'h4', text: 'Avoiding the Trap' },
    { type: 'process', title: 'Three-Step Verification', steps: [
      'Read the answer choice and ask: "Would Speaker 1 say yes or no?" If the answer is "I don\'t know," the choice is almost certainly wrong.',
      'For each speaker, trace the logical chain from their stated position to the answer choice. Can you get there in one or two valid logical steps? If you need to make assumptions beyond what the text supports, the choice is wrong.',
      'Beware the "Silence Trap" disguised as an implicit commitment. True implicit commitment flows necessarily from the argument; a mere topic the speaker didn\'t address is silence, not commitment.'
    ]},
    { type: 'hr' },
    { type: 'h3', text: 'Advanced Practice: Hard Question' },
    { type: 'paragraph', text: 'Apply the strategies above to this challenging dialogue. Pay particular attention to what each speaker is *implicitly committed* to.' },
    { type: 'question-card', id: '20-6-drill', questionType: 'Point at Issue', difficulty: 'hard',
      stimulus: 'Martinez: Our city should replace its aging bus fleet with electric buses. Electric buses produce zero tailpipe emissions, which would significantly improve air quality in the neighborhoods along bus routes where respiratory illness rates are highest.\nChandra: Replacing the fleet would be a mistake. Manufacturing electric buses generates substantially more carbon emissions than manufacturing conventional buses. Since the primary goal of any transit policy should be minimizing total carbon output, we should instead invest in extending the service life of our current fleet through retrofitting.',
      question: 'Martinez and Chandra are committed to disagreeing about which one of the following?',
      options: [
        '(A) Whether the city\'s current bus fleet is in need of replacement or repair',
        '(B) Whether electric buses produce fewer tailpipe emissions than conventional buses',
        '(C) Whether the environmental impact of manufacturing a vehicle is relevant to evaluating the merits of a transit fleet decision (Correct)',
        '(D) Whether respiratory illness rates are higher in neighborhoods along bus routes',
        '(E) Whether reducing carbon emissions is a worthwhile policy objective'
      ]
    },
    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },
    { type: 'h3', text: 'Analysis of Advanced Question' },
    { type: 'h4', text: 'Step 1: Deconstruction' },
    {
      type: 'breakdown',
      labels: { title: 'Speaker', text: 'Argument' },
      items: [
        {
          title: 'Martinez',
          text: '*   **Conclusion:** Replace the bus fleet with electric buses.\n*   **Criterion:** Local air quality / tailpipe emissions in affected neighborhoods.\n*   **Implicit Commitment:** The relevant measure of environmental benefit is the *operational impact* on local communities, not the manufacturing process.'
        },
        {
          title: 'Chandra',
          text: '*   **Conclusion:** Don\'t replace the fleet; retrofit instead.\n*   **Criterion:** Total carbon output, including manufacturing.\n*   **Implicit Commitment:** The manufacturing footprint is a *decisive* factor in evaluating a transit policy\'s environmental merit.'
        }
      ]
    },
    { type: 'h4', text: 'Step 2: Identifying the Implicit Commitment Trap' },
    { type: 'paragraph', text: 'Martinez never explicitly says "manufacturing emissions don\'t matter." But his argument is built entirely on operational emissions (tailpipe output). By framing the issue solely in terms of what happens *after* the buses are running, he is implicitly committed to the view that the manufacturing process is not the relevant consideration. Chandra\'s entire rebuttal hinges on making manufacturing emissions the *central* consideration.' },
    { type: 'h4', text: 'Step 3: Evaluation' },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        {
          title: '(A)',
          text: '*   **Martinez:** The fleet is aging (implied: needs replacement).\n*   **Chandra:** Agrees the fleet needs attention but prefers retrofitting.\n*   *Result:* Incorrect. Both agree the fleet needs work; they disagree on the solution.'
        },
        {
          title: '(B)',
          text: '*   **Martinez:** True.\n*   **Chandra:** Never disputes this. She shifts the focus to manufacturing emissions.\n*   *Result:* Incorrect. This is a **Silence Trap** -- Chandra doesn\'t contest the tailpipe claim.'
        },
        {
          title: '(C)',
          text: '*   **Martinez:** **Implicitly No.** His argument ignores manufacturing impact, focusing exclusively on tailpipe emissions as the relevant metric.\n*   **Chandra:** **Explicitly Yes.** Her entire rebuttal rests on the claim that manufacturing emissions must be part of the evaluation.\n*   *Result:* **Correct.** This is the Implicit Commitment Trap in action. Martinez\'s silence on manufacturing isn\'t mere oversight -- it reflects a fundamentally different framework for evaluation.',
          badge: 'Correct',
          badgeColor: 'green'
        },
        {
          title: '(D)',
          text: '*   **Martinez:** True.\n*   **Chandra:** Unknown/Silent. She never addresses respiratory illness rates.\n*   *Result:* Incorrect. This is a **Silence Trap**.'
        },
        {
          title: '(E)',
          text: '*   **Martinez:** True (implicitly, via concern for emissions).\n*   **Chandra:** True (explicitly, it\'s her "primary goal").\n*   *Result:* Incorrect. This is a point of **agreement**, not disagreement.'
        }
      ]
    },
    { type: 'hr' },
    { type: 'h3', text: 'Advanced Strategies for Complex Dialogues' },
    { type: 'paragraph', text: 'On the hardest questions, multiple difficulty factors combine. Use these strategies to cut through the complexity.' },
    { type: 'table', headers: ['Strategy', 'When to Use It', 'What to Look For'],
      rows: [
        ['Framework Comparison', 'Speakers reach opposite conclusions from the same facts', 'Different criteria or standards of evaluation; the answer choice will name the criterion one speaker treats as decisive and the other ignores'],
        ['Implicit Commitment Extraction', 'A speaker\'s argument implies a belief they never state', 'Contrapositives of stated claims, logical prerequisites of conclusions, or the unstated "because" behind a speaker\'s position'],
        ['Shared Foundation Search', '"Agree" questions where speakers seem to disagree on everything', 'The unstated premise both arguments require to be coherent -- often a belief about causation, human nature, or the relevance of a category']
      ]
    },
    { type: 'callout', title: 'Final Strategic Principle', variant: 'summary', text: 'The hardest Agree/Disagree questions reward you for reading *between* the lines. Always ask: "What must each speaker believe that they haven\'t said?" The gap between what is stated and what is logically required is where the test-makers hide the correct answer. Master the art of extracting implicit commitments and you will consistently find the point at issue even in the most complex dialogues.' }
  ]
};
