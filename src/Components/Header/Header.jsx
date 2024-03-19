import React from 'react'
import '../Header/Header.css'

function Header() {
  return (
   <>
   <div  className='header mt-16 z-0 '>
    <div className='header-contents'>
        <h1 className='text-xs leading-6 md:leading-none '> Order Your favourite food here</h1>
        <p className='hidden md:block text-white text-[1vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eius ab exercitationem aliquid, numquam quisquam voluptatem. Similique quos commodi tempore autem minus id dolorem, obcaecati maiores quis, cum, modi ratione!</p>
        <button className='bg-white text-xs  p-1 pl-4 pr-4 text-[#747474] rounded-full md:p-2 md:pl-4 md:pr-4 font-extralight'>View Menu</button>
    </div>
   </div>
   </>
  )
}

export default Header
