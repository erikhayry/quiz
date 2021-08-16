export enum Category {
  Chemistry = "che",
  Economy = "eco",
  Peace = "pea",
  Physics = "phy",
  Medicine = "med",
}

type Translation = {
  en: string;
  se?: string;
  no?: string;
};

type ItemLink = {
  rel: string;
  href: string;
  action: string;
  types: string;
};

//TODO fix model https://app.swaggerhub.com/apis/NobelMedia/NobelMasterData/2.1#/default/get_nobelPrizes
type Laureate = {
  id: string;
  knownName?: Translation;
  orgName?: Translation;
  portion: string;
  sortOrder: string;
  motivation: Translation;
  links: ItemLink[];
};

export type NobelPrize = {
  awardYear: string;
  category: Category;
  categoryFullName: Translation;
  dateAwarded: string;
  prizeAmount: string;
  prizeAmountAdjusted: string;
  topMotivation: Translation;
  laureates: Laureate[];
};

type NobelPrizesMeta = {
  offset: string;
  limit: string;
  minimum: string;
  nobelPrizeYear: string;
  yearTo: string;
  nobelPrizeCategory: Category;
  count: string;
};

type Links = {
  first: string;
  prev: string;
  self: string;
  next: string;
  last: string;
};

export type ApiResponse = {
  nobelPrizes: NobelPrize[];
  meta: NobelPrizesMeta;
  links: Links;
};
