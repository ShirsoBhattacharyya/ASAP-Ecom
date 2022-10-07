import React from "react";
import { Box, Flex, Input, Text, Image } from "@chakra-ui/react";
import { RiShoppingCartFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import LoginPage from "../../pages/loginPage/LoginPage";
import Logo from '../../assets/asap-logo.png';

const Navbar = () => {
  return (
    <>
      <Box
        width={"100%"}
       
        position="fixed"
        top="0"
        zIndex={5}
        bg="white"
        
      >
        <Flex alignItems="center" justifyContent="center" gap={"45%"} padding="0.5rem 0">
          <Flex alignItems="center" gap="10%">
            <NavLink to="/">
              <Box><Image src={Logo}/></Box>
            </NavLink>
            <NavLink to="/products/men">
              <Box>
                <Text fontWeight="semibold">Men</Text>
              </Box>
            </NavLink>
            <NavLink to="/products/women">
              <Box>
                <Text fontWeight="semibold">Women</Text>
              </Box>
            </NavLink>

            <NavLink to="/products/kids">
              <Box>
                <Text fontWeight="semibold">Kids</Text>
              </Box>
            </NavLink>
          </Flex>
          <Flex alignItems="center" gap="30px" justifyContent="space-around">
            <Box>
              <Input variant='flushed' placeholder="Search Products...." />
            </Box>
            <NavLink to="/login">
              <Box>
               <LoginPage/>
              </Box>
            </NavLink>

            <NavLink to="/cart">
              <Box>
                <RiShoppingCartFill size={26}/>
              </Box>
            </NavLink>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
