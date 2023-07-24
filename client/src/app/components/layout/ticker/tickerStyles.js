import { styled, Box } from "@mui/material";

export const TickerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "53px",
  backgroundColor: theme.palette.custom.blue,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
