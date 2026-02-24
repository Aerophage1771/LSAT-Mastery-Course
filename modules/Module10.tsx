import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module10/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module10/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module10/Lesson3_FieldGuide';
import { Lesson4_Drill_ConceptLink } from './module10/Lesson4_Drill_ConceptLink';
import { Lesson5_Drill_ExclusivityRule } from './module10/Lesson5_Drill_ExclusivityRule';
import { Lesson6_Drill_BinaryAssumption } from './module10/Lesson6_Drill_BinaryAssumption';
import { Lesson7_Drill_MutuallyExclusive } from './module10/Lesson7_Drill_MutuallyExclusive';
import { Lesson8_Drill_GeneralPrinciple } from './module10/Lesson8_Drill_GeneralPrinciple';
import { Lesson9_Drill_ChainOfLogic1 } from './module10/Lesson9_Drill_ChainOfLogic1';
import { Lesson10_Drill_ChainOfLogic2 } from './module10/Lesson10_Drill_ChainOfLogic2';
import { Lesson11_Drill_EitherOrBridge } from './module10/Lesson11_Drill_EitherOrBridge';
import { Lesson12_Drill_NormativeBridge } from './module10/Lesson12_Drill_NormativeBridge';

export const Module10: ModuleData = {
  id: 10,
  title: "Sufficient Assumption",
  category: "LR",
  unit: "Unit 3: Evaluation",
  description: "Provide a premise that, when added, makes the argument 100% logically valid.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_Drill_ConceptLink,
    Lesson5_Drill_ExclusivityRule,
    Lesson6_Drill_BinaryAssumption,
    Lesson7_Drill_MutuallyExclusive,
    Lesson8_Drill_GeneralPrinciple,
    Lesson9_Drill_ChainOfLogic1,
    Lesson10_Drill_ChainOfLogic2,
    Lesson11_Drill_EitherOrBridge,
    Lesson12_Drill_NormativeBridge
  ]
};
