import Box from "@mui/material/Box";
import Card from "@/components/Card";
import CardSkeleton from "@/components/CardSkeleton";

type Currency = {
  ticker: string;
  description: string;
  logoURL: string;
};

export type Rate = {
  fromCurrency: string;
  price: number;
  dayGainPercent: number;
};

// Сделал прокси для этих запросов, потому что иначе будет ошибка CORS
// код здесь: https://github.com/ocelloid/reverse-proxy-brown

async function fetchCurrencies() {
  try {
    const data = await fetch(
      "https://reverse-proxy-brown.vercel.app/cash-list"
    );
    const json = await data.json();
    return json.map((currency: Currency) => ({
      ticker: currency.ticker,
      description: currency.description,
      logoURL: currency.logoURL,
    }));
  } catch (error) {
    console.error("Не получилось загрузить список валют:", error);
    throw new Error("Не получилось загрузить список валют");
  }
}

async function fetchRates() {
  try {
    const data = await fetch(
      "https://reverse-proxy-brown.vercel.app/public/currency-rates?currency=RUB"
    );
    const json = await data.json();
    return json.map((rate: Rate) => ({
      fromCurrency: rate.fromCurrency,
      price: rate.price,
      dayGainPercent: rate.dayGainPercent,
    }));
  } catch (error) {
    console.error("Не получилось загрузить список курсов:", error);
    throw new Error("Не получилось загрузить список курсов");
  }
}

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
  console.log(filteredCurrencies);
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
