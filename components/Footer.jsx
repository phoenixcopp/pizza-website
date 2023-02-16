import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div  className='footer-container'>
      <div className='footer-top'>
        <div className='footer-left'>
          <p> 1234 Smith Ave, Seatlle, WA, 98000 </p>
          <p> (123) 456-7890</p>
        </div>
        <div className='footer-right'>
          <p> We're open: </p>
          <p> Monday - Saturday: 12pm - 10pm</p>
        </div>   
      </div>
      <div className='footer-bottom'>
        <p> Copyright © 2023 Phoenix&apos;s Woodfire Pizza. All rights reserved </p>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </div>
    </div>
  )
} 

export default Footer