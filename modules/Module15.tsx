import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module15/Lesson1_Introduction';
import { Lesson2_StepByStepGuide } from './module15/Lesson2_StepByStepGuide';
import { Lesson3_FieldGuide } from './module15/Lesson3_FieldGuide';
import { Lesson4_Drill_MechanisticChain } from './module15/Lesson4_Drill_MechanisticChain';
import { Lesson5_Drill_Analogy } from './module15/Lesson5_Drill_Analogy';
import { Lesson6_Drill_ProblemAndSolution } from './module15/Lesson6_Drill_ProblemAndSolution';
import { Lesson7_Drill_PhilosophicalRebuttal } from './module15/Lesson7_Drill_PhilosophicalRebuttal';
import { Lesson8_Drill_ConditionalLogicAndParadox } from './module15/Lesson8_Drill_ConditionalLogicAndParadox';

export const Module15: ModuleData = {
  id: 15,
  title: "Fill in the Blank",
  category: "LR",
  unit: "Unit 5: Inference",
  description: "Identify the missing conclusion or premise required to complete an argument's logical structure.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepGuide,
    Lesson3_FieldGuide,
    Lesson4_Drill_MechanisticChain,
    Lesson5_Drill_Analogy,
    Lesson6_Drill_ProblemAndSolution,
    Lesson7_Drill_PhilosophicalRebuttal,
    Lesson8_Drill_ConditionalLogicAndParadox
  ]
};
