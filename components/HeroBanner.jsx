import React from 'react'
import Link from 'next/link';
import { urlFor } from '@/lib/client';

const HeroBanner = ({bannerData: {title, image, buttonText}}) => {
  

  return (
    <div className='hero-banner-container'>
          
        <img src={urlFor(image)} className='banner-image'></img>
        <div>
          <p className='hero-banner-title'>{title}</p>
          <Link href={'/order'}>
            <button type='button' className='hero-banner-button'>{buttonText}</button>
          </Link>

        </div>
        
    </div>
  )
}

export default HeroBanner;