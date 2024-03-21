import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (Props) => {
    const [CartItems, setCartItems] = useState({})
    console.log(CartItems);
    const Ingrement = (itemId) => {
        if (!CartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const Degrement = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }


    const remove = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] = 0 }))
    }
  
const getTotalAmount=()=>{
    let totalAmount=0
    for(const item in CartItems){
        if(CartItems[item]>0){
            let itemInfo=food_list.find((product)=>product._id===item)
            totalAmount +=itemInfo.price*CartItems[item]
        }
    }
    return totalAmount
}


    const contextValue = {
        food_list,
        CartItems,
        setCartItems,
        Degrement,
        Ingrement,
        remove,
        getTotalAmount

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {Props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider