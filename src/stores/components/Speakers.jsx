import React from 'react'
import {speakerData} from "../data/speaker"
const Speakers = () => {
    const firstFiceImages = speakerData.slice(0,5)
  return (
    <>
    <h2>Speakers</h2>
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

export default Speakers
