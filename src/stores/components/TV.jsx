import React from 'react'
import {tvData} from '../data/tv'
const TV = () => {
    const firstFiceImages = tvData.slice(0,5)
  return (
    <>
    <h2>TV</h2>
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

export default TV
