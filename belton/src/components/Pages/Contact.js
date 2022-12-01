import React from "react";
import './styles/Contact.css';
import { Flip,Slide,Rotate,Fade,Bounce,Zoom } from 'react-reveal';
export const Contact = () => {
  return (
    <>
      <div className='contact'>
      <div className='contact-container'>
        <Bounce top>
          <p className='contact-head'>Say Hello!</p>
          </Bounce>
          <Fade up>
          <p className='contact-text'>we're friendly bunch here at Belton.Place an inquiry and we'll get back to you the same day</p>
          </Fade>
        </div>
        <Slide bottom>
        <div className='form'>        
          <p className='form-label'>Name*</p>

          <input
            type="text"
            placeholder="Your name"
            className='form-input' />
          <p className='form-label'>Last Name*</p>
          <input
            type="text"
            placeholder="Your Last name"
            className='form-input' />
          <p className='form-label'>Your email*</p>
          <input
            type="email"
            placeholder="Your email address"
            className='form-input' />
          <p className='form-label'>Message*</p>
          <input
            type="text"
            placeholder="Type your message here"
            className='form-input' />
        </div>
        </Slide>
      </div>
      <Zoom bottom>
      <button className='contact-btn'>Send message</button>
      </Zoom>
      <Slide top>
      <img className="pic1" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2448,h=992,fit=crop/belton8hv41/flat-lay-photography-of-vegetable-salad-on-plate-YZ4exOKak8IoEw55.jpg" alt="food"></img>
      </Slide>
      <div className='container7'>
        <Fade down>
        <div className='container7-content'>
        <p className='container7-heading'>Belton Catering</p>
        <p className='container-text'>We’re a catering business serving the Greater Chicago area, and making sure your event is remembered for all the delicious food.</p>
        </div>
        <div className='container8-contact'>
          <p className='container8-heading'>Contacts</p>
          <p className='container8-text'>hello@belton.com</p>
          <p className='container8-text'>+5363-8463</p>
        </div>
        </Fade>
      </div>
    </>
  );
};
