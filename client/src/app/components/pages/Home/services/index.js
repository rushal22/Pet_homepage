import React from "react";
import {
  ServicesContainer,
  ServicesCardContainer,
  ServicesDetailsContainer,
} from "./servicesStyle";
import { Typography } from "@mui/material";
import ServiceCard from "./card";

export default function Services({ serviceData }) {
  return (
    <ServicesContainer>
      {serviceData && (
        <>
          <ServicesDetailsContainer>
            <Typography variant="h1">{serviceData?.title}</Typography>
            <Typography mt={"16px"} variant="h4">
              {serviceData?.description}
            </Typography>
          </ServicesDetailsContainer>

          <ServicesCardContainer>
            {serviceData.card && serviceData.card.length
              ? serviceData.card.map((card) => (
                  <ServiceCard key={card?.id} cardData={card} />
                ))
              : null}
          </ServicesCardContainer>
        </>
      )}
    </ServicesContainer>
  );
}
