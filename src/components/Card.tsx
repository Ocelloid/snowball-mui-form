import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import type { Rate } from "@/types";

export default function Card({
  ticker,
  description,
  logoURL,
  rate,
}: {
  ticker: string;
  description: string;
  logoURL: string;
  rate: Rate | undefined;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: 2.5,
        border: "1px solid #E3E5E5",
        minWidth: { xs: "240px", sm: "300px" },
        maxWidth: { xs: "320px", sm: "unset" },
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          borderRadius: 8,
          overflow: "hidden",
          width: 40,
          height: 40,
          mb: 2,
        }}
      >
        <Image src={logoURL} alt="logo" width={40} height={40} />
      </Box>
      <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
        {ticker}&nbsp;-&nbsp;{description}
      </Typography>
      {!!rate && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            gap: 1,
          }}
        >
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
            {rate.price.toFixed(2)}&nbsp;₽
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            sx={{ color: rate.dayGainPercent > 0 ? "#31BD7A" : "#FF5247" }}
          >
            {rate.dayGainPercent > 0 ? "+" : ""}
            {rate.dayGainPercent.toFixed(2)}%
          </Typography>
        </Box>
      )}
    </Box>
  );
}
