import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0, y: -20 }}  // Starts hidden and slightly above
      animate={{ opacity: 1, y: 0 }}  // Fades in and moves down
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
    >
      {/* Logo (Left Side) */}
      <div className="navbar-logo">
        <Link to="/"><img src="/logo.png" alt="HQL"/></Link>
      </div>

      {/* Navigation Links (Right Side) */}
      <div className="navbar-links">
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/mljournal">READING BLOG</Link>
        <Link to="/goals">GOALS </Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
