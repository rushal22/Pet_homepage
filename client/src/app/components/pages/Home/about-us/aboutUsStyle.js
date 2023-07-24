import { styled, Box } from "@mui/material";

export const AboutUsContainer = styled(Box)(({ theme }) => ({
  padding: "0px 100px", //TODO: keep actual padding
  height: "605px", //TODO: Actual Height
  backgroundColor: theme.palette.custom.white,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const AboutUsContainerLeft = styled(Box)(({theme})=> ({
  padding: "0px 100px", //TODO: keep actual padding
  height: "700px", //TODO: Actual Height
  justifyContent: "center",
  alignItems: "left",
  display: "-webkit-inline-flex"
  
}))

export const AboutUsContainerRight = styled(Box)(({theme})=> ({
  padding: "0px 100px", //TODO: keep actual padding
  height: "300px", //TODO: Actual Height
  alignItems: "right",
  textAlign: "center"
}))