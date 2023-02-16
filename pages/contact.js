
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const contact  = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_14fag48', 'template_nndvu3s', form.current, 'mlrvckLNPJTxqmfnB')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-container'>
        <h1> Contact Us </h1>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className='info-fields'>
            <div className='info-fields1'>
              <div className="inputs">
                  <input type="text" name="first_name" placeholder='First name'/>
              </div>
            
              <div className="inputs">
                  <input type="email" name="user_email" placeholder='Email address'/>
              </div>
            </div>
              
            <div className='info-fields2'>
              <div className="inputs">
                  <input type="text" name="last_name" placeholder='Last name'/>
              </div>
              <div className="inputs">
                  <input type="text" name="number" placeholder='Phone number'/>
              </div>
            </div>
          </div>
          
          

          <textarea name="message"  placeholder='Message' id='msg'/>  
          <div className='sub-btn'>
            <input id="send" type="submit" value="Send" /> 
          </div>
          
        </form>   
    </div>
    
  );
}

export default contact;