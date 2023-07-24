import { styled, Box } from "@mui/material";

export const CarouselContainer = styled(Box)(({ theme }) => ({
  padding: "0px 100px", 
  height: "575px", 
  backgroundColor: theme.palette.custom.white,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
