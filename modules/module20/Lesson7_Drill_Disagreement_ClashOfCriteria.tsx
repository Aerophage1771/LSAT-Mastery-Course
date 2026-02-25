import { Lesson } from '../../types';

export const Lesson7_Drill_Disagreement_ClashOfCriteria: Lesson = {
  id: "20-7",
  title: "Practice Drill: Disagreement (Clash of Criteria) (PT-103-S-2-Q-24)",
  content: [
    { type: 'paragraph', text: 'This advanced question tests your ability to identify a disagreement over principles or criteria. The speakers largely agree on the facts of the situation but clash over the standard that should be used to make a judgment, a common pattern in high-difficulty questions.' },
    { type: 'hr' },
    { type: 'question-card', id: '20-7-drill', questionType: 'Point at Issue', difficulty: 'hard',
      stimulus: 'Monica: The sculpture commissioned for our town plaza has been scorned by the public ever since it went up. But since the people in our town do not know very much about contemporary art, the unpopularity of the work says nothing about its artistic merit and thus gives no reason for removing it.\nHector: You may be right about what the sculpture\'s popularity means about its artistic merit. However, a work of art that was commissioned for a public space ought to benefit the public, and popular opinion is ultimately the only way of determining what the public feels is to its benefit. Thus, if public opinion of this sculpture is what you say, then it certainly ought to be removed.',
      question: 'Monica\'s and Hector\'s statements commit them to disagreeing about which one of the following principles?',
      options: [
        '(A) Public opinion of a work of art is an important consideration in determining the work\'s artistic merit.',
        '(B) Works of art commissioned for public spaces ought at least to have sufficient artistic merit to benefit the public.',
        '(C) The only reason for removing a work of art commissioned for a public space would be that the balance of public opinion is against the work.',
        '(D) The sculpture cannot benefit the public by remaining in the town plaza unless the sculpture has artistic merit.',
        '(E) In determining whether the sculpture should remain in the town plaza, the artistic merit of the sculpture should be a central consideration. (Correct)'
      ] },
    { type: 'hr' },
    { type: 'h3', text: 'Full Analysis' },
    { type: 'h4', text: 'Step 1: Deconstruction' },
    { type: 'paragraph', text: 'First, break down each speaker\'s argument to isolate the standard they use for their judgment. Notice that Monica and Hector do not disagree about the facts — they agree the sculpture is unpopular and that popularity does not indicate artistic merit. The clash is about what *criterion* should drive the removal decision.' },
    { type: 'breakdown', labels: { title: 'Speaker', text: 'Argument' }, items: [
      { title: 'Monica', text: '*   **Criterion:** The decision to keep or remove the sculpture should be based on its **Artistic Merit**.\n*   **Reasoning:** Public opinion is irrelevant to artistic merit because the public is uninformed about contemporary art.\n*   **Conclusion:** There is no reason to remove the sculpture.' },
      { title: 'Hector', text: '*   **Criterion:** The decision to keep or remove *public* art should be based on its **Benefit to the Public**.\n*   **Reasoning:** Public benefit is determined by popular opinion, and the opinion here is negative.\n*   **Conclusion:** The sculpture ought to be removed.' }
    ] },
    { type: 'h4', text: 'Step 2: Abstraction' },
    { type: 'paragraph', text: 'The core disagreement is not about the sculpture itself, but about which framework to use when making the decision. Both speakers accept the same evidence and even agree on one key interpretation, yet reach opposite conclusions because they prioritize different values.' },
    { type: 'list', items: [
      '**Motto:** "We are using different rulers to measure the same object."',
      '**Blueprint:**\n*   Monica\'s decision framework prioritizes an internal, expert standard: Artistic Merit.\n*   Hector\'s decision framework prioritizes an external, democratic standard: Public Benefit, as measured by popular opinion.\n*   The disagreement is about which of these frameworks is appropriate for judging public art.',
      '**Recognition Cue:** When one speaker argues "this factor is what matters" and the other argues "no, *that* factor is what matters," you are looking at a Clash of Criteria.'
    ] },
    { type: 'h4', text: 'Step 3: Evaluate Each Choice' },
    { type: 'paragraph', text: 'Apply the "Truth Test" to each answer choice, determining what each speaker would say about the statement.' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Public opinion determines artistic merit.',
        text: 'Monica: False. She explicitly argues that popularity says "nothing about its artistic merit." Hector: Also False. He concedes this point ("You may be right about what the sculpture\'s popularity means about its artistic merit"). This is a **Point of Agreement Trap** — both reject the claim.',
        badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Public art must have merit to benefit the public.',
        text: 'Monica: Unknown. She values artistic merit but doesn\'t connect it to public benefit in this way — this is a **Silence Trap**. Hector: False. His argument is that public benefit comes from popularity, *regardless* of merit.',
        badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) The only reason for removal is public opposition.',
        text: 'Monica: False. Hector: Unknown. The phrase "the only reason" is extreme. Hector believes unpopularity is a sufficient reason here, but he might agree that a dangerously unstable sculpture should also be removed. This is an **Extreme Language Trap**.',
        badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) The sculpture cannot benefit the public without merit.',
        text: 'Monica: Unknown — she is silent on this causal link. This is another **Silence Trap**. Hector: False. He believes the public benefits if the work is popular, independent of its artistic merit.',
        badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Artistic merit should be central to the removal decision.',
        text: 'Monica: **True.** Her entire argument hinges on the idea that merit is the key factor that unpopularity cannot override. Hector: **False.** His argument explicitly sets aside merit ("You may be right about...its artistic merit. However...") to focus on what he sees as the more important criterion: public benefit. This statement perfectly captures their clash of criteria.',
        badge: 'Correct', badgeColor: 'green' }
    ] },
    { type: 'hr' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway',
      text: 'In a "Clash of Criteria" disagreement, the speakers often agree on the facts but apply different standards of judgment. The point of contention is not the evidence, but the *relevance and priority* of a particular standard (like artistic merit, public safety, or cost). Your task is to find the answer that frames the conflict as a dispute over which standard should be central to the decision.' }
  ]
};
