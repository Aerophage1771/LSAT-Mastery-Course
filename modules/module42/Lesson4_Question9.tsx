import { Lesson } from '../../types';

const passageText = `In filmmaker Woody Allen’s Deconstructing Harry, the writer Harry Block is presented as extremely neurotic and narcissistic. Block uses his experiences as fodder for his work, no matter how embarrassing the result may be for the other people in his life. And while Allen exaggerates Block’s narcissism for comic effect, the effect is not simply comic: the film is emblematic of Allen’s career precisely because of its extravagantly exaggerated censure of a life dedicated to and obsessed with art. Deconstructing Harry may be the most unequivocally peevish of Allen’s depictions of artists, but it is less a new direction for Allen than a concentrated reprise of a theme present throughout his career.
For instance, a film producer in Stardust Memories, Allen’s sourest portrait of artists before Harry, articulates a particularly cynical view of cinematic art after a screening of a film-in-progress by Stardust Memories’ main character, Sandy Bates. The producer says of Bates, “His insights are shallow and morbid. I’ve seen it all before. They try to document their private suffering and fob it off as art.” The producer, like all the figures in this film, often seems less a distinct individual than a projection of Bates’s personal self-recriminations. This effectively reinforces the charge of solipsism with which Bates, the unstable and demoralized artist, indicts himself. Indeed, the possibility that artists are merely “documenting their private suffering and fobbing it off as art” appears sufficiently often in Allen’s films to seem an unresolved personal issue.
In Manhattan, the ex-wife of a television writer and aspiring novelist offers a denigratory take on the artistic enterprise that is similar to the producer’s in Stardust Memories. Her book documenting the collapse of her marriage punctures her ex-husband’s artistic pretensions by revealing that he “longed to be an artist but balked at the necessary sacrifices. In his most private moments, he spoke of the fear of death, which he elevated to tragic heights when, in fact, it was mere narcissism.”
It is also significant that in Allen’s films, the less artistic the characters, the more likely their narrative is to result in a happy ending. Thus, the filmmaker in Crimes and Misdemeanors, the novelist in Husbands and Wives, and the screenwriter in Celebrity all wind up desolate and solitary, largely because of the egocentric and exploitative attitudes embodied in their art and the effects of those attitudes on those around them. On the other hand, the unpretentious, thoroughly inartistic title character in Zelig dies an untroubled, even happy, death, only slightly compromised by his failure to finish reading Moby-Dick. And the title character and talent agent in Broadway Danny Rose is the beneficiary of the most gratifying resolution Allen has scripted, primarily due to altruistic devotion to his utterly talentless nightclub performers.`;

export const Lesson4_Question9: Lesson = {
      id: "42-4",
      title: "Question 9: Paragraph Function",
      content: [
        { type: 'accordion', title: 'Read Passage (PT-128-S-4-P-2)', content: passageText },
        { type: 'h3', text: "Question 9: Paragraph Function Breakdown (PT-128-S-4-P-2-Q-9)" },
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately describes the main function of the third paragraph?" },
        { type: 'options', items: [
          "(A) present an exception to the general thesis stated in the first paragraph",
          "(B) qualify an assertion made in the first paragraph",
          "(C) provide an illustration that is contrasted to the illustration given in the second paragraph",
          "(D) provide additional support for a contention made in the second paragraph (Correct)",
          "(E) present a contention that will be argued for in the final paragraph"
        ]},
        { type: 'h4', text: "Analysis" },
        { type: 'paragraph', text: "Concept focus: paragraph function questions are about role, not topic. Paragraph 3 does not introduce a new idea; it gives another example (*Manhattan*) that works the same way as paragraph 2 (*Stardust Memories*). So its job is to add support to an existing claim, not to qualify it, reverse it, or set up a future argument." },
        { type: 'callout', title: "Text Evidence", variant: "tip", text: "Follow the structure: paragraph 1 gives the main claim about a recurring theme, paragraph 2 gives one concrete example, paragraph 3 adds a \"similar\" example, and paragraph 4 shifts to ending-pattern evidence. The word \"similar\" in paragraph 3 is the key clue to its function." },
        { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
          { title: "(A) present an exception to the general thesis stated in the first paragraph", text: "An exception would break the pattern from paragraph 1. Paragraph 3 does the opposite: the *Manhattan* example repeats the same negative view of artistic pretension, so it confirms the thesis.", badge: "Incorrect", badgeColor: "red" },
          { title: "(B) qualify an assertion made in the first paragraph", text: "To qualify means to add a limit or condition. Paragraph 3 adds no limit; it adds more proof that Allen keeps returning to this theme.", badge: "Incorrect", badgeColor: "red" },
          { title: "(C) provide an illustration that is contrasted to the illustration given in the second paragraph", text: "The paragraph itself signals the relation as \"similar,\" not opposite. Since the passage explicitly links the two examples as alike, this contrast description is inaccurate.", badge: "Incorrect", badgeColor: "red" },
          { title: "(D) provide additional support for a contention made in the second paragraph", text: "This matches the structure exactly. Paragraph 2 says the pattern appears often, and paragraph 3 supplies another film example to strengthen that same point.", badge: "Correct", badgeColor: "green" },
          { title: "(E) present a contention that will be argued for in the final paragraph", text: "Paragraph 3 is not a preview claim waiting for proof; it is already proof. The final paragraph then changes evidence type by comparing outcomes of artistic and inartistic characters.", badge: "Incorrect", badgeColor: "red" }
        ]}
      ]
};
