import React from 'react'
import {kitchenData} from '../data/kitchen'

const Kitchen = () => {
    const firstFiceImages = kitchenData.slice(0,5)
  return (
    <div>
        <h2>Kitchen</h2>
        <div className='proSection'>
        {
            firstFiceImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} alt="" />
                    </div>
                )
            })
        }
      
    </div>
      
    </div>
  )
}

export default Kitchen
