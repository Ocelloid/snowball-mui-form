import Box from "@mui/material/Box";
import Card from "@/components/Card";
import type { Currency, Rate } from "@/types";
import { fetchCurrencies, fetchRates } from "@/data";

export default async function List({ query }: { query: string }) {
  const currencies: Currency[] = await fetchCurrencies();
  const rates: Rate[] = await fetchRates();
  const filteredCurrencies = currencies
    .filter((currency) =>
      query.toLowerCase().includes(currency.ticker.toLowerCase())
    )
    .map((currency) => ({
      ...currency,
      rate: rates.find((rate) => rate.fromCurrency === currency.ticker),
    }));
  return (
    <Box
      sx={{
        my: 2,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        rowGap: 4,
        columnGap: 6,
      }}
    >
      {filteredCurrencies.map((currency) => (
        <Card
          key={currency.ticker}
          ticker={currency.ticker}
          description={currency.description}
          logoURL={currency.logoURL}
          rate={currency.rate}
        />
      ))}
    </Box>
  );
}
