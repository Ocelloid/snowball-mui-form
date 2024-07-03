export type Currency = {
  ticker: string;
  description: string;
  logoURL: string;
};

export type Rate = {
  fromCurrency: string;
  price: number;
  dayGainPercent: number;
};
