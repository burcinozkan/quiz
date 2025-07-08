"use client";

import { createContext, useContext, useState } from "react";

interface QuizContextType {
  answers: Record<number, string>;
  setAnswer: (id: number, answer: string) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const setAnswer = (id: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [id]: answer }));
  };

  return (
    <QuizContext.Provider value={{ answers, setAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within QuizProvider");
  return context;
};
