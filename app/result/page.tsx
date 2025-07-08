"use client";

import { useQuiz } from "@/context/QuizContext";
import { questions } from "@/data/questions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const difficulties = ["easy", "medium", "hard"] as const;
type Difficulty = (typeof difficulties)[number];

interface ResultByDifficulty {
  easy: { total: number; correct: number };
  medium: { total: number; correct: number };
  hard: { total: number; correct: number };
}

export default function ResultPage() {
  const { answers } = useQuiz();
  const router = useRouter();

  const isCorrect = (questionId: number, correct: string) => {
    return answers[questionId] === correct;
  };

  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [byDifficulty, setByDifficulty] = useState<ResultByDifficulty>({
    easy: { total: 0, correct: 0 },
    medium: { total: 0, correct: 0 },
    hard: { total: 0, correct: 0 },
  });

  useEffect(() => {
    let correctCount = 0;
    const difficultyStats: ResultByDifficulty = {
      easy: { total: 0, correct: 0 },
      medium: { total: 0, correct: 0 },
      hard: { total: 0, correct: 0 },
    };

    questions.forEach((q) => {
      const difficulty = q.difficulty as Difficulty;
      difficultyStats[difficulty].total += 1;
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
        difficultyStats[difficulty].correct++;
      }
    });

    setScore(correctCount);
    setPercentage(Math.round((correctCount / questions.length) * 100));
    setByDifficulty(difficultyStats);
  }, [answers]);

  const getLevel = (percent: number) => {
    if (percent >= 80) return "Uzman";
    if (percent >= 50) return "Orta Seviye";
    return "Başlangıç";
  };

  const handleRetry = () => {
    router.push("/quiz");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Sonuçlar</h2>

      <p className="mb-2">
        Toplam doğru:{" "}
        <strong>
          {score} / {questions.length}
        </strong>
      </p>
      <p className="mb-2">
        Başarı oranı: <strong>%{percentage}</strong>
      </p>
      <p className="mb-4">
        Genel Seviye: <strong>{getLevel(percentage)}</strong>
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Zorluk Bazlı Başarı:</h3>
      <ul className="list-disc pl-5">
        {difficulties.map((level) => (
          <li key={level}>
            <strong>{level}</strong>: {byDifficulty[level].correct} /{" "}
            {byDifficulty[level].total} doğru
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">Soru İncelemesi:</h3>

      <div className="flex flex-col gap-4">
        {questions.map((q) => {
          const userAnswer = answers[q.id];
          const correct = q.correctAnswer;
          const correctStatus = isCorrect(q.id, correct);

          return (
            <div
              key={q.id}
              className={`border rounded p-4 ${
                correctStatus
                  ? "border-green-500 bg-green-50"
                  : "border-red-500 bg-red-50"
              }`}
            >
              <p className="font-medium">{q.question}</p>
              <p>
                Senin cevabın:{" "}
                <span
                  className={correctStatus ? "text-green-700" : "text-red-700"}
                >
                  {userAnswer || "Cevaplanmadı"}
                </span>
              </p>
              {!correctStatus && (
                <p>
                  Doğru cevap: <span className="text-green-700">{correct}</span>
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={handleRetry}
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Tekrar Dene
      </button>
    </div>
  );
}
