import React,{useState} from "react";
import './styles/Services.css';
import { Flip,Slide,Rotate,Fade } from 'react-reveal';
import { NavLink } from "react-router-dom";
export const Services = () => {
  const [clicker, setClicker] = useState(false);
  const handleClicker = () => setClicker(!clicker);
  return (
    <>
    <Fade left>
      <p className='services-container'>We can cater to all of your needs</p>
      </Fade>
      <div className='services-content'>
        <Fade up>
        <div className='services-text'>From small, family events to grand corporate gatherings, we offer a huge variety of services here at Belton. Let us know exactly what your needs are and we will do our very best to make your event memorable.
        <p className='services-text1'>Even if you don’t see your occasion listed below, we encourage you to get in touch. We’ll be glad to provide you with a custom quote.</p></div>
        <div className='services-list'>Services
        <ul className='list-text'>
          <li className='list'>— Birthdays;</li>
          <li className='list'>— Anniversaries;</li>
          <li className='list'>— Christenings;</li>
          <li className='list'>— Weddings;</li>
        </ul>
        </div>
        <div className='services-list1'>Extra Services
        <ul className='list-text1'>
          <li className='list'>— Plate and glass rental;</li>
          <li className='list'>— Table decor;</li>
          <li className='list'>— Allergy-friendly menus;</li>
          <li className='list'>— Dessert table</li>
        </ul>
        </div>
        </Fade>
      </div>
      <Slide left>
      <img className='services-pic' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=1079,fit=crop/belton8hv41/ronise-daluz-unsplash-YN8wPlQn2JiqJ2a5.jpg" alt="buns"></img>
      </Slide>
      <Slide right>
     <img className='services-pic1' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=1079,fit=crop/belton8hv41/brooke-lark-unsplash-mkEkqQg2l0FxRKPv.jpg" alt="buns"></img>
     </Slide>
     <div className='container6-2'>
      <Fade down>
        <p>First, we eat. Then we do everything else. Let us take care of food at your special event.</p>
        <NavLink
            exact
            to="/Contact"
            activeClassName="active"
            className="nav-links"
            onClick={handleClicker}
          >
            <button className='container6-btn'>Get in touch</button>
          </NavLink>
          </Fade>
      </div>
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
