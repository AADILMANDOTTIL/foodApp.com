import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import '../FoodItems/FoodItems.css'

function FoodItems({ id, name, description, price, image }) {
    const { CartItems, Ingrement, Degrement } = useContext(StoreContext)
   
    return (
        <>
            <div className=' w-[100%] shadow-lg read'>
                <div className='relative'>
                    <img className='rounded-t-lg' src={image} alt="" srcset="" />
                    {
                        !CartItems[id] ?
                         <img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded' onClick={() => Ingrement(id)} src={assets.add_icon_white} alt="" srcset="" /> :
                            <div className='absolute bottom-[15px] right-[15px] flex gap-[10px] p-[4px] rounded-full bg-white items-center'>
                                <img className='w-[30px] cursor-pointer' onClick={() => Degrement(id)} src={assets.remove_icon_red} alt="" srcset="" />
                                <p>{CartItems[id]}</p>
                                <img className='w-[30px] cursor-pointer' onClick={() => Ingrement(id)} src={assets.add_icon_green} alt="" srcset="" />
                            </div>
                    }
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
