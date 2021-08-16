import { getAnswerAlternatives, getQuestions } from "./QuizUtils";
import { getMockWinners } from "../../test/mocks/winner";

describe("quiz", () => {
  describe("getAnswerAlternatives", () => {
    it("returns alternatives", () => {
      const alternatives = getAnswerAlternatives(2010);

      expect(alternatives.includes(2010)).toBeTruthy();
      expect(alternatives.length).toEqual(3);
      expect(new Set(alternatives).size).toEqual(3);
    });
  });

  describe("getQuestions", () => {
    it("build questions form winners", () => {
      const questions = getQuestions(getMockWinners());

      expect(questions.length).toMatchSnapshot();
    });
  });
});
