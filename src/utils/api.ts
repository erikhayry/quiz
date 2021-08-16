import { fetchAsJSON } from "./fetch";
import { NOBLE_PRIZE_CATEGORY, TIME_PERIOD } from "./config";
import { ApiResponse, NobelPrize } from "../typings/api";

const NOBEL_PRIZE_API_PATH = "https://api.nobelprize.org/2.1/nobelPrizes";

async function getNobelPrizes(): Promise<NobelPrize[]> {
  const res: ApiResponse | undefined = await fetchAsJSON(
    `${NOBEL_PRIZE_API_PATH}?nobelPrizeYear=${TIME_PERIOD.FROM}&yearTo=${TIME_PERIOD.TO}}&nobelPrizeCategory=${NOBLE_PRIZE_CATEGORY}`
  );

  if (res) {
    return res.nobelPrizes;
  }

  return [];
}

function mapToWinner({ awardYear, laureates }: NobelPrize): Winner {
  return {
    // @ts-ignore
    name: laureates[0].knownName?.en || laureates[0].orgName?.en, //laureates always has knownName or orgName
    year: Number.parseInt(awardYear),
  };
}

export async function getWinners(): Promise<Winner[]> {
  const nobelPrizes = await getNobelPrizes();

  return nobelPrizes.map(mapToWinner);
}
