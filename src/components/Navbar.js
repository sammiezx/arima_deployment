// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the stylesheet

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gettingstarted">Getting Started</Link></li>
        {/* <li><Link to="/tools">Tools</Link></li> */}
        <li><Link to="/career">Career</Link></li>
        {/* <li><Link to="/innovation">Innovation</Link></li> */}
        <li><Link to="/aboutus">AboutUs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
