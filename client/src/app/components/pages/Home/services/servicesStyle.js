import { styled, Box } from "@mui/material";

export const ServicesContainer = styled(Box)(({ theme }) => ({
  padding: "67px 80px 0 80px",
  backgroundColor: theme.palette.custom.darkwhite,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ServicesDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "84%",
}));

export const ServicesCardContainer = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "40px",
}));
