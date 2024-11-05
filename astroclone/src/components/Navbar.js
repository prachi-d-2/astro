// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/horoscope">Horoscope</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/forum">Forum</Link>
      <Link to="/login">Login</Link> {/* This should point to the LoginPage */}
    </nav>
  );
};

export default Navbar;
