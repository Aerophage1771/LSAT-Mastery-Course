import { ContentBlock } from '../types';

// ─────────────────────────────────────────────
// Tab 1: Learning Experience
// ─────────────────────────────────────────────

export const roadmapLearningContent: ContentBlock[] = [
  { type: 'h2', text: 'Learning Experience Improvements' },
  { type: 'paragraph', text: 'Enhancements that directly improve how students learn, retain, and apply LSAT concepts.' },
  { type: 'hr' },

  { type: 'h3', text: '1. Spaced Repetition Engine' },
  { type: 'paragraph', text: "Integrate an SM-2 or FSRS algorithm that tracks each student's performance on drill questions and schedules review sessions at optimal intervals. Questions the student got wrong would reappear sooner; mastered questions fade into longer review cycles." },
  { type: 'callout', variant: 'tip', title: 'Implementation Hint', text: 'Store per-question history (timestamp, correct/incorrect, ease factor) in localStorage. Surface a **Daily Review** card on the Dashboard showing how many questions are due.' },

  { type: 'h3', text: '2. Adaptive Difficulty Sequencing' },
  { type: 'paragraph', text: "Automatically adjust which drill questions are presented based on the student's accuracy within each question type. Students scoring >80% on Flaw questions skip easy drills and jump to advanced ones; students below 60% get extra foundational practice." },

  { type: 'h3', text: '3. Timed Practice Mode' },
  { type: 'paragraph', text: "Add an optional countdown timer to drill questions that mirrors real LSAT pacing (roughly 1 minute 25 seconds per LR question, 8 minutes 45 seconds per RC passage). Show time-per-question stats after each session and compare against target pace." },
  { type: 'callout', variant: 'default', title: 'Feature Scope', text: 'Support three modes: **Untimed** (current default), **Soft Timer** (visible but no auto-submit), and **Strict Timer** (auto-reveals answer when time expires).' },

  { type: 'h3', text: '4. Explanation Reveal Controls' },
  { type: 'paragraph', text: "Currently, drill explanations are visible below the question. Add a **\"Try First\"** mode where the full breakdown is hidden behind a button. Students commit to an answer, get immediate feedback, then choose to reveal the step-by-step analysis. This prevents passive reading." },

  { type: 'h3', text: '5. Custom Study Plans' },
  { type: 'paragraph', text: "Let students build a personalized study schedule by selecting their target test date, current diagnostic score, and weak areas. Generate a week-by-week plan that allocates modules proportionally to weakness areas, with built-in review days." },

  { type: 'h3', text: '6. Prerequisite Chains' },
  { type: 'paragraph', text: "Enforce or suggest module ordering. For example, a student should complete **Module 1: Argument Part** before **Module 5: Flaw**, since flaw identification depends on understanding argument structure. Show locked/suggested next modules on the Dashboard." },

  { type: 'h3', text: '7. Interactive Argument Diagramming' },
  { type: 'paragraph', text: "Build a visual diagramming tool where students can drag-and-drop sentences from the stimulus into labeled boxes (Premise, Sub-Conclusion, Main Conclusion, Background). Compare their diagram against the correct structure before revealing the answer." },

  { type: 'h3', text: '8. Passage Annotation Tools' },
  { type: 'paragraph', text: "For RC passages, add inline highlighting, margin notes, and paragraph labels. Students can color-code text (e.g., yellow for main point, green for evidence, red for opposing view) and save annotations across sessions." },

  { type: 'h3', text: '9. Mistake Journal' },
  { type: 'paragraph', text: "Automatically log every wrong answer with the question, the student's selected answer, the correct answer, and the explanation. Provide a filterable journal view where students can review their mistakes by question type, date, or difficulty." },

  { type: 'h3', text: '10. Concept Map Visualization' },
  { type: 'paragraph', text: "Create an interactive graph showing how LSAT concepts connect. Nodes represent question types; edges show dependencies (e.g., Necessary Assumption connects to Weaken, Strengthen, and Sufficient Assumption). Clicking a node navigates to that module." },

  { type: 'h3', text: '11. Audio Explanations' },
  { type: 'paragraph', text: "Add text-to-speech or pre-recorded audio walkthroughs for each drill explanation. Students can listen while commuting. Use the Web Speech API for a lightweight initial version, or integrate with ElevenLabs/OpenAI TTS for natural voice." },

  { type: 'h3', text: '12. Flashcard Generator' },
  { type: 'paragraph', text: "Auto-generate Anki-compatible flashcards from lesson content. Each Key Takeaway callout becomes a card front/back pair. Export as .apkg file or display inline with a flip-card UI." },
];

