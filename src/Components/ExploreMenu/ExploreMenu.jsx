import React from 'react'
import { menu_list } from '../../assets/assets'
import '../ExploreMenu/ExploreMenu.css'



function ExploreMenu({category,setCategory}) {
  
    return (

        <>
            <div className='explore-menu space-y-5 ' id='Menu'>
                <h1 className='text-2xl'>Explore our menu</h1>
                <p className='opacity-55 text-balance line-clamp-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores est vitae iure deserunt suscipit illum nostrum quod necessitatibus minima repellendus,</p>
                <div className='explore-menu-list overflow-x-scroll  flex justify-between items-center gap-[20px] text-center '>
                   
                        {
                            menu_list.map((item, index) => {
                                return (
                                   
                                    <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='explore-menu-items space-y-2'>
                                        <img className='w-[7.5vw] rounded-3xl min-w-[80px] ease-in'id={category===item.menu_name?"active":""}  src={item.menu_image} alt="" srcset="" />
                                        <p className='mt-[10px] text-[#747474] font-semibold cursor-pointer' >{item.menu_name}</p>
                                        
                                    </div>

                              
                                )
                              
                            })
                            
                        }
                   
                </div>

            </div>
            <hr className='h-[2px]  m-[20px] bg-[#e2e2e2]' />
        </>
    )
}

export default ExploreMenu
