import { QUIZ_LENGTH } from "../../utils/config";

export const DEFAULT_MOCK_WINNER: Winner = {
  name: "Mock Winner",
  year: 2000,
};

export function getMockWinners(): Winner[] {
  return new Array(QUIZ_LENGTH).fill("").map((_, index) => ({
    name: `Mock Winner ${index}`,
    year: 2000 + index,
  }));
}
