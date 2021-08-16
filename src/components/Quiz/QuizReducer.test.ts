import { ACTION_TYPE, reducer, State } from "./QuizReducer";
import { getMockQuestions } from "../../test-data/mocks/question";

const INITIAL_STATE: State = {
  questions: [],
  answers: {},
};

describe("Quiz reducer", () => {
  it("actions type: fetched", () => {
    const state = reducer(INITIAL_STATE, {
      type: ACTION_TYPE.Fetched,
      questions: getMockQuestions(),
    });

    expect(state).toMatchSnapshot();
  });

  it("actions type: answer", () => {
    const state = reducer(INITIAL_STATE, {
      type: ACTION_TYPE.Answer,
      year: 2020,
      answer: 2020,
    });

    expect(state.answers[2020]).toEqual({
      year: 2020,
      answer: 2020,
    });

    const updatedState = reducer(state, {
      type: ACTION_TYPE.Answer,
      year: 2020,
      answer: 2021,
    });

    expect(updatedState.answers[2020]).toEqual({
      year: 2020,
      answer: 2021,
    });
  });
});
