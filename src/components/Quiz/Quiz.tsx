import { useEffect, useReducer } from "react";
import { getWinners } from "../../utils/api";
import { ACTION_TYPE, reducer } from "./QuizReducer";
import { getQuestions, getTotalString, isQuizDone } from "./QuizUtils";
import Question from "./Question";
import styles from "./Quiz.module.css";

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
    <div className={styles.container}>
      <p>{getTotalString(answers, questions.length)}</p>
      {quizIsDone && <button onClick={handleReplay}>Spela igen</button>}
      {!quizIsDone && (
        <div className={styles.questions}>
          {questions.map(({ name, year, alternatives }, index) => (
            <Question
              key={index}
              index={index}
              name={name}
              year={year}
              alternatives={alternatives}
              onAnswer={handleAnswer}
              isAnswered={Boolean(answers[year])}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;
