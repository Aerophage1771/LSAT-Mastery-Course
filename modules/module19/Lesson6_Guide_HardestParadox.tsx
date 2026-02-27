import { Lesson } from '../../types';

export const Lesson6_Guide_HardestParadox: Lesson = {
  id: "19-6",
  title: "Guide to Hardest Paradox Questions",
  content: [
    { type: 'h3', text: 'Guide to Hardest Paradox Questions' },
    { type: 'paragraph', text: 'The hardest Paradox questions move beyond simple, one-step explanations. They require you to analyze complex systems, notice subtle distinctions in language, or consider second- and third-order effects. These questions are difficult not because the paradox is unsolvable, but because the correct answer hinges on a precise and often non-obvious logical mechanism.' },

    { type: 'hr' },

    { type: 'h4', text: 'Three Difficulty Factors' },
    { type: 'paragraph', text: 'Nearly every high-difficulty paradox question derives its challenge from one or more of three core factors. Recognizing which factor is in play allows you to deploy a targeted resolution strategy instead of floundering through answer choices.' },
    {
      type: 'breakdown',
      labels: { title: 'Factor', text: 'Description' },
      items: [
        { title: '1. Linguistic Camouflage', text: 'The stimulus uses near-synonyms or closely related terms that mask a critical distinction. You assume two concepts are interchangeable when they are not. Resolution requires scrutinizing every noun, verb, and unit of measurement.', badge: 'Precision', badgeColor: 'indigo' },
        { title: '2. Systemic Complexity', text: 'The stimulus describes a system with multiple actors, feedback loops, or cascading effects. The primary effect is obvious, but a hidden secondary effect reverses the expected outcome. Resolution requires tracing consequences beyond the first actor.', badge: 'Depth', badgeColor: 'blue' },
        { title: '3. Inverted Question Format', text: 'EXCEPT questions flip the task: four answers resolve the paradox, and one does not. The difficulty lies in confirming four valid resolutions rather than finding a single one, which is cognitively exhausting under time pressure.', badge: 'Stamina', badgeColor: 'slate' }
      ]
    },

    { type: 'hr' },

    { type: 'h4', text: 'The Subtle Tension Problem' },
    { type: 'paragraph', text: 'The single most dangerous trait of hard paradox stimuli is what we call the "Subtle Tension." In easier questions, the paradox is flagged with explicit pivot language ("however," "yet," "paradoxically"). In the hardest questions, the two conflicting facts are presented as if they belong together naturally. There is no signal word. The test-taker must independently notice that the facts, taken together, produce an impossible or surprising implication.' },
    {
      type: 'callout',
      title: 'The Subtle Tension Test',
      variant: 'tip',
      text: 'After reading the stimulus, ask yourself: "If I told a smart friend these two facts, would they raise an eyebrow?" If you can\'t articulate why the situation is surprising, you haven\'t found the tension yet--and you aren\'t ready to evaluate answer choices.'
    },
    { type: 'paragraph', text: 'Stimuli with subtle tensions often disguise the conflict inside a comparison. For example, a stimulus might state that a crop yields more *per acre* in Region A but that Region B produces more of that crop *overall*. There is no "however" or "yet." The conflict only emerges when you realize that the per-acre leader is not the volume leader, which implies something unstated about total acreage.' },

    { type: 'hr' },

    { type: 'h4', text: 'Practice: A Hard Paradox' },
    { type: 'paragraph', text: 'Apply the strategies above to the following question. The tension is deliberately understated, and the correct resolution requires systemic thinking.' },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Resolution & Analysis' },
    { type: 'h4', text: 'Locating the Subtle Tension' },
    { type: 'paragraph', text: 'The stimulus never says "paradoxically" or "surprisingly." You must notice the tension yourself: fines *doubled*, yet revenue *dropped* 40%. Since revenue = (number of fines) x (fine amount), and the fine amount went up, the number of violations ticketed must have dropped dramatically--by more than enough to offset the doubled fines.' },

    { type: 'h4', text: 'Advanced Resolution Strategies' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Decompose the math.** Revenue = Volume x Price. When price goes up and revenue goes down, volume must have fallen. Ask: why did volume fall?',
        '**Identify the behavioral response.** The doubled fines changed driver behavior. Most drivers chose to avoid the risk entirely--parking elsewhere or switching to transit. Fewer violators means fewer fines, and the drop in volume outweighed the increase in per-fine revenue.',
        '**Reject distractors that ignore volume.** Answers about meter prices (A), publicity (C), warning citations (D), or revenue allocation (E) fail to explain why the *number of violations* dropped so sharply.'
      ]
    },
    { type: 'h4', text: 'Option Evaluation' },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: '(A) The city simultaneously raised the price of parking meters in the downtown core.', text: '**Distractor Type: Irrelevant Detail.** Meter prices affect legal parking costs, not the number of illegal parking violations. Even if meters cost more, that does not explain why fine *revenue* fell.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(B) Most drivers who regularly parked in the downtown core began using public transit or parking in other areas to avoid the higher fines.', text: 'This resolves the paradox through behavioral deterrence. The higher fines achieved their policy goal--discouraging illegal parking--but this success *reduced the pool of violators* so dramatically that total revenue fell despite each individual fine being larger. Revenue = Volume x Price; volume collapsed.', badge: 'Correct', badgeColor: 'green' },
        { title: '(C) The city did not publicize the change in fines widely before it took effect.', text: '**Distractor Type: Deepens the Paradox.** If drivers didn\'t know about the higher fines, their parking behavior shouldn\'t have changed--meaning the volume of violations should have stayed the same. With the same volume and doubled fines, revenue should have *increased*, making the drop even harder to explain.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(D) Parking enforcement officers in the downtown core wrote fewer warning citations after the law took effect.', text: '**Distractor Type: Wrong Direction.** Fewer *warnings* suggests officers were issuing more actual *fines* (since they had less reason to let people off with warnings given the policy emphasis). This would push revenue up, not down.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(E) Some of the revenue collected from downtown parking fines is used to fund public transit improvements.', text: '**Distractor Type: Out of Scope.** How revenue is *spent* has no bearing on how much revenue is *collected*. This answers a question the stimulus never asks.', badge: 'Incorrect', badgeColor: 'red' }
      ]
    },

    { type: 'hr' },
    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'The hardest paradoxes hide their tension in plain language and resolve through systemic thinking. Decompose any quantitative claim into its components (Revenue = Volume x Price), identify whose *behavior* changed, and reject answers that address the wrong component. When a stimulus contains no signal words like "yet" or "however," that silence itself is a difficulty marker--be on high alert.' }
  ]
};
