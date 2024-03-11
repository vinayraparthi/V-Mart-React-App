import React from 'react'
import { computerData } from '../data/computers'

const Computers = () => {
    const firstFiceImages = computerData.slice(0,5)
  return (
   <>
   <h1>Computers</h1>
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

export default Computers
