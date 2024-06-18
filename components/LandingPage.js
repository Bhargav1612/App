import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';
import videoFile from '../images/space.mp4';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="landing-page">
      <video autoPlay muted loop className="background-video">
        <source src={videoFile} type="video/mp4" />
      </video>
      <div className="overlay">
        <h1 className="company-name">Welcome to Orion</h1>
        <p className="company-description">Empower Your Future with Orion</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;


