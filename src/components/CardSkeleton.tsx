import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function CardSkeleton() {
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
      <Skeleton variant="circular" width={40} height={40} sx={{ mb: 1 }} />
      <Skeleton variant="text" sx={{ fontSize: "1.25rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2.125rem" }} />
    </Box>
  );
}
