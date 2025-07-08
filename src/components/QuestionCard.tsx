"use client";

import { Question } from "@/types";
import { useQuiz } from "@/context/QuizContext";

interface QuestionCardProps {
  question: Question;
  onNext: () => void;
  isLast: boolean;
}

export default function QuestionCard({
  question,
  onNext,
  isLast,
}: QuestionCardProps) {
  const { setAnswer } = useQuiz();

  const handleAnswer = (option: string) => {
    setAnswer(question.id, option);
    onNext();
  };

  const getDifficultyLabel = (level: string) => {
    switch (level) {
      case "easy":
        return "Kolay";
      case "medium":
        return "Orta";
      case "hard":
        return "Zor";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <p className="text-sm text-gray-600 mb-1">
        Zorluk: <strong>{getDifficultyLabel(question.difficulty)}</strong>
      </p>
      <p className="text-lg font-semibold mb-4">{question.question}</p>

      <div className="flex flex-col gap-2">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
