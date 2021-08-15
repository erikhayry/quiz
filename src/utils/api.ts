import { fetchAsJSON } from "./fetch";

const NOBEL_PRIZE_API_PATH = "https://api.nobelprize.org/2.1/nobelPrizes";

function fetchWinners(): Promise<ApiResponse> {
  return fetchAsJSON(
    `${NOBEL_PRIZE_API_PATH}?nobelPrizeYear=2000&yearTo=2020&limit=20&nobelPrizeCategory=pea`
  );
}

function mapToWinner({ awardYear, laureates }: NobelPrize): Winner {
  return {
    name: laureates[0].knownName?.en || laureates[0].orgName?.en || "UNKOWN",
    year: awardYear,
  };
}

export async function getWinners(): Promise<Winner[]> {
  const { nobelPrizes } = await fetchWinners();

  return nobelPrizes.map(mapToWinner);
}
