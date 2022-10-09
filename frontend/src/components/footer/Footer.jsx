import React from 'react';
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import footertop from '../../assets/footer-top-img.png';
import footerbottom from '../../assets/footer-bottom-img.png';
const Footer = () => {
  return (
    <div>
      <Box>
        <Image src={footertop} width="100%"/>
      </Box>
      <Box>
        <Image src={footerbottom} width="100%"/>
      </Box>
    </div>
  )
}

export default Footer