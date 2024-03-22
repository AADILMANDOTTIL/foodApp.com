import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import '../PlaceHolder/PlaceHolder.css'


function PlaceHolder() {
  const {getTotalAmount,discount,discountValue}=useContext(StoreContext)
  return (
    <>
      <div className='w-[100%] '>


        <form className='md:flex md:items-start md:justify-between  mt-[60px] mb-[30px] gap-[50px]'>
          <div className='w-[100%] md:max-w-[30%] left-part'>
            <p className='text-[30px] font-[600] mb-[50px]'>Delivery Information</p>
            <div className='multi-field'>
              <input type="text" placeholder='First Name' required />
              <input type="text" placeholder='Last Nane' required />
            </div>
            <input type="text" placeholder='Email address' required />
            <input type="text" placeholder='Street' required />
            <div className='multi-field'>
              <input type="text" placeholder='City' required />
              <input type="text" placeholder='State' required />
            </div>
            <div className='multi-field'>
              <input type="text" placeholder='ZipCode' required />
              <input type="text" placeholder='Country' required />
            </div>
            <input type="text" placeholder='Phone' />
          </div>



          <div className='right-part'>
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
                    <b>${getTotalAmount() + 5}</b>
                  </div>

                }


              </div>
              <button onClick={() => navigate('/order')} className='border-none text-white bg-black w-[200px] text-[13px] p-3 mb-6 mt-4 cursor-pointer rounded'>PROCEED TO PAYMENT</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default PlaceHolder
