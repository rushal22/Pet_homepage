import React from "react";
import { CardMedia, CardContent, Typography } from "@mui/material";
import {
  PetCardContainer,
  PetCardDescriptionWrapper,
  PetCardDescriptionContainer,
  PetCardTitleWrapper,
} from "./cardStyle";

export default function PetCard({ petCardData }) {
  return (
    <PetCardContainer>
      <CardMedia
        component="img"
        image={petCardData.path}
        width={"188.48px"}
        height={"250.23px"}
        style={{
          borderRadius: "10px",
        }}
      />
      <CardContent>
        <PetCardTitleWrapper aria-level={petCardData?.title}>
          <Typography variant="osct">{petCardData?.title}</Typography>
        </PetCardTitleWrapper>
        <PetCardDescriptionContainer>
          {petCardData?.details && petCardData?.details.length
            ? petCardData?.details.map((details) => (
                <PetCardDescriptionWrapper key={details?.id}>
                  <Typography variant="oscd">{details?.key} : </Typography>
                  <Typography variant="oscd">{details?.value}</Typography>
                </PetCardDescriptionWrapper>
              ))
            : null}
        </PetCardDescriptionContainer>
      </CardContent>
    </PetCardContainer>
  );
}
