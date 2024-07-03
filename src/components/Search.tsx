"use client";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Skeleton from "@mui/material/Skeleton";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import type { Currency } from "@/types";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
import { fetchCurrencies } from "@/data";
import Image from "next/image";

export default function Search() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    fetchCurrencies().then((currencies) => {
      setCurrencies(currencies);
    });
  }, []);

  return (
    <Box sx={{ display: "flex", minWidth: "400px" }}>
      {!currencies.length && (
        <Skeleton
          variant="text"
          sx={{ fontSize: "4rem", width: "100%", my: -2.5 }}
        />
      )}
      {!!currencies.length && (
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={currencies}
          disableCloseOnSelect
          getOptionLabel={(currency: Currency) => currency.ticker}
          renderOption={(props, currency, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                <Box
                  sx={{
                    borderRadius: 8,
                    overflow: "hidden",
                    width: 20,
                    height: 20,
                    mr: 1,
                  }}
                >
                  <Image
                    src={currency.logoURL}
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </Box>
                {currency.description}
              </li>
            );
          }}
          defaultValue={currencies.filter((currency) =>
            searchParams
              .get("query")
              ?.toLowerCase()
              .includes(currency.ticker.toLowerCase())
          )}
          onChange={(_e, v) =>
            handleSearch(v.map((currency) => currency.ticker).join(","))
          }
          noOptionsText={"Нет валют"}
          sx={{ minWidth: 360 }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Выберите валюты" />
          )}
        />
      )}
    </Box>
  );
}
