import { Lesson } from '../../types';

export const Lesson3_ProcessOfElimination: Lesson = {
  id: "3-3",
  title: "The Process of Elimination",
  content: [
    { type: 'h3', text: "Lesson 3: The Process of Elimination" },
    { type: 'paragraph', text: "Our goal here is to identify the **argumentative strategy** the author uses to support their conclusion. We are about to look at one of the more common methods of reasoning found on the LSAT: the **Process of Elimination**." },
    { type: 'paragraph', text: "Here is the plan of attack for this lesson:" },
    
    { 
      type: 'process', 
      title: "Plan of Attack",
      steps: [
        "Break down the argument into its parts",
        "Summarize the original argument",
        "Abstract that into a general method",
        "Look for that specific answer choice",
        "Confirm by selecting or removing answers based on our Fact Test"
      ] 
    },

    { type: 'paragraph', text: "Let’s apply this method to the following question." },
    { type: 'h4', text: "Question ID: PT-135-S-2-Q-5" },
    
    { type: 'h4', text: "Stimulus" },
    { type: 'blockquote', text: "**Lahar:** We must now settle on a procedure for deciding on meeting agendas. Our club’s constitution allows three options: unanimous consent, majority vote, or assigning the task to a committee. Unanimous consent is unlikely. Forming a committee has usually led to factionalism and secret deals. Clearly, we should subject meeting agendas to majority vote." },
    
    { type: 'h4', text: "Question" },
    { type: 'paragraph', text: "Lahar’s argument does which one of the following?" },
    
    { type: 'h4', text: "Answer Choices" },
    { 
      type: 'options', 
      items: [
        "(A) rejects suggested procedures on constitutional grounds",
        "(B) claims that one procedure is the appropriate method for reaching every decision in the club",
        "(C) suggests a change to a constitution on the basis of practical considerations",
        "(D) recommends a choice based on the elimination of alternative options",
        "(E) supports one preference by arguing against those who have advocated alternatives"
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Step 1: Break Down the Argument" },
    { type: 'paragraph', text: "Let's engage with the text sentence by sentence to see how the pieces fit together." },
    { type: 'list', items: [
      "**\"We must now settle on a procedure for deciding on meeting agendas.\"**\n*   **Reaction:** Okay, we have a clear goal. We need to figure out how to set the agenda for a meeting.",
      "**\"Our club’s constitution allows three options: unanimous consent, majority vote, or assigning the task to a committee.\"**\n*   **Reaction:** We have a specific menu of choices. We are limited to exactly three variations of how to solve the problem.",
      "**\"Unanimous consent is unlikely.\"**\n*   **Reaction:** That is a negative attached to Option 1. It seems like a significant hurdle.",
      "**\"Forming a committee has usually led to factionalism and secret deals.\"**\n*   **Reaction:** That sounds pretty bad. \"Factionalism and secret deals\" are definitely negatives. It seems like Option 3 has some serious downsides as well.",
      "**\"Clearly, we should subject meeting agendas to majority vote.\"**\n*   **Reaction:** This is the conclusion. He is confirming that we should go with Option 2. This also confirms that the negatives we saw earlier were indeed the reasons he used to reject the first and third options."
    ]},

    { type: 'h3', text: "Step 2: Summarize the Logic (Concrete)" },
    { type: 'paragraph', text: "Lahar needs to pick a way to set meeting agendas. He identifies that there are only three possible ways to do it. He points out that the first way won't work and the third way causes problems. Because he has rejected two of the three choices, he concludes that the club should use the remaining one: majority vote." },

    { type: 'h3', text: "Step 3: Abstract the Logic (The Method)" },
    { type: 'paragraph', text: "What is the abstract structure here? The author established a closed set of possibilities (1, 2, and 3). He then systematically ruled out 1 and 3. This leaves 2 as the only logical conclusion." },
    { type: 'callout', title: "Method: Process of Elimination", variant: "summary", text: "An argument that establishes a limited set of possibilities and systematically rules out alternatives to support the remaining option." },

    { type: 'h3', text: "Step 4: Apply the Fact Test" },
    { type: 'paragraph', text: "Now we evaluate the answer choices. We will break each answer down into its individual components. If *any* component fails the Fact Test—meaning it didn't happen in the text—the whole answer is wrong." },
    
    { 
      type: 'breakdown', 
      labels: { title: 'Option Evaluation', text: 'Validation' },
      items: [
        {
          title: "(A) rejects suggested procedures on constitutional grounds",
          text: "He rejects Option 1 and 3, but **not on constitutional grounds**. The constitution actually *allows* all three. He rejects them for practical reasons.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(B) claims that one procedure is for reaching every decision in the club",
          text: "He argues for majority vote for **meeting agendas**, not for *every* decision in the club. The scope is too broad.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(C) suggests a change to a constitution on the basis of practical considerations",
          text: "He discusses practical issues, but he works **within** the rules. He never suggests *changing* the constitution itself.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(D) recommends a choice based on the elimination of alternative options",
          text: "Conclusion is a recommendation (\"we should...\"). This is supported by **ruling out** Option 1 and Option 3. Perfect match.",
          badge: "Correct",
          badgeColor: "green"
        },
        {
          title: "(E) supports one preference by arguing against those who have advocated alternatives",
          text: "He attacks the **procedures**, not the **people** who advocate them. There are no advocates mentioned in the text.",
          badge: "Incorrect",
          badgeColor: "red"
        }
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Summary" },
    { type: 'paragraph', text: "As we just saw, our steps worked perfectly. We figured out each of the parts of the stimulus, converted that to a general description of what the author did, and successfully converted that to an abstraction. We then found that exact pattern in the answer choices and were able to remove each of the wrong answers for a specific reason." },
    { type: 'paragraph', text: "Carry this forward: Whenever you see an author give you a \"menu\" of options and then start crossing them off, you are looking for the **Process of Elimination**. If you hold to this form, the only thing you'll need to work on is improving your ability to recognize these patterns and your familiarity with how the LSAT phrases them." },
    { type: 'paragraph', text: "Now that we've mastered this structure, let’s walk through the most common method you'll encounter—one that frequently appears in two-speaker arguments." }
  ]
};
