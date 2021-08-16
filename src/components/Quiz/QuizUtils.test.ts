import {
  countNumberOfRightAnswers,
  getAnswerAlternatives,
  getQuestions,
  isQuizDone,
} from "./QuizUtils";
import { getMockWinners } from "../../test-data/mocks/winner";
import { QUIZ_LENGTH } from "../../utils/config";
import { getMockQuestions, mockQuestion } from "../../test-data/mocks/question";

describe("Quiz utils", () => {
  describe("getAnswerAlternatives", () => {
    it("returns alternatives", () => {
      const alternatives = getAnswerAlternatives(2010);

      expect(alternatives.includes(2010)).toBeTruthy();
      expect(alternatives.length).toEqual(3);
      expect(new Set(alternatives).size).toEqual(3);
    });
  });

  describe("getQuestions", () => {
    it("build questions from winners", () => {
      const winners = getMockWinners();
      const questions = getQuestions(getMockWinners());

      expect(questions.length).toEqual(QUIZ_LENGTH);
      expect(questions[0].name).toEqual(winners[0].name);
      expect(questions[0].year).toEqual(winners[0].year);
      expect(
        questions[0].alternatives.includes(questions[0].year)
      ).toBeTruthy();
    });
  });

  describe("countNumberOfRightAnswers", () => {
    it("count number of correct answers", () => {
      expect(
        countNumberOfRightAnswers(5, { answer: 2020, year: 2020 })
      ).toEqual(6);
      expect(
        countNumberOfRightAnswers(5, { answer: 2019, year: 2020 })
      ).toEqual(5);
    });
  });

  describe("isQuizDone", () => {
    it("returns false when questions are unanswered", () => {
      expect(isQuizDone(getMockQuestions(), {})).toBeFalsy();
    });

    it("returns true when all questions are answered", () => {
      expect(
        isQuizDone([mockQuestion], { 2000: { answer: 2000, year: 2000 } })
      ).toBeTruthy();
    });
  });
});
