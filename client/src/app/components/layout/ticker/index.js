import { Typography } from "@mui/material";
import { TickerContainer } from "./tickerStyles";

export default function Ticker() {
  return (
    <TickerContainer>
      <Typography variant="h8" color="custom.darkwhite">
      Call us for Veterinary Support: +977-9861859764
      </Typography>
    </TickerContainer>
  );
}
