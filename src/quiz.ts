import type { Question, QuizResult } from "./types";

/** Passing threshold for the exam simulator, as a fraction of the total. */
export const PASS_RATIO = 0.8;

/** Seconds allotted per question when the exam timer is enabled. */
export const SECONDS_PER_QUESTION = 120;

/** How many past runs to keep in the local history. */
export const HISTORY_LIMIT = 20;

/** Formats a number of seconds as mm:ss, clamped at zero. */
export function formatClock(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

/**
 * Fisher-Yates shuffle.
 *
 * `[...arr].sort(() => Math.random() - 0.5)` is the tempting one-liner, but
 * `Array.prototype.sort` assumes a consistent, transitive comparator. A random
 * one is neither, so the result is not a uniform permutation: elements stay
 * close to where they started and an exam simulator keeps asking the same
 * questions.
 */
export function shuffle<T>(arr: readonly T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Whether a score clears the passing threshold for a run of `total` questions. */
export function hasPassedRun(score: number, total: number): boolean {
  return total > 0 && score >= total * PASS_RATIO;
}

/** Score as a rounded percentage; 0 for an empty run. */
export function scorePercent(score: number, total: number): number {
  return total > 0 ? Math.round((score / total) * 100) : 0;
}

/** Prepends a run to the history, keeping it capped at HISTORY_LIMIT entries. */
export function appendHistory(history: QuizResult[], entry: QuizResult): QuizResult[] {
  return [entry, ...history].slice(0, HISTORY_LIMIT);
}

/** Ids of questions in `questions` that have no entry in `answers`. */
export function unansweredIds(
  questions: readonly Question[],
  answers: Record<number, number>
): number[] {
  return questions.filter((q) => !(q.id in answers)).map((q) => q.id);
}
