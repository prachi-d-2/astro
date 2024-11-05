// src/components/Introduction.js
import React from 'react';
import './Introduction.css'; // Create a CSS file for specific styles

const Introduction = () => {
  return (
    <div className="introduction">
      <h1>Welcome to Zodiac Connect</h1>
      <p>Discover love through the stars. Connect with people who share your zodiac sign and explore compatibility!</p>
      <button className="get-started">Get Started</button>
    </div>
  );
};

export default Introduction;
