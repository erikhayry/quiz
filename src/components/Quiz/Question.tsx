import styles from "./Question.module.css";
import a11y from "../../styling/a11y.module.css";
import classNames from "classnames";
import { QUIZ_LENGTH } from "../../utils/config";
import { shuffleArray } from "../../utils";
import { useMemo } from "react";

interface Props {
  index: number;
  name: string;
  year: number;
  alternatives: number[];
  isAnswered: boolean;
  onAnswer: (year: number, alternative: number) => void;
}

export function Question({
  index,
  name,
  year,
  alternatives,
  isAnswered,
  onAnswer,
}: Props) {
  const questionNr = index + 1;
  const questionId = `${name}-${questionNr}`;
  const shuffledAlternatives = useMemo(
    () => shuffleArray(alternatives),
    [alternatives]
  );

  return (
    <div
      className={classNames(styles.container, {
        [styles.isAnswered]: isAnswered,
      })}
      style={{
        zIndex: QUIZ_LENGTH - index,
      }}
      role="group"
      aria-labelledby={questionId}
    >
      <h2 className={styles.index}>
        <span className={a11y.visuallyHidden}>Fråga nummer:</span> {questionNr}
      </h2>
      <h3 id={questionId}>{name}</h3>
      <div className={styles.alternatives}>
        {shuffledAlternatives.map((alternative, index) => (
          <div key={index} className={styles.alternative}>
            <input
              disabled={isAnswered}
              id={`${name}-${alternative}`}
              className={styles.input}
              type="radio"
              name={name}
              value={alternative}
              onClick={() => {
                onAnswer(year, alternative);
              }}
            />
            <label
              className={styles.alternativeInner}
              htmlFor={`${name}-${alternative}`}
            >
              {alternative}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
