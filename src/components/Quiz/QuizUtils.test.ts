import { getAnswerAlternatives, getQuestions } from "./QuizUtils";

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
    const MOCK_WINNERS: Winner[] = [];
    it("build questions form winners data", () => {
      const questions = getQuestions(MOCK_WINNERS);

      expect(questions.length).toEqual(MOCK_WINNERS.length);
    });
  });
});
