import { Lesson } from '../../types';

export const Lesson7_HandlingHardestQuestions: Lesson = {
  id: "3-7",
  title: "Handling the Hardest Questions",
  content: [
    { type: 'h3', text: "Handling the Hardest Questions" },
    { type: 'paragraph', text: "Our goal in this lesson is to prepare for the most difficult **Method of Reasoning** questions. Up to this point, we have identified the basic \"moves\" authors make. However, as you move into higher difficulty levels, the logic itself isn't always the problem—the way the test describes that logic is." },
    { type: 'paragraph', text: "To conquer these, we must be incredibly precise with our definitions. We are looking for the exact argumentative strategy, and the test makers will try to hide the correct answer behind dense, abstract language." },
    { type: 'hr' },
    { type: 'h3', text: "What Makes a Question \"Hard\"?" },
    { type: 'paragraph', text: "There are two major hurdles that differentiate a \"Level 5\" difficulty question from the ones we have practiced so far:" },
    { type: 'h4', text: "1. Abstract Answer Choices" },
    { type: 'paragraph', text: "The LSAT will use academic vocabulary to describe simple things. Instead of saying \"The author changes the rule,\" they might say \"The author narrows the scope of the generalization at issue.\" You must be able to \"translate\" this academic jargon back into the concrete actions you saw in the text." },
    { type: 'h4', text: "2. Subtle Logical Distinctions" },
    { type: 'paragraph', text: "The test requires you to know the exact difference between similar concepts. If you aren't careful, you might pick an answer that sounds \"close enough\" but actually describes a different logical move." },
    { type: 'paragraph', text: "We will focus on two specific distinctions that often trip students up:" },
    { type: 'list', items: [
      "**Implicit Premises:** This is where a speaker attacks an idea that the first person never actually wrote down. You have to be able to spot when an argument depends on a hidden assumption. For example, if someone says, \"We don't need to ask for directions unless we're lost,\" they are **implicitly assuming** that they are not lost. If a second speaker says, \"But we *are* lost,\" they are attacking that unstated assumption.",
      "**Examples vs. Principles:** An **Example** is a specific instance used to build a case (Specific → General). A **Principle** is a broad rule used to judge a specific case (General → Specific). If an author talks about a specific person choosing between 50 colas to prove a point about \"freedom,\" they are using an **Example**, not an analogy. An **Analogy** would compare \"freedom\" to something else entirely, like a \"garden.\""
    ]},
    { type: 'hr' },
    { type: 'h3', text: "The Method of Reasoning Dictionary" },
    { type: 'paragraph', text: "To handle these subtle shifts, you must know the strict definitions of these terms. Carry this chart forward with you; it contains the most common abstract descriptions you will see in difficult answer choices." },
    { 
      type: 'breakdown', 
      labels: { title: 'Term', text: 'Definition & Key Feature' },
      items: [
        { 
          title: "Example", 
          text: "**Definition:** A specific instance used to illustrate or prove a general rule.\n**Key Feature:** Moves from **Specific → General**." 
        },
        { 
          title: "Principle", 
          text: "**Definition:** A broad, general rule or moral standard.\n**Key Feature:** Moves from **General → Specific**." 
        },
        { 
          title: "Analogy", 
          text: "**Definition:** A comparison between two *different* situations to show similarity.\n**Key Feature:** Comparing **Topic A → Topic B**." 
        },
        { 
          title: "Counterexample", 
          text: "**Definition:** A specific instance that disproves a general rule or claim.\n**Key Feature:** \"Rule says X, but here is a case of Y.\"" 
        },
        { 
          title: "Internal Contradiction", 
          text: "**Definition:** When an argument makes two claims that cannot both be true.\n**Key Feature:** The argument's own logic defeats itself." 
        },
        { 
          title: "Implicit Premise", 
          text: "**Definition:** An unstated assumption that is required for the argument to work.\n**Key Feature:** It is **believed** but **not written**." 
        },
        { 
          title: "Ambiguity", 
          text: "**Definition:** Using one word in two different ways to confuse the logic.\n**Key Feature:** The meaning of a keyword shifts." 
        },
        { 
          title: "Circular Reasoning", 
          text: "**Definition:** When the author uses the conclusion to prove itself.\n**Key Feature:** \"This is true because it is true.\"" 
        }
      ]
    },
    { type: 'h3', text: "The Plan of Attack (Refined)" },
    { type: 'paragraph', text: "As questions get harder, our 4-step process becomes even more important for staying grounded:" },
    { 
      type: 'process', 
      steps: [
        "Break down the argument into its parts",
        "Summarize the original argument",
        "Abstract that into a general method",
        "Look for that specific answer choice",
        "Select or remove it based on our Fact Test"
      ] 
    },
    { type: 'paragraph', text: "In the next few exercises, we will use this plan to tackle questions where the answer choices are designed to confuse you. We will practice \"subdividing\" those complex answers into individual components to ensure that we only pick the one that is 100% accurate." },
    { type: 'paragraph', text: "Let's dive into our first high-difficulty example: **Restricting the Scope**." }
  ]
};
