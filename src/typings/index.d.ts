type Winner = {
  name: string;
  year: number;
};

type Question = {
  name: string;
  alternatives: number[];
  year: number;
};

type Answer = {
  year: number;
  suggestion: number;
};
