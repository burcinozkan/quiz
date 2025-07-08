"use client";

import { Question } from "@/types";
import { useQuiz } from "@/context/QuizContext";

interface ResultCardProps {
  question: Question;
}

export default function ResultCard({ question }: ResultCardProps) {
  const { answers } = useQuiz();
  const userAnswer = answers[question.id];
  const isCorrect = userAnswer === question.correctAnswer;

  return (
    <div
      className={`border rounded p-4 ${
        isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
      }`}
    >
      <p className="font-medium">{question.question}</p>
      <p>
        Senin cevabın:{" "}
        <span className={isCorrect ? "text-green-700" : "text-red-700"}>
          {userAnswer || "Cevaplanmadı"}
        </span>
      </p>
      {!isCorrect && (
        <p>
          Doğru cevap:{" "}
          <span className="text-green-700">{question.correctAnswer}</span>
        </p>
      )}
    </div>
  );
}
