// src/components/FeaturedArticles.js
import React from 'react';
import './FeaturedArticles.css';

const FeaturedArticles = () => {
  const articles = [
    { title: 'Understanding Zodiac Compatibility', excerpt: 'Learn how zodiac signs influence relationships.' },
    { title: 'The Art of Astrology Dating', excerpt: 'Tips and tricks for finding love through astrology.' },
    { title: 'Best Practices for Online Dating', excerpt: 'How to navigate the online dating world.' },
    // Add more articles as needed
  ];

  return (
    <div className="featured-articles">
      {articles.map((article, index) => (
        <div className="featured-article" key={index}>
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedArticles;
