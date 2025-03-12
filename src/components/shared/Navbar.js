import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      {/* Logo (Left Side) */}
      <div className="navbar-logo">
        <Link to="/"><img src="/logo.png" alt="HQL"/></Link>
      </div>

      {/* Navigation Links (Right Side) */}
      <div className="navbar-links">
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

    </nav>
  );
};

export default Navbar;
