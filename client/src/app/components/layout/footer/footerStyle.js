import { styled, Box } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  height: "650px", 
  backgroundColor: theme.palette.custom.darkblue,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.custom.darkwhite,
}));

export const FooterDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "60px 0 0 100px",
  
}));

export const FooterWrapLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "15%",
  padding: "0px 10px 150px 80px"
}));

export const FooterWrapRight = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "20%",
 padding: "0px 10px 2px 800px"
}));
export const FooterWrapBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "15%",
  padding: "20px 900px 10px 0px",

}));
