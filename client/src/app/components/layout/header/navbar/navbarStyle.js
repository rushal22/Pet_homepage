import { styled, Box } from "@mui/material";

export const NavbarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme?.palette?.custom?.darkwhite
,
  display: "flex",
  width: "90%",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const NavbarMenueItem = styled(Box)(({ theme }) => ({
  cursor: "pointer",
}));
