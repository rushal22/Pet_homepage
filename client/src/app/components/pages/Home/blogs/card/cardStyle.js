import { styled, Box } from "@mui/material";

export const BlogCardContainer = styled(Box)(({ theme }) => ({
  height: "400px",
  width: "350px",
  borderRadius: "16px",
}));


export const BlogCardImgWrapper = styled(Box)(({ theme }) => ({
    height: "220px",
    width: "350px",
    position: "relative"
  }));


export const BlogCardTitleWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "47px",
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden"
}));

export const BlogCardDescriptionWrapper = styled(Box)(({ theme }) => ({
  height: "49px",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
}));

export const BlogCardBtnWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
}));
