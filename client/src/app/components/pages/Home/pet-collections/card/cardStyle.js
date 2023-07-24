import { styled, Box, Card } from "@mui/material";

export const PetCardContainer = styled(Card)(({ theme }) => ({
  width: "260px",
  height: "350px",
  borderRadius: "16px",
  border: "solid #D4D2E3 1px",
  padding: "10px",
}));

export const PetCardTitleWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
}));

export const PetCardDescriptionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
}));

export const PetCardDescriptionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
