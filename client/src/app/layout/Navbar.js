"use client";
import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Box sx={{  bgcolor: "#007FFF" }}>
        <AppBar
          position="fixed"
          style={{ width: "1541px", height: "53px", left: "-48px" }}
        >
          <Toolbar>
            <Typography
              style={{
                
                textAlign: "right",
                top: "19px",
                left: "477px",
                height: "15px",
                width: "395px",
              }}
              fontWeight={"700"}
              lineHeight={"14.72px"}
              fontSize={"16px"}
              color={"#FFFFFF"}
            >
              Call us for Veterinary Support: +977-9861859764
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
     <Box>
      <AppBar position="static" style={{ width: '1440px', height: '102px', top: '53px', position: 'relative' }}>
        <Toolbar>
          {/* Add content for the second app bar as needed */}
        </Toolbar>
      </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
