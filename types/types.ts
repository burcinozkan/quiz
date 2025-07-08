//tip tanimlamalari
export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: Difficulty;
}
