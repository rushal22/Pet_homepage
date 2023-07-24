import { styled, Box } from "@mui/material";

export const PetCollectionsContainer = styled(Box)(({ theme }) => ({
  padding: "122px 100px",
 
  backgroundColor: theme.palette.custom.darkwhite,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const PetCollectionDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "84%",
}));

export const PetCollectionCardContainer = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "40px",
}));

export const PetCollectionBtnWraper = styled(Box)(({ theme }) => ({
  marginTop: "32px",
}));
