import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImgCarousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Box>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            height: 30,
            width: 30,
          },
          children: <ArrowForwardIosIcon />,
        }}
        backwardBtnProps={{
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            height: 30,
            width: 30,
          },
          children: <ArrowBackIosNewIcon />,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <img
          style={{ width: 300, height: 300 }}
          src="/Assets/img2.png"
          alt="sdfgh"
        />
        <img
          style={{ width: 300, height: 300 }}
          src="/Assets/img1.jpg"
          alt="sdfgh"
        />
        <img
          style={{ width: 300, height: 300 }}
          src="/Assets/img2.png"
          alt="sdfgh"
        />
        <img
          style={{ width: 300, height: 300 }}
          src="/Assets/img1.jpg"
          alt="sdfgh"
        />
        <img
          style={{ width: 300, height: 300 }}
          src="/Assets/img2.png"
          alt="sdfgh"
        />
        <img
          style={{ width: 300, height: 300 }}
          src="/Assets/img1.jpg"
          alt="sdfgh"
        />
      </ReactSimplyCarousel>
    </Box>
  );
};

export default ImgCarousel;
