import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import '../LoginPage/LoginPage.css'

function LoginPage({setShowLogin}) {
    const [CurState,setCurState]=useState("Login")
    
  return (
    <>
    <div className='absolute z-[10] w-[100%] h-[100%] bg-[#00000090] grid'>
        <form className='login-popup-container'>
            <div className='flex justify-between items-center text-black text-2xl font-[500]'>
                <h1>{CurState}</h1>
                <img className='cursor-pointer w-[16px]' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" srcset="" />
            </div>
            <div className='flex flex-col gap-[20px] '>
                {CurState==="Login"?<></>:<input className='outline-none border-2 p-2 rounded' type="text" placeholder='Your name' required />}
                
                <input className='outline-none border-2 p-2 rounded' type="text" placeholder='Your email' required />
                <input className='outline-none border-2 p-2 rounded' type="password" placeholder='Password'required />
            </div>
            <button className='bg-[#3a2112] p-2 text-white rounded'>{CurState==="Sign up"?"Create Account":"Login"}</button>
            <div className='flex gap-2 items-start justify-center '>
                <input className='mt-[5px]' type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {CurState==="Login"?<p>Create a new Account? <span className='cursor-pointer text-[#3a2112] font-[500]' onClick={()=>setCurState("Sign up")}>Click here</span></p>:
             <p>Already have an Account? <span className='cursor-pointer text-[#3a2112] font-[500]' onClick={()=>setCurState("Login")}>Login</span></p>}
            
           
        </form>
    </div>
    </>
  )
}

export default LoginPage