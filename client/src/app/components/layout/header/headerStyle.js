import { styled, Box } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: "0px 100px", 
  height: "102px", 
  paddingBottom: "32px",
  backgroundColor: theme.palette.custom.darkwhite,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const HeaderWrapperLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "10%",
}));

export const HeaderWrapperCenter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "55%",
}));

export const HeaderWrapperRight = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "35%",
}));
