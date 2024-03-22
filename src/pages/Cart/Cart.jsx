import React, { useState } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import '../Cart/Cart.css'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

function Cart() {
  const { CartItems, food_list, Degrement, Ingrement, remove, getTotalAmount ,setData,setPromo,Promo,discount,discountValue} = useContext(StoreContext)




  const navigate = useNavigate()


  return (
    <>
      {getTotalAmount() === 0 ? <div className='w-[100%] h-[60vh] flex justify-center items-center'><h1 className='text-4xl animate-bounce md:text-5xl'>You Cart is Empty</h1></div> :
        <div className='mt-[100px]'>
          <div>
            <div className='cart-items-title  '>
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (CartItems[item._id] > 0) {
                return (
                  <div className='cart-items-title mt-4'>
                    <img className='w-[50px] md:w-[80px]' src={item.image} alt="" srcset="" />
                    <p className=''>{item.name}</p>
                    <p>${item.price}</p>
                    <div className='flex justify-center items-center  border-2 w-[60px] h-[30px]  '>
                      <button onClick={() => Degrement(item._id)} className='text-black p-3 text-[25px]'>-</button>
                      <p >{CartItems[item._id]}</p>
                      <button onClick={() => Ingrement(item._id)} className='p-3  text-black text-[15px]'>+</button>
                    </div>

                    <p>${item.price * CartItems[item._id]}</p>
                    <button onClick={() => remove(item._id)} className='bg-red-700 p-2 text-white rounded'>Remove</button>

                  </div>
                )
              }
            })

            }
          </div>

          <div className='mt-[80px] md:flex md:flex-row-reverse flex flex-col-reverse   justify-between gap-10 ' >
            <div className='flex-1 flex flex-col gap-[20px]'>
              <h1 className='text-2xl font-medium'>Cart Totals</h1>
              <div className='space-y-3'>
                <div className='flex justify-between '>
                  <p>Subtotal</p>
                  <p>${getTotalAmount()}</p>
                </div>
                <hr />
                {discount ? <div className='flex justify-between '>
                  <p>Discount</p>
                  <p>{discountValue()}</p>
                </div> : <></>}


                <div className='flex justify-between'>
                  <p>Delivery fee</p>
                  <p>${getTotalAmount() === 0 ? 0 : 5}</p>
                </div>
                <hr />
                {discount() ? <div className='flex justify-between '>
                  <b>Total</b>
                  <b>${discount() + 5}</b>
                </div>
                  :
                  <div className='flex justify-between '>
                    <b>Total</b>
                    <b>${getTotalAmount()===0?0:getTotalAmount()+5}</b>
                  </div>

                }


              </div>
              <button onClick={() => navigate('/order')} className='border-none text-white bg-black w-[170px] text-[13px] p-3 mb-6 mt-4 cursor-pointer rounded'>PROCEED TO CHECKOUT</button>
            </div>
            <div className='flex-1 '>
              <div>
                <p>If you have a promo code, Enter it here</p>
                <div className='mt-[10px] flex justify-between items-center border-2 rounded pl-2 outline-none'>
                  <input onChange={(e) => { setPromo(e.target.value) }} className='outline-none' type="text" placeholder='promo code' value={Promo} />
                  <button onClick={() => { setData(Promo), setPromo("") }} className='w-[150px] bg-black text-white h-[50px] rounded-r-sm '>Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      }






    </>
  )
}

export default Cart
