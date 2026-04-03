import { ModuleData } from '../types';
import { Lesson1_Introduction } from './module32/Lesson1_Introduction';
import { Lesson2_StepByStepApproach } from './module32/Lesson2_StepByStepApproach';

export const Module32: ModuleData = {
  id: 32,
  title: "Third-Party Viewpoint",
  category: "RC",
  unit: "Unit 10: Identifying the Perspectives",
  description: "Identify the specific belief, argument, or perspective of a person or group mentioned in the passage who is not the author.",
  lessons: [
    Lesson1_Introduction,
    Lesson2_StepByStepApproach
  ]
};
