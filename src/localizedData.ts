import { TopicGroup, Subtopic, Question } from "./types";
import {
  DOMAIN_1_TOPICS,
  DOMAIN_2_TOPICS,
  DOMAIN_3_TOPICS,
  DOMAIN_4_TOPICS,
  DOMAIN_5_TOPICS,
  DOMAIN_1_QUESTIONS,
  DOMAIN_2_QUESTIONS,
  DOMAIN_3_QUESTIONS,
  DOMAIN_4_QUESTIONS,
  DOMAIN_5_QUESTIONS,
} from "./data";
import { GROUP_EN, SUBTOPIC_EN, QUESTION_EN } from "./data.en";
import type { Lang } from "./i18n";

const IT_TOPICS: Record<number, TopicGroup[]> = {
  1: DOMAIN_1_TOPICS,
  2: DOMAIN_2_TOPICS,
  3: DOMAIN_3_TOPICS,
  4: DOMAIN_4_TOPICS,
  5: DOMAIN_5_TOPICS,
};

const IT_QUESTIONS: Record<number, Question[]> = {
  1: DOMAIN_1_QUESTIONS,
  2: DOMAIN_2_QUESTIONS,
  3: DOMAIN_3_QUESTIONS,
  4: DOMAIN_4_QUESTIONS,
  5: DOMAIN_5_QUESTIONS,
};

/* ------------------------------------------------------------------ *
 * Per-language memoized caches so the overlay work happens once.
 * ------------------------------------------------------------------ */

const topicsCache: Partial<Record<Lang, Record<number, TopicGroup[]>>> = {};
const questionsCache: Partial<Record<Lang, Record<number, Question[]>>> = {};

type SubtopicOverrides = Record<string, (typeof SUBTOPIC_EN)[number][string] | undefined>;
type QuestionOverrides = Record<number, (typeof QUESTION_EN)[number][number] | undefined>;

function localizeSubtopic(sub: Subtopic, subOverrides: SubtopicOverrides): Subtopic {
  const o = subOverrides[sub.checklistKey];
  if (!o) return sub;
  return {
    ...sub,
    name: o.name ?? sub.name,
    definition: o.definition ?? sub.definition,
    details: o.details ?? sub.details,
    examTip: o.examTip ?? sub.examTip,
    keyFormulas: o.keyFormulas ?? sub.keyFormulas,
    comparativeTable: o.comparativeTable ?? sub.comparativeTable,
  };
}

function localizeGroup(group: TopicGroup, subOverrides: SubtopicOverrides): TopicGroup {
  const g = GROUP_EN[group.title];
  return {
    ...group,
    title: g?.title ?? group.title,
    description: g?.description ?? group.description,
    subtopics: group.subtopics.map((s) => localizeSubtopic(s, subOverrides)),
  };
}

function localizeQuestion(q: Question, qOverrides: QuestionOverrides): Question {
  const o = qOverrides[q.id];
  if (!o) return q;
  return {
    ...q,
    topic: o.topic ?? q.topic,
    scenario: o.scenario ?? q.scenario,
    question: o.question ?? q.question,
    options: o.options ?? q.options,
    explanation: o.explanation ?? q.explanation,
  };
}

/** Localized topic groups for a domain. Italian is the source of truth. */
export function getDomainTopics(domainId: number, lang: Lang): TopicGroup[] {
  const it = IT_TOPICS[domainId] || [];
  if (lang === "it") return it;
  const cache = (topicsCache[lang] ??= {});
  if (!cache[domainId]) {
    // English subtopic overrides are scoped per domain because checklistKeys
    // are not globally unique across domains.
    const subOverrides = SUBTOPIC_EN[domainId] || {};
    cache[domainId] = it.map((g) => localizeGroup(g, subOverrides));
  }
  return cache[domainId];
}

/** Localized questions for a domain. Italian is the source of truth. */
export function getDomainQuestions(domainId: number, lang: Lang): Question[] {
  const it = IT_QUESTIONS[domainId] || [];
  if (lang === "it") return it;
  const cache = (questionsCache[lang] ??= {});
  if (!cache[domainId]) {
    // English question overrides are scoped per domain because question ids
    // are reused across domains in the Italian source.
    const qOverrides = QUESTION_EN[domainId] || {};
    cache[domainId] = it.map((q) => localizeQuestion(q, qOverrides));
  }
  return cache[domainId];
}

/** All localized topic groups keyed by domain id. */
export function getAllTopics(lang: Lang): Record<number, TopicGroup[]> {
  return {
    1: getDomainTopics(1, lang),
    2: getDomainTopics(2, lang),
    3: getDomainTopics(3, lang),
    4: getDomainTopics(4, lang),
    5: getDomainTopics(5, lang),
  };
}

/** All localized questions concatenated (Domain 1..5), like INITIAL_QUESTIONS. */
export function getInitialQuestions(lang: Lang): Question[] {
  return [
    ...getDomainQuestions(1, lang),
    ...getDomainQuestions(2, lang),
    ...getDomainQuestions(3, lang),
    ...getDomainQuestions(4, lang),
    ...getDomainQuestions(5, lang),
  ];
}
