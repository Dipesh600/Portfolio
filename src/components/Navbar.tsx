import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close menu after clicking on a link
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Portfolio</h1>
      </div>
      <ul className={`navbar-nav ${isMenuOpen ? 'show' : ''}`}>
        <li className="nav-item">
          <a href="#hero" onClick={closeMenu}>Home</a>
        </li>
        <li className="nav-item">
          <a href="#about" onClick={closeMenu}>About</a>
        </li>
        <li className="nav-item">
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>
        <li className="nav-item">
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>
      </ul>
      <button className="navbar-toggler" onClick={toggleMenu}>
        <div className="navbar-toggler-icon"></div>
        <div className="navbar-toggler-icon"></div>
        <div className="navbar-toggler-icon"></div>
      </button>
    </nav>
  );
};

export default Navbar;
