
import { Lesson } from '../../types';

const passageText = `What it means to “explain” something in science often comes down to the application of mathematics. Some thinkers hold that mathematics is a kind of language—a systematic contrivance of signs, the criteria for the authority of which are internal coherence, elegance, and depth. The application of such a highly artificial system to the physical world, they claim, results in the creation of a kind of statement about the world. Accordingly, what matters in the sciences is finding a mathematical concept that attempts, as other language does, to accurately describe the functioning of some aspect of the world.
At the center of the issue of scientific knowledge can thus be found questions about the relationship between language and what it refers to. A discussion about the role played by language in the pursuit of knowledge has been going on among linguists for several decades. The debate centers around whether language corresponds in some essential way to objects and behaviors, making knowledge a solid and reliable commodity; or, on the other hand, whether the relationship between language and things is purely a matter of agreed-upon conventions, making knowledge tenuous, relative, and inexact.g wider acceptance. According to linguists who support this theory, the way language is used varies depending upon changes in accepted practices and theories among those who work in a particular discipline. These linguists argue that, in the pursuit of knowledge, a statement is true only when there are no promising alternatives that might lead one to question it. Certainly this characterization would seem to be applicable to the sciences. In science, a mathematical statement may be taken to account for every aspect of a phenomenon it is applied to, but, some would argue, there is nothing inherent in mathematical language that guarantees such a correspondence. Under this view, acceptance of a mathematical statement by the scientific community—by virtue of the statement’s predictive power or methodological efficiency—transforms what is basically an analogy or metaphor into an explanation of the physical process in question, to be held as true until another, more compelling analogy takes its place.
In pursuing the implications of this theory, linguists have reached the point at which they must ask: If words or sentences do not correspond in an essential way to life or to our ideas about life, then just what are they capable of telling us about the world? In science and mathematics, then, it would seem equally necessary to ask: If models of electrolytes or E = mc2, say, do not correspond essentially to the physical world, then just what functions do they perform in the acquisition of scientific knowledge? But this question has yet to be significantly addressed in the sciences.`;

export const Lesson4_Question24: Lesson = {
  id: "50-4",
  title: "Question 24: Inference",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-108-S-1-P-4)', content: passageText },
    { type: 'h3', text: "Question 24: Inference Breakdown (PT-108-S-1-P-4-Q-24)" },
    { type: 'blockquote', text: "**Question:** According to the passage, mathematics can be considered a language because it" },
    { type: 'options', items: [
      "(A) conveys meaning in the same way that metaphors do",
      "(B) constitutes a systematic collection of signs (Correct)",
      "(C) corresponds exactly to aspects of physical phenomena",
      "(D) confers explanatory power on scientific theories",
      "(E) relies on previously agreed-upon conventions"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This inference question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'What it means to “explain” something in science often comes down...' and 'In pursuing the implications of this theory, linguists have reached the...' when checking whether a choice preserves the passage's emphasis." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: "(A)", text: "The passage mentions that a mathematical statement can be seen as an analogy or metaphor, but this is a description of its function as an explanation, not the core reason it is considered a language. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support." },
      { title: "(B)", text: "This answer correctly identifies the definition of mathematics as a language that is explicitly stated in the passage. The text says that mathematics is a 'systematic contrivance of signs,' which directly matches the idea of a 'systematic collection of signs.' Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support." },
      { title: "(C)", text: "The passage presents the idea that mathematics corresponds exactly to the world as one side of a debate. It actually focuses more on the view that this correspondence is not guaranteed. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support." },
      { title: "(D)", text: "While the passage states that mathematics is used to explain things in science, this describes its application or purpose. The reason it is considered a language is based on its structure as a system of signs. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support." },
      { title: "(E)", text: "The idea of 'agreed-upon conventions' is introduced later in the passage as part of a linguistic debate. It is not given as the primary definition of why mathematics itself is considered a language. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support." }
    ]}
  ]
};
