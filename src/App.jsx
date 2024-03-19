import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceHolder from './pages/PlaceHolder/PlaceHolder'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
    <Navbar/>
     <div className='app'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceHolder/>}/> 
      </Routes>
    </div>
    <Footer/>
    </>
   
  )
}

export default App