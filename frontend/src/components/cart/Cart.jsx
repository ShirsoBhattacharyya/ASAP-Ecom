import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Image, Input, SimpleGrid, Text, Toast } from '@chakra-ui/react'
import adv from "./images/adv.jpg"
import Card from './Card'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useSelector } from 'react-redux'


const getCartItems=(id)=>{

return axios.get(`https://asap-backend-server-deploy.herokuapp.com/carts/${id}`)


}


const Cart = () => {

  let [cartItem,setCartItem]=useState([])
  let [cartSum,setCartSum]=useState(0);
  let auth = useSelector(store => store.auth);
  let [id, email, password] = auth.token.split(":"); 


useEffect(()=>{

  updateCartItems(id)

},[])

useEffect(()=>{

  setCartSum(cartItem.reduce((acc,cur)=>acc+(Number(cur.productsId.price))*(Number(cur.quantity)),0))
  console.log("1",cartSum)

},[cartItem])


const updateCartItems=(id)=>{

  getCartItems(id).then((res)=>{setCartItem(res.data)
 
})
}

const removePro = async (p_id) => {
  const res = await axios.delete(
    `https://asap-backend-server-deploy.herokuapp.com/carts/${p_id}`
  );
    updateCartItems(id);
};

const quantityChange = async (item,qty,userid=id) => {
  console.log(item.quantity)
  console.log("Quantity: ",qty)
  const res = await axios.post(`https://asap-backend-server-deploy.herokuapp.com/carts/${userid}`,{productsId:item.productsId._id,quantity:qty});
    updateCartItems(userid);
};

console.log(cartItem)


  const toast = useToast()
  return (
     <>
    <Box mt={"8%"} /*border="1px solid black"*/  mb="1%">
      <Image width="100%" height="100px" src={adv} alt="image"  />
      <Box  /*border="1px solid green"*/ mt="1%" width="100%">
        <Flex justifyContent={"space-between"}>
          {/* Cart box */}

       
          <Box width="65%" ml="10px" /*border="1px solid red"*/ minH="550px" >

          <Card cartItem={cartItem} removePro={removePro} quantityChange={quantityChange} />
          {/* <Card />
          <Card />
          <Card /> */}


          </Box>

             
          {/* Amount description box */}

          <Flex flexDir={"column"} gap="12px" width="500px" position="sticky" top="70px" pl="1.5em" pt="1em" pr="1.5em" borderRadius={"10px"} mr="20px" columnGap="10px" height="500px" boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em" >
          <Text fontSize={"20px"} fontWeight="600" mb="15px">Order Details</Text>
          <Flex justifyContent={"space-between"} ><Text fontWeight={"400"}>Bag total </Text><Text fontWeight={"600"}>₹{cartSum}.00/-</Text></Flex>
          <Flex justifyContent={"space-between"} ><Text fontWeight={"400"}>Bag discount </Text><Text fontWeight={"600"}>- ₹560/-</Text></Flex>
          <Flex justifyContent={"space-between"} ><Text fontWeight={"400"}>Convenience Fee : </Text ><Text fontWeight={"400"} color="#176c93" fontSize='14px'>What's this?</Text></Flex>
          <Flex justifyContent={"space-between"} ><Text fontWeight={"400"}>Delivery Fee </Text><Text fontWeight={"600"}>₹99/-</Text></Flex>
          <Flex justifyContent={"space-between"} ><Text fontSize={"20px"} fontWeight={"600"}>Total Amount</Text><Text fontSize={"20px"} fontWeight={"600"}>₹{cartSum-560+99}.00</Text></Flex>
          
          <Button width="100%" color="white" bgColor="#d5a249" fontWeight="600" fontSize="23px" mt="15px" p="1.5em" _hover={{bgColor:"teal"}}  onClick={() =>
        toast({
          position: 'top-center',
          title: 'Order Placed.',
          description: "We've taken your last delivery address by default.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      } >PROCEED TO SHIPPING</Button>
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