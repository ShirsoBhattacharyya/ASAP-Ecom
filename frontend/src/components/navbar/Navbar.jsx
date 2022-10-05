import React from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { RiShoppingCartFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import LoginPage from "../../pages/loginPage/LoginPage";

const Navbar = () => {
  return (
    <>
      <Box
        width={"100%"}
        border="1px solid"
        position="fixed"
        top="0"
        zIndex={5}
        bg="white"
        
      >
        <Flex alignItems="center" justifyContent="center" gap={"55%"}>
          <Flex alignItems="center" gap="10%">
            <NavLink to="/">
              <Box>ASAP</Box>
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
                <RiShoppingCartFill />
              </Box>
            </NavLink>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
