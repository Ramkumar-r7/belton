import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './styles/Home.css';
import { Flip,Slide,Rotate,Fade } from 'react-reveal';
export const Home = () => {

  const [clicker, setClicker] = useState(false);
  const handleClicker = () => setClicker(!clicker);

  return (
    <>

      <section className='heading-text'><Fade left>
        <p className='heading'>Bring people together with a great food</p>
        <div className="btn-center">
          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            className="nav-links"
            onClick={handleClicker}
          >
            <button className='heading-btn'>Let's talk</button>
          </NavLink>
        </div>
      </Fade>
      </section>

      <section className='container'><Fade up>
        <img className="pic1" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2448,h=1248,fit=crop/belton8hv41/people-around-a-table-with-food-mvoq2nk0xouDvolQ.jpg" alt="food"></img></Fade>
        <div className='container2'><Fade up>
          <img className='pic2' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=1376,fit=crop/belton8hv41/img-mjWRq1QRJatKaoK1.jpg" alt="food"></img>

          <div className='container2-text'>
            <p className="container2-heading">Delicious food creates memories</p>
            <p className='container2-content'>Belton is food studio that not just caters out deliciousness, but lives by the philosophy that nothing brings people together like good food. Whatever the occasion that you need our food for, whatever dietary requirements, we will make it happen.</p>
            <NavLink
              exact
              to="/About"
              activeClassName="active"
              className="nav-links"
              onClick={handleClicker}
            >
              <button className='container2-btn'>Our story</button>
            </NavLink>

          </div>
        </Fade>

        </div>

      </section>
      <section className='container3'><Flip top>
        <p className='container3-head'>Our offers for your occasion or event</p></Flip>
        <div className='container3-card'>
          <div className='card1'><Fade left>
            <p className='card1-head'>Mini pizzas</p>
            <p className="card1-content">Delectable and bite-sized, mini pizzas are a favorite of all age groups.</p>
            <p className='card1-head'>Homemade French Fries</p>
            <p className="card1-content">Surprise your guests with the best gourmet french fries they’ve ever tasted.</p>
            <p className='card1-head'>Stuffed Mushrooms</p>
            <p className="card1-content">A kitchen classic,this is the perfect choice if you've vegans in your party</p></Fade>
          </div>
          <div className='card1'><Fade right>
            <p className='card2-head'>Smoked Trout Empanadas</p>
            <p className="card2-content">Every empanadas is filled made,and cooked by hand</p>
            <p className='card2-head'>Mini Lamb Burger</p>
            <p className="card2-content">Although the flavors are slightly unusual,guests always go for seconds</p>
            <p className='card2-head'>Duck Confit quesadillas</p>
            <p className="card2-content">Sophistication and flavor come together in this perfectly cheesy quesadilla.</p>
          </Fade>
          </div>
        </div>
        <Fade up>
          <img className='pic3' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2448,h=992,fit=crop/belton8hv41/sliced-avocado-fruit-and-green-vegetable-on-white-chopping-dO2Q8OOvQXs8rJNo.jpg' alt="vegetables"></img></Fade>


        <div className='container4'><Fade down>
          <div className='container4-text'>
            <p className="container4-heading">our services</p>
            <p className='container4-content'>Here at Belton, we pride ourselves from never turning down a client. That means whatever your occasion is, no matter how many guests you’re trying to feed, and no matter how restricted your diet, we will be happy to serve you delicious food. </p>
            <NavLink
              exact
              to="/Services"
              activeClassName="active"
              className="nav-links"
              onClick={handleClicker}
            >
              <button className='container4-btn'>See all services</button>
            </NavLink>
          </div>
          <img className='pic4' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=987,fit=crop/belton8hv41/nathalie-jolie-unsplash-mjWRq1rKNNHKXVZK.jpg" alt="food"></img></Fade>
        </div>
      </section>
      <section>
        <div className='container5'>
          <Slide left>
          <img className='pic5' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1283,fit=crop/belton8hv41/image-YN8wPa19X3c8kZJq.jpg" alt="person"></img>
          </Slide>

          <div className='container5-text'>
            <Rotate top right>
            <p className='container5-content'>Belton went above and beyond when catering our wedding at a highly unusual location. They were meticulous in every stage: the planning, the preparation, and the execution. Our guests couldn’t stop raving about all the delicious hors-d’oeuvres..</p>
            <p className="container5-heading">Heather C</p>
            </Rotate>
          </div>
        </div>
        <div className='container5'>
          <Slide right>
          <img className='pic5' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1283,fit=crop/belton8hv41/image-mxkJM6LlPKSV6JV2.jpg" alt="person"></img>
          </Slide>

          <div className='container5-text'>
            <Rotate top left>
            <p className='container5-content'>My grandmother’s 90th birthday party was made special by Belton – thank you ever so much. The team took into consideration all of our food allergy requirements and ensured that no detail was overlooked. Delicious food that I highly recommend!</p>
            <p className="container5-heading">Nathalie G.</p></Rotate>
          </div>
        </div>
      </section>
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
      <div className='container7'><Fade down>
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
