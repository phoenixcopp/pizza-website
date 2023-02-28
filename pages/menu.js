import React from 'react';
import { client } from '@/lib/client';
import { Menu } from '../components/';

const menu = ({menu, pizzaData, drinkData, sideData}) => {


  return (
    <div className='menu-container'>
      {menu?.map((item) => <Menu key = {menu._id} item={item} pizzas={pizzaData} drinks={drinkData} sides={sideData}/>)}
    </div>
  )
}

export  const getServerSideProps = async () => {

  const menuQuery = '*[_type == "menu"]';
  const menu = await client.fetch(menuQuery);

  const pizzaQuery = '*[_type == "pizzas"]';
  const pizzaData = await client.fetch(pizzaQuery);

  const drinkQuery = '*[_type == "drinks"]';
  const drinkData = await client.fetch(drinkQuery);

  const sideQuery = '*[_type == "sides"]';
  const sideData = await client.fetch(sideQuery);

  return {
    props: {menu, pizzaData, drinkData, sideData}
  }
}

export default menu