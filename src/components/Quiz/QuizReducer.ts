export enum ACTION_TYPE {
  Fetched = "fetched",
  Answer = "answer",
  Replay = "replay",
}

type ACTION =
  | { type: ACTION_TYPE.Fetched; questions: Question[] }
  | { type: ACTION_TYPE.Answer; answer: number; year: number }
  | { type: ACTION_TYPE.Replay };

export type Answers = Record<number, Answer>;

export interface State {
  questions: Question[];
  answers: Answers;
}

export function reducer(state: State, action: ACTION): State {
  switch (action.type) {
    case ACTION_TYPE.Fetched: {
      return {
        ...state,
        questions: action.questions,
      };
    }
    case ACTION_TYPE.Answer: {
      const { year, answer } = action;
      const { answers } = state;

      answers[year] = {
        year,
        answer,
      };

      return { ...state, answers };
    }

    case ACTION_TYPE.Replay: {
      return {
        ...state,
        answers: {},
      };
    }
  }
  return state;
}
