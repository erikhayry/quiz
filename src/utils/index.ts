export function shuffleArray(array: any[] = []) {
  const cloned = array.slice(0);
  let currentIndex = cloned.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cloned[currentIndex];
    cloned[currentIndex] = cloned[randomIndex];
    cloned[randomIndex] = temporaryValue;
  }

  return cloned;
}
