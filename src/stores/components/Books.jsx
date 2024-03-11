import React from 'react'

import {booksData} from '../data/books'

const Books = () => {
    const firstFiceImages = booksData.slice(0,5)
  return (
    <>
    <h2>Books</h2>
    <div className='proSection'>
        {
            firstFiceImages.map((item)=>{
                return(
                    <div className='imagBox'>
                        <img className='proImage' src={item.image} alt="" />
                    </div>
                )
            })
        }
      
    </div>
    </>
  )
}

export default Books
