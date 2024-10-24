import React, { useState, useRef } from 'react';
import "./Navbar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu.png"
import menu_close from "../../assets/close.png"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setShowMenu(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setShowMenu(false);
  };

  const handleMenuToggle = () => {
    showMenu ? closeMenu() : openMenu();
  };

  return (
    <div className="navbar">
      <div className="logo">My Portfolio</div>
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open"/>
    
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
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