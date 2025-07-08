import { Question } from "@/types";

export const questions: Question[] = [
  {
    id: 1,
    question: "JavaScript'te '===' neyi kontrol eder?",
    options: ["Sadece değer", "Sadece tip", "Değer ve tip", "Tanımsızlık"],
    correctAnswer: "Değer ve tip",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "`typeof null` çıktısı nedir?",
    options: ["null", "undefined", "object", "boolean"],
    correctAnswer: "object",
    difficulty: "medium",
  },
  {
    id: 3,
    question: "`const` ile tanımlanan değişkenin özelliği nedir?",
    options: [
      "Tekrar atanabilir",
      "Blok scope değildir",
      "Değeri değiştirilemez",
      "Function hoisting yapar",
    ],
    correctAnswer: "Değeri değiştirilemez",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "`setTimeout` nedir?",
    options: [
      "Senkron fonksiyon",
      "Asenkron zamanlayıcı",
      "CSS özelliği",
      "Array metodu",
    ],
    correctAnswer: "Asenkron zamanlayıcı",
    difficulty: "medium",
  },
  {
    id: 5,
    question: "JavaScript’te ‘closure’ nedir?",
    options: ["Fonksiyon scope", "Class", "Object", "Callback"],
    correctAnswer: "Fonksiyon scope",
    difficulty: "hard",
  },
  {
    id: 6,
    question: "`map()` metodunun görevi nedir?",
    options: [
      "Filtreleme",
      "Diziyi değiştirme",
      "Yeni dizi oluşturmak",
      "Boş dizi döndürmek",
    ],
    correctAnswer: "Yeni dizi oluşturmak",
    difficulty: "medium",
  },
  {
    id: 7,
    question: "JavaScript'te `NaN === NaN` sonucu nedir?",
    options: ["true", "false", "undefined", "error"],
    correctAnswer: "false",
    difficulty: "hard",
  },
  {
    id: 8,
    question: "JavaScript'te hangi değer **falsy** değildir?",
    options: ["0", "''", "null", "'false'"],
    correctAnswer: "'false'",
    difficulty: "easy",
  },
  {
    id: 9,
    question: "Promise hangi durumda `.catch()` çalıştırır?",
    options: [
      "resolve edildiğinde",
      "timeout bittiğinde",
      "error throw edildiğinde",
      "await kullanıldığında",
    ],
    correctAnswer: "error throw edildiğinde",
    difficulty: "hard",
  },
  {
    id: 10,
    question: "`==` ve `===` farkı nedir?",
    options: [
      "Aynı şey",
      "=== sadece sayılarda çalışır",
      "`==` tür dönüşümü yapar",
      "`==` daha katıdır",
    ],
    correctAnswer: "`==` tür dönüşümü yapar",
    difficulty: "medium",
  },
];
