import React from 'react'
import { urlFor } from '@/lib/client'


const Menu = ({item : {name, image, theme}}) => {
  
  return (
    <div className='item-type-container'>
        <div className='container-left'>
            <div className='item-type-banner'>
                <p>{name}</p>
            </div>
            <img src={urlFor(image)} className="menu-image"></img>
        </div>  
        <div className='container-right' id={theme}>
            <div className='item-container' > 
                
            </div>
        </div> 
    </div>
  )
}


export default Menu