// ─────────────────────────────────────────────
// Tab 2: Analytics & Progress
// ─────────────────────────────────────────────

export const roadmapAnalyticsContent: ContentBlock[] = [
  { type: 'h2', text: 'Analytics & Progress Tracking' },
  { type: 'paragraph', text: 'Deep visibility into student performance, trends, and areas for improvement.' },
  { type: 'hr' },

  { type: 'h3', text: '1. Performance Dashboard' },
  { type: 'paragraph', text: "Replace the simple progress bars with a rich analytics dashboard showing: overall accuracy rate, accuracy by question type (radar chart), questions completed over time (line chart), streak tracking, and estimated LSAT score range based on performance." },
  { type: 'breakdown', labels: { title: 'Metric', text: 'Description' }, items: [
    { title: 'Overall Accuracy', text: 'Percentage of drill questions answered correctly across all modules.', badge: 'Core', badgeColor: 'indigo' },
    { title: 'By Question Type', text: 'Radar chart showing accuracy per LR question type (Flaw, Weaken, etc.).', badge: 'Core', badgeColor: 'indigo' },
    { title: 'Score Estimate', text: 'Map accuracy rates to estimated LSAT score ranges using published conversion tables.', badge: 'Advanced', badgeColor: 'blue' },
    { title: 'Study Streak', text: 'Consecutive days with at least one lesson or drill completed.', badge: 'Engagement', badgeColor: 'green' },
  ]},

  { type: 'h3', text: '2. Per-Question Analytics' },
  { type: 'paragraph', text: "Show aggregate statistics for each question: percentage of students who got it right (from published LSAC data where available), average time spent, and most commonly selected wrong answer. This helps students gauge question difficulty." },

  { type: 'h3', text: '3. Weakness Detection' },
  { type: 'paragraph', text: "Analyze patterns in wrong answers to identify specific sub-skills that need work. For example, if a student consistently misses Flaw questions involving causal reasoning but aces conditional logic flaws, surface a targeted recommendation." },

  { type: 'h3', text: '4. Study Time Tracking' },
  { type: 'paragraph', text: "Track time spent on each module, lesson, and drill. Show daily/weekly/monthly study time charts. Set study goals (e.g., 2 hours/day) and track adherence." },

  { type: 'h3', text: '5. Progress Milestones' },
  { type: 'paragraph', text: "Define achievement milestones: 'Complete Unit 1', 'Answer 50 drills correctly', 'Maintain 80% accuracy for a week'. Show a trophy/badge system with progress toward each milestone." },

  { type: 'h3', text: '6. Comparative Analytics' },
  { type: 'paragraph', text: "If the app ever supports cloud sync, show anonymized percentile rankings: 'You scored better than 73% of students on Weaken questions'. Even without cloud, allow manual benchmark entry against published LSAT percentiles." },

  { type: 'h3', text: '7. Export Study Reports' },
  { type: 'paragraph', text: "Generate a PDF study report summarizing: total study hours, modules completed, accuracy trends, weak areas, and recommended focus areas. Useful for students working with LSAT tutors who need to see progress." },

  { type: 'h3', text: '8. Session History' },
  { type: 'paragraph', text: "Log each study session (start time, end time, modules/lessons accessed, questions attempted). Show a calendar heatmap view similar to GitHub's contribution graph." },
];

