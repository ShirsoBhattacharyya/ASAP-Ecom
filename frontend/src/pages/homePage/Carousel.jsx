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
            src="https://i.pinimg.com/originals/45/19/f5/4519f59b3bcce4d7c99f6d1a9e0d4077.jpg"
            alt="outlook1"
          />
        </Box>
        <Box>
          <Image
          height={["200px","300px","400px","500px"]}
          
            style={{ width: "100%", }}
            src="https://assetscdn1.paytm.com/images/catalog/view_item/787363/1617369550601.jpg?imwidth=1600&impolicy=hq
"
            alt="outlook1"
          />
        </Box>
        <Box>
          <Image
          height={["200px","300px","400px","500px"]}
          
            style={{ width: "100%", }}
            src="https://cdn.fcglcdn.com/brainbees/images/marketing/d/fashion_week/banner-1-24092018.jpg
            "
            alt="outlook1"
          />
        </Box>
      </Carousel>


    
    </>
  );
};

export default Asapcarousel;
