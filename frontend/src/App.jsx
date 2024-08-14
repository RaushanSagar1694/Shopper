import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/navbar';
import Shop from './Component/Pages/Shop';
import ShopCategory from './Component/Pages/ShopCategory';
import Product from './Component/Pages/Product';
import Card from './Component/Pages/Card';
import LoginSignup from './Component/Pages/LoginSignup';
import Footer from './Component/Footer/Footer';
import Men from "./Component/Image/men-banner.jpg";
import Women from "./Component/Image/women-banner.jpg";
import Kid from "./Component/Image/kid-banner.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={< ShopCategory banner={Men} category="men" />} />
        <Route path='/womens' element={< ShopCategory banner={Women} category="women" />} />
        <Route path='/kids' element={< ShopCategory banner={Kid} category="kid" />} />
        <Route path='/product' element={<Product />} >
            <Route path=':productId'   element={ <Product/> }/>
        </Route>
        <Route path='/card' element={<Card />} />
        <Route path='/loginsignup' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