// ─────────────────────────────────────────────
// Tab 3: Content & Curriculum
// ─────────────────────────────────────────────

export const roadmapContentContent: ContentBlock[] = [
  { type: 'h2', text: 'Content & Curriculum Expansion' },
  { type: 'paragraph', text: 'New content types, expanded question banks, and richer educational material.' },
  { type: 'hr' },

  { type: 'h3', text: '1. Full Practice Test Simulator' },
  { type: 'paragraph', text: "Build a complete LSAT section simulator: 25-27 LR questions in 35 minutes or 4 RC passages in 35 minutes. Use questions from the Question Bank, randomized or curated into difficulty-matched sets. Show section-level score afterward." },

  { type: 'h3', text: '2. Logic Games Section' },
  { type: 'paragraph', text: "Add a complete Logic Games (Analytical Reasoning) curriculum. This was removed from the LSAT in 2024, but many prep courses still cover it for students taking older practice tests. Include game types: sequencing, grouping, matching, and hybrid." },

  { type: 'h3', text: '3. Video Lessons' },
  { type: 'paragraph', text: "Embed video explanations alongside written content. Each module introduction and each drill explanation could have an optional video walkthrough. Use embedded YouTube/Vimeo or self-hosted video with chapters." },

  { type: 'h3', text: '4. More Practice Questions' },
  { type: 'paragraph', text: "The current Question Bank has 224 questions. Scale to 500+ by adding more PT-sourced questions. Organize by difficulty tier (Foundation, Intermediate, Advanced) and tag each with the specific flaw/skill tested." },
  { type: 'callout', variant: 'default', title: 'Licensing Note', text: 'LSAC publishes PrepTests for practice. Any new questions should either be original or properly licensed from published PrepTests.' },

  { type: 'h3', text: '5. Comparative Passage Builder' },
  { type: 'paragraph', text: "Create a tool that lets students practice the Comparative Reading format: present two short passages on related topics and ask relationship questions. Generate new comparative sets from the existing passage library." },

  { type: 'h3', text: '6. Question Type Crossover Drills' },
  { type: 'paragraph', text: "Create mixed drill sets that combine multiple question types (e.g., 5 Weaken + 5 Strengthen + 5 Flaw in random order). This simulates real test conditions where question types aren't grouped." },

  { type: 'h3', text: '7. Difficulty Ratings' },
  { type: 'paragraph', text: "Tag every question with a 1-5 difficulty rating based on LSAC's published difficulty data or community solve rates. Let students filter the Question Bank by difficulty level." },

  { type: 'h3', text: '8. Writing Sample Prep' },
  { type: 'paragraph', text: "Add a Writing Sample section covering the LSAT's unscored writing prompt. Include a template, sample responses at different quality levels, and a checklist for self-evaluation." },

  { type: 'h3', text: '9. Glossary of Logical Terms' },
  { type: 'paragraph', text: "Build a searchable glossary defining every logical term used in the course: sufficient condition, necessary condition, contrapositive, ad hominem, straw man, etc. Link glossary entries from within lessons where terms first appear." },

  { type: 'h3', text: '10. Community Question Contributions' },
  { type: 'paragraph', text: "Allow advanced students or tutors to submit original practice questions following the Style Guide format. Include a review/approval workflow and attribution." },

  { type: 'h3', text: '11. Printable Study Sheets' },
  { type: 'paragraph', text: "Generate print-optimized PDF summaries for each module: key concepts, common traps, and the step-by-step method on a single page. Students can print and keep these next to their practice materials." },

  { type: 'h3', text: '12. Localization / Translations' },
  { type: 'paragraph', text: "While the LSAT is in English, explanatory content could be translated for ESL students. Support interface translations (sidebar, buttons, headers) as a first step, then optionally translate lesson explanations." },
];

