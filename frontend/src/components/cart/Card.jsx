import { Box, Button, Flex, Image, Input, Select, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';




const Card = ({cartItem,removePro,quantityChange}) => {

  

console.log("CartItem:",cartItem)




  return (<>
   {cartItem && cartItem.map((item)=>{

return (<Box key={item._id} margin="auto"  mb="20px" pl="15px" pr="20px"  width="98%" height='200px'  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" borderRadius={"10px"} >
    <Flex justifyContent="space-between">
   
      <Image height='198px' p={"1em"} borderRadius="20px"  src={item.productsId.image} alt="cartImage"/>
      <Box  width="60%" height='198px' p={"1em"}>
        <Flex><Text fontWeight="600">Title :</Text><Text ml="60px">{item.productsId.title}</Text></Flex>
       
        <Flex mt="10px"><Text fontWeight="600">Description :</Text><Text ml="8px" width="400px">{item.productsId.desc}</Text></Flex>
       
        <Flex mt="10px" alignItems="center">
          <Text fontWeight="600">Size :</Text>
        <Select focusBorderColor='none' width="70px" ml="60px">
          <option>s</option>
          <option>m</option>
          <option>l</option>
          <option>xl</option>
        </Select>
        {/* <Box>|</Box> */}
        <Text fontWeight="600">Qty :</Text>
        <Select focusBorderColor='none' width="70px" ml="60px" onChange={(e)=>{quantityChange(item,e.target.value)}}>
        <option>{item.quantity}</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Select>
        
        
        
        </Flex>
      </Box>
      <Box height='198px' p={"1em"}>
        <Flex><Box width="5px" bgColor={"#176c93"}></Box><Flex bgColor="#e1ecf1" width="130px" pl="5px" pr="5px"><Text fontWeight={"600"}>Price : </Text><Text >₹ {item.productsId.price}/-</Text></Flex></Flex>
      
        <Box mt="71px">
        {/* <Button key={item._id} variant={"outline"} color="#176c93" onClick={()=>deleteSingleItem({productsId:item.productsId._id})} ><AiFillDelete   /> <Text ml="10px" color="#176c93">Delete</Text></Button> */}
        <Button  variant={"outline"} color="#176c93" onClick={()=>removePro(item._id)}  ><AiFillDelete pr="10px" />Delete</Button>
        </Box>
      </Box>

    </Flex>

   </Box>




)

   })}
   
   </>
  )
}

export default Card