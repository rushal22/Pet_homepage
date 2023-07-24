import { styled, Box, Typography } from "@mui/material";

export const CartBtnContainer = styled(Box)(({ theme }) => ({
  padding: "10px",
  height: "40px",
  width: "100px",
  border: `solid ${theme?.palette?.custom?.blue} 1px`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: "6px",
}));

export const CartBtnText = styled(Typography)(({ theme }) => ({}));
