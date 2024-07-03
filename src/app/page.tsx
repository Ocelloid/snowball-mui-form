import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@/components/List";
import Search from "@/components/Search";
import CardSkeleton from "@/components/CardSkeleton";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          m: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          Курс валют на сегодня
        </Typography>

        <Search />

        <Suspense key={query} fallback={<CardSkeleton />}>
          <List query={query} />
        </Suspense>
      </Box>
    </Container>
  );
}
