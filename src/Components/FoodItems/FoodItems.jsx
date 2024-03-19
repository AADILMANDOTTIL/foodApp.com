import React from 'react'
import { assets } from '../../assets/assets'

function FoodItems({id,name,description,price,image}) {
  return (
   <>
   <div className=' w-[100%] shadow-lg'>
    <div>
        <img className='rounded-t-lg' src={image} alt="" srcset="" />
    </div>
    <div className='space-y-2 p-2'>
        <div className='flex justify-between pt-7'>
            <p className='text-xl font-semibold'>{name}</p>
            <img className='h-[15px]' src={assets.rating_starts} alt="" />
        </div>
        <p className='text-[12px]  text-[#676767]'>{description}</p>
        <p className=' text-xl text-[#3a2112]'>${price}</p>
    </div>
   </div>
   </>
  )
}

export default FoodItems
