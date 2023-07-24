import { Typography, Box, Fab } from "@mui/material";
import React from "react";
import {
  AboutUsContainer,
  AboutUsContainerLeft,
  AboutUsContainerRight,
  ImageContainer,
  BlueCircleImageWrapper,
  HighFiveImageWrapper,
  GoldenretImageWrapper,
  DogCatchImageWrapper,
  OranceCircleImageWrapper,
  AboutUsListContainer,
  AboutUsListItem,
} from "./aboutUsStyle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTheme } from "@emotion/react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";

export default function AboutUs({ aboutusData }) {
  const theme = useTheme();
  return (
    <AboutUsContainer>
      <AboutUsContainerLeft>
        <ImageContainer>
          <BlueCircleImageWrapper>
            <Box position={"relative"} height={"379.32px"} width={"364.57px"}>
              <Image
                src={"/images/home/about-us/blue-circle.svg"}
                layout="fill"
                objectFit="contain"
                alt="blue-circle image"
              />
            </Box>
          </BlueCircleImageWrapper>
          <OranceCircleImageWrapper>
            <Box position={"relative"} height={"176.19px"} width={"170.19px"}>
              <Image
                src={"/images/home/about-us/orange-circle.svg"}
                layout="fill"
                objectFit="contain"
                alt="Orange circle image"
              />
            </Box>
          </OranceCircleImageWrapper>
          <HighFiveImageWrapper>
            <Box position={"relative"} height={"409.08px"} width={"424.1px"}>
              <Image
                src={"/images/home/about-us/high-five.svg"}
                layout="fill"
                objectFit="contain"
                alt="High five image"
              />
            </Box>
          </HighFiveImageWrapper>
          <GoldenretImageWrapper>
            <Box position={"relative"} height={"219px"} width={"247.19px"}>
              <Image
                src={"/images/home/about-us/goldenret.svg"}
                layout="fill"
                objectFit="contain"
                alt="Goldenret image"
              />
            </Box>
          </GoldenretImageWrapper>
          <DogCatchImageWrapper>
            <Box position={"relative"} height={"175.77px"} width={"198.44px"}>
              <Image
                src={"/images/home/about-us/dog-catch.svg"}
                layout="fill"
                objectFit="contain"
                alt="Dog catch image"
              />
            </Box>
          </DogCatchImageWrapper>
        </ImageContainer>
      </AboutUsContainerLeft>

      <AboutUsContainerRight>
        {aboutusData && (
          <Box>
            <Typography style={{color: theme.palette.custom.darkblue}} variant="h1" fontFamily={"Nunito"}>
              {aboutusData.title}
            </Typography>
            <Typography style={{color: theme.palette.custom.grey}} variant="h4" fontFamily={"Nunito"}>
              {aboutusData.description}
            </Typography>

            <AboutUsListContainer>
              {aboutusData.list && aboutusData.list.length
                ? aboutusData.list.map((item) => (
                    <AboutUsListItem key={item.id}>
                      <CheckCircleOutlineIcon
                        style={{
                          color: theme.palette.custom.blue,
                          height: "13.84px",
                          width: "13.3px",
                        }}
                      />
                      <Typography variant="h5">{item.title}</Typography>
                    </AboutUsListItem>
                  ))
                : null}
            </AboutUsListContainer>
            <Fab
              sx={{
                width: "160.87px",
                height: "50px",
                padding: "10px 0",
                color: theme.palette.custom.darkwhite,
                backgroundColor: theme.palette.custom.blue,
              }}
              variant="extended"
              aria-label="add"
            >
              <Typography fontFamily={"inter"} variant="b1">Contact</Typography>
              <NavigateNextIcon
                sx={{
                  marginLeft: "40px",
                  backgroundColor: theme.palette.custom.darkwhite,
                  color: theme.palette.custom.blue,
                  borderRadius: "50%",
                }}
              />
            </Fab>
          </Box>
        )}
      </AboutUsContainerRight>
    </AboutUsContainer>
  );
}
