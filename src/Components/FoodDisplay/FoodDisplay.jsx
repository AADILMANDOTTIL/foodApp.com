import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItems from '../FoodItems/FoodItems'
import '../FoodDisplay/FoodDisplay.css'

function FoodDisplay({ category }) {
    const { food_list } = useContext(StoreContext)
    return (
        <>
            <div>
                <h1 className='text-2xl'>Top dishes near you</h1>
                <div className='pt-5 food-list'>
                    {
                        food_list.map((items, index) => {
                            if (category === 'All' || category === items.category) {
                                return <FoodItems key={index} id={items._id} name={items.name} description={items.description} price={items.price} image={items.image} />
                            }


                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FoodDisplay
