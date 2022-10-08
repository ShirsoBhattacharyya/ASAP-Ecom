import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Asapcarousel from "./Carousel";
import Carousel from "react-elastic-carousel";
import womens from "../../assets/women.jpg"
import mens from "../../assets/men.jpg"
import kid from "../../assets/kids.jpg"


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const women = [
  {
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210427/itU2/608709dff997dd7b64c337e5/karigari_mustard_printed_sleeveless_a-line_kurta.jpg",
    title: "Printed Mustard Sleeveless A-line Kurta",
  },
  {
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220201/WhoA/61f962fdaeb26921af854522/karigari_orange_printed_straight_kurta_with_insert_pocket.jpg",
    title: "Orange Printed Straight Kurta",
  },
  {
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220801/mdXP/62e7f81aaeb26921afb70e52/nike_black_logo_print_leggings_with_elasticated_waist.jpg",
    title: "Nike black logo leggings",
  },
  {
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220316/OwTm/6230e2fdf997dd03e2153d18/nike_grey_logo_print_crew-neck_t-shirt.jpg",
    title: "Logo Print Crew-Neck T-Shirt",
  },
  {
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220415/zW1Y/625991ddaeb26921af240b15/nike_black_hoodie_with_drawstring.jpg",
    title: "Black Hoodie with drawstring",
  },
  {
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211119/ua5f/61969f18f997ddf8f10de881/nike_white_crew-neck_t-shirt_with_brand_logo.jpg",
    title: "Crew Neck TShirt with Brand Logo",
  }
];


const men = [
  {
    image:
      "https://static.zara.net/photos///2022/I/0/1/p/7545/401/420/2/w/202/7545401420_2_1_1.jpg?ts=1664812664064",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/2/p/7545/508/401/2/w/202/7545508401_1_1_1.jpg?ts=1663263849983",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/2/p/7545/507/800/2/w/202/7545507800_1_1_1.jpg?ts=1664274756141",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/2/p/5588/320/250/2/w/202/5588320250_1_1_1.jpg?ts=1664274752379",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/2/p/0495/403/442/3/w/202/0495403442_1_1_1.jpg?ts=1658244588552",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/2/p/0775/317/250/2/w/202/0775317250_1_1_1.jpg?ts=1663231622534",
    title: "HIGH-WAIST TROUSERS",
  }
];


const kids = [
  {
    image:
      "https://static.zara.net/photos///2022/I/0/3/p/5767/534/802/202/w/1230/5767534802_15_1_1.jpg?ts=1664811719032",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/3/p/2211/525/807/202/w/602/2211525807_15_1_1.jpg?ts=1664811718963",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/3/p/2211/525/807/2/w/287/2211525807_6_1_1.jpg?ts=1663075661240",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/3/p/5644/631/300/202/w/602/5644631300_15_1_1.jpg?ts=1664526587032",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/3/p/3597/552/620/202/w/602/3597552620_15_1_1.jpg?ts=1664526586481",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/3/p/5536/569/803/2/w/287/5536569803_6_1_1.jpg?ts=1662712513783",
    title: "HIGH-WAIST TROUSERS",
  }
];

const HomePage = () => {
  return (
    <>
      <Box variant="ghost" mt={["16%", "15%", "11%", "8%"]}>
        <Asapcarousel />
      </Box>
      <hr/>
      <Box>
        <Image width='100%' src='https://assets.ajio.com/cms/AJIO/WEB/D-dazzlingfashionpicks-header.jpg'/>
      </Box>
      {/* Women */}
      <Box backgroundColor="#ecf4ff" pt={"2rem"}>
        <Flex gap={2}>
          <Box>
            <Image src={womens}/>
          </Box>
          <Box width={"70%"}  >
            <Carousel 
         breakPoints={breakPoints} >
              {women.map((item) => (
                <>
                
             <Box mb="1rem" boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'} borderRadius="8px">
                 <Image cursor={"pointer"} height={"300px"} width="300px"  src={item.image} alt="pic" borderTopLeftRadius='8px' borderTopRightRadius='8px'/>
                 <Box p='1rem 0' backgroundColor='#fff' borderBottomLeftRadius="8px" borderBottomRightRadius="8px">
                    <Text p='0 1rem' fontWeight='500' fontSize='14px'>{item.title}</Text>
                    <Button m='0 1rem' colorScheme='red'>Add to Cart</Button>
                  </Box>
             </Box>
             
              </>
              ))}
            </Carousel>
          </Box>
        </Flex>
      </Box>
      <hr/>
      <Box>
        <Image width='100%' src='https://assets.ajio.com/cms/AJIO/WEB/D-header%20222.jpg'/>
      </Box>
{/* Kids */}
<Box bg="#d2fef1" pt={"2rem"}  >
        <Flex gap={2}>
         
          <Box width={"70%"}   >
            <Carousel 
         breakPoints={breakPoints}>
              {kids.map((item) => (
                <Box mb="1rem" boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'} borderRadius="8px">
                  <Image cursor={"pointer"} height={"300px"} width="300px"  src={item.image} alt="pic" borderTopLeftRadius='8px' borderTopRightRadius='8px'/>
                  <Box p='1rem 0' backgroundColor='#fff' borderBottomLeftRadius="8px" borderBottomRightRadius="8px">
                    <Text p='0 1rem' fontWeight='500' fontSize='22px'>{item.title}</Text>
                    <Button m='0 1rem' colorScheme='red'>Add to Cart</Button>
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
          <Box  width="30%">
            <Image src={kid} />
          </Box>
        </Flex>
      </Box>
      <hr/>
      <Box>
        <Image width='100%' src='https://assets.ajio.com/cms/AJIO/WEB/D-Stylestoshinein-header.jpg'/>
      </Box>
{/* Men */}
<Box bg="#ffe4d3" pt={"2rem"} >
        <Flex gap={2}>
        <Box   width="30%">
            <Image src={mens} />
          </Box>
         
          <Box width={"70%"}  >
            <Carousel 
         breakPoints={breakPoints}>
              {men.map((item) => (
                <Box mb="1rem" boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'} borderRadius="8px">
                  <Image cursor={"pointer"} height={"300px"} width="300px"  src={item.image} alt="pic" borderTopLeftRadius='8px' borderTopRightRadius='8px'/>
                  <Box p='1rem 0' backgroundColor='#fff' borderBottomLeftRadius="8px" borderBottomRightRadius="8px">
                    <Text p='0 1rem' fontWeight='500' fontSize='22px'>{item.title}</Text>
                    <Button m='0 1rem' colorScheme='red'>Add to Cart</Button>
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>    
        </Flex>
      </Box>
      <hr/>
      <Box>
        <Image src='https://assets.ajio.com/cms/AJIO/WEB/51.1.jpg' alt='Offers' margin='auto' width='100%'/>
      </Box>
    </>
  );
};

export default HomePage;
