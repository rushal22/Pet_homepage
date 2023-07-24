import { Typography, Box , Fab } from "@mui/material";
import React from "react";
import { OneMoreFriendContainer } from "./oneMoreFriendStyles";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function OneMoreFriend({items}) {



  return (
    // <OneMoreFriendContainer>
      <Box>
        {items && items.length? items.map((item)=>(
           <Box  position={"relative"} key={item.id} sx={{ display : "flex" , justifyContent : "left" , alignItems: "stretch" }}>
           <Box  paddingTop={"36px"} position={"absolute"} sx={{display:"flex" , flexDirection: "column" }}>
             <Typography textAlign={"left"} variant="omft" color={"white"} >{item.title}</Typography>
             <Typography textAlign={"left"} variant="omfd" color={"white"} >{item.description}</Typography>
             <Fab sx={{width: "140.87px" , height: "42px" , color: "#F5FAFA"}} variant="extended"  aria-label="add" >
          <Typography width={"80.43px"} color={"orange"} textAlign={"left"} variant="b1">Get Now </Typography> <NavigateNextIcon sx={{mr: -1 , color:"orange"}} />
      </Fab>
           </Box>
          
           <img
             src={item.path}
             height={"328px"}
             width={"1920px"}
             
           />
       
           </Box>
           )): null}
           
           </Box>
    // </OneMoreFriendContainer>
  );
}
