import React,{useState} from "react";
import './styles/About.css';
import { NavLink } from "react-router-dom";
import { Fade } from 'react-reveal';
export const About = () => {

  const [clicker, setClicker] = useState(false);
  const handleClicker = () => setClicker(!clicker);

  return (
    <>
    <Fade left>
     <p className='about-container'>Here's our story</p></Fade>
    
     <div className='about-content'>
     <Fade down>
      <p className='about-text'>We started out at our home kitchen, whipping up finger-foods for our friends’ weddings and nieces’ birthdays. Everyone loved our food and our innovative combinations of flavors.</p>
      <p  className='about-text'>So, what started out as a family operated business quickly grew into a fully-fledged small business that we operate out of our professional catering kitchen in Lisle. The team has also grown to 6 people; we can cater at events as large as 1,000 people.</p>
      </Fade>
     </div>
     <Fade left>
     <img className='about-pic' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=1504,fit=crop/belton8hv41/jonny-caspari-unsplash-Y4a7xM45o3Ik3zxn.jpg" alt="buns"></img>
     </Fade>
     <Fade right>
     <img className='about-pic1' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=1504,fit=crop/belton8hv41/christine-siracusa-unsplash-YZ4exO2X2nUq7r4v.jpg" alt="buns"></img>
     </Fade>
     <div className='container6'>
      <Fade up>
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
