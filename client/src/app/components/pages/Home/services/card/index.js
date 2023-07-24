import React from "react";
import { CardMedia, CardContent, Typography, Button } from "@mui/material";
import {
  ServiceCardContainer,
  ServiceCardTitleWrapper,
  ServiceCardDescriptionWrapper,
  ServiceCardBtnWrapper,
} from "./cardStyle";

export default function ServiceCard({ cardData }) {
  return (
    <ServiceCardContainer>
      <CardMedia
        component="img"
        image={cardData?.path}
        height={"188.48px"}
        width={"334.23px"}
        sx={{ padding: "12px 12px ,0px , 0px" }}
      />
      <CardContent>
        <ServiceCardTitleWrapper aria-level={cardData?.title}>
          <Typography variant="osct">{cardData?.title}</Typography>
        </ServiceCardTitleWrapper>
        <ServiceCardDescriptionWrapper>
          <Typography variant="oscd">{cardData?.description}</Typography>
        </ServiceCardDescriptionWrapper>
      </CardContent>
      <ServiceCardBtnWrapper>
        <Button
          sx={{ height: "36px", width: "100px", bgcolor: "black" }}
          variant="contained"
        >
          <Typography variant="b2">View More</Typography>
        </Button>
      </ServiceCardBtnWrapper>
    </ServiceCardContainer>
  );
}
