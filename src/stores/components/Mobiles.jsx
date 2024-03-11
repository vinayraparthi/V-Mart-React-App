import React from 'react'
import { mobileData } from '../data/mobiles'

const Mobiles = () => {

  const firstFiceImages = mobileData.slice(0,5)
  return (
    <>
    <h2>Mobiles</h2>
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

export default Mobiles
