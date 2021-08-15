import { getWinners } from "./api";
import { fetchAsJSON } from "./fetch";
import mockNobelPrizesResponse from "./mocks/nobelPrizes.json";

jest.mock("./fetch", () => ({
  fetchAsJSON: jest.fn(),
}));

describe("api", () => {
  describe("getWinners", () => {
    it("handles failed request", async () => {
      (fetchAsJSON as jest.Mock).mockReturnValue(undefined);

      const winners = await getWinners();
      expect(winners.length).toEqual(0);
    });

    it("returns winners", async () => {
      (fetchAsJSON as jest.Mock).mockReturnValue(mockNobelPrizesResponse);

      const winners = await getWinners();
      expect(winners).toMatchSnapshot();
    });
  });
});
