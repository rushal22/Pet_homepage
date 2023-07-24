import React from "react";
import { ServicesContainer } from "./servicesStyle";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";


export default function Services({ items }) {
  const id1 = 1;
  const itemWithId1 = items.find((item) => item.id === id1);
  const id2 = 2;
  const itemWithId2 = items.find((item) => item.id ===id2)
  const id3 = 3;
  const itemWithId3 = items.find((item) => item.id ===id3)
  const id4 = 4;
  const itemWithId4 = items.find((item) => item.id ===id4)
  const id5 = 5;
  const itemWithId5 = items.find((item) => item.id ===id5)
  const id6 = 6;
  const itemWithId6 = items.find((item) => item.id ===id6)
  return (
    <ServicesContainer>
      <Box
        position={"absolute"}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography marginBottom={6} textAlign={"center"} variant="h1">
          Our Services
        </Typography>
        <Typography marginBottom={64} textAlign={"center"} variant="h4">
          We provide a wide range of products & services for pets such as food,
          toys, grooming supplies, and veterinary care. We aim to meet the needs
          of pet owners and ensure the health and happiness of their furry
          friends.
        </Typography>
      </Box>
      <Box>
            <Box position={"relative"}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Card
                  sx={{
                    height: "409.62px",
                    width: "334.23px",
                    
                    
                    
                  }}
                >
                  <CardMedia
                    component="img"
                    image={itemWithId1.path}
                    height={"188.48px"}
                    width={"334.23px"}
                    sx={{padding: "12px 12px ,0px , 0px"}}
                   
                  />
                  <CardContent>
                    <Box
                      sx={{
                        height: "70px",
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        overflow: "hidden",
                      }}
                      aria-level={itemWithId1?.title}
                    >
                      <Typography textAlign={"center"} variant="osct">
                        {itemWithId1.title}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId1.description}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Button sx={{height: "36px" , width : "89px", bgcolor: "black"}} variant="contained">
                    <Typography variant="b2" fontFamily={"Inter"}>View More</Typography>
                  </Button>
                </Card>
              </Box>
          
      </Box>
      <Box>
      <Box position={"relative"}
            sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                <Card
                  sx={{
                    height: "409.62px",
                    width: "334.23px",  
                    
                  }}
                >
                  <CardMedia
                    component="img"
                    image={itemWithId2.path}
                    height={"188.48px"}
                    width={"334.23px"}
                    sx={{padding: "12px 12px ,0px , 0px"}}
                   
                  />
                  <CardContent>
                    <Box
                      sx={{
                        height: "70px",
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        overflow: "hidden",
                      }}
                      aria-level={itemWithId2?.title}
                    >
                      <Typography textAlign={"center"} variant="osct">
                        {itemWithId2.title}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId2.description}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Button sx={{height: "36px" , width : "89px", bgcolor: "black"}} variant="contained">
                    <Typography variant="b2" fontFamily={"Inter"}>View More</Typography>
                  </Button>
                </Card>
              </Box>
      </Box>
      <Box>
      <Box position={"relative"}
            sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                <Card
                  sx={{
                    height: "409.62px",
                    width: "334.23px",  
                    
                  }}
                >
                  <CardMedia
                    component="img"
                    image={itemWithId3.path}
                    height={"188.48px"}
                    width={"334.23px"}
                    sx={{padding: "12px 12px ,0px , 0px"}}
                   
                  />
                  <CardContent>
                    <Box
                      sx={{
                        height: "70px",
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        overflow: "hidden",
                      }}
                      aria-level={itemWithId3?.title}
                    >
                      <Typography textAlign={"center"} variant="osct">
                        {itemWithId3.title}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId3.description}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Button sx={{height: "36px" , width : "89px", bgcolor: "black"}} variant="contained">
                    <Typography variant="b2" fontFamily={"Inter"}>View More</Typography>
                  </Button>
                </Card>
              </Box>
      </Box>
      <Box>
      <Box position={"relative"}
            sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                <Card
                  sx={{
                    height: "409.62px",
                    width: "334.23px",  
                    
                  }}
                >
                  <CardMedia
                    component="img"
                    image={itemWithId4.path}
                    height={"188.48px"}
                    width={"334.23px"}
                    sx={{padding: "12px 12px ,0px , 0px"}}
                   
                  />
                  <CardContent>
                    <Box
                      sx={{
                        height: "70px",
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        overflow: "hidden",
                      }}
                      aria-level={itemWithId4?.title}
                    >
                      <Typography textAlign={"center"} variant="osct">
                        {itemWithId4.title}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId4.description}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Button sx={{height: "36px" , width : "89px", bgcolor: "black"}} variant="contained">
                    <Typography variant="b2" fontFamily={"Inter"}>View More</Typography>
                  </Button>
                </Card>
              </Box>
      </Box>
      <Box>
      <Box position={"relative"}
            sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                <Card
                  sx={{
                    height: "409.62px",
                    width: "334.23px",  
                    
                  }}
                >
                  <CardMedia
                    component="img"
                    image={itemWithId5.path}
                    height={"188.48px"}
                    width={"334.23px"}
                    sx={{padding: "12px 12px ,0px , 0px"}}
                   
                  />
                  <CardContent>
                    <Box
                      sx={{
                        height: "70px",
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        overflow: "hidden",
                      }}
                      aria-level={itemWithId5?.title}
                    >
                      <Typography textAlign={"center"} variant="osct">
                        {itemWithId5.title}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId5.description}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Button sx={{height: "36px" , width : "89px", bgcolor: "black"}} variant="contained">
                    <Typography variant="b2" fontFamily={"Inter"}>View More</Typography>
                  </Button>
                </Card>
              </Box>
      </Box>
      <Box>
      <Box position={"relative"}
            sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                <Card
                  sx={{
                    height: "409.62px",
                    width: "334.23px",  
                    
                  }}
                >
                  <CardMedia
                    component="img"
                    image={itemWithId6.path}
                    height={"188.48px"}
                    width={"334.23px"}
                    sx={{padding: "12px 12px ,0px , 0px"}}
                   
                  />
                  <CardContent>
                    <Box
                      sx={{
                        height: "70px",
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        overflow: "hidden",
                      }}
                      aria-level={itemWithId6?.title}
                    >
                      <Typography textAlign={"center"} variant="osct">
                        {itemWithId6.title}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId6.description}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Button sx={{height: "36px" , width : "89px", bgcolor: "black"}} variant="contained">
                    <Typography variant="b2" fontFamily={"Inter"}>View More</Typography>
                  </Button>
                </Card>
              </Box>
      </Box>
    </ServicesContainer>
  );
}
