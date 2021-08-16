export enum ACTION_TYPE {
  Fetched = "fetched",
}

type ACTION = { type: ACTION_TYPE.Fetched; questions: Question[] };

export interface State {
  questions: Question[];
}

export function reducer(state: State, action: ACTION): State {
  switch (action.type) {
    case ACTION_TYPE.Fetched: {
      return {
        ...state,
        questions: action.questions,
      };
    }
  }
  return { questions: [] };
}
