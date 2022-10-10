import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  Checkbox,
  CheckboxGroup,
  Button,
} from "@chakra-ui/react";
import { IoIosAdd } from "react-icons/io";
import { HiMinusSm } from "react-icons/hi";
import ReactStars from "react-rating-stars-component";

import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Women = () => {
  const [data, setData] = useState([]);
  const getWomen = async () => {
    let res = await axios.get(
      `https://asap-backend-server-deploy.herokuapp.com/products/Women`
    );
    setData(res.data);
  };
  console.log(data);
  useEffect(() => {
    getWomen();
  });
  let auth = useSelector(store => store.auth);
  let [id, email, password] = auth.token.split(":");
  const addproducts=async(productsId)=>{
    if(id===""){
      alert('Please Login First')
    }else{
      let cart=await axios.post(`https://asap-backend-server-deploy.herokuapp.com/carts/${id}`,{
      productsId,
        quantity:1
      })
      console.log("cart",cart)
      console.log("proid",productsId)
      alert('Added to Cart');
    }
  }
  
  const handlecart=(productsId)=>{
    addproducts(productsId)
  }
  const navigate=useNavigate();
  const AddProps=(category,id)=>{
  return navigate(`/products/${category}/${id}`)
  }
  return (
    <>
      <Box mt={"5%"}>
        {/* <Box style={{ width: "100%" }}>
          <Image src="https://i.pinimg.com/originals/45/19/f5/4519f59b3bcce4d7c99f6d1a9e0d4077.jpg" />
        </Box> */}
      </Box>

      <Flex>
        <Box mt="4%" width="17%" p={5} position="fixed" border={"1px solid pink"}>
          <Text fontSize={"xl"} fontWeight="bold">
            Refine by
          </Text>
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton mt={"5%"}>
                      <Box flex="1" textAlign="left">
                        Gender
                      </Box>
                      {isExpanded ? (
                        <HiMinusSm fontSize="12px" />
                      ) : (
                        <IoIosAdd fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <SimpleGrid columns={1}>
                      <Checkbox>Men</Checkbox>
                      <Checkbox>Women</Checkbox>
                    </SimpleGrid>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton mt={"5%"}>
                      <Box flex="1" textAlign="left">
                        Category
                      </Box>
                      {isExpanded ? (
                        <HiMinusSm fontSize="12px" />
                      ) : (
                        <IoIosAdd fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <SimpleGrid columns={1}>
                      <Checkbox>Kurtas</Checkbox>
                      <Checkbox>Suits</Checkbox>
                      <Checkbox>Sarees</Checkbox>
                      <Checkbox>Dresses</Checkbox>
                      <Checkbox>Froks</Checkbox>
                    </SimpleGrid>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton mt={"5%"}>
                      <Box flex="1" textAlign="left">
                        Price
                      </Box>
                      {isExpanded ? (
                        <HiMinusSm fontSize="12px" />
                      ) : (
                        <IoIosAdd fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <SimpleGrid columns={1}>
                      <Checkbox>Below ₹500</Checkbox>
                      <Checkbox>₹500-₹1000</Checkbox>
                      <Checkbox>₹1500-₹3000</Checkbox>
                      <Checkbox>₹4500-₹8000</Checkbox>
                    </SimpleGrid>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton mt={"5%"}>
                      <Box flex="1" textAlign="left">
                        Brands
                      </Box>
                      {isExpanded ? (
                        <HiMinusSm fontSize="12px" />
                      ) : (
                        <IoIosAdd fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <SimpleGrid columns={1}>
                      <Checkbox>Aarika ethenic</Checkbox>
                      <Checkbox>Arsha</Checkbox>
                      <Checkbox>Arrhaa</Checkbox>
                    </SimpleGrid>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton mt={"5%"}>
                      <Box flex="1" textAlign="left">
                        Occasion
                      </Box>
                      {isExpanded ? (
                        <HiMinusSm fontSize="12px" />
                      ) : (
                        <IoIosAdd fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <SimpleGrid columns={1}>
                      <Checkbox>Festival</Checkbox>
                      <Checkbox>Function</Checkbox>
                      <Checkbox>Party</Checkbox>
                    </SimpleGrid>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton mt={"5%"}>
                      <Box flex="1" textAlign="left">
                        Colour
                      </Box>
                      {isExpanded ? (
                        <HiMinusSm fontSize="12px" />
                      ) : (
                        <IoIosAdd fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <SimpleGrid columns={1}>
                      <Checkbox>Red</Checkbox>
                      <Checkbox>Black</Checkbox>
                      <Checkbox>Blue</Checkbox>
                      <Checkbox>Green</Checkbox>
                      <Checkbox>Yellow</Checkbox>
                      <Checkbox>Navy</Checkbox>
                    </SimpleGrid>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>

        <Box mt="3%" ml="19%" width={"100%"}>
          <SimpleGrid columns={[2, 3, 4, 4]} gap={6}>
            {data.map((d) => {
              return (
                <>
                  <Box key={d._id}>
                    <Box onClick={()=>AddProps(d.category,d._id)}>
                      <Image
                        borderRadius="8px"
                        margin={"auto"}
                        mt={3}
                        height="350px"
                        src={d.image}
                      />
                    </Box>
                    <Box height={"20px"}>
                      <Text
                        overflow="hidden"
                        textOverflow={"ellipsis"}
                        whiteSpace="nowrap"
                        fontSize="16px"
                        textAlign={"center"}
                      >
                        {d.title}
                      </Text>
                    </Box>
                    <Flex justifyContent={'center'}>
                      <ReactStars size={20} half={false} value={4}/>
                    </Flex>
                    <Flex justifyContent={"center"}>
                      <Button m={2} onClick={()=>handlecart(d._id)} colorScheme={"red"}>
                        Add To Cart
                      </Button>
                    </Flex>
                  </Box>
                </>
              );
            })}
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default Women;
