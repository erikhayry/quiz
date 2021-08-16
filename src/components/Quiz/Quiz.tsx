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
      {questions.map((q, index) => (
        <li key={index}>{q}</li>
      ))}
    </ul>
  );
}

export default Quiz;
