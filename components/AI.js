// src/components/AI.js
import React from 'react';
import '../styles/AI.css';
import aiimage from '../images/ai.jpg'

const AI = () => {
  return (
    <div className="ai-page">
      <div className="ai-header">
        <img 
          src={aiimage}
          alt="AI Technologies" 
          className="ai-header-image"
        />
      </div>
      <div className="ai-content">
        <h1 className="ai-title">Explore AI Technologies</h1>
        <p className="ai-description">
          Discover the latest in AI technology and the growing job opportunities in this field.
        </p>
        <div className="ai-tech">
          <div className="ai-tech-item">
            <h2 className="tech-title">Machine Learning</h2>
            <p className="tech-description">
              Machine Learning continues to be a key area with abundant job opportunities, helping businesses make data-driven decisions.
            </p>
          </div>
          <div className="ai-tech-item">
            <h2 className="tech-title">Natural Language Processing (NLP)</h2>
            <p className="tech-description">
              NLP technology is revolutionizing how machines understand and interact with human language, opening up numerous job roles.
            </p>
          </div>
          <div className="ai-tech-item">
            <h2 className="tech-title">Computer Vision</h2>
            <p className="tech-description">
              Computer Vision enables machines to interpret and understand the visual world, creating vast opportunities in tech.
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Orion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AI;


