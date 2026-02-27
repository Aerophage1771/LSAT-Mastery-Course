import { Lesson } from '../../types';

export const Lesson4_Drill_SelectionBias: Lesson = {
  id: "19-4",
  title: "Drill: Selection Bias (PT-103-S-1-Q-20)",
  content: [
    { type: 'h3', text: 'Drill: Selection Bias (PT-103-S-1-Q-20)' },
    { type: 'paragraph', text: 'Selection bias is one of the most sophisticated paradox patterns on the LSAT. The paradox arises when a group undergoing a treatment or intervention displays a surprising trait. The resolution is not that the treatment causes the trait, but that people who already have the trait are more likely to *select themselves* into the treatment group, creating a sample that does not represent the general population.' },
    { type: 'paragraph', text: '**Instructions:** Read the stimulus and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },
    { type: 'h3', text: 'Analysis & Explanation' },
    { type: 'h4', text: 'Step 1: Deconstruction' },
    { type: 'paragraph', text: 'Break the stimulus down into its core conflicting facts.' },
    {
      type: 'list', items: [
        '**Fact 1:** Migraines have a purely physiological cause, *not* a psychological one (like anxiety).',
        '**Fact 2:** The group of people *being treated* for migraines shows higher levels of anxiety than untreated people.',
        '**The Conflict:** If anxiety doesn\'t cause migraines, why is there such a strong link between anxiety and the group of people seeking migraine treatment? It seems like either the treatment is causing anxiety, or anxiety is related to migraines after all.'
      ]
    },
    { type: 'h4', text: 'Step 2: Abstraction' },
    {
      type: 'list', items: [
        '**Motto:** "Don\'t confuse a characteristic of a study group with the cause of their problem. The characteristic might be the reason they are in the study group at all."',
        '**Blueprint:** We are told Fact X (anxiety) does not cause Condition Y (migraines). Yet, people in a treatment group for Condition Y show high levels of Fact X. The resolution will likely show that Fact X is what causes people to *seek treatment*, creating a sample that is not representative of all people with the condition.'
      ]
    },
    { type: 'h4', text: 'Step 3: Evaluation' },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: '(A) People who have migraine headaches tend to have relatives who also have migraine headaches.', text: '**Distractor Type: Irrelevant Detail.** This suggests a genetic component to migraines, reinforcing that they are physiological. However, it does nothing to explain the connection between anxiety and the *treatment group*.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(B) People who have migraine headaches often suffer these headaches when under emotional stress.', text: '**Distractor Type: Deepens the Paradox.** This suggests that psychological factors (stress) can *trigger* migraines. This directly challenges the first premise that the cause is "purely physiological," making the situation more confusing, not less.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(C) People who rate higher on the standard psychological scale of anxiety are more likely to seek professional treatment than are people who rate lower on the scale.', text: 'This perfectly resolves the paradox through selection bias. The study isn\'t looking at a random sample of all migraine sufferers. It\'s looking at a self-selected group of people who chose to go to the doctor. This answer explains that anxious people are the most likely to make that choice. The anxiety didn\'t cause the migraine; it caused them to enter the "treatment" group.', badge: 'Correct', badgeColor: 'green' },
        { title: '(D) Of the many studies done on the cause of migraine headaches, most of those that suggest that psychological factors such as anxiety cause migraines have been widely publicized.', text: '**Distractor Type: Out of Scope.** This discusses public perception and media coverage of other studies. It has no bearing on the facts presented in *this* stimulus or the results of the specific studies mentioned.', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(E) Most people who have migraines and who seek professional treatment remain in treatment until they stop having migraines, whether their doctors consider the cause to be physiological or psychological.', text: '**Distractor Type: Irrelevant Detail.** This describes the *duration* of treatment. It fails to explain why the people who *enter* treatment are more anxious in the first place.', badge: 'Incorrect', badgeColor: 'red' }
      ]
    },
    { type: 'hr' },
    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When you see a paradox that compares a "treated" group to an "untreated" group, be highly suspicious of **Selection Bias**. The core question is: "Was there something special about the people who chose to get treatment that distinguishes them from the general population with the same condition?" The resolution often lies in answering that question.' }
  ]
};
