import React from 'react'
import { Box, Flex, Input, Text, Image } from "@chakra-ui/react";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [product,setProduct]=useState({});
  const {category,id}=useParams();
  console.log(category,id);
  const getProductData=(category,id)=>{
    axios.get(`http://localhost:8000/products/${category}/${id}`).then(res=>setProduct(res.data[0]))
  }
  useEffect(()=>{getProductData(category,id)},[])
  console.log(product);
  return (
    <div style={{height:'800px'}}>
      <Flex mt='10rem' justifyContent='center' gap='20%' alignItems='center'>
        <Image src={product.image}/>
        <Box>
          <Text>{product.title}</Text>
          <Text>{product.keyword}</Text>
          <Text>{product.desc}</Text>
        </Box>
      </Flex>
    </div>
  )
}

export default ProductPage;