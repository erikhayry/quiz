import { Answers } from "../../components/Quiz/QuizReducer";

export const MOCK_ANSWER_YEAR = 2000;
export const mockCorrectAnswer: Answer = {
  answer: MOCK_ANSWER_YEAR,
  year: MOCK_ANSWER_YEAR,
};
export const mockWrongAnswer: Answer = { answer: MOCK_ANSWER_YEAR, year: 2001 };
export const mockAnswers: Answers = {
  [MOCK_ANSWER_YEAR]: mockCorrectAnswer,
};
