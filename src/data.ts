import type { Currency, Rate } from "@/types";
// Сделал прокси для этих запросов, потому что иначе будет ошибка CORS
// код здесь: https://github.com/ocelloid/reverse-proxy-brown

export async function fetchCurrencies() {
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

export async function fetchRates() {
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
