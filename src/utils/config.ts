import { Category } from "../typings/api";

export const QUIZ_LENGTH = 10;
const FROM = 2009;
export const TIME_PERIOD = {
  FROM,
  TO: FROM + QUIZ_LENGTH - 1,
};

export const NOBLE_PRIZE_CATEGORY: Category = Category.Peace;
