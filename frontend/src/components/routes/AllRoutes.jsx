import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../../privateroutes/PrivateRoute'
import HomePage from '../../pages/homePage/HomePage'
import ProductPage from '../../pages/productPage/ProductPage'
import Cart from '../cart/Cart'
import Footer from '../footer/Footer'
import Kids from '../kids/Kids'
import Men from "../men/Men"
import Navbar from '../navbar/Navbar'
import Women from "../women/Women"


const AllRoutes = () => {
  return (
    <>
    <Navbar/>

    <Routes>
    <Route  path='/' element={<HomePage/>} />
    <Route  path='/products/:category/:id' element={<ProductPage/>} />
    <Route  path='/products/Men' element={<Men/>} />
    <Route  path='/products/Women' element={<Women/>} />
    <Route  path='/products/Kids' element={<Kids/>} />
    <Route path='/cart' element={
      <PrivateRoute>
        <Cart/>
      </PrivateRoute>
    } />


    </Routes>
    <Footer/>
    
    
    
    </>
  )
}

export default AllRoutes