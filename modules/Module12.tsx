import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module12/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module12/Lesson2_StepByStepGuide';
import { Lesson3_Drill_NormativeBridge } from './module12/Lesson3_Drill_NormativeBridge';
import { Lesson4_Drill_EfficiencyPrinciple } from './module12/Lesson4_Drill_EfficiencyPrinciple';
import { Lesson5_Drill_AccountabilityPrinciple } from './module12/Lesson5_Drill_AccountabilityPrinciple';
import { Lesson6_Drill_LesserOfTwoEvils } from './module12/Lesson6_Drill_LesserOfTwoEvils';
import { Lesson7_ReferenceGuide } from './module12/Lesson7_ReferenceGuide';

export const Module12: ModuleData = {
  id: 12,
  title: "Principle-Strengthen",
  category: "LR",
  unit: "Unit 4: Principle",
  description: "Find the general rule that, if valid, strengthens the argument's reasoning.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_NormativeBridge,
    Lesson4_Drill_EfficiencyPrinciple,
    Lesson5_Drill_AccountabilityPrinciple,
    Lesson6_Drill_LesserOfTwoEvils,
    Lesson7_ReferenceGuide,
  ]
};
