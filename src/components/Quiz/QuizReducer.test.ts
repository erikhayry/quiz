import { ACTION_TYPE, reducer, State } from "./QuizReducer";

const INITIAL_STATE: State = {
  questions: [],
};
const MOCK_QUESTION: Question = {
  winner: "Mock Winner",
  alternatives: [2010, 2014, 2020],
  answer: 2020,
};

describe("Quiz reducer", () => {
  it("actions type: fetched", () => {
    const state = reducer(INITIAL_STATE, {
      type: ACTION_TYPE.Fetched,
      questions: [MOCK_QUESTION],
    });

    expect(state).toMatchSnapshot();
  });
});