// ─────────────────────────────────────────────
// Tab 4: UI / UX
// ─────────────────────────────────────────────

export const roadmapUXContent: ContentBlock[] = [
  { type: 'h2', text: 'UI / UX Improvements' },
  { type: 'paragraph', text: 'Visual polish, interaction design, and user experience enhancements.' },
  { type: 'hr' },

  { type: 'h3', text: '1. Dark Mode' },
  { type: 'paragraph', text: "Add a system-aware dark mode toggle. The app already uses Tailwind's slate color palette which maps cleanly to dark variants. Store preference in localStorage and respect `prefers-color-scheme` media query." },

  { type: 'h3', text: '2. Font Size / Reading Preferences' },
  { type: 'paragraph', text: "Add controls for font size (small/medium/large), line spacing, and font family (serif vs. sans-serif). LSAT passages are dense text; giving students control over reading comfort improves study sessions." },

  { type: 'h3', text: '3. Split-Pane View for RC' },
  { type: 'paragraph', text: "For Reading Comprehension questions, show the passage in a fixed left pane and the question in a scrollable right pane. This mirrors the actual LSAT testing interface and prevents constant scrolling between passage and question." },

  { type: 'h3', text: '4. Keyboard Shortcuts' },
  { type: 'paragraph', text: "Add comprehensive keyboard shortcuts: **Alt+Left/Right** for lesson navigation, **1-5** to select answer choices in drills, **Space** to reveal explanation, **D** for dashboard. Show a shortcuts cheat sheet modal (accessible via **?**)." },

  { type: 'h3', text: '5. Mobile-First Redesign' },
  { type: 'paragraph', text: "Optimize the mobile experience: swipe gestures for lesson navigation, bottom navigation bar, collapsible sections, and touch-friendly drill interactions. Many students study on their phones during commutes." },

  { type: 'h3', text: '6. Lesson Bookmarks' },
  { type: 'paragraph', text: "Let students bookmark specific lessons or paragraphs within lessons. Show a **Bookmarks** section on the Dashboard or sidebar for quick access to saved content." },

  { type: 'h3', text: '7. Customizable Dashboard' },
  { type: 'paragraph', text: "Let students rearrange Dashboard sections, hide completed modules, pin frequently accessed modules to the top, and choose between grid/list view for module cards." },

  { type: 'h3', text: '8. Animated Transitions' },
  { type: 'paragraph', text: "Add smooth page transitions between Dashboard and module views. Use Framer Motion or View Transitions API for crossfade effects, slide-in content, and staggered list animations." },

  { type: 'h3', text: '9. Reading Progress Indicator' },
  { type: 'paragraph', text: "Show a thin progress bar at the top of the lesson content area indicating scroll position. For long lessons, this helps students know how far they've progressed through the material." },

  { type: 'h3', text: '10. Table of Contents Sidebar' },
  { type: 'paragraph', text: "For long lessons, generate a floating table of contents from h2/h3 headings. Clicking an entry scrolls to that section. Highlight the currently visible section as the user scrolls." },

  { type: 'h3', text: '11. Confetti / Celebration Animations' },
  { type: 'paragraph', text: "Trigger a subtle celebration animation when a student completes a module, achieves a milestone, or gets 5 drill questions correct in a row. Use canvas-confetti for a lightweight particle effect." },

  { type: 'h3', text: '12. Onboarding Tour' },
  { type: 'paragraph', text: "Build a first-time user tour that highlights key features: the sidebar navigation, search (Ctrl+K), drill interactions, progress tracking, and the Question Bank. Use a step-by-step tooltip sequence." },

  { type: 'h3', text: '13. Breadcrumb Improvements' },
  { type: 'paragraph', text: "Enhance breadcrumbs to show the full path: Dashboard > Logical Reasoning > Unit 2: Analysis > Module 5: Flaw > Lesson 3. Make each segment clickable for fast navigation up the hierarchy." },

  { type: 'h3', text: '14. Color-Coded Difficulty Indicators' },
  { type: 'paragraph', text: "Add visual difficulty indicators to module cards and drill questions: green (foundational), yellow (intermediate), red (advanced). Helps students prioritize their study sessions by difficulty." },
];

