import React from 'react'

import {acData} from '../data/ac'

const Ac = () => {
    const firstFiceImages = acData.slice(0,5)

  return (
  <>
  <h1>AC</h1>

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

export default Ac
