import { styled, Box } from "@mui/material";

export const CarouselContainer = styled(Box)(({ theme }) => ({
  padding: "0px 100px", //TODO: keep actual padding
  height: "575px", //TODO: Actual Height
  backgroundColor: theme.palette.custom.white,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
