import React from 'react';
import '../styles/AboutUs.css';
import aboutImage from '../images/aboutus.jpg'; // Update the image path as necessary

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-header">
        <img src={aboutImage} alt="About Orion" className="about-image" />
      </div>
      <div className="about-content">
        <h1 className="about-title">About Orion</h1>
        <p className="about-description">
          Orion is a leading company dedicated to revolutionizing the tech industry. 
          Our mission is to empower individuals and businesses by providing cutting-edge 
          solutions and innovative services. We strive to create value and foster growth 
          through our commitment to excellence and customer satisfaction.
        </p>
        <p className="about-details">
          Our team of experts is passionate about delivering top-notch technology and 
          support, ensuring that our clients stay ahead in an ever-evolving digital world. 
          Join us on our journey to make a difference and shape the future of technology.
        </p>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Orion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
