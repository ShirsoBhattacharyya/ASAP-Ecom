import React from 'react'
import { Box, Flex, Button, Text, Image } from "@chakra-ui/react";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import { useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';

const ProductPage = () => {
  const [product,setProduct]=useState({});
  const {category,id}=useParams();
  console.log(category,id);
  const getProductData=(category,id)=>{
    axios.get(`http://localhost:8000/products/${category}/${id}`).then(res=>setProduct(res.data[0]))
  }
  useEffect(()=>{getProductData(category,id)},[])
  console.log(product);
  const colors=["red","black","crimson","teal"];
  const [user_id,email,password]=useSelector(store=>store.auth.token).split(':');
  console.log(user_id);
  const addproducts=async(productsId)=>{
    if(user_id===""){
      alert('Please Login First')
    }else{
      let cart=await axios.post(`https://asap-backend-server-deploy.herokuapp.com/carts/${user_id}`,{
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
  return (
    <div className='app'>
      <Flex className='details' mt='10rem' justifyContent='space-around' flexWrap='wrap' alignItems='center'>
        <Box className='big-img'>
          <Image src={product.image}/>
        </Box>
        <Box className='box'>
          <Box className='row'>
            <h2 style={{fontWeight:'800',fontSize:'22px'}}>{product.title}</h2>
            <span style={{marginTop:'5px'}}>₹{product.price}</span>
          </Box>
          <Text>{product.keyword}</Text>
          <Flex justifyContent={'left'} mb='1rem'>
            <ReactStars size={20} half={false} value={4}/>
          </Flex>
          <Box>
            {
                colors.map((color, index) =>(
                    <Button style={{backgroundColor: color,margin:'2px'}} key={index}></Button>
                ))                
            } 
          </Box>
          <Text>{product.desc}</Text>
          <Button colorScheme={'red'} onClick={()=>handlecart(id)}>Add to Cart</Button>
        </Box>
      </Flex>
    </div>
  )
}

export default ProductPage;