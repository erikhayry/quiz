import { getAnswerAlternatives } from "./quiz";

describe("quiz", () => {
  describe("getAnswerAlternatives", () => {
    it("returns alternatives", () => {
      const alternatives = getAnswerAlternatives(2010);

      expect(alternatives.includes(2010)).toBeTruthy();
      expect(alternatives.length).toEqual(3);
      expect(new Set(alternatives).size).toEqual(3);
    });
  });
});
