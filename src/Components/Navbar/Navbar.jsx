import React, { useContext, useState } from 'react'
import '../Navbar/Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


function Navbar({setShowLogin}) {
    const [Menu,SetMenu]=useState("home")
    const {getTotalAmount}=useContext(StoreContext)
  
    
  return (
   <>
 
  
   <div className='flex justify-between items-center  p-5 fixed  w-[100%] top-0 h-[50px] z-10 bg-white '>
   <Link to='/'><img src={assets.logo} alt="" srcset="" className='w-[100px] md:w-[150px]' /></Link> 
    <ul className='hidden lg:flex cu gap-[20px] text-[#3a2112] text-[18px] cursor-pointer  '>
        <Link to='/' onClick={()=>SetMenu("home")} className={Menu==="home"?"active":""}>Home</Link>
        <a href='#Menu' onClick={()=>SetMenu("menu")} className={Menu==="menu"?"active":""}>Menu</a>
        <a href='#MobileApp' onClick={()=>SetMenu("mobile-app")} className={Menu==="mobile-app"?"active":""}>Mobile-App</a>
        <a href='#contact' onClick={()=>SetMenu("contact")} className={Menu==="contact"?"active":""}>Contact</a>
    </ul>
    <div className=' flex items-center gap-[15px] md:gap-[40px] cursor-pointer'>
        {/* <img src={assets.search_icon} alt="" srcset="" className='w-[20px]'  /> */}
        <div className='dot1'>
      <Link to='/cart'>  <img src={assets.basket_icon} alt="" srcset="" className='w-[20px]' /></Link>
     
        <div className={getTotalAmount()==0?"":"dot"}></div>
        </div>
       
        <button onClick={()=>setShowLogin(true)} className='bg-transparent ease-in duration-300 text-[#49557e] p-0 md:p-1 md:pl-5 md:pr-5 pl-5 pr-5 rounded-full border-[#3a2112] border-2 hover:bg-[#3a2112] hover:text-white'>Sign in</button>
    </div>
   </div>
   <br />
   </>
)}

export default Navbar
