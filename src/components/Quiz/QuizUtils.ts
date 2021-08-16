import { TIME_PERIOD } from "../../utils/config";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

export function getAnswerAlternatives(year: number): number[] {
  const alternatives = [year];

  while (alternatives.length !== 3) {
    const randomInt = getRandomInt(TIME_PERIOD.FROM, TIME_PERIOD.TO);

    if (!alternatives.includes(randomInt)) {
      alternatives.push(randomInt);
    }
  }

  return alternatives;
}

export function getQuestions(winners: Winner[]): Question[] {
  return winners.map(({ name, year }) => ({
    name,
    year,
    alternatives: getAnswerAlternatives(year),
  }));
}

export function countNumberOfRightAnswers(
  numberOfRightAnswers: number,
  { answer, year }: Answer
): number {
  const acc = answer === year ? 1 : 0;

  return numberOfRightAnswers + acc;
}
