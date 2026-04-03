import { Lesson, ContentBlock } from '../../../types';

export const Lesson6_Module6_Questions: Lesson = {
  id: "48-6",
  title: "Module 6: Parallel Flaw",
  content: [
    { type: 'h2', text: "Module 6: Parallel Flaw" },
    {
      type: 'accordion',
      title: "Drill: Mistaken Negation (PT-106-S-3-Q-21)",
      content: [
        { type: 'paragraph', text: "Question Type: Parallel Flaw" },
        { type: 'h4', text: 'Stimulus' },
        { type: 'blockquote', text: "If the law punishes littering, then the city has an obligation to provide trash cans. But the law does not punish littering, so the city has no such obligation." },
        { type: 'h4', text: 'Question' },
        { type: 'paragraph', text: "Which one of the following exhibits a flawed pattern of reasoning most similar to that in the argument above?" },
        {
          type: 'options',
          items: [
            "(A) If today is a holiday, then the bakery will not be open. The bakery is not open for business. Thus today is a holiday.",
            "(B) Jenny will have lots of balloons at her birthday party. There are no balloons around yet, so today is not her birthday.",
            "(C) The new regulations will be successful only if most of the students adhere to them. Since most of the students will adhere to those regulations, the new regulations will be successful.",
            "(D) In the event that my flight had been late, I would have missed the committee meeting. Fortunately, my flight is on time. Therefore, I will make it to the meeting. (Correct)",
            "(E) When the law is enforced, some people are jailed. But no one is in jail, so clearly the law is not enforced.",
          ]
        }
      ]
    },
    {
      type: 'accordion',
      title: "Drill: The Double Flaw (PT-113-S-3-Q-21) (PT-113-S-3-Q-21)",
      content: [
        { type: 'h4', text: 'Stimulus' },
        { type: 'blockquote', text: "Bank deposits are credited on the date of the transaction only when they are made before 3 P.M. Alicia knows that the bank deposit was made before 3 P.M. So, Alicia knows that the bank deposit was credited on the date of the transaction." },
        { type: 'h4', text: 'Question' },
        { type: 'paragraph', text: "Which one of the following exhibits both of the logical flaws exhibited by the argument above?" },
        {
          type: 'options',
          items: [
            "(A) Journalists are the only ones who will be permitted to ask questions at the press conference. Since Marjorie is a journalist, she will be permitted to ask questions.",
            "(B) We know that Patrice works only on Thursday. Today is Thursday, so it follows that Patrice is working today.",
            "(C) It is clear that George knows he will be promoted to shift supervisor, because George will be promoted to shift supervisor only if Helen resigns, and George knows Helen will resign. (Correct)",
            "(D) John believes that 4 is a prime number and that 4 is divisible by 2. Hence John believes that there is a prime number divisible by 2.",
            "(E) Pat wants to become a social worker. It is well known that social workers are poorly paid. Pat apparently wants to be poorly paid.",
          ]
        }
      ]
    },
    {
      type: 'accordion',
      title: "Drill: The Net Effect Flaw (PT-113-S-2-Q-21) (PT-113-S-2-Q-21)",
      content: [
        { type: 'h4', text: 'Stimulus' },
        { type: 'blockquote', text: "The studies showing that increased consumption of fruits and vegetables may help decrease the incidence of some types of cancer do not distinguish between organically grown and nonorganically grown produce; they were conducted with produce at least some of which contained pesticide residues. The studies may also be taken as showing, therefore, that there is no increased health risk associated with eating fruits and vegetables containing pesticide residues." },
        { type: 'h4', text: 'Question' },
        { type: 'paragraph', text: "The pattern of flawed reasoning in which one of the following is most similar to the pattern of flawed reasoning in the argument above?" },
        {
          type: 'options',
          items: [
            "(A) Research shows that the incidence of certain major illnesses, including heart disease and cancer, is decreased in communities that have a modern power plant. The fact that this tendency is present whether the power plant is nuclear or not shows that there is no increased health risk associated with living next to a nuclear power plant. (Correct)",
            "(B) Research has shown that there is no long-term health risk associated with a diet consisting largely of foods high in saturated fat and cholesterol if such a diet is consumed by someone with a physically active lifestyle. So, exercise is a more useful strategy for achieving cardiological health than is dietary restriction.",
            "(C) Research has shown that young people who drive motorcycles and receive one full year of extensive driving instruction are in fact less likely to become involved in accidents than those who simply pass a driving test and drive cars. This shows that there is not an inherently greater risk associated with driving a motorcycle than with driving a car.",
            "(D) Research has shown that kitchen cutting boards retain significant numbers of microbes even after careful washing, but that after washing fewer microbes are found on wooden boards than on plastic boards. There is, therefore, no greater risk of contracting microbial illnesses associated with using wooden cutting boards than with using plastic cutting boards.",
            "(E) Research shows that there is no greater long-term health benefit associated with taking vitamin supplements than with a moderate increase in the intake of fruits and vegetables. Clearly, then, there is no long-term health risk associated with the failure to take vitamin supplements, so long as enough fruits and vegetables are consumed.",
          ]
        }
      ]
    },
    {
      type: 'accordion',
      title: "Drill: The Overlap Flaw (PT-103-S-1-Q-21) (PT-103-S-1-Q-21)",
      content: [
        { type: 'h4', text: 'Stimulus' },
        { type: 'blockquote', text: "Not all tenured faculty are full professors. Therefore, although every faculty member in the linguistics department has tenure, it must be the case that not all of the faculty members in the linguistics department are full professors." },
        { type: 'h4', text: 'Question' },
        { type: 'paragraph', text: "The flawed pattern of reasoning exhibited by the argument above is most similar to that exhibited by which one of the following?" },
        {
          type: 'options',
          items: [
            "(A) Although all modern office towers are climate-controlled buildings, not all office buildings are climate-controlled. Therefore, it must be the case that not all office buildings are modern office towers.",
            "(B) All municipal hospital buildings are massive, but not all municipal hospital buildings are forbidding in appearance. Therefore, massive buildings need not present a forbidding appearance.",
            "(C) Although some buildings designed by famous architects are not well proportioned, all government buildings are designed by famous architects. Therefore, some government buildings are not well proportioned. (Correct)",
            "(D) Not all public buildings are well designed, but some poorly designed public buildings were originally intended for private use. Therefore, the poorly designed public buildings were all originally designed for private use.",
            "(E) Although some cathedrals are not built of stone, every cathedral is impressive. Therefore, buildings can be impressive even though they are not built of stone.",
          ]
        }
      ]
    },
  ] as ContentBlock[]
};