// ─────────────────────────────────────────────
// Tab 5: Technical / Infrastructure
// ─────────────────────────────────────────────

export const roadmapTechnicalContent: ContentBlock[] = [
  { type: 'h2', text: 'Technical & Infrastructure' },
  { type: 'paragraph', text: 'Backend capabilities, performance, and developer experience improvements.' },
  { type: 'hr' },

  { type: 'h3', text: '1. Cloud Sync & User Accounts' },
  { type: 'paragraph', text: "Move from localStorage to a real backend (Supabase, Firebase, or custom API). Add user accounts with email/password or OAuth. Sync progress, bookmarks, and study data across devices." },
  { type: 'callout', variant: 'tip', title: 'Quick Start', text: 'Supabase provides auth, database, and real-time sync with a generous free tier. A migration from localStorage to Supabase could preserve the offline-first architecture with background sync.' },

  { type: 'h3', text: '2. Offline-First Architecture' },
  { type: 'paragraph', text: "Enhance the PWA to fully work offline. Cache module chunks in the service worker using a stale-while-revalidate strategy. Queue progress updates when offline and sync when connectivity returns." },

  { type: 'h3', text: '3. CMS Integration' },
  { type: 'paragraph', text: "Move lesson content from hardcoded TypeScript files to a headless CMS (Sanity, Strapi, Contentful). This enables non-developer content editors to create and update lessons without code changes." },

  { type: 'h3', text: '4. AI-Powered Features' },
  { type: 'paragraph', text: "Integrate an LLM API (OpenAI, Anthropic) for: **AI Tutor Chat** that answers student questions about specific lessons, **Auto-Generated Explanations** for new questions, and **Adaptive Hints** that give progressive clues instead of full answers." },
  { type: 'breakdown', labels: { title: 'Feature', text: 'Description' }, items: [
    { title: 'AI Tutor Chat', text: 'Contextual Q&A about the current lesson. Paste a question, get a Socratic-style explanation.', badge: 'High Value', badgeColor: 'green' },
    { title: 'Adaptive Hints', text: 'Instead of revealing the full answer, offer 3 progressive hints that guide the student toward the answer.', badge: 'Medium', badgeColor: 'indigo' },
    { title: 'Question Generation', text: 'Generate new practice questions in the style of existing drills. Useful for expanding the Question Bank.', badge: 'Advanced', badgeColor: 'blue' },
    { title: 'Essay Feedback', text: 'For Writing Sample prep, provide AI-powered feedback on student practice essays.', badge: 'Future', badgeColor: 'slate' },
  ]},

  { type: 'h3', text: '5. Performance Monitoring' },
  { type: 'paragraph', text: "Add Core Web Vitals tracking (LCP, FID, CLS) using web-vitals library. Monitor bundle sizes per release. Set up Lighthouse CI in GitHub Actions to catch performance regressions." },

  { type: 'h3', text: '6. E2E Testing' },
  { type: 'paragraph', text: "Add Playwright or Cypress tests for critical user flows: navigate to module, complete a drill question, verify progress persists on reload, search for a lesson, test URL routing with direct links." },

  { type: 'h3', text: '7. Internationalization (i18n) Framework' },
  { type: 'paragraph', text: "Set up react-intl or i18next so the UI chrome (buttons, labels, navigation) can be translated. Extract all hardcoded strings into message files. This enables future localization without code changes." },

  { type: 'h3', text: '8. A/B Testing Framework' },
  { type: 'paragraph', text: "Build a simple feature flag system that enables A/B testing different lesson formats, UI layouts, or drill presentation styles. Track which variants lead to better learning outcomes." },

  { type: 'h3', text: '9. API for External Integrations' },
  { type: 'paragraph', text: "Expose a JSON API (or embed protocol) so the course content can be embedded in other platforms: LMS systems, tutor dashboards, or mobile apps. Define endpoints for module listing, lesson content, and progress tracking." },

  { type: 'h3', text: '10. Micro-Frontend Architecture' },
  { type: 'paragraph', text: "If the app grows significantly, split into independently deployable micro-frontends: Course Shell, LR Module, RC Module, Question Bank, Analytics Dashboard. This enables parallel development by multiple teams." },

  { type: 'h3', text: '11. Content Versioning' },
  { type: 'paragraph', text: "Track changes to lesson content over time. Show a \"Last Updated\" date on each lesson. Enable rollback to previous versions. Useful when content editors update explanations or fix errors." },

  { type: 'h3', text: '12. Automated Content Validation' },
  { type: 'paragraph', text: "Build CI checks that validate: every drill has exactly 5 answer choices, every drill has exactly one correct answer marked, all PT identifiers follow the correct format, no broken cross-references between Question Bank and drill lessons." },
];

