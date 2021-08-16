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
    <div>
      {questions.map(({ winner, alternatives }, index) => (
        <fieldset key={index}>
          <legend>{winner}</legend>
          <div>
            {alternatives.map((alternative, index) => (
              <div>
                <input
                  id={`${winner}-${alternative}`}
                  type="radio"
                  name={winner}
                  value={alternative}
                />
                <label htmlFor={`${winner}-${alternative}`}>
                  {alternative}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
}

export default Quiz;
