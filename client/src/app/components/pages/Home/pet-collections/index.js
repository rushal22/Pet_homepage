import { Typography, Fab } from "@mui/material";
import React from "react";
import {
  PetCollectionsContainer,
  PetCollectionDetailsContainer,
  PetCollectionCardContainer,
  PetCollectionBtnWraper,
} from "./petCollectionsStyle";
import PetCard from "./card";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTheme } from "@emotion/react";

export default function PetCollections({ petData }) {
  const theme = useTheme();
  return (
    <PetCollectionsContainer>
      {petData && (
        <>
          <PetCollectionDetailsContainer>
            <Typography variant="h1">{petData?.title}</Typography>
            <Typography variant="h4">{petData?.description}</Typography>
          </PetCollectionDetailsContainer>
          <PetCollectionCardContainer>
            {petData.card && petData.card.length
              ? petData.card.map((data) => (
                  <PetCard key={data.id} petCardData={data} />
                ))
              : null}
          </PetCollectionCardContainer>
        </>
      )}
      <PetCollectionBtnWraper>
        <Fab
          sx={{
            width: "180px",
            height: "50px",
            background: theme?.palette?.custom?.blue
,
            padding: "20px",
          }}
          variant="extended"
          aria-label="add"
        >
          <Typography
            width={"80.43px"}
            color={"white"}
            textAlign={"left"}
            variant="b1"
          >
            View All
          </Typography>
          <NavigateNextIcon
            sx={{
              mr: -1,
              backgroundColor: "white",
              borderRadius: "50%",
              color: "blue",
            }}
          />
        </Fab>
      </PetCollectionBtnWraper>
    </PetCollectionsContainer>
  );
}
