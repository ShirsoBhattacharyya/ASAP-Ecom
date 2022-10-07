import React, { useEffect, useState } from "react";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios"

const Women = () => {
  const [data,setData]=useState([])
  const getWomen=async()=>{
    let res=await axios.get(`https://sale-asos-women.herokuapp.com/popups`)
    setData(res.data)
  }
  useEffect(()=>{
    getWomen()
  })
  return (
    <>
      <Box mt={"5%"}>
        <Box style={{ width: "100%" }}>
          <Image src="https://i.pinimg.com/originals/45/19/f5/4519f59b3bcce4d7c99f6d1a9e0d4077.jpg" />
        </Box>
        <Flex>
          <Box width="14.5%" p={5} position="fixed" border={"2px solid"}>

          </Box>
          <Box ml="17%" width={'100%'}>
          <SimpleGrid columns={[2,3,4,4]} gap={8}  m={9}>
            {
              data.map((d)=>{
                return(
                  <>
                  <Box border={"1px solid red"}>
                    <Image margin={"auto"}  pt={3} src={d.image}/>
                    <Text font textAlign={"center"}>{d.title}</Text>
                  </Box>
                  
                  </>
                )
              })
            }
          </SimpleGrid >
          </Box>
          </Flex>
      </Box>
    </>
  );
};

export default Women;
