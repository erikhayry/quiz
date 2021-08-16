import { QUIZ_LENGTH } from "../../utils/config";

export const mockQuestion: Question = {
  name: "Mock winner",
  year: 2000,
  alternatives: [2000, 2001, 2002],
};

export function getMockQuestions(): Question[] {
  return new Array(QUIZ_LENGTH).fill("").map((_, index) => ({
    name: `Mock Winner ${index}`,
    alternatives: [2000 + index, 2000 + index + 1, 2000 + index + 2],
    year: 2000 + index,
  }));
}
