import { Box } from "@mui/material";
import Header from "./header";
import Footer from "./footetr";
import Ticker from "./ticker";

export default function Layout({ children }) {
  return (
    <Box>
      <Ticker />
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
}
