import { styled, Box } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  height: "300px", //TODO: Actual Height
  backgroundColor: theme.palette.custom.darkblue,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.custom.darkwhite,
}));
