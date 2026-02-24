import { Lesson } from '../../types';

const passageText = `From a critical discussion of the work of Victorian photographer Julia Margaret Cameron.
What Cameron called her “fancy-subject” pictures—photographs in which two or more costumed sitters enacted, under Cameron’s direction, scenes from the Bible, mythology, Shakespeare, or Tennyson—bear unmistakable traces of the often comical conditions under which they were taken. In many respects they have more connection to the family album pictures of recalcitrant relatives who have been herded together for the obligatory group picture than they do to the masterpieces of Western painting. In Raphael and Giotto there are no infant Christs whose faces are blurred because they moved, or who are looking at the viewer with frank hatred. These traces, of course, are what give the photographs their life and charm. If Cameron had succeeded in her project of making seamless works of illustrative art, her work would be among the curiosities of Victorian photography—like Oscar Gustave Rejlander’s extravagantly awful The Two Ways of Life—rather than among its most vital images.
It is precisely the camera’s realism—its stubborn obsession with the surface of things—that has given Cameron’s theatricality and artificiality its atmosphere of truth. It is the truth of the sitting, rather than the fiction which all the dressing up was in aid of, that wafts out of these wonderful and strange, not-quite-in-focus photographs. They are what they are: pictures of housemaids and nieces and husbands and village children who are dressed up as Mary Madonnas and infant Jesuses and John the Baptists and Lancelots and Guineveres and trying desperately hard to sit still. The way each sitter endures his or her ordeal is the collective action of the photograph, its “plot” so to speak. When we look at a narrative painting we can suspend our disbelief; when we look at a narrative photograph we cannot. We are always aware of the photograph’s doubleness—of each figure’s imaginary and real personas. Theater can transcend its doubleness, can make us believe (for at least some of the time) that we are seeing only Lear or Medea. Still photographs of theatrical scenes can never escape being pictures of actors.
What gives Cameron’s pictures of actors their special quality—their status as treasures of photography of an unfathomably peculiar sort—is their singular combination of amateurism and artistry. In The Passing of Arthur, for example, the mast and oar of the makeshift boat representing a royal barge are obviously broomsticks and the water is white muslin drapery. But these details are insignificant. For once, the homely truth of the sitting gives right of place to the romantic fantasy of its director. The picture, a night scene, is magical and mysterious. While Cameron’s fancy-subject pictures have been compared to poor amateur theatricals, The Passing of Arthur puts one in mind of good amateur theatricals one has seen, and recalls with shameless delight.`;

export const Lesson7_Question13: Lesson = {
  id: "44-7",
  title: "Question 13: Inference",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-141-S-1-P-2)', content: passageText },
    { type: 'h3', text: "Question 13: Inference Breakdown (PT-141-S-1-P-2-Q-13)" },
    { type: 'blockquote', text: "The passage provides the most support for inferring that in Cameron’s era" },
    { type: 'options', items: [
      "(A) there was little interest in photographs documenting contemporary life",
      "(B) photography was practiced mainly by wealthy amateurs",
      "(C) publicity stills of actors were coming into vogue",
      "(D) there were no professional artist’s models",
      "(E) the time required to take a picture was substantial (Correct)"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This inference question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'From a critical discussion of the work of Victorian photographer Julia...' and 'While Cameron’s fancy-subject pictures have been compared to poor amateur theatricals,...' when checking whether a choice preserves the passage's emphasis." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: "(A) there was little interest in photographs documenting contemporary life", text: "The passage only discusses Cameron's specific artistic project and provides no information about broader public tastes in photography. This is unsupported. Additional check: trap type is too broad, since it extends beyond what the passage actually supports.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) photography was practiced mainly by wealthy amateurs", text: "The passage uses \"amateurism\" to describe a style, not the socioeconomic status of photographers. We cannot generalize from this to the entire field. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) publicity stills of actors were coming into vogue", text: "The passage mentions \"actors\" in a general sense but provides no information about professional theater or the practice of taking publicity stills. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) there were no professional artist’s models", text: "The passage states that Cameron used her friends and family, but this does not allow us to conclude that professional models did not exist anywhere. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) the time required to take a picture was substantial", text: "This is the most direct and well-supported inference. The blurring from movement, the desperate need to sit still, and the description of the sitting as an \"ordeal\" all logically point to a long exposure time. Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" }
    ]}
  ]
};
