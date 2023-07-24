import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid, Typography, Box } from "@mui/material";
import { CarouselContainer } from "./carouselStyle";
import Image from "next/image";

export default function MyCarousel({ items }) {
  return (
    
      <Carousel >
        {items && items.length? items.map((item)=>(
       <Box  position={"relative"} key={item.id} sx={{ display : "flex" , justifyContent : "center" , bgcolor: "#D4E6F4"}}>
        <Box  paddingTop={"36px"} position={"absolute"} sx={{display:"flex" , flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h2" fontFamily={"Nunito"}>{item.title}</Typography>
          <Typography variant="h3" fontFamily={"Nunito"}>{item.description}</Typography>
        </Box>
        <img
          src={item.path}
          height={"500px"}
          width={"1312px"}
        />
        </Box>
       )): null}
      </Carousel>
    
  );
}


