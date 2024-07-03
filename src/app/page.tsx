import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          Курс валют на сегодня
        </Typography>
      </Box>
    </Container>
  );
}
