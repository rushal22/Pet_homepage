import { Typography, Box, Fab} from "@mui/material";
import React from "react";
import {
  AboutUsContainer,
  AboutUsContainerLeft,
  AboutUsContainerRight,
} from "./aboutUsStyle";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTheme } from "@emotion/react"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function AboutUs({ items }) {
  const theme = useTheme();
  return (
    <AboutUsContainer>
      <AboutUsContainerLeft>
        <Box position={"relative"}>
          <img
            src={"/images/home/about-us/blue-circle.svg"}
            height={"379.32px"}
            width={"364.57px"}
          />
        </Box>
        <Box position={"absolute"}>
          <img
            src={"/images/home/about-us/high-five.svg"}
            height={"409.08px"}
            width={"424.1px"}
          />
        </Box>
        <Box position={"relative"}>
          <img
            src={"/images/home/about-us/goldenret.svg"}
            height={"219px"}
            width={"247.19px"}
          />
        </Box>
        <Box position={"relative"}>
          <img
            src={"/images/home/about-us/dog-catch.svg"}
            height={"175.77px"}
            width={"198.44px"}
          />
        </Box>
        <Box position={"relative"}>
          <img
            src={"/images/home/about-us/orange-circle.svg"}
            height={"176.19px"}
            width={"170.19px"}
          />
        </Box>
      </AboutUsContainerLeft>

      <AboutUsContainerRight>
        <Box>
          <Typography variant="h1" fontFamily={"Nunito"}>
            About Us
          </Typography>
          <Typography variant="h4" fontFamily={"Nunito"}>
            Pet House & Animal clinic was established with moto to provide
            qualitative and affordable animal healthcare service to your
            doorstep.
          </Typography>
          <Typography variant="h5"   fontFamily={"Nunito"}>
           <CheckCircleOutlineIcon style={{ color: theme.palette.custom.blue , height: "13.84px" , width: "13.3px" }} /> Comprehensive
          </Typography>
          <Typography variant="h5" fontFamily={"Nunito"}>
          <CheckCircleOutlineIcon  style={{ color: theme.palette.custom.blue ,  height: "13.84px" , width: "13.3px" }}/> Professional
          </Typography>
          <Typography variant="h5" fontFamily={"Nunito"}>
          <CheckCircleOutlineIcon style={{ color: theme.palette.custom.blue ,  height: "13.84px" , width: "13.3px" }} /> Compassionate veteinary service
          </Typography>

          <Fab sx={{width: "140.87px" , height: "42px"}} variant="extended"  color="primary" aria-label="add" >
          <Typography width={"80.43px"} textAlign={"left"} variant="b1">Contact </Typography> <NavigateNextIcon sx={{mr: -1}} />
      </Fab>
        </Box>
      </AboutUsContainerRight>
    </AboutUsContainer>
  );
}
