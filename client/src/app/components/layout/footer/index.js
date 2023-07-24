import { Typography } from "@mui/material";
import {
  FooterContainer,
  FooterDetailWrapper,
  FooterWrapBottom,
  FooterWrapLeft,
  FooterWrapRight
} from "./footerStyle";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapLeft>
        <Typography variant="h3">Your Logo Here</Typography>
        </FooterWrapLeft>
        <FooterWrapLeft>
        <Typography variant="flbd">
          {`City Pet House & Animal Clinic: Quality and affordable animal care at
          your doorstep. Comprehensive, professional, and compassionate
          veterinary services by our dedicated and experienced team.`}
        </Typography>
      </FooterWrapLeft>
      <FooterDetailWrapper>
        <FooterWrapBottom>
          <Typography variant="flbrt">Phone Number:</Typography>
        </FooterWrapBottom>
        <FooterWrapBottom>
          <Typography variant="flbrv">+977-9861859764</Typography>
        </FooterWrapBottom>
        <FooterWrapBottom>
          <Typography>Location:</Typography>
        </FooterWrapBottom>
        <FooterWrapBottom>
          <Typography>Tahachal-Kathmandu</Typography>
        </FooterWrapBottom>
      </FooterDetailWrapper>
      <FooterWrapRight>
      <Typography variant="h5">Home</Typography>
      </FooterWrapRight>
    </FooterContainer>
  );
}
