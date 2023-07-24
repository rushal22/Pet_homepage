import { styled, Box } from "@mui/material";

export const PetCollectionsContainer = styled(Box)(({ theme }) => ({
  padding: "0px 100px", //TODO: keep actual padding
  height: "300px", //TODO: Actual Height
  backgroundColor: theme.palette.custom.lightblack,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
