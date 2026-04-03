import type { ModuleData } from '../types';

export interface ModuleMetadata {
  id: number;
  title: string;
  category: string;
  description: string;
  unit: string;
  lessonCount: number;
}

type ModuleLoader = () => Promise<{ default: ModuleData } | { [key: string]: ModuleData }>;

interface RegistryEntry {
  meta: ModuleMetadata;
  load: ModuleLoader;
}

function entry(meta: ModuleMetadata, load: ModuleLoader): RegistryEntry {
  return { meta, load };
}

async function resolveModule(loaded: Awaited<ReturnType<ModuleLoader>>): Promise<ModuleData> {
  if ('default' in loaded) return loaded.default;
  const key = Object.keys(loaded).find((k) => k.startsWith('Module'));
  if (key) return (loaded as Record<string, ModuleData>)[key];
  throw new Error('Could not resolve module export');
}

export async function loadModule(id: number): Promise<ModuleData> {
  const found = moduleRegistry.find((e) => e.meta.id === id);
  if (!found) throw new Error(`Module ${id} not found`);
  const loaded = await found.load();
  return resolveModule(loaded);
}

// ──────────────────────────────────────────────
// LOGICAL REASONING (Modules 1-23)
// ──────────────────────────────────────────────

// Unit 1: Identification (Modules 1-2)
// Unit 2: Analysis (Modules 3-6)
// Unit 3: Evaluation (Modules 7-9, 11-12)
// Unit 3A: Causal Reasoning (Module 10)
// Unit 4: Principle (Modules 13-15)
// Unit 5: Inference (Modules 16-19)
// Unit 6: Resolution (Module 20)
// Unit 7: Conflict (Module 21)
// Unit 8: Conditional Reasoning (Module 22)
// Unit 9: LSAT Math (Module 23)

// ──────────────────────────────────────────────
// READING COMPREHENSION (Modules 24-57)
// ──────────────────────────────────────────────

// Unit 10: Macro Questions (Modules 24, 29, 37, 39)
// Unit 11: Role & Function Questions (Modules 33-36)
// Unit 12: Inference Questions (Modules 25, 30-32)
// Unit 13: Application & Evaluation Questions (Modules 26-28, 38, 40-41)
// Unit 14: Practice Passages (Modules 42-49)
// Unit 15: Reference (Module 50)
// Unit 16: Advanced Passages (Modules 51-57)

