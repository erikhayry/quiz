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
  const quizIsDone = isQuizDone(questions, answers);

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

  function handleReplay() {
    dispatch({ type: ACTION_TYPE.Replay });
  }

  return (
    <div>
      <p>
        {Object.values(answers).reduce(countNumberOfRightAnswers, 0)} /
        {questions.length}
      </p>
      {quizIsDone && <button onClick={handleReplay}>Spela igen</button>}
      {!quizIsDone && (
        <div>
          {questions.map(({ name, year, alternatives }, index) => (
            <fieldset key={index} disabled={Boolean(answers[year])}>
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
