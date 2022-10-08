import { Box, Button, Flex, Image, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillDelete } from 'react-icons/ai';

const Card = () => {
  return (
   <>
   <Box margin="auto"  mb="20px" pl="15px" pr="20px"  width="98%" height='200px'  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" borderRadius={"10px"} >
    <Flex justifyContent="space-between">
      <Image height='198px' p={"1em"} borderRadius="20px"  src="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/a/ca80f68GIVAX00000075_1.jpg" alt="cartImage"/>
      <Box  width="55%" height='198px' p={"1em"}>
        <Flex><Text fontWeight="600">Title :</Text><Text>Lips naa dekho</Text></Flex>
        <br></br>
        <Flex><Text fontWeight="600">Description :</Text><Text>Lips naa dekho</Text></Flex>
        <br></br>
        <Flex alignItems="center"><Text fontWeight="600">Size :</Text>
        <Select focusBorderColor='none' width="70px" ml="10px">
          <option>s</option>
          <option>m</option>
          <option>l</option>
          <option>xl</option>
        </Select></Flex>
      </Box>
      <Box height='198px' p={"1em"}>
        <Flex><Box width="5px" bgColor={"#176c93"}></Box><Flex bgColor="#e1ecf1" pl="5px" pr="5px"><Text fontWeight={"600"}>Price : </Text><Text>Rs 5560/-</Text></Flex></Flex>
        <Box mt="71px">
        <Button variant={"outline"} color="#176c93"  ><AiFillDelete   /> <Text ml="10px" color="#176c93">Delete</Text></Button>
        </Box>
      </Box>

    </Flex>

   </Box>
   </>
  )
}

export default Card