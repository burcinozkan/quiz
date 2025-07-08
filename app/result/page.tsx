"use client";

import { useRouter } from "next/navigation";
import ResultCard from "@/components/ResultCard";
import { questions } from "@/data/questions.mock";
import { evaluateAnswers } from "@/lib/evaluate";
import { useQuiz } from "@/context/QuizContext";

const difficulties = ["easy", "medium", "hard"] as const;

export default function ResultPage() {
  const { answers } = useQuiz();
  const router = useRouter();

  const { correctCount, percentage, level, difficultyStats } = evaluateAnswers(
    questions,
    answers
  );

  const handleRetry = () => {
    router.push("/quiz");
  };

  const getLabel = (diff: string) => {
    switch (diff) {
      case "easy":
        return "Kolay";
      case "medium":
        return "Orta";
      case "hard":
        return "Zor";
      default:
        return diff;
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sonuçlar</h1>

      <p className="mb-2">
        Toplam doğru:{" "}
        <strong>
          {correctCount} / {questions.length}
        </strong>
      </p>

      <p className="mb-2">
        Başarı oranı: <strong>%{percentage}</strong>
      </p>

      <p className="mb-4">
        Genel Seviye: <strong>{level}</strong>
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Zorluk Bazlı Başarı:</h3>
      <ul className="list-disc pl-5 text-sm text-gray-700">
        {difficulties.map((diff) => {
          const { total, correct } = difficultyStats[diff];
          const rate = total > 0 ? Math.round((correct / total) * 100) : 0;
          return (
            <li key={diff}>
              <strong>{getLabel(diff)}</strong>: {correct} / {total} doğru (%
              {rate})
            </li>
          );
        })}
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">Soru İncelemesi:</h3>
      <div className="flex flex-col gap-4">
        {questions.map((q) => (
          <ResultCard key={q.id} question={q} />
        ))}
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
