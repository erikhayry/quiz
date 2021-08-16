import { Answers } from "../../components/Quiz/QuizReducer";

export const MOCK_ANSWER_YEAR = 2000;
export const MOCK_WRONG_ANSWER_YEAR = 2001;
export const mockCorrectAnswer: Answer = {
  suggestion: MOCK_ANSWER_YEAR,
  year: MOCK_ANSWER_YEAR,
};
export const mockWrongAnswer: Answer = {
  suggestion: MOCK_WRONG_ANSWER_YEAR,
  year: MOCK_ANSWER_YEAR,
};
export const mockAnswers: Answers = {
  [MOCK_ANSWER_YEAR]: mockCorrectAnswer,
};
