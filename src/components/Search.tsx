"use client";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
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

  return (
    <Box sx={{ display: "flex", minWidth: "400px" }}>
      <Input
        disableUnderline
        placeholder="Выберите валюты"
        sx={{
          width: "100%",
          borderRadius: 2,
          border: "1px solid #E3E5E5",
          py: 1,
          px: 2,
        }}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Box>
  );
}
