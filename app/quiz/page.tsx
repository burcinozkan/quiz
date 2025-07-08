"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { useQuiz } from "@/context/QuizContext";
import { Question as QuestionType } from "@/types/types";

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { setAnswer } = useQuiz();
  const router = useRouter();

  const currentQuestion: QuestionType = questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    setAnswer(currentQuestion.id, answer);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      router.push("/result");
    }
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
      <h2 className="text-xl font-bold mb-4">
        Soru {currentQuestionIndex + 1} / {questions.length}
      </h2>
      <p className="mb-2 text-sm text-gray-600">
        Zorluk:{" "}
        <strong>{getDifficultyLabel(currentQuestion.difficulty)}</strong>
      </p>

      <p className="text-lg mb-4">{currentQuestion.question}</p>

      <div className="flex flex-col gap-2">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
