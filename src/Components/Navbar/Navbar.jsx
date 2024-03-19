import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import {assets} from '../../assets/assets'

function Navbar() {
    const [Menu,SetMenu]=useState("home")
  return (
   <>
   <div className='flex justify-between items-center  p-5 fixed  w-[100%] top-0 h-[50px] z-10 bg-white '>
    <img src={assets.logo} alt="" srcset="" className='w-[100px] md:w-[150px]' />
    <ul className='hidden lg:flex cu gap-[20px] text-[#3a2112] text-[18px] cursor-pointer  '>
        <li onClick={()=>SetMenu("home")} className={Menu==="home"?"active":""}>Home</li>
        <li onClick={()=>SetMenu("menu")} className={Menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>SetMenu("mobile-app")} className={Menu==="mobile-app"?"active":""}>Mobile-App</li>
        <li onClick={()=>SetMenu("contact")} className={Menu==="contact"?"active":""}>Contact</li>
    </ul>
    <div className=' flex items-center gap-[15px] md:gap-[40px] cursor-pointer'>
        <img src={assets.search_icon} alt="" srcset="" className='w-[20px]'  />
        <div className='dot1'>
        <img src={assets.basket_icon} alt="" srcset="" className='w-[20px]' />
        <div className='dot '></div>
        </div>
       
        <button className='bg-transparent ease-in duration-300 text-[#49557e] p-0 md:p-1 md:pl-5 md:pr-5 pl-5 pr-5 rounded-full border-[#3a2112] border-2 hover:bg-[#3a2112] hover:text-white'>Sign in</button>
    </div>
   </div>
   </>
)}

export default Navbar
