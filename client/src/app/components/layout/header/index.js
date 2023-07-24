import { Box, Typography } from "@mui/material";
import NavBar from "./navbar";
import {
  HeaderContainer,
  HeaderWrapperLeft,
  HeaderWrapperCenter,
  HeaderWrapperRight,
} from "./headerStyle";
import Search from "../../forms/search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@emotion/react";
import CartBtn from "../../buttons/cart";

export default function Header() {
  const theme = useTheme();
  return (
    <HeaderContainer>
      <HeaderWrapperLeft>
        <Typography>Your Logo Here</Typography>
      </HeaderWrapperLeft>
      <HeaderWrapperCenter>
        <NavBar />
      </HeaderWrapperCenter>
      <HeaderWrapperRight>
        <Search />
        <Box>
          <FavoriteIcon style={{ color: theme.palette.custom.blue }} />
        </Box>
        <CartBtn />
      </HeaderWrapperRight>
    </HeaderContainer>
  );
}
