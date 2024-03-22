import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (Props) => {
    const [CartItems, setCartItems] = useState({})
    const [Promo, setPromo] = useState("")
    const [data, setData] = useState("")
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
            let itemInfo=food_list.find((product)=>product._id===item);
            totalAmount +=itemInfo.price*CartItems[item]
          
           

        }
       

    }
    return totalAmount
}

const discountValue=()=>{
let discountValue=0
if(data==='ADL10'){
    discountValue=-10
}
return discountValue
}

const discount = () => {
    let value = 0
    if (data === "ADL10") {
      value = getTotalAmount() - 10
    }
    return value
  }

    const contextValue = {
        food_list,
        CartItems,
        setCartItems,
        Degrement,
        Ingrement,
        remove,
        getTotalAmount,
        setData,
        setPromo,
        Promo,
        discount,
        discountValue
        

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {Props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider