function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

export function getAnswerAlternatives(answer: number): number[] {
  const alternatives = [answer];

  while (alternatives.length !== 3) {
    const randomInt = getRandomInt(2000, 2020);
    if (!alternatives.includes(randomInt)) {
      alternatives.push(randomInt);
    }
  }

  return alternatives;
}
