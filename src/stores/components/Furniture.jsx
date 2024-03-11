import React from 'react'
import {furnitureData} from '../data/furniture'

const Furniture = () => {
    const firstFiceImages = furnitureData.slice(0,5)
  return (
    <>
    <h2>Furniture</h2>
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
    </>

  )
}

export default Furniture
