import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

   const closeNavbar = () => {
    setIsOpen(false);
  };
  
  React.useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';
}, [isOpen]);
    
  return (
 
      <nav className="navbar">
        <div className="brand">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="menu-icon" id="menu-icon" onClick={toggleNavbar}>
          &#9776;
        </div> 
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeNavbar}>Home</Link></li>
        <li><Link to="/services" onClick={closeNavbar}>Services</Link></li>
        <li><Link to="/about" onClick={closeNavbar}>About</Link></li>
        <li><Link to="/contact" onClick={closeNavbar}>Contact</Link></li>
        <li><Link to="/careers" onClick={closeNavbar}>Careers</Link></li>
      </ul>
      </nav>

  );
};

export default Navbar;
