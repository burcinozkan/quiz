"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions.mock";
import QuestionCard from "@/components/QuestionCard";

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      router.push("/result");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <QuestionCard
      question={currentQuestion}
      onNext={handleNext}
      isLast={currentQuestionIndex === questions.length - 1}
    />
  );
}
