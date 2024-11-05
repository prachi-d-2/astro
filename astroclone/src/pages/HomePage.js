// src/pages/HomePage.js
import React from 'react';
import FeaturedArticles from '../components/FeaturedArticles';
import Introduction from '../components/Introduction';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="intro-container">
        <Introduction />
      </div>
      <div className="featured-articles-container">
        <FeaturedArticles />
      </div>
    </div>
  );
};

export default HomePage;
