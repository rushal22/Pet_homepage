import { styled, Box, Typography } from "@mui/material";

export const OneMoreFriendContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#FF960C",
  position: "relative",
}));

export const OneMoreFriendImgWraper = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
}));

export const OneMoreFriendDetailsContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  top: 0,
}));

export const OneMoreFriendDetailsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "60px 0 0 100px",
}));

export const OneMoreFriendTextWraper = styled(Typography)(({ theme }) => ({
  color: theme?.palette?.custom?.darkwhite
,
  padding: "10px 0",
}));

export const OneMoreFriendBtnWraper = styled(Box)(({ theme }) => ({
  paddingTop: "40px",
}));
