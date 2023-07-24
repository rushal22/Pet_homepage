import { Typography, Box, Fab } from "@mui/material";
import React from "react";
import {
  OneMoreFriendContainer,
  OneMoreFriendImgWraper,
  OneMoreFriendDetailsContainer,
  OneMoreFriendDetailsWrapper,
  OneMoreFriendTextWraper,
  OneMoreFriendBtnWraper,
} from "./oneMoreFriendStyles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";

export default function OneMoreFriend({ friendData }) {
  return (
    <OneMoreFriendContainer>
      {friendData && (
        <OneMoreFriendImgWraper key={friendData?.id}>
          <Box height={"328px"} width={"1440px"} position={"relative"}>
            <Image
              src={friendData?.path}
              layout="fill"
              objectFit="contain"
              alt={friendData?.title}
            />
          </Box>
          <OneMoreFriendDetailsContainer>
            <OneMoreFriendDetailsWrapper>
              <OneMoreFriendTextWraper variant="omft">
                {friendData?.title}
              </OneMoreFriendTextWraper>
              <OneMoreFriendTextWraper variant="omfd">
                {friendData?.description}
              </OneMoreFriendTextWraper>
              <OneMoreFriendBtnWraper>
                <Fab
                  sx={{ width: "140.87px", height: "42px", color: "#F5FAFA" }}
                  variant="extended"
                  aria-label="add"
                >
                  <Typography
                    width={"80.43px"}
                    color={"orange"}
                    textAlign={"left"}
                    variant="b1"
                  >
                    Get Now
                  </Typography>
                  <NavigateNextIcon
                    sx={{
                      mr: -1,
                      backgroundColor: "orange",
                      borderRadius: "50%",
                    }}
                  />
                </Fab>
              </OneMoreFriendBtnWraper>
            </OneMoreFriendDetailsWrapper>
          </OneMoreFriendDetailsContainer>
        </OneMoreFriendImgWraper>
      )}
    </OneMoreFriendContainer>
  );
}
