import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../../contexts/PrivateRoute'
import HomePage from '../../pages/homePage/HomePage'
import LoginPage from '../../pages/loginPage/LoginPage'
import ProductsPage from '../../pages/productPage/ProductPage'
import SignUp from '../../pages/signupPage/SignUp'
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
    <Route  path='/products/:category/:id' element={<ProductsPage/>} />
    <Route  path='/products/men' element={<Men/>} />
    <Route  path='/products/women' element={<Women/>} />
    <Route  path='/products/kids' element={<Kids/>} />
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