import { styled, Box } from "@mui/material";

export const AboutUsContainer = styled(Box)(({ theme }) => ({
  padding: "150px 100px",
  backgroundColor: theme?.palette?.custom?.darkwhite
,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const AboutUsContainerLeft = styled(Box)(({ theme }) => ({
  width: "50%",
  justifyContent: "center",
  alignItems: "left",
  display: "-webkit-inline-flex",
  position: "relative",
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
}));

export const BlueCircleImageWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  marginLeft: "100px",
  left: "50px",
  bottom: "-67px",
}));

export const HighFiveImageWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  border: `solid ${theme?.palette?.custom?.darkwhite
} 5px`,
  borderRadius: "16px",
  background: theme?.palette?.custom?.darkwhite
,
}));

export const DogCatchImageWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-68px",
  right: "108px",
}));

export const GoldenretImageWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "56px",
  right: "172px",
}));

export const OranceCircleImageWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "84px",
  left: "84px",
}));

export const AboutUsContainerRight = styled(Box)(({ theme }) => ({
  width: "45%",
  paddingLeft: "100px",
}));

export const AboutUsListContainer = styled(Box)(({ theme }) => ({
  padding: "50px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: 10,
}));

export const AboutUsListItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 6,
}));
