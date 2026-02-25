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

export const moduleRegistry: RegistryEntry[] = [
  entry({ id: 1, title: 'Argument Part', category: 'LR', description: 'Define the specific function a particular sentence serves within the argument (e.g., main conclusion, subsidiary conclusion, premise, counter-premise).', unit: 'Unit 1: Identification', lessonCount: 12 }, () => import('./Module1')),
  entry({ id: 2, title: 'Main Conclusion', category: 'LR', description: 'Identify the single, overarching claim that the entire argument is constructed to prove. In other words, what is the one ultimate point the author wants the reader to accept?', unit: 'Unit 1: Identification', lessonCount: 11 }, () => import('./Module2')),
  entry({ id: 3, title: 'Method of Reasoning', category: 'LR', description: 'Describe the argumentative strategy the author uses to support the conclusion. In other words, what is the logical structure of the argument?', unit: 'Unit 2: Analysis', lessonCount: 12 }, () => import('./Module3')),
  entry({ id: 4, title: 'Parallel Reasoning', category: 'LR', description: "Identify an argument's pattern. Then find an answer choice that follows the exact same logical structure.", unit: 'Unit 2: Analysis', lessonCount: 12 }, () => import('./Module4')),
  entry({ id: 5, title: 'Flaw', category: 'LR', description: "Identify the specific reasoning error that makes the argument's conclusion unproven by its evidence.", unit: 'Unit 2: Analysis', lessonCount: 12 }, () => import('./Module5')),
  entry({ id: 6, title: 'Parallel Flaw', category: 'LR', description: "Identify the argument's specific reasoning error, then find an answer choice that commits the exact same type of error.", unit: 'Unit 2: Analysis', lessonCount: 12 }, () => import('./Module6')),
  entry({ id: 7, title: 'Evaluate the Argument', category: 'LR', description: 'Identify the piece of information that would be most useful in determining whether the argument is strong or weak.', unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module7')),
  entry({ id: 8, title: 'Weaken', category: 'LR', description: "Find the answer choice that, if true, most undermines the argument's conclusion by attacking the gap between its premises and conclusion.", unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module8')),
  entry({ id: 9, title: 'Strengthen', category: 'LR', description: "Find the answer choice that, if true, most supports the argument's conclusion by bridging the gap between its premises and conclusion.", unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module9')),
  entry({ id: 10, title: 'Sufficient Assumption', category: 'LR', description: "Find the answer choice that, if assumed to be true, would make the argument's conclusion follow logically and with certainty.", unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module10')),
  entry({ id: 11, title: 'Necessary Assumption', category: 'LR', description: 'Find the answer choice that the argument requires to be true. If this assumption is false, the argument falls apart.', unit: 'Unit 3: Evaluation', lessonCount: 12 }, () => import('./Module11')),
  entry({ id: 12, title: 'Principle-Strengthen', category: 'LR', description: 'Find a broad, abstract rule that, if true, would justify or support the specific argument presented in the stimulus.', unit: 'Unit 4: Principle', lessonCount: 12 }, () => import('./Module12')),
  entry({ id: 13, title: 'Principle - Apply', category: 'LR', description: 'Apply a given abstract rule or principle to a specific scenario to determine which answer choice conforms to the principle.', unit: 'Unit 4: Principle', lessonCount: 12 }, () => import('./Module13')),
  entry({ id: 14, title: 'Principle - Generalization', category: 'LR', description: 'Identify the general rule or principle that best explains or justifies the specific reasoning in the stimulus.', unit: 'Unit 4: Principle', lessonCount: 12 }, () => import('./Module14')),
  entry({ id: 15, title: 'Fill in the Blank', category: 'LR', description: "Complete the argument by selecting the answer choice that best fills in the blank, typically representing the argument's conclusion.", unit: 'Unit 5: Inference', lessonCount: 12 }, () => import('./Module15')),
  entry({ id: 16, title: 'Most Strongly Supported', category: 'LR', description: 'Find the answer choice that receives the strongest support from the information in the stimulus.', unit: 'Unit 5: Inference', lessonCount: 12 }, () => import('./Module16')),
  entry({ id: 17, title: 'Must Be True', category: 'LR', description: 'Find the answer choice that must be true based on the statements in the stimulus.', unit: 'Unit 5: Inference', lessonCount: 12 }, () => import('./Module17')),
  entry({ id: 18, title: 'Must Be False', category: 'LR', description: 'Find the answer choice that cannot be true given the information in the stimulus.', unit: 'Unit 5: Inference', lessonCount: 12 }, () => import('./Module18')),
  entry({ id: 19, title: 'Explain / Resolve', category: 'LR', description: 'Find the answer choice that best explains a surprising result or resolves an apparent contradiction in the stimulus.', unit: 'Unit 6: Resolution', lessonCount: 12 }, () => import('./Module19')),
  entry({ id: 20, title: 'Point at Issue', category: 'LR', description: 'Identify the specific claim about which two speakers in a dialogue disagree.', unit: 'Unit 7: Conflict', lessonCount: 12 }, () => import('./Module20')),
  entry({ id: 55, title: 'Conditional Reasoning', category: 'LR', description: 'Master the rigid, mechanical application of formal logic, including contrapositives, quantifiers, and complex conditional structures.', unit: 'Unit 8: Conditional Reasoning', lessonCount: 8 }, () => import('./Module55')),
  entry({ id: 59, title: 'LSAT Math', category: 'LR', description: 'Master the logical flaws hidden in quantitative arguments involving percentages, averages, and probabilities.', unit: 'Unit 9: LSAT Math', lessonCount: 8 }, () => import('./Module59')),
  entry({ id: 21, title: 'Main Point', category: 'RC', description: 'Identify the central claim or thesis of a reading comprehension passage.', unit: 'Unit 8: Summarizing the Passage', lessonCount: 12 }, () => import('./Module21')),
  entry({ id: 22, title: 'Primary Purpose', category: 'RC', description: 'Determine the overall goal or function of a reading comprehension passage.', unit: 'Unit 8: Summarizing the Passage', lessonCount: 12 }, () => import('./Module22')),
  entry({ id: 23, title: 'Organization', category: 'RC', description: 'Understand the structural layout and progression of ideas in a passage.', unit: 'Unit 8: Summarizing the Passage', lessonCount: 12 }, () => import('./Module23')),
  entry({ id: 24, title: 'In Context', category: 'RC', description: 'Determine the meaning or function of a word, phrase, or sentence within the passage.', unit: 'Unit 9: Analyzing the Components', lessonCount: 12 }, () => import('./Module24')),
  entry({ id: 25, title: 'Specific Detail', category: 'RC', description: 'Locate and identify specific information stated directly in the passage.', unit: 'Unit 9: Analyzing the Components', lessonCount: 12 }, () => import('./Module25')),
  entry({ id: 26, title: 'Function', category: 'RC', description: 'Determine the role a specific portion of the passage plays in the overall argument.', unit: 'Unit 9: Analyzing the Components', lessonCount: 12 }, () => import('./Module26')),
  entry({ id: 27, title: 'Author Agreement', category: 'RC', description: "Identify claims the author would most likely agree with based on the passage's content.", unit: 'Unit 10: Identifying the Perspectives', lessonCount: 12 }, () => import('./Module27')),
  entry({ id: 28, title: 'Attitude', category: 'RC', description: "Determine the author's tone or attitude toward a subject discussed in the passage.", unit: 'Unit 10: Identifying the Perspectives', lessonCount: 12 }, () => import('./Module28')),
  entry({ id: 29, title: 'Dual Passages', category: 'RC', description: 'Analyze two related passages, comparing and contrasting their arguments and perspectives.', unit: 'Unit 10: Identifying the Perspectives', lessonCount: 12 }, () => import('./Module29')),
  entry({ id: 30, title: 'Analogous Reasoning', category: 'RC', description: 'Identify a situation or argument that parallels the reasoning found in the passage.', unit: 'Unit 11: Extending the Reasoning', lessonCount: 12 }, () => import('./Module30')),
  entry({ id: 31, title: 'Inference', category: 'RC', description: 'Draw a conclusion that logically follows from the information presented in the passage.', unit: 'Unit 11: Extending the Reasoning', lessonCount: 12 }, () => import('./Module31')),
  entry({ id: 32, title: 'Strengthen / Weaken (RC)', category: 'RC', description: 'Find information that would strengthen or weaken an argument made in the passage.', unit: 'Unit 11: Extending the Reasoning', lessonCount: 12 }, () => import('./Module32')),
  entry({ id: 33, title: 'Practice Passage 1: Law', category: 'RC', description: 'Full breakdown of a law-focused RC passage.', unit: 'Unit 12: Sample Passages', lessonCount: 8 }, () => import('./Module33')),
  entry({ id: 34, title: 'Practice Passage 2: Science', category: 'RC', description: 'Full breakdown of a science-focused RC passage.', unit: 'Unit 12: Sample Passages', lessonCount: 8 }, () => import('./Module34')),
  entry({ id: 35, title: 'Practice Passage 3: Humanities', category: 'RC', description: 'Full breakdown of a humanities-focused RC passage.', unit: 'Unit 12: Sample Passages', lessonCount: 8 }, () => import('./Module35')),
  entry({ id: 36, title: 'Practice Passage 4: Social Science', category: 'RC', description: 'Full breakdown of a social-science-focused RC passage.', unit: 'Unit 12: Sample Passages', lessonCount: 8 }, () => import('./Module36')),
  entry({ id: 37, title: 'Practice Passage 5: Dual', category: 'RC', description: 'Full breakdown of a dual-passage RC section.', unit: 'Unit 12: Sample Passages', lessonCount: 8 }, () => import('./Module37')),
  entry({ id: 38, title: 'Practice Passage 6: Law II', category: 'RC', description: 'Full breakdown of a second law-focused RC passage.', unit: 'Unit 12: Sample Passages', lessonCount: 8 }, () => import('./Module38')),
  entry({ id: 39, title: 'Practice Passage 7: Science II', category: 'RC', description: 'Full breakdown of a second science-focused RC passage.', unit: 'Unit 12: Sample Passages', lessonCount: 8 }, () => import('./Module39')),
  entry({ id: 40, title: 'Practice Passage 8: Humanities II', category: 'RC', description: 'Full breakdown of a second humanities-focused RC passage.', unit: 'Unit 12: Sample Passages', lessonCount: 8 }, () => import('./Module40')),
  entry({ id: 41, title: 'Practice Passage 9: Social Sci. II', category: 'RC', description: 'Full breakdown of a second social-science-focused RC passage.', unit: 'Unit 12: Sample Passages', lessonCount: 8 }, () => import('./Module41')),
  entry({ id: 42, title: 'Practice Passage 10: Dual II', category: 'RC', description: 'Full breakdown of a second dual-passage RC section.', unit: 'Unit 12: Sample Passages', lessonCount: 8 }, () => import('./Module42')),
  entry({ id: 43, title: 'RC Question Type Reference', category: 'RC', description: 'Quick reference guide for all RC question types and strategies.', unit: 'Unit 13: Reference', lessonCount: 3 }, () => import('./Module43')),
  entry({ id: 44, title: 'RC Passage Strategy Guide', category: 'RC', description: 'Comprehensive strategies for reading and annotating RC passages.', unit: 'Unit 13: Reference', lessonCount: 3 }, () => import('./Module44')),
  entry({ id: 45, title: 'RC Timing & Review Guide', category: 'RC', description: 'Strategies for managing time and reviewing RC sections.', unit: 'Unit 13: Reference', lessonCount: 3 }, () => import('./Module45')),
  entry({ id: 46, title: 'RC Common Traps Reference', category: 'RC', description: 'Catalog of common RC answer choice traps and how to avoid them.', unit: 'Unit 13: Reference', lessonCount: 3 }, () => import('./Module46')),
  entry({ id: 47, title: 'RC Cheat Sheet', category: 'RC', description: 'One-page cheat sheet with all key RC strategies.', unit: 'Unit 13: Reference', lessonCount: 1 }, () => import('./Module47')),
  entry({ id: 50, title: 'Advanced Passage: Philosophy', category: 'RC', description: 'In-depth analysis of a challenging philosophy passage.', unit: 'Unit 14: Advanced Passages', lessonCount: 8 }, () => import('./Module50')),
  entry({ id: 51, title: 'Advanced Passage: Natural Science', category: 'RC', description: 'In-depth analysis of a challenging natural science passage.', unit: 'Unit 14: Advanced Passages', lessonCount: 8 }, () => import('./Module51')),
  entry({ id: 52, title: 'Advanced Passage: Law & Policy', category: 'RC', description: 'In-depth analysis of a challenging law & policy passage.', unit: 'Unit 14: Advanced Passages', lessonCount: 8 }, () => import('./Module52')),
  entry({ id: 54, title: 'Advanced Passage: Art & Lit', category: 'RC', description: 'In-depth analysis of a challenging art & literature passage.', unit: 'Unit 14: Advanced Passages', lessonCount: 8 }, () => import('./Module54')),
  entry({ id: 56, title: 'Advanced Passage: Social Science', category: 'RC', description: 'In-depth analysis of a challenging social science passage.', unit: 'Unit 14: Advanced Passages', lessonCount: 8 }, () => import('./Module56')),
  entry({ id: 57, title: 'Advanced Passage: Economics', category: 'RC', description: 'In-depth analysis of a challenging economics passage.', unit: 'Unit 14: Advanced Passages', lessonCount: 8 }, () => import('./Module57')),
  entry({ id: 58, title: 'Advanced Passage: History', category: 'RC', description: 'In-depth analysis of a challenging history passage.', unit: 'Unit 14: Advanced Passages', lessonCount: 8 }, () => import('./Module58')),
  entry({ id: 48, title: 'LR Question Repository', category: 'Resources', description: 'A collection of all Logical Reasoning questions used throughout the course.', unit: 'Unit 15: Resources', lessonCount: 6 }, () => import('./Module48')),
  entry({ id: 49, title: 'RC Question Repository', category: 'Resources', description: 'A collection of all Reading Comprehension questions used throughout the course.', unit: 'Unit 15: Resources', lessonCount: 6 }, () => import('./Module49')),
  entry({ id: 53, title: 'Advanced RC Repository', category: 'Resources', description: 'A repository of advanced RC questions and passages.', unit: 'Unit 15: Resources', lessonCount: 8 }, () => import('./Module53')),
];

export function getAllModuleMetadata(): ModuleMetadata[] {
  return moduleRegistry.map((e) => e.meta);
}
