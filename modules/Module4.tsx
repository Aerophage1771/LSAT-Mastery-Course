import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module4/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module4/Lesson2_StepByStepGuide';
import { Lesson3_CommonArgumentStructures } from './module4/Lesson3_CommonArgumentStructures';
import { Lesson4_TheConditionalChain } from './module4/Lesson4_TheConditionalChain';
import { Lesson5_TheEliminativeArgument } from './module4/Lesson5_TheEliminativeArgument';
import { Lesson6_ThePrincipleApplication } from './module4/Lesson6_ThePrincipleApplication';
import { Lesson7_TheQuantifierArgument } from './module4/Lesson7_TheQuantifierArgument';
import { Lesson8_AdvancedConcepts } from './module4/Lesson8_AdvancedConcepts';
import { Lesson9_Advanced_ConditionalChains } from './module4/Lesson9_Advanced_ConditionalChains';
import { Lesson10_Advanced_StatisticalRebuttal } from './module4/Lesson10_Advanced_StatisticalRebuttal';
import { Lesson11_Advanced_CorrelationalRule } from './module4/Lesson11_Advanced_CorrelationalRule';
import { Lesson12_ReferenceGuide } from './module4/Lesson12_ReferenceGuide';

export const Module4: ModuleData = {
  id: 4,
  title: "Parallel Reasoning",
  category: "LR",
  unit: "Unit 2: Analysis",
  description: "Identify an argument's pattern. Then find an answer choice that follows the exact same logical structure.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_CommonArgumentStructures,
    Lesson4_TheConditionalChain,
    Lesson5_TheEliminativeArgument,
    Lesson6_ThePrincipleApplication,
    Lesson7_TheQuantifierArgument,
    Lesson8_AdvancedConcepts,
    Lesson9_Advanced_ConditionalChains,
    Lesson10_Advanced_StatisticalRebuttal,
    Lesson11_Advanced_CorrelationalRule,
    Lesson12_ReferenceGuide,
  ]
};
