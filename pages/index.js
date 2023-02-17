import { HeroBanner} from '@/components'
import React from 'react'
import { client } from '@/lib/client'
import { Carousel } from '@/components/Carousel'

const Home = ({heroBanner, carouselData}) => {
  return (
    <div className='homepage-container'>
      <HeroBanner bannerData={heroBanner[0]}/>
      
      <Carousel carousel={carouselData}/>  
   

    </div>
  )
}

export  const getServerSideProps = async () => {

  const heroBannerQuery = '*[_type == "herobanner"]';
  const heroBanner = await client.fetch(heroBannerQuery);

  const carouselQuery = '*[_type == "carousel"] | order(name asc)';
  const carouselData = await client.fetch(carouselQuery);


  return {
    props: {heroBanner, carouselData}
  }
}

export default Home