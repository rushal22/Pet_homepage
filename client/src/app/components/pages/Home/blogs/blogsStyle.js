import { styled, Box } from "@mui/material";

export const BlogsContainer = styled(Box)(({ theme }) => ({
  padding: "0px 100px", //TODO: keep actual padding
  height: "300px", //TODO: Actual Height
  backgroundColor: theme.palette.custom.darkwhite,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
