import { styled, Box } from "@mui/material";

export const BlogsContainer = styled(Box)(({ theme }) => ({
  margin: "122px 0px", 
  padding: "0px 91px" ,
  height: "524px", 
  width: "100%",
  backgroundColor: theme.palette.custom.darkwhite,  
}));

export const BlogDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "black",
  justifyContent: "center",
 
}));

export const BlogCardContainer = styled(Box)(({ theme }) => ({
  marginTop: "64px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "100%",
  gap: "35px",
}));