import React from 'react'
import { urlFor } from '@/lib/client'

const Product = ({ product: {name, image, price, details}}) => {
  return (
    <div className='product-container'>
        <div>
            <p className='item-name'> {name} </p>
            <img src={urlFor(image)} width={200} height={200} className='product-image'/>
        </div>
        <div className='item-desc'>
            <p> {details} </p>
        </div>
        <div>

        </div>
    </div>

  )
}

export default Product