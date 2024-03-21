import React from 'react'
import { assets } from '../../assets/assets'

function Footer() {
    return (
        <>
            <div className='bg-[#323232]' id='contact '>
                <div className='w-full  flex flex-col justify-center items-start space-y-5 p-5 md:flex md:flex-row md:justify-evenly   '>

                    <div className='space-y-5 md:w-[40%] '>
                        <img className='rounded' src={assets.logo} alt="" />
                        <p className='text-white '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, magni nulla architecto nostrum impedit praesentium unde consequuntur voluptate voluptatum vel repellendus fugit alias. Quisquam culpa facilis ipsam eius dolore deleniti?</p>
                        <div className='flex space-x-5'>
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                        </div>
                    </div>

                    <div className='space-y-5'>
                        <h1 className='text-[20px] text-white'>COMPANY</h1>
                        <ul className='text-white'>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>

                    </div>

                    <div className='text-white '>
                        <h1 className='text-[20px] mb-5'>GET IN TOUCH</h1>
                        <h1>+91 9645284458</h1>
                        <h1>foodapp@gmail.com</h1>
                    </div>


                </div>


              <h1 className='text-white text-center p-5 opacity-40'>Copyright @{new Date().getFullYear()} foodapp - All Right Reserved</h1>


            </div>


        </>
    )
}

export default Footer