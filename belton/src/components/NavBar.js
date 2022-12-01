import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Tada from 'react-reveal/Tada';
import { FaBars,FaTimes} from 'react-icons/fa';
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo"><Tada>
            <img src="https://assets.zyrosite.com/belton8hv41/Group-ARqGMD2MZKiwPg48.svg" alt="letters"></img></Tada>
          
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
         <div className='nav-icon'
          onClick={handleClick}
          >{click ? <FaTimes/> : <FaBars/>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
//<div className="nav-icon" onClick={handleClick}>
  //          <i className={click ? "<FaBars />" : "<FaBars />"}></i>