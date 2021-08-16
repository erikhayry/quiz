export function isCorrectAnswer(
  { suggestion, year }: Answer,
  alternative: number
): boolean {
  return suggestion === year && alternative === suggestion;
}

export function isWrongAnswer(
  { suggestion, year }: Answer,
  alternative: number
): boolean {
  return suggestion !== year && alternative === suggestion;
}
