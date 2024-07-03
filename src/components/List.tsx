import Box from "@mui/material/Box";
import Card from "@/components/Card";
import CardSkeleton from "@/components/CardSkeleton";

export default function List({ query }: { query: string }) {
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
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <CardSkeleton />
    </Box>
  );
}
