import React, { useState } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItems from '../FoodItems/FoodItems'
import '../FoodDisplay/FoodDisplay.css'
import { CiSearch } from "react-icons/ci";

function FoodDisplay({ category }) {
    const { filterValue ,onchange} = useContext(StoreContext)
    const [visible, setVisible] = useState(12)

    const ShowMore = () => {
       setVisible((prev)=>prev+prev)

    }
    return (
        <>

<div className='mt-[80px] top-[30%] flex justify-center items-center '>
   <div className='absolute flex items-center rounded-full border-[1px] border-black w-[300px] md:w-[600px] h-[40px] p-5 shadow-xl '>
    <input onChange={onchange} className=' flex-1 h-[40px]  rounded-full   outline-none text-[18px] ' type="text"  />
    <CiSearch className='bg-white text-[25px] text-[#777] cursor-pointer' />

   </div>
   </div>
            <div>
                <h1 className='text-2xl mt-10 text-center'>Top dishes near you</h1>
                <div className='pt-5 food-list'>
                    {
                        filterValue.slice(0, visible).map((items, index) => {
                            if (category === 'All' || category === items.category) {
                                return <FoodItems key={index} id={items._id} name={items.name} description={items.description} price={items.price} image={items.image} />
                            }


                        })
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={ShowMore} className='mt-10 bg-black w-[330px] h-[50px] rounded text-white'>Show More</button>
                </div>

            </div>
        </>
    )
}

export default FoodDisplay
