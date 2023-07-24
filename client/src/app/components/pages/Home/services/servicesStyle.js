import { styled, Box } from "@mui/material";

export const ServicesContainer = styled(Box)(({ theme }) => ({
  padding: "0px 100px", //TODO: keep actual padding
  height: "1049.62px", //TODO: Actual Height
  backgroundColor: theme.palette.custom.darkwhite,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "right",
  textAlign: "center"
}));
