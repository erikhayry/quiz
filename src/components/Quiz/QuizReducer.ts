export enum ACTION_TYPE {
  Fetched = "fetched",
  Answer = "answer",
}

type ACTION =
  | { type: ACTION_TYPE.Fetched; questions: Question[] }
  | { type: ACTION_TYPE.Answer; answer: number; year: number };

export interface State {
  questions: Question[];
  answers: Record<number, Answer>;
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
  }
  return state;
}
