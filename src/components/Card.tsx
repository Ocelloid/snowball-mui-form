import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

export default function Card() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: 2.5,
        border: "1px solid #E3E5E5",
        minWidth: 300,
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
        <Image
          src="https://snowball-income.com/media/currencies/usd.png"
          alt="USD"
          width={40}
          height={40}
        />
      </Box>
      <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
        USD - Доллар США
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "end",
          gap: 1,
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          87,078 ₽
        </Typography>
        <Typography variant="h6" component="h1" sx={{ color: "red" }}>
          -1,33%
        </Typography>
      </Box>
    </Box>
  );
}
