import React from 'react'
import { client } from '@/lib/client'
import { urlFor } from '@/lib/client'

const about = ({aboutData}) => {
  return (
    <div className='about-container'>
      <div className='about-left'>
          <img src={urlFor(aboutData[0].image)} className='about-image'></img>
      </div>
      <div className='about-right'>
          <h1> {aboutData[0].title}</h1>
          <p> {aboutData[0].description}</p>
      </div>
    </div>
  )
}

export  const getServerSideProps = async () => {

  const aboutQuery = '*[_type == "about"]';
  const aboutData = await client.fetch(aboutQuery);



  return {
    props: {aboutData}
  }
}

export default about