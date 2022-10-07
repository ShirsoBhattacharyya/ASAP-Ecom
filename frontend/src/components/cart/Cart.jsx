import React from 'react'
import { Box, Button, Flex, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'
import adv from "./images/adv.jpg"
import Card from './Card'


const Cart = () => {
  return (
     <>
    <Box mt={"5%"} /*border="1px solid black"*/  mb="1%">
      <Image width="100%" height="100px" src={adv} alt="image"  />
      <Box  /*border="1px solid green"*/ mt="1%" width="100%">
        <Flex justifyContent={"space-between"}>
          {/* Cart box */}

       
          <Box width="65%" ml="10px" /*border="1px solid red"*/ minH="550px" >

          <Card />
          <Card />
          <Card />
          <Card />


          </Box>

             
          {/* Amount description box */}

          <Flex flexDir={"column"} gap="12px" width="500px" position="sticky" top="70px" pl="1.5em" pt="1em" pr="1.5em" borderRadius={"10px"} mr="20px" columnGap="10px" height="500px" boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em" >
          <Text fontSize={"20px"} fontWeight="600" mb="15px">Order Details</Text>
          <Flex justifyContent={"space-between"} ><Text fontWeight={"400"}>Bag total </Text><Text fontWeight={"600"}>₹2,499.00/-</Text></Flex>
          <Flex justifyContent={"space-between"} ><Text fontWeight={"400"}>Bag discount </Text><Text fontWeight={"600"}>- ₹560/-</Text></Flex>
          <Flex justifyContent={"space-between"} ><Text fontWeight={"400"}>Convenience Fee : </Text ><Text fontWeight={"400"} color="#176c93" fontSize='14px'>What's this?</Text></Flex>
          <Flex justifyContent={"space-between"} ><Text fontWeight={"400"}>Delivery Fee </Text><Text fontWeight={"600"}>₹99/-</Text></Flex>
          <Flex justifyContent={"space-between"} ><Text fontSize={"20px"} fontWeight={"600"}>Total Amount</Text><Text fontSize={"20px"} fontWeight={"600"}>₹1,874.00</Text></Flex>
          
          <Button width="100%" color="white" bgColor="#d5a249" fontWeight="600" fontSize="23px" mt="15px" p="1.5em" _hover={{bgColor:"teal"}} >PROCEED TO SHIPPING</Button>
          <Text mt="18px" color="#176c93">Having Coupon ?</Text>
          <Flex gap="10px" mt="12px"><Input p="1.3em" focusBorderColor='none' placeholder='Enter Coupon code here'></Input> <Button p="1.3em" width="100px" variant="outline">APPLY</Button></Flex>
          </Flex>

        </Flex>
      </Box>
 
    </Box>
    
    </>
  )
}

export default Cart