// ─────────────────────────────────────────────
// Tab 6: Social & Gamification
// ─────────────────────────────────────────────

export const roadmapSocialContent: ContentBlock[] = [
  { type: 'h2', text: 'Social & Gamification' },
  { type: 'paragraph', text: 'Features that make studying more engaging, competitive, and community-driven.' },
  { type: 'hr' },

  { type: 'h3', text: '1. Achievement System' },
  { type: 'paragraph', text: "Award badges for milestones: **First Steps** (complete first lesson), **Question Crusher** (answer 100 drills), **Flaw Detective** (80%+ accuracy on Flaw questions), **Perfectionist** (get 10 in a row correct), **Night Owl** (study past midnight). Display earned badges on a profile page." },
  { type: 'process', title: 'Achievement Tiers', steps: [
    '**Bronze**: Basic completion milestones (complete a module, answer 25 questions)',
    '**Silver**: Accuracy milestones (80% in any question type, complete all LR modules)',
    '**Gold**: Mastery milestones (90% across all types, complete the entire course)',
    '**Platinum**: Challenge milestones (complete a full timed section under target pace)',
  ]},

  { type: 'h3', text: '2. Daily Challenges' },
  { type: 'paragraph', text: "Present a \"Question of the Day\" on the Dashboard. A random question from the Question Bank with a global leaderboard showing who answered correctly and in the fastest time. Builds a daily habit." },

  { type: 'h3', text: '3. Study Groups' },
  { type: 'paragraph', text: "Allow students to form study groups. Group members can see each other's progress, share notes on specific lessons, and assign questions to discuss. Requires cloud sync (see Technical tab)." },

  { type: 'h3', text: '4. Discussion Threads per Lesson' },
  { type: 'paragraph', text: "Add a comment/discussion section at the bottom of each lesson. Students can ask questions, share insights, or debate answer choices. Upvote helpful comments. Requires a backend but could start with a simple Disqus or Giscus integration." },

  { type: 'h3', text: '5. Challenge Mode' },
  { type: 'paragraph', text: "Let students challenge each other to head-to-head drill races: both answer the same 10 questions, winner is the one with higher accuracy (ties broken by speed). Could work asynchronously." },

  { type: 'h3', text: '6. XP & Leveling System' },
  { type: 'paragraph', text: "Award XP for every action: completing a lesson (+10), answering a drill correctly (+5), maintaining a streak (+2/day). Define levels from 1-50 with increasing XP requirements. Show level on the profile and sidebar." },

  { type: 'h3', text: '7. Leaderboards' },
  { type: 'paragraph', text: "Global and friend-list leaderboards ranked by: total XP, weekly questions answered, accuracy rate, or longest streak. Reset weekly leaderboards every Monday to keep competition fresh." },

  { type: 'h3', text: '8. Shareable Progress Cards' },
  { type: 'paragraph', text: "Generate a beautiful shareable image summarizing a student's progress: score estimate, modules completed, accuracy rate, streak length. Optimized for sharing on social media or LSAT forums." },

  { type: 'h3', text: '9. Tutor Mode' },
  { type: 'paragraph', text: "Add a \"Tutor View\" that lets LSAT tutors track multiple students' progress. Tutors can assign specific modules, set deadlines, review student mistake journals, and leave comments on specific questions." },

  { type: 'h3', text: '10. Community Question Ratings' },
  { type: 'paragraph', text: "Let students rate each drill question on a scale of 1-5 for difficulty and 1-5 for explanation quality. Surface the highest-rated and most-struggled questions as study recommendations." },
];

