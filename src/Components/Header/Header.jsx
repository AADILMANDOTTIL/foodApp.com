import React, { useContext } from 'react'
import '../Header/Header.css'
// import { CiSearch } from "react-icons/ci";
import { StoreContext } from '../../context/StoreContext';

function Header() {
  // const {onchange}=useContext(StoreContext)
  return (
   <>
     {/* <div className='mt-[70px] top-[30%] flex justify-center items-center '>
   <div className='absolute flex items-center rounded-full border-[1px] border-black w-[300px] md:w-[600px] h-[40px] p-5 shadow-xl '>
    <input onChange={onchange} className=' flex-1 h-[40px]  rounded-full   outline-none text-[18px] ' type="text"  />
    <CiSearch className='bg-white text-[25px] text-[#777]' />

   </div>
   </div> */}
   <div  className='header mt-16 z-0   'id='home'>
    <div className='header-contents'>
        <h1 className='text-xs leading-6 md:leading-none'> Order Your favourite food here</h1>
        <p className='hidden md:block text-white text-[1vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eius ab exercitationem aliquid, numquam quisquam voluptatem. Similique quos commodi tempore autem minus id dolorem, obcaecati maiores quis, cum, modi ratione!</p>
        <button className='bg-white text-xs  p-1 pl-4 pr-4 text-[#747474] rounded-full md:p-2 md:pl-4 md:pr-4 font-extralight'>View Menu</button>
    </div>
   </div>
   </>
  )
}

export default Header
