import { styled, Box } from "@mui/material";

export const ServiceCardContainer = styled(Box)(({ theme }) => ({
  height: "409.62px",
  width: "340px",
  borderRadius: "16px",
  border: "solid #D4D2E3 1px",
}));

export const ServiceCardTitleWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
}));

export const ServiceCardDescriptionWrapper = styled(Box)(({ theme }) => ({
  height: "70px",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
}));

export const ServiceCardBtnWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
