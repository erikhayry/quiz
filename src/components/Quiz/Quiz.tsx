import { useEffect, useReducer } from "react";
import { getWinners } from "../../utils/api";
import { ACTION_TYPE, reducer } from "./QuizReducer";
import {
  countNumberOfRightAnswers,
  getQuestions,
  isQuizDone,
} from "./QuizUtils";

function Quiz() {
  const [{ questions, answers }, dispatch] = useReducer(reducer, {
    questions: [],
    answers: {},
  });

  useEffect(() => {
    async function fetch() {
      const winners = await getWinners();
      dispatch({ type: ACTION_TYPE.Fetched, questions: getQuestions(winners) });
    }

    fetch();
  }, []);

  function handleAnswer(year: number, answer: number) {
    dispatch({ type: ACTION_TYPE.Answer, year, answer });
  }

  return (
    <div>
      <p>
        {Object.values(answers).reduce(countNumberOfRightAnswers, 0)} /
        {questions.length}
      </p>
      {!isQuizDone(questions, answers) && (
        <div>
          {questions.map(({ name, year, alternatives }, index) => (
            <fieldset key={index}>
              <legend>{name}</legend>
              <>
                {alternatives.map((alternative, index) => (
                  <div key={index}>
                    <input
                      id={`${name}-${alternative}`}
                      type="radio"
                      name={name}
                      value={alternative}
                      onClick={() => {
                        handleAnswer(year, alternative);
                      }}
                    />
                    <label htmlFor={`${name}-${alternative}`}>
                      {alternative}
                    </label>
                  </div>
                ))}
              </>
            </fieldset>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;
