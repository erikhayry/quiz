import { QUIZ_LENGTH } from "../../utils/config";

export function getMockWinners(): Winner[] {
  return new Array(QUIZ_LENGTH).fill("").map((_, index) => ({
    name: `Mock Winner ${index}`,
    year: 2000 + index,
  }));
}
