import React from "react";
import { Box, Flex, Input, Text, Image } from "@chakra-ui/react";
import { RiShoppingCartFill } from "react-icons/ri";
import {MdOutlineFavoriteBorder,MdSearch} from 'react-icons/md';
import { NavLink } from "react-router-dom";
import LoginPage from "../../pages/loginPage/LoginPage";
import Logo from '../../assets/asap-logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <Box
        width={"100%"}
        borderTop='5px solid #2c4152'
        position="fixed"
        top="0"
        zIndex={5}
        bg="white"
        
      >
        <Flex alignItems="center" justifyContent="center" gap={"35%"} padding="0.5rem 0">
          <Flex alignItems="center" gap="10%" marginTop="1rem">
            <NavLink to="/">
              <Box><Image src={Logo} height='100px' width='320px' pb={'10px'}/></Box>
            </NavLink>
            <NavLink to="/products/men">
              <Box>
                <Text className={styles.fontStyle}>MEN</Text>
              </Box>
            </NavLink>
            <NavLink to="/products/women">
              <Box>
                <Text className={styles.fontStyle}>WOMEN</Text>
              </Box>
            </NavLink>

            <NavLink to="/products/kids">
              <Box>
                <Text className={styles.fontStyle}>KIDS</Text>
              </Box>
            </NavLink>
          </Flex>
          <Box>
            <Flex gap="25px" m='0.65rem' ml={'4rem'} alignItems='center'>
                <Box>
                  <LoginPage/>
                </Box>
              <Text>Customer Care</Text>
              <Box backgroundColor='black' p="1rem">
                <Text color="white">
                  VisitASAPLuxe
                </Text>
              </Box>
            </Flex>
            <Flex alignItems="center" gap="30px" justifyContent="space-around">
              <Flex alignItems='center' border='1px solid' borderRadius='8px' p='0 0.5rem'>
                <MdSearch size={30}/>
                <Input border='none' _focus={{outline:'none'}} width='300px' placeholder="Search Latest Products ASAP" />
              </Flex>
                <Box>
                <MdOutlineFavoriteBorder size={30}/>
                </Box>
              <NavLink to="/cart">
                <Box>
                  <RiShoppingCartFill size={30}/>
                </Box>
              </NavLink>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
