import { Lesson } from '../../types';

const passageText = `In filmmaker Woody Allen’s Deconstructing Harry, the writer Harry Block is presented as extremely neurotic and narcissistic. Block uses his experiences as fodder for his work, no matter how embarrassing the result may be for the other people in his life. And while Allen exaggerates Block’s narcissism for comic effect, the effect is not simply comic: the film is emblematic of Allen’s career precisely because of its extravagantly exaggerated censure of a life dedicated to and obsessed with art. Deconstructing Harry may be the most unequivocally peevish of Allen’s depictions of artists, but it is less a new direction for Allen than a concentrated reprise of a theme present throughout his career.
For instance, a film producer in Stardust Memories, Allen’s sourest portrait of artists before Harry, articulates a particularly cynical view of cinematic art after a screening of a film-in-progress by Stardust Memories’ main character, Sandy Bates. The producer says of Bates, “His insights are shallow and morbid. I’ve seen it all before. They try to document their private suffering and fob it off as art.” The producer, like all the figures in this film, often seems less a distinct individual than a projection of Bates’s personal self-recriminations. This effectively reinforces the charge of solipsism with which Bates, the unstable and demoralized artist, indicts himself. Indeed, the possibility that artists are merely “documenting their private suffering and fobbing it off as art” appears sufficiently often in Allen’s films to seem an unresolved personal issue.
In Manhattan, the ex-wife of a television writer and aspiring novelist offers a denigratory take on the artistic enterprise that is similar to the producer’s in Stardust Memories. Her book documenting the collapse of her marriage punctures her ex-husband’s artistic pretensions by revealing that he “longed to be an artist but balked at the necessary sacrifices. In his most private moments, he spoke of the fear of death, which he elevated to tragic heights when, in fact, it was mere narcissism.”
It is also significant that in Allen’s films, the less artistic the characters, the more likely their narrative is to result in a happy ending. Thus, the filmmaker in Crimes and Misdemeanors, the novelist in Husbands and Wives, and the screenwriter in Celebrity all wind up desolate and solitary, largely because of the egocentric and exploitative attitudes embodied in their art and the effects of those attitudes on those around them. On the other hand, the unpretentious, thoroughly inartistic title character in Zelig dies an untroubled, even happy, death, only slightly compromised by his failure to finish reading Moby-Dick. And the title character and talent agent in Broadway Danny Rose is the beneficiary of the most gratifying resolution Allen has scripted, primarily due to altruistic devotion to his utterly talentless nightclub performers.`;

export const Lesson6_Question11: Lesson = {
      id: "42-6",
      title: "Question 11: Phrase Function",
      content: [
        { type: 'accordion', title: 'Read Passage (PT-128-S-4-P-2)', content: passageText },
        { type: 'h3', text: "Question 11: Phrase Function Breakdown (PT-128-S-4-P-2-Q-11)" },
        { type: 'blockquote', text: "**Question:** The author mentions the character Zelig primarily in order to" },
        { type: 'options', items: [
          "(A) counter the prevailing critical view of Allen’s films",
          "(B) exemplify a primary preoccupation of Allen’s works",
          "(C) serve as a contrast to the fate of artistic characters in Allen’s films (Correct)",
          "(D) demonstrate that artistic characters have always been important in Allen’s films",
          "(E) illustrate Allen’s obvious affection for the nonartist characters he creates"
        ]},
        { type: 'h4', text: "Analysis" },
        { type: 'paragraph', text: "Concept focus: when a question asks why the author mentions someone, identify that mention's job in the paragraph's structure. In paragraph four, the author first lists artist characters who end \"desolate and solitary,\" then pivots with \"On the other hand\" to Zelig and Danny Rose, who end much better. Zelig is not a random example; he is the contrast case that completes the author's pattern." },
        { type: 'callout', title: "Text Evidence", variant: "tip", text: "Track the sequence, not just one sentence: unhappy artist endings -> \"On the other hand\" -> happier inartistic endings. That transition phrase signals that Zelig is being used to contrast with the earlier artist examples." },
        { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
          { title: "(A) counter the prevailing critical view of Allen’s films", text: "The passage never presents an outside critical view to rebut. Zelig appears in the author's own internal comparison, so this choice assigns the wrong argumentative task.", badge: "Incorrect", badgeColor: "red" },
          { title: "(B) exemplify a primary preoccupation of Allen’s works", text: "The passage's recurring preoccupation is the troubled artist figure. Zelig is introduced as \"thoroughly inartistic,\" so he functions as a foil to that preoccupation, not as an example of it.", badge: "Incorrect", badgeColor: "red" },
          { title: "(C) serve as a contrast to the fate of artistic characters in Allen’s films", text: "This is exactly what the paragraph does. The author places Zelig after \"On the other hand\" to contrast his calmer ending with the bleak endings of the artist characters listed immediately before.", badge: "Correct", badgeColor: "green" },
          { title: "(D) demonstrate that artistic characters have always been important in Allen’s films", text: "This overreaches with \"always\" and misses the point of mentioning Zelig. The paragraph is not proving artist importance; it is drawing a two-part outcome pattern (artists worse, inartistic characters better).", badge: "Incorrect", badgeColor: "red" },
          { title: "(E) illustrate Allen’s obvious affection for the nonartist characters he creates", text: "You might infer sympathy, but that is not the main job of the Zelig mention. The paragraph's primary function is structural contrast, which choice (C) states directly.", badge: "Incorrect", badgeColor: "red" }
        ]}
      ]
};