// ─────────────────────────────────────────────
// Tab 7: Accessibility & Inclusion
// ─────────────────────────────────────────────

export const roadmapAccessibilityContent: ContentBlock[] = [
  { type: 'h2', text: 'Accessibility & Inclusion' },
  { type: 'paragraph', text: 'Making the course accessible to all learners regardless of ability, device, or circumstance.' },
  { type: 'hr' },

  { type: 'h3', text: '1. Screen Reader Optimization' },
  { type: 'paragraph', text: "Audit the entire app with NVDA/VoiceOver. Ensure all interactive elements have descriptive labels, drill questions are announced correctly, and accordion state changes are communicated. Add live regions for answer feedback." },

  { type: 'h3', text: '2. High Contrast Mode' },
  { type: 'paragraph', text: "Add a high-contrast theme option that meets WCAG AAA contrast ratios. Use bold borders, larger text, and stark color differences for all interactive elements." },

  { type: 'h3', text: '3. Dyslexia-Friendly Font Option' },
  { type: 'paragraph', text: "Offer OpenDyslexic or Atkinson Hyperlegible as alternative font choices. These fonts are designed to reduce letter confusion for dyslexic readers." },

  { type: 'h3', text: '4. Reduced Motion Mode' },
  { type: 'paragraph', text: "Respect `prefers-reduced-motion` media query throughout the app. Disable all slide, zoom, and fade animations. Replace animated transitions with instant state changes." },

  { type: 'h3', text: '5. LSAT Accommodations Simulator' },
  { type: 'paragraph', text: "The LSAT offers extended time accommodations (typically 1.5x). Add an accommodations toggle that adjusts all timer-based features to match the student's approved accommodations." },

  { type: 'h3', text: '6. Color-Blind Safe Palette' },
  { type: 'paragraph', text: "Ensure correct/incorrect answer feedback doesn't rely solely on red/green. Add icons (checkmark/X), patterns, or text labels alongside color indicators. Test with deuteranopia and protanopia simulation tools." },

  { type: 'h3', text: '7. Focus Indicators' },
  { type: 'paragraph', text: "Add visible focus rings on all interactive elements for keyboard navigation. Ensure the tab order is logical through the sidebar, main content, and modals." },

  { type: 'h3', text: '8. Text-to-Speech for Stimuli' },
  { type: 'paragraph', text: "Add a \"Read Aloud\" button on stimulus/passage text blocks. Students with reading difficulties can listen to passages while following along. Use the Web Speech API for zero-dependency implementation." },

  { type: 'h3', text: '9. Multi-Device Responsive Design' },
  { type: 'paragraph', text: "Ensure the app works well on tablets (landscape and portrait), ultra-wide monitors, and small mobile screens. Test touch interactions, pinch-to-zoom, and orientation changes." },

  { type: 'h3', text: '10. Offline Print Stylesheets' },
  { type: 'paragraph', text: "Add `@media print` styles that format lessons cleanly for printing. Hide navigation, expand all accordions, and use printer-friendly fonts and layouts." },
];
