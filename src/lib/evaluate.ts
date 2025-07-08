import { Question, Difficulty } from "@/types";

export type ResultByDifficulty = {
  [key in Difficulty]: {
    total: number;
    correct: number;
  };
};

export function evaluateAnswers(
  questions: Question[],
  answers: Record<number, string>
) {
  let correctCount = 0;
  const difficultyStats: ResultByDifficulty = {
    easy: { total: 0, correct: 0 },
    medium: { total: 0, correct: 0 },
    hard: { total: 0, correct: 0 },
  };

  for (const q of questions) {
    const userAnswer = answers[q.id];
    const isCorrect = userAnswer === q.correctAnswer;

    const difficulty = q.difficulty as keyof ResultByDifficulty;
    difficultyStats[difficulty].total += 1;
    if (isCorrect) {
      correctCount++;
      difficultyStats[difficulty].correct++;
    }
  }

  const percentage = Math.round((correctCount / questions.length) * 100);
  const level = getLevel(percentage);

  return {
    correctCount,
    percentage,
    level,
    difficultyStats,
  };
}

export function getLevel(percent: number) {
  if (percent >= 80) return "Uzman";
  if (percent >= 50) return "Orta Seviye";
  return "Başlangıç";
}
