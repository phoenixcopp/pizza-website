import React from 'react'
import { urlFor } from '@/lib/client'


const Menu = ({item : {name, image, theme}, pizzas, drinks, sides}) => {

  console.log(drinks);

  let items = [];


  if (name.toLowerCase() == pizzas[0]._type) {
    pizzas.forEach(pizza => items.push([pizza.name, pizza.menuDesc, pizza.price]));
  } else if (name.toLowerCase() == drinks[0]._type) {
    drinks.forEach(drink => items.push([drink.name, drink.menuDesc, drink.price]));
  } else if (name.toLowerCase() == sides[0]._type) {
    sides.forEach(side => items.push([side.name, side.menuDesc, side.price]));
  }


 
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
              {items.map(item => (
                  <div key={item} className='menu-item'>
                    <p className='item-name'>{item[0]} ${item[2]}</p>
                    <p className='item-desc'>{item[1]}</p>
                  </div>
              ))}
            </div>
        </div> 
    </div>
  )
}


export default Menu