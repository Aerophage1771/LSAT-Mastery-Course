import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module10/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module10/Lesson2_StepByStepGuide';
import { Lesson3_Drill_ConceptLink } from './module10/Lesson3_Drill_ConceptLink';
import { Lesson4_Drill_ExclusivityRule } from './module10/Lesson4_Drill_ExclusivityRule';
import { Lesson5_Drill_BinaryAssumption } from './module10/Lesson5_Drill_BinaryAssumption';
import { Lesson6_Drill_MutuallyExclusive } from './module10/Lesson6_Drill_MutuallyExclusive';
import { Lesson7_Drill_GeneralPrinciple } from './module10/Lesson7_Drill_GeneralPrinciple';
import { Lesson8_Drill_ChainOfLogic1 } from './module10/Lesson8_Drill_ChainOfLogic1';
import { Lesson9_Drill_ChainOfLogic2 } from './module10/Lesson9_Drill_ChainOfLogic2';
import { Lesson10_Drill_EitherOrBridge } from './module10/Lesson10_Drill_EitherOrBridge';
import { Lesson11_Drill_NormativeBridge } from './module10/Lesson11_Drill_NormativeBridge';
import { Lesson12_ReferenceGuide } from './module10/Lesson12_ReferenceGuide';

export const Module10: ModuleData = {
  id: 10,
  title: "Sufficient Assumption",
  category: "LR",
  unit: "Unit 3: Evaluation",
  description: "Provide a premise that, when added, makes the argument 100% logically valid.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_ConceptLink,
    Lesson4_Drill_ExclusivityRule,
    Lesson5_Drill_BinaryAssumption,
    Lesson6_Drill_MutuallyExclusive,
    Lesson7_Drill_GeneralPrinciple,
    Lesson8_Drill_ChainOfLogic1,
    Lesson9_Drill_ChainOfLogic2,
    Lesson10_Drill_EitherOrBridge,
    Lesson11_Drill_NormativeBridge,
    Lesson12_ReferenceGuide
  ]
};
