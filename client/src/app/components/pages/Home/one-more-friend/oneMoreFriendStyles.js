import { styled, Box } from "@mui/material";

export const OneMoreFriendContainer = styled(Box)(({ theme }) => ({
  width: "1920px", //TODO: keep actual padding
  height: "328px", //TODO: Actual Height
  backgroundColor: theme.palette.custom.darkwhite,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
