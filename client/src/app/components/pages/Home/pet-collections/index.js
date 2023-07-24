import { Typography, Box, Card , CardMedia, CardContent, Button, Fab} from "@mui/material";
import React from "react";
import { PetCollectionsContainer } from "./petCollectionsStyle";
import NavigateNextIcon from "@mui/icons-material/NavigateNext"


export default function PetCollections({items}) {
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
  const id7 = 7;
  const itemWithId7 = items.find((item) => item.id ===id7)
  const id8 = 8;
  const itemWithId8 = items.find((item) => item.id ===id8)

  return (
    <PetCollectionsContainer>
      <Box
        position={"absolute"}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography marginBottom={6} textAlign={"center"} variant="h1">
          Our Pet Collection
        </Typography>
        <Typography marginBottom={64} textAlign={"center"} variant="h4">
        "Bring joy to your home with a furry companion from our pet selection.".
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
                        {itemWithId1.gender}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId8.age}
                      </Typography>
                    </Box>
                  </CardContent>
                
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
                        {itemWithId2.gender}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId8.age}
                      </Typography>
                    </Box>
                  </CardContent>
                 
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
                        {itemWithId3.gender}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId8.age}
                      </Typography>
                    </Box>
                  </CardContent>
                  
                </Card>
              </Box>
      </Box>
      <Box>
      <Box position={"relative"}
            sx={{ display: "flex", flexDirection: "row", alignItems: "left" }}>
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
                        {itemWithId4.gender}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId8.age}
                      </Typography>
                    </Box>
                  </CardContent>
                  
                </Card>
              </Box>
      </Box>
      <Box>
      <Box position={"relative"}
            sx={{ display: "flex", flexDirection: "row", alignItems: "left" }}>
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
                        {itemWithId5.gender}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId8.age}
                      </Typography>
                    </Box>
                  </CardContent>
                  
                </Card>
              </Box>
      </Box>
      <Box>
      <Box position={"relative"}
            sx={{ display: "flex", flexDirection: "row", alignItems: "left" }}>
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
                        {itemWithId6.gender}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId8.age}
                      </Typography>
                    </Box>
                  </CardContent>
                  
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
                    image={itemWithId7.path}
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
                      aria-level={itemWithId7?.title}
                    >
                      <Typography textAlign={"center"} variant="osct">
                        {itemWithId7.title}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId7.gender}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId8.age}
                      </Typography>
                    </Box>
                  </CardContent>
                  
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
                    image={itemWithId8.path}
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
                      aria-level={itemWithId8?.title}
                    >
                      <Typography textAlign={"center"} variant="osct">
                        {itemWithId8.title}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId8.gender}
                      </Typography>
                      <Typography gutterBottom variant="oscd">
                        {itemWithId8.age}
                      </Typography>
                    </Box>
                  </CardContent>
                  
                </Card>
                <Fab
                  sx={{ width: "140.87px", height: "42px", color: "blue" }}
                  variant="extended"
                  aria-label="add"
                >
                  <Typography
                    width={"80.43px"}
                    textAlign={"left"}
                    variant="b1"
                  >
                    View All 
                  </Typography>
                  <NavigateNextIcon sx={{ mr: -1, color: "blue" }} />
                </Fab>
              </Box>
      </Box>
    </PetCollectionsContainer>
  );
}
