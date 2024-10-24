import React, { useState } from 'react';
import "./Navbar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaTimes, FaBars } from 'react-icons/fa'; // Importing the icons

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="logo">My Portfolio</div>
      <div className="hamburger" onClick={handleMenuToggle}>
        <div className="hamburger-icon">
          {showMenu ? (
            <FaTimes size={30} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
      <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
        <li><AnchorLink className="anchor-link" offset={50} href='#home' onClick={handleMenuToggle}><p>Home</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href='#about' onClick={handleMenuToggle}><p>About</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href='#project' onClick={handleMenuToggle}><p>Projects</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href='#work' onClick={handleMenuToggle}><p>Work Experience</p></AnchorLink></li>
        <li><AnchorLink className="anchor-link" offset={50} href='#contact' onClick={handleMenuToggle}><p>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar;