export interface DrillReference {
  moduleId: number;
  lessonId: string;
  moduleTitle: string;
  lessonTitle: string;
}

export const drillCrossReferences: Record<string, DrillReference> = {};
