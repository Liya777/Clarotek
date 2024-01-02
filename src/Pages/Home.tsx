import React from "react";
import { Box, Grid } from "@mui/material";
import { ImgCard, ImgCarousel } from "../Components";

const Home = () => {
  return (
    <Box sx={{ pt: 15 }}>
      <ImgCard
        heading="Image of kuwait map with trackers on it"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Some of our Clients
      </h1>
      <ImgCarousel />
      <Grid container columnSpacing={10} sx={{ py: 5 }}>
        <Grid item lg={6}>
          <ImgCard
            heading="Image of product range"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          />
        </Grid>
        <Grid item lg={6}>
          <ImgCard
            heading="Image of platform"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
