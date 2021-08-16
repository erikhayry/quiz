import { useEffect, useReducer } from "react";
import { getWinners } from "../../utils/api";
import { ACTION_TYPE, reducer } from "./QuizReducer";
import { getQuestions } from "./QuizUtils";

function Quiz() {
  const [{ questions }, dispatch] = useReducer(reducer, { questions: [] });

  useEffect(() => {
    async function fetch() {
      const winners = await getWinners();
      dispatch({ type: ACTION_TYPE.Fetched, questions: getQuestions(winners) });
    }

    fetch();
  }, []);

  return (
    <ul>
      {questions.map(({ winner, alternatives }, index) => (
        <li key={index}>
          <h2>{winner}</h2>
          <ul>
            {alternatives.map((alternative, index) => (
              <li key={index}>{alternative}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default Quiz;
