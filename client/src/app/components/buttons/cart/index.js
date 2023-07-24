import React from "react";
import { CartBtnContainer, CartBtnText } from "./cartStyle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@emotion/react";

export default function CartBtn() {
  const theme = useTheme();
  return (
    <CartBtnContainer>
      <ShoppingCartIcon
        style={{
          color: theme.palette.custom.blue,
        }}
      />
      <CartBtnText variant="ct1">2 Item</CartBtnText>
    </CartBtnContainer>
  );
}
