import { Lesson } from '../../types';

const passageText = `The following passage was written in the mid-1990s.
Users of the Internet—the worldwide network of interconnected computer systems—envision it as a way for people to have free access to information via their personal computers. Most Internet communication consists of sending electronic mail or exchanging ideas on electronic bulletin boards; however, a growing number of transmissions are of copyrighted works—books, photographs, videos and films, and sound recordings. In Canada, as elsewhere, the goals of Internet users have begun to conflict with reality as copyright holders look for ways to protect their material from unauthorized and uncompensated distribution.
Copyright experts say that Canadian copyright law, which was revised in 1987 to cover works such as choreography and photography, has not kept pace with technology—specifically with digitalization, the conversion of data into a series of digits that are transmitted as electronic signals over computer networks. Digitalization makes it possible to create an unlimited number of copies of a book, recording, or movie and distribute them to millions of people around the world. Current law prohibits unauthorized parties from reproducing a work or any substantial part of it in any material form (e.g., photocopies of books or pirated audiotapes), but because digitalization merely transforms the work into electronic signals in a computer’s memory, it is not clear whether digitalization constitutes a material reproduction—and so unauthorized digitalization is not yet technically a crime.
Some experts propose simply adding unauthorized digitalization to the list of activities proscribed under current law, to make it clear that copyright holders own electronic reproduction rights just as they own rights to other types of reproduction. But criminalizing digitalization raises a host of questions. For example, given that digitalization allows the multiple recipients of a transmission to re-create copies of a work, would only the act of digitalization itself be criminal, or should each copy made from the transmission be considered a separate instance of piracy—even though those who made the copies never had access to the original? In addition, laws against digitalization might be virtually unenforceable given that an estimated 20 million people around the world have access to the Internet, and that copying and distributing material is a relatively simple process. Furthermore, even an expanded law might not cover the majority of transmissions, given the vast numbers of users who are academics and the fact that current copyright law allows generous exemptions for those engaged in private study or research. But even if the law is revised to contain a more sophisticated treatment of digitalization, most experts think it will be hard to resolve the clash between the Internet community, which is accustomed to treating information as raw material available for everyone to use, and the publishing community, which is accustomed to treating it as a commodity owned by its creator.`;

export const Lesson3_Question25: Lesson = {
  id: "58-3",
  title: "Question 25: Application",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-115-S-3-P-4)', content: passageText },
    { type: 'h3', text: "Question 25: Application Breakdown (PT-115-S-3-P-4-Q-25)" },
    { type: 'blockquote', text: "**Question:** Given the author’s argument, which one of the following additions to current Canadian copyright law would most likely be an agreeable compromise to both the Internet community and the publishing community?" },
    { type: 'options', items: [
      "(A) Digitalization of copyrighted works is permitted to Internet users who pay a small fee to copyright holders. (Correct)",
      "(B) Digitalization of copyrighted works is prohibited to Internet users who are not academics.",
      "(C) Digitalization of copyrighted works is permitted to all Internet users without restriction.",
      "(D) Digitalization of copyrighted works is prohibited to all Internet users without exception.",
      "(E) Digitalization of copyrighted works is permitted to Internet users engaged in research."
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This stem asks for a law both communities could accept. A true compromise must keep meaningful user access while also protecting creator ownership through compensation. Any option that gives one side everything and the other side nothing fails the \"agreeable to both\" requirement." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "The clash is explicit: the Internet community treats information as \"raw material available for everyone to use,\" while the publishing community treats it as \"a commodity owned by its creator.\" The strongest compromise combines access with payment/protection." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A)", text: "This is a perfect compromise. Users get access to the material ('is permitted'), which satisfies the internet community's goal. Copyright holders get paid ('pay a small fee'), which satisfies the publishing community's need for compensation. Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" },
        { title: "(B)", text: "This is not a good compromise. It completely shuts out the vast majority of internet users and doesn't address the publishers' issue with the academic users who already have 'generous exemptions.' Additional check: trap type is one-sided restriction, because it narrows access without creating a balanced access-plus-compensation framework.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C)", text: "This is a one-sided solution that completely favors the internet community. It offers nothing to the publishers. Additional check: trap type is one-sided permissiveness, because it grants access but ignores creator compensation entirely.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D)", text: "This is a one-sided solution that completely favors the publishing community. It offers nothing to the internet users. Additional check: trap type is one-sided prohibition, because it protects ownership only by eliminating ordinary user access.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E)", text: "This is not a compromise because, as the passage notes, academics already have 'generous exemptions' under current law. This solution doesn't meaningfully change the status quo or resolve the broader conflict. Additional check: trap type is too narrow/status quo, because it only extends an existing exemption rather than resolving the broader two-community conflict.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};