export const moduleRegistry: RegistryEntry[] = [
  // ── LOGICAL REASONING ──────────────────────

  // Unit 1: Identification
  entry({ id: 1, title: 'Argument Part', category: 'LR', description: 'Define the specific function a particular sentence serves within the argument (e.g., main conclusion, subsidiary conclusion, premise, counter-premise).', unit: 'Unit 1: Identification', lessonCount: 12 }, () => import('./Module1')),
  entry({ id: 2, title: 'Main Conclusion', category: 'LR', description: 'Identify the single, overarching claim that the entire argument is constructed to prove. In other words, what is the one ultimate point the author wants the reader to accept?', unit: 'Unit 1: Identification', lessonCount: 11 }, () => import('./Module2')),

  // Unit 2: Analysis
  entry({ id: 3, title: 'Method of Reasoning', category: 'LR', description: 'Describe the argumentative strategy the author uses to support the conclusion. In other words, what is the logical structure of the argument?', unit: 'Unit 2: Analysis', lessonCount: 12 }, () => import('./Module3')),
  entry({ id: 4, title: 'Parallel Reasoning', category: 'LR', description: "Identify an argument's pattern. Then find an answer choice that follows the exact same logical structure.", unit: 'Unit 2: Analysis', lessonCount: 12 }, () => import('./Module4')),
  entry({ id: 5, title: 'Flaw', category: 'LR', description: "Identify the specific reasoning error that makes the argument's conclusion unproven by its evidence.", unit: 'Unit 2: Analysis', lessonCount: 12 }, () => import('./Module5')),
  entry({ id: 6, title: 'Parallel Flaw', category: 'LR', description: "Identify the argument's specific reasoning error, then find an answer choice that commits the exact same type of error.", unit: 'Unit 2: Analysis', lessonCount: 10 }, () => import('./Module6')),

  // Unit 3: Evaluation
  entry({ id: 7, title: 'Evaluate the Argument', category: 'LR', description: 'Identify the piece of information that would be most useful in determining whether the argument is strong or weak.', unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module7')),
  entry({ id: 8, title: 'Weaken', category: 'LR', description: "Find the answer choice that, if true, most undermines the argument's conclusion by attacking the gap between its premises and conclusion.", unit: 'Unit 3: Evaluation', lessonCount: 11 }, () => import('./Module8')),
  entry({ id: 9, title: 'Strengthen', category: 'LR', description: "Find the answer choice that, if true, most supports the argument's conclusion by bridging the gap between its premises and conclusion.", unit: 'Unit 3: Evaluation', lessonCount: 13 }, () => import('./Module9')),
  entry({ id: 21, title: 'Causal Reasoning', category: 'LR', description: 'Recognize, test, attack, and support causal arguments across multiple Logical Reasoning tasks without treating causation as a single question type.', unit: 'Unit 3A: Causal Reasoning', lessonCount: 7 }, () => import('./Module21')),
  entry({ id: 10, title: 'Sufficient Assumption', category: 'LR', description: "Find the answer choice that, if assumed to be true, would make the argument's conclusion follow logically and with certainty.", unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module10')),
  entry({ id: 11, title: 'Necessary Assumption', category: 'LR', description: 'Find the answer choice that the argument requires to be true. If this assumption is false, the argument falls apart.', unit: 'Unit 3: Evaluation', lessonCount: 14 }, () => import('./Module11')),

  // Unit 4: Principle
  entry({ id: 12, title: 'Principle-Strengthen', category: 'LR', description: 'Find a broad, abstract rule that, if true, would justify or support the specific argument presented in the stimulus.', unit: 'Unit 4: Principle', lessonCount: 7 }, () => import('./Module12')),
  entry({ id: 13, title: 'Principle-Apply', category: 'LR', description: 'Apply a given abstract rule or principle to a specific scenario to determine which answer choice conforms to the principle.', unit: 'Unit 4: Principle', lessonCount: 7 }, () => import('./Module13')),
  entry({ id: 14, title: 'Principle-Generalization', category: 'LR', description: 'Identify the general rule or principle that best explains or justifies the specific reasoning in the stimulus.', unit: 'Unit 4: Principle', lessonCount: 7 }, () => import('./Module14')),

  // Unit 5: Inference
  entry({ id: 15, title: 'Fill in the Blank', category: 'LR', description: "Complete the argument by selecting the answer choice that best fills in the blank, typically representing the argument's conclusion.", unit: 'Unit 5: Inference', lessonCount: 8 }, () => import('./Module15')),
  entry({ id: 16, title: 'Most Strongly Supported', category: 'LR', description: 'Find the answer choice that receives the strongest support from the information in the stimulus.', unit: 'Unit 5: Inference', lessonCount: 11 }, () => import('./Module16')),
  entry({ id: 17, title: 'Must Be True', category: 'LR', description: 'Find the answer choice that must be true based on the statements in the stimulus.', unit: 'Unit 5: Inference', lessonCount: 13 }, () => import('./Module17')),
  entry({ id: 18, title: 'Must Be False', category: 'LR', description: 'Find the answer choice that cannot be true given the information in the stimulus.', unit: 'Unit 5: Inference', lessonCount: 8 }, () => import('./Module18')),

  // Unit 6: Resolution
  entry({ id: 19, title: 'Paradox/Explain', category: 'LR', description: 'Find the new fact that clearly resolves two clashing statements, not one that merely helps a little.', unit: 'Unit 6: Resolution', lessonCount: 10 }, () => import('./Module19')),

  // Unit 7: Conflict
  entry({ id: 20, title: 'Agree/Disagree (Point at Issue)', category: 'LR', description: "Compare each speaker's explicit and implicit commitments, then identify the exact proposition they oppose or share.", unit: 'Unit 7: Conflict', lessonCount: 10 }, () => import('./Module20')),

  // Unit 8: Conditional Reasoning
  entry({ id: 22, title: 'Conditional Reasoning', category: 'LR', description: 'Master the rigid, mechanical application of formal logic, including contrapositives, quantifiers, and complex conditional structures.', unit: 'Unit 8: Conditional Reasoning', lessonCount: 9 }, () => import('./Module22')),

  // Unit 9: LSAT Math
  entry({ id: 23, title: 'LSAT Math', category: 'LR', description: 'Master the logical flaws hidden in quantitative arguments involving percentages, averages, and probabilities.', unit: 'Unit 9: LSAT Math', lessonCount: 7 }, () => import('./Module23')),

  // ── READING COMPREHENSION ──────────────────

  // Unit 10: Macro Questions — "The Big Picture"
  entry({ id: 24, title: 'Main Idea', category: 'RC', description: 'Identify the one central message or overall perspective the author wants the reader to take away from the entire text.', unit: 'Unit 10: Macro Questions', lessonCount: 4 }, () => import('./Module24')),
  entry({ id: 29, title: 'Author Attitude', category: 'RC', description: "Analyze the author's specific word choices to gauge their opinion toward a subject.", unit: 'Unit 10: Macro Questions', lessonCount: 2 }, () => import('./Module29')),
  entry({ id: 37, title: 'Passage Function', category: 'RC', description: 'Identify why the author wrote the text by selecting the abstract verb that best describes their method.', unit: 'Unit 10: Macro Questions', lessonCount: 2 }, () => import('./Module37')),
  entry({ id: 39, title: 'Structure', category: 'RC', description: 'Identify how the major sections of the passage connect and build upon one another.', unit: 'Unit 10: Macro Questions', lessonCount: 2 }, () => import('./Module39')),

  // Unit 11: Role & Function Questions — "Why Is This Detail Here?"
  entry({ id: 33, title: 'Passage Principle', category: 'RC', description: 'Identify the general rule that justifies a specific argument in the text.', unit: 'Unit 11: Role & Function Questions', lessonCount: 3 }, () => import('./Module33')),
  entry({ id: 34, title: 'Phrase Meaning', category: 'RC', description: 'Define a word or phrase based strictly on how it is used in that specific sentence.', unit: 'Unit 11: Role & Function Questions', lessonCount: 2 }, () => import('./Module34')),
  entry({ id: 35, title: 'Phrase Function', category: 'RC', description: 'Identify the role a specific phrase plays in the argument or passage structure.', unit: 'Unit 11: Role & Function Questions', lessonCount: 2 }, () => import('./Module35')),
  entry({ id: 36, title: 'Paragraph Function', category: 'RC', description: 'Determine the purpose a specific paragraph serves within the passage.', unit: 'Unit 11: Role & Function Questions', lessonCount: 2 }, () => import('./Module36')),

  // Unit 12: Inference Questions — "Must Be True / Most Strongly Supported"
  entry({ id: 25, title: 'Inference', category: 'RC', description: 'Identify a statement that is provably true based on the text.', unit: 'Unit 12: Inference Questions', lessonCount: 4 }, () => import('./Module25')),
  entry({ id: 30, title: 'Author Viewpoint', category: 'RC', description: "Determine which statement the author would agree with based on the passage.", unit: 'Unit 12: Inference Questions', lessonCount: 2 }, () => import('./Module30')),
  entry({ id: 31, title: 'Complete the Passage', category: 'RC', description: 'Select the answer that best completes the final sentence or idea of the passage.', unit: 'Unit 12: Inference Questions', lessonCount: 2 }, () => import('./Module31')),
  entry({ id: 32, title: 'Third-Party Viewpoint', category: 'RC', description: 'Isolate the views of a specific person or group mentioned in the passage.', unit: 'Unit 12: Inference Questions', lessonCount: 2 }, () => import('./Module32')),

  // Unit 13: Application & Evaluation Questions — "LR in RC"
  entry({ id: 26, title: 'Analogy', category: 'RC', description: 'Match the structure of a relationship in the passage to a new scenario.', unit: 'Unit 13: Application & Evaluation Questions', lessonCount: 2 }, () => import('./Module26')),
  entry({ id: 27, title: 'Application', category: 'RC', description: 'Apply a rule or principle from the passage to a new situation.', unit: 'Unit 13: Application & Evaluation Questions', lessonCount: 2 }, () => import('./Module27')),
  entry({ id: 28, title: 'Approach', category: 'RC', description: 'Identify the method or strategy the author uses to build the argument.', unit: 'Unit 13: Application & Evaluation Questions', lessonCount: 2 }, () => import('./Module28')),
  entry({ id: 38, title: 'Relationship', category: 'RC', description: 'Identify how two ideas, claims, or elements in the passage relate to each other.', unit: 'Unit 13: Application & Evaluation Questions', lessonCount: 2 }, () => import('./Module38')),
  entry({ id: 40, title: 'Title', category: 'RC', description: 'Select the title that best captures the main subject and scope of the passage.', unit: 'Unit 13: Application & Evaluation Questions', lessonCount: 2 }, () => import('./Module40')),
  entry({ id: 41, title: 'Weaken-Strengthen', category: 'RC', description: 'Find information that would strengthen or weaken an argument made in the passage.', unit: 'Unit 13: Application & Evaluation Questions', lessonCount: 2 }, () => import('./Module41')),

  // Unit 14: Practice Passages
  entry({ id: 42, title: 'Practice Passage 1: Obasan', category: 'RC', description: 'Full passage breakdown with question-by-question analysis.', unit: 'Unit 14: Practice Passages', lessonCount: 8 }, () => import('./Module42')),
  entry({ id: 43, title: 'Practice Passage 2: Bankruptcy Laws', category: 'RC', description: 'Full passage breakdown with question-by-question analysis.', unit: 'Unit 14: Practice Passages', lessonCount: 9 }, () => import('./Module43')),
  entry({ id: 44, title: 'Practice Passage 3: Cultural Identity', category: 'RC', description: 'Full passage breakdown with question-by-question analysis.', unit: 'Unit 14: Practice Passages', lessonCount: 9 }, () => import('./Module44')),
  entry({ id: 45, title: 'Practice Passage 4: Woody Allen Films', category: 'RC', description: 'Full passage breakdown with question-by-question analysis.', unit: 'Unit 14: Practice Passages', lessonCount: 7 }, () => import('./Module45')),
  entry({ id: 46, title: 'Practice Passage 5: Cosmic Justice', category: 'RC', description: 'Full passage breakdown with question-by-question analysis.', unit: 'Unit 14: Practice Passages', lessonCount: 9 }, () => import('./Module46')),
  entry({ id: 47, title: 'Practice Passage 6: Julia Margaret Cameron', category: 'RC', description: 'Full passage breakdown with question-by-question analysis.', unit: 'Unit 14: Practice Passages', lessonCount: 9 }, () => import('./Module47')),
  entry({ id: 48, title: 'Practice Passage 7: Advertising Critique', category: 'RC', description: 'Full passage breakdown with question-by-question analysis.', unit: 'Unit 14: Practice Passages', lessonCount: 7 }, () => import('./Module48')),
  entry({ id: 49, title: 'Practice Passage 8: Property Justice', category: 'RC', description: 'Full passage breakdown with question-by-question analysis.', unit: 'Unit 14: Practice Passages', lessonCount: 7 }, () => import('./Module49')),

  // Unit 15: Reference
  entry({ id: 50, title: 'RC Quick Reference Guide', category: 'RC', description: 'One-page reference guide with key RC strategies and question type summaries.', unit: 'Unit 15: Reference', lessonCount: 1 }, () => import('./Module50')),

  // Unit 16: Advanced Passages
  entry({ id: 51, title: 'Advanced Passage 1: Mathematics as Language', category: 'RC', description: 'In-depth analysis of a challenging philosophy passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 6 }, () => import('./Module51')),
  entry({ id: 52, title: 'Advanced Passage 2: Bentham', category: 'RC', description: 'In-depth analysis of a challenging natural science passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 7 }, () => import('./Module52')),
  entry({ id: 53, title: 'Advanced Passage 3: Critical Legal Studies', category: 'RC', description: 'In-depth analysis of a challenging law & policy passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 8 }, () => import('./Module53')),
  entry({ id: 54, title: 'Advanced Passage 4: Dworkin', category: 'RC', description: 'In-depth analysis of a challenging art & literature passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 7 }, () => import('./Module54')),
  entry({ id: 55, title: 'Advanced Passage 5: Psychology of Risk', category: 'RC', description: 'In-depth analysis of a challenging social science passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 6 }, () => import('./Module55')),
  entry({ id: 56, title: 'Advanced Passage 6: Historical Sociology', category: 'RC', description: 'In-depth analysis of a challenging economics passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 7 }, () => import('./Module56')),
  entry({ id: 57, title: 'Advanced Passage 7: Digitalization and Copyright Law', category: 'RC', description: 'In-depth analysis of a challenging history passage.', unit: 'Unit 16: Advanced Passages', lessonCount: 6 }, () => import('./Module57')),

];

export function getAllModuleMetadata(): ModuleMetadata[] {
  return moduleRegistry.map((e) => e.meta);
}
