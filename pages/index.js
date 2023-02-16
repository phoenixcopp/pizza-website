import { HeroBanner} from '@/components'
import React from 'react'
import { client } from '@/lib/client'
import { Carousel } from '@/components/Carousel'

const Home = ({heroBanner}) => {
  return (
    <div className='homepage-container'>
      <HeroBanner bannerData={heroBanner[0]}/>
      
      <Carousel/>  
   

    </div>
  )
}

export  const getServerSideProps = async () => {

  const heroBannerQuery = '*[_type == "herobanner"]';
  const heroBanner = await client.fetch(heroBannerQuery);

  console.log(heroBanner[0]);

  return {
    props: {heroBanner}
  }
}

export default Home