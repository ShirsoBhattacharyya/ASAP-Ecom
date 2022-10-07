import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
      "https://static.zara.net/photos///2022/I/0/1/p/8216/707/645/2/w/750/8216707645_1_1_1.jpg?ts=1660821808747",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/1/p/8457/707/600/2/w/602/8457707600_15_1_1.jpg?ts=1660822613272",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/1/p/4437/265/800/2/w/602/4437265800_2_1_1.jpg?ts=1660821001541",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/1/p/8461/268/500/2/w/602/8461268500_1_1_1.jpg?ts=1660820972049",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/1/p/4437/246/800/17/w/437/4437246800_2_1_1.jpg?ts=1660820936015",
    title: "HIGH-WAIST TROUSERS",
  },
  {
    image:
      "https://static.zara.net/photos///2022/I/0/1/p/8463/277/330/2/w/602/8463277330_1_1_1.jpg?ts=1660821820809",
    title: "HIGH-WAIST TROUSERS",
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
      <Box variant="ghost" mt={["12%", "10%", "7%", "5%"]}>
        <Asapcarousel />
      </Box>

      <Box mt={["12%", "10%", "7%", "3%"]} backgroundColor="#ecf4ff " pt={"3rem"} >
        <Flex gap={2}>
          <Box height="390px" width="30%">
            <Image src={womens} />
          </Box>
          <Box width={"70%"}  height="390px" >
            <Carousel 
         breakPoints={breakPoints}>
              {women.map((item) => (
                <>
                
             <Box>
                 <Image cursor={"pointer"} height={"300px"} width="300px"  src={item.image} alt="pic"/>
              <Box>
                <Text>{item.title}</Text></Box>
             </Box>
             
              </>
              ))}
            </Carousel>
          </Box>
        </Flex>
      </Box>
{/* kids */}

<Box mt={["12%", "10%", "7%", "3%"]} bg="#d2fef1" pt={"3rem"}  >
        <Flex gap={2}>
         
          <Box width={"70%"}  height="390px"  >
            <Carousel 
         breakPoints={breakPoints}>
              {kids.map((item) => (
                <Image cursor={"pointer"} height={"300px"} width="300px"  src={item.image} alt="pic"/>
              ))}
            </Carousel>
          </Box>
          <Box height="390px" width="30%">
            <Image src={kid} />
          </Box>
        </Flex>
      </Box>
{/* men */}

<Box mt={["12%", "10%", "7%", "3%"]} bg="#ffe4d3" pt={"3rem"} >
        <Flex gap={2}>
        <Box  height="390px" width="30%">
            <Image src={mens} />
          </Box>
         
          <Box width={"70%"}  height="390px" >
            <Carousel 
         breakPoints={breakPoints}>
              {men.map((item) => (
                <Image cursor={"pointer"} height={"300px"} width="300px"  src={item.image} alt="pic"/>
              ))}
            </Carousel>
          </Box>
         
        </Flex>
      </Box>

    </>
  );
};

export default HomePage;
