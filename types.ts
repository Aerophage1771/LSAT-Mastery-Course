
export type ContentBlock = 
  | { type: 'paragraph'; text: string }
  | { type: 'h1'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'h4'; text: string }
  | { type: 'blockquote'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'hr' }
  | { type: 'code'; text: string }
  | { type: 'callout'; title?: string; text: string; variant?: 'default' | 'summary' | 'tip' }
  | { type: 'options'; items: string[] }
  | { type: 'process'; steps: string[]; title?: string }
  | { type: 'accordion'; title: string; content: string | ContentBlock[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { 
      type: 'breakdown'; 
      labels?: { title?: string; text?: string };
      colWidth?: 'equal' | 'narrow';
      items: { 
        title: string; 
        text: string; 
        badge?: string; 
        badgeColor?: 'green' | 'red' | 'indigo' | 'slate' | 'blue';
      }[] 
    }
  | {
      type: 'question-card';
      id?: string;
      questionType?: string;
      stimulus: string;
      question: string;
      options: string[];
      difficulty?: 'easy' | 'medium' | 'hard';
      isIllustrative?: boolean;
    }
  | {
      type: 'passage-card';
      id?: string;
      title: string;
      genre?: string;
      passage: string;
      paragraphCount?: number;
      wordCount?: number;
    }
  | {
      type: 'question-passage-card';
      id?: string;
      questionType?: string;
      passageTitle: string;
      passage: string;
      question: string;
      options: string[];
      difficulty?: 'easy' | 'medium' | 'hard';
      isIllustrative?: boolean;
    };

export interface Lesson {
  id: string;
  title: string;
  content: string | ContentBlock[]; // Markdown content OR structured blocks
}

export interface ModuleData {
  id: number;
  title: string;
  category: string;
  description: string;
  unit: string;
  lessons: Lesson[];
}

export type LessonLinkageStatus = 'ok' | 'missing_q_number' | 'missing_card';

export interface LessonLinkageMeta {
  ptIds: string[];
  status: LessonLinkageStatus;
  displayTitle: string;
  statusLabel?: 'Missing Q#' | 'Missing Card';
}

export interface DrillReference {
  moduleId: number;
  lessonId: string;
  moduleTitle: string;
  lessonTitle: string;
}

export interface CourseState {
  activeModuleId: number;
  activeLessonId: string | null;
}
