import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (Props) => {
    const [CartItems, setCartItems] = useState({})
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
        console.log(itemId);
        const prev=[...food_list]
        prev.splice(itemId, 1)
        console.log(prev);
        setCartItems(prev)
    }
    // useEffect(()=>{

    // },[CartItems])




    const contextValue = {
        food_list,
        CartItems,
        setCartItems,
        Degrement,
        Ingrement,
        remove

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {Props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider