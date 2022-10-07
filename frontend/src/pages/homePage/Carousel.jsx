import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Asapcarousel = () => {

  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={1000}
        infiniteLoop={true}
        showStatus={false}
        showArrows={true}
      >
        <Box>
          <Image
          height={["200px","300px","400px","500px"]}
          
            style={{ width: "100%", }}
            src="https://assets.ajio.com/cms/AJIO/WEB/07102022-d-unisex-main-p1-brands-flat70.png"
            alt="img1-banner"
          />
        </Box>
        <Box>
          <Image
          height={["200px","300px","400px","500px"]}
          
            style={{ width: "100%", }}
            src="https://assets.ajio.com/cms/AJIO/WEB/07102022-D-MHP-maincarousel-p3-premiumbrands-4070.jpg"
            alt="img2-banner"
          />
        </Box>
        <Box>
          <Image
          height={["200px","300px","400px","500px"]}
          
            style={{ width: "100%", }}
            src="https://assets.ajio.com/cms/AJIO/WEB/07102022-WHP-D-maincarousel-p2-dnmx-teamspirit-upto70.jpg"
            alt="img3-banner"
          />
        </Box>
        <Box>
          <Image
          height={["200px","300px","400px","500px"]}
          
            style={{ width: "100%", }}
            src="https://assets.ajio.com/cms/AJIO/WEB/07102022-D-KHP-topbannercarousel-p7-brands-min30.jpg"
            alt="img4-banner"
          />
        </Box>
      </Carousel>


    
    </>
  );
};

export default Asapcarousel;
