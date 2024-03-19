import React from 'react'
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
  <>
  <div className='p-5 w-full  flex flex-col justify-center items-center space-y-5 '>
    <h1 className='text-3xl text-center'>For Better Experience Download Food App</h1>
   
    <div className='flex gap-5 justify-center animate-pulse '>
        <img className='w-[30%] h-[20%]' src={assets.play_store} alt="" />
        <img className='w-[30%] h-[20%]' src={assets.app_store} alt="" srcset="" />
    </div>
  </div>
  </>
  )
}

export default AppDownload