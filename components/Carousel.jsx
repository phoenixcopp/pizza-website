import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from '@/lib/client';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export const Carousel = ({carousel}) => {
  console.log(carousel);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {carousel?.map((image) => 
        <SwiperSlide key= {carousel._id} image={image} className='slide'>
          <img src={urlFor(image.image)} className='slide-image'></img>
        </SwiperSlide>)}

      </Swiper>
    </>
  );
}





