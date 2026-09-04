export interface Subtopic {
  name: string;
  checklistKey: string;
  definition: string;
  details: string;
  keyFormulas?: string[];
  comparativeTable?: {
    headers: string[];
    rows: string[][];
  };
  examTip: string;
}

export interface TopicGroup {
  title: string;
  description: string;
  icon: string;
  subtopics: Subtopic[];
}

export interface Question {
  id: number;
  topic: string;
  level: "RICORDO" | "COMPRENSIONE" | "APPLICAZIONE" | "ANALISI";
  scenario: string;
  question: string;
  options: string[];
  answerIndex: number; // 0-based
  explanation: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "trainer" | "system";
  text: string;
  timestamp: Date;
}

/** One completed exam run, persisted so the learner can track progress. */
export interface QuizResult {
  /** Completion time, epoch milliseconds. */
  at: number;
  score: number;
  total: number;
  /** Domain ids the run covered. */
  domains: number[];
  /** Whether the run reached the 80% passing threshold. */
  passed: boolean;
}
