import styles from "./Question.module.css";
import classNames from "classnames";

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
  const questionId = `${name}-${index + 1}`;

  return (
    <div
      className={classNames(styles.container, {
        [styles.isAnswered]: isAnswered,
      })}
      role="group"
      aria-labelledby={questionId}
    >
      <p id={questionId}>{name}</p>
      <div className={styles.alternatives}>
        {alternatives.map((alternative, index) => (
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
