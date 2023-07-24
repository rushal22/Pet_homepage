import { styled, Box, TextField } from "@mui/material";

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  border: "solid blue 1px",
  borderRadius: "10px", //TODO: keep actual radius
  outline: "none",
}));
