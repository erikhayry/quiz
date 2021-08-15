enum Category {
  Chemistry = "che",
  Economy = "eco",
  Peace = "pea",
  Phy = "phy",
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
  id: int;
  knownName?: Translation;
  orgName?: Translation;
  portion: string;
  sortOrder: string;
  motivation: Translation;
  links: ItemLink[];
};

type NobelPrize = {
  awardYear: int;
  category: Category;
  categoryFullName: Translation;
  dateAwarded: string;
  prizeAmount: int;
  prizeAmountAdjusted: int;
  topMotivation: Translation;
  laureates: Laureate[];
};

type NobelPrizesMeta = {
  offset: int;
  limit: int;
  minimum: int;
  nobelPrizeYear: int;
  yearTo: int;
  nobelPrizeCategory: Category;
  count: int;
};

type Links = {
  first: string;
  prev: string;
  self: string;
  next: string;
  last: string;
};

type ApiResponse = {
  nobelPrizes: NobelPrize[];
  meta: NobelPrizesMeta;
  links: Links;
};
