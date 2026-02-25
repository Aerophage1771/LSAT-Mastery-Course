import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module13/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module13/Lesson2_StepByStepGuide';
import { Lesson3_Drill_DirectApplication } from './module13/Lesson3_Drill_DirectApplication';
import { Lesson4_Drill_ContrapositiveApplication } from './module13/Lesson4_Drill_ContrapositiveApplication';
import { Lesson5_Drill_DefinitionalChecklist } from './module13/Lesson5_Drill_DefinitionalChecklist';
import { Lesson6_Drill_AdvancedApplication } from './module13/Lesson6_Drill_AdvancedApplication';
import { Lesson7_ReferenceGuide } from './module13/Lesson7_ReferenceGuide';


export const Module13: ModuleData = {
  id: 13,
  title: "Principle - Apply",
  category: "LR",
  unit: "Unit 4: Principle",
  description: "Find the specific case that perfectly follows the logic of a given rule.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_Drill_DirectApplication,
    Lesson4_Drill_ContrapositiveApplication,
    Lesson5_Drill_DefinitionalChecklist,
    Lesson6_Drill_AdvancedApplication,
    Lesson7_ReferenceGuide
  ]
};