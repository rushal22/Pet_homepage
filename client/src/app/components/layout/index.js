import { Box } from "@mui/material";
import Header from "./header";
import Footer from "./footer";
import Ticker from "./ticker";

export default function Layout({ children }) {
  return (
    <Box>
      <Ticker />
      <Header />
      <Box bgcolor={"white"}>{children}</Box>
      <Footer />
    </Box>
  );
}
