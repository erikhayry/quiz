import { isCorrectAnswer, isWrongAnswer } from "./QuestionUtils";
import {
  MOCK_ANSWER_YEAR,
  MOCK_WRONG_ANSWER_YEAR,
  mockCorrectAnswer,
  mockWrongAnswer,
} from "../../test-data/mocks/answer";

describe("Questions utils", () => {
  describe("isCorrectAnswer", () => {
    it("checks if current is has a correct answer", () => {
      expect(isCorrectAnswer(mockCorrectAnswer, MOCK_ANSWER_YEAR)).toBeTruthy();
      expect(isCorrectAnswer(mockWrongAnswer, MOCK_ANSWER_YEAR)).toBeFalsy();
    });
  });
  describe("isWrongAnswer", () => {
    it("checks if current is has a correct answer", () => {
      expect(
        isWrongAnswer(mockWrongAnswer, MOCK_WRONG_ANSWER_YEAR)
      ).toBeTruthy();
      expect(
        isWrongAnswer(mockCorrectAnswer, MOCK_WRONG_ANSWER_YEAR)
      ).toBeFalsy();
    });
  });
});
