import { useEffect, useMemo, useReducer } from "react";
import { getWinners } from "../../utils/api";
import { ACTION_TYPE, reducer } from "./QuizReducer";
import { getQuestions, getTotalString, isQuizDone } from "./QuizUtils";
import Question from "./Question";
import styles from "./Quiz.module.css";
import { shuffleArray } from "../../utils";

function Quiz() {
  const [{ questions, answers }, dispatch] = useReducer(reducer, {
    questions: [],
    answers: {},
  });
  const quizIsDone = isQuizDone(questions, answers);
  const total = getTotalString(answers, questions.length);
  const shuffledQuestions = useMemo(() => shuffleArray(questions), [questions]);

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
      {quizIsDone && (
        <>
          <h1>Klar!</h1>
          <p>Du fick {total} poäng</p>
          <button onClick={handleReplay}>Spela igen</button>
        </>
      )}
      {!quizIsDone && (
        <>
          <h1>Vilket år vann personen / organisationen Nobels fredspris?</h1>
          <div className={styles.questions}>
            {shuffledQuestions.map(({ name, year, alternatives }, index) => (
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
          <p className={styles.points}>Poäng: {total}</p>
        </>
      )}
    </div>
  );
}

export default Quiz;
