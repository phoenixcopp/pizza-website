import React from 'react';
import { client } from '@/lib/client';
import { Menu } from '../components/';

const menu = ({menu}) => {
  return (
    <div className='menu-container'>
      {menu?.map((item) => <Menu key = {menu._id} item={item}/>)}
    </div>
  )
}

export  const getServerSideProps = async () => {

  const menuQuery = '*[_type == "menu"]';
  const menu = await client.fetch(menuQuery);

  console.log(menu);

  return {
    props: {menu}
  }
}

export default menu