import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceHolder from './pages/PlaceHolder/PlaceHolder'
import Footer from './Components/Footer/Footer'
import LoginPage from './Components/LoginPage/LoginPage'


function App() {
  const [ShowLogin,setShowLogin]=useState(false)

  return (
    <>
   
    <Navbar setShowLogin={setShowLogin}/>
    {ShowLogin?<LoginPage setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart S/>}/>
        <Route path='/order' element={<PlaceHolder/>}/> 
        
      </Routes>
      
    </div>
    <Footer/>
   
    </>
   
  )
}

export default App