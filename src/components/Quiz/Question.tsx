interface Props {
  name: string;
  year: number;
  alternatives: number[];
  isAnswered: boolean;
  onAnswer: (year: number, alternative: number) => void;
}

export function Question({
  name,
  year,
  alternatives,
  isAnswered,
  onAnswer,
}: Props) {
  return (
    <fieldset disabled={isAnswered}>
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
                onAnswer(year, alternative);
              }}
            />
            <label htmlFor={`${name}-${alternative}`}>{alternative}</label>
          </div>
        ))}
      </>
    </fieldset>
  );
}

export default Question